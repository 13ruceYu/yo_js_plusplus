<template>
  <todo-input></todo-input>
  <todo-list></todo-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoInput from '@/components/TodoInput/index.vue';
import TodoList from '@/components/TodoList/index.vue';

export default defineComponent({
  name: 'App',
  components: {
    TodoInput,
    TodoList,
  },
});
</script>

<style lang="scss"></style>
