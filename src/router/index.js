import Vue from 'vue'
import Router from 'vue-router'
import CartPage from '@/pages/CartPage'
import HomePage from '@/pages/HomePage'
import officePage from '@/pages/officePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage
    },
    {
      path: '/office/:id',
      name: 'office',
      component: officePage
    }
  ]
})
