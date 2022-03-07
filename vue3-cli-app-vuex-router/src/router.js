// import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from './vue-router.esm-browser.js';
import ScreenHome from './components/screen-home.vue'

export const router = createRouter({
    // history: createWebHashHistory(),

    routes : [
        {
            path : '/',
            component : ScreenHome
        }
    ]
});