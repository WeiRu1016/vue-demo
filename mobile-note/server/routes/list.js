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

router.get('/index.js.map', function (req, res, next) {
  res.jsonp('lists/index.js.map')
})

module.exports = router

