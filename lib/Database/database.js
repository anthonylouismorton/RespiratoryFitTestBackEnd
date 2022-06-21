'use strict';
const { Connection, Request } = require("tedious")
require('dotenv').config();

const config = {
    authentication: {
        options: {
            userName: `${process.env.USER}`,
            password: `${process.env.PASSWORD}`
        },
        type: 'default'
    },
    server: `${process.env.SERVER}`,
    options: {
        database: `${process.env.DATABASE}`,
        encrypt: true
    }
}

const connection = new Connection(config)

connection.on('connect', err => {
    if(err){
        console.error(err);
    }
    else {
        queryDatabase();
    }
})

connection.connect();

function queryDatabase(){
    const request = new Request(
        `SELECT * FROM [dbo].[Company]`,
        (err, rowCount) => {
            if(err) {
                console.error(err.message);
            }
            else{
                console.log(`${rowCount} row(s) returned`)
            }
        }
    )

request.on('row', columns => {
    columns.forEach(column => {
        console.log("%s\t%s", column.metadata.colName, column.value)
    })
})
connection.execSql(request)
};

// var dbConfig = {
//     server: `${process.env.SERVER}`,
//     database: `${process.env.DATABASE}`,
//     user: `${process.env.USER}`,
//     password:`${process.env.PASSWORD}`,
//     options: {
//         encrypt: true
//     }

// }

// async function getCompany(){
//     try{
//     await sql.connect(dbConfig)
//     const result = await sql.query`select * from Company`
//     console.log(result)
//     return result
//     }
//     catch(err){
//         console.log(err)
//     }

// }
