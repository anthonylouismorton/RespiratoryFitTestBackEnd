'use strict';
const express = require('express');
const companyApi = require('./routes/company.js');
const employeeApi = require('./routes/employee.js');
const respiratorApi = require('./routes/respirators.js');
const qualitativeFitTest = require('./routes/qualitativeFitTest.js');
const quantitativeFitTest = require('./routes/quantitativeFitTest.js')
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(companyApi);
app.use(employeeApi);
app.use(respiratorApi);
app.use(qualitativeFitTest)
app.use(quantitativeFitTest)

module.exports = {
  app,
  start: port => {
    app.listen(port, () => console.log(`listening on ${port}`))
  }
}