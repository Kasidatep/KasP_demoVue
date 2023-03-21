import { createRouter, createWebHistory } from 'vue-router'
import QuestionManagementView from '../components/QuestionManagement.vue'
import AboutView from '../views/AboutUs.vue'
import NotFoundView from '../views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'QuestionManagement',
            component: QuestionManagementView
        },
        {
            path: '/about',
            name: 'About',
            component: AboutView
        },
        {
            path: '/:catchNotMatchPath(.*)',
            name: 'NotFound',
            component: NotFoundView
        }
    ]
})
export default router