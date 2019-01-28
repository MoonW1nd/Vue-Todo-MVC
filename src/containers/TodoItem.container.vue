<template>
  <TodoItem
    v-bind:class="[{ 'TodoItem_closed': isClosed }]"
    :onClickCheckbox="toggleClosed"
    :id='id'
    :text='text'
    :isClosed='isClosed'
  />
</template>

<script>
import { mapMutations } from 'vuex'
import { TOGGLE_OPEN } from '../store/mutation-types'
import TodoItem from '@/components/TodoItem.vue'

export default {
  name: 'TodoItemContainer',
  props: {
    isClosed: Boolean,
    text: String,
    id: Number
  },
  components: { TodoItem },
  methods: {
    ...mapMutations({
      toggleClosed: TOGGLE_OPEN
    })
  }
}
</script>
