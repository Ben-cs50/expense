const express = require('express');

const app = express();

app.get('/', (req,res) =>{
    res.send('Server is running on node')
    
});

app.listen(3000, () =>{
    
    console.log("Server running on PORT: 3000 ")
});