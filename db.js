const mongoose = require('mongoose');
require('dotenv').config();
const mongodbURL = process.env.DB_URL;

mongoose.connect(mongodbURL);

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("Mongodb connected sucessfully :)");
})

db.on('error',()=>{
    console.log("An internal error occured :)");
})

db.on('disconnected',()=>{
    console.log("Mongodb is disconnected :(");
})