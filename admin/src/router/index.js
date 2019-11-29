import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'
import SkillEdit from '../views/SkillEdit.vue'
import SkillList from '../views/SkillList.vue'
import FilterEdit from '../views/FilterEdit.vue'
import FilterList from '../views/FilterList.vue'
import JobEdit from '../views/JobEdit.vue'
import JobList from '../views/JobList.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      { path: '/categories/new', component: CategoryEdit },
      { path: '/categories/edit/:id', component: CategoryEdit, props: true },
      { path: '/categories/list', component: CategoryList },

      { path: '/skills/new', component: SkillEdit },
      { path: '/skills/edit/:id', component: SkillEdit, props: true },
      { path: '/skills/list', component: SkillList },

      { path: '/filters/new', component: FilterEdit },
      { path: '/filters/edit/:id', component: FilterEdit, props: true },
      { path: '/filters/list', component: FilterList },

      { path: '/jobs/new', component: JobEdit },
      { path: '/jobs/edit/:id', component: JobEdit, props: true },
      { path: '/jobs/list', component: JobList },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
]

const router = new VueRouter({
  routes
})

export default router
