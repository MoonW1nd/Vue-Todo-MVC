<template>
  <input
    type="text"
    v-model="inputValue"
    placeholder="Add task"
    class="TodoInput"
    @keypress.enter="addTodo(inputValue)"
  />
</template>

<script>
import {store} from '../store'
import { ADD_TODO } from '../store/mutation-types'

export default {
  name: 'TodoInput',
  data: function () {
    return {
      inputValue: ''
    }
  },
  store,
  methods: {
    addTodo (value) {
      store.commit(ADD_TODO, this.inputValue)
      this.inputValue = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.TodoInput {
  font: 18px arial, sans-serif;
  border: none;
  padding: 0;
  margin: 0;
  padding-left: 15px;
  background-color: #ffffff;
  height: 58px;
  vertical-align: top;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  width: calc(50vw - 15px);
  min-width: 350px;
  max-width: 70ch;
  box-sizing: border-box;

  &::-webkit-input-placeholder,
  &::-moz-placeholder,
  &:-moz-placeholder,
  &:-ms-input-placeholder {
    font-weight: 100;
    padding-left: 10px;
    color: #aba9a9;
  }

  &:hover,
  &:focus {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
  }
}
</style>

