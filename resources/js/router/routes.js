import Home from '../pages/Home.vue';
import Products from '../pages/Products.vue';

import productTypes from '../store/modules/productTypes';
const { WORKSHOP, EBOOK } = productTypes.state.types;

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: WORKSHOP,
        path: '/talleres',
        component: Products,
        props: {
            type: WORKSHOP
        }
    },
    {
        name: EBOOK,
        path: '/ebooks',
        component: Products,
        props: {
            type: EBOOK
        }
    },
]

export default routes;