var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  res.render('index', {
    name: '首页'
  })
})

module.exports = router

