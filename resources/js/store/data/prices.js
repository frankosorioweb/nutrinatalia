import productTypes from '../modules/productTypes';
import money from './money';

const {
    WORKSHOP,
    EBOOK
} = productTypes.state.types;

let prices = {};

prices[WORKSHOP] = {
    default: {
        default: true,
        dollar: {
            symbol: money.symbols.dollar,
            value: 36,
        },
        guarani: {
            symbol: money.symbols.guarani,
            value: 245000,
        }
    }
}

prices[WORKSHOP].off60 = {
    default: false,
    discount: 60,
    dollar: {
        symbol: money.symbols.dollar,
        value: 13.9,
        old: prices[WORKSHOP].default.dollar.value
    },
    guarani: {
        symbol: money.symbols.guarani,
        value: 95000,
        old: prices[WORKSHOP].default.guarani.value
    }
}

export default prices;