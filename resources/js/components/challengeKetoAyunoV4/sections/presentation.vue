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
        pa-4 pa-lg-14
      "
    >
      <h1 class="primary-font main-title lh-1 mb-5">
        <span class="secondary-color">Reto</span> 15 Días Keto + Ayuno
        <span class="secondary-color">versión 4.0</span>
      </h1>
      <p class="mb-5 description">
        Este reto está <span class="strong">dirigido</span> a todas las personas
        que buscan iniciar este estilo de vida con la información correcta, que
        <span class="strong">buscan superar la ansiedad</span> y lograr sus
        <span class="strong">metas de peso.</span>
      </p>
      <small-calendar
        primaryText="El reto inicia el:" 
        secondaryText="(cupos limitados)"
        :date="{
          day: '08',
          month: ['MA', 'YO'],
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