const {wrap: async} = require('co')
const Item = require('../models/item')
exports.index = async(function * (req, res, next) {
  let page = req.query.page
  let limit = req.query.limit
  yield Item.all(page, limit).then((data) => {
    let list = {}
    for (let ele of data) {
      ele = ele.toObject()
      ele.date = ele.date.toLocaleDateString()
      if (!list[ele.date]) {
        list[ele.date] = {
          incoming: 0,
          outcoming: 0,
          items: []
        }
      }
      list[ele.date].items.push(ele)
      ele.type === 'in' ? list[ele.date].incoming += ele.money : list[ele.date].outcoming += ele.money
    }
    return res.jsonp({
      code: 200,
      msg: '请求成功',
      list: list
    })
  }).catch((err) => {
    return res.jsonp({
      code: 201,
      msg: '请求错误',
      error: err
    })
  })
})
exports.item = async(function * (req, res, next) {
  let id = req.query.id
  yield Item.getById(id).then((data) => {
    data = data.toObject()
    data.date = data.date.toLocaleDateString()
    return res.jsonp({
      code: 200,
      msg: '请求成功',
      item: data
    })
  }).catch(err => {
    return res.jsonp({
      code: 201,
      msg: '没有此条目',
      error: err
    })
  })
})
exports.dateList = async(function * (req, res, next) {
  let date = req.query.date
  if (!date) {
    return res.jsonp({code: 201, msg: '请求时间参数为空'})
  }
  let dateMin = new Date(new Date(date).toUTCString())
  let timeoff = dateMin.getTimezoneOffset()
  dateMin.setMinutes(dateMin.getMinutes() + timeoff)
  let dateMax = new Date(dateMin)
  dateMax.setUTCDate(dateMax.getUTCDate() + 1)

  yield Item.getByDate({dateMax, dateMin}).then(data => {
    for (let ele of data) {
      ele = ele.toObject()
      ele.date = ele.date.toLocaleDateString()
    }
    return res.jsonp({
      code: 200,
      msg: `请求${date}下明细成功`,
      list: data
    })
  }).catch(err => {
    return res.jsonp({
      code: 201,
      msg: '请求时间错误',
      error: err
    })
  })
})
exports.add = async(function * (req, res, next) {
  let item = req.body
  yield Item.add(item).then(data => {
    data = data.toObject()
    data.date = data.date.toLocaleDateString()
    return res.jsonp({
      code: 200,
      msg: '添加成功',
      item: data
    })
  }).catch(err => {
    return res.jsonp({
      code: 201,
      msg: '添加错误',
      error: err
    })
  })
})
exports.remove = async(function * (req, res, next) {
  let id = req.body.id
  yield Item.remove(id).then(data => {
    return res.jsonp({
      code: 200,
      msg: '删除成功'
    })
  }).catch(err => {
    return res.jsonp({
      code: 201,
      msg: '删除错误',
      error: err
    })
  })
})
exports.update = async(function * (req, res, next) {
  let id = req.query.id
  let item = req.body
  yield Item.edit(id, item).then(data => {
    return res.jsonp({
      code: 200,
      msg: '修改成功'
    })
  }).catch(err => {
    return res.jsonp({
      code: 201,
      msg: '修改错误',
      error: err
    })
  })
})
