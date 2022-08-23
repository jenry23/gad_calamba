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
/* harmony import */ var _Transaction_BarangayClearance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Transaction/BarangayClearance */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearance.vue");
/* harmony import */ var _Transaction_BarangayCertification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Transaction/BarangayCertification */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertification.vue");
/* harmony import */ var _Transaction_Cohabitation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Transaction/Cohabitation */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue");
/* harmony import */ var vue_html2pdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-html2pdf */ "./node_modules/vue-html2pdf/dist/vue-html2pdf.esm.js");
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
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BarangayClearance: _Transaction_BarangayClearance__WEBPACK_IMPORTED_MODULE_1__["default"],
    Cohabitation: _Transaction_Cohabitation__WEBPACK_IMPORTED_MODULE_3__["default"],
    BarangayCertification: _Transaction_BarangayCertification__WEBPACK_IMPORTED_MODULE_2__["default"],
    VueHtml2pdf: vue_html2pdf__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      status: '',
      activeField: '',
      barangay_clearance_data: [],
      is_barangay: 0,
      transaction_required: false,
      resident_required: false,
      result: []
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('BarangayPermitSingle', ['entry', 'loading', 'lists', 'data'])),
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
    },
    submitForm: function submitForm() {
      var _this = this;

      axios.post('transaction', this.entry).then(function (response) {
        _this.result = response.data;
        _this.is_barangay = _this.entry.transaction.id;
      }); // this.storeData()
      //     .then(() => {
      //         // this.$router.push({ name: 'transaction.index' })
      //         // this.$eventHub.$emit('create-success')
      //     })
      //     .catch(error => {
      //         console.log(this.data);
      //         this.status = 'failed'
      //         _.delay(() => {
      //             this.status = ''
      //         }, 3000)
      //     })
      // this.is_barangay = 1;
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertification.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertification.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearance.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearance.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=style&index=0&id=47e5b5d0&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=style&index=0&id=47e5b5d0&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.responsive-iframe[data-v-47e5b5d0] {\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tbottom: 0;\r\n\tright: 0;\r\n\twidth: 100%;\r\n\theight: 100vh;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertification.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertification.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.vl {\r\n\tborder-left: 3px solid black;\r\n\theight: 1150%;\n}\n.barangay-header-logo {\r\n\tmargin-top: -96px;\n}\n.barangay-header-line {\r\n\theight: 6px;\r\n\tborder-width: 0;\r\n\tcolor: gray;\r\n\tbackground-color: gray;\r\n\tmargin-top: -40px;\n}\n.barangay-wrap {\r\n\tposition: relative;\n}\n.barangay-watermark {\r\n\topacity: 0.2;\r\n\tposition: absolute;\r\n\tmargin-left: 10%;\n}\n.barangay-content {\r\n\tposition: relative;\n}\n.barangay-finger-print {\r\n\tmargin-right: 10%;\r\n\tmargin-top: 2%;\n}\n.barangay-body-paragraph {\r\n\tmargin-top: 11%;\r\n\tfont-weight: 500;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearance.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearance.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.vl {\r\n\tborder-left: 3px solid black;\r\n\theight: 1150%;\n}\n.barangay-header-logo {\r\n\tmargin-top: -96px;\n}\n.barangay-header-line {\r\n\theight: 6px;\r\n\tborder-width: 0;\r\n\tcolor: gray;\r\n\tbackground-color: gray;\r\n\tmargin-top: -40px;\n}\n.barangay-wrap {\r\n\tposition: relative;\n}\n.barangay-watermark {\r\n\topacity: 0.2;\r\n\tposition: absolute;\r\n\tmargin-left: 10%;\n}\n.barangay-content {\r\n\tposition: relative;\n}\n.barangay-finger-print {\r\n\tmargin-right: 10%;\r\n\tmargin-top: 2%;\n}\n.barangay-body-paragraph {\r\n\tmargin-top: 11%;\r\n\tfont-weight: 500;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.barangay-header-logo {\r\n\tmargin-top: -96px;\n}\n.barangay-header-line {\r\n\theight: 6px;\r\n\tborder-width: 0;\r\n\tcolor: gray;\r\n\tbackground-color: gray;\r\n\tmargin-top: -40px;\n}\n.barangay-wrap {\r\n\tposition: relative;\n}\n.barangay-watermark {\r\n\topacity: 0.2;\r\n\tposition: absolute;\r\n\tmargin-left: 10%;\n}\n.barangay-content {\r\n\tposition: relative;\n}\n.barangay-finger-print {\r\n\tmargin-right: 10%;\r\n\tmargin-top: 2%;\n}\n.barangay-body-paragraph {\r\n\tmargin-top: 11%;\r\n\tfont-weight: 500;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=style&index=0&id=47e5b5d0&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=style&index=0&id=47e5b5d0&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=47e5b5d0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=style&index=0&id=47e5b5d0&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertification.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertification.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertification.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertification.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearance.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearance.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayClearance.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearance.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Cohabitation.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue?vue&type=style&index=0&lang=css&");

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
                            required: "",
                          },
                          on: {
                            input: _vm.updateResident,
                            focus: function ($event) {
                              return _vm.focusField("resident")
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
                                            required: !_vm.resident_required,
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
            filename: "content",
            "pdf-quality": 2,
            "manual-pagination": false,
            "pdf-format": "a3",
            "pdf-orientation": "portrait",
            "pdf-content-width": "1200px",
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
                ? _c("barangay-clearance", {
                    ref: "barangay_clearance",
                    attrs: { data: _vm.result },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.is_barangay === 2
                ? _c("barangay-certification", {
                    ref: "barangay_certification",
                    attrs: { data: _vm.result },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.is_barangay === 3
                ? _c("cohabitation", {
                    ref: "barangay_clearance",
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
      { staticClass: "card-header card-header-primary card-header-icon" },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertification.vue?vue&type=template&id=44f16250&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertification.vue?vue&type=template&id=44f16250& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "card", staticStyle: { width: "63rem" } }, [
      _c("div", { staticClass: "barangay-header" }, [
        _c("img", {
          attrs: {
            src: "/transaction/header.png",
            width: "100%",
            height: "20%",
          },
        }),
        _vm._v(" "),
        _c("div", { staticClass: "row barangay-header-logo" }, [
          _c("div", { staticClass: "col-md-3" }, [
            _c("img", {
              staticClass: "pull-right",
              staticStyle: {
                width: "165px",
                "margin-top": "-25%",
                "margin-right": "18px",
              },
              attrs: { src: _vm.data.logo },
            }),
            _vm._v(" "),
            _c("br"),
          ]),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [
            _c(
              "div",
              {
                staticClass: "text-center",
                staticStyle: { "margin-top": "-19%" },
              },
              [
                _c("p", { staticStyle: { "font-weight": "700" } }, [
                  _c("b", [_vm._v("REPUBLIC OF THE PHILIPPINES")]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("b", [_vm._v("PROVINCE OF LAGUNA")]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("b", [_vm._v("CITY OF CALAMBA")]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("b", [
                    _vm._v(
                      "BARANGAY " + _vm._s(_vm.data.barangay.barangay_name)
                    ),
                  ]),
                ]),
              ]
            ),
          ]),
          _vm._v(" "),
          _vm._m(1),
        ]),
      ]),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body", staticStyle: { height: "1020px" } },
        [
          _c("div", { staticClass: "barangay-wrap" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-3" }, [
                _c("br"),
                _vm._v(" "),
                _c(
                  "b",
                  [
                    _c("center", [
                      _c("p", [
                        _vm._v("HON. LEONARDO P. PIAMONTE "),
                        _c("br"),
                        _vm._v("Barangay Chairman"),
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("p", [_vm._v("SANGGUNIANG BARANGAY")]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n\t\t\t\t\t\t\t\t\tRowena S, Naredo "),
                        _c("br"),
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\tBarangay Councilor\n\t\t\t\t\t\t\t\t"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n\t\t\t\t\t\t\t\t\tZosimo A. Piamonte"),
                        _c("br"),
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\tBarangay Councilor\n\t\t\t\t\t\t\t\t"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n\t\t\t\t\t\t\t\t\tLeonisa G. Rimas"),
                        _c("br"),
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\tBarangay Councilor\n\t\t\t\t\t\t\t\t"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n\t\t\t\t\t\t\t\t\tOscar R. Limpiada Sr."),
                        _c("br"),
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\tBarangay Councilor\n\t\t\t\t\t\t\t\t"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n\t\t\t\t\t\t\t\t\tJeffrey R. Manzano"),
                        _c("br"),
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\tBarangay Councilor\n\t\t\t\t\t\t\t\t"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n\t\t\t\t\t\t\t\t\tCharles Andy R. Desepida"),
                        _c("br"),
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\tSK Chairman\n\t\t\t\t\t\t\t\t"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n\t\t\t\t\t\t\t\t\tROSENDO O. NAREDO"),
                        _c("br"),
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\tBarangay Secretary\n\t\t\t\t\t\t\t\t"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n\t\t\t\t\t\t\t\t\tJENALYN C. SERGIO"),
                        _c("br"),
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\tBarangay Treasurer\n\t\t\t\t\t\t\t\t"
                        ),
                      ]),
                    ]),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-9" }, [
                _c("img", {
                  staticClass: "barangay-watermark",
                  staticStyle: { width: "574px" },
                  attrs: { src: _vm.data.logo, alt: "" },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "barangay-content" }, [
                  _c("div", { staticClass: "barangay-body" }, [
                    _vm._m(3),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "container",
                        staticStyle: { "margin-top": "-7%" },
                      },
                      [
                        _c("div", { staticClass: "barangay-body-paragraph" }, [
                          _c("p", { staticClass: "text-justify" }, [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t\t\t\tThis is to certify that person, whose personal details appears below,\n\t\t\t\t\t\t\t\t\t\t\tis a bonafide resident of Barangay\n\t\t\t\t\t\t\t\t\t\t\t" +
                                _vm._s(_vm.data.barangay.barangay_name) +
                                " Calamba City, Laguna.\n\t\t\t\t\t\t\t\t\t\t"
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "b",
                              { staticStyle: { "margin-right": "67px" } },
                              [_vm._v("Name of Resident")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b",
                              { staticStyle: { "margin-right": "145px" } },
                              [_vm._v(":")]
                            ),
                            _c("b", [_vm._v(_vm._s(_vm.data.full_name) + " ")]),
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
                              { staticStyle: { "margin-right": "141px" } },
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
                              { staticStyle: { "margin-right": "141px" } },
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
                              { staticStyle: { "margin-right": "142px" } },
                              [_vm._v(":")]
                            ),
                            _c("b", [_vm._v(" " + _vm._s(_vm.data.address))]),
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
                              { staticStyle: { "margin-right": "145px" } },
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
                              { staticStyle: { "margin-right": "140px" } },
                              [_vm._v(":")]
                            ),
                            _c("b", [
                              _vm._v(
                                " " + _vm._s(_vm.data.barangay_residence_year)
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-justify" }, [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t\t\t\tThis clearance is being issued upon his/her request for the following\n\t\t\t\t\t\t\t\t\t\t\tpurpose/s.\n\t\t\t\t\t\t\t\t\t\t"
                            ),
                          ]),
                          _vm._v(" "),
                          _vm._m(4),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t\t\t\tGiven this _____ day of _________ at Barangay Bucal, Calamba City\n\t\t\t\t\t\t\t\t\t\t\tLaguna\n\t\t\t\t\t\t\t\t\t\t"
                            ),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "pull-right",
                              staticStyle: { "margin-right": "20%" },
                            },
                            [_vm._v("Approved By:")]
                          ),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _vm._m(5),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-6" },
                              [
                                _c("center", [
                                  _c("p", [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t_____________________________ "
                                    ),
                                    _c("br"),
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tDELFIN M. DE CLARO"
                                    ),
                                    _c("br"),
                                    _vm._v(
                                      "Punong Barangay\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                    ),
                                  ]),
                                ]),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "pull-right",
                              staticStyle: { "margin-right": "20%" },
                            },
                            [_vm._v("Issued By:")]
                          ),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _vm._m(6),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-6" },
                              [
                                _c("center", [
                                  _c("p", [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t_____________________________ "
                                    ),
                                    _c("br"),
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tDELFIN M. DE CLARO"
                                    ),
                                    _c("br"),
                                    _vm._v(
                                      "Punong Barangay\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                    ),
                                  ]),
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
        ]
      ),
      _vm._v(" "),
      _vm._m(7),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("div", { staticClass: "vl" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("img", {
        staticClass: "pull-left",
        staticStyle: {
          width: "120px",
          "margin-top": "-50%",
          "margin-left": "20px",
        },
        attrs: { src: "/transaction/transparent_logo.png" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-8" }, [
        _c("hr", { staticClass: "barangay-header-line" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c(
        "h3",
        { staticStyle: { "font-weight": "600", "font-size": "1.5rem" } },
        [
          _vm._v(
            "\n\t\t\t\t\t\t\t\t\t\tB A R A N G A Y C E R T I F I C A T I O N "
          ),
          _c("br"),
          _vm._v("\n\t\t\t\t\t\t\t\t\t\t(Residency)\n\t\t\t\t\t\t\t\t\t"),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("table", { staticClass: "table table-responsive" }, [
        _c("tbody", [
          _c("tr", [
            _c("td", [
              _c("div", { staticClass: "form-check" }, [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", value: "" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "form-check-sign" }, [
                    _c("span", { staticClass: "check" }),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("td", { staticStyle: { width: "50%" } }, [
              _vm._v("Employment Purposes"),
            ]),
            _vm._v(" "),
            _c("td", [
              _c("div", { staticClass: "form-check" }, [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", value: "" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "form-check-sign" }, [
                    _c("span", { staticClass: "check" }),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("School / SSS / GSIS Reference")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _c("div", { staticClass: "form-check" }, [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", value: "" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "form-check-sign" }, [
                    _c("span", { staticClass: "check" }),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Business Requirement")]),
            _vm._v(" "),
            _c("td", [
              _c("div", { staticClass: "form-check" }, [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", value: "" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "form-check-sign" }, [
                    _c("span", { staticClass: "check" }),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Fire Arms / Drivers License")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _c("div", { staticClass: "form-check" }, [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", value: "" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "form-check-sign" }, [
                    _c("span", { staticClass: "check" }),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Bank Requirement")]),
            _vm._v(" "),
            _c("td", [
              _c("div", { staticClass: "form-check" }, [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", value: "" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "form-check-sign" }, [
                    _c("span", { staticClass: "check" }),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Electric / Water Connection")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _c("div", { staticClass: "form-check" }, [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", value: "" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "form-check-sign" }, [
                    _c("span", { staticClass: "check" }),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("NBI Requirement")]),
            _vm._v(" "),
            _c("td", [
              _c("div", { staticClass: "form-check" }, [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", value: "" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "form-check-sign" }, [
                    _c("span", { staticClass: "check" }),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Senior Citizens Requirement")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _c("div", { staticClass: "form-check" }, [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", value: "" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "form-check-sign" }, [
                    _c("span", { staticClass: "check" }),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Medical Aid Requirement")]),
            _vm._v(" "),
            _c("td", [
              _c("div", { staticClass: "form-check" }, [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", value: "" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "form-check-sign" }, [
                    _c("span", { staticClass: "check" }),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Overseas / Travel Requirement")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _c("div", { staticClass: "form-check" }, [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", value: "" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "form-check-sign" }, [
                    _c("span", { staticClass: "check" }),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Other Requirements (Specify):")]),
            _vm._v(" "),
            _c("td"),
            _vm._v(" "),
            _c("td", [_vm._v("__________________________")]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c("p", [
        _vm._v(
          "\n\t\t\t\t\t\t\t\t\t\t\t\t\t__________________________________________ "
        ),
        _c("br"),
        _vm._v(
          "(Signature\n\t\t\t\t\t\t\t\t\t\t\t\t\tover Printed Name of Resident)\n\t\t\t\t\t\t\t\t\t\t\t\t"
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tC.T.C. No.: _________________ "),
      _c("br"),
      _vm._v("Date Issued:\n\t\t\t\t\t\t\t\t\t\t\t\t_________________"),
      _c("br"),
      _vm._v(
        "\n\t\t\t\t\t\t\t\t\t\t\t\tPlace Issued: _________________\n\t\t\t\t\t\t\t\t\t\t\t"
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer" }, [
      _c("img", {
        attrs: { src: "/transaction/footer.png", width: "100%", height: "20%" },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearance.vue?vue&type=template&id=59bc44b2&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearance.vue?vue&type=template&id=59bc44b2& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "card", staticStyle: { width: "63rem" } }, [
      _c("div", { staticClass: "barangay-header" }, [
        _c("img", {
          attrs: {
            src: "/transaction/header.png",
            width: "100%",
            height: "20%",
          },
        }),
        _vm._v(" "),
        _c("div", { staticClass: "row barangay-header-logo" }, [
          _c("div", { staticClass: "col-md-3" }, [
            _c("img", {
              staticClass: "pull-right",
              staticStyle: {
                width: "165px",
                "margin-top": "-25%",
                "margin-right": "18px",
              },
              attrs: { src: _vm.data.logo },
            }),
            _vm._v(" "),
            _c("br"),
          ]),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [
            _c(
              "div",
              {
                staticClass: "text-center",
                staticStyle: { "margin-top": "-19%" },
              },
              [
                _c("p", { staticStyle: { "font-weight": "700" } }, [
                  _c("b", [_vm._v("REPUBLIC OF THE PHILIPPINES")]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("b", [_vm._v("PROVINCE OF LAGUNA")]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("b", [_vm._v("CITY OF CALAMBA")]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("b", [
                    _vm._v(
                      "BARANGAY " + _vm._s(_vm.data.barangay.barangay_name)
                    ),
                  ]),
                ]),
              ]
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-2" }, [
            _c("img", {
              staticClass: "pull-left",
              staticStyle: {
                width: "120px",
                "margin-top": "-50%",
                "margin-left": "20px",
              },
              attrs: { src: _vm.data.logo },
            }),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body", staticStyle: { height: "1020px" } },
        [
          _c("div", { staticClass: "barangay-wrap" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-3" }, [
                _c("br"),
                _vm._v(" "),
                _c(
                  "b",
                  [
                    _c("center", [
                      _c("p", [
                        _vm._v("HON. LEONARDO P. PIAMONTE "),
                        _c("br"),
                        _vm._v("Barangay Chairman"),
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("p", [_vm._v("SANGGUNIANG BARANGAY")]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n\t\t\t\t\t\t\t\t\tRowena S, Naredo "),
                        _c("br"),
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\tBarangay Councilor\n\t\t\t\t\t\t\t\t"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n\t\t\t\t\t\t\t\t\tZosimo A. Piamonte"),
                        _c("br"),
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\tBarangay Councilor\n\t\t\t\t\t\t\t\t"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n\t\t\t\t\t\t\t\t\tLeonisa G. Rimas"),
                        _c("br"),
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\tBarangay Councilor\n\t\t\t\t\t\t\t\t"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n\t\t\t\t\t\t\t\t\tOscar R. Limpiada Sr."),
                        _c("br"),
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\tBarangay Councilor\n\t\t\t\t\t\t\t\t"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n\t\t\t\t\t\t\t\t\tJeffrey R. Manzano"),
                        _c("br"),
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\tBarangay Councilor\n\t\t\t\t\t\t\t\t"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n\t\t\t\t\t\t\t\t\tCharles Andy R. Desepida"),
                        _c("br"),
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\tSK Chairman\n\t\t\t\t\t\t\t\t"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n\t\t\t\t\t\t\t\t\tROSENDO O. NAREDO"),
                        _c("br"),
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\tBarangay Secretary\n\t\t\t\t\t\t\t\t"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n\t\t\t\t\t\t\t\t\tJENALYN C. SERGIO"),
                        _c("br"),
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\tBarangay Treasurer\n\t\t\t\t\t\t\t\t"
                        ),
                      ]),
                    ]),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-9" }, [
                _c("img", {
                  staticClass: "barangay-watermark",
                  staticStyle: { width: "574px" },
                  attrs: { src: "/transaction/bucal.png", alt: "" },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "barangay-content" }, [
                  _c("div", { staticClass: "barangay-body" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "container",
                        staticStyle: { "margin-top": "-7%" },
                      },
                      [
                        _c("div", { staticClass: "barangay-body-paragraph" }, [
                          _c("p", { staticClass: "text-justify" }, [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t\t\t\tThis is to certify that " +
                                _vm._s(_vm.data.full_name) +
                                ", " +
                                _vm._s(_vm.data.age) +
                                ",\n\t\t\t\t\t\t\t\t\t\t\t" +
                                _vm._s(_vm.data.civil_status) +
                                ", is a bonafide and\n\t\t\t\t\t\t\t\t\t\t\t" +
                                _vm._s(_vm.data.resident_status) +
                                " resident of " +
                                _vm._s(_vm.data.address) +
                                " Barangay\n\t\t\t\t\t\t\t\t\t\t\t" +
                                _vm._s(_vm.data.barangay.barangay_name) +
                                " Calamba City, Laguna since\n\t\t\t\t\t\t\t\t\t\t\t" +
                                _vm._s(_vm.data.barangay_residence_year) +
                                ".\n\t\t\t\t\t\t\t\t\t\t"
                            ),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t\t\t\tHe/ she has been known to be a person of good moral character, a\n\t\t\t\t\t\t\t\t\t\t\tlaw-abiding citizen of the community. He/she has never been involved\n\t\t\t\t\t\t\t\t\t\t\tin any act of criminal cases or member of any group or movement which\n\t\t\t\t\t\t\t\t\t\t\taims to subvert this duly constituted government of the Republic of\n\t\t\t\t\t\t\t\t\t\t\tthe Philippines. Certifying also that he/she did not violate any\n\t\t\t\t\t\t\t\t\t\t\tBarangay / City Ordinance.\n\t\t\t\t\t\t\t\t\t\t"
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-justify" }, [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t\t\t\tThis Certification is being issued upon his/her request for the\n\t\t\t\t\t\t\t\t\t\t\tfollowing purposes:\n\t\t\t\t\t\t\t\t\t\t"
                            ),
                          ]),
                          _vm._v(" "),
                          _vm._m(3),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t\t\t\tGiven this _____ day of _________ at Barangay\n\t\t\t\t\t\t\t\t\t\t\t" +
                                _vm._s(_vm.data.barangay.barangay_name) +
                                ", Calamba City Laguna\n\t\t\t\t\t\t\t\t\t\t"
                            ),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "pull-right",
                              staticStyle: { "margin-right": "20%" },
                            },
                            [_vm._v("Approved By:")]
                          ),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _vm._m(4),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-6" },
                              [
                                _c("center", [
                                  _c("p", [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t_____________________________ "
                                    ),
                                    _c("br"),
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tDELFIN M. DE CLARO"
                                    ),
                                    _c("br"),
                                    _vm._v(
                                      "Punong Barangay\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                    ),
                                  ]),
                                ]),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "pull-right",
                              staticStyle: { "margin-right": "20%" },
                            },
                            [_vm._v("Issued By:")]
                          ),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _vm._m(5),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-6" },
                              [
                                _c("center", [
                                  _c("p", [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t_____________________________ "
                                    ),
                                    _c("br"),
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tDELFIN M. DE CLARO"
                                    ),
                                    _c("br"),
                                    _vm._v(
                                      "Punong Barangay\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                    ),
                                  ]),
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
        ]
      ),
      _vm._v(" "),
      _vm._m(6),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("div", { staticClass: "vl" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-8" }, [
        _c("hr", { staticClass: "barangay-header-line" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c(
        "h3",
        { staticStyle: { "font-weight": "600", "font-size": "1.5rem" } },
        [
          _vm._v("\n\t\t\t\t\t\t\t\t\t\tB A R A N G A Y C L E A R A N C E "),
          _c("br"),
          _vm._v("\n\t\t\t\t\t\t\t\t\t\t(Residency)\n\t\t\t\t\t\t\t\t\t"),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("table", { staticClass: "table table-responsive" }, [
        _c("tbody", [
          _c("tr", [
            _c("td", [
              _c("div", { staticClass: "form-check" }, [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", value: "" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "form-check-sign" }, [
                    _c("span", { staticClass: "check" }),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("td", { staticStyle: { width: "50%" } }, [
              _vm._v("Employment Purposes"),
            ]),
            _vm._v(" "),
            _c("td", [
              _c("div", { staticClass: "form-check" }, [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", value: "" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "form-check-sign" }, [
                    _c("span", { staticClass: "check" }),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("School / SSS / GSIS Reference")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _c("div", { staticClass: "form-check" }, [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", value: "" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "form-check-sign" }, [
                    _c("span", { staticClass: "check" }),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Business Requirement")]),
            _vm._v(" "),
            _c("td", [
              _c("div", { staticClass: "form-check" }, [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", value: "" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "form-check-sign" }, [
                    _c("span", { staticClass: "check" }),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Fire Arms / Drivers License")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _c("div", { staticClass: "form-check" }, [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", value: "" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "form-check-sign" }, [
                    _c("span", { staticClass: "check" }),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Bank Requirement")]),
            _vm._v(" "),
            _c("td", [
              _c("div", { staticClass: "form-check" }, [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", value: "" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "form-check-sign" }, [
                    _c("span", { staticClass: "check" }),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Electric / Water Connection")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _c("div", { staticClass: "form-check" }, [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", value: "" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "form-check-sign" }, [
                    _c("span", { staticClass: "check" }),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("NBI Requirement")]),
            _vm._v(" "),
            _c("td", [
              _c("div", { staticClass: "form-check" }, [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", value: "" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "form-check-sign" }, [
                    _c("span", { staticClass: "check" }),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Senior Citizens Requirement")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _c("div", { staticClass: "form-check" }, [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", value: "" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "form-check-sign" }, [
                    _c("span", { staticClass: "check" }),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Medical Aid Requirement")]),
            _vm._v(" "),
            _c("td", [
              _c("div", { staticClass: "form-check" }, [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", value: "" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "form-check-sign" }, [
                    _c("span", { staticClass: "check" }),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Overseas / Travel Requirement")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _c("div", { staticClass: "form-check" }, [
                _c("label", { staticClass: "form-check-label" }, [
                  _c("input", {
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", value: "" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "form-check-sign" }, [
                    _c("span", { staticClass: "check" }),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("Other Requirements (Specify):")]),
            _vm._v(" "),
            _c("td"),
            _vm._v(" "),
            _c("td", [_vm._v("__________________________")]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c("p", [
        _vm._v(
          "\n\t\t\t\t\t\t\t\t\t\t\t\t\t__________________________________________ "
        ),
        _c("br"),
        _vm._v(
          "(Signature\n\t\t\t\t\t\t\t\t\t\t\t\t\tover Printed Name of Resident)\n\t\t\t\t\t\t\t\t\t\t\t\t"
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tC.T.C. No.: _________________ "),
      _c("br"),
      _vm._v("Date Issued:\n\t\t\t\t\t\t\t\t\t\t\t\t_________________"),
      _c("br"),
      _vm._v(
        "\n\t\t\t\t\t\t\t\t\t\t\t\tPlace Issued: _________________\n\t\t\t\t\t\t\t\t\t\t\t"
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer" }, [
      _c("img", {
        attrs: { src: "/transaction/footer.png", width: "100%", height: "20%" },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue?vue&type=template&id=1dd6ed70&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue?vue&type=template&id=1dd6ed70& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "card", staticStyle: { width: "63rem" } }, [
      _c("div", { staticClass: "barangay-header" }, [
        _c("img", {
          attrs: {
            src: "/transaction/header.png",
            width: "100%",
            height: "20%",
          },
        }),
        _vm._v(" "),
        _c("div", { staticClass: "row barangay-header-logo" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-5" }, [
            _c(
              "div",
              {
                staticClass: "text-center",
                staticStyle: { "margin-top": "-7px" },
              },
              [
                _c("p", { staticStyle: { "font-weight": "100" } }, [
                  _c("b", [_vm._v("Republika ng Pilipinas")]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("b", [_vm._v("Lalawigan ng Laguna")]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("b", [_vm._v("Lungsod ng Calamba")]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("b", { staticStyle: { "text-transform": "uppercase" } }, [
                    _vm._v(
                      "SANGGUNIANG BARANGAY NG BARANGAY " +
                        _vm._s(_vm.data.barangay.barangay_name)
                    ),
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("b", [_vm._v("TANGGAPAN NG PUNONG BARANGAY")]),
                ]),
              ]
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-2" }, [
            _c("img", {
              staticClass: "pull-left",
              staticStyle: { width: "67px" },
              attrs: { src: _vm.data.logo },
            }),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body", staticStyle: { height: "670px" } },
        [
          _c("div", { staticClass: "barangay-wrap" }, [
            _c("img", {
              staticClass: "barangay-watermark",
              staticStyle: { width: "574px" },
              attrs: { src: _vm.data.logo, alt: "" },
            }),
            _vm._v(" "),
            _c("div", { staticClass: "barangay-content" }, [
              _c("div", { staticClass: "barangay-body" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "container" }, [
                  _c("div", { staticClass: "barangay-body-paragraph" }, [
                    _c("p", [_vm._v("        To Whom It May Concern;")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-justify" }, [
                      _vm._v(
                        "\n\t\t\t\t\t\t\t\t\t        This is to certify that\n\t\t\t\t\t\t\t\t\t" +
                          _vm._s(_vm.data.full_name) +
                          ", of legal age, and a bonafide resident of Brgy.\n\t\t\t\t\t\t\t\t\t" +
                          _vm._s(_vm.data.barangay.barangay_name) +
                          ", Calamba City, Laguna.\n\t\t\t\t\t\t\t\t"
                      ),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-justify" }, [
                      _vm._v(
                        "\n\t\t\t\t\t\t\t\t\t        This is to certify further\n\t\t\t\t\t\t\t\t\tthat herein person is the live-in partner of BABYLYN ABULENCIA. They are\n\t\t\t\t\t\t\t\t\tliving together in since 2016..\n\t\t\t\t\t\t\t\t"
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-justify" }, [
                      _vm._v(
                        "\n\t\t\t\t\t\t\t\t\t        This certification is being\n\t\t\t\t\t\t\t\t\tissued upon request for legal purposes this may serve best.\n\t\t\t\t\t\t\t\t"
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-justify" }, [
                      _vm._v(
                        "\n\t\t\t\t\t\t\t\t\t        Issued this 7 th of December,\n\t\t\t\t\t\t\t\t\t2021 at Barangay, Maunong, Calamba City, Laguna\n\t\t\t\t\t\t\t\t"
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _vm._m(3),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("img", {
        staticClass: "pull-right",
        attrs: { src: "/transaction/gad_logo.png" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("hr", { staticClass: "barangay-header-line" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h1", { staticStyle: { "font-weight": "600", "font-size": "4rem" } }, [
        _vm._v("BARANGAY CERTIFICATION"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer" }, [
      _c("img", {
        attrs: { src: "/transaction/footer.png", width: "100%", height: "20%" },
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
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_id_47e5b5d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=47e5b5d0&scoped=true&lang=css& */ "./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=style&index=0&id=47e5b5d0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=style&index=0&id=47e5b5d0&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=style&index=0&id=47e5b5d0&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_47e5b5d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=47e5b5d0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=style&index=0&id=47e5b5d0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_47e5b5d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_47e5b5d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_47e5b5d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_47e5b5d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertification.vue":
/*!******************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertification.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BarangayCertification_vue_vue_type_template_id_44f16250___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarangayCertification.vue?vue&type=template&id=44f16250& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertification.vue?vue&type=template&id=44f16250&");
/* harmony import */ var _BarangayCertification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BarangayCertification.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BarangayCertification_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BarangayCertification.vue?vue&type=style&index=0&lang=css& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertification.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BarangayCertification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BarangayCertification_vue_vue_type_template_id_44f16250___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BarangayCertification_vue_vue_type_template_id_44f16250___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertification.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertification.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertification.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertification.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertification_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertification.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertification.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertification_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertification_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertification_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertification_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertification.vue?vue&type=template&id=44f16250&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertification.vue?vue&type=template&id=44f16250& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertification_vue_vue_type_template_id_44f16250___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayCertification.vue?vue&type=template&id=44f16250& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayCertification.vue?vue&type=template&id=44f16250&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertification_vue_vue_type_template_id_44f16250___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayCertification_vue_vue_type_template_id_44f16250___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearance.vue":
/*!**************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearance.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BarangayClearance_vue_vue_type_template_id_59bc44b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarangayClearance.vue?vue&type=template&id=59bc44b2& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearance.vue?vue&type=template&id=59bc44b2&");
/* harmony import */ var _BarangayClearance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BarangayClearance.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BarangayClearance_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BarangayClearance.vue?vue&type=style&index=0&lang=css& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearance.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BarangayClearance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BarangayClearance_vue_vue_type_template_id_59bc44b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BarangayClearance_vue_vue_type_template_id_59bc44b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearance.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearance.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearance.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayClearance.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearance.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearance.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearance_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayClearance.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearance.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearance_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearance_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearance_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearance_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearance.vue?vue&type=template&id=59bc44b2&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearance.vue?vue&type=template&id=59bc44b2& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearance_vue_vue_type_template_id_59bc44b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarangayClearance.vue?vue&type=template&id=59bc44b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/BarangayClearance.vue?vue&type=template&id=59bc44b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearance_vue_vue_type_template_id_59bc44b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarangayClearance_vue_vue_type_template_id_59bc44b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue":
/*!*********************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cohabitation_vue_vue_type_template_id_1dd6ed70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cohabitation.vue?vue&type=template&id=1dd6ed70& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue?vue&type=template&id=1dd6ed70&");
/* harmony import */ var _Cohabitation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cohabitation.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Cohabitation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cohabitation.vue?vue&type=style&index=0&lang=css& */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Cohabitation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cohabitation_vue_vue_type_template_id_1dd6ed70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Cohabitation_vue_vue_type_template_id_1dd6ed70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cohabitation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Cohabitation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cohabitation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cohabitation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Cohabitation.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cohabitation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cohabitation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cohabitation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cohabitation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue?vue&type=template&id=1dd6ed70&":
/*!****************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue?vue&type=template&id=1dd6ed70& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cohabitation_vue_vue_type_template_id_1dd6ed70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Cohabitation.vue?vue&type=template&id=1dd6ed70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue?vue&type=template&id=1dd6ed70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cohabitation_vue_vue_type_template_id_1dd6ed70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cohabitation_vue_vue_type_template_id_1dd6ed70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);