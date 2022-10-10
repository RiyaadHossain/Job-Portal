const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('DB connect successfully')
    })
    .catch(err => {
        console.log(err);
    })