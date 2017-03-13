// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from './vuex/store'
import * as filters from './filter'
import scroll from './directives/loadMore'
import App from './App.vue'

Vue.use(VueRouter)
Vue.directive('loadMore', scroll)

for (var filter in filters) {
  Vue.filter(filter, filters[filter])
}
const router = new VueRouter({
  routes,
  mode: 'history'
})
/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
