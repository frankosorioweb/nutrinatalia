import prices from './prices';
import productTypes from '../modules/productTypes';

const postersSrc = '/img/posters/';
const {
    WORKSHOP,
    EBOOK
} = productTypes.state.types;

// Aquí definimos los precios de los WORKSHOPS e EBOOKS
const products = [{
        poster: `${postersSrc}Panes sin culpa.png`,
        name: 'Dulces que nos hacen bien',
        shortName: 'dulces-saludables',
        duration: '+2 horas que puedes hacerlas de continuado o por partes, según tu disponibilidad de tiempo',
        description: 'Aprende a ejecutar recetas de postres dulces saludables, sin azúcar y sin harinas, con pocos pasos, ingredientes sencillos y súper deliciosos.',
        price: prices[WORKSHOP].off100,
        type: WORKSHOP,
        features: [{
                title: 'Acerca del taller',
                info: [
                    'En este taller aprenderás a ejecutar las recetas de estos 5 dulces saludables: cheesecake, brownie, cookies con gotas de cacao, muffins y tarta de frutos rojos, todo esto sin azúcares y sin harinas, pocos pasos, ingredientes sencillos y súper deliciosos.',
                ]
            },
            {
                list: true,
                title: 'Lo que aprenderás',
                info: [
                    'Que los dulces con los ingredientes correctos ¡también son saludables!.',
                    'A disfrutar y sorprender a tu familia con dulces deliciosos que nos hacen bien',
                    'Que la preparación de dulces saludables es más sencilla de lo que te imaginas, apenas necesitas entre 5 a 20 minutos por receta.',
                ]
            },
            {
                list: true,
                title: 'Lo que necesitas para el taller',
                info: [
                    'Una cuenta de Google, ya que los videos estarán almacenados en Google Drive.',
                    'Un celular, una tableta o una computadora con conexión estable a internet ya que los videos están en alta resolución.',
                ]
            },
            {
                list: false,
                title: '¿A quién va dirigido el taller?',
                info: [
                    'Este taller es ideal para aquellos que necesiten controlar la glicemia como personas con diabetes, resistencia a la insulina, con sobre peso y obesidad. Ya que utilizamos harinas alternativas, las preparacion es son sin gluten, siendo aptas para celiacos e intolerantes al gluten, y todos los interesados en llevar dietas saludables.'
                ]
            },
        ]
    },
    {
        poster: `${postersSrc}Salad.jpg`,
        name: 'Salad',
        shortName: 'salad',
        pages: '+50',
        description: 'Aprende a ejecutar recetas de postres dulces saludables, sin azúcar y sin harinas, con pocos pasos, ingredientes sencillos y súper deliciosos.',
        price: prices[WORKSHOP].original,
        type: EBOOK,
        features: [{
                list: false,
                title: 'Acerca del ebook',
                info: [
                    'Las preparaciones de este taller se caracterizan por ser bajas en carbohidratos, lo que permite disfrutar de un delicioso postre sin elevar los niveles de azúcar en sangre, controlando la ansiedad con saciedad, ya que son ricas en grasas saludables.',
                    'Mis recetas se caracterizan por utilizar ingredientes sencillos y pasos fáciles de ejecutar.',
                    '¡Inscríbete ahora mismo y sorprende a tus seres queridos con dulces que nos hacen bien.',
                ]
            },
            {
                list: true,
                title: 'Lo que aprenderás',
                info: [
                    'Que los dulces también son saludables, con los ingredientes correctos.',
                    'A disfrutar y sorprender a tus seres queridos con postres que nos hacen bien, sin necesidad salir de tu dieta o afectando tu salud.',
                    'Que la preparación de dulces es más sencilla de lo que te imaginas, apenas necesitarás entre 5 a 20 minutos.',
                ]
            },
            {
                list: false,
                title: '¿A quién va dirigido el ebook?',
                info: [
                    'Este taller es ideal para aquellos que necesiten controlar la glicemia como personas con diabetes, resistencia a la insulina, con sobre peso y obesidad. Ya que utilizamos harinas alternativas, las preparaciones son sin gluten, siendo aptas para celiacos e intolerantes al gluten, y todos los interesados en llevar dietas saludables.'
                ]
            },
        ]
    }
];

export default products;
