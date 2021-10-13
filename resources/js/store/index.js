import Vue from "vue";
import Vuex from 'vuex'

import navigationDrawer from './modules/navigationDrawer';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        links: {
            socialMedia: {
                facebook: 'https://www.facebook.com/nutrinataliach',
                instagram: 'https://instagram.com/nutrinataliach'
            }
        }
    },
    modules: {
        navigationDrawer
    }
});

export default store;