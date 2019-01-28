<template>
  <div class="TodoList">
    <text-input-wrapper placeholder="Add task"/>
    <ul class="TodoList-ItemList">
      <todo-item-wrapper
        v-for="item in todos"
        :key="item.id"
        :text="item.text"
        :isClosed="item.isClosed"
        :id="item.id"
      ></todo-item-wrapper>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { ADD_TODO } from '../store/mutation-types'
import TodoItemWrapper from '@/wrappers/TodoItem.wrap.vue'
import TextInputWrapper from '@/wrappers/TextInput.wrap.vue'

export default {
  name: 'Hello',
  data () {
    return {
      name: 'Александр Иванков'
    }
  },
  computed: mapState({
    todos: 'todos'
  }),
  methods: {
    ...mapMutations({
      addTodo: ADD_TODO
    })
  },
  components: { TodoItemWrapper, TextInputWrapper }
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
