import money from './money';
import productTypes from '../modules/productTypes';

const {
    WORKSHOP,
    EBOOK
} = productTypes.state.types;

// Aquí definimos los precios de los WORKSHOPS e EBOOKS
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

const products = [{
    name: 'Dulces que nos hacen bien',
    description: 'Aprende a ejecutar recetas de postres dulces saludables, sin azúcar y sin harinas, con pocos pasos, ingredientes sencillos y súper deliciosos.',
    price: prices[WORKSHOP].off60,
    type: WORKSHOP
}];

export default products;
