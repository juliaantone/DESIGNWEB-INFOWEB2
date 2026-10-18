import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ComidasView from '@/views/ComidasView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/comidas',
        name: 'Comidas',
        component: ComidasView
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router