(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2372"],{"7e6d":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loader",{attrs:{isVisible:t.isLoading}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-2 mt-2"},[a("LeftColumn")],1),a("div",{staticClass:"col-10"},[a("tg-list",{attrs:{IsShowAction:!1,showCheckBox:!0,ModuleName:"Dynamic_Reporting",SubModuleCode:"Dynamic_Reporting",IdentityColumn:"status_id",HeaderText:t.$t("Status"),ListData:t.StatusData,HeaderData:t.filteredHeaders,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords,IsSearchFieldsOnTop:!1,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.FetchData,IsFilterApplied:!!t.searchCondition,LegendArray:[],sourcetype:"",NorecordfoundText:t.$t("NoRecordfound")},on:{LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,ActionButtonClick:t.actionButtonClick,SortdataButtonClick:t.sortdata},scopedSlots:t._u([{key:"slotdata",fn:function(e){var o=e.data;return["is_active"==o.column.COLUMN_NAME?[t.isCRMShowStausDrop(o.row.is_active,"COMPANYSETUP_UPDATE")?a("listing-status",{ref:"updatestatus",attrs:{isfor:"COMPANYSETUP_UPDATE",dataid:o.row.status_id,"data-controller":"COMPANYSETUP_UPDATE",statuslist:t.StatusListForListing,item:o.row.status_id,"data-action":"index",module:"Status",subModule:"Status",dataselected:"Active"===o.row.is_active?"ACTIVE":"INACTIVE",callbackfunction:t.FetchData,isselectedvaluestring:!0}}):t._e()]:t._e()]}}])})],1)]),t.showStatus?a("AddCompanySetup",{attrs:{recordId:t.recordId,title:t.$t("Manage Status"),moduleName:"Status",emitName:"addReloadData",addApiUrl:"/Status/add",subModule:"Status"},on:{close:function(e){t.showStatus=!1,t.recordId=0},addReloadData:function(e){t.FetchData(),t.showStatus=!1,t.recordId=0}}}):t._e()],1)},i=[],s=(a("14d9"),a("b7ef"),a("9769"));let r=[{title:"Add",iconClass:"fa-plus",callbackfunction:"AddStatus",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0},{id:"ActiveMultiple",title:"Active",iconClass:"fa-check",callbackfunction:"ActiveMultipleListing",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0},{id:"InactiveMultiple",title:"Inactive",iconClass:"fa-close",callbackfunction:"InactiveMultipleListing",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0},{id:"DeleteMultiple",title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",isdisabled:!0,isvisible:!0}],n=[],c=[{title:"View",callbackfunction:"ViewReport",icon:"fa fa-eye action-icon",additionalSpan:""},{title:"Edit",callbackfunction:"editreport",icon:"fa fa-pencil text-success action-icon",additionalSpan:""},{title:"Send Email",callbackfunction:"sendemail",href:"javascript:void(0)",icon:"fa fa-paper-plane text-success action-icon",additionalSpan:""},{title:"Schedule",callbackfunction:"setschedule",href:"javascript:void(0)",icon:"fa fa-clock-o text-warning action-icon",additionalSpan:""},{title:"Share",callbackfunction:"sharereport",href:"javascript:void(0)",icon:"fa fa-share-alt text-success action-icon",additionalSpan:""}];function l(t,e,a){var o=t;let i=a,r={};r["moduleName"]=e,r["type"]=a,s["a"].GetMainReportSearching(i).then((function(t){console.log(n);var e=t.data;console.log("folderid",e),null!=e&&("FOLDER_NAME"==a&&(o.leftSearchFields[4].listOptions=e.map(t=>{const e={};return e.name=t.FOLDER_NAME,e.value=t.FOLDER_ID.toString(),e}),o.LeadStatusList=e.map(t=>{const e={};return e.name=t.FOLDER_NAME,e.value=t.FOLDER_ID.toString(),e})),"CREATED_BY"==a&&(o.leftSearchFields[3].listOptions=e.map(t=>{const e={};return e.name=t.CREATED_BY,e.value=t.CREATED_ID.toString(),e}),o.LeadStatusList=e.map(t=>{const e={};return e.name=t.CREATED_BY,e.value=t.CREATED_ID.toString(),e})),"MODIFIED_BY"==a&&(o.leftSearchFields[7].listOptions=e.map(t=>{const e={};return e.name=t.MODIFIED_BY,e.value=t.MODIFIED_ID.toString(),e}),o.LeadStatusList=e.map(t=>{const e={};return e.name=t.MODIFIED_BY,e.value=t.MODIFIED_ID.toString(),e})))}))}var d={buttons:r,leftsearchSchema:n,listActions:c,bindleftCommonSearchdropdown:l},u=a("8dd4"),h=a("aae2"),S={components:{LeftColumn:h["a"],AddCompanySetup:u["a"]},props:{sourcetype:{type:String,required:!0}},data(){return{recordId:0,noRecord:!1,isLoading:!1,CompanyId:null,StatusData:[],TotalRecords:0,listheaderbuttons:d.buttons,leftSearchFields:d.leftsearchSchema,ShowManageView:!1,ShowAddCustomReportView:!1,PageSize:10,PageNumber:1,isPaged:1,TotalPages:0,listActions:d.listActions,searchCondition:"",conditionForInstantSearch:"",SortBy:"",SortExp:"",showsharereportview:!1,showemailreportview:!1,showschedulereportview:!1,ReportID:null,reportname:"",reportid:"",foldername:"",folderid:"",LeadStatusList:[],searchcondition:"",MODULENAME:null,SUBMODULECODE:null,privilegeParams:null,sharetype:"",filteredHeaders:[],StatusListForListing:[{STATUS:"Active",STATUS_ID:1001,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#28a745"},{STATUS:"Inactive",STATUS_ID:1002,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#d72435"},{STATUS:"Deleted",STATUS_ID:1003,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#3F8492"}],showStatus:!1}},async created(){var t=this;t.CompanyId=t.GetUserInfo.CompanyId,t.privilegeParams="controller=Status&action=",await t.FetchData(),d.bindleftCommonSearchdropdown(t,"Dynamic_Reporting","FOLDER_NAME"),d.bindleftCommonSearchdropdown(t,"Dynamic_Reporting","CREATED_BY"),d.bindleftCommonSearchdropdown(t,"Dynamic_Reporting","MODIFIED_BY"),t.getStatuslistForListing("Dynamic_Reporting","en")},computed:{filteredUserData(){return this.vueObj.UserData.map(t=>{const e={...t};return null!==e.USER_EMP_ID&&""!==e.USER_EMP_ID||(e.USER_EMP_ID="--"),e})}},mounted(){d.leftsearchSchema.forEach(t=>{t.value="",t.isSearch=!1})},methods:{renderActions:function(t){console.log(t)},commonHeaderButtonClick:function(t){switch(t.callbackfunction){case"ManageFolder":this.ManageFolder();break;case"commonDeleteData":this.commonDeleteData();break;case"AddStatus":this.showStatus=!0;break;case"ActiveMultipleListing":this.UpdateStatus("Active");break;case"InactiveMultipleListing":this.UpdateStatus("Inactive");break}},actionButtonClick:function(t,e,a,o){var i=this;switch(t){case"sharereport":i=this;s["a"].CheckPrivilege(i.privilegeParams+"ShareReport").then(a=>{if(!a.data)return i.ShowAlert(i.$t("UnAuthorized"),"warning",!0,"Alert"),!1;i.sharetype=t,i.folderid=e.FOLDER_ID,i.ReportID=e.REPORT_ID,i.foldername=e.REPORTNAME,i.showsharereportview=!0,$("#modalshareview").modal("show"),setTimeout((function(){$("#modalshareview").modal("show"),setTimeout((function(){i.SetBootstraptoolTip()}),200)}),1e3)});break;case"sendemail":i.sendemail(e.REPORT_ID,e.MODULENAME,e.SUBMODULECODE);break;case"editreport":i.editreport(e);break;case"setschedule":i.setschedule(e.REPORT_ID);break;case"ViewReport":i.ViewReport(e.REPORT_ID,e.ACCESS,e.FOLDER_ID);break}},editreport:function(t){var e=this;s["a"].CheckPrivilege(e.privilegeParams+"Update").then(a=>{if(!a.data)return e.ShowAlert(e.$t("UnAuthorized"),"warning",!0,"Alert"),!1;e.$router.push({name:"EditDataReport",params:{Modulename:t.MODULENAME,Submodulecode:t.SUBMODULECODE,ReportName:t.REPORTNAME,ReportID:t.REPORT_ID,Module_Id:t.MODULE_ID,Folder_Id:t.FOLDER_ID,Sub_Module_Id:t.Sub_Module_Id,Version:e.Version,Action:"Edit"}})})},ViewReport:function(t,e,a){var o=this;o.$router.push("/Report/viewcustomreport/"+btoa(JSON.stringify({ReportID:t,ACCESS:e,Folder_Id:a})))},sortdata:async function(t){var e="sort tb_headerSortDown";this.SortBy=t,t===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",e="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",e="sort tb_headerSortUp"):(this.SortExp="ASC",e="sort tb_headerSortDown")),await this.FetchData(),$("#th-"+t+"  span:first-child").attr("class",e)},pagerMethod:async function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,await this.FetchData()},leftCommonSearch:async function(t){this.PageNumber=t.PageNumber,this.isPaged=1,"undefined"!=typeof t.searchCondition?this.searchCondition=t.searchCondition:this.searchCondition="",await this.FetchData()},ManageFolder:function(){var t=this;s["a"].CheckPrivilege(t.privilegeParams+"FolderListing").then(e=>{if(!e.data)return t.ShowAlert(t.$t("UnAuthorized"),"warning",!0,"Alert"),!1;var a;t.ShowManageView=!0,$("#modalManageView").modal("show"),setTimeout((function(){$("#modalManageView").modal("show"),setTimeout((function(){t.SetBootstraptoolTip()}),200)}),1e3),null===(a=t.$refs.managefolder)||void 0===a||a.GetViewList()})},AddStatus:function(){var t=this;console.log(t,"Add")},commonDeleteData:function(t){var e=this,a="";$(".chkItems:checkbox:checked").not("[id^='chkAll_0']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0?e.confirmR(e.$t("ConfirmDelete"),!0,e.$t("Delete")+"  "+e.$t("Status"),(async function(){var t={ids:a,moduleName:"Status",subModuleCode:"Status",refCode:"COMPANYSETUP_DELETE"},o=JSON.stringify(t);console.log(o),await s["a"].CommonDeleteData(o).then((async function(t){console.log(t),200==t.status?($(".chkItems:checkbox:checked,#chkAll_0").prop("checked",!1).removeAttr("checked"),$("#DeleteMultiple").addClass("disabled"),e.ShowAlert(e.$t("DeletedSuccess",[e.$t("Status")]),"success",!0,e.$t("Alert")),e.PageNumber=parseInt(e.PageNumber)-1,e.PageNumber<=0&&(e.PageNumber=1),await e.FetchData()):e.ShowAlert(e.$t("DeletedError",[e.$t("Report")]),"success",!0,e.$t("Alert"))}))})):e.ShowAlert(e.$t("Selectanyrecordtodelete"))},UpdateStatus:async function(t){var e=this;t="Active"==t?1001:1002;var a="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0&&e.confirmR(e.$t("AreYouSureToUpdateStatus"),!0,e.$t("update")+"  "+e.$t("status"),(function(){var o={ID:a,StatusId:t,IsFor:"COMPANYSETUP_UPDATE",Module:"Status",Submodule:"Status"},i=JSON.stringify(o);console.log(i),s["a"].CommonUpdateStatus(i).then(t=>{200==t.status&&($(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),e.ShowAlert(e.$t("RecordUpdatedSuccessfully",[e.$t("Report")]),"success",!0,e.$t("Alert")),e.FetchData())})}))},getRequestParams:function(t,e,a,o,i,s){let r={};return t&&(r["pageNumber"]=t),s&&(r["searchcondition"]=s),i&&(r["is_paged"]=i),a&&(r["sortBy"]=a),o&&(r["sortExp"]=o),e&&(r["pageSize"]=e),r},clickEventOfColumn:function(t,e){"status_name"==e.COLUMN_NAME&&(this.recordId=t.status_id,this.showStatus=!0),"USERNAME"==e.COLUMN_NAME&&this.$router.push({name:"viewcustomreport",params:{ReportID:t.REPORT_ID,ACCESS:t.ACCESS}})},async FetchData(){var t=this;t.isLoading=!0;var e=`CompanyId=${t.CompanyId}&pageSize=${t.PageSize}&pageNum=${t.PageNumber}&sortBy=${t.SortBy}&sortExp=${t.SortExp}&searchQuery=${t.searchCondition.trim()}`;await s["a"].StatusListing(e).then((function(e){t.Headers=e.data.FieldSchema;const a=["status_name","status_desc","status_type_id","is_active"];t.filteredHeaders=t.Headers.filter(t=>a.includes(t.COLUMN_NAME)),t.filteredHeaders.forEach(e=>{e.settings=null,"status_name"==e.COLUMN_NAME&&(e.settings={clickEvent:t.clickEventOfColumn,formatter:t.columnDataFormatter}),"is_active"==e.COLUMN_NAME&&(e.settings={isInSlot:!0})}),""!=e.data.Data&&null!=e.data.Data?(e.data.Data.length>0?(t.StatusData=e.data.Data,t.StatusData.forEach(t=>{t.created_by=JSON.parse(t.created_by),t.modified_by=JSON.parse(t.modified_by),t.status_type_id=null!=JSON.parse(t.status_type_id).Name?JSON.parse(t.status_type_id).Name:"--"}),t.TotalRecords=t.StatusData[0].total_records,t.TotalPages=Math.ceil(t.TotalRecords/t.PageSize),t.CurrentPage=t.PageNumber,t.noRecord=!1):(t.noRecord=!0,t.TotalRecords=0),void 0!=localStorage.SavedParameters&&localStorage.removeItem("SavedParameters")):(t.noRecord=!0,t.TotalRecords=0),setTimeout((function(){t.ResponsiveDataTable("tablelistingdata")}),500)})),t.isLoading=!1},closeModalSharePopup:function(){$("#modalshareview").modal("hide"),this.showsharereportview=!1},getStatuslistForListing:function(t,e){var a=this,o="langCode="+e+"&statusType="+t+"&hasglobal=true";s["a"].statusdropdown(o).then((function(t){if("Success"==t.data.status){var e=t.data.result;a.StatusListForListing=e.data}}))}}},p=S,m=a("2877"),f=Object(m["a"])(p,o,i,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0e2372.js.map