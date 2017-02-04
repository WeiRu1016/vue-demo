export default [
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
  },
  {
    path: '/add',
    name: 'add',
    component: (reslove) => {
      require.ensure([], () => {
        reslove(require('./views/add.vue'))
      })
    }
  },
  {
    path: '*',
    name: 'index',
    component: (reslove) => {
      require.ensure([], () => {
        reslove(require('./views/index.vue'))
      })
    }
  }
]
