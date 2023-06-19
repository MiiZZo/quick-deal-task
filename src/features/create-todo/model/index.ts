export const createTodoModel = {
    namespaced: true,
    state: {
        title: ""
    },
    mutations: {
        change(state, payload) {
            state.title = payload
        },
    },
    actions: {
        add({ state, commit, dispatch }) {
            commit('todosModel/add', state.title, { root: true })
            dispatch('todosModel/save', {}, { root: true })
            commit('change', '')
        }
    }
}
