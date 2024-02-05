import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePerfume from '../views/HomePerfume.vue'
import LoginPerfume from '../views/LoginPerfume.vue'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePerfume
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPerfume
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router