//External Dependancies
const boom = require('boom')

// Get Data Models
const Program = require('../models/Program')

// Get all cars
exports.getPrograms = async (req, reply) => {
    try {
        const programs = await Program.find()
        return programs
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get single car by ID
exports.getSingleProgram = async (req, reply) => {
    try {
        const id = req.params.id
        const program = await Program.findById(id)
        return program
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Add a new car
exports.addProgram = async (req, reply) => {
    try {
        const program = new Program(req.body)
        return program.save()
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Update an existing car
exports.updateProgram = async (req, reply) => {
    try {
        const id = req.params.id
        const program = req.body
        const { ...updateData } = program
        const update = await Program.findByIdAndUpdate(id, updateData, { new: true })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Delete a car
exports.deleteProgram = async (req, reply) => {
    try {
        const id = req.params.id
        const program = await Program.findByIdAndRemove(id)
        return program
    } catch (err) {
        throw boom.boomify(err)
    }
}