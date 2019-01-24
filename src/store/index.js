import { ADD_TODO, REMOVE_TODO, TOGGLE_OPEN } from './mutation-types'
import Vuex from 'vuex'
import Vue from 'vue'
import { addTodo, toggleOpen } from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        isClosed: true,
        text: 'WTF?'
      }
    ],
    index: 10
  },
  mutations: {
    [ADD_TODO] (state) {
      addTodo(state, {
        id: state.index++,
        isClosed: false,
        text: 'WTF?'
      })
    },
    [REMOVE_TODO] (state) {

    },
    [TOGGLE_OPEN] (state, id) {
      toggleOpen(state, id)
    }
  }
})
