<template>
  <button class="ButtonClose" :class="mix" @click.stop="removeTodo(id)"></button>
</template>

<script>
import { mapMutations } from 'vuex'
import { REMOVE_TODO } from '../store/mutation-types'

export default {
  name: 'ButtonClose',
  props: {
    id: Number,
    mix: String
  },
  methods: {
    ...mapMutations({
      removeTodo: REMOVE_TODO
    })
  }
}
</script>

<style lang="scss" scoped>
.ButtonClose {
  position: absolute;
  top: 10px;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  font-size: 30px;
  color: #cc9a9a;
  display: none;
  transition: color 0.2s ease-out;
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  background: none;
  vertical-align: baseline;
  font-family: inherit;
  -webkit-appearance: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  cursor: pointer;

  &:after {
    content: '×';
  }

  &:focus {
    color: #e06c75;
  }
}
</style>
