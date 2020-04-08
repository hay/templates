import 'regenerator-runtime/runtime';
import Vue from 'vue';
import App from './components/app.vue';

(async function() {
    new Vue({
        el : "main",

        components : { App },

        render: h => h( App )
    });
})();