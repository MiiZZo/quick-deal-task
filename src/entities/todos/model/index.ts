
export type Todo = {
    id: string;
    title: string;
    isCompleted: boolean;
}

export const todosModel = {
    namespaced: true,
    state: {
        todos: [
            {
                id: "1",
                isCompleted: false,
                title: "Drink some coffee"
            }
        ]
    },
    mutations: {
        set(state, todos) {
            console.log(todos)
            state.todos = todos
        },
        add(state, title) {
            state.todos = [...state.todos, { id: Math.random().toString(), title, isCompleted: false }]
        },
        edit(state, editTodo) {
            state.todos = state.todos.map((todo) => {
                if (todo.id === editTodo.id) {
                    return { ...todo, ...editTodo }
                }

                return todo
            });
        },
        remove(state, { id }) {
            state.todos = state.todos.filter((todo) => todo.id !== id)
        }
    },
    actions: {
        save({ state }) {
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        load({ commit }) {
            commit('set', JSON.parse(localStorage.getItem('todos') || '') || [])
        }
    }
};
