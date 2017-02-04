var express = require('express')
var router = express.Router()
var ItemModel = require('../models/item')

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

router.post('/add', function (req, res, next) {
  var item = req.body
  ItemModel.insert(item, function (err, doc) {
    if (err) {
      return res.send(new Error(err))
    }
    return res.jsonp({code: 200})
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
    return res.jsonp({code: 200})
  })
})

router.get('/aa', function (req, res, next) {
  res.jsonp('aaaa')
})

router.get('/index.js.map', function (req, res, next) {
  res.jsonp('lists/index.js.map')
})

module.exports = router

