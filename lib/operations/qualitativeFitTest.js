'use strict';
const config = require('./config.js');
const sql = require('mssql');

async function getQualitativeFitTests() {
    try {
        let pool = await sql.connect(config);
        let qualitativeFitTests = await pool.request().execute('SelectQualitativeFitTests');
        return qualitativeFitTests.recordsets[0];
    }
    catch(err){
        return err
    }
};

async function getEmployeeQualitativeFitTests(employeeID) {
    try {
        let pool = await sql.connect(config);
        let employeeFitTests = await pool.request()
        .input('employeeID', sql.Int, employeeID)
        .execute('SelectEmployeeQualitativeFitTests');
        return employeeFitTests.recordset
    }
    catch(err){
        return err
    }
};

async function deleteQualitativeFitTest(qualitativeTestID) {
    try {
        let pool = await sql.connect(config);
        let qualitativeFitTest = await pool.request()
        .input('qualitativeTestID', sql.Int, qualitativeTestID)
        .execute('DeleteQualitativeFitTest');
        let deletedRecord = Object.values(qualitativeFitTest.recordset[0])
        return deletedRecord
    }
    catch(err){
        return err
    }
};

async function addQualitativeFitTest(newQualitativeFitTest) {
    try {
        let pool = await sql.connect(config)
        let addQualitativeFitTest = await pool.request()
            .input('qualitativeTestType', sql.NVarChar, newQualitativeFitTest.qualitativeTestType)
            .input('qualitativeTasteThreshold', sql.NVarChar, newQualitativeFitTest.qualitativeTasteThreshold)
            .input('qualitativeTestPass', sql.Bit, newQualitativeFitTest.qualitativeTestPass)
            .input('qualitativeTestDate', sql.Date, newQualitativeFitTest.qualitativeTestDate)
            .input('qualitativeTestTime', sql.NVarChar, newQualitativeFitTest.qualitativeTestTime)
            .input('qualitativeTestExpiration', sql.Date, newQualitativeFitTest.qualitativeTestExpiration)
            .input('employeeID', sql.Int, newQualitativeFitTest.employeeID)
            .input('respiratorID', sql.Int, newQualitativeFitTest.respiratorID)
            .execute('AddQualitativeFitTest')
        return addQualitativeFitTest.recordsets[0]
    }
    catch(err){
        return err
    }
}

async function updateQualitativeFitTest(updateQualitativeFitTest) {
    try {
        let pool = await sql.connect(config)
        let updatedRespirator = await pool.request()
            .input('qualitativeTestID', sql.Int, updateQualitativeFitTest.qualitativeTestID)
            .input('qualitativeTestType', sql.NVarChar, updateQualitativeFitTest.qualitativeTestType)
            .input('qualitativeTasteThreshold', sql.NVarChar, updateQualitativeFitTest.qualitativeTasteThreshold)
            .input('qualitativeTestPass', sql.Bit, updateQualitativeFitTest.qualitativeTestPass)
            .input('qualitativeTestDate', sql.Date, updateQualitativeFitTest.qualitativeTestDate)
            .input('qualitativeTestTime', sql.NVarChar, updateQualitativeFitTest.qualitativeTestTime)
            .input('qualitativeTestExpiration', sql.Date, updateQualitativeFitTest.qualitativeTestExpiration)
            .input('employeeID', sql.Int, updateQualitativeFitTest.employeeID)
            .input('respiratorID', sql.Int, updateQualitativeFitTest.respiratorID)
            .execute('UpdateQualitativeFitTest')
        return updatedRespirator.recordsets[0]
    }
    catch(err){
        return err
    }
}

module.exports = {
    getQualitativeFitTests: getQualitativeFitTests,
    getEmployeeQualitativeFitTests: getEmployeeQualitativeFitTests,
    addQualitativeFitTest: addQualitativeFitTest,
    deleteQualitativeFitTest: deleteQualitativeFitTest,
    updateQualitativeFitTest: updateQualitativeFitTest
}
