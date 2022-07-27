'use strict';
const config = require('./config.js');
const sql = require('mssql');

async function getQuantitativeFitTests() {
    try {
        let pool = await sql.connect(config);
        let quantitativeFitTest = await pool.request().execute('SelectQuantitativeFitTests');
        return quantitativeFitTest.recordsets[0];
    }
    catch(err){
        return err;
    };
};

async function getEmployeeQuantitativeFitTests(employeeID) {
    console.log('in here too')
    try {
        let pool = await sql.connect(config);
        let employeeFitTests = await pool.request()
        .input('employeeID', sql.Int, employeeID)
        .execute('SelectEmployeeQuantitativeFitTests');
        return employeeFitTests.recordset;
    }
    catch(err){
        return err;
    };
};

async function deleteQuantitativeFitTest(quantitativeTestID) {
    try {
        let pool = await sql.connect(config);
        let quantitativeFitTest = await pool.request()
        .input('quantitativeTestID', sql.Int, quantitativeTestID)
        .execute('DeleteQuantitativeFitTest');
        let deletedRecord = Object.values(quantitativeFitTest.recordset[0]);
        return deletedRecord;
    }
    catch(err){
        return(err);
    };
};

async function addQuantitativeFitTest(newQuantitativeFitTest) {
    console.log(newQuantitativeFitTest)
    try {
        let pool = await sql.connect(config);
        let addQuantitativeFitTest = await pool.request()
            .input('maskType', sql.NVarChar, newQuantitativeFitTest.maskType)
            .input('quantitativeOverallTestPass', sql.Bit, newQuantitativeFitTest.quantitativeOverallTestPass)
            .input('quantitativeTestDate', sql.Date, newQuantitativeFitTest.quantitativeTestDate)
            .input('quantitativeTestTime', sql.NVarChar, newQuantitativeFitTest.quantitativeTestTime)
            .input('quantitativeTestExpiration', sql.Date, newQuantitativeFitTest.quantitativeTestExpiration)
            .input('quantitativeTest1FitFactor', sql.Int, newQuantitativeFitTest.quantitativeTest1FitFactor)
            .input('quantitativeTest2FitFactor', sql.Int, newQuantitativeFitTest.quantitativeTest2FitFactor)
            .input('quantitativeTest3FitFactor', sql.Int, newQuantitativeFitTest.quantitativeTest3FitFactor)
            .input('quantitativeTest4FitFactor', sql.Int, newQuantitativeFitTest.quantitativeTest4FitFactor)
            .input('quantitativeTest5FitFactor', sql.Int, newQuantitativeFitTest.quantitativeTest5FitFactor)
            .input('quantitativeTest6FitFactor', sql.Int, newQuantitativeFitTest.quantitativeTest6FitFactor)
            .input('quantitativeTest7FitFactor', sql.Int, newQuantitativeFitTest.quantitativeTest7FitFactor)
            .input('quantitativeTest8FitFactor', sql.Int, newQuantitativeFitTest.quantitativeTest8FitFactor)
            .input('quantitativeOverallFitFactor', sql.Int, newQuantitativeFitTest.quantitativeOverallFitFactor)
            .input('employeeID', sql.Int, newQuantitativeFitTest.employeeID)
            .input('respiratorID', sql.Int, newQuantitativeFitTest.respiratorID)
            .input('respiratorSize', sql.NVarChar, newQuantitativeFitTest.respiratorSize)
            .execute('AddQuantitativeFitTest');
        return addQuantitativeFitTest.recordsets[0];
    }
    catch(err){
        return err;
    };
};

async function updateQuantitativeFitTest(updateQuantitativeFitTest) {
    try {
        let pool = await sql.connect(config)
        let updatedQuantitativeFitTest = await pool.request()
        .input('quantitativeTestID', sql.Int, updateQuantitativeFitTest.quantitativeTestID)
        .input('maskType', sql.NVarChar, updateQuantitativeFitTest.maskType)
        .input('quantitativeOverallTestPass', sql.Bit, updateQuantitativeFitTest.quantitativeOverallTestPass)
        .input('quantitativeTestDate', sql.Date, updateQuantitativeFitTest.quantitativeTestDate)
        .input('quantitativeTestTime', sql.NVarChar, updateQuantitativeFitTest.quantitativeTestTime)
        .input('quantitativeTestExpiration', sql.Date, updateQuantitativeFitTest.quantitativeTestExpiration)
        .input('quantitativeTest1FitFactor', sql.Int, updateQuantitativeFitTest.quantitativeTest1FitFactor)
        .input('quantitativeTest2FitFactor', sql.Int, updateQuantitativeFitTest.quantitativeTest2FitFactor)
        .input('quantitativeTest3FitFactor', sql.Int, updateQuantitativeFitTest.quantitativeTest3FitFactor)
        .input('quantitativeTest4FitFactor', sql.Int, updateQuantitativeFitTest.quantitativeTest4FitFactor)
        .input('quantitativeTest5FitFactor', sql.Int, updateQuantitativeFitTest.quantitativeTest5FitFactor)
        .input('quantitativeTest6FitFactor', sql.Int, updateQuantitativeFitTest.quantitativeTest6FitFactor)
        .input('quantitativeTest7FitFactor', sql.Int, updateQuantitativeFitTest.quantitativeTest7FitFactor)
        .input('quantitativeTest8FitFactor', sql.Int, updateQuantitativeFitTest.quantitativeTest8FitFactor)
        .input('quantitativeOverallFitFactor', sql.Int, updateQuantitativeFitTest.quantitativeOverallFitFactor)
        .input('employeeID', sql.Int, updateQuantitativeFitTest.employeeID)
        .input('respiratorID', sql.Int, updateQuantitativeFitTest.respiratorID)
        .input('respiratorSize', sql.NVarChar, updateQuantitativeFitTest.respiratorSize)
        .execute('UpdateQuantitativeFitTest');
        return updatedQuantitativeFitTest.recordsets[0];
    }
    catch(err){
        return err;
    };
}

module.exports = {
    getQuantitativeFitTests: getQuantitativeFitTests,
    getEmployeeQuantitativeFitTests: getEmployeeQuantitativeFitTests,
    addQuantitativeFitTest: addQuantitativeFitTest,
    deleteQuantitativeFitTest: deleteQuantitativeFitTest,
    updateQuantitativeFitTest: updateQuantitativeFitTest
}
