<template>
  <todo-item
    v-bind:class="[{ 'TodoItem_closed': isClosed }]"
    @click.prevent="toggleClosed(id)"
    :id='id'
    :text='text'
    :isClosed='isClosed'
  ></todo-item>
</template>

<script>
import { mapMutations } from 'vuex'
import { TOGGLE_OPEN } from '../store/mutation-types'
import TodoItem from '@/components/TodoItem.vue'

export default {
  name: 'TodoItemWrapper',
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
