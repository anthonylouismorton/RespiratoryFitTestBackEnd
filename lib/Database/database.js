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

module.exports = {
    getCompanies: getCompanies
}
