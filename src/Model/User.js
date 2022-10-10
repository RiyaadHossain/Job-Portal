const mongoose = require('mongoose');
const { default: validator } = require('validator');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: [3, 'Name must contain at least 3 characters'],
        maxLength: [20, 'Name can not be more than 20 characters'],
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        validate: [validator.isEmail, 'Please provide a valid Email']
    },
    passowrd: {
        type: String,
        required: true,
        validate: {
            validator: (value) => validator.isStrongPassword(value, {
                minLength: 6,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1,
            }),
            message: "Password is not strong enough.",
        },
    },
    role: {
        type: String,
        default: 'candidate',
        enum: {
            values: ['candidate', 'hiring-manager', 'admin'],
            message: "User role can't be {VALUE}"
        }
    },
    status: {
        type: String,
        default: 'active',
        enum: ['active', 'inactive', 'blocked']
    },
    contactNumber: Number,
    address: String
}, { timestamp: true })

const User = mongoose.model('User', userSchema)
module.exports = User
