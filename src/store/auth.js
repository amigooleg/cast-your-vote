/* eslint-disable no-unused-expressions */
import firebase from 'firebase/app'
export default {
  actions: {
    async login ({ dispatch, commit }, { email, password }) {
      // eslint-disable-next-line no-useless-catch
      commit('setLoading', true)
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        commit('setLoading', false)
      } catch (e) {
        commit('setLoading', false)
        commit('setError', e)
        throw e
      }
    },
    async register ({ dispatch, commit }, { email, password, name, surname }) {
      // eslint-disable-next-line no-useless-catch
      commit('setLoading', true)
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/info`).set({
          // cep_bill: 5,
          // tih_bill: 5,
          // luka_bill: 5,
          name: name,
          surname
        })
        commit('setLoading', false)
      } catch (e) {
        commit('setLoading', false)
        commit('setError', e)
        throw e
      }
    },
    async logout ({ commit }) {
      await firebase.auth().signOut() // очистить все данные
      commit('clearInfo')
    },

    getUid () {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    }
  }

}
