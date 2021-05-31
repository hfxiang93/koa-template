const HOST = '127.0.0.1'
const PORT = 3306
const USER = 'root'
const PASSWORD = '123456'
const DATABASE = 'power'

const mysql = {
    host: HOST,
    port: PORT,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    charset: "UTF8_GENERAL_CI",
    connectTimeout: 1000,
    connectionLimit: 100,
}
module.exports = mysql
