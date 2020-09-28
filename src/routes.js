const express = require('express');

const UserController = require('./controllers/UserController');
const LessonController = require('./controllers/LessonController');
const QuestionController = require('./controllers/QuestionController');
const SessionController = require('./controllers/SessionController');

const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/lessons', LessonController.index);
routes.post('/lessons', LessonController.store);

routes.get('/questions', QuestionController.index);
routes.post('/:lessonid/question', QuestionController.store);


module.exports = routes;