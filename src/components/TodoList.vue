<template>
  <div>Привет, {{name}}!
    <button v-on:click="addTodo">Добавить WTF?</button>
    <ul>
      <todo-item
        v-for="item in todos"
        :key="item.id"
        :text="item.text"
        :isClosed="item.isClosed"
        :id="item.id"
      ></todo-item>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { ADD_TODO } from '../store/mutation-types'
import TodoItem from './TodoItem.vue'

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
  components: { TodoItem }
}
</script>
