(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33fb4bb0"],{3291:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("loader",{attrs:{isVisible:e.isLoading}}),a("div",[a("ListCompanySetup",{attrs:{moduleCode:"Company",subModuleCode:"Greeting",primaryKeyforModule:"greeting_template_id",ActionColunName:"greetingtype",addAPIUrl:"/Greeting/add"}})],1)],1)},i=[],s=a("c09d"),r={components:{ListCompanySetup:s["a"]}},d=r,n=a("2877"),l=Object(n["a"])(d,o,i,!1,null,null,null);t["default"]=l.exports},c09d:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("loader",{attrs:{"is-visible":e.isLoading}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-2 mt-2"},[a("LeftColumn")],1),a("div",{staticClass:"col-10"},[a("RightContent",{attrs:{moduleCode:e.moduleCode,subModuleCode:e.subModuleCode,primaryKeyforModule:e.primaryKeyforModule,addAPIUrl:e.addAPIUrl,ActionColunName:e.ActionColunName,addUserGuide:e.addUserGuide}})],1)])],1)},i=[],s=a("aae2"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("tg-list",{attrs:{IsShowAction:!1,showCheckBox:!0,ModuleName:"moduleCode",SubModuleCode:"subModuleCode",IdentityColumn:e.primaryKeyforModule,ListData:e.ListingData,HeaderData:e.Headers,HeaderButtons:e.Buttons,TotalRecords:e.TotalRecords,IsSearchFieldsOnTop:!1,SearchPosition:"top",SearchFields:e.topsearchField,RenderRowActionMethod:e.renderActions,ListDataCallBackFunction:e.FetchData,IsFilterApplied:!!e.searchCondition,LegendArray:[],sourcetype:"",NorecordfoundText:e.$t("NoRecordfound")},on:{LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,SortdataButtonClick:e.sortdata},scopedSlots:e._u([{key:"slotdata",fn:function(t){var o=t.data;return["s"==o.column.COLUMN_NAME?[null!=o.row.s.Name?[a("div",[e._v(e._s(o.row.s.Name))])]:[a("div",[e._v("--")])]]:e._e(),"description"==o.column.COLUMN_NAME?[null!=o.row.description?[a("div",[e._v(e._s(o.row.description))])]:[a("div",[e._v("--")])]]:e._e(),"from_user_id"==o.column.COLUMN_NAME?[null!=o.row.from_user_id.Name?[a("div",[e._v(e._s(o.row.from_user_id.Name))])]:[a("div",[e._v("--")])]]:e._e(),"to_user_id"==o.column.COLUMN_NAME?[null!=o.row.to_user_id.Name?[a("div",[e._v(e._s(o.row.to_user_id.Name))])]:[a("div",[e._v("--")])]]:e._e(),"status_id"==o.column.COLUMN_NAME?[e.isCRMShowStausDrop(o.row.status_id,"COMPANYSETUP_UPDATE")?a("listing-status",{ref:"updatestatus",attrs:{isfor:"COMPANYSETUP_UPDATE",dataid:o.row[e.primaryKeyforModule],"data-controller":e.COMPANYSETUP_UPDATE,statuslist:e.StatusListForListing,item:o.row[e.primaryKeyforModule],"data-action":"index",module:e.moduleCode,subModule:e.subModuleCode,dataselected:"1001"==e.getStatus(o.row.status_id)?"Active":"Inactive",callbackfunction:e.FetchData,isselectedvaluestring:!0}}):e._e()]:e._e()]}}])}),e.showAddPopup?a("AddCompanySetup",{attrs:{recordId:e.recordId,title:e.$t("Manage "+e.subModuleCode),moduleName:e.moduleCode,emitName:"addReloadData",addApiUrl:e.addAPIUrl,subModule:e.subModuleCode,addUserGuide:e.addUserGuide},on:{close:function(t){e.showAddPopup=!1,e.recordId=0},addReloadData:function(t){e.FetchData(),e.showAddPopup=!1,e.recordId=0}}}):e._e()],1)},d=[],n=a("9769"),l=a("8dd4"),u={components:{AddCompanySetup:l["a"]},props:{sourcetype:{type:String,required:!0},moduleCode:{type:String,required:!0},subModuleCode:{type:String,required:!0},primaryKeyforModule:{type:String,required:!0},addAPIUrl:{type:String,required:!0},ActionColunName:{type:String,required:!0},addUserGuide:{type:String}},data(){return{recordId:0,showAddPopup:!1,noRecord:!1,isLoading:!1,CompanyId:null,ListingData:[],TotalRecords:0,ShowManageView:!1,ShowAddCustomReportView:!1,PageSize:10,PageNumber:1,isPaged:1,TotalPages:0,searchCondition:"",conditionForInstantSearch:"",SortBy:"",SortExp:"",showsharereportview:!1,showemailreportview:!1,showschedulereportview:!1,foldername:"",folderid:"",LeadStatusList:[],searchcondition:"",PrimaryKeyId:null,privilegeParams:null,sharetype:"",Headers:[],filteredHeaders:[],StatusListForListing:[{STATUS:"Active",STATUS_ID:1001,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#28a745"},{STATUS:"Inactive",STATUS_ID:1002,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#d72435"}],Buttons:[{title:"Add",iconClass:"fa-plus",callbackfunction:"AddScreenPopup",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0},{id:"ActiveMultiple",title:"Active",iconClass:"fa-check",callbackfunction:"ActiveMultipleListing",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0},{id:"InactiveMultiple",title:"Inactive",iconClass:"fa-close",callbackfunction:"InactiveMultipleListing",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0},{id:"DeleteMultiple",title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",isdisabled:!0,isvisible:!0}],topsearchField:[{fieldName:"Search  ",fieldType:"text",fieldSearchConditionName:"",isSearch:!0}]}},async created(){var e=this;e.CompanyId=e.GetUserInfo.CompanyId,e.privilegeParams="controller=Break&action=",await e.FetchData(),e.getStatuslistForListing("Dynamic_Reporting","en")},computed:{filteredUserData(){return this.vueObj.UserData.map(e=>{const t={...e};return null!==t.USER_EMP_ID&&""!==t.USER_EMP_ID||(t.USER_EMP_ID="--"),t})}},mounted(){var e=this;e.topsearchField.forEach(e=>{e.value="",e.isSearch=!1})},methods:{getStatus:function(e){try{const t=JSON.parse(e);return t.value}catch(t){return console.error("Error parsing status_id:",t),e}},renderActions:function(e){console.log(e)},commonHeaderButtonClick:function(e){switch(e.callbackfunction){case"commonDeleteData":this.commonDeleteData();break;case"ActiveMultipleListing":console.log("Active"),this.UpdateStatus("Active");break;case"InactiveMultipleListing":console.log("Inactive"),this.UpdateStatus("Inactive");break;case"AddScreenPopup":this.showAddPopup=!0;break}},sortdata:async function(e){var t="sort tb_headerSortDown";this.SortBy=e,e===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",t="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",t="sort tb_headerSortUp"):(this.SortExp="ASC",t="sort tb_headerSortDown")),await this.FetchData(),$("#th-"+e+"  span:first-child").attr("class",t)},pagerMethod:async function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,await this.FetchData()},leftCommonSearch:async function(e){var t=this;console.log(t.searchCondition),this.PageNumber=e.PageNumber,this.isPaged=1,"undefined"!=typeof e.searchCondition?this.searchCondition=e.searchCondition:this.searchCondition="",await this.FetchData()},commonDeleteData:function(e){var t=this,a="";$(".chkItems:checkbox:checked").not("[id^='chkAll_0']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0?t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("Report"),(function(){var e={ids:a,moduleName:t.moduleCode,subModuleCode:t.subModuleCode,refCode:"COMPANYSETUP_DELETE"},o=JSON.stringify(e);n["a"].CommonDeleteData(o).then((async function(e){200==e.status?($(".chkItems:checkbox:checked,#chkAll_0").prop("checked",!1).removeAttr("checked"),$("#DeleteMultiple").addClass("disabled"),t.ShowAlert(t.$t("DeletedSuccessfully",[t.$t("Report")]),"success",!0,t.$t("Alert")),t.PageNumber=parseInt(t.PageNumber)-1,t.PageNumber<=0&&(t.PageNumber=1),await t.FetchData()):t.ShowAlert(t.$t("DeletedError",[t.$t("Report")]),"success",!0,t.$t("Alert"))}))})):t.ShowAlert(t.$t("Selectanyrecordtodelete"))},UpdateStatus:async function(e){var t=this;e="Active"==e?1001:1002;var a="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0&&t.confirmR(t.$t("AreYouSureToUpdateStatus"),!0,t.$t("update")+"  "+t.$t("status"),(function(){var o={ID:a,StatusId:e,IsFor:"COMPANYSETUP_UPDATE",Module:t.moduleCode,Submodule:t.subModuleCode},i=JSON.stringify(o);n["a"].CommonUpdateStatus(i).then(e=>{200==e.status&&($(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),t.ShowAlert(t.$t("RecordUpdatedSuccessfully",[t.$t("Report")]),"success",!0,t.$t("Alert")),t.FetchData())})}))},getRequestParams:function(e,t,a,o,i,s){let r={};return e&&(r["pageNumber"]=e),s&&(r["searchcondition"]=s),i&&(r["is_paged"]=i),a&&(r["sortBy"]=a),o&&(r["sortExp"]=o),t&&(r["pageSize"]=t),r},clickEventOfColumn:function(e,t){var a=this;"title"==t.COLUMN_NAME&&"AnnouncementMessage"==a.moduleCode?(this.recordId=e.id,this.showAddPopup=!0):"title"==t.COLUMN_NAME&&"Review"==a.moduleCode?(this.recordId=e.review_template_id,this.showAddPopup=!0):"title"==t.COLUMN_NAME&&"Skill"==a.moduleCode?(this.recordId=e.skill_id,this.showAddPopup=!0):"stage_name"==t.COLUMN_NAME&&"Stage"==a.moduleCode?(this.recordId=e.stage_id,this.showAddPopup=!0):t.COLUMN_NAME==a.ActionColunName&&(this.recordId=e[a.primaryKeyforModule],this.showAddPopup=!0)},FetchData:async function(){var e=this;this.isLoading=!0;var t=`CompanyId=${e.CompanyId}&pageSize=${e.PageSize}&pageNum=${e.PageNumber}&sortBy=${e.SortBy}&sortExp=${e.SortExp}&searchQuery=${e.searchCondition.trim()}&module=${e.moduleCode}&submodule=${e.subModuleCode}`;let a=e.getServiceMethod(e.moduleCode,e.subModuleCode);await a(t).then((function(t){e.Headers=t.data.FieldSchema,e.Headers.forEach(t=>{t.DISPLAY_NAME=e.$t(t.DISPLAY_NAME),"status_id"==t.COLUMN_NAME&&(t.settings={isInSlot:!0}),t.COLUMN_NAME==e.ActionColunName&&(e.topsearchField.map(e=>e.fieldSearchConditionName=[t.COLUMN_NAME]),t.settings={clickEvent:e.clickEventOfColumn,formatter:e.columnDataFormatter}),t.COLUMN_NAME==e.primaryKeyforModule&&(t.VISIBLE=!1)}),""!=t.data.Data&&null!=t.data.Data?t.data.Data.length>0?(e.ListingData=t.data.Data,e.ListingData.forEach(t=>{"Category"==e.moduleCode&&"Category"==e.subModuleCode?t.category_type_id=null!=JSON.parse(t.category_type_id).Name?JSON.parse(t.category_type_id).Name:"--":"ContactType"==e.moduleCode&&"ContactType"==e.subModuleCode?t.type=null!=JSON.parse(t.type).Name?JSON.parse(t.type).Name:"--":"PaymentGateway"==e.moduleCode&&"PaymentGateway"==e.subModuleCode?t.payment_gateway_code=JSON.parse(t.payment_gateway_code).Name:"ProvisionalRight"==e.moduleCode&&"ProvisionalRight"==e.subModuleCode?e.ListingData.forEach(e=>{e.from_user_id=null!=JSON.parse(e.from_user_id).Name?JSON.parse(e.from_user_id).Name:"--",e.to_user_id=null!=JSON.parse(e.to_user_id).Name?JSON.parse(e.to_user_id).Name:"--"}):"Stage"==e.moduleCode&&"Stage"==e.subModuleCode?t.phase_id=null!=JSON.parse(t.phase_id).Name?JSON.parse(t.phase_id).Name:"--":"Status"==e.moduleCode&&"Status"==e.subModuleCode?t.status_type_id=null!=JSON.parse(t.status_type_id).Name?JSON.parse(t.status_type_id).Name:"--":"User"==e.moduleCode&&"UserTitle"==e.subModuleCode?t.modified_by=null!=JSON.parse(t.modified_by).Name?JSON.parse(t.modified_by).Name:"--":"Location"==e.moduleCode&&"Location"==e.subModuleCode&&(t.location_country=null!=JSON.parse(t.location_country).Name?JSON.parse(t.location_country).Name:"--",t.location_state=null!=JSON.parse(t.location_state).Name?JSON.parse(t.location_state).Name:"--"),t.created_by=JSON.parse(t.created_by).Name}),e.TotalRecords=e.ListingData[0].total_records,e.TotalPages=Math.ceil(e.TotalRecords/e.PageSize),e.CurrentPage=e.PageNumber,e.noRecord=!1):(e.ListingData=[],e.noRecord=!0,e.TotalRecords=0):(e.noRecord=!0,e.ListingData=[],e.TotalRecords=0),setTimeout((function(){e.ResponsiveDataTable("tablelistingdata")}),500),e.isLoading=!1}))},closeModalSharePopup:function(){$("#modalshareview").modal("hide"),this.showsharereportview=!1},getStatuslistForListing:function(e,t){var a=this,o="langCode="+t+"&statusType="+e+"&hasglobal=true";n["a"].statusdropdown(o).then((function(e){if("Success"==e.data.status){var t=e.data.result;a.StatusListForListing=t.data}}))},getServiceMethod:function(e,t){return"AnnouncementMessage"==e&&"AnnouncementMessage"==t?n["a"].AnnouncementMessageListing:"Break"==e&&"Break"==t?n["a"].BreakListing:"Channel"==e&&"Channel"==t?n["a"].ChannelListing:"Category"==e&&"Category"==t?n["a"].CategoryListing:"ContactType"==e&&"ContactType"==t?n["a"].ContactTypeListing:"Department"==e&&"Department"==t?n["a"].DepartmentListing:"Designation"==e&&"Designation"==t?n["a"].DesignationListing:"Company"==e&&"Feedback"==t?n["a"].FeedbackListing:"Company"==e&&"Greeting"==t?n["a"].GreetingListing:"Immigration"==e&&"Passport"==t?n["a"].ImmigrationListing:"IndustryTypes"==e&&"IndustryTypes"==t?n["a"].IndustryTypeListing:"Location"==e&&"Location"==t?n["a"].LocationListing:"LoginAuthorization"==e&&"LoginAuthorization"==t?n["a"].LoginAuthorizationListing:"PaymentGateway"==e&&"PaymentGateway"==t?n["a"].PaymentGatewayListing:"ProvisionalRight"==e&&"ProvisionalRight"==t?n["a"].ProvisionalRightListing:"Review"==e&&"PerformanceReview"==t?n["a"].ReviewTemplateListing:"Shift"==e&&"Shift"==t?n["a"].ShiftListing:"Skill"==e&&"Skill"==t?n["a"].SkillListing:"Stage"==e&&"Stage"==t?n["a"].StageListing:"User"==e&&"UserTitle"==t?n["a"].UserTitleListing:"Status"==e&&"Status"==t?n["a"].StatusListing:"Appointment"==e&&"Service"==t?n["a"].ServiceListing:void 0}}},c=u,p=a("2877"),m=Object(p["a"])(c,r,d,!1,null,null,null),h=m.exports,g={components:{LeftColumn:s["a"],RightContent:h},props:{moduleCode:{type:String,default:""},subModuleCode:{type:String,default:""},primaryKeyforModule:{type:String,default:""},addAPIUrl:{type:String,required:!0},ActionColunName:{type:String,required:!0},addUserGuide:{type:String,required:!0}}},S=g,C=Object(p["a"])(S,o,i,!1,null,null,null);t["a"]=C.exports}}]);
//# sourceMappingURL=chunk-33fb4bb0.js.map