(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cb2aabd"],{1695:function(e,t,a){var i=a("ee60");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=a("499e").default;o("3f5a8266",i,!0,{sourceMap:!1,shadowMode:!1})},"30ee":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".singleselectlook .multiselect__select:before{z-index:99}.singleselectlook .multiselect__tags{padding:8px 30px 0 8px!important;min-height:36px!important}.singleselectlook .multiselect__input{margin-bottom:0}",""]),e.exports=t},"46ed":function(e,t,a){var i=a("30ee");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=a("499e").default;o("2725a163",i,!0,{sourceMap:!1,shadowMode:!1})},"6d44":function(e,t,a){"use strict";a("1695")},"8dd4":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"my-popups"},[a("div",{staticClass:"modal d-block "},[a("div",{staticClass:"modal-dialog ui-draggable",staticStyle:{display:"inline-block"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header ui-draggable-handle"},[a("h5",{staticClass:"modal-title",attrs:{id:"ui-id-26"}},[e._v(e._s(e.title))]),a("button",{staticClass:"close",attrs:{type:"button",title:"","data-original-title":"Close"},on:{click:function(t){return e.$emit("close")}}},[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"modal-body",staticStyle:{height:"auto","min-height":"0px","max-height":"none"},attrs:{id:"backgroundPopup"}},[a("section",{staticClass:"main-content",attrs:{id:"main-content"}},[a("section",{staticClass:"main-content"},[a("div",{staticClass:"container-fluid p-0"},[a("div",{staticClass:"p-0"},[a("dynamic-form",{ref:"dynamicForm",staticClass:"daterangecontrolHS",attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit}})],1)])])])])])])])])])},o=[],n=a("ed09"),s=a("7bb1"),r=a("b9b9"),l=a("9769");Object(s["c"])("required",{validate(e){return console.log("checkk"),{required:!0,valid:-1===["",null,void 0].indexOf(e)}},message:"The {_field_} is required"});var c=Object(n["defineComponent"])({name:"Manage Departemts",components:{ValidationObserver:s["a"],ValidationProvider:s["b"]},props:{addApiUrl:{type:String},emitName:{type:String},moduleName:{type:String},subModule:{type:String},title:{type:String},recordId:{type:Number}},created:function(){let e=this.recordId?this.recordId:0;this.getForm(e)},methods:{getForm:function(e){var t=this;t.isLoading=!0;var a=`recordId=${e}&moduleName=${this.moduleName}&subModuleCode=${this.subModule}`;l["a"].GetDynamicForm(a).then((function(e){null!=e&&null!=e.data&&(t.isMapFeature=e.data.isFsmLocating,t.FormSchema=t.$refs.dynamicForm.ConvertCustomFieldIntoDynamicFormObj(e.data.data),console.log(t.FormSchema),t.FormSchema.forEach((e,a)=>{e.Data.forEach((a,i)=>{"General Information"==e.group_name&&(e.visibility=!1,"user_name"!=a.name&&"password"!=a.name&&"signature"!=a.name||(a.visibility=!1)),a.config.onChange=t.OnChangeEventsforField})}),t.FormSchema.length>0&&(t.FormSchema[0].visibility=!1),t.isLoading=!1)}))},OnChangeEventsforField:function(e,t,a){let i=this;if("FILL_DEPENDENT"==e){t.config.options=[];var o=`id=&moduleName=${i.moduleName}&type=${t.config.fieldCode}&search=&refId=${a}`;l["a"].GetDDLData(o).then((function(e){if(e.data){var a=e.data;null!=a&&(t.config.options=e.data.DATA,i.$refs.dynamicForm.UpdateKeyValue())}}))}else"payment_gateway_code"==t.name&&137==t.value?i.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{"user_name"==e.name&&(e.visibility=!0,e.label="API Login ID"),"password"==e.name&&(e.visibility=!0,e.label="Transaction Key"),"signature"==e.name&&(e.visibility=!1)})}):"payment_gateway_code"==t.name&&135==t.value?i.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{"user_name"==e.name&&(e.visibility=!0,e.label="User Name"),"password"==e.name&&(e.visibility=!0,e.label="Password"),"signature"==e.name&&(e.visibility=!0)})}):i.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{"user_name"==e.name&&(e.visibility=!0,e.label="Secret Key"),"password"==e.name&&(e.visibility=!0,e.label="Publishable Key"),"signature"==e.name&&(e.visibility=!1)})})},async onSubmit(){let e=Object(r["b"])(this.FormSchema);l["a"].DepartmentAdd(e,this.addApiUrl).then(e=>{null!=e.data.Result&&e.data.Result.MAIN_ID>0?(this.ShowAlert(this.$t("SavedSuccessfully"),"success",!1,this.$t("Alert")),this.$emit(this.emitName)):this.ShowAlert(this.$t(e.data.Status),"danger",!1,this.$t("Alert"))})},closePopup(){this.$emit("close")}},data(){return{editor:this.CLASSIC_EDITOR,department:{name:"",status:{name:"active",id:1},visibaleToclients:!1,visibaleToTicting:!1,description:""},buttons:[{type:"submit",class:"btn btn-success",text:"Save",isVisible:!0},{type:"button",class:"btn btn-danger",text:"Cancel",onClick:this.closePopup}],FormSchema:[],isLoading:!1}}}),d=c,u=(a("f5ac"),a("2877")),m=Object(u["a"])(d,i,o,!1,null,null,null);t["a"]=m.exports},"9b1f":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("loader",{attrs:{"is-visible":e.isLoading}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-2 mt-2"},[a("LeftColumn")],1),a("div",{staticClass:"col-10"},[a("tg-list",{attrs:{IsShowAction:!1,showCheckBox:!0,ModuleName:"Dynamic_Reporting",SubModuleCode:"Dynamic_Reporting",IdentityColumn:"stage_id",HeaderText:e.$t("Stage"),ListData:e.StageData,HeaderData:e.filteredHeaders,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,IsSearchFieldsOnTop:!1,SearchPosition:"top",SearchFields:e.topSearchFields,RenderRowActionMethod:e.renderActions,ListDataCallBackFunction:e.FetchData,IsFilterApplied:!!e.searchCondition,LegendArray:[],sourcetype:"",NorecordfoundText:e.$t("NoRecordfound")},on:{LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,ActionButtonClick:e.actionButtonClick,SortdataButtonClick:e.sortdata},scopedSlots:e._u([{key:"slotdata",fn:function(t){var i=t.data;return["status_id"==i.column.COLUMN_NAME?[e.isCRMShowStausDrop(i.row.status_id,"COMPANYSETUP_UPDATE")?a("listing-status",{ref:"updatestatus",attrs:{isfor:"COMPANYSETUP_UPDATE",dataid:i.row.stage_id,"data-controller":"COMPANYSETUP_UPDATE",statuslist:e.StatusListForListing,item:i.row.stage_id,"data-action":"index",module:"Stage",subModule:"Stage",dataselected:1001==i.row.status_id.value?"Active":"Inactive",callbackfunction:e.FetchData,isselectedvaluestring:!0}}):e._e()]:e._e()]}}])})],1)]),e.showStage?a("AddCompanySetup",{attrs:{recordId:e.recordId,title:e.$t("Manage Stage"),moduleName:"Stage",emitName:"addReloadData",addApiUrl:"/Stage/add",subModule:"Stage"},on:{close:function(t){e.showStage=!1,e.recordId=0},addReloadData:function(t){e.FetchData(),e.showStage=!1,e.recordId=0}}}):e._e()],1)},o=[],n=(a("14d9"),a("b7ef"),a("9769"));let s=[{title:"Add",iconClass:"fa-plus",callbackfunction:"AddStage",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0},{id:"ActiveMultiple",title:"Active",iconClass:"fa-check",callbackfunction:"ActiveMultipleListing",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0},{id:"InactiveMultiple",title:"Inactive",iconClass:"fa-close",callbackfunction:"InactiveMultipleListing",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0},{id:"DeleteMultiple",title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",isdisabled:!0,isvisible:!0}],r=[{fieldName:"Search by Title",fieldType:"text",fieldSearchConditionName:["stage_name"],isSearch:!0}],l=[{title:"View",callbackfunction:"ViewReport",icon:"fa fa-eye action-icon",additionalSpan:""},{title:"Edit",callbackfunction:"editreport",icon:"fa fa-pencil text-success action-icon",additionalSpan:""},{title:"Send Email",callbackfunction:"sendemail",href:"javascript:void(0)",icon:"fa fa-paper-plane text-success action-icon",additionalSpan:""},{title:"Schedule",callbackfunction:"setschedule",href:"javascript:void(0)",icon:"fa fa-clock-o text-warning action-icon",additionalSpan:""},{title:"Share",callbackfunction:"sharereport",href:"javascript:void(0)",icon:"fa fa-share-alt text-success action-icon",additionalSpan:""}];function c(e,t,a){var i=e;let o=a,n={};n["moduleName"]=t,n["type"]=a,DepartmentDataService.GetMainReportSearching(o).then((function(e){console.log(leftsearchSchema);var t=e.data;console.log("folderid",t),null!=t&&("FOLDER_NAME"==a&&(i.leftSearchFields[4].listOptions=t.map(e=>{const t={};return t.name=e.FOLDER_NAME,t.value=e.FOLDER_ID.toString(),t}),i.LeadStatusList=t.map(e=>{const t={};return t.name=e.FOLDER_NAME,t.value=e.FOLDER_ID.toString(),t})),"CREATED_BY"==a&&(i.leftSearchFields[3].listOptions=t.map(e=>{const t={};return t.name=e.CREATED_BY,t.value=e.CREATED_ID.toString(),t}),i.LeadStatusList=t.map(e=>{const t={};return t.name=e.CREATED_BY,t.value=e.CREATED_ID.toString(),t})),"MODIFIED_BY"==a&&(i.leftSearchFields[7].listOptions=t.map(e=>{const t={};return t.name=e.MODIFIED_BY,t.value=e.MODIFIED_ID.toString(),t}),i.LeadStatusList=t.map(e=>{const t={};return t.name=e.MODIFIED_BY,t.value=e.MODIFIED_ID.toString(),t})))}))}var d={buttons:s,topsearchSchema:r,listActions:l,bindleftCommonSearchdropdown:c},u=a("8dd4"),m=a("aae2"),h={components:{LeftColumn:m["a"],AddCompanySetup:u["a"]},props:{sourcetype:{type:String,required:!0}},data(){return{recordId:0,showStage:!1,noRecord:!1,isLoading:!1,CompanyId:null,StageData:[],TotalRecords:0,listheaderbuttons:d.buttons,topSearchFields:d.topsearchSchema,ShowManageView:!1,ShowAddCustomReportView:!1,PageSize:10,PageNumber:1,isPaged:1,TotalPages:0,listActions:d.listActions,searchCondition:"",conditionForInstantSearch:"",SortBy:"",SortExp:"",showsharereportview:!1,showemailreportview:!1,showschedulereportview:!1,ReportID:null,reportname:"",reportid:"",foldername:"",folderid:"",LeadStatusList:[],searchcondition:"",MODULENAME:null,SUBMODULECODE:null,privilegeParams:null,sharetype:"",filteredHeaders:[],StatusListForListing:[{STATUS:"Active",STATUS_ID:1001,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#28a745"},{STATUS:"Inactive",STATUS_ID:1002,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#d72435"}]}},async created(){var e=this;e.CompanyId=e.GetUserInfo.CompanyId,e.privilegeParams="controller=Stage&action=",await e.FetchData(),d.bindleftCommonSearchdropdown(e,"Dynamic_Reporting","FOLDER_NAME"),d.bindleftCommonSearchdropdown(e,"Dynamic_Reporting","CREATED_BY"),d.bindleftCommonSearchdropdown(e,"Dynamic_Reporting","MODIFIED_BY"),e.getStatuslistForListing("Dynamic_Reporting","en")},computed:{filteredUserData(){return this.vueObj.UserData.map(e=>{const t={...e};return null!==t.USER_EMP_ID&&""!==t.USER_EMP_ID||(t.USER_EMP_ID="--"),t})}},mounted(){d.topsearchSchema.forEach(e=>{e.value="",e.isSearch=!1})},methods:{renderActions:function(e){console.log(e)},commonHeaderButtonClick:function(e){switch(console.log(e),e.callbackfunction){case"commonDeleteData":this.commonDeleteData();break;case"ActiveMultipleListing":this.UpdateStatus("Active");break;case"InactiveMultipleListing":this.UpdateStatus("Inactive");break;case"AddStage":this.showStage=!0;break}},actionButtonClick:function(e,t,a,i){var o=this;switch(e){case"sharereport":o=this;n["a"].CheckPrivilege(o.privilegeParams+"ShareReport").then(a=>{if(!a.data)return o.ShowAlert(o.$t("UnAuthorized"),"warning",!0,"Alert"),!1;o.sharetype=e,o.folderid=t.FOLDER_ID,o.ReportID=t.REPORT_ID,o.foldername=t.REPORTNAME,o.showsharereportview=!0,$("#modalshareview").modal("show"),setTimeout((function(){$("#modalshareview").modal("show"),setTimeout((function(){o.SetBootstraptoolTip()}),200)}),1e3)});break;case"sendemail":o.sendemail(t.REPORT_ID,t.MODULENAME,t.SUBMODULECODE);break;case"editreport":o.editreport(t);break;case"setschedule":o.setschedule(t.REPORT_ID);break;case"ViewReport":o.ViewReport(t.REPORT_ID,t.ACCESS,t.FOLDER_ID);break}},editreport:function(e){var t=this;n["a"].CheckPrivilege(t.privilegeParams+"Update").then(a=>{if(!a.data)return t.ShowAlert(t.$t("UnAuthorized"),"warning",!0,"Alert"),!1;t.$router.push({name:"EditDataReport",params:{Modulename:e.MODULENAME,Submodulecode:e.SUBMODULECODE,ReportName:e.REPORTNAME,ReportID:e.REPORT_ID,Module_Id:e.MODULE_ID,Folder_Id:e.FOLDER_ID,Sub_Module_Id:e.Sub_Module_Id,Version:t.Version,Action:"Edit"}})})},ViewReport:function(e,t,a){var i=this;i.$router.push("/Report/viewcustomreport/"+btoa(JSON.stringify({ReportID:e,ACCESS:t,Folder_Id:a})))},sortdata:async function(e){var t="sort tb_headerSortDown";this.SortBy=e,e===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",t="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",t="sort tb_headerSortUp"):(this.SortExp="ASC",t="sort tb_headerSortDown")),await this.FetchData(),$("#th-"+e+"  span:first-child").attr("class",t)},pagerMethod:async function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,await this.FetchData()},leftCommonSearch:async function(e){this.PageNumber=e.PageNumber,this.isPaged=1,"undefined"!=typeof e.searchCondition?this.searchCondition=e.searchCondition:this.searchCondition="",await this.FetchData()},ManageFolder:function(){var e=this;n["a"].CheckPrivilege(e.privilegeParams+"FolderListing").then(t=>{if(!t.data)return e.ShowAlert(e.$t("UnAuthorized"),"warning",!0,"Alert"),!1;var a;e.ShowManageView=!0,$("#modalManageView").modal("show"),setTimeout((function(){$("#modalManageView").modal("show"),setTimeout((function(){e.SetBootstraptoolTip()}),200)}),1e3),null===(a=e.$refs.managefolder)||void 0===a||a.GetViewList()})},AddDesignation:function(){var e=this;console.log(e,"Add")},commonDeleteData:function(e){var t=this,a="";$(".chkItems:checkbox:checked").not("[id^='chkAll_0']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0?t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("Report"),(function(){var e={ids:a,moduleName:"Stage",subModuleCode:"Stage",refCode:"COMPANYSETUP_DELETE"},i=JSON.stringify(e);n["a"].CommonDeleteData(i).then((async function(e){200==e.status?($(".chkItems:checkbox:checked,#chkAll_0").prop("checked",!1).removeAttr("checked"),$("#DeleteMultiple").addClass("disabled"),t.ShowAlert(t.$t("DeletedSuccess",[t.$t("Report")]),"success",!0,t.$t("Alert")),t.PageNumber=parseInt(t.PageNumber)-1,t.PageNumber<=0&&(t.PageNumber=1),await t.FetchData()):t.ShowAlert(t.$t("DeletedError",[t.$t("Report")]),"success",!0,t.$t("Alert"))}))})):t.ShowAlert(t.$t("Selectanyrecordtodelete"))},UpdateStatus:async function(e){var t=this;e="Active"==e?1001:1002;var a="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0&&t.confirmR(t.$t("AreYouSureToUpdateStatus"),!0,t.$t("update")+"  "+t.$t("status"),(function(){var i={ID:a,StatusId:e,IsFor:"COMPANYSETUP_UPDATE",Module:"Stage",Submodule:"Stage"},o=JSON.stringify(i);console.log(o),n["a"].CommonUpdateStatus(o).then(e=>{200==e.status&&($(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),t.ShowAlert(t.$t("RecordUpdatedSuccessfully",[t.$t("Report")]),"success",!0,t.$t("Alert")),t.FetchData())})}))},getRequestParams:function(e,t,a,i,o,n){let s={};return e&&(s["pageNumber"]=e),n&&(s["searchcondition"]=n),o&&(s["is_paged"]=o),a&&(s["sortBy"]=a),i&&(s["sortExp"]=i),t&&(s["pageSize"]=t),s},clickEventOfColumn:function(e,t){"title"==t.COLUMN_NAME&&(this.recordId=e.Stage_id,this.showStage=!0),"USERNAME"==t.COLUMN_NAME&&this.$router.push({name:"viewcustomreport",params:{ReportID:e.REPORT_ID,ACCESS:e.ACCESS}})},FetchData:async function(){var e=this;this.isLoading=!0;var t=`CompanyId=${e.CompanyId}&pageSize=${e.PageSize}&pageNum=${e.PageNumber}&sortBy=${e.SortBy}&sortExp=${e.SortExp}&searchQuery=${e.searchCondition.trim()}`;await n["a"].StageListing(t).then((function(t){e.Headers=t.data.FieldSchema;const a=["stage_name","phase_id","stage_desc","status_id"];e.filteredHeaders=e.Headers.filter(e=>a.includes(e.COLUMN_NAME)),e.filteredHeaders.forEach(t=>{t.settings=null,"stage_name"==t.COLUMN_NAME&&(t.settings={clickEvent:e.clickEventOfColumn,formatter:e.columnDataFormatter}),"status_id"==t.COLUMN_NAME&&(t.settings={isInSlot:!0})}),""!=t.data.Data&&null!=t.data.Data?(t.data.Data.length>0?(e.StageData=t.data.Data,e.StageData.forEach(e=>{e.phase_id=JSON.parse(e.phase_id).Name,e.created_by=JSON.parse(e.created_by),e.modified_by=JSON.parse(e.modified_by),e.status_id=JSON.parse(e.status_id)}),e.TotalRecords=e.StageData[0].total_records,e.TotalPages=Math.ceil(e.TotalRecords/e.PageSize),e.CurrentPage=e.PageNumber,e.noRecord=!1):(e.StageData=[],e.noRecord=!0,e.TotalRecords=0),void 0!=localStorage.SavedParameters&&localStorage.removeItem("SavedParameters")):(e.noRecord=!0,e.StageData=[],e.TotalRecords=0),setTimeout((function(){e.ResponsiveDataTable("tablelistingdata")}),500),e.isLoading=!1}))},closeModalSharePopup:function(){$("#modalshareview").modal("hide"),this.showsharereportview=!1},getStatuslistForListing:function(e,t){var a=this,i="langCode="+t+"&statusType="+e+"&hasglobal=true";n["a"].statusdropdown(i).then((function(e){if("Success"==e.data.status){var t=e.data.result;a.StatusListForListing=t.data}}))}}},f=h,p=a("2877"),g=Object(p["a"])(f,i,o,!1,null,null,null);t["default"]=g.exports},aae2:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"col-md-12 p-0 mb-2"},[e._m(0),a("div",{staticClass:"left-tab-container"},[a("ul",{staticClass:"nav nav-pills flex-column left-tab responivecustomtab lefttabiconfix"},e._l(e.leftTabList,(function(t){return a("li",{staticClass:"nav-link left-menu",class:{active:t.goTo===e.$route.path}},[a("router-link",{staticStyle:{"align-items":"center"},attrs:{to:t.goTo}},[a("div",{staticClass:"listing"},[a("i",{staticClass:"mr-2",class:t.icon}),e._v(e._s(t.title))])])],1)})),0)])])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"theme-primary partition"},[a("span",{staticClass:"p-name text-white"},[e._v("Company Setup")])])}],n={name:"listing-status",props:{HeaderText:{type:String,required:!0}},data:function(){return{Header:this.HeaderText,leftTabList:[{title:"Announcement",icon:"fa fa-bullhorn",goTo:"/AnnouncementMessage/Index"},{title:"Break",icon:"fa fa-clock-o",goTo:"/Break/Index"},{title:"Canned Reply",icon:"fa fa-envelope",goTo:"/CannedReply/Index"},{title:"Category",icon:"fa fa-tasks",goTo:"/Category/Index"},{title:"Channel",icon:"fa fa-television",goTo:"/Channel/Index"},{title:"Company Holiday",icon:"fa fa-calendar",goTo:"/CompanyHoliday/Index"},{title:"Company Notification",icon:"fa fa-bell",goTo:"/CompanyNotification/Index"},{title:"Contact Type",icon:"fa fa-list-alt",goTo:"/ContactType/Index"},{title:"Currency Management",icon:"fa fa-list-alt",goTo:"/CurrencyManagement/Index"},{title:"Department",icon:"fa fa-users",goTo:"/Department/Index"},{title:"Designation",icon:"fa fa-address-card",goTo:"/Designation/Index"},{title:"Email Template",icon:"fa fa-clock-o",goTo:"/EmailTemplate/Index"},{title:"Feedback",icon:"fa fa-map-marker",goTo:"/Feedback/Index"},{title:"Greeting",icon:"fa fa-thumbs-o-up",goTo:"/Greeting/Index"},{title:"Industry Type",icon:"fa fa-building-o",goTo:"/IndustryType/Index"},{title:"Immigration",icon:"fa fa-address-card",goTo:"/Immigration/Index"},{title:"Location",icon:"fa fa-map-marker",goTo:"/Location/Index"},{title:"Login Authorization",icon:"fa fa-map-marker",goTo:"/LoginAuthorization/Index"},{title:"Payment Gateway",icon:"fa fa-clock-o",goTo:"/PaymentGateway/Index"},{title:"Provisional Right",icon:"fa fa-map-marker",goTo:"/ProvisionalRight/Index"},{title:"Review Template",icon:"fa fa-clock-o",goTo:"/ReviewTemplate/Index"},{title:"Service",icon:"fa fa-star",goTo:"/Service/Index"},{title:"Shift",icon:"fa fa-clock-o",goTo:"/Shift/Index"},{title:"Skill",icon:"fa fa-star",goTo:"/Skill/Index"},{title:"Stage",icon:"fa fa-bar-chart",goTo:"/Stage/Index"},{title:"Status",icon:"fa fa-bar-chart",goTo:"/Status/Index"},{title:"Storage",icon:"fa fa-star",goTo:"/Storage/Index"},{title:"User Title",icon:"fa fa-star",goTo:"/UserTitle/Index"}]}},methods:{}},s=n,r=(a("6d44"),a("2877")),l=Object(r["a"])(s,i,o,!1,null,"7acd3fcc",null);t["a"]=l.exports},ee60:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".left-tab-container[data-v-7acd3fcc]{max-height:70vh;overflow-y:auto}.left-tab .nav-link.left-menu a[data-v-7acd3fcc]{width:100%;display:flex}.left-tab .nav-link.left-menu.active .listing[data-v-7acd3fcc],.left-tab .nav-link.left-menu[data-v-7acd3fcc]:hover,.listing[data-v-7acd3fcc]:hover{color:#fff}",""]),e.exports=t},f5ac:function(e,t,a){"use strict";a("46ed")}}]);
//# sourceMappingURL=chunk-1cb2aabd.js.map