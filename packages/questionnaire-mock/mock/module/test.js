const Mock = require("mockjs")

module.exports = [
  {
    url: "/api/test",
    method: "get",
    response() {
      return {
        code: 1,
        data: Mock.mock({
          "list|1-10": [
            {
              "id|+1": 1,
              name: "@cname",
              "age|18-60": 1,
              address: "@county(true)",
            },
          ],
        }),
      }
    },
  },
]
