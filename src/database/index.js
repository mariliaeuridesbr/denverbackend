const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const User = require('../models/User');

const models = [User];

const connection = new Sequelize(dbconfig);

models.map((model) => model.init(connection));

module.exports = connection;

