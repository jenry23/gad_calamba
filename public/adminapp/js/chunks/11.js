(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"3X9D":function(t,e,r){"use strict";var s={props:["field","row"],computed:{entry:function(){var t=_.split(this.field,".");return{key:t[0],field:t[1]}}}},a=(r("J/jy"),r("KHd+")),i=Object(a.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._l(t.row[t.entry.key],(function(e,s){return r("span",{key:s,staticClass:"badge badge-pill badge-azure mr-1"},[t._v("\n    "+t._s(e[t.entry.field])+"\n  ")])})),t._v(" "),0===t.row[t.entry.key].length?r("span",{staticClass:"badge badge-pill badge-orange"},[t._v("\n    Not Assigned\n  ")]):t._e()],2)}),[],!1,null,"5d34294c",null);e.a=i.exports},"6Nr7":function(t,e,r){"use strict";r("ShzR")},"J/jy":function(t,e,r){"use strict";r("Y2jJ")},OSnj:function(t,e,r){(t.exports=r("I1BE")(!1)).push([t.i,".badge[data-v-5d34294c]{font-size:.875rem;font-weight:500;text-transform:none}",""])},ShzR:function(t,e,r){var s=r("oCKF");"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(s,a);s.locals&&(t.exports=s.locals)},Y2jJ:function(t,e,r){var s=r("OSnj");"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(s,a);s.locals&&(t.exports=s.locals)},iBa0:function(t,e,r){"use strict";var s={props:["field","row"]},a=(r("6Nr7"),r("KHd+")),i=Object(a.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",this._l(this.row[this.field],(function(t){return e("div",{key:t.id,staticClass:"m-1 d-inline-block"},[e("a",{attrs:{href:t.url,title:t.name,target:"_blank"}},[e("img",{attrs:{src:t.thumbnail,alt:t.name,title:t.name}})])])})),0)}),[],!1,null,"f89af41a",null);e.a=i.exports},jZow:function(t,e,r){"use strict";r.r(e);var s=r("L2JU"),a=r("3X9D"),i=r("iBa0");function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l={components:{DatatableList:a.a,DatatablePictures:i.a},data:function(){return{}},beforeDestroy:function(){this.resetState()},computed:o({},Object(s.c)("UsersSingle",["entry"])),watch:{"$route.params.id":{immediate:!0,handler:function(){this.resetState(),this.fetchShowData(this.$route.params.id)}}},methods:o({},Object(s.b)("UsersSingle",["fetchShowData","resetState"]))},d=r("KHd+"),u=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header card-header-primary card-header-icon"},[t._m(0),t._v(" "),r("h4",{staticClass:"card-title"},[t._v("\n                        "+t._s(t.$t("global.view"))+"\n                        "),r("strong",[t._v(t._s(t.$t("cruds.user.title_singular")))])])]),t._v(" "),r("div",{staticClass:"card-body"},[r("back-button")],1),t._v(" "),r("div",{staticClass:"card-body"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"table-responsive"},[r("div",{staticClass:"table"},[r("tbody",[r("tr",[r("td",{staticClass:"text-primary"},[t._v("\n                                                "+t._s(t.$t("cruds.user.fields.id"))+"\n                                            ")]),t._v(" "),r("td",[t._v("\n                                                "+t._s(t.entry.id)+"\n                                            ")])]),t._v(" "),r("tr",[r("td",{staticClass:"text-primary"},[t._v("\n                                                "+t._s(t.$t("cruds.user.fields.name"))+"\n                                            ")]),t._v(" "),r("td",[t._v("\n                                                "+t._s(t.entry.name)+"\n                                            ")])]),t._v(" "),r("tr",[r("td",{staticClass:"text-primary"},[t._v("\n                                                "+t._s(t.$t("cruds.user.fields.email"))+"\n                                            ")]),t._v(" "),r("td",[t._v("\n                                                "+t._s(t.entry.email)+"\n                                            ")])]),t._v(" "),r("tr",[r("td",{staticClass:"text-primary"},[t._v("\n                                                "+t._s(t.$t("cruds.user.fields.email_verified_at"))+"\n                                            ")]),t._v(" "),r("td",[t._v("\n                                                "+t._s(t.entry.email_verified_at)+"\n                                            ")])]),t._v(" "),r("tr",[r("td",{staticClass:"text-primary"},[t._v("\n                                                "+t._s(t.$t("cruds.user.fields.roles"))+"\n                                            ")]),t._v(" "),r("td",[r("datatable-list",{attrs:{row:t.entry,field:"roles.title"}})],1)]),t._v(" "),r("tr",[r("td",{staticClass:"text-primary"},[t._v("Photo")]),t._v(" "),r("td",[r("datatable-pictures",{attrs:{row:t.entry,field:"photo"}})],1)])])])])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-icon"},[e("i",{staticClass:"material-icons"},[this._v("remove_red_eye")])])}],!1,null,null,null);e.default=u.exports},oCKF:function(t,e,r){(t.exports=r("I1BE")(!1)).push([t.i,"a[data-v-f89af41a]{font-size:13px;font-weight:500;color:#202124}a[data-v-f89af41a]:hover{color:#9c27b0;text-decoration:underline}",""])}}]);