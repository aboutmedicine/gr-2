import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


function requireAuth (to, from, next) {
    if (!localStorage.getItem('token')){
        console.log("bbbb")
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        })
    }else {
        console.log(localStorage.getItem('token'))
        next()
    }
}

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/pricing',
        name: 'Pricing',
        component: () => import(/* webpackChunkName: "pricing" */ '../views/Pricing.vue')
    },
    {
        path: '/:group_name/lesson/:id',
        name: 'lessons',
        component: () => import(/* webpackChunkName: "lesson" */ '../views/Lesson.vue'),
        beforeEnter: requireAuth
    },
    {
        path: '/lessons/:id',
        name: 'lessonss',
        component: () => import(/* webpackChunkName: "blogpost" */ '../views/Lesson.vue')
    },
    {
        path: '/create',
        name: 'create',
        component: () => import(/* webpackChunkName: "write-blogpost" */'../views/MakeLesson.vue')
    },
    {
        path: '/signup',
        name: 'singup',
        component: () => import(/* webpackChunkName: "write-blogpost" */'../views/Signup.vue')
    },
    {
        path: '/Login',
        name: 'login',
        component: () => import(/* webpackChunkName: "write-blogpost" */'../views/Login.vue')
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
