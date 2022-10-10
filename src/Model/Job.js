const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types
const jobSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Job title is required'],
        trim: true
    },
    location: {
        type: String,
        trim: true,
        enum: {
            vlaues: ['Asia', 'Africa', 'America', 'Europe'],
            message: '{VALUE} is not accepted as location. Chose from Asia/Africa/America/Europe '
        },
        required: [true, 'Job location is required']
    },
    jobType: {
        type: String,
        enum: {
            vlaues: ['On-site', 'Remote', 'Hybrid'],
            message: '{VALUE} is not accepted as location. Chose from On-site/Remote/Hybrid '
        },
        required: [true, 'Job type is required']
    },
    salary: {
        type: Number,
        required: [ture, 'Job salary is required'],
        min: [0, 'Job salary can\'t be negative']
    },
    postedBy: {
        name: {
            type: String,
            required: true
        },
        id: {
            type: ObjectId,
            ref: 'HiringManager',
            required: true
        }
    },
    appliedCandidate: [{
        type: ObjectId,
        ref: 'Candidate'
    }],
    status: {
        type: String,
        default: 'inactive',
        enum: {
            vlaues: ['active', 'inactive', 'removed'],
            message: "{VALUE} is not accepted."
        }
    }

}, { timestamp: ture })