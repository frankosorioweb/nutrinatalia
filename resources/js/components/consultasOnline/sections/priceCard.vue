<template>
    <div class="price-card pa-4" :class="{ 'primary': primary, 'secondary': !primary, ...customClasses }">
        <div class="price-wrapper">
            <p class="price-title text-center primary-font font-weight-bold mb-2 lh-normal"
                :class="{ 'primary-color': primary, 'secondary-color': !primary }">{{
                        data.title
                }}</p>
            <template v-for="(priceDetail, index) in data.details">
                <div class="price-details d-flex flex-column" :class="{ 'mb-2': index !== data.length - 1 }">
                    <div class="icon-wrapper text-center">
                        <img :src="'/img/consultas-2-icons/label-' + (primary ? 'primary' : 'secondary' ) + '.svg' " alt="Icono etiqueta">
                    </div>
                    <div class="detail">
                        <div class="detail-name-wrapper">
                            <p class="detail-name primary-font font-weight-bold text-center mb-0 lh-normal">{{
                                    priceDetail.name
                            }}</p>
                        </div>
                        <div class="price-wrapper">
                            <p class="detail-name primary-font text-center mb-0 lh-normal">
                                {{ priceDetail.price.guarani }} <span class="font-weight-bold" :class="{'primary-color': primary, 'secondary-color': !primary}">GS</span>
                                ({{ priceDetail.price.dolar }} <span class="font-weight-bold" :class="{'primary-color': primary, 'secondary-color': !primary}">USD)</span>
                            </p>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        primary: Boolean,
        data: Object,
        customClasses: Object
    }
}
</script>