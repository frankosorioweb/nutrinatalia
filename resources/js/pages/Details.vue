<template>
  <div class="mt-14 mb-6 grey lighten-5">
    <div class="banner">
      <v-img :aspect-ratio="16 / 9" :src="product.poster">
        <template v-slot:placeholder>
          <v-sheet>
            <v-skeleton-loader type="image" />
          </v-sheet>
        </template>
      </v-img>

      <div class="main-info px-3 py-5">
        <v-row no-gutters>
          <v-col cols="auto">
            <label-type :type="product.type"></label-type>
          </v-col>
          <v-col cols="12">
            <h1 class="my-3 main-title primary-font font-weight-bold lh-1">
              {{ product.name }}
            </h1>
          </v-col>
          <v-col cols="12 mb-3">
            <p class="mb-0 description text--secondary">
              {{ product.description }}
            </p>
          </v-col>
          <v-col cols="12 mb-3" v-if="product.duration">
            <div class="details">
              <div class="item d-flex align-center">
                <v-icon color="secondary">mdi-clock-time-eight-outline</v-icon>
                <span class="ml-1"
                  ><span class="font-weight-bold">Duración:</span>
                  <span class="text--secondary">{{ product.duration }}</span>
                </span>
              </div>
            </div>
          </v-col>
          <v-col cols="12">
            <v-btn color="primary" block>
              <v-icon class="mr-1">mdi-cart</v-icon>
              Comprar por
              <span
                v-if="product.price.discount"
                class="
                  ml-1
                  secondary-color
                  font-weight-bold
                  text-decoration-line-through
                "
                >{{ product.price.dollar.old }}</span
              >
              {{ product.price.dollar.value }}
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </div>
    <v-main>
      <v-row no-gutters class="card-features rounded-lg white mx-3 pa-3">
        <v-col cols="12">
          <h2
            class="
              feature-title
              primary-font
              font-weight-bold
              secondary-color
              mb-2
            "
          >
            {{ product.features[0].title }}
          </h2>
          <p
            v-for="description in product.features[0].info"
            :key="description"
            class="mb-3"
          >
            {{ description }}
          </p>
        </v-col>
        <v-col cols="12 mt-3">
          <v-divider class="mb-3"></v-divider>
        </v-col>
        <v-col
          v-for="feature in featuresDetails"
          :key="feature.title"
          cols="12 pt-2"
        >
          <h2
            class="
              feature-title
              primary-font
              font-weight-bold
              secondary-color
              mb-2
            "
          >
            {{ feature.title }}
          </h2>
          <template v-if="feature.list === true">
            <ul class="list pl-0">
              <li
                v-for="(featureInfo, index) in feature.info"
                :key="index"
                class="py-1"
              >
                <v-row no-gutters>
                  <v-col cols="auto mr-2">
                    <v-icon color="primary">mdi-check-circle-outline</v-icon>
                  </v-col>
                  <v-col>
                    {{ featureInfo }}
                  </v-col>
                </v-row>
              </li>
            </ul>
          </template>
          <template v-else>
            <p
              v-for="(featureInfo, index) in feature.info"
              :key="index"
              class="mb-3"
            >
              {{ featureInfo }}
            </p>
          </template>
        </v-col>
      </v-row>
    </v-main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import labelType from "../components/productCard/labelType.vue";
export default {
  props: ["type"],
  computed: {
    ...mapGetters("productTypes", ["getProductsTypes"]),
    ...mapGetters("products", ["getProductFromShortName"]),
    product() {
      const shortName = this.$route.params.shortName;
      return this.getProductFromShortName(this.type, shortName);
    },
    featuresDetails() {
      return this.product.features.slice(1);
    },
  },
  components: {
    labelType,
  },
};
</script>

<style lang="scss" scoped>
.main-title {
  font-size: 1.5rem !important;
}
.card-features {
  $dark-gray: #303033;
  $primary-color: #00959b;
  border: 1px solid rgba($color: #000000, $alpha: 0.12) !important;

  border-top: 5px solid $primary-color !important;
  font-size: 13px !important;

  .feature-title {
    font-size: 1rem;
  }
}
.list {
  list-style-type: none;
}
</style>