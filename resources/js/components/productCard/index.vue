<template>
  <article class="product-card h-100">
    <discount-sticker
      v-if="this.hasDiscount"
      :discount="this.data.price.discount"
    />
    <v-card :to="cardTo" elevation="5" class="mx-auto rounded-lg h-100 d-flex flex-column">
      <v-img :aspect-ratio="16/9" :src="this.data.poster">
        <template v-slot:placeholder>
          <v-sheet class="skeleton-loader-sheet">
            <v-skeleton-loader class="skeleton-loader" type="image" />
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
        ><h3 class="product-card-title word-break lh-normal">{{ this.data.name }}</h3>
      </v-card-title>
      <v-card-text class="secondary-font">
        <p class="mb-0">{{ this.data.description }}</p>
      </v-card-text>

      <!-- Footer -->
      <template v-if="!this.hasPrice">
        <div class="px-4 pb-4">
          <template v-if="this.isExtra">
            <v-btn @click="onDownloadExtraClick" color="primary" block
              >{{ 'Descargar' }}</v-btn
            >
          </template>
          <template v-else>
            <v-btn :to="buttonTo" color="primary" block
              >{{ this.data.customCTA ? this.data.customCTA : `Ver todos los ${this.data.name}` }}</v-btn
            >
          </template>
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
          <v-btn
            :to="buttonTo"
            v-if="!removeCTA"
            color="red"
            class="white--text"
            block
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
  props: ["data", "removeCTA", "buttonTo", "cardTo", "dialog"],
  computed: {
    ...mapGetters("productTypes", ["getProductsTypes", "getProductTypeText"]),
    isExtra() {
      return this.data.type === this.getProductsTypes.EXTRA;
    },
    hasPrice() {
      return !_.isUndefined(this.data.price);
    },
    hasDiscount() {
      return this.hasPrice && this.data.price.discount !== 0;
    },
  },
  methods: {
    onDownloadExtraClick() {
      this.dialog.file = `${this.data.shortName}.pdf`;
      this.loadCookieData();
    },
    loadCookieData() {
      const cookieName = 'download-extra-lead';
      const cookieData = this.getCookie(cookieName);

      if( cookieData ) {
        const { email, names, whatsapp } = JSON.parse( cookieData );
        this.dialog.email = email;
        this.dialog.names = names;
        this.dialog.whatsapp = whatsapp;

        this.$emit('direct-download');
      } else {
        this.dialog.state = true;
      }
    },
    getCookie(name) {
      let cookie = {};
      document.cookie.split(';').forEach(function (el) {
        let [k, v] = el.split('=');
        cookie[k.trim()] = v;
      })
      return cookie[name];
    }
  },
  components: {
    labelType,
    discountSticker,
  },
};
</script>