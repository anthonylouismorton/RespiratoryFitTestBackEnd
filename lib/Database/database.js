'use strict';
// const { Connection, Request } = require("tedious")
const config = require('./dbconfig.js')

// const connection = new Connection(config)

// connection.on('connect', err => {
//     if(err){
//         console.error(err);
//     }
//     else {
//         queryDatabase();
//     }
// })

// connection.connect();

// function queryDatabase(){
//     const request = new Request(
//         `SELECT * FROM [dbo].[Company]`,
//         (err, rowCount) => {
//             if(err) {
//                 console.error(err.message);
//             }
//             else{
//                 console.log(`${rowCount} row(s) returned`)
//             }
//         }
//     )

// request.on('row', columns => {
//     columns.forEach(column => {
//         console.log("%s\t%s", column.metadata.colName, column.value)
//     })
// })
// connection.execSql(request)
// };

// module.exports = queryDatabase
