
const Router = require('koa-router')
const router = new Router()

router.post('/api/login', (ctx, next) => {
  const username = ctx.body.username
  const password = ctx.body.password
  console.log(username, ' : ', password)
})

module.exports = router
