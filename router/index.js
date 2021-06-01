const Router = require('koa-router')
let router = new Router()
const user = require('./user')
const power = require('./power')
const upload = require('./upload')

// 用户模块
router.use('/user', user.routes(), user.allowedMethods())
// 权限模块
router.use('/power', power.routes(), power.allowedMethods())
// 下载模块
router.use('/upload', upload.routes(), upload.allowedMethods())

module.exports = router
