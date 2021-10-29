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
            value: `36 ${money.symbols.dollar}`,
            amount: '36'
        },
        guarani: {
            value: `245.000 ${money.symbols.guarani}`,
            amount: '245.000'
        },
    }
}

prices[WORKSHOP].off60 = {
    default: false,
    discount: 60,
    dollar: {
        value: `13.9 ${money.symbols.dollar}`,
        old: prices[WORKSHOP].original.dollar.amount
    },
    guarani: {
        value: `95.000 ${money.symbols.guarani}`,
        old: prices[WORKSHOP].original.guarani.amount
    }
}

export default prices;