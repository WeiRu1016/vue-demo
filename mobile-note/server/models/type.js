const mongoose = require('../mongodb/mongoose')

let typeScheam = mongoose.Schema({
  type: {type: String, unique: true},
  category: Array
})

typeScheam.set('toObject', { getters: true })
let typeModel = mongoose.model('type', typeScheam)

typeModel.all = () => {
  return typeModel.find().exec()
}
typeModel.add = (type) => {
  return typeModel.create(type).exec()
}

module.exports = typeModel

// var TypeDao = function () {}

// TypeDao.prototype.insert = function (query, callback) {
//   typeModel.create(query, function (err, doc) {
//     if (err) {
//       return callback(err)
//     }
//     return callback(err, doc.toObject())
//   })
// }

// TypeDao.prototype.find = function (query, callback) {
//   typeModel.find(query, function (err, docs) {
//     if (err) {
//       return callback(err)
//     }
//     var list = []
//     docs.forEach(function (ele) {
//       list.push(ele.toObject())
//     })
//     return callback(err, list)
//   })
// }

// module.exports = new TypeDao()
