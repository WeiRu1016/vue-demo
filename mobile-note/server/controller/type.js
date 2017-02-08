const {wrap: async} = require('co')
const Type = require('../models/type')

exports.findType = async(function * (req, res, next) {
  yield Type.all().then(data => {
    let list = {}
    for (let ele of data) {
      list[ele.type] = ele
    }
    return res.jsonp({
      code: 200,
      msg: '请求成功',
      list: list
    })
  }).catch(err => {
    return res.jsonp({
      code: 201,
      msg: '获取错误',
      error: err
    })
  })
})
