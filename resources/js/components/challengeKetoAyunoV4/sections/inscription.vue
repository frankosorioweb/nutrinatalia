<template>
  <section
    id="section-inscription"
    class="section-inscription pa-4 pa-lg-14 gradient-bg white--text"
  >
    <v-row>
      <v-col cols="12" md="6">
        <div class="content">
          <h2 class="main-title primary-font mb-5 text-center text-md-left">
            ¡Inscribite <span class="black--text">ahora</span>!
          </h2>
          <div
            class="
              price-wrapper
              white
              rounded
              pa-3
              mb-4
              font-weight-bold
              text-center
              elevation-5
            "
          >
            <p class="d-inline-block primary-color mb-0">Inversión:</p>
            <p class="d-inline-block mb-0 red--text text--darken-4">
              150.000 Gs (22 USD).
            </p>
          </div>
          <div class="description lh-normal mb-4">
            <p class="text-center text-md-left">
              Completá tus datos para que el equipo de ventas pueda comunicarse
              contigo en la brevedad posible y puedas
              <span class="text--primary font-weight-bold">
                reservar tu lugar.
              </span>
            </p>
          </div>
          <div class="inscription-form-wrapper">
            <v-form class="inscription-form white elevation-5 rounded pa-3">
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <div class="input-group">
                      <label
                        for="email"
                        class="d-block secondary-color font-weight-bold mb-3"
                        >Correo electrónico:</label
                      >
                      <v-text-field
                        id="email"
                        label="Ingrese su dirección de correo electrónico"
                        hide-details=""
                        solo
                      ></v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <div class="input-group">
                      <label
                        for="name"
                        class="d-block secondary-color font-weight-bold mb-3"
                        >Nombres y Apellidos:</label
                      >
                      <v-text-field
                        id="name"
                        label="Ingrese sus nombres y apellidos"
                        hide-details=""
                        solo
                      ></v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <div class="input-group">
                      <label
                        for="phone"
                        class="d-block secondary-color font-weight-bold mb-3"
                        >Celular:</label
                      >
                      <v-text-field
                        id="phone"
                        label="Ingrese su número de celular"
                        hide-details=""
                        solo
                      ></v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <v-btn color="primary" block>
                      <v-icon left size="25px">mdi-whatsapp</v-icon>
                      Reservar mi lugar
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="content">
          <div
            class="img small-content rounded-lg elevation-5"
            style="background-image: url('/img/landing-reto/computer.jpg')"
          ></div>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>