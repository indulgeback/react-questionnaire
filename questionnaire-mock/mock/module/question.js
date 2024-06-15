const Mock = require("mockjs")

const Random = Mock.Random

module.exports = [
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
]
