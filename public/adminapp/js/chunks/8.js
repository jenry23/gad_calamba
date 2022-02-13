(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Layout/Content.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/pages/Layout/Content.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Layout/DashboardLayout.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/pages/Layout/DashboardLayout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Content_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content.vue */ "./resources/adminapp/js/pages/Layout/Content.vue");
/* harmony import */ var _TopNavbar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopNavbar.vue */ "./resources/adminapp/js/pages/Layout/TopNavbar.vue");
/* harmony import */ var _MobileMenu_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileMenu.vue */ "./resources/adminapp/js/pages/Layout/MobileMenu.vue");
//
//
//
//
//
//
//
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
    DashboardContent: _Content_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TopNavbar: _TopNavbar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    MobileMenu: _MobileMenu_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    var date = new Date().toISOString().split('T')[0];
    return {
      sidebarLinks: [{
        title: 'global.dashboard',
        icon: 'dashboard',
        path: {
          name: 'dashboard'
        },
        gate: 'dashboard_access'
      }, {
        title: 'reports',
        icon: 'assessment',
        path: {
          name: 'reports'
        },
        gate: 'reports_access',
        children: [{
          title: 'Generate Report',
          icon: 'perm_data_setting',
          path: {
            name: 'generate_reports.index'
          },
          gate: 'generate_reports_access'
        }]
      }, {
        title: 'POPCOM',
        icon: 'contacts',
        path: {
          name: 'gad'
        },
        gate: 'gad_access',
        children: [{
          title: 'New Household',
          icon: 'users',
          path: {
            name: 'gad_list.create'
          },
          gate: 'gad_list_access'
        }, {
          title: 'New Individual Resident',
          icon: 'users',
          path: {
            name: 'gad_list_individual.create'
          },
          gate: 'gad_list_individual_access'
        }]
      }, {
        title: 'System Maintenance',
        icon: 'settings',
        path: {
          name: 'system_maintenance'
        },
        gate: 'system_maintenance_access',
        children: [{
          title: 'Barangay',
          icon: 'users',
          path: {
            name: 'barangay.index'
          },
          gate: 'barangay_access'
        }, {
          title: 'Household',
          icon: 'users',
          path: {
            name: 'household.index'
          },
          gate: 'household_access'
        }, {
          title: 'Purok',
          icon: 'users',
          path: {
            name: 'purok.index'
          },
          gate: 'purok_access'
        }, {
          title: 'Sitio',
          icon: 'users',
          path: {
            name: 'sitio.index'
          },
          gate: 'sitio_access'
        }, {
          title: 'Province',
          icon: 'users',
          path: {
            name: 'province.index'
          },
          gate: 'province_access'
        }, {
          title: 'City',
          icon: 'users',
          path: {
            name: 'city.index'
          },
          gate: 'city_access'
        }, {
          title: 'Valid ID',
          icon: 'users',
          path: {
            name: 'valid_id.index'
          },
          gate: 'valid_id_access'
        }, {
          title: 'Sector',
          icon: 'users',
          path: {
            name: 'sector.index'
          },
          gate: 'sector_access'
        }, {
          title: 'Gender',
          icon: 'users',
          path: {
            name: 'gender.index'
          },
          gate: 'gender_access'
        }, {
          title: 'Gender Preference',
          icon: 'users',
          path: {
            name: 'gender_preference.index'
          },
          gate: 'gender_preference_access'
        }, {
          title: 'Civil Status',
          icon: 'users',
          path: {
            name: 'civil_status.index'
          },
          gate: 'civil_status_access'
        }, {
          title: 'Health',
          icon: 'users',
          path: {
            name: 'health.index'
          },
          gate: 'health_access'
        }, {
          title: 'Educational Assistance',
          icon: 'users',
          path: {
            name: 'educational_assistance.index'
          },
          gate: 'educational_assistance_access'
        }, {
          title: 'Monthly Income',
          icon: 'users',
          path: {
            name: 'monthly_income.index'
          },
          gate: 'monthly_income_access'
        }, {
          title: 'Educational Attaintment',
          icon: 'users',
          path: {
            name: 'educational_attaintment.index'
          },
          gate: 'educational_attaintment_access'
        }, {
          title: 'Educational Status',
          icon: 'users',
          path: {
            name: 'educational_status.index'
          },
          gate: 'educational_status_access'
        }, {
          title: 'Governemt Educational Assistance',
          icon: 'users',
          path: {
            name: 'government_educational_assistance.index'
          },
          gate: 'government_educational_assistance_access'
        }, {
          title: 'Ethinicity',
          icon: 'users',
          path: {
            name: 'ethnicity.index'
          },
          gate: 'ethnicity_access'
        }, {
          title: 'House Ownership',
          icon: 'users',
          path: {
            name: 'house_ownership.index'
          },
          gate: 'house_ownership_access'
        }, {
          title: 'House Type',
          icon: 'users',
          path: {
            name: 'house_type.index'
          },
          gate: 'house_type_access'
        }, {
          title: 'House Make',
          icon: 'users',
          path: {
            name: 'house_make.index'
          },
          gate: 'house_make_access'
        }, {
          title: 'Organization',
          icon: 'users',
          path: {
            name: 'organization.index'
          },
          gate: 'organization_access'
        }, {
          title: 'Resident Status',
          icon: 'users',
          path: {
            name: 'resident_status.index'
          },
          gate: 'resident_status_access'
        }]
      }, {
        title: 'cruds.userManagement.title',
        icon: 'person',
        path: {
          name: 'user_management'
        },
        gate: 'user_management_access',
        children: [{
          title: 'cruds.permission.title',
          icon: 'perm_data_setting',
          path: {
            name: 'permissions.index'
          },
          gate: 'permission_access'
        }, {
          title: 'cruds.role.title',
          icon: 'group',
          path: {
            name: 'roles.index'
          },
          gate: 'role_access'
        }, {
          title: 'cruds.user.title',
          icon: 'person',
          path: {
            name: 'users.index'
          },
          gate: 'user_access'
        }]
      }]
    };
  },
  mounted: function mounted() {
    if (this.$route.name == 'dashboard') {
      this.$sidebar.showSidebar = true;
    } else {
      this.$sidebar.showSidebar = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Layout/MobileMenu.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/pages/Layout/MobileMenu.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Layout/TopNavbar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/pages/Layout/TopNavbar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    toggleSidebar: function toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Layout/Content.vue?vue&type=style&index=0&id=3b48bf40&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/pages/Layout/Content.vue?vue&type=style&index=0&id=3b48bf40&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.fade-enter-active[data-v-3b48bf40],\r\n.fade-leave-active[data-v-3b48bf40] {\r\n  transition: opacity 0.1s;\n}\n.fade-enter[data-v-3b48bf40],\r\n.fade-leave-to[data-v-3b48bf40] {\r\n  opacity: 0;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Layout/Content.vue?vue&type=style&index=0&id=3b48bf40&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/pages/Layout/Content.vue?vue&type=style&index=0&id=3b48bf40&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=style&index=0&id=3b48bf40&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Layout/Content.vue?vue&type=style&index=0&id=3b48bf40&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Layout/Content.vue?vue&type=template&id=3b48bf40&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/pages/Layout/Content.vue?vue&type=template&id=3b48bf40&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    { attrs: { name: "fade", mode: "out-in" } },
    [_c("router-view", { key: _vm.$route.fullPath })],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Layout/DashboardLayout.vue?vue&type=template&id=4269f576&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/pages/Layout/DashboardLayout.vue?vue&type=template&id=4269f576& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "wrapper", class: { "nav-open": _vm.$sidebar.showSidebar } },
    [
      _c("event-hub"),
      _vm._v(" "),
      _c(
        "side-bar",
        { attrs: { sidebarLinks: _vm.sidebarLinks } },
        [_c("mobile-menu", { attrs: { slot: "content" }, slot: "content" })],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "main-panel" },
        [
          _c("top-navbar"),
          _vm._v(" "),
          _c("div", { staticClass: "content" }, [_c("dashboard-content")], 1)
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Layout/MobileMenu.vue?vue&type=template&id=ed98e1ec&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/pages/Layout/MobileMenu.vue?vue&type=template&id=ed98e1ec& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ul", { staticClass: "nav nav-mobile-menu" })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Layout/TopNavbar.vue?vue&type=template&id=040163ec&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/pages/Layout/TopNavbar.vue?vue&type=template&id=040163ec& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    {
      staticClass:
        "navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top"
    },
    [
      _c(
        "div",
        { staticClass: "container-fluid" },
        [
          _c("div", { staticClass: "navbar-wrapper" }, [
            _c("div", { staticClass: "navbar-brand" }, [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.$t(_vm.$route.meta.title)) +
                  "\n      "
              )
            ])
          ]),
          _vm._v(" "),
          _c("autocomplete"),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "navbar-toggler",
              class: { toggled: _vm.$sidebar.showSidebar },
              attrs: {
                type: "button",
                "data-toggle": "collapse",
                "aria-controls": "navigation-index",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation"
              },
              on: { click: _vm.toggleSidebar }
            },
            [
              _c("span", { staticClass: "sr-only" }, [
                _vm._v("Toggle navigation")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "navbar-toggler-icon icon-bar" }),
              _vm._v(" "),
              _c("span", { staticClass: "navbar-toggler-icon icon-bar" }),
              _vm._v(" "),
              _c("span", { staticClass: "navbar-toggler-icon icon-bar" })
            ]
          ),
          _vm._v(" "),
          _c("div", [
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-9" }, [
                !_vm.$can("powered_gad_access")
                  ? _c("h5", [_vm._v("DATABASE POWERED BY GAD")])
                  : _vm._e()
              ])
            ])
          ])
        ],
        1
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("img", {
        staticClass: "img-fluid",
        staticStyle: { width: "50px", height: "50px" },
        attrs: { src: "/images/gad-logo-login.png" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/adminapp/js/pages/Layout/Content.vue":
/*!********************************************************!*\
  !*** ./resources/adminapp/js/pages/Layout/Content.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Content_vue_vue_type_template_id_3b48bf40_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content.vue?vue&type=template&id=3b48bf40&scoped=true& */ "./resources/adminapp/js/pages/Layout/Content.vue?vue&type=template&id=3b48bf40&scoped=true&");
/* harmony import */ var _Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/pages/Layout/Content.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Content_vue_vue_type_style_index_0_id_3b48bf40_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content.vue?vue&type=style&index=0&id=3b48bf40&scoped=true&lang=css& */ "./resources/adminapp/js/pages/Layout/Content.vue?vue&type=style&index=0&id=3b48bf40&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Content_vue_vue_type_template_id_3b48bf40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Content_vue_vue_type_template_id_3b48bf40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3b48bf40",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/pages/Layout/Content.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/pages/Layout/Content.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/adminapp/js/pages/Layout/Content.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Layout/Content.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/pages/Layout/Content.vue?vue&type=style&index=0&id=3b48bf40&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/adminapp/js/pages/Layout/Content.vue?vue&type=style&index=0&id=3b48bf40&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_id_3b48bf40_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=style&index=0&id=3b48bf40&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Layout/Content.vue?vue&type=style&index=0&id=3b48bf40&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_id_3b48bf40_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_id_3b48bf40_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_id_3b48bf40_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_id_3b48bf40_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/adminapp/js/pages/Layout/Content.vue?vue&type=template&id=3b48bf40&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/adminapp/js/pages/Layout/Content.vue?vue&type=template&id=3b48bf40&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_3b48bf40_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=template&id=3b48bf40&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Layout/Content.vue?vue&type=template&id=3b48bf40&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_3b48bf40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_3b48bf40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/pages/Layout/DashboardLayout.vue":
/*!****************************************************************!*\
  !*** ./resources/adminapp/js/pages/Layout/DashboardLayout.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardLayout_vue_vue_type_template_id_4269f576___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardLayout.vue?vue&type=template&id=4269f576& */ "./resources/adminapp/js/pages/Layout/DashboardLayout.vue?vue&type=template&id=4269f576&");
/* harmony import */ var _DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardLayout.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/pages/Layout/DashboardLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardLayout_vue_vue_type_template_id_4269f576___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardLayout_vue_vue_type_template_id_4269f576___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/pages/Layout/DashboardLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/pages/Layout/DashboardLayout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/adminapp/js/pages/Layout/DashboardLayout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Layout/DashboardLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/pages/Layout/DashboardLayout.vue?vue&type=template&id=4269f576&":
/*!***********************************************************************************************!*\
  !*** ./resources/adminapp/js/pages/Layout/DashboardLayout.vue?vue&type=template&id=4269f576& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_template_id_4269f576___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardLayout.vue?vue&type=template&id=4269f576& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Layout/DashboardLayout.vue?vue&type=template&id=4269f576&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_template_id_4269f576___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_template_id_4269f576___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/pages/Layout/MobileMenu.vue":
/*!***********************************************************!*\
  !*** ./resources/adminapp/js/pages/Layout/MobileMenu.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobileMenu_vue_vue_type_template_id_ed98e1ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileMenu.vue?vue&type=template&id=ed98e1ec& */ "./resources/adminapp/js/pages/Layout/MobileMenu.vue?vue&type=template&id=ed98e1ec&");
/* harmony import */ var _MobileMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileMenu.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/pages/Layout/MobileMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MobileMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MobileMenu_vue_vue_type_template_id_ed98e1ec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MobileMenu_vue_vue_type_template_id_ed98e1ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/pages/Layout/MobileMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/pages/Layout/MobileMenu.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/adminapp/js/pages/Layout/MobileMenu.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Layout/MobileMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/pages/Layout/MobileMenu.vue?vue&type=template&id=ed98e1ec&":
/*!******************************************************************************************!*\
  !*** ./resources/adminapp/js/pages/Layout/MobileMenu.vue?vue&type=template&id=ed98e1ec& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMenu_vue_vue_type_template_id_ed98e1ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileMenu.vue?vue&type=template&id=ed98e1ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Layout/MobileMenu.vue?vue&type=template&id=ed98e1ec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMenu_vue_vue_type_template_id_ed98e1ec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMenu_vue_vue_type_template_id_ed98e1ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/adminapp/js/pages/Layout/TopNavbar.vue":
/*!**********************************************************!*\
  !*** ./resources/adminapp/js/pages/Layout/TopNavbar.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopNavbar_vue_vue_type_template_id_040163ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopNavbar.vue?vue&type=template&id=040163ec& */ "./resources/adminapp/js/pages/Layout/TopNavbar.vue?vue&type=template&id=040163ec&");
/* harmony import */ var _TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopNavbar.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/pages/Layout/TopNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopNavbar_vue_vue_type_template_id_040163ec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopNavbar_vue_vue_type_template_id_040163ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/pages/Layout/TopNavbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/pages/Layout/TopNavbar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/adminapp/js/pages/Layout/TopNavbar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNavbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Layout/TopNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/pages/Layout/TopNavbar.vue?vue&type=template&id=040163ec&":
/*!*****************************************************************************************!*\
  !*** ./resources/adminapp/js/pages/Layout/TopNavbar.vue?vue&type=template&id=040163ec& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_template_id_040163ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNavbar.vue?vue&type=template&id=040163ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/pages/Layout/TopNavbar.vue?vue&type=template&id=040163ec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_template_id_040163ec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_template_id_040163ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);