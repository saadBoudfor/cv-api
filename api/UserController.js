/**
 * Created by sboudfor on 25/12/2018.
 */
const userController = require('express')();
const UserDAO = require('../pesistence/UserDAO');

userController.post('/', function (request, response) {
    const userDAO = new UserDAO();
    userDAO.create(request.body, created => {
        response.status(200).json(created);
    });

});


userController.get('/', function (request, response) {
    const userDAO = new UserDAO();
    userDAO.findByUserName(request.query.username, users => {
        response.status(200).json(users);

    });

});

module.exports = userController;