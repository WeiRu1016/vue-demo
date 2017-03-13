// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './routes'
import store from './vuex/store'
import filters from './filter'

Vue.use(VueRouter)
Vue.use(VueResource)

Object.keys(filters).forEach(k => {
  Vue.filter(k, filters[k])
})

console.log('main.js')
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
