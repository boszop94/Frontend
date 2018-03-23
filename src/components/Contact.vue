<template>
  <div id="indexPage">
      <v-toolbar
      color="white"
      dark
      tabs
    >
      <v-text-field
        v-model="searchbox"
        prepend-icon="search"
        label="Search"
        solo-inverted
        class="mx-3"
        flat
      ><v-spacer></v-spacer>
      </v-text-field>
        <v-btn color="grey black--text" class="btn">Search</v-btn>
        <v-btn color="orange" class="btn" href="/#/Add">+ Add</v-btn>
    </v-toolbar>
    <v-layout columm wrap>
    <v-flex xs3 v-for="i in filter" v-bind:key="i.id">
      <v-card style="margin-left:10px;">
        <v-card-media v-bind:src="i.image" height="300px" style="width:auto; margin:auto">
        </v-card-media>
        <v-card-title primary-title>
          <div style="margin:auto">
            <h3 class="headline mb-1" >{{i.firstname}} {{i.surname}}</h3>
            <div style="margint:auto !important">Mobile: {{i.mobile}}<br>Email: {{i.email}}<br>Facebook: {{i.facebook}}</div>
          </div>
        </v-card-title>
          <router-link :to="{ path: '/Edit/' + i.id}">
            <v-btn style="font-color: white;" color="blue">Edit</v-btn>
          </router-link>
          <v-btn color="red" v-on:click="delUser(i.id)">Delete</v-btn>
      </v-card>       
    </v-flex>
    </v-layout>
    </div>
</template>
<script>
import Vue from 'vue'

import Api from '../api/api.js'
export default {
  beforeCreate () {
    Api.getUser(callback => {
      this.contact = callback
      console.log(this.contact)
    })
  },
  data () {
    return{
      contact: [],
      searchbox: ''
    }
  },
  computed: {
    filter: function() {
      return this.contact.filter((user) => {
      return user.firstname.match(this.searchbox)
      })
    }
  },
  methods: {
    // Delete User
    delUser (userId) {
      var url = 'http://localhost:3000/users/' + userId
      console.log(userId)
      Vue.$http.delete(url)
        .then((response) => {
          console.log('Delete UserId: ' + response)
          alert(response)
        })
        .catch((error) => {
          console.log(error)
        })
    window.location.reload()
    } 
  }
}
</script>
<style>
.btn{
  font-weight: bold;
}
.edit{
  border-radius: 50px 50px 50px;
    background:blue;
    padding: 20px; 
    width: 100px;
    height: 10px; 
    color: white;
}
.delete{
  border-radius: 50px 50px 50px;
    background:red;
    padding: 20px; 
    width: 100px;
    height: 10px; 
    color: white;
}
#card{
    border-radius: 15px 50px 30px;
    background: rgb(39, 201, 179);
    padding: 20px; 
    width: 200px;
    height: 150px; 
}
</style>
