import "core-js/stable";
import "regenerator-runtime/runtime";
import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from '@/app.vue';

const app = createApp(App);

app.use(createPinia());

app.mount('#app');