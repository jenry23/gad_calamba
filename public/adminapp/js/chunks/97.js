(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{"43zv":function(t,e,s){"use strict";s.r(e);var r=s("L2JU");function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function a(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){n(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var c={data:function(){return{}},beforeDestroy:function(){this.resetState()},computed:a({},Object(r.c)("PermissionsSingle",["entry"])),watch:{"$route.params.id":{immediate:!0,handler:function(){this.resetState(),this.fetchShowData(this.$route.params.id)}}},methods:a({},Object(r.b)("PermissionsSingle",["fetchShowData","resetState"]))},o=s("KHd+"),l=Object(o.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header card-header-success card-header-icon"},[t._m(0),t._v(" "),s("h4",{staticClass:"card-title"},[t._v("\n            "+t._s(t.$t("global.view"))+"\n            "),s("strong",[t._v(t._s(t.$t("cruds.permission.title_singular")))])])]),t._v(" "),s("div",{staticClass:"card-body"},[s("back-button")],1),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"table-responsive"},[s("div",{staticClass:"table"},[s("tbody",[s("tr",[s("td",{staticClass:"text-primary"},[t._v("\n                        "+t._s(t.$t("cruds.permission.fields.id"))+"\n                      ")]),t._v(" "),s("td",[t._v("\n                        "+t._s(t.entry.id)+"\n                      ")])]),t._v(" "),s("tr",[s("td",{staticClass:"text-primary"},[t._v("\n                        "+t._s(t.$t("cruds.permission.fields.title"))+"\n                      ")]),t._v(" "),s("td",[t._v("\n                        "+t._s(t.entry.title)+"\n                      ")])])])])])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-icon"},[e("i",{staticClass:"material-icons"},[this._v("remove_red_eye")])])}],!1,null,null,null);e.default=l.exports}}]);