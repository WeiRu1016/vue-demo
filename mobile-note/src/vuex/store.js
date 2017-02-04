import Vue from 'vue'
import Vuex from 'vuex'
import * as mutationsType from './mutationsType'
import $ from 'webpack-zepto'

Vue.use(Vuex)

let state = {
  currentDate: new Date(),
  list: [],
  currentItem: null,
  typeList: []
}
let store = new Vuex.Store({
  state,
  mutations: {
    [mutationsType.ADDITEM] (state, item) {
      state.list.push(item)
    },
    [mutationsType.REMOVEITEM] (state, index) {
      let item = state.list.splice(index, 1)[0]
      if (item._id === state.currentItem._id) {
        state.currentItem = null
      }
    },
    [mutationsType.UPDATEITEM] (state, item) {
      for (let k in item) {
        state.currentItem[k] = item[k]
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
      $.ajax({
        type: 'post',
        data: item,
        dataType: 'jsonp',
        url: '/api/list/add',
        success: function (data) {
          if (data.code === 200) {
            console.log('添加成功')
            commit(mutationsType.ADDITEM, item)
          }
        },
        error: function (error) {
          console.error(error)
        }
      })
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
      $.ajax({
        type: 'post',
        data: {id: id},
        url: '/api/list/remove',
        success: function (data) {
          if (data.code === 200) {
            console.log('删除成功')
            for (let i = 0, l = state.list.length; i < l; i++) {
              let temp = state.list[i]
              if (temp._id === id) {
                commit(mutationsType.REMOVEITEM, i)
                return
              }
            }
          }
        },
        error: function (err) {
          console.error(err)
        }
      })
    },
    updateItem ({commit}, id, item) {
      $.ajax({
        type: 'post',
        url: '/api/list/update?id=' + id,
        data: item,
        success: function (data) {
          if (data.code === 200) {
            console.log('更新成功')
            commit(mutationsType.UPDATEITEM, item)
          }
        }
      })
    }
  }
})
store.dispatch('init')
store.dispatch('getTypes')
export default store

