const express = require('express');
const PORT = process.env.PORT || 5000
const colors = require('colors');
const dotenv = require('dotenv');
const app = express()

const userRoute = require("./src/Routes/user.route")

dotenv.config()
app.use(express.json())

// Routes
app.use('/api/user', userRoute)

// Database Connect
require('./src/Config/dbConfig')

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`.bold.red);
})