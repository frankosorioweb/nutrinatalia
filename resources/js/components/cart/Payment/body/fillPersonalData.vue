<template>
  <div class="personal-data">
    <p
      class="
        primary-title
        mb-1
        primary-font
        font-weight-bold
        primary-color
        text-center
      "
    >
      Datos personales
    </p>
    <div class="form">
      <v-text-field
        v-model="email"
        label="Correo electrónico"
        type="email"
      ></v-text-field>
      <v-text-field v-model="name" label="Nombres" type="text"></v-text-field>
      <v-text-field
        v-model="lastName"
        label="Apellidos"
        type="text"
      ></v-text-field>
    </div>
    <v-btn color="primary" @click="onSendVoucher" block>
      <img
        class="buttonLogo mr-1"
        src="/img/Whatsapp.svg"
        alt="logo whatsapp"
      />
      Enviar comprobante
    </v-btn>

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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      email: null,
      name: null,
      lastName: null,
      dialog: {
        state: false,
        msg: null,
      },
    };
  },
  methods: {
    onSendVoucher() {
      const validForm = this.validateForm();
      if(validForm) this.redirectToWhatsApp()
    },
    redirectToWhatsApp() {
      const url = `https://wa.me/595991406723?text=${encodeURIComponent(
        `--Datos personales--\n•correo: ${this.email}\n•nombre: ${this.name} ${this.lastName}\n--Datos adicionales--\n•infoproducto: ${this.getProduct.name}\n•tipo: ${this.getProduct.type}\n(Obs.: No modificar el texto de arriba)`
      )}`;
      window.open(url);
    },
    showDialog(msg) {
      this.dialog.state = true;
      this.dialog.msg = msg;
    },
    validateForm() {
      let pass = true;
      const re = /\S+@\S+\.\S+/;
      const validEmail = re.test(this.email);

      if (!validEmail) {
        pass = false;
        this.showDialog("El email ingresado no es válido");
      } else if (_.isEmpty(this.name) || _.isEmpty(this.lastName)) {
        pass = false;
        this.showDialog("Debe completar todos los campos");
      }

      return pass;
    },
  },
  computed: {
    ...mapGetters("products", ["getProductFromShortName"]),
    getProduct() {
      const params = this.$route.params;
      return this.getProductFromShortName(params.type, params.shortName);
    },
  },
};
</script>