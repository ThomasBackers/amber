import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'welcome',
    component: HelloWorld
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
