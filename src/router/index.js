import Vue from 'vue'
import Router from 'vue-router'
import OfficeForm from '@/pages/OfficeForm'
import HomePage from '@/pages/HomePage'
import officePage from '@/pages/officePage'
import NotFound from '@/pages/NotFound'
import LoginForm from '@/pages/LoginForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/officeform',
      name: 'officeform',
      component: OfficeForm
    },
    {
      path: '/office/:id',
      name: 'office',
      component: officePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginForm
    },
    {
      path: '/*',
      name: 'notFound',
      component: NotFound
    }
  ]
})
