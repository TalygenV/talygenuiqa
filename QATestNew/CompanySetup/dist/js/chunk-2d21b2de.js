(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21b2de"],{bf59:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loader",{attrs:{"is-visible":t.isLoading}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-2 mt-2"},[a("LeftColumn")],1),a("div",{staticClass:"col-10"},[a("tg-list",{attrs:{IsShowAction:!1,showCheckBox:!0,ModuleName:"Dynamic_Reporting",SubModuleCode:"Dynamic_Reporting",IdentityColumn:"designation_id",HeaderText:t.$t("CompanyNotification"),ListData:t.CompanyNotificationData,HeaderData:t.filteredHeaders,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords,IsSearchFieldsOnTop:!1,SearchPosition:"top",SearchFields:t.topSearchFields,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.FetchData,IsFilterApplied:!!t.searchCondition,LegendArray:[],sourcetype:"",NorecordfoundText:t.$t("NoRecordfound")},on:{LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,ActionButtonClick:t.actionButtonClick,SortdataButtonClick:t.sortdata},scopedSlots:t._u([{key:"slotdata",fn:function(e){var i=e.data;return["status_id"==i.column.COLUMN_NAME?[t.isCRMShowStausDrop(i.row.status_id,"COMPANYSETUP_UPDATE")?a("listing-status",{ref:"updatestatus",attrs:{isfor:"COMPANYSETUP_UPDATE",dataid:i.row.designation_id,"data-controller":"COMPANYSETUP_UPDATE",statuslist:t.StatusListForListing,item:i.row.designation_id,"data-action":"index",module:"Designation",subModule:"Designation",dataselected:1001==i.row.status_id.value?"Active":"Inactive",callbackfunction:t.FetchData,isselectedvaluestring:!0}}):t._e()]:t._e()]}}])})],1)]),t.showCompanyNotification?a("AddCompanySetup",{attrs:{recordId:t.recordId,title:t.$t("NotificationType"),moduleName:"CompanyNotification",emitName:"addReloadData",addApiUrl:"/CompanyNotification/add",subModule:"CompanyNotification"},on:{close:function(e){t.showCompanyNotification=!1,t.recordId=0},addReloadData:function(e){t.FetchData(),t.showCompanyNotification=!1,t.recordId=0}}}):t._e()],1)},o=[],n=(a("14d9"),a("b7ef"),a("9769"));let s=[{title:"Add",iconClass:"fa-plus",callbackfunction:"AddDepartment",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0},{id:"ActiveMultiple",title:"Active",iconClass:"fa-check",callbackfunction:"ActiveMultipleListing",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0},{id:"InactiveMultiple",title:"Inactive",iconClass:"fa-close",callbackfunction:"InactiveMultipleListing",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0},{id:"DeleteMultiple",title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",isdisabled:!0,isvisible:!0}],r=[{fieldName:"Search by Designation Name",fieldType:"text",fieldSearchConditionName:["designation_name"],isSearch:!0}],c=[{title:"View",callbackfunction:"ViewReport",icon:"fa fa-eye action-icon",additionalSpan:""},{title:"Edit",callbackfunction:"editreport",icon:"fa fa-pencil text-success action-icon",additionalSpan:""},{title:"Send Email",callbackfunction:"sendemail",href:"javascript:void(0)",icon:"fa fa-paper-plane text-success action-icon",additionalSpan:""},{title:"Schedule",callbackfunction:"setschedule",href:"javascript:void(0)",icon:"fa fa-clock-o text-warning action-icon",additionalSpan:""},{title:"Share",callbackfunction:"sharereport",href:"javascript:void(0)",icon:"fa fa-share-alt text-success action-icon",additionalSpan:""}];function d(t,e,a){var i=t;let o=a,s={};s["moduleName"]=e,s["type"]=a,n["a"].GetMainReportSearching(o).then((function(t){console.log(leftsearchSchema);var e=t.data;console.log("folderid",e),null!=e&&("FOLDER_NAME"==a&&(i.leftSearchFields[4].listOptions=e.map(t=>{const e={};return e.name=t.FOLDER_NAME,e.value=t.FOLDER_ID.toString(),e}),i.LeadStatusList=e.map(t=>{const e={};return e.name=t.FOLDER_NAME,e.value=t.FOLDER_ID.toString(),e})),"CREATED_BY"==a&&(i.leftSearchFields[3].listOptions=e.map(t=>{const e={};return e.name=t.CREATED_BY,e.value=t.CREATED_ID.toString(),e}),i.LeadStatusList=e.map(t=>{const e={};return e.name=t.CREATED_BY,e.value=t.CREATED_ID.toString(),e})),"MODIFIED_BY"==a&&(i.leftSearchFields[7].listOptions=e.map(t=>{const e={};return e.name=t.MODIFIED_BY,e.value=t.MODIFIED_ID.toString(),e}),i.LeadStatusList=e.map(t=>{const e={};return e.name=t.MODIFIED_BY,e.value=t.MODIFIED_ID.toString(),e})))}))}var l={buttons:s,topsearchSchema:r,listActions:c,bindleftCommonSearchdropdown:d},u=a("8dd4"),h=a("aae2"),p={components:{LeftColumn:h["a"],AddCompanySetup:u["a"]},props:{sourcetype:{type:String,required:!0}},data(){return{recordId:0,showCompanyNotification:!1,noRecord:!1,isLoading:!1,CompanyId:null,CompanyNotificationData:[],TotalRecords:0,listheaderbuttons:l.buttons,topSearchFields:l.topsearchSchema,ShowManageView:!1,ShowAddCustomReportView:!1,PageSize:10,PageNumber:1,isPaged:1,TotalPages:0,listActions:l.listActions,searchCondition:"",conditionForInstantSearch:"",SortBy:"",SortExp:"",showsharereportview:!1,showemailreportview:!1,showschedulereportview:!1,ReportID:null,reportname:"",reportid:"",foldername:"",folderid:"",LeadStatusList:[],searchcondition:"",MODULENAME:null,SUBMODULECODE:null,privilegeParams:null,sharetype:"",filteredHeaders:[],StatusListForListing:[{STATUS:"Active",STATUS_ID:1001,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#28a745"},{STATUS:"Inactive",STATUS_ID:1002,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#d72435"}]}},async created(){var t=this;t.CompanyId=t.GetUserInfo.CompanyId,t.privilegeParams="controller=Shift&action=",await t.FetchData(),l.bindleftCommonSearchdropdown(t,"Dynamic_Reporting","FOLDER_NAME"),l.bindleftCommonSearchdropdown(t,"Dynamic_Reporting","CREATED_BY"),l.bindleftCommonSearchdropdown(t,"Dynamic_Reporting","MODIFIED_BY"),t.getStatuslistForListing("Dynamic_Reporting","en")},computed:{filteredUserData(){return this.vueObj.UserData.map(t=>{const e={...t};return null!==e.USER_EMP_ID&&""!==e.USER_EMP_ID||(e.USER_EMP_ID="--"),e})}},mounted(){l.topsearchSchema.forEach(t=>{t.value="",t.isSearch=!1})},methods:{renderActions:function(t){console.log(t)},commonHeaderButtonClick:function(t){switch(console.log(t),t.callbackfunction){case"commonDeleteData":this.commonDeleteData();break;case"ActiveMultipleListing":this.UpdateStatus("Active");break;case"InactiveMultipleListing":this.UpdateStatus("InActive");break;case"AddDepartment":this.showCompanyNotification=!0;break}},actionButtonClick:function(t,e,a,i){var o=this;switch(t){case"sharereport":o=this;n["a"].CheckPrivilege(o.privilegeParams+"ShareReport").then(a=>{if(!a.data)return o.ShowAlert(o.$t("UnAuthorized"),"warning",!0,"Alert"),!1;o.sharetype=t,o.folderid=e.FOLDER_ID,o.ReportID=e.REPORT_ID,o.foldername=e.REPORTNAME,o.showsharereportview=!0,$("#modalshareview").modal("show"),setTimeout((function(){$("#modalshareview").modal("show"),setTimeout((function(){o.SetBootstraptoolTip()}),200)}),1e3)});break;case"sendemail":o.sendemail(e.REPORT_ID,e.MODULENAME,e.SUBMODULECODE);break;case"editreport":o.editreport(e);break;case"setschedule":o.setschedule(e.REPORT_ID);break;case"ViewReport":o.ViewReport(e.REPORT_ID,e.ACCESS,e.FOLDER_ID);break}},editreport:function(t){var e=this;n["a"].CheckPrivilege(e.privilegeParams+"Update").then(a=>{if(!a.data)return e.ShowAlert(e.$t("UnAuthorized"),"warning",!0,"Alert"),!1;e.$router.push({name:"EditDataReport",params:{Modulename:t.MODULENAME,Submodulecode:t.SUBMODULECODE,ReportName:t.REPORTNAME,ReportID:t.REPORT_ID,Module_Id:t.MODULE_ID,Folder_Id:t.FOLDER_ID,Sub_Module_Id:t.Sub_Module_Id,Version:e.Version,Action:"Edit"}})})},ViewReport:function(t,e,a){var i=this;i.$router.push("/Report/viewcustomreport/"+btoa(JSON.stringify({ReportID:t,ACCESS:e,Folder_Id:a})))},sortdata:async function(t){var e="sort tb_headerSortDown";this.SortBy=t,t===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",e="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",e="sort tb_headerSortUp"):(this.SortExp="ASC",e="sort tb_headerSortDown")),await this.FetchData(),$("#th-"+t+"  span:first-child").attr("class",e)},pagerMethod:async function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,await this.FetchData()},leftCommonSearch:async function(t){this.PageNumber=t.PageNumber,this.isPaged=1,"undefined"!=typeof t.searchCondition?this.searchCondition=t.searchCondition:this.searchCondition="",await this.FetchData()},ManageFolder:function(){var t=this;n["a"].CheckPrivilege(t.privilegeParams+"FolderListing").then(e=>{if(!e.data)return t.ShowAlert(t.$t("UnAuthorized"),"warning",!0,"Alert"),!1;var a;t.ShowManageView=!0,$("#modalManageView").modal("show"),setTimeout((function(){$("#modalManageView").modal("show"),setTimeout((function(){t.SetBootstraptoolTip()}),200)}),1e3),null===(a=t.$refs.managefolder)||void 0===a||a.GetViewList()})},AddDesignation:function(){var t=this;console.log(t,"Add")},commonDeleteData:function(t){var e=this,a="";$(".chkItems:checkbox:checked").not("[id^='chkAll_0']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0?e.confirmR(e.$t("ConfirmDelete"),!0,e.$t("Delete")+"  "+e.$t("Report"),(function(){var t={ids:a,moduleName:"Designation",subModuleCode:"Designation",refCode:"COMPANYSETUP_DELETE"},i=JSON.stringify(t);n["a"].CommonDeleteData(i).then((async function(t){200==t.status?($(".chkItems:checkbox:checked,#chkAll_0").prop("checked",!1).removeAttr("checked"),$("#DeleteMultiple").addClass("disabled"),e.ShowAlert(e.$t("DeletedSuccessfully",[e.$t("Report")]),"success",!0,e.$t("Alert")),e.PageNumber=parseInt(e.PageNumber)-1,e.PageNumber<=0&&(e.PageNumber=1),await e.FetchData()):e.ShowAlert(e.$t("DeletedError",[e.$t("Report")]),"success",!0,e.$t("Alert"))}))})):e.ShowAlert(e.$t("Selectanyrecordtodelete"))},UpdateStatus:async function(t){var e=this;t="Active"==t?1001:1002;var a="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0&&e.confirmR(e.$t("AreYouSureToUpdateStatus"),!0,e.$t("update")+"  "+e.$t("status"),(function(){var i={ID:a,StatusId:t,IsFor:"COMPANYSETUP_UPDATE",Module:"Designation",Submodule:"Designation"},o=JSON.stringify(i);n["a"].CommonUpdateStatus(o).then(t=>{200==t.status&&($(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),e.ShowAlert(e.$t("DeletedSuccess",[e.$t("Report")]),"success",!0,e.$t("Alert")),e.FetchData())})}))},getRequestParams:function(t,e,a,i,o,n){let s={};return t&&(s["pageNumber"]=t),n&&(s["searchcondition"]=n),o&&(s["is_paged"]=o),a&&(s["sortBy"]=a),i&&(s["sortExp"]=i),e&&(s["pageSize"]=e),s},clickEventOfColumn:function(t,e){console.log(t,e),"designation_name"==e.COLUMN_NAME&&(this.recordId=t.designation_id,this.showCompanyNotification=!0),"USERNAME"==e.COLUMN_NAME&&this.$router.push({name:"viewcustomreport",params:{ReportID:t.REPORT_ID,ACCESS:t.ACCESS}})},FetchData:async function(){var t=this;this.isLoading=!0;var e=`CompanyId=${t.CompanyId}&pageSize=${t.PageSize}&pageNum=${t.PageNumber}&searchQuery=${t.searchCondition.trim()}`;await n["a"].CompanyNotificationListing(e).then((function(e){t.Headers=e.data.FieldSchema;const a=["designation_name","designation_desc","status_id"];t.filteredHeaders=t.Headers.filter(t=>a.includes(t.COLUMN_NAME)),t.filteredHeaders.forEach(e=>{e.settings=null,"designation_name"==e.COLUMN_NAME&&(e.settings={clickEvent:t.clickEventOfColumn,formatter:t.columnDataFormatter}),"status_id"==e.COLUMN_NAME&&(e.settings={isInSlot:!0})}),""!=e.data.Data&&null!=e.data.Data?(e.data.Data.length>0?(t.CompanyNotificationData=e.data.Data,t.CompanyNotificationData.forEach(t=>{t.created_by=JSON.parse(t.created_by),t.modified_by=JSON.parse(t.modified_by),t.status_id=JSON.parse(t.status_id)}),t.TotalRecords=t.CompanyNotificationData[0].total_records,t.TotalPages=Math.ceil(t.TotalRecords/t.PageSize),t.CurrentPage=t.PageNumber,t.noRecord=!1):(t.CompanyNotificationData=[],t.noRecord=!0,t.TotalRecords=0),void 0!=localStorage.SavedParameters&&localStorage.removeItem("SavedParameters")):(t.noRecord=!0,t.CompanyNotificationData=[],t.TotalRecords=0),setTimeout((function(){t.ResponsiveDataTable("tablelistingdata")}),500),t.isLoading=!1}))},closeModalSharePopup:function(){$("#modalshareview").modal("hide"),this.showsharereportview=!1},getStatuslistForListing:function(t,e){var a=this,i="langCode="+e+"&statusType="+t+"&hasglobal=true";n["a"].statusdropdown(i).then((function(t){if("Success"==t.data.status){var e=t.data.result;a.StatusListForListing=e.data}}))}}},m=p,f=a("2877"),S=Object(f["a"])(m,i,o,!1,null,null,null);e["default"]=S.exports}}]);
//# sourceMappingURL=chunk-2d21b2de.js.map