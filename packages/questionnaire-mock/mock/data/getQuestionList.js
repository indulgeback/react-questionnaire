/**
 * @description 生成问卷列表
 * @author IndulgeBack
 */

const Mock = require("mockjs")
const Random = Mock.Random

function getQuestionList(len = 10, isDeleted = false) {
  const list = []
  for (let i = 0; i < len; i++) {
    list.push({
      id: Random.id(),
      title: Random.ctitle(),
      answerCount: Random.natural(50, 500),
      createTime: Random.datetime(),
      isPublished: Random.boolean(),
      isStar: Random.boolean(),
      isDeleted,
    })
  }
  return list
}

module.exports = getQuestionList
