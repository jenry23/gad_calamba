(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/DatatablesFieldsMultiple.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Datatables/DatatablesFieldsMultiple.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['field', 'row'],
  computed: {
    entry: function entry() {
      console.log(this.row);
      return this.row[this.field].join();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/TranslatedHeader.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Datatables/TranslatedHeader.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['title']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/TranslatedMultitpleHeader.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Datatables/TranslatedMultitpleHeader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['title']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Reports/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Reports/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Charts_Pie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Charts/Pie */ "./resources/adminapp/js/components/Charts/Pie.vue");
/* harmony import */ var _components_Datatables_DatatablesFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Datatables/DatatablesFields */ "./resources/adminapp/js/components/Datatables/DatatablesFields.vue");
/* harmony import */ var _components_Datatables_DatatablesFieldsMultiple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Datatables/DatatablesFieldsMultiple */ "./resources/adminapp/js/components/Datatables/DatatablesFieldsMultiple.vue");
/* harmony import */ var _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Datatables/TranslatedHeader */ "./resources/adminapp/js/components/Datatables/TranslatedHeader.vue");
/* harmony import */ var _components_Datatables_TranslatedMultitpleHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Datatables/TranslatedMultitpleHeader */ "./resources/adminapp/js/components/Datatables/TranslatedMultitpleHeader.vue");
/* harmony import */ var _components_Datatables_HeaderSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Datatables/HeaderSettings */ "./resources/adminapp/js/components/Datatables/HeaderSettings.vue");
/* harmony import */ var _components_Datatables_GlobalSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Datatables/GlobalSearch */ "./resources/adminapp/js/components/Datatables/GlobalSearch.vue");
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! html2pdf.js */ "./node_modules/html2pdf.js/dist/html2pdf.js");
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(html2pdf_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vue_html2pdf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-html2pdf */ "./node_modules/vue-html2pdf/dist/vue-html2pdf.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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










/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    PieChart: _components_Charts_Pie__WEBPACK_IMPORTED_MODULE_1__["default"],
    GlobalSearch: _components_Datatables_GlobalSearch__WEBPACK_IMPORTED_MODULE_7__["default"],
    DatatablesFields: _components_Datatables_DatatablesFields__WEBPACK_IMPORTED_MODULE_2__["default"],
    HeaderSettings: _components_Datatables_HeaderSettings__WEBPACK_IMPORTED_MODULE_6__["default"],
    VueHtml2pdf: vue_html2pdf__WEBPACK_IMPORTED_MODULE_9__["default"],
    TranslatedMultitpleHeader: _components_Datatables_TranslatedMultitpleHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
    DatatablesFieldsMultiple: _components_Datatables_DatatablesFieldsMultiple__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    var _json_fields;

    return {
      loader: false,
      chartData: null,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        pieceLabel: {
          render: 'value',
          precision: 1
        },
        showAllTooltips: true
      },
      male: '',
      female: '',
      status: '',
      activeField: '',
      disabled_purok: 0,
      disabled_sitio: 0,
      barangay: '',
      excel_name: 'gad.xls',
      columns: [{
        title: 'ID',
        field: 'id',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_4__["default"],
        sortable: true
      }, {
        title: 'Member Name',
        field: 'full_name',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_4__["default"]
      }, {
        title: 'Sex',
        field: 'gender.gender_name',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_4__["default"],
        tdComp: _components_Datatables_DatatablesFields__WEBPACK_IMPORTED_MODULE_2__["default"],
        sortable: true
      }, {
        title: 'Barangay',
        field: 'barangay.barangay_name',
        tdComp: _components_Datatables_DatatablesFields__WEBPACK_IMPORTED_MODULE_2__["default"],
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_4__["default"]
      }, {
        title: 'Age',
        field: 'age',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_4__["default"]
      }, {
        title: 'Civil Status',
        field: 'civil_status.civil_status_name',
        tdComp: _components_Datatables_DatatablesFields__WEBPACK_IMPORTED_MODULE_2__["default"],
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_4__["default"],
        visible: false
      }, {
        title: 'Sector',
        field: 'sector_name',
        tdComp: _components_Datatables_DatatablesFieldsMultiple__WEBPACK_IMPORTED_MODULE_3__["default"],
        thComp: _components_Datatables_TranslatedMultitpleHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
        visible: false
      }, {
        title: 'Gender Preference',
        field: 'gender_preference.gender_preference_name',
        tdComp: _components_Datatables_DatatablesFields__WEBPACK_IMPORTED_MODULE_2__["default"],
        thComp: _components_Datatables_TranslatedMultitpleHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
        visible: false
      }, {
        title: 'Occupation',
        field: 'occupation.occupation_name',
        tdComp: _components_Datatables_DatatablesFields__WEBPACK_IMPORTED_MODULE_2__["default"],
        thComp: _components_Datatables_TranslatedMultitpleHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
        visible: false
      }, {
        title: 'Employer',
        field: 'employer',
        thComp: _components_Datatables_TranslatedMultitpleHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
        visible: false
      }, {
        title: 'Highest Education',
        field: 'educational_attaintment.educational_attaintment_name',
        tdComp: _components_Datatables_DatatablesFields__WEBPACK_IMPORTED_MODULE_2__["default"],
        thComp: _components_Datatables_TranslatedMultitpleHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
        visible: false
      }, {
        title: 'Educational Status',
        field: 'educational_status.educational_status_name',
        tdComp: _components_Datatables_DatatablesFields__WEBPACK_IMPORTED_MODULE_2__["default"],
        thComp: _components_Datatables_TranslatedMultitpleHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
        visible: false
      }, {
        title: 'Ethnicity',
        field: 'ethinicity_name',
        tdComp: _components_Datatables_DatatablesFieldsMultiple__WEBPACK_IMPORTED_MODULE_3__["default"],
        thComp: _components_Datatables_TranslatedMultitpleHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
        visible: false
      }, {
        title: 'Religion',
        field: 'religion.religion_name',
        tdComp: _components_Datatables_DatatablesFields__WEBPACK_IMPORTED_MODULE_2__["default"],
        thComp: _components_Datatables_TranslatedMultitpleHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
        visible: false
      }, {
        title: 'House Ownership',
        field: 'house_ownership.house_ownership_name',
        tdComp: _components_Datatables_DatatablesFields__WEBPACK_IMPORTED_MODULE_2__["default"],
        thComp: _components_Datatables_TranslatedMultitpleHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
        visible: false
      }, {
        title: 'House Type',
        field: 'house_type.house_type_name',
        tdComp: _components_Datatables_DatatablesFields__WEBPACK_IMPORTED_MODULE_2__["default"],
        thComp: _components_Datatables_TranslatedMultitpleHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
        visible: false
      }, {
        title: 'House Make',
        field: 'house_make.house_make_name',
        tdComp: _components_Datatables_DatatablesFields__WEBPACK_IMPORTED_MODULE_2__["default"],
        thComp: _components_Datatables_TranslatedMultitpleHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
        visible: false
      }, {
        title: 'Utilities',
        field: 'utilities_number',
        tdComp: _components_Datatables_DatatablesFieldsMultiple__WEBPACK_IMPORTED_MODULE_3__["default"],
        thComp: _components_Datatables_TranslatedMultitpleHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
        visible: false
      }, {
        title: 'Resident Status',
        field: 'barangay_resident_status_name',
        thComp: _components_Datatables_TranslatedMultitpleHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
        visible: false
      }],
      query: {
        sort: 'id',
        order: 'asc',
        limit: 20,
        s: ''
      },
      xprops: {
        module: 'ReportsSingle',
        route: 'reports',
        permission_prefix: 'reports_'
      },
      json_fields: (_json_fields = {
        'Item No.': 'id',
        'Building No': 'building_no',
        'House No': 'house_no',
        'Household Number': 'household_no',
        'Family Code': 'family_code',
        'Relationship to Head of the Family': 'household.household_name',
        'Last Name': 'last_name',
        'First Name': 'first_name',
        'Middle Name': 'middle_name',
        'Extension Name': 'extension_name',
        'Barangay': 'barangay.barangay_name',
        'Barangay Code/ ID': 'barangay_code',
        'Purok (Code)': 'purok.purok_name',
        'Block/Lot/No. of House/ Street Name ': 'block_lot_house_id',
        'Sitio (Code)': 'sitio.sitio_name',
        'Native Province': 'native_province.province_name',
        'Native City/Municipality': 'native_city.city_name',
        'Valid ID': 'valid_id.name',
        'ID No.': 'id_number',
        'Birthday': 'birth_date',
        'Sex': 'gender.gender_name',
        'Gender Preference': 'gender_preference.gender_preference_name',
        'Civil Status': 'civil_status.civil_status_name',
        'No. of Dependents': 'no_of_dependents',
        'Cellphone Number': 'mobile_no',
        'Landline Number': 'landline_number',
        'Email Address': 'email',
        'Health Condition #1': 'health_condition.0',
        'Health Condition #2': 'health_condition.1',
        'Health Condition #3': 'health_condition.2',
        'Disability Condition #1': 'disability_condition.0',
        'Disability Condition #2': 'disability_condition.1'
      }, _defineProperty(_json_fields, "Disability Condition #2", 'disability_condition.2'), _defineProperty(_json_fields, 'Nutritional Status (Ideal, Wasted, Stunted, Obese, Overweight)', 'nutrition_status'), _defineProperty(_json_fields, 'Government Assistance No. 01', 'government_assistance_number.0'), _defineProperty(_json_fields, 'Government Assistance No. 02', 'government_assistance_number.1'), _defineProperty(_json_fields, 'Government Assistance No. 03', 'government_assistance_number.2'), _defineProperty(_json_fields, 'Occupation', 'occupation.occupation_name'), _defineProperty(_json_fields, 'Employer', 'employer'), _defineProperty(_json_fields, 'Work Location (Province)', 'work_location_province.province_name'), _defineProperty(_json_fields, 'Work Location (City/Municipality)', 'work_location_city.city_name'), _defineProperty(_json_fields, 'Household Monthly Income', 'economic_status'), _defineProperty(_json_fields, 'Economic Status', 'monthly_income.monthly_income_name'), _defineProperty(_json_fields, 'Highest Educational Attainment', 'educational_attaintment.educational_attaintment_name'), _defineProperty(_json_fields, 'Educational Status', 'educational_status.educational_status_name'), _defineProperty(_json_fields, 'Last School Attended', 'last_school_attended'), _defineProperty(_json_fields, 'Government Educational Assistance #1', 'government_educational_assistance_number.0'), _defineProperty(_json_fields, 'Government Educational Assistance #2', 'government_educational_assistance_number.1'), _defineProperty(_json_fields, 'Soft Skills #1', 'soft_skills_name.0'), _defineProperty(_json_fields, 'Soft Skills #2', 'soft_skills_name.1'), _defineProperty(_json_fields, 'Hard Skills #1', 'hard_skills_name.0'), _defineProperty(_json_fields, 'Hard Skills #2', 'hard_skills_name.1'), _defineProperty(_json_fields, 'Hobbies #1', 'hobbies_name.0'), _defineProperty(_json_fields, 'Hobbies #2', 'hobbies_name.1'), _defineProperty(_json_fields, 'Sports #1', 'sports_name.0'), _defineProperty(_json_fields, 'Sports #2', 'sports_name.1'), _defineProperty(_json_fields, 'Ethnicity No. 01', 'ethinicity_name.0'), _defineProperty(_json_fields, 'Religion (Catholic:test, Iglesia ni Cristo:test, etc)', 'religion.religion_name'), _defineProperty(_json_fields, 'Sector No. 01', 'sector_name.0'), _defineProperty(_json_fields, 'Sector No. 02', 'sector_name.1'), _defineProperty(_json_fields, 'Province Registered', 'political_province_registered.province_name'), _defineProperty(_json_fields, 'City/ Municipality Registered', 'political_city_registered.city_name'), _defineProperty(_json_fields, 'Brgy Registered', 'brgy_registered.barangay_name'), _defineProperty(_json_fields, 'Precit No.', 'political_precinct_no'), _defineProperty(_json_fields, 'House Ownership', 'house_ownership.house_ownership_name'), _defineProperty(_json_fields, 'House Type', 'house_type.house_type_name'), _defineProperty(_json_fields, 'House Make', 'house_make.house_make_name'), _defineProperty(_json_fields, 'No. of Nuclear Family in Household', 'no_nuclear_family_household_id'), _defineProperty(_json_fields, 'No. of Bedrooms', 'no_bedrooms_id'), _defineProperty(_json_fields, 'No. of  CRs', 'no_cr_id'), _defineProperty(_json_fields, 'Utilities No. 01', 'utilities_number.0'), _defineProperty(_json_fields, 'Utilities No. 02', 'utilities_number.1'), _defineProperty(_json_fields, 'Utilities No. 03', 'utilities_number.2'), _defineProperty(_json_fields, 'Utilities No. 04', 'utilities_number.3'), _defineProperty(_json_fields, 'Appliances No. 01', 'appliance_number.0'), _defineProperty(_json_fields, 'Appliances No. 02', 'appliance_number.1'), _defineProperty(_json_fields, 'Appliances No. 03', 'appliance_number.2'), _defineProperty(_json_fields, 'Appliances No. 04', 'appliance_number.3'), _defineProperty(_json_fields, 'Vehicles No. 01', 'vehicle_name.0'), _defineProperty(_json_fields, 'Vehicles No. 02', 'vehicle_name.1'), _defineProperty(_json_fields, 'Full Immunization (YES, Public Hosp/ Center YES, Private Hosp/ Clinic, NO)', 'full_immunization'), _defineProperty(_json_fields, 'Covid 19 Test (No COVID Test, Tested Positive for COVID19, Tested Negative for COVID19)', 'covid_19_test'), _defineProperty(_json_fields, 'Date of 1st Dosage Covid 19 Vaccination', 'first_date_vaccination'), _defineProperty(_json_fields, 'BRAND 1', 'brand1'), _defineProperty(_json_fields, 'Date of 2nd Dosage Covid 19 Vaccination', 'second_date_vaccination'), _defineProperty(_json_fields, 'BRAND 2', 'brand2'), _defineProperty(_json_fields, 'Date of Covid Booster', 'booster_date_vaccination'), _defineProperty(_json_fields, 'BRAND 3', 'brand3'), _defineProperty(_json_fields, 'Pregnancy Age', 'pregnancy_age'), _defineProperty(_json_fields, 'With Prenatal Check up (YES, Public Hosp/ Center YES, Private Hosp/ Clinic, NO)', 'prental_checkup'), _defineProperty(_json_fields, 'With Postnatal Check up (YES, Public Hosp/ Center YES, Private Hosp/ Clinic, NO)', 'postnatal_checkup'), _defineProperty(_json_fields, 'Maintaining  Medicine No. 01 ', 'maintaining_medicine_name.0'), _defineProperty(_json_fields, 'Maintaining Medicine No. 01 ', 'maintaining_medicine_name.1'), _defineProperty(_json_fields, 'Organizations Involved No. 01', 'organization_name.0'), _defineProperty(_json_fields, 'Organizations  Involved No. 02', 'organization_name.1'), _defineProperty(_json_fields, 'Barangay Residence Year', 'barangay_residence_year'), _defineProperty(_json_fields, 'Calamba Residence Year', 'calamba_residence_year'), _defineProperty(_json_fields, 'REMARKS', 'remarks'), _json_fields),
      json_data: [],
      json_meta: [[{
        key: "charset",
        value: "utf-8"
      }]]
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('ReportsSingle', ['data', 'total', 'entry', 'loading', 'lists', 'others'])),
  mounted: function mounted() {
    this.fetchCreateData();
  },
  watch: {
    query: {
      handler: function handler(query) {
        this.setQuery(query);
        this.searchData();
      },
      deep: true
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.resetState();
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('ReportsSingle', ['searchData', 'fetchCreateData', 'resetState', 'setBarangay', 'setPurok', 'setSitio', 'setSector', 'setQuery', 'setAgeTo', 'setGender', 'setAgeFrom'])), {}, {
    fetchData: function fetchData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('reports/print-excel', {
                  params: _this.entry
                });

              case 2:
                response = _context.sent;
                return _context.abrupt("return", response.data.data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    downloads: function downloads() {
      this.$refs.html2Pdf.generatePdf();
    },
    startDownload: function startDownload() {
      var today = new Date().toLocaleDateString();
      this.excel_name = "GAD-REPORT ".concat(this.barangay.id, "-").concat(this.barangay.barangay_name, " ").concat(today, ".xls");
      this.loader = true;
    },
    finishDownload: function finishDownload() {
      this.loader = false;
    },
    updateBarangay: function updateBarangay(value) {
      this.setBarangay(value);
      this.barangay = value;
      this.disabled_sitio = 0;
      this.disabled_purok = 0;
      this.setSitio();
      this.setPurok();
    },
    updatePurok: function updatePurok(value) {
      this.setPurok(value);

      if (value) {
        this.disabled_sitio = 1;
      }
    },
    updateSitio: function updateSitio(value) {
      this.setSitio(value);

      if (value) {
        this.disabled_purok = 1;
      }
    },
    updateGender: function updateGender(value) {
      this.setGender(value);
    },
    updateSector: function updateSector(value) {
      this.setSector(value);
    },
    updateAgeTo: function updateAgeTo(e) {
      this.setAgeTo(e.target.value);
    },
    updateAgeFrom: function updateAgeFrom(e) {
      this.setAgeFrom(e.target.value);
    },
    submitForm: function submitForm() {
      var _this2 = this;

      this.searchData().then(function (response) {
        var data_array = response.data.meta;
        var female = data_array['Female'];
        var male = data_array['Male'];
        _this2.male = male;
        _this2.female = female;
        _this2.chartData = {
          labels: ['Female', 'Male'],
          datasets: [{
            backgroundColor: ["#993366", "#0099CC"],
            data: [female, male]
          }]
        };
      })["catch"](function (error) {
        _this2.status = 'failed';

        _.delay(function () {
          _this2.status = '';
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Reports/Index.vue?vue&type=style&index=0&id=6e02a117&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Reports/Index.vue?vue&type=style&index=0&id=6e02a117&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.loader[data-v-6e02a117] {\r\n\tposition: absolute;\r\n\ttop: 0px;\r\n\tright: 0px;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-color: #eceaea;\r\n\tbackground-image: url('https://04.cadwork.com/wp-content/uploads/2019/08/ajax-loader.gif');\r\n\tbackground-size: 300px;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center;\r\n\tz-index: 10000000;\r\n\topacity: 0.8;\r\n\tfilter: alpha(opacity=40);\n}\r\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Reports/Index.vue?vue&type=style&index=0&id=6e02a117&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Reports/Index.vue?vue&type=style&index=0&id=6e02a117&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=6e02a117&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Reports/Index.vue?vue&type=style&index=0&id=6e02a117&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/DatatablesFieldsMultiple.vue?vue&type=template&id=42433c40&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Datatables/DatatablesFieldsMultiple.vue?vue&type=template&id=42433c40& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  return _vm.row
    ? _c("div", [_vm._v("\n\t" + _vm._s(_vm.entry) + "\n")])
    : _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/TranslatedHeader.vue?vue&type=template&id=13b1bd2a&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Datatables/TranslatedHeader.vue?vue&type=template&id=13b1bd2a& ***!
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
  return _c("span", [_vm._v("\n  " + _vm._s(_vm.$t(_vm.title)) + "\n")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/TranslatedMultitpleHeader.vue?vue&type=template&id=0f37c2ed&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/components/Datatables/TranslatedMultitpleHeader.vue?vue&type=template&id=0f37c2ed& ***!
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
  return _c("span", [_vm._v("\n  " + _vm._s(_vm.$t(_vm.title)) + "\n")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Reports/Index.vue?vue&type=template&id=6e02a117&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Reports/Index.vue?vue&type=template&id=6e02a117&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      _vm.loader ? _c("div", { staticClass: "loader" }) : _vm._e(),
      _vm._v(" "),
      _vm._m(0),
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
            "paginate-elements-by-height": 1000,
            filename: "content",
            "pdf-quality": 2,
            "manual-pagination": false,
            "pdf-format": "a4",
            "pdf-orientation": "landscape",
            "pdf-content-width": "1120px",
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
                    _c("div", { staticClass: "col-md-8" }, [
                      _c(
                        "div",
                        { staticClass: "card" },
                        [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-4" }, [
                              _c("br"),
                              _vm._v(" "),
                              _c("img", {
                                attrs: {
                                  src: "/images/cap.jpg",
                                  height: "108px",
                                  width: "110px",
                                },
                              }),
                              _vm._v(" "),
                              _vm.lists.user &&
                              _vm.lists.user.photo.length !== 0
                                ? _c("img", {
                                    attrs: {
                                      src: _vm.lists.user.photo[1].url,
                                      height: "108px",
                                      width: "110px",
                                    },
                                  })
                                : _c("img", {
                                    attrs: {
                                      src: "/images/popcom.png",
                                      height: "108px",
                                      width: "110px",
                                    },
                                  }),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-8" }, [
                              _c("div", { staticClass: "text-left" }, [
                                _c("h3", { staticStyle: { color: "black" } }, [
                                  _c(
                                    "b",
                                    {
                                      staticStyle: {
                                        "text-transform": "uppercase",
                                      },
                                    },
                                    [_vm._v("City Government of Calamba")]
                                  ),
                                  _c("br"),
                                  _vm._v(" "),
                                  _vm.lists.user && _vm.lists.user.barangay
                                    ? _c(
                                        "b",
                                        {
                                          staticStyle: {
                                            "text-transform": "uppercase",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "BARANGAY " +
                                              _vm._s(
                                                _vm.lists.barangay[0]
                                                  .barangay_name
                                              )
                                          ),
                                        ]
                                      )
                                    : _c(
                                        "b",
                                        {
                                          staticStyle: {
                                            "text-transform": "uppercase",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\t\t\t\t\tCITY POPULATION MANAGEMENT OFFICE\n\t\t\t\t\t\t\t\t\t\t\t"
                                          ),
                                        ]
                                      ),
                                  _vm._v(" "),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c(
                                    "b",
                                    {
                                      staticStyle: {
                                        "text-transform": "uppercase",
                                      },
                                    },
                                    [_vm._v("Household Profile")]
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("pie-chart", {
                            attrs: {
                              "chart-data": _vm.chartData,
                              options: _vm.options,
                            },
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-3" }),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3" }, [
                              _c("h3", [_vm._v("Male : " + _vm._s(_vm.male))]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3" }, [
                              _c("h3", [
                                _vm._v("Female : " + _vm._s(_vm.female)),
                              ]),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("div", { staticClass: "card" }, [
                        _c(
                          "div",
                          { staticClass: "card-header card-header-success" },
                          [
                            _c("h4", { staticClass: "card-title" }, [
                              _vm._v("Generate Reports"),
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "crd-category" }, [
                              _vm._v("Advance Search"),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "card-body" }, [
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "div",
                            [
                              _c("label", { staticClass: "label" }, [
                                _vm._v("Barangay"),
                              ]),
                              _vm._v(" "),
                              _c("v-select", {
                                attrs: {
                                  name: "barangay",
                                  label: "barangay_name",
                                  value: _vm.entry.barangay,
                                  options: _vm.lists.barangay,
                                  required: "",
                                },
                                on: {
                                  input: _vm.updateBarangay,
                                  focus: function ($event) {
                                    return _vm.focusField("barangay")
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
                            [
                              _c("label", { staticClass: "label" }, [
                                _vm._v("Purok"),
                              ]),
                              _vm._v(" "),
                              _c("v-select", {
                                attrs: {
                                  name: "purok",
                                  label: "purok_name",
                                  value: _vm.entry.purok,
                                  options: _vm.others.purok,
                                  disabled: _vm.disabled_purok == 1,
                                  required: "",
                                },
                                on: {
                                  input: _vm.updatePurok,
                                  focus: function ($event) {
                                    return _vm.focusField("purok")
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
                            [
                              _c("label", { staticClass: "label" }, [
                                _vm._v("Sitio"),
                              ]),
                              _vm._v(" "),
                              _c("v-select", {
                                attrs: {
                                  name: "sitio",
                                  label: "sitio_name",
                                  value: _vm.entry.sitio,
                                  options: _vm.others.sitio,
                                  disabled: _vm.disabled_sitio == 1,
                                  required: "",
                                },
                                on: {
                                  input: _vm.updateSitio,
                                  focus: function ($event) {
                                    return _vm.focusField("sitio")
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
                            [
                              _c("label", { staticClass: "label" }, [
                                _vm._v("Sector"),
                              ]),
                              _vm._v(" "),
                              _c("v-select", {
                                attrs: {
                                  name: "sector",
                                  label: "sector_name",
                                  value: _vm.entry.sector,
                                  options: _vm.lists.sector,
                                  required: "",
                                },
                                on: {
                                  input: _vm.updateSector,
                                  focus: function ($event) {
                                    return _vm.focusField("sector")
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
                            [
                              _c("label", { staticClass: "label" }, [
                                _vm._v("Gender"),
                              ]),
                              _vm._v(" "),
                              _c("v-select", {
                                attrs: {
                                  name: "gender",
                                  label: "gender_name",
                                  value: _vm.entry.gender,
                                  options: _vm.lists.gender,
                                  required: "",
                                },
                                on: {
                                  input: _vm.updateGender,
                                  focus: function ($event) {
                                    return _vm.focusField("gender")
                                  },
                                  blur: _vm.clearFocus,
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", [
                            _c("label", { staticClass: "label" }, [
                              _vm._v("Age"),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-6" }, [
                                _c("input", {
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "number",
                                    placeholder: "From",
                                    name: "age_from",
                                  },
                                  domProps: { value: _vm.entry.age_from },
                                  on: { input: _vm.updateAgeFrom },
                                }),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-6" }, [
                                _c("input", {
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "number",
                                    placeholder: "To",
                                    name: "age_to",
                                  },
                                  domProps: { value: _vm.entry.age_to },
                                  on: { input: _vm.updateAgeTo },
                                }),
                              ]),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "card-footer" },
                          [
                            _c(
                              "vue-button-spinner",
                              {
                                staticClass: "btn-info",
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
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-success",
                                attrs: {
                                  type: "button",
                                  "data-toggle": "modal",
                                  "data-target": "#exampleModalCenter",
                                },
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t\tAdvance Filter\n\t\t\t\t\t\t\t\t"
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ]),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c("div", { staticClass: "card" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "card-header card-header-success card-header-icon",
                      },
                      [
                        _c("div", { staticClass: "card-icon" }, [
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("assignment"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "card-title" }, [
                          _vm._v("\n\t\t\t\t\t\t\t\tTable\n\t\t\t\t\t\t\t\t"),
                          _c("strong", [_vm._v("Resident List")]),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-12" },
                          [
                            _c(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.loading,
                                    expression: "loading",
                                  },
                                ],
                                staticClass: "table-overlay",
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "table-overlay-container" },
                                  [
                                    _c("material-spinner"),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Loading...")]),
                                  ],
                                  1
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "download-excel",
                              {
                                staticClass: "btn btn-success",
                                attrs: {
                                  worksheet: "Resident List",
                                  fields: _vm.json_fields,
                                  fetch: _vm.fetchData,
                                  "before-generate": _vm.startDownload,
                                  name: this.excel_name,
                                  "before-finish": _vm.finishDownload,
                                },
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t\t\tPrint Excel\n\t\t\t\t\t\t\t\t\t"
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-info",
                                on: { click: _vm.downloads },
                              },
                              [_vm._v("Download PDF")]
                            ),
                            _vm._v(" "),
                            _c(
                              "datatable",
                              {
                                attrs: {
                                  columns: _vm.columns,
                                  data: _vm.data,
                                  total: _vm.total,
                                  query: _vm.query,
                                  xprops: _vm.xprops,
                                  HeaderSettings: false,
                                  pageSizeOptions: [10, 25, 50, 100],
                                },
                              },
                              [
                                _c("global-search", {
                                  staticClass: "pull-left",
                                  attrs: { query: _vm.query },
                                }),
                                _vm._v(" "),
                                _c("header-settings", {
                                  staticClass: "pull-right",
                                  attrs: { columns: _vm.columns },
                                }),
                              ],
                              1
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
      {
        staticClass: "modal fade",
        attrs: {
          id: "exampleModalCenter",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalCenterTitle",
          "aria-hidden": "true",
        },
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered",
            attrs: { role: "document" },
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "h5",
                  {
                    staticClass: "modal-title",
                    attrs: { id: "exampleModalLongTitle" },
                  },
                  [_vm._v("Advance Search")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close",
                    },
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×"),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [_vm._v("...")]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button", "data-dismiss": "modal" },
                  },
                  [_vm._v("Close")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-success", attrs: { type: "button" } },
                  [_vm._v("Save changes")]
                ),
              ]),
            ]),
          ]
        ),
      ]
    )
  },
]
render._withStripped = true



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

/***/ "./resources/adminapp/js/components/Datatables/DatatablesFieldsMultiple.vue":
/*!**********************************************************************************!*\
  !*** ./resources/adminapp/js/components/Datatables/DatatablesFieldsMultiple.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DatatablesFieldsMultiple_vue_vue_type_template_id_42433c40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatatablesFieldsMultiple.vue?vue&type=template&id=42433c40& */ "./resources/adminapp/js/components/Datatables/DatatablesFieldsMultiple.vue?vue&type=template&id=42433c40&");
/* harmony import */ var _DatatablesFieldsMultiple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DatatablesFieldsMultiple.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/components/Datatables/DatatablesFieldsMultiple.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DatatablesFieldsMultiple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DatatablesFieldsMultiple_vue_vue_type_template_id_42433c40___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DatatablesFieldsMultiple_vue_vue_type_template_id_42433c40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/components/Datatables/DatatablesFieldsMultiple.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/components/Datatables/DatatablesFieldsMultiple.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/adminapp/js/components/Datatables/DatatablesFieldsMultiple.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatablesFieldsMultiple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DatatablesFieldsMultiple.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/DatatablesFieldsMultiple.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatablesFieldsMultiple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/components/Datatables/DatatablesFieldsMultiple.vue?vue&type=template&id=42433c40&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/adminapp/js/components/Datatables/DatatablesFieldsMultiple.vue?vue&type=template&id=42433c40& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatablesFieldsMultiple_vue_vue_type_template_id_42433c40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DatatablesFieldsMultiple.vue?vue&type=template&id=42433c40& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/DatatablesFieldsMultiple.vue?vue&type=template&id=42433c40&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatablesFieldsMultiple_vue_vue_type_template_id_42433c40___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatablesFieldsMultiple_vue_vue_type_template_id_42433c40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/components/Datatables/TranslatedHeader.vue":
/*!**************************************************************************!*\
  !*** ./resources/adminapp/js/components/Datatables/TranslatedHeader.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TranslatedHeader_vue_vue_type_template_id_13b1bd2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TranslatedHeader.vue?vue&type=template&id=13b1bd2a& */ "./resources/adminapp/js/components/Datatables/TranslatedHeader.vue?vue&type=template&id=13b1bd2a&");
/* harmony import */ var _TranslatedHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TranslatedHeader.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/components/Datatables/TranslatedHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TranslatedHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TranslatedHeader_vue_vue_type_template_id_13b1bd2a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TranslatedHeader_vue_vue_type_template_id_13b1bd2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/components/Datatables/TranslatedHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/components/Datatables/TranslatedHeader.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/adminapp/js/components/Datatables/TranslatedHeader.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TranslatedHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TranslatedHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/TranslatedHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TranslatedHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/components/Datatables/TranslatedHeader.vue?vue&type=template&id=13b1bd2a&":
/*!*********************************************************************************************************!*\
  !*** ./resources/adminapp/js/components/Datatables/TranslatedHeader.vue?vue&type=template&id=13b1bd2a& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TranslatedHeader_vue_vue_type_template_id_13b1bd2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TranslatedHeader.vue?vue&type=template&id=13b1bd2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/TranslatedHeader.vue?vue&type=template&id=13b1bd2a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TranslatedHeader_vue_vue_type_template_id_13b1bd2a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TranslatedHeader_vue_vue_type_template_id_13b1bd2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/components/Datatables/TranslatedMultitpleHeader.vue":
/*!***********************************************************************************!*\
  !*** ./resources/adminapp/js/components/Datatables/TranslatedMultitpleHeader.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TranslatedMultitpleHeader_vue_vue_type_template_id_0f37c2ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TranslatedMultitpleHeader.vue?vue&type=template&id=0f37c2ed& */ "./resources/adminapp/js/components/Datatables/TranslatedMultitpleHeader.vue?vue&type=template&id=0f37c2ed&");
/* harmony import */ var _TranslatedMultitpleHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TranslatedMultitpleHeader.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/components/Datatables/TranslatedMultitpleHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TranslatedMultitpleHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TranslatedMultitpleHeader_vue_vue_type_template_id_0f37c2ed___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TranslatedMultitpleHeader_vue_vue_type_template_id_0f37c2ed___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/components/Datatables/TranslatedMultitpleHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/components/Datatables/TranslatedMultitpleHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/adminapp/js/components/Datatables/TranslatedMultitpleHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TranslatedMultitpleHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TranslatedMultitpleHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/TranslatedMultitpleHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TranslatedMultitpleHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/components/Datatables/TranslatedMultitpleHeader.vue?vue&type=template&id=0f37c2ed&":
/*!******************************************************************************************************************!*\
  !*** ./resources/adminapp/js/components/Datatables/TranslatedMultitpleHeader.vue?vue&type=template&id=0f37c2ed& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TranslatedMultitpleHeader_vue_vue_type_template_id_0f37c2ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TranslatedMultitpleHeader.vue?vue&type=template&id=0f37c2ed& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/components/Datatables/TranslatedMultitpleHeader.vue?vue&type=template&id=0f37c2ed&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TranslatedMultitpleHeader_vue_vue_type_template_id_0f37c2ed___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TranslatedMultitpleHeader_vue_vue_type_template_id_0f37c2ed___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/cruds/Reports/Index.vue":
/*!*******************************************************!*\
  !*** ./resources/adminapp/js/cruds/Reports/Index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_6e02a117_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=6e02a117&scoped=true& */ "./resources/adminapp/js/cruds/Reports/Index.vue?vue&type=template&id=6e02a117&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/Reports/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_id_6e02a117_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=6e02a117&scoped=true&lang=css& */ "./resources/adminapp/js/cruds/Reports/Index.vue?vue&type=style&index=0&id=6e02a117&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_6e02a117_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_6e02a117_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6e02a117",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/Reports/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/Reports/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Reports/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Reports/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/Reports/Index.vue?vue&type=style&index=0&id=6e02a117&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Reports/Index.vue?vue&type=style&index=0&id=6e02a117&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_6e02a117_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=6e02a117&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Reports/Index.vue?vue&type=style&index=0&id=6e02a117&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_6e02a117_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_6e02a117_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_6e02a117_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_6e02a117_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/adminapp/js/cruds/Reports/Index.vue?vue&type=template&id=6e02a117&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Reports/Index.vue?vue&type=template&id=6e02a117&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6e02a117_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=6e02a117&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Reports/Index.vue?vue&type=template&id=6e02a117&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6e02a117_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6e02a117_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);