<template>
  <v-main class="mt-14 support-page">
    <v-container>
      <h1 class="text-center primary-font">Soporte</h1>
      <p class="mx-auto text-center description">
        Si tenés alguna duda, podes consultar con el soporte para que puedan
        ayudarte con lo que necesites, el equipo te responderá en la brevedad
        posible.
      </p>
      <div class="buttons, buttons-container mx-auto">
        <v-row justify="center">
          <v-col cols="12" sm="6" class="pb-0">
            <p class="text-center mb-1 font-weight-bold">+{{ $store.state.support.whatsapp }}</p>
            <v-btn
              target="_blank"
              :href="$store.state.links.support.whatsapp"
              color="teal white--text"
              block
            >
              <v-icon class="mr-1">mdi-whatsapp</v-icon>
              Whatsapp
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6" class="pb-0">
            <p class="text-center mb-1 font-weight-bold">{{ $store.state.support.email }}</p>
            <v-btn
              target="_blank"
              :href="$store.state.links.support.email"
              color="red white--text"
              block
            >
              <v-icon class="mr-1">mdi-email</v-icon>
              Correo
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-main>
</template>

<style lang="scss">
.support-page {
  .description,
  .buttons-container {
    max-width: 36rem;
  }
}
</style>