'use strict'
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

module.exports = {
  app,
  start: port => {
    app.listen(port, () => console.log(`listening on ${port}`))
  }
}