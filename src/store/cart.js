import shop from '@/api/shop'

console.log('varun Done')
const state = {
  added: [],
  offices: [],
  newOffice: '',
  items: [
    'All', 'Family', 'Friends', 'Coworkers'
  ],
  lastCheckout: null
}

const actions = {
  // The first argument is the vuex store, but we're using only the
  // dispatch function, which applies a mutation to the store,
  // and the current state of the store
  checkout ({commit, state}, products) {
    console.log('Goal')
    const savedCartItems = [...state.added]
    commit('checkout_request')
    shop.buyProducts(
      products,
      () => commit('checkout_successful'),
      () => commit('checkout_failure', savedCartItems)
    )
  }
}

const mutations = {
  add_to_cart (state, productId) {
    state.lastCheckout = null
    const record = state.added.find(p => p.id === productId)
    if (!record) {
      state.added.push({
        id: productId,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },
  checkout_request (state) {
    // clear cart
    state.added = []
    state.lastCheckout = null
  },
  checkout_successful (state) {
    state.lastCheckout = 'successful'
    console.log('checkout successful')
  },
  checkout_failure (state, savedCartItems) {
    // rollback to the cart saved before sending the request
    state.added = savedCartItems
    state.lastCheckout = 'failed'
  }
}

const getters = {
  cartProducts (state, getters, rootState) {
    console.log('Getters')
    return state.added.map(({ id, quantity }) => {
      const product = rootState.products.all.find(p => p.id === id)
      return {
        title: product.title,
        price: product.price,
        id,
        quantity
      }
    })
  },
  cartCount (state) {
    var totalCount = 0
    state.added.forEach(({ quantity }) => {
      totalCount += quantity
    })
    return totalCount
  },
  newOffice: state => state.newOffice,
  offices: state => state.offices
}

export default {
  state,
  actions,
  mutations,
  getters
}
