(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{X90N:function(t,e,a){"use strict";a.r(e);var s=a("L2JU");function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var c={data:function(){return{status:"",activeField:""}},computed:i({},Object(s.c)("HealthSingle",["entry","loading"])),beforeDestroy:function(){this.resetState()},methods:i(i({},Object(s.b)("HealthSingle",["storeData","resetState","setHealthName"])),{},{updateHealthName:function(t){this.setHealthName(t.target.value)},submitForm:function(){var t=this;this.storeData().then((function(){t.$router.push({name:"health.index"}),t.$eventHub.$emit("create-success")})).catch((function(e){t.status="failed",_.delay((function(){t.status=""}),3e3)}))},focusField:function(t){this.activeField=t},clearFocus:function(){this.activeField=""}})},o=a("KHd+"),l=Object(o.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"card-body"},[a("back-button")],1),t._v(" "),a("div",{staticClass:"card-body"},[a("bootstrap-alert"),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.entry.health_name,"is-focused":"health_name"==t.activeField}},[a("label",{staticClass:"bmd-label-floating required"},[t._v("Health Name")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.entry.health_name},on:{input:t.updateHealthName,focus:function(e){return t.focusField("health_name")},blur:t.clearFocus}})])])])],1),t._v(" "),a("div",{staticClass:"card-footer"},[a("vue-button-spinner",{staticClass:"btn-success",attrs:{status:t.status,isLoading:t.loading,disabled:t.loading}},[t._v("\n              "+t._s(t.$t("global.save"))+"\n            ")])],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header card-header-success card-header-icon"},[e("div",{staticClass:"card-icon"},[e("i",{staticClass:"material-icons"},[this._v("add")])]),this._v(" "),e("h4",{staticClass:"card-title"},[this._v("\n              Create\n              "),e("strong",[this._v("Health")])])])}],!1,null,null,null);e.default=l.exports}}]);