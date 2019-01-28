import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/pages/Main.vue'
import Documentation from '@/pages/Documentation.vue'

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
