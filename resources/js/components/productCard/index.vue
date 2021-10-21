<template>
  <article class="product-card">
    <v-card elevation="5" class="mx-auto rounded-lg">
      <v-img :src="this.poster"></v-img>
      <v-card-title
        class="
          primary-font
          font-weight-bold
          secondary-color
          justify-center
          pb-2
        "
        ><h3 class="product-card-title word-break">{{ this.title }}</h3>
      </v-card-title>
      <v-card-text class="secondary-font">
        <p class="mb-0">{{ this.description }}</p>
      </v-card-text>
      <!-- Footer -->
      <template v-if="!this.hasPrice">
        <div class="px-4 pb-4">
          <v-btn color="primary" block>Ver todos los {{ this.title }}</v-btn>
        </div>
      </template>
      <template v-else>
        <div class="px-4 py-4 grey lighten-4">
          <div class="more-info d-flex justify-space-between mb-2">
            <label-type :type="type" />
            <p class="mb-0"><span>36</span> 13.9 USD</p>
          </div>
          <v-btn color="error" block>Quiero el regalo</v-btn>
        </div>
      </template>
    </v-card>
  </article>
</template>

<script>
import labelType from './labelType.vue';
import { mapGetters } from "vuex";
export default {
  props: ["poster", "title", "type", "description", "price"],
  computed: {
    ...mapGetters("productCard", ["getProductsTypes", "getProductTypeText"]),
    hasPrice() {
      return !_.isUndefined(this.price);
    },
  },
  components: {
    labelType
  }
};
</script>