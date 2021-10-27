<template>
  <section class="text-center py-6 mx-3">
    <h2 class="mb-3 primary-font font-weight-bold">
      ¿Qué hay para <span class="primary-color">ti</span> en esta
      <span class="primary-color">academia</span>?
    </h2>
    <v-container>
      <v-row>
        <v-col cols="12">
          <product-card
            :buttonTo="{name: getProductsTypes.WORKSHOP}"
            :data="{
              poster: '/img/posters/Workshops.jpg',
              name: 'Talleres',
              description:
                'Son videos de aproximadamente 2 horas con el paso a paso de recetas saludables, deliciosas y fáciles de ejecutar.',
            }"
          ></product-card>
        </v-col>
        <v-col cols="12">
          <product-card
            :buttonTo="{name: getProductsTypes.EBOOK}"
            :data="{
              poster: '/img/posters/Ebooks.jpg',
              name: 'Ebooks',
              description:
                'Son libros digitales que diseñé para que inicies tu camino hacia un estilo de vida saludable. Incluyen: información, guías, listas de compras, recetas, y mucho más.',
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