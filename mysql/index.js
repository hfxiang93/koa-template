const DateBase = require('./generatorDB')
const mysql = {
    host: '127.0.0.1',
    port: 3306,
    user: "root",
    password: "123456",
    database: "power",
    charset: "UTF8_GENERAL_CI",
    connectTimeout: 1000,
    connectionLimit: 100,
}
const db = new DateBase(mysql)
module.exports = db
