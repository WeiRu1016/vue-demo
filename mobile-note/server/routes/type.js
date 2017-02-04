var express = require('express')
var router = express.Router()
var ItemModel = require('../models/type')

router.get('/find', function (req, res, next) {
  var query = req.query.type ? req.query : {}
  ItemModel.find(query, function (err, docs) {
    if (err) {
      return res.send(new Error(err))
    }
    return res.jsonp({code: 200, list: docs})
  })
})
module.exports = router
