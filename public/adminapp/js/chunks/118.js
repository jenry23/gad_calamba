(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{GCgq:function(t,e,s){"use strict";s.r(e);var a=s("L2JU");function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function i(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(Object(s),!0).forEach((function(e){o(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function o(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var n={components:{Attachment:s("Dqre").a},data:function(){return{status:"",activeField:"",isBarangay:!1}},computed:i({},Object(a.c)("UsersSingle",["entry","loading","lists"])),beforeDestroy:function(){this.resetState()},watch:{"$route.params.id":{immediate:!0,handler:function(){this.resetState(),this.fetchEditData(this.$route.params.id)}}},methods:i(i({},Object(a.b)("UsersSingle",["fetchEditData","updateData","resetState","setName","setEmail","setPassword","setRoles","setBarangay","insertPhotoFile","removePhotoFile"])),{},{updateName:function(t){this.setName(t.target.value)},updateEmail:function(t){this.setEmail(t.target.value)},updatePassword:function(t){this.setPassword(t.target.value)},updateRoles:function(t){this.setRoles(t)},updateBarangay:function(t){this.setBarangay(t)},getRoute:function(t){return"".concat(axios.defaults.baseURL).concat(t,"/media")},submitForm:function(){var t=this;this.updateData().then((function(){t.$router.push({name:"users.index"}),t.$eventHub.$emit("update-success")})).catch((function(e){t.status="failed",_.delay((function(){t.status=""}),3e3)}))},focusField:function(t){this.activeField=t},clearFocus:function(){this.activeField=""}})},l=s("KHd+"),c=Object(l.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header card-header-success card-header-icon"},[t._m(0),t._v(" "),s("h4",{staticClass:"card-title"},[t._v("\n                            "+t._s(t.$t("global.edit"))+"\n                            "),s("strong",[t._v(t._s(t.$t("cruds.user.title_singular")))])])]),t._v(" "),s("div",{staticClass:"card-body"},[s("back-button")],1),t._v(" "),s("div",{staticClass:"card-body"},[s("bootstrap-alert"),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.entry.name,"is-focused":"name"==t.activeField}},[s("label",{staticClass:"bmd-label-floating required"},[t._v(t._s(t.$t("cruds.user.fields.name")))]),t._v(" "),s("input",{staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.entry.name},on:{input:t.updateName,focus:function(e){return t.focusField("name")},blur:t.clearFocus}})]),t._v(" "),s("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.entry.email,"is-focused":"email"==t.activeField}},[s("label",{staticClass:"bmd-label-floating required"},[t._v(t._s(t.$t("cruds.user.fields.email")))]),t._v(" "),s("input",{staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.entry.email},on:{input:t.updateEmail,focus:function(e){return t.focusField("email")},blur:t.clearFocus}})]),t._v(" "),s("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.entry.password,"is-focused":"password"==t.activeField}},[s("label",{staticClass:"bmd-label-floating"},[t._v(t._s(t.$t("cruds.user.fields.password")))]),t._v(" "),s("input",{staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.entry.password},on:{input:t.updatePassword,focus:function(e){return t.focusField("password")},blur:t.clearFocus}}),t._v("/images/popcom.png\n                                ")]),t._v(" "),s("div",{staticClass:"form-group bmd-form-group",class:{"has-items":0!==t.entry.roles.length,"is-focused":"roles"==t.activeField}},[s("label",{staticClass:"bmd-label-floating required"},[t._v(t._s(t.$t("cruds.user.fields.roles")))]),t._v(" "),s("v-select",{key:"roles-field",attrs:{name:"roles",label:"title",value:t.entry.roles,options:t.lists.roles,closeOnSelect:!1},on:{input:t.updateRoles,focus:function(e){return t.focusField("roles")},blur:t.clearFocus}})],1),t._v(" "),t.entry.roles.find((function(t){return"Barangay"===t.title}))?s("div",[s("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.entry.barangay,"is-focused":"barangay"==t.activeField}},[s("label",{staticClass:"bmd-label-floating required"},[t._v(" Barangay ")]),t._v(" "),s("v-select",{key:"roles-field",attrs:{name:"barangay",label:"barangay_name",value:t.entry.barangay,options:t.lists.barangay},on:{input:t.updateBarangay,focus:function(e){return t.focusField("barangay")},blur:t.clearFocus}})],1),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Photo")]),t._v(" "),s("attachment",{attrs:{route:t.getRoute("users"),"collection-name":"user_barangay_photo",media:t.entry.photo,"max-file-size":2,"model-id":t.$route.params.id,component:"pictures",accept:"image/*","max-files":1},on:{"file-uploaded":t.insertPhotoFile,"file-removed":t.removePhotoFile}})],1)]):t._e()])])],1),t._v(" "),s("div",{staticClass:"card-footer"},[s("vue-button-spinner",{staticClass:"btn-success",attrs:{status:t.status,isLoading:t.loading,disabled:t.loading}},[t._v("\n                            "+t._s(t.$t("global.save"))+"\n                        ")])],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-icon"},[e("i",{staticClass:"material-icons"},[this._v("edit")])])}],!1,null,null,null);e.default=c.exports}}]);