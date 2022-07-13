'use strict';
const config = require('./config.js');
const sql = require('mssql');

async function getCompanies() {
    try {
        let pool = await sql.connect(config);
        let companies = await pool.request().execute('SelectAllCompanies');
        return companies.recordsets[0];
    }
    catch(err){
        return err
    }
};

async function getCompany(companyID) {
    try {
        let pool = await sql.connect(config);
        let company = await pool.request()
        .input('companyID', sql.Int, companyID)
        .execute('SelectCompany');
        return company.recordset[0]
    }
    catch(err){
        return err
    }
};

async function deleteCompany(companyID) {
    try {
        let pool = await sql.connect(config);
        let company = await pool.request()
        .input('companyID', sql.Int, companyID)
        .execute('DeleteCompany');
        return company.recordset[0]
    }
    catch(err){
        return err
    }
};

async function addCompany(newCompany) {
    try {
        let pool = await sql.connect(config)
        let addCompany = await pool.request()
            .input('address1', sql.NVarChar, newCompany.address1)
            .input('address2', sql.NVarChar, newCompany.address2)
            .input('address3', sql.NVarChar, newCompany.address3)
            .input('city', sql.NVarChar, newCompany.city)
            .input('state', sql.NVarChar, newCompany.state)
            .input('zip', sql.VarChar, newCompany.zip)
            .input('email', sql.NVarChar, newCompany.email)
            .input('altEmail', sql.NVarChar, newCompany.altEmail)
            .input('phoneNumber', sql.NVarChar, newCompany.phoneNumber)
            .input('ext', sql.VarChar, newCompany.ext)
            .input('companyName', sql.NVarChar, newCompany.companyName)
            .execute('AddCompany')
        return addCompany.recordsets[0]
    }
    catch(err){
        return err
    }
}

async function updateCompany(newCompany) {
    try {
        let pool = await sql.connect(config)
        let updateCompany = await pool.request()
            .input('companyID', sql.Int, newCompany.companyID)
            .input('address1', sql.NVarChar, newCompany.address1)
            .input('address2', sql.NVarChar, newCompany.address2)
            .input('address3', sql.NVarChar, newCompany.address3)
            .input('city', sql.NVarChar, newCompany.city)
            .input('state', sql.NVarChar, newCompany.state)
            .input('zip', sql.VarChar, newCompany.zip)
            .input('email', sql.NVarChar, newCompany.email)
            .input('altEmail', sql.NVarChar, newCompany.altEmail)
            .input('phoneNumber', sql.NVarChar, newCompany.phoneNumber)
            .input('ext', sql.VarChar, newCompany.ext)
            .input('companyName', sql.NVarChar, newCompany.companyName)
            .execute('UpdateCompany')
        return updateCompany.recordsets[0]
    }
    catch(err){
        return err
    }
}

module.exports = {
    getCompanies: getCompanies,
    getCompany: getCompany,
    addCompany: addCompany,
    deleteCompany: deleteCompany,
    updateCompany: updateCompany
}
