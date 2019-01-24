<template>
  <li class="Todo" v-bind:class="[{ 'Todo_closed': isClosed }]">{{text}}</li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    isClosed: Boolean,
    text: String
  }
}
</script>
