const getPowerList = async (ctx)=>{
    let url = ctx.url
    let request = ctx.request
    let req_query = request.query
    let req_querystring = request.querystring
    ctx.body = {
        url,
        req_query,
        req_querystring,
    }
}
const getCurrentPower = async (ctx)=>{
    ctx.body = {
        code:200,
        data: {
            power: '获取资源列表'
        },
        msg:'ok'
    }
}
const addPower = async (ctx)=>{
    let params = ctx.request.body
    ctx.body = {
        code:200,
        data: params,
        msg:'ok'
    }
}
module.exports = {
    getPowerList,
    getCurrentPower,
    addPower
}
