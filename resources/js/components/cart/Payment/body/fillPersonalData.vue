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
        :label="getProduct.isChallenge ? 'GMAIL' : 'Correo electrónico'"
        type="email"
      ></v-text-field>
      <v-text-field v-model="name" label="Nombres" type="text"></v-text-field>
      <v-text-field
        v-model="lastName"
        label="Apellidos"
        type="text"
      ></v-text-field>
      <v-text-field
        v-if="getProduct.isChallenge"
        v-model="whatsapp"
        label="WhatsApp"
        type="text"
      ></v-text-field>
    </div>
    <v-btn color="primary" @click="onSendVoucher" block>
      <img
        class="buttonLogo mr-1"
        src="/img/Whatsapp.svg"
        alt="logo whatsapp"
      />
      {{ isFreeInfoProduct ? "Continuar" : "Enviar comprobante" }}
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
  props: ["isFreeInfoProduct"],
  data() {
    return {
      email: null,
      name: null,
      lastName: null,
      whatsapp: null,
      dialog: {
        state: false,
        msg: null
      }
    };
  },
  methods: {
    onSendVoucher() {
      const validForm = this.validateForm();
      if (validForm) this.redirectToWhatsApp();
    },
    redirectToWhatsApp() {
      const whatsappSupport = this.$store.state.links.support.whatsapp;
      const url = `${whatsappSupport}?text=${encodeURIComponent(
        `--Datos personales--\n•correo: ${this.email}\n•nombre: ${this.name} ${this.lastName}${this.getProduct.isChallenge? '\n•whatsapp: '.concat(this.whatsapp) : ''}\n--Datos adicionales--\n•infoproducto: ${this.getProduct.name}\n•tipo: ${this.getProduct.type}\n${this.appendCoupon()}(Obs.: No modificar el texto de arriba)`
      )}`;
      window.open(url);
    },
    appendCoupon() {
      if (this.hasApplicableCoupon()) {
        const coupons = Object.values(this.getProduct.price.coupons)[0];
        return coupons.applied ? `•CUPÓN: ${coupons.value}\n` : "";
      } else {
        return "";
      }
    },
    hasApplicableCoupon() {
      return !_.isEmpty(this.getProduct.price.coupons);
    },
    showDialog(msg) {
      this.dialog.state = true;
      this.dialog.msg = msg;
    },
    validateForm() {
      let pass = true;
      const anyMailre = /\S+@\S+\.\S+/;

      let validEmail = anyMailre.test(this.email);
      if (this.getProduct.isChallenge)
        validEmail = this.gmailRe.test(this.email);

      if (!validEmail) {
        pass = false;
        this.showDialog(
          this.getProduct.isChallenge
            ? "El correo debe ser de tipo GMAIL (Ejemplo: correo@gmail.com)"
            : "El email ingresado no es válido"
        );
      } else if (_.isEmpty(this.name) || _.isEmpty(this.lastName)) {
        pass = false;
        this.showDialog("Debe completar todos los campos");
      } else if (this.getProduct.isChallenge && _.isEmpty(this.whatsapp)) {
        pass = false;
        this.showDialog("Debe completar todos los campos");
      }

      return pass;
    }
  },
  computed: {
    ...mapGetters("products", ["getProductFromShortName"]),
    getProduct() {
      const params = this.$route.params;
      return this.getProductFromShortName(params.type, params.shortName);
    },
    gmailRe() {
      const re = /\S+@gmail+\.\S+/;
      return re;
    }
  }
};
</script>
