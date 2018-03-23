<template>
  <div id="app">
    <div class="nav_bar">
      <v-toolbar
        absolute
        color="black"
        dark
        scroll-off-screen
        scroll-target="#scrolling-techniques"
      >
      <img src="@/assets/logo.png" id="headlogo">
        <v-toolbar-title>Contacts</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon href="/#/">
          <v-icon>home</v-icon>
        </v-btn>
        <v-btn icon href="/#/login">
          <v-icon>person</v-icon>
        </v-btn>
      </v-toolbar>
    </div>
    <router-view></router-view>
      <v-layout>
  </v-layout>
  </div>
</template>
<script>
// import Contact from './components/Contact.vue'
export default{
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin-left: 30px;
  margin-right: 30px;
}
.nav_bar{
    margin-bottom: 60px;
    color: #ffffff;
}
#headlogo{
  width: auto;
  height: 50%;
}
</style>
