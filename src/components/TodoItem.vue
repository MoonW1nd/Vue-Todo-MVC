<template>
  <li class="Todo" v-bind:class="[{ 'Todo_closed': isClosed }]">
    <label class="Todo-Label" @click.prevent="toggleClosed(id)">
      <input class="Todo-Checkbox" type="checkbox" v-bind:checked="isClosed"/>
      <p class="Todo-Text">{{text}}</p>
    </label>
  </li>
</template>

<script>
import { mapMutations } from 'vuex'
import { TOGGLE_OPEN } from '../store/mutation-types'

export default {
  name: 'TodoItem',
  props: {
    isClosed: Boolean,
    text: String,
    id: Number
  },
  methods: {
    ...mapMutations({
      toggleClosed: TOGGLE_OPEN
    })
  }
}
</script>

<style scoped>
.Todo {
  list-style: none;
}

.Todo-Label {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

.Todo-Text {
  margin: 0 10px;
}

.Todo_closed .Todo-Text {
  text-decoration: line-through;
}
</style>
