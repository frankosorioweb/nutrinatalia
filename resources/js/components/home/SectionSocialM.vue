<template>
    <section class="text-center py-6 mx-3">
        <h2 class="mb-3 primary-font font-weight-bold">Aprende <span class="primary-color">gratis</span> con mi comunidad</h2>
        <p>Aprende algo <span class="secondary-color font-weight-bold">nuevo</span> en mis redes sociales, 
        donde comparto mucho contenido, ¿que esperas para <span class="secondary-color font-weight-bold">unirte</span>? Aprovechalo, es 
        <span class="secondary-color font-weight-bold">GRATIS</span>.</p>
        <v-container>
            <v-row no-gutters>
                <v-col cols="12 mb-6">
                    <social-media-big-button :facebook="true"></social-media-big-button>
                </v-col>
                <v-col cols="12 mt-3">
                    <social-media-big-button :facebook="false"></social-media-big-button>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import socialMediaBigButton from '../socialMediaButtons/bigButton.vue'
export default {
    components: {
        socialMediaBigButton
    }
}
</script>