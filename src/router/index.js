import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList.vue'
import Documentation from '@/components/Documentation.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/doc',
      name: 'Documentation',
      component: Documentation
    }
  ]
})
