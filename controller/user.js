const userService = require('../service/user')
const getUserList = async (ctx)=>{
    let result = await userService.getUserList(ctx)
    ctx.body = {
        code: 200,
        data: result,
        msg: 'ok'
    }
}
const getCurrentUser = async (ctx)=>{
    let { id } = ctx.request.query
    let result = await userService.getCurrentUser(id)
    ctx.body = {
        code: 200,
        data: result,
        msg: 'ok'
    }
}
const login = async (ctx)=>{
    const result = await userService.login(ctx)
    ctx.body = {
        code: 200,
        data: result,
        msg: 'ok'
    }
}
module.exports = {
    getUserList,
    getCurrentUser,
    login
}
