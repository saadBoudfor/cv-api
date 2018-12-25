/**
 * Created by sboudfor on 25/12/2018.
 */
const express = require('express') ;
const app = express();
const indexRouter = require('./api/index');
const usersRouter = require('./api/UserController');
const orm = require('./pesistence/AddressDAO');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.use('/user', usersRouter);

app.listen(3000);
