(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"3X9D":function(t,e,a){"use strict";var s={props:["field","row"],computed:{entry:function(){var t=_.split(this.field,".");return{key:t[0],field:t[1]}}}},r=(a("J/jy"),a("KHd+")),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._l(t.row[t.entry.key],(function(e,s){return a("span",{key:s,staticClass:"badge badge-pill badge-azure mr-1"},[t._v("\n    "+t._s(e[t.entry.field])+"\n  ")])})),t._v(" "),0===t.row[t.entry.key].length?a("span",{staticClass:"badge badge-pill badge-orange"},[t._v("\n    Not Assigned\n  ")]):t._e()],2)}),[],!1,null,"5d34294c",null);e.a=i.exports},"J/jy":function(t,e,a){"use strict";a("Y2jJ")},LHGf:function(t,e,a){"use strict";a.r(e);var s=a("L2JU"),r=a("3X9D"),i=a("ZICV");function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var d={components:{DatatableList:r.a,VueHtml2pdf:i.a},data:function(){return{}},beforeDestroy:function(){this.resetState()},computed:o({},Object(s.c)("GadListSingle",["lists","data","entry"])),watch:{"$route.params.id":{immediate:!0,handler:function(){var t=this.$route.params.id,e=this.$route.params.barangay_id;this.resetState(),this.fetchShowData({id:t,barangay_id:e})}}},methods:o(o({formatDate:function(t){if(t)var e=moment(String(t)).format("MMMM DD, YYYY");else e="";return e}},Object(s.b)("GadListSingle",["fetchShowData","resetState"])),{},{downloads:function(){this.$refs.html2Pdf.generatePdf()}})},c=(a("OLUd"),a("KHd+")),v=Object(c.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("button",{staticClass:"btn btn-info",on:{click:t.downloads}},[t._v("Download PDF")]),t._v(" "),a("vue-html2pdf",{ref:"html2Pdf",attrs:{"show-layout":!1,"float-layout":!1,"enable-download":!0,"preview-modal":!0,"paginate-elements-by-height":2e3,filename:"content","pdf-quality":2,"manual-pagination":!1,"pdf-format":"a4","pdf-orientation":"landscape","pdf-content-width":"1150px"},on:{progress:function(e){return t.onProgress(e)},hasStartedGeneration:function(e){return t.hasStartedGeneration()},hasGenerated:function(e){return t.hasGenerated(e)}}},[a("section",{attrs:{slot:"pdf-content"},slot:"pdf-content"},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3 mt-4"},[a("h4",{staticClass:"card-title",staticStyle:{"font-family":"inlander",color:"black","font-weight":"900"}},[t._v("\n\t\t\t\t\t\t\t\tFAMILY INFORMATION\n\t\t\t\t\t\t\t")]),t._v(" "),a("p",{staticClass:"card-category",staticStyle:{"font-family":"Abula Light",color:"black"}},[t._v("\n\t\t\t\t\t\t\t\tHOUSEHOLD MEMBERS\n\t\t\t\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"col-md-9"},[a("img",{staticStyle:{width:"100%"},attrs:{src:"/images/header.png"}})])])]),t._v(" "),a("div",{staticClass:"card-images-body"},[a("center",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("br"),t._v(" "),a("img",{attrs:{src:"/images/cap.jpg",height:"128px",width:"130px"}}),t._v(" "),a("img",{attrs:{src:"/images/popcom.png",height:"128px",width:"130px"}}),t._v(" "),a("b")]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"pull-left"},[a("h3",{staticStyle:{color:"black","font-family":"Glacial Indifference"}},[a("b",{staticStyle:{"text-transform":"uppercase","margin-right":"100px","font-weight":"900"}},[t._v("City Government of Calamba")]),a("br"),t._v(" "),a("b",{staticStyle:{"text-transform":"uppercase","font-weight":"900"}},[t._v("City population management office")]),a("br"),t._v(" "),a("b",{staticStyle:{"text-transform":"uppercase","margin-right":"240px","font-weight":"900"}},[t._v("Household Profile")]),t._v(" "),a("p",{staticStyle:{"font-family":"Lora","margin-right":"385px","font-style":"italic"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\te-Certificate\n\t\t\t\t\t\t\t\t\t\t")])])])]),t._v(" "),a("div",{staticClass:"col-md-3 mt-4"},[a("table",{staticClass:"table-bordered",staticStyle:{"background-color":"#f0f8ff !important"}},[a("tr",[a("th",[a("b",[t._v("Barangay")])]),t._v(" "),t.lists.second_data.barangay?a("td",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.lists.second_data.barangay.barangay_name)+"\n\t\t\t\t\t\t\t\t\t\t")]):a("td")]),t._v(" "),a("tr",[a("th",[a("b",[t._v("Purok")])]),t._v(" "),t.lists.second_data.purok?a("td",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.lists.second_data.purok.purok_name)+"\n\t\t\t\t\t\t\t\t\t\t")]):a("td")]),t._v(" "),a("tr",[a("th",{attrs:{scope:"col"}},[a("b",[t._v("Subdivsion / Sitio")])]),t._v(" "),t.lists.second_data.sitio?a("td",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.lists.second_data.sitio.sitio_name)+"\n\t\t\t\t\t\t\t\t\t\t")]):a("td")])])])])]),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("br"),t._v(" "),a("table",{staticClass:"table table-border table-stripe",staticStyle:{color:"black"}},[a("thead",[a("tr",[a("th",[a("b",[t._v("Household ID")])]),t._v(" "),a("th",[a("b",[t._v("Family Code")])]),t._v(" "),a("th",[a("b",[t._v("Relationship")])]),t._v(" "),a("th",[a("b",[t._v("Family Members")])]),t._v(" "),a("th",[a("b",[t._v("Birthday")])]),t._v(" "),a("th",[a("b",[t._v("Gender")])]),t._v(" "),a("th",[a("b",[t._v("Residence Status")])])])]),t._v(" "),a("tbody",t._l(t.lists.first_data,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.gad_id))]),t._v(" "),a("td",[t._v(t._s(e.family_code))]),t._v(" "),a("td",[t._v(t._s(e.household_names))]),t._v(" "),a("td",{staticStyle:{"text-transform":"uppercase"}},[a("router-link",{attrs:{to:{name:"gad_list.edit",params:{id:e.id}}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.full_name)+"\n\t\t\t\t\t\t\t\t\t\t\t\t")])],1),t._v(" "),a("td",[t._v(t._s(t.formatDate(e.birth_date)))]),t._v(" "),e.gender?a("td",[t._v(t._s(e.gender.gender_name))]):a("td"),t._v(" "),e.no_of_years_in_calamba==(new Date).getFullYear()?a("td",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tImmigrant\n\t\t\t\t\t\t\t\t\t\t\t")]):a("td",[t._v("Native")])])})),0)])])])]),t._v(" "),a("div",{staticStyle:{"font-family":"Abula Light","font-weigh":"500"}},[a("div",{staticClass:"d-flex justify-content-center"},[a("h4",{staticStyle:{"font-weight":"500"}},[t._v("\n\t\t\t\t\t\t\t\tThis is to certify that the aforementioned household member/s is/are bonafide\n\t\t\t\t\t\t\t\tresident/s of CALAMBA CITY, LAGUNA.\n\t\t\t\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"d-flex align-items-end flex-column",staticStyle:{"margin-right":"20px"}},[a("small",{staticStyle:{"font-weight":"500"}},[t._v("\n\t\t\t\t\t\t\t\tCERTIFICATION ISSUED BY CITY POPULATION MANAGEMENT OFFICE"),a("br"),t._v("\n\t\t\t\t\t\t\t\tDATABASE POWERED BY MO-GENDER AND DEVELOPMENT OFFICE\n\t\t\t\t\t\t\t")])])])],1)])]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"collapse",attrs:{id:"collapseExample"}},[a("div",{staticClass:"card card-body"},[a("div",{staticClass:"form-group bmd-form-group",class:{"is-focused":!0}},[a("label",[t._v("House Type")]),t._v(" "),t.lists.second_data.house_type?a("div",[a("input",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.lists.second_data.house_type.house_type_name}})]):t._e()]),t._v(" "),a("div",{staticClass:"form-group bmd-form-group",class:{"is-focused":!0}},[a("label",[t._v("House Make")]),t._v(" "),t.lists.second_data.house_make?a("div",[a("input",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.lists.second_data.house_make.house_make_name}})]):t._e()]),t._v(" "),a("div",{staticClass:"form-group bmd-form-group",class:{"is-focused":!0}},[a("label",[t._v("House Ownership")]),t._v(" "),t.lists.second_data.house_ownership?a("div",[a("input",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.lists.second_data.house_ownership.house_ownership_name}})]):t._e()])])]),t._v(" "),a("div",{staticClass:"collapse",attrs:{id:"collapseExample1"}},[a("div",{staticClass:"card card-body"},[a("div",{staticClass:"form-group bmd-form-group",class:{"is-focused":!0}},[a("label",[t._v("Government Assistance")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text",value:"Agrarian Reform Community Development Program (ARCDP)"}})])])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{staticClass:"btn btn-primary",attrs:{"data-toggle":"collapse",href:"#collapseExample",role:"button","aria-expanded":"false","aria-controls":"collapseExample"}},[this._v("\n\t\t\t\tHouse Details\n\t\t\t")]),this._v(" "),e("a",{staticClass:"btn btn-primary",attrs:{"data-toggle":"collapse",href:"#collapseExample1",role:"button","aria-expanded":"false","aria-controls":"collapseExample1"}},[this._v("\n\t\t\t\tGovernment Assistance\n\t\t\t")])])}],!1,null,"7f17b96e",null);e.default=v.exports},OLUd:function(t,e,a){"use strict";a("kJdr")},OSnj:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".badge[data-v-5d34294c]{font-size:.875rem;font-weight:500;text-transform:none}",""])},"P9B+":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"input[data-v-7f17b96e]{text-decoration:underline}table[data-v-7f17b96e],tbody[data-v-7f17b96e],td[data-v-7f17b96e],th[data-v-7f17b96e],tr[data-v-7f17b96e]{background-color:transparent!important}.card-images-body[data-v-7f17b96e]{background:url(/images/background-family.png) no-repeat;height:100%;background-position:50%;background-repeat:no-repeat;background-size:cover}",""])},Y2jJ:function(t,e,a){var s=a("OSnj");"string"==typeof s&&(s=[[t.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,r);s.locals&&(t.exports=s.locals)},kJdr:function(t,e,a){var s=a("P9B+");"string"==typeof s&&(s=[[t.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,r);s.locals&&(t.exports=s.locals)}}]);