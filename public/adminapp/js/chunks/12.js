(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

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
//
//
//
//
//
//
//
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
    numberFormat: function numberFormat(value) {
      return value ? Number(value).toLocaleString() : 0;
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

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

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
                                              "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                _vm._s(
                                                  Number(
                                                    barangay.count_resident
                                                  ).toLocaleString()
                                                ) +
                                                "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
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
                                              _vm._s(
                                                _vm.numberFormat(
                                                  sitio.count_resident
                                                )
                                              )
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
                                              _vm._s(
                                                _vm.numberFormat(
                                                  purok.count_resident
                                                )
                                              )
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
                  [
                    _vm._v(
                      "\n\t\t\t\t\t\t\t" +
                        _vm._s(_vm.numberFormat(_vm.data.total_people_count)) +
                        "\n\t\t\t\t\t\t"
                    ),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("h5", [_vm._v("Male")]),
                  _vm._v(" "),
                  _c("h3", { staticStyle: { "margin-top": "-20px" } }, [
                    _vm._v(_vm._s(_vm.numberFormat(_vm.data.total_male_count))),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("h5", [_vm._v("Female")]),
                  _vm._v(" "),
                  _c("h3", { staticStyle: { "margin-top": "-20px" } }, [
                    _vm._v(
                      _vm._s(_vm.numberFormat(_vm.data.total_female_count))
                    ),
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
                  [
                    _vm._v(
                      "\n\t\t\t\t\t\t\t" +
                        _vm._s(
                          _vm.numberFormat(
                            _vm.data.total_person_disability_count
                          )
                        ) +
                        "\n\t\t\t\t\t\t"
                    ),
                  ]
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
                    _vm._v(
                      _vm._s(
                        _vm.numberFormat(_vm.data.total_male_disablity_count)
                      )
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("h5", [_vm._v("Female")]),
                  _vm._v(" "),
                  _c("h3", { staticStyle: { "margin-top": "-20px" } }, [
                    _vm._v(
                      "\n\t\t\t\t\t\t\t\t" +
                        _vm._s(
                          _vm.numberFormat(
                            _vm.data.total_female_disablity_count
                          )
                        ) +
                        "\n\t\t\t\t\t\t\t"
                    ),
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
                { staticClass: "card-header card-header card-header-icon" },
                [
                  _c(
                    "div",
                    {
                      staticClass: "card-icon",
                      staticStyle: { "background-color": "#7b2cbf" },
                    },
                    [
                      _c("i", { staticClass: "material-icons" }, [
                        _vm._v("contacts"),
                      ]),
                    ]
                  ),
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-header" }, [
                _vm._v("\n\t\t\t\t\t\tTotal Senior Citizen\n\t\t\t\t\t\t"),
                _c(
                  "h3",
                  {
                    staticClass: "card-title",
                    staticStyle: { color: "white" },
                  },
                  [
                    _vm._v(
                      "\n\t\t\t\t\t\t\t" +
                        _vm._s(_vm.numberFormat(_vm.data.total_senior_count)) +
                        "\n\t\t\t\t\t\t"
                    ),
                  ]
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
                    _vm._v(
                      _vm._s(_vm.numberFormat(_vm.data.total_male_senior_count))
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("h5", [_vm._v("Female")]),
                  _vm._v(" "),
                  _c("h3", { staticStyle: { "margin-top": "-20px" } }, [
                    _vm._v(
                      _vm._s(
                        _vm.numberFormat(_vm.data.total_female_senior_count)
                      )
                    ),
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
                  [
                    _vm._v(
                      "\n\t\t\t\t\t\t\t" +
                        _vm._s(_vm.numberFormat(_vm.data.total_voters_count)) +
                        "\n\t\t\t\t\t\t"
                    ),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("h5", [_vm._v("Male")]),
                  _vm._v(" "),
                  _c("h3", { staticStyle: { "margin-top": "-20px" } }, [
                    _vm._v(
                      _vm._s(_vm.numberFormat(_vm.data.total_voters_male_count))
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("h5", [_vm._v("Female")]),
                  _vm._v(" "),
                  _c("h3", { staticStyle: { "margin-top": "-20px" } }, [
                    _vm._v(
                      _vm._s(
                        _vm.numberFormat(_vm.data.total_voters_female_count)
                      )
                    ),
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
                    _vm._s(
                      _vm.numberFormat(_vm.data.total_male_migration_rate)
                    ) +
                    "\n\t\t\t\t\t\t"
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("h5", [_vm._v("Female")]),
                _vm._v(
                  "\n\t\t\t\t\t\t\t" +
                    _vm._s(
                      _vm.numberFormat(_vm.data.total_female_migration_rate)
                    ) +
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
                  _c("td", [
                    _vm._v(
                      _vm._s(_vm.numberFormat(_vm.data.transient_status_male))
                    ),
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      _vm._s(_vm.numberFormat(_vm.data.transient_status_female))
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Immigrant")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      _vm._s(_vm.numberFormat(_vm.data.immigrant_status_male))
                    ),
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      _vm._s(_vm.numberFormat(_vm.data.immigrant_status_female))
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Native")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      _vm._s(_vm.numberFormat(_vm.data.native_status_male))
                    ),
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      _vm._s(_vm.numberFormat(_vm.data.native_status_female))
                    ),
                  ]),
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
                    _vm._s(_vm.numberFormat(_vm.data.total_household)) +
                    "\n\t\t\t\t\t\t"
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("h5", [_vm._v("Families")]),
                _vm._v(
                  "\n\t\t\t\t\t\t\t" +
                    _vm._s(_vm.numberFormat(_vm.data.total_family)) +
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
          _vm._v(" "),
          _c("br"),
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
      _vm._v(" "),
      _c("br"),
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
      _vm._v(" "),
      _c("small", [_vm._v("Range Ref: PIDS NO 2018-18 (December 2018)")]),
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