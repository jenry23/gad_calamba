(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{oHPG:function(t,e,a){"use strict";a.r(e);var s=a("L2JU");function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var c={data:function(){return{status:"",activeField:""}},computed:i({},Object(s.c)("PurokSingle",["entry","loading","lists"])),watch:{"$route.params.id":{immediate:!0,handler:function(){this.resetState(),this.fetchEditData(this.$route.params.id)}}},beforeDestroy:function(){this.resetState()},methods:i(i({},Object(s.b)("PurokSingle",["updateData","fetchEditData","resetState","setPurokName","setBarangayID"])),{},{updatePurokName:function(t){this.setPurokName(t.target.value)},updateBarangayID:function(t){this.setBarangayID(t)},submitForm:function(){var t=this;this.updateData().then((function(){t.$router.push({name:"purok.index"}),t.$eventHub.$emit("create-success")})).catch((function(e){t.status="failed",_.delay((function(){t.status=""}),3e3)}))},focusField:function(t){this.activeField=t},clearFocus:function(){this.activeField=""}})},o=a("KHd+"),u=Object(o.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"card-body"},[a("back-button")],1),t._v(" "),a("div",{staticClass:"card-body"},[a("bootstrap-alert"),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.entry.purok_name,"is-focused":"purok_name"==t.activeField}},[a("label",{staticClass:"bmd-label-floating required"},[t._v("Purok Name")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.entry.purok_name},on:{input:t.updatePurokName,focus:function(e){return t.focusField("purok_name")},blur:t.clearFocus}})]),t._v(" "),a("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.entry.barangay_id,"is-focused":"barangay_id"==t.activeField}},[a("label",{staticClass:"bmd-label-floating required"},[t._v("Barangay Name")]),t._v(" "),a("v-select",{key:"barangay_id-field",attrs:{name:"barangay_id",label:"barangay_name",value:t.entry.barangay_id,options:t.lists.barangay_id},on:{input:t.updateBarangayID,focus:function(e){return t.focusField("barangay_id")},blur:t.clearFocus}})],1)])])],1),t._v(" "),a("div",{staticClass:"card-footer"},[a("vue-button-spinner",{staticClass:"btn-success",attrs:{status:t.status,isLoading:t.loading,disabled:t.loading}},[t._v("\n              "+t._s(t.$t("global.save"))+"\n            ")])],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header card-header-success card-header-icon"},[e("div",{staticClass:"card-icon"},[e("i",{staticClass:"material-icons"},[this._v("add")])]),this._v(" "),e("h4",{staticClass:"card-title"},[this._v("\n              Create\n              "),e("strong",[this._v("Purok")])])])}],!1,null,null,null);e.default=u.exports}}]);