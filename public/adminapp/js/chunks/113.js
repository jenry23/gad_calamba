(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{rR8n:function(t,e,r){"use strict";r.r(e);var a=r("L2JU");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c={data:function(){return{}},beforeDestroy:function(){this.resetState()},computed:i({},Object(a.c)("ValidIDSingle",["entry"])),watch:{"$route.params.id":{immediate:!0,handler:function(){this.resetState(),this.fetchShowData(this.$route.params.id)}}},methods:i({},Object(a.b)("ValidIDSingle",["fetchShowData","resetState"]))},o=r("KHd+"),l=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header card-header-primary card-header-icon"},[t._m(0),t._v(" "),r("h4",{staticClass:"card-title"},[t._v("\n            "+t._s(t.$t("global.view"))+"\n            "),r("strong",[t._v("Valid ID")])])]),t._v(" "),r("div",{staticClass:"card-body"},[r("back-button")],1),t._v(" "),r("div",{staticClass:"card-body"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"table-responsive"},[r("div",{staticClass:"table"},[r("tbody",[r("tr",[r("td",{staticClass:"text-primary"},[t._v("\n                        ID\n                      ")]),t._v(" "),r("td",[t._v("\n                        "+t._s(t.entry.id)+"\n                      ")])]),t._v(" "),r("tr",[r("td",{staticClass:"text-primary"},[t._v("\n                        Valid ID\n                      ")]),t._v(" "),r("td",[t._v("\n                        "+t._s(t.entry.name)+"\n                      ")])])])])])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-icon"},[e("i",{staticClass:"material-icons"},[this._v("remove_red_eye")])])}],!1,null,null,null);e.default=l.exports}}]);