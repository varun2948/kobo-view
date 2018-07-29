<template>
<div id="app" v-bind:style="{ backgroundColor: color }">
  <div class="header">
  <header-bar></header-bar>
  </div>
  <div class="page">
    <router-view></router-view>
    <div class="help-text">
      <p>Vue.js 2 Single Page App (SPA) Example with vuex and vue-router.</p>
      <a href="https://github.com/skyronic/vue-spa">View Source Code</a>
    </div>
  </div>
  <div class="footer">
  <footer-bar></footer-bar>
</div>
</div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import FooterBar from '@/components/FooterBar'
export default {
  components: {
    HeaderBar,
    FooterBar
  },
  name: 'app',
  data () {
    return {
      color: '#81C784',
      items: [
        'All', 'Family', 'Friends', 'Coworkers'
      ]
    }
  }
}
</script>

<style>
body {
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
}
.app {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.header {
  border-bottom: 1px solid #b3b3b3;
  width: 100%;
  padding: 30px 50px;
}

.page {
  width: 100%;
  padding: 30px 50px;
}

.help-text {
  margin-top: 20px;
  font-size: 12px;
}
</style>
