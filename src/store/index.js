import { createStore } from 'vuex'
import state from './state'
import mutations from './mutations'
import persistedState from 'vuex-persistedstate'

export default createStore({
  state,
  mutations,
  plugins: [
    persistedState({ storage: window.sessionStorage })
  ]
})
