<template>
  <v-main class="cart-page">
    <v-container class="px-5 py-8">
      <v-row no-gutters>
        <purchase-policy-alert v-if="!isFreeInfoProduct" />
        <v-col cols="12" lg="5">
          <stepper v-if="!this.isFreeInfoProduct"></stepper>
          <payment :isFreeInfoProduct="this.isFreeInfoProduct"></payment>
        </v-col>
        <v-col cols="12" lg="7">
          <v-row no-gutters>
            <v-col cols="12" order-lg="last">
              <coupon-box :product="getProduct"></coupon-box>
            </v-col>
            <v-col cols="12" order-lg="first">
              <product-card-responsive :data="getProduct" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <custom-snack-bar></custom-snack-bar>
  </v-main>
</template>

<script>
import stepper from "../components/cart/Payment/Stepper.vue";
import payment from "../components/cart/Payment/";
import purchasePolicyAlert from "../components/cart/PurchasePolicyAlert.vue";
import productCardResponsive from "../components/productCard/responsive.vue";
import couponBox from "../components/couponBox/index.vue";
import customSnackBar from "../components/couponBox/customSnackBar.vue";
import { mapGetters } from "vuex";
import store from "../store/index.js";
export default {
  components: {
    stepper,
    payment,
    productCardResponsive,
    purchasePolicyAlert,
    couponBox,
    customSnackBar
  },
  computed: {
    ...mapGetters("products", ["getProductFromShortName"]),
    getProduct() {
      const params = this.$route.params;
      return this.getProductFromShortName(params.type, params.shortName);
    },
    isFreeInfoProduct() {
      const discount = this.getProduct.price.discount;

      if (discount && discount === 100) return true;
      return false;
    },
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("stepper/resetSteeps");
    next();
  },
  beforeRouteEnter(to, from, next) {
    const type = to.params.type;
    const shortName = to.params.shortName;

    const existsInfoproduct = store.getters.verifyInfoproduct(type, shortName)
      ? true
      : false;

    if (existsInfoproduct) {
      next();
    } else {
      next("/");
    }
  },
};
</script>