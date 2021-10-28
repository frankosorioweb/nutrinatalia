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
        duration: '+2 horas',
        description: 'Taller aprende a ejecutar recetas de postres dulces saludables, sin azúcar y sin harinas, con pocos pasos, ingredientes sencillos y súper deliciosos.',
        price: prices[WORKSHOP].off60,
        type: WORKSHOP,
        features: [{
                title: 'Acerca del taller',
                info: [
                    'Las preparaciones de este taller se caracterizan por ser bajas en carbohidratos, lo que permite disfrutar de un delicioso postre sin elevar los niveles de azúcar en sangre, controlando la ansiedad con saciedad, ya que son ricas en grasas saludables.',
                    'Mis recetas se caracterizan por utilizar ingredientes sencillos y pasos fáciles de ejecutar.',
                    '¡Inscríbete ahora mismo y sorprende a tus seres queridos con dulces que nos hacen bien.',
                ]
            },
            {
                list: true,
                title: 'Lo que aprenderas',
                info: [
                    'Que los dulces también son saludables, con los ingredientes correctos.',
                    'A disfrutar y sorprender a tus seres queridos con postres que nos hacen bien, sin necesidad salir de tu dieta o afectando tu salud.',
                    'Que la preparación de dulces es más sencilla de lo que te imaginas, apenas necesitarás entre 5 a 20 minutos.',
                ]
            },
            {
                list: true,
                title: 'Lo que necesitas para el taller',
                info: [
                    'Una cuenta de Google, ya que los videos están almacenados en Google Drive.',
                    'Un celular o una computadora con conexión wifi estable, ya que los videos están en alta resolución.',
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
        poster: `${postersSrc}Spaghetti.jpg`,
        name: 'Spaghetti',
        shortName: 'spaghetti',
        duration: '+2 horas',
        description: 'Taller aprende a ejecutar recetas de postres dulces saludables, sin azúcar y sin harinas, con pocos pasos, ingredientes sencillos y súper deliciosos.',
        price: prices[WORKSHOP].original,
        type: WORKSHOP,
        features: [{
                list: false,
                title: 'Acerca del taller',
                info: [
                    'Las preparaciones de este taller se caracterizan por ser bajas en carbohidratos, lo que permite disfrutar de un delicioso postre sin elevar los niveles de azúcar en sangre, controlando la ansiedad con saciedad, ya que son ricas en grasas saludables.',
                    'Mis recetas se caracterizan por utilizar ingredientes sencillos y pasos fáciles de ejecutar.',
                    '¡Inscríbete ahora mismo y sorprende a tus seres queridos con dulces que nos hacen bien.',
                ]
            },
            {
                list: true,
                title: 'Lo que aprenderas',
                info: [
                    'Que los dulces también son saludables, con los ingredientes correctos.',
                    'A disfrutar y sorprender a tus seres queridos con postres que nos hacen bien, sin necesidad salir de tu dieta o afectando tu salud.',
                    'Que la preparación de dulces es más sencilla de lo que te imaginas, apenas necesitarás entre 5 a 20 minutos.',
                ]
            },
            {
                list: true,
                title: 'Lo que necesitas para el taller',
                info: [
                    'Una cuenta de Google, ya que los videos están almacenados en Google Drive.',
                    'Un celular o una computadora con conexión wifi estable, ya que los videos están en alta resolución.',
                ]
            },
            {
                list: false,
                title: '¿A quién va dirigido el taller?',
                info: [
                    'Este taller es ideal para aquellos que necesiten controlar la glicemia como personas con diabetes, resistencia a la insulina, con sobre peso y obesidad. Ya que utilizamos harinas alternativas, las preparaciones son sin gluten, siendo aptas para celiacos e intolerantes al gluten, y todos los interesados en llevar dietas saludables.'
                ]
            },
        ]
    },
    {
        poster: `${postersSrc}Salad.jpg`,
        name: 'Salad',
        shortName: 'salad',
        description: 'Ebook aprende a ejecutar recetas de postres dulces saludables, sin azúcar y sin harinas, con pocos pasos, ingredientes sencillos y súper deliciosos.',
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
                title: 'Lo que aprenderas',
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
