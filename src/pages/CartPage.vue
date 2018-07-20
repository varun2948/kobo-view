<template>

  <div class="hero is-fullheight is-info is-bold">
  <div class="hero-body">
  <div class="container">
    <h1 class="title has-text-centered">Vue.js Form Processing</h1>
    <div class="box">

      <!-- our signup form ===================== -->
      <form id="signup-form" @submit.prevent="addNewOffice()">   
        <div class="field"> 
          <label for="district">District</label>
          <select v-model="dist">
  <option disabled value="">Please select District</option>
  <option v-for="(district) in districts"> {{district.name}} ({{district.id}})</option>
</select>Selected: {{dist}}
</option> 
        </div>
        <!-- email -->
        <div class="field">
         <v-chip label outline color="red">Type</v-chip>
      <select v-model="typ">
  <option disabled value="">Please select Type</option>
  <option v-for="type in types">{{type.type}}</option>
</select>Selected: {{typ}}
 <v-flex xs12 sm6 d-flex>
        <v-select
          :items="types"
          label="Outline style"
          outline
        ></v-select>
      </v-flex>
        </div>
        <div class="field">
        <v-chip label outline color="red">Office Name</v-chip>
        <input type="text" v-model="name" name="officename">
        <v-flex xs2 sm4>
          <v-text-field
            label="Office Name"
            single-line
            Office Name
          ></v-text-field>
        </v-flex>
        </div>

        <!-- submit button -->
      </form>
      
          <v-btn color="success" class="submitbtn" type="submit">Success</v-btn>
        
    </div>
  </div>
  </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import axios from 'axios'
  export default {
    computed: {
      ...mapGetters({
        products: 'cartProducts'
      }),
      checkoutStatus () {
        return this.$store.state.cart.lastCheckout
      },
      total () {
        return this.products.reduce((total, p) => {
          return total + p.price * p.quantity
        }, 0)
      },
      office () {
        let id = parseInt(this.$route.params.id)
        return this.allOffices.find((p) => p.id === id) || {}
      }
    },
    methods: {
      ...mapActions([
        'checkout',
        'addOffice',
        'postAllOffices'
      ]),
      processForm: function () {
        console.log({ name: this.name, email: this.email })
        alert('Done')
      },
      addNewOffice (office) {
        axios.post('http://core.naxa.com.np/office/api/office/', {
          'name': this.name,
          'district': this.dist,
          'type': this.typ
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      },
      getDistricts (cb) {
        console.log('GetDistrict Function') // useful for understanding the lifecycle
        axios.get('http://core.naxa.com.np/office/api/districts/')
        .then(response => {
          this.districts = response.data
          console.log(this.districts)
        })
      },
      getTypes (cb) {
        console.log('GetType Function') // useful for understanding the lifecycle
        axios.get('http://core.naxa.com.np/office/api/type/')
        .then(response => {
          this.types = response.data
          console.log(this.types)
        })
      }
    },
    created () {
      this.getDistricts()
      this.getTypes()
    },
    data () {
      return {
        name: '',
        type: '',
        types: [],
        district: '',
        items: [
          'All', 'Family', 'Friends', 'Coworkers'
        ],
        districts: [],
        dist: '',
        typ: '',
        product: null,
        selected: '',
        errors: {
          name: false,
          email: false
        }
      }
    }
}
</script>

<style>
[v-cloak] {
    display: none;
  }
.cart {
  width: 600px;
}
.submitbtn{
background-color: red;
}
.checkout-table {
  width: 100%;
}

.checkout-table th {
  text-align: left;
  padding: 15px 0px;
  border-bottom: 1px solid #aaa;
}

.checkout-table td {
  padding: 8px 0px;
}

.checkout-button {
  float: right;
  width: 120px;
  height: 40px;
  margin-top: 20px;
}

.total td {
  border-top: 1px solid #aaa;
  padding-top: 10px;
}
</style>
