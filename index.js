const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const FormRoutes= require("./Routes/FormsRoutes")
const ResponseRoute= require("./Routes/ResponseRoute")

app.use(cors())
app.use(express.json())

app.use('/form',FormRoutes)
app.use('/response',ResponseRoute)

app.use('/',(req,res)=>{
    // res.setHeader("Content-type", "text/html")
    res.send("<h1>Welcome to Bolo Forms Backend</h1>")
})

app.listen('8080',async ()=>{
    console.log('Server Connected');
    try {
        mongoose.connect(process.env.MONGODB_URL)
        console.log('Database Connection Established')
    } catch (error) {
        console.log('Error While Connecting Catabase ',error);
    }
})