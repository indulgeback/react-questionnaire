const Mock = require("mockjs")

const Random = Mock.Random

module.exports = [
  // 获取单个问卷信息
  {
    url: "/api/question/:id",
    method: "get",
    response() {
      return {
        code: 1,
        data: {
          id: Random.id(),
          title: Random.ctitle(),
          content: Random.cparagraph(),
          answer: Random.cparagraph(),
          createTime: Random.date(),
          updateTime: Random.date(),
          status: Random.integer(0, 1),
        },
      }
    },
  },
  // 创建问卷
  {
    url: "/api/question",
    method: "post",
    response() {
      return {
        code: 1,
        data: {
          id: Random.id(),
        },
        msg: "创建成功",
      }
    },
  },
]
