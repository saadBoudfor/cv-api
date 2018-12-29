const skillController = require('express')();
const SkillDAO = require('../pesistence/SkillDAO');

skillController.get('/:id/skill', (request, response) => {
    SkillDAO.findByUserID(request.params.id, (skill) => {
        if (skill) {
            response.status(200).json(skill);
        } else {
            response.status(404).json({message: 'skill not found'});
        }
    });
});

skillController.put('/:id/skill', (request, response) => {
    SkillDAO.update(request.body, (skill) => {
        if (skill) {
            response.status(200).json(skill);
        } else {
            response.status(404).json({message: 'skill not found'});
        }
    });
});

skillController.delete('/:id/skill', (request, response) => {
    SkillDAO.delete(request.body.id, (skill) => {
        if (skill) {
            response.status(200).json(skill);
        } else {
            response.status(404).json({message: 'skill not found'});
        }
    });
});


skillController.post('/:id/skill', (request, response) => {
    SkillDAO.create(request.params.id, request.body, (skill) => {
        if (skill) {
            response.status(200).json(skill);
        } else {
            response.status(500).json({message: 'skill creating failed. Please check server logs'})
        }
    });
});

module.exports = skillController;