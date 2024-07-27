const Koa = require("koa")
const Router = require("koa-router")
const cors = require("koa2-cors")
const mockList = require("./mock")

const app = new Koa()
const router = new Router()

app.use(
  cors({
    origin: "*", // 允许所有来源
    credentials: true, // 允许发送 cookies
    allowMethods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"], // 允许的方法
    exposeHeaders: [], // 允许暴露的响应头
    maxAge: 5, // 预检请求的有效期
    allowHeaders: ["Content-Type", "Authorization", "Accept"], // 允许的头部
  })
)

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
