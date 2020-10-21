const express = require('express');
const acl = require("express-acl");

const UserController = require('./controllers/UserController');
const LessonController = require('./controllers/LessonController');
const QuestionController = require('./controllers/QuestionController');
const SessionController = require('./controllers/SessionController');
const UserQuestionsController = require('./controllers/UserQuestionsController');
const UserLessonsController = require('./controllers/UserLessonsController');

const userValidator = require('./validators/Userstore');
const lessonsValidator = require('./validators/Lessonsstore');
const questionsValidator = require('./validators/Questionsstore');
const userLessonsValidator = require('./validators/User_lessons_store');
const userQuestionsValidator = require('./validators/User_questions_store');

const authMiddleware = require('./middlewares/auth'); 

const routes = express.Router();

routes.use(authMiddleware);
routes.use(acl.authorize);

routes.get('/auth', (req, res) => res.send('Authenticated.'));

routes.post('/sessions', SessionController.store);

routes.get('/users', UserController.index);
routes.post('/users', userValidator, UserController.store);
routes.patch('/users/:id', userValidator, UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.get('/lessons', LessonController.index);
routes.post('/lessons', lessonsValidator, LessonController.store);
routes.patch('/lessons/:id', lessonsValidator, LessonController.update);
routes.delete('/lessons/:id', LessonController.delete);

routes.get('/questions', QuestionController.index);
routes.post('/questions', questionsValidator, QuestionController.store);
routes.patch('/questions/:id', questionsValidator, QuestionController.update);
routes.delete('/questions/:id', QuestionController.delete);

routes.get('/userquestions/:id', authMiddleware, UserQuestionsController.index);
routes.post('/userquestions', authMiddleware, userQuestionsValidator, UserQuestionsController.store);
routes.delete('/userquestions/:user_id/:question_id', authMiddleware, UserQuestionsController.delete);

routes.get('/userlessons/:id', authMiddleware, UserLessonsController.index);
routes.post('/userlessons', authMiddleware, userLessonsValidator, UserLessonsController.store);
routes.delete('/userlessons/:user_id/:lesson_id', authMiddleware, UserLessonsController.delete); 

module.exports = routes;