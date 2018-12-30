/**
 * Created by sboudfor on 25/12/2018.
 */
const app = require('express')();

// routers imports:
const indexRouter = require('./api/index');
const usersRouter = require('./api/UserController');
const addressRouter = require('./api/AddressController');
const mediaRouter = require('./api/MediaController');
const jobRouter = require('./api/JobController');
const serviceRouter = require('./api/ServiceController');
const experienceRouter = require('./api/ExperienceController');
const formationRouter = require('./api/FormationExperience');
const bodyParser = require('body-parser');

// import use:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routers declarations:
app.use('/', indexRouter);
app.use('/resume', usersRouter);
app.use('/resume', addressRouter);
app.use('/resume', jobRouter);
app.use('/resume', mediaRouter);
app.use('/resume', experienceRouter);
app.use('/resume', formationRouter);
app.use('/resume', serviceRouter);

app.listen(3000);
