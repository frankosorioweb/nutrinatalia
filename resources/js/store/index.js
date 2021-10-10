import Vue from "vue";
import Vuex from 'vuex'

import navigationDrawer from './modules/navigationDrawer';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        navigationDrawer
    }
});

export default store;