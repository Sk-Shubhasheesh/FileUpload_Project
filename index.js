/// App create
const express = require("express");
const app = express();
// Port find
require('dotenv').config(); // loading data from env file
const PORT = process.env.PORT || 3000;
// Add middleware
app.use(express.json());
const fileupload = require('express-fileupload');
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
// db connection
const db = require("./config/database");
db.connect();

// cloud connection
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// api rout mount
const Upload = require("./routes/FileUpload");
app.use('/api/v1/upload', Upload);

// activate the server
app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})