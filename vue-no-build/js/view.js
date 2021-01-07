import Vue from '../node_modules/vue/dist/vue.esm.browser.js';
import MyRepeater from './my-repeater.js';

export function createView(el) {
    return new Vue({
        el,

        components : { MyRepeater },

        data() {
            return {
                message : 'Hello from Vue!'
            };
        }
    })
}