import Vue from 'vue'
import Vuex from 'vuex'
import objects from './modules/objects'
// import tasks from './modules/tasks'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        objects,
        // tasks
    }
})