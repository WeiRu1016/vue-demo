var mongoose = require('../mongodb/mongoose')

var typeScheam = mongoose.Schema({
  type: String,
  category: Array
})

typeScheam.set('toObject', { getters: true })
var typeModel = mongoose.model('type', typeScheam)

var TypeDao = function () {}

TypeDao.prototype.insert = function (query, callback) {
  typeModel.create(query, function (err, doc) {
    if (err) {
      return callback(err)
    }
    return callback(err, doc.toObject())
  })
}

TypeDao.prototype.find = function (query, callback) {
  typeModel.find(query, function (err, docs) {
    if (err) {
      return callback(err)
    }
    var list = []
    docs.forEach(function (ele) {
      list.push(ele.toObject())
    })
    return callback(err, list)
  })
}

module.exports = new TypeDao()
