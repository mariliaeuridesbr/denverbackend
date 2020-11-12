const express = require('express');
const routes = require('./routes');
const acl = require("express-acl");
const {config,responseObject} = require("./config/acl");
const { Client } = require('pg');

require('express-async-errors');
require('./database');

const app = express();

app.use(express.json());

acl.config(config, responseObject);
app.use(routes);

app.listen(process.env.PORT || 3030);

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});