// import jwt
const jwt = require('jsonwebtoken');


const jwtMiddleware = (req,res,next)=>{
    console.log("inside jwt middleware");
    //logic
    //1) get token from client
    const token = req.headers["authorization"].split(" ")[1]
    console.log(token);

    try{
        //first parameter is token and second parameter is secret key
        const jwtResponse = jwt.verify(token,"supersecretkey1243")
        console.log(jwtResponse);
        req.payload = jwtResponse.userId
        next()
    }
    catch(err){
        res.status(401).json("Authontication failed...Please login again")
    }
    
    
}


module.exports = jwtMiddleware