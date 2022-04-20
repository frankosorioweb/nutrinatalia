<template>
  <section class="section-not-suitable pa-4 pa-lg-14 gradient-bg white--text">
    <v-row>
      <v-col cols="12" md="6">
        <div class="content">
          <h2 class="main-title primary-font mb-5 text-center text-md-left">
            Este reto <span class="black--text">¡NO!</span> es para:
          </h2>
          <ul class="list-style-type-none pl-0">
            <li class="py-2" v-for="(item, index) in list" :key="index">
              <v-row no-gutters align="center">
                <v-col cols="auto mr-2">
                  <v-icon color="black">mdi-check-circle-outline</v-icon>
                </v-col>
                <v-col class="list-info">
                  {{ item }}
                </v-col>
              </v-row>
            </li>
            <li class="py-2" >
              <v-row no-gutters align="center">
                <v-col class="list-info">
                  Porque necesitan un <span class="black--text font-weight-bold">ACOMPAÑAMIENTO PERSONALIZADO</span>, no grupal.
                </v-col>
              </v-row>
            </li>
          </ul>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="content">
          <div
            class="img small-content rounded-lg"
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