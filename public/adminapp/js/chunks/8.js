(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Transaction_BarangayCertificationCohabitationB3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Transaction/BarangayCertificationCohabitationB3 */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationCohabitationB3.vue");
/* harmony import */ var _Transaction_BarangayCertificationIndigencyB4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Transaction/BarangayCertificationIndigencyB4 */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationIndigencyB4.vue");
/* harmony import */ var _Transaction_BarangayCertificationNonResidentB2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Transaction/BarangayCertificationNonResidentB2 */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationNonResidentB2.vue");
/* harmony import */ var _Transaction_BarangayCertificationOathB6__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Transaction/BarangayCertificationOathB6 */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationOathB6.vue");
/* harmony import */ var _Transaction_BarangayCertificationRaB5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Transaction/BarangayCertificationRaB5 */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationRaB5.vue");
/* harmony import */ var _Transaction_BarangayCertificationResidentB1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Transaction/BarangayCertificationResidentB1 */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationResidentB1.vue");
/* harmony import */ var _Transaction_BarangayClearanceActivityA2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Transaction/BarangayClearanceActivityA2 */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceActivityA2.vue");
/* harmony import */ var _Transaction_BarangayClearanceResidentA1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Transaction/BarangayClearanceResidentA1 */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceResidentA1.vue");
/* harmony import */ var vue_html2pdf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-html2pdf */ "./node_modules/vue-html2pdf/dist/vue-html2pdf.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BarangayCertificationCohabitationB3: _Transaction_BarangayCertificationCohabitationB3__WEBPACK_IMPORTED_MODULE_1__["default"],
    BarangayCertificationIndigencyB4: _Transaction_BarangayCertificationIndigencyB4__WEBPACK_IMPORTED_MODULE_2__["default"],
    BarangayCertificationNonResidentB2: _Transaction_BarangayCertificationNonResidentB2__WEBPACK_IMPORTED_MODULE_3__["default"],
    BarangayCertificationOathB6: _Transaction_BarangayCertificationOathB6__WEBPACK_IMPORTED_MODULE_4__["default"],
    BarangayCertificationRaB5: _Transaction_BarangayCertificationRaB5__WEBPACK_IMPORTED_MODULE_5__["default"],
    BarangayCertificationResidentB1: _Transaction_BarangayCertificationResidentB1__WEBPACK_IMPORTED_MODULE_6__["default"],
    BarangayClearanceActivityA2: _Transaction_BarangayClearanceActivityA2__WEBPACK_IMPORTED_MODULE_7__["default"],
    BarangayClearanceResidentA1: _Transaction_BarangayClearanceResidentA1__WEBPACK_IMPORTED_MODULE_8__["default"],
    VueHtml2pdf: vue_html2pdf__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      status: '',
      activeField: '',
      barangay_clearance_data: [],
      is_barangay: 0,
      transaction_required: false,
      resident_required: false,
      transaction_name: null,
      result: {},
      loading: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('BarangayPermitSingle', ['entry', 'lists', 'data'])),
  mounted: function mounted() {
    this.fetchCreateData();
  },
  beforeDestroy: function beforeDestroy() {
    this.resetState();
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('BarangayPermitSingle', ['storeData', 'fetchCreateData', 'resetState', 'setTransaction', 'setResident'])), {}, {
    updateTransaction: function updateTransaction(value) {
      this.transaction_required = true;
      this.setTransaction(value);
    },
    updateResident: function updateResident(value) {
      this.resident_required = true;
      this.setResident(value);
    },
    downloads: function downloads() {
      this.$refs.html2Pdf.generatePdf();
      axios.post('transaction/print-data', this.entry).then(function (response) {});
    },
    submitForm: function submitForm() {
      var _this = this;

      axios.post('transaction', this.entry).then(function (response) {
        _this.result = response.data;
        _this.is_barangay = _this.entry.transaction.id;
        _this.transaction_name = _this.entry.transaction.transaction_type_name + '-' + _this.entry.resident.full_name;
      })["catch"](function (error) {
        console.log(error.response.data);

        _this.$swal({
          title: 'Error',
          text: 'Resident Name is Required',
          type: 'warning',
          showCancelButton: true,
          focusCancel: true,
          reverseButtons: true
        });

        _this.errors = true;
      })["finally"](function () {
        _this.loading = false;
      });
    },
    focusField: function focusField(name) {
      this.activeField = name;
    },
    clearFocus: function clearFocus() {
      this.activeField = '';
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationCohabitationB3.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationCohabitationB3.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      date: new Date()
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationIndigencyB4.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationIndigencyB4.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var easy_vue_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! easy-vue-camera */ "./node_modules/easy-vue-camera/dist/EasyCamera.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'v-easy-camera': easy_vue_camera__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      date: new Date(),
      picture: '',
      startCamera: true
    };
  },
  methods: {
    startPicture: function startPicture() {
      this.$refs.camera.snap();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationNonResidentB2.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationNonResidentB2.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      date: new Date()
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationOathB6.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationOathB6.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      date: new Date()
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationRaB5.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationRaB5.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var easy_vue_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! easy-vue-camera */ "./node_modules/easy-vue-camera/dist/EasyCamera.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'v-easy-camera': easy_vue_camera__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      picture: '',
      startCamera: true,
      date: new Date()
    };
  },
  methods: {
    startPicture: function startPicture() {
      this.$refs.camera.snap();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationResidentB1.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationResidentB1.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var easy_vue_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! easy-vue-camera */ "./node_modules/easy-vue-camera/dist/EasyCamera.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'v-easy-camera': easy_vue_camera__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      picture: '',
      startCamera: true,
      date: new Date()
    };
  },
  methods: {
    startPicture: function startPicture() {
      this.$refs.camera.snap();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceActivityA2.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceActivityA2.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      date: new Date()
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceResidentA1.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceResidentA1.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var easy_vue_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! easy-vue-camera */ "./node_modules/easy-vue-camera/dist/EasyCamera.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'v-easy-camera': easy_vue_camera__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      picture: '',
      startCamera: true,
      date: new Date()
    };
  },
  methods: {
    startPicture: function startPicture() {
      this.$refs.camera.snap();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationCohabitationB3.vue?vue&type=style&index=0&id=5a2515ce&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationCohabitationB3.vue?vue&type=style&index=0&id=5a2515ce&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.pdf-item[data-v-5a2515ce] {\r\n  line-height: 1.2 !important;\r\n  margin-top: -32px;\n}\n.bottom-image[data-v-5a2515ce] {\r\n  margin-top: 4%;\r\n  position: absolute;\r\n  width: 100%;\r\n  margin-left: -20px;\n}\n.header-image[data-v-5a2515ce] {\r\n  height: 100px;\r\n  width: 100%;\r\n  position: absolute;\r\n  margin-top: -1.9%;\r\n  margin-left: -20px;\n}\n.vl[data-v-5a2515ce] {\r\n  border-left: 3px solid black;\r\n  height: 780%;\n}\n.barangay-header-line[data-v-5a2515ce] {\r\n  height: 6px;\r\n  border-width: 0;\r\n  color: gray;\r\n  background-color: gray;\r\n  margin-top: -40px;\n}\n.barangay-wrap[data-v-5a2515ce] {\r\n  margin-top: 70px;\n}\n.barangay-watermark[data-v-5a2515ce] {\r\n  margin-top: 25%;\r\n  opacity: 0.2;\r\n  position: absolute;\r\n  margin-left: 25%;\n}\n.barangay-finger-print[data-v-5a2515ce] {\r\n  margin-right: 10%;\r\n  margin-top: 2%;\n}\n.barangay-body-paragraph[data-v-5a2515ce] {\r\n  margin-top: 11%;\r\n  font-weight: 500;\n}\n.form-check .form-check-label span[data-v-5a2515ce] {\r\n  margin-top: -5px;\n}\ninput[data-v-5a2515ce] {\r\n  outline: 0;\r\n  border-width: 0 0 2px;\r\n  opacity: 1;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationIndigencyB4.vue?vue&type=style&index=0&id=b52df0e4&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationIndigencyB4.vue?vue&type=style&index=0&id=b52df0e4&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.pdf-item[data-v-b52df0e4] {\r\n  line-height: 1.2 !important;\r\n  margin-top: -32px;\n}\n.bottom-image[data-v-b52df0e4] {\r\n  margin-top: 4%;\r\n  position: absolute;\r\n  width: 100%;\r\n  margin-left: -20px;\n}\n.header-image[data-v-b52df0e4] {\r\n  height: 100px;\r\n  width: 100%;\r\n  position: absolute;\r\n  margin-top: -1.9%;\r\n  margin-left: -20px;\n}\n.vl[data-v-b52df0e4] {\r\n  border-left: 3px solid black;\r\n  height: 780%;\n}\n.barangay-header-line[data-v-b52df0e4] {\r\n  height: 6px;\r\n  border-width: 0;\r\n  color: gray;\r\n  background-color: gray;\r\n  margin-top: -40px;\n}\n.barangay-wrap[data-v-b52df0e4] {\r\n  margin-top: 70px;\n}\n.barangay-watermark[data-v-b52df0e4] {\r\n  margin-top: 25%;\r\n  opacity: 0.2;\r\n  position: absolute;\r\n  margin-left: 25%;\n}\n.barangay-finger-print[data-v-b52df0e4] {\r\n  margin-right: 10%;\r\n  margin-top: 2%;\n}\n.barangay-body-paragraph[data-v-b52df0e4] {\r\n  margin-top: 11%;\r\n  font-weight: 500;\n}\n.form-check .form-check-label span[data-v-b52df0e4] {\r\n  margin-top: -5px;\n}\ninput[data-v-b52df0e4] {\r\n  outline: 0;\r\n  border-width: 0 0 2px;\r\n  opacity: 1;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationNonResidentB2.vue?vue&type=style&index=0&id=5905c926&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationNonResidentB2.vue?vue&type=style&index=0&id=5905c926&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.pdf-item[data-v-5905c926] {\r\n  line-height: 1.2 !important;\r\n  margin-top: -32px;\n}\n.bottom-image[data-v-5905c926] {\r\n  margin-top: 4%;\r\n  position: absolute;\r\n  width: 100%;\r\n  margin-left: -20px;\n}\n.header-image[data-v-5905c926] {\r\n  height: 100px;\r\n  width: 100%;\r\n  position: absolute;\r\n  margin-top: -1.9%;\r\n  margin-left: -20px;\n}\n.vl[data-v-5905c926] {\r\n  border-left: 3px solid black;\r\n  height: 780%;\n}\n.barangay-header-line[data-v-5905c926] {\r\n  height: 6px;\r\n  border-width: 0;\r\n  color: gray;\r\n  background-color: gray;\r\n  margin-top: -40px;\n}\n.barangay-wrap[data-v-5905c926] {\r\n  margin-top: 70px;\n}\n.barangay-watermark[data-v-5905c926] {\r\n  margin-top: 25%;\r\n  opacity: 0.2;\r\n  position: absolute;\r\n  margin-left: 25%;\n}\n.barangay-finger-print[data-v-5905c926] {\r\n  margin-right: 10%;\r\n  margin-top: 2%;\n}\n.barangay-body-paragraph[data-v-5905c926] {\r\n  margin-top: 11%;\r\n  font-weight: 500;\n}\n.form-check .form-check-label span[data-v-5905c926] {\r\n  margin-top: -5px;\n}\ninput[data-v-5905c926] {\r\n  outline: 0;\r\n  border-width: 0 0 2px;\r\n  opacity: 1;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationOathB6.vue?vue&type=style&index=0&id=95a4342c&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationOathB6.vue?vue&type=style&index=0&id=95a4342c&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.pdf-item[data-v-95a4342c] {\r\n  line-height: 1.2 !important;\r\n  margin-top: -32px;\n}\n.bottom-image[data-v-95a4342c] {\r\n  margin-top: 4%;\r\n  position: absolute;\r\n  width: 100%;\r\n  margin-left: -20px;\n}\n.header-image[data-v-95a4342c] {\r\n  height: 100px;\r\n  width: 100%;\r\n  position: absolute;\r\n  margin-top: -1.9%;\r\n  margin-left: -20px;\n}\n.vl[data-v-95a4342c] {\r\n  border-left: 3px solid black;\r\n  height: 780%;\n}\n.barangay-header-line[data-v-95a4342c] {\r\n  height: 6px;\r\n  border-width: 0;\r\n  color: gray;\r\n  background-color: gray;\r\n  margin-top: -40px;\n}\n.barangay-wrap[data-v-95a4342c] {\r\n  margin-top: 70px;\n}\n.barangay-watermark[data-v-95a4342c] {\r\n  margin-top: 25%;\r\n  opacity: 0.2;\r\n  position: absolute;\n}\n.barangay-finger-print[data-v-95a4342c] {\r\n  margin-right: 10%;\r\n  margin-top: 2%;\n}\n.barangay-body-paragraph[data-v-95a4342c] {\r\n  margin-top: 11%;\r\n  font-weight: 500;\n}\n.form-check .form-check-label span[data-v-95a4342c] {\r\n  margin-top: -5px;\n}\ninput[data-v-95a4342c] {\r\n  outline: 0;\r\n  border-width: 0 0 2px;\r\n  opacity: 1;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationRaB5.vue?vue&type=style&index=0&id=8deb5fdc&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationRaB5.vue?vue&type=style&index=0&id=8deb5fdc&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.pdf-item[data-v-8deb5fdc] {\r\n  line-height: 1.2 !important;\r\n  margin-top: -32px;\n}\n.bottom-image[data-v-8deb5fdc] {\r\n  position: absolute;\r\n  width: 100%;\r\n  margin-left: -20px;\n}\n.header-image[data-v-8deb5fdc] {\r\n  height: 100px;\r\n  width: 100%;\r\n  position: absolute;\r\n  margin-top: -1.9%;\r\n  margin-left: -20px;\n}\n.vl[data-v-8deb5fdc] {\r\n  border-left: 3px solid black;\r\n  height: 780%;\n}\n.barangay-header-line[data-v-8deb5fdc] {\r\n  height: 6px;\r\n  border-width: 0;\r\n  color: gray;\r\n  background-color: gray;\r\n  margin-top: -40px;\n}\n.barangay-wrap[data-v-8deb5fdc] {\r\n  margin-top: 70px;\n}\n.barangay-watermark[data-v-8deb5fdc] {\r\n  margin-top: 25%;\r\n  opacity: 0.2;\r\n  position: absolute;\n}\n.barangay-finger-print[data-v-8deb5fdc] {\r\n  margin-right: 10%;\r\n  margin-top: 2%;\n}\n.barangay-body-paragraph[data-v-8deb5fdc] {\r\n  margin-top: 11%;\r\n  font-weight: 500;\n}\n.form-check .form-check-label span[data-v-8deb5fdc] {\r\n  margin-top: -5px;\n}\ninput[data-v-8deb5fdc] {\r\n  outline: 0;\r\n  border-width: 0 0 2px;\r\n  opacity: 1;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationResidentB1.vue?vue&type=style&index=0&id=6b1f5b22&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationResidentB1.vue?vue&type=style&index=0&id=6b1f5b22&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.pdf-item[data-v-6b1f5b22] {\r\n  line-height: 1.2 !important;\r\n  margin-top: -32px;\n}\n.bottom-image[data-v-6b1f5b22] {\r\n  margin-top: -2%;\r\n  position: absolute;\r\n  height: 10%;\r\n  width: 100%;\r\n  margin-left: -20px;\n}\n.header-image[data-v-6b1f5b22] {\r\n  height: 100px;\r\n  width: 100%;\r\n  position: absolute;\r\n  margin-top: -1.9%;\r\n  margin-left: -20px;\n}\n.vl[data-v-6b1f5b22] {\r\n  border-left: 3px solid black;\r\n  height: 780%;\n}\n.barangay-header-line[data-v-6b1f5b22] {\r\n  height: 6px;\r\n  border-width: 0;\r\n  color: gray;\r\n  background-color: gray;\r\n  margin-top: -40px;\n}\n.barangay-wrap[data-v-6b1f5b22] {\r\n  margin-top: 70px;\n}\n.barangay-watermark[data-v-6b1f5b22] {\r\n  margin-top: 25%;\r\n  opacity: 0.2;\r\n  position: absolute;\r\n  margin-left: 25%;\n}\n.barangay-finger-print[data-v-6b1f5b22] {\r\n  margin-right: 10%;\r\n  margin-top: 2%;\n}\n.barangay-body-paragraph[data-v-6b1f5b22] {\r\n  margin-top: 11%;\r\n  font-weight: 500;\n}\n.form-check .form-check-label span[data-v-6b1f5b22] {\r\n  margin-top: -5px;\n}\ninput[data-v-6b1f5b22] {\r\n  outline: 0;\r\n  border-width: 0 0 2px;\r\n  opacity: 1;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceActivityA2.vue?vue&type=style&index=0&id=213d089c&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceActivityA2.vue?vue&type=style&index=0&id=213d089c&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.pdf-item[data-v-213d089c] {\r\n  line-height: 1.2 !important;\r\n  margin-top: -32px;\n}\n.bottom-image[data-v-213d089c] {\r\n  margin-top: 4%;\r\n  position: absolute;\r\n  width: 100%;\r\n  margin-left: -20px;\n}\n.header-image[data-v-213d089c] {\r\n  height: 100px;\r\n  width: 100%;\r\n  position: absolute;\r\n  margin-top: -1.9%;\r\n  margin-left: -20px;\n}\n.vl[data-v-213d089c] {\r\n  border-left: 3px solid black;\r\n  height: 780%;\n}\n.barangay-header-line[data-v-213d089c] {\r\n  height: 6px;\r\n  border-width: 0;\r\n  color: gray;\r\n  background-color: gray;\r\n  margin-top: -40px;\n}\n.barangay-wrap[data-v-213d089c] {\r\n  margin-top: 70px;\n}\n.barangay-watermark[data-v-213d089c] {\r\n  margin-top: 25%;\r\n  opacity: 0.2;\r\n  position: absolute;\r\n  margin-left: 25%;\n}\n.barangay-finger-print[data-v-213d089c] {\r\n  margin-right: 10%;\r\n  margin-top: 2%;\n}\n.barangay-body-paragraph[data-v-213d089c] {\r\n  margin-top: 11%;\r\n  font-weight: 500;\n}\n.form-check .form-check-label span[data-v-213d089c] {\r\n  margin-top: -5px;\n}\ninput[data-v-213d089c] {\r\n  outline: 0;\r\n  border-width: 0 0 2px;\r\n  opacity: 1;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceResidentA1.vue?vue&type=style&index=0&id=633f6c9c&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceResidentA1.vue?vue&type=style&index=0&id=633f6c9c&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.pdf-item[data-v-633f6c9c] {\r\n  line-height: 1.2 !important;\r\n  margin-top: -32px;\n}\n.bottom-image[data-v-633f6c9c] {\r\n  position: absolute;\r\n  height: 10%;\r\n  width: 100%;\r\n  margin-left: -20px;\n}\n.header-image[data-v-633f6c9c] {\r\n  height: 100px;\r\n  width: 100%;\r\n  position: absolute;\r\n  margin-top: -1.9%;\r\n  margin-left: -20px;\n}\n.vl[data-v-633f6c9c] {\r\n  border-left: 3px solid black;\r\n  height: 780%;\n}\n.barangay-header-line[data-v-633f6c9c] {\r\n  height: 6px;\r\n  border-width: 0;\r\n  color: gray;\r\n  background-color: gray;\r\n  margin-top: -40px;\n}\n.barangay-wrap[data-v-633f6c9c] {\r\n  margin-top: 70px;\n}\n.barangay-watermark[data-v-633f6c9c] {\r\n  margin-top: 25%;\r\n  opacity: 0.2;\r\n  position: absolute;\r\n  margin-left: 25%;\n}\n.barangay-finger-print[data-v-633f6c9c] {\r\n  margin-right: 10%;\r\n  margin-top: 2%;\n}\n.barangay-body-paragraph[data-v-633f6c9c] {\r\n  margin-top: 11%;\r\n  font-weight: 500;\n}\n.form-check .form-check-label span[data-v-633f6c9c] {\r\n  margin-top: -5px;\n}\ninput[data-v-633f6c9c] {\r\n  outline: 0;\r\n  border-width: 0 0 2px;\r\n  opacity: 1;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationCohabitationB3.vue?vue&type=style&index=0&id=5a2515ce&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationCohabitationB3.vue?vue&type=style&index=0&id=5a2515ce&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertificationCohabitationB3.vue?vue&type=style&index=0&id=5a2515ce&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationCohabitationB3.vue?vue&type=style&index=0&id=5a2515ce&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationIndigencyB4.vue?vue&type=style&index=0&id=b52df0e4&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationIndigencyB4.vue?vue&type=style&index=0&id=b52df0e4&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertificationIndigencyB4.vue?vue&type=style&index=0&id=b52df0e4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationIndigencyB4.vue?vue&type=style&index=0&id=b52df0e4&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationNonResidentB2.vue?vue&type=style&index=0&id=5905c926&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationNonResidentB2.vue?vue&type=style&index=0&id=5905c926&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertificationNonResidentB2.vue?vue&type=style&index=0&id=5905c926&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationNonResidentB2.vue?vue&type=style&index=0&id=5905c926&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationOathB6.vue?vue&type=style&index=0&id=95a4342c&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationOathB6.vue?vue&type=style&index=0&id=95a4342c&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertificationOathB6.vue?vue&type=style&index=0&id=95a4342c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationOathB6.vue?vue&type=style&index=0&id=95a4342c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationRaB5.vue?vue&type=style&index=0&id=8deb5fdc&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationRaB5.vue?vue&type=style&index=0&id=8deb5fdc&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertificationRaB5.vue?vue&type=style&index=0&id=8deb5fdc&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationRaB5.vue?vue&type=style&index=0&id=8deb5fdc&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationResidentB1.vue?vue&type=style&index=0&id=6b1f5b22&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationResidentB1.vue?vue&type=style&index=0&id=6b1f5b22&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertificationResidentB1.vue?vue&type=style&index=0&id=6b1f5b22&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationResidentB1.vue?vue&type=style&index=0&id=6b1f5b22&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceActivityA2.vue?vue&type=style&index=0&id=213d089c&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceActivityA2.vue?vue&type=style&index=0&id=213d089c&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayClearanceActivityA2.vue?vue&type=style&index=0&id=213d089c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceActivityA2.vue?vue&type=style&index=0&id=213d089c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceResidentA1.vue?vue&type=style&index=0&id=633f6c9c&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceResidentA1.vue?vue&type=style&index=0&id=633f6c9c&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayClearanceResidentA1.vue?vue&type=style&index=0&id=633f6c9c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceResidentA1.vue?vue&type=style&index=0&id=633f6c9c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=template&id=47e5b5d0&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=template&id=47e5b5d0&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container-fluid" },
    [
      _c(
        "form",
        {
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.submitForm.apply(null, arguments)
            },
          },
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "card" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-5" },
                      [
                        _c("h5", [_vm._v("Transaction Type")]),
                        _vm._v(" "),
                        _c("v-select", {
                          key: "transaction_id-field",
                          staticClass: "form-control popcom-input",
                          attrs: {
                            name: "transaction",
                            label: "transaction_type_name",
                            value: _vm.entry.transaction,
                            options: _vm.lists.transaction,
                            required: "",
                          },
                          on: {
                            input: _vm.updateTransaction,
                            focus: function ($event) {
                              return _vm.focusField("transaction")
                            },
                            blur: _vm.clearFocus,
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "search",
                              fn: function (ref) {
                                var attributes = ref.attributes
                                var events = ref.events
                                return [
                                  _c(
                                    "input",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          staticClass: "vs__search",
                                          attrs: {
                                            required: !_vm.transaction_required,
                                          },
                                        },
                                        "input",
                                        attributes,
                                        false
                                      ),
                                      events
                                    )
                                  ),
                                ]
                              },
                            },
                          ]),
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-5" },
                      [
                        _c("h5", [_vm._v("Resident Name")]),
                        _vm._v(" "),
                        _c("v-select", {
                          key: "resident_id-field",
                          staticClass: "form-control popcom-input",
                          attrs: {
                            name: "resident",
                            label: "full_name",
                            value: _vm.entry.resident,
                            options: _vm.lists.resident,
                          },
                          on: {
                            input: _vm.updateResident,
                            focus: function ($event) {
                              return _vm.focusField("resident")
                            },
                            blur: _vm.clearFocus,
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-2 mt-3" },
                      [
                        _c(
                          "vue-button-spinner",
                          {
                            staticClass: "btn-success",
                            attrs: {
                              status: _vm.status,
                              isLoading: _vm.loading,
                              disabled: _vm.loading,
                            },
                          },
                          [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t\tSearch\n\t\t\t\t\t\t\t\t"
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-success", on: { click: _vm.downloads } },
        [_vm._v("Print")]
      ),
      _vm._v(" "),
      _c(
        "vue-html2pdf",
        {
          ref: "html2Pdf",
          attrs: {
            "show-layout": false,
            "float-layout": false,
            "enable-download": true,
            "preview-modal": true,
            "paginate-elements-by-height": 2000,
            filename: _vm.transaction_name,
            "pdf-quality": 2,
            "manual-pagination": false,
            "pdf-format": "a4",
            "pdf-orientation": "portrait",
            "pdf-content-width": "900px",
          },
          on: {
            progress: function ($event) {
              return _vm.onProgress($event)
            },
            hasStartedGeneration: function ($event) {
              return _vm.hasStartedGeneration()
            },
            hasGenerated: function ($event) {
              return _vm.hasGenerated($event)
            },
          },
        },
        [
          _c(
            "section",
            { attrs: { slot: "pdf-content" }, slot: "pdf-content" },
            [
              _vm.is_barangay === 1
                ? _c("barangay-clearance-resident-a1", {
                    attrs: { data: _vm.result },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.is_barangay === 2
                ? _c("barangay-certification-resident-b1", {
                    attrs: { data: _vm.result },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.is_barangay === 3
                ? _c("barangay-clearance-activity-a2", {
                    attrs: { data: _vm.result },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.is_barangay === 4
                ? _c("barangay-certification-non-resident-b2", {
                    attrs: { data: _vm.result },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.is_barangay === 5
                ? _c("barangay-certification-cohabitation-b3", {
                    attrs: { data: _vm.result },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.is_barangay === 6
                ? _c("barangay-certification-indigency-b4", {
                    attrs: { data: _vm.result },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.is_barangay === 7
                ? _c("barangay-certification-ra-b5", {
                    attrs: { data: _vm.result },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.is_barangay === 8
                ? _c("barangay-certification-oath-b6", {
                    attrs: { data: _vm.result },
                  })
                : _vm._e(),
            ],
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header card-header-success card-header-icon" },
      [
        _c("div", { staticClass: "card-icon" }, [
          _c("i", { staticClass: "material-icons" }, [_vm._v("assignment")]),
        ]),
        _vm._v(" "),
        _c("h4", { staticClass: "card-title" }, [
          _vm._v("\n\t\t\t\t\t\t\tTable\n\t\t\t\t\t\t\t"),
          _c("strong", [_vm._v("Transaction")]),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationCohabitationB3.vue?vue&type=template&id=5a2515ce&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationCohabitationB3.vue?vue&type=template&id=5a2515ce&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "pdf-item" }, [
    _c("div", { staticClass: "card", staticStyle: { width: "50rem" } }, [
      _c(
        "div",
        { staticClass: "card-body", staticStyle: { height: "1093px" } },
        [
          _c("img", {
            staticClass: "header-image",
            attrs: { src: "/transaction/header.png" },
          }),
          _vm._v(" "),
          _c("div", { staticClass: "barangay-wrap" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass: "col-md-3",
                  staticStyle: {
                    "border-right": "3px solid black",
                    "font-size": "0.7rem",
                  },
                },
                [
                  _c(
                    "b",
                    [
                      _c(
                        "center",
                        { staticStyle: { "margin-top": "63%" } },
                        [
                          _vm._l(
                            _vm.data.barangay_sanggunian,
                            function (sanggunian) {
                              return _c("div", { key: sanggunian.id }, [
                                sanggunian.barangay_sanggunian_category.id ===
                                  6 ||
                                sanggunian.barangay_sanggunian_category.id === 5
                                  ? _c("p", [
                                      _c(
                                        "b",
                                        {
                                          staticStyle: {
                                            "text-transform": "uppercase",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(sanggunian.barangay_name)
                                          ),
                                        ]
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            "font-size": "0.6rem",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              sanggunian
                                                .barangay_sanggunian_category
                                                .category_name
                                            )
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _c("p", [
                                      _c(
                                        "b",
                                        {
                                          staticStyle: {
                                            "text-transform": "uppercase",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "Hon." +
                                              _vm._s(sanggunian.barangay_name)
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            "font-size": "0.6rem",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              sanggunian
                                                .barangay_sanggunian_category
                                                .category_name
                                            )
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("br"),
                                    ]),
                              ])
                            }
                          ),
                          _vm._v(" "),
                          _c("div", [
                            _c("br"),
                            _c("br"),
                            _vm._v(" "),
                            _c("b", [_vm._v("Address: ")]),
                            _c("br"),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(_vm._s(_vm.data.barangay.address)),
                            ]),
                            _vm._v(" "),
                            _c("b", [_vm._v("Hotline No:")]),
                            _c("br"),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(_vm._s(_vm.data.barangay.hotline_no)),
                            ]),
                          ]),
                        ],
                        2
                      ),
                    ],
                    1
                  ),
                ]
              ),
              _vm._v(" "),
              _c("img", {
                staticClass: "barangay-watermark",
                staticStyle: { width: "574px" },
                attrs: { src: _vm.data.logo, alt: "" },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-9" }, [
                _c("div", { staticClass: "barangay-content" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("img", {
                        staticClass: "pull-left",
                        staticStyle: { width: "96px", "margin-right": "18px" },
                        attrs: { src: _vm.data.logo },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "text-center" }, [
                        _vm._m(0),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticStyle: {
                              "font-weight": "900",
                              "text-transform": "uppercase",
                              "margin-top": "-6%",
                              "margin-left": "8px",
                            },
                          },
                          [
                            _vm._v(
                              "\n                      BARANGAY " +
                                _vm._s(_vm.data.barangay.barangay_name) +
                                "\n                    "
                            ),
                          ]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "container",
                        staticStyle: { "margin-top": "-9%" },
                      },
                      [
                        _c("div", { staticClass: "barangay-body-paragraph" }, [
                          _c("p", { staticClass: "text-justify" }, [
                            _c("b", [
                              _vm._v(
                                "\n                        This is to certify that " +
                                  _vm._s(_vm.data.full_name) +
                                  " of legal\n                        age, is a bonafide and\n                        " +
                                  _vm._s(_vm.data.resident_status) +
                                  " resident of this barangay.\n                        He/She is residing at " +
                                  _vm._s(_vm.data.address) +
                                  ", Barangay\n                        " +
                                  _vm._s(_vm.data.barangay.barangay_name) +
                                  ", Calamba City, Laguna.\n                      "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _vm._m(3),
                          _vm._v(" "),
                          _vm._m(4),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-justify mt-3" }, [
                            _vm._v(
                              "\n                      Given this\n                      " +
                                _vm._s(
                                  this.date.toLocaleString("en-us", {
                                    month: "long",
                                  })
                                ) +
                                "\n                      " +
                                _vm._s(this.date.getDate()) +
                                ", " +
                                _vm._s(this.date.getFullYear()) +
                                " at\n                      Barangay " +
                                _vm._s(_vm.data.barangay.barangay_name) +
                                ", Calamba City\n                      Laguna\n                    "
                            ),
                          ]),
                          _vm._v(" "),
                          _vm._m(5),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "pull-left" }, [
                                _vm._v("Issued by:"),
                              ]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("p", [
                                _c(
                                  "b",
                                  {
                                    staticStyle: {
                                      "text-transform": "uppercase",
                                    },
                                  },
                                  [
                                    _c("u", [
                                      _vm._v(
                                        "\n                              " +
                                          _vm._s(
                                            _vm.data.barangay_sanggunian[
                                              _vm.data.barangay_sanggunian
                                                .length - 2
                                            ].barangay_name
                                          ) +
                                          "\n                            "
                                      ),
                                    ]),
                                  ]
                                ),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(
                                  "\n                          Barangay Secretary\n                        "
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "pull-left" }, [
                                _vm._v("Approved by:"),
                              ]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("p", [
                                _c(
                                  "b",
                                  {
                                    staticStyle: {
                                      "text-transform": "uppercase",
                                    },
                                  },
                                  [
                                    _c("u", [
                                      _vm._v(
                                        "HON.\n                              " +
                                          _vm._s(
                                            _vm.data.barangay_sanggunian[0]
                                              .barangay_name
                                          )
                                      ),
                                    ]),
                                  ]
                                ),
                                _c("br"),
                                _vm._v(
                                  "\n                          Barangay Chairman\n                        "
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _vm._m(6),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticStyle: { "font-weight": "700" } }, [
      _c("b", [_vm._v("REPUBLIC OF THE PHILIPPINES")]),
      _vm._v(" "),
      _c("b", [_vm._v("PROVINCE OF LAGUNA")]),
      _c("br"),
      _vm._v(" "),
      _c("b", [_vm._v("CITY OF CALAMBA")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("img", {
        staticClass: "pull-left",
        staticStyle: { width: "100px", "margin-left": "20px" },
        attrs: { src: "/transaction/transparent_logo.png" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12 text-center" }, [
      _c(
        "h3",
        {
          staticStyle: {
            "font-weight": "600",
            "font-size": "1.5rem",
            "margin-top": "-12px",
          },
        },
        [
          _vm._v("\n                    BARANGAY CERTIFICATION"),
          _c("br"),
          _vm._v("\n                    (Cohabitation)\n                  "),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-justify" }, [
      _c("b", [
        _vm._v(
          "\n                        This is to certify further that the aforementioned\n                        person is the live-in partner of\n                        "
        ),
        _c("input", { staticStyle: { width: "60%" }, attrs: { type: "text" } }),
        _vm._v(
          ". They are\n                        living together since\n                        "
        ),
        _c("input", { staticStyle: { width: "30%" }, attrs: { type: "text" } }),
        _vm._v(".\n                      "),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-justify mt-4" }, [
      _c("b", [
        _vm._v(
          "\n                        This certification is being issued for whatever legal\n                        purposes this may best serve.\n                      "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("p", [_vm._v("Affirmation of the requesting party:")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n                        _____________________________________ "
        ),
        _c("br"),
        _vm._v(
          "(Signature\n                        over Printer Name and Date)\n                      "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer" }, [
      _c("img", {
        staticClass: "bottom-image",
        attrs: { src: "/transaction/footer_seal.png" },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationIndigencyB4.vue?vue&type=template&id=b52df0e4&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationIndigencyB4.vue?vue&type=template&id=b52df0e4&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "pdf-item" }, [
    _c("div", { staticClass: "card", staticStyle: { width: "50rem" } }, [
      _c(
        "div",
        { staticClass: "card-body", staticStyle: { height: "1093px" } },
        [
          _c("img", {
            staticClass: "header-image",
            attrs: { src: "/transaction/header.png" },
          }),
          _vm._v(" "),
          _c("div", { staticClass: "barangay-wrap" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass: "col-md-3",
                  staticStyle: {
                    "border-right": "3px solid black",
                    "font-size": "0.7rem",
                  },
                },
                [
                  _c(
                    "b",
                    [
                      _c(
                        "center",
                        { staticStyle: { "margin-top": "63%" } },
                        [
                          _vm._l(
                            _vm.data.barangay_sanggunian,
                            function (sanggunian) {
                              return _c("div", { key: sanggunian.id }, [
                                sanggunian.barangay_sanggunian_category.id ===
                                  6 ||
                                sanggunian.barangay_sanggunian_category.id === 5
                                  ? _c("p", [
                                      _c(
                                        "b",
                                        {
                                          staticStyle: {
                                            "text-transform": "uppercase",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(sanggunian.barangay_name)
                                          ),
                                        ]
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            "font-size": "0.6rem",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              sanggunian
                                                .barangay_sanggunian_category
                                                .category_name
                                            )
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _c("p", [
                                      _c(
                                        "b",
                                        {
                                          staticStyle: {
                                            "text-transform": "uppercase",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "Hon." +
                                              _vm._s(sanggunian.barangay_name)
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            "font-size": "0.6rem",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              sanggunian
                                                .barangay_sanggunian_category
                                                .category_name
                                            )
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("br"),
                                    ]),
                              ])
                            }
                          ),
                          _vm._v(" "),
                          _c("div", [
                            _c("br"),
                            _c("br"),
                            _vm._v(" "),
                            _c("b", [_vm._v("Address: ")]),
                            _c("br"),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(_vm._s(_vm.data.barangay.address)),
                            ]),
                            _vm._v(" "),
                            _c("b", [_vm._v("Hotline No:")]),
                            _c("br"),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(_vm._s(_vm.data.barangay.hotline_no)),
                            ]),
                          ]),
                        ],
                        2
                      ),
                    ],
                    1
                  ),
                ]
              ),
              _vm._v(" "),
              _c("img", {
                staticClass: "barangay-watermark",
                staticStyle: { width: "574px" },
                attrs: { src: _vm.data.logo, alt: "" },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-9" }, [
                _c("div", { staticClass: "barangay-content" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("img", {
                        staticClass: "pull-left",
                        staticStyle: { width: "96px", "margin-right": "18px" },
                        attrs: { src: _vm.data.logo },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "text-center" }, [
                        _vm._m(0),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticStyle: {
                              "font-weight": "900",
                              "text-transform": "uppercase",
                              "margin-top": "-6%",
                              "margin-left": "8px",
                            },
                          },
                          [
                            _vm._v(
                              "\n                      BARANGAY " +
                                _vm._s(_vm.data.barangay.barangay_name) +
                                "\n                    "
                            ),
                          ]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "container",
                        staticStyle: { "margin-top": "-9%" },
                      },
                      [
                        _c("div", { staticClass: "barangay-body-paragraph" }, [
                          _c("p", { staticClass: "text-justify" }, [
                            _vm._v(
                              "\n                      This is to certify that " +
                                _vm._s(_vm.data.full_name) +
                                " of legal\n                      age, is a bonafide and " +
                                _vm._s(_vm.data.resident_status) +
                                " resident\n                      of this barangay. He/She is residing at\n                      " +
                                _vm._s(_vm.data.address) +
                                " , Barangay\n                      " +
                                _vm._s(_vm.data.barangay.barangay_name) +
                                ", Calamba City Laguna.\n                    "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-justify" }, [
                            _vm._v(
                              "\n                      This is to certify further that the aforementioned\n                      person is a member of indigent family.\n                    "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-justify" }, [
                            _vm._v(
                              "\n                      This certification is being issued for the following\n                      purpose/s:\n                    "
                            ),
                          ]),
                          _vm._v(" "),
                          _vm._m(3),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-justify mt-3" }, [
                            _vm._v(
                              "\n                      Given this\n                      " +
                                _vm._s(
                                  this.date.toLocaleString("en-us", {
                                    month: "long",
                                  })
                                ) +
                                "\n                      " +
                                _vm._s(this.date.getDate()) +
                                ", " +
                                _vm._s(this.date.getFullYear()) +
                                " at\n                      Barangay " +
                                _vm._s(_vm.data.barangay.barangay_name) +
                                ", Calamba City\n                      Laguna\n                    "
                            ),
                          ]),
                          _vm._v(" "),
                          _vm._m(4),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "pull-left" }, [
                                _vm._v("Issued by:"),
                              ]),
                              _vm._v(" "),
                              _c("br"),
                              _c("br"),
                              _vm._v(" "),
                              _c("p", [
                                _c(
                                  "b",
                                  {
                                    staticStyle: {
                                      "text-transform": "uppercase",
                                    },
                                  },
                                  [
                                    _c("u", [
                                      _vm._v(
                                        "\n                              " +
                                          _vm._s(
                                            _vm.data.barangay_sanggunian[
                                              _vm.data.barangay_sanggunian
                                                .length - 2
                                            ].barangay_name
                                          ) +
                                          "\n                            "
                                      ),
                                    ]),
                                  ]
                                ),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(
                                  "\n                          Barangay Secretary\n                        "
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "pull-left" }, [
                                _vm._v("Approved by:"),
                              ]),
                              _vm._v(" "),
                              _c("br"),
                              _c("br"),
                              _vm._v(" "),
                              _c("p", [
                                _c(
                                  "b",
                                  {
                                    staticStyle: {
                                      "text-transform": "uppercase",
                                    },
                                  },
                                  [
                                    _c("u", [
                                      _vm._v(
                                        "HON.\n                              " +
                                          _vm._s(
                                            _vm.data.barangay_sanggunian[0]
                                              .barangay_name
                                          )
                                      ),
                                    ]),
                                  ]
                                ),
                                _c("br"),
                                _vm._v(
                                  "\n                          Barangay Chairman\n                          "
                                ),
                                _c("br"),
                                _c("br"),
                              ]),
                              _c(
                                "div",
                                { staticClass: "col-md-10" },
                                [
                                  _c("v-easy-camera", {
                                    ref: "camera",
                                    attrs: { startOnMounted: _vm.startCamera },
                                    model: {
                                      value: _vm.picture,
                                      callback: function ($$v) {
                                        _vm.picture = $$v
                                      },
                                      expression: "picture",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-success",
                                      on: { click: _vm.startPicture },
                                    },
                                    [
                                      _vm._v(
                                        "\n                              Photo\n                            "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("p"),
                            ]),
                          ]),
                        ]),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _vm._m(5),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticStyle: { "font-weight": "700" } }, [
      _c("b", [_vm._v("REPUBLIC OF THE PHILIPPINES")]),
      _vm._v(" "),
      _c("b", [_vm._v("PROVINCE OF LAGUNA")]),
      _c("br"),
      _vm._v(" "),
      _c("b", [_vm._v("CITY OF CALAMBA")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("img", {
        staticClass: "pull-left",
        staticStyle: { width: "100px", "margin-left": "20px" },
        attrs: { src: "/transaction/transparent_logo.png" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12 text-center" }, [
      _c(
        "h3",
        {
          staticStyle: {
            "font-weight": "600",
            "font-size": "1.5rem",
            "margin-top": "-12px",
          },
        },
        [
          _vm._v("\n                    BARANGAY CERTIFICATION"),
          _c("br"),
          _vm._v("\n                    (Indigency)\n                  "),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("table", [
        _c("tbody", [
          _c("tr", [
            _c("td", { staticStyle: { width: "5%" } }, [
              _c("input", { attrs: { type: "checkbox", name: "name1" } }),
              _vm._v(" \n                            "),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Scholarship")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticStyle: { width: "5%" } }, [
              _c("input", { attrs: { type: "checkbox", name: "name2" } }),
              _vm._v(" \n                            "),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Educational Assistance")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticStyle: { width: "5%" } }, [
              _c("input", { attrs: { type: "checkbox", name: "name3" } }),
              _vm._v(" \n                            "),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Financial Assistance")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticStyle: { width: "5%" } }, [
              _c("input", { attrs: { type: "checkbox", name: "name4" } }),
              _vm._v(" \n                            "),
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                              Other/s:\n                              "
              ),
              _c("input", {
                staticStyle: { width: "50%" },
                attrs: { type: "text" },
              }),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("p", [_vm._v("Affirmation of the requesting party:")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n                        _____________________________________ "
        ),
        _c("br"),
        _vm._v(
          "(Signature\n                        over Printer Name and Date)\n                      "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer" }, [
      _c("img", {
        staticClass: "bottom-image",
        attrs: { src: "/transaction/footer_seal.png" },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationNonResidentB2.vue?vue&type=template&id=5905c926&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationNonResidentB2.vue?vue&type=template&id=5905c926&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "pdf-item" }, [
    _c("div", { staticClass: "card", staticStyle: { width: "50rem" } }, [
      _c(
        "div",
        { staticClass: "card-body", staticStyle: { height: "1093px" } },
        [
          _c("img", {
            staticClass: "header-image",
            attrs: { src: "/transaction/header.png" },
          }),
          _vm._v(" "),
          _c("div", { staticClass: "barangay-wrap" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass: "col-md-3",
                  staticStyle: {
                    "border-right": "3px solid black",
                    "font-size": "0.7rem",
                  },
                },
                [
                  _c(
                    "b",
                    [
                      _c(
                        "center",
                        { staticStyle: { "margin-top": "63%" } },
                        [
                          _vm._l(
                            _vm.data.barangay_sanggunian,
                            function (sanggunian) {
                              return _c("div", { key: sanggunian.id }, [
                                sanggunian.barangay_sanggunian_category.id ===
                                  6 ||
                                sanggunian.barangay_sanggunian_category.id === 5
                                  ? _c("p", [
                                      _c(
                                        "b",
                                        {
                                          staticStyle: {
                                            "text-transform": "uppercase",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(sanggunian.barangay_name)
                                          ),
                                        ]
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            "font-size": "0.6rem",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              sanggunian
                                                .barangay_sanggunian_category
                                                .category_name
                                            )
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _c("p", [
                                      _c(
                                        "b",
                                        {
                                          staticStyle: {
                                            "text-transform": "uppercase",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "Hon." +
                                              _vm._s(sanggunian.barangay_name)
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            "font-size": "0.6rem",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              sanggunian
                                                .barangay_sanggunian_category
                                                .category_name
                                            )
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("br"),
                                    ]),
                              ])
                            }
                          ),
                          _vm._v(" "),
                          _c("div", [
                            _c("br"),
                            _c("br"),
                            _vm._v(" "),
                            _c("b", [_vm._v("Address: ")]),
                            _c("br"),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(_vm._s(_vm.data.barangay.address)),
                            ]),
                            _vm._v(" "),
                            _c("b", [_vm._v("Hotline No:")]),
                            _c("br"),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(_vm._s(_vm.data.barangay.hotline_no)),
                            ]),
                          ]),
                        ],
                        2
                      ),
                    ],
                    1
                  ),
                ]
              ),
              _vm._v(" "),
              _c("img", {
                staticClass: "barangay-watermark",
                staticStyle: { width: "574px" },
                attrs: { src: _vm.data.logo, alt: "" },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-9" }, [
                _c("div", { staticClass: "barangay-content" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("img", {
                        staticClass: "pull-left",
                        staticStyle: { width: "96px", "margin-right": "18px" },
                        attrs: { src: _vm.data.logo },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "text-center" }, [
                        _vm._m(0),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticStyle: {
                              "font-weight": "900",
                              "text-transform": "uppercase",
                              "margin-top": "-6%",
                              "margin-left": "8px",
                            },
                          },
                          [
                            _vm._v(
                              "\n                        BARANGAY " +
                                _vm._s(_vm.data.barangay.barangay_name) +
                                "\n                      "
                            ),
                          ]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "container",
                        staticStyle: { "margin-top": "-9%" },
                      },
                      [
                        _c("div", { staticClass: "barangay-body-paragraph" }, [
                          _c("p", { staticClass: "text-justify" }, [
                            _vm._v(
                              "\n                        This is to certify that upon verification, the below\n                        listed individual/s is/are not residents of Barangay\n                        " +
                                _vm._s(_vm.data.barangay.barangay_name) +
                                ", Calamba City, Laguna\n                      "
                            ),
                          ]),
                          _vm._v(" "),
                          _vm._m(3),
                          _vm._v(" "),
                          _vm._m(4),
                          _vm._v(" "),
                          _vm._m(5),
                          _vm._v(" "),
                          _vm._m(6),
                          _vm._v(" "),
                          _vm._m(7),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-justify" }, [
                            _vm._v(
                              "\n                        This certification is being issued for whatever legal\n                        purposes this may best serve.\n                      "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-justify mt-3" }, [
                            _vm._v(
                              "\n                        Given this\n                        " +
                                _vm._s(
                                  this.date.toLocaleString("en-us", {
                                    month: "long",
                                  })
                                ) +
                                "\n                        " +
                                _vm._s(this.date.getDate()) +
                                ", " +
                                _vm._s(this.date.getFullYear()) +
                                " at\n                        Barangay " +
                                _vm._s(_vm.data.barangay.barangay_name) +
                                ", Calamba City\n                        Laguna\n                      "
                            ),
                          ]),
                          _vm._v(" "),
                          _vm._m(8),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "pull-left" }, [
                                _vm._v("Issued by:"),
                              ]),
                              _vm._v(" "),
                              _c("br"),
                              _c("br"),
                              _vm._v(" "),
                              _c("p", [
                                _c(
                                  "b",
                                  {
                                    staticStyle: {
                                      "text-transform": "uppercase",
                                    },
                                  },
                                  [
                                    _c("u", [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(
                                            _vm.data.barangay_sanggunian[
                                              _vm.data.barangay_sanggunian
                                                .length - 2
                                            ].barangay_name
                                          ) +
                                          "\n                              "
                                      ),
                                    ]),
                                  ]
                                ),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(
                                  "\n                            Barangay Secretary\n                          "
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "pull-left" }, [
                                _vm._v("Approved by:"),
                              ]),
                              _vm._v(" "),
                              _c("br"),
                              _c("br"),
                              _vm._v(" "),
                              _c("p", [
                                _c(
                                  "b",
                                  {
                                    staticStyle: {
                                      "text-transform": "uppercase",
                                    },
                                  },
                                  [
                                    _c("u", [
                                      _vm._v(
                                        "HON.\n                                " +
                                          _vm._s(
                                            _vm.data.barangay_sanggunian[0]
                                              .barangay_name
                                          )
                                      ),
                                    ]),
                                  ]
                                ),
                                _c("br"),
                                _vm._v(
                                  "\n                            Barangay Chairman\n                          "
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _vm._m(9),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticStyle: { "font-weight": "700" } }, [
      _c("b", [_vm._v("REPUBLIC OF THE PHILIPPINES")]),
      _vm._v(" "),
      _c("b", [_vm._v("PROVINCE OF LAGUNA")]),
      _c("br"),
      _vm._v(" "),
      _c("b", [_vm._v("CITY OF CALAMBA")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("img", {
        staticClass: "pull-left",
        staticStyle: { width: "100px", "margin-left": "20px" },
        attrs: { src: "/transaction/transparent_logo.png" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12 text-center" }, [
      _c(
        "h3",
        {
          staticStyle: {
            "font-weight": "600",
            "font-size": "1.5rem",
            "margin-top": "-12px",
          },
        },
        [
          _vm._v("\n                      \tBARANGAY CERTIFICATION"),
          _c("br"),
          _vm._v(
            "\n                      (Non-Resident Individual/s)\n                    "
          ),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticStyle: { "margin-right": "67px" } }),
      _vm._v(" "),
      _c("b", { staticStyle: { "margin-right": "24px" } }, [_vm._v("1.")]),
      _c("b", [
        _c("input", { staticStyle: { width: "60%" }, attrs: { type: "text" } }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticStyle: { "margin-right": "68px" } }),
      _vm._v(" "),
      _c("b", { staticStyle: { "margin-right": "24px" } }, [_vm._v("2.")]),
      _c("b", [
        _c("input", { staticStyle: { width: "60%" }, attrs: { type: "text" } }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticStyle: { "margin-right": "68px" } }),
      _vm._v(" "),
      _c("b", { staticStyle: { "margin-right": "24px" } }, [_vm._v("3.")]),
      _c("b", [
        _c("input", { staticStyle: { width: "60%" }, attrs: { type: "text" } }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticStyle: { "margin-right": "68px" } }),
      _vm._v(" "),
      _c("b", { staticStyle: { "margin-right": "24px" } }, [_vm._v("4.")]),
      _c("b", [
        _c("input", { staticStyle: { width: "60%" }, attrs: { type: "text" } }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticStyle: { "margin-right": "68px" } }),
      _vm._v(" "),
      _c("b", { staticStyle: { "margin-right": "24px" } }, [_vm._v("5.")]),
      _c("b", [
        _c("input", { staticStyle: { width: "60%" }, attrs: { type: "text" } }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("p", [_vm._v("Affirmation of the requesting party:")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n                          _____________________________________ "
        ),
        _c("br"),
        _vm._v(
          "(Signature\n                          over Printer Name and Date)\n                        "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer" }, [
      _c("img", {
        staticClass: "bottom-image",
        attrs: { src: "/transaction/footer_seal.png" },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationOathB6.vue?vue&type=template&id=95a4342c&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationOathB6.vue?vue&type=template&id=95a4342c&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "pdf-item" }, [
    _c("div", { staticClass: "card", staticStyle: { width: "50rem" } }, [
      _c(
        "div",
        { staticClass: "card-body", staticStyle: { height: "1093px" } },
        [
          _c("img", {
            staticClass: "header-image",
            attrs: { src: "/transaction/header.png" },
          }),
          _vm._v(" "),
          _c("div", { staticClass: "barangay-wrap" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass: "col-md-3",
                  staticStyle: {
                    "border-right": "3px solid black",
                    "font-size": "0.7rem",
                  },
                },
                [
                  _c(
                    "b",
                    [
                      _c(
                        "center",
                        { staticStyle: { "margin-top": "63%" } },
                        [
                          _vm._l(
                            _vm.data.barangay_sanggunian,
                            function (sanggunian) {
                              return _c("div", { key: sanggunian.id }, [
                                sanggunian.barangay_sanggunian_category.id ===
                                  6 ||
                                sanggunian.barangay_sanggunian_category.id === 5
                                  ? _c("p", [
                                      _c(
                                        "b",
                                        {
                                          staticStyle: {
                                            "text-transform": "uppercase",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(sanggunian.barangay_name)
                                          ),
                                        ]
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            "font-size": "0.6rem",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              sanggunian
                                                .barangay_sanggunian_category
                                                .category_name
                                            )
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _c("p", [
                                      _c(
                                        "b",
                                        {
                                          staticStyle: {
                                            "text-transform": "uppercase",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "Hon." +
                                              _vm._s(sanggunian.barangay_name)
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            "font-size": "0.6rem",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              sanggunian
                                                .barangay_sanggunian_category
                                                .category_name
                                            )
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("br"),
                                    ]),
                              ])
                            }
                          ),
                          _vm._v(" "),
                          _c("div", [
                            _c("br"),
                            _c("br"),
                            _vm._v(" "),
                            _c("b", [_vm._v("Address: ")]),
                            _c("br"),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(_vm._s(_vm.data.barangay.address)),
                            ]),
                            _vm._v(" "),
                            _c("b", [_vm._v("Hotline No:")]),
                            _c("br"),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(_vm._s(_vm.data.barangay.hotline_no)),
                            ]),
                          ]),
                        ],
                        2
                      ),
                    ],
                    1
                  ),
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-9" }, [
                _c("img", {
                  staticClass: "barangay-watermark",
                  staticStyle: { width: "574px" },
                  attrs: { src: _vm.data.logo, alt: "" },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "barangay-content" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("img", {
                        staticClass: "pull-left",
                        staticStyle: { width: "96px", "margin-right": "18px" },
                        attrs: { src: _vm.data.logo },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "text-center" }, [
                        _vm._m(0),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticStyle: {
                              "font-weight": "900",
                              "text-transform": "uppercase",
                              "margin-top": "-6%",
                              "margin-left": "8px",
                            },
                          },
                          [
                            _vm._v(
                              "\n                        BARANGAY " +
                                _vm._s(_vm.data.barangay.barangay_name) +
                                "\n                      "
                            ),
                          ]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "container",
                        staticStyle: { "margin-top": "-9%" },
                      },
                      [
                        _c("div", { staticClass: "barangay-body-paragraph" }, [
                          _c("p", { staticClass: "text-justify" }, [
                            _vm._v(
                              "\n                        I, " +
                                _vm._s(_vm.data.full_name) +
                                ", " +
                                _vm._s(_vm.data.age) +
                                " of age, resident\n                        of " +
                                _vm._s(_vm.data.address) +
                                ", availing the benefits of REPUBLIC\n                        ACT 11261, otherwise known as the FIRST TIME JOBSEEKERS\n                        Act of 2019, do hereby declare, agree and undertake to\n                        abide be bound by the following:\n                      "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _vm._m(3),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-justify" }, [
                            _vm._v(
                              "\n                        Given this\n                        " +
                                _vm._s(
                                  this.date.toLocaleString("en-us", {
                                    month: "long",
                                  })
                                ) +
                                "\n                        " +
                                _vm._s(this.date.getDate()) +
                                ", " +
                                _vm._s(this.date.getFullYear()) +
                                " at\n                        Barangay " +
                                _vm._s(_vm.data.barangay.barangay_name) +
                                ", Calamba City\n                        Laguna\n                      "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "pull-left" }, [
                                _vm._v("Witnessed by"),
                              ]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("p", [
                                _c(
                                  "b",
                                  {
                                    staticStyle: {
                                      "text-transform": "uppercase",
                                    },
                                  },
                                  [
                                    _c("u", [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(
                                            _vm.data.barangay_sanggunian[
                                              _vm.data.barangay_sanggunian
                                                .length - 2
                                            ].barangay_name
                                          ) +
                                          "\n                              "
                                      ),
                                    ]),
                                  ]
                                ),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(
                                  "\n                            Barangay Secretary\n                          "
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "pull-left" }, [
                                _vm._v("Approved by:"),
                              ]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("p", [
                                _c(
                                  "b",
                                  {
                                    staticStyle: {
                                      "text-transform": "uppercase",
                                    },
                                  },
                                  [
                                    _c("u", [
                                      _vm._v(
                                        "HON.\n                                " +
                                          _vm._s(
                                            _vm.data.barangay_sanggunian[0]
                                              .barangay_name
                                          )
                                      ),
                                    ]),
                                  ]
                                ),
                                _c("br"),
                                _vm._v(
                                  "\n                            Barangay Chairman\n                          "
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _vm._m(4),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticStyle: { "font-weight": "700" } }, [
      _c("b", [_vm._v("REPUBLIC OF THE PHILIPPINES")]),
      _vm._v(" "),
      _c("b", [_vm._v("PROVINCE OF LAGUNA")]),
      _c("br"),
      _vm._v(" "),
      _c("b", [_vm._v("CITY OF CALAMBA")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("img", {
        staticClass: "pull-left",
        staticStyle: { width: "100px", "margin-left": "20px" },
        attrs: { src: "/transaction/transparent_logo.png" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12 text-center" }, [
      _c(
        "h3",
        {
          staticStyle: {
            "font-weight": "600",
            "font-size": "1.5rem",
            "margin-top": "-12px",
          },
        },
        [
          _vm._v(
            "\n                      OATH OF UNDERTAKING\n                    "
          ),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-justify" }, [
      _vm._v(
        "\n                        1.That this first time that I will actively look for a\n                        job, and therefore requesting that a Barangay\n                        Certification be issued in my favor to avail the\n                        benefits of the law; "
      ),
      _c("br"),
      _vm._v(
        "2.That I am aware that the\n                        benefits and privilege/s under the said law shall be\n                        valid only one (1) year from the date that the Barangay\n                        Certification is issued; "
      ),
      _c("br"),
      _vm._v(
        "3.That I can avail the\n                        benefits o the law only once; "
      ),
      _c("br"),
      _vm._v(
        "4.That I understand\n                        that my personal information shall be included in the\n                        Roster/List of First Time Jobseekers and will not be\n                        used for any unlawful purpose; "
      ),
      _c("br"),
      _vm._v(
        "5.That I will\n                        inform and/or report to Barangay personality, though\n                        text other means, of through my family/relatives once I\n                        get employed; and "
      ),
      _c("br"),
      _vm._v(
        "6.That I am not beneficiary of\n                        the Job Start Program under R.A No. 10969 and other laws\n                        that give similar exemptions for the documents or\n                        transactions exempted under R.A No. 11261 "
      ),
      _c("br"),
      _vm._v(
        "7.That I\n                        issued the requested certification, I will not use the\n                        same in any fraud, neither falsify nor help and/or\n                        assist in the fabrication of the said certification\n                        "
      ),
      _c("br"),
      _vm._v(
        "8.That this undertaking is made solely for purpose\n                        of obtaining a Barangay Certification consistent with\n                        the objective of R.A No. 11261 and not for any purpose\n                        "
      ),
      _c("br"),
      _vm._v(
        "9.That I consent to the use of my personal\n                        information pursuant to the Data Privacy Act and other\n                        applicable laws, rules and regulation.\n                      "
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer" }, [
      _c("img", {
        staticClass: "bottom-image",
        attrs: { src: "/transaction/footer_seal.png" },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationRaB5.vue?vue&type=template&id=8deb5fdc&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationRaB5.vue?vue&type=template&id=8deb5fdc&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "pdf-item" }, [
    _c("div", { staticClass: "card", staticStyle: { width: "50rem" } }, [
      _c(
        "div",
        { staticClass: "card-body", staticStyle: { height: "1093px" } },
        [
          _c("img", {
            staticClass: "header-image",
            attrs: { src: "/transaction/header.png" },
          }),
          _vm._v(" "),
          _c("div", { staticClass: "barangay-wrap" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass: "col-md-3",
                  staticStyle: {
                    "border-right": "3px solid black",
                    "font-size": "0.7rem",
                  },
                },
                [
                  _c(
                    "b",
                    [
                      _c(
                        "center",
                        { staticStyle: { "margin-top": "63%" } },
                        [
                          _vm._l(
                            _vm.data.barangay_sanggunian,
                            function (sanggunian) {
                              return _c("div", { key: sanggunian.id }, [
                                sanggunian.barangay_sanggunian_category.id ===
                                  6 ||
                                sanggunian.barangay_sanggunian_category.id === 5
                                  ? _c("p", [
                                      _c(
                                        "b",
                                        {
                                          staticStyle: {
                                            "text-transform": "uppercase",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(sanggunian.barangay_name)
                                          ),
                                        ]
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            "font-size": "0.6rem",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              sanggunian
                                                .barangay_sanggunian_category
                                                .category_name
                                            )
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _c("p", [
                                      _c(
                                        "b",
                                        {
                                          staticStyle: {
                                            "text-transform": "uppercase",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "Hon." +
                                              _vm._s(sanggunian.barangay_name)
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            "font-size": "0.6rem",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              sanggunian
                                                .barangay_sanggunian_category
                                                .category_name
                                            )
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("br"),
                                    ]),
                              ])
                            }
                          ),
                          _vm._v(" "),
                          _c("div", [
                            _c("br"),
                            _c("br"),
                            _vm._v(" "),
                            _c("b", [_vm._v("Address: ")]),
                            _c("br"),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(_vm._s(_vm.data.barangay.address)),
                            ]),
                            _vm._v(" "),
                            _c("b", [_vm._v("Hotline No:")]),
                            _c("br"),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(_vm._s(_vm.data.barangay.hotline_no)),
                            ]),
                          ]),
                        ],
                        2
                      ),
                    ],
                    1
                  ),
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-9" }, [
                _c("img", {
                  staticClass: "barangay-watermark",
                  staticStyle: { width: "574px" },
                  attrs: { src: _vm.data.logo, alt: "" },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "barangay-content" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("img", {
                        staticClass: "pull-left",
                        staticStyle: { width: "96px", "margin-right": "18px" },
                        attrs: { src: _vm.data.logo },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "text-center" }, [
                        _vm._m(0),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticStyle: {
                              "font-weight": "900",
                              "text-transform": "uppercase",
                              "margin-top": "-6%",
                              "margin-left": "8px",
                            },
                          },
                          [
                            _vm._v(
                              "\n                      BARANGAY " +
                                _vm._s(_vm.data.barangay.barangay_name) +
                                "\n                    "
                            ),
                          ]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "container",
                        staticStyle: { "margin-top": "-9%" },
                      },
                      [
                        _c("div", { staticClass: "barangay-body-paragraph" }, [
                          _c("p", { staticClass: "text-justify" }, [
                            _vm._v(
                              "\n                      This is to certify that person, whose personal details\n                      appears below, is a bonafide resident of Barangay\n                      " +
                                _vm._s(_vm.data.barangay.barangay_name) +
                                " Calamba City, Laguna.\n                    "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-8" }, [
                              _c("div", [
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "67px" } },
                                  [_vm._v("Name of Resident")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "0px" } },
                                  [_vm._v(":")]
                                ),
                                _c("b", [
                                  _vm._v(
                                    " " + _vm._s(_vm.data.full_name) + " "
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "155px" } },
                                  [_vm._v("Age")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "0px" } },
                                  [_vm._v(":")]
                                ),
                                _c("b", [_vm._v(" " + _vm._s(_vm.data.age))]),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "108px" } },
                                  [_vm._v("Civil Status")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "0px" } },
                                  [_vm._v(":")]
                                ),
                                _c("b", [
                                  _vm._v(" " + _vm._s(_vm.data.civil_status)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "127px" } },
                                  [_vm._v("Address")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "0px" } },
                                  [_vm._v(":")]
                                ),
                                _c("b", [
                                  _vm._v(" " + _vm._s(_vm.data.address)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c("b", {
                                  staticStyle: { "margin-right": "183px" },
                                }),
                                _vm._v(" "),
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "0px" } },
                                  [_vm._v(":")]
                                ),
                                _c("b", [
                                  _vm._v(" " + _vm._s(_vm.data.address1)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "69px" } },
                                  [_vm._v("Residence Status")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "0px" } },
                                  [_vm._v(":")]
                                ),
                                _c("b", [
                                  _vm._v(
                                    " " + _vm._s(_vm.data.resident_status) + " "
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "50px" } },
                                  [_vm._v("Brgy Residence Date")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "0px" } },
                                  [_vm._v(":")]
                                ),
                                _c("b", [
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.data.barangay_residence_year)
                                  ),
                                ]),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-4" },
                              [
                                _c("v-easy-camera", {
                                  ref: "camera",
                                  attrs: { startOnMounted: _vm.startCamera },
                                  model: {
                                    value: _vm.picture,
                                    callback: function ($$v) {
                                      _vm.picture = $$v
                                    },
                                    expression: "picture",
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-success",
                                    on: { click: _vm.startPicture },
                                  },
                                  [
                                    _vm._v(
                                      "\n                          Photo\n                        "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-justify" }, [
                            _vm._v(
                              "\n                      This is to certify further that the aforementioned\n                      person is a qualified availee of RA 11261 or the First\n                      Time Jobseekers Act of 2019; and he/she was informed of\n                      his/her rights, including the duties and\n                      responsibilities accorded by RA 11261 through the Oath\n                      of Undertaking he/she has signed and executed in the\n                      presence of our Barangay Official.\n                    "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-justify" }, [
                            _vm._v(
                              "\n                    Given this\n                    " +
                                _vm._s(
                                  this.date.toLocaleString("en-us", {
                                    month: "long",
                                  })
                                ) +
                                "\n                    " +
                                _vm._s(this.date.getDate()) +
                                ", " +
                                _vm._s(this.date.getFullYear()) +
                                " at\n                    Barangay " +
                                _vm._s(_vm.data.barangay.barangay_name) +
                                ", Calamba City\n                    Laguna.\n                  "
                            ),
                          ]),
                          _vm._v(" "),
                          _vm._m(3),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "pull-left" }, [
                                _vm._v("Issued by:"),
                              ]),
                              _vm._v(" "),
                              _c("br"),
                              _c("br"),
                              _vm._v(" "),
                              _c("p", [
                                _c(
                                  "b",
                                  {
                                    staticStyle: {
                                      "text-transform": "uppercase",
                                    },
                                  },
                                  [
                                    _c("u", [
                                      _vm._v(
                                        "\n                              " +
                                          _vm._s(
                                            _vm.data.barangay_sanggunian[
                                              _vm.data.barangay_sanggunian
                                                .length - 2
                                            ].barangay_name
                                          ) +
                                          "\n                            "
                                      ),
                                    ]),
                                  ]
                                ),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(
                                  "\n                        Barangay Secretary\n                      "
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "pull-left" }, [
                                _vm._v("Approved by:"),
                              ]),
                              _vm._v(" "),
                              _c("br"),
                              _c("br"),
                              _vm._v(" "),
                              _c("p", [
                                _c(
                                  "b",
                                  {
                                    staticStyle: {
                                      "text-transform": "uppercase",
                                    },
                                  },
                                  [
                                    _c("u", [
                                      _vm._v(
                                        "HON.\n                            " +
                                          _vm._s(
                                            _vm.data.barangay_sanggunian[0]
                                              .barangay_name
                                          )
                                      ),
                                    ]),
                                  ]
                                ),
                                _c("br"),
                                _vm._v(
                                  "\n                        Barangay Chairman\n                      "
                                ),
                              ]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _vm._m(4),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-6" },
                              [
                                _c("center", [
                                  _c("img", {
                                    attrs: {
                                      src: "/transaction/finger_print.png",
                                    },
                                  }),
                                ]),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _vm._m(5),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticStyle: { "font-weight": "700" } }, [
      _c("b", [_vm._v("REPUBLIC OF THE PHILIPPINES")]),
      _vm._v(" "),
      _c("b", [_vm._v("PROVINCE OF LAGUNA")]),
      _c("br"),
      _vm._v(" "),
      _c("b", [_vm._v("CITY OF CALAMBA")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("img", {
        staticClass: "pull-left",
        staticStyle: { width: "100px", "margin-left": "20px" },
        attrs: { src: "/transaction/transparent_logo.png" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12 text-center" }, [
      _c(
        "h3",
        {
          staticStyle: {
            "font-weight": "600",
            "font-size": "1.4rem",
            "margin-top": "-12px",
          },
        },
        [
          _vm._v("\n                    BARANGAY CERTIFICATION"),
          _c("br"),
          _vm._v(
            "\n                    (RA 11261 or First Time Jobseekers Act of 2019)\n                  "
          ),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("p", [_vm._v("Affirmation of the requesting party:")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n                      _____________________________________ "
        ),
        _c("br"),
        _vm._v(
          "(Signature\n                      over Printer Name and Date)\n                    "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _vm._v("\n                      C.T.C. No."),
      _c("span", { staticStyle: { "margin-left": "24px" } }),
      _vm._v(":\n                      _________________ "),
      _c("br"),
      _vm._v("Date Issued\n                      "),
      _c("span", { staticStyle: { "margin-left": "9px" } }),
      _vm._v(" :\n                      _________________"),
      _c("br"),
      _vm._v("\n                      Place Issued "),
      _c("span", { staticStyle: { "margin-left": "4px" } }),
      _vm._v(
        " :\n                      _________________\n                    "
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer" }, [
      _c("img", {
        staticClass: "bottom-image",
        attrs: { src: "/transaction/footer_seal.png" },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationResidentB1.vue?vue&type=template&id=6b1f5b22&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationResidentB1.vue?vue&type=template&id=6b1f5b22&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "pdf-item" }, [
    _c("div", { staticClass: "card", staticStyle: { width: "50rem" } }, [
      _c(
        "div",
        { staticClass: "card-body", staticStyle: { height: "1016px" } },
        [
          _c("img", {
            staticClass: "header-image",
            attrs: { src: "/transaction/header.png" },
          }),
          _vm._v(" "),
          _c("div", { staticClass: "barangay-wrap" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass: "col-md-3",
                  staticStyle: {
                    "border-right": "3px solid black",
                    "font-size": "0.7rem",
                  },
                },
                [
                  _c(
                    "b",
                    [
                      _c(
                        "center",
                        { staticStyle: { "margin-top": "63%" } },
                        [
                          _vm._l(
                            _vm.data.barangay_sanggunian,
                            function (sanggunian) {
                              return _c("div", { key: sanggunian.id }, [
                                sanggunian.barangay_sanggunian_category.id ===
                                  6 ||
                                sanggunian.barangay_sanggunian_category.id === 5
                                  ? _c("p", [
                                      _c(
                                        "b",
                                        {
                                          staticStyle: {
                                            "text-transform": "uppercase",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(sanggunian.barangay_name)
                                          ),
                                        ]
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            "font-size": "0.6rem",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              sanggunian
                                                .barangay_sanggunian_category
                                                .category_name
                                            )
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _c("p", [
                                      _c(
                                        "b",
                                        {
                                          staticStyle: {
                                            "text-transform": "uppercase",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "Hon." +
                                              _vm._s(sanggunian.barangay_name)
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            "font-size": "0.6rem",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              sanggunian
                                                .barangay_sanggunian_category
                                                .category_name
                                            )
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("br"),
                                    ]),
                              ])
                            }
                          ),
                          _vm._v(" "),
                          _c("div", [
                            _c("br"),
                            _c("br"),
                            _vm._v(" "),
                            _c("b", [_vm._v("Address: ")]),
                            _c("br"),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(_vm._s(_vm.data.barangay.address)),
                            ]),
                            _vm._v(" "),
                            _c("b", [_vm._v("Hotline No:")]),
                            _c("br"),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(_vm._s(_vm.data.barangay.hotline_no)),
                            ]),
                          ]),
                        ],
                        2
                      ),
                    ],
                    1
                  ),
                ]
              ),
              _vm._v(" "),
              _c("img", {
                staticClass: "barangay-watermark",
                staticStyle: { width: "574px" },
                attrs: { src: _vm.data.logo, alt: "" },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-9" }, [
                _c("div", { staticClass: "barangay-content" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("img", {
                        staticClass: "pull-left",
                        staticStyle: { width: "96px", "margin-right": "18px" },
                        attrs: { src: _vm.data.logo },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "text-center" }, [
                        _vm._m(0),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticStyle: {
                              "font-weight": "900",
                              "text-transform": "uppercase",
                              "margin-top": "-6%",
                              "margin-left": "8px",
                            },
                          },
                          [
                            _vm._v(
                              "\n                      BARANGAY " +
                                _vm._s(_vm.data.barangay.barangay_name) +
                                "\n                    "
                            ),
                          ]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm._m(1),
                  ]),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "container",
                      staticStyle: { "margin-top": "-9%" },
                    },
                    [
                      _c("div", { staticClass: "barangay-body-paragraph" }, [
                        _c("p", { staticClass: "text-justify" }, [
                          _vm._v(
                            "\n                    This is to certify that person, whose personal details\n                    appears below, is a bonafide resident of Barangay\n                    " +
                              _vm._s(_vm.data.barangay.barangay_name) +
                              " Calamba City, Laguna.\n                  "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("div", [
                              _c(
                                "b",
                                { staticStyle: { "margin-right": "67px" } },
                                [_vm._v("Name of Resident")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b",
                                { staticStyle: { "margin-right": "0px" } },
                                [_vm._v(":")]
                              ),
                              _c("b", [
                                _vm._v(_vm._s(_vm.data.full_name) + " "),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "b",
                                { staticStyle: { "margin-right": "155px" } },
                                [_vm._v("Age")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b",
                                { staticStyle: { "margin-right": "0px" } },
                                [_vm._v(":")]
                              ),
                              _c("b", [_vm._v(" " + _vm._s(_vm.data.age))]),
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "b",
                                { staticStyle: { "margin-right": "108px" } },
                                [_vm._v("Civil Status")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b",
                                { staticStyle: { "margin-right": "0px" } },
                                [_vm._v(":")]
                              ),
                              _c("b", [
                                _vm._v(" " + _vm._s(_vm.data.civil_status)),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "b",
                                { staticStyle: { "margin-right": "127px" } },
                                [_vm._v("Address")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b",
                                { staticStyle: { "margin-right": "0px" } },
                                [_vm._v(":")]
                              ),
                              _c("b", [_vm._v(" " + _vm._s(_vm.data.address))]),
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c("b", {
                                staticStyle: { "margin-right": "183px" },
                              }),
                              _vm._v(" "),
                              _c(
                                "b",
                                { staticStyle: { "margin-right": "0px" } },
                                [_vm._v(":")]
                              ),
                              _c("b", [
                                _vm._v(" " + _vm._s(_vm.data.address1)),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "b",
                                { staticStyle: { "margin-right": "69px" } },
                                [_vm._v("Residence Status")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b",
                                { staticStyle: { "margin-right": "0px" } },
                                [_vm._v(":")]
                              ),
                              _c("b", [
                                _vm._v(_vm._s(_vm.data.resident_status) + " "),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "b",
                                { staticStyle: { "margin-right": "50px" } },
                                [_vm._v("Brgy Residence Date")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b",
                                { staticStyle: { "margin-right": "0px" } },
                                [_vm._v(":")]
                              ),
                              _c("b", [
                                _vm._v(
                                  " " + _vm._s(_vm.data.barangay_residence_year)
                                ),
                              ]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-3" },
                            [
                              _c("v-easy-camera", {
                                ref: "camera",
                                attrs: { startOnMounted: _vm.startCamera },
                                model: {
                                  value: _vm.picture,
                                  callback: function ($$v) {
                                    _vm.picture = $$v
                                  },
                                  expression: "picture",
                                },
                              }),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-success",
                                  on: { click: _vm.startPicture },
                                },
                                [
                                  _vm._v(
                                    "\n                        Photo\n                      "
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-justify" }, [
                          _vm._v(
                            "\n                    This clearance is being issued upon his/her request for\n                    the following purpose/s.\n                  "
                          ),
                        ]),
                        _vm._v(" "),
                        _vm._m(3),
                        _vm._v(" "),
                        _c("p", { staticClass: "mt-3" }, [
                          _vm._v(
                            "\n                    Given this\n                    " +
                              _vm._s(
                                this.date.toLocaleString("en-us", {
                                  month: "long",
                                })
                              ) +
                              "\n                    " +
                              _vm._s(this.date.getDate()) +
                              ", " +
                              _vm._s(this.date.getFullYear()) +
                              " at\n                    Barangay " +
                              _vm._s(_vm.data.barangay.barangay_name) +
                              ", Calamba City\n                    Laguna.\n                  "
                          ),
                        ]),
                        _vm._v(" "),
                        _vm._m(4),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-md-6" }, [
                            _c("div", { staticClass: "pull-left" }, [
                              _vm._v("Issued by:"),
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _c("br"),
                            _vm._v(" "),
                            _c("p", [
                              _c(
                                "b",
                                {
                                  staticStyle: {
                                    "text-transform": "uppercase",
                                  },
                                },
                                [
                                  _c("u", [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(
                                          _vm.data.barangay_sanggunian[
                                            _vm.data.barangay_sanggunian
                                              .length - 2
                                          ].barangay_name
                                        ) +
                                        "\n                          "
                                    ),
                                  ]),
                                ]
                              ),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(
                                "\n                        Barangay Secretary\n                      "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-6" }, [
                            _c("div", { staticClass: "pull-left" }, [
                              _vm._v("Approved by:"),
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _c("br"),
                            _vm._v(" "),
                            _c("p", [
                              _c(
                                "b",
                                {
                                  staticStyle: {
                                    "text-transform": "uppercase",
                                  },
                                },
                                [
                                  _c("u", [
                                    _vm._v(
                                      "HON.\n                            " +
                                        _vm._s(
                                          _vm.data.barangay_sanggunian[0]
                                            .barangay_name
                                        )
                                    ),
                                  ]),
                                ]
                              ),
                              _c("br"),
                              _vm._v(
                                "\n                        Barangay Chairman\n                      "
                              ),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _vm._m(5),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-6" },
                            [
                              _c("center", [
                                _c("img", {
                                  attrs: {
                                    src: "/transaction/finger_print.png",
                                  },
                                }),
                              ]),
                            ],
                            1
                          ),
                        ]),
                      ]),
                    ]
                  ),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _vm._m(6),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticStyle: { "font-weight": "700" } }, [
      _c("b", [_vm._v("REPUBLIC OF THE PHILIPPINES")]),
      _vm._v(" "),
      _c("b", [_vm._v("PROVINCE OF LAGUNA")]),
      _c("br"),
      _vm._v(" "),
      _c("b", [_vm._v("CITY OF CALAMBA")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("img", {
        staticClass: "pull-left",
        staticStyle: { width: "100px", "margin-left": "20px" },
        attrs: { src: "/transaction/transparent_logo.png" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12 text-center" }, [
      _c(
        "h3",
        {
          staticStyle: {
            "font-weight": "600",
            "font-size": "1.5rem",
            "margin-top": "-12px",
          },
        },
        [
          _vm._v("\n                  BARANGAY CERTIFICATION "),
          _c("br"),
          _vm._v("\n                  (Residency)\n                "),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("table", [
        _c("tbody", [
          _c("tr", [
            _c("td", [
              _c("input", { attrs: { type: "checkbox", name: "name1" } }),
              _vm._v(" \n                          "),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Employment Purposes")]),
            _vm._v(" "),
            _c("td", [
              _c("input", { attrs: { type: "checkbox", name: "name4" } }),
              _vm._v(" \n                          "),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("School / SSS / GSIS Reference")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _c("input", { attrs: { type: "checkbox", name: "name2" } }),
              _vm._v(" \n                          "),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Business Requirement")]),
            _vm._v(" "),
            _c("td", [
              _c("input", { attrs: { type: "checkbox", name: "name4" } }),
              _vm._v(" \n                          "),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Fire Arms / Drivers License")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _c("input", { attrs: { type: "checkbox", name: "name3" } }),
              _vm._v(" \n                          "),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Bank Requirement")]),
            _vm._v(" "),
            _c("td", [
              _c("input", { attrs: { type: "checkbox", name: "name4" } }),
              _vm._v(" \n                          "),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Electric / Water Connection")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _c("input", { attrs: { type: "checkbox", name: "name5" } }),
              _vm._v(" \n                          "),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("NBI Requirement")]),
            _vm._v(" "),
            _c("td", [
              _c("input", { attrs: { type: "checkbox", name: "name6" } }),
              _vm._v(" \n                          "),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Senior Citizens Requirement")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _c("input", { attrs: { type: "checkbox", name: "name7" } }),
              _vm._v(" \n                          "),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Medical Aid Requirement")]),
            _vm._v(" "),
            _c("td", [
              _c("input", { attrs: { type: "checkbox", name: "name8" } }),
              _vm._v(" \n                          "),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Overseas / Travel Requirement")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _c("input", { attrs: { type: "checkbox", name: "name9" } }),
              _vm._v(" \n                          "),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Other Requirements (Specify):")]),
            _vm._v(" "),
            _c("td"),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                staticStyle: { "padding-right": "74px", opacity: "1" },
                attrs: { type: "text" },
              }),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("p", [_vm._v("Affirmation of the requesting party:")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n                      _____________________________________ "
        ),
        _c("br"),
        _vm._v(
          "(Signature\n                      over Printer Name and Date)\n                    "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _vm._v("\n                      C.T.C. No."),
      _c("span", { staticStyle: { "margin-left": "24px" } }),
      _vm._v(":\n                      _________________ "),
      _c("br"),
      _vm._v("Date Issued\n                      "),
      _c("span", { staticStyle: { "margin-left": "9px" } }),
      _vm._v(" :\n                      _________________"),
      _c("br"),
      _vm._v("\n                      Place Issued "),
      _c("span", { staticStyle: { "margin-left": "4px" } }),
      _vm._v(
        " :\n                      _________________\n                    "
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer" }, [
      _c("img", {
        staticClass: "bottom-image",
        attrs: { src: "/transaction/footer_seal.png" },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceActivityA2.vue?vue&type=template&id=213d089c&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceActivityA2.vue?vue&type=template&id=213d089c&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "pdf-item" }, [
    _c("div", { staticClass: "card", staticStyle: { width: "50rem" } }, [
      _c(
        "div",
        { staticClass: "card-body", staticStyle: { height: "1093px" } },
        [
          _c("img", {
            staticClass: "header-image",
            attrs: { src: "/transaction/header.png" },
          }),
          _vm._v(" "),
          _c("div", { staticClass: "barangay-wrap" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass: "col-md-3",
                  staticStyle: {
                    "border-right": "3px solid black",
                    "font-size": "0.7rem",
                  },
                },
                [
                  _c(
                    "b",
                    [
                      _c(
                        "center",
                        { staticStyle: { "margin-top": "63%" } },
                        [
                          _vm._l(
                            _vm.data.barangay_sanggunian,
                            function (sanggunian) {
                              return _c("div", { key: sanggunian.id }, [
                                sanggunian.barangay_sanggunian_category.id ===
                                  6 ||
                                sanggunian.barangay_sanggunian_category.id === 5
                                  ? _c("p", [
                                      _c(
                                        "b",
                                        {
                                          staticStyle: {
                                            "text-transform": "uppercase",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(sanggunian.barangay_name)
                                          ),
                                        ]
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            "font-size": "0.6rem",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              sanggunian
                                                .barangay_sanggunian_category
                                                .category_name
                                            )
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _c("p", [
                                      _c(
                                        "b",
                                        {
                                          staticStyle: {
                                            "text-transform": "uppercase",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "Hon." +
                                              _vm._s(sanggunian.barangay_name)
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            "font-size": "0.6rem",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              sanggunian
                                                .barangay_sanggunian_category
                                                .category_name
                                            )
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("br"),
                                    ]),
                              ])
                            }
                          ),
                          _vm._v(" "),
                          _c("div", [
                            _c("br"),
                            _c("br"),
                            _vm._v(" "),
                            _c("b", [_vm._v("Address: ")]),
                            _c("br"),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(_vm._s(_vm.data.barangay.address)),
                            ]),
                            _vm._v(" "),
                            _c("b", [_vm._v("Hotline No:")]),
                            _c("br"),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(_vm._s(_vm.data.barangay.hotline_no)),
                            ]),
                          ]),
                        ],
                        2
                      ),
                    ],
                    1
                  ),
                ]
              ),
              _vm._v(" "),
              _c("img", {
                staticClass: "barangay-watermark",
                staticStyle: { width: "574px" },
                attrs: { src: _vm.data.logo, alt: "" },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-9" }, [
                _c("div", { staticClass: "barangay-content" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("img", {
                        staticClass: "pull-left",
                        staticStyle: { width: "96px", "margin-right": "18px" },
                        attrs: { src: _vm.data.logo },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "text-center" }, [
                        _vm._m(0),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticStyle: {
                              "font-weight": "900",
                              "text-transform": "uppercase",
                              "margin-top": "-6%",
                              "margin-left": "8px",
                            },
                          },
                          [
                            _vm._v(
                              "\n                      BARANGAY " +
                                _vm._s(_vm.data.barangay.barangay_name) +
                                "\n                    "
                            ),
                          ]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "container",
                        staticStyle: { "margin-top": "-9%" },
                      },
                      [
                        _c("div", { staticClass: "barangay-body-paragraph" }, [
                          _c("p", { staticClass: "text-justify" }, [
                            _vm._v(
                              "\n                      Pursuant to the existing ordinance of this barangay,\n                      this CLEARANCE is to certify that the\n                      person/office/company, with details appears below,\n                      is/are permitted to conduct their activity in our\n                      barangay.\n                    "
                            ),
                          ]),
                          _vm._v(" "),
                          _vm._m(3),
                          _vm._v(" "),
                          _vm._m(4),
                          _vm._v(" "),
                          _vm._m(5),
                          _vm._v(" "),
                          _vm._m(6),
                          _vm._v(" "),
                          _vm._m(7),
                          _vm._v(" "),
                          _vm._m(8),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-justify" }, [
                            _vm._v(
                              "\n                      This permit may be revoked at any time when necessary to\n                      the public interest for violation of any provision of\n                      our existing laws, ordinances, and rules and regulations\n                      being enforced in this barangay.\n                    "
                            ),
                          ]),
                          _vm._v(" "),
                          _vm._m(9),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "pull-left" }, [
                                _vm._v("Issued by:"),
                              ]),
                              _vm._v(" "),
                              _c("br"),
                              _c("br"),
                              _vm._v(" "),
                              _c("p", [
                                _c(
                                  "b",
                                  {
                                    staticStyle: {
                                      "text-transform": "uppercase",
                                    },
                                  },
                                  [
                                    _c("u", [
                                      _vm._v(
                                        "\n                              " +
                                          _vm._s(
                                            _vm.data.barangay_sanggunian[
                                              _vm.data.barangay_sanggunian
                                                .length - 2
                                            ].barangay_name
                                          ) +
                                          "\n                            "
                                      ),
                                    ]),
                                  ]
                                ),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(
                                  "\n                          Barangay Secretary\n                        "
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "pull-left" }, [
                                _vm._v("Approved by:"),
                              ]),
                              _vm._v(" "),
                              _c("br"),
                              _c("br"),
                              _vm._v(" "),
                              _c("p", [
                                _c(
                                  "b",
                                  {
                                    staticStyle: {
                                      "text-transform": "uppercase",
                                    },
                                  },
                                  [
                                    _c("u", [
                                      _vm._v(
                                        "HON.\n                              " +
                                          _vm._s(
                                            _vm.data.barangay_sanggunian[0]
                                              .barangay_name
                                          )
                                      ),
                                    ]),
                                  ]
                                ),
                                _c("br"),
                                _vm._v(
                                  "\n                          Barangay Chairman\n                        "
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _vm._m(10),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticStyle: { "font-weight": "700" } }, [
      _c("b", [_vm._v("REPUBLIC OF THE PHILIPPINES")]),
      _vm._v(" "),
      _c("b", [_vm._v("PROVINCE OF LAGUNA")]),
      _c("br"),
      _vm._v(" "),
      _c("b", [_vm._v("CITY OF CALAMBA")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("img", {
        staticClass: "pull-left",
        staticStyle: { width: "100px", "margin-left": "20px" },
        attrs: { src: "/transaction/transparent_logo.png" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12 text-center" }, [
      _c(
        "h3",
        {
          staticStyle: {
            "font-weight": "600",
            "font-size": "1.5rem",
            "margin-top": "-12px",
          },
        },
        [
          _vm._v("\n                    BARANGAY CLEARANCE"),
          _c("br"),
          _vm._v(
            "\n                    (Individual/Private/ Gov’t Office to Conduct an Activity)\n                  "
          ),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticStyle: { "margin-right": "67px" } }, [
        _vm._v("Individual/Office/ Company Name:"),
      ]),
      _vm._v(" "),
      _c("b", { staticStyle: { "margin-right": "24px" } }, [_vm._v(":")]),
      _c("b", [
        _c("input", { staticStyle: { width: "40%" }, attrs: { type: "text" } }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticStyle: { "margin-right": "231px" } }, [
        _vm._v("Address"),
      ]),
      _vm._v(" "),
      _c("b", { staticStyle: { "margin-right": "24px" } }, [_vm._v(":")]),
      _c("b", [
        _c("input", { staticStyle: { width: "40%" }, attrs: { type: "text" } }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticStyle: { "margin-right": "213px" } }, [
        _vm._v("Contact No"),
      ]),
      _vm._v(" "),
      _c("b", { staticStyle: { "margin-right": "25px" } }, [_vm._v(":")]),
      _c("b", [
        _c("input", { staticStyle: { width: "40%" }, attrs: { type: "text" } }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticStyle: { "margin-right": "179px" } }, [
        _vm._v("Name of Activity"),
      ]),
      _vm._v(" "),
      _c("b", { staticStyle: { "margin-right": "25px" } }, [_vm._v(":")]),
      _c("b", [
        _c("input", { staticStyle: { width: "40%" }, attrs: { type: "text" } }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticStyle: { "margin-right": "163px" } }, [
        _vm._v("Purpose of Activity"),
      ]),
      _vm._v(" "),
      _c("b", { staticStyle: { "margin-right": "26px" } }, [_vm._v(":")]),
      _c("b", [
        _c("input", { staticStyle: { width: "40%" }, attrs: { type: "text" } }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticStyle: { "margin-right": "194px" } }, [
        _vm._v("Inclusive Date"),
      ]),
      _vm._v(" "),
      _c("b", { staticStyle: { "margin-right": "27px" } }, [_vm._v(":")]),
      _c("b", [
        _c("input", { staticStyle: { width: "40%" }, attrs: { type: "text" } }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("p", [_vm._v("Affirmation of the requesting party:")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n                        _____________________________________ "
        ),
        _c("br"),
        _vm._v(
          "(Signature\n                        over Printer Name and Date)\n                      "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer" }, [
      _c("img", {
        staticClass: "bottom-image",
        attrs: { src: "/transaction/footer_seal.png" },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceResidentA1.vue?vue&type=template&id=633f6c9c&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceResidentA1.vue?vue&type=template&id=633f6c9c&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "pdf-item" }, [
    _c("div", { staticClass: "card", staticStyle: { width: "50rem" } }, [
      _c(
        "div",
        { staticClass: "card-body", staticStyle: { height: "1016px" } },
        [
          _c("img", {
            staticClass: "header-image",
            attrs: { src: "/transaction/header.png" },
          }),
          _vm._v(" "),
          _c("div", { staticClass: "barangay-wrap" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass: "col-md-3",
                  staticStyle: {
                    "border-right": "3px solid black",
                    "font-size": "0.7rem",
                  },
                },
                [
                  _c(
                    "b",
                    [
                      _c(
                        "center",
                        { staticStyle: { "margin-top": "63%" } },
                        [
                          _vm._l(
                            _vm.data.barangay_sanggunian,
                            function (sanggunian) {
                              return _c("div", { key: sanggunian.id }, [
                                sanggunian.barangay_sanggunian_category.id ===
                                  6 ||
                                sanggunian.barangay_sanggunian_category.id === 5
                                  ? _c("p", [
                                      _c(
                                        "b",
                                        {
                                          staticStyle: {
                                            "text-transform": "uppercase",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(sanggunian.barangay_name)
                                          ),
                                        ]
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            "font-size": "0.6rem",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              sanggunian
                                                .barangay_sanggunian_category
                                                .category_name
                                            )
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _c("p", [
                                      _c(
                                        "b",
                                        {
                                          staticStyle: {
                                            "text-transform": "uppercase",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "Hon." +
                                              _vm._s(sanggunian.barangay_name)
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            "font-size": "0.6rem",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              sanggunian
                                                .barangay_sanggunian_category
                                                .category_name
                                            )
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("br"),
                                    ]),
                              ])
                            }
                          ),
                          _vm._v(" "),
                          _c("div", [
                            _c("br"),
                            _c("br"),
                            _vm._v(" "),
                            _c("b", [_vm._v("Address: ")]),
                            _c("br"),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(_vm._s(_vm.data.barangay.address)),
                            ]),
                            _vm._v(" "),
                            _c("b", [_vm._v("Hotline No:")]),
                            _c("br"),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(_vm._s(_vm.data.barangay.hotline_no)),
                            ]),
                          ]),
                        ],
                        2
                      ),
                    ],
                    1
                  ),
                ]
              ),
              _vm._v(" "),
              _c("img", {
                staticClass: "barangay-watermark",
                staticStyle: { width: "574px" },
                attrs: { src: _vm.data.logo, alt: "" },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-9" }, [
                _c("div", { staticClass: "barangay-content" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("img", {
                        staticClass: "pull-left",
                        staticStyle: { width: "96px", "margin-right": "18px" },
                        attrs: { src: _vm.data.logo },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "text-center" }, [
                        _vm._m(0),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticStyle: {
                              "font-weight": "900",
                              "text-transform": "uppercase",
                              "margin-top": "-6%",
                              "margin-left": "8px",
                            },
                          },
                          [
                            _vm._v(
                              "\n                      BARANGAY " +
                                _vm._s(_vm.data.barangay.barangay_name) +
                                "\n                    "
                            ),
                          ]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm._m(1),
                  ]),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "container",
                      staticStyle: { "margin-top": "-9%" },
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "barangay-body-paragraph" },
                        [
                          _c("center", [
                            _c("p", { staticClass: "text-justify" }, [
                              _vm._v(
                                "\n                      This is to certify that person, whose personal details\n                      appears below, is a bonafide resident of Barangay\n                      " +
                                  _vm._s(_vm.data.barangay.barangay_name) +
                                  " Calamba City, Laguna.\n                    "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-9" }, [
                              _c("div", [
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "67px" } },
                                  [_vm._v("Name of Resident")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "0px" } },
                                  [_vm._v(":")]
                                ),
                                _c("b", [
                                  _vm._v(
                                    " " + _vm._s(_vm.data.full_name) + " "
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "155px" } },
                                  [_vm._v("Age")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "0px" } },
                                  [_vm._v(":")]
                                ),
                                _c("b", [_vm._v(" " + _vm._s(_vm.data.age))]),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "108px" } },
                                  [_vm._v("Civil Status")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "0px" } },
                                  [_vm._v(":")]
                                ),
                                _c("b", [
                                  _vm._v(" " + _vm._s(_vm.data.civil_status)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "127px" } },
                                  [_vm._v("Address")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "0px" } },
                                  [_vm._v(":")]
                                ),
                                _c("b", [
                                  _vm._v(" " + _vm._s(_vm.data.address)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c("b", {
                                  staticStyle: { "margin-right": "183px" },
                                }),
                                _vm._v(" "),
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "0px" } },
                                  [_vm._v(":")]
                                ),
                                _c("b", [
                                  _vm._v(" " + _vm._s(_vm.data.address1)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "69px" } },
                                  [_vm._v("Residence Status")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "0px" } },
                                  [_vm._v(":")]
                                ),
                                _c("b", [
                                  _vm._v(
                                    " " + _vm._s(_vm.data.resident_status) + " "
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "49px" } },
                                  [_vm._v("Brgy Residence Date")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b",
                                  { staticStyle: { "margin-right": "0x" } },
                                  [_vm._v(":")]
                                ),
                                _c("b", [
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.data.barangay_residence_year)
                                  ),
                                ]),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-3" },
                              [
                                _c("v-easy-camera", {
                                  ref: "camera",
                                  attrs: { startOnMounted: _vm.startCamera },
                                  model: {
                                    value: _vm.picture,
                                    callback: function ($$v) {
                                      _vm.picture = $$v
                                    },
                                    expression: "picture",
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-success",
                                    on: { click: _vm.startPicture },
                                  },
                                  [
                                    _vm._v(
                                      "\n                        Photo\n                      "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-justify" }, [
                            _vm._v(
                              "\n                    This certification is being issued upon his/ her request\n                    for the following purpose/s:\n                  "
                            ),
                          ]),
                          _vm._v(" "),
                          _vm._m(3),
                          _vm._v(" "),
                          _c("p", { staticClass: "mt-3" }, [
                            _vm._v(
                              "\n                    Given this\n                    " +
                                _vm._s(
                                  this.date.toLocaleString("en-us", {
                                    month: "long",
                                  })
                                ) +
                                "\n                    " +
                                _vm._s(this.date.getDate()) +
                                ", " +
                                _vm._s(this.date.getFullYear()) +
                                " at\n                    Barangay " +
                                _vm._s(_vm.data.barangay.barangay_name) +
                                ", Calamba City\n                    Laguna.\n                  "
                            ),
                          ]),
                          _vm._v(" "),
                          _vm._m(4),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "pull-left" }, [
                                _vm._v("Issued by:"),
                              ]),
                              _vm._v(" "),
                              _c("br"),
                              _c("br"),
                              _vm._v(" "),
                              _c("p", [
                                _c(
                                  "b",
                                  {
                                    staticStyle: {
                                      "text-transform": "uppercase",
                                    },
                                  },
                                  [
                                    _c("u", [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(
                                            _vm.data.barangay_sanggunian[
                                              _vm.data.barangay_sanggunian
                                                .length - 2
                                            ].barangay_name
                                          ) +
                                          "\n                          "
                                      ),
                                    ]),
                                  ]
                                ),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(
                                  "\n                        Barangay Secretary\n                      "
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "pull-left" }, [
                                _vm._v("Approved by:"),
                              ]),
                              _vm._v(" "),
                              _c("br"),
                              _c("br"),
                              _vm._v(" "),
                              _c("p", [
                                _c(
                                  "b",
                                  {
                                    staticStyle: {
                                      "text-transform": "uppercase",
                                    },
                                  },
                                  [
                                    _c("u", [
                                      _vm._v(
                                        "HON.\n                            " +
                                          _vm._s(
                                            _vm.data.barangay_sanggunian[0]
                                              .barangay_name
                                          )
                                      ),
                                    ]),
                                  ]
                                ),
                                _c("br"),
                                _vm._v(
                                  "\n                        Barangay Chairman\n                      "
                                ),
                              ]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _vm._m(5),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-6" },
                              [
                                _c("center", [
                                  _c("img", {
                                    attrs: {
                                      src: "/transaction/finger_print.png",
                                    },
                                  }),
                                ]),
                              ],
                              1
                            ),
                          ]),
                        ],
                        1
                      ),
                    ]
                  ),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _vm._m(6),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticStyle: { "font-weight": "700" } }, [
      _c("b", [_vm._v("REPUBLIC OF THE PHILIPPINES")]),
      _vm._v(" "),
      _c("b", [_vm._v("PROVINCE OF LAGUNA")]),
      _c("br"),
      _vm._v(" "),
      _c("b", [_vm._v("CITY OF CALAMBA")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("img", {
        staticClass: "pull-left",
        staticStyle: { width: "100px", "margin-left": "20px" },
        attrs: { src: "/transaction/transparent_logo.png" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12 text-center" }, [
      _c(
        "h3",
        {
          staticStyle: {
            "font-weight": "600",
            "font-size": "1.5rem",
            "margin-top": "-12px",
          },
        },
        [
          _vm._v("\n                  BARANGAY CLEARANCE"),
          _c("br"),
          _vm._v("\n                  (Residency)\n                "),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("table", [
        _c("tbody", [
          _c("tr", [
            _c("td", [
              _c("input", { attrs: { type: "checkbox", name: "name1" } }),
              _vm._v(" \n                          "),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Employment Purposes")]),
            _vm._v(" "),
            _c("td", [
              _c("input", { attrs: { type: "checkbox", name: "name4" } }),
              _vm._v(" \n                          "),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("School / SSS / GSIS Reference")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _c("input", { attrs: { type: "checkbox", name: "name2" } }),
              _vm._v(" \n                          "),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Business Requirement")]),
            _vm._v(" "),
            _c("td", [
              _c("input", { attrs: { type: "checkbox", name: "name4" } }),
              _vm._v(" \n                          "),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Fire Arms / Drivers License")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _c("input", { attrs: { type: "checkbox", name: "name3" } }),
              _vm._v(" \n                          "),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Bank Requirement")]),
            _vm._v(" "),
            _c("td", [
              _c("input", { attrs: { type: "checkbox", name: "name4" } }),
              _vm._v(" \n                          "),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Electric / Water Connection")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _c("input", { attrs: { type: "checkbox", name: "name5" } }),
              _vm._v(" \n                          "),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("NBI Requirement")]),
            _vm._v(" "),
            _c("td", [
              _c("input", { attrs: { type: "checkbox", name: "name6" } }),
              _vm._v(" \n                          "),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Senior Citizens Requirement")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _c("input", { attrs: { type: "checkbox", name: "name7" } }),
              _vm._v(" \n                          "),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Medical Aid Requirement")]),
            _vm._v(" "),
            _c("td", [
              _c("input", { attrs: { type: "checkbox", name: "name8" } }),
              _vm._v(" \n                          "),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Overseas / Travel Requirement")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _c("input", { attrs: { type: "checkbox", name: "name9" } }),
              _vm._v(" \n                          "),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Other Requirements (Specify):")]),
            _vm._v(" "),
            _c("td"),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                staticStyle: { "padding-right": "74px", opacity: "1" },
                attrs: { type: "text" },
              }),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("p", [_vm._v("Affirmation of the requesting party:")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n                      _____________________________________ "
        ),
        _c("br"),
        _vm._v(
          "(Signature\n                      over Printer Name and Date)\n                    "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _vm._v("\n                      C.T.C. No."),
      _c("span", { staticStyle: { "margin-left": "24px" } }),
      _vm._v(":\n                      _________________ "),
      _c("br"),
      _vm._v("Date Issued\n                      "),
      _c("span", { staticStyle: { "margin-left": "9px" } }),
      _vm._v(" :\n                      _________________"),
      _c("br"),
      _vm._v("\n                      Place Issued "),
      _c("span", { staticStyle: { "margin-left": "4px" } }),
      _vm._v(
        " :\n                      _________________\n                    "
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer" }, [
      _c("img", {
        staticClass: "bottom-image",
        attrs: { src: "/transaction/footer_seal.png" },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Index.vue":
/*!**************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Index.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_47e5b5d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=47e5b5d0&scoped=true& */ "./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=template&id=47e5b5d0&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_47e5b5d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_47e5b5d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "47e5b5d0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/BarangayPermit/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=template&id=47e5b5d0&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=template&id=47e5b5d0&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_47e5b5d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=47e5b5d0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=template&id=47e5b5d0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_47e5b5d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_47e5b5d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationCohabitationB3.vue":
/*!********************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationCohabitationB3.vue ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BarangayCertificationCohabitationB3_vue_vue_type_template_id_5a2515ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarangayCertificationCohabitationB3.vue?vue&type=template&id=5a2515ce&scoped=true& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationCohabitationB3.vue?vue&type=template&id=5a2515ce&scoped=true&");
/* harmony import */ var _BarangayCertificationCohabitationB3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BarangayCertificationCohabitationB3.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationCohabitationB3.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BarangayCertificationCohabitationB3_vue_vue_type_style_index_0_id_5a2515ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BarangayCertificationCohabitationB3.vue?vue&type=style&index=0&id=5a2515ce&scoped=true&lang=css& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationCohabitationB3.vue?vue&type=style&index=0&id=5a2515ce&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BarangayCertificationCohabitationB3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BarangayCertificationCohabitationB3_vue_vue_type_template_id_5a2515ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BarangayCertificationCohabitationB3_vue_vue_type_template_id_5a2515ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5a2515ce",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationCohabitationB3.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationCohabitationB3.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationCohabitationB3.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationCohabitationB3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertificationCohabitationB3.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationCohabitationB3.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationCohabitationB3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationCohabitationB3.vue?vue&type=style&index=0&id=5a2515ce&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationCohabitationB3.vue?vue&type=style&index=0&id=5a2515ce&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationCohabitationB3_vue_vue_type_style_index_0_id_5a2515ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertificationCohabitationB3.vue?vue&type=style&index=0&id=5a2515ce&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationCohabitationB3.vue?vue&type=style&index=0&id=5a2515ce&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationCohabitationB3_vue_vue_type_style_index_0_id_5a2515ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationCohabitationB3_vue_vue_type_style_index_0_id_5a2515ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationCohabitationB3_vue_vue_type_style_index_0_id_5a2515ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationCohabitationB3_vue_vue_type_style_index_0_id_5a2515ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationCohabitationB3.vue?vue&type=template&id=5a2515ce&scoped=true&":
/*!***************************************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationCohabitationB3.vue?vue&type=template&id=5a2515ce&scoped=true& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationCohabitationB3_vue_vue_type_template_id_5a2515ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertificationCohabitationB3.vue?vue&type=template&id=5a2515ce&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationCohabitationB3.vue?vue&type=template&id=5a2515ce&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationCohabitationB3_vue_vue_type_template_id_5a2515ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationCohabitationB3_vue_vue_type_template_id_5a2515ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationIndigencyB4.vue":
/*!*****************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationIndigencyB4.vue ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BarangayCertificationIndigencyB4_vue_vue_type_template_id_b52df0e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarangayCertificationIndigencyB4.vue?vue&type=template&id=b52df0e4&scoped=true& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationIndigencyB4.vue?vue&type=template&id=b52df0e4&scoped=true&");
/* harmony import */ var _BarangayCertificationIndigencyB4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BarangayCertificationIndigencyB4.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationIndigencyB4.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BarangayCertificationIndigencyB4_vue_vue_type_style_index_0_id_b52df0e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BarangayCertificationIndigencyB4.vue?vue&type=style&index=0&id=b52df0e4&scoped=true&lang=css& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationIndigencyB4.vue?vue&type=style&index=0&id=b52df0e4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BarangayCertificationIndigencyB4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BarangayCertificationIndigencyB4_vue_vue_type_template_id_b52df0e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BarangayCertificationIndigencyB4_vue_vue_type_template_id_b52df0e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b52df0e4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationIndigencyB4.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationIndigencyB4.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationIndigencyB4.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationIndigencyB4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertificationIndigencyB4.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationIndigencyB4.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationIndigencyB4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationIndigencyB4.vue?vue&type=style&index=0&id=b52df0e4&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationIndigencyB4.vue?vue&type=style&index=0&id=b52df0e4&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationIndigencyB4_vue_vue_type_style_index_0_id_b52df0e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertificationIndigencyB4.vue?vue&type=style&index=0&id=b52df0e4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationIndigencyB4.vue?vue&type=style&index=0&id=b52df0e4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationIndigencyB4_vue_vue_type_style_index_0_id_b52df0e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationIndigencyB4_vue_vue_type_style_index_0_id_b52df0e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationIndigencyB4_vue_vue_type_style_index_0_id_b52df0e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationIndigencyB4_vue_vue_type_style_index_0_id_b52df0e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationIndigencyB4.vue?vue&type=template&id=b52df0e4&scoped=true&":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationIndigencyB4.vue?vue&type=template&id=b52df0e4&scoped=true& ***!
  \************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationIndigencyB4_vue_vue_type_template_id_b52df0e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertificationIndigencyB4.vue?vue&type=template&id=b52df0e4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationIndigencyB4.vue?vue&type=template&id=b52df0e4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationIndigencyB4_vue_vue_type_template_id_b52df0e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationIndigencyB4_vue_vue_type_template_id_b52df0e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationNonResidentB2.vue":
/*!*******************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationNonResidentB2.vue ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BarangayCertificationNonResidentB2_vue_vue_type_template_id_5905c926_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarangayCertificationNonResidentB2.vue?vue&type=template&id=5905c926&scoped=true& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationNonResidentB2.vue?vue&type=template&id=5905c926&scoped=true&");
/* harmony import */ var _BarangayCertificationNonResidentB2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BarangayCertificationNonResidentB2.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationNonResidentB2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BarangayCertificationNonResidentB2_vue_vue_type_style_index_0_id_5905c926_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BarangayCertificationNonResidentB2.vue?vue&type=style&index=0&id=5905c926&scoped=true&lang=css& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationNonResidentB2.vue?vue&type=style&index=0&id=5905c926&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BarangayCertificationNonResidentB2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BarangayCertificationNonResidentB2_vue_vue_type_template_id_5905c926_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BarangayCertificationNonResidentB2_vue_vue_type_template_id_5905c926_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5905c926",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationNonResidentB2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationNonResidentB2.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationNonResidentB2.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationNonResidentB2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertificationNonResidentB2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationNonResidentB2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationNonResidentB2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationNonResidentB2.vue?vue&type=style&index=0&id=5905c926&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationNonResidentB2.vue?vue&type=style&index=0&id=5905c926&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationNonResidentB2_vue_vue_type_style_index_0_id_5905c926_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertificationNonResidentB2.vue?vue&type=style&index=0&id=5905c926&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationNonResidentB2.vue?vue&type=style&index=0&id=5905c926&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationNonResidentB2_vue_vue_type_style_index_0_id_5905c926_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationNonResidentB2_vue_vue_type_style_index_0_id_5905c926_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationNonResidentB2_vue_vue_type_style_index_0_id_5905c926_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationNonResidentB2_vue_vue_type_style_index_0_id_5905c926_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationNonResidentB2.vue?vue&type=template&id=5905c926&scoped=true&":
/*!**************************************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationNonResidentB2.vue?vue&type=template&id=5905c926&scoped=true& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationNonResidentB2_vue_vue_type_template_id_5905c926_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertificationNonResidentB2.vue?vue&type=template&id=5905c926&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationNonResidentB2.vue?vue&type=template&id=5905c926&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationNonResidentB2_vue_vue_type_template_id_5905c926_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationNonResidentB2_vue_vue_type_template_id_5905c926_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationOathB6.vue":
/*!************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationOathB6.vue ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BarangayCertificationOathB6_vue_vue_type_template_id_95a4342c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarangayCertificationOathB6.vue?vue&type=template&id=95a4342c&scoped=true& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationOathB6.vue?vue&type=template&id=95a4342c&scoped=true&");
/* harmony import */ var _BarangayCertificationOathB6_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BarangayCertificationOathB6.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationOathB6.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BarangayCertificationOathB6_vue_vue_type_style_index_0_id_95a4342c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BarangayCertificationOathB6.vue?vue&type=style&index=0&id=95a4342c&scoped=true&lang=css& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationOathB6.vue?vue&type=style&index=0&id=95a4342c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BarangayCertificationOathB6_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BarangayCertificationOathB6_vue_vue_type_template_id_95a4342c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BarangayCertificationOathB6_vue_vue_type_template_id_95a4342c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "95a4342c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationOathB6.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationOathB6.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationOathB6.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationOathB6_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertificationOathB6.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationOathB6.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationOathB6_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationOathB6.vue?vue&type=style&index=0&id=95a4342c&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationOathB6.vue?vue&type=style&index=0&id=95a4342c&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationOathB6_vue_vue_type_style_index_0_id_95a4342c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertificationOathB6.vue?vue&type=style&index=0&id=95a4342c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationOathB6.vue?vue&type=style&index=0&id=95a4342c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationOathB6_vue_vue_type_style_index_0_id_95a4342c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationOathB6_vue_vue_type_style_index_0_id_95a4342c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationOathB6_vue_vue_type_style_index_0_id_95a4342c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationOathB6_vue_vue_type_style_index_0_id_95a4342c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationOathB6.vue?vue&type=template&id=95a4342c&scoped=true&":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationOathB6.vue?vue&type=template&id=95a4342c&scoped=true& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationOathB6_vue_vue_type_template_id_95a4342c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertificationOathB6.vue?vue&type=template&id=95a4342c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationOathB6.vue?vue&type=template&id=95a4342c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationOathB6_vue_vue_type_template_id_95a4342c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationOathB6_vue_vue_type_template_id_95a4342c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationRaB5.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationRaB5.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BarangayCertificationRaB5_vue_vue_type_template_id_8deb5fdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarangayCertificationRaB5.vue?vue&type=template&id=8deb5fdc&scoped=true& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationRaB5.vue?vue&type=template&id=8deb5fdc&scoped=true&");
/* harmony import */ var _BarangayCertificationRaB5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BarangayCertificationRaB5.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationRaB5.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BarangayCertificationRaB5_vue_vue_type_style_index_0_id_8deb5fdc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BarangayCertificationRaB5.vue?vue&type=style&index=0&id=8deb5fdc&scoped=true&lang=css& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationRaB5.vue?vue&type=style&index=0&id=8deb5fdc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BarangayCertificationRaB5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BarangayCertificationRaB5_vue_vue_type_template_id_8deb5fdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BarangayCertificationRaB5_vue_vue_type_template_id_8deb5fdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8deb5fdc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationRaB5.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationRaB5.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationRaB5.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationRaB5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertificationRaB5.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationRaB5.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationRaB5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationRaB5.vue?vue&type=style&index=0&id=8deb5fdc&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationRaB5.vue?vue&type=style&index=0&id=8deb5fdc&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationRaB5_vue_vue_type_style_index_0_id_8deb5fdc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertificationRaB5.vue?vue&type=style&index=0&id=8deb5fdc&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationRaB5.vue?vue&type=style&index=0&id=8deb5fdc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationRaB5_vue_vue_type_style_index_0_id_8deb5fdc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationRaB5_vue_vue_type_style_index_0_id_8deb5fdc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationRaB5_vue_vue_type_style_index_0_id_8deb5fdc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationRaB5_vue_vue_type_style_index_0_id_8deb5fdc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationRaB5.vue?vue&type=template&id=8deb5fdc&scoped=true&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationRaB5.vue?vue&type=template&id=8deb5fdc&scoped=true& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationRaB5_vue_vue_type_template_id_8deb5fdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertificationRaB5.vue?vue&type=template&id=8deb5fdc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationRaB5.vue?vue&type=template&id=8deb5fdc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationRaB5_vue_vue_type_template_id_8deb5fdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationRaB5_vue_vue_type_template_id_8deb5fdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationResidentB1.vue":
/*!****************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationResidentB1.vue ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BarangayCertificationResidentB1_vue_vue_type_template_id_6b1f5b22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarangayCertificationResidentB1.vue?vue&type=template&id=6b1f5b22&scoped=true& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationResidentB1.vue?vue&type=template&id=6b1f5b22&scoped=true&");
/* harmony import */ var _BarangayCertificationResidentB1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BarangayCertificationResidentB1.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationResidentB1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BarangayCertificationResidentB1_vue_vue_type_style_index_0_id_6b1f5b22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BarangayCertificationResidentB1.vue?vue&type=style&index=0&id=6b1f5b22&scoped=true&lang=css& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationResidentB1.vue?vue&type=style&index=0&id=6b1f5b22&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BarangayCertificationResidentB1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BarangayCertificationResidentB1_vue_vue_type_template_id_6b1f5b22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BarangayCertificationResidentB1_vue_vue_type_template_id_6b1f5b22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6b1f5b22",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationResidentB1.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationResidentB1.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationResidentB1.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationResidentB1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertificationResidentB1.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationResidentB1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationResidentB1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationResidentB1.vue?vue&type=style&index=0&id=6b1f5b22&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationResidentB1.vue?vue&type=style&index=0&id=6b1f5b22&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationResidentB1_vue_vue_type_style_index_0_id_6b1f5b22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertificationResidentB1.vue?vue&type=style&index=0&id=6b1f5b22&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationResidentB1.vue?vue&type=style&index=0&id=6b1f5b22&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationResidentB1_vue_vue_type_style_index_0_id_6b1f5b22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationResidentB1_vue_vue_type_style_index_0_id_6b1f5b22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationResidentB1_vue_vue_type_style_index_0_id_6b1f5b22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationResidentB1_vue_vue_type_style_index_0_id_6b1f5b22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationResidentB1.vue?vue&type=template&id=6b1f5b22&scoped=true&":
/*!***********************************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationResidentB1.vue?vue&type=template&id=6b1f5b22&scoped=true& ***!
  \***********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationResidentB1_vue_vue_type_template_id_6b1f5b22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertificationResidentB1.vue?vue&type=template&id=6b1f5b22&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertificationResidentB1.vue?vue&type=template&id=6b1f5b22&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationResidentB1_vue_vue_type_template_id_6b1f5b22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertificationResidentB1_vue_vue_type_template_id_6b1f5b22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceActivityA2.vue":
/*!************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceActivityA2.vue ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BarangayClearanceActivityA2_vue_vue_type_template_id_213d089c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarangayClearanceActivityA2.vue?vue&type=template&id=213d089c&scoped=true& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceActivityA2.vue?vue&type=template&id=213d089c&scoped=true&");
/* harmony import */ var _BarangayClearanceActivityA2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BarangayClearanceActivityA2.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceActivityA2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BarangayClearanceActivityA2_vue_vue_type_style_index_0_id_213d089c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BarangayClearanceActivityA2.vue?vue&type=style&index=0&id=213d089c&scoped=true&lang=css& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceActivityA2.vue?vue&type=style&index=0&id=213d089c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BarangayClearanceActivityA2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BarangayClearanceActivityA2_vue_vue_type_template_id_213d089c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BarangayClearanceActivityA2_vue_vue_type_template_id_213d089c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "213d089c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceActivityA2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceActivityA2.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceActivityA2.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearanceActivityA2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayClearanceActivityA2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceActivityA2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearanceActivityA2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceActivityA2.vue?vue&type=style&index=0&id=213d089c&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceActivityA2.vue?vue&type=style&index=0&id=213d089c&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearanceActivityA2_vue_vue_type_style_index_0_id_213d089c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayClearanceActivityA2.vue?vue&type=style&index=0&id=213d089c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceActivityA2.vue?vue&type=style&index=0&id=213d089c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearanceActivityA2_vue_vue_type_style_index_0_id_213d089c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearanceActivityA2_vue_vue_type_style_index_0_id_213d089c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearanceActivityA2_vue_vue_type_style_index_0_id_213d089c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearanceActivityA2_vue_vue_type_style_index_0_id_213d089c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceActivityA2.vue?vue&type=template&id=213d089c&scoped=true&":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceActivityA2.vue?vue&type=template&id=213d089c&scoped=true& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearanceActivityA2_vue_vue_type_template_id_213d089c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayClearanceActivityA2.vue?vue&type=template&id=213d089c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceActivityA2.vue?vue&type=template&id=213d089c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearanceActivityA2_vue_vue_type_template_id_213d089c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearanceActivityA2_vue_vue_type_template_id_213d089c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceResidentA1.vue":
/*!************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceResidentA1.vue ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BarangayClearanceResidentA1_vue_vue_type_template_id_633f6c9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarangayClearanceResidentA1.vue?vue&type=template&id=633f6c9c&scoped=true& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceResidentA1.vue?vue&type=template&id=633f6c9c&scoped=true&");
/* harmony import */ var _BarangayClearanceResidentA1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BarangayClearanceResidentA1.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceResidentA1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BarangayClearanceResidentA1_vue_vue_type_style_index_0_id_633f6c9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BarangayClearanceResidentA1.vue?vue&type=style&index=0&id=633f6c9c&scoped=true&lang=css& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceResidentA1.vue?vue&type=style&index=0&id=633f6c9c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BarangayClearanceResidentA1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BarangayClearanceResidentA1_vue_vue_type_template_id_633f6c9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BarangayClearanceResidentA1_vue_vue_type_template_id_633f6c9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "633f6c9c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceResidentA1.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceResidentA1.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceResidentA1.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearanceResidentA1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayClearanceResidentA1.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceResidentA1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearanceResidentA1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceResidentA1.vue?vue&type=style&index=0&id=633f6c9c&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceResidentA1.vue?vue&type=style&index=0&id=633f6c9c&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearanceResidentA1_vue_vue_type_style_index_0_id_633f6c9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayClearanceResidentA1.vue?vue&type=style&index=0&id=633f6c9c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceResidentA1.vue?vue&type=style&index=0&id=633f6c9c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearanceResidentA1_vue_vue_type_style_index_0_id_633f6c9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearanceResidentA1_vue_vue_type_style_index_0_id_633f6c9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearanceResidentA1_vue_vue_type_style_index_0_id_633f6c9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearanceResidentA1_vue_vue_type_style_index_0_id_633f6c9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceResidentA1.vue?vue&type=template&id=633f6c9c&scoped=true&":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceResidentA1.vue?vue&type=template&id=633f6c9c&scoped=true& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearanceResidentA1_vue_vue_type_template_id_633f6c9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayClearanceResidentA1.vue?vue&type=template&id=633f6c9c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearanceResidentA1.vue?vue&type=template&id=633f6c9c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearanceResidentA1_vue_vue_type_template_id_633f6c9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearanceResidentA1_vue_vue_type_template_id_633f6c9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);