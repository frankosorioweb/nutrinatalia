import prices from './prices';
import productTypes from '../modules/productTypes';

const postersSrc = '/img/posters/';
const { WORKSHOP, EBOOK } = productTypes.state.types;

// Aquí definimos los precios de los WORKSHOPS e EBOOKS
const products = [
    {
        id: 1,
        poster: `${postersSrc}Panes sin culpa.png`,
        name: 'Dulces que nos hacen bien',
        description: 'Taller aprende a ejecutar recetas de postres dulces saludables, sin azúcar y sin harinas, con pocos pasos, ingredientes sencillos y súper deliciosos.',
        price: prices[WORKSHOP].off60,
        type: WORKSHOP
    },
    {
        id: 1,
        poster: `${postersSrc}Spaghetti.jpg`,
        name: 'Spaghetti',
        description: 'Taller aprende a ejecutar recetas de postres dulces saludables, sin azúcar y sin harinas, con pocos pasos, ingredientes sencillos y súper deliciosos.',
        price: prices[WORKSHOP].original,
        type: WORKSHOP
    },
    {
        id: 1,
        poster: `${postersSrc}Salad.jpg`,
        name: 'Salad',
        description: 'Ebook aprende a ejecutar recetas de postres dulces saludables, sin azúcar y sin harinas, con pocos pasos, ingredientes sencillos y súper deliciosos.',
        price: prices[WORKSHOP].original,
        type: EBOOK
    }
];

export default products;