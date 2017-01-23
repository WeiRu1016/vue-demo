import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  userInfo: {}
}

export default new Vuex.Store({
  state,
  getters: {
    getUserInfo (state) {
      debugger
      return state.userInfo
    }
  },
  mutations: {
    setUserInfo (state, userInfo) {
      state.setUserInfo = userInfo
    }
  },
  actions: {
    setUserInfo ({commit}, user) {
      commit('setUserInfo', user)
    }
  }
})
