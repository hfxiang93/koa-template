const Router = require('koa-router')
const controller = require('../controller')
let power = new Router()

power.get('/powerList',controller.power.getPowerList)
power.get('/currentPower', controller.power.getCurrentPower)
power.post('/addPower', controller.power.addPower)
module.exports = power
