const Koa = require("koa")
const Router = require("koa-router")
const mockList = require("./mock")

const app = new Koa()
const router = new Router()

// 模拟延迟返回数据
async function getRes(fn) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = fn()
      resolve(res)
    }, 1000)
  })
}

// 注册 mock 路由
mockList.forEach((item) => {
  const { url, method, response } = item
  router[method](url, async (ctx) => {
    const res = await getRes(response)
    ctx.body = res
  })
})

app.use(router.routes())
app.listen(3001)
