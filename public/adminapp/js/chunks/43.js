(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"3aEs":function(t,e,s){"use strict";var a={props:["title"]},n=s("KHd+"),r=Object(n.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v("\n  "+this._s(this.$t(this.title))+"\n")])}),[],!1,null,null,null);e.a=r.exports},Nirx:function(t,e,s){"use strict";var a={props:["field","row"],computed:{entry:function(){var t=_.split(this.field,".");return{key:t[0],field:t[1]}}}},n=s("KHd+"),r=Object(n.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return this.row[this.entry.key]?e("div",[this._v("\n  "+this._s(this.row[this.entry.key][this.entry.field])+"\n")]):e("div")}),[],!1,null,null,null);e.a=r.exports},PMYq:function(t,e,s){"use strict";var a={name:"HeaderSettings",props:["columns"],methods:{isColVisible:function(t){return void 0===t.visible||""+t.visible=="true"},handleChange:function(t){this.$set(t,"visible",!this.isColVisible(t))}}},n=(s("UrR5"),s("KHd+")),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{name:"HeaderSettings"}},[t._m(0),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-position p-2 mr-5"},[s("h5",{staticClass:"ml-2 mb-1"},[t._v("\n      "+t._s(t.$t("global.datatables.colvis"))+"\n    ")]),t._v(" "),s("hr",{staticClass:"my-1"}),t._v(" "),t._l(t.columns,(function(e,a){return s("div",{key:e.title+a},[s("div",{staticClass:"dropdown-item px-2 mt-0 mb-1",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.handleChange(e)}}},[t.isColVisible(e)?s("i",{staticClass:"material-icons text-success mr-2"},[t._v("\n          done\n        ")]):s("i",{staticClass:"material-icons text-rose mr-2"},[t._v("close")]),t._v("\n        "+t._s(t.$t(e.title))+"\n      ")])])})),t._v(" "),s("hr",{staticClass:"my-1"}),t._v(" "),s("button",{staticClass:"btn btn-default btn-sm pull-right",attrs:{type:"button"}},[t._v("\n      "+t._s(t.$t("global.close"))+"\n    ")])],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-default dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"}},[e("i",{staticClass:"fa fa-cog"}),this._v(" "),e("span",{staticClass:"caret"})])}],!1,null,"f8ccd40c",null);e.a=r.exports},PQI8:function(t,e,s){"use strict";var a={props:{query:{type:Object,require:!0}},data:function(){return{focus:!1}},methods:{debounceSearch:_.debounce((function(t){this.query.s=t,this.query.offset=0}),300)}},n=s("KHd+"),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.query.s,"is-focused":t.focus}},[s("label",{staticClass:"bmd-label-floating"},[t._v("\n    "+t._s(t.$t("global.search"))+"\n  ")]),t._v(" "),s("div",{staticClass:"input-group"},[s("input",{staticClass:"form-control",attrs:{type:"text",name:"search"},domProps:{value:t.query.s},on:{input:function(e){return t.debounceSearch(e.target.value)},focus:function(e){t.focus=!0},blur:function(e){t.focus=!1}}}),t._v(" "),0!==t.query.s.length?s("div",{staticClass:"btn btn-just-icon btn-round btn-link text-dark d-inline-block input-group-append m-0",staticStyle:{height:"36px"},on:{click:function(e){t.query.s=""}}},[s("i",{staticClass:"material-icons"},[t._v("clear")])]):t._e()])])}),[],!1,null,null,null);e.a=r.exports},UrR5:function(t,e,s){"use strict";s("ms3h")},b35X:function(t,e,s){"use strict";s.r(e);var a=s("L2JU"),n=s("Nirx"),r=s("3aEs"),i=s("PMYq");function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(Object(s),!0).forEach((function(e){l(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function l(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var d={components:{GlobalSearch:s("PQI8").a,HeaderSettings:i.a},data:function(){return{columns:[{title:"ID",field:"id",thComp:r.a,sortable:!0},{title:"Name Of Requestor",field:"gad.full_name",thComp:r.a,tdComp:n.a},{title:"Barangay",field:"barangay.barangay_name",thComp:r.a,tdComp:n.a},{title:"Transaction Type",field:"transaction_type.transaction_type_name",thComp:r.a,tdComp:n.a},{title:"Date and Time",field:"created_at",thComp:r.a,sortable:!0}],query:{sort:"id",order:"asc",limit:20,s:""},xprops:{module:"BarangayRecordsIndex",route:"barangay_records",permission_prefix:"barangay_records_"}}},beforeDestroy:function(){this.resetState()},computed:c({},Object(a.c)("BarangayRecordsIndex",["data","total","loading"])),watch:{query:{handler:function(t){this.setQuery(t),this.fetchIndexData()},deep:!0}},methods:c({},Object(a.b)("BarangayRecordsIndex",["fetchIndexData","setQuery","resetState"]))},u=s("KHd+"),p=Object(u.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card"},[t._m(0),t._v(" "),s("div",{staticClass:"card-body"},[s("button",{staticClass:"btn btn-success",class:{disabled:t.loading},attrs:{type:"button",disabled:t.loading},on:{click:t.fetchIndexData}},[s("i",{staticClass:"material-icons",class:{"fa-spin":t.loading}},[t._v(" refresh ")]),t._v("\n\t\t\t\t\t\tRefresh\n\t\t\t\t\t")])]),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"table-overlay"},[s("div",{staticClass:"table-overlay-container"},[s("material-spinner"),t._v(" "),s("span",[t._v("Loading...")])],1)]),t._v(" "),s("datatable",{attrs:{columns:t.columns,data:t.data,total:t.total,query:t.query,xprops:t.xprops,HeaderSettings:!1,pageSizeOptions:[10,25,50,100]}},[s("global-search",{staticClass:"pull-left",attrs:{query:t.query}}),t._v(" "),s("header-settings",{staticClass:"pull-right",attrs:{columns:t.columns}})],1)],1)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header card-header-success card-header-icon"},[e("div",{staticClass:"card-icon"},[e("i",{staticClass:"material-icons"},[this._v("assignment")])]),this._v(" "),e("h4",{staticClass:"card-title"},[this._v("\n\t\t\t\t\t\tTable\n\t\t\t\t\t\t"),e("strong",[this._v("Barangay Records")])])])}],!1,null,null,null);e.default=p.exports},b8iZ:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".dropdown-menu .dropdown-item[data-v-f8ccd40c]:focus,.dropdown-menu .dropdown-item[data-v-f8ccd40c]:hover{box-shadow:none;background-color:#f4f4f4;color:#000;overflow-y:scroll;cursor:pointer!important}.dropdown-menu-position[data-v-f8ccd40c]{position:relative;top:0!important}",""])},ms3h:function(t,e,s){var a=s("b8iZ");"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,n);a.locals&&(t.exports=a.locals)}}]);