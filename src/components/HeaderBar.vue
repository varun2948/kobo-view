<template>
<v-app>
  <div class="menu-links">
    <router-link to="/">Home</router-link>
    <router-link to="/cart">Cart ({{ cartCount }})</router-link>
    <router-link to="/*">Not Found </router-link>
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
