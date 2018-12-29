const experienceController = require('express')();
const ExperienceDAO = require('../pesistence/ExperienceDAO');

experienceController.get('/:id/experience', (request, response) => {
    ExperienceDAO.findByUserID(request.params.id, (Experience) => {
        if (Experience) {
            response.status(200).json(Experience);
        } else {
            response.status(404).json({message: 'Experience not found'});
        }
    });
});

experienceController.put('/:id/experience', (request, response) => {
    ExperienceDAO.update(request.body, (Experience) => {
        if (Experience) {
            response.status(200).json(Experience);
        } else {
            response.status(404).json({message: 'Experience not found'});
        }
    });
});

experienceController.delete('/:id/experience', (request, response) => {
    ExperienceDAO.delete(request.body.id, (Experience) => {
        if (Experience) {
            response.status(200).json(Experience);
        } else {
            response.status(404).json({message: 'Experience not found'});
        }
    });
});


experienceController.post('/:id/experience', (request, response) => {
    ExperienceDAO.create(request.params.id, request.body, (Experience) => {
        if (Experience) {
            response.status(200).json(Experience);
        } else {
            response.status(500).json({message: 'Experience creating failed. Please check server logs'})
        }
    });
});

module.exports = experienceController;