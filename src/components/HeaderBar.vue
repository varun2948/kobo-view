<template v-bind:style="{ backgroundColor: color }">
<div id="app" >
  <v-toolbar
      color="red"
      dark
      tabs
    >
    <v-toolbar-side-icon>
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
        </router-link>
      </v-toolbar-title>
    <v-toolbar-title>Kobo-Office</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/">Home</v-btn>
      <v-btn flat to="/cart">Cart</v-btn>
      <v-btn flat to="/*">Not Found</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    // mix the getters into the computed object
    ...mapGetters([
      'cartCount'

    ]),
    data () {
      return {
        color: '#673AB7',
        sidebar: false
      }
    },
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
