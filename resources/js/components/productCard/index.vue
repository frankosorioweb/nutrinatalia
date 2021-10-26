<template>
  <article class="product-card">
    <discount-sticker
      v-if="this.hasDiscount"
      :discount="this.data.price.discount"
    />
    <v-card elevation="5" class="mx-auto rounded-lg">
      <v-img :aspect-ratio="16/9" :src="this.data.poster">
        <template v-slot:placeholder>
          <v-sheet>
            <v-skeleton-loader type="image" />
          </v-sheet>
        </template>
      </v-img>
      <v-card-title
        class="
          primary-font
          font-weight-bold
          secondary-color
          justify-center
          pb-2
        "
        ><h3 class="product-card-title word-break">{{ this.data.name }}</h3>
      </v-card-title>
      <v-card-text class="secondary-font">
        <p class="mb-0">{{ this.data.description }}</p>
      </v-card-text>

      <!-- Footer -->
      <template v-if="!this.hasPrice">
        <div class="px-4 pb-4">
          <v-btn color="primary" block
            >Ver todos los {{ this.data.name }}</v-btn
          >
        </div>
      </template>
      <template v-else>
        <div class="px-4 py-4 grey lighten-4">
          <div
            class="more-info d-flex justify-space-between align-center"
            :class="{ 'mb-2': !removeCTA }"
          >
            <label-type :type="this.data.type" />
            <p class="mb-0 font-weight-bold primary-font primary-color">
              <span
                v-if="this.data.price.discount"
                class="red--text text-decoration-line-through"
                >{{ this.data.price.dollar.old }}</span
              >
              {{ this.data.price.dollar.value }}
            </p>
          </div>
          <v-btn v-if="!removeCTA" color="red" class="white--text" block
            >Quiero el regalo</v-btn
          >
        </div>
      </template>
    </v-card>
  </article>
</template>

<script>
import labelType from "./labelType.vue";
import discountSticker from "./discountSticker.vue";
import { mapGetters } from "vuex";
export default {
  props: ["data", "removeCTA"],
  computed: {
    ...mapGetters("productCard", ["getProductsTypes", "getProductTypeText"]),
    hasPrice() {
      return !_.isUndefined(this.data.price);
    },
    hasDiscount() {
      return this.hasPrice && !_.isUndefined(this.data.price.discount);
    },
  },
  components: {
    labelType,
    discountSticker,
  },
};
</script>