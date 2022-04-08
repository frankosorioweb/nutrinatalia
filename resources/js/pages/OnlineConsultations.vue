<template>
  <div class="online-consultations-page">
    <div class="img-bg online-consultations"></div>
    <v-main class="mt-14">
      <v-container>
        <h1 class="text-center primary-font">
          Consultas online y presenciales
        </h1>
        <p class="mx-auto text-center description">
          Para personalizar tu proceso de cambio de hábitos solicita aquí una
          consulta ONLINE, para conectarnos desde la comodidad de tu casa u
          oficina, o una consulta PRESENCIAL si vivis en Paraguay
        </p>
        <div class="buttons-container mx-auto">
          <v-row justify="center">
            <v-col cols="12" class="pb-0">
              <v-btn
                target="_blank"
                :href="$store.state.support.onlineConsultations.whatsapp"
                color="teal white--text"
                block
              >
                <v-icon class="mr-1">mdi-whatsapp</v-icon>
                Más información
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-main>
  </div>
</template>

<style lang="scss">
.online-consultations-page {
  .description,
  .buttons-container {
    max-width: 36rem;
  }
}
.img-bg {
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100%;
  &.online-consultations {
    background-image: url("/img/posters/consultas-online.jpg");
  }
}
</style>