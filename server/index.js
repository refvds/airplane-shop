const express = require('express');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Take it');
});

mongoose.connect('mongodb://127.0.0.1:27017').then(()=>{
    app.listen(port,()=>{
        console.log('server is listening');
    });
});