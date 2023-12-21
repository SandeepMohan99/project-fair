// to resolve the client requests.

// 1) Import express
const express = require('express')

//import controller
const userControlller = require('../controllers/userController')


// 2) create an object for the class router in express

const router = new express.Router()

// 3) path for resolving the requests
        // syntax :   router.httprequest('path to resolve the request',()=>{ohow to resolve the request(inside controller)})
        //a) Register
            router.post('/user/register',userControlller.register)

        //b) Login
        router.post('/user/login',userControlller.login)
        

//4) export router

module.exports = router