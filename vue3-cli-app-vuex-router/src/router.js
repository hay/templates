import { createRouter, createWebHashHistory } from 'vue-router'
import ScreenHome from './components/screen-home.vue'

export const router = createRouter({
    history: createWebHashHistory(),

    routes : [
        {
            path : '/',
            component : ScreenHome
        }
    ]
});