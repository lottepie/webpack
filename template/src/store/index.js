import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import user from './modules/user'
import permission from './modules/permission'
import system from './modules/system'
import Storage from '../utils/storage'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    permission,
    system
  },
  plugins: [
    createPersistedState({
      getState: (key) => Storage.get(key),
      setState: (key, state) => Storage.set(key, state)
    })
  ]
})

export default store
