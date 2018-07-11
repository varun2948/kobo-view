<template>
  <div class='office-container'>
    <div v-for="p in allOffices" class="office">
      <router-link :to="{name: 'office', params: {id: p.id}}" class="title">{{ p.name }}</router-link>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    mounted () {
      this.getAllOffices()
    },
    computed: {
      ...mapGetters([
        'allOffices'
      ])
    },
    methods: {
      ...mapActions([
        'getAllOffices'

      ])
    }
  }
</script>

<style>
.office {
  padding: 10px 0px;
  border-bottom: 1px solid #eee;
  width: 400px;
}

.title {
  color: #312377;
}

.price {
  float: right;
}

.office-container {
  margin-bottom: 50px;
}
</style>
