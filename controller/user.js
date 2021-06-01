const userService = require('../service/user')
/**
 * 获取用户列表
 * @param ctx
 * @returns {Promise<void>}
 */
const getUserList = async (ctx)=>{
    await userService.getUserList(ctx)
}
/**
 * 获取当前用户信息
 * @param ctx
 * @returns {Promise<void>}
 */
const getCurrentUser = async (ctx)=>{
    await userService.getCurrentUser(ctx)
}
/**
 * 登录
 * @param ctx
 * @returns {Promise<void>}
 */
const login = async (ctx)=>{
    await userService.login(ctx)
}
/**
 * 新增用户
 * @param ctx
 * @returns {Promise<void>}
 */
const addUser = async (ctx)=>{
    await userService.addUser(ctx)
}
/**
 * 修改用户信息
 * @param ctx
 * @returns {Promise<void>}
 */
const updateUser = async (ctx)=>{
    await userService.updateUser(ctx)
}
/**
 * 删除用户
 * @param ctx
 * @returns {Promise<void>}
 */
const deleteUser = async (ctx)=>{
    await userService.deleteUser(ctx)
}
module.exports = {
    getUserList,
    getCurrentUser,
    login,
    addUser,
    updateUser,
    deleteUser
}
