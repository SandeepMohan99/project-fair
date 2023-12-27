// to resolve the client requests.

// 1) Import express
const express = require('express')

//import controller
const userControlller = require('../controllers/userController')

//import project Controller
const projectController = require('../controllers/projectController')

//import jwtMiddleware
const jwtMiddleware = require('../Middleware/jwtMiddleware')

//import multer
const multerConfig = require('../Middleware/multerMiddleware')

// 2) create an object for the class router in express

const router = new express.Router()

// 1) path for resolving the requests
        // syntax :   router.httprequest('path to resolve the request',()=>{ohow to resolve the request(inside controller)})
        //a) Register
            router.post('/user/register',userControlller.register)

        //b) Login
        router.post('/user/login',userControlller.login)

//2)add project
router.post('/project/add',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)
        
//3) getHomeProject
router.get('/projects/home-project',projectController.getHomeProject)

//4)getAllProject
router.get('/projects/all-project',jwtMiddleware,projectController.getAllProject)

//5)getUserProject
router.get(`/user/all-project`,jwtMiddleware,projectController.getUserProject)

//) export router

module.exports = router