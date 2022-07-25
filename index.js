'use strict'
const app = require('./lib/server.js');
require('dotenv').config();
const PORT = process.env.PORT || 3057;
app.start(PORT);
