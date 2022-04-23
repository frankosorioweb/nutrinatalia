"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_ChallengeKetoAyunoV4_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/footer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/footer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smallCalendar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smallCalendar.vue */ "./resources/js/components/challengeKetoAyunoV4/smallCalendar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    smallCalendar: _smallCalendar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/challengeDuration.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/challengeDuration.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smallCalendar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../smallCalendar.vue */ "./resources/js/components/challengeKetoAyunoV4/smallCalendar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    smallCalendar: _smallCalendar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/inscription.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/inscription.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      email: "",
      name: "",
      phone: "",
      dialog: {
        state: false,
        msg: ""
      }
    };
  },
  methods: {
    reserveAction: function reserveAction() {
      this.trimData();

      if (this.validateForm()) {
        this.redirectToWhatsApp();
      }
    },
    trimData: function trimData() {
      this.email = this.email.trim();
      this.name = this.name.trim();
      this.phone = this.phone.trim();
    },
    showDialog: function showDialog(msg) {
      this.dialog = {
        state: true,
        msg: msg
      };
    },
    validateForm: function validateForm() {
      var pass = true;
      var re = /\S+@\S+\.\S+/;
      var validEmail = re.test(this.email);

      if (!validEmail) {
        pass = false;
        this.showDialog("El email ingresado no es válido");
      } else if (_.isEmpty(this.name) || _.isEmpty(this.phone)) {
        pass = false;
        this.showDialog("Debe completar todos los campos");
      }

      return pass;
    },
    redirectToWhatsApp: function redirectToWhatsApp() {
      var whatsappSupport = this.$store.state.links.support.whatsapp;
      var url = "".concat(whatsappSupport, "?text=").concat(encodeURIComponent("Hola, deseo inscribirme al Reto 15 D\xEDas Keto + Ayuno v4.0\n--Datos personales--\n\u2022Correo: ".concat(this.email, "\n\u2022Nombres y Apellidos: ").concat(this.name, "\n\u2022Celular: ").concat(this.phone, "\n(Obs.: No modificar el texto de arriba)")));
      window.open(url);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/moreInfo.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/moreInfo.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      moreInfo: ["Tendrás el contenido en videos diarios.", "Serás parte del grupo de WhatsApp guiado por la Nutri Natalia.", "Recibirás: lista de compras, guías y recetas.", "Tendrás acceso de por vida a recursos en la nube.", "Despejarás todas tus dudas diarias.", "Obtendrás descuentos exclusivos en la academia.", "Formarás parte de la Tribu de la Nutri Natalia."]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/notSuitable.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/notSuitable.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      list: ["Embarazadas o mujeres lactantes.", "Menores de 18 años.", "Personas con enfermedades de base.", "Personas con medicaciones específicas."]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/presentation.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/presentation.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smallCalendar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../smallCalendar.vue */ "./resources/js/components/challengeKetoAyunoV4/smallCalendar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    smallCalendar: _smallCalendar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/ChallengeKetoAyunoV4.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/ChallengeKetoAyunoV4.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_challengeKetoAyunoV4_sections_presentation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/challengeKetoAyunoV4/sections/presentation.vue */ "./resources/js/components/challengeKetoAyunoV4/sections/presentation.vue");
/* harmony import */ var _components_challengeKetoAyunoV4_sections_moreInfo_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/challengeKetoAyunoV4/sections/moreInfo.vue */ "./resources/js/components/challengeKetoAyunoV4/sections/moreInfo.vue");
/* harmony import */ var _components_challengeKetoAyunoV4_sections_notSuitable_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/challengeKetoAyunoV4/sections/notSuitable.vue */ "./resources/js/components/challengeKetoAyunoV4/sections/notSuitable.vue");
/* harmony import */ var _components_challengeKetoAyunoV4_sections_challengeDuration_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/challengeKetoAyunoV4/sections/challengeDuration.vue */ "./resources/js/components/challengeKetoAyunoV4/sections/challengeDuration.vue");
/* harmony import */ var _components_challengeKetoAyunoV4_sections_inscription_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/challengeKetoAyunoV4/sections/inscription.vue */ "./resources/js/components/challengeKetoAyunoV4/sections/inscription.vue");
/* harmony import */ var _components_challengeKetoAyunoV4_footer_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/challengeKetoAyunoV4/footer.vue */ "./resources/js/components/challengeKetoAyunoV4/footer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    sectionPresentation: _components_challengeKetoAyunoV4_sections_presentation_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    sectionMoreInfo: _components_challengeKetoAyunoV4_sections_moreInfo_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    sectionNotSuitable: _components_challengeKetoAyunoV4_sections_notSuitable_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    sectionChallengeDuration: _components_challengeKetoAyunoV4_sections_challengeDuration_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    sectionInscription: _components_challengeKetoAyunoV4_sections_inscription_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    appFooter: _components_challengeKetoAyunoV4_footer_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  }
});

/***/ }),

/***/ "./resources/js/components/challengeKetoAyunoV4/footer.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/challengeKetoAyunoV4/footer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/footer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/challengeKetoAyunoV4/sections/challengeDuration.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/challengeKetoAyunoV4/sections/challengeDuration.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_challengeDuration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./challengeDuration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/challengeDuration.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_challengeDuration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/challengeKetoAyunoV4/sections/inscription.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/challengeKetoAyunoV4/sections/inscription.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inscription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./inscription.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/inscription.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inscription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/challengeKetoAyunoV4/sections/moreInfo.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/challengeKetoAyunoV4/sections/moreInfo.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moreInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./moreInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/moreInfo.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moreInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/challengeKetoAyunoV4/sections/notSuitable.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/challengeKetoAyunoV4/sections/notSuitable.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notSuitable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notSuitable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/notSuitable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notSuitable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/challengeKetoAyunoV4/sections/presentation.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/challengeKetoAyunoV4/sections/presentation.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_presentation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./presentation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/presentation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_presentation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/ChallengeKetoAyunoV4.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/ChallengeKetoAyunoV4.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengeKetoAyunoV4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChallengeKetoAyunoV4.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/ChallengeKetoAyunoV4.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengeKetoAyunoV4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/challengeKetoAyunoV4/footer.vue?vue&type=template&id=3faf72ab&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/challengeKetoAyunoV4/footer.vue?vue&type=template&id=3faf72ab& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_3faf72ab___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_3faf72ab___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_3faf72ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./footer.vue?vue&type=template&id=3faf72ab& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/footer.vue?vue&type=template&id=3faf72ab&");


/***/ }),

/***/ "./resources/js/components/challengeKetoAyunoV4/sections/challengeDuration.vue?vue&type=template&id=1e0ab906&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/challengeKetoAyunoV4/sections/challengeDuration.vue?vue&type=template&id=1e0ab906& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_challengeDuration_vue_vue_type_template_id_1e0ab906___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_challengeDuration_vue_vue_type_template_id_1e0ab906___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_challengeDuration_vue_vue_type_template_id_1e0ab906___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./challengeDuration.vue?vue&type=template&id=1e0ab906& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/challengeDuration.vue?vue&type=template&id=1e0ab906&");


/***/ }),

/***/ "./resources/js/components/challengeKetoAyunoV4/sections/inscription.vue?vue&type=template&id=2785fe87&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/challengeKetoAyunoV4/sections/inscription.vue?vue&type=template&id=2785fe87& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inscription_vue_vue_type_template_id_2785fe87___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inscription_vue_vue_type_template_id_2785fe87___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inscription_vue_vue_type_template_id_2785fe87___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./inscription.vue?vue&type=template&id=2785fe87& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/inscription.vue?vue&type=template&id=2785fe87&");


/***/ }),

/***/ "./resources/js/components/challengeKetoAyunoV4/sections/moreInfo.vue?vue&type=template&id=0c3a43f8&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/challengeKetoAyunoV4/sections/moreInfo.vue?vue&type=template&id=0c3a43f8& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_moreInfo_vue_vue_type_template_id_0c3a43f8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_moreInfo_vue_vue_type_template_id_0c3a43f8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_moreInfo_vue_vue_type_template_id_0c3a43f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./moreInfo.vue?vue&type=template&id=0c3a43f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/moreInfo.vue?vue&type=template&id=0c3a43f8&");


/***/ }),

/***/ "./resources/js/components/challengeKetoAyunoV4/sections/notSuitable.vue?vue&type=template&id=20360f89&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/challengeKetoAyunoV4/sections/notSuitable.vue?vue&type=template&id=20360f89& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notSuitable_vue_vue_type_template_id_20360f89___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notSuitable_vue_vue_type_template_id_20360f89___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notSuitable_vue_vue_type_template_id_20360f89___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notSuitable.vue?vue&type=template&id=20360f89& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/notSuitable.vue?vue&type=template&id=20360f89&");


/***/ }),

/***/ "./resources/js/components/challengeKetoAyunoV4/sections/presentation.vue?vue&type=template&id=7c991b7b&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/challengeKetoAyunoV4/sections/presentation.vue?vue&type=template&id=7c991b7b& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_presentation_vue_vue_type_template_id_7c991b7b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_presentation_vue_vue_type_template_id_7c991b7b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_presentation_vue_vue_type_template_id_7c991b7b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./presentation.vue?vue&type=template&id=7c991b7b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/presentation.vue?vue&type=template&id=7c991b7b&");


/***/ }),

/***/ "./resources/js/pages/ChallengeKetoAyunoV4.vue?vue&type=template&id=4ec0e86d&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/ChallengeKetoAyunoV4.vue?vue&type=template&id=4ec0e86d& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengeKetoAyunoV4_vue_vue_type_template_id_4ec0e86d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengeKetoAyunoV4_vue_vue_type_template_id_4ec0e86d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengeKetoAyunoV4_vue_vue_type_template_id_4ec0e86d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChallengeKetoAyunoV4.vue?vue&type=template&id=4ec0e86d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/ChallengeKetoAyunoV4.vue?vue&type=template&id=4ec0e86d&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/footer.vue?vue&type=template&id=3faf72ab&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/footer.vue?vue&type=template&id=3faf72ab& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-footer",
    {
      staticClass: "challenge-footer white--text justify-center",
      attrs: { fixed: "", app: "" }
    },
    [
      _c("img", {
        staticClass: "hero",
        attrs: { src: "/img/landing-reto/banner.jpg", alt: "Hero" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "hero-gradient gradient-bg-secondary" }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "content py-3" },
        [
          _c("small-calendar", {
            attrs: {
              primaryText: "Las inscripciones cierran en:",
              secondaryText: "(cupos limitados)",
              countDown: {
                year: 2022,
                month: 4,
                day: 5
              }
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "cta text-center pt-3" },
            [
              _c(
                "v-btn",
                {
                  attrs: { href: "#section-inscription", color: "error" },
                  on: {
                    click: function($event) {
                      return _vm.$vuetify.goTo("#section-inscription")
                    }
                  }
                },
                [_vm._v("¡RESERVAR MI LUGAR!")]
              )
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/challengeDuration.vue?vue&type=template&id=1e0ab906&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/challengeDuration.vue?vue&type=template&id=1e0ab906& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "section-challenge-duration pa-4 pa-lg-14" },
    [
      _c(
        "v-row",
        [
          _c("v-col", { attrs: { cols: "12", md: "6" } }, [
            _c("div", { staticClass: "content" }, [
              _c("div", {
                staticClass: "img small-content rounded-lg elevation-5",
                staticStyle: {
                  "background-image": "url('/img/landing-reto/pesaje.jpg')"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("v-col", { attrs: { cols: "12", md: "6" } }, [
            _c("div", { staticClass: "content text-center" }, [
              _c("h2", { staticClass: "main-title primary-font mb-8" }, [
                _vm._v("\n          ¿Cuando inicia el "),
                _c("span", { staticClass: "secondary-color" }, [
                  _vm._v("reto")
                ]),
                _vm._v("?\n        ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "dates-wrapper white--text" }, [
                _c(
                  "div",
                  { staticClass: "date mb-3" },
                  [
                    _c("small-calendar", {
                      attrs: {
                        primaryText: "El reto inicia el:",
                        secondaryText: "DOMINGO",
                        date: {
                          day: "08",
                          month: ["MA", "YO"],
                          year: ["20", "22"]
                        }
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "date mb-3" },
                  [
                    _c("small-calendar", {
                      attrs: {
                        primaryText: "El reto finaliza el:",
                        secondaryText: "DOMINGO",
                        date: {
                          day: "22",
                          month: ["MA", "YO"],
                          year: ["20", "22"]
                        }
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "date mb-5" },
                  [
                    _c("small-calendar", {
                      attrs: {
                        primaryText: "Inscripciones hasta el:",
                        secondaryText: "JUEVES",
                        red: true,
                        date: {
                          day: "05",
                          month: ["MA", "YO"],
                          year: ["20", "22"]
                        }
                      }
                    })
                  ],
                  1
                )
              ])
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/inscription.vue?vue&type=template&id=2785fe87&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/inscription.vue?vue&type=template&id=2785fe87& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    {
      staticClass: "section-inscription pa-4 pa-lg-14 gradient-bg white--text",
      attrs: { id: "section-inscription" }
    },
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "290" },
          model: {
            value: _vm.dialog.state,
            callback: function($$v) {
              _vm.$set(_vm.dialog, "state", $$v)
            },
            expression: "dialog.state"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "text-h5" }, [
                _vm._v(" Atención ")
              ]),
              _vm._v(" "),
              _c("v-card-text", [_vm._v(_vm._s(_vm.dialog.msg))]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", text: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog.state = false
                        }
                      }
                    },
                    [_vm._v("\n          Aceptar\n        ")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c("v-col", { attrs: { cols: "12", md: "6" } }, [
            _c("div", { staticClass: "content" }, [
              _c(
                "h2",
                {
                  staticClass:
                    "main-title primary-font mb-5 text-center text-md-left"
                },
                [
                  _vm._v("\n          ¡Inscribite "),
                  _c("span", { staticClass: "black--text" }, [_vm._v("ahora")]),
                  _vm._v("!\n        ")
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "\n            price-wrapper\n            white\n            rounded\n            pa-3\n            mb-4\n            font-weight-bold\n            text-center\n            elevation-5\n          "
                },
                [
                  _c(
                    "p",
                    { staticClass: "d-inline-block primary-color mb-0" },
                    [_vm._v("Inversión:")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass:
                        "d-inline-block mb-0 red--text text--darken-4"
                    },
                    [_vm._v("\n            150.000 Gs (22 USD).\n          ")]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "description lh-normal mb-4" }, [
                _c("p", { staticClass: "text-center text-md-left" }, [
                  _vm._v(
                    "\n            Completá tus datos para que el equipo de ventas pueda comunicarse\n            contigo en la brevedad posible y puedas\n            "
                  ),
                  _c(
                    "span",
                    { staticClass: "text--primary font-weight-bold" },
                    [_vm._v("\n              reservar tu lugar.\n            ")]
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "inscription-form-wrapper" },
                [
                  _c(
                    "v-form",
                    {
                      staticClass:
                        "inscription-form white elevation-5 rounded pa-3"
                    },
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-row",
                            [
                              _c("v-col", { attrs: { cols: "12" } }, [
                                _c(
                                  "div",
                                  { staticClass: "input-group" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "d-block secondary-color font-weight-bold mb-3",
                                        attrs: { for: "email" }
                                      },
                                      [_vm._v("Correo electrónico:")]
                                    ),
                                    _vm._v(" "),
                                    _c("v-text-field", {
                                      attrs: {
                                        id: "email",
                                        label:
                                          "Ingrese su dirección de correo electrónico",
                                        "hide-details": "",
                                        solo: ""
                                      },
                                      model: {
                                        value: _vm.email,
                                        callback: function($$v) {
                                          _vm.email = $$v
                                        },
                                        expression: "email"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { cols: "12" } }, [
                                _c(
                                  "div",
                                  { staticClass: "input-group" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "d-block secondary-color font-weight-bold mb-3",
                                        attrs: { for: "name" }
                                      },
                                      [_vm._v("Nombres y Apellidos:")]
                                    ),
                                    _vm._v(" "),
                                    _c("v-text-field", {
                                      attrs: {
                                        id: "name",
                                        label:
                                          "Ingrese sus nombres y apellidos",
                                        "hide-details": "",
                                        solo: ""
                                      },
                                      model: {
                                        value: _vm.name,
                                        callback: function($$v) {
                                          _vm.name = $$v
                                        },
                                        expression: "name"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { cols: "12" } }, [
                                _c(
                                  "div",
                                  { staticClass: "input-group" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "d-block secondary-color font-weight-bold mb-3",
                                        attrs: { for: "phone" }
                                      },
                                      [_vm._v("Celular:")]
                                    ),
                                    _vm._v(" "),
                                    _c("v-text-field", {
                                      attrs: {
                                        id: "phone",
                                        label: "Ingrese su número de celular",
                                        "hide-details": "",
                                        solo: ""
                                      },
                                      model: {
                                        value: _vm.phone,
                                        callback: function($$v) {
                                          _vm.phone = $$v
                                        },
                                        expression: "phone"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { color: "primary", block: "" },
                                      on: { click: _vm.reserveAction }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        { attrs: { left: "", size: "25" } },
                                        [_vm._v("mdi-whatsapp")]
                                      ),
                                      _vm._v(
                                        "\n                    Reservar mi lugar\n                  "
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("v-col", { attrs: { cols: "12", md: "6" } }, [
            _c("div", { staticClass: "content" }, [
              _c("div", {
                staticClass: "img small-content rounded-lg elevation-5",
                staticStyle: {
                  "background-image": "url('/img/landing-reto/computer.jpg')"
                }
              })
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/moreInfo.vue?vue&type=template&id=0c3a43f8&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/moreInfo.vue?vue&type=template&id=0c3a43f8& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "section-more-info pa-4 pa-lg-14" },
    [
      _c(
        "v-row",
        [
          _c("v-col", { attrs: { cols: "12", md: "6" } }, [
            _c("div", { staticClass: "content" }, [
              _c("div", {
                staticClass: "img rounded-lg elevation-5",
                staticStyle: {
                  "background-image":
                    "url('/img/landing-reto/nati-profesional.jpg')"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("v-col", { attrs: { cols: "12", md: "6" } }, [
            _c("div", { staticClass: "content" }, [
              _c(
                "h2",
                {
                  staticClass:
                    "main-title primary-font mb-5 text-center text-md-left"
                },
                [
                  _vm._v("\n          ¿Por qué ser parte del "),
                  _c("span", { staticClass: "secondary-color" }, [
                    _vm._v("reto")
                  ]),
                  _vm._v("?\n        ")
                ]
              ),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "list-style-type-none pl-0 lh-normal" },
                _vm._l(_vm.moreInfo, function(info, index) {
                  return _c(
                    "li",
                    { key: index, staticClass: "py-2" },
                    [
                      _c(
                        "v-row",
                        { attrs: { "no-gutters": "", align: "center" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "auto mr-2" } },
                            [
                              _c("v-icon", { attrs: { color: "primary" } }, [
                                _vm._v("mdi-check-circle-outline")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { staticClass: "list-info text--primary" },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(info) +
                                  "\n              "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                }),
                0
              )
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/notSuitable.vue?vue&type=template&id=20360f89&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/notSuitable.vue?vue&type=template&id=20360f89& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    {
      staticClass: "section-not-suitable pa-4 pa-lg-14 gradient-bg white--text"
    },
    [
      _c(
        "v-row",
        [
          _c("v-col", { attrs: { cols: "12", md: "6" } }, [
            _c("div", { staticClass: "content" }, [
              _c(
                "h2",
                {
                  staticClass:
                    "main-title primary-font mb-5 text-center text-md-left"
                },
                [
                  _vm._v("\n          Este reto "),
                  _c("span", { staticClass: "black--text" }, [_vm._v("¡NO!")]),
                  _vm._v(" es para:\n        ")
                ]
              ),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "list list-style-type-none pl-0 lh-normal" },
                [
                  _vm._l(_vm.list, function(item, index) {
                    return _c(
                      "li",
                      { key: index, staticClass: "py-2" },
                      [
                        _c(
                          "v-row",
                          { attrs: { "no-gutters": "", align: "center" } },
                          [
                            _c(
                              "v-col",
                              { attrs: { cols: "auto mr-2" } },
                              [
                                _c("v-icon", { attrs: { color: "black" } }, [
                                  _vm._v("mdi-check-circle-outline")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-col", { staticClass: "list-info" }, [
                              _vm._v(
                                "\n                " +
                                  _vm._s(item) +
                                  "\n              "
                              )
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "py-2" },
                    [
                      _c(
                        "v-row",
                        { attrs: { "no-gutters": "", align: "center" } },
                        [
                          _c("v-col", { staticClass: "list-info" }, [
                            _vm._v("\n                Porque necesitan un "),
                            _c(
                              "span",
                              { staticClass: "black--text font-weight-bold" },
                              [_vm._v("ACOMPAÑAMIENTO PERSONALIZADO")]
                            ),
                            _vm._v(", no grupal.\n              ")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                2
              )
            ])
          ]),
          _vm._v(" "),
          _c("v-col", { attrs: { cols: "12", md: "6" } }, [
            _c("div", { staticClass: "content" }, [
              _c("div", {
                staticClass: "img small-content rounded-lg elevation-5",
                staticStyle: {
                  "background-image": "url('/img/landing-reto/stop.jpg')"
                }
              })
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/presentation.vue?vue&type=template&id=7c991b7b&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/challengeKetoAyunoV4/sections/presentation.vue?vue&type=template&id=7c991b7b& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "section-presentation white--text" }, [
    _c("img", {
      staticClass: "hero d-block",
      attrs: { src: "/img/landing-reto/keto.jpg", alt: "bg" }
    }),
    _vm._v(" "),
    _c("div", { staticClass: "hero-gradient" }),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "\n      content\n      d-block\n      text-center text-lg-left\n      mx-auto mx-lg-0\n      pa-4 pa-lg-14\n    "
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c("small-calendar", {
          attrs: {
            primaryText: "El reto inicia el:",
            secondaryText: "(cupos limitados)",
            date: {
              day: "08",
              month: ["MA", "YO"],
              year: ["20", "22"]
            }
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", { staticClass: "primary-font main-title lh-1 mb-5" }, [
      _c("span", { staticClass: "secondary-color" }, [_vm._v("Reto")]),
      _vm._v(" 15 Días Keto + Ayuno\n      "),
      _c("span", { staticClass: "secondary-color" }, [_vm._v("versión 4.0")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-5 description" }, [
      _vm._v("\n      Este reto está "),
      _c("span", { staticClass: "strong" }, [_vm._v("dirigido")]),
      _vm._v(
        " a todas las personas\n      que buscan iniciar este estilo de vida con la información correcta, que\n      buscan "
      ),
      _c("span", { staticClass: "strong" }, [_vm._v("superar la ansiedad")]),
      _vm._v(" y lograr sus\n      "),
      _c("span", { staticClass: "strong" }, [_vm._v("metas de peso.")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/ChallengeKetoAyunoV4.vue?vue&type=template&id=4ec0e86d&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/ChallengeKetoAyunoV4.vue?vue&type=template&id=4ec0e86d& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-main",
        { staticClass: "challenge-page h-100 lh-1" },
        [
          _c("section-presentation"),
          _vm._v(" "),
          _c("section-more-info"),
          _vm._v(" "),
          _c("section-not-suitable"),
          _vm._v(" "),
          _c("section-challenge-duration"),
          _vm._v(" "),
          _c("section-inscription")
        ],
        1
      ),
      _vm._v(" "),
      _c("app-footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/challengeKetoAyunoV4/footer.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/challengeKetoAyunoV4/footer.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer_vue_vue_type_template_id_3faf72ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=3faf72ab& */ "./resources/js/components/challengeKetoAyunoV4/footer.vue?vue&type=template&id=3faf72ab&");
/* harmony import */ var _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.vue?vue&type=script&lang=js& */ "./resources/js/components/challengeKetoAyunoV4/footer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VFooter */ "./node_modules/vuetify/lib/components/VFooter/VFooter.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _footer_vue_vue_type_template_id_3faf72ab___WEBPACK_IMPORTED_MODULE_0__.render,
  _footer_vue_vue_type_template_id_3faf72ab___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;


_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["default"],VFooter: vuetify_lib_components_VFooter__WEBPACK_IMPORTED_MODULE_5__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/challengeKetoAyunoV4/footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/challengeKetoAyunoV4/sections/challengeDuration.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/challengeKetoAyunoV4/sections/challengeDuration.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _challengeDuration_vue_vue_type_template_id_1e0ab906___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./challengeDuration.vue?vue&type=template&id=1e0ab906& */ "./resources/js/components/challengeKetoAyunoV4/sections/challengeDuration.vue?vue&type=template&id=1e0ab906&");
/* harmony import */ var _challengeDuration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./challengeDuration.vue?vue&type=script&lang=js& */ "./resources/js/components/challengeKetoAyunoV4/sections/challengeDuration.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _challengeDuration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _challengeDuration_vue_vue_type_template_id_1e0ab906___WEBPACK_IMPORTED_MODULE_0__.render,
  _challengeDuration_vue_vue_type_template_id_1e0ab906___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;


_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["default"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/challengeKetoAyunoV4/sections/challengeDuration.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/challengeKetoAyunoV4/sections/inscription.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/challengeKetoAyunoV4/sections/inscription.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inscription_vue_vue_type_template_id_2785fe87___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inscription.vue?vue&type=template&id=2785fe87& */ "./resources/js/components/challengeKetoAyunoV4/sections/inscription.vue?vue&type=template&id=2785fe87&");
/* harmony import */ var _inscription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inscription.vue?vue&type=script&lang=js& */ "./resources/js/components/challengeKetoAyunoV4/sections/inscription.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/VDialog.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/VForm.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VSpacer.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _inscription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _inscription_vue_vue_type_template_id_2785fe87___WEBPACK_IMPORTED_MODULE_0__.render,
  _inscription_vue_vue_type_template_id_2785fe87___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;













_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["default"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["default"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardActions,VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardText,VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardTitle,VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["default"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_9__["default"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__["default"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__["default"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_12__["default"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_13__["default"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_14__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/challengeKetoAyunoV4/sections/inscription.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/challengeKetoAyunoV4/sections/moreInfo.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/challengeKetoAyunoV4/sections/moreInfo.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _moreInfo_vue_vue_type_template_id_0c3a43f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moreInfo.vue?vue&type=template&id=0c3a43f8& */ "./resources/js/components/challengeKetoAyunoV4/sections/moreInfo.vue?vue&type=template&id=0c3a43f8&");
/* harmony import */ var _moreInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moreInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/challengeKetoAyunoV4/sections/moreInfo.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _moreInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _moreInfo_vue_vue_type_template_id_0c3a43f8___WEBPACK_IMPORTED_MODULE_0__.render,
  _moreInfo_vue_vue_type_template_id_0c3a43f8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;



_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["default"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__["default"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/challengeKetoAyunoV4/sections/moreInfo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/challengeKetoAyunoV4/sections/notSuitable.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/challengeKetoAyunoV4/sections/notSuitable.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _notSuitable_vue_vue_type_template_id_20360f89___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notSuitable.vue?vue&type=template&id=20360f89& */ "./resources/js/components/challengeKetoAyunoV4/sections/notSuitable.vue?vue&type=template&id=20360f89&");
/* harmony import */ var _notSuitable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notSuitable.vue?vue&type=script&lang=js& */ "./resources/js/components/challengeKetoAyunoV4/sections/notSuitable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _notSuitable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notSuitable_vue_vue_type_template_id_20360f89___WEBPACK_IMPORTED_MODULE_0__.render,
  _notSuitable_vue_vue_type_template_id_20360f89___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;



_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["default"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__["default"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/challengeKetoAyunoV4/sections/notSuitable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/challengeKetoAyunoV4/sections/presentation.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/challengeKetoAyunoV4/sections/presentation.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _presentation_vue_vue_type_template_id_7c991b7b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presentation.vue?vue&type=template&id=7c991b7b& */ "./resources/js/components/challengeKetoAyunoV4/sections/presentation.vue?vue&type=template&id=7c991b7b&");
/* harmony import */ var _presentation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presentation.vue?vue&type=script&lang=js& */ "./resources/js/components/challengeKetoAyunoV4/sections/presentation.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _presentation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _presentation_vue_vue_type_template_id_7c991b7b___WEBPACK_IMPORTED_MODULE_0__.render,
  _presentation_vue_vue_type_template_id_7c991b7b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/challengeKetoAyunoV4/sections/presentation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/ChallengeKetoAyunoV4.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/ChallengeKetoAyunoV4.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChallengeKetoAyunoV4_vue_vue_type_template_id_4ec0e86d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChallengeKetoAyunoV4.vue?vue&type=template&id=4ec0e86d& */ "./resources/js/pages/ChallengeKetoAyunoV4.vue?vue&type=template&id=4ec0e86d&");
/* harmony import */ var _ChallengeKetoAyunoV4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChallengeKetoAyunoV4.vue?vue&type=script&lang=js& */ "./resources/js/pages/ChallengeKetoAyunoV4.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VMain */ "./node_modules/vuetify/lib/components/VMain/VMain.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChallengeKetoAyunoV4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChallengeKetoAyunoV4_vue_vue_type_template_id_4ec0e86d___WEBPACK_IMPORTED_MODULE_0__.render,
  _ChallengeKetoAyunoV4_vue_vue_type_template_id_4ec0e86d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;

_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VMain: vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_4__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/ChallengeKetoAyunoV4.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VForm/VForm.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VForm/VForm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
/* harmony import */ var _mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/binds-attrs */ "./node_modules/vuetify/lib/mixins/binds-attrs/index.js");
/* harmony import */ var _mixins_registrable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/registrable */ "./node_modules/vuetify/lib/mixins/registrable/index.js");
// Mixins



/* @vue/component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_util_mixins__WEBPACK_IMPORTED_MODULE_0__["default"])(_mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__["default"], (0,_mixins_registrable__WEBPACK_IMPORTED_MODULE_2__.provide)('form')
/* @vue/component */
).extend({
  name: 'v-form',

  provide() {
    return {
      form: this
    };
  },

  inheritAttrs: false,
  props: {
    disabled: Boolean,
    lazyValidation: Boolean,
    readonly: Boolean,
    value: Boolean
  },
  data: () => ({
    inputs: [],
    watchers: [],
    errorBag: {}
  }),
  watch: {
    errorBag: {
      handler(val) {
        const errors = Object.values(val).includes(true);
        this.$emit('input', !errors);
      },

      deep: true,
      immediate: true
    }
  },
  methods: {
    watchInput(input) {
      const watcher = input => {
        return input.$watch('hasError', val => {
          this.$set(this.errorBag, input._uid, val);
        }, {
          immediate: true
        });
      };

      const watchers = {
        _uid: input._uid,
        valid: () => {},
        shouldValidate: () => {}
      };

      if (this.lazyValidation) {
        // Only start watching inputs if we need to
        watchers.shouldValidate = input.$watch('shouldValidate', val => {
          if (!val) return; // Only watch if we're not already doing it

          if (this.errorBag.hasOwnProperty(input._uid)) return;
          watchers.valid = watcher(input);
        });
      } else {
        watchers.valid = watcher(input);
      }

      return watchers;
    },

    /** @public */
    validate() {
      return this.inputs.filter(input => !input.validate(true)).length === 0;
    },

    /** @public */
    reset() {
      this.inputs.forEach(input => input.reset());
      this.resetErrorBag();
    },

    resetErrorBag() {
      if (this.lazyValidation) {
        // Account for timeout in validatable
        setTimeout(() => {
          this.errorBag = {};
        }, 0);
      }
    },

    /** @public */
    resetValidation() {
      this.inputs.forEach(input => input.resetValidation());
      this.resetErrorBag();
    },

    register(input) {
      this.inputs.push(input);
      this.watchers.push(this.watchInput(input));
    },

    unregister(input) {
      const found = this.inputs.find(i => i._uid === input._uid);
      if (!found) return;
      const unwatch = this.watchers.find(i => i._uid === found._uid);

      if (unwatch) {
        unwatch.valid();
        unwatch.shouldValidate();
      }

      this.watchers = this.watchers.filter(i => i._uid !== found._uid);
      this.inputs = this.inputs.filter(i => i._uid !== found._uid);
      this.$delete(this.errorBag, found._uid);
    }

  },

  render(h) {
    return h('form', {
      staticClass: 'v-form',
      attrs: {
        novalidate: true,
        ...this.attrs$
      },
      on: {
        submit: e => this.$emit('submit', e)
      }
    }, this.$slots.default);
  }

}));
//# sourceMappingURL=VForm.js.map

/***/ })

}]);