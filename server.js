import dotenv from "dotenv"
import express from "express"
import mysql from "mysql2/promise"
import smsWebhook from './routes/smsWebhook.route.js'
import transactions from './routes/transactions.route.js'
import getTransactionById from './routes/transactions.route.js'
import updateTransactionById from './routes/transactions.route.js'
import createManualTransaction from './routes/transactions.route.js'
import listUnparsedTransactions from './routes/transactions.route.js'
import listCategories from './routes/categories.route.js'
import createCategory from './routes/categories.route.js'
import createCategoryRule from './routes/categories.route.js'
import listCategoryRule from './routes/categories.route.js'



dotenv.config(); 

const app = express();
const PORT = process.env.PORT 

// db connection
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10
});

// error defination
pool.getConnection((err) => {
    if(err){
        console.error("Database connection failed: " + err.stack);
        return;
    }
    console.log("Database connected successfully")
});

app.use(express.json());

app.get('/', async (req, res) => {
    try{
    const [rows] = await pool.query('SELECT * FROM raw_messages');
          
            res.json(rows);

        }catch(err){
            return res.status(500).json({error: err.message});
        }
    // );
    // res.send('Server is running on node');
});

app.use('/api', smsWebhook);
app.use('/api', transactions);
app.use('/api', getTransactionById);
app.use('/api', updateTransactionById);
app.use('/api', createManualTransaction);
app.use('/api', listUnparsedTransactions);
app.use('/api', listCategories);
app.use('/api', createCategory);
app.use('/api', createCategoryRule);
app.use('/api', listCategoryRule);
 



const server = app.listen(PORT, () => {
    
    console.log(`Server running on PORT: ${PORT}`);

});

process.on('SIGINT', () => {
    console.log('\nShutting down gracefully...');
    
    server.close(() => {
        console.log('Server has stopped listening for connections.');
        process.exit(0);
    });
});


