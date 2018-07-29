<template v-bind:style="{ backgroundColor: color }">
<div id="app">
  <v-toolbar
      color='green accent-1'
      tabs>
    <v-breadcrumbs divider="/">
      <v-breadcrumbs-item
        v-for="office in offices"
        :key="office.name"
        :disabled="office.disabled"
      >
        sdsd
      </v-breadcrumbs-item>
    </v-breadcrumbs>
    <v-toolbar-side-icon>
        </v-toolbar-side-icon>
      <v-toolbar-title>
        <!-- <v-btn color="success">
          <v-badge
          color="Green"
        >
          <span slot="badge">6</span>
          <v-icon large color="grey">mail</v-icon>
          </v-badge>
        </v-btn> -->
    </v-toolbar-title>
    <v-toolbar-title>Kobo-Office</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/"><v-icon>face</v-icon>Home</v-btn>
      <v-btn flat to="/officeform"><v-icon>favorite</v-icon>Office Form</v-btn>
      <v-btn flat to="/*"><v-icon>lock_open</v-icon>Not Found</v-btn>
      <v-btn flat to="/login"><v-icon>person</v-icon>Login</v-btn>
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
