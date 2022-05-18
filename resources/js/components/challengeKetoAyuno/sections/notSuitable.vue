<template>
  <section class="section-not-suitable px-5 py-8 pa-lg-14 gradient-bg white--text">
    <v-row>
      <v-col cols="12" md="6" order="2" order-lg="1">
        <div class="content">
          <h2 class="main-title primary-font mb-5 text-center text-md-left">
            Este reto <span class="text--primary">¡NO!</span> es para:
          </h2>
          <ul class="list list-style-type-none pl-0 lh-normal">
            <li class="py-2" v-for="(item, index) in list" :key="index">
              <v-row no-gutters align="center">
                <v-col cols="auto mr-2">
                  <v-icon color="text--primary">mdi-check-circle-outline</v-icon>
                </v-col>
                <v-col class="list-info">
                  {{ item }}
                </v-col>
              </v-row>
            </li>
            <li class="py-2" >
              <v-row no-gutters align="center">
                <v-col class="list-info">
                  Porque necesitan un <span class="text--primary font-weight-bold">acompañamiento personalizado</span>, no grupal.
                </v-col>
              </v-row>
            </li>
          </ul>
        </div>
      </v-col>
      <v-col cols="12" md="6" order="1" order-md="2">
        <div class="content">
          <div
            class="img small-content rounded-lg elevation-5"
            style="background-image: url('/img/landing-reto/stop.jpg')"
          ></div>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: [
        "Embarazadas o mujeres lactantes.",
        "Menores de 18 años.",
        "Personas con enfermedades de base.",
        "Personas con medicaciones específicas.",
      ],
    };
  },
};
</script>