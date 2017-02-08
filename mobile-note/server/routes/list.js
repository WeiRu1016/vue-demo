let express = require('express')
// let ItemModel = require('../models/item')
// let ObjectID = require('mongodb').ObjectID
let router = express.Router()
let listController = require('../controller/list')

router.get('/find', listController.index)
router.get('/findById', listController.item)
router.get('/findByDate', listController.dateList)
router.post('/add', listController.add)
router.post('/remove', listController.remove)
router.post('/update', listController.update)
// router.get('/find', function (req, res, next) {
//   console.log('获取全部信息')
//   let query = req.query.type ? req.query : {}
//   ItemModel.find(query, function (err, docs) {
//     if (err) {
//       return res.send(new Error(err))
//     }
//     return res.jsonp({code: 200, list: docs})
//   })
// })

// router.get('/findById', function (req, res, next) {
//   let id = req.query._id
//   if (!id) {
//     return res.send(new Error('参数错误'))
//   }
//   id = ObjectID(id)
//   ItemModel.findOne({_id: id}, function (err, doc) {
//     if (err) {
//       return res.send(new Error(err))
//     }
//     return res.jsonp({code: 200, item: doc})
//   })
// })

// router.get('/findByDate', function (req, res, next) {
//   console.log('获取date下的信息')
//   let date = req.query.date
//   if (!date) {
//     return res.jsonp({code: 201, msg: '请求时间参数为空'})
//   }
//   let dateMin = new Date(new Date(date).toUTCString())
//   let timeoff = dateMin.getTimezoneOffset()
//   dateMin.setMinutes(dateMin.getMinutes() + timeoff)
//   let dateMax = new Date(dateMin)
//   dateMax.setUTCDate(dateMax.getUTCDate() + 1)
//   ItemModel.findByDate({dateMax, dateMin}, function (err, docs) {
//     if (err) {
//       return res.jsonp({code: 202, msg: '数据库错误'})
//     }
//     return res.jsonp({code: 200, items: docs})
//   })
// })

// router.post('/add', function (req, res, next) {
//   console.log('添加')
//   let item = req.body
//   ItemModel.insert(item, function (err, doc) {
//     if (err) {
//       return res.send(new Error(err))
//     }
//     return res.jsonp({code: 200, item: doc})
//   })
// })

// router.post('/remove', function (req, res, next) {
//   let id = req.body.id
//   if (!id) {
//     res.jsonp({code: 201, msg: '参数id不存在'})
//   }
//   id = ObjectID(id)
//   ItemModel.remove({_id: id}, function (err, doc) {
//     if (err) {
//       return res.send(new Error(err))
//     }
//     return res.jsonp({code: 200})
//   })
// })

// router.post('/update', function (req, res, next) {
//   let item = req.body
//   let id = req.query.id
//   if (!id) {
//     return res.jsonp({code: 201, msg: '参数id不存在'})
//   }
//   id = ObjectID(id)
//   ItemModel.update(id, item, function (err) {
//     if (err) {
//       return res.send(new Error(err))
//     }
//     return res.jsonp({code: 200})
//   })
// })

router.get('/index.js.map', function (req, res, next) {
  res.jsonp('lists/index.js.map')
})

module.exports = router

