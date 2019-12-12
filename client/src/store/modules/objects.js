export default {
    state: {
        objects: [],
        type: ''
    },

    mutations: {
        setObjects(state, payload) {
            state.objects = payload
        },
        setType(state, payload) {
            state.type = payload
        }
    },

    getters: {
        objects(state) {
            return state.objects
        },
        type(state) {
            return state.type
        }
    }
}