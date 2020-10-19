const express = require('express');
const routes = require('./routes');
const acl = require("express-acl");
const {config,responseObject} = require("./config/acl");

require('./database');

const app = express();

app.use(express.json());

app.use(routes);

acl.config(config, responseObject);

app.listen(3333);