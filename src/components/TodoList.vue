<template>
  <div class="TodoList">
    <ul class="TodoList-ItemList">
      <TodoItemContainer
        v-for="todo in todos"
        :key="todo.id"
        :text="todo.text"
        :isClosed="todo.isClosed"
        :id="todo.id"
      />
    </ul>
  </div>
</template>

<script>
import TodoItemContainer from '@/containers/TodoItem.container.vue'

export default {
  name: 'TodoList',
  props: ['todos'],
  components: { TodoItemContainer }
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
