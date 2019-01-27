import { ADD_TODO, REMOVE_TODO, TOGGLE_OPEN } from './mutation-types'
import Vuex from 'vuex'
import Vue from 'vue'
import { addTodo, toggleOpen, removeTodo } from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todos: [
      {
        id: 0,
        createTime: 1548607549057,
        closeTime: 1548607749057,
        isClosed: true,
        text: 'Create Todo list'
      }
    ],
    nextId: 1
  },
  mutations: {
    [ADD_TODO] (state, value) {
      addTodo(state, {
        id: state.nextId++,
        createTime: Date.now(),
        closeTime: null,
        isClosed: false,
        text: value
      })
    },
    [REMOVE_TODO] (state, id) {
      removeTodo(state, id)
    },
    [TOGGLE_OPEN] (state, id) {
      toggleOpen(state, id)
    }
  }
})
