var express = require('express')
var router = express.Router()

router.get('/index.js.map', function (req, res, next) {
  console.log('渲染啊啊啊啊、')
  res.send('aaa')
})

router.get('/', function (req, res, next) {
  console.log('渲染index')
  res.render('index', {
    name: '首页'
  })
})

module.exports = router

