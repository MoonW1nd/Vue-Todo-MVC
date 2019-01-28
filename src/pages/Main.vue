<template>
  <main class="Page Page_main">
    <TodoInputContainer placeholder="Add task"/>
    <OpenedTodoListContainer/>
  </main>
</template>

<script>
import OpenedTodoListContainer from '@/containers/OpenedTodoList.container.vue'
import TodoInputContainer from '@/containers/TodoInput.container.vue'

export default {
  name: 'TodoList',
  props: ['todos'],
  components: { OpenedTodoListContainer, TodoInputContainer }
}
</script>

<style lang="scss" scoped>
.TodoList {
  display: flex;
  flex-direction: column;
  align-items: center;

  &-ItemList {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 18px;
    width: calc(50vw - 15px);
    min-width: 350px;
    max-width: 70ch;
  }
}
</style>
