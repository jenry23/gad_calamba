(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"9ZT3":function(t,a,s){"use strict";s("pFtG")},EzuS:function(t,a,s){"use strict";s.r(a);var e=s("L2JU"),i=s("Nirx"),r=s("PMYq"),n=s("PQI8"),o=s("H8ri"),c=o.d.reactiveProp,l={extends:o.b,mixins:[c],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}},d=s("KHd+"),v=Object(d.a)(l,void 0,void 0,!1,null,null,null).exports,u=o.d.reactiveProp,h={extends:o.a,mixins:[u],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}},_=Object(d.a)(h,void 0,void 0,!1,null,null,null).exports,m=s("rvpR"),b={extends:o.b,data:function(){return{gradient:null,gradient2:null}},mounted:function(){this.gradient=this.$refs.canvas.getContext("2d").createLinearGradient(0,0,0,450),this.gradient2=this.$refs.canvas.getContext("2d").createLinearGradient(0,0,0,450),this.gradient.addColorStop(0,"rgba(255, 0,0, 0.5)"),this.gradient.addColorStop(.5,"rgba(255, 0, 0, 0.25)"),this.gradient.addColorStop(1,"rgba(255, 0, 0, 0)"),this.gradient2.addColorStop(0,"rgba(0, 231, 255, 0.9)"),this.gradient2.addColorStop(.5,"rgba(0, 231, 255, 0.25)"),this.gradient2.addColorStop(1,"rgba(0, 231, 255, 0)"),this.renderChart({labels:["January","March","June","September","December"],datasets:[{label:"Seniors",borderColor:"#FC2525",pointBackgroundColor:"white",borderWidth:1,pointBorderColor:"white",backgroundColor:this.gradient,data:[5,10,3,15,0,18,20]},{label:"Non-Seniors",borderColor:"#05CBE1",pointBackgroundColor:"white",pointBorderColor:"white",borderWidth:1,backgroundColor:this.gradient2,data:[10,20,6,0,10,12,19]}]},{labels:{render:"percentage",fontColor:["Male","Female"],precision:2},responsive:!0,maintainAspectRatio:!1})}},p=Object(d.a)(b,void 0,void 0,!1,null,null,null).exports;function f(t,a){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),s.push.apply(s,e)}return s}function C(t){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?f(Object(s),!0).forEach((function(a){j(t,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):f(Object(s)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(s,a))}))}return t}function j(t,a,s){return a in t?Object.defineProperty(t,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[a]=s,t}var g={components:{GlobalSearch:n.a,DatatablesFields:i.a,HeaderSettings:r.a,LineChart:v,BarChart:_,PieChart:m.a,AreaChart:p},data:function(){return{data_utilities:null,data_income:null,data_houseownership:null,query:{sort:"id",order:"asc",limit:20,s:""},xprops:{module:"DashboardIndex",route:"dashboard",permission_prefix:"dashboard_"},chartData:null,options:{responsive:!0,maintainAspectRatio:!1}}},beforeDestroy:function(){this.resetState()},computed:C({},Object(e.c)("DashboardIndex",["data","loading"])),mounted:function(){this.utilitiesInformation(),this.MonthlyIncomeGraph(),this.educationalAttaintmentGraph(),this.houseOwnershipData(),this.fetchIndexData()},methods:C(C({},Object(e.b)("DashboardIndex",["fetchIndexData","setQuery","resetState"])),{},{educationalAttaintmentGraph:function(){var t=this;axios.get("dashboard/educational").then((function(a){var s=a.data.data,e=[],i=[],r=[];s.forEach((function(t){e.push(t.count_educational),i.push(t.educational_attaintment_name),r.push("#"+Math.floor(16777215*Math.random()).toString(16))}));var n=i;t.chartData={labels:n,datasets:[{data:e,backgroundColor:r}]}}))},numberFormat:function(t){return t?Number(t).toLocaleString():0},utilitiesInformation:function(){var t=this;axios.get("dashboard/utilities").then((function(a){var s=a.data.data,e=[],i=[];s.forEach((function(t){e.push(t.count_utilities),i.push(t.utilities_name)}));var r=i;t.data_utilities={labels:r,datasets:[{label:"ALL",data:e,fill:!1,backgroundColor:"#80CEB9",borderColor:"rgb(75, 192, 192)",tension:.1}]}}))},houseOwnershipData:function(){var t=this;axios.get("dashboard/house-ownership").then((function(a){var s=a.data.data,e=[],i=[];s.forEach((function(t){e.push(t.count_house_ownership),i.push(t.house_ownership_name)}));var r=i;t.data_houseownership={labels:r,datasets:[{label:"ALL",data:e,fill:!1,backgroundColor:"#80CEB9",borderColor:"rgb(75, 192, 192)",tension:.1}]}}))},MonthlyIncomeGraph:function(){var t=this;axios.get("dashboard/monthly-income").then((function(a){var s=a.data.data,e=[],i=[];s.forEach((function(t){e.push(t.count_income),i.push(t.range_min+"-"+t.range_max)}));var r=i;t.data_income={labels:r,datasets:[{label:"Status",data:e,fill:!1,backgroundColor:"#80CEB9",borderColor:"rgb(75, 192, 192)",tension:.1}]}}))}})},y=(s("9ZT3"),Object(d.a)(g,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card imageBackground"},[t._m(0),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[t._m(1),t._v(" "),s("div",{staticClass:"col-md-4",staticStyle:{"margin-top":"-70px"}},[s("div",{staticClass:"card"},[0===t.data.is_barangay?s("div",{staticClass:"table-responsive table-sales anyClass"},[s("center",[s("h4",{staticClass:"card-title"},[t._v("LIST OF BARANGAY")])]),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table"},[t._m(2),t._v(" "),s("tbody",t._l(t.data.barangays,(function(a){return s("tr",{key:a.id},[s("td",[t._v(t._s(a.barangay_name))]),t._v(" "),s("td",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(Number(a.count_resident).toLocaleString())+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),s("td",[t._v(t._s(a.percent)+"%")])])})),0)])])])],1):s("div",{staticClass:"table-responsive table-sales anyClass"},[s("center",[s("h4",{staticClass:"card-title"},[t._v("LIST OF Purok/Sitio/Subdivision")])]),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table"},[t._m(3),t._v(" "),s("tbody",[t._l(t.data.sitios,(function(a){return s("tr",{key:a.id},[s("td",[t._v(t._s(a.sitio_name))]),t._v(" "),s("td",[t._v(t._s(t.numberFormat(a.count_resident)))])])})),t._v(" "),t._l(t.data.puroks,(function(a){return s("tr",{key:a.id},[s("td",[t._v(t._s(a.purok_name))]),t._v(" "),s("td",[t._v(t._s(t.numberFormat(a.count_resident)))])])}))],2)])])])],1)])])])])])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[s("div",{staticClass:"card card-stats",staticStyle:{"background-color":"#00aaa0 !important",color:"white"}},[s("center",[s("div",{staticClass:"card-header card-header-info card-header-icon"},[s("div",{staticClass:"card-icon"},[s("i",{staticClass:"material-icons"},[t._v("equalizer")])])]),t._v(" "),s("div",{staticClass:"card-header"},[t._v("\n\t\t\t\t\t\tTotal Residents / Respondents\n\t\t\t\t\t\t"),s("h3",{staticClass:"card-title",staticStyle:{color:"white"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.numberFormat(t.data.total_people_count))+"\n\t\t\t\t\t\t")])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("h5",[t._v("Male")]),t._v(" "),s("h3",{staticStyle:{"margin-top":"-20px"}},[t._v(t._s(t.numberFormat(t.data.total_male_count)))])]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("h5",[t._v("Female")]),t._v(" "),s("h3",{staticStyle:{"margin-top":"-20px"}},[t._v(t._s(t.numberFormat(t.data.total_female_count)))])])])])],1)]),t._v(" "),s("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[s("div",{staticClass:"card card-stats",staticStyle:{"background-color":"#ff7a5a !important",color:"white"}},[s("center",[s("div",{staticClass:"card-header card-header-danger card-header-icon"},[s("div",{staticClass:"card-icon"},[s("i",{staticClass:"material-icons"},[t._v("accessible")])])]),t._v(" "),s("div",{staticClass:"card-header"},[t._v("\n\t\t\t\t\t\tTotal Person W/ Disabilities\n\t\t\t\t\t\t"),s("h3",{staticClass:"card-title",staticStyle:{color:"white"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.numberFormat(t.data.total_person_disability_count))+"\n\t\t\t\t\t\t")])]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("h5",[t._v("Male")]),t._v(" "),s("h3",{staticStyle:{"margin-top":"-20px"}},[t._v(t._s(t.numberFormat(t.data.total_male_disablity_count)))])]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("h5",[t._v("Female")]),t._v(" "),s("h3",{staticStyle:{"margin-top":"-20px"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.numberFormat(t.data.total_female_disablity_count))+"\n\t\t\t\t\t\t\t")])])])])],1)]),t._v(" "),s("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[s("div",{staticClass:"card card-stats",staticStyle:{"background-color":"#462066 !important",color:"white"}},[s("center",[s("div",{staticClass:"card-header card-header card-header-icon"},[s("div",{staticClass:"card-icon",staticStyle:{"background-color":"#7b2cbf"}},[s("i",{staticClass:"material-icons"},[t._v("contacts")])])]),t._v(" "),s("div",{staticClass:"card-header"},[t._v("\n\t\t\t\t\t\tTotal Senior Citizen\n\t\t\t\t\t\t"),s("h3",{staticClass:"card-title",staticStyle:{color:"white"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.numberFormat(t.data.total_senior_count))+"\n\t\t\t\t\t\t")])]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("h5",[t._v("Male")]),t._v(" "),s("h3",{staticStyle:{"margin-top":"-20px"}},[t._v(t._s(t.numberFormat(t.data.total_male_senior_count)))])]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("h5",[t._v("Female")]),t._v(" "),s("h3",{staticStyle:{"margin-top":"-20px"}},[t._v(t._s(t.numberFormat(t.data.total_female_senior_count)))])])])])],1)]),t._v(" "),s("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[s("div",{staticClass:"card card-stats",staticStyle:{"background-color":"#ffb85f !important",color:"white"}},[s("center",[s("div",{staticClass:"card-header card-header-warning card-header-icon"},[s("div",{staticClass:"card-icon"},[s("i",{staticClass:"material-icons"},[t._v("attribution")])])]),t._v(" "),s("div",{staticClass:"card-header"},[t._v("\n\t\t\t\t\t\tTotal Registered Voters in Calamba\n\t\t\t\t\t\t"),s("h3",{staticClass:"card-title",staticStyle:{color:"white"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.numberFormat(t.data.total_voters_count))+"\n\t\t\t\t\t\t")])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("h5",[t._v("Male")]),t._v(" "),s("h3",{staticStyle:{"margin-top":"-20px"}},[t._v(t._s(t.numberFormat(t.data.total_voters_male_count)))])]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("h5",[t._v("Female")]),t._v(" "),s("h3",{staticStyle:{"margin-top":"-20px"}},[t._v(t._s(t.numberFormat(t.data.total_voters_female_count)))])])])])],1)])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"card card-chart"},[t._m(4),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("h5",[t._v("Male")]),t._v("\n\t\t\t\t\t\t\t"+t._s(t.numberFormat(t.data.total_male_migration_rate))+"\n\t\t\t\t\t\t")]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("h5",[t._v("Female")]),t._v("\n\t\t\t\t\t\t\t"+t._s(t.numberFormat(t.data.total_female_migration_rate))+"\n\t\t\t\t\t\t")])])]),t._v(" "),t._m(5)])]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"card card-chart"},[t._m(6),t._v(" "),s("div",{staticClass:"card-body"},[s("table",{staticClass:"table table-responsive"},[t._m(7),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Transient")]),t._v(" "),s("td",[t._v(t._s(t.numberFormat(t.data.transient_status_male)))]),t._v(" "),s("td",[t._v(t._s(t.numberFormat(t.data.transient_status_female)))])]),t._v(" "),s("tr",[s("td",[t._v("Immigrant")]),t._v(" "),s("td",[t._v(t._s(t.numberFormat(t.data.immigrant_status_male)))]),t._v(" "),s("td",[t._v(t._s(t.numberFormat(t.data.immigrant_status_female)))])]),t._v(" "),s("tr",[s("td",[t._v("Native")]),t._v(" "),s("td",[t._v(t._s(t.numberFormat(t.data.native_status_male)))]),t._v(" "),s("td",[t._v(t._s(t.numberFormat(t.data.native_status_female)))])])])])])])]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"card card-chart"},[t._m(8),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("h5",[t._v("Household")]),t._v("\n\t\t\t\t\t\t\t"+t._s(t.numberFormat(t.data.total_household))+"\n\t\t\t\t\t\t")]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("h5",[t._v("Families")]),t._v("\n\t\t\t\t\t\t\t"+t._s(t.numberFormat(t.data.total_family))+"\n\t\t\t\t\t\t")])])]),t._v(" "),t._m(9)])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"card card-stats"},[t._m(10),t._v(" "),s("div",{staticClass:"card-body"},[s("line-chart",{attrs:{"chart-data":t.data_houseownership}})],1)])]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"card card-stats h-80"},[t._m(11),t._v(" "),s("div",{staticClass:"card-body"},[s("line-chart",{attrs:{"chart-data":t.data_utilities}})],1)])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"card card-stats"},[t._m(12),t._v(" "),s("div",{staticClass:"card-body"},[s("bar-chart",{attrs:{"chart-data":t.chartData}})],1),t._v(" "),s("br")])]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"card card-stats"},[t._m(13),t._v(" "),s("div",{staticClass:"card-body"},[s("bar-chart",{attrs:{"chart-data":t.data_income}})],1)])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header card-header-info card-header-icon"},[a("div",{staticClass:"card-icon"},[a("img",{attrs:{src:"/images/calamba-logo.png",height:"85px;",width:"85px;"}})]),this._v(" "),a("h4",{staticClass:"card-title"},[this._v("Calamba Map")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-md-8"},[a("img",{attrs:{src:"/images/calamba-map.png",width:"750px",height:"380px;"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",{staticClass:"text-primary"},[a("tr",[a("th",[this._v("Name")]),this._v(" "),a("th",[this._v("Total Resident")]),this._v(" "),a("th",[this._v("Percent")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",{staticClass:"text-primary"},[a("tr",[a("th",[this._v("Name")]),this._v(" "),a("th",[this._v("Total Resident")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header card-header-success"},[a("div",{staticClass:"ct-chart",attrs:{id:"websiteViewsChart"}},[this._v("Migration Rate")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-footer"},[a("div",{staticClass:"stats"},[a("i",{staticClass:"material-icons"},[this._v("access_time")]),this._v(" updated 4 minutes ago")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header card-header-success"},[a("div",{staticClass:"ct-chart",attrs:{id:"websiteViewsChart"}},[this._v("Resident Status")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th"),this._v(" "),a("th",[this._v("Male")]),this._v(" "),a("th",[this._v("Female")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header card-header-success"},[a("div",{staticClass:"ct-chart",attrs:{id:"completedTasksChart"}},[this._v("Total Number Of")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-footer"},[a("div",{staticClass:"stats"},[a("i",{staticClass:"material-icons"},[this._v("access_time")]),this._v(" campaign sent 2 days ago")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header card-header-success"},[a("h3",{staticClass:"card-title"},[this._v("House Ownership")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header card-header-success"},[a("h3",{staticClass:"card-title"},[this._v("Utilities")]),this._v(" "),a("br")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header card-header-success"},[a("h3",{staticClass:"card-title"},[this._v("Educational Attaintment")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header card-header-success"},[a("h3",{staticClass:"card-title"},[this._v("Monthly Income")]),this._v(" "),a("small",[this._v("Range Ref: PIDS NO 2018-18 (December 2018)")])])}],!1,null,null,null));a.default=y.exports},Nirx:function(t,a,s){"use strict";var e={props:["field","row"],computed:{entry:function(){var t=_.split(this.field,".");return{key:t[0],field:t[1]}}}},i=s("KHd+"),r=Object(i.a)(e,(function(){var t=this.$createElement,a=this._self._c||t;return this.row[this.entry.key]?a("div",[this._v("\n  "+this._s(this.row[this.entry.key][this.entry.field])+"\n")]):a("div")}),[],!1,null,null,null);a.a=r.exports},PMYq:function(t,a,s){"use strict";var e={name:"HeaderSettings",props:["columns"],methods:{isColVisible:function(t){return void 0===t.visible||""+t.visible=="true"},handleChange:function(t){this.$set(t,"visible",!this.isColVisible(t))}}},i=(s("UrR5"),s("KHd+")),r=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{name:"HeaderSettings"}},[t._m(0),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-position p-2 mr-5"},[s("h5",{staticClass:"ml-2 mb-1"},[t._v("\n      "+t._s(t.$t("global.datatables.colvis"))+"\n    ")]),t._v(" "),s("hr",{staticClass:"my-1"}),t._v(" "),t._l(t.columns,(function(a,e){return s("div",{key:a.title+e},[s("div",{staticClass:"dropdown-item px-2 mt-0 mb-1",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.handleChange(a)}}},[t.isColVisible(a)?s("i",{staticClass:"material-icons text-success mr-2"},[t._v("\n          done\n        ")]):s("i",{staticClass:"material-icons text-rose mr-2"},[t._v("close")]),t._v("\n        "+t._s(t.$t(a.title))+"\n      ")])])})),t._v(" "),s("hr",{staticClass:"my-1"}),t._v(" "),s("button",{staticClass:"btn btn-default btn-sm pull-right",attrs:{type:"button"}},[t._v("\n      "+t._s(t.$t("global.close"))+"\n    ")])],2)])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"btn btn-default dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"}},[a("i",{staticClass:"fa fa-cog"}),this._v(" "),a("span",{staticClass:"caret"})])}],!1,null,"f8ccd40c",null);a.a=r.exports},PQI8:function(t,a,s){"use strict";var e={props:{query:{type:Object,require:!0}},data:function(){return{focus:!1}},methods:{debounceSearch:_.debounce((function(t){this.query.s=t,this.query.offset=0}),300)}},i=s("KHd+"),r=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.query.s,"is-focused":t.focus}},[s("label",{staticClass:"bmd-label-floating"},[t._v("\n    "+t._s(t.$t("global.search"))+"\n  ")]),t._v(" "),s("div",{staticClass:"input-group"},[s("input",{staticClass:"form-control",attrs:{type:"text",name:"search"},domProps:{value:t.query.s},on:{input:function(a){return t.debounceSearch(a.target.value)},focus:function(a){t.focus=!0},blur:function(a){t.focus=!1}}}),t._v(" "),0!==t.query.s.length?s("div",{staticClass:"btn btn-just-icon btn-round btn-link text-dark d-inline-block input-group-append m-0",staticStyle:{height:"36px"},on:{click:function(a){t.query.s=""}}},[s("i",{staticClass:"material-icons"},[t._v("clear")])]):t._e()])])}),[],!1,null,null,null);a.a=r.exports},RnhZ:function(t,a,s){var e={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn-bd":"loYQ","./bn-bd.js":"loYQ","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-mx":"tbfe","./es-mx.js":"tbfe","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function i(t){var a=r(t);return s(a)}function r(t){if(!s.o(e,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e[t]}i.keys=function(){return Object.keys(e)},i.resolve=r,t.exports=i,i.id="RnhZ"},UrR5:function(t,a,s){"use strict";s("ms3h")},b8iZ:function(t,a,s){(t.exports=s("I1BE")(!1)).push([t.i,".dropdown-menu .dropdown-item[data-v-f8ccd40c]:focus,.dropdown-menu .dropdown-item[data-v-f8ccd40c]:hover{box-shadow:none;background-color:#f4f4f4;color:#000;overflow-y:scroll;cursor:pointer!important}.dropdown-menu-position[data-v-f8ccd40c]{position:relative;top:0!important}",""])},ms3h:function(t,a,s){var e=s("b8iZ");"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(e,i);e.locals&&(t.exports=e.locals)},pFtG:function(t,a,s){var e=s("xvmo");"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(e,i);e.locals&&(t.exports=e.locals)},rvpR:function(t,a,s){"use strict";var e=s("H8ri"),i=e.d.reactiveProp,r={extends:e.c,mixins:[i],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}},n=s("KHd+"),o=Object(n.a)(r,void 0,void 0,!1,null,null,null);a.a=o.exports},xvmo:function(t,a,s){(t.exports=s("I1BE")(!1)).push([t.i,".anyClass{height:400px;overflow-y:scroll}.imageBackground{background:url(/images/googlemap.png);background-position:50%;background-repeat:no-repeat;background-size:cover}",""])}}]);