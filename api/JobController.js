/**
 * Created by sboudfor on 28/12/2018.
 */
const jobController = require('express')();
const JobDAO = require('../pesistence/JobDAO');

jobController.get('/:id/job', (request, response) => {
    JobDAO.findByUserID(request.params.id, (job) => {
        if (job) {
            response.status(200).json(job);
        } else {
            response.status(404).json({message: 'job not found'});
        }
    });
});

jobController.put('/:id/job', (request, response) => {
    JobDAO.update(request.body, (job) => {
        if (job) {
            response.status(200).json(job);
        } else {
            response.status(404).json({message: 'job not found'});
        }
    });
});


jobController.post('/:id/job', (request, response) => {
    JobDAO.create(request.params.id, request.body, (job) => {
        if (job) {
            response.status(200).json(job);
        } else {
            response.status(500).json({message: 'job creating failed. Please check server logs'})
        }
    });
});

module.exports = jobController;