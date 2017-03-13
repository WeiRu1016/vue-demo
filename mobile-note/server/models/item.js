var mongoose = require('../mongodb/mongoose')
// var ObjectId = require('mongodb').ObjectID

var itemSchema = new mongoose.Schema({
  type: { type: String, enum: ['out', 'in'] },
  category: { type: String, enum: ['in', 'buy', 'cloth', 'traffic', 'house', 'food', 'other'] },
  money: Number,
  typeName: String,
  date: { type: Date, default: new Date() }
})
itemSchema.set('toObject', { getters: true })

var ItemModel = mongoose.model('item', itemSchema)


ItemModel.all = (page, limit) => {
  limit = limit || 20
  return ItemModel.find()
          .sort({date: -1})
          .skip(page * limit)
          .limit(limit)
          .exec()
}
ItemModel.getById = (id) => {
  return ItemModel.findById(id)
          .exec()
}
ItemModel.getByDate = (date) => {
  return ItemModel.where('date')
          .gte(date.dateMin)
          .lt(date.dateMax)
          .exec()
}
ItemModel.add = (item) => {
  return ItemModel.create(item)
}
ItemModel.remove = (id) => {
  return ItemModel.remove({_id: id})
}
ItemModel.edit = (id, item) => {
  return ItemModel.findOneAndUpdate({_id: id}, item).exec()
}
module.exports = ItemModel
