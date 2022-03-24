import { createRouter, createWebHistory } from 'vue-router'
// App components
import AppLayout from '../layouts/AppLayout.vue'
import WelcomeView from '../views/WelcomeView.vue'
// Guest components
import GuestLayout from '../layouts/GuestLayout.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
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
