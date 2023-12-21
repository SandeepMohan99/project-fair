
// import modal
const users = require('../Models/userSchema')

// import jwt
const jwt = require('jsonwebtoken')

//logic for register
exports.register = async (req, res) => {
    //logic
    console.log('inside user controller - register logic');
    // destructuring data from the client request body ( since json format us cinverted into javascript object by .json() method used in index.js )
    const { username, email, password } = req.body;

    try {
        //since email is unique value we are chwcking that email is already present in the database or not
        // for what we are using findOne method which returns entire ddocument when ccondition is true else return null
        const existingUser = await users.findOne({ email: email });
        if (existingUser) {
            //if findOne return the document it means that the user already exists 
            // so we are sending a response in 400 series ( client request error)
            return res.status(406).json("user already exists");
        } else {
            // if findOne return null it means that the user does not exists in the data base
            // we register the user
            // 1) create object of the modal
            const newUser = new users({
                username,
                email,
                password,
                github: "",
                linkedin: "",
                profile: ""
            });

            // 2) add the above object use save() in mongoose
            await newUser.save();

            //response
            res.status(200).json(newUser);
        }
    }
    //javascript resolve runtime error using try catch block
    catch (err) {
        res.status(401).json("Registration failed due to " + err);
    }
}

exports.login = async (req, res) => {
    console.log('inside user controller - login logic');
    const { email, password } = req.body;
    /* console.log(email,password); */
    try{
        const existingUser = await users.findOne({ email:email,password:password });
        if(existingUser){
            // sign is the function to create a token
            // first argument is the payload which is the data to be stored in the token
            // second argument is the secret key which is used to encrypt the payload - based on this key the token is created
            const tocken = jwt.sign({userId:existingUser._id},"supersecretkey1243")
            res.status(200).json({
                existingUser,
                tocken
            })
        }
        else{
            res.status(404).json("Invalid email or password")
        }
    }
    catch(err){
        res.status(401).json("login failed due to "+err)
    }
}