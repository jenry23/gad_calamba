(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/bYo":function(t,e,s){"use strict";s.r(e);var a=s("L2JU"),n=s("qM1Y"),r=s("3aEs"),i=s("PMYq"),o=s("PQI8"),l=s("3X9D"),c={props:["field","row"],computed:{entry:function(){var t=_.split(this.field,".");return{key:t[0],field:t[1]}}}},u=(s("4NPg"),s("KHd+")),d=Object(u.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",[t._v("\n    "+t._s(t.row[t.entry.key].description)+"\n  ")]),t._v(" "),0===t.row[t.entry.key].length?s("span",{staticClass:"badge badge-pill badge-orange"},[t._v("\n    Not Assigned\n  ")]):t._e()])}),[],!1,null,"0525c5d9",null).exports,f=s("iBa0");function p(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function v(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?p(Object(s),!0).forEach((function(e){b(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function b(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var m={components:{GlobalSearch:o.a,HeaderSettings:i.a,DatatablePictures:f.a,DatatableObject:d},data:function(){return{columns:[{title:"cruds.user.fields.id",field:"id",thComp:r.a,sortable:!0,colStyle:"width: 100px;"},{title:"cruds.user.fields.name",field:"name",thComp:r.a,sortable:!0},{title:"cruds.user.fields.email",field:"email",thComp:r.a,sortable:!0},{title:"cruds.user.fields.email_verified_at",field:"email_verified_at",thComp:r.a,sortable:!0},{title:"cruds.user.fields.roles",field:"roles.title",thComp:r.a,tdComp:l.a},{title:"Photo",field:"photo",thComp:r.a,tdComp:f.a},{title:"global.actions",thComp:r.a,tdComp:n.a,visible:!0,thClass:"text-right",tdClass:"text-right td-actions",colStyle:"width: 150px;"}],query:{sort:"id",order:"desc",limit:100,s:""},xprops:{module:"UsersIndex",route:"users",permission_prefix:"user_"}}},beforeDestroy:function(){this.resetState()},computed:v({},Object(a.c)("UsersIndex",["data","total","loading"])),watch:{query:{handler:function(t){this.setQuery(t),this.fetchIndexData()},deep:!0}},methods:v({},Object(a.b)("UsersIndex",["fetchIndexData","setQuery","resetState"]))},h=Object(u.a)(m,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header card-header-success card-header-icon"},[t._m(0),t._v(" "),s("h4",{staticClass:"card-title"},[t._v("\n                        "+t._s(t.$t("global.table"))+"\n                        "),s("strong",[t._v(t._s(t.$t("cruds.user.title")))])])]),t._v(" "),s("div",{staticClass:"card-body"},[t.$can(t.xprops.permission_prefix+"create")?s("router-link",{staticClass:"btn btn-success",attrs:{to:{name:t.xprops.route+".create"}}},[s("i",{staticClass:"material-icons"},[t._v(" add ")]),t._v("\n                        "+t._s(t.$t("global.add"))+"\n                    ")]):t._e(),t._v(" "),s("button",{staticClass:"btn btn-default",class:{disabled:t.loading},attrs:{type:"button",disabled:t.loading},on:{click:t.fetchIndexData}},[s("i",{staticClass:"material-icons",class:{"fa-spin":t.loading}},[t._v(" refresh ")]),t._v("\n                        "+t._s(t.$t("global.refresh"))+"\n                    ")])],1),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"table-overlay"},[s("div",{staticClass:"table-overlay-container"},[s("material-spinner"),t._v(" "),s("span",[t._v("Loading...")])],1)]),t._v(" "),s("datatable",{attrs:{columns:t.columns,data:t.data,total:t.total,query:t.query,xprops:t.xprops,HeaderSettings:!1,pageSizeOptions:[10,25,50,100]}},[s("global-search",{staticClass:"pull-left",attrs:{query:t.query}}),t._v(" "),s("header-settings",{staticClass:"pull-right",attrs:{columns:t.columns}})],1)],1)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-icon"},[e("i",{staticClass:"material-icons"},[this._v("assignment")])])}],!1,null,null,null);e.default=h.exports},"3X9D":function(t,e,s){"use strict";var a={props:["field","row"],computed:{entry:function(){var t=_.split(this.field,".");return{key:t[0],field:t[1]}}}},n=(s("J/jy"),s("KHd+")),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._l(t.row[t.entry.key],(function(e,a){return s("span",{key:a,staticClass:"badge badge-pill badge-azure mr-1"},[t._v("\n    "+t._s(e[t.entry.field])+"\n  ")])})),t._v(" "),0===t.row[t.entry.key].length?s("span",{staticClass:"badge badge-pill badge-orange"},[t._v("\n    Not Assigned\n  ")]):t._e()],2)}),[],!1,null,"5d34294c",null);e.a=r.exports},"3aEs":function(t,e,s){"use strict";var a={props:["title"]},n=s("KHd+"),r=Object(n.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v("\n  "+this._s(this.$t(this.title))+"\n")])}),[],!1,null,null,null);e.a=r.exports},"4NPg":function(t,e,s){"use strict";s("MKf5")},"6Nr7":function(t,e,s){"use strict";s("ShzR")},"J/jy":function(t,e,s){"use strict";s("Y2jJ")},MKf5:function(t,e,s){var a=s("sV6g");"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,n);a.locals&&(t.exports=a.locals)},OSnj:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".badge[data-v-5d34294c]{font-size:.875rem;font-weight:500;text-transform:none}",""])},PMYq:function(t,e,s){"use strict";var a={name:"HeaderSettings",props:["columns"],methods:{isColVisible:function(t){return void 0===t.visible||""+t.visible=="true"},handleChange:function(t){this.$set(t,"visible",!this.isColVisible(t))}}},n=(s("UrR5"),s("KHd+")),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{name:"HeaderSettings"}},[t._m(0),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-position p-2 mr-5"},[s("h5",{staticClass:"ml-2 mb-1"},[t._v("\n      "+t._s(t.$t("global.datatables.colvis"))+"\n    ")]),t._v(" "),s("hr",{staticClass:"my-1"}),t._v(" "),t._l(t.columns,(function(e,a){return s("div",{key:e.title+a},[s("div",{staticClass:"dropdown-item px-2 mt-0 mb-1",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.handleChange(e)}}},[t.isColVisible(e)?s("i",{staticClass:"material-icons text-success mr-2"},[t._v("\n          done\n        ")]):s("i",{staticClass:"material-icons text-rose mr-2"},[t._v("close")]),t._v("\n        "+t._s(t.$t(e.title))+"\n      ")])])})),t._v(" "),s("hr",{staticClass:"my-1"}),t._v(" "),s("button",{staticClass:"btn btn-default btn-sm pull-right",attrs:{type:"button"}},[t._v("\n      "+t._s(t.$t("global.close"))+"\n    ")])],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-default dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"}},[e("i",{staticClass:"fa fa-cog"}),this._v(" "),e("span",{staticClass:"caret"})])}],!1,null,"f8ccd40c",null);e.a=r.exports},PQI8:function(t,e,s){"use strict";var a={props:{query:{type:Object,require:!0}},data:function(){return{focus:!1}},methods:{debounceSearch:_.debounce((function(t){this.query.s=t,this.query.offset=0}),300)}},n=s("KHd+"),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.query.s,"is-focused":t.focus}},[s("label",{staticClass:"bmd-label-floating"},[t._v("\n    "+t._s(t.$t("global.search"))+"\n  ")]),t._v(" "),s("div",{staticClass:"input-group"},[s("input",{staticClass:"form-control",attrs:{type:"text",name:"search"},domProps:{value:t.query.s},on:{input:function(e){return t.debounceSearch(e.target.value)},focus:function(e){t.focus=!0},blur:function(e){t.focus=!1}}}),t._v(" "),0!==t.query.s.length?s("div",{staticClass:"btn btn-just-icon btn-round btn-link text-dark d-inline-block input-group-append m-0",staticStyle:{height:"36px"},on:{click:function(e){t.query.s=""}}},[s("i",{staticClass:"material-icons"},[t._v("clear")])]):t._e()])])}),[],!1,null,null,null);e.a=r.exports},ShzR:function(t,e,s){var a=s("oCKF");"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,n);a.locals&&(t.exports=a.locals)},UrR5:function(t,e,s){"use strict";s("ms3h")},Y2jJ:function(t,e,s){var a=s("OSnj");"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,n);a.locals&&(t.exports=a.locals)},b8iZ:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".dropdown-menu .dropdown-item[data-v-f8ccd40c]:focus,.dropdown-menu .dropdown-item[data-v-f8ccd40c]:hover{box-shadow:none;background-color:#f4f4f4;color:#000;overflow-y:scroll;cursor:pointer!important}.dropdown-menu-position[data-v-f8ccd40c]{position:relative;top:0!important}",""])},iBa0:function(t,e,s){"use strict";var a={props:["field","row"]},n=(s("6Nr7"),s("KHd+")),r=Object(n.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",this._l(this.row[this.field],(function(t){return e("div",{key:t.id,staticClass:"m-1 d-inline-block"},[e("a",{attrs:{href:t.url,title:t.name,target:"_blank"}},[e("img",{attrs:{src:t.thumbnail,alt:t.name,title:t.name}})])])})),0)}),[],!1,null,"f89af41a",null);e.a=r.exports},ms3h:function(t,e,s){var a=s("b8iZ");"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,n);a.locals&&(t.exports=a.locals)},oCKF:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"a[data-v-f89af41a]{font-size:13px;font-weight:500;color:#202124}a[data-v-f89af41a]:hover{color:#9c27b0;text-decoration:underline}",""])},qM1Y:function(t,e,s){"use strict";var a={props:["row","xprops"],data:function(){return{}},created:function(){},methods:{destroyData:function(t){var e=this;this.$swal({title:"Are you sure?",text:"You want to Archived!",type:"warning",showCancelButton:!0,confirmButtonText:"Archived",confirmButtonColor:"#dd4b39",focusCancel:!0,reverseButtons:!0}).then((function(s){s.value&&e.$store.dispatch(e.xprops.module+"/destroyData",t).then((function(t){e.$eventHub.$emit("archived-success")}))}))}}},n=s("KHd+"),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dt-action-container"},[s("router-link",{staticClass:"btn btn-just-icon btn-round btn-link text-azure",attrs:{to:{name:t.xprops.route+".show",params:{id:t.row.id}}}},[s("i",{staticClass:"material-icons"},[t._v("remove_red_eye")])]),t._v(" "),s("router-link",{staticClass:"btn btn-just-icon btn-round btn-link text-success",attrs:{to:{name:t.xprops.route+".edit",params:{id:t.row.id}}}},[s("i",{staticClass:"material-icons"},[t._v("edit")])]),t._v(" "),s("a",{staticClass:"btn btn-just-icon btn-round btn-link text-rose",attrs:{href:"#",type:"button"},on:{click:function(e){return e.preventDefault(),t.destroyData(t.row.id)}}},[s("i",{staticClass:"material-icons"},[t._v("delete")])])],1)}),[],!1,null,null,null);e.a=r.exports},sV6g:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".badge[data-v-0525c5d9]{font-size:.875rem;font-weight:500;text-transform:none}",""])}}]);