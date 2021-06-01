const userModel = require('../model/user')
/**
 * 获取所有用户列表
 * @param ctx
 * @returns {Promise<Model[]|string>}
 */
const getUserList = async(ctx)=>{
    if ( ctx.session && ctx.session.isLogin && ctx.session.userName ) {
        const result =  await userModel.findAll({
            attributes:['userName','realName','tel','email','remark']
        })
        ctx.body = {
            code: 200,
            data: result,
            msg: 'ok'
        }
    }else{
        ctx.body = {
            code: 401,
            data: '暂无权限',
            msg: 'error'
        }
    }
}
/**
 * 获取当前用户信息
 * @param id 用户id
 * @returns {Promise<Model[]>}
 */
const getCurrentUser = async(ctx)=>{
    let { id } = ctx.request.query
    const result =  await userModel.findOne({
        attributes:['userName','realName','tel','email','remark'],
        where:{
            roleId:id
        }
    })
    ctx.body = {
        code: 200,
        data: result,
        msg: 'ok'
    }
}
/**
 * 登录
 * @param ctx{userName ,password}
 * @returns {Promise<string>}
 */
const login = async(ctx)=>{
    console.log(ctx.request.body)
    const { userName ,password } = ctx.request.body
    ctx.body = {
        code: 200,
        data: {},
        msg: 'ok'
    }
    if (!userName){
        ctx.body.data = '用户名不能为空!'
    }
    if (!password){
        ctx.body.data = '密码不能为空!'
    }
    if(userName&&password){
        const results = await userModel.findAll({
            where: {
                userName:userName
            }
        })
        if(results.length === 0){
            ctx.body.data = '该用户名不存在'
        }else if(results[0].password === password) {
            let session = ctx.session
            session.isLogin = true
            session.userName = results[0].userName
            session.userId = results[0].id
            ctx.body.data = '登录成功'
        }else {
            ctx.body.data = '密码错误'
        }
    }
}
/**
 * 新增用户
 * @param ctx{'userName','realName','tel','email','remark'...}
 * @returns {Promise<string|Model[]|*>}
 */
const addUser = async (ctx)=>{
    console.log(ctx.request.body)
    ctx.body = {
        code: 200,
        data: {},
        msg: 'ok'
    }
    const { userName ,password } = ctx.request.body
    if (!userName){
        ctx.body.data = '用户名不能为空!'
    }
    if (!password){
        ctx.body.data = '密码不能为空!'
    }
    if(userName&&password){
        const results = await userModel.findAll({
            where: {
                userName:userName
            }
        })
        if(results.length === 0){
            try{
                const res = await userModel.create(ctx.request.body);
                if (res) {
                    return await userModel.findAll({
                        attributes:['userName','realName','tel','email','remark'],
                        where:{
                            id:res.id
                        }
                    })
                }
            }catch (e) {
                ctx.body.data = e
            }
        }else {
            ctx.body.data = '该用户名已存在'
        }
    }
}
module.exports = {
    getUserList,
    getCurrentUser,
    login,
    addUser
}
