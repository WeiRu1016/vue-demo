export default [
  {
    path: '/list',
    name: 'list',
    component (resolve) {
      require.ensure([], () => {
        resolve(require('./views/list.vue'))
      })
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/topic/:id',
    name: 'topic',
    component (resolve) {
      require.ensure([], () => {
        resolve(require('./views/topic.vue'))
      })
    },
    meta: {
      keepAlive: false
    }
  },
  {
    path: '*',
    name: 'index',
    component (resolve) {
      require.ensure([], () => {
        resolve(require('./views/index.vue'))
      })
    },
    meta: {
      keepAlive: true
    }
  }
]

