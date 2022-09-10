(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/DatatableList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Datatables/DatatableList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['field', 'row'],
  computed: {
    entry: function entry() {
      var s = _.split(this.field, '.');

      return {
        key: s[0],
        field: s[1]
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/GadList/Show.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/GadList/Show.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Datatables_DatatableList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Datatables/DatatableList */ "./resources/adminapp/js/components/Datatables/DatatableList.vue");
/* harmony import */ var vue_html2pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-html2pdf */ "./node_modules/vue-html2pdf/dist/vue-html2pdf.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import html2canvas from "html2canvas"
// import html2pdf from 'html2pdf.js'


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DatatableList: _components_Datatables_DatatableList__WEBPACK_IMPORTED_MODULE_1__["default"],
    VueHtml2pdf: vue_html2pdf__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {};
  },
  beforeDestroy: function beforeDestroy() {
    this.resetState();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('GadListSingle', ['lists', 'data', 'entry'])),
  watch: {
    '$route.params.id': {
      immediate: true,
      handler: function handler() {
        var id = this.$route.params.id;
        var barangay_id = this.$route.params.barangay_id;
        this.resetState();
        this.fetchShowData({
          id: id,
          barangay_id: barangay_id
        });
      }
    }
  },
  methods: _objectSpread(_objectSpread({
    formatDate: function formatDate(value) {
      if (value) {
        var data = moment(String(value)).format('MMMM DD, YYYY');
      } else {
        var data = '';
      }

      return data;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('GadListSingle', ['fetchShowData', 'resetState'])), {}, {
    downloads: function downloads() {
      this.$refs.html2Pdf.generatePdf();
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/DatatableList.vue?vue&type=style&index=0&id=730e136a&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Datatables/DatatableList.vue?vue&type=style&index=0&id=730e136a&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.badge[data-v-730e136a] {\r\n  font-size: 0.875rem;\r\n  font-weight: 500;\r\n  text-transform: none;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/GadList/Show.vue?vue&type=style&index=0&id=3bdaa41f&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/GadList/Show.vue?vue&type=style&index=0&id=3bdaa41f&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ninput[data-v-3bdaa41f] {\r\n\ttext-decoration: underline;\n}\ntable[data-v-3bdaa41f],\r\ntbody[data-v-3bdaa41f],\r\ntr[data-v-3bdaa41f],\r\nth[data-v-3bdaa41f],\r\ntd[data-v-3bdaa41f] {\r\n\tbackground-color: rgba(0, 0, 0, 0) !important;\n}\n.card-images-body[data-v-3bdaa41f] {\r\n\tbackground: url('/images/background-family.png') no-repeat;\r\n\theight: 100%;\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/DatatableList.vue?vue&type=style&index=0&id=730e136a&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Datatables/DatatableList.vue?vue&type=style&index=0&id=730e136a&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DatatableList.vue?vue&type=style&index=0&id=730e136a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/DatatableList.vue?vue&type=style&index=0&id=730e136a&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/GadList/Show.vue?vue&type=style&index=0&id=3bdaa41f&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/GadList/Show.vue?vue&type=style&index=0&id=3bdaa41f&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=style&index=0&id=3bdaa41f&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/GadList/Show.vue?vue&type=style&index=0&id=3bdaa41f&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/DatatableList.vue?vue&type=template&id=730e136a&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Datatables/DatatableList.vue?vue&type=template&id=730e136a&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    [
      _vm._l(_vm.row[_vm.entry.key], function (item, key) {
        return _c(
          "span",
          { key: key, staticClass: "badge badge-pill badge-azure mr-1" },
          [_vm._v("\n    " + _vm._s(item[_vm.entry.field]) + "\n  ")]
        )
      }),
      _vm._v(" "),
      _vm.row[_vm.entry.key].length === 0
        ? _c("span", { staticClass: "badge badge-pill badge-orange" }, [
            _vm._v("\n    Not Assigned\n  "),
          ])
        : _vm._e(),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/GadList/Show.vue?vue&type=template&id=3bdaa41f&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/GadList/Show.vue?vue&type=template&id=3bdaa41f&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-md-12" },
      [
        _c(
          "button",
          { staticClass: "btn btn-info", on: { click: _vm.downloads } },
          [_vm._v("Download PDF")]
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
              "pdf-format": "a4",
              "pdf-orientation": "landscape",
              "pdf-content-width": "1150px",
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
                _c("div", { staticClass: "card-header" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-3 mt-4" }, [
                      _c(
                        "h4",
                        {
                          staticClass: "card-title",
                          staticStyle: {
                            "font-family": "inlander",
                            color: "black",
                            "font-weight": "900",
                          },
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t\tFAMILY INFORMATION\n\t\t\t\t\t\t\t"
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass: "card-category",
                          staticStyle: {
                            "font-family": "Abula Light",
                            color: "black",
                          },
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t\tHOUSEHOLD MEMBERS\n\t\t\t\t\t\t\t"
                          ),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("img", {
                        staticStyle: { width: "100%" },
                        attrs: { src: "/images/header.png" },
                      }),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-images-body" },
                  [
                    _c("center", [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("br"),
                          _vm._v(" "),
                          _c("img", {
                            attrs: {
                              src: "/images/cap.jpg",
                              height: "128px",
                              width: "130px",
                            },
                          }),
                          _vm._v(" "),
                          _c("img", {
                            attrs: {
                              src: "/images/popcom.png",
                              height: "128px",
                              width: "130px",
                            },
                          }),
                          _vm._v(" "),
                          _c("b"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6" }, [
                          _c("div", { staticClass: "pull-left" }, [
                            _c(
                              "h3",
                              {
                                staticStyle: {
                                  color: "black",
                                  "font-family": "Glacial Indifference",
                                },
                              },
                              [
                                _c(
                                  "b",
                                  {
                                    staticStyle: {
                                      "text-transform": "uppercase",
                                      "margin-right": "100px",
                                      "font-weight": "900",
                                    },
                                  },
                                  [_vm._v("City Government of Calamba")]
                                ),
                                _c("br"),
                                _vm._v(" "),
                                _c(
                                  "b",
                                  {
                                    staticStyle: {
                                      "text-transform": "uppercase",
                                      "font-weight": "900",
                                    },
                                  },
                                  [_vm._v("City population management office")]
                                ),
                                _c("br"),
                                _vm._v(" "),
                                _c(
                                  "b",
                                  {
                                    staticStyle: {
                                      "text-transform": "uppercase",
                                      "margin-right": "240px",
                                      "font-weight": "900",
                                    },
                                  },
                                  [_vm._v("Household Profile")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticStyle: {
                                      "font-family": "Lora",
                                      "margin-right": "385px",
                                      "font-style": "italic",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t\te-Certificate\n\t\t\t\t\t\t\t\t\t\t"
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3 mt-4" }, [
                          _c(
                            "table",
                            {
                              staticClass: "table-bordered",
                              staticStyle: {
                                "background-color": "#f0f8ff !important",
                              },
                            },
                            [
                              _c("tr", [
                                _c("th", [_c("b", [_vm._v("Barangay")])]),
                                _vm._v(" "),
                                _vm.lists.second_data.barangay
                                  ? _c("td", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                          _vm._s(
                                            _vm.lists.second_data.barangay
                                              .barangay_name
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t\t"
                                      ),
                                    ])
                                  : _c("td"),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", [_c("b", [_vm._v("Purok")])]),
                                _vm._v(" "),
                                _vm.lists.second_data.purok
                                  ? _c("td", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                          _vm._s(
                                            _vm.lists.second_data.purok
                                              .purok_name
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t\t"
                                      ),
                                    ])
                                  : _c("td"),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", { attrs: { scope: "col" } }, [
                                  _c("b", [_vm._v("Subdivsion / Sitio")]),
                                ]),
                                _vm._v(" "),
                                _vm.lists.second_data.sitio
                                  ? _c("td", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                          _vm._s(
                                            _vm.lists.second_data.sitio
                                              .sitio_name
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t\t"
                                      ),
                                    ])
                                  : _c("td"),
                              ]),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card" }, [
                      _c("div", { staticClass: "card-body" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "table",
                            {
                              staticClass: "table table-border table-stripe",
                              staticStyle: { color: "black" },
                            },
                            [
                              _c("thead", [
                                _c("tr", [
                                  _c("th", [_c("b", [_vm._v("Household ID")])]),
                                  _vm._v(" "),
                                  _c("th", [_c("b", [_vm._v("Family Code")])]),
                                  _vm._v(" "),
                                  _c("th", [_c("b", [_vm._v("Relationship")])]),
                                  _vm._v(" "),
                                  _c("th", [
                                    _c("b", [_vm._v("Family Members")]),
                                  ]),
                                  _vm._v(" "),
                                  _c("th", [_c("b", [_vm._v("Birthday")])]),
                                  _vm._v(" "),
                                  _c("th", [_c("b", [_vm._v("Gender")])]),
                                  _vm._v(" "),
                                  _c("th", [
                                    _c("b", [_vm._v("Residence Status")]),
                                  ]),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                _vm._l(_vm.lists.first_data, function (val) {
                                  return _c("tr", { key: val.id }, [
                                    _c("td", [_vm._v(_vm._s(val.gad_id))]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(val.family_code))]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(val.household_names)),
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticStyle: {
                                          "text-transform": "uppercase",
                                        },
                                      },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            attrs: {
                                              to: {
                                                name: "gad_list.edit",
                                                params: { id: val.id },
                                              },
                                            },
                                          },
                                          [
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                _vm._s(val.full_name) +
                                                "\n\t\t\t\t\t\t\t\t\t\t\t\t"
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(_vm.formatDate(val.birth_date))
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    val.gender
                                      ? _c("td", [
                                          _vm._v(
                                            _vm._s(val.gender.gender_name)
                                          ),
                                        ])
                                      : _c("td"),
                                    _vm._v(" "),
                                    val.no_of_years_in_calamba ==
                                    new Date().getFullYear()
                                      ? _c("td", [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\t\t\t\t\tImmigrant\n\t\t\t\t\t\t\t\t\t\t\t"
                                          ),
                                        ])
                                      : _c("td", [_vm._v("Native")]),
                                  ])
                                }),
                                0
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticStyle: {
                          "font-family": "Abula Light",
                          "font-weigh": "500",
                        },
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "d-flex justify-content-center" },
                          [
                            _c(
                              "h4",
                              { staticStyle: { "font-weight": "500" } },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\tThis is to certify that the aforementioned household member/s is/are bonafide\n\t\t\t\t\t\t\t\tresident/s of CALAMBA CITY, LAGUNA.\n\t\t\t\t\t\t\t"
                                ),
                              ]
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex align-items-end flex-column",
                            staticStyle: { "margin-right": "20px" },
                          },
                          [
                            _c(
                              "small",
                              { staticStyle: { "font-weight": "500" } },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\tCERTIFICATION ISSUED BY CITY POPULATION MANAGEMENT OFFICE"
                                ),
                                _c("br"),
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\tDATABASE POWERED BY MO-GENDER AND DEVELOPMENT OFFICE\n\t\t\t\t\t\t\t"
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ]
            ),
          ]
        ),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "collapse", attrs: { id: "collapseExample" } },
          [
            _c("div", { staticClass: "card card-body" }, [
              _c(
                "div",
                {
                  staticClass: "form-group bmd-form-group",
                  class: {
                    "is-focused": true,
                  },
                },
                [
                  _c("label", [_vm._v("House Type")]),
                  _vm._v(" "),
                  _vm.lists.second_data.house_type
                    ? _c("div", [
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: {
                            value:
                              _vm.lists.second_data.house_type.house_type_name,
                          },
                        }),
                      ])
                    : _vm._e(),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group bmd-form-group",
                  class: {
                    "is-focused": true,
                  },
                },
                [
                  _c("label", [_vm._v("House Make")]),
                  _vm._v(" "),
                  _vm.lists.second_data.house_make
                    ? _c("div", [
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: {
                            value:
                              _vm.lists.second_data.house_make.house_make_name,
                          },
                        }),
                      ])
                    : _vm._e(),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group bmd-form-group",
                  class: {
                    "is-focused": true,
                  },
                },
                [
                  _c("label", [_vm._v("House Ownership")]),
                  _vm._v(" "),
                  _vm.lists.second_data.house_ownership
                    ? _c("div", [
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: {
                            value:
                              _vm.lists.second_data.house_ownership
                                .house_ownership_name,
                          },
                        }),
                      ])
                    : _vm._e(),
                ]
              ),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "collapse", attrs: { id: "collapseExample1" } },
          [
            _c("div", { staticClass: "card card-body" }, [
              _c(
                "div",
                {
                  staticClass: "form-group bmd-form-group",
                  class: {
                    "is-focused": true,
                  },
                },
                [
                  _c("label", [_vm._v("Government Assistance")]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      value:
                        "Agrarian Reform Community Development Program (ARCDP)",
                    },
                  }),
                ]
              ),
            ]),
          ]
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "a",
        {
          staticClass: "btn btn-primary",
          attrs: {
            "data-toggle": "collapse",
            href: "#collapseExample",
            role: "button",
            "aria-expanded": "false",
            "aria-controls": "collapseExample",
          },
        },
        [_vm._v("\n\t\t\t\tHouse Details\n\t\t\t")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-primary",
          attrs: {
            "data-toggle": "collapse",
            href: "#collapseExample1",
            role: "button",
            "aria-expanded": "false",
            "aria-controls": "collapseExample1",
          },
        },
        [_vm._v("\n\t\t\t\tGovernment Assistance\n\t\t\t")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/adminapp/js/components/Datatables/DatatableList.vue":
/*!***********************************************************************!*\
  !*** ./resources/adminapp/js/components/Datatables/DatatableList.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DatatableList_vue_vue_type_template_id_730e136a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatatableList.vue?vue&type=template&id=730e136a&scoped=true& */ "./resources/adminapp/js/components/Datatables/DatatableList.vue?vue&type=template&id=730e136a&scoped=true&");
/* harmony import */ var _DatatableList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DatatableList.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/components/Datatables/DatatableList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DatatableList_vue_vue_type_style_index_0_id_730e136a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DatatableList.vue?vue&type=style&index=0&id=730e136a&scoped=true&lang=css& */ "./resources/adminapp/js/components/Datatables/DatatableList.vue?vue&type=style&index=0&id=730e136a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DatatableList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DatatableList_vue_vue_type_template_id_730e136a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DatatableList_vue_vue_type_template_id_730e136a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "730e136a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/components/Datatables/DatatableList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/components/Datatables/DatatableList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/adminapp/js/components/Datatables/DatatableList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DatatableList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/DatatableList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/components/Datatables/DatatableList.vue?vue&type=style&index=0&id=730e136a&scoped=true&lang=css&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/adminapp/js/components/Datatables/DatatableList.vue?vue&type=style&index=0&id=730e136a&scoped=true&lang=css& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableList_vue_vue_type_style_index_0_id_730e136a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DatatableList.vue?vue&type=style&index=0&id=730e136a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/DatatableList.vue?vue&type=style&index=0&id=730e136a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableList_vue_vue_type_style_index_0_id_730e136a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableList_vue_vue_type_style_index_0_id_730e136a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableList_vue_vue_type_style_index_0_id_730e136a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableList_vue_vue_type_style_index_0_id_730e136a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/adminapp/js/components/Datatables/DatatableList.vue?vue&type=template&id=730e136a&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/adminapp/js/components/Datatables/DatatableList.vue?vue&type=template&id=730e136a&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableList_vue_vue_type_template_id_730e136a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DatatableList.vue?vue&type=template&id=730e136a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/DatatableList.vue?vue&type=template&id=730e136a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableList_vue_vue_type_template_id_730e136a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableList_vue_vue_type_template_id_730e136a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/cruds/GadList/Show.vue":
/*!******************************************************!*\
  !*** ./resources/adminapp/js/cruds/GadList/Show.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_3bdaa41f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=3bdaa41f&scoped=true& */ "./resources/adminapp/js/cruds/GadList/Show.vue?vue&type=template&id=3bdaa41f&scoped=true&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/GadList/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Show_vue_vue_type_style_index_0_id_3bdaa41f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Show.vue?vue&type=style&index=0&id=3bdaa41f&scoped=true&lang=css& */ "./resources/adminapp/js/cruds/GadList/Show.vue?vue&type=style&index=0&id=3bdaa41f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_3bdaa41f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_3bdaa41f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3bdaa41f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/GadList/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/GadList/Show.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/GadList/Show.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/GadList/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/GadList/Show.vue?vue&type=style&index=0&id=3bdaa41f&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/GadList/Show.vue?vue&type=style&index=0&id=3bdaa41f&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_3bdaa41f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=style&index=0&id=3bdaa41f&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/GadList/Show.vue?vue&type=style&index=0&id=3bdaa41f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_3bdaa41f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_3bdaa41f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_3bdaa41f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_style_index_0_id_3bdaa41f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/adminapp/js/cruds/GadList/Show.vue?vue&type=template&id=3bdaa41f&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/GadList/Show.vue?vue&type=template&id=3bdaa41f&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_3bdaa41f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=3bdaa41f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/GadList/Show.vue?vue&type=template&id=3bdaa41f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_3bdaa41f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_3bdaa41f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);