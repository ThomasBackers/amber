import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// requiresAuth
import AppLayout from '../layouts/AppLayout.vue'
import WelcomeView from '../views/WelcomeView.vue'
// requiresGuest
import GuestLayout from '../layouts/GuestLayout.vue'
import LoginView from '../views/LoginView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'Welcome',
        component: WelcomeView
      }
    ]
  },
  {
    path: '/guest',
    component: GuestLayout,
    redirect: { name: 'Login' },
    meta: { requiresGuest: true },
    children: [
      {
        path: '/login',
        name: 'Login',
        component: LoginView
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
