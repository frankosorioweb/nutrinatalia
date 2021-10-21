import prices from './prices';
import productTypes from '../modules/productTypes';

const { WORKSHOP, EBOOK } = productTypes.state.types;

// Aquí definimos los precios de los WORKSHOPS e EBOOKS
const products = [{
    name: 'Dulces que nos hacen bien',
    description: 'Aprende a ejecutar recetas de postres dulces saludables, sin azúcar y sin harinas, con pocos pasos, ingredientes sencillos y súper deliciosos.',
    price: prices[WORKSHOP].off60,
    type: WORKSHOP
}];

export default products;
