<template>
  <section class="text-center py-6 mx-3">
    <h2 class="mb-3 primary-font font-weight-bold">
      ¿Eres <span class="primary-color">nuevo</span> en la academia?, de ser
      así, aquí te dejo un <span class="primary-color">regalo</span>
    </h2>
    <v-container>
      <v-row>
        <v-col cols="12">
          <product-card
            title="Dulces que nos hacen bien"
            :type="getProductsTypes.WORKSHOP"
            poster="/img/posters/Panes sin culpa.png"
            description="Aprende a ejecutar recetas de postres dulces saludables, sin azúcar y sin harinas, con pocos pasos, ingredientes sencillos y súper deliciosos."
            price="13.9 USD"
          ></product-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import productCard from "../../layouts/ProductCard.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    productCard,
  },
  computed: {
    ...mapGetters("productTypes", ["getProductsTypes"]),
  },
};
</script>