(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"3aEs":function(t,e,s){"use strict";var a={props:["title"]},n=s("KHd+"),i=Object(n.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v("\n  "+this._s(this.$t(this.title))+"\n")])}),[],!1,null,null,null);e.a=i.exports},BwyW:function(t,e,s){var a=s("OB+U");"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,n);a.locals&&(t.exports=a.locals)},"OB+U":function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".dropdown-menu .dropdown-item[data-v-b03a5c46]:focus,.dropdown-menu .dropdown-item[data-v-b03a5c46]:hover{box-shadow:none;background-color:#f4f4f4;color:#000;cursor:pointer!important}",""])},PMYq:function(t,e,s){"use strict";var a={name:"HeaderSettings",props:["columns"],methods:{isColVisible:function(t){return void 0===t.visible||""+t.visible=="true"},handleChange:function(t){this.$set(t,"visible",!this.isColVisible(t))}}},n=(s("sV85"),s("KHd+")),i=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{name:"HeaderSettings"}},[t._m(0),t._v(" "),s("div",{staticClass:"dropdown-menu p-2 mr-5"},[s("h5",{staticClass:"ml-2 mb-1"},[t._v("\n      "+t._s(t.$t("global.datatables.colvis"))+"\n    ")]),t._v(" "),s("hr",{staticClass:"my-1"}),t._v(" "),t._l(t.columns,(function(e,a){return s("div",{key:e.title+a},[s("div",{staticClass:"dropdown-item px-2 mt-0 mb-1",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.handleChange(e)}}},[t.isColVisible(e)?s("i",{staticClass:"material-icons text-success mr-2"},[t._v("\n          done\n        ")]):s("i",{staticClass:"material-icons text-rose mr-2"},[t._v("close")]),t._v("\n        "+t._s(t.$t(e.title))+"\n      ")])])})),t._v(" "),s("hr",{staticClass:"my-1"}),t._v(" "),s("button",{staticClass:"btn btn-default btn-sm pull-right",attrs:{type:"button"}},[t._v("\n      "+t._s(t.$t("global.close"))+"\n    ")])],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-default dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"}},[e("i",{staticClass:"fa fa-cog"}),this._v(" "),e("span",{staticClass:"caret"})])}],!1,null,"b03a5c46",null);e.a=i.exports},PQI8:function(t,e,s){"use strict";var a={props:{query:{type:Object,require:!0}},data:function(){return{focus:!1}},methods:{debounceSearch:_.debounce((function(t){this.query.s=t,this.query.offset=0}),300)}},n=s("KHd+"),i=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.query.s,"is-focused":t.focus}},[s("label",{staticClass:"bmd-label-floating"},[t._v("\n    "+t._s(t.$t("global.search"))+"\n  ")]),t._v(" "),s("div",{staticClass:"input-group"},[s("input",{staticClass:"form-control",attrs:{type:"text",name:"search"},domProps:{value:t.query.s},on:{input:function(e){return t.debounceSearch(e.target.value)},focus:function(e){t.focus=!0},blur:function(e){t.focus=!1}}}),t._v(" "),0!==t.query.s.length?s("div",{staticClass:"btn btn-just-icon btn-round btn-link text-dark d-inline-block input-group-append m-0",staticStyle:{height:"36px"},on:{click:function(e){t.query.s=""}}},[s("i",{staticClass:"material-icons"},[t._v("clear")])]):t._e()])])}),[],!1,null,null,null);e.a=i.exports},qM1Y:function(t,e,s){"use strict";var a={props:["row","xprops"],data:function(){return{}},created:function(){},methods:{destroyData:function(t){var e=this;this.$swal({title:"Are you sure?",text:"You want to Archived!",type:"warning",showCancelButton:!0,confirmButtonText:"Archived",confirmButtonColor:"#dd4b39",focusCancel:!0,reverseButtons:!0}).then((function(s){s.value&&e.$store.dispatch(e.xprops.module+"/destroyData",t).then((function(t){e.$eventHub.$emit("archived-success")}))}))}}},n=s("KHd+"),i=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dt-action-container"},[s("router-link",{staticClass:"btn btn-just-icon btn-round btn-link text-azure",attrs:{to:{name:t.xprops.route+".show",params:{id:t.row.id}}}},[s("i",{staticClass:"material-icons"},[t._v("remove_red_eye")])]),t._v(" "),s("router-link",{staticClass:"btn btn-just-icon btn-round btn-link text-success",attrs:{to:{name:t.xprops.route+".edit",params:{id:t.row.id}}}},[s("i",{staticClass:"material-icons"},[t._v("edit")])]),t._v(" "),s("a",{staticClass:"btn btn-just-icon btn-round btn-link text-rose",attrs:{href:"#",type:"button"},on:{click:function(e){return e.preventDefault(),t.destroyData(t.row.id)}}},[s("i",{staticClass:"material-icons"},[t._v("delete")])])],1)}),[],!1,null,null,null);e.a=i.exports},sV85:function(t,e,s){"use strict";s("BwyW")},xCzD:function(t,e,s){"use strict";s.r(e);var a=s("L2JU"),n=s("qM1Y"),i=s("3aEs"),r=s("PMYq");function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(Object(s),!0).forEach((function(e){l(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function l(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var u={components:{GlobalSearch:s("PQI8").a,HeaderSettings:r.a},data:function(){return{columns:[{title:"ID",field:"id",thComp:i.a,sortable:!0},{title:"Health",field:"health_name",thComp:i.a,sortable:!0},{title:"Actions",thComp:i.a,tdComp:n.a,visible:!0,thClass:"text-right",tdClass:"text-right td-actions"}],query:{sort:"id",order:"asc",limit:20,s:""},xprops:{module:"HealthIndex",route:"health",permission_prefix:"health_"}}},beforeDestroy:function(){this.resetState()},computed:c({},Object(a.c)("HealthIndex",["data","total","loading"])),watch:{query:{handler:function(t){this.setQuery(t),this.fetchIndexData()},deep:!0}},methods:c({},Object(a.b)("HealthIndex",["fetchIndexData","setQuery","resetState"]))},d=s("KHd+"),p=Object(d.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card"},[t._m(0),t._v(" "),s("div",{staticClass:"card-body"},[t.$can(t.xprops.permission_prefix+"create")?s("router-link",{staticClass:"btn btn-success",attrs:{to:{name:t.xprops.route+".create"}}},[s("i",{staticClass:"material-icons"},[t._v("\n              add\n            ")]),t._v("\n            Add\n          ")]):t._e(),t._v(" "),s("button",{staticClass:"btn btn-default",class:{disabled:t.loading},attrs:{type:"button",disabled:t.loading},on:{click:t.fetchIndexData}},[s("i",{staticClass:"material-icons",class:{"fa-spin":t.loading}},[t._v("\n              refresh\n            ")]),t._v("\n            Refresh\n          ")])],1),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"table-overlay"},[s("div",{staticClass:"table-overlay-container"},[s("material-spinner"),t._v(" "),s("span",[t._v("Loading...")])],1)]),t._v(" "),s("datatable",{attrs:{columns:t.columns,data:t.data,total:t.total,query:t.query,xprops:t.xprops,HeaderSettings:!1,pageSizeOptions:[10,25,50,100]}},[s("global-search",{staticClass:"pull-left",attrs:{query:t.query}}),t._v(" "),s("header-settings",{staticClass:"pull-right",attrs:{columns:t.columns}})],1)],1)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header card-header-success card-header-icon"},[e("div",{staticClass:"card-icon"},[e("i",{staticClass:"material-icons"},[this._v("assignment")])]),this._v(" "),e("h4",{staticClass:"card-title"},[this._v("\n              Table\n            "),e("strong",[this._v("Health")])])])}],!1,null,null,null);e.default=p.exports}}]);