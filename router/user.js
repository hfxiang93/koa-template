const Router = require('koa-router')
const controller = require('../controller')
let user = new Router()
// 登录
user.post('/login',controller.user.login)
// 新增用户
user.post('/addUser',controller.user.addUser)
// 获取所有用户列表
user.get('/userList',controller.user.getUserList)
// 获取当前用户信息
user.get('/currentUser', controller.user.getCurrentUser)

module.exports = user
