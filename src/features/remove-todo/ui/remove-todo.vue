<script lang="ts">
export default {
  props: {
    todoId: {
      type: String,
      required: true,
    }
  },
  methods: {
    removeTodo(e) {
      e.stopPropagation()
      this.$store.commit('todosModel/remove', { id: this.$props.todoId }, { root: true })
      this.$store.dispatch('todosModel/save', {}, { root: true })
    }
  },
}
</script>

<template>
  <v-btn @click="removeTodo" color="error">X</v-btn>
</template>
