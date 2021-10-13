<template>
    <section class="text-center py-6 mx-3">
        <h2 class="mb-3 primary-font font-weight-bold">Aprende <span class="primary-color">gratis</span> con mi comunidad</h2>
        <p>Aprende algo <span class="secondary-color font-weight-bold">nuevo</span> en mis redes sociales, 
        donde comparto mucho contenido, ¿que esperas para <span class="secondary-color font-weight-bold">unirte</span>? Aprovechalo, es 
        <span class="secondary-color font-weight-bold">GRATIS</span>.</p>
        <social-media-big-button></social-media-big-button>
    </section>
</template>

<script>
import socialMediaBigButton from './SocialMediaBigButton.vue'
export default {
    components: {
        socialMediaBigButton
    }
}
</script>