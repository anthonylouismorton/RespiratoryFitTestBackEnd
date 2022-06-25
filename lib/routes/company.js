'use strict';
const express = require('express');
const companyRouter = express.Router();
const sql = require('../data/operations/companyOperations.js');
// var Company = require('../models/company.js');
require('dotenv').config();


companyRouter.get('/company', async (req, res) => {
    try{
        let companiesList = await sql.getCompanies()
        res.status(201).send(companiesList)
    }
    catch(err){
        res.status(400).send(err)
    }
})

companyRouter.get('/company/:id', async (req, res) => {
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
        let company = await sql.addCompany(req.body)
        res.status(201).send(company)
    }
    catch(err){
        res.status(400).send(err)
    }
})

companyRouter.delete('/company/:id', async (req,res) => {
    try{
        let deleteCompany = await sql.deleteCompany(req.params.id)
        res.status(204).send(deleteCompany)
    }
    catch(err){
        res.status(400).send(err)
    }
})

companyRouter.put('/company', async (req,res) => {
    try{
        let updateCompany = await sql.updateCompany(req.body)
        res.status(200).send(updateCompany)
    }
    catch(err){
        res.status(400).send(err)
    }
})

module.exports = companyRouter