(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{oHPG:function(t,a,e){"use strict";e.r(a);var r=e("L2JU");function s(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?s(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var o={data:function(){return{status:"",activeField:""}},computed:i({},Object(r.c)("PurokSingle",["entry","loading","lists"])),watch:{"$route.params.id":{immediate:!0,handler:function(){this.resetState(),this.fetchEditData(this.$route.params.id)}}},beforeDestroy:function(){this.resetState()},methods:i(i({},Object(r.b)("PurokSingle",["updateData","fetchEditData","resetState","setPurokName","setBarangayID"])),{},{updatePurokName:function(t){this.setPurokName(t.target.value)},updateBarangayID:function(t){this.setBarangayID(t)},submitForm:function(){var t=this;this.updateData().then((function(){t.$router.push({name:"purok.index"}),t.$eventHub.$emit("create-success")})).catch((function(a){t.status="failed",_.delay((function(){t.status=""}),3e3)}))},focusField:function(t){this.activeField=t},clearFocus:function(){this.activeField=""}})},c=e("KHd+"),u=Object(c.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid"},[e("form",{on:{submit:function(a){return a.preventDefault(),t.submitForm.apply(null,arguments)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body"},[e("back-button")],1),t._v(" "),e("div",{staticClass:"card-body"},[e("bootstrap-alert"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.entry.purok_name,"is-focused":"purok_name"==t.activeField}},[e("label",{staticClass:"bmd-label-floating required"},[t._v("Purok Name")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.entry.purok_name},on:{input:t.updatePurokName,focus:function(a){return t.focusField("purok_name")},blur:t.clearFocus}})]),t._v(" "),e("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.entry.barangay_id,"is-focused":"barangay_id"==t.activeField}},[e("label",{staticClass:"bmd-label-floating required"},[t._v("Barangay Name")]),t._v(" "),e("v-select",{key:"barangay_id-field",attrs:{name:"barangay_id",label:"barangay_name",value:t.entry.barangay_id,options:t.lists.barangay_id},on:{input:t.updateBarangayID,focus:function(a){return t.focusField("barangay_id")},blur:t.clearFocus}})],1)])])],1),t._v(" "),e("div",{staticClass:"card-footer"},[e("vue-button-spinner",{staticClass:"btn-primary",attrs:{status:t.status,isLoading:t.loading,disabled:t.loading}},[t._v("\n              "+t._s(t.$t("global.save"))+"\n            ")])],1)])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header card-header-primary card-header-icon"},[a("div",{staticClass:"card-icon"},[a("i",{staticClass:"material-icons"},[this._v("add")])]),this._v(" "),a("h4",{staticClass:"card-title"},[this._v("\n              Create\n              "),a("strong",[this._v("Purok")])])])}],!1,null,null,null);a.default=u.exports}}]);