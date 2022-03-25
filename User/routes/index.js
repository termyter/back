// Import our Controllers
const userController = require('../controllers/userController')

const routes = [
    {
        method: 'GET',
        url: '/api/programs',
        handler: userController.getUsers
    },
    {
        method: 'GET',
        url: '/api/programs/:id',
        handler: userController.getSingleUser
    },
    {
        method: 'POST',
        url: '/api/programs',
        handler: userController.addUser,
        schema: userController.addUserSchema
    },
    {
        method: 'PUT',
        url: '/api/programs/:id',
        handler: userController.updateUser
    },
    {
        method: 'DELETE',
        url: '/api/programs/:id',
        handler: userController.deleteUser
    }
]

module.exports = routes