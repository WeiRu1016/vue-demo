var mongoose = require('../mongodb/mongoose')

var itemSchema = new mongoose.Schema({
  type: { type: String, enum: ['out', 'in'] },
  category: { type: String, enum: ['in', 'buy', 'cloth', 'traffic', 'house', 'food', 'other'] },
  money: Number,
  typeName: String,
  date: { type: Date, default: Date.now }
})
itemSchema.set('toObject', { getters: true })

var ItemModel = mongoose.model('item', itemSchema)
var ItemDao = function () {}

ItemDao.prototype.find = function (query, callback) {
  ItemModel.find(query).exec(function (err, docs) {
    if (err) {
      return callback(err)
    }
    return callback(err, formatItems(docs))
  })
}
ItemDao.prototype.findOne = function (query, callback) {
  ItemModel.findOne(query).exec(function (err, doc) {
    if (err) {
      return callback(err)
    }
    return callback(err, formatItems(doc, true))
  })
}
ItemDao.prototype.insert = function (query, callback) {
  var itemEntry = new ItemModel(query)
  itemEntry.save().then(function (doc) {
    return callback(null, formatItems(doc, true))
  }).catch(function (err) {
    return callback(err)
  })
}
ItemDao.prototype.remove = function (query, callback) {
  ItemModel.remove(query).exec(function (err, callback) {
    return callback(err)
  })
}
ItemDao.prototype.update = function (id, obj, callback) {
  ItemModel.update({ _id: id }, { $set: obj }).exec(function (err, doc) {
    if (err) {
      return callback(err)
    }
    return callback(err, formatItems(doc, true))
  })
}
ItemDao.prototype.findByDate = function (date, callback) {
  ItemModel.where('date').gte(date.dateMin).lte(date.dateMax).exec(function (err, docs) {
    if (err) {
      return callback(err)
    } else {
      return callback(err, formatItems(docs))
    }
  })
}
var formatDate = function (date) {
  date = new Date(date)
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  return [year, month, day].join('/')
}
var formatItems = function (items, flag) {
  if (flag) {
    items = items.toObject()
    items.date = formatDate(items.date)
    return items
  }
  var list = []
  items.forEach(function (obj, index) {
    var temp = obj.toObject()
    temp.date = formatDate(temp.date)
    list.push(temp)
  })
  return list
}
module.exports = new ItemDao()
