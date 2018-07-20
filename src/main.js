// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import store from './store/index'
import { sync } from 'vuex-router-sync'
import BootstrapVue from 'bootstrap-vue'
import 'vuetify/dist/vuetify.min.css'
import 'vuetify/dist/icon.css'

sync(store, router)
Vue.use(BootstrapVue)
Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
