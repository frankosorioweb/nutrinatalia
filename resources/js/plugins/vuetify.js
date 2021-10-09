import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                primary: '#00959B',
                secondary: '#764191'
            }
        }
    }
}

export default new Vuetify(opts)