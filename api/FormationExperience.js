const formationController = require('express')();
const FormationDAO = require('../pesistence/FormationDAO');

formationController.get('/:id/formation', (request, response) => {
    FormationDAO.findByUserID(request.params.id, (formation) => {
        if (formation) {
            response.status(200).json(formation);
        } else {
            response.status(404).json({message: 'formation not found'});
        }
    });
});

formationController.put('/:id/formation', (request, response) => {
    FormationDAO.update(request.body, (formation) => {
        if (formation) {
            response.status(200).json(formation);
        } else {
            response.status(404).json({message: 'formation not found'});
        }
    });
});

formationController.delete('/:id/formation', (request, response) => {
    FormationDAO.delete(request.body.id, (formation) => {
        if (formation) {
            response.status(200).json(formation);
        } else {
            response.status(404).json({message: 'formation not found'});
        }
    });
});


formationController.post('/:id/formation', (request, response) => {
    FormationDAO.create(request.params.id, request.body, (formation) => {
        if (formation) {
            response.status(200).json(formation);
        } else {
            response.status(500).json({message: 'formation creating failed. Please check server logs'})
        }
    });
});

module.exports = formationController;