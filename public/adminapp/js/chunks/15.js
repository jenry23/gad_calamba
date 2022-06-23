(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

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
/* harmony import */ var _Transaction_Cohabitation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Transaction/Cohabitation */ "./resources/adminapp/js/cruds/BarangayPermit/Transaction/Cohabitation.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BarangayClearance: _Transaction_BarangayClearance__WEBPACK_IMPORTED_MODULE_1__["default"],
    Cohabitation: _Transaction_Cohabitation__WEBPACK_IMPORTED_MODULE_2__["default"]
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
exports.push([module.i, "\n.responsive-iframe[data-v-47e5b5d0] {\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    width: 100%;\r\n    height: 100vh;\n}\r\n", ""]);

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
exports.push([module.i, "\n.barangay-header-logo {\r\n    margin-top: -96px;\n}\n.barangay-header-line {\r\n    height: 2px;\r\n    border-width: 0;\r\n    color: gray;\r\n    background-color: gray;\n}\n.barangay-wrap {\r\n    position: relative;\n}\n.barangay-watermark {\r\n    opacity: 0.2;\r\n    position: absolute;\r\n    margin-left: 20%;\n}\n.barangay-content {\r\n    position: relative;\n}\n.barangay-finger-print {\r\n    margin-right: 10%;\r\n    margin-top: 2%;\n}\n.barangay-body-paragraph {\r\n    margin-top: 11%;\r\n    font-weight: 500;\n}\r\n", ""]);

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
exports.push([module.i, "\n.barangay-header-logo {\r\n    margin-top: -96px;\n}\n.barangay-header-line {\r\n    height: 2px;\r\n    border-width: 0;\r\n    color: gray;\r\n    background-color: gray;\n}\n.barangay-wrap {\r\n    position: relative;\n}\n.barangay-watermark {\r\n    opacity: 0.2;\r\n    position: absolute;\r\n    margin-left: 20%;\n}\n.barangay-content {\r\n    position: relative;\n}\n.barangay-finger-print {\r\n    margin-right: 10%;\r\n    margin-top: 2%;\n}\n.barangay-body-paragraph {\r\n    margin-top: 11%;\r\n    font-weight: 500;\n}\r\n", ""]);

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
                            staticClass: "btn-primary",
                            attrs: {
                              status: _vm.status,
                              isLoading: _vm.loading,
                              disabled: _vm.loading,
                            },
                          },
                          [
                            _vm._v(
                              "\n                                    Search\n                                "
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
      _vm.is_barangay === 1
        ? _c("barangay-clearance", {
            ref: "barangay_clearance",
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
          _vm._v(
            "\n                            Table\n                            "
          ),
          _c("strong", [_vm._v("Transaction")]),
        ]),
      ]
    )
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
                _vm._m(3),
                _vm._v(" "),
                _c("div", { staticClass: "container" }, [
                  _c("div", { staticClass: "barangay-body-paragraph" }, [
                    _c("p", [_vm._v("SA MGA KINAUUKULAN,")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-justify" }, [
                      _vm._v(
                        "\n                                            Ito ang pagpapatunay na ang\n                                    nakalagda sa clearance na ito ay kasalukuyang naninirahan sa Barangay\n                                    " +
                          _vm._s(_vm.data.barangay.barangay_name) +
                          ", Calamba City at walang anumang nasangkutang\n                                    gulo at kaso na nabinbin dito.\n                                "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("b", { staticStyle: { "margin-right": "145px" } }, [
                        _vm._v("Pangalan"),
                      ]),
                      _vm._v(" "),
                      _c("b", { staticStyle: { "margin-right": "145px" } }, [
                        _vm._v(":"),
                      ]),
                      _c("b", [_vm._v(" " + _vm._s(_vm.data.full_name))]),
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("b", { staticStyle: { "margin-right": "155px" } }, [
                        _vm._v("Tirahan"),
                      ]),
                      _vm._v(" "),
                      _c("b", { staticStyle: { "margin-right": "145px" } }, [
                        _vm._v(":"),
                      ]),
                      _c("b", [_vm._v(" " + _vm._s(_vm.data.address))]),
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("b", { staticStyle: { "margin-right": "49px" } }, [
                        _vm._v("Petsa ng Kapanganakan"),
                      ]),
                      _vm._v(" "),
                      _c("b", { staticStyle: { "margin-right": "145px" } }, [
                        _vm._v(":"),
                      ]),
                      _c("b", [_vm._v(" " + _vm._s(_vm.data.birthday))]),
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("b", { staticStyle: { "margin-right": "170px" } }, [
                        _vm._v("Edad"),
                      ]),
                      _vm._v(" "),
                      _c("b", { staticStyle: { "margin-right": "145px" } }, [
                        _vm._v(":"),
                      ]),
                      _c("b", [_vm._v(" " + _vm._s(_vm.data.age))]),
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("b", { staticStyle: { "margin-right": "49px" } }, [
                        _vm._v("Lugar ng Kapanganakan"),
                      ]),
                      _vm._v(" "),
                      _c("b", { staticStyle: { "margin-right": "145px" } }, [
                        _vm._v(":"),
                      ]),
                      _c("b", [_vm._v(" " + _vm._s(_vm.data.birth_place))]),
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("b", { staticStyle: { "margin-right": "81px" } }, [
                        _vm._v("Status sa Barangay"),
                      ]),
                      _vm._v(" "),
                      _c("b", { staticStyle: { "margin-right": "145px" } }, [
                        _vm._v(":"),
                      ]),
                      _c("b", [_vm._v(" " + _vm._s(_vm.data.status))]),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-justify" }, [
                      _vm._v(
                        "\n                                            Iginawad ang pagpapatunay na\n                                    ito ngayong ika-16 ng Mayo, 2022 upang magamit sa Legal purposes.\n                                "
                      ),
                    ]),
                    _vm._v(" "),
                    _vm._m(4),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _vm._m(5),
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
        _vm._v("BARANGAY CLEARANCE"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "barangay-finger-print" }, [
      _c("img", {
        staticClass: "pull-right",
        attrs: { src: "/transaction/finger_print.png" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("b", { staticStyle: { "margin-right": "145px" } }, [
        _vm._v("Valid until"),
      ]),
      _vm._v(" "),
      _c("b", { staticStyle: { "margin-right": "145px" } }, [_vm._v(":")]),
      _c("b", [_vm._v(" November 16, 2022")]),
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
                        "\n                                            This is to certify that\n                                    " +
                          _vm._s(_vm.data.full_name) +
                          ", of legal age, and a bonafide resident of Brgy.\n                                    " +
                          _vm._s(_vm.data.barangay.barangay_name) +
                          ", Calamba City, Laguna.\n                                "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-justify" }, [
                      _vm._v(
                        "\n                                            This is to certify further\n                                    that herein person is the live-in partner of BABYLYN ABULENCIA. They are\n                                    living together in since 2016..\n                                "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-justify" }, [
                      _vm._v(
                        "\n                                            This certification is being\n                                    issued upon request for legal purposes this may serve best.\n                                "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-justify" }, [
                      _vm._v(
                        "\n                                            Issued this 7 th of December,\n                                    2021 at Barangay, Maunong, Calamba City, Laguna\n                                "
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