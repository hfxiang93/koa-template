const db = require('../mysql/index')
const queryAll = async()=>{
    const sql = 'SELECT * FROM users'
    return await db.query(sql)
}
const queryOneById = async(id)=>{
    const sql = 'SELECT * FROM users WHERE id =' + id
    return await db.findOne(sql)
}
const queryByName = async(userName)=>{
    const sql = `SELECT * FROM users WHERE userName = '${userName}'`
    return await db.findOne(sql)
}
module.exports = {
    queryAll,
    queryOneById,
    queryByName
}
