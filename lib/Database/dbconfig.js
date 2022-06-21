'use strict'
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

module.exports = config