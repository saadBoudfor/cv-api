/**
 * Created by sboudfor on 28/12/2018.
 */
const mediaController = require('express')();
const MediaDAO = require('../pesistence/MediaDAO');

mediaController.get('/:id/media', (request, response) => {
    MediaDAO.findByUserID(request.params.id, (media) => {
        if (media) {
            response.status(200).json(media);
        } else {
            response.status(404).json({message: 'media not found'});
        }
    });
});

mediaController.put('/:id/media', (request, response) => {
    MediaDAO.update(request.body, (media) => {
        if (media) {
            response.status(200).json(media);
        } else {
            response.status(404).json({message: 'media not found'});
        }
    });
});

mediaController.delete('/:id/media', (request, response) => {
    MediaDAO.delete(request.body, (media) => {
        if (media) {
            response.status(200).json(media);
        } else {
            response.status(404).json({message: 'media not found'});
        }
    });
});


mediaController.post('/:id/media', (request, response) => {
    MediaDAO.create(request.params.id, request.body, (media) => {
        if (media) {
            response.status(200).json(media);
        } else {
            response.status(500).json({message: 'media creating failed. Please check server logs'})
        }
    });
});

module.exports = mediaController;