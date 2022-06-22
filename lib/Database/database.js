'use strict';
const config = require('./dbconfig.js')
const sql = require('mssql')

async function getCompanies() {
    try {
        let dbInfo = await sql.connect(config);
        let res = await dbInfo.request().query('SELECT * FROM [dbo].[Company]')
        return res.recordsets[0];
    }
    catch(err){
        console.log(err)
    }
}

async function getCompany(companyID) {
    try {
        let dbInfo = await sql.connect(config);
        let res = await dbInfo.request().query(`SELECT * FROM [dbo].[Company] WHERE companyID = ${companyID}`)
        return res.recordset[0]
    }
    catch(err){
        console.log(err)
    }
}

async function postCompany(newCompany) {
    console.log(newCompany)
    try {
        let dbInfo = await sql.connect(config);
        // let res = await dbInfo.request().input(`insert into [dbo].[Company] (companyAdress1, companyAddress2, companyAddress3, companyCity, companyState, companyZipCode, companyEmail, companyAltEmail, companyPhoneNumber, companyPhoneNumberExt, companyName) values (${newCompany.address1}, ${newCompany.address2}, ${newCompany.address3}, ${newCompany.city}, ${newCompany.state}, ${newCompany.zipCode}, ${newCompany.email}, ${newCompany.altEmail}, ${newCompany.phoneNumber}, ${newCompany.phoneNumberExt}, ${newCompany.companyName})`)
        let res = await dbInfo(`INSERT INTO [dbo].[Company](companyAdress1, companyCity, companyState, companyZipCode, companyEmail, companyPhoneNumber, companyName) VALUES(${newCompany.address1}, ${newCompany.city}, ${newCompany.state}, ${newCompany.zipCode}, ${newCompany.email}, ${newCompany.phoneNumber}, ${newCompany.companyName})`)
        return res
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {
    getCompanies: getCompanies,
    getCompany: getCompany,
    postCompany: postCompany
}
