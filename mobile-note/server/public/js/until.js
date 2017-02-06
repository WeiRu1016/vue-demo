module.exports.formatTime = function (date) {
  date = new Date(date)
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  return [year, month, day].join('/')
}
