/**
 * Created by sboudfor on 25/12/2018.
 */
const express = require('express') ;
const app = express();
const indexRouter = require('./api/index');
const usersRouter = require('./api/userDetails');


app.use('/', indexRouter);
app.use('/', usersRouter);

app.listen(3000);
