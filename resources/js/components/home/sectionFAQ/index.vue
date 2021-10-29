<template>
  <section class="section-faq gradient-bg text-center py-6 px-3">
    <h2 class="primary-font font-weight-bold mb-3 mx-2 grey--text text--lighten-5">
      Preguntas <span class="grey--text text--darken-4">frecuentes</span>
    </h2>
    <v-container>
      <v-row class="flex-nowrap overflow-x-auto">
        <faq-card
          title="¿Que conocimientos previos necesito para tomar un taller?"
        >
          <p class="mb-0 text-left word-break">
            No necesitas conocimientos previos, en cada taller te voy a enseñar
            desde cero, para que puedas aprender cada tema sin inconvenientes.
          </p>
        </faq-card>
        <faq-card
          title="Una vez adquirido un taller o ebook, ¿por cuanto tiempo lo tengo disponible?"
        >
          <p class="mb-0 text-left word-break">
            Una vez adquirido un taller o ebook, recibis actualizaciones gratuitas de
            por vida y los tenes disponibles para siempre.
          </p>
        </faq-card>
        <faq-card title="¿Que necesito para ver el taller o recibir el ebook?">
          <p class="mb-0 text-left word-break">
            Para visualizar los talleres solamente necesitas una conexión wifi
            estable y una cuenta de google. <br />Los ebooks se envian por correo
            electrónico y están en formato PDF.
          </p>
        </faq-card>
        <faq-card title="¿Cuales son los medios de pago?">
          <p class="mb-0 text-left word-break">
            Si sos de Paraguay, podes realizar tus pagos mediante transferencia
            bancaria (banco itaú) y Giros claro. <br />Si sos del exterior podes
            pagar mediante Western Union.
          </p>
        </faq-card>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import faqCard from "./faqCard.vue";
export default {
  components: {
    faqCard,
  },
};
</script>