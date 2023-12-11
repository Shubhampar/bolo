const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const FormRoutes= require("./Routes/formRoutes")
const ResponseRoute= require("./Routes/ResponseRoutes")

app.use(cors())
app.use(express.json())

app.use('/form',FormRoutes)
app.use('/response',ResponseRoute)

app.use('/',(req,res)=>{
    res.send('Welcome to Bolo Forms server!!')
})

app.listen('8080',async ()=>{
    console.log('server started');
    try {
        mongoose.connect(process.env.MONGODB_URL)
        console.log('Database Connection Established')
    } catch (error) {
        console.log('error while connecting database ',error);
    }
})