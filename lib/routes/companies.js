'use strict'
const express = require('express')
const companiesRouter = express.Router();
const sql = require('../Database/database.js')
require('dotenv').config();

companiesRouter.get('/db/companies', async (req, res) => {
    try{
        let companiesList = await sql.getCompanies()
        res.status(201).send(companiesList)
    }
    catch(err){
        res.status(400).send(err)
    }
})

module.exports = companiesRouter