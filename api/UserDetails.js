/**
 * Created by sboudfor on 25/12/2018.
 */
const express = require('express') ;
const userRouter = express();

userRouter.get('/user/', function (req, res) {
    res.status(200).json({user: 'saad boudfor'})
});

module.exports = userRouter;