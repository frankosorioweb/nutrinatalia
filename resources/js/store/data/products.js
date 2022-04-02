import prices from './prices';
import productTypes from '../modules/productTypes';

const postersSrc = '/img/posters/';
const {
    WORKSHOP,
    EBOOK
} = productTypes.state.types;

// Aquí definimos los precios de los WORKSHOPS e EBOOKS
const products = [

    //WORKSHOPS
    {
        poster: `${postersSrc}Receta favorita pan.jpg`,
        name: 'Receta Regalo: Mi Receta Favorita De Pan',
        shortName: 'regalo-receta-favorita-pan',
        duration: 'Son solo 8 minutos de tu tiempo para aprender mi receta favorita, donde también comparto unos tips extras que aplico en mi cocina para mis variaciones',
        description: 'Con esta receta simple, rápida y deliciosa vas a poder preparar diferentes tipos de panificados bajos en carbohidratos.',
        price: prices[WORKSHOP].off100Short,
        driveLink: 'https://drive.google.com/drive/folders/1Xj6UfLmZd8pwcDRfnR8IlopQpKhVx9ue?usp=sharing',
        type: WORKSHOP,
        features: [{
                title: 'Acerca de mi receta favorita de pan',
                info: [
                    'Con esta receta de fácil y rápida elaboración aprenderás a hacer 3 diferentes panes bajos en carbohidratos: pan de sandwich, de hamburguesas y prepizza; todo esto sin harinas ni gluten, en pocos pasos, ingredientes sencillos, muy deliciosos y aptos para toda la familia. Además te comparto tips para que puedas hacer tus propias modificaciones.'
                ]
            },
            {
                list: true,
                title: 'Lo que aprenderás',
                info: [
                    'Que los panes con los ingredientes correctos son saludables, y pueden estar en tu dieta!.',
                    'A usar una misma receta para distintas preparaciones con mínimas modificaciones.',
                    'Que la preparación de un pan es más sencilla de lo que te imaginas, apenas necesitas 3 minutos.'
                ]
            },
            {
                list: true,
                title: '¿A quienes puede ser útil mi receta favorita de pan?',
                info: [
                    'A aquellas personas que llevan conteo de carbohidratos y control de la glicemia como personas con diabetes, resistencia a la insulina, sobre peso, obesidad, hígado graso, síndrome de ovarios poliquisticos, etc.',
                    'Ya que utilizamos harinas alternativas, esta receta es sin gluten siendo apto para celiacos e intolerantes al gluten.',
                    'Y a todas las personas interesadas en llevar dietas saludables, aprender a incorporar grasas buenas en una receta para lograr saciedad y controlar la ansiedad.',
                ]
            },
        ]
    },
    {
        poster: `${postersSrc}Comidas tipicas paraguayas version lowcarb.jpg`,
        name: 'Comida Típica Paraguaya Versión Lowcarb',
        shortName: 'comidas-tipicas-py-lowcarb',
        duration: '1 hora que puedes hacerlas de continuado o por partes, según tu disponibilidad de tiempo.',
        description: 'Aprende ejecutar las recetas de la cocina típica paraguaya en su versión baja en carbohidratos.',
        price: prices[WORKSHOP].original,
        type: WORKSHOP,
        features: [{
                title: 'Acerca del taller',
                info: [
                    'En este taller aprenderás a ejecutar las recetas de estos 5 platos de la cocina típica paraguaya: mbeju, chipa, empanada, chipa so’o y pajagua mascada, todo esto en la versión baja en carbohidratos, sin harinas, ni almidones lo que permite disfrutar de preparaciones tradicionales sin afectar los niveles de glucosa en sangre, controlando la ansiedad con saciedad ya que son ricos en grasas buenas, pocos pasos, ingredientes sencillos, muy deliciosos y aptos para toda la familia.',
                    'Ademas de acceder a los videos del taller, recibirás un material en pdf con las recetas y otras extra de regalo!.',
                ]
            },
            {
                list: true,
                title: 'Lo que aprenderás',
                info: [
                    'Que se pueden disfrutar de las festividades y su comida típica con pequeñas modificaciones durante el proceso de descenso de peso o cambio de hábitos.',
                    'A sorprender a tu familia y amigos con recetas deliciosas!.',
                    'Que la preparación de comida saludable es más sencilla de lo que te imaginas, apenas necesitas entre 5 a 20 minutos por receta.',
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
                list: true,
                title: '¿A quienes va dirigido el taller?',
                info: [
                    'A aquellas personas que llevan conteo de carbohidratos y control de la glicemia como personas con diabetes, resistencia a la insulina, sobre peso, obesidad, hígado graso, síndrome de ovarios poliquisticos, etc.',
                    'Ya que utilizamos harinas alternativas, las preparaciones de este taller son sin gluten siendo aptos para celiacos e intolerantes al gluten.',
                    'Y a todas las personas interesadas en llevar dietas saludables, aprender a incorporar grasas buenas en sus preparaciones para lograr saciedad y controlar la ansiedad.',
                ]
            },
        ]
    },
    {
        poster: `${postersSrc}Dulces que nos hacen bien.jpg`,
        name: 'Dulces que nos hacen bien',
        shortName: 'dulces-saludables',
        duration: '1 hora que puedes hacerlas de continuado o por partes, según tu disponibilidad de tiempo.',
        description: 'Prepara, disfruta y sorprende a tu familia y amigos con postres saludables y deliciosos que nos hacen bien, y además, de fácil elaboración.',
        price: prices[WORKSHOP].original,
        type: WORKSHOP,
        features: [{
                title: 'Acerca del taller',
                info: [
                    'En este taller aprenderás a ejecutar las recetas de estos 5 dulces saludables: cheesecake, brownie, cookies, barritas de frutos secos, y lemon pie, todo esto sin azúcares, sin harinas ni gluten, pocos pasos, ingredientes sencillos, muy deliciosos y aptos para toda la familia.',
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
                list: true,
                title: '¿A quienes va dirigido el taller?',
                info: [
                    'A aquellas personas que llevan conteo de carbohidratos y control de la glicemia como personas con diabetes, resistencia a la insulina, sobre peso, obesidad, hígado graso, síndrome de ovarios poliquisticos, etc.',
                    'Ya que utilizamos harinas alternativas, las preparaciones de este taller son sin gluten siendo aptos para celiacos e intolerantes al gluten.',
                    'Y a todas las personas interesadas en llevar dietas saludables, aprender a incorporar grasas saludables en sus postres para lograr saciedad y controlar la ansiedad.',
                ]
            },
        ]
    },

    //EBOOKS
    {
        poster: `${postersSrc}30 dias keto ayuno.jpg`,
        name: '30 días Keto + Ayuno',
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
                    'Tomando mediciones especificas, simplemente porque bajo estas situaciones necesitas un asesoramiento mas personalizado para adaptar a tu vida estos cambios, así que te recomiendo bajo estas circunstancias tomar un turno presencial u online para iniciarte en este estilo de vida con acompañamiento profesional. Será lo mejor para vos',
                ]
            },
        ]
    },
    {
        poster: `${postersSrc}Recetario comidas tipicas paraguayas version lowcarb.jpg`,
        name: 'Recetario Comida Típica Paraguaya Versión Lowcarb',
        shortName: 'recetario-comida-tipica-py-lowcarb',
        pages: 'N/A',
        description: 'Accedé a las cinco recetas del taller comidas tipicas paraguayas vesión lowcarb.',
        price: prices[EBOOK].recetario,
        type: EBOOK,
        features: [
            {
                list: false,
                title: 'Acerca del recetario',
                info: [
                    'En este recetario obtendrás las recetas de estos 5 platos de la cocina típica paraguaya: mbeju, chipa, empanada, chipa so’o y pajagua mascada, todo esto en la versión baja en carbohidratos, sin harinas, ni almidones lo que permite disfrutar de preparaciones tradicionales sin afectar los niveles de glucosa en sangre, controlando la ansiedad con saciedad ya que son ricos en grasas buenas, pocos pasos, ingredientes sencillos, muy deliciosos y aptos para toda la familia. Recibiras el material en pdf con las recetas, imágenes y otras extra de regalo.'
                ]
            },
            {
                list: true,
                title: 'Lo que aprenderás',
                info: [
                    'Que se pueden disfrutar de las festividades y su comida típica con pequeñas modificaciones durante el proceso de descenso de peso o cambio de hábitos.',
                    'A sorprender a tu familia y amigos con recetas deliciosas!.',
                    'Que la preparación de comida saludable es más sencilla de lo que te imaginas, apenas necesitas entre 5 a 20 minutos por receta.',
                    'A despojarte de mitos que limitan ingredientes y alimentos saludables.',
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
                title: '¿A quienes va dirigido?',
                info: [
                    'A aquellas personas que llevan conteo de carbohidratos y control de la glicemia como personas con diabetes, resistencia a la insulina, sobre peso, obesidad, hígado graso, síndrome de ovarios poliquisticos, etc.',
                    'Ya que utilizamos harinas alternativas, las preparaciones de este ebook son sin gluten siendo aptos para celiacos e intolerantes al gluten.',
                    'Y a todas las personas interesadas en llevar dietas saludables, aprender a incorporar grasas saludables en sus preparaciones para lograr saciedad y controlar la ansiedad.',
                ]
            },
        ]
    },
    {
        poster: `${postersSrc}Recetario dulces que nos hacen bien.jpg`,
        name: 'Recetario Dulces que nos hacen bien',
        shortName: 'recetario-dulces-saludables',
        pages: 'N/A',
        description: 'Aprende a ejecutar las cinco recetas del taller dulces que nos hacen bien',
        price: prices[EBOOK].recetario,
        type: EBOOK,
        features: [
            {
                list: true,
                title: 'Acerca del recetario',
                info: [
                    'En este recetario aprenderás a ejecutar las recetas de estos 5 dulces saludables: cheesecake, brownie, cookies, barritas de frutos secos, y lemon pie, todo esto sin azúcares, sin harinas ni gluten, pocos pasos, ingredientes sencillos, muy deliciosos y aptos para toda la familia.',
                    'Recibirás un material en pdf con las recetas, imágenes y otras extra de regalo!.',
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
                title: 'Lo que necesitas',
                info: [
                    'Un correo electrónico para recibir el ebook.',
                    'Una aplicación compatible para leer documentos en pdf.',
                ]
            },
            {
                list: true,
                title: '¿A quienes va dirigido?',
                info: [
                    'A aquellas personas que llevan conteo de carbohidratos y control de la glicemia como personas con diabetes, resistencia a la insulina, sobre peso, obesidad, hígado graso, síndrome de ovarios poliquisticos, etc.',
                    'Ya que utilizamos harinas alternativas, las preparaciones de este ebook son sin gluten siendo aptos para celiacos e intolerantes al gluten.',
                    'Y a todas las personas interesadas en llevar dietas saludables, aprender a incorporar grasas saludables en sus postres para lograr saciedad y controlar la ansiedad.',
                ]
            },
        ]
    },
];

export default products;
