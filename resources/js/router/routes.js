import Home from '../pages/Home.vue';
import Products from '../pages/Products.vue';
import Details from '../pages/Details.vue';
import Cart from '../pages/Cart.vue';
import Support from '../pages/Support.vue';
import OnlineConsultations from '../pages/OnlineConsultations.vue';
import ConsultasOnline from '../pages/ConsultasOnline.vue';
const ChallengeKetoAyuno = () => import('../pages/ChallengeKetoAyuno.vue');

import productTypes from '../store/modules/productTypes';
const {
    WORKSHOP,
    EBOOK,
    EXTRA
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
        name: EXTRA,
        path: '/descargables',
        component: Products,
        props: {
            type: EXTRA
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
        component: ConsultasOnline
    },
    /*{
        name: 'online-consultations-2',
        path: '/consultas-2',
        component: ConsultasOnline
    },*/
    {
        name: 'challenge-15-dias-keto-ayuno',
        path: '/reto/15-dias-keto-ayuno-v5',
        component: ChallengeKetoAyuno,
    },
    {
        path: '*',
        redirect: { name: 'home' }
    }
]

export default routes;
