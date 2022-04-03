<template>
  <v-col cols="12">
    <v-alert
      color="primary"
      border="left"
      elevation="2"
      colored-border
      icon="mdi-information"
    >
      Al continuar, entendemos que estás de acuerdo con nuestra
      <strong>
        <a class="text-decoration-underline" @click="showPurchasePolicyDialog"
          >política de compra</a
        >
      </strong>
    </v-alert>

    <v-dialog v-model="dialog.state" persistent>
      <v-card>
        <v-card-title class="text-h5"> Política de compra </v-card-title>
        <v-card-text>{{ dialog.msg }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog.state = false">
            Aceptar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      dialog: {
        state: false,
        msg: "No realizamos reembolsos, ya que, en las redes sociales se comparte mucho contenido gratuito para que puedas visualizar la calidad de la enseñanza e información, así como también cada taller e ebook cuenta con toda la información necesaria para que a partir de ella puedas tomar la decisión de realizar una compra si es que considerás que se ajusta a tus necesidades. Por otro lado, los montos se muestran claramente a lo largo del proceso de compra."
      }
    }
  },
  methods: {
    showPurchasePolicyDialog() {
      this.dialog.state = true;
    },
  },
};
</script>