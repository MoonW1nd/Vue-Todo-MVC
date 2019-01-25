<template>
  <text-input
    :class="mix"
    v-model="inputValue"
    @keypress.enter="addTodo"
  ></text-input>
</template>

<script>
import TextInput from '@/components/TextInput.vue'
import {store} from '@/store'
import { ADD_TODO } from '../store/mutation-types'

export default {
  name: 'TextInputWrapper',
  data: function () {
    return {
      inputValue: ''
    }
  },
  props: {
    mix: String
  },
  store,
  methods: {
    addTodo () {
      store.commit(ADD_TODO, this.inputValue)
      this.inputValue = ''
    }
  },
  components: { TextInput }
}
</script>
