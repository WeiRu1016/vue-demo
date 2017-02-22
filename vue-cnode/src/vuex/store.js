import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  userInfo: {},
  topic: {},
  list: {
    topics: [],
    searchKey: {
      page: 0,
      limit: 0,
      tab: ''
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
