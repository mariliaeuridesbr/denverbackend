const express = require('express');

const UserController = require('./controllers/UserController');
const LessonController = require('./controllers/LessonController');
const QuestionController = require('./controllers/QuestionController');
const SessionController = require('./controllers/SessionController');
const UserQuestionsController = require('./controllers/UserQuestionsController');
const UserLessonsController = require('./controllers/UserLessonsController');

const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

module.exports = routes;