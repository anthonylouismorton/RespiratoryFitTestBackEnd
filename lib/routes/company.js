'use strict';
const express = require('express');
const companyRouter = express.Router();
const sql = require('../data/operations.js');
var Company = require('../models/company.js');
require('dotenv').config();

companyRouter.get('/company/:id', async (req, res) => {
    console.log(req.params)
    try{
        let companyInfo = await sql.getCompany(req.params.id)
        res.status(200).send(companyInfo)
    }
    catch(err){
        res.status(400).send(err)
    }
})

companyRouter.post('/company', async (req, res) => {
    try{
        console.log('we in the try')
        let company = await sql.addCompany(req.body)
        res.status(201).send(company)
    }
    catch(err){
        res.status(400).send(err)
    }
})

module.exports = companyRouter