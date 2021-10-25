import Home from '../pages/Home.vue';
import Products from '../pages/Products/index.vue';

import productTypes from '../store/modules/productTypes';
const { WORKSHOP, EBOOK } = productTypes.state.types;

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'workshops',
        path: '/talleres',
        component: Products,
        props: {
            type: WORKSHOP
        }
    },
    {
        name: 'ebooks',
        path: '/ebooks',
        component: Products,
        props: {
            type: EBOOK
        }
    },
]

export default routes;