import Vue from 'vue'
import Vuex from 'vuex'
import * as mutationsType from './mutationsType'

Vue.use(Vuex)

let state = {
  list: null,
  typeList: null,
  testBoo: {a: {b: [1, 2, 3]}}
}
let store = new Vuex.Store({
  state,
  mutations: {
    [mutationsType.GETTYPE] (state, payload) {
      if (!state.typeList) {
        state.typeList = {}
      }
      Object.assign(state.typeList, payload)
    },
    [mutationsType.GETINDEX] (state, payload) {
      if (!state.list) {
        state.list = {}
      }
      filter(state.list, payload)
    },
    testBoo (state, payload) {
      state.testBoo.a.b.push(6)
      state.testBoo.b = {b: ['c']}
    }
  },
  actions: {
    setTest ({commit}) {
      commit('testBoo', true)
    },
    getTypes ({commit}) {
      return new Promise((resolve, reject) => {
        Vue.http.get('/api/type/find').then(response => {
          let data = response.body
          if (data.code === 200) {
            console.log('获取type：', data.list)
            commit(mutationsType.GETTYPE, data.list)
            resolve(data.list)
          }
        }).catch(err => {
          console.error(err)
          reject(err)
        })
      })
    },
    getIndex ({commit}, {page, limit}) {
      debugger
      return new Promise((resolve, reject) => {
        Vue.http.get(`/api/list/find?page=${page || 0}&limit=${limit}`).then(response => {
          debugger
          let data = response.body
          if (data.code === 200) {
            commit(mutationsType.GETINDEX, data.list)
          }
          resolve(data.list)
        }).catch(err => {
          console.error(err)
          reject(err)
        })
      })
    }
  },
  getters: {
    getList (state) {
      return state.list || {}
    }
  }
})

let filter = (o, arrList) => {
  for (let k of arrList) {
    let date = k.date
    if (!o[date]) {
      o[date] = {
        incoming: 0,
        items: [],
        outcoming: 0
      }
    }
    o[date].items.push(k)
    k.type === 'in' ? (o[date].incoming += k.money) : (o[date].outcoming += k.money)
  }
}
export default store

