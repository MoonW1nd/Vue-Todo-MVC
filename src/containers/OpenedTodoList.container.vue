<template>
  <TodoList
    :todos="todos"
  />
</template>

<script>
import { mapState } from 'vuex'
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'OpenedTodoListContainer',
  computed: mapState({
    todos: 'todos'
  }),
  components: { TodoList }
}
</script>
