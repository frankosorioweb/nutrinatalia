import Home from '../pages/Home.vue';
import Products from '../pages/Products.vue';
import Details from '../pages/Details.vue';

import productTypes from '../store/modules/productTypes';
const {
    WORKSHOP,
    EBOOK
} = productTypes.state.types;

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
    {
        path: '/talleres/:shortName',
        component: Details,
        props: {
            type: WORKSHOP
        }
    },
    {
        path: '/ebooks/:shortName',
        component: Details,
        props: {
            type: EBOOK
        }
    },
]

export default routes;
