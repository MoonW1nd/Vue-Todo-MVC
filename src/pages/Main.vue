<template>
  <main class="Page Page_main">
    <Logo
      :src="src"
      class="Page-Logo"
    />
    <TodoInputContainer placeholder="Add task"/>
    <OpenedTodoListContainer/>
  </main>
</template>

<script>
import OpenedTodoListContainer from '@/containers/OpenedTodoList.container.vue'
import Logo from '@/components/Logo.vue'
import LogoImage from '@/assets/Logo_Todo.svg'
import TodoInputContainer from '@/containers/TodoInput.container.vue'

export default {
  name: 'TodoList',
  data () {
    return {
      src: LogoImage
    }
  },
  props: ['todos'],
  components: { OpenedTodoListContainer, TodoInputContainer, Logo }
}
</script>

<style lang="scss" scoped>
.TodoList {
  display: flex;
  flex-direction: column;
  align-items: center;

  &-ItemList {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 18px;
    width: calc(50vw - 15px);
    min-width: 350px;
    max-width: 70ch;
  }
}

.Page {
  display: flex;
  flex-direction: column;
  align-items: center;

  &-Logo {
    position: relative;
    width: calc(20vw - 15px);
    min-width: 100px;
    max-width: 190px;
    margin: calc(10px + (20 - 10) * (100vw - 320px) / (1200 - 320));
  }
}
</style>
