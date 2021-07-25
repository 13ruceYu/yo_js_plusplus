<template>
  <div>TodoList</div>
  <div>
    <todo-item></todo-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoItem from './TodoItem.vue';

export default defineComponent({
  name: 'TodoList',
  components: {
    TodoItem,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
