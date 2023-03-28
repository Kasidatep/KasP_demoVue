import { createRouter, createWebHistory } from 'vue-router'
import QuestionManagementView from '../components/QuestionManagement.vue'
import OneQuestionManagement from '../components/OneQuestionManagement.vue'
import AboutView from '../views/AboutUs.vue'
import NotFoundView from '../views/NotFound.vue'
import QuestionView from '../views/QuestionVue.vue'


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
        },
        {
            path: '/question/:questionId',
            name: 'OneQuestionManagement',
            component: OneQuestionManagement
        }
        ,
        {
            path: '/question/',
            name: 'QuestionList',
            component: QuestionView
        }
    ]
})
export default router