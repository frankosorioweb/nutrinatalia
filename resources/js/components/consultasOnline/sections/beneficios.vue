<template>
    <section class="beneficios-section">
        <div class="content px-6 py-10">
            <h1 class="section-title lh-normal text-capitalize text-center primary-font mb-6">Lo que <span
                    class="primary-color">obtendrás</span> en
                tu consulta con la <span class="primary-color">NutriNatalia</span></h1>
            <div class="beneficios-wrapper text-center">
                <template v-for="(beneficio, index) in beneficios">
                    <div class="beneficio" :class="index !== beneficios.length -1 ? 'pb-5': ''">
                        <div class="logo-wrapper mb-4">
                            <img :class="beneficio.iconClass" :src="'/img/consultas-2-icons/'+beneficio.icon" alt="icono-beneficio">
                        </div>
                        <div class="title-wrapper">
                            <p class="beneficio-title primary-font font-weight-bold mb-0">{{ beneficio.title }}</p>
                        </div>
                        <div class="description-wrapper">
                            <p class="description mb-0">{{ beneficio.description }}</p>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            beneficios: [
                {
                    icon: 'heart.svg',
                    iconClass: 'heart',
                    title: 'Reconectarte con Tu Cuerpo',
                    description: 'Descubriremos tu objetivo, tus “para que” y tu conexión diaria con ellas.'
                },
                {
                    icon: 'person.svg',
                    iconClass: 'person',
                    title: 'Recibir Ajustes Personalizados',
                    description: 'Sumando hábitos y suplementación según las señales de tu cuerpo.'
                },
            ]
        }
    },
}
</script>