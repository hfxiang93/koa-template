const DateBase = require('./generatorDB')
const mysql = require('../config/mysql')
const db = new DateBase(mysql)
module.exports = db
