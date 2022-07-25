'use strict';
const express = require('express');
const quantitativeFitTest = express.Router();
const sql = require('../operations/quantitativeFitTest.js');
require('dotenv').config();


quantitativeFitTest.get('/quantitativeFitTests', async (req, res) => {
    try{
        let quantitativeFitTests = await sql.getQuantitativeFitTests()
        res.status(201).send(quantitativeFitTests)
    }
    catch(err){
        res.status(400).send(err)
    }
})

quantitativeFitTest.get('/quantitativeFitTests/:id', async (req, res) => {
    console.log('here we are')
    try{
        let employeeFitTestList = await sql.getEmployeeQuantitativeFitTests(req.params.id)
        res.status(200).send(employeeFitTestList)
    }
    catch(err){
        res.status(400).send(err)
    }
})

quantitativeFitTest.post('/quantitativeFitTest', async (req, res) => {
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

        let deletequantitativeFitTest = await sql.deleteQuantitativeFitTest(req.params.id)
        res.status(204).send(deletequantitativeFitTest)
    }
    catch(err){
        res.status(400).send(err)
    }
})

quantitativeFitTest.put('/quantitativeFitTest', async (req,res) => {
    try{
        let updatequantitativeFitTest = await sql.updateQuantitativeFitTest(req.body)
        res.status(200).send(updatequantitativeFitTest)
    }
    catch(err){
        res.status(400).send(err)
    }
})

module.exports = quantitativeFitTest