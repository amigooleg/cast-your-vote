import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
// import candidates from './candidates'
import info from './info'
import history from './history'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null,
    loading: false
  },
  mutations: {
    setLoading (state, loading) {
      state.loading = loading
    },
    setError (state, error) {
      state.error = error
    },
    clearError (state) {
      state.error = null
    }
  },
  getters: {
    error: s => s.error,
    loading (state) {
      return state.loading
    }
  },
  // actions: {
  //   setLoading ({ commit }, payload) {
  //     commit('setLoading', payload)
  //   }
  // },

  modules: {
    auth, info, history
  }
})
