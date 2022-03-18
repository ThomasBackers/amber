import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'welcome',
    component: HelloWorld,
    props: { msg: 'Hello world!' }
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
