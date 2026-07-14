import dotenv from "dotenv";
import express from "express";

dotenv.config(); 

const app = express();
const PORT = process.env.PORT 

app.get('/', (req, res) => {
    res.send('Server is running on node');
});

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
