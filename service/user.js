const userModel = require('../model/user')
const getUserList = async(ctx)=>{
    if ( ctx.session && ctx.session.isLogin && ctx.session.userName ) {
        return await userModel.queryAll()
    }else{
        return '暂无权限'
    }
}
const getCurrentUser = async(id)=>{
    return await userModel.queryOneById(id)
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
        const results = await userModel.queryByName(userName)
        if(!results){
            return '该用户名不存在'
        }else if(results.password === password) {
            let session = ctx.session
            session.isLogin = true
            session.userName = results.userName
            session.userId = results.id
            return '登录成功'
        }else {
            return '密码错误'
        }
    }
}
module.exports = {
    getUserList,
    getCurrentUser,
    login
}
