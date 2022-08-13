import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoaderView from '../views/LoaderView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/loader'
  },
  {
    path: '/loader',
    name: 'loader',
    component: LoaderView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
