const express = require('express');

const UserController = require('./controllers/UserController');
const LessonController = require('./controllers/LessonController');
const QuestionController = require('./controllers/QuestionController');
const SessionController = require('./controllers/SessionController');
const UserQuestionsController = require('./controllers/UserQuestionsController');
const UserLessonsController = require('./controllers/UserLessonsController');

const authMiddleware = require('./middlewares/auth'); 

const routes = express.Router();

routes.get('/auth', (req, res) => res.send('Authenticated.'));

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.patch('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.post('/sessions', SessionController.store);

routes.get('/lessons', LessonController.index);
routes.post('/lessons', LessonController.store);
routes.patch('/lessons/:id', LessonController.update);
routes.delete('/lessons/:id', LessonController.delete);

routes.get('/questions', QuestionController.index);
routes.post('/questions', QuestionController.store);
routes.patch('/questions/:id', QuestionController.update);
routes.delete('/questions/:id', QuestionController.delete);

routes.get('/userquestions', UserQuestionsController.index);
routes.post('/userquestions', UserQuestionsController.store);
routes.delete('/userquestions/:userid/:question_id', UserQuestionsController.delete);

routes.get('/userlessons', UserLessonsController.index);
routes.post('/userlessons', UserLessonsController.store);
routes.delete('/userlessons/:userid/:lesson_id', UserLessonsController.delete);

module.exports = routes;