/**
 * Created by sboudfor on 28/12/2018.
 */
const addressController = require('express')();
const AddressDAO = require('../pesistence/AddressDAO');


addressController.post('/:id/address/', (request, response) => {
    AddressDAO.create(request.body, request.params.id, (created) => {
        response.status(200).json(created);
    })
});


addressController.get('/:id/address/', (request, response) => {
    AddressDAO.findByUserID(request.params.id, (found) => {
        if (found) {
            response.status(200).json(found);
        } else {
            response.status(404).json({message: 'address not found'});
        }
    })
});

addressController.put('/:id/address/', (request, response) => {
    AddressDAO.updateAddress(request.params.id, request.body, (found) => {
        if (found) {
            response.status(200).json(found);
        } else {
            response.status(400).json({message: 'address not found'});
        }
    })
});

module.exports = addressController;