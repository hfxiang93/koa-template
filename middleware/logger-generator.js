function log(ctx){
    console.log(ctx.method,ctx.header.host+ctx.url)
}
module.exports = function (){
    return async function (ctx,next){
        const time1 = new Date()
        log(ctx)
        if (next){
            await next()
        }
        const time2 = new Date() - time1
        console.log(`请求耗时${time2}ms`)
    }
}
