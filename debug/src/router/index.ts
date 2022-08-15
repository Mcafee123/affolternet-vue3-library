import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoaderView from '../views/LoaderView.vue'
import ToastsView from '../views/ToastsView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/loader'
  },
  {
    path: '/loader',
    name: 'loader',
    component: LoaderView
  },
  {
    path: '/toasts',
    name: 'toasts',
    component: ToastsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
