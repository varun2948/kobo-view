<template>

  <div class="office-item">
    <router-link to="/" class="back-link">BACK</router-link>
     <v-container>
    <v-layout row wrap>
            <v-card dark color="blue ">
              <v-card-text color="black">
    <b>Office Name:</b>{{ office.name }}
    <br>
    <b>Type:</b> {{office.type}}
    <br>
    <b>District:</b> {{office.district}}
    <br>
    <b>ID:</b> {{office.id}}
    <br>
    
      <b>{{ office.name }}</b>
              </v-card-text>
            </v-card>
    </v-layout>
  </v-container>
    <!-- <div class="office-title"><b>Office Name:</b>{{ office.name }}</div>
    <div class="office-detail"><b>Type:</b> {{office.type}}</div>
    <div class="office-detail"><b>District:</b> {{office.district}}</div>
    <div class="office-detail"><b>ID:</b> {{office.id}}</div>
    <div class="office-details"> -->
      <div class="inventory"><b>{{ office.name }}</b></div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    mounted () {
      this.getAllOffices()
    },
    computed: {
      ...mapGetters([
        'allOffices'
      ]),
      office () {
        let id = parseInt(this.$route.params.id)
        return this.allOffices.find((p) => p.id === id) || {}
      }
    },
    methods: {
      ...mapActions([
        'getAllOffices',
        'addToCart'
      ])
    }
  }
</script>

<style>
body{
  overflow-x: hidden;
}
.office-item {
  margin: 10px 10px;
  width: 500px;
  height: 400px;
  border-bottom: 1px solid #aaa;

}

.back-link {
  font-size: 20px;
}

.office-title {
  padding-top: 120px;
  text-align: center;
  margin: 0 auto;
  font-size: 17px;
  text-decoration: underline;
}

.office-detail {
  margin-top: 10px;
  margin-left: 200px;
}

.office-details {
  margin-top: 120px;
}

.inventory {
  float: left;
  font-size: 20px;
  margin-top: 15px;
}
.add-button {
  float: right;
  width: 140px;
  height: 50px;
}
</style>
