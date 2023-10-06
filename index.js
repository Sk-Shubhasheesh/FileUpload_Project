const express = require("express");
const app = express();

require('dotenv').config(); // loading data from env file
const PORT = process.env.PORT || 3000;
require("./config/database").connect();
// activate the server
app.listen(PORT, () => {
    console.log(`Server run at ${PORT}`);
})