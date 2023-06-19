import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import Main from './Main.vue'
import { todosModel } from '@/entities/todos'
import { createTodoModel } from '@/features/create-todo'
import { HomePage } from '@/pages/home'
import { TodoListPage } from '@/pages/todo-list'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(Vuex)

const vuetify = new Vuetify({})

const store = new Vuex.Store({
  modules: {
    createTodoModel,
    todosModel,
  }
})

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/todo-list',
      component: TodoListPage,
    }
  ],
})

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(Main)
}).$mount('#app')
