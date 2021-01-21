import Vue from 'vue'
import VueRouter from 'vue-router'
import ScreenHome from './components/screen-home.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes : [
        {
            path : '/',
            name : 'home',
            component : ScreenHome
        }
    ]
})

export default router