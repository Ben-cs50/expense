import dotenv from "dotenv"
import express from "express"
import mysql from "mysql2/promise"
import db from '../models/db.js'




export const user = async (req, res) => {

    // console.log("User validated")

    const {username, password} = req.body

    // const newUsers = {...req.body}

    // if(username == "mamba" && password == "complexpasscreated12" ){
        
    //     return res.status(200).json({message:"User created successfully", users: newUsers})

    // }else{
    //     return  res.status(401).json({message:"invalid credentials",  users: newUsers})

    // }

        try{
    const query = 'INSERT INTO users(username, password) VALUES (?,?) ';
    const [result] = await db.query(query, [username, password]);
          
            res.status(201).json({message: "User created successfully"})

        }catch(err){
            return res.status(500).json({error: "Database insertion failed " + err.message});
        }
    // );
    // res.send('Server is running on node');

    
}

