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
          <select v-model="district">
  <option disabled value="">Please select District</option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
  <option>6</option>
  <option>7</option>
</select>Selected: {{district}}
        </div>

        <!-- email -->
        <div class="field">
          <label for="type">Type</label>
          <input 
            type="number" 
            class="text" 
            name="type" 
            v-model="type"
            >
        </div>
        <div class="field">
        <label for="Name">Office Name</label>
        <input type="text" v-model="name" name="officename">
        </div>

        <!-- submit button -->
        <div class="field has-text-right">
          <button type="submit" class="button is-danger">
            Submit            
          </button>
        </div>
      </form>
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
          'district': this.district,
          'type': this.type
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      }
    },
    data () {
      return {
        name: '',
        type: '',
        district: '',
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

.cart {
  width: 600px;
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
