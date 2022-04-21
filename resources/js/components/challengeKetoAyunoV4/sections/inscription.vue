<template>
  <section
    id="section-inscription"
    class="section-inscription pa-4 pa-lg-14 gradient-bg white--text"
  >
    <v-dialog v-model="dialog.state" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Atención </v-card-title>
        <v-card-text>{{ dialog.msg }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog.state = false">
            Aceptar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

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
                        v-model="email"
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
                        v-model="name"
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
                        v-model="phone"
                        label="Ingrese su número de celular"
                        hide-details=""
                        solo
                      ></v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <v-btn @click="reserveAction" color="primary" block>
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
    return {
      email: "",
      name: "",
      phone: "",
      dialog: {
        state: false,
        msg: "",
      },
    };
  },
  methods: {
    reserveAction() {
      this.trimData();
      if(this.validateForm()) {
        this.redirectToWhatsApp();
      }
    },
    trimData() {
      this.email = this.email.trim();
      this.name  = this.name.trim();
      this.phone = this.phone.trim();
    },
    showDialog(msg) {
      this.dialog = {
        state: true,
        msg,
      };
    },
    validateForm() {
      let pass = true;
      const re = /\S+@\S+\.\S+/;
      const validEmail = re.test(this.email);

      if (!validEmail) {
        pass = false;
        this.showDialog("El email ingresado no es válido");
      } else if (_.isEmpty(this.name) || _.isEmpty(this.phone)) {
        pass = false;
        this.showDialog("Debe completar todos los campos");
      }

      return pass;
    },
    redirectToWhatsApp() {
      const whatsappSupport = this.$store.state.links.support.whatsapp;
      const url = `${whatsappSupport}?text=${encodeURIComponent(
        `Hola, deseo inscribirme al Reto 15 Días Keto + Ayuno v4.0\n--Datos personales--\n•Correo: ${this.email}\n•Nombres y Apellidos: ${this.name}\n•Celular: ${this.phone}\n(Obs.: No modificar el texto de arriba)`
      )}`;
      window.open(url);
    }
  },
};
</script>