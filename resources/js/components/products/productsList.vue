<template>
  <v-container>
    <v-row>
      <v-col v-for="product in getProducts" :key="product.name" cols="12" sm="6" md="4">
        <product-card
          @direct-download="downloadExtra"
          :cardTo="isExtra(product) ? null : getDetailsTo(product)"
          :data="product" :removeCTA="true"
          :dialog="dialog"></product-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog.state" max-width="500">
      <v-card>
        <v-card-title class="text-h5 text-center">
          Completá tus datos
        </v-card-title>

        <v-card-text>
          Rellená todos los campos para poder descargar el material

          <v-form ref="downloadForm">
            <v-text-field v-model="dialog.email" label="Correo electrónico *"
              :rules="[dialog.rules.required, dialog.rules.email]"></v-text-field>

            <v-text-field v-model="dialog.names" label="Nombres *" :rules="[dialog.rules.required]"></v-text-field>

            <v-text-field v-model="dialog.whatsapp" label="WhatsApp *" :rules="[dialog.rules.required]"></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions class="pb-4">
          <v-spacer></v-spacer>

          <v-btn type="submit" color="primary" @click="verifyDownload">
            Descargar
          </v-btn>

          <v-btn color="primary" @click="dialog.state = false">
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import productCard from "../productCard";
export default {
  components: {
    productCard,
  },
  data() {
    return {
      dialog: {
        state: false,
        file: '',
        email: '',
        names: '',
        whatsapp: '',
        rules: {
          required: value => !!value || 'Obligatorio.',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'e-mail incorrecto.'
          },
        }
      }
    }
  },
  computed: {
    ...mapGetters("products", ["getCustomProducts", "getDetailsTo"]),
    ...mapGetters("productTypes", ["getProductsTypes"]),
    getProducts() {
      return this.getCustomProducts(this.$route.name);
    },
  },
  methods: {
    isExtra(product) {
      return this.getProductsTypes.EXTRA === product.type;
    },
    verifyDownload() {
      if (this.$refs.downloadForm.validate()) {
        this.verifySaveDataInCookie();
        axios.post('/api/downloadExtra', {
          email: this.dialog.email,
          names: this.dialog.names,
          whatsapp: this.dialog.whatsapp,
          file: this.dialog.file
        }).then((result) => {
          this.dialog.state = false;
          this.downloadExtra();
        }).catch((err) => {
          console.log(err);
        });
      }
    },
    downloadExtra() {
      window.open(`/api/downloadExtra?file=${this.dialog.file}`, '_blank');
    },
    // Almacena los datos del formulario en la cookie y tambien setea los datos en el dialogo, si los hay
    verifySaveDataInCookie() {
      const cookieName = 'download-extra-lead';
      const { email, names, whatsapp } = this.dialog;
      const lead = { email, names, whatsapp };

      const extraCookie = this.getCookie(cookieName);
      if( !extraCookie ) {
        document.cookie = `download-extra-lead=${JSON.stringify(lead)}; expires=Sun, 1 Jan 2300 00:00:00 UTC; path=/`;
      }
    },

    getCookie(name) {
      let cookie = {};
      document.cookie.split(';').forEach(function (el) {
        let [k, v] = el.split('=');
        cookie[k.trim()] = v;
      })
      return cookie[name];
    }
  },
};
</script>