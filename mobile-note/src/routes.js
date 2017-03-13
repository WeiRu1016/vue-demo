export default [
  {
    path: '/list',
    name: 'list',
    component: (reslove) => {
      require.ensure(['./views/list.vue'], () => {
        reslove(require('./views/list.vue'))
      })
    }
  },
  {
    path: '/add',
    name: 'add',
    component: (reslove) => {
      require.ensure(['./views/add.vue'], () => {
        reslove(require('./views/add.vue'))
      })
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: (reslove) => {
      require.ensure(['./views/detail.vue'], () => {
        reslove(require('./views/detail.vue'))
      })
    }
  },
  {
    path: '/edit',
    name: 'edit',
    component: (reslove) => {
      require.ensure(['./views/edit.vue'], () => {
        reslove(require('./views/edit.vue'))
      })
    }
  },
  {
    path: '*',
    name: 'index',
    component: (reslove) => {
      require.ensure(['./views/index.vue'], () => {
        reslove(require('./views/index.vue'))
      })
    }
  }
]
