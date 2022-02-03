
import firebase from 'firebase/app'
export default {
  actions: {
    async creatInfoHistory ({ dispatch, commit, getters }, { count, dates, name }) {
      commit('setLoading', true)
      try {
        const uid = process.env.VUE_APP_HISTORY
        // const updateData = { ...getters.bill, ...toUpdate }
        const infopersons = await firebase.database().ref(`/historyvot/${uid}/infohistory`).push({ count, dates, name })
        commit('setLoading', false)
        return { count, dates, name, id: infopersons.key }
        // commit(' setBill ', updateData)
      } catch (e) {
        commit('setLoading', false)
        commit('setError', e)
        throw e
      }
    },

    async fetchInfoHistory ({ dispatch, commit }) {
      commit('setLoading', true)
      try {
        // const uid = await dispatch('getUid')
        const uid = process.env.VUE_APP_HISTORY
        const person = (await firebase
          .database()
          .ref(`/historyvot/${uid}/infohistory`)
          .once('value')).val() || {}
        // console.log(person)
        // const persons = []
        // Object.keys(person).forEach(key => {
        //   persons.push({
        //     count: person[key].count,
        //     dates: person[key].date,
        //     name: person[key].name,
        //     id: key
        //   })
        // })
        // return person
        commit('setinfolHistory', person)
        commit('setLoading', false)
        return Object.keys(person).map(key => ({ ...person[key], id: key }))
      } catch (e) {
        commit('setLoading', false)
        commit('setError', e)
        throw e
      }
    }
  },
  state: {
    users: {}
  },
  mutations: {
    setinfolHistory (state, users) {
      state.users = users
    }
  },
  getters: {
    USERS: s => s.users
  }

}
