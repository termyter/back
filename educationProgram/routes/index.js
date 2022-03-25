// Import our Controllers
const programController = require('../controllers/programController')

const routes = [
    {
        method: 'GET',
        url: '/api/programs',
        handler: programController.getPrograms
    },
    {
        method: 'GET',
        url: '/api/programs/:id',
        handler: programController.getSingleProgram
    },
    {
        method: 'POST',
        url: '/api/programs',
        handler: programController.addProgram,
        schema: programController.addProgramSchema
    },
    {
        method: 'PUT',
        url: '/api/programs/:id',
        handler: programController.updateProgram
    },
    {
        method: 'DELETE',
        url: '/api/programs/:id',
        handler: programController.deleteProgram
    }
]

module.exports = routes