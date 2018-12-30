/**
 * Created by sboudfor on 28/12/2018.
 */
const widgetController = require('express')();
const WidgetDAO = require('../pesistence/WidgetDAO');

widgetController.get('/:id/widget', (request, response) => {
    WidgetDAO.findByUserID(request.params.id, (widget) => {
        if (widget) {
            response.status(200).json(widget);
        } else {
            response.status(404).json({message: 'widget not found'});
        }
    });
});

widgetController.put('/:id/widget', (request, response) => {
    WidgetDAO.update(request.body, (widget) => {
        if (widget) {
            response.status(200).json(widget);
        } else {
            response.status(404).json({message: 'widget not found'});
        }
    });
});


widgetController.post('/:id/widget', (request, response) => {
    WidgetDAO.create(request.params.id, request.body, (widget) => {
        if (widget) {
            response.status(200).json(widget);
        } else {
            response.status(500).json({message: 'widget creating failed. Please check server logs'})
        }
    });
});

module.exports = widgetController;