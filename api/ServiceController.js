const ServiceController = require('express')();
const ServiceDAO = require('../pesistence/ServiceDAO');

ServiceController.get('/:id/service', (request, response) => {
    ServiceDAO.findByUserID(request.params.id, (service) => {
        if (service) {
            response.status(200).json(service);
        } else {
            response.status(404).json({message: 'service not found'});
        }
    });
});

ServiceController.put('/:id/service', (request, response) => {
    ServiceDAO.update(request.body, (service) => {
        if (service) {
            response.status(200).json(service);
        } else {
            response.status(404).json({message: 'service not found'});
        }
    });
});

ServiceController.delete('/:id/service', (request, response) => {
    ServiceDAO.delete(request.body.id, (service) => {
        if (service) {
            response.status(200).json(service);
        } else {
            response.status(404).json({message: 'service not found'});
        }
    });
});


ServiceController.post('/:id/service', (request, response) => {
    ServiceDAO.create(request.params.id, request.body, (service) => {
        if (service) {
            response.status(200).json(service);
        } else {
            response.status(500).json({message: 'service creating failed. Please check server logs'})
        }
    });
});

module.exports = ServiceController;