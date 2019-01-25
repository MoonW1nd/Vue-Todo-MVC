<template>
  <button-close :class="mix" @click.stop="removeTodo(id)"></button-close>
</template>

<script>
import ButtonClose from '@/components/ButtonClose.vue'
import { mapMutations } from 'vuex'
import { REMOVE_TODO } from '../store/mutation-types'

export default {
  name: 'ButtonCloseWrapper',
  props: {
    id: Number,
    mix: String
  },
  methods: {
    ...mapMutations({
      removeTodo: REMOVE_TODO
    })
  },
  components: { ButtonClose }
}
</script>
