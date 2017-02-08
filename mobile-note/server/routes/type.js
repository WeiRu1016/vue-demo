var express = require('express')
var router = express.Router()
// var ItemModel = require('../models/type')
const itemController = require('../controller/type')

router.get('/find', itemController.findType)

module.exports = router
