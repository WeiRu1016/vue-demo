import * as types from './mutations_type'
export default {
  [types.SETUSERINFO] (state, userInfo) {
    state.userInfo = userInfo
  },
  [types.SETSEARCHKEY] (state, searchKey) {
    state.list.searchKey = searchKey
  },
  [types.SETTOPICS] (state, topics) {
    state.list.topics = topics
  },
  [types.SETTOPIC] (state, topic) {
    state.topic = topic
  },
  [types.CLEARTOPIC] (state) {
    state.topic = {}
  }
}
