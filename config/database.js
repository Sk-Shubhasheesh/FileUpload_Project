const mongoose = require('mongoose');

require("dotenv").config();

exports.connect = () => {
    // it internally returns a promise
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser:true,    
        useUnifiedTopology:true  
    })
    .then(() => {
        console.log("DB connected successfully");
    })
    .catch( (err) => {
        console.log("DB connection issues");
        console.log(err);
        process.exit(1);
    } )

}