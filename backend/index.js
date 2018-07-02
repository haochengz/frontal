
const Koa = require('Koa')
const koaBody = require('koa-body')
const { resolve } = require('path')
const app = new Koa()

const MIDDDLEWARES = [
  'user'
]

app.use(koaBody())
app.use((ctx, next) => {
  ctx.body = ctx.request.body;
  next()
});

MIDDDLEWARES.map((routeFile) => {
  return resolve(__dirname, 'routes', routeFile)
}).map((routePath) => {
  return require(routePath)
}).map((routeModule) => {
  app.use(routeModule.routes())
  app.use(routeModule.allowedMethods())
})

app.listen(3002, () => {
  console.log('Listening 3002 port')
})
