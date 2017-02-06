export default [
  {
    path: '/list',
    name: 'list',
    component: (reslove) => {
      require.ensure([], () => {
        reslove(require('./views/list.vue'))
      })
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
    path: '/detail',
    name: 'detail',
    component: (reslove) => {
      require.ensure([], () => {
        reslove(require('./views/detail.vue'))
      })
    }
  },
  {
    path: '/edit',
    name: 'edit',
    component: (reslove) => {
      require.ensure([], () => {
        reslove(require('./views/edit.vue'))
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
