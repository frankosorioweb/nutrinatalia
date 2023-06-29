<template>
    <div class="container" v-if="this.$route.name == 'Taller'">
        <v-alert color="info" border="left" elevation="2" colored-border icon="mdi-information">
            Los <strong class="text-uppercase">Talleres (vía streaming)</strong> consisten en clases en video, que puedes disfrutar a tu propio ritmo, y están disponibles desde el momento en que los adquieres. <strong class="red--text">Obs.:</strong> <strong class="text-uppercase">No SON</strong> eventos en vivo.
        </v-alert>
    </div>
</template>