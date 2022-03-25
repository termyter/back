const mongoose = require('mongoose')

const programSchema = new mongoose.Schema({
    name: String,
    login: String,
    age: Number,
})

module.exports = mongoose.model('Program', programSchema)