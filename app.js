const Koa = require('koa')
const app = new Koa()
const path = require('path')
const logGenerator = require('./middleware/logger-generator')
const convert = require('koa-convert')
const router = require('./router/index')
const bodyParser = require('koa-bodyparser')
const staticFn = require('koa-static')

const staticPath = './static'
// 使用静态资源中间件
app.use(convert(staticFn(
    path.join( __dirname,  staticPath)
)))
// body请求体解析中间件
app.use(bodyParser())
// 使用自定义日志中间件
app.use(convert(logGenerator()))
// 挂载路由
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
console.log('app is running at port 3000')
