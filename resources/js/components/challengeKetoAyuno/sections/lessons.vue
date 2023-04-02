<template>
  <section class="section-lessons px-5 py-8 pa-lg-14 gradient-bg white--text">
    <div class="content">
      <h2 class="main-title primary-font mb-5 text-center">
        Contenido de las clases del <span class="text--primary">reto</span>
      </h2>
      <div class="splide">
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide rounded-lg" v-for="lesson in lessons" :key="lesson.title">
              <lesson :lesson="lesson" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import lesson from "../lesson.vue";
export default {
  data() {
    return {
      lessons: [
        {
          title: 'Introducción al reto',
          poster: '/img/landing-reto/clases/introduccion.jpg',
          items: [
            'Cómo empezar.',
            'De qué se trata.',
            'Etapa 1 y 2 del reto.',
            'Primera tarea: escribo mi objetivo.',
            'Descarga de la guía de inicio, lista de compras y el menú de la etapa 1.',
            'Cómo empezar para tener éxito.',
          ]
        },
        {
          title: 'Clase 1 - Registrando el Inicio',
          poster: '/img/landing-reto/clases/clase1.jpg',
          items: [
            'Los parámetros que tendremos en cuenta.',
            'Registrando el peso y medidas.',
            'Frecuencia para pesarte y medirte.',
            'Cómo evalúo mi proceso.',
            'Organizando mi inicio.',
          ]
        },
        {
          title: 'Clase 2 - Cetosis, señales y cómo medir',
          poster: '/img/landing-reto/clases/clase2.jpg',
          items: [
            'Qué es la cetosis nutricional.',
            'Qué es la flexibilidad metabólica.',
            'Señales de la cetosis.',
            'Métodos para medirla.',
            'Preguntas frecuentes: ¿En cuánto tiempo entro en cetosis?, ¿Qué pasa si salgo de cetosis?.',
          ]
        },
        {
          title: 'Clase 3 - Síntomas de Adaptación',
          poster: '/img/landing-reto/clases/clase3.jpg',
          items: [
            'Cuáles son los síntomas de adaptación a una dieta cetogénica y cómo interpretarlas.',
            'Porqué aparecen estos síntomas.',
            'La importancia de los electrolitos.',
            'Preguntas frecuentes: ¿Cuánto tiempo duran los síntomas?, ¿Aplica para todos?.'
          ]
        },
        {
          title: 'Clase 4 - Mitos de la Dieta Cetogénica',
          poster: '/img/landing-reto/clases/clase4.jpg',
          items: [
            'La importancia de tener la información correcta',
            'Mitos frecuentes:',
            '1. La dieta cetogénica produce estreñimiento.',
            '2. La dieta cetogénica no es saludable.',
            '3. La dieta cetogénica causa daño renal.',
            '4. La dieta cetogénica aumenta el colesterol y los triglicéridos.',
            '5. La dieta cetogénica es costosa.',
          ]
        },
        {
          title: 'Clase 5 - Cómo leer etiquetas',
          poster: '/img/landing-reto/clases/clase5.jpg',
          items: [
            'Cómo leer etiquetas en 2 simples pasos.',
            'Dónde encontrar la información útil en las etiquetas.',
            'Cómo analizar la cantidad, el orden y la calidad de los ingredientes de un producto.',
            'Cómo identificar productos procesados.',
            'Cómo analizar la tabla nutricional.',
          ]
        },
        {
          title: 'Clase 6 - Tips para el fin de semana y eventos',
          poster: '/img/landing-reto/clases/clase6.jpg',
          items: [
            'Consejos para anticiparse y planificar nuestras comidas en estas ocasiones.',
            'Armando nuestro entorno seguro.',
            'Guía de alimentos bajos en carbohidratos y comidas saludables.',
            'Guía de tragos bajos en carbohidratos.',
          ]
        },
        {
          title: 'Clase 7 - Ayunos, ¿Qué son?, ¿Cuántas horas?, ¿Cómo iniciar?',
          poster: '/img/landing-reto/clases/clase7.jpg',
          items: [
            'Qué es el Ayuno.',
            'Qué buscamos con el Ayuno durante el reto.',
            'Cuántas horas.',
            'El hambre durante el Ayuno y cómo manejarlo.',
            'Qué consumimos durante los Ayunos.',
            'Preguntas frecuentes: ¿Tendré debilidad, hipoglucemia, hambre?.',
            'Descarga el menú de la etapa 2.',
          ]
        },
        {
          title: 'Clase 8 - Beneficios del Ayuno',
          poster: '/img/landing-reto/clases/clase8.jpg',
          items: [
            'Pérdida de grasa y flexibilidad metabólica.',
            'Control glucémico.',
            'Autofagia y reciclaje celular.',
            'Neuro y cardioprotector.',
            'Integridad intestinal y hepática',
            'Antiinflamatorio.',
          ]
        },
        {
          title: 'Clase 9 - Guía de Suplementos',
          poster: '/img/landing-reto/clases/clase9.jpg',
          items: [
            'Los suplementos cómo potencializadores de salud.',
            'Qué tener en cuenta para saber si necesito un suplemento.',
            'Ejemplos de casos y recomendaciones.',
            'Qué suplementos tomar durante los Ayunos y cuáles no.',
          ]
        },
        {
          title: 'Clase 10 - Actividad física durante los Ayunos',
          poster: '/img/landing-reto/clases/clase10.jpg',
          items: [
            'Los beneficios de la actividad física durante el ayuno.',
            'Hablamos de la hormona del crecimiento, la composición corporal, la adrenalina, la testosterona y más.',
            'La importancia de la hidratación y los electrolitos.',
            'Cómo adaptar la actividad física durante las horas de ayuno.',
          ]
        },
        {
          title: 'Clase 11 - Cómo romper los Ayunos',
          poster: '/img/landing-reto/clases/clase11.jpg',
          items: [
            'Concepto del Desayuno.',
            'Ayunos cortos y largos.',
            'Cómo SI y cómo NO romper los Ayunos.',
            'El estrés metabólico y cómo evitarlo.',
            'Aprendiendo a priorizar nutrientes.',
          ]
        },
        {
          title: 'Clase 12 - Nuevos hábitos (Parte 1)',
          poster: '/img/landing-reto/clases/clase12.jpg',
          items: [
            'Cuando la dieta y los ayunos no son suficientes.',
            'Cuáles son los hábitos que potencian mi salud.',
            'La importancia de cómo vivo y su efecto en mi metabolismo.',
            'Hablaremos de los baños del sol, buen sueño, grounding y otros 5 hábitos claves.',
          ]
        },
        {
          title: 'Clase 13 - Nuevos hábitos (Parte 2)',
          poster: '/img/landing-reto/clases/clase13.jpg',
          items: [
            'Cómo incorporar los nuevos hábitos saludables de manera progresiva.',
            'Caso de éxito de la aplicación de los nuevos hábitos en un paciente.',
          ]
        },
        {
          title: 'Clase 14 - Hambre Real vs Hambre Emocional',
          poster: '/img/landing-reto/clases/clase14.jpg',
          items: [
            'Aprendemos a tener una mejor relación con la comida.',
            'Diferenciar el hambre real del hambre emocional.',
            'Reconocer el hambre emocional y aprender a disiparlas.',
            'Buenas prácticas a la hora de comer.',
          ]
        },
        {
          title: 'Clase 15 - Indicaciones de Salida',
          poster: '/img/landing-reto/clases/clase15.jpg',
          items: [
            'El inicio del camino hacia tus objetivos.',
            'Cómo enriquecer los conocimientos adquiridos.',
            'Cómo seguir después de estos 15 días.',
            'Cómo volver a acceder a todos los recursos y clases diarias.',
            'Promociones exclusivas.',
          ]
        },
      ]
    }
  },
  mounted() {
    const splide = new Splide(".splide", {
      trimSpace: false,
      gap: "1rem",
      perPage: 3,
      breakpoints: this.spliderBreakpoints,
    });
    splide.mount();
  },
  computed: {
    spliderBreakpoints() {
      let breakpoints = {};
      breakpoints[this.$vuetify.breakpoint.thresholds.xs] = {
        perPage: 1,
      };
      breakpoints[this.$vuetify.breakpoint.thresholds.md] = {
        perPage: 2,
      };

      return breakpoints;
    },
  },
  components: {
    lesson,
  },
};
</script>

<style lang="scss">
  .splide {
    .is-active, .splide__arrow {
      background-color: #00959B !important;
      svg {
        fill: white !important;
      }
    }
  }
</style>