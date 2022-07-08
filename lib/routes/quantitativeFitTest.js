'use strict';
const express = require('express');
const quantitativeFitTest = express.Router();
const sql = require('../data/operations/quantitativeFitTest.js');
require('dotenv').config();


quantitativeFitTest.get('/quantitativeFitTest', async (req, res) => {
    try{
        let quantitativeFitTests = await sql.getquantitativeFitTests()
        res.status(201).send(quantitativeFitTests)
    }
    catch(err){
        res.status(400).send(err)
    }
})

quantitativeFitTest.get('/quantitativeFitTest/:id', async (req, res) => {
    try{
        let employeeFitTestList = await sql.getEmployeequantitativeFitTests(req.params.id)
        res.status(200).send(employeeFitTestList)
    }
    catch(err){
        res.status(400).send(err)
    }
})

quantitativeFitTest.post('/quantitativeFitTest', async (req, res) => {
    console.log(req.body)
    try{
        let quantitativeFitTest = await sql.addQuantitativeFitTest(req.body)
        res.status(201).send(quantitativeFitTest)
    }
    catch(err){
        res.status(400).send(err)
    }
})

quantitativeFitTest.delete('/quantitativeFitTest/:id', async (req,res) => {
    try{

        let deletequantitativeFitTest = await sql.deletequantitativeFitTest(req.params.id)
        res.status(204).send(deletequantitativeFitTest)
    }
    catch(err){
        console.log(err)
        res.status(400).send(err)
    }
})

quantitativeFitTest.put('/quantitativeFitTest', async (req,res) => {
    try{
        let updatequantitativeFitTest = await sql.updatequantitativeFitTest(req.body)
        res.status(200).send(updatequantitativeFitTest)
    }
    catch(err){
        res.status(400).send(err)
    }
})

module.exports = quantitativeFitTest