<template>
  <section class="text-center py-6 mx-3">
    <h2 class="mb-3 mx-2 primary-font font-weight-bold">
      ¿Qué hay para <span class="primary-color">ti</span> en esta
      <span class="primary-color">academia</span>?
    </h2>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" lg="4">
          <product-card
            :buttonTo="{name: getProductsTypes.WORKSHOP}"
            :data="{
              poster: '/img/posters/Workshops.jpg',
              name: 'Talleres',
              description:
                'Son videos de aproximadamente 1 hora con el paso a paso de recetas saludables, deliciosas y fáciles de ejecutar.',
            }"
          ></product-card>
        </v-col>
        <v-col cols="12" sm="6" lg="4">
          <product-card
            :buttonTo="{name: getProductsTypes.EBOOK}"
            :data="{
              poster: '/img/posters/Ebooks.jpg',
              name: 'Ebooks',
              description:
                'Son libros digitales que diseñé para que te ayuden en tu camino hacia un estilo de vida saludable. Tenemos: planes completos con información, guías, etc., recetarios y más!.',
            }"
          ></product-card>
        </v-col>
        <v-col cols="12" sm="6" lg="4">
          <product-card
            buttonTo="/consultas"
            :data="{
              poster: '/img/landing-reto/nati-profesional.jpg',
              name: 'Consultas Personalizadas',
              customCTA: 'MÁS INFORMACIÓN',
              description:
                'La oportunidad de ajustar tu proceso de forma personalizada y alcanzar tus metas de salud, de manera online o presencial.',
            }"
          ></product-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import productCard from "../productCard";
export default {
  components: {
    productCard,
  },
  computed: {
    ...mapGetters("productTypes", ["getProductsTypes"])
  }
};
</script>