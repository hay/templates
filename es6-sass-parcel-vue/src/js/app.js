import 'regenerator-runtime/runtime';
import Vue from 'vue';
import App from './components/app.vue';
import { Store } from './store.js';

(async function() {
    const store = new Store({});

    new Vue({
        el : "main",

        components : { App },

        render: h => h( App ),

        store : store.getStore()
    });
})();