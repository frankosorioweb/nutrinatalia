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
        dollar: {
            value: `36 ${money.symbols.dollar}`
        },
        guarani: {
            value: `245.000 ${money.symbols.guarani}`
        },
    }
}

prices[WORKSHOP].off60 = {
    default: false,
    discount: 60,
    dollar: {
        value: `13.9 ${money.symbols.dollar}`,
        old: prices[WORKSHOP].original.dollar.value
    },
    guarani: {
        value: `95.000 ${money.symbols.guarani}`,
        old: prices[WORKSHOP].original.guarani.value
    }
}

export default prices;