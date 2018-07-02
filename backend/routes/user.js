
const Router = require('koa-router')
const router = new Router()

router.post('/api/login', (ctx, next) => {
  const username = ctx.body.username
  const password = ctx.body.password
  if (username === 'devdev' && password === '123456') {
    ctx.status = 200
    ctx.body = {
      status: 'success',
      code: 0,
      msg: 'success',
      user: {
        username: username,
      }
    }
    next()
  } else {
    ctx.status = 401
    ctx.body = {
      status: 'fail',
      code: -1,
      msg: 'Wrong username or password',
      user: null
    }
  }
})

module.exports = router
