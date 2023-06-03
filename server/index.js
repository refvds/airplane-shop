const express = require('express');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();

const port = process.env.PORT || 4000;

// middleware for an application/json
app.use(express.json());

// middleware for application/x-www-form- urlencoded to parse a form
app.use(express.urlencoded({extended: true}));

// the PATH to images
app.use('/static', express.static(`${__dirname}/assets`));

app.use('/api/airplanes', require('./routes/airplanes'))

mongoose.connect('mongodb://127.0.0.1:27017').then(()=>{
    app.listen(port,()=>{
        console.log('server is listening');
    });
});