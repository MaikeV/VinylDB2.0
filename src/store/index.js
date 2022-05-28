import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import misc from './modules/misc.js'
import conditions from './modules/conditions.js'

export default new Vuex.Store({
    modules: {
        misc,
        conditions
    }
})
