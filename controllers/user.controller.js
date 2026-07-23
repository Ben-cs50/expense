import dotenv from "dotenv"
import express from "express"
import mysql from "mysql2/promise"
import db from '../models/db.js'
import bcrypt from 'bcrypt'








export const User = async (req, res) => {

    // console.log("User validated")

    const {username, password, email, first_name, last_name} = req.body

   

    const saltRounds = 12;

    const passwordHash = await bcrypt.hash(password, saltRounds);

    // const newUser = new user({
    //     ...req.body,
    //     password: passwordHash

    // });
    // await newUser.save();

    // if(err){
    //     console.log("Error processing request: " +err)

    // }

    // res.status(200).json({message: "User with hashed password created"});



        try{
    const query = 'INSERT INTO users(username, password, email, first_name, last_name) VALUES (?,?,?,?,?) ';
    const [result] = await db.query(query, [username, passwordHash, email, first_name, last_name]);
          
            res.status(200).json({message: "User created successfully"})

        }catch(err){
            return res.status(400).json({error: "Database insertion failed " + err.message});
        }
    // );
    // res.send('Server is running on node');

    
}

