const db = require('../mysql/index')
const query = async()=>{
    const sql = 'SELECT * FROM users'
    return await db.query(sql)
}
const queryOne = async(id)=>{
    const sql = 'SELECT * FROM users WHERE id =' + id
    return await db.findOne(sql)
}
module.exports = {
    query,
    queryOne
}
