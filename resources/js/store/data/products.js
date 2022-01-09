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
        duration: '+2 horas que puedes hacerlas de continuado o por partes, según tu disponibilidad de tiempo.',
        description: 'Aprende a ejecutar recetas de postres dulces saludables, sin azúcar y sin harinas, con pocos pasos, ingredientes sencillos y súper deliciosos.',
        price: prices[WORKSHOP].original,
        type: WORKSHOP,
        features: [{
                title: 'Acerca del taller',
                info: [
                    'En este taller aprenderás a ejecutar las recetas de estos 5 dulces saludables: cheesecake, brownie, cookies con gotas de cacao, muffins, y panqueques de frutos rojos, todo esto sin azúcares, sin harinas, pocos pasos, ingredientes sencillos, muy deliciosos y aptos para toda la familia.',
                    'Ademas de acceder a los videos del taller, recibirás un material en pdf con las recetas y otras extra de regalo!.',
                ]
            },
            {
                list: true,
                title: 'Lo que aprenderás',
                info: [
                    'Que los dulces con los ingredientes correctos son saludables!.',
                    'A disfrutar, sorprender a tu familia y amigos con postres deliciosos que nos hacen bien.',
                    'Que la preparación de postres saludables es más sencilla de lo que te imaginas, apenas necesitas entre 5 a 20 minutos por receta.',
                    'A despojarte de mitos que limitan ingredientes y alimentos saludables.',
                ]
            },
            {
                list: true,
                title: 'Lo que necesitas para el taller',
                info: [
                    'Una cuenta de Google, ya que los videos estarán en el Google Drive.',
                    'Celular, tableta o computadora con conexión estable a Internet ya que los videos están en alta resolución.',
                ]
            },
            {
                list: false,
                title: '¿A quienes va dirigido el taller?',
                info: [
                    'A aquellas personas que llevan conteo de carbohidratos y control de la glicemia como personas con diabetes, resistencia a la insulina, sobre peso, obesidad, hígado graso, síndrome de ovarios poliquisticos, etc.',
                    'Ya que utilizamos harinas alternativas, las preparaciones de este taller son sin gluten siendo aptos para celiacos e intolerantes al gluten.',
                    'Y a todas las personas interesadas en llevar dietas saludables, aprender a incorporar grasas saludables en sus postres para lograr saciedad y controlar la ansiedad.',
                ]
            },
        ]
    },
    {
        poster: `${postersSrc}Panes sin culpa.png`,
        name: 'Panes sin culpa',
        shortName: 'panes-sin-culpa',
        duration: '+2 horas que puedes hacerlas de continuado o por partes, según tu disponibilidad de tiempo.',
        description: '',
        description: 'Aprende a ejecutar recetas de panes sin culpa, sin azúcar y sin harinas, con pocos pasos, ingredientes sencillos y súper deliciosos.',
        price: prices[WORKSHOP].original,
        type: WORKSHOP,
        features: [{
                title: 'Acerca del taller',
                info: [
                    'En este taller aprenderás a ejecutar las recetas de estos 5 panificados sin culpas: pan de molde, pan de hamburguesa, prepizza, budín de naranja, y crackers de semillas, todo esto sin harinas, sin azúcares, pocos pasos, ingredientes sencillos y muy deliciosos, aptos para toda la familia.',
                    'Ademas de acceder a los videos del taller, recibirás un material en pdf con las recetas y otras extra de regalo!.',
                ]
            },
            {
                list: true,
                title: 'Lo que aprenderás',
                info: [
                    'A preparar panificados sin harinas tradicionales, conociendo nuevos ingredientes.',
                    'Una nueva versión saludable de aquellos menús que amas.',
                    'Que la preparación de panificados saludables es más sencilla de lo que te imaginas, apenas necesitas entre 5 a 20 minutos por receta.',
                    'A despojarte de mitos que limitan ingredientes y alimentos saludables.',
                ]
            },
            {
                list: true,
                title: 'Lo que necesitas para el taller',
                info: [
                    'Una cuenta de Google, ya que los videos estarán en el Google Drive.',
                    'Celular, tableta o computadora con conexión estable a Internet ya que los videos están en alta resolución.',
                ]
            },
            {
                list: false,
                title: '¿A quienes va dirigido el taller?',
                info: [
                    'A aquellas personas que llevan conteo de carbohidratos y control de la glicemia como personas con diabetes, resistencia a la insulina, sobre peso, obesidad, hígado graso, síndrome de ovarios poliquisticos, etc.',
                    'Ya que utilizamos harinas alternativas, las preparaciones de este taller son sin gluten siendo aptos para celiacos e intolerantes al gluten.',
                    'Y a todas las personas interesadas en llevar dietas saludables, aprender a incorporar grasas saludables en sus postres para lograr saciedad y controlar la ansiedad.',
                ]
            },
        ]
    },
    {
        poster: `${postersSrc}Salad.jpg`,
        name: '30 días keto + ayunos',
        shortName: '30-dias-keto-ayunos',
        pages: '+80',
        description: 'Te ayudo a iniciar en el estilo de vida keto, e incorporar el ayuno de forma progresiva e intuitiva sin forzar.',
        price: prices[EBOOK].original,
        type: EBOOK,
        features: [{
                list: false,
                title: 'Acerca del ebook',
                info: [
                    'Con este ebook te iniciaras en el estilo de vida cetogenico o keto como se lo conoce también, e incorporaras el ayuno de forma progresiva e intuitiva sin forzar. Todo esto con información completa y correcta, para saber que hacer ante cada situación. Si buscas potenciar tu salud, llevar a tu cuerpo a usar grasa como fuente energética, con mucha vitalidad, como consecuencia perder peso comiendo delicioso, sin ansiedad: ¡este es el camino!.',
                    'Son 3 etapas de 10 dias cada una, bien descriptas en mas de 80 paginas.',
                ]
            },
            {
                list: true,
                title: 'Lo que incluye',
                info: [
                    'Guía de inicio informativa.',
                    'Guía para pesarte, medirte y registrar tus avances.',
                    'Lista de compras.',
                    'Tips para leer etiquetas.',
                    'Planner.',
                    'Recetario de mas de 50 preparaciones de desayunos, meriendas, almuerzos, cenas, batidos e infusiones y mas!.',
                    'Guia de como comer fuera de casa.',
                    'Recomendaciones de como seguir mas allá de los 30 días.',
                ]
            },
            {
                list: true,
                title: 'Lo que aprenderás',
                info: [
                    'Las bases de la dieta cetogenica y los ayunos, ya que para iniciar algo nuevo primero necesitas tener la información completa.',
                    'Todos los alimentos a incluir y cuales evitar.',
                    'A leer etiquetas y seleccionar productos.',
                    'A que la cocina saludables es más sencilla de lo que te imaginas, y mas deliciosa!.',
                ]
            },
            {
                list: true,
                title: 'Lo que necesitas',
                info: [
                    'Un correo electrónico para recibir el ebook.',
                    'Una aplicación compatible para leer documentos en pdf.',
                ]
            },
            {
                list: true,
                title: '¿A quienes va dirigido el ebook?',
                info: [
                    'A las personas que buscan perder peso, revertir potenciales enfermedades metabólicas como el hígado graso, obesidad, resistencia a la insulina, y sus consecuencias.',
                    'A las personas con síntomas de migrañas, cansancio, molestias gastrointestinales, ansiedad constante.',
                    'Y a todas las personas interesadas en potenciar su salud, inmunidad y aprender a incorporar grasas saludables en su dia a dia  para lograr saciedad y controlar la ansiedad.',
                ]
            },
            {
                list: true,
                title: 'Este ebook no recomiendo para personas:',
                info: [
                    'En etapa de embarazo o lactancia.',
                    'Menores de 18 años.',
                    'Con alguna enfermedad de base.',
                    'Tomando mediciones especificas, simplemente porque bajo estas situaciones necesitas un asesoramiento mas personalizado para adaptar a tu vida estos cambios, así que te recomiendo tomar un turno presencial u online para iniciarte en este estilo de vida con acompañamiento profesional. Será lo mejor para vos.',
                ]
            },
        ]
    },
    {
        poster: `${postersSrc}Salad.jpg`,
        name: '21 días Sirtfoods + Lowcarb',
        shortName: '21-dias-sirtfoods-lowcarb',
        pages: '+x',
        description: 'Aprendé a llevar a tu cuerpo a usar grasa como fuente energética y como consecuencia perder peso comiendo delicioso.',
        price: prices[EBOOK].original,
        type: EBOOK,
        features: [{
                list: false,
                title: 'Acerca del ebook',
                info: [
                    'Con este ebook podrás conocer mas sobre las sirtuinas: grandes señalizadores de nuestro metabolismo; como estimularlas con la alimentación con jugos verdes refrescantes, alimentos deliciosos y los hábitos correctos para llevar a tu cuerpo a usar grasas como fuente de energía, en combinación con una dieta Lowcarb o baja en carbohidratos. Si buscas potenciar tu salud, llevar a tu cuerpo a usar grasa como fuente energética, con mucha vitalidad, como consecuencia perder peso comiendo delicioso ¡este es el camino!.',
                    'Son xxx etapas de xx dias mas de xx paginas.',
                ]
            },
            {
                list: true,
                title: 'Lo que incluye',
                info: [
                    'Guía de inicio informativa, donde conocerás de que se tratan las sirtuinas, en que alimentos las encontramos y como las estimulamos.',
                    'Guía para pesarte, medirte y registrar tus avances.',
                    'Lista de compras.',
                    'Tips para leer etiquetas.',
                    'Planner.',
                    'Recetario de mas de 50 preparaciones de desayunos, meriendas, almuerzos, cenas, batidos e infusiones y mas!.',
                    'Guia de como comer fuera de casa.',
                    'Recomendaciones de como seguir mas allá de los xxxx días.',
                ]
            },
            {
                list: true,
                title: 'Lo que aprenderás',
                info: [
                    'Las bases de como actúan las sirtuinas, ya que para iniciar algo nuevo primero necesitas tener la información completa.',
                    'Todos los alimentos deliciosos a incluir y cuales mejor evitar.',
                    'A leer etiquetas y seleccionar productos.',
                    'A que la cocina saludables es más sencilla de lo que te imaginas, y mas deliciosa!.',
                ]
            },
            {
                list: true,
                title: 'Lo que necesitas',
                info: [
                    'Un correo electrónico para recibir el ebook.',
                    'Una aplicación compatible para leer documentos en pdf.',
                ]
            },
            {
                list: true,
                title: '¿A quienes va dirigido el ebook?',
                info: [
                    'A las personas que buscan perder peso, revertir potenciales enfermedades metabólicas como el hígado graso, obesidad, resistencia a la insulina, y sus consecuencias.',
                    'A las personas con síntomas de migrañas, cansancio, molestias gastrointestinales, ansiedad constante.',
                    'Y a todas las personas interesadas en potenciar su salud, inmunidad y aprender a incorporar alimentos saludables en su día a día.',
                ]
            },
            {
                list: true,
                title: 'Este ebook no recomiendo para personas:',
                info: [
                    'En etapa de embarazo o lactancia.',
                    'Menores de 18 años.',
                    'Con alguna enfermedad de base.',
                    'Tomando mediciones específicas, simplemente porque bajo estas situaciones necesitas un asesoramiento mas personalizado para adaptar a tu vida estos cambios, así que te recomiendo tomar un turno presencial u online para iniciarte en este estilo de vida con acompañamiento profesional. Será lo mejor para vos.',
                ]
            },
        ]
    },
];

export default products;
