const express = require('express');
const PORT = process.env.PORT || 5000
const colors = require('colors');
const dotenv = require('dotenv');
const app = express()

const userRoute = require("./src/Routes/user.route")
const adminRoute = require("./src/Routes/admin.route")
const generalRoute = require("./src/Routes/general.route")
const candidateRoute = require("./src/Routes/candidate.route")
const hiringManagerRoute = require("./src/Routes/hiringManager.route")

dotenv.config()
app.use(express.json())

// Routes
app.use('/api/', generalRoute)
app.use('/api/user', userRoute)
app.use('/api/admin', adminRoute)
app.use('/api/', candidateRoute)
app.use('/api/', hiringManagerRoute)

// Database Connect
require('./src/Config/dbConfig')

// Health Check
app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`.bold.red);
})