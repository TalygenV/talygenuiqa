(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-637962fa"],{bbe7:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"padding-t_10",attrs:{id:"reportstabsdata"}},[e("div",{staticClass:"left-menu-tab new_tab"},[e("div",{staticClass:"col-md-12 p-0"},[e("div",{staticClass:"theme-primary partition"},[e("span",{staticClass:"p-name text-white"},[t._v(t._s(t.$t("SilentAppReports")))])])]),e("div",{staticClass:"pt-2 mb-1 w-100 d-none d-lg-block"},[e("div",{staticClass:"input-group customsearchbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"form-control searchcustomfilter border-right-0",attrs:{type:"text",maxlength:"50",placeholder:t.Search,autocomplete:"off"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._m(0)])]),e("div",{staticClass:"mt-2",staticStyle:{"max-height":"700px"},attrs:{id:"divscrollsetuptabs"}},[e("ul",{staticClass:"nav nav-pills flex-column left-tab responivecustomtab lefttabiconfix lefttabflexible",attrs:{id:"upper",role:"tablist"}},t._l(t.filteredTabs,(function(a,r){return e("li",{key:r},[e("a",{staticClass:"nav-link left-menu",class:{active:t.activeKey===a.index},attrs:{"data-toggle":"#"+a.id},on:{click:function(e){return t.activateTab(a.index)}}},[e("i",{class:a.icon,attrs:{"aria-hidden":"true"}}),t._v("  "+t._s(t.$t(a.name))+" ")])])})),0)])]),e("div",{staticClass:"right-content"},[e("div",{staticClass:"col-md-12 p-0"},[e("div",{staticClass:"theme-primary partition p-actions-expand d-flex row",staticStyle:{overflow:"visible"}},[e("div",{staticClass:"action-headings col-md-7"},[e("span",{staticClass:"p-name text-white",attrs:{id:"spnreporttext"}},[t._v(t._s(this.$t(t.activeTabName)))]),e("span",{staticClass:"p-actions float-right"},[e("a",{staticClass:"p-action-btn text-white",staticStyle:{display:"none"},attrs:{href:"javascript:;",id:"ancshowmorefilter",title:t.$t("Show")+" "+t.$t("More")+" "+t.$t("Filter")}},[e("i",{staticClass:"fa fa-filter",attrs:{"aria-hidden":"true"}}),e("br"),t._v(t._s(t.$t("Show"))+" "+t._s(t.$t("More"))+" "+t._s(t.$t("Filter")))])]),e("span",{staticClass:"p-actions float-right p-2",staticStyle:{display:"none"},attrs:{id:"showDaterange"}}),t._m(1)]),e("div",{staticClass:"col-md-5"},[e("div",{staticClass:"row customCol align-items-center justify-content-end align-items-center",staticStyle:{padding:"5px 0"}},[e("div",{staticClass:"input-group col-md-4 justify-content-end pr-0"},[e("span",{staticClass:"eraseall text-white",attrs:{id:"spanDateRange"}},[t._v("Date Range")]),e("button",{staticClass:"btn btn-secondary",on:{click:t.goToPreviousMonth}},[e("i",{staticClass:"fa fa-caret-left text-info fa-2x px-1"})]),e("button",{staticClass:"btn btn-secondary",on:{click:t.goToNextMonth}},[e("i",{staticClass:"fa fa-caret-right text-info fa-2x px-1"})])]),e("div",{staticClass:"col-md-5 pr-0"},[e("vc-date-picker",{staticClass:"timedate input-group",attrs:{"is-range":""},on:{input:t.onMonthSelected},scopedSlots:t._u([{key:"default",fn:function({inputValue:a,inputEvents:r,togglePopover:o}){return[e("input",t._g({staticClass:"form-control",attrs:{placeholder:"M/D/YYYY"},domProps:{value:a.start+" - "+a.end}},r)),e("div",{staticClass:"input-group-append",on:{click:o}},[e("span",{staticClass:"input-group-text"},[e("em",{staticClass:"fa fa-calendar"})])])]}}]),model:{value:t.monthRange,callback:function(e){t.monthRange=e},expression:"monthRange"}})],1),t._m(2)])])])]),e("div",{staticClass:"col-md-12 p-0"},[e("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[t._m(3),0==t.activeKey?e("div",{staticClass:"tab-pane",class:{"active show":0==t.activeKey},attrs:{id:"UserTrackingreport"}},[e("UserTrackingreport",{attrs:{fromDate:t.monthStartDate,ToDate:t.monthEndDate}})],1):t._e(),1==t.activeKey?e("div",{staticClass:"tab-pane",class:{"active show":1==t.activeKey},attrs:{id:"ExceedTimeReport"}},[e("ExceedTimeReport",{attrs:{fromDate:t.monthStartDate,ToDate:t.monthEndDate}})],1):t._e(),2==t.activeKey?e("div",{staticClass:"tab-pane",class:{"active show":2==t.activeKey},attrs:{id:"LateEmployee"}},[e("Unproductive"),e("LateEmployees",{attrs:{fromDate:t.monthStartDate,ToDate:t.monthEndDate}})],1):t._e(),3==t.activeKey?e("div",{staticClass:"tab-pane",class:{"active show":3==t.activeKey},attrs:{id:"UnproductiveApp"}},[e("UnproductiveApp",{attrs:{fromDate:t.monthStartDate,ToDate:t.monthEndDate}})],1):t._e(),4==t.activeKey?e("div",{staticClass:"tab-pane",class:{"active show":4==t.activeKey},attrs:{id:"Ideltime"}},[e("Ideltime",{attrs:{fromDate:t.monthStartDate,ToDate:t.monthEndDate}})],1):t._e(),5==t.activeKey?e("div",{staticClass:"tab-pane",class:{"active show":5==t.activeKey},attrs:{id:"AppWebsiteUsage"}},[e("AppWebsiteUsage",{attrs:{fromDate:t.monthStartDate,ToDate:t.monthEndDate}})],1):t._e(),6==t.activeKey?e("div",{staticClass:"tab-pane",class:{"active show":6==t.activeKey},attrs:{id:"ProductCountReport"}},[e("Category",{attrs:{fromDate:t.monthStartDate,ToDate:t.monthEndDate}})],1):t._e()])])])])},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text bg-transparent bg-white border-left-0"},[e("i",{staticClass:"fa fa-search"})])])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"collapse-head-btns"},[e("a",{staticClass:"collapse-btns",attrs:{href:"javascript:;"}},[e("i",{staticClass:"fa fa-angle-up text-white"})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-actions float-right"},[e("a",{staticClass:"table-head-btn border-0 p-2 ml-2 mr-3",attrs:{href:"javascript:;"}},[e("i",{staticClass:"fa fa-bar-chart text-info",attrs:{"aria-hidden":"true"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"expand-list"},[e("a",{staticClass:"expand-list-btn justify-content-center align-items-center",attrs:{href:"javascript:;"}},[e("i",{staticClass:"icon-solid arrow-solid-left text-white",staticStyle:{"font-size":"9pt"}})])])}],n=(a("14d9"),function(){var t=this,e=t._self._c;return e("div",[e("dynamic-form",{attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}}),e("div",{staticClass:"row placeholder"},[e("div",{staticClass:"col-md-12 p-0"},[t.parameter.length>0?e("ReportViewer",{attrs:{parameter:t.parameter,reportPath:t.reportPath}}):t._e()],1)])],1)}),s=[],i=a("9769"),l=function(){var t=this;t._self._c;return t._m(0)},c=[function(){var t=this,e=t._self._c;return e("div",{staticStyle:{height:"600px"}},[e("div",{staticStyle:{width:"100%","min-height":"650px","margin-bottom":"0%",height:"auto"},attrs:{id:"viewer"}})])}],p=(a("240d"),{props:{reportPath:null,parameter:null},data:function(){return{Token:null}},created:function(){this.Token=this.GetUserInfo.Token},mounted(){var t=this;setTimeout((function(){$("#viewer").boldReportViewer({reportServiceUrl:"https://qatestnewapi.talygen.com/api/ReportViewer",reportPath:t.reportPath,processingMode:"Remote",parameters:t.parameter,reportServerUrl:"http://172.22.23.102/ReportServer",ajaxBeforeLoad:t.setReportToken})}),2e3)},methods:{setReportToken:function(t){t.headers.push({Key:"content-type",Value:"application/json;charset=UTF-8"}),t.headers.push({Key:"Authorization",Value:"Bearer "+this.Token})}}}),m=p,u=(a("dd20"),a("2877")),h=Object(u["a"])(m,l,c,!1,null,null,null),d=h.exports,f={components:{ReportViewer:d},props:{fromDate:{type:Object},ToDate:{type:Object}},data(){return{reportPath:null,parameter:[],FormSchema:[{layoutType:"double",Data:[{astype:"MultiSelectField",label:"Users",name:"User",value:"",mode:"tag",placeholder:"",config:{options:[]},validationRules:{required:!1}},{astype:"MultiSelectField",label:"Department",name:"Department",value:"",mode:"tag",placeholder:"",config:{options:[]},validationRules:{required:!1}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}]}},created(){this.BindListing()},methods:{BindListing:async function(){var t=this;if("Users"==t.FormSchema[0].Data[0].label){var e="id=&modulename=Timer&type=USERS&search=&refId=";await i["a"].GetDDLData(e).then(e=>{var a=e.data.DATA;null!=a&&a.forEach((function(e,a){t.FormSchema[0].Data[0].config.options.push({name:e.name,value:e.value})}))})}if("Department"==this.FormSchema[0].Data[1].label){e="id=&modulename=Timer&type=DEPARTMENT&search=&refId=";await i["a"].GetDDLData(e).then(e=>{var a=e.data.DATA;null!=a&&a.forEach((function(e,a){t.FormSchema[0].Data[1].config.options.push({name:e.name,value:e.value})}))})}},async onSubmit(t){var e=this;e.reportPath="",e.parameter=[];let a={reportName:"timerusertrackingreport",userIds:t.User.length>0?t.User.map(t=>t.value).join(","):null,DeparmentIds:t.Department.length>0?t.Department.map(t=>t.value).join(","):null,dateFrom:e.$options.filters.formatDateYear(e.fromDate),dateTo:e.$options.filters.formatDateYear(e.ToDate)};await i["a"].ReportMain(a).then((function(t){console.log(t),e.reportPath=t.data.reportpath,e.parameter=t.data.parameters}))},ClearAll:function(){var t=this;t.FormSchema[0].Data[0].value="",t.FormSchema[0].Data[1].value="",t.parameter=[]}}},v=f,D=Object(u["a"])(v,n,s,!1,null,null,null),b=D.exports,g=function(){var t=this,e=t._self._c;return e("div",[e("dynamic-form",{attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}}),e("div",{staticClass:"row placeholder"},[e("div",{staticClass:"col-md-12 p-0"},[t.parameter.length>0?e("ReportViewer",{attrs:{parameter:t.parameter,reportPath:t.reportPath}}):t._e()],1)])],1)},y=[],S={components:{ReportViewer:d},props:{fromDate:{type:Object},ToDate:{type:Object}},data(){return{reportPath:null,parameter:[],FormSchema:[{layoutType:"double",Data:[{astype:"MultiSelectField",label:"Users",name:"User",value:"",mode:"tag",placeholder:"",validationRules:{required:!1},config:{options:[]}},{astype:"textField",label:this.$t("AppwebName"),name:"AppwebName",value:null,placeholder:this.$t("AppwebName")}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}]}},created(){this.GetUsers()},methods:{GetUsers:async function(){var t=this,e="id=&modulename=Timer&type=USERS&search=&refId=";await i["a"].GetDDLData(e).then(e=>{var a=e.data.DATA;null!=a&&a.forEach((function(e,a){t.FormSchema[0].Data[0].config.options.push({name:e.name,value:e.value})}))})},async onSubmit(t){var e=this;e.reportPath="",e.parameter=[];let a={reportName:"extendaedtimereport",userIds:t.User.length>0?t.User.map(t=>t.value).join(","):null,ApplicationIds:t.AppwebName,dateFrom:e.$options.filters.formatDateYear(e.fromDate),dateTo:e.$options.filters.formatDateYear(e.ToDate)};await i["a"].ReportMain(a).then((function(t){console.log(t),e.reportPath=t.data.reportpath,e.parameter=t.data.parameters}))},ClearAll:function(){var t=this;t.FormSchema[0].Data[0].value="",t.FormSchema[0].Data[1].value="",t.parameter=[]}}},C=S,w=Object(u["a"])(C,g,y,!1,null,null,null),T=w.exports,F=function(){var t=this,e=t._self._c;return e("div",[e("dynamic-form",{attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}}),e("div",{staticClass:"row placeholder"},[e("div",{staticClass:"col-md-12 p-0"},[t.parameter.length>0?e("ReportViewer",{attrs:{parameter:t.parameter,reportPath:t.reportPath}}):t._e()],1)])],1)},R=[],A={components:{ReportViewer:d},props:{fromDate:{type:Object},ToDate:{type:Object}},data(){return{reportPath:null,parameter:[],FormSchema:[{layoutType:"double",Data:[{astype:"MultiSelectField",label:"Users",name:"User",value:"",mode:"tag",placeholder:"",config:{options:[]}},{astype:"textField",label:this.$t("Departmentproject"),name:"Departmentproject",value:null,placeholder:this.$t("Departmentproject"),config:{options:[]}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}]}},created(){this.GetUsers()},methods:{GetUsers:async function(){var t=this,e="id=&modulename=Timer&type=USERS&search=&refId=";await i["a"].GetDDLData(e).then(e=>{var a=e.data.DATA;null!=a&&a.forEach((function(e,a){t.FormSchema[0].Data[0].config.options.push({name:e.name,value:e.value})}))})},async onSubmit(t){var e=this;e.reportPath="",e.parameter=[];let a={reportName:"timerlateemployeesreport",userIds:t.User.length>0?t.User.map(t=>t.value).join(","):null,DeparmentIds:t.Departmentproject,dateFrom:e.$options.filters.formatDateYear(e.fromDate),dateTo:e.$options.filters.formatDateYear(e.ToDate)};await i["a"].ReportMain(a).then((function(t){console.log(t),e.reportPath=t.data.reportpath,e.parameter=t.data.parameters}))},ClearAll:function(){var t=this;t.FormSchema[0].Data[0].value="",t.FormSchema[0].Data[1].value="",t.parameter=[]}}},x=A,_=Object(u["a"])(x,F,R,!1,null,null,null),Y=_.exports,U=function(){var t=this,e=t._self._c;return e("div",[e("dynamic-form",{attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}}),e("div",{staticClass:"row placeholder"},[e("div",{staticClass:"col-md-12 p-0"},[t.parameter.length>0?e("ReportViewer",{attrs:{parameter:t.parameter,reportPath:t.reportPath}}):t._e()],1)])],1)},E=[],M={components:{ReportViewer:d},props:{fromDate:{type:Object},ToDate:{type:Object}},data(){return{reportPath:null,parameter:[],FormSchema:[{layoutType:"double",Data:[{astype:"MultiSelectField",label:this.$t("Appweb"),name:"Appweb",value:"",mode:"tag",placeholder:"",config:{options:[]}},{astype:"MultiSelectField",label:"Users",name:"User",value:"",mode:"tag",placeholder:"",config:{options:[]}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}]}},created(){this.BindListing()},methods:{BindListing:async function(){var t=this,e="pageSize=1000&sortBy=ApplicationName&sortExp=ASC";if("Application/Website"==t.FormSchema[0].Data[0].label&&await i["a"].GetScreenShotListing(e).then(e=>{var a=e.data;null!=a&&a.forEach((function(e,a){t.FormSchema[0].Data[0].config.options.push({name:e.application_display_name,value:e.ApplicationId})}))}),"Users"==t.FormSchema[0].Data[1].label){var a="id=&modulename=Timer&type=USERS&search=&refId=";await i["a"].GetDDLData(a).then(e=>{var a=e.data.DATA;null!=a&&a.forEach((function(e,a){t.FormSchema[0].Data[1].config.options.push({name:e.name,value:e.value})}))})}},async onSubmit(t){var e=this;e.reportPath="",e.parameter=[];let a={reportName:"TimerUnproductiveAppReport",userIds:t.User.length>0?t.User.map(t=>t.value).join(","):null,ApplicationIds:t.Appweb.length>0?t.Appweb.map(t=>t.value).join(","):null,dateFrom:e.$options.filters.formatDateYear(e.fromDate),dateTo:e.$options.filters.formatDateYear(e.ToDate)};await i["a"].ReportMain(a).then((function(t){console.log(t),e.reportPath=t.data.reportpath,e.parameter=t.data.parameters}))},ClearAll:function(){var t=this;t.FormSchema[0].Data[0].value="",t.FormSchema[0].Data[1].value="",t.parameter=[]}}},I=M,j=Object(u["a"])(I,U,E,!1,null,null,null),P=j.exports,k=function(){var t=this,e=t._self._c;return e("div",[e("dynamic-form",{attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}}),e("div",{staticClass:"row placeholder"},[e("div",{staticClass:"col-md-12 p-0"},[t.parameter.length>0?e("ReportViewer",{attrs:{parameter:t.parameter,reportPath:t.reportPath}}):t._e()],1)])],1)},L=[],O={components:{ReportViewer:d},props:{fromDate:{type:Object},ToDate:{type:Object}},data(){return{reportPath:null,parameter:[],FormSchema:[{layoutType:"triple",Data:[{astype:"MultiSelectField",label:this.$t("Appweb"),name:"Appweb",value:"",mode:"tag",placeholder:"",config:{options:[]}},{astype:"MultiSelectField",label:this.$t("Department"),name:"Department",value:"",mode:"tag",placeholder:"",config:{options:[]}},{astype:"MultiSelectField",label:"Users",name:"User",value:"",mode:"tag",placeholder:"",config:{options:[]}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}]}},created(){this.BindListing()},methods:{BindListing:async function(){var t=this,e="pageSize=1000&sortBy=ApplicationName&sortExp=ASC";if("Application/Website"==t.FormSchema[0].Data[0].label&&await i["a"].GetScreenShotListing(e).then(e=>{var a=e.data;null!=a&&a.forEach((function(e,a){t.FormSchema[0].Data[0].config.options.push({name:e.application_display_name,value:e.ApplicationId})}))}),"Department"==t.FormSchema[0].Data[1].label){var a="id=&modulename=Timer&type=DEPARTMENT&search=&refId=";await i["a"].GetDDLData(a).then(e=>{var a=e.data.DATA;null!=a&&a.forEach((function(e,a){t.FormSchema[0].Data[1].config.options.push({name:e.name,value:e.value})}))})}if("Users"==this.FormSchema[0].Data[2].label){a="id=&modulename=Timer&type=USERS&search=&refId=";await i["a"].GetDDLData(a).then(e=>{var a=e.data.DATA;null!=a&&a.forEach((function(e,a){t.FormSchema[0].Data[2].config.options.push({name:e.name,value:e.value})}))})}},async onSubmit(t){var e=this;e.reportPath="",e.parameter=[];let a={reportName:"TimerIdleTimeReport",userIds:t.User.length>0?t.User.map(t=>t.value).join(","):null,DeparmentIds:t.Department.length>0?t.Department.map(t=>t.value).join(","):null,ApplicationIds:t.Appweb.length>0?t.Appweb.map(t=>t.value).join(","):null,dateFrom:e.$options.filters.formatDateYear(e.fromDate),dateTo:e.$options.filters.formatDateYear(e.ToDate)};await i["a"].ReportMain(a).then((function(t){console.log(t),e.reportPath=t.data.reportpath,e.parameter=t.data.parameters}))},ClearAll:function(){var t=this;t.FormSchema[0].Data[0].value="",t.FormSchema[0].Data[1].value="",t.FormSchema[0].Data[2].value="",t.parameter=[]}}},N=O,G=Object(u["a"])(N,k,L,!1,null,null,null),K=G.exports,V=function(){var t=this,e=t._self._c;return e("div",[e("dynamic-form",{attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}}),e("div",{staticClass:"row placeholder"},[e("div",{staticClass:"col-md-12 p-0"},[t.parameter.length>0?e("ReportViewer",{attrs:{parameter:t.parameter,reportPath:t.reportPath}}):t._e()],1)])],1)},B=[],z={components:{ReportViewer:d},props:{fromDate:{type:Object},ToDate:{type:Object}},data(){return{reportPath:null,parameter:[],FormSchema:[{layoutType:"triple",Data:[{astype:"MultiSelectField",label:this.$t("Appweb"),name:"Appweb",value:"",mode:"tag",placeholder:"",config:{options:[]}},{astype:"MultiSelectField",label:this.$t("Department"),name:"Department",value:"",mode:"tag",placeholder:"",config:{options:[]}},{astype:"MultiSelectField",label:"Users",name:"User",value:"",mode:"tag",placeholder:"",config:{options:[]}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}]}},created(){this.BindListing()},methods:{BindListing:async function(){var t=this,e="pageSize=1000&sortBy=ApplicationName&sortExp=ASC";if("Application/Website"==t.FormSchema[0].Data[0].label&&await i["a"].GetScreenShotListing(e).then(e=>{var a=e.data;null!=a&&a.forEach((function(e,a){t.FormSchema[0].Data[0].config.options.push({name:e.application_display_name,value:e.ApplicationId})}))}),"Department"==t.FormSchema[0].Data[1].label){var a="id=&modulename=Timer&type=DEPARTMENT&search=&refId=";await i["a"].GetDDLData(a).then(e=>{var a=e.data.DATA;null!=a&&a.forEach((function(e,a){t.FormSchema[0].Data[1].config.options.push({name:e.name,value:e.value})}))})}if("Users"==this.FormSchema[0].Data[2].label){a="id=&modulename=Timer&type=USERS&search=&refId=";await i["a"].GetDDLData(a).then(e=>{var a=e.data.DATA;null!=a&&a.forEach((function(e,a){t.FormSchema[0].Data[2].config.options.push({name:e.name,value:e.value})}))})}},async onSubmit(t){var e=this;e.reportPath="",e.parameter=[];let a={reportName:"TimerAppWebsiteUsageReport",userIds:t.User.length>0?t.User.map(t=>t.value).join(","):null,DeparmentIds:t.Department.length>0?t.Department.map(t=>t.value).join(","):null,ApplicationIds:t.Appweb.length>0?t.Appweb.map(t=>t.value).join(","):null,dateFrom:e.$options.filters.formatDateYear(e.fromDate),dateTo:e.$options.filters.formatDateYear(e.ToDate)};await i["a"].ReportMain(a).then((function(t){console.log(t),e.reportPath=t.data.reportpath,e.parameter=t.data.parameters}))},ClearAll:function(){var t=this;t.FormSchema[0].Data[0].value="",t.FormSchema[0].Data[1].value="",t.FormSchema[0].Data[2].value="",t.parameter=[]}}},Q=z,W=Object(u["a"])(Q,V,B,!1,null,null,null),q=W.exports,J=function(){var t=this,e=t._self._c;return e("div",[e("dynamic-form",{attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}}),e("div",{staticClass:"row placeholder"},[e("div",{staticClass:"col-md-12 p-0"},[t.parameter.length>0?e("ReportViewer",{attrs:{parameter:t.parameter,reportPath:t.reportPath}}):t._e()],1)])],1)},H=[],X={components:{ReportViewer:d},props:{fromDate:{type:Object},ToDate:{type:Object}},data(){return{reportPath:null,parameter:[],DataLoaded:0,FormSchema:[{layoutType:"double",Data:[{astype:"MultiSelectField",label:"Users",name:"User",value:"",mode:"tag",placeholder:"",config:{options:[]}},{astype:"MultiSelectField",label:this.$t("Category"),name:"Category",value:"",mode:"tag",placeholder:"",config:{options:[]}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}]}},created:async function(){await this.GetUsers(),this.GetCategory(),this.DataLoaded=1},methods:{GetUsers:async function(){var t=this,e="id=&modulename=Timer&type=USERS&search=&refId=";await i["a"].GetDDLData(e).then(e=>{var a=e.data.DATA;null!=a&&a.forEach((function(e,a){t.FormSchema[0].Data[0].config.options.push({name:e.name,value:e.value})}))})},GetCategory:function(){var t=this,e="pageSize=500&sortBy=category_name&sortExp=ASC";i["a"].GetCategoryListing(e).then(e=>{var a=JSON.parse(e.data);null!=a&&a.data.forEach((function(e,a){t.FormSchema[0].Data[1].config.options.push({name:e.category_name,value:""+e.category_id})}))})},async onSubmit(t){var e=this;e.reportPath="",e.parameter=[];let a={reportName:"timercategoryreport",userIds:t.User.length>0?t.User.map(t=>t.value).join(","):null,categoryIds:t.Category.length>0?t.Category.map(t=>t.value).join(","):null,dateFrom:e.$options.filters.formatDateYear(e.fromDate),dateTo:e.$options.filters.formatDateYear(e.ToDate)};await i["a"].ReportMain(a).then((function(t){console.log(t),e.reportPath=t.data.reportpath,e.parameter=t.data.parameters}))},ClearAll:function(){var t=this;t.FormSchema[0].Data[0].value="",t.FormSchema[0].Data[1].value="",t.parameter=[]}}},Z=X,tt=Object(u["a"])(Z,J,H,!1,null,null,null),et=tt.exports,at=a("c1df"),rt=a.n(at),ot={components:{UserTrackingreport:b,ExceedTimeReport:T,LateEmployees:Y,UnproductiveApp:P,Ideltime:K,AppWebsiteUsage:q,Category:et},props:{fromDate:{type:Object},ToDate:{type:Object}},data(){return{activeKey:0,tabNames:["UserTrackingReport","ExceededTimeReport","LateEmployees","UnproductiveAppsReport","IdleTimeReport","AppwebsiteusageReport","CategoryReport"],searchQuery:"",updateMonthRange:!1,fromDate:"",ToDate:"",startDate:new Date,endDate:new Date,monthStartDate:new Date,monthEndDate:new Date,dateType:"MM",monthRange:{start:this.monthStartDate,end:this.monthEndDate}}},mounted(){this.activateTab(0)},computed:{filteredTabs(){if(!this.searchQuery)return this.tabNames.map((t,e)=>({name:t,index:e,icon:this.getTabIcon(t)}));const t=this.searchQuery.toLowerCase();return this.tabNames.map((t,e)=>({name:t,index:e,icon:this.getTabIcon(t)})).filter(e=>this.$t(e.name).toLowerCase().includes(t))},activeTabName(){return this.tabNames[this.activeKey]}},created(){var t=this;t.GetRangeDates()},updated(){var t=this;const e=t.ConvertDateFormat(new Date);var a=new Date;const r=new Date;var o=new Date(a.getFullYear(),a.getMonth()+1,0).getDate();r.setDate(r.getDate()-o);const n=t.ConvertDateFormat(r);t.monthStartDate=t.ConvertDateFormat(n);const s=new Date(t.monthStartDate);if(t.monthEndDate=t.ConvertDateFormat(t.monthEndDate),t.updateMonthRange=!0,t.monthStartDate!=n||t.monthEndDate!=e){const e=Math.abs(t.monthEndDate-t.monthStartDate),a=Math.ceil(e/864e5);(t.monthStartDate>s||a<31)&&(t.monthRange={start:t.monthStartDate,end:s})}else t.updateMonthRange&&(t.monthRange={start:t.monthStartDate,end:s})},methods:{GetRangeDates(){var t=this,e=rt()(t.monthStartDate,"YYYY/MM/DD"),a=rt.a.utc(t.monthStartDate),r=rt()(t.monthEndDate).subtract(1,"months"),o=rt()(r._d,"YYYY");t.monthStartDate=parseInt(e.format("YYYY"))+"-"+parseInt(e.format("M"))+"-"+parseInt(a.format("D")),t.monthEndDate=parseInt(o.format("YYYY"))+"-"+parseInt(o.format("M"))+"-"+parseInt(o.format("D")),t.monthRange={start:new Date(t.monthStartDate),end:new Date(t.monthEndDate)}},onMonthSelected(t){this.monthRange.start=t.start,this.monthRange.end=t.end},goToPreviousMonth(){var t=this;if(t.monthRange.start&&t.monthRange.end){const n=new Date(t.monthRange.start),s=new Date(t.monthRange.end);var e=rt()(n).subtract(1,"months"),a=rt()(s).subtract(1,"months"),r=rt()(e._d,"YYYY"),o=rt()(a._d,"YYYY");t.monthStartDate=parseInt(r.format("YYYY"))+"-"+parseInt(r.format("M"))+"-"+parseInt(r.format("D")),t.monthEndDate=parseInt(o.format("YYYY"))+"-"+parseInt(o.format("M"))+"-"+parseInt(o.format("D")),t.monthRange={start:new Date(t.monthStartDate),end:new Date(t.monthEndDate)}}},goToNextMonth(){var t=this;if(t.monthRange.start&&t.monthRange.end){const n=new Date(t.monthRange.start),s=new Date(t.monthRange.end);var e=rt()(n).add(1,"months"),a=rt()(s).add(1,"months"),r=rt()(e._d,"YYYY"),o=rt()(a._d,"YYYY");t.monthStartDate=parseInt(r.format("YYYY"))+","+parseInt(r.format("M"))+","+parseInt(r.format("D")),t.monthEndDate=parseInt(o.format("YYYY"))+","+parseInt(o.format("M"))+","+parseInt(o.format("D")),t.monthRange={start:new Date(t.monthStartDate),end:new Date(t.monthEndDate)}}},ConvertDateFormat(t){var e=new Date(t),a=("0"+(e.getMonth()+1)).slice(-2),r=("0"+e.getDate()).slice(-2),o=[e.getFullYear(),a,r].join("-");return o},getTabIcon(t){switch(t){case"UserTrackingReport":return"fa fa-calendar";case"ExceededTimeReport":return"fa fa-clock-o";case"LateEmployees":return"fa fa-user-circle-o";case"UnproductiveAppsReport":return"fa fa-info-circle";case"IdleTimeReport":return"fa fa-clock-o";case"AppwebsiteusageReport":return"fa fa-desktop";case"CategoryReport":return"fa fa-file-text";default:return""}},activateTab(t){this.activeKey=t},formatDuration(t){const e=Math.floor(t),a=Math.round(60*(t-e));return`${e}h ${a}m`},getTimeRanges(t){const e=[],a=new Date,r={hour:"numeric",minute:"numeric"};for(let o=0;o<1440;o+=t)a.setHours(0),a.setMinutes(o),e.push(a.toLocaleTimeString("en",r));return e}}},nt=ot,st=(a("fe42"),Object(u["a"])(nt,r,o,!1,null,null,null));e["default"]=st.exports},d427:function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,".customCol .btn-secondary{background:none;border:none;padding:0}.customCol .timedate .form-control,.customCol .timedate span.input-group-text{background:#138496;border-color:#138496;color:#fff}",""]),t.exports=e},d65e:function(t,e,a){var r=a("fd21");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=a("499e").default;o("aef85994",r,!0,{sourceMap:!1,shadowMode:!1})},dd20:function(t,e,a){"use strict";a("d65e")},e080:function(t,e,a){var r=a("d427");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=a("499e").default;o("16b0d2e8",r,!0,{sourceMap:!1,shadowMode:!1})},fd21:function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,"*,:after,:before{box-sizing:border-box;margin:0;position:unset}",""]),t.exports=e},fe42:function(t,e,a){"use strict";a("e080")}}]);
//# sourceMappingURL=chunk-637962fa.js.map