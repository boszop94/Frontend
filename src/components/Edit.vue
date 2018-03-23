<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm1 >
        <br>

          <h1>Edit<span class="addText">User</span></h1>
                  </v-flex>
      <v-flex xs12 sm6 offset-sm3 >
        <form>
          <v-layout column>
                  <v-flex xs12 class="text-allignment" mt-5>
                  </v-flex>
             <v-flex xs12>
               <v-card-text class="text-sm-left text-field-info">Contact Id<span class="required">*</span>
               </v-card-text>
               <v-text-field solo v-model="Users.id"
               ></v-text-field>
             </v-flex>
       <v-flex xs12>
               <v-card-text class="text-sm-left text-field-info" >First Name<span class="required">*</span>
               </v-card-text>
               <v-text-field solo v-model="Users.firstname"
        ></v-text-field>
       </v-flex>
       <v-flex xs12>
               <v-card-text class="text-sm-left text-field-info">Last Name<span class="required">*</span>
               </v-card-text>
               <v-text-field solo v-model="Users.surname"
        ></v-text-field>
       </v-flex>
       <v-flex xs12>
               <v-card-text class="text-sm-left text-field-info">Mobile No<span class="required">*</span>
               </v-card-text>
               <v-text-field solo v-model="Users.mobile"
        ></v-text-field>
      </v-flex>
             <v-flex xs12>
               <v-card-text class="text-sm-left text-field-info">Email<span class="required">*</span>
               </v-card-text>
               <v-text-field solo v-model="Users.email"></v-text-field>
             </v-flex>
             <v-flex xs12>
               <v-card-text class="text-sm-left text-field-info">Facebook<span class="required">*</span>
               </v-card-text>
               <v-text-field solo v-model="Users.facebook">
               </v-text-field>
             </v-flex>
             <v-flex xs12>
               <v-card-text class="text-sm-left text-field-info">Image Url<span class="required">*</span>
               </v-card-text>
               <v-text-field solo v-model="Users.image">
               </v-text-field>
             </v-flex>
      <br>
            <v-flex class="text-xs-center" mt-15>
              <v-btn color="white blue--text" class="btn" v-on:click="updateToAPI()"><v-icon color ="blue">save</v-icon>Save</v-btn>
              <v-btn color="white blue--text" class="btn" href="/"><v-icon color="red">close</v-icon>Close</v-btn>
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
  name: 'Add',
  props: ['eID'],
  data () {
    return {
      Users: {
        id: '',
        firstname: '',
        surname: '',
        mobile: '',
        email: '',
        facebook: '',
        image: ''
      }
    }
  },
  methods: {
    updateToAPI () {
      console.log('eieiei')
      var updateUser = {
        firstname: this.Users.firstname,
        surname: this.Users.surname,
        mobile: this.Users.mobile,
        email: this.Users.email,
        facebook: this.Users.facebook,
        image: this.Users.image
      }
      console.log(updateUser)
      Vue.$http.post('http://localhost:3000/users/' + this.Users.id, updateUser)
        .then((response) => {
          console.log('responeseeeee', response)
          this.$router.push('/')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted () {
    Vue.$http.get('http://localhost:3000/users/' + this.eID)
      .then((response) => {
        this.Users = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

</script>

<style scoped>
.text-field-info{
  font-size: 18px;
  font-weight: bold;
}
.addText{
  border-radius: 15px 50px 30px;
    background: rgb(39, 201, 179);
    padding: 20px;
    width: 200px;
    height: 150px;
    color: white;
}
.required{
  color: red;
}
.btn{
  font-weight: bold;
}
</style>
