(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6665473d"],{"14e5":function(e,t,a){var r=a("9a7b");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var s=a("499e").default;s("4bd60e36",r,!0,{sourceMap:!1,shadowMode:!1})},"2b64":function(e,t,a){"use strict";a("14e5")},"9a7b":function(e,t,a){var r=a("24fb");t=r(!1),t.push([e.i,".customCol .btn-secondary{background:none;border:none;padding:0}.customCol .timedate .form-control,.customCol .timedate span.input-group-text{background:#138496;border-color:#138496;color:#fff}",""]),e.exports=t},bbe7:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"padding-t_10",attrs:{id:"reportstabsdata"}},[t("div",{staticClass:"left-menu-tab new_tab"},[t("div",{staticClass:"col-md-12 p-0"},[t("div",{staticClass:"theme-primary partition"},[t("span",{staticClass:"p-name text-white"},[e._v(e._s(e.$t("SilentAppReports")))])])]),t("div",{staticClass:"pt-2 mb-1 w-100 d-none d-lg-block"},[t("div",{staticClass:"input-group customsearchbox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"form-control searchcustomfilter border-right-0",attrs:{type:"text",maxlength:"50",placeholder:e.Search,autocomplete:"off"},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}}),e._m(0)])]),t("div",{staticClass:"mt-2",staticStyle:{"max-height":"700px"},attrs:{id:"divscrollsetuptabs"}},[t("ul",{staticClass:"nav nav-pills flex-column left-tab responivecustomtab lefttabiconfix lefttabflexible",attrs:{id:"upper",role:"tablist"}},e._l(e.filteredTabs,(function(a,r){return t("li",{key:r},[t("a",{staticClass:"nav-link left-menu",class:{active:e.activeKey===a.index},attrs:{"data-toggle":"#"+a.id},on:{click:function(t){return e.activateTab(a.index)}}},[t("i",{class:a.icon,attrs:{"aria-hidden":"true"}}),e._v("  "+e._s(e.$t(a.name))+" ")])])})),0)])]),t("div",{staticClass:"right-content"},[t("div",{staticClass:"col-md-12 p-0"},[t("div",{staticClass:"theme-primary partition p-actions-expand d-flex row",staticStyle:{overflow:"visible"}},[t("div",{staticClass:"action-headings col-md-7"},[t("span",{staticClass:"p-name text-white",attrs:{id:"spnreporttext"}},[e._v(e._s(this.$t(e.activeTabName)))]),t("span",{staticClass:"p-actions float-right"},[t("a",{staticClass:"p-action-btn text-white",staticStyle:{display:"none"},attrs:{href:"javascript:;",id:"ancshowmorefilter",title:e.$t("Show")+" "+e.$t("More")+" "+e.$t("Filter")}},[t("i",{staticClass:"fa fa-filter",attrs:{"aria-hidden":"true"}}),t("br"),e._v(e._s(e.$t("Show"))+" "+e._s(e.$t("More"))+" "+e._s(e.$t("Filter")))])]),t("span",{staticClass:"p-actions float-right p-2",staticStyle:{display:"none"},attrs:{id:"showDaterange"}}),e._m(1)]),t("div",{staticClass:"col-md-5"},[t("div",{staticClass:"row customCol align-items-center justify-content-end align-items-center",staticStyle:{padding:"5px 0"}},[t("div",{staticClass:"input-group col-md-4 justify-content-end pr-0"},[t("span",{staticClass:"eraseall text-white",attrs:{id:"spanDateRange"}},[e._v(e._s(e.$t("DateRange")))]),t("button",{staticClass:"btn btn-secondary",on:{click:e.goToPreviousMonth}},[t("i",{staticClass:"fa fa-caret-left text-info fa-2x px-1"})]),t("button",{staticClass:"btn btn-secondary",on:{click:e.goToNextMonth}},[t("i",{staticClass:"fa fa-caret-right text-info fa-2x px-1"})])]),t("div",{staticClass:"col-md-5 pr-0"},[t("vc-date-picker",{staticClass:"timedate input-group",attrs:{"is-range":""},on:{input:e.onMonthSelected},scopedSlots:e._u([{key:"default",fn:function({inputValue:a,inputEvents:r,togglePopover:s}){return[t("input",e._g({staticClass:"form-control",attrs:{placeholder:"M/D/YYYY"},domProps:{value:a.start+" - "+a.end}},r)),t("div",{staticClass:"input-group-append",on:{click:s}},[t("span",{staticClass:"input-group-text"},[t("em",{staticClass:"fa fa-calendar"})])])]}}]),model:{value:e.monthRange,callback:function(t){e.monthRange=t},expression:"monthRange"}})],1)])])])]),t("div",{staticClass:"col-md-12 p-0"},[t("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[e._m(2),0==e.activeKey?t("div",{staticClass:"tab-pane",class:{"active show":0==e.activeKey},attrs:{id:"UserTrackingreport"}},[t("UserTrackingreport",{attrs:{fromDate:e.monthStartDate,ToDate:e.monthEndDate}})],1):e._e(),1==e.activeKey?t("div",{staticClass:"tab-pane",class:{"active show":1==e.activeKey},attrs:{id:"ExceedTimeReport"}},[t("ExceedTimeReport",{attrs:{fromDate:e.monthStartDate,ToDate:e.monthEndDate}})],1):e._e(),2==e.activeKey?t("div",{staticClass:"tab-pane",class:{"active show":2==e.activeKey},attrs:{id:"LateEmployee"}},[t("Unproductive"),t("LateEmployees",{attrs:{fromDate:e.monthStartDate,ToDate:e.monthEndDate}})],1):e._e(),3==e.activeKey?t("div",{staticClass:"tab-pane",class:{"active show":3==e.activeKey},attrs:{id:"UnproductiveApp"}},[t("UnproductiveApp",{attrs:{fromDate:e.monthStartDate,ToDate:e.monthEndDate}})],1):e._e(),4==e.activeKey?t("div",{staticClass:"tab-pane",class:{"active show":4==e.activeKey},attrs:{id:"Ideltime"}},[t("Ideltime",{attrs:{fromDate:e.monthStartDate,ToDate:e.monthEndDate}})],1):e._e(),5==e.activeKey?t("div",{staticClass:"tab-pane",class:{"active show":5==e.activeKey},attrs:{id:"AppWebsiteUsage"}},[t("AppWebsiteUsage",{attrs:{fromDate:e.monthStartDate,ToDate:e.monthEndDate}})],1):e._e(),6==e.activeKey?t("div",{staticClass:"tab-pane",class:{"active show":6==e.activeKey},attrs:{id:"ProductCountReport"}},[t("Category",{attrs:{fromDate:e.monthStartDate,ToDate:e.monthEndDate}})],1):e._e()])])])])},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"input-group-append"},[t("span",{staticClass:"input-group-text bg-transparent bg-white border-left-0"},[t("i",{staticClass:"fa fa-search"})])])},function(){var e=this,t=e._self._c;return t("span",{staticClass:"collapse-head-btns"},[t("a",{staticClass:"collapse-btns",attrs:{href:"javascript:;"}},[t("i",{staticClass:"fa fa-angle-up text-white"})])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"expand-list"},[t("a",{staticClass:"expand-list-btn justify-content-center align-items-center",attrs:{href:"javascript:;"}},[t("i",{staticClass:"icon-solid arrow-solid-left text-white",staticStyle:{"font-size":"9pt"}})])])}],i=(a("14d9"),function(){var e=this,t=e._self._c;return t("div",[t("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit},scopedSlots:e._u([{key:"tgslot-IsShiftView",fn:function({data:a}){return[t("div",{staticClass:"mt-2 labelalign col-control-right"},[t("label",{class:{switch:!0,"switch enabled":1==a.fieldInfo.value}},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.fieldInfo.value,expression:"data.fieldInfo.value"}],staticClass:"form-check-input rdoticketfor custom-control-input dynamic",attrs:{type:"checkbox",id:"isTrueCheck"},domProps:{checked:Array.isArray(a.fieldInfo.value)?e._i(a.fieldInfo.value,null)>-1:a.fieldInfo.value},on:{change:function(t){var r=a.fieldInfo.value,s=t.target,i=!!s.checked;if(Array.isArray(r)){var o=null,n=e._i(r,o);s.checked?n<0&&e.$set(a.fieldInfo,"value",r.concat([o])):n>-1&&e.$set(a.fieldInfo,"value",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(a.fieldInfo,"value",i)}}}),t("span",{staticClass:"slider round"},[t("span",{staticClass:"slider-yes"},[e._v("Shift View")]),t("span",{staticClass:"slider-no"},[e._v("Day View")])])])])]}}])}),t("div",{staticClass:"row placeholder"},[t("div",{staticClass:"col-md-12 p-0"},[e.parameter.length>0?t("ReportViewer",{attrs:{parameter:e.parameter,reportPath:e.reportPath}}):e._e()],1)])],1)}),o=[],n=a("9769"),l=function(){var e=this;e._self._c;return e._m(0)},c=[function(){var e=this,t=e._self._c;return t("div",{staticStyle:{height:"600px"}},[t("div",{staticStyle:{width:"100%","min-height":"650px","margin-bottom":"0%",height:"auto"},attrs:{id:"viewer"}})])}],p=(a("240d"),{props:{reportPath:null,parameter:null},data:function(){return{Token:null}},created:function(){this.Token=this.GetUserInfo.Token},mounted(){var e=this;setTimeout((function(){$("#viewer").boldReportViewer({reportServiceUrl:"https://qatestnewapi.talygen.com/api/ReportViewer",reportPath:e.reportPath,processingMode:"Remote",parameters:e.parameter,reportServerUrl:"http://172.22.23.102/ReportServer",ajaxBeforeLoad:e.setReportToken})}),2e3)},methods:{setReportToken:function(e){e.headers.push({Key:"content-type",Value:"application/json;charset=UTF-8"}),e.headers.push({Key:"Authorization",Value:"Bearer "+this.Token})}}}),d=p,m=(a("dd20"),a("2877")),u=Object(m["a"])(d,l,c,!1,null,null,null),h=u.exports,f={components:{ReportViewer:h},props:{fromDate:{type:Object},ToDate:{type:Object}},data(){return{reportPath:null,parameter:[],FormSchema:[{layoutType:"triple",Data:[{astype:"MultiSelectField",label:this.$t("Users"),name:"User",value:"",mode:"tag",placeholder:this.$t("SelectUsers"),config:{options:[]},validationRules:{required:!1}},{astype:"MultiSelectField",label:this.$t("Department"),name:"Department",value:"",mode:"tag",placeholder:"",config:{options:[]},validationRules:{required:!1}},{astype:"SlotField",label:this.$t("ShiftDayView"),name:"IsShiftView",value:!1,placeholder:""}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}]}},created(){this.BindListing()},methods:{BindListing:async function(){var e=this;if("Users"==e.FormSchema[0].Data[0].label){var t="id=&modulename=Timer&type=USERS&search=&refId=";await n["a"].GetDDLData(t).then(t=>{var a=t.data.DATA;null!=a&&a.forEach((function(t,a){e.FormSchema[0].Data[0].config.options.push({name:t.name,value:t.value})}))})}if("Department"==this.FormSchema[0].Data[1].label){t="id=&modulename=Timer&type=DEPARTMENT&search=&refId=";await n["a"].GetDDLData(t).then(t=>{var a=t.data.DATA;null!=a&&a.forEach((function(t,a){e.FormSchema[0].Data[1].config.options.push({name:t.name,value:t.value})}))})}},async onSubmit(e){var t=this;t.reportPath="",t.parameter=[];let a={reportName:"timerusertrackingreport",userIds:e.User.length>0?e.User.map(e=>e.value).join(","):null,DeparmentIds:e.Department.length>0?e.Department.map(e=>e.value).join(","):null,dateFrom:t.$options.filters.formatDateYear(t.fromDate),dateTo:t.$options.filters.formatDateYear(t.ToDate),IsShiftView:0==e.IsShiftView?"NO":"YES"};await n["a"].ReportMain(a).then((function(e){console.log(e),t.reportPath=e.data.reportpath,t.parameter=e.data.parameters}))},ClearAll:function(){var e=this;e.FormSchema[0].Data[0].value="",e.FormSchema[0].Data[1].value="",e.parameter=[]}}},v=f,b=Object(m["a"])(v,i,o,!1,null,null,null),D=b.exports,y=function(){var e=this,t=e._self._c;return t("div",[t("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit},scopedSlots:e._u([{key:"tgslot-IsShiftView",fn:function({data:a}){return[t("div",{staticClass:"mt-2 labelalign col-control-right"},[t("label",{class:{switch:!0,"switch enabled":1==a.fieldInfo.value}},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.fieldInfo.value,expression:"data.fieldInfo.value"}],staticClass:"form-check-input rdoticketfor custom-control-input dynamic",attrs:{type:"checkbox",id:"isTrueCheck"},domProps:{checked:Array.isArray(a.fieldInfo.value)?e._i(a.fieldInfo.value,null)>-1:a.fieldInfo.value},on:{change:function(t){var r=a.fieldInfo.value,s=t.target,i=!!s.checked;if(Array.isArray(r)){var o=null,n=e._i(r,o);s.checked?n<0&&e.$set(a.fieldInfo,"value",r.concat([o])):n>-1&&e.$set(a.fieldInfo,"value",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(a.fieldInfo,"value",i)}}}),t("span",{staticClass:"slider round"},[t("span",{staticClass:"slider-yes"},[e._v("Shift View")]),t("span",{staticClass:"slider-no"},[e._v("Day View")])])])])]}}])}),t("div",{staticClass:"row placeholder"},[t("div",{staticClass:"col-md-12 p-0"},[e.parameter.length>0?t("ReportViewer",{attrs:{parameter:e.parameter,reportPath:e.reportPath}}):e._e()],1)])],1)},g=[],S={components:{ReportViewer:h},props:{fromDate:{type:Object},ToDate:{type:Object}},data(){return{reportPath:null,parameter:[],FormSchema:[{layoutType:"triple",Data:[{astype:"MultiSelectField",label:this.$t("Users"),name:"User",value:"",mode:"tag",placeholder:"",validationRules:{required:!1},config:{options:[]}},{astype:"textField",label:this.$t("AppwebName"),name:"AppwebName",value:null,placeholder:this.$t("AppwebName")},{astype:"SlotField",label:this.$t("ShiftDayView"),name:"IsShiftView",value:"",placeholder:""}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}]}},created(){this.GetUsers()},methods:{GetUsers:async function(){var e=this,t="id=&modulename=Timer&type=USERS&search=&refId=";await n["a"].GetDDLData(t).then(t=>{var a=t.data.DATA;null!=a&&a.forEach((function(t,a){e.FormSchema[0].Data[0].config.options.push({name:t.name,value:t.value})}))})},async onSubmit(e){var t=this;t.reportPath="",t.parameter=[];let a={reportName:"extendaedtimereport",userIds:e.User.length>0?e.User.map(e=>e.value).join(","):null,ApplicationIds:e.AppwebName,dateFrom:t.$options.filters.formatDateYear(t.fromDate),dateTo:t.$options.filters.formatDateYear(t.ToDate),IsShiftView:0==e.IsShiftView?"NO":"YES"};await n["a"].ReportMain(a).then((function(e){console.log(e),t.reportPath=e.data.reportpath,t.parameter=e.data.parameters}))},ClearAll:function(){var e=this;e.FormSchema[0].Data[0].value="",e.FormSchema[0].Data[1].value="",e.parameter=[]}}},w=S,C=Object(m["a"])(w,y,g,!1,null,null,null),I=C.exports,_=function(){var e=this,t=e._self._c;return t("div",[t("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit},scopedSlots:e._u([{key:"tgslot-IsShiftView",fn:function({data:a}){return[t("div",{staticClass:"mt-2 labelalign col-control-right"},[t("label",{class:{switch:!0,"switch enabled":1==a.fieldInfo.value}},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.fieldInfo.value,expression:"data.fieldInfo.value"}],staticClass:"form-check-input rdoticketfor custom-control-input dynamic",attrs:{type:"checkbox",id:"isTrueCheck"},domProps:{checked:Array.isArray(a.fieldInfo.value)?e._i(a.fieldInfo.value,null)>-1:a.fieldInfo.value},on:{change:function(t){var r=a.fieldInfo.value,s=t.target,i=!!s.checked;if(Array.isArray(r)){var o=null,n=e._i(r,o);s.checked?n<0&&e.$set(a.fieldInfo,"value",r.concat([o])):n>-1&&e.$set(a.fieldInfo,"value",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(a.fieldInfo,"value",i)}}}),t("span",{staticClass:"slider round"},[t("span",{staticClass:"slider-yes"},[e._v("Shift View")]),t("span",{staticClass:"slider-no"},[e._v("Day View")])])])])]}}])}),t("div",{staticClass:"row placeholder"},[t("div",{staticClass:"col-md-12 p-0"},[e.parameter.length>0?t("ReportViewer",{attrs:{parameter:e.parameter,reportPath:e.reportPath}}):e._e()],1)])],1)},A=[],T={components:{ReportViewer:h},props:{fromDate:{type:Object},ToDate:{type:Object}},data(){return{reportPath:null,parameter:[],FormSchema:[{layoutType:"triple",Data:[{astype:"MultiSelectField",label:this.$t("Users"),name:"User",value:"",mode:"tag",placeholder:this.$t("SelectUsers"),config:{options:[]}},{astype:"textField",label:this.$t("Departmentproject"),name:"Departmentproject",value:null,placeholder:this.$t("Departmentproject"),config:{options:[]}},{astype:"SlotField",label:this.$t("ShiftDayView"),name:"IsShiftView",value:"",placeholder:""}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}]}},created(){this.GetUsers()},methods:{GetUsers:async function(){var e=this,t="id=&modulename=Timer&type=USERS&search=&refId=";await n["a"].GetDDLData(t).then(t=>{var a=t.data.DATA;null!=a&&a.forEach((function(t,a){e.FormSchema[0].Data[0].config.options.push({name:t.name,value:t.value})}))})},async onSubmit(e){var t=this;t.reportPath="",t.parameter=[];let a={reportName:"timerlateemployeesreport",userIds:e.User.length>0?e.User.map(e=>e.value).join(","):null,DeparmentIds:e.Departmentproject,dateFrom:t.$options.filters.formatDateYear(t.fromDate),dateTo:t.$options.filters.formatDateYear(t.ToDate),IsShiftView:0==e.IsShiftView?"NO":"YES"};await n["a"].ReportMain(a).then((function(e){console.log(e),t.reportPath=e.data.reportpath,t.parameter=e.data.parameters}))},ClearAll:function(){var e=this;e.FormSchema[0].Data[0].value="",e.FormSchema[0].Data[1].value="",e.parameter=[]}}},x=T,k=Object(m["a"])(x,_,A,!1,null,null,null),F=k.exports,R=function(){var e=this,t=e._self._c;return t("div",[t("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit},scopedSlots:e._u([{key:"tgslot-IsShiftView",fn:function({data:a}){return[t("div",{staticClass:"mt-2 labelalign col-control-right"},[t("label",{class:{switch:!0,"switch enabled":1==a.fieldInfo.value}},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.fieldInfo.value,expression:"data.fieldInfo.value"}],staticClass:"form-check-input rdoticketfor custom-control-input dynamic",attrs:{type:"checkbox",id:"isTrueCheck"},domProps:{checked:Array.isArray(a.fieldInfo.value)?e._i(a.fieldInfo.value,null)>-1:a.fieldInfo.value},on:{change:function(t){var r=a.fieldInfo.value,s=t.target,i=!!s.checked;if(Array.isArray(r)){var o=null,n=e._i(r,o);s.checked?n<0&&e.$set(a.fieldInfo,"value",r.concat([o])):n>-1&&e.$set(a.fieldInfo,"value",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(a.fieldInfo,"value",i)}}}),t("span",{staticClass:"slider round"},[t("span",{staticClass:"slider-yes"},[e._v("Shift View")]),t("span",{staticClass:"slider-no"},[e._v("Day View")])])])])]}}])}),t("div",{staticClass:"row placeholder"},[t("div",{staticClass:"col-md-12 p-0"},[e.parameter.length>0?t("ReportViewer",{attrs:{parameter:e.parameter,reportPath:e.reportPath}}):e._e()],1)])],1)},Y=[],U={components:{ReportViewer:h},props:{fromDate:{type:Object},ToDate:{type:Object}},data(){return{reportPath:null,parameter:[],FormSchema:[{layoutType:"triple",Data:[{astype:"MultiSelectField",label:this.$t("Appweb"),name:"Appweb",value:"",mode:"tag",placeholder:"",config:{options:[]}},{astype:"MultiSelectField",label:this.$t("Users"),name:"User",value:"",mode:"tag",placeholder:this.$("SelectUsers"),config:{options:[]}},{astype:"SlotField",label:this.$t("ShiftDayView"),name:"IsShiftView",value:"",placeholder:""}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}]}},created(){this.BindListing()},methods:{BindListing:async function(){var e=this,t="pageSize=1000&sortBy=ApplicationName&sortExp=ASC";if("Application/Website"==e.FormSchema[0].Data[0].label&&await n["a"].GetScreenShotListing(t).then(t=>{var a=t.data;null!=a&&a.forEach((function(t,a){e.FormSchema[0].Data[0].config.options.push({name:t.application_display_name,value:t.ApplicationId})}))}),"Users"==e.FormSchema[0].Data[1].label){var a="id=&modulename=Timer&type=USERS&search=&refId=";await n["a"].GetDDLData(a).then(t=>{var a=t.data.DATA;null!=a&&a.forEach((function(t,a){e.FormSchema[0].Data[1].config.options.push({name:t.name,value:t.value})}))})}},async onSubmit(e){var t=this;t.reportPath="",t.parameter=[];let a={reportName:"TimerUnproductiveAppReport",userIds:e.User.length>0?e.User.map(e=>e.value).join(","):null,ApplicationIds:e.Appweb.length>0?e.Appweb.map(e=>e.value).join(","):null,dateFrom:t.$options.filters.formatDateYear(t.fromDate),dateTo:t.$options.filters.formatDateYear(t.ToDate),IsShiftView:0==e.IsShiftView?"NO":"YES"};await n["a"].ReportMain(a).then((function(e){console.log(e),t.reportPath=e.data.reportpath,t.parameter=e.data.parameters}))},ClearAll:function(){var e=this;e.FormSchema[0].Data[0].value="",e.FormSchema[0].Data[1].value="",e.parameter=[]}}},V=U,E=Object(m["a"])(V,R,Y,!1,null,null,null),M=E.exports,P=function(){var e=this,t=e._self._c;return t("div",[t("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit},scopedSlots:e._u([{key:"tgslot-IsShiftView",fn:function({data:a}){return[t("div",{staticClass:"mt-2 labelalign col-control-right"},[t("label",{class:{switch:!0,"switch enabled":1==a.fieldInfo.value}},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.fieldInfo.value,expression:"data.fieldInfo.value"}],staticClass:"form-check-input rdoticketfor custom-control-input dynamic",attrs:{type:"checkbox",id:"isTrueCheck"},domProps:{checked:Array.isArray(a.fieldInfo.value)?e._i(a.fieldInfo.value,null)>-1:a.fieldInfo.value},on:{change:function(t){var r=a.fieldInfo.value,s=t.target,i=!!s.checked;if(Array.isArray(r)){var o=null,n=e._i(r,o);s.checked?n<0&&e.$set(a.fieldInfo,"value",r.concat([o])):n>-1&&e.$set(a.fieldInfo,"value",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(a.fieldInfo,"value",i)}}}),t("span",{staticClass:"slider round"},[t("span",{staticClass:"slider-yes"},[e._v("Shift View")]),t("span",{staticClass:"slider-no"},[e._v("Day View")])])])])]}}])}),t("div",{staticClass:"row placeholder"},[t("div",{staticClass:"col-md-12 p-0"},[e.parameter.length>0?t("ReportViewer",{attrs:{parameter:e.parameter,reportPath:e.reportPath}}):e._e()],1)])],1)},j=[],N={components:{ReportViewer:h},props:{fromDate:{type:Object},ToDate:{type:Object}},data(){return{reportPath:null,parameter:[],FormSchema:[{layoutType:"four",Data:[{astype:"MultiSelectField",label:this.$t("Appweb"),name:"Appweb",value:"",mode:"tag",placeholder:"",config:{options:[]}},{astype:"MultiSelectField",label:this.$t("Department"),name:"Department",value:"",mode:"tag",placeholder:"",config:{options:[]}},{astype:"MultiSelectField",label:this.$t("Users"),name:"User",value:"",mode:"tag",placeholder:"",config:{options:[]}},{astype:"SlotField",label:this.$t("ShiftDayView"),name:"IsShiftView",value:"",placeholder:""}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}]}},created(){this.BindListing()},methods:{BindListing:async function(){var e=this,t="pageSize=1000&sortBy=ApplicationName&sortExp=ASC";if("Application/Website"==e.FormSchema[0].Data[0].label&&await n["a"].GetScreenShotListing(t).then(t=>{var a=t.data;null!=a&&a.forEach((function(t,a){e.FormSchema[0].Data[0].config.options.push({name:t.application_display_name,value:t.ApplicationId})}))}),"Department"==e.FormSchema[0].Data[1].label){var a="id=&modulename=Timer&type=DEPARTMENT&search=&refId=";await n["a"].GetDDLData(a).then(t=>{var a=t.data.DATA;null!=a&&a.forEach((function(t,a){e.FormSchema[0].Data[1].config.options.push({name:t.name,value:t.value})}))})}if("Users"==this.FormSchema[0].Data[2].label){a="id=&modulename=Timer&type=USERS&search=&refId=";await n["a"].GetDDLData(a).then(t=>{var a=t.data.DATA;null!=a&&a.forEach((function(t,a){e.FormSchema[0].Data[2].config.options.push({name:t.name,value:t.value})}))})}},async onSubmit(e){var t=this;t.reportPath="",t.parameter=[];let a={reportName:"TimerIdleTimeReport",userIds:e.User.length>0?e.User.map(e=>e.value).join(","):null,DeparmentIds:e.Department.length>0?e.Department.map(e=>e.value).join(","):null,ApplicationIds:e.Appweb.length>0?e.Appweb.map(e=>e.value).join(","):null,dateFrom:t.$options.filters.formatDateYear(t.fromDate),dateTo:t.$options.filters.formatDateYear(t.ToDate),IsShiftView:0==e.IsShiftView?"NO":"YES"};await n["a"].ReportMain(a).then((function(e){console.log(e),t.reportPath=e.data.reportpath,t.parameter=e.data.parameters}))},ClearAll:function(){var e=this;e.FormSchema[0].Data[0].value="",e.FormSchema[0].Data[1].value="",e.FormSchema[0].Data[2].value="",e.parameter=[]}}},O=N,L=Object(m["a"])(O,P,j,!1,null,null,null),G=L.exports,K=function(){var e=this,t=e._self._c;return t("div",[t("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit},scopedSlots:e._u([{key:"tgslot-IsShiftView",fn:function({data:a}){return[t("div",{staticClass:"mt-2 labelalign col-control-right"},[t("label",{class:{switch:!0,"switch enabled":1==a.fieldInfo.value}},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.fieldInfo.value,expression:"data.fieldInfo.value"}],staticClass:"form-check-input rdoticketfor custom-control-input dynamic",attrs:{type:"checkbox",id:"isTrueCheck"},domProps:{checked:Array.isArray(a.fieldInfo.value)?e._i(a.fieldInfo.value,null)>-1:a.fieldInfo.value},on:{change:function(t){var r=a.fieldInfo.value,s=t.target,i=!!s.checked;if(Array.isArray(r)){var o=null,n=e._i(r,o);s.checked?n<0&&e.$set(a.fieldInfo,"value",r.concat([o])):n>-1&&e.$set(a.fieldInfo,"value",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(a.fieldInfo,"value",i)}}}),t("span",{staticClass:"slider round"},[t("span",{staticClass:"slider-yes"},[e._v("Shift View")]),t("span",{staticClass:"slider-no"},[e._v("Day View")])])])])]}}])}),t("div",{staticClass:"row placeholder"},[t("div",{staticClass:"col-md-12 p-0"},[e.parameter.length>0?t("ReportViewer",{attrs:{parameter:e.parameter,reportPath:e.reportPath}}):e._e()],1)])],1)},B=[],z={components:{ReportViewer:h},props:{fromDate:{type:Object},ToDate:{type:Object}},data(){return{reportPath:null,parameter:[],FormSchema:[{layoutType:"four",Data:[{astype:"MultiSelectField",label:this.$t("Appweb"),name:"Appweb",value:"",mode:"tag",placeholder:"",config:{options:[]}},{astype:"MultiSelectField",label:this.$t("Department"),name:"Department",value:"",mode:"tag",placeholder:"",config:{options:[]}},{astype:"MultiSelectField",label:"Users",name:"User",value:"",mode:"tag",placeholder:"",config:{options:[]}},{astype:"SlotField",label:this.$t("ShiftDayView"),name:"IsShiftView",value:"",placeholder:""}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}]}},created(){this.BindListing()},methods:{BindListing:async function(){var e=this,t="pageSize=1000&sortBy=ApplicationName&sortExp=ASC";if("Application/Website"==e.FormSchema[0].Data[0].label&&await n["a"].GetScreenShotListing(t).then(t=>{var a=t.data;null!=a&&a.forEach((function(t,a){e.FormSchema[0].Data[0].config.options.push({name:t.application_display_name,value:t.ApplicationId})}))}),"Department"==e.FormSchema[0].Data[1].label){var a="id=&modulename=Timer&type=DEPARTMENT&search=&refId=";await n["a"].GetDDLData(a).then(t=>{var a=t.data.DATA;null!=a&&a.forEach((function(t,a){e.FormSchema[0].Data[1].config.options.push({name:t.name,value:t.value})}))})}if("Users"==this.FormSchema[0].Data[2].label){a="id=&modulename=Timer&type=USERS&search=&refId=";await n["a"].GetDDLData(a).then(t=>{var a=t.data.DATA;null!=a&&a.forEach((function(t,a){e.FormSchema[0].Data[2].config.options.push({name:t.name,value:t.value})}))})}},async onSubmit(e){var t=this;t.reportPath="",t.parameter=[];let a={reportName:"TimerAppWebsiteUsageReport",userIds:e.User.length>0?e.User.map(e=>e.value).join(","):null,DeparmentIds:e.Department.length>0?e.Department.map(e=>e.value).join(","):null,ApplicationIds:e.Appweb.length>0?e.Appweb.map(e=>e.value).join(","):null,dateFrom:t.$options.filters.formatDateYear(t.fromDate),dateTo:t.$options.filters.formatDateYear(t.ToDate),IsShiftView:0==e.IsShiftView?"NO":"YES"};await n["a"].ReportMain(a).then((function(e){console.log(e),t.reportPath=e.data.reportpath,t.parameter=e.data.parameters}))},ClearAll:function(){var e=this;e.FormSchema[0].Data[0].value="",e.FormSchema[0].Data[1].value="",e.FormSchema[0].Data[2].value="",e.parameter=[]}}},Q=z,W=Object(m["a"])(Q,K,B,!1,null,null,null),q=W.exports,J=function(){var e=this,t=e._self._c;return t("div",[t("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit},scopedSlots:e._u([{key:"tgslot-IsShiftView",fn:function({data:a}){return[t("div",{staticClass:"mt-2 labelalign col-control-right"},[t("label",{class:{switch:!0,"switch enabled":1==a.fieldInfo.value}},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.fieldInfo.value,expression:"data.fieldInfo.value"}],staticClass:"form-check-input rdoticketfor custom-control-input dynamic",attrs:{type:"checkbox",id:"isTrueCheck"},domProps:{checked:Array.isArray(a.fieldInfo.value)?e._i(a.fieldInfo.value,null)>-1:a.fieldInfo.value},on:{change:function(t){var r=a.fieldInfo.value,s=t.target,i=!!s.checked;if(Array.isArray(r)){var o=null,n=e._i(r,o);s.checked?n<0&&e.$set(a.fieldInfo,"value",r.concat([o])):n>-1&&e.$set(a.fieldInfo,"value",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(a.fieldInfo,"value",i)}}}),t("span",{staticClass:"slider round"},[t("span",{staticClass:"slider-yes"},[e._v("Shift View")]),t("span",{staticClass:"slider-no"},[e._v("Day View")])])])])]}}])}),t("div",{staticClass:"row placeholder"},[t("div",{staticClass:"col-md-12 p-0"},[e.parameter.length>0?t("ReportViewer",{attrs:{parameter:e.parameter,reportPath:e.reportPath}}):e._e()],1)])],1)},H=[],X={components:{ReportViewer:h},props:{fromDate:{type:Object},ToDate:{type:Object}},data(){return{reportPath:null,parameter:[],DataLoaded:0,FormSchema:[{layoutType:"triple",Data:[{astype:"MultiSelectField",label:"Users",name:"User",value:"",mode:"tag",placeholder:"",config:{options:[]}},{astype:"MultiSelectField",label:this.$t("Category"),name:"Category",value:"",mode:"tag",placeholder:"",config:{options:[]}},{astype:"SlotField",label:this.$t("ShiftDayView"),name:"IsShiftView",value:"",placeholder:""}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}]}},created:async function(){await this.GetUsers(),this.GetCategory(),this.DataLoaded=1},methods:{GetUsers:async function(){var e=this,t="id=&modulename=Timer&type=USERS&search=&refId=";await n["a"].GetDDLData(t).then(t=>{var a=t.data.DATA;null!=a&&a.forEach((function(t,a){e.FormSchema[0].Data[0].config.options.push({name:t.name,value:t.value})}))})},GetCategory:function(){var e=this,t="pageSize=500&sortBy=category_name&sortExp=ASC";n["a"].GetCategoryListing(t).then(t=>{var a=JSON.parse(t.data);null!=a&&a.data.forEach((function(t,a){e.FormSchema[0].Data[1].config.options.push({name:t.category_name,value:""+t.category_id})}))})},async onSubmit(e){var t=this;t.reportPath="",t.parameter=[];let a={reportName:"timercategoryreport",userIds:e.User.length>0?e.User.map(e=>e.value).join(","):null,categoryIds:e.Category.length>0?e.Category.map(e=>e.value).join(","):null,dateFrom:t.$options.filters.formatDateYear(t.fromDate),dateTo:t.$options.filters.formatDateYear(t.ToDate),IsShiftView:0==e.IsShiftView?"NO":"YES"};await n["a"].ReportMain(a).then((function(e){console.log(e),t.reportPath=e.data.reportpath,t.parameter=e.data.parameters}))},ClearAll:function(){var e=this;e.FormSchema[0].Data[0].value="",e.FormSchema[0].Data[1].value="",e.parameter=[]}}},Z=X,ee=Object(m["a"])(Z,J,H,!1,null,null,null),te=ee.exports,ae=a("c1df"),re=a.n(ae),se={components:{UserTrackingreport:D,ExceedTimeReport:I,LateEmployees:F,UnproductiveApp:M,Ideltime:G,AppWebsiteUsage:q,Category:te},data(){return{activeKey:0,tabNames:["UserTrackingReport","ExceededTimeReport","LateEmployees","UnproductiveAppsReport","IdleTimeReport","AppwebsiteusageReport","CategoryReport"],searchQuery:"",updateMonthRange:!1,fromDate:"",ToDate:"",startDate:new Date,endDate:new Date,monthStartDate:new Date,monthEndDate:new Date,dateType:"MM",monthRange:{start:this.monthStartDate,end:this.monthEndDate},updateMonthDiff:!1}},mounted(){this.activateTab(0)},computed:{filteredTabs(){if(!this.searchQuery)return this.tabNames.map((e,t)=>({name:e,index:t,icon:this.getTabIcon(e)}));const e=this.searchQuery.toLowerCase();return this.tabNames.map((e,t)=>({name:e,index:t,icon:this.getTabIcon(e)})).filter(t=>this.$t(t.name).toLowerCase().includes(e))},activeTabName(){return this.tabNames[this.activeKey]}},created(){var e=this;e.GetRangeDates()},methods:{GetRangeDates(){var e=this,t=re()(e.monthStartDate).subtract(1,"months"),a=re()(e.monthEndDate),r=re()(a._d,"YYYY");e.monthStartDate=parseInt(t.format("YYYY"))+"-"+parseInt(t.format("M"))+"-"+parseInt(t.format("D")),e.monthEndDate=parseInt(r.format("YYYY"))+"-"+parseInt(r.format("M"))+"-"+parseInt(r.format("D")),e.monthRange={start:new Date(e.monthStartDate),end:new Date(e.monthEndDate)}},onMonthSelected(e){var t=this;t.monthRange=[],t.monthRange={start:e.start,end:e.end},t.monthStartDate=e.start,t.monthEndDate=e.end},goToPreviousMonth(){var e=this;if(e.monthRange.start&&e.monthRange.end){const i=new Date(e.monthRange.start),o=new Date(e.monthRange.end),n=Math.abs(o-i),l=Math.ceil(n/864e5);var t=re()(i).subtract(l+1,"days"),a=re()(i).subtract(1,"days"),r=re()(t._d,"YYYY"),s=re()(a._d,"YYYY");e.monthStartDate=parseInt(r.format("YYYY"))+"-"+parseInt(r.format("M"))+"-"+parseInt(r.format("D")),e.monthEndDate=parseInt(s.format("YYYY"))+"-"+parseInt(s.format("M"))+"-"+parseInt(s.format("D")),e.monthRange=[],e.monthRange={start:new Date(e.monthStartDate),end:new Date(e.monthEndDate)}}},goToNextMonth(){var e=this;if(e.monthRange.start&&e.monthRange.end){const i=new Date(e.monthRange.start),o=new Date(e.monthRange.end),n=Math.abs(o-i),l=Math.ceil(n/864e5);var t=re()(o).add(1,"days"),a=re()(o).add(l+1,"days"),r=re()(t._d,"YYYY"),s=re()(a._d,"YYYY");e.monthStartDate=parseInt(r.format("YYYY"))+","+parseInt(r.format("M"))+","+parseInt(r.format("D")),e.monthEndDate=parseInt(s.format("YYYY"))+","+parseInt(s.format("M"))+","+parseInt(s.format("D")),e.monthRange=[],e.monthRange={start:new Date(e.monthStartDate),end:new Date(e.monthEndDate)}}},ConvertDateFormat(e){var t=new Date(e),a=("0"+(t.getMonth()+1)).slice(-2),r=("0"+t.getDate()).slice(-2),s=[t.getFullYear(),a,r].join("-");e=s+" 23:59:59";return new Date(e)},getTabIcon(e){switch(e){case"UserTrackingReport":return"fa fa-calendar";case"ExceededTimeReport":return"fa fa-clock-o";case"LateEmployees":return"fa fa-user-circle-o";case"UnproductiveAppsReport":return"fa fa-info-circle";case"IdleTimeReport":return"fa fa-clock-o";case"AppwebsiteusageReport":return"fa fa-desktop";case"CategoryReport":return"fa fa-file-text";default:return""}},activateTab(e){this.activeKey=e},formatDuration(e){const t=Math.floor(e),a=Math.round(60*(e-t));return`${t}h ${a}m`},getTimeRanges(e){const t=[],a=new Date,r={hour:"numeric",minute:"numeric"};for(let s=0;s<1440;s+=e)a.setHours(0),a.setMinutes(s),t.push(a.toLocaleTimeString("en",r));return t}}},ie=se,oe=(a("2b64"),Object(m["a"])(ie,r,s,!1,null,null,null));t["default"]=oe.exports},d65e:function(e,t,a){var r=a("fd21");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var s=a("499e").default;s("aef85994",r,!0,{sourceMap:!1,shadowMode:!1})},dd20:function(e,t,a){"use strict";a("d65e")},fd21:function(e,t,a){var r=a("24fb");t=r(!1),t.push([e.i,"*,:after,:before{box-sizing:border-box;margin:0;position:unset}",""]),e.exports=t}}]);
//# sourceMappingURL=chunk-6665473d.js.map