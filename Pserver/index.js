// 1) import .env file
//loads .env file into process.env by default
require('dotenv').config()

// 2) import express - to create server

const express = require('express')

// import cors
const cors = require('cors')

// 4) create server
const pfserver = express()

// 5) use of cors by server
pfserver.use(cors())

//import router

const router = require('./Routes/router')

// 6) returns middleware that only parses json and converts it into javascript object   
pfserver.use(express.json())

// 7) custom the port why because by default server run  at 3000


// server use router
pfserver.use(router)

//import connections.js file
require('./DB/connections')

const PORT = process.env.PORT || 4000

// 8) run the server
pfserver.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


//9) get http request to base url 'http://localhost:4000/' 
pfserver.get('/',(req,res)=>{
    res.send('put world')
})