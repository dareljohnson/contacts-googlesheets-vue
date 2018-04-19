import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contacts from '@/components/Contact/Contacts'
import CreateContact from '@/components/Contact/CreateContact'
import Contact from '@/components/Contact/Contact'

Vue.use(Router)

/* eslint-disable no-new */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/contact/new',
      name: 'CreateContact',
      component: CreateContact //,
      //beforeEnter: AuthGuard
    },
    {
      path: '/contacts/:id',
      name: 'Contact',
      //props: true,
      component: Contact
    }
  ],
  mode: 'history'
})
