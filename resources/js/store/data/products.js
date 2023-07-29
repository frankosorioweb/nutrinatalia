import prices from "./prices";
import productTypes from "../modules/productTypes";
import challengeKetoAyunoEvent from "../modules/events";

const postersSrc = "/img/posters/";
const { WORKSHOP, EBOOK, EXTRA } = productTypes.state.types;

const challengeTextInfo =
  challengeKetoAyunoEvent.state.challengeKetoAyunoV4.textDateInfo;

// Aquí definimos los precios de los WORKSHOPS e EBOOKS
const products = [
  //WORKSHOPS
  /** EL MERENDERO FELIZ **/
  {
    poster: `${postersSrc}Taller - El merendero feliz.jpg`,
    name: "Taller (vía streaming) - El Merendero Feliz",
    shortName: "el-merendero-feliz",
    duration:
      "1 hora que puedes verlas de continuado o por partes, según tu disponibilidad de tiempo.",
    description:
      "Taller para padres. Aprende a armar un merendero que impacte positivamente en crecimiento y desarrollo de tus niños.",
    price: JSON.parse(JSON.stringify(prices[WORKSHOP].original)),
    type: WORKSHOP,
    features: [
      {
        title: "Acerca del taller",
        info: [
          "Taller online dirigido a padres de niños para aprender lo que no nos enseñan en ningún lugar: a preparar merenderos saludables de verdad.",
          "Además de acceder al video del taller con preguntas y respuestas, recibirás un material en pdf con las recetas y otras extra de regalo!."
        ]
      },
      {
        list: true,
        title: "Donde aprenderás:",
        info: [
          "La relación entre la comida y el desarrollo físico y cognitivo de nuestros hijos.",
          "A tomar conciencia del efecto del azúcar y aditivos frecuentes de la industria.",
          "A leer etiquetas de los productos.",
          "A identificar ingredientes poco saludables en los productos.",
          "Tips para trabajar en casa para mejorar la alimentación familiar .",
          "Ideas para un merendero feliz y saludable."
        ]
      },
      {
        list: true,
        title: "Lo que necesitas para el taller",
        info: [
          "Una dirección de correo electrónico para acceder al taller.",
          "Celular, tableta o computadora con conexión estable a Internet ya que los videos están en alta resolución."
        ]
      }
    ]
  },
  /** RETO GO **/
  /*{
    isChallenge: true,
    poster: `${postersSrc}Reto Go.jpg`,
    name: 'Reto Go! Fortaleciendo nuestra relación con la comida',
    shortName: "reto-go",
    duration: "Del 05 al 19 de Octubre de 2022.",
    description: 'Afianza tu relación con la comida para llevar y sostener tu cambio de estilo de vida saludable en el tiempo.',
    price: JSON.parse(JSON.stringify(prices[WORKSHOP].RetoGo)),
    type: WORKSHOP,
    features: [
      {
        title: "Acerca del taller",
        info: [
          "Si ya has participado de alguna edición del Reto Keto + Ayuno y necesitas apoyo extra para mantener hábitos saludables y fortalecer tu relación con la comida, este reto es para ti.",
        ]
      },
      {
        list: true,
        title: "Inscripciones hasta:",
        info: [
          'Martes 04 de Octubre (o hasta llenar el cupo).'
        ]
      },
      {
        list: true,
        title: "Tendrás:",
        info: [
          'Acceso al Grupo WhatsApp con las 2 profesionales (Nutricionista y Psicóloga).',
          '3 Clases en vivo con ejercicios prácticos, los Miércoles, a las 19:30 Hs.',
          'Materiales de ayuda.',
          'Reflexiones y conversatorios diarios en el grupo.',
          'Nuevas Recetas.',
        ]
      },
      {
        list: true,
        title: "Objetivo:",
        info: [
          'Afianzar tu relación con la comida para llevar y sostener tu cambio de estilo de vida saludable en el tiempo.'
        ]
      },
      {
        list: true,
        title: "EL RETO ES PARA:",
        info: [
          'Pacientes de la NutriNatalia con esquemas de alimentación cetogénica y ayunos.',
          'Personas que participaron de alguna edición del Reto Keto + Ayuno.',
          'Necesitan un apoyo extra en su mantenimiento de hábitos saludables.',
        ]
      },
      {
        list: true,
        title: "EL RETO NO ES PARA:",
        info: [
          'Personas que aún no tienen incorporado en su vida los principios del estilo de vida con comida de verdad.',
          //'Para quien no está entrenado con educación nutricional baja en carbohidratos (Sugerimos iniciar con el RETO 7.0 de SETIEMBRE).'
        ]
      },
      {
        list: true,
        title: "¿En qué plataforma se transmitirán las clases?, ¿Las transmisiones quedarán grabadas?:",
        info: [
          'Las clases se transmitirán por Google Meet, por ello es necesario que te inscribas con una cuenta de GOOGLE.',
          'Si no podés participar de las clases en vivo, quedará grabado con toda la interacción, preguntas y dudas de los asistentes.',
        ]
      },
      {
        list: true,
        title: "Lo que necesitás para participar:",
        info: [
          'Conexión estable a internet.',
          'Una cuenta de GOOGLE.',
          'Tener la app de WhatsApp.',
        ]
      },
    ]
  },*/
  /** RETO 15 DÍAS KETO + AYUNO **/
  /*{
    poster: `${postersSrc}Reto 15 dias keto ayuno.jpg`,
    name: `Reto 15 Días Keto + Ayuno versión ${challengeTextInfo.version}`,
    shortName: "reto-15-dias-keto-ayuno",
    isChallenge: true,
    duration: "15 Días (1 Clase por día).",
    description:
      "Si estás buscando iniciar este estilo de vida con la información correcta, superar la ansiedad y lograr tus metas de peso, este reto es para ti.",
    price: JSON.parse(JSON.stringify(prices[WORKSHOP].Reto15DiasKetoAyuno)),
    customCTA: {
      text: "VER MÁS DETALLES",
      link: "",
      to: { name: "challenge-15-dias-keto-ayuno" },
      target: ""
    },
    type: WORKSHOP,
    features: [
      {
        title: "Acerca del taller",
        info: [
          "Este reto está dirigido a todas las personas que buscan iniciar este estilo de vida con la información correcta, que buscan superar la ansiedad y lograr sus metas de peso."
        ]
      },
      {
        list: true,
        title: "Porqué ser parte del reto:",
        info: [
          "Serás parte del grupo de WhatsApp guiado por la Licenciada Natalia.",
          "Despejarás todas tus dudas diarias.",
          "Tendrás acceso al contenido en clases diarias en video.",
          "Recibirás: lista de compras, guías y recetas.",
          "Tendrás acceso de por vida a recursos en la nube.",
          "Obtendrás descuentos exclusivos en la academia.",
          "Formarás parte de la Tribu de la Nutri Natalia."
        ]
      },
      {
        list: true,
        title:
          "Este reto NO es para (Porque necesitan un acompañamiento personalizado, no grupal):",
        info: [
          "Embarazadas o mujeres lactantes.",
          "Menores de 18 años.",
          "Personas con enfermedades de base.",
          "Personas con medicaciones específicas."
        ]
      },
      {
        list: true,
        title: "CUPOS LIMITADOS:",
        info: [
          "Este reto posee cupos limitados, por lo tanto, las inscripciones pueden CERRARSE ANTES de la fecha indicada."
        ]
      },
      {
        list: true,
        title: "Fecha de inicio, finalización y cierre de inscripciones:",
        info: [
          `Las inscripciones CIERRAN el ${challengeTextInfo.inscriptionEnd.dayName} ${challengeTextInfo.inscriptionEnd.day} de ${challengeTextInfo.inscriptionEnd.monthText} de ${challengeTextInfo.inscriptionEnd.year[0]}${challengeTextInfo.inscriptionEnd.year[1]} (o hasta llenar el cupo).`,
          `El reto INICIA el ${challengeTextInfo.startChallenge.dayName} ${challengeTextInfo.startChallenge.day} de ${challengeTextInfo.startChallenge.monthText} de ${challengeTextInfo.startChallenge.year[0]}${challengeTextInfo.startChallenge.year[1]}.`,
          `El reto FINALIZA el ${challengeTextInfo.endChallenge.dayName} ${challengeTextInfo.endChallenge.day} de ${challengeTextInfo.endChallenge.monthText} de ${challengeTextInfo.endChallenge.year[0]}${challengeTextInfo.endChallenge.year[1]}.`
        ]
      }
    ]
  },*/
  /** FERMENTADOS **/
  {
    poster: `${postersSrc}Fermentados.jpg`,
    name: "Taller (vía streaming) - Fermentados",
    shortName: "fermentados",
    duration:
      "1 hora que puedes verlas de continuado o por partes, según tu disponibilidad de tiempo.",
    description:
      "En este taller aprenderás a preparar estos 4 alimentos fermentados: kombucha, chucrut, pickles y yogur casero.",
    price: JSON.parse(JSON.stringify(prices[WORKSHOP].original)),
    type: WORKSHOP,
    features: [
      {
        title: "Acerca del taller",
        info: [
          "En este taller aprenderás a preparar estos 4 alimentos fermentados: kombucha, chucrut, pickles y yogur casero.. todo esto en pocos pasos, ingredientes sencillos aptos para tu estilo de vida saludable.",
          "Además de acceder a los videos del taller, recibirás un material en pdf con las recetas y otras extra de regalo!."
        ]
      },
      {
        list: true,
        title: "Lo que aprenderás",
        info: [
          "Sobre la fermentación y sus beneficios.",
          "A preparar tu propia kombucha, yogur, chucrut y pickles de forma casera.",
          "Que la preparación de los alimentos fermentados es más sencilla de lo que te imaginas, apenas necesitas entre 5 a 20 minutos por receta.",
          "A incorporar estos alimentos saludables en tu día a día."
        ]
      },
      {
        list: true,
        title: "Lo que necesitas para el taller",
        info: [
          "Una dirección de correo electrónico para acceder al taller.",
          "Celular, tableta o computadora con conexión estable a Internet ya que los videos están en alta resolución."
        ]
      },
      {
        list: true,
        title: "¿A quienes va dirigido el taller?",
        info: [
          "A aquellas personas que están buscando potenciar su salud a través de una alimentación saludable.",
          "A quienes buscan preparar de forma casera estos alimentos fermentados"
        ]
      }
    ]
  },
  {
    poster: `${postersSrc}Panes sin culpa.jpg`,
    name: "Taller (vía streaming) - Panes sin culpa",
    shortName: "panes-sin-culpa",
    duration:
      "1 hora 15 minutos que puedes verlas de continuado o por partes, según tu disponibilidad de tiempo.",
    description:
      "Aprendé a ejecutar la receta de 5 variedades de panes sin culpas, libre de harinas y azúcares, aptos para toda la familia.",
    price: JSON.parse(JSON.stringify(prices[WORKSHOP].original)),
    type: WORKSHOP,
    features: [
      {
        title: "Acerca del taller",
        info: [
          "En este taller aprenderás a ejecutar las recetas de estos 5 panificados sin culpas: pan de molde, pan de hamburguesa, crackers, grisines y budín de naranja.. todo esto sin harinas, sin azúcares, pocos pasos, ingredientes sencillos y muy deliciosos, aptos para toda la familia.",
          "Ademas de acceder a los videos del taller, recibirás un material en pdf con las recetas y otras extra de regalo!."
        ]
      },
      {
        list: true,
        title: "Lo que aprenderás",
        info: [
          "A preparar panificados sin harinas tradicionales, conociendo nuevos ingredientes.",
          "Una nueva versión saludable de aquellos menús que amas.",
          "Que la preparación de panificados saludables es más sencilla de lo que te imaginas, apenas necesitas entre 5 a 20 minutos por receta.",
          "A despojarte de mitos que limitan ingredientes y alimentos saludables."
        ]
      },
      {
        list: true,
        title: "Lo que necesitas para el taller",
        info: [
          "Una dirección de correo electrónico para acceder al taller.",
          "Celular, tableta o computadora con conexión estable a Internet ya que los videos están en alta resolución."
        ]
      },
      {
        list: true,
        title: "¿A quienes va dirigido el taller?",
        info: [
          "A aquellas personas que llevan conteo de carbohidratos y control de la glicemia como personas con diabetes, resistencia a la insulina, sobre peso, obesidad, hígado graso, síndrome de ovarios poliquisticos, etc..",
          "Ya que utilizamos harinas alternativas, las preparaciones de este taller son sin gluten siendo aptos para celiacos e intolerantes al gluten.",
          "Y a todas las personas interesadas en llevar dietas saludables, aprender a incorporar grasas saludables en sus postres para lograr saciedad y controlar la ansiedad."
        ]
      }
    ]
  },
  {
    poster: `${postersSrc}Dulces que nos hacen bien.jpg`,
    name: "Taller (vía streaming) - Dulces que nos hacen bien",
    shortName: "dulces-saludables",
    duration:
      "32 minutos que puedes hacerlas de continuado o por partes, según tu disponibilidad de tiempo.",
    description:
      "Prepara, disfruta y sorprende a tu familia y amigos con postres saludables y deliciosos que nos hacen bien, y además, de fácil elaboración.",
    price: JSON.parse(JSON.stringify(prices[WORKSHOP].original)),
    type: WORKSHOP,
    features: [
      {
        title: "Acerca del taller",
        info: [
          "En este taller aprenderás a ejecutar las recetas de estos 5 dulces saludables: cheesecake, brownie, cookies, barritas de frutos secos, y lemon pie, todo esto sin azúcares, sin harinas ni gluten, pocos pasos, ingredientes sencillos, muy deliciosos y aptos para toda la familia.",
          "Ademas de acceder a los videos del taller, recibirás un material en pdf con las recetas y otras extra de regalo!."
        ]
      },
      {
        list: true,
        title: "Lo que aprenderás",
        info: [
          "Que los dulces con los ingredientes correctos son saludables!.",
          "A disfrutar, sorprender a tu familia y amigos con postres deliciosos que nos hacen bien.",
          "Que la preparación de postres saludables es más sencilla de lo que te imaginas, apenas necesitas entre 5 a 20 minutos por receta.",
          "A despojarte de mitos que limitan ingredientes y alimentos saludables."
        ]
      },
      {
        list: true,
        title: "Lo que necesitas para el taller",
        info: [
          "Una dirección de correo electrónico para acceder al taller.",
          "Celular, tableta o computadora con conexión estable a Internet ya que los videos están en alta resolución."
        ]
      },
      {
        list: true,
        title: "¿A quienes va dirigido el taller?",
        info: [
          "A aquellas personas que llevan conteo de carbohidratos y control de la glicemia como personas con diabetes, resistencia a la insulina, sobre peso, obesidad, hígado graso, síndrome de ovarios poliquisticos, etc.",
          "Ya que utilizamos harinas alternativas, las preparaciones de este taller son sin gluten siendo aptos para celiacos e intolerantes al gluten.",
          "Y a todas las personas interesadas en llevar dietas saludables, aprender a incorporar grasas saludables en sus postres para lograr saciedad y controlar la ansiedad."
        ]
      }
    ]
  },
  {
    poster: `${postersSrc}Comidas tipicas paraguayas version lowcarb.jpg`,
    name: "Taller (vía streaming) - Comida Típica Paraguaya Versión Lowcarb",
    shortName: "comidas-tipicas-py-lowcarb",
    duration:
      "1 hora que puedes hacerlas de continuado o por partes, según tu disponibilidad de tiempo.",
    description:
      "Aprende ejecutar las recetas de la cocina típica paraguaya en su versión baja en carbohidratos.",
    price: JSON.parse(JSON.stringify(prices[WORKSHOP].original)),
    type: WORKSHOP,
    features: [
      {
        title: "Acerca del taller",
        info: [
          "En este taller aprenderás a ejecutar las recetas de estos 5 platos de la cocina típica paraguaya: mbeju, chipa, empanada, chipa so’o y pajagua mascada, todo esto en la versión baja en carbohidratos, sin harinas, ni almidones lo que permite disfrutar de preparaciones tradicionales sin afectar los niveles de glucosa en sangre, controlando la ansiedad con saciedad ya que son ricos en grasas buenas, pocos pasos, ingredientes sencillos, muy deliciosos y aptos para toda la familia.",
          "Ademas de acceder a los videos del taller, recibirás un material en pdf con las recetas y otras extra de regalo!."
        ]
      },
      {
        list: true,
        title: "Lo que aprenderás",
        info: [
          "Que se pueden disfrutar de las festividades y su comida típica con pequeñas modificaciones durante el proceso de descenso de peso o cambio de hábitos.",
          "A sorprender a tu familia y amigos con recetas deliciosas!.",
          "Que la preparación de comida saludable es más sencilla de lo que te imaginas, apenas necesitas entre 5 a 20 minutos por receta.",
          "A despojarte de mitos que limitan ingredientes y alimentos saludables."
        ]
      },
      {
        list: true,
        title: "Lo que necesitas para el taller",
        info: [
          "Una dirección de correo electrónico para acceder al taller.",
          "Celular, tableta o computadora con conexión estable a Internet ya que los videos están en alta resolución."
        ]
      },
      {
        list: true,
        title: "¿A quienes va dirigido el taller?",
        info: [
          "A aquellas personas que llevan conteo de carbohidratos y control de la glicemia como personas con diabetes, resistencia a la insulina, sobre peso, obesidad, hígado graso, síndrome de ovarios poliquisticos, etc.",
          "Ya que utilizamos harinas alternativas, las preparaciones de este taller son sin gluten siendo aptos para celiacos e intolerantes al gluten.",
          "Y a todas las personas interesadas en llevar dietas saludables, aprender a incorporar grasas buenas en sus preparaciones para lograr saciedad y controlar la ansiedad."
        ]
      }
    ]
  },
  /*{
    poster: `${postersSrc}Receta favorita pan.jpg`,
    giftHome: true,
    name: "Receta Regalo: Mi Receta Favorita De Pan",
    shortName: "regalo-receta-favorita-pan",
    duration:
      "Son solo 8 minutos de tu tiempo para aprender mi receta favorita, donde también comparto unos tips extras que aplico en mi cocina para mis variaciones",
    description:
      "Con esta receta simple, rápida y deliciosa vas a poder preparar diferentes tipos de panificados bajos en carbohidratos.",
    price: JSON.parse(JSON.stringify(prices[WORKSHOP].off100Short)),
    customCTA: {
      text: "OBTENER RECETA DE REGALO",
      link:
        "https://drive.google.com/drive/folders/1lB2ouv_dyl7cHH8ubXFOSTh7GxEI9GsM?usp=sharing",
      target: "_blank"
    },
    type: WORKSHOP,
    features: [
      {
        title: "Acerca de mi receta favorita de pan",
        info: [
          "Con esta receta de fácil y rápida elaboración aprenderás a hacer 3 diferentes panes bajos en carbohidratos: pan de sandwich, de hamburguesas y prepizza; todo esto sin harinas ni gluten, en pocos pasos, ingredientes sencillos, muy deliciosos y aptos para toda la familia. Además te comparto tips para que puedas hacer tus propias modificaciones."
        ]
      },
      {
        list: true,
        title: "Lo que aprenderás",
        info: [
          "Que los panes con los ingredientes correctos son saludables, y pueden estar en tu dieta!.",
          "A usar una misma receta para distintas preparaciones con mínimas modificaciones.",
          "Que la preparación de un pan es más sencilla de lo que te imaginas, apenas necesitas 3 minutos."
        ]
      },
      {
        list: true,
        title: "¿A quienes puede ser útil mi receta favorita de pan?",
        info: [
          "A aquellas personas que llevan conteo de carbohidratos y control de la glicemia como personas con diabetes, resistencia a la insulina, sobre peso, obesidad, hígado graso, síndrome de ovarios poliquisticos, etc.",
          "Ya que utilizamos harinas alternativas, esta receta es sin gluten siendo apto para celiacos e intolerantes al gluten.",
          "Y a todas las personas interesadas en llevar dietas saludables, aprender a incorporar grasas buenas en una receta para lograr saciedad y controlar la ansiedad."
        ]
      }
    ]
  },

  //EBOOKS
  /** ESPECIAL NAVIDAD **/
  /*{
    poster: `${postersSrc}ebook-especial-navidad-min.jpg`,
    name: "Especial Navidad",
    shortName: "especial-navidad",
    pages: "+70",
    description: "Disfrutar de las celebraciones de fin de año y seguir con tu estilo de vida saludable sí es posible! Y en este ebook encontrarás las herramientas para lograrlo.",
    price: JSON.parse(JSON.stringify(prices[EBOOK].EspecialNavidad)),
    type: EBOOK,
    features: [
      {
        list: false,
        title: "Acerca del ebook",
        info: [
          "Este eBook Especial de Navidad te trae recetas deliciosas compatibles con tu estilo de vida cetogénico para que puedas seguir caminando hacia tus metas de salud, disfrutar, compartir y sorprender a tus seres queridos."
        ]
      },
      {
        list: true,
        title: "Tenemos más de 70 páginas con:",
        info: [
          "Guía informativa.",
          "Mas de 25 recetas entre guarniciones, platos principales, salsas, postres y bebidas cetogenicas.",
          "Tips de organización y anticipación.",
        ]
      },
      {
        list: true,
        title: "Recetas:",
        info: [
          "1. Guarniciones: Pan Chip, Coliguazú, Mil hojas de Zuchini, Coleslaw Keto, Arroz de Coliflor, Puré de Brócoli, Ensalada Crocante.",
          "2. Salsas: Salsa de Queso Azul, Salsa de Espinacas, Mayonesa, Pesto.",
          "3. Platos Principales: Vitel Toné, Pavo con Panceta, Lengua a la Vinagreta, Lomito de cerdo a la Mostaza, Medallones de Lomito a la Pimienta.",
          "4. Postres: Turrón de Cacao, Galletitas de Jengibre, Brownie, Helado, Cheescake, Brownie Cheesecake, Budín de Coco, Pan Dulce.",
          "5. Bebidas: Información sobre bebidas, Tips, Guía de Trago Bajos en Carbohidratos, Caipiriña, Gin Tonic Frutos Rojos, Clerico Lowcarb.",
        ]
      },
      {
        list: true,
        title: "Lo que aprenderás:",
        info: [
          "Todos los alimentos a incluir y cuales evitar.",
          "A preparar tus recetas favoritas en una versión saludable.",
          "A que la cocina saludable es más sencilla de lo que te imaginas, y mas deliciosa!."
        ]
      },
      {
        list: true,
        title: "Lo que necesitas:",
        info: [
          "Una dirección de correo electrónico para acceder al ebook.",
          "Una aplicación compatible para leer documentos en pdf."
        ]
      },
      {
        list: true,
        title: "¿A quienes va dirigido el ebook?:",
        info: [
          "A las personas que están en un plan bajo en carbohidratos y buscan mantenerse allí durante las celebraciones de fin de año.",
          "Que buscan recetas para perder peso, revertir potenciales enfermedades metabólicas como el hígado graso, obesidad, diabetes, resistencia a la insulina, y sus consecuencias.",
          "A las personas interesadas en descubrir la cocina saludable, aprender a preparar una nueva versión de sus recetas favoritas de fin de año."
        ]
      }
    ]
  },*/
  /** 30 DÍAS KETO + AYUNO **/
  {
    poster: `${postersSrc}30 dias keto ayuno.jpg`,
    name: "30 días Keto + Ayuno",
    shortName: "30-dias-keto-ayunos",
    pages: "+98",
    description:
      "Te ayudo a iniciar en el estilo de vida keto, e incorporar el ayuno de forma progresiva e intuitiva sin forzar.",
    price: JSON.parse(JSON.stringify(prices[EBOOK].ketoAyuno30Dias)),
    type: EBOOK,
    features: [
      {
        list: false,
        title: "Acerca del ebook",
        info: [
          "Con este ebook te iniciaras en el estilo de vida cetogenico o keto como se lo conoce también, e incorporaras el ayuno de forma progresiva e intuitiva sin forzar. Todo esto con información completa y correcta, para saber que hacer ante cada situación. Si buscas potenciar tu salud, llevar a tu cuerpo a usar grasa como fuente energética, con mucha vitalidad, como consecuencia perder peso comiendo delicioso, sin ansiedad: ¡este es el camino!.",
          "Son 3 etapas de 10 dias cada una, bien descriptas en mas de 80 paginas."
        ]
      },
      {
        list: true,
        title: "Lo que incluye",
        info: [
          "Guía de inicio informativa.",
          "Guía para pesarte, medirte y registrar tus avances.",
          "Lista de compras.",
          "Tips para leer etiquetas.",
          "Planner.",
          "Recetario de mas de 50 preparaciones de desayunos, meriendas, almuerzos, cenas, batidos e infusiones y mas!.",
          "Guia de como comer fuera de casa.",
          "Recomendaciones de como seguir mas allá de los 30 días."
        ]
      },
      {
        list: true,
        title: "Lo que aprenderás",
        info: [
          "Las bases de la dieta cetogenica y los ayunos, ya que para iniciar algo nuevo primero necesitas tener la información completa.",
          "Todos los alimentos a incluir y cuales evitar.",
          "A leer etiquetas y seleccionar productos.",
          "A que la cocina saludables es más sencilla de lo que te imaginas, y mas deliciosa!."
        ]
      },
      {
        list: true,
        title: "Lo que necesitas",
        info: ["Una dirección de correo electrónico para acceder al ebook."]
      },
      {
        list: true,
        title: "¿A quienes va dirigido el ebook?",
        info: [
          "A las personas que buscan perder peso, revertir potenciales enfermedades metabólicas como el hígado graso, obesidad, resistencia a la insulina, y sus consecuencias.",
          "A las personas con síntomas de migrañas, cansancio, molestias gastrointestinales, ansiedad constante.",
          "Y a todas las personas interesadas en potenciar su salud, inmunidad y aprender a incorporar grasas saludables en su dia a dia  para lograr saciedad y controlar la ansiedad."
        ]
      },
      {
        list: true,
        title: "Este ebook no recomiendo para personas:",
        info: [
          "En etapa de embarazo o lactancia.",
          "Menores de 18 años.",
          "Con alguna enfermedad de base.",
          "Tomando mediciones especificas, simplemente porque bajo estas situaciones necesitas un asesoramiento mas personalizado para adaptar a tu vida estos cambios, así que te recomiendo bajo estas circunstancias tomar un turno presencial u online para iniciarte en este estilo de vida con acompañamiento profesional. Será lo mejor para vos"
        ]
      }
    ]
  },
  {
    /*x*/poster: `${postersSrc}e-Book - Dulces que nos Hacen bien-min.jpg`,
    /*x*/name: "Dulces que nos Hacen bien",
    /*x*/shortName: "e-book-dulces-saludables",
    pages: "+X",
    /*x*/description: "Comparto contigo + 50 recetas de mis dulces favoritos en versión sin azúcar, sin gluten, y con pasos simples.",
    price: JSON.parse(JSON.stringify(prices[EBOOK].dulcesSalusables)),
    /*x*/type: EBOOK,
    features: [
      /*x*/{
        list: false,
        title: "Acerca del ebook",
        info: [
          "En este ebook comparto contigo las recetas de esos Dulces que amamos pero en una versión saludable: sin azúcar, sin gluten ideal para tu dieta keto o lowcarb, para que puedas seguir en tu camino de alcanzar salud disfrutando de preparaciones deliciosas.",
          "Cada una de estas recetas las adapté con mucho amor para vos, pensando en la facilidad para ejecutarlas, y para que después de deleitarte con ellas experimentes sabor y saciedad, por los ingredientes saludables, que te ayudan al control de la ansiedad."
        ]
      },
      /*x*/{
        list: true,
        title: "Lo que incluye",
        info: [
          "+ 50 recetas dulces que nos hacen bien.",
          "En formato digital para que tengas siempre a mano.",
          "Con imágenes de como quedan.",
          "Muchas incluyen tips para presentar, y sugerencias para variar para sacar más recetas.",
          "Lista de ingredientes a tener a mano para ejecutarlas.",
        ]
      },
      /*x*/{
        list: true,
        title: "Lo que aprenderás",
        info: [
          "A que cuidarse con la alimentación es sinónimo de sabor, disfrute y saciedad .",
          "A que la cocina saludable es más simple de lo que te imaginas, y más deliciosa!.",
          "A sorprender a tus seres queridos y a vos mism@ con estas delicias saludables .",
          "A que no necesitas sacrificar tus dulces favoritos mientras estás cambiando tu estilo de vida.",
        ]
      },
      /*x*/{
        list: true,
        title: "Lo que necesitas",
        info: ["Una dirección de correo electrónico para acceder al ebook."]
      },
      /*x*/{
        list: true,
        title: "¿A quienes va dirigido el ebook?",
        info: [
          "A personas que están en un proceso de perder peso, revertir enfermedades metabólicas modernas causadas por el exceso de azúcar y harina procesada, como la resistencia a la insulina, diabetes, hígado graso y sus consecuencias.",
          "A personas que necesitan un control glucemico, ya que son sin azúcares y sin harinas .",
          "A Personas con intolerancia al gluten, o celiacos ya que todas las recetas son libres de gluten .",
          "A personas con síntomas de ansiedad constante, necesitas de dulces y azúcar, molestias gastrointestinales, migrañas .",
          "A todas las personas interesadas en potenciar su salud eligiendo ingredientes saludables, saciantes y deliciosas .",
        ]
      },
      /*x*/{
        list: false,
        title: "",
        info: [
          "Las Recetas de este ebook son aptas para toda la familia, ya que los ingredientes son naturales y sin conservantes.",
        ]
      },
    ]
  },

  /** EXTRAS **/
  /** EL PDF debe tener el mismo nombre que el shortName, ejemplo calendario-enero-2023.pdf**/
  {
    poster: `${postersSrc}planificador-digital.jpg`,
    name: "Planificando Mis Comidas",
    shortName: "planificando-mis-comidas",
    description: "Con esta herramienta podrás construir tu ambiente seguro anticipando el menú de cada semana. Descárgalo gratis aquí.",
    type: EXTRA,
  },
  {
    poster: `${postersSrc}tips-viajes.jpeg`,
    name: "Tips para viajes",
    shortName: "tips-viajes",
    description: "Comparto contigo esta Guía con tips para mantener tu estilo de vida durante los viajes. Descárga aquí gratis.",
    type: EXTRA,
  },
  {
    poster: `${postersSrc}mis-habitos-2023.jpeg`,
    name: "Mis Hábitos 2023",
    shortName: "mis-habitos-2023",
    description: "Herramienta súper útil para llevar un seguimiento de tus hábitos y ayudarte a cumplirlos. Descárgalo gratis para todo el año.",
    type: EXTRA,
  },
  
  /* YA NO SE VENDERÁN LOS RECETARIOS DE 50.000 GS {
        poster: `${postersSrc}Recetario comidas tipicas paraguayas version lowcarb.jpg`,
        name: 'Recetario Comida Típica Paraguaya Versión Lowcarb',
        shortName: 'recetario-comida-tipica-py-lowcarb',
        pages: '+17',
        description: 'Accedé a las cinco recetas del taller comidas tipicas paraguayas vesión lowcarb.',
        price: JSON.parse(JSON.stringify(prices[EBOOK].recetario)),
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
                    'Una dirección de correo electrónico para acceder al ebook.',
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
        pages: '+17',
        description: 'Aprende a ejecutar las cinco recetas del taller dulces que nos hacen bien',
        price: JSON.parse(JSON.stringify(prices[EBOOK].recetario)),
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
                    'Una dirección de correo electrónico para acceder al ebook.',
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
    },*/
];

export default products;
