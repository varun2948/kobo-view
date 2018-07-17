import shop from '@/api/shop'
console.log('product.js')
const state = {
  all: []
}

const actions = {
  addOffice ({commit}, office) {
    commit('addOffice', office)
  },
  getAllOffices ({commit}) {
    shop.getOffices(offices => {
      commit('recieve_Offices', offices)
    })
  },
  postAllOffices ({commit}, office) {
    console.log('product.js')
    commit('postOffice', office)
  }
}

const mutations = {
  recieve_Offices (state, offices) {
    state.all = offices
  },
  add_to_cart (state, officeId) {
    state.all.find(p => p.id === officeId).inventory--
  },
  post_to_Office (state, officeId) {
    console.log('mutation')
    state.all.push(p => p.id === officeId).inventory--
  }
}

const getters = {
  allOffices (state) {
    console.log('mutation')
    return state.all
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
