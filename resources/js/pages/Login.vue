<template>
  <v-main class="login-page">
    <v-container fluid fill-height>
      <login />
    </v-container>
  </v-main>
</template>

<script>
  import login from '../components/login/form.vue';
  export default {
    components: {
      login
    }
  }
</script>