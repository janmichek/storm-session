import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AutoImport from '../views/AutoImport.vue'
import Extract from '../views/ExtractVueComponent.vue'
import History from '../views/History.vue'
import Todo from '../views/InAppTodo.vue'
import Intro from '../views/Intro.vue'
import KeyStrokes from '../views/KeyStrokes.vue'
import Layout from '../views/Layout.vue'
import NewFileTemplate from '../views/NewFileTemplate.vue'
import Plugins from '../views/Plugins.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/autoimport',
    name: 'AutoImport',
    component: AutoImport
  },
  {
    path: '/extract',
    name: 'Extract',
    component: Extract
  },
  {
    path: '/hitory',
    name: 'History',
    component: History
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/intro',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/keystrokes',
    name: 'KeyStrokes',
    component: KeyStrokes
  },
  {
    path: '/layout',
    name: 'Layout',
    component: Layout
  },
  {
    path: '/NewFileTemplate',
    name: 'NewFileTemplate',
    component: NewFileTemplate
  },
  {
    path: '/Plugins',
    name: 'Plugins',
    component: Plugins
  },
]

const router = new VueRouter({
  routes
})

export default router
