<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm5 offset-sm1 >
        <br>
          <span class="login">Login</span>
      </v-flex>
        <v-flex xs12 sm6 offset-sm3 >
        <form>
          <v-layout column>
                  <v-flex xs12 class="text-allignment" mt-5>
                  </v-flex>
             <v-flex xs12>
               <v-card-text class="text-sm-left text-field-info">User Account
               </v-card-text>
               <v-text-field solo v-model="host.user"
               ></v-text-field>
             </v-flex>
       <v-flex xs12>
               <v-card-text class="text-sm-left text-field-info">Password
               </v-card-text>
               <v-text-field type="password" solo v-model="host.pass"
        ></v-text-field>
       </v-flex>
              <v-flex xs12 class="text-xs-left" mt-5>
              <v-btn color="grey black--text" class="btn"  v-on:click="userlogin">Login</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'login',
  data () {
    return {
      host: {
        user: '',
        pass: ''
      }
    }
  },
  methods: {
    userlogin () {
      var params = {
        username: this.host.user,
        password: this.host.pass
      }
      if (this.host.user === '' || this.password === '') {
        alert('Check Username and Password again!')
        this.window.reload()
      } else if (this.host.user === 'admin' && this.host.pass === 'admin') {
        this.$router.push('/')
      }

      // Vue.$http.post('http://localhost:3000/login', params)
      //   .then((response) => {
      //   // console.log(JSON.stringify(response.data))
      //   // this.formData = response.data
      //     console.log('response', response.data)
      //     // if (response.data === 'success') {
      //     //   this.$router.push('/')
      //     // }
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //   })
    }
  }
}
</script>

<style>
.login{
    border-radius: 15px;
    background: rgb(39, 201, 179);
    padding: 20px;
    width: 200px;
    height: 150px;
    font-size: 18px;
    font-weight: bold;
    color: white;
}
.text-field-info{
  font-weight: bold;
  font-size: 18px;
}
.btn{
  font-weight: bold;
}
</style>
