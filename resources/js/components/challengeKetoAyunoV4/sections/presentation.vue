<template>
  <section class="section-presentation white--text">
    <img class="hero d-block" src="/img/landing-reto/keto.jpg" alt="bg" />
    <div class="hero-gradient"></div>
    <div class="content d-block pa-14">
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
      <small-calendar/>
    </div>
  </section>
</template>

<script>
import smallCalendar from "../smallCalendar.vue";
export default {
  components: {
    smallCalendar
  }
}
</script>