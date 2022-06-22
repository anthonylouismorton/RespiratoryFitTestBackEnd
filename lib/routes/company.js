'use strict'
const express = require('express')
const companyRouter = express.Router();
const sql = require('../Database/database.js')
require('dotenv').config();

companyRouter.get('/db/company', async (req, res) => {
    try{
        let companyInfo = await sql.getCompany(req.query.company)
        res.status(200).send(companyInfo)
    }
    catch(err){
        res.status(400).send(err)
    }
})

companyRouter.post('/db/company', async (req, res) => {
    console.log(req.body)
    try{
        let companyInfo = await sql.postCompany(req.body)
        res.status(201).send(companyInfo)
    }
    catch(err){
        res.status(400).send(err)
    }
})

module.exports = companyRouter