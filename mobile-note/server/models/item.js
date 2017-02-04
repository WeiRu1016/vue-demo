var mongoose = require('../mongodb/mongoose')
var itemSchema = new mongoose.Schema({
  type: { type: String, enum: ['out', 'in'] },
  category: { type: String, enum: ['in', 'buy', 'cloth', 'traffic', 'house', 'food', 'other'] },
  money: Number,
  typeName: String,
  date: { type: Date, default: Date.now }
})
itemSchema.set('toObject', { getters: true })

var itemModel = mongoose.model('item', itemSchema)
var ItemDao = function () {}
ItemDao.prototype.find = function (query, callback) {
  itemModel.find(query, function (err, docs) {
    if (err) {
      return callback(err)
    }
    var list = []
    docs.forEach(function (obj, index) {
      var temp = obj.toObject()
      temp.date = formatDate(temp.date)
      list.push(temp)
    })
    return callback(err, list)
  })
}
ItemDao.prototype.findOne = function (query, callback) {
  itemModel.findOne(query, function (err, doc) {
    if (err) {
      return callback(err)
    }
    return callback(err, doc.toObject())
  })
}
ItemDao.prototype.insert = function (query, callback) {
  itemModel.create(query, function (err, docs) {
    if (err) {
      return callback(err)
    }
    return callback(err, docs)
  })
}
ItemDao.prototype.remove = function (query, callback) {
  itemModel.remove(query, function (err, callback) {
    if (err) {
      return callback(err)
    }
    return callback(err, callback)
  })
}
ItemDao.prototype.update = function (id, obj, callback) {
  itemModel.update({ _id: id }, { $set: obj }, function (err, doc) {
    if (err) {
      return callback(err)
    }
    return callback(err, doc)
  })
}
var formatDate = function (date) {
  date = new Date(date)
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  return [year, month, day].join('/')
}
module.exports = new ItemDao()
