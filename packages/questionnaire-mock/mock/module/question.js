const Mock = require("mockjs")
const Random = Mock.Random
const getQuestionList = require("../data/getQuestionList")

module.exports = [
  {
    // 获取单个问卷信息
    url: "/api/question/:id",
    method: "get",
    response() {
      return {
        code: 1,
        data: {
          id: Random.id(),
          title: Random.ctitle(),
          answerCount: Random.natural(50, 500),
          createTime: Random.datetime(),
          isPublished: Random.boolean(),
          isStar: Random.boolean(),
          isDeleted: Random.boolean(),
        },
      }
    },
  },
  {
    // 创建问卷
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
  {
    // 获取问卷列表
    url: "/api/question",
    method: "get",
    response() {
      return {
        code: 1,
        data: {
          list: getQuestionList(),
          total: 100,
        },
        msg: "获取成功",
      }
    },
  },
]
