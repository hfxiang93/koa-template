const Router = require('koa-router')
const controller = require('../controller')
let user = new Router()

user.get('/userList',controller.user.getUserList)
user.get('/currentUser', controller.user.getCurrentUser)
module.exports = user
