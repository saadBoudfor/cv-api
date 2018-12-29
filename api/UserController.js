/**
 * Created by sboudfor on 25/12/2018.
 */
const userController = require('express')();
const UserDAO = require('../pesistence/UserDAO');

userController.post('/', (request, response) => {
    const userDAO = new UserDAO();
    userDAO.create(request.body, created => {
        response.status(200).json(created);
    });

});


userController.get('/:id/user', (request, response) => {
    const userDAO = new UserDAO();
    userDAO.findByUserID(request.params.id,  users => {
        response.status(200).json(users);

    });

});

module.exports = userController;