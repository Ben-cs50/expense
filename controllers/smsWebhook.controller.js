
import mysql from "mysql2/promise"
import dotenv from "dotenv"
dotenv.config();

const rawMessages = [];

// db connection
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10
});

export const receivesSmsWebhook = (req, res) => {
    console.log("Receives sms payload:", req.body);

    res.status(200).json({message:"Webhook received successfully"});
    
};
export const listRawMessages = async (req, res) => {
  // console.log(`[SMS] Listing ${rawMessages.length} raw messages`);
  // res.status(200).json(rawMessages);
   try{
    const [rows] = await pool.query('SELECT * FROM raw_messages');
          
            res.status(200).json(rows);

        }catch(err){
            return res.status(500).json({error: err.message});
        }
};