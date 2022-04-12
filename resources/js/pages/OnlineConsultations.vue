<template>
  <div class="online-consultations-page mt-14">
    <div class="img-bg online-consultations" :class="{ 'bg-position-left': $vuetify.breakpoint.name === 'xs' }"></div>
    <v-main>
      <v-container class="main-container ml-lg-14 text-center text-lg-left">
        <h1 class="mt-lg-14 primary-font">
          Consultas online y presenciales
        </h1>
        <p class="description">
          Para personalizar tu proceso de cambio de hábitos solicita aquí una
          consulta ONLINE, para conectarnos desde la comodidad de tu casa u
          oficina, o una consulta PRESENCIAL si vivis en Paraguay
        </p>
        <div class="buttons-container">
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
  .main-container {
    max-width: 36rem;
  }
  .bg-position-left {
    background-position-x: -5.5rem !important;
  }
  height: max(30rem, 100vh);
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
    background-image: url("/img/posters/consultas.jpg");
  }
}
</style>