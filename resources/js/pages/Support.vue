<template>
  <div class="support-page">
    <div class="img-bg support-bg"></div>
    <v-main class="mt-14">
      <v-container>
        <h1 class="text-center primary-font">Soporte</h1>
        <p class="mx-auto text-center description">
          Si tenés alguna duda, podes consultar con el soporte para que puedan
          ayudarte con lo que necesites, el equipo te responderá en la brevedad
          posible.
        </p>
        <div class="buttons-container mx-auto">
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
  </div>
</template>

<style lang="scss">
.support-page {
  .description,
  .buttons-container {
    max-width: 36rem;
  }
  .img-bg.support-bg {
    background-image: url("/img/posters/soporte.jpg");
  }
}
</style>