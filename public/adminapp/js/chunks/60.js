(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{s1fe:function(t,e,i){"use strict";i.r(e);var s=i("L2JU");function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c={data:function(){return{status:"",activeField:""}},computed:r({},Object(s.c)("EthnicitySingle",["entry","loading"])),beforeDestroy:function(){this.resetState()},watch:{"$route.params.id":{immediate:!0,handler:function(){this.resetState(),this.fetchEditData(this.$route.params.id)}}},methods:r(r({},Object(s.b)("EthnicitySingle",["updateData","fetchEditData","resetState","setEthnicityName","setDescription"])),{},{updateEthnicityName:function(t){this.setEthnicityName(t.target.value)},updateDescription:function(t){this.setDescription(t.target.value)},submitForm:function(){var t=this;this.updateData().then((function(){t.$router.push({name:"ethnicity.index"}),t.$eventHub.$emit("create-success")})).catch((function(e){t.status="failed",_.delay((function(){t.status=""}),3e3)}))},focusField:function(t){this.activeField=t},clearFocus:function(){this.activeField=""}})},o=i("KHd+"),u=Object(o.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-fluid"},[i("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"card"},[t._m(0),t._v(" "),i("div",{staticClass:"card-body"},[i("back-button")],1),t._v(" "),i("div",{staticClass:"card-body"},[i("bootstrap-alert"),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.entry.ethnicity_name,"is-focused":"ethnicity_name"==t.activeField}},[i("label",{staticClass:"bmd-label-floating required"},[t._v("Ethnicity Name")]),t._v(" "),i("input",{staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.entry.ethnicity_name},on:{input:t.updateEthnicityName,focus:function(e){return t.focusField("ethnicity_name")},blur:t.clearFocus}})]),t._v(" "),i("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.entry.description,"is-focused":"description"==t.activeField}},[i("label",{staticClass:"bmd-label-floating required"},[t._v("Description")]),t._v(" "),i("input",{staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.entry.description},on:{input:t.updateDescription,focus:function(e){return t.focusField("description")},blur:t.clearFocus}})])])])],1),t._v(" "),i("div",{staticClass:"card-footer"},[i("vue-button-spinner",{staticClass:"btn-primary",attrs:{status:t.status,isLoading:t.loading,disabled:t.loading}},[t._v("\n              "+t._s(t.$t("global.save"))+"\n            ")])],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header card-header-primary card-header-icon"},[e("div",{staticClass:"card-icon"},[e("i",{staticClass:"material-icons"},[this._v("add")])]),this._v(" "),e("h4",{staticClass:"card-title"},[this._v("\n              Update\n              "),e("strong",[this._v("Ethnicity")])])])}],!1,null,null,null);e.default=u.exports}}]);