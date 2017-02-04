module.exports = function (app) {
  app.use('/api/list', require('./list'))
  app.use('/api/type', require('./type'))
  app.use('/', require('./index'))
  app.use('*', require('./index'))
}
