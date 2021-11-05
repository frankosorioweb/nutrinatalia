<template>
  <div class="personal-data">
    <p
      class="
        primary-title
        mb-1
        primary-font
        font-weight-bold
        primary-color
        text-center
      "
    >
      Datos personales
    </p>
    <div class="form">
      <v-text-field label="Correo electrónico" type="email"></v-text-field>
      <v-text-field label="Nombres" type="text"></v-text-field>
      <v-text-field label="Apellidos" type="text"></v-text-field>
    </div>
    <v-btn color="primary" block>
      <img class="buttonLogo mr-1" src="/img/Whatsapp.svg" alt="logo whatsapp">
      Enviar comprobante
    </v-btn>
  </div>
</template>

<script>
export default {};
</script>