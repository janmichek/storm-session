import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AutoImport from '../views/AutoImport.vue'
import Extract from '../views/ExtractVueComponent.vue'
import History from '../views/History.vue'
import Todo from '../views/InAppTodo.vue'
import Workplace from '../views/Workplace.vue'
import KeyStrokes from '../views/KeyStrokes.vue'
import Columns from '../views/Columns.vue'
import Folding from '../views/Folding.vue'
import NewFileTemplate from '../views/NewFileTemplate.vue'
import Plugins from '../views/Plugins.vue'
import Catgif from '../views/Catgif.vue'

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
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/workplace',
    name: 'Workplace',
    component: Workplace
  },
  {
    path: '/keystrokes',
    name: 'KeyStrokes',
    component: KeyStrokes
  },
  {
    path: '/columns',
    name: 'Columns',
    component: Columns
  },
  {
    path: '/newFileTemplate',
    name: 'NewFileTemplate',
    component: NewFileTemplate
  },
  {
    path: '/folding',
    name: 'Folding',
    component: Folding,
  },
  {
    path: '/Plugins',
    name: 'Plugins',
    component: Plugins
  },
  {
    path: '/catgif',
    name: 'catgif',
    component: Catgif
  },
]

const router = new VueRouter({
  routes
})

export default router
