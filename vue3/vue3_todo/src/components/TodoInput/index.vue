<template>
  <div>
    <input type="text" v-model="todoValue" @keyup.enter="setTodoValue" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IUseTodo, useTodo, useLocalStorage } from '@/hooks/index';
import store from '@/store';

export default defineComponent({
  name: 'TodoInput',
  setup() {
    const todoValue = ref<string>('');
    const { setTodo }: IUseTodo = useTodo();
    const { setLocalList } = useLocalStorage();
    const setTodoValue = (): void => {
      if (todoValue.value.trim().length) {
        // 设置数据
        setTodo(todoValue.value);
        setLocalList(store.state.list);
        todoValue.value = '';
      }
    };

    return {
      todoValue,
      setTodoValue,
    };
  },
});
</script>

<style scoped></style>
