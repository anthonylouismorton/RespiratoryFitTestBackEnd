'use strict';
const express = require('express');
const employeeRouter = express.Router();
const sql = require('../data/operations/employeeOperations.js');
// var Company = require('../models/employee.js');
require('dotenv').config();


employeeRouter.get('/employee', async (req, res) => {
    try{
        let employeesList = await sql.getAllemployees()
        res.status(201).send(employeesList)
    }
    catch(err){
        res.status(400).send(err)
    }
})

employeeRouter.get('/employee/:id', async (req, res) => {
    try{
        let employee = await sql.getEmployee(req.params.id)
        res.status(201).send(employee)
    }
    catch(err){
        res.status(400).send(err)
    }
})

employeeRouter.get('/companyEmployee/:id', async (req, res) => {
    console.log(req.params.id)
    try{
        let employees = await sql.getCompanyEmployees(req.params.id)
        res.status(200).send(employees)
    }
    catch(err){

        res.status(400).send(err)
    }
})

employeeRouter.post('/employee', async (req, res) => {
    try{
        let employee = await sql.addEmployee(req.body)
        res.status(201).send(employee)
    }
    catch(err){
        res.status(400).send(err)
    }
})

employeeRouter.delete('/employee/:id', async (req,res) => {
    try{
        let deleteEmployee = await sql.deleteEmployee(req.params.id)
        res.status(204).send(deleteEmployee)
    }
    catch(err){
        res.status(400).send(err)
    }
})

employeeRouter.put('/employee', async (req,res) => {
    try{
        let updateEmployee = await sql.updateEmployee(req.body)
        res.status(200).send(updateEmployee)
    }
    catch(err){
        res.status(400).send(err)
    }
})

module.exports = employeeRouter