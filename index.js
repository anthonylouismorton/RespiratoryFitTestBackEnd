'use strict'
const app = require('./lib/server.js')
require('dotenv').config();
const PORT = process.env.PORT || 3055;
app.start(PORT)
