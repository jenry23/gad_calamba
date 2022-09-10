(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[117],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Charts/AreaChart.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Charts/AreaChart.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  data: function data() {
    return {
      gradient: null,
      gradient2: null
    };
  },
  mounted: function mounted() {
    this.gradient = this.$refs.canvas.getContext("2d").createLinearGradient(0, 0, 0, 450);
    this.gradient2 = this.$refs.canvas.getContext("2d").createLinearGradient(0, 0, 0, 450);
    this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
    this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
    this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");
    this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
    this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
    this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");
    this.renderChart({
      labels: ["January", "March", "June", "September", "December"],
      datasets: [{
        label: "Seniors",
        borderColor: "#FC2525",
        pointBackgroundColor: "white",
        borderWidth: 1,
        pointBorderColor: "white",
        backgroundColor: this.gradient,
        data: [5, 10, 3, 15, 0, 18, 20]
      }, {
        label: "Non-Seniors",
        borderColor: "#05CBE1",
        pointBackgroundColor: "white",
        pointBorderColor: "white",
        borderWidth: 1,
        backgroundColor: this.gradient2,
        data: [10, 20, 6, 0, 10, 12, 19]
      }]
    }, {
      labels: {
        render: 'percentage',
        fontColor: ['Male', 'Female'],
        precision: 2
      },
      responsive: true,
      maintainAspectRatio: false
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Charts/Bar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Charts/Bar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

var reactiveProp = vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp;
/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bar"],
  mixins: [reactiveProp],
  props: ['chartData', 'options'],
  mounted: function mounted() {
    this.renderChart(this.chartData, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Charts/Line.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Charts/Line.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

var reactiveProp = vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp;
/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  mixins: [reactiveProp],
  props: ['chartData', 'options'],
  mounted: function mounted() {
    this.renderChart(this.chartData, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Charts/Pie.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Charts/Pie.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

var reactiveProp = vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp;
/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Pie"],
  mixins: [reactiveProp],
  props: ['chartData', 'options'],
  mounted: function mounted() {
    this.renderChart(this.chartData, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/DatatablesFields.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Datatables/DatatablesFields.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Dashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Datatables_DatatablesFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Datatables/DatatablesFields */ "./resources/adminapp/js/components/Datatables/DatatablesFields.vue");
/* harmony import */ var _components_Datatables_HeaderSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Datatables/HeaderSettings */ "./resources/adminapp/js/components/Datatables/HeaderSettings.vue");
/* harmony import */ var _components_Datatables_GlobalSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Datatables/GlobalSearch */ "./resources/adminapp/js/components/Datatables/GlobalSearch.vue");
/* harmony import */ var _components_Charts_Line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Charts/Line */ "./resources/adminapp/js/components/Charts/Line.vue");
/* harmony import */ var _components_Charts_Bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Charts/Bar */ "./resources/adminapp/js/components/Charts/Bar.vue");
/* harmony import */ var _components_Charts_Pie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Charts/Pie */ "./resources/adminapp/js/components/Charts/Pie.vue");
/* harmony import */ var _components_Charts_AreaChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Charts/AreaChart */ "./resources/adminapp/js/components/Charts/AreaChart.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    GlobalSearch: _components_Datatables_GlobalSearch__WEBPACK_IMPORTED_MODULE_3__["default"],
    DatatablesFields: _components_Datatables_DatatablesFields__WEBPACK_IMPORTED_MODULE_1__["default"],
    HeaderSettings: _components_Datatables_HeaderSettings__WEBPACK_IMPORTED_MODULE_2__["default"],
    LineChart: _components_Charts_Line__WEBPACK_IMPORTED_MODULE_4__["default"],
    BarChart: _components_Charts_Bar__WEBPACK_IMPORTED_MODULE_5__["default"],
    PieChart: _components_Charts_Pie__WEBPACK_IMPORTED_MODULE_6__["default"],
    AreaChart: _components_Charts_AreaChart__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      data_utilities: null,
      data_income: null,
      data_houseownership: null,
      query: {
        sort: 'id',
        order: 'asc',
        limit: 20,
        s: ''
      },
      xprops: {
        module: 'DashboardIndex',
        route: 'dashboard',
        permission_prefix: 'dashboard_'
      },
      chartData: null,
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.resetState();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('DashboardIndex', ['data', 'loading'])),
  mounted: function mounted() {
    this.utilitiesInformation();
    this.MonthlyIncomeGraph();
    this.educationalAttaintmentGraph();
    this.houseOwnershipData();
    this.fetchIndexData();
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('DashboardIndex', ['fetchIndexData', 'setQuery', 'resetState'])), {}, {
    educationalAttaintmentGraph: function educationalAttaintmentGraph() {
      var _this = this;

      axios.get("dashboard/educational").then(function (response) {
        var educational = response.data.data;
        var data_charts = [];
        var data_label = [];
        var data_backgroundcolor = [];
        educational.forEach(function (data) {
          data_charts.push(data.count_educational);
          data_label.push(data.educational_attaintment_name);
          data_backgroundcolor.push('#' + Math.floor(Math.random() * 16777215).toString(16));
        });
        var labels = data_label;
        _this.chartData = {
          labels: labels,
          datasets: [{
            data: data_charts,
            backgroundColor: data_backgroundcolor
          }]
        };
      });
    },
    utilitiesInformation: function utilitiesInformation() {
      var _this2 = this;

      axios.get("dashboard/utilities").then(function (response) {
        var utility = response.data.data;
        var data_charts = [];
        var data_label = [];
        utility.forEach(function (data) {
          data_charts.push(data.count_utilities);
          data_label.push(data.utilities_name);
        });
        var labels = data_label;
        _this2.data_utilities = {
          labels: labels,
          datasets: [{
            label: 'ALL',
            data: data_charts,
            fill: false,
            backgroundColor: '#80CEB9',
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        };
      });
    },
    houseOwnershipData: function houseOwnershipData() {
      var _this3 = this;

      axios.get("dashboard/house-ownership").then(function (response) {
        var house_ownership = response.data.data;
        var data_charts = [];
        var data_label = [];
        house_ownership.forEach(function (data) {
          data_charts.push(data.count_house_ownership);
          data_label.push(data.house_ownership_name);
        });
        var labels = data_label;
        _this3.data_houseownership = {
          labels: labels,
          datasets: [{
            label: 'ALL',
            data: data_charts,
            fill: false,
            backgroundColor: '#80CEB9',
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        };
      });
    },
    MonthlyIncomeGraph: function MonthlyIncomeGraph() {
      var _this4 = this;

      axios.get("dashboard/monthly-income").then(function (response) {
        var monthly_income = response.data.data;
        var data_charts = [];
        var data_label = [];
        monthly_income.forEach(function (data) {
          data_charts.push(data.count_income);
          data_label.push(data.range_min + '-' + data.range_max);
        });
        var labels = data_label;
        _this4.data_income = {
          labels: labels,
          datasets: [{
            label: 'Status',
            data: data_charts,
            fill: false,
            backgroundColor: '#80CEB9',
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        };
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Dashboard.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/pages/Dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.anyClass {\r\n\theight: 400px;\r\n\toverflow-y: scroll;\n}\n.imageBackground {\r\n\tbackground: url('/images/googlemap.png');\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Dashboard.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/pages/Dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Dashboard.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/DatatablesFields.vue?vue&type=template&id=2bcbc210&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Datatables/DatatablesFields.vue?vue&type=template&id=2bcbc210& ***!
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
  return _vm.row[_vm.entry.key]
    ? _c("div", [
        _vm._v("\n  " + _vm._s(_vm.row[_vm.entry.key][_vm.entry.field]) + "\n"),
      ])
    : _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Dashboard.vue?vue&type=template&id=0abe2158&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/pages/Dashboard.vue?vue&type=template&id=0abe2158& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card imageBackground" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-md-4",
                  staticStyle: { "margin-top": "-70px" },
                },
                [
                  _c("div", { staticClass: "card" }, [
                    _vm.data.is_barangay === 0
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "table-responsive table-sales anyClass",
                          },
                          [
                            _c("center", [
                              _c("h4", { staticClass: "card-title" }, [
                                _vm._v("LIST OF BARANGAY"),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "card-body" }, [
                              _c("div", { staticClass: "table-responsive" }, [
                                _c("table", { staticClass: "table" }, [
                                  _vm._m(2),
                                  _vm._v(" "),
                                  _c(
                                    "tbody",
                                    _vm._l(
                                      _vm.data.barangays,
                                      function (barangay) {
                                        return _c("tr", { key: barangay.id }, [
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(barangay.barangay_name)
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(barangay.count_resident)
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(barangay.percent) + "%"
                                            ),
                                          ]),
                                        ])
                                      }
                                    ),
                                    0
                                  ),
                                ]),
                              ]),
                            ]),
                          ],
                          1
                        )
                      : _c(
                          "div",
                          {
                            staticClass:
                              "table-responsive table-sales anyClass",
                          },
                          [
                            _c("center", [
                              _c("h4", { staticClass: "card-title" }, [
                                _vm._v("LIST OF Purok/Sitio/Subdivision"),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "card-body" }, [
                              _c("div", { staticClass: "table-responsive" }, [
                                _c("table", { staticClass: "table" }, [
                                  _vm._m(3),
                                  _vm._v(" "),
                                  _c(
                                    "tbody",
                                    [
                                      _vm._l(_vm.data.sitios, function (sitio) {
                                        return _c("tr", { key: sitio.id }, [
                                          _c("td", [
                                            _vm._v(_vm._s(sitio.sitio_name)),
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(sitio.count_resident)
                                            ),
                                          ]),
                                        ])
                                      }),
                                      _vm._v(" "),
                                      _vm._l(_vm.data.puroks, function (purok) {
                                        return _c("tr", { key: purok.id }, [
                                          _c("td", [
                                            _vm._v(_vm._s(purok.purok_name)),
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(purok.count_resident)
                                            ),
                                          ]),
                                        ])
                                      }),
                                    ],
                                    2
                                  ),
                                ]),
                              ]),
                            ]),
                          ],
                          1
                        ),
                  ]),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-3 col-md-6 col-sm-6" }, [
        _c(
          "div",
          {
            staticClass: "card card-stats",
            staticStyle: {
              "background-color": "#00aaa0 !important",
              color: "white",
            },
          },
          [
            _c("center", [
              _c(
                "div",
                {
                  staticClass: "card-header card-header-info card-header-icon",
                },
                [
                  _c("div", { staticClass: "card-icon" }, [
                    _c("i", { staticClass: "material-icons" }, [
                      _vm._v("equalizer"),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-header" }, [
                _vm._v(
                  "\n\t\t\t\t\t\tTotal Residents / Respondents\n\t\t\t\t\t\t"
                ),
                _c(
                  "h3",
                  {
                    staticClass: "card-title",
                    staticStyle: { color: "white" },
                  },
                  [_vm._v(_vm._s(_vm.data.total_people_count))]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("h5", [_vm._v("Male")]),
                  _vm._v(" "),
                  _c("h3", { staticStyle: { "margin-top": "-20px" } }, [
                    _vm._v(_vm._s(_vm.data.total_male_count)),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("h5", [_vm._v("Female")]),
                  _vm._v(" "),
                  _c("h3", { staticStyle: { "margin-top": "-20px" } }, [
                    _vm._v(_vm._s(_vm.data.total_female_count)),
                  ]),
                ]),
              ]),
            ]),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-3 col-md-6 col-sm-6" }, [
        _c(
          "div",
          {
            staticClass: "card card-stats",
            staticStyle: {
              "background-color": "#ff7a5a !important",
              color: "white",
            },
          },
          [
            _c("center", [
              _c(
                "div",
                {
                  staticClass:
                    "card-header card-header-danger card-header-icon",
                },
                [
                  _c("div", { staticClass: "card-icon" }, [
                    _c("i", { staticClass: "material-icons" }, [
                      _vm._v("accessible"),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-header" }, [
                _vm._v(
                  "\n\t\t\t\t\t\tTotal Person W/ Disabilities\n\t\t\t\t\t\t"
                ),
                _c(
                  "h3",
                  {
                    staticClass: "card-title",
                    staticStyle: { color: "white" },
                  },
                  [_vm._v(_vm._s(_vm.data.total_person_disability_count))]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("h5", [_vm._v("Male")]),
                  _vm._v(" "),
                  _c("h3", { staticStyle: { "margin-top": "-20px" } }, [
                    _vm._v(_vm._s(_vm.data.total_male_disablity_count)),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("h5", [_vm._v("Female")]),
                  _vm._v(" "),
                  _c("h3", { staticStyle: { "margin-top": "-20px" } }, [
                    _vm._v(_vm._s(_vm.data.total_female_disablity_count)),
                  ]),
                ]),
              ]),
            ]),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-3 col-md-6 col-sm-6" }, [
        _c(
          "div",
          {
            staticClass: "card card-stats",
            staticStyle: {
              "background-color": "#462066 !important",
              color: "white",
            },
          },
          [
            _c("center", [
              _c(
                "div",
                {
                  staticClass:
                    "card-header card-header-primary card-header-icon",
                },
                [
                  _c("div", { staticClass: "card-icon" }, [
                    _c("i", { staticClass: "material-icons" }, [
                      _vm._v("contacts"),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-header" }, [
                _vm._v("\n\t\t\t\t\t\tTotal Senior / Citizen\n\t\t\t\t\t\t"),
                _c(
                  "h3",
                  {
                    staticClass: "card-title",
                    staticStyle: { color: "white" },
                  },
                  [_vm._v(_vm._s(_vm.data.total_senior_count))]
                ),
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("h5", [_vm._v("Male")]),
                  _vm._v(" "),
                  _c("h3", { staticStyle: { "margin-top": "-20px" } }, [
                    _vm._v(_vm._s(_vm.data.total_male_senior_count)),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("h5", [_vm._v("Female")]),
                  _vm._v(" "),
                  _c("h3", { staticStyle: { "margin-top": "-20px" } }, [
                    _vm._v(_vm._s(_vm.data.total_female_senior_count)),
                  ]),
                ]),
              ]),
            ]),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-3 col-md-6 col-sm-6" }, [
        _c(
          "div",
          {
            staticClass: "card card-stats",
            staticStyle: {
              "background-color": "#ffb85f !important",
              color: "white",
            },
          },
          [
            _c("center", [
              _c(
                "div",
                {
                  staticClass:
                    "card-header card-header-warning card-header-icon",
                },
                [
                  _c("div", { staticClass: "card-icon" }, [
                    _c("i", { staticClass: "material-icons" }, [
                      _vm._v("attribution"),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-header" }, [
                _vm._v(
                  "\n\t\t\t\t\t\tTotal Registered Voters in Calamba\n\t\t\t\t\t\t"
                ),
                _c(
                  "h3",
                  {
                    staticClass: "card-title",
                    staticStyle: { color: "white" },
                  },
                  [_vm._v(_vm._s(_vm.data.total_voters_count))]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("h5", [_vm._v("Male")]),
                  _vm._v(" "),
                  _c("h3", { staticStyle: { "margin-top": "-20px" } }, [
                    _vm._v(_vm._s(_vm.data.total_voters_male_count)),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("h5", [_vm._v("Female")]),
                  _vm._v(" "),
                  _c("h3", { staticStyle: { "margin-top": "-20px" } }, [
                    _vm._v(_vm._s(_vm.data.total_voters_female_count)),
                  ]),
                ]),
              ]),
            ]),
          ],
          1
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "card card-chart" }, [
          _vm._m(4),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("h5", [_vm._v("Male")]),
                _vm._v(
                  "\n\t\t\t\t\t\t\t" +
                    _vm._s(_vm.data.total_male_migration_rate) +
                    "\n\t\t\t\t\t\t"
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("h5", [_vm._v("Female")]),
                _vm._v(
                  "\n\t\t\t\t\t\t\t" +
                    _vm._s(_vm.data.total_female_migration_rate) +
                    "\n\t\t\t\t\t\t"
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _vm._m(5),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "card card-chart" }, [
          _vm._m(6),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("table", { staticClass: "table table-responsive" }, [
              _vm._m(7),
              _vm._v(" "),
              _c("tbody", [
                _c("tr", [
                  _c("td", [_vm._v("Transient")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.data.transient_status_male))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.data.transient_status_female))]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Immigrant")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.data.immigrant_status_male))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.data.immigrant_status_female))]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Native")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.data.native_status_male))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.data.native_status_female))]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "card card-chart" }, [
          _vm._m(8),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("h5", [_vm._v("Household")]),
                _vm._v(
                  "\n\t\t\t\t\t\t\t" +
                    _vm._s(_vm.data.total_household) +
                    "\n\t\t\t\t\t\t"
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("h5", [_vm._v("Families")]),
                _vm._v(
                  "\n\t\t\t\t\t\t\t" +
                    _vm._s(_vm.data.total_family) +
                    "\n\t\t\t\t\t\t"
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _vm._m(9),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "card card-stats" }, [
          _vm._m(10),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _c("line-chart", {
                attrs: { "chart-data": _vm.data_houseownership },
              }),
            ],
            1
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "card card-stats h-80" }, [
          _vm._m(11),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [_c("line-chart", { attrs: { "chart-data": _vm.data_utilities } })],
            1
          ),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "card card-stats" }, [
          _vm._m(12),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [_c("bar-chart", { attrs: { "chart-data": _vm.chartData } })],
            1
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "card card-stats" }, [
          _vm._m(13),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [_c("bar-chart", { attrs: { "chart-data": _vm.data_income } })],
            1
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header card-header-info card-header-icon" },
      [
        _c("div", { staticClass: "card-icon" }, [
          _c("img", {
            attrs: {
              src: "/images/calamba-logo.png",
              height: "85px;",
              width: "85px;",
            },
          }),
        ]),
        _vm._v(" "),
        _c("h4", { staticClass: "card-title" }, [_vm._v("Calamba Map")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-8" }, [
      _c("img", {
        attrs: {
          src: "/images/calamba-map.png",
          width: "750px",
          height: "380px;",
        },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "text-primary" }, [
      _c("tr", [
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Resident")]),
        _vm._v(" "),
        _c("th", [_vm._v("Percent")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "text-primary" }, [
      _c("tr", [
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Resident")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header card-header-success" }, [
      _c(
        "div",
        { staticClass: "ct-chart", attrs: { id: "websiteViewsChart" } },
        [_vm._v("Migration Rate")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-footer" }, [
      _c("div", { staticClass: "stats" }, [
        _c("i", { staticClass: "material-icons" }, [_vm._v("access_time")]),
        _vm._v(" updated 4 minutes ago"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header card-header-success" }, [
      _c(
        "div",
        { staticClass: "ct-chart", attrs: { id: "websiteViewsChart" } },
        [_vm._v("Resident Status")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("Male")]),
        _vm._v(" "),
        _c("th", [_vm._v("Female")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header card-header-success" }, [
      _c(
        "div",
        { staticClass: "ct-chart", attrs: { id: "completedTasksChart" } },
        [_vm._v("Total Number Of")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-footer" }, [
      _c("div", { staticClass: "stats" }, [
        _c("i", { staticClass: "material-icons" }, [_vm._v("access_time")]),
        _vm._v(" campaign sent 2 days ago"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header card-header-success" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("House Ownership")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header card-header-success" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Utilities")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header card-header-success" }, [
      _c("h3", { staticClass: "card-title" }, [
        _vm._v("Educational Attaintment"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header card-header-success" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Monthly Income")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/adminapp/js/components/Charts/AreaChart.vue":
/*!***************************************************************!*\
  !*** ./resources/adminapp/js/components/Charts/AreaChart.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AreaChart.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/components/Charts/AreaChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _AreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/components/Charts/AreaChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/components/Charts/AreaChart.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/adminapp/js/components/Charts/AreaChart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AreaChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Charts/AreaChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/components/Charts/Bar.vue":
/*!*********************************************************!*\
  !*** ./resources/adminapp/js/components/Charts/Bar.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bar.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/components/Charts/Bar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/components/Charts/Bar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/components/Charts/Bar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/adminapp/js/components/Charts/Bar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Bar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Charts/Bar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/components/Charts/Line.vue":
/*!**********************************************************!*\
  !*** ./resources/adminapp/js/components/Charts/Line.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Line_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Line.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/components/Charts/Line.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Line_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/components/Charts/Line.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/components/Charts/Line.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/adminapp/js/components/Charts/Line.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Line_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Line.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Charts/Line.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Line_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/components/Charts/Pie.vue":
/*!*********************************************************!*\
  !*** ./resources/adminapp/js/components/Charts/Pie.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pie.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/components/Charts/Pie.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Pie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/components/Charts/Pie.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/components/Charts/Pie.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/adminapp/js/components/Charts/Pie.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pie.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Charts/Pie.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/components/Datatables/DatatablesFields.vue":
/*!**************************************************************************!*\
  !*** ./resources/adminapp/js/components/Datatables/DatatablesFields.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DatatablesFields_vue_vue_type_template_id_2bcbc210___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatatablesFields.vue?vue&type=template&id=2bcbc210& */ "./resources/adminapp/js/components/Datatables/DatatablesFields.vue?vue&type=template&id=2bcbc210&");
/* harmony import */ var _DatatablesFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DatatablesFields.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/components/Datatables/DatatablesFields.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DatatablesFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DatatablesFields_vue_vue_type_template_id_2bcbc210___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DatatablesFields_vue_vue_type_template_id_2bcbc210___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/components/Datatables/DatatablesFields.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/components/Datatables/DatatablesFields.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/adminapp/js/components/Datatables/DatatablesFields.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatablesFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DatatablesFields.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/DatatablesFields.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatablesFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/components/Datatables/DatatablesFields.vue?vue&type=template&id=2bcbc210&":
/*!*********************************************************************************************************!*\
  !*** ./resources/adminapp/js/components/Datatables/DatatablesFields.vue?vue&type=template&id=2bcbc210& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatablesFields_vue_vue_type_template_id_2bcbc210___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DatatablesFields.vue?vue&type=template&id=2bcbc210& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/DatatablesFields.vue?vue&type=template&id=2bcbc210&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatablesFields_vue_vue_type_template_id_2bcbc210___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatablesFields_vue_vue_type_template_id_2bcbc210___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/pages/Dashboard.vue":
/*!***************************************************!*\
  !*** ./resources/adminapp/js/pages/Dashboard.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_0abe2158___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=0abe2158& */ "./resources/adminapp/js/pages/Dashboard.vue?vue&type=template&id=0abe2158&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/pages/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&lang=css& */ "./resources/adminapp/js/pages/Dashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_0abe2158___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_0abe2158___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/pages/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/pages/Dashboard.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/adminapp/js/pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/pages/Dashboard.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/adminapp/js/pages/Dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Dashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/adminapp/js/pages/Dashboard.vue?vue&type=template&id=0abe2158&":
/*!**********************************************************************************!*\
  !*** ./resources/adminapp/js/pages/Dashboard.vue?vue&type=template&id=0abe2158& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_0abe2158___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=0abe2158& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Dashboard.vue?vue&type=template&id=0abe2158&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_0abe2158___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_0abe2158___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);