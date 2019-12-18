import { fireDb } from '~/plugins/firebase.js'

export const state = () => ({
  recommendTrip: []
})

export const getters = {
  recommendTrip: state => state.recommendTrip
}

export const actions = {
  async nuxtServerInit ({ dispatch }, { req }) {
    // await dispatch('getTrip')
    // await dispatch('getAllTrip')
  },
  async getAllTrip ({ commit }) {
    const collection = await fireDb.collection('trip').get()
    commit('CLEAN_RECOMMEND_TRIP')
    collection.forEach((trip) => {
      console.log(trip.data())
      commit('SET_RECOMMEND_TRIP', trip.data())
    })
  },
  async getTrip ({ commit }) {
    const ref = fireDb.collection('trip').doc('taipei_001')
    const snap = await ref.get()
    // console.log(snap.data().timeline)
    commit('SET_RECOMMEND_TRIP', snap.data())
  }
}

export const mutations = {
  CLEAN_RECOMMEND_TRIP (state) {
    state.recommendTrip = []
  },
  SET_RECOMMEND_TRIP (state, trip) {
    state.recommendTrip.push({
      name: trip.name,
      timeline: trip.timeline
    })
  }
}
