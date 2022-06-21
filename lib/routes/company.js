'use strict'
const express = require('express')
const companyRouter = express.Router();
require('dotenv').config();
const axios = require('axios');


companyRouter.get('/db/company', async (req, res) => {
    try{
        let companyReq = req
        const response = await
    }
    catch(err){
        res.status(400).send(err)
    }
})

module.exports = companyRouter