require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT;

app.get('/', (req,res) =>{
    res.send('Server is running on node')
    
});

app.listen(PORT, () =>{
    
    console.log(`Server running on PORT: ${PORT} `)
});