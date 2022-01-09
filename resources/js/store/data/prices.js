import productTypes from '../modules/productTypes';
import money from './money';

const {
    WORKSHOP,
    EBOOK
} = productTypes.state.types;

let prices = {};

prices[WORKSHOP] = {
    original: {
        default: true,
        discount: 0,
        dollar: {
            value: `14 ${money.symbols.dollar}`
        },
        guarani: {
            value: `95.000 ${money.symbols.guarani}`
        },
    }
}

prices[EBOOK] = {
    original: {
        default: true,
        discount: 0,
        dollar: {
            value: `29 ${money.symbols.dollar}`
        },
        guarani: {
            value: `200.000 ${money.symbols.guarani}`
        },
    }
}

prices[WORKSHOP].off100 = {
    default: false,
    discount: 100,
    dollar: {
        value: 'GRATIS',
        old: prices[WORKSHOP].original.dollar.value
    },
    guarani: {
        value: 'GRATIS',
        old: prices[WORKSHOP].original.guarani.value
    }
}

export default prices;