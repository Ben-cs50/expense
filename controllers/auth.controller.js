import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

import dotenv from "dotenv"

dotenv.config();


export const login = (req, res) => {
    
    const {username, password} = req.body

    try{
        const user = User.findOne({email})


    }catch{

    }

    
}


