import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VProgressCircular,
  VProgressLinear,
  VAlert,
  VPagination,
  VDataTable,
  VTextField
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VProgressCircular,
    VProgressLinear,
    VAlert,
    VPagination,
    VDataTable,
    VTextField
  },
  theme: {
    primary: '#81c784',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  mounted (){
    // preload Meetups
    this.$store.dispatch('loadContacts')
  }
})
