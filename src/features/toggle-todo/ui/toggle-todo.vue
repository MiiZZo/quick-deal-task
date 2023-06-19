<script lang="ts">
import { type Todo } from '@/entities/todos'
import type { PropType } from 'vue';
export default {
    props: {
        todo: {
            type: Object as PropType<Todo>,
            required: true
        }
    },
    computed: {
        isCompleted: {
            get() {
                return this.$props.todo.isCompleted;
            },
            set(isCompleted: boolean) {
                const todoId = this.$props.todo.id

                this.$store.commit('todosModel/edit', { id: todoId, isCompleted }, { root: true })
                this.$store.dispatch('todosModel/save', {}, { root: true })
            }
        }
    }
}
</script>

<template>
    <div class="wrapper">
        <v-checkbox v-model="isCompleted">
        </v-checkbox>
        <slot name="content" />

    </div>
</template>

<style scoped>
    .wrapper {
        display: flex;
    }
</style>