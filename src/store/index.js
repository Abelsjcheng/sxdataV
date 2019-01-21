import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        common
    },
    getters,
})

export default store