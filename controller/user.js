const getUserList = async (ctx)=>{
    console.log('请求了')
    let url = ctx.url
    let request = ctx.request
    let req_query = request.query
    ctx.body = {
        url,
        req_query,
    }
}
const getCurrentUser = async (ctx)=>{
    ctx.body = {
        code:200,
        data: {
            name: 'jack',
            sex: 0
        },
        res:'ok'
    }
}
module.exports = {
    getUserList,
    getCurrentUser
}
