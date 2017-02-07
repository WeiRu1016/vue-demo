import Vue from 'vue'
import Vuex from 'vuex'
import * as mutationsType from './mutationsType'
import $ from 'webpack-zepto'

Vue.use(Vuex)

let state = {
  list: [],
  typeList: []
}
let store = new Vuex.Store({
  state,
  mutations: {
    [mutationsType.ADDITEM] (state, item) {
      state.list.push(item)
    },
    [mutationsType.REMOVEITEM] (state, id) {
      let list = state.list
      for (let i = 0, l = list.length; i < l; i++) {
        if (list[i]._id === id) {
          list.splice(i, 1)
          break
        }
      }
    },
    [mutationsType.UPDATEITEM] (state, item) {
      let list = state.list
      for (let i = 0, l = list.length; i < l; i++) {
        if (list[i]._id === item.id) {
          for (let k in item) {
            list[k] = item[k]
          }
          break
        }
      }
    },
    [mutationsType.INIT] (state, payload) {
      state.list = payload
    },
    [mutationsType.GETTYPE] (state, payload) {
      state.typeList = payload
    }
  },
  getters: {
    groupList (state) {
      let listGroup = {}
      let list = state.list
      console.log('数据：', list)
      // debugger
      for (let i = 0, l = list.length; i < l; i++) {
        let temp = list[i]
        let tempItem = listGroup[temp.date]
        if (!tempItem) {
          listGroup[temp.date] = tempItem = {
            incoming: 0,
            outcoming: 0,
            data: []
          }
        }
        tempItem.data.push(temp)
        if (temp.type === 'in') {
          tempItem.incoming += temp.money
        } else if (temp.type === 'out') {
          tempItem.outcoming += temp.money
        }
      }
      console.log('处理好的数据：', listGroup)
      return listGroup
    },
    inTypes (state) {
      let list = state.typeList
      for (let i = 0, l = list.length; i < l; i++) {
        if (list[i].type === 'in') {
          return list[i]
        }
      }
    },
    outTypes (state) {
      let list = state.typeList
      for (let i = 0, l = list.length; i < l; i++) {
        if (list[i].type === 'out') {
          return list[i]
        }
      }
    }
  },
  actions: {
    addItem ({commit}, item) {
      console.log('addItem', item)
      commit(mutationsType.ADDITEM, item)
    },
    init ({commit}) {
      console.log('ajax请求初始化')
      $.ajax({
        type: 'get',
        url: '/api/list/find',
        success: function (data) {
          if (data.code === 200) {
            console.log('初始化成功')
            console.log('返回的数据', data.list)
            commit(mutationsType.INIT, data.list)
          }
        },
        error: function (err) {
          console.error(err)
        }
      })
    },
    getTypes ({commit}) {
      $.ajax({
        type: 'get',
        url: '/api/type/find',
        success: function (data) {
          if (data.code === 200) {
            console.log('获取type：', data.list)
            commit(mutationsType.GETTYPE, data.list)
          }
        }
      })
    },
    removeItem ({commit}, id) {
      commit(mutationsType.REMOVEITEM, id)
    },
    updateItem ({commit}, item) {
      commit(mutationsType.UPDATEITEM, item)
    }
  }
})
export default store

