<script setup lang="ts">
import { type Todo } from '../model'
defineProps<{ todo: Todo }>()
</script>

<template>
    <v-list-item>
        <slot name="toggle-todo" />
        <slot name="remove-todo" />

    </v-list-item>
</template>
