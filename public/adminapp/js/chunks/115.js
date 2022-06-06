(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[115],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      status: '',
      activeField: '',
      transaction_required: false,
      resident_required: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('BarangayPermitSingle', ['entry', 'loading', 'lists'])),
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

      this.storeData().then(function () {// this.$router.push({ name: 'transaction.index' })
        // this.$eventHub.$emit('create-success')
      })["catch"](function (error) {
        _this.status = 'failed';

        _.delay(function () {
          _this.status = '';
        }, 3000);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=template&id=47e5b5d0&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=template&id=47e5b5d0& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container-fluid" }, [
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
  ])
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

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Index.vue":
/*!**************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Index.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_47e5b5d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=47e5b5d0& */ "./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=template&id=47e5b5d0&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_47e5b5d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_47e5b5d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
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

/***/ "./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=template&id=47e5b5d0&":
/*!*********************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=template&id=47e5b5d0& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_47e5b5d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=47e5b5d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/BarangayPermit/Index.vue?vue&type=template&id=47e5b5d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_47e5b5d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_47e5b5d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);