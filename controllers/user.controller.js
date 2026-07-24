import dotenv from "dotenv"
import express from "express"
import mysql from "mysql2/promise"
import db from '../models/db.js'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

dotenv.config();


export const User = async (req, res) => {
    const { username, password, email, first_name, last_name } = req.body;

    // Optimization: Immediate fail-fast check to save CPU cycles on hashing
    if (!username || !password || !email) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        const saltRounds = 12;
        const passwordHash = await bcrypt.hash(password, saltRounds);

        const query = 'INSERT INTO users(username, password, email, first_name, last_name) VALUES (?,?,?,?,?) ';
        
        // result holds the execution metadata from mysql2
        const [result] = await db.query(query, [username, passwordHash, email, first_name, last_name]);
        
        // Correct way to grab the newly created user's ID
        const userId = result.insertId;

        
        const token = jwt.sign(
            { userId: userId, email: email }, 
            process.env.JWT_KEY,
            { expiresIn: "1h" } 
        );

      
        return res.status(201).json({
            message: "User created successfully",
            token: token
        });

    } catch (err) {
        // Optimization: Catch duplicate username or email conflicts
        if (err === 'ER_DUP_ENTRY') {
            return res.status(409).json({ error: "Username or Email already exists" });
        }
        return res.status(500).json({ error: "Database insertion failed: " + err.message });
    }
}
