(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{P0Yw:function(t,e,s){"use strict";s.r(e);var a=s("L2JU");function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function r(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){n(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var c={data:function(){return{status:"",activeField:""}},computed:r({},Object(a.c)("ResidentStatusSingle",["entry","loading"])),beforeDestroy:function(){this.resetState()},watch:{"$route.params.id":{immediate:!0,handler:function(){this.resetState(),this.fetchEditData(this.$route.params.id)}}},methods:r(r({},Object(a.b)("ResidentStatusSingle",["updateData","fetchEditData","resetState","setResidentStatusName","setDescription"])),{},{updateResidentStatusName:function(t){this.setResidentStatusName(t.target.value)},updateDescription:function(t){this.setDescription(t.target.value)},submitForm:function(){var t=this;this.updateData().then((function(){t.$router.push({name:"resident_status.index"}),t.$eventHub.$emit("create-success")})).catch((function(e){t.status="failed",_.delay((function(){t.status=""}),3e3)}))},focusField:function(t){this.activeField=t},clearFocus:function(){this.activeField=""}})},o=s("KHd+"),u=Object(o.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card"},[t._m(0),t._v(" "),s("div",{staticClass:"card-body"},[s("back-button")],1),t._v(" "),s("div",{staticClass:"card-body"},[s("bootstrap-alert"),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.entry.resident_status_name,"is-focused":"resident_status_name"==t.activeField}},[s("label",{staticClass:"bmd-label-floating required"},[t._v("Resident Status Name")]),t._v(" "),s("input",{staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.entry.resident_status_name},on:{input:t.updateResidentStatusName,focus:function(e){return t.focusField("resident_status_name")},blur:t.clearFocus}})]),t._v(" "),s("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.entry.description,"is-focused":"description"==t.activeField}},[s("label",{staticClass:"bmd-label-floating required"},[t._v("Description")]),t._v(" "),s("input",{staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.entry.description},on:{input:t.updateDescription,focus:function(e){return t.focusField("description")},blur:t.clearFocus}})])])])],1),t._v(" "),s("div",{staticClass:"card-footer"},[s("vue-button-spinner",{staticClass:"btn-success",attrs:{status:t.status,isLoading:t.loading,disabled:t.loading}},[t._v("\n              "+t._s(t.$t("global.save"))+"\n            ")])],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header card-header-success card-header-icon"},[e("div",{staticClass:"card-icon"},[e("i",{staticClass:"material-icons"},[this._v("add")])]),this._v(" "),e("h4",{staticClass:"card-title"},[this._v("\n              Create\n              "),e("strong",[this._v("Resident Status")])])])}],!1,null,null,null);e.default=u.exports}}]);