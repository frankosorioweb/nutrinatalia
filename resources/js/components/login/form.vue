<template>
  <v-form class="login-form mx-auto">
    <v-card class="elevation-12 pa-6">
      <div class="title mb-3">
        <h1 class="text-h5 text-bold font-weight-bold mb-0">Inicia Sesión</h1>
        <p class="mb-0 text-subtitle-1">o <a href="#" class="font-weight-bold">crea una cuenta</a></p>
      </div>
      <v-text-field
        prepend-icon="mdi-account"
        name="email"
        label="Correo"
        type="email"
      ></v-text-field>
      <v-text-field
        class="mb-2"
        prepend-icon="mdi-lock"
        name="password"
        label="Contraseña"
        type="password"
      ></v-text-field>
      <v-btn class="mb-3" color="primary" block>Ingresar</v-btn>
      <div class="login-footer">
        <a class="font-weight-bold" href="#">¿Olvidaste tu contraseña?</a>
      </div>
    </v-card>
  </v-form>
</template>

<script>
  export default {

  }
</script>