import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export class Store {
    constructor(data) {
        function getInitialState() {
            return {};
        }

        this.store = new Vuex.Store({
            state : getInitialState()
        });
    }

    getStore() {
        return this.store;
    }
}