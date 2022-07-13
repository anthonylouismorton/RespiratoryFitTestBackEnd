'use strict';
const config = require('./config.js');
const sql = require('mssql');

async function getRespirators() {
    try {
        let pool = await sql.connect(config);
        let respirators = await pool.request().execute('SelectRespirators');
        return respirators.recordsets[0];
    }
    catch(err){
        return(err)
    }
};

async function getRespiratorManufacturers(){
    try {
        let pool = await sql.connect(config);
        let respiratorList = await pool.request().execute('SelectRespiratorList');
        console.log(respiratorList)
        return respiratorList.recordsets[0];
    }
    catch(err){
        return(err)
    }
}

async function getRespirator(respiratorID) {
    try {
        let pool = await sql.connect(config);
        let respirator = await pool.request()
        .input('respiratorID', sql.Int, respiratorID)
        .execute('SelectRespirator');
        return respirator.recordset[0]
    }
    catch(err){
        return err
    }
};

async function deleteRespirator(respiratorID) {
    try {
        let pool = await sql.connect(config);
        let respirator = await pool.request()
        .input('respiratorID', sql.Int, respiratorID)
        .execute('DeleteRespirator');
        return respirator.recordset[0]
    }
    catch(err){
        return err
    }
};

async function addRespirator(newRespirator) {
    try {
        let pool = await sql.connect(config)
        let addRespirator = await pool.request()
            .input('respiratorManufacturer', sql.NVarChar, newRespirator.respiratorManufacturer)
            .input('respiratorModelNumber', sql.NVarChar, newRespirator.respiratorModelNumber)
            .input('respiratorStyleID', sql.Int, newRespirator.respiratorStyleID)
            .execute('AddRespirator')
        return addRespirator.recordsets[0]
    }
    catch(err){
        return err
    }
}

async function updateRespirator(updateRespirator) {
    try {
        let pool = await sql.connect(config)
        let updatedRespirator = await pool.request()
            .input('respiratorID', sql.Int, updateRespirator.respiratorID)
            .input('respiratorManufacturer', sql.NVarChar, updateRespirator.respiratorManufacturer)
            .input('respiratorModelNumber', sql.NVarChar, updateRespirator.respiratorModelNumber)
            .input('respiratorStyleID', sql.Int, updateRespirator.respiratorStyleID)
            .execute('UpdateRespirator')
        return updatedRespirator.recordsets[0]
    }
    catch(err){
        return err
    }
}

module.exports = {
    getRespirators: getRespirators,
    getRespirator: getRespirator,
    addRespirator: addRespirator,
    deleteRespirator: deleteRespirator,
    updateRespirator: updateRespirator,
    getRespiratorManufacturers: getRespiratorManufacturers
}
