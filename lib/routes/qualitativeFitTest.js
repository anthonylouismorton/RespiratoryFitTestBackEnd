'use strict';
const express = require('express');
const qualitativeFitTest = express.Router();
const sql = require('../data/operations/qualitativeFitTest.js');
require('dotenv').config();


qualitativeFitTest.get('/qualitativeFitTest', async (req, res) => {
    try{
        let qualitativeFitTests = await sql.getQualitativeFitTests()
        res.status(201).send(qualitativeFitTests)
    }
    catch(err){
        res.status(400).send(err)
    }
})

qualitativeFitTest.get('/qualitativeFitTest/:id', async (req, res) => {
    try{
        let employeeFitTestList = await sql.getEmployeeQualitativeFitTests(req.params.id)
        res.status(200).send(employeeFitTestList)
    }
    catch(err){
        res.status(400).send(err)
    }
})

qualitativeFitTest.post('/qualitativeFitTest', async (req, res) => {
    console.log(req.body)
    try{
        let respirator = await sql.addQualitativeFitTest(req.body)
        res.status(201).send(respirator)
    }
    catch(err){
        res.status(400).send(err)
    }
})

qualitativeFitTest.delete('/qualitativeFitTest/:id', async (req,res) => {
    try{

        let deleteQualitativeFitTest = await sql.deleteQualitativeFitTest(req.params.id)
        res.status(204).send(deleteQualitativeFitTest)
    }
    catch(err){
        console.log(err)
        res.status(400).send(err)
    }
})

qualitativeFitTest.put('/qualitativeFitTest', async (req,res) => {
    try{
        let updateQualitativeFitTest = await sql.updateQualitativeFitTest(req.body)
        res.status(200).send(updateQualitativeFitTest)
    }
    catch(err){
        res.status(400).send(err)
    }
})

module.exports = qualitativeFitTest