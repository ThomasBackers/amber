import { createRouter, createWebHistory } from 'vue-router'
// Guest components
import GuestLayout from '../layouts/GuestLayout.vue'
// App components
import AppLayout from '../layouts/AppLayout.vue'
import WelcomeView from '../views/WelcomeView.vue'

const routes = [
  {
    path: '/',
    component: GuestLayout,
    meta: { guestOnly: true }
  },
  {
    path: '/app',
    component: AppLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'Welcome',
        component: WelcomeView
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
