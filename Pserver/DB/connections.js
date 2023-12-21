// import mangoose

const mongoose = require('mongoose');

//connection string of mongodb
const connectionstring = process.env.DATABASE;

//connect to mongodb using mongoose
mongoose.connect(connectionstring)
    .then(() => {
        console.log('mongodb connected successfully');
    })
    .catch((err) => {
        console.log(`mongodb connection failed due to ${err}`);
    });
