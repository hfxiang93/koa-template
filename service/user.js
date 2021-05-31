const userModel = require('../model/user')
const getUserList = async(ctx)=>{
    if ( ctx.session && ctx.session.isLogin && ctx.session.userName ) {
        return await userModel.query()
    }else{
        return '暂无权限'
    }
}
const getCurrentUser = async(id)=>{
    return await userModel.queryOne(id)
}
const login = async(ctx)=>{
    console.log(ctx.request.body)
    const { userName ,password } = ctx.request.body
    if (!userName){
        return '用户名不能为空!'
    }
    if (!password){
        return '密码不能为空!'
    }
    if(userName&&password){
        const sql = `SELECT * FROM users WHERE userName = '${userName}'`
        const results = await userModel.query(sql)
        if(results.length === 0){
            return '该用户名不存在'
        }else if(results[0].userName!==userName){
            return '该用户名不存在'
        }else if(results[0].password === password) {
            let session = ctx.session
            session.isLogin = true
            session.userName = results[0].userName
            session.userId = results[0].id
            return '登录成功'
        }else {
            return '密码错误'
        }
    }
    // return await userModel.queryOne()
}
module.exports = {
    getUserList,
    getCurrentUser,
    login
}
