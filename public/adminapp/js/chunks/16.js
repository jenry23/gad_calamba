(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"3aEs":function(t,e,a){"use strict";var s={props:["title"]},n=a("KHd+"),i=Object(n.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v("\n  "+this._s(this.$t(this.title))+"\n")])}),[],!1,null,null,null);e.a=i.exports},Nirx:function(t,e,a){"use strict";var s={props:["field","row"],computed:{entry:function(){var t=_.split(this.field,".");return{key:t[0],field:t[1]}}}},n=a("KHd+"),i=Object(n.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return this.row[this.entry.key]?e("div",[this._v("\n  "+this._s(this.row[this.entry.key][this.entry.field])+"\n")]):e("div")}),[],!1,null,null,null);e.a=i.exports},PMYq:function(t,e,a){"use strict";var s={name:"HeaderSettings",props:["columns"],methods:{isColVisible:function(t){return void 0===t.visible||""+t.visible=="true"},handleChange:function(t){this.$set(t,"visible",!this.isColVisible(t))}}},n=(a("UrR5"),a("KHd+")),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{name:"HeaderSettings"}},[t._m(0),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-menu-position p-2 mr-5"},[a("h5",{staticClass:"ml-2 mb-1"},[t._v("\n      "+t._s(t.$t("global.datatables.colvis"))+"\n    ")]),t._v(" "),a("hr",{staticClass:"my-1"}),t._v(" "),t._l(t.columns,(function(e,s){return a("div",{key:e.title+s},[a("div",{staticClass:"dropdown-item px-2 mt-0 mb-1",on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.handleChange(e)}}},[t.isColVisible(e)?a("i",{staticClass:"material-icons text-success mr-2"},[t._v("\n          done\n        ")]):a("i",{staticClass:"material-icons text-rose mr-2"},[t._v("close")]),t._v("\n        "+t._s(t.$t(e.title))+"\n      ")])])})),t._v(" "),a("hr",{staticClass:"my-1"}),t._v(" "),a("button",{staticClass:"btn btn-default btn-sm pull-right",attrs:{type:"button"}},[t._v("\n      "+t._s(t.$t("global.close"))+"\n    ")])],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-default dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"}},[e("i",{staticClass:"fa fa-cog"}),this._v(" "),e("span",{staticClass:"caret"})])}],!1,null,"f8ccd40c",null);e.a=i.exports},PQI8:function(t,e,a){"use strict";var s={props:{query:{type:Object,require:!0}},data:function(){return{focus:!1}},methods:{debounceSearch:_.debounce((function(t){this.query.s=t,this.query.offset=0}),300)}},n=a("KHd+"),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.query.s,"is-focused":t.focus}},[a("label",{staticClass:"bmd-label-floating"},[t._v("\n    "+t._s(t.$t("global.search"))+"\n  ")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{staticClass:"form-control",attrs:{type:"text",name:"search"},domProps:{value:t.query.s},on:{input:function(e){return t.debounceSearch(e.target.value)},focus:function(e){t.focus=!0},blur:function(e){t.focus=!1}}}),t._v(" "),0!==t.query.s.length?a("div",{staticClass:"btn btn-just-icon btn-round btn-link text-dark d-inline-block input-group-append m-0",staticStyle:{height:"36px"},on:{click:function(e){t.query.s=""}}},[a("i",{staticClass:"material-icons"},[t._v("clear")])]):t._e()])])}),[],!1,null,null,null);e.a=i.exports},UrR5:function(t,e,a){"use strict";a("ms3h")},"XT+L":function(t,e,a){"use strict";a.r(e);var s=a("L2JU"),n=a("qM1Y"),i=a("Nirx"),r=a("3aEs"),o=a("PMYq");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){u(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var d={components:{GlobalSearch:a("PQI8").a,DatatablesFields:i.a,HeaderSettings:o.a},data:function(){return{columns:[{title:"ID",field:"id",thComp:r.a,sortable:!0},{title:"Name",field:"barangay_name",thComp:r.a,sortable:!0},{title:"Barangay Name",field:"barangay.barangay_name",thComp:r.a,tdComp:i.a},{title:"Barangay Sanggunian Category",field:"barangay_sanggunian_category.category_name",thComp:r.a,tdComp:i.a},{title:"Actions",thComp:r.a,tdComp:n.a,visible:!0,thClass:"text-right",tdClass:"text-right td-actions"}],query:{sort:"id",order:"asc",limit:20,s:""},xprops:{module:"BarangaySanggunianIndex",route:"barangay_sanggunian",permission_prefix:"barangay_sanggunian_"}}},beforeDestroy:function(){this.resetState()},computed:l({},Object(s.c)("BarangaySanggunianIndex",["data","total","loading"])),watch:{query:{handler:function(t){this.setQuery(t),this.fetchIndexData()},deep:!0}},methods:l({},Object(s.b)("BarangaySanggunianIndex",["fetchIndexData","setQuery","resetState"]))},p=a("KHd+"),f=Object(p.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"card-body"},[a("router-link",{staticClass:"btn btn-success",attrs:{to:{name:t.xprops.route+".create"}}},[a("i",{staticClass:"material-icons"},[t._v("\n              add\n            ")]),t._v("\n            Add\n          ")]),t._v(" "),a("button",{staticClass:"btn btn-default",class:{disabled:t.loading},attrs:{type:"button",disabled:t.loading},on:{click:t.fetchIndexData}},[a("i",{staticClass:"material-icons",class:{"fa-spin":t.loading}},[t._v("\n              refresh\n            ")]),t._v("\n            Refresh\n          ")])],1),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"table-overlay"},[a("div",{staticClass:"table-overlay-container"},[a("material-spinner"),t._v(" "),a("span",[t._v("Loading...")])],1)]),t._v(" "),a("datatable",{attrs:{columns:t.columns,data:t.data,total:t.total,query:t.query,xprops:t.xprops,HeaderSettings:!1,pageSizeOptions:[10,25,50,100]}},[a("global-search",{staticClass:"pull-left",attrs:{query:t.query}}),t._v(" "),a("header-settings",{staticClass:"pull-right",attrs:{columns:t.columns}})],1)],1)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header card-header-success card-header-icon"},[e("div",{staticClass:"card-icon"},[e("i",{staticClass:"material-icons"},[this._v("assignment")])]),this._v(" "),e("h4",{staticClass:"card-title"},[this._v("\n              Table\n            "),e("strong",[this._v("Barangay Sanggunian")])])])}],!1,null,null,null);e.default=f.exports},b8iZ:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".dropdown-menu .dropdown-item[data-v-f8ccd40c]:focus,.dropdown-menu .dropdown-item[data-v-f8ccd40c]:hover{box-shadow:none;background-color:#f4f4f4;color:#000;overflow-y:scroll;cursor:pointer!important}.dropdown-menu-position[data-v-f8ccd40c]{position:relative;top:0!important}",""])},ms3h:function(t,e,a){var s=a("b8iZ");"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,n);s.locals&&(t.exports=s.locals)},qM1Y:function(t,e,a){"use strict";var s={props:["row","xprops"],data:function(){return{}},created:function(){},methods:{destroyData:function(t){var e=this;this.$swal({title:"Are you sure?",text:"You want to Archived!",type:"warning",showCancelButton:!0,confirmButtonText:"Archived",confirmButtonColor:"#dd4b39",focusCancel:!0,reverseButtons:!0}).then((function(a){a.value&&e.$store.dispatch(e.xprops.module+"/destroyData",t).then((function(t){e.$eventHub.$emit("archived-success")}))}))}}},n=a("KHd+"),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dt-action-container"},[a("router-link",{staticClass:"btn btn-just-icon btn-round btn-link text-azure",attrs:{to:{name:t.xprops.route+".show",params:{id:t.row.id}}}},[a("i",{staticClass:"material-icons"},[t._v("remove_red_eye")])]),t._v(" "),a("router-link",{staticClass:"btn btn-just-icon btn-round btn-link text-success",attrs:{to:{name:t.xprops.route+".edit",params:{id:t.row.id}}}},[a("i",{staticClass:"material-icons"},[t._v("edit")])]),t._v(" "),a("a",{staticClass:"btn btn-just-icon btn-round btn-link text-rose",attrs:{href:"#",type:"button"},on:{click:function(e){return e.preventDefault(),t.destroyData(t.row.id)}}},[a("i",{staticClass:"material-icons"},[t._v("delete")])])],1)}),[],!1,null,null,null);e.a=i.exports}}]);