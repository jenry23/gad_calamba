(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/JyY":function(t,e,s){"use strict";s.r(e);var a=s("L2JU"),i=s("rvpR"),n=(s("qM1Y"),s("Nirx")),o=s("3aEs"),r=s("PMYq"),l=s("PQI8"),c=(s("i680"),s("wOnQ"),s("1n7x")),d=s.n(c);function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function m(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(Object(s),!0).forEach((function(e){p(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function p(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var v={components:{PieChart:i.a,GlobalSearch:l.a,DatatablesFields:n.a,HeaderSettings:r.a},data:function(){var t;return{chartData:null,options:{responsive:!0,maintainAspectRatio:!1,pieceLabel:{render:"value",precision:1},showAllTooltips:!0},male:"",female:"",status:"",activeField:"",disabled_purok:0,disabled_sitio:0,columns:[{title:"Member Name",field:"full_name",thComp:o.a},{title:"Sex",field:"gender_name",thComp:o.a,sortable:!0},{title:"Barangay",field:"barangays_name",thComp:o.a},{title:"Age",field:"age",thComp:o.a},{title:"Civil Status",field:"civil_status_names",thComp:o.a},{title:"Sector",field:"sector_name",thComp:o.a}],query:{sort:"id",order:"asc",limit:20,s:""},xprops:{module:"ReportsSingle",route:"reports",permission_prefix:"reports_"},json_fields:(t={"Item No.":"id","Household Number":"building_no","Family Code":"family_code","Relationship to Head of the Family":"household_names","Last Name":"last_name","First Name":"first_name","Middle Name":"middle_name","Extension Name":"extension_name",Barangay:"barangays_name","Barangay Code/ ID":"barangay_code","Purok (Code)":"purok_names","Block/Lot/No. of House/ Street Name ":"block_lot_house_id","Sitio (Code)":"sitio_names","Native Province":"native_provinces","Native City/Municipality":"native_citys","Valid ID":"valid_id_names","ID No.":"id_number",Birthday:"birthdate",Sex:"gender_name","Gender Preference":"gender_preference_name","Civil Status":"civil_status_names","Spouse Last Name":"spouse_last_name","Spouse First Name":"spouse_first_name","Spouse Middle Name":"spouse_middle_name","Spouse Extension Name":"spouse_extension_name","No. of Dependents":"no_of_dependents","Cellphone Number":"mobile_no","Landline Number":"landline_number","Email Address":"email","Health Condition #1":"health_id","Health Condition #2":"''","Disability Condition #1":"disability_id","Disability Condition #2":" ","Nutritional Status (Ideal, Wasted, Stunted, Obese, Overweight)":" ","Government Assistance No. 01":"government_assistance_name","Government Assistance No. 02":" ","Government Assistance No. 03":" ",Occupation:"occupation",Employer:"employer","Work Location (Province)":"native_provinces","Work Location (City/Municipality)":"work_location_citys","Household Monthly Income":"monthly_income","Economic Status":" ","OFW Relative No. 1 (as related to family head)":" ","Country of Rel. No. 1":" "},p(t,"OFW Relative No. 1 (as related to family head)"," "),p(t,"Country of Rel. No. 2"," "),p(t,"OFW Relative No. 2 (as related to family head)"," "),p(t,"Beneficiary? (Any Member of the Family). YES/NO"," "),p(t,"Highest Educational Attainment","educational_attaintment_name"),p(t,"Educational Status","educational_status_name"),p(t,"Last School Attended","last_school_attended"),p(t,"Government Educational Assistance #1","government_assistance_name"),p(t,"Government Educational Assistance #2"," "),p(t,"Soft Skills #1"," "),p(t,"Soft Skills #2"," "),p(t,"Hard Skills #1"," "),p(t,"Hard Skills #2"," "),p(t,"Hobbies  #1"," "),p(t,"Hobbies  #2"," "),p(t,"Sports #1"," "),p(t,"Sports #2"," "),p(t,"Ethnicity No. 01","Tagalog"),p(t,"Religion (Catholic:test, Iglesia ni Cristo:test, etc)"," "),p(t,"Sector No. 01","sector_name"),p(t,"Sector No. 02"," "),p(t,"Province Registered","political_province_registered"),p(t,"City/ Municipality Registered","political_city_registered"),p(t,"House Ownership","house_ownership_names"),p(t,"House Type","house_type_names"),p(t,"House Make","house_make_names"),p(t,"No. of Nuclear Family in Household","no_nuclear_family_household_id"),p(t,"No. of Bedrooms","no_bedrooms_id"),p(t,"No. of  CRs","no_cr_id"),p(t,"Utilities No. 01","gad_utilities_no1"),p(t,"Utilities No. 02","gad_utilities_no2"),p(t,"Utilities No. 03","gad_utilities_no3"),p(t,"Utilities No. 04","gad_utilities_no4"),p(t,"Appliances No. 01","gad_appliances_no1"),p(t,"Appliances No. 02","gad_appliances_no2"),p(t,"Appliances No. 03","gad_appliances_no3"),p(t,"Appliances No. 04","gad_appliances_no4"),p(t,"Vehicles No. 01","vehicles_name"),p(t,"Vehicles No. 02"," "),p(t,"Full Immunization (YES, Public Hosp/ Center YES, Private Hosp/ Clinic, NO)"," "),p(t,"Covid 19 Test (No COVID Test, Tested Positive for COVID19, Tested Negative for COVID19)"," "),p(t,"Date of 1st Dosage Covid 19 Vaccination"," "),p(t,"BRAND"," "),p(t,"Date of 2ndt Dosage Covid 19 Vaccination"," "),p(t,"BRAND"," "),p(t,"Pregnancy Age"," "),p(t,"With Prenatal Check up (YES, Public Hosp/ Center YES, Private Hosp/ Clinic, NO)"," "),p(t,"With Postnatal Check up (YES, Public Hosp/ Center YES, Private Hosp/ Clinic, NO)"," "),p(t,"Maintaining  Medicine No. 01 ","medicine_name"),p(t,"Maintaining Medicine No. 01 "," "),p(t,"Organizations Involved No. 01","organization_name"),p(t,"Organizations  Involved No. 02"," "),p(t,"Barangay Residence Year","barangay_residence_year"),p(t,"Calamba Residence Year","no_of_years_in_calamba"),p(t,"REMARKS","remarks"),t),json_data:[],json_meta:[[{key:"charset",value:"utf-8"}]]}},computed:m({},Object(a.c)("ReportsSingle",["data","total","entry","loading","lists","others"])),mounted:function(){this.fetchCreateData()},watch:{query:{handler:function(t){this.setQuery(t),this.searchData()},deep:!0}},beforeDestroy:function(){this.resetState()},methods:m(m({},Object(a.b)("ReportsSingle",["searchData","fetchCreateData","resetState","setBarangay","setPurok","setSitio","setSector","setQuery","setAgeTo","setGender","setAgeFrom"])),{},{downloads:function(){d()(this.$refs.content,{filename:"content.pdf",image:{type:"jpeg",quality:.98},html2canvas:{dpi:192,letterRendering:!0},jsPDF:{unit:"in",format:"letter",orientation:"landscape"}})},updateBarangay:function(t){this.setBarangay(t),this.disabled_sitio=0,this.disabled_purok=0,this.setSitio(),this.setPurok()},updatePurok:function(t){this.setPurok(t),t&&(this.disabled_sitio=1)},updateSitio:function(t){this.setSitio(t),t&&(this.disabled_purok=1)},updateGender:function(t){this.setGender(t)},updateSector:function(t){this.setSector(t)},updateAgeTo:function(t){this.setAgeTo(t.target.value)},updateAgeFrom:function(t){this.setAgeFrom(t.target.value)},submitForm:function(){var t=this;this.searchData().then((function(e){t.json_data=e.data.meta.all_gads,console.log(e.data.meta.all_gads);var s=e.data.meta,a=s.Female,i=s.Male;t.male=i,t.female=a,t.chartData={labels:["Female","Male"],datasets:[{backgroundColor:["#993366","#0099CC"],data:[a,i]}]}})).catch((function(e){t.status="failed",_.delay((function(){t.status=""}),3e3)}))},focusField:function(t){this.activeField=t},clearFocus:function(){this.activeField=""}})},h=s("KHd+"),b=Object(h.a)(v,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{ref:"content"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"card"},[t._m(0),t._v(" "),s("pie-chart",{attrs:{"chart-data":t.chartData,options:t.options}}),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3"}),t._v(" "),s("div",{staticClass:"col-md-3"},[s("h3",[t._v("Male : "+t._s(t.male))])]),t._v(" "),s("div",{staticClass:"col-md-3"},[s("h3",[t._v("Female : "+t._s(t.female))])])])],1)]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"card"},[t._m(1),t._v(" "),s("div",{staticClass:"card-body"},[s("br"),t._v(" "),s("div",[s("label",{staticClass:"label"},[t._v("Barangay")]),t._v(" "),s("v-select",{attrs:{name:"barangay",label:"barangay_name",value:t.entry.barangay,options:t.lists.barangay,required:""},on:{input:t.updateBarangay,focus:function(e){return t.focusField("barangay")},blur:t.clearFocus}})],1),t._v(" "),s("div",[s("label",{staticClass:"label"},[t._v("Purok")]),t._v(" "),s("v-select",{attrs:{name:"purok",label:"purok_name",value:t.entry.purok,options:t.others.purok,disabled:1==t.disabled_purok,required:""},on:{input:t.updatePurok,focus:function(e){return t.focusField("purok")},blur:t.clearFocus}})],1),t._v(" "),s("div",[s("label",{staticClass:"label"},[t._v("Sitio")]),t._v(" "),s("v-select",{attrs:{name:"sitio",label:"sitio_name",value:t.entry.sitio,options:t.others.sitio,disabled:1==t.disabled_sitio,required:""},on:{input:t.updateSitio,focus:function(e){return t.focusField("sitio")},blur:t.clearFocus}})],1),t._v(" "),s("div",[s("label",{staticClass:"label"},[t._v("Sector")]),t._v(" "),s("v-select",{attrs:{name:"sector",label:"sector_name",value:t.entry.sector,options:t.lists.sector,required:""},on:{input:t.updateSector,focus:function(e){return t.focusField("sector")},blur:t.clearFocus}})],1),t._v(" "),s("div",[s("label",{staticClass:"label"},[t._v("Gender")]),t._v(" "),s("v-select",{attrs:{name:"gender",label:"gender_name",value:t.entry.gender,options:t.lists.gender,required:""},on:{input:t.updateGender,focus:function(e){return t.focusField("gender")},blur:t.clearFocus}})],1),t._v(" "),s("div",[s("label",{staticClass:"label"},[t._v("Age")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("input",{staticClass:"form-control",attrs:{type:"number",placeholder:"From",name:"age_from"},domProps:{value:t.entry.age_from},on:{input:t.updateAgeFrom}})]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("input",{staticClass:"form-control",attrs:{type:"number",placeholder:"To",name:"age_to"},domProps:{value:t.entry.age_to},on:{input:t.updateAgeTo}})])])])]),t._v(" "),s("div",{staticClass:"card-footer"},[s("vue-button-spinner",{staticClass:"btn-info",attrs:{status:t.status,isLoading:t.loading,disabled:t.loading}},[t._v("\n              Search\n            ")])],1)])])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card"},[t._m(2),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"table-overlay"},[s("div",{staticClass:"table-overlay-container"},[s("material-spinner"),t._v(" "),s("span",[t._v("Loading...")])],1)]),t._v(" "),s("download-excel",{staticClass:"btn btn-primary",attrs:{data:t.json_data,fields:t.json_fields,worksheet:"Resident List",name:"gad_report.xls"}},[t._v("\n              Print Excel\n            ")]),t._v(" "),s("button",{staticClass:"btn btn-info",on:{click:t.downloads}},[t._v("Download PDF")]),t._v(" "),s("datatable",{attrs:{columns:t.columns,data:t.data,total:t.total,query:t.query,xprops:t.xprops,HeaderSettings:!1,pageSizeOptions:[10,25,50,100]}},[s("global-search",{staticClass:"pull-left",attrs:{query:t.query}}),t._v(" "),s("header-settings",{staticClass:"pull-right",attrs:{columns:t.columns}})],1)],1)])])])])])])])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("br"),t._v(" "),s("img",{attrs:{src:"/images/calamba-logo.png",height:"95px",width:"100px"}}),t._v(" "),s("img",{attrs:{src:"/images/gad-logo-login.png",height:"95px",width:"100px"}})]),t._v(" "),s("div",{staticClass:"col-md-8"},[s("div",[s("h3",{staticStyle:{color:"black"}},[s("b",{staticStyle:{"text-transform":"uppercase"}},[t._v("City Government of Calamba")]),s("br"),t._v(" "),s("b",{staticStyle:{"text-transform":"uppercase","margin-right":"50px"}},[t._v("Gender and Development")]),s("br"),t._v(" "),s("b",{staticStyle:{"text-transform":"uppercase","margin-right":"130px"}},[t._v("Household Profile")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header card-header-primary"},[e("h4",{staticClass:"card-title"},[this._v("GAD Generate Reports")]),this._v(" "),e("p",{staticClass:"crd-category"},[this._v("Advance Search")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header card-header-primary card-header-icon"},[e("div",{staticClass:"card-icon"},[e("i",{staticClass:"material-icons"},[this._v("assignment")])]),this._v(" "),e("h4",{staticClass:"card-title"},[this._v("\n              Table\n            "),e("strong",[this._v("Resident List")])])])}],!1,null,null,null);e.default=b.exports},"3aEs":function(t,e,s){"use strict";var a={props:["title"]},i=s("KHd+"),n=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v("\n  "+this._s(this.$t(this.title))+"\n")])}),[],!1,null,null,null);e.a=n.exports},BwyW:function(t,e,s){var a=s("OB+U");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,i);a.locals&&(t.exports=a.locals)},Nirx:function(t,e,s){"use strict";var a={props:["field","row"],computed:{entry:function(){var t=_.split(this.field,".");return{key:t[0],field:t[1]}}}},i=s("KHd+"),n=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return this.row[this.entry.key]?e("div",[this._v("\n  "+this._s(this.row[this.entry.key][this.entry.field])+"\n")]):e("div")}),[],!1,null,null,null);e.a=n.exports},"OB+U":function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".dropdown-menu .dropdown-item[data-v-b03a5c46]:focus,.dropdown-menu .dropdown-item[data-v-b03a5c46]:hover{box-shadow:none;background-color:#f4f4f4;color:#000;cursor:pointer!important}",""])},PMYq:function(t,e,s){"use strict";var a={name:"HeaderSettings",props:["columns"],methods:{isColVisible:function(t){return void 0===t.visible||""+t.visible=="true"},handleChange:function(t){this.$set(t,"visible",!this.isColVisible(t))}}},i=(s("sV85"),s("KHd+")),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{name:"HeaderSettings"}},[t._m(0),t._v(" "),s("div",{staticClass:"dropdown-menu p-2 mr-5"},[s("h5",{staticClass:"ml-2 mb-1"},[t._v("\n      "+t._s(t.$t("global.datatables.colvis"))+"\n    ")]),t._v(" "),s("hr",{staticClass:"my-1"}),t._v(" "),t._l(t.columns,(function(e,a){return s("div",{key:e.title+a},[s("div",{staticClass:"dropdown-item px-2 mt-0 mb-1",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.handleChange(e)}}},[t.isColVisible(e)?s("i",{staticClass:"material-icons text-success mr-2"},[t._v("\n          done\n        ")]):s("i",{staticClass:"material-icons text-rose mr-2"},[t._v("close")]),t._v("\n        "+t._s(t.$t(e.title))+"\n      ")])])})),t._v(" "),s("hr",{staticClass:"my-1"}),t._v(" "),s("button",{staticClass:"btn btn-default btn-sm pull-right",attrs:{type:"button"}},[t._v("\n      "+t._s(t.$t("global.close"))+"\n    ")])],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-default dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"}},[e("i",{staticClass:"fa fa-cog"}),this._v(" "),e("span",{staticClass:"caret"})])}],!1,null,"b03a5c46",null);e.a=n.exports},PQI8:function(t,e,s){"use strict";var a={props:{query:{type:Object,require:!0}},data:function(){return{focus:!1}},methods:{debounceSearch:_.debounce((function(t){this.query.s=t,this.query.offset=0}),300)}},i=s("KHd+"),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.query.s,"is-focused":t.focus}},[s("label",{staticClass:"bmd-label-floating"},[t._v("\n    "+t._s(t.$t("global.search"))+"\n  ")]),t._v(" "),s("div",{staticClass:"input-group"},[s("input",{staticClass:"form-control",attrs:{type:"text",name:"search"},domProps:{value:t.query.s},on:{input:function(e){return t.debounceSearch(e.target.value)},focus:function(e){t.focus=!0},blur:function(e){t.focus=!1}}}),t._v(" "),0!==t.query.s.length?s("div",{staticClass:"btn btn-just-icon btn-round btn-link text-dark d-inline-block input-group-append m-0",staticStyle:{height:"36px"},on:{click:function(e){t.query.s=""}}},[s("i",{staticClass:"material-icons"},[t._v("clear")])]):t._e()])])}),[],!1,null,null,null);e.a=n.exports},RnhZ:function(t,e,s){var a={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn-bd":"loYQ","./bn-bd.js":"loYQ","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-mx":"tbfe","./es-mx.js":"tbfe","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function i(t){var e=n(t);return s(e)}function n(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id="RnhZ"},qM1Y:function(t,e,s){"use strict";var a={props:["row","xprops"],data:function(){return{}},created:function(){},methods:{destroyData:function(t){var e=this;this.$swal({title:"Are you sure?",text:"You want to Archived!",type:"warning",showCancelButton:!0,confirmButtonText:"Archived",confirmButtonColor:"#dd4b39",focusCancel:!0,reverseButtons:!0}).then((function(s){s.value&&e.$store.dispatch(e.xprops.module+"/destroyData",t).then((function(t){console.log("test"),e.$eventHub.$emit("archived-success")}))}))}}},i=s("KHd+"),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dt-action-container"},[t.$can(t.xprops.permission_prefix+"show")?s("router-link",{staticClass:"btn btn-just-icon btn-round btn-link text-azure",attrs:{to:{name:t.xprops.route+".show",params:{id:t.row.id}}}},[s("i",{staticClass:"material-icons"},[t._v("remove_red_eye")])]):t._e(),t._v(" "),t.$can(t.xprops.permission_prefix+"edit")?s("router-link",{staticClass:"btn btn-just-icon btn-round btn-link text-success",attrs:{to:{name:t.xprops.route+".edit",params:{id:t.row.id}}}},[s("i",{staticClass:"material-icons"},[t._v("edit")])]):t._e(),t._v(" "),t.$can(t.xprops.permission_prefix+"delete")?s("a",{staticClass:"btn btn-just-icon btn-round btn-link text-rose",attrs:{href:"#",type:"button"},on:{click:function(e){return e.preventDefault(),t.destroyData(t.row.id)}}},[s("i",{staticClass:"material-icons"},[t._v("delete")])]):t._e()],1)}),[],!1,null,null,null);e.a=n.exports},rvpR:function(t,e,s){"use strict";var a=s("H8ri"),i=a.d.reactiveProp,n={extends:a.c,mixins:[i],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}},o=s("KHd+"),r=Object(o.a)(n,void 0,void 0,!1,null,null,null);e.a=r.exports},sV85:function(t,e,s){"use strict";s("BwyW")}}]);