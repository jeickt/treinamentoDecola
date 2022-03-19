import Vue from 'vue'
import VueRouter from 'vue-router'
import MyHome from '../views/MyHome.vue'
import ListaPaises from '../views/ListaPaises.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MyHome,
  },
  {
    path: '/ListaPaises',
    name: 'ListaPaises',
    component: ListaPaises
  },
]

const router = new VueRouter({
  routes,
})

export default router
