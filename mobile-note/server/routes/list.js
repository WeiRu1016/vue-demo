var express = require('express')
var ItemModel = require('../models/item')
var untils = require('../public/js/until')
var ObjectID = require('mongodb').ObjectID
var router = express.Router()

router.get('/find', function (req, res, next) {
  console.log('获取全部信息')
  var query = req.query.type ? req.query : {}
  ItemModel.find(query, function (err, docs) {
    if (err) {
      return res.send(new Error(err))
    }
    return res.jsonp({code: 200, list: docs})
  })
})

router.get('/findById', function (req, res, next) {
  var id = req.query._id
  if (!id) {
    return res.send(new Error('参数错误'))
  }
  id = ObjectID(id)
  ItemModel.findOne({_id: id}, function (err, doc) {
    if (err) {
      return res.send(new Error(err))
    }
    return res.jsonp({code: 200, item: doc})
  })
})

router.get('/findByDate', function (req, res, next) {
  console.log('获取date下的信息')
  var date = req.query.date
  if (!date) {
    return res.jsonp({code: 201, msg: '请求时间参数为空'})
  }
  var dateMin = new Date(untils.formatTime(date))
  var dateMax = dateMin
  dateMax.setDate(dateMax.getDate() + 1)
  ItemModel.findByDate({dateMax, dateMin}, function (err, docs) {
    if (err) {
      return res.jsonp({code: 202, msg: '数据库错误'})
    }
    return res.jsonp({code: 200, items: docs})
  })
})

router.post('/add', function (req, res, next) {
  console.log('添加')
  var item = req.body
  ItemModel.insert(item, function (err, doc) {
    if (err) {
      return res.send(new Error(err))
    }
    return res.jsonp({code: 200, item: doc})
  })
})

router.post('/remove', function (req, res, next) {
  var id = req.body.id
  ItemModel.remove({_id: id}, function (err, doc) {
    if (err) {
      return res.send(new Error(err))
    }
    return res.jsonp({code: 200})
  })
})

router.post('/update', function (req, res, next) {
  var item = req.body
  var id = req.query.id
  ItemModel.update(id, item, function (err, doc) {
    if (err) {
      return res.send(new Error(err))
    }
    return res.jsonp({code: 200, item: doc})
  })
})

router.get('/aa', function (req, res, next) {
  res.jsonp('aaaa')
})

router.get('/index.js.map', function (req, res, next) {
  res.jsonp('lists/index.js.map')
})

module.exports = router

