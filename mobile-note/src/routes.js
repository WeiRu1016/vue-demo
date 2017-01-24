export default [
  {
    path: '*',
    name: 'index',
    component: (reslove) => {
      require.ensure([], () => {
        reslove(require('./views/index.vue'))
      })
    }
  },
  {
    path: '/list',
    name: 'list',
    component: (reslove) => {
      require.ensure([], () => {
        reslove(require('./views/list.vue'))
      })
    },
    meta: {
      keepAlive: true
    }
  }
]
