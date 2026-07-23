import dotenv from "dotenv"
import express from "express"
import mysql from "mysql2/promise"




export const user = (req, res) => {

    console.log("User creation")

    const {username, password} = req.body

    const newUsers = {...req.body}

    if(username == "mamba" && password == "complexpasscreated12" ){
        
        return res.status(200).json({message:"User created successfully", users: newUsers})

    }else{
        return  res.status(401).json({message:"invalid credentials",  users: newUsers})

    }

    
}