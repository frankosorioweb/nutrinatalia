<template>
  <section class="section-gift text-center py-6 mx-3">
    <h2 class="primary-title mb-3 mx-auto px-2 primary-font font-weight-bold">
      ¿Sos <span class="primary-color">nuev@</span> en la academia?, aquí 
      te dejo un <span class="primary-color">regalo</span> de recibimiento
    </h2>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4">
          <product-card
            :buttonTo="getDetailsTo(getGift)"
            :data="getGift"
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
    ...mapGetters("products", ["getDetailsTo"]),
    getGift() {
      return products[6]
    }
  },
};
</script>