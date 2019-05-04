import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
//npm install es6-promise --save
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)



export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    lang: "en",
    token: "",
    status: "",
    user: {}
  },
  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
  },
  mutations: {

    setLang(state, lang) {
      state.lang = lang
      //i18n.locale = lang
    },
    authRequest(state) {
      state.status = 'loading'
    },
    authLogout(state) {
      state.token = ''
      state.user = {}
    },
    authSuccess(state, resonse) {
      state.status = 'success'
      state.token = resonse.token
      state.user = resonse.user
    },
    authError(state) {
      state.status = 'error'
    }
  },
  actions: {
    userRequest() {
      //console.log("User Request");

    },
    authLogout({ commit, state }) {
      this.commit("authRequest")
      //commit("authLogout")
      return new Promise((resolve, reject) => {
        Vue.axios({ url: process.env.VUE_APP_API + '/auth/logout', method: 'POST' })
          .then(res => {
            commit("authLogout")
            resolve(res)
          })
          .catch(err => {
            //console.log(err)
            commit("authError", err)
            reject(err)
          })
      })
    },
    authRequest({ commit, state }, user) {
      this.commit("authRequest")
      return new Promise((resolve, reject) => {
        Vue.axios({ url: process.env.VUE_APP_API + '/auth/login', data: user, method: 'POST' })
          .then(res => {
            //console.log(res.data.user)
            const token = res.headers['authorization'];
            Vue.axios.defaults.headers.common['Authorization'] = "Bearer " + token
            commit("authSuccess", { token, user: res.data.user })
            //this.dispatch("userRequest")
            resolve(res)
          })
          .catch(err => {
            commit("authError", err)
            reject(err)
          })
      })

    },
    registerRequest({ commit, state }, user) {
      return new Promise((resolve, reject) => {
        Vue.axios({ url: process.env.VUE_APP_API + '/auth/register', data: user, method: 'POST' })
          .then(res => {
            const token = res.headers['authorization'];
            commit("authSuccess", { token, user: res.data.user })
            this.dispatch("userRequest")
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    passwordResetRequest({ commit, state }, user) {
      return new Promise((resolve, reject) => {
        axios({ url: process.env.VUE_APP_API + '/auth/password/reset', data: user, method: 'POST' })
          .then(resp => {
            //const token = resp.data.token
            //this.dispatch("userRequest")
            resolve(resp)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
})