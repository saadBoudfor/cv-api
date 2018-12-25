/**
 * Created by sboudfor on 25/12/2018.
 */
const express = require('express') ;
const indexRouter = express();

indexRouter.get('/', function(req, res, next) {
    //Do whatever...
    res.status(200).json({message: 'Welcome to CV API'})
});

module.exports  = indexRouter;