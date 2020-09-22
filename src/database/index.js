const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const models = [];

const connection = new Sequelize(dbconfig);

module.exports = connection;

