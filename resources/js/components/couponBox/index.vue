<template>
  <div class="mt-6 ml-lg-4 mb-lg-4">
    <v-row no-gutters>
      <v-col class="mr-3">
        <v-text-field
          v-model="coupon"
          :disabled="loading || hasAppliedCoupon"
          hide-details
          :label="hasAppliedCoupon ? getAppliedCoupon() : '¿Tienes un cupón de descuento?'"
          solo
        ></v-text-field>
      </v-col>
      <v-col cols="auto">
        <!-- Botón aplicar cupón -->
        <v-btn
          :loading="loading"
          :disabled="loading || hasAppliedCoupon"
          @click="validateCoupon"
          height="100%"
          color="primary"
        >
          {{ hasAppliedCoupon ? 'Aplicado' : 'Aplicar' }}
          <template v-slot:loader>
            <span class="custom-loader">
              <v-icon light>mdi-cached</v-icon>
            </span>
          </template>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      coupon: "",
      appliedCoupon: null,
      loading: false,
    };
  },
  computed: {
    hasAppliedCoupon() {
      return Object.values(this.product.price.coupons)[0].applied;
    },
  },
  methods: {
    validateCoupon() {
      this.coupon = _.toUpper(this.coupon).trim();
      if (this.coupon) {
        this.loading = true;
        this.$store
          .dispatch("coupon/validate", this.coupon)
          .then((res) => {
            this.verifyResponse(res);
            this.loading = false;
          })
          .catch((err) => {
            console.log(err);
            this.loading = false;
          });
      }
    },
    verifyResponse(res) {
      const exists = res.data.coupon.exists;
      const expired = res.data.coupon.expired;
      if (!exists || expired) {
        this.$store.commit(
          "coupon/openSnackBar",
          "El cupón introducido no es válido para este infoproducto"
        );
      } else {
        this.applyDiscount();
        this.$store.commit(
          "coupon/openSnackBar",
          "FELICITACIONES, HAS CONSEGUIDO UN 20% DE DESCUENTO"
        );
      }
    },
    applyDiscount() {
      const productCoupon = this.product.price.coupons.jmBrC2fs9y;
      const { discount, dollar, guarani } = productCoupon;
      const productPrice = this.product.price;
      
      // Pasamos el precio actual como OLD
      this.product.price.dollar.old = productPrice.dollar.value;
      this.product.price.guarani.old = productPrice.guarani.value;

      // Aplicamos el descuento
      this.product.price.dollar.value = dollar.value;
      this.product.price.guarani.value = guarani.value;
      this.product.price.discount = discount;
      this.product.price.default = false;

      // Cargamos los datos dentro del cupon del producto
      productCoupon.applied = true;
      productCoupon.value = this.coupon;
    },
    getAppliedCoupon() {
      const coupon = Object.values(this.product.price.coupons)[0].value;
      return coupon;
    }
  },
};
</script>

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>