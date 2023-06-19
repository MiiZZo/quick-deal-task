<script lang="ts">
export default {
    computed: {
        title: {
            get() {
                return this.$store.state.createTodoModel.title;
            },
            set(title: string) {
                this.$store.commit('createTodoModel/change', title, { root: true });
            }
        }
    },
    methods: {
        change(e) {
            this.$store.commit('createTodoModel/change', e.target.value)
        },
        add() {
            if (this.title.length === 0) {
                alert('Title can`t be empty')
                return;
            }
            this.$store.dispatch('createTodoModel/add')
        },
    }
}
</script>

<template>
    <v-container>
        <v-text-field v-model="title" label="Title" placeholder="Drink some coffee" v-on:keyup.enter="add" clearable></v-text-field>
        <v-btn @click="add">Add</v-btn>
    </v-container>
</template>
