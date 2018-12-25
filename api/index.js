/**
 * Created by sboudfor on 25/12/2018.
 */
const express = require('express') ;
const indexRouter = express();
const AddressDAO = require('../pesistence/AddressDAO');
indexRouter.get('/', function(req, res, next) {
    //Do whatever...
    const dao = new AddressDAO();
    dao.init();
    res.status(200).json({message: 'Welcom to CV API'})
});

module.exports  = indexRouter;