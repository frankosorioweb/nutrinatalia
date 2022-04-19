import Home from '../pages/Home.vue';
import Products from '../pages/Products.vue';
import Details from '../pages/Details.vue';
import Cart from '../pages/Cart.vue';
import Support from '../pages/Support.vue';
import OnlineConsultations from '../pages/OnlineConsultations.vue';
import ChallengeKetoAyunoV4 from '../pages/ChallengeKetoAyunoV4.vue';

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
        name: `${WORKSHOP}-details`,
        path: '/talleres/:shortName',
        component: Details,
        props: {
            type: WORKSHOP
        }
    },
    {
        name: `${EBOOK}-details`,
        path: '/ebooks/:shortName',
        component: Details,
        props: {
            type: EBOOK
        }
    },
    {
        name: 'buy',
        path: '/comprar/:type/:shortName',
        component: Cart
    },
    {
        name: 'support',
        path: '/soporte',
        component: Support
    },
    {
        name: 'online-consultations',
        path: '/consultas',
        component: OnlineConsultations
    },
    {
        name: 'challenge-15-dias-keto-ayuno-v4',
        path: '/reto/15-dias-keto-ayuno-v4',
        component: ChallengeKetoAyunoV4,
    },
    {
        path: '*',
        redirect: { name: 'home' }
    }
]

export default routes;
