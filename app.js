const express = require('express');
const PORT = process.env.PORT || 5000
const colors = require('colors');
const dotenv = require('dotenv');
const app = express()

dotenv.config()

// Database Connect
require('./src/Config/dbConfig')

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`.bold.yellow);
})