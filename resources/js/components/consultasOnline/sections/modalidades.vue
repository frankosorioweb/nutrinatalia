<template>
    <section class="modalidades-section">
        <div class="content px-6 py-10">
            <h1 class="section-title lh-normal text-capitalize text-center primary-font mb-6">Elegí tu <span class="secondary-color">modalidad</span> preferida</h1>
            <div class="icon-desc-wrapper text-center">
                <template v-for="(modalidad, index) in modalidades">
                    <div class="icon-desc" :class="index !== modalidades.length -1 ? 'pb-5': ''">
                        <div class="icon-wrapper mb-4">
                            <img :class="modalidad.iconClass" :src="'/img/consultas-2-icons/'+modalidad.icon" alt="icono-modalidad">
                        </div>
                        <div class="title-wrapper">
                            <p class="icon-desc-title primary-font font-weight-bold mb-0">{{ modalidad.title }}</p>
                        </div>
                        <div class="icon-desc-description-wrapper">
                            <p class="icon-desc-description mb-0">{{ modalidad.description }}</p>
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
            modalidades: [
                {
                    icon: 'notebook.svg',
                    iconClass: 'notebook',
                    title: 'Consulta Online',
                    description: 'Con una guía previa para pesarte y medirte, nos conectamos.'
                },
                {
                    icon: 'pin.svg',
                    iconClass: 'pin',
                    title: 'Consulta Presencial',
                    description: 'Te recibo en mi consultorio con agendamiento previo.'
                },
            ]
        }
    },
}
</script>