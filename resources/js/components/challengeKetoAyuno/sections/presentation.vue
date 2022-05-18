<template>
  <section class="section-presentation white--text">
    <img class="hero d-block" src="/img/landing-reto/keto.jpg" alt="bg" />
    <div class="hero-gradient"></div>
    <div
      class="
        content
        d-block
        text-center text-lg-left
        mx-auto mx-lg-0
        px-5 py-8 pa-lg-14
      "
    >
      <h1 class="primary-font main-title lh-1 mb-5">
        <span class="secondary-color">Reto</span> 15 Días Keto + Ayuno
        <span class="secondary-color">versión 5.0</span>
      </h1>
      <p class="mb-5 description">
        Este reto está <span class="font-weight-bold text--primary">dirigido</span> a todas las personas
        que buscan iniciar este estilo de vida con la información correcta, que
        buscan <span class="font-weight-bold text--primary">superar la ansiedad</span> y lograr sus
        <span class="font-weight-bold text--primary">metas de peso.</span>
      </p>
      <small-calendar
        primaryText="El reto inicia el:" 
        secondaryText="(cupos limitados)"
        :date="{
          day: '08',
          month: ['JU', 'NIO'],
          year: ['20', '22'],
        }"
      />
    </div>
  </section>
</template>

<script>
import smallCalendar from "../smallCalendar.vue";
export default {
  components: {
    smallCalendar,
  },
};
</script>