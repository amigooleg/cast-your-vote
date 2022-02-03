import firebase from 'firebase/app'

export default {
  state: {
    info: {},
    infoperson: {},
    bilvot: {}
  },
  mutations: {
    setInfo (state, info) {
      state.info = info
    },
    setInfoPerson (state, infoperson) {
      state.infoperson = infoperson
    },
    setbilvot (state, bilvot) {
      state.bilvot = bilvot
    },

    clearInfo (state) {
      state.info = { }
    },
    clearInfoPreson (state) {
      state.infoperson = { }
    }
  },
  actions: {
    async apdateInfo ({ dispatch, commit }, { cepbill, lukabill, tihbill, putinbill, buidonbill, pinbill, contrarybill, count }) {
      commit('setLoading', true)
      try {
        const id = process.env.VUE_APP_INFO
        // const updateData = { ...getters.bilvot, ...toUpdate }
        await firebase.database().ref(`/users/${id}/info`).update({ cepbill, lukabill, tihbill, putinbill, buidonbill, pinbill, contrarybill, count })
        // commit(' setbilvot ', rezaltvot)
        commit('setLoading', false)
      } catch (e) {
        commit('setLoading', false)
        commit('setError', e)
        throw e
      }
    },
    async fetchInfo ({ dispatch, commit }) {
      commit('setLoading', true)
      try {
        // const uid = await dispatch('getUid')
        const id = process.env.VUE_APP_INFO
        const rezaltvots = (await firebase
          .database()
          .ref(`/users/${id}/info`)
          .once('value')).val() || {}
        // console.log(person)
        commit('setInfo', rezaltvots)
        commit('setLoading', false)
        return Object.keys(rezaltvots).map(key => ({ ...rezaltvots[key] }))
      } catch (e) {
        commit('setLoading', false)
        commit('setError', e)
        throw e
      }
    },
    async fetchInfoPerson ({ dispatch, commit }) {
      commit('setLoading', true)
      try {
        // const uid = await dispatch('getUid')
        const uid = await dispatch('getUid')
        const infoperson = (await firebase
          .database()
          .ref(`/users/${uid}/info`)
          .once('value')).val()
        commit('setInfoPerson', infoperson)
        commit('setLoading', false)
      } catch (e) {
        commit('setLoading', false)
        commit('setError', e)
        throw e
      }
    }
  },
  getters: {
    info: s => s.info,
    infoperson: s => s.infoperson,
    bilvot: s => s.setbilvot

  }
}
