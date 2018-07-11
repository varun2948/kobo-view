import shop from '@/api/shop'

const state = {
  all: []
}

const actions = {
  addToCart ({commit}, office) {
    commit('add_to_cart', office.id)
  },
  getAllOffices ({commit}) {
    shop.getOffices(offices => {
      commit('recieve_Offices', offices)
    })
  }
}

const mutations = {
  recieve_Offices (state, offices) {
    state.all = offices
  },
  add_to_cart (state, officeId) {
    state.all.find(p => p.id === officeId).inventory--
  }
}

const getters = {
  allOffices (state) {
    return state.all
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
