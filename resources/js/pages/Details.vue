<template>
  <div>
    <!-- Hero -->
    <v-img :aspect-ratio="16 / 9" src="/img/posters/Panes sin culpa.png">
      <template v-slot:placeholder>
        <v-sheet>
          <v-skeleton-loader type="image" />
        </v-sheet>
      </template>
    </v-img>

    <div class="main-info px-3 py-5">
      <v-row no-gutters>
        <v-col cols="auto">
          <label-type :type="getProductsTypes.WORKSHOP"></label-type>
        </v-col>
        <v-col cols="12">
          <h1 class="my-3 main-title primary-font font-weight-bold lh-1">
            Dulces que nos hacen bien
          </h1>
        </v-col>
        <v-col cols="12">
          <p class="mb-0 description text--secondary">
            Aprende a ejecutar recetas de postres dulces saludables, sin azúcar
            y sin harinas, con pocos pasos, ingredientes sencillos y súper
            deliciosos.
          </p>
        </v-col>
        <v-col cols="12 my-3">
          <div class="details">
            <div class="item d-flex align-center">
              <v-icon color="secondary">mdi-clock-time-eight-outline</v-icon>
              <span class="ml-1"
                ><span class="font-weight-bold">Duración:</span>
                <span class="text--secondary">+2 horas</span>
              </span>
            </div>
          </div>
        </v-col>
        <v-col cols="12">
          <v-btn color="primary" block>
            <v-icon class="mr-1">mdi-cart</v-icon>
            Comprar por
            <span
              class="
                ml-1
                secondary-color
                font-weight-bold
                text-decoration-line-through
              "
              >36</span>
            13.9 USD
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import labelType from "../components/productCard/labelType.vue";
export default {
  props: ["type"],
  computed: {
    ...mapGetters("productTypes", ["getProductsTypes"]),
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
</style>