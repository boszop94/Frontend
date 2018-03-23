import Vue from 'vue'
import Router from 'vue-router'
import Contact from '@/components/Contact'
import Login from '@/components/Login'
import Add from '@/components/Add'
import Edit from '@/components/Edit'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Add',
      name: 'Add New User',
      component: Add
    },
    {
      path: '/edit/:eID',
      name: 'Edit User',
      component: Edit,
      props: true,
    }
  ]
})
