const userSechma = require('../sechma/user')
const { sequelize } = require('../mysql/sequelize');
// 定义用户模型
const User =sequelize.define('User',userSechma);
// 模型同步，这将检查数据库中表的当前状态(它具有哪些列,它们的数据类型等),然后在表中进行必要的更改以使其与模型匹配.
// User.sync({alter: true})

console.log(User === sequelize.models.User)

module.exports = User
