'use strict'
const express = require('express');
const companiesApi = require('./routes/companies.js')
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(companiesApi)

module.exports = {
  app,
  start: port => {
    app.listen(port, () => console.log(`listening on ${port}`))
  }
}