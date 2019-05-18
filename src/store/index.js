import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations: {
    changeUserInfo (state, userInfo) {
      console.log(state)
      state.userInfo = userInfo
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    },
    changeLoginStatus (state, loginStatus) {
      state.hasLogin = loginStatus
      localStorage.hasLogin = loginStatus
    },
    changeToken (state, token) {
      state.token = token
      localStorage.token = token
    }
  }
})
