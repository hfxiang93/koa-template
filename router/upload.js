const Router = require('koa-router')
const path = require('path')
let upload = new Router()
const { uploadFile } = require('../util/upload')
upload.post('/',async ( ctx ) => {
        // 上传文件请求处理
        let result = { success: false }
        let serverFilePath = path.join( path.resolve(__dirname, '..'), 'static' )

        // 上传文件事件
        result = await uploadFile( ctx, {
            fileType: 'album',
            path: serverFilePath
        })
        ctx.body = result

})

module.exports = upload
