(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7be7"],{"77b3":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("loader",{attrs:{"is-visible":e.isLoading}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-2 mt-2"},[a("LeftColumn")],1),a("div",{staticClass:"col-10"},[a("div",{staticClass:"padding-t_8"},[a("div",{staticClass:"theme-primary partition-full"},[a("span",{staticClass:"p-name text-white"},[e._v(e._s(e.$t("CurrencyManagement")))])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"form-group"},[e._m(0),a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedCurrency,expression:"selectedCurrency"}],staticClass:"form-control mr-3",attrs:{name:"select"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedCurrency=t.target.multiple?a:a[0]},function(t){return e.ChangeCurrencyUpdate(e.selectedCurrency)}]}},[a("option",{attrs:{value:"",disabled:""},domProps:{selected:e.selectedCurrency}},[e._v("Select")]),e._l(e.CurrencyList,(function(t){return a("option",{domProps:{value:t.value}},[e._v(e._s(t.name))])}))],2)])]),a("div",{staticClass:"listing mt-3 px-3"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered dt-responsive nowrap mt-0 dataTable no-footer dtr-inline",attrs:{id:"tbContainer"}},[a("thead",{staticClass:"thead-bg"},[a("tr",[e._l(e.Headers,(function(t,n){return a("th",{key:n},[e._v(e._s(t)+":")])})),a("th",[e._v("Automatic:")]),a("th",{staticClass:"text-center single-action"},[a("div",{staticClass:"round-icon-small btn-success-light d-block float-none m-auto",staticStyle:{"line-height":"33px"},attrs:{title:"Add"},on:{click:function(t){return e.AddRow()}}},[a("i",{staticClass:"fa fa-plus"})])])],2)]),a("tbody",e._l(e.CurrencyManagementData,(function(t,n){return a("tr",{key:n,staticClass:"mainleveldiv"},[a("td",{staticClass:"d-flex"},[a("select",{staticClass:"form-control mr-3",attrs:{name:"select",name:"select_"+n}},[a("option",[e._v("Select")]),e._l(e.CurrencyList,(function(t){return a("option",{domProps:{value:t.value}},[e._v(e._s(t.name))])}))],2),a("input",{directives:[{name:"model",rawName:"v-model",value:JSON.parse(t.source_currency_id).value,expression:"JSON.parse(item.source_currency_id).value"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Cost",disabled:""},domProps:{value:JSON.parse(t.source_currency_id).value},on:{input:function(a){a.target.composing||e.$set(JSON.parse(t.source_currency_id),"value",a.target.value)}}})]),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedCurrency,expression:"selectedCurrency"}],staticClass:"form-control mr-3",attrs:{name:"select",disabled:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedCurrency=t.target.multiple?a:a[0]}}},e._l(e.CurrencyList,(function(t){return a("option",{domProps:{value:t.value}},[e._v(e._s(t.name))])})),0)]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.currency_rate,expression:"item.currency_rate"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Rate"},domProps:{value:t.currency_rate},on:{input:function(a){a.target.composing||e.$set(t,"currency_rate",a.target.value)}}})]),a("td",{staticClass:"text-center"},[a("div",{staticClass:"form-check form-check-inline  checkbox-inline font-weight-light"},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"form-check-input custom-control-input",attrs:{type:"checkbox",id:"chk_"+n}}),a("label",{staticClass:"custom-control-label universal-custom-control-label pt-1",attrs:{for:"chk_"+n}})])])]),a("td",{staticClass:"text-center single-action"},[a("div",{staticClass:"round-icon-small btn-danger-light d-block float-none m-auto",attrs:{id:"btnRemove",title:"Remove"},on:{click:function(t){return e.DeleteRow(n)}}},[a("i",{staticClass:"fa fa-trash"})])])])})),0)])])])])])]),e.showCurrencyManagement?a("AddCompanySetup",{attrs:{recordId:e.recordId,title:e.$t("CAManageCurrencyManagement"),moduleName:"CurrencyManagement",emitName:"addReloadData",addApiUrl:"/CurrencyManagement/add",subModule:"CurrencyManagement"},on:{close:function(t){e.showCurrencyManagement=!1,e.recordId=0},addReloadData:function(t){e.FetchData(),e.showCurrencyManagement=!1,e.recordId=0}}}):e._e()],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",[e._v("Company's Base Currency:"),a("span",{staticClass:"text-danger"},[e._v("*")])])}],i=(a("14d9"),a("9769"));let o=[{title:"Add",iconClass:"fa-plus",callbackfunction:"AddDepartment",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0},{id:"ActiveMultiple",title:"Active",iconClass:"fa-check",callbackfunction:"ActiveMultipleListing",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0},{id:"InactiveMultiple",title:"Inactive",iconClass:"fa-close",callbackfunction:"InactiveMultipleListing",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0},{id:"DeleteMultiple",title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",isdisabled:!0,isvisible:!0}],s=[{fieldName:"source_currency_id",fieldType:"ddl-check",fieldIcon:"fa-map-marker",fieldSearchConditionName:[],isSearch:!1,value:null,listOptions:[]}],c=[{title:"View",callbackfunction:"ViewReport",icon:"fa fa-eye action-icon",additionalSpan:""},{title:"Edit",callbackfunction:"editreport",icon:"fa fa-pencil text-success action-icon",additionalSpan:""},{title:"Send Email",callbackfunction:"sendemail",href:"javascript:void(0)",icon:"fa fa-paper-plane text-success action-icon",additionalSpan:""},{title:"Schedule",callbackfunction:"setschedule",href:"javascript:void(0)",icon:"fa fa-clock-o text-warning action-icon",additionalSpan:""},{title:"Share",callbackfunction:"sharereport",href:"javascript:void(0)",icon:"fa fa-share-alt text-success action-icon",additionalSpan:""}];function l(){var e=this,t="id=&moduleName=CurrencyManagement&type=CURRENCIES_LIST&search=&refId=";i["a"].CurrencyManagementCurrencyDropdown(t).then((function(t){""!=t.data.result&&null!=t.data.result&&t.data.result.DATA.length>0&&t.data.result.DATA.forEach(t=>{let a={value:t.value,name:t.name};e.topsearchSchema[0].listOptions.push(a)})}))}function d(e,t,a){var n=e;let r=a,o={};o["moduleName"]=t,o["type"]=a,i["a"].GetMainReportSearching(r).then((function(e){console.log(leftsearchSchema);var t=e.data;console.log("folderid",t),null!=t&&("FOLDER_NAME"==a&&(n.leftSearchFields[4].listOptions=t.map(e=>{const t={};return t.name=e.FOLDER_NAME,t.value=e.FOLDER_ID.toString(),t}),n.LeadStatusList=t.map(e=>{const t={};return t.name=e.FOLDER_NAME,t.value=e.FOLDER_ID.toString(),t})),"CREATED_BY"==a&&(n.leftSearchFields[3].listOptions=t.map(e=>{const t={};return t.name=e.CREATED_BY,t.value=e.CREATED_ID.toString(),t}),n.LeadStatusList=t.map(e=>{const t={};return t.name=e.CREATED_BY,t.value=e.CREATED_ID.toString(),t})),"MODIFIED_BY"==a&&(n.leftSearchFields[7].listOptions=t.map(e=>{const t={};return t.name=e.MODIFIED_BY,t.value=e.MODIFIED_ID.toString(),t}),n.LeadStatusList=t.map(e=>{const t={};return t.name=e.MODIFIED_BY,t.value=e.MODIFIED_ID.toString(),t})))}))}var u={buttons:o,topsearchSchema:s,listActions:c,bindleftCommonSearchdropdown:d,CurrencybindCommondropdown:l},m=a("8dd4"),p=a("aae2"),f=a("b9b9"),C={components:{LeftColumn:p["a"],AddCompanySetup:m["a"]},props:{sourcetype:{type:String,required:!0}},data(){return{recordId:0,showCurrencyManagement:!1,noRecord:!1,isLoading:!1,CompanyId:null,CurrencyManagementData:[],CurrencyList:[],selectedCurrency:"Select",TotalRecords:0,listheaderbuttons:u.buttons,topSearchFields:u.topsearchSchema,ShowManageView:!1,ShowAddCustomReportView:!1,PageSize:10,PageNumber:1,isPaged:1,TotalPages:0,listActions:u.listActions,searchCondition:"",conditionForInstantSearch:"",SortBy:"",SortExp:"",showsharereportview:!1,showemailreportview:!1,showschedulereportview:!1,ReportID:null,reportname:"",reportid:"",foldername:"",folderid:"",LeadStatusList:[],searchcondition:"",MODULENAME:null,SUBMODULECODE:null,privilegeParams:null,sharetype:"",Headers:[],filteredHeaders:[],StatusListForListing:[{STATUS:"Active",STATUS_ID:1001,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#28a745"},{STATUS:"Inactive",STATUS_ID:1002,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#d72435"}]}},async created(){var e=this;e.CompanyId=e.GetUserInfo.CompanyId,e.privilegeParams="controller=CurrencyManagement&action=",await e.FetchData(),u.CurrencybindCommondropdown(),u.bindleftCommonSearchdropdown(e,"Dynamic_Reporting","FOLDER_NAME"),u.bindleftCommonSearchdropdown(e,"Dynamic_Reporting","CREATED_BY"),u.bindleftCommonSearchdropdown(e,"Dynamic_Reporting","MODIFIED_BY"),e.getStatuslistForListing("Dynamic_Reporting","en")},computed:{filteredUserData(){return this.vueObj.UserData.map(e=>{const t={...e};return null!==t.USER_EMP_ID&&""!==t.USER_EMP_ID||(t.USER_EMP_ID="--"),t})}},mounted(){u.topsearchSchema.forEach(e=>{console.log(e),e.value="",e.isSearch=!1})},methods:{AddRow:function(e){var t=this;console.log(t.CurrencyManagementData),t.CurrencyManagementData.push({source_currency_id:'{"Name":null,"value":"1"}',destination_currency_id:'{"Name":null,"value":""}',currency_rate:"0.00"}),console.log(t.CurrencyManagementData)},DeleteRow(e){var t=this;t.confirmR(t.$t("ConfirmManageCurrency"),!0,t.$t("update")+"  "+t.$t("status"),(function(){t.CurrencyManagementData.splice(e,1)}))},ChangeCurrencyUpdate(e){var t=this;t.confirmR(t.$t("ConfirmManageCurrency"),!0,t.$t("update")+"  "+t.$t("status"),(function(){f["c"]}))},renderActions:function(e){console.log(e)},FetchData:async function(){var e=this;this.isLoading=!0,e.CurrencyList=[],e.CurrencyList=u.topsearchSchema[0].listOptions,console.log(e.CurrencyList);var t=`CompanyId=${e.CompanyId}&pageSize=${e.PageSize}&pageNum=${e.PageNumber}&sortBy=${e.SortBy}&sortExp=${e.SortExp}&searchQuery=${e.searchCondition.trim()}`;await i["a"].CurrencyManagementListing(t).then((function(t){const a=["source_currency_id","destination_currency_id","currency_rate","Automatic"];e.filteredHeaders=t.data.FieldSchema.filter(e=>a.includes(e.COLUMN_NAME)),e.Headers=e.filteredHeaders.map(e=>e.DISPLAY_NAME),e.filteredHeaders.forEach(t=>{t.settings=null,"title"==t.COLUMN_NAME&&(t.settings={clickEvent:e.clickEventOfColumn,formatter:e.columnDataFormatter}),"status_id"==t.COLUMN_NAME&&(t.settings={isInSlot:!0})}),""!=t.data.Data&&null!=t.data.Data?(t.data.Data.length>0?(e.CurrencyManagementData=t.data.Data,e.CurrencyManagementData.forEach(e=>{e.created_by=JSON.parse(e.created_by),e.modified_by=JSON.parse(e.modified_by),e.status_id=JSON.parse(e.status_id)}),e.TotalRecords=e.CurrencyManagementData[0].total_records,e.TotalPages=Math.ceil(e.TotalRecords/e.PageSize),e.CurrentPage=e.PageNumber,e.noRecord=!1):(e.ReportData=[],e.noRecord=!0,e.TotalRecords=0),void 0!=localStorage.SavedParameters&&localStorage.removeItem("SavedParameters")):(e.noRecord=!0,e.ReportData=[],e.TotalRecords=0),setTimeout((function(){e.ResponsiveDataTable("tablelistingdata")}),500),e.isLoading=!1}))}}},v=C,h=a("2877"),g=Object(h["a"])(v,n,r,!1,null,null,null);t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d0d7be7.js.map