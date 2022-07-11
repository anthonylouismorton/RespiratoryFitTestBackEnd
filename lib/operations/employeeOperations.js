'use strict';
const config = require('./config.js');
const sql = require('mssql');

async function getAllemployees() {
    try {
        let pool = await sql.connect(config);
        let employees = await pool.request().execute('SelectAllEmployees');
        return employees.recordsets[0];
    }
    catch(err){
        console.log(err)
    }
};

async function getCompanyEmployees(companyID) {
    try {
        let pool = await sql.connect(config);
        let companyEmployees = await pool.request()
        .input('companyID', sql.Int, companyID)
        .execute('SelectCompanyEmployees');
        return companyEmployees.recordsets[0];
    }
    catch(err){
        console.log(err)
    }
};

async function getEmployee(employeeID) {
    console.log(employeeID)
    try {
        let pool = await sql.connect(config);
        let employee = await pool.request()
        .input('employeeID', sql.Int, employeeID)
        .execute('SelectEmployee');
        console.log(employee)
        return employee.recordset[0]
    }
    catch(err){
        console.log(err)
    }
};

async function deleteEmployee(employeeID) {
    try {
        let pool = await sql.connect(config);
        let employee = await pool.request()
        .input('employeeID', sql.Int, employeeID)
        .execute('DeleteEmployee');
        return employee.recordset[0]
    }
    catch(err){
        console.log(err)
    }
};

async function addEmployee(newEmployee) {
    try {
        let pool = await sql.connect(config)
        let addEmployee = await pool.request()
            .input('address1', sql.NVarChar, newEmployee.address1)
            .input('address2', sql.NVarChar, newEmployee.address2)
            .input('address3', sql.NVarChar, newEmployee.address3)
            .input('firstName', sql.NVarChar, newEmployee.firstName)
            .input('middleName', sql.NVarChar, newEmployee.middleName)
            .input('lastName', sql.NVarChar, newEmployee.lastName)
            .input('city', sql.NVarChar, newEmployee.city)
            .input('state', sql.VarChar, newEmployee.state)
            .input('zip', sql.VarChar, newEmployee.zip)
            .input('dob', sql.Date, newEmployee.dob)
            .input('ssn', sql.NVarChar, newEmployee.ssn)
            .input('employeePhoneNumber', sql.VarChar, newEmployee.employeePhoneNumber)
            .input('employeeEmail', sql.NVarChar, newEmployee.employeeEmail)
            .input('companyID', sql.Int, newEmployee.companyID)
            .execute('AddEmployee')
        return addEmployee.recordsets[0]
    }
    catch(err){
        console.log(err)
    }
}

async function updateEmployee(updatedEmployee) {
    try {
        let pool = await sql.connect(config);
        let updateEmployee = await pool.request()
            .input('employeeID', sql.Int, updatedEmployee.employeeID)
            .input('address1', sql.NVarChar, updatedEmployee.address1)
            .input('address2', sql.NVarChar, updatedEmployee.address2)
            .input('address3', sql.NVarChar, updatedEmployee.address3)
            .input('firstName', sql.NVarChar, updatedEmployee.firstName)
            .input('middleName', sql.NVarChar, updatedEmployee.middleName)
            .input('lastName', sql.NVarChar, updatedEmployee.lastName)
            .input('city', sql.NVarChar, updatedEmployee.city)
            .input('state', sql.VarChar, updatedEmployee.state)
            .input('zip', sql.VarChar, updatedEmployee.zip)
            .input('dob', sql.Date, updatedEmployee.dob)
            .input('ssn', sql.NVarChar, updatedEmployee.ssn)
            .input('employeePhoneNumber', sql.VarChar, updatedEmployee.employeePhoneNumber)
            .input('employeeEmail', sql.NVarChar, updatedEmployee.employeeEmail)
            .input('companyID', sql.Int, updatedEmployee.companyID)
            .execute('UpdateEmployee')
        return updateEmployee.recordsets[0]
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {
    getAllemployees: getAllemployees,
    getCompanyEmployees: getCompanyEmployees,
    getEmployee: getEmployee,
    addEmployee: addEmployee,
    deleteEmployee: deleteEmployee,
    updateEmployee: updateEmployee
}
