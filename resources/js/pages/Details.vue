<template>
  <div class="mt-14 mb-6 grey lighten-5">
    <div class="banner">
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
              Aprende a ejecutar recetas de postres dulces saludables, sin
              azúcar y sin harinas, con pocos pasos, ingredientes sencillos y
              súper deliciosos.
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
                >36</span
              >
              13.9 USD
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
            Acerca del taller
          </h2>
          <p class="mb-3">
            Las preparaciones de este taller se caracterizan por ser bajas en
            carbohidratos, lo que permite disfrutar de un delicioso postre sin
            elevar los niveles de azúcar en sangre, controlando la ansiedad con
            saciedad, ya que son ricas en grasas saludables.
          </p>
          <p class="mb-3">
            Mis recetas se caracterizan por utilizar ingredientes sencillos y
            pasos fáciles de ejecutar.
          </p>
          <p class="mb-3">
            ¡Inscríbete ahora mismo y sorprende a tus seres queridos con dulces
            que nos hacen bien.
          </p>
        </v-col>
        <v-col cols="12 mt-3">
          <v-divider class="mb-3"></v-divider>
        </v-col>
        <v-col cols="12 pt-2">
          <h2
            class="
              feature-title
              primary-font
              font-weight-bold
              secondary-color
              mb-2
            "
          >
            Lo que aprenderas
          </h2>
          <ul class="list pl-0">
            <li class="py-1">
              <v-row no-gutters>
                <v-col cols="auto mr-2">
                  <v-icon color="primary">mdi-check-circle-outline</v-icon>
                </v-col>
                <v-col>
                  Que los dulces también son saludables, con los ingredientes
                  correctos.
                </v-col>
              </v-row>
            </li>
            <li class="py-1">
              <v-row no-gutters>
                <v-col cols="auto mr-2">
                  <v-icon color="primary">mdi-check-circle-outline</v-icon>
                </v-col>
                <v-col>
                  A disfrutar y sorprender a tus seres queridos con postres que
                  nos hacen bien, sin necesidad salir de tu dieta o afectando tu
                  salud.
                </v-col>
              </v-row>
            </li>
            <li class="py-1">
              <v-row no-gutters>
                <v-col cols="auto mr-2">
                  <v-icon color="primary">mdi-check-circle-outline</v-icon>
                </v-col>
                <v-col>
                  Que la preparación de dulces es más sencilla de lo que te
                  imaginas, apenas necesitarás entre 5 a 20 minutos.
                </v-col>
              </v-row>
            </li>
          </ul>
        </v-col>
        <v-col cols="12 pt-2">
          <h2
            class="
              feature-title
              primary-font
              font-weight-bold
              secondary-color
              mb-2
            "
          >
            Lo que necesitas para el taller
          </h2>
          <ul class="list pl-0">
            <li class="py-1">
              <v-row no-gutters>
                <v-col cols="auto mr-2">
                  <v-icon color="primary">mdi-check-circle-outline</v-icon>
                </v-col>
                <v-col>
                  Una cuenta de Google, ya que los videos están almacenados en
                  Google Drive.
                </v-col>
              </v-row>
            </li>
            <li class="py-1">
              <v-row no-gutters>
                <v-col cols="auto mr-2">
                  <v-icon color="primary">mdi-check-circle-outline</v-icon>
                </v-col>
                <v-col>
                  Un celular o una computadora con conexión wifi estable, ya que
                  los videos están en alta resolución.
                </v-col>
              </v-row>
            </li>
          </ul>
        </v-col>
        <v-col cols="12 pt-2">
          <h2
            class="
              feature-title
              primary-font
              font-weight-bold
              secondary-color
              mb-2
            "
          >
            ¿A quién va dirigido el taller?
          </h2>
          <p class="mb-3">
            Este taller es ideal para aquellos que necesiten controlar la
            glicemia como personas con diabetes, resistencia a la insulina, con
            sobre peso y obesidad. Ya que utilizamos harinas alternativas, las
            preparaciones son sin gluten, siendo aptas para celiacos e
            intolerantes al gluten, y todos los interesados en llevar dietas
            saludables.
          </p>
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