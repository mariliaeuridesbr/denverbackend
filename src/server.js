const express = require('express');
const routes = require('./routes');
const acl = require("express-acl");
const {config,responseObject} = require("./config/acl");

require('express-async-errors');
require('./database');

const app = express();

app.use(express.json());

acl.config(config, responseObject);
app.use(routes);

app.listen(process.env.PORT || 3030);