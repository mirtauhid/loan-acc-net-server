const mongoose = require('mongoose')
const { timeStamp } = require('console')

const agentSchema = mongoose.Schema({
    username: {
        type: String,
        trim: true,
        max: 32,
        require: true,
        unique: true,
        index: true,
        lowercase: true
    },
    name: {
        type: String,
        trim: true,
        required: true,
        max: 32,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        max: 32,
        unique: true,
        lowercase: true
    },

    address: {
        type: String,
        trim: true,
        required: true,
        max: 50,
    },
    phoneNumber: {
        type: String,
        trim: true,
        required: true,
        max: 15,
    },
    state: {
        type: String,
        trim: true,
        required: true,
        max: 32,
        lowercase: true
    },
    zipcode: {
        type: String,
        trim: true,
        required: true,
        max: 32,
    },
    profile: {
        type: String,
        required: true,

    },
    agentId: {
        type: String,
        require: true
    },
    role: {
        type: Number,
        trim: true
    },

},
    { timeStamp: true }
)
module.exports = mongoose.model('Agent', agentSchema)