import dotenv from "dotenv";
import express from "express";
import smsWebhook from './routes/smsWebhook.route.js'
import transactions from './routes/transactions.route.js'
import getTransactionById from './routes/transactions.route.js'

dotenv.config(); 

const app = express();
const PORT = process.env.PORT 

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running on node');
});

app.use('/api', smsWebhook);
app.use('/api', transactions);
app.use('/api', getTransactionById);
 



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
