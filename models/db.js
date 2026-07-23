import mysql from 'mysql2/promise'
import dotenv from 'dotenv'


dotenv.config(({ path: '../.env' }));

const pool = mysql.createPool ({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10
});

try{
    const connection = await pool.getConnection();

        console.log(" Database connected successful" );

        connection.release();
       

    
    
}catch(err){
     console.log("Database connection failed" + err.message)
    
}



export default pool;

