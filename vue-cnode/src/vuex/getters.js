export default {
  getUserInfo (state) {
    return state.userInfo
  },
  getTopics (state) {
    return state.list.topics
  },
  getTopic (state) {
    return state.topic
  }
}
