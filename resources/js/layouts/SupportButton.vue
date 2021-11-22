<template>
  <v-btn
    target="_blank"
    :href="$store.state.links.support.whatsapp"
    bottom
    right
    color="teal white--text"
    elevation="2"
    fab
    fixed
  >
    <v-icon large> mdi-whatsapp </v-icon>
  </v-btn>
</template>