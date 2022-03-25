const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    login: String,
    age: Number,
})

module.exports = mongoose.model('User', userSchema)