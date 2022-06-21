'use strict'
var sql = require('mssql')
const app = require('./lib/server.js')
require('dotenv').config();
const PORT = process.env.PORT || 3055;
var dbConfig = {
    server: process.env.SERVER,
    database: "",
    user: process.env.USER,
    password:process.env.PASSWORD,
    options: {
        encrypt: true
    }

}
app.start(PORT)
