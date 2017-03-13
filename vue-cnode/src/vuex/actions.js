import * as types from './mutations_type'
import Axios from 'axios'

export default {
  setUserInfo ({commit}, user) {
    commit(types.SETUSERINFO, user)
  },
  setTopics ({commit, state}, searchKey) {
    let s = state.list.searchKey
    if (searchKey.tab === s.tab) {
      if (searchKey.page === s.page && searchKey.limit === s.limit) {
        return Promise.resolve(state.list.topics)
      } else {
        return new Promise((resolve, reject) => {
          Axios.get('https://cnodejs.org/api/v1/topics', {params: searchKey}).then(response => {
            commit(types.SETSEARCHKEY, searchKey)
            commit(types.SETTOPICS, state.list.topics.concat(response.data.data))
            resolve(response.data.data)
          }).catch(err => {
            reject(err)
          })
        })
      }
    } else {
      return new Promise((resolve, reject) => {
        Axios.get('https://cnodejs.org/api/v1/topics', {params: searchKey}).then(response => {
          commit(types.SETSEARCHKEY, searchKey)
          commit(types.SETTOPICS, response.data.data)
          resolve(response.data.data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  },
  setTopic ({commit, state}, id) {
    debugger
    if (state.topic.id === id) {
      return Promise.resolve(state.topic)
    } else {
      return new Promise((resolve, reject) => {
        Axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then(response => {
          commit(types.SETTOPIC, response.data.data)
          resolve(response.data.data)
        }).catch(err => {
          console.error(err)
          reject(err)
        })
      })
    }
  },
  clearTopic ({commit}) {
    commit(types.CLEARTOPIC)
  }
}
