<template>
  <div class="mb-7 grey lighten-5 details-page">
    <v-main>
      <v-container class="pa-0">
        <div class="banner">
          <v-row no-gutters>
            <v-col class="pa-md-5 pr-md-0" cols="12" md="6" align-self="center">
              <v-img
                :class="{ rounded: $vuetify.breakpoint.mdAndUp }"
                :aspect-ratio="16 / 9"
                :src="product.poster"
              >
                <template v-slot:placeholder>
                  <v-sheet class="skeleton-loader-sheet">
                    <v-skeleton-loader class="skeleton-loader" type="image" />
                  </v-sheet>
                </template>
              </v-img>
            </v-col>

            <v-col cols="12" md="6">
              <div class="main-info pa-5">
                <v-row no-gutters>
                  <v-col cols="auto">
                    <label-type :type="product.type"></label-type>
                  </v-col>
                  <v-col cols="12">
                    <h1
                      class="
                        mt-3
                        mb-1
                        main-title
                        primary-font
                        font-weight-bold
                        lh-1
                      "
                    >
                      {{ product.name }}
                    </h1>
                  </v-col>
                  <v-col cols="12 mb-3">
                    <p class="mb-0 description text--secondary">
                      {{ product.description }}
                    </p>
                  </v-col>
                  <v-col cols="12 mb-3">
                    <div class="details">
                      <div class="item d-flex align-center">
                        <v-icon color="secondary">
                          {{
                            isWorkshop(type)
                              ? "mdi-clock-time-eight-outline"
                              : "mdi-book-open-page-variant-outline"
                          }}
                        </v-icon>
                        <span class="ml-1"
                          ><span class="font-weight-bold"
                            >{{
                              isWorkshop(type) ? "Duración" : "Páginas"
                            }}:</span
                          >
                          <span class="text--secondary">{{
                            isWorkshop(type) ? product.duration : product.pages
                          }}</span>
                        </span>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <template v-if="product.customCTA">
                      <v-btn
                        :href="product.customCTA.link"
                        :to="product.customCTA.to"
                        :target="product.customCTA.target"
                        color="primary"
                        block
                      >
                        {{ product.customCTA.text }}
                      </v-btn>
                    </template>
                    <template v-else>
                      <v-btn :to="getBuyTo" color="primary" block>
                        <v-icon class="mr-1">mdi-cart</v-icon>
                        Comprar por
                        <span
                          v-if="product.price.discount"
                          class="
                            mx-1
                            secondary-color
                            font-weight-bold
                            text-decoration-line-through
                          "
                          >{{ product.price.guarani.old }}</span
                        >
                        {{ product.price.guarani.value }}
                      </v-btn>
                    </template>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </div>

        <v-row
          no-gutters
          class="card-features elevation-1 rounded-lg white mx-5 pa-4 pb-1"
        >
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
      </v-container>
    </v-main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "../store/index.js";
import labelType from "../components/productCard/labelType.vue";
export default {
  props: ["type"],
  computed: {
    ...mapGetters("productTypes", ["getProductsTypes", "isWorkshop"]),
    ...mapGetters("products", ["getProductFromShortName"]),
    product() {
      const shortName = this.$route.params.shortName;
      return this.getProductFromShortName(this.type, shortName);
    },
    featuresDetails() {
      return this.product.features.slice(1);
    },
    getBuyTo() {
      const type = _.lowerCase(this.type);
      const shortName = this.product.shortName;

      return {
        name: "buy",
        params: {
          type,
          shortName,
        },
      };
    },
  },
  components: {
    labelType,
  },
  beforeRouteEnter(to, from, next) {
    const type = to.name.split("-")[0];
    const shortName = to.params.shortName;
    const existsInfoproduct = store.getters.verifyInfoproduct(type, shortName)
      ? true
      : false;

    if (existsInfoproduct) {
      next();
    } else {
      next("/");
    }
  },
};
</script>