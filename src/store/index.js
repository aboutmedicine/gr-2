import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import state from "./state"
import getters from "./getter"
import mutations from "./mutation"
import actions from "./action"

Vue.use(Vuex)

export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    plugins: [createPersistedState()],
})
