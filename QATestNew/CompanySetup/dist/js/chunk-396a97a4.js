(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-396a97a4"],{1695:function(t,e,a){var i=a("ee60");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("499e").default;o("3f5a8266",i,!0,{sourceMap:!1,shadowMode:!1})},"30ee":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".singleselectlook .multiselect__select:before{z-index:99}.singleselectlook .multiselect__tags{padding:8px 30px 0 8px!important;min-height:36px!important}.singleselectlook .multiselect__input{margin-bottom:0}",""]),t.exports=e},"46ed":function(t,e,a){var i=a("30ee");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("499e").default;o("2725a163",i,!0,{sourceMap:!1,shadowMode:!1})},"6d44":function(t,e,a){"use strict";a("1695")},"6d90":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loader",{attrs:{"is-visible":t.isLoading}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-2 mt-2"},[a("LeftColumn",{attrs:{HeaderText:t.$t("Shift")}})],1),a("div",{staticClass:"col-10"},[a("tg-list",{attrs:{IsShowAction:!1,showCheckBox:!0,ModuleName:"Dynamic_Reporting",SubModuleCode:"Dynamic_Reporting",IdentityColumn:"shift_id",HeaderText:t.$t("Shift"),ListData:t.ShiftData,HeaderData:t.filteredHeaders,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords,IsSearchFieldsOnTop:!1,SearchPosition:"top",SearchFields:t.topSearchFields,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.FetchData,IsFilterApplied:!!t.searchCondition,LegendArray:[],sourcetype:"",NorecordfoundText:t.$t("NoRecordfound")},on:{LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,ActionButtonClick:t.actionButtonClick,SortdataButtonClick:t.sortdata},scopedSlots:t._u([{key:"slotdata",fn:function(e){var i=e.data;return["shift_type"==i.column.COLUMN_NAME?[1==i.row.shift_type?[a("div",[t._v("Flexible")])]:[a("div",[t._v("Fixed")])]]:t._e(),"status_id"==i.column.COLUMN_NAME?[t.isCRMShowStausDrop(i.row.status_id,"COMPANYSETUP_UPDATE")?a("listing-status",{ref:"updatestatus",attrs:{isfor:"COMPANYSETUP_UPDATE",dataid:i.row.shift_id,"data-controller":"COMPANYSETUP_UPDATE",statuslist:t.StatusListForListing,item:i.row.shift_id,"data-action":"index",module:"Shift",subModule:"Shift",dataselected:1001==i.row.status_id.value?"Active":"Inactive",callbackfunction:t.FetchData,isselectedvaluestring:!0}}):t._e()]:t._e()]}}])})],1)]),t.showShift?a("AddCompanySetup",{attrs:{recordId:t.recordId,title:t.$t("Manage Shift"),moduleName:"Shift",emitName:"addReloadData",addApiUrl:"/shift/add",subModule:"Shift"},on:{close:function(e){t.showShift=!1,t.recordId=0},addReloadData:function(e){t.FetchData(),t.showShift=!1,t.recordId=0}}}):t._e()],1)},o=[],n=(a("14d9"),a("b7ef"),a("9769"));let s=[{title:"Add",iconClass:"fa-plus",callbackfunction:"AddDepartment",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0},{id:"ActiveMultiple",title:"Active",iconClass:"fa-check",callbackfunction:"ActiveMultipleListing",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0},{id:"InactiveMultiple",title:"Inactive",iconClass:"fa-close",callbackfunction:"InactiveMultipleListing",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0},{id:"DeleteMultiple",title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",isdisabled:!0,isvisible:!0}],r=[{fieldName:"Search by Shift Name",fieldType:"text",fieldSearchConditionName:["shift_name"],isSearch:!0}],l=[{title:"View",callbackfunction:"ViewReport",icon:"fa fa-eye action-icon",additionalSpan:""},{title:"Edit",callbackfunction:"editreport",icon:"fa fa-pencil text-success action-icon",additionalSpan:""},{title:"Send Email",callbackfunction:"sendemail",href:"javascript:void(0)",icon:"fa fa-paper-plane text-success action-icon",additionalSpan:""},{title:"Schedule",callbackfunction:"setschedule",href:"javascript:void(0)",icon:"fa fa-clock-o text-warning action-icon",additionalSpan:""},{title:"Share",callbackfunction:"sharereport",href:"javascript:void(0)",icon:"fa fa-share-alt text-success action-icon",additionalSpan:""}];function c(t,e,a){var i=t;let o=a,s={};s["moduleName"]=e,s["type"]=a,n["a"].GetMainReportSearching(o).then((function(t){console.log(leftsearchSchema);var e=t.data;console.log("folderid",e),null!=e&&("FOLDER_NAME"==a&&(i.leftSearchFields[4].listOptions=e.map(t=>{const e={};return e.name=t.FOLDER_NAME,e.value=t.FOLDER_ID.toString(),e}),i.LeadStatusList=e.map(t=>{const e={};return e.name=t.FOLDER_NAME,e.value=t.FOLDER_ID.toString(),e})),"CREATED_BY"==a&&(i.leftSearchFields[3].listOptions=e.map(t=>{const e={};return e.name=t.CREATED_BY,e.value=t.CREATED_ID.toString(),e}),i.LeadStatusList=e.map(t=>{const e={};return e.name=t.CREATED_BY,e.value=t.CREATED_ID.toString(),e})),"MODIFIED_BY"==a&&(i.leftSearchFields[7].listOptions=e.map(t=>{const e={};return e.name=t.MODIFIED_BY,e.value=t.MODIFIED_ID.toString(),e}),i.LeadStatusList=e.map(t=>{const e={};return e.name=t.MODIFIED_BY,e.value=t.MODIFIED_ID.toString(),e})))}))}var d={buttons:s,topsearchSchema:r,listActions:l,bindleftCommonSearchdropdown:c},u=a("8dd4"),h=a("aae2"),m={components:{LeftColumn:h["a"],AddCompanySetup:u["a"]},props:{sourcetype:{type:String,required:!0}},data(){return{recordId:0,showShift:!1,noRecord:!1,isLoading:!1,CompanyId:null,ShiftData:[],TotalRecords:0,listheaderbuttons:d.buttons,topSearchFields:d.topsearchSchema,ShowManageView:!1,ShowAddCustomReportView:!1,PageSize:10,PageNumber:1,isPaged:1,TotalPages:0,listActions:d.listActions,searchCondition:"",conditionForInstantSearch:"",SortBy:"",SortExp:"",showsharereportview:!1,showemailreportview:!1,showschedulereportview:!1,ReportID:null,reportname:"",reportid:"",foldername:"",folderid:"",LeadStatusList:[],searchcondition:"",MODULENAME:null,SUBMODULECODE:null,privilegeParams:null,sharetype:"",filteredHeaders:[],StatusListForListing:[{STATUS:"Active",STATUS_ID:1001,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#28a745"},{STATUS:"Inactive",STATUS_ID:1002,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#d72435"}]}},async created(){var t=this;t.CompanyId=t.GetUserInfo.CompanyId,t.privilegeParams="controller=Shift&action=",await t.FetchData(),d.bindleftCommonSearchdropdown(t,"Dynamic_Reporting","FOLDER_NAME"),d.bindleftCommonSearchdropdown(t,"Dynamic_Reporting","CREATED_BY"),d.bindleftCommonSearchdropdown(t,"Dynamic_Reporting","MODIFIED_BY"),t.getStatuslistForListing("Dynamic_Reporting","en")},computed:{filteredUserData(){return this.vueObj.UserData.map(t=>{const e={...t};return null!==e.USER_EMP_ID&&""!==e.USER_EMP_ID||(e.USER_EMP_ID="--"),e})}},mounted(){d.topsearchSchema.forEach(t=>{t.value="",t.isSearch=!1})},methods:{renderActions:function(t){console.log(t)},commonHeaderButtonClick:function(t){switch(console.log(t),t.callbackfunction){case"commonDeleteData":this.commonDeleteData();break;case"ActiveMultipleListing":this.UpdateStatus("Active");break;case"InactiveMultipleListing":this.UpdateStatus("Inactive");break;case"AddDepartment":this.showShift=!0;break}},actionButtonClick:function(t,e,a,i){var o=this;switch(t){case"sharereport":o=this;n["a"].CheckPrivilege(o.privilegeParams+"ShareReport").then(a=>{if(!a.data)return o.ShowAlert(o.$t("UnAuthorized"),"warning",!0,"Alert"),!1;o.sharetype=t,o.folderid=e.FOLDER_ID,o.ReportID=e.REPORT_ID,o.foldername=e.REPORTNAME,o.showsharereportview=!0,$("#modalshareview").modal("show"),setTimeout((function(){$("#modalshareview").modal("show"),setTimeout((function(){o.SetBootstraptoolTip()}),200)}),1e3)});break;case"sendemail":o.sendemail(e.REPORT_ID,e.MODULENAME,e.SUBMODULECODE);break;case"editreport":o.editreport(e);break;case"setschedule":o.setschedule(e.REPORT_ID);break;case"ViewReport":o.ViewReport(e.REPORT_ID,e.ACCESS,e.FOLDER_ID);break}},editreport:function(t){var e=this;n["a"].CheckPrivilege(e.privilegeParams+"Update").then(a=>{if(!a.data)return e.ShowAlert(e.$t("UnAuthorized"),"warning",!0,"Alert"),!1;e.$router.push({name:"EditDataReport",params:{Modulename:t.MODULENAME,Submodulecode:t.SUBMODULECODE,ReportName:t.REPORTNAME,ReportID:t.REPORT_ID,Module_Id:t.MODULE_ID,Folder_Id:t.FOLDER_ID,Sub_Module_Id:t.Sub_Module_Id,Version:e.Version,Action:"Edit"}})})},ViewReport:function(t,e,a){var i=this;i.$router.push("/Report/viewcustomreport/"+btoa(JSON.stringify({ReportID:t,ACCESS:e,Folder_Id:a})))},sortdata:async function(t){var e="sort tb_headerSortDown";this.SortBy=t,t===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",e="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",e="sort tb_headerSortUp"):(this.SortExp="ASC",e="sort tb_headerSortDown")),await this.FetchData(),$("#th-"+t+"  span:first-child").attr("class",e)},pagerMethod:async function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,await this.FetchData()},leftCommonSearch:async function(t){this.PageNumber=t.PageNumber,this.isPaged=1,"undefined"!=typeof t.searchCondition?this.searchCondition=t.searchCondition:this.searchCondition="",await this.FetchData()},ManageFolder:function(){var t=this;n["a"].CheckPrivilege(t.privilegeParams+"FolderListing").then(e=>{if(!e.data)return t.ShowAlert(t.$t("UnAuthorized"),"warning",!0,"Alert"),!1;var a;t.ShowManageView=!0,$("#modalManageView").modal("show"),setTimeout((function(){$("#modalManageView").modal("show"),setTimeout((function(){t.SetBootstraptoolTip()}),200)}),1e3),null===(a=t.$refs.managefolder)||void 0===a||a.GetViewList()})},AddDesignation:function(){var t=this;console.log(t,"Add")},commonDeleteData:function(t){var e=this,a="";$(".chkItems:checkbox:checked").not("[id^='chkAll_0']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0?e.confirmR(e.$t("ConfirmDelete"),!0,e.$t("Delete")+"  "+e.$t("Report"),(function(){var t={ids:a,moduleName:"Shift",subModuleCode:"Shift",refCode:"COMPANYSETUP_DELETE"},i=JSON.stringify(t);n["a"].CommonDeleteData(i).then((async function(t){200==t.status?($(".chkItems:checkbox:checked,#chkAll_0").prop("checked",!1).removeAttr("checked"),$("#DeleteMultiple").addClass("disabled"),e.ShowAlert(e.$t("DeletedSuccessfully",[e.$t("Report")]),"success",!0,e.$t("Alert")),e.PageNumber=parseInt(e.PageNumber)-1,e.PageNumber<=0&&(e.PageNumber=1),await e.FetchData()):e.ShowAlert(e.$t("DeletedError",[e.$t("Report")]),"success",!0,e.$t("Alert"))}))})):e.ShowAlert(e.$t("Selectanyrecordtodelete"))},UpdateStatus:async function(t){var e=this;t="Active"==t?1001:1002;var a="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0&&e.confirmR(e.$t("AreYouSureToUpdateStatus"),!0,e.$t("update")+"  "+e.$t("status"),(function(){var i={ID:a,StatusId:t,IsFor:"COMPANYSETUP_UPDATE",Module:"Shift",Submodule:"Shift"},o=JSON.stringify(i);console.log(o),n["a"].CommonUpdateStatus(o).then(t=>{200==t.status&&($(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),e.ShowAlert(e.$t("DeletedSuccess",[e.$t("Report")]),"success",!0,e.$t("Alert")),e.FetchData())})}))},getRequestParams:function(t,e,a,i,o,n){let s={};return t&&(s["pageNumber"]=t),n&&(s["searchcondition"]=n),o&&(s["is_paged"]=o),a&&(s["sortBy"]=a),i&&(s["sortExp"]=i),e&&(s["pageSize"]=e),s},clickEventOfColumn:function(t,e){console.log(t,e.COLUMN_NAME),"shift_name"==e.COLUMN_NAME&&(this.recordId=t.shift_id,this.showShift=!0),"USERNAME"==e.COLUMN_NAME&&this.$router.push({name:"viewcustomreport",params:{ReportID:t.REPORT_ID,ACCESS:t.ACCESS}})},FetchData:async function(){var t=this;this.isLoading=!0;var e=`CompanyId=${t.CompanyId}&pageSize=${t.PageSize}&pageNum=${t.PageNumber}&sortBy=${t.SortBy}&sortExp=${t.SortExp}&searchQuery=${t.searchCondition.trim()}`;await n["a"].ShiftListing(e).then((function(e){t.Headers=e.data.FieldSchema;const a=["shift_name","shift_desc","start_time","end_time","shift_type","status_id"];t.filteredHeaders=t.Headers.filter(t=>a.includes(t.COLUMN_NAME)),t.filteredHeaders.forEach(e=>{e.settings=null,"shift_name"==e.COLUMN_NAME&&(e.settings={clickEvent:t.clickEventOfColumn,formatter:t.columnDataFormatter}),"shift_type"!=e.COLUMN_NAME&&"status_id"!=e.COLUMN_NAME||(e.settings={isInSlot:!0})}),""!=e.data.Data&&null!=e.data.Data?(e.data.Data.length>0?(t.ShiftData=e.data.Data,t.ShiftData.forEach(t=>{t.created_by=JSON.parse(t.created_by),t.modified_by=JSON.parse(t.modified_by),t.status_id=JSON.parse(t.status_id)}),t.TotalRecords=t.ShiftData[0].total_records,t.TotalPages=Math.ceil(t.TotalRecords/t.PageSize),t.CurrentPage=t.PageNumber,t.noRecord=!1):(t.ReportData=[],t.noRecord=!0,t.TotalRecords=0),void 0!=localStorage.SavedParameters&&localStorage.removeItem("SavedParameters")):(t.noRecord=!0,t.ReportData=[],t.TotalRecords=0),setTimeout((function(){t.ResponsiveDataTable("tablelistingdata")}),500),t.isLoading=!1}))},closeModalSharePopup:function(){$("#modalshareview").modal("hide"),this.showsharereportview=!1},getStatuslistForListing:function(t,e){var a=this,i="langCode="+e+"&statusType="+t+"&hasglobal=true";n["a"].statusdropdown(i).then((function(t){if("Success"==t.data.status){var e=t.data.result;a.StatusListForListing=e.data}}))}}},f=m,p=a("2877"),S=Object(p["a"])(f,i,o,!1,null,null,null);e["default"]=S.exports},"8dd4":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"my-popups"},[a("div",{staticClass:"modal d-block "},[a("div",{staticClass:"modal-dialog ui-draggable",staticStyle:{display:"inline-block"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header ui-draggable-handle"},[a("h5",{staticClass:"modal-title",attrs:{id:"ui-id-26"}},[t._v(t._s(t.title))]),a("button",{staticClass:"close",attrs:{type:"button",title:"","data-original-title":"Close"},on:{click:function(e){return t.$emit("close")}}},[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"modal-body",staticStyle:{height:"auto","min-height":"0px","max-height":"none"},attrs:{id:"backgroundPopup"}},[a("section",{staticClass:"main-content",attrs:{id:"main-content"}},[a("section",{staticClass:"main-content"},[a("div",{staticClass:"container-fluid p-0"},[a("div",{staticClass:"p-0"},[a("dynamic-form",{ref:"dynamicForm",staticClass:"daterangecontrolHS",attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}})],1)])])])])])])])])])},o=[],n=a("ed09"),s=a("7bb1"),r=a("b9b9"),l=a("9769");Object(s["c"])("required",{validate(t){return console.log("checkk"),{required:!0,valid:-1===["",null,void 0].indexOf(t)}},message:"The {_field_} is required"});var c=Object(n["defineComponent"])({name:"Manage Departemts",components:{ValidationObserver:s["a"],ValidationProvider:s["b"]},props:{addApiUrl:{type:String},emitName:{type:String},moduleName:{type:String},subModule:{type:String},title:{type:String},recordId:{type:Number}},created:function(){let t=this.recordId?this.recordId:0;this.getForm(t)},methods:{getForm:function(t){var e=this;e.isLoading=!0;var a=`recordId=${t}&moduleName=${this.moduleName}&subModuleCode=${this.subModule}`;l["a"].GetDynamicForm(a).then((function(t){null!=t&&null!=t.data&&(e.isMapFeature=t.data.isFsmLocating,e.FormSchema=e.$refs.dynamicForm.ConvertCustomFieldIntoDynamicFormObj(t.data.data),console.log(e.FormSchema),e.FormSchema.forEach((t,a)=>{t.Data.forEach((a,i)=>{"General Information"==t.group_name&&(t.visibility=!1,"user_name"!=a.name&&"password"!=a.name&&"signature"!=a.name||(a.visibility=!1)),a.config.onChange=e.OnChangeEventsforField})}),e.FormSchema.length>0&&(e.FormSchema[0].visibility=!1),e.isLoading=!1)}))},OnChangeEventsforField:function(t,e,a){let i=this;if("FILL_DEPENDENT"==t){e.config.options=[];var o=`id=&moduleName=${i.moduleName}&type=${e.config.fieldCode}&search=&refId=${a}`;l["a"].GetDDLData(o).then((function(t){if(t.data){var a=t.data;null!=a&&(e.config.options=t.data.DATA,i.$refs.dynamicForm.UpdateKeyValue())}}))}else"payment_gateway_code"==e.name&&137==e.value?i.FormSchema.forEach((t,e)=>{t.Data.forEach((t,e)=>{"user_name"==t.name&&(t.visibility=!0,t.label="API Login ID"),"password"==t.name&&(t.visibility=!0,t.label="Transaction Key"),"signature"==t.name&&(t.visibility=!1)})}):"payment_gateway_code"==e.name&&135==e.value?i.FormSchema.forEach((t,e)=>{t.Data.forEach((t,e)=>{"user_name"==t.name&&(t.visibility=!0,t.label="User Name"),"password"==t.name&&(t.visibility=!0,t.label="Password"),"signature"==t.name&&(t.visibility=!0)})}):i.FormSchema.forEach((t,e)=>{t.Data.forEach((t,e)=>{"user_name"==t.name&&(t.visibility=!0,t.label="Secret Key"),"password"==t.name&&(t.visibility=!0,t.label="Publishable Key"),"signature"==t.name&&(t.visibility=!1)})})},async onSubmit(){let t=Object(r["b"])(this.FormSchema);l["a"].DepartmentAdd(t,this.addApiUrl).then(t=>{null!=t.data.Result&&t.data.Result.MAIN_ID>0?(this.ShowAlert(this.$t("SavedSuccessfully"),"success",!1,this.$t("Alert")),this.$emit(this.emitName)):this.ShowAlert(this.$t(t.data.Status),"danger",!1,this.$t("Alert"))})},closePopup(){this.$emit("close")}},data(){return{editor:this.CLASSIC_EDITOR,department:{name:"",status:{name:"active",id:1},visibaleToclients:!1,visibaleToTicting:!1,description:""},buttons:[{type:"submit",class:"btn btn-success",text:"Save",isVisible:!0},{type:"button",class:"btn btn-danger",text:"Cancel",onClick:this.closePopup}],FormSchema:[],isLoading:!1}}}),d=c,u=(a("f5ac"),a("2877")),h=Object(u["a"])(d,i,o,!1,null,null,null);e["a"]=h.exports},aae2:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"col-md-12 p-0 mb-2"},[t._m(0),a("div",{staticClass:"left-tab-container"},[a("ul",{staticClass:"nav nav-pills flex-column left-tab responivecustomtab lefttabiconfix"},t._l(t.leftTabList,(function(e){return a("li",{staticClass:"nav-link left-menu",class:{active:e.goTo===t.$route.path}},[a("router-link",{staticStyle:{"align-items":"center"},attrs:{to:e.goTo}},[a("div",{staticClass:"listing"},[a("i",{staticClass:"mr-2",class:e.icon}),t._v(t._s(e.title))])])],1)})),0)])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-primary partition"},[a("span",{staticClass:"p-name text-white"},[t._v("Company Setup")])])}],n={name:"listing-status",props:{HeaderText:{type:String,required:!0}},data:function(){return{Header:this.HeaderText,leftTabList:[{title:"Announcement",icon:"fa fa-bullhorn",goTo:"/AnnouncementMessage/Index"},{title:"Break",icon:"fa fa-clock-o",goTo:"/Break/Index"},{title:"Canned Reply",icon:"fa fa-envelope",goTo:"/CannedReply/Index"},{title:"Category",icon:"fa fa-tasks",goTo:"/Category/Index"},{title:"Channel",icon:"fa fa-television",goTo:"/Channel/Index"},{title:"Company Holiday",icon:"fa fa-calendar",goTo:"/CompanyHoliday/Index"},{title:"Company Notification",icon:"fa fa-bell",goTo:"/CompanyNotification/Index"},{title:"Contact Type",icon:"fa fa-list-alt",goTo:"/ContactType/Index"},{title:"Currency Management",icon:"fa fa-list-alt",goTo:"/CurrencyManagement/Index"},{title:"Department",icon:"fa fa-users",goTo:"/Department/Index"},{title:"Designation",icon:"fa fa-address-card",goTo:"/Designation/Index"},{title:"Email Template",icon:"fa fa-clock-o",goTo:"/EmailTemplate/Index"},{title:"Feedback",icon:"fa fa-map-marker",goTo:"/Feedback/Index"},{title:"Greeting",icon:"fa fa-thumbs-o-up",goTo:"/Greeting/Index"},{title:"Industry Type",icon:"fa fa-building-o",goTo:"/IndustryType/Index"},{title:"Immigration",icon:"fa fa-address-card",goTo:"/Immigration/Index"},{title:"Location",icon:"fa fa-map-marker",goTo:"/Location/Index"},{title:"Login Authorization",icon:"fa fa-map-marker",goTo:"/LoginAuthorization/Index"},{title:"Payment Gateway",icon:"fa fa-clock-o",goTo:"/PaymentGateway/Index"},{title:"Provisional Right",icon:"fa fa-map-marker",goTo:"/ProvisionalRight/Index"},{title:"Review Template",icon:"fa fa-clock-o",goTo:"/ReviewTemplate/Index"},{title:"Service",icon:"fa fa-star",goTo:"/Service/Index"},{title:"Shift",icon:"fa fa-clock-o",goTo:"/Shift/Index"},{title:"Skill",icon:"fa fa-star",goTo:"/Skill/Index"},{title:"Stage",icon:"fa fa-bar-chart",goTo:"/Stage/Index"},{title:"Status",icon:"fa fa-bar-chart",goTo:"/Status/Index"},{title:"Storage",icon:"fa fa-star",goTo:"/Storage/Index"},{title:"User Title",icon:"fa fa-star",goTo:"/UserTitle/Index"}]}},methods:{}},s=n,r=(a("6d44"),a("2877")),l=Object(r["a"])(s,i,o,!1,null,"7acd3fcc",null);e["a"]=l.exports},ee60:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".left-tab-container[data-v-7acd3fcc]{max-height:70vh;overflow-y:auto}.left-tab .nav-link.left-menu a[data-v-7acd3fcc]{width:100%;display:flex}.left-tab .nav-link.left-menu.active .listing[data-v-7acd3fcc],.left-tab .nav-link.left-menu[data-v-7acd3fcc]:hover,.listing[data-v-7acd3fcc]:hover{color:#fff}",""]),t.exports=e},f5ac:function(t,e,a){"use strict";a("46ed")}}]);
//# sourceMappingURL=chunk-396a97a4.js.map