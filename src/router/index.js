import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/utils/auth'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { name: 'login', path: '/login', component: () => import('@/components/login') },
    { name: 'list', path: '/list', component: () => import('@/components/list') },
    { name: 'hello', path: '/', component: () => import('@/components/hello') }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})
router.afterEach((to, from) => {

})

export default router
