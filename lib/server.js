'use strict'
const express = require('express');
const companiesApi = require('./routes/companies.js')
const companyApi = require('./routes/company.js')
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(companiesApi)
app.use(companyApi)

module.exports = {
  app,
  start: port => {
    app.listen(port, () => console.log(`listening on ${port}`))
  }
}