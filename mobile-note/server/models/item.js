var mongoose = require('../mongodb/mongoose')

var itemSchema = new mongoose.Schema({
  type: { type: String, enum: ['out', 'in'] },
  category: { type: String, enum: ['in', 'buy', 'cloth', 'traffic', 'house', 'food', 'other'] },
  money: Number,
  typeName: String,
  date: { type: Date, default: new Date() }
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
  ItemModel.remove(query).exec(function (err) {
    return callback(err)
  })
}
ItemDao.prototype.update = function (id, obj, callback) {
  ItemModel.update({ _id: id }, { $set: obj }).exec(function (err) {
    if (err) {
      return callback(err)
    }
    return callback(err)
  })
}
ItemDao.prototype.findByDate = function (date, callback) {
  ItemModel.where('date').gte(date.dateMin).lt(date.dateMax).exec(function (err, docs) {
    if (err) {
      return callback(err)
    } else {
      return callback(err, formatItems(docs))
    }
  })
}
var formatItems = function (items, flag) {
  if (flag) {
    items = items.toObject()
    items.date = items.date.toLocaleDateString()
    return items
  }
  var list = []
  items.forEach(function (obj, index) {
    var temp = obj.toObject()
    temp.date = temp.date.toLocaleDateString()
    list.push(temp)
  })
  return list
}
module.exports = new ItemDao()
