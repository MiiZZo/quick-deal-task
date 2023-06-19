<script lang="ts">
import { TodoItem } from '@/entities/todos'
import type { Todo } from '@/entities/todos'
import { CreateTodo } from '@/features/create-todo';
import { ToggleTodo } from '@/features/toggle-todo';

import { RemoveTodo } from '@/features/remove-todo';

export default {
  components: {
    TodoItem,
    CreateTodo,
    ToggleTodo,
    RemoveTodo
  },
  data() {
    return {
      isFocused: false,
      title: '',
    }
  },
  computed: {
    todos() {
      return this.$store.state.todosModel.todos as Todo[];
    }
  },
  beforeMount() {
    this.$store.dispatch('todosModel/load', {}, { root: true })
  },
  methods: {
    focus(title) {
      this.title = title;
    },
    change(title: string) {
      this.title = title;
    },
    save(id: string) {
      this.$store.commit('todosModel/edit', { id, title: this.title }, { root: true })
      this.$store.dispatch('todosModel/save', {}, { root: true })

    }
  },
}
</script>

<template>
    <v-main>
      <CreateTodo />
      <v-card class="mx-auto" max-width="500">
        <v-list class="todo-list">
          <v-list-item-group>
            <template v-for="item in todos">
              <TodoItem :todo="item" :key="item.id">
                <template #toggle-todo>
                  <ToggleTodo :todo="item">
                    <template #content>
                      <v-list-item-content>
                        <v-text-field
                          :value="item.title"
                          @input="change"
                          @mouseenter="focus(item.title)"
                          @mouseleave="save(item.id)"
                          @focus="focus(item.title)"
                          v-on:keyup.enter="save(item.id)"
                        ></v-text-field>
                      </v-list-item-content>
                    </template>
                  </ToggleTodo>
                </template>
                <template #remove-todo>
                  <v-list-item-action>
                    <RemoveTodo :todo-id="item.id" />
                  </v-list-item-action>
                </template>
              </TodoItem>
            </template>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-main>
</template>
