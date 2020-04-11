require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
var path = require('path');

const dbReady = mongoose.connect(process.env.dbURL, 
    {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
        if(err) {
            console.log('ERROR, mongodb not connected. Check URI');
        } else {
            console.log('mongodb connected');
        }
    });

//Checking if .env dbURL is correct
console.log(process.env.dbURL);
