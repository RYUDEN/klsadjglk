const Koa = require('koa')
const static_ = require('koa-static')
const path = require('path')

var app = new Koa();

/**
 * 
 * 静态资源处理 前端可以访问
 */
app.use(static_(
    path.join(__dirname, './public/')
))
app.listen(80);