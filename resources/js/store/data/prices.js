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
            value: `14.5 ${money.symbols.dollar}`
        },
        guarani: {
            value: `100.000 ${money.symbols.guarani}`
        },
    }
}

prices[WORKSHOP].off100Short = {
    default: false,
    discount: 100,
    dollar: {
        value: 'GRATIS',
        old: `5 ${money.symbols.dollar}`
    },
    guarani: {
        value: 'GRATIS',
        old: `34.000 ${money.symbols.guarani}`
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

prices[EBOOK].recetario = {
    default: false,
    discount: 0,
    dollar: {
        value: `7.5 ${money.symbols.dollar}`
    },
    guarani: {
        value: `50.000 ${money.symbols.guarani}`
    }
}

prices[EBOOK].ketoAyuno30Dias = {
    default: false,
    discount: 0,
    dollar: {
        value: `32 ${money.symbols.dollar}`
    },
    guarani: {
        value: `220.000 ${money.symbols.guarani}`
    }
}

export default prices;