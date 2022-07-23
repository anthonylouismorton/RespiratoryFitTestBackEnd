'use strict';
const express = require('express');
const respiratorRouter = express.Router();
const sql = require('..//operations/respiratorOperations.js');
require('dotenv').config();


respiratorRouter.get('/respiratorList', async (req, res) => {
    try{
        let respiratorList = await sql.getRespiratorManufacturers();
        res.status(201).send(respiratorList);
    }
    catch(err){
        res.status(400).send(err);
    };
});

respiratorRouter.get('/respiratorModels/:company', async (req, res) => {
    try{
        let respiratorModels = await sql.getRespiratorModels(req.params.company);
        res.status(201).send(respiratorModels);
    }
    catch(err){
        res.status(400).send(err);
    };
});

respiratorRouter.get('/respirator', async (req, res) => {
    try{
        let respiratorList = await sql.getRespirators();
        res.status(201).send(respiratorList);
    }
    catch(err){
        res.status(400).send(err);
    };
});

respiratorRouter.get('/respirator/:id', async (req, res) => {
    try{
        let respiratorInfo = await sql.getRespirator(req.params.id);
        res.status(200).send(respiratorInfo);
    }
    catch(err){
        res.status(400).send(err);
    };
});

respiratorRouter.post('/respirator', async (req, res) => {
    try{
        let respirator = await sql.addRespirator(req.body);
        res.status(201).send(respirator);
    }
    catch(err){
        res.status(400).send(err);
    };
});

respiratorRouter.delete('/respirator/:id', async (req,res) => {
    try{
        let deleterespirator = await sql.deleteRespirator(req.params.id);
        res.status(204).send(deleterespirator);
    }
    catch(err){
        res.status(400).send(err);
    };
});

respiratorRouter.put('/respirator/:id', async (req,res) => {
    try{
        let updatedrespirator = await sql.updateRespirator(req.body);
        res.status(200).send(updatedrespirator);
    }
    catch(err){
        res.status(400).send(err);
    };
});

module.exports = respiratorRouter