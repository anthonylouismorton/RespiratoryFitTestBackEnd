'use strict'
const express = require('express')
const companyRouter = express.Router();
const sql = require('../Database/database.js')
require('dotenv').config();

companyRouter.get('/db/companies', async (req, res) => {
    try{
        console.log('in the company get')
        let companyReq = await sql.getCompanies()
        res.status(201).send(companyReq)
    }
    catch(err){
        res.status(400).send(err)
    }
})

module.exports = companyRouter