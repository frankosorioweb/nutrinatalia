<template>
  <section class="section-more-info pa-4 pa-lg-14">
    <v-row>
      <v-col cols="12" md="6">
        <div class="content">
          <div
            class="img rounded-lg elevation-5"
            style="background-image: url('/img/landing-reto/nati-profesional.jpg')"
          ></div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="content">
          <h2 class="main-title primary-font mb-5 text-center text-md-left">
            ¿Por qué ser parte del <span class="secondary-color">reto</span>?
          </h2>
          <ul class="list-style-type-none pl-0 lh-normal">
            <li class="py-2" v-for="(info, index) in moreInfo" :key="index">
              <v-row no-gutters align="center">
                <v-col cols="auto mr-2">
                  <v-icon color="primary">mdi-check-circle-outline</v-icon>
                </v-col>
                <v-col class="list-info text--primary">
                  {{ info }}
                </v-col>
              </v-row>
            </li>
          </ul>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      moreInfo: [
        "Grupo de WhatsApp guiado por la Nutri Natalia.",
        "Videos a diario.",
        "Lista de compras, guías, recetas.",
        "Acceso de por vida a recursos en la nube.",
        "Respuestas a tus dudas diarias.",
        "Descuentos exclusivos en la academia.",
      ]
    }
  },
}
</script>