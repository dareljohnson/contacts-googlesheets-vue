import Vue from 'vue'
import Vuex from 'vuex'

import meetup from './contact'
import user from './user'
import shared from './shared'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        contact: contact,
        user: user,
        shared: shared
    }
})