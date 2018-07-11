<template>
<v-app>
  <div class="menu-links">
<v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-tile
        flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
      <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
</v-navigation-drawer>
    <router-link to="/">Home</router-link>
    <router-link to="/cart">Cart ({{ cartCount }})</router-link>
  </div>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    // mix the getters into the computed object
    ...mapGetters([
      'cartCount'

    ]),
    menuItems () {
      if (this.isAuthenticated) {
        return [
            { title: 'Home', path: '/home', icon: 'home' }
        ]
      } else {
        return [
            { title: 'Sign Up', path: '/signup', icon: 'face' },
            { title: 'Sign In', path: '/signin', icon: 'lock_open' },
            {title: 'Api', path: '/api', icon: 'favorite'}
        ]
      }
    },
    data () {
      return {
        appTitle: 'Awesome App',
        sidebar: false
      }
    }
  }
}
</script>

<style>
.menu-links a {
  display: inline-block;
  text-decoration: none;
  color: #555;
  margin-right: 30px;
}
</style>
