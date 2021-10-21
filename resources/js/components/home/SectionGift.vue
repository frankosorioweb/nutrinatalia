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
            :data="this.getGift"
          ></product-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import productCard from "../productCard";
import products from "../../store/data/products";
import { mapGetters } from "vuex";
export default {
  components: {
    productCard,
  },
  computed: {
    ...mapGetters("productTypes", ["getProductsTypes"]),
    getGift() {
      return products[0]  
    }
  },
};
</script>