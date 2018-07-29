<template>
<v-app id="officelist">
<div class="container center-block">
<v-chip label color="pink" text-color="white">
      <v-icon left>label</v-icon>List Of Districts
    </v-chip>
    <!-- <v-container>
    <v-layout row wrap>
 <v-flex v-for="i in 4" :key="`1${i}`" xs3 color="red">
        <v-expansion-panel popout color="blue">
          <v-expansion-panel-content
            v-for="p in allOffices" :key="p.id" color="blue">
            <div slot="header"  dark color="blue lighten-4">{{p.name}}</div>
            <v-card dark color="blue ">
              <v-card-text color="black">
    <b>Office Name:</b>{{ p.name }}
    <br>
    <b>Type:</b> {{p.type}}
    <br>
    <b>District:</b> {{p.district}}
    <br>
    <b>ID:</b> {{p.id}}
    <br>
    
      <b>{{ p.name }}</b>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container> -->
  <div class='office-container'>
  
    <div v-for="p in allOffices" :key="p.id" class="office">
      <router-link :to="{name: 'office', params: {id: p.id}}" class="title">{{ p.name }}</router-link>
    </div>
  </div>
  </div>
  </v-app>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import 'material-design-icons-iconfont/dist/material-design-icons.css'
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
.v-expansion-panel__container
{
  background-color: gray;
}
.v-card__text
{
  color: black;
}
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
