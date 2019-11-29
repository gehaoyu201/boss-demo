import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import List from '../views/List'
import Detail from '../views/Detail'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/list',
    name: 'list',
    component: List,
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
