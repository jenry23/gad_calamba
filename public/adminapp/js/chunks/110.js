(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{GCgq:function(t,e,s){"use strict";s.r(e);var a=s("L2JU");function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function i(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(Object(s),!0).forEach((function(e){o(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function o(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var l={data:function(){return{status:"",activeField:""}},computed:i({},Object(a.c)("UsersSingle",["entry","loading","lists"])),beforeDestroy:function(){this.resetState()},watch:{"$route.params.id":{immediate:!0,handler:function(){this.resetState(),this.fetchEditData(this.$route.params.id)}}},methods:i(i({},Object(a.b)("UsersSingle",["fetchEditData","updateData","resetState","setName","setEmail","setPassword","setRoles"])),{},{updateName:function(t){this.setName(t.target.value)},updateEmail:function(t){this.setEmail(t.target.value)},updatePassword:function(t){this.setPassword(t.target.value)},updateRoles:function(t){this.setRoles(t)},submitForm:function(){var t=this;this.updateData().then((function(){t.$router.push({name:"users.index"}),t.$eventHub.$emit("update-success")})).catch((function(e){t.status="failed",_.delay((function(){t.status=""}),3e3)}))},focusField:function(t){this.activeField=t},clearFocus:function(){this.activeField=""}})},n=s("KHd+"),c=Object(n.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"\n                            card-header card-header-primary card-header-icon\n                        "},[t._m(0),t._v(" "),s("h4",{staticClass:"card-title"},[t._v("\n                            "+t._s(t.$t("global.edit"))+"\n                            "),s("strong",[t._v(t._s(t.$t("cruds.user.title_singular")))])])]),t._v(" "),s("div",{staticClass:"card-body"},[s("back-button")],1),t._v(" "),s("div",{staticClass:"card-body"},[s("bootstrap-alert"),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.entry.name,"is-focused":"name"==t.activeField}},[s("label",{staticClass:"bmd-label-floating required"},[t._v(t._s(t.$t("cruds.user.fields.name")))]),t._v(" "),s("input",{staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.entry.name},on:{input:t.updateName,focus:function(e){return t.focusField("name")},blur:t.clearFocus}})]),t._v(" "),s("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.entry.email,"is-focused":"email"==t.activeField}},[s("label",{staticClass:"bmd-label-floating required"},[t._v(t._s(t.$t("cruds.user.fields.email")))]),t._v(" "),s("input",{staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.entry.email},on:{input:t.updateEmail,focus:function(e){return t.focusField("email")},blur:t.clearFocus}})]),t._v(" "),s("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.entry.password,"is-focused":"password"==t.activeField}},[s("label",{staticClass:"bmd-label-floating"},[t._v(t._s(t.$t("cruds.user.fields.password")))]),t._v(" "),s("input",{staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.entry.password},on:{input:t.updatePassword,focus:function(e){return t.focusField("password")},blur:t.clearFocus}})]),t._v(" "),s("div",{staticClass:"form-group bmd-form-group",class:{"has-items":0!==t.entry.roles.length,"is-focused":"roles"==t.activeField}},[s("label",{staticClass:"bmd-label-floating required"},[t._v(t._s(t.$t("cruds.user.fields.roles")))]),t._v(" "),s("v-select",{key:"roles-field",attrs:{name:"roles",label:"title",value:t.entry.roles,options:t.lists.roles,closeOnSelect:!1,multiple:""},on:{input:t.updateRoles,focus:function(e){return t.focusField("roles")},blur:t.clearFocus}})],1)])])],1),t._v(" "),s("div",{staticClass:"card-footer"},[s("vue-button-spinner",{staticClass:"btn-primary",attrs:{status:t.status,isLoading:t.loading,disabled:t.loading}},[t._v("\n                            "+t._s(t.$t("global.save"))+"\n                        ")])],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-icon"},[e("i",{staticClass:"material-icons"},[this._v("edit")])])}],!1,null,null,null);e.default=c.exports}}]);