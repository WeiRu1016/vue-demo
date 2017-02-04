var url = require('./conf').mongodb
var mongoose = require('mongoose')
mongoose.connect(url)

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function (callback) {
  console.log('Mongodb Opened')
})
module.exports = mongoose
