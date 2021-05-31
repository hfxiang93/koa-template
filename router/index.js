const Router = require('koa-router')
let router = new Router()
const user = require('./user')
const power = require('./power')
const upload = require('./upload')

router.use('/user', user.routes(), user.allowedMethods())
router.use('/power', power.routes(), power.allowedMethods())
router.use('/upload', upload.routes(), upload.allowedMethods())

module.exports = router
