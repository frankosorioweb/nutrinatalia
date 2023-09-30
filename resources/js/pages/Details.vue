<template>
  <div class="mb-7 grey lighten-5 details-page">
    <v-main>
      <v-row no-gutters>
        <v-col>
          <template v-if="$route.path == '/ebooks/e-book-dulces-saludables'">
            <div>
              <div id="image-slider" class="splide">
                <div class="splide__track">
                  <ul class="splide__list">
                    <template v-for="item in data.ebookDulcesImgs">
                      <li class="splide__slide">
                        <div class="carrusel-img" :style="{
                          background: `center/auto 100% url('${item}') no-repeat, linear-gradient(#AFE2E5, #AFE2E5)`,
                        }"></div>
                      </li>
                    </template>
                  </ul>
                </div>
              </div>
            </div>
          </template>

          <!-- Renderizamos imagen simple -->
          <v-img v-else :class="{ rounded: $vuetify.breakpoint.mdAndUp }" :aspect-ratio="16 / 9" :src="product.poster">
            <template v-slot:placeholder>
              <v-sheet class="skeleton-loader-sheet">
                <v-skeleton-loader class="skeleton-loader" type="image" />
              </v-sheet>
            </template>
          </v-img>
          <!-- End: Renderiza la portada del infoproducto -->
        </v-col>
      </v-row>

      <v-container class="pa-0 pt-5">
        <v-row no-gutters class="card-features elevation-1 rounded-lg white mx-5 pa-4 pb-1">
          <v-col cols="12" md="6 pr-md-2">
            <div class="banner">
              <div class="main-info pb-4">
                <v-row no-gutters>
                  <v-col cols="auto">
                    <label-type :type="product.type"></label-type>
                  </v-col>
                  <v-col cols="12">
                    <h1 class="
                          mt-3
                          mb-1
                          main-title
                          primary-font
                          font-weight-bold
                          lh-1
                        ">
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
                        <span class="ml-1"><span class="font-weight-bold">{{
                          isWorkshop(type) ? "Duración" : "Páginas"
                        }}:</span>
                          <span class="text--secondary">{{
                            isWorkshop(type) ? product.duration : product.pages
                          }}</span>
                        </span>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <template v-if="product.customCTA">
                      <v-btn :href="product.customCTA.link" :to="product.customCTA.to" :target="product.customCTA.target"
                        color="primary" block>
                        {{ product.customCTA.text }}
                      </v-btn>
                    </template>
                    <template v-else>
                      <v-btn :to="getBuyTo" color="primary" block>
                        <v-icon class="mr-1">mdi-cart</v-icon>
                        Comprar por
                        <span v-if="product.price.discount" class="
                              mx-1
                              secondary-color
                              font-weight-bold
                              text-decoration-line-through
                            ">{{ product.price.guarani.old }}</span>
                        {{ product.price.guarani.value }}
                      </v-btn>
                    </template>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6 pl-md-2">
            <h2 class="
                feature-title
                primary-font
                font-weight-bold
                secondary-color
                mb-2
              ">
              {{ product.features[0].title }}
            </h2>
            <p v-for="description in product.features[0].info" :key="description" class="mb-3">
              {{ description }}
            </p>
          </v-col>
          <v-col cols="12 mt-3">
            <v-divider class="mb-3"></v-divider>
          </v-col>
          <v-col v-for="feature in featuresDetails" :key="feature.title" cols="12 pt-2">
            <h2 class="
                feature-title
                primary-font
                font-weight-bold
                secondary-color
                mb-2
              ">
              {{ feature.title }}
            </h2>
            <template v-if="feature.list === true">
              <ul class="list pl-0">
                <li v-for="(featureInfo, index) in feature.info" :key="index" class="py-1">
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
              <p v-for="(featureInfo, index) in feature.info" :key="index" class="mb-3">
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
    data() {
      return {
        ebookDulcesImgs: [
          '/img/posters/carrusel-ebook-dulces/e-Book - Dulces que nos hacen bien-min.png',
          '/img/posters/carrusel-ebook-dulces/Salsas, rellenos y coberturas-min.png',
          '/img/posters/carrusel-ebook-dulces/Cookies-min.png',
          '/img/posters/carrusel-ebook-dulces/Barritas y snacks-min.png',
          '/img/posters/carrusel-ebook-dulces/Muffins y budines-min.png',
          '/img/posters/carrusel-ebook-dulces/Tartas y tortas-min.jpg',
          '/img/posters/carrusel-ebook-dulces/Helados-min.png',
          '/img/posters/carrusel-ebook-dulces/Leche y yogur-min.png',
          '/img/posters/carrusel-ebook-dulces/Mas delicias-min.png',
        ]
      }
    },
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
  mounted() {
    new Splide('#image-slider', {
      type: 'loop',
      autoplay: true,
      interval: 3000
    }).mount();
  }
};
</script>

<style lang="css" type="text/css">
.splide .splide__pagination .splide__pagination__page.is-active {
  background-color: #764191;
  /* Cambia el color de fondo del punto activo */
}

.splide .splide__pagination .splide__pagination__page {
  background-color: gray;
  /* Cambia el color de fondo de los puntos inactivos */
}

.splide__track {
  overflow: hidden;
}

.splide__slide {
  width: 100%;
}

#image-slider .v-image {
  width: 100vw;
  height: calc(100vh - 3.5rem);
}

/* #image-slider .v-image .v-image__image{
    background-size: contain;
  } */

#image-slider .carrusel-img {
  background-size: contain;
  width: 100vw;
  height: calc(100vh - 3.5rem);
  background-position: center;
}

.main-info .description {
  font-size: 1rem;
}
</style>