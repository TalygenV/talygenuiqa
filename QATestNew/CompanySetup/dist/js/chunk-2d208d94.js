(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d208d94"],{a719:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("loader",{attrs:{"is-visible":e.isLoading}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-2 mt-2"},[a("LeftColumn",{attrs:{HeaderText:e.$t("Channel")}})],1),a("div",{staticClass:"col-10"},[a("tg-list",{attrs:{IsShowAction:!1,showCheckBox:!0,ModuleName:"Dynamic_Reporting",SubModuleCode:"Dynamic_Reporting",IdentityColumn:"channel_id",HeaderText:e.$t("Channel"),ListData:e.ChannelData,HeaderData:e.filteredHeaders,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,IsSearchFieldsOnTop:!1,RenderRowActionMethod:e.renderActions,ListDataCallBackFunction:e.FetchData,IsFilterApplied:!!e.searchCondition,LegendArray:[],sourcetype:"",NorecordfoundText:e.$t("NoRecordfound")},on:{LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,ActionButtonClick:e.actionButtonClick,SortdataButtonClick:e.sortdata},scopedSlots:e._u([{key:"slotdata",fn:function(t){var o=t.data;return["status_id"==o.column.COLUMN_NAME?[e.isCRMShowStausDrop(o.row.status_id,"COMPANYSETUP_UPDATE")?a("listing-status",{ref:"updatestatus",attrs:{isfor:"COMPANYSETUP_UPDATE",dataid:o.row.channel_id,"data-controller":"COMPANYSETUP_UPDATE",statuslist:e.StatusListForListing,item:o.row.channel_id,"data-action":"index",module:"Channel",subModule:"Channel",dataselected:1001==o.row.status_id.value?"Active":"Inactive",callbackfunction:e.FetchData,isselectedvaluestring:!0}}):e._e()]:e._e()]}}])})],1)]),e.showChannel?a("AddCompanySetup",{attrs:{recordId:e.recordId,title:e.$t("Manage Channel"),moduleName:"Channel",emitName:"addReloadData",addApiUrl:"/Channel/add",subModule:"Channel"},on:{close:function(t){e.showChannel=!1,e.recordId=0},addReloadData:function(t){e.FetchData(),e.showChannel=!1,e.recordId=0}}}):e._e()],1)},i=[],n=(a("14d9"),a("b7ef"),a("9769"));let r=[{title:"Add",iconClass:"fa-plus",callbackfunction:"AddDepartment",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0},{id:"ActiveMultiple",title:"Active",iconClass:"fa-check",callbackfunction:"ActiveMultipleListing",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0},{id:"InactiveMultiple",title:"Inactive",iconClass:"fa-close",callbackfunction:"InactiveMultipleListing",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0},{id:"DeleteMultiple",title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",isdisabled:!0,isvisible:!0}],s=[],l=[{title:"View",callbackfunction:"ViewReport",icon:"fa fa-eye action-icon",additionalSpan:""},{title:"Edit",callbackfunction:"editreport",icon:"fa fa-pencil text-success action-icon",additionalSpan:""},{title:"Send Email",callbackfunction:"sendemail",href:"javascript:void(0)",icon:"fa fa-paper-plane text-success action-icon",additionalSpan:""},{title:"Schedule",callbackfunction:"setschedule",href:"javascript:void(0)",icon:"fa fa-clock-o text-warning action-icon",additionalSpan:""},{title:"Share",callbackfunction:"sharereport",href:"javascript:void(0)",icon:"fa fa-share-alt text-success action-icon",additionalSpan:""}];function c(e,t,a){var o=e;let i=a,r={};r["moduleName"]=t,r["type"]=a,n["a"].GetMainReportSearching(i).then((function(e){console.log(s);var t=e.data;console.log("folderid",t),null!=t&&("FOLDER_NAME"==a&&(o.leftSearchFields[4].listOptions=t.map(e=>{const t={};return t.name=e.FOLDER_NAME,t.value=e.FOLDER_ID.toString(),t}),o.LeadStatusList=t.map(e=>{const t={};return t.name=e.FOLDER_NAME,t.value=e.FOLDER_ID.toString(),t})),"CREATED_BY"==a&&(o.leftSearchFields[3].listOptions=t.map(e=>{const t={};return t.name=e.CREATED_BY,t.value=e.CREATED_ID.toString(),t}),o.LeadStatusList=t.map(e=>{const t={};return t.name=e.CREATED_BY,t.value=e.CREATED_ID.toString(),t})),"MODIFIED_BY"==a&&(o.leftSearchFields[7].listOptions=t.map(e=>{const t={};return t.name=e.MODIFIED_BY,t.value=e.MODIFIED_ID.toString(),t}),o.LeadStatusList=t.map(e=>{const t={};return t.name=e.MODIFIED_BY,t.value=e.MODIFIED_ID.toString(),t})))}))}var d={buttons:r,leftsearchSchema:s,listActions:l,bindleftCommonSearchdropdown:c},u=a("8dd4"),h=a("aae2"),p={components:{LeftColumn:h["a"],AddCompanySetup:u["a"]},props:{sourcetype:{type:String,required:!0}},data(){return{recordId:0,showChannel:!1,noRecord:!1,isLoading:!1,CompanyId:null,ChannelData:[],TotalRecords:0,listheaderbuttons:d.buttons,leftSearchFields:d.leftsearchSchema,ShowManageView:!1,ShowAddCustomReportView:!1,PageSize:10,PageNumber:1,isPaged:1,TotalPages:0,listActions:d.listActions,searchCondition:"",conditionForInstantSearch:"",SortBy:"",SortExp:"",showsharereportview:!1,showemailreportview:!1,showschedulereportview:!1,ReportID:null,reportname:"",reportid:"",foldername:"",folderid:"",LeadStatusList:[],searchcondition:"",MODULENAME:null,SUBMODULECODE:null,privilegeParams:null,sharetype:"",filteredHeaders:[],StatusListForListing:[{STATUS:"Active",STATUS_ID:1001,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#28a745"},{STATUS:"Inactive",STATUS_ID:1002,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#d72435"}]}},async created(){var e=this;e.CompanyId=e.GetUserInfo.CompanyId,e.privilegeParams="controller=Shift&action=",await e.FetchData(),d.bindleftCommonSearchdropdown(e,"Dynamic_Reporting","FOLDER_NAME"),d.bindleftCommonSearchdropdown(e,"Dynamic_Reporting","CREATED_BY"),d.bindleftCommonSearchdropdown(e,"Dynamic_Reporting","MODIFIED_BY"),e.getStatuslistForListing("Dynamic_Reporting","en")},computed:{filteredUserData(){return this.vueObj.UserData.map(e=>{const t={...e};return null!==t.USER_EMP_ID&&""!==t.USER_EMP_ID||(t.USER_EMP_ID="--"),t})}},mounted(){d.leftsearchSchema.forEach(e=>{e.value="",e.isSearch=!1})},methods:{renderActions:function(e){console.log(e)},commonHeaderButtonClick:function(e){switch(console.log(e.callbackfunction),e.callbackfunction){case"commonDeleteData":this.commonDeleteData();break;case"ActiveMultipleListing":this.UpdateStatus("Active");break;case"InactiveMultipleListing":this.UpdateStatus("Inactive");break;case"AddDepartment":this.showChannel=!0;break}},actionButtonClick:function(e,t,a,o){var i=this;switch(e){case"sharereport":i=this;n["a"].CheckPrivilege(i.privilegeParams+"ShareReport").then(a=>{if(!a.data)return i.ShowAlert(i.$t("UnAuthorized"),"warning",!0,"Alert"),!1;i.sharetype=e,i.folderid=t.FOLDER_ID,i.ReportID=t.REPORT_ID,i.foldername=t.REPORTNAME,i.showsharereportview=!0,$("#modalshareview").modal("show"),setTimeout((function(){$("#modalshareview").modal("show"),setTimeout((function(){i.SetBootstraptoolTip()}),200)}),1e3)});break;case"sendemail":i.sendemail(t.REPORT_ID,t.MODULENAME,t.SUBMODULECODE);break;case"editreport":i.editreport(t);break;case"setschedule":i.setschedule(t.REPORT_ID);break;case"ViewReport":i.ViewReport(t.REPORT_ID,t.ACCESS,t.FOLDER_ID);break}},editreport:function(e){var t=this;n["a"].CheckPrivilege(t.privilegeParams+"Update").then(a=>{if(!a.data)return t.ShowAlert(t.$t("UnAuthorized"),"warning",!0,"Alert"),!1;t.$router.push({name:"EditDataReport",params:{Modulename:e.MODULENAME,Submodulecode:e.SUBMODULECODE,ReportName:e.REPORTNAME,ReportID:e.REPORT_ID,Module_Id:e.MODULE_ID,Folder_Id:e.FOLDER_ID,Sub_Module_Id:e.Sub_Module_Id,Version:t.Version,Action:"Edit"}})})},ViewReport:function(e,t,a){var o=this;o.$router.push("/Report/viewcustomreport/"+btoa(JSON.stringify({ReportID:e,ACCESS:t,Folder_Id:a})))},sortdata:async function(e){var t="sort tb_headerSortDown";this.SortBy=e,e===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",t="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",t="sort tb_headerSortUp"):(this.SortExp="ASC",t="sort tb_headerSortDown")),await this.FetchData(),$("#th-"+e+"  span:first-child").attr("class",t)},pagerMethod:async function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,await this.FetchData()},leftCommonSearch:async function(e){this.PageNumber=e.PageNumber,this.isPaged=1,"undefined"!=typeof e.searchCondition?this.searchCondition=e.searchCondition:this.searchCondition="",await this.FetchData()},ManageFolder:function(){var e=this;n["a"].CheckPrivilege(e.privilegeParams+"FolderListing").then(t=>{if(!t.data)return e.ShowAlert(e.$t("UnAuthorized"),"warning",!0,"Alert"),!1;var a;e.ShowManageView=!0,$("#modalManageView").modal("show"),setTimeout((function(){$("#modalManageView").modal("show"),setTimeout((function(){e.SetBootstraptoolTip()}),200)}),1e3),null===(a=e.$refs.managefolder)||void 0===a||a.GetViewList()})},AddDesignation:function(){var e=this;console.log(e,"Add")},commonDeleteData:function(e){var t=this,a="";$(".chkItems:checkbox:checked").not("[id^='chkAll_0']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0?t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("Report"),(function(){var e={ids:a,moduleName:"Channel",subModuleCode:"Channel",refCode:"COMPANYSETUP_DELETE"},o=JSON.stringify(e);n["a"].CommonDeleteData(o).then((async function(e){200==e.status?($(".chkItems:checkbox:checked,#chkAll_0").prop("checked",!1).removeAttr("checked"),$("#DeleteMultiple").addClass("disabled"),t.ShowAlert(t.$t("DeletedSuccessfully",[t.$t("Report")]),"success",!0,t.$t("Alert")),t.PageNumber=parseInt(t.PageNumber)-1,t.PageNumber<=0&&(t.PageNumber=1),await t.FetchData()):t.ShowAlert(t.$t("DeletedError",[t.$t("Report")]),"success",!0,t.$t("Alert"))}))})):t.ShowAlert(t.$t("Selectanyrecordtodelete"))},UpdateStatus:async function(e){var t=this;e="Active"==e?1001:1002;var a="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0&&t.confirmR(t.$t("AreYouSureToUpdateStatus"),!0,t.$t("update")+"  "+t.$t("status"),(function(){var o={ID:a,StatusId:e,IsFor:"COMPANYSETUP_UPDATE",Module:"Channel",Submodule:"Channel"},i=JSON.stringify(o);console.log(i),n["a"].CommonUpdateStatus(i).then(e=>{200==e.status&&($(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),t.ShowAlert(t.$t("RecordUpdatedSuccessfully",[t.$t("Report")]),"success",!0,t.$t("Alert")),t.FetchData())})}))},getRequestParams:function(e,t,a,o,i,n){let r={};return e&&(r["pageNumber"]=e),n&&(r["searchcondition"]=n),i&&(r["is_paged"]=i),a&&(r["sortBy"]=a),o&&(r["sortExp"]=o),t&&(r["pageSize"]=t),r},clickEventOfColumn:function(e,t){"channel_name"==t.COLUMN_NAME&&(this.recordId=e.channel_id,this.showChannel=!0),"USERNAME"==t.COLUMN_NAME&&this.$router.push({name:"viewcustomreport",params:{ReportID:e.REPORT_ID,ACCESS:e.ACCESS}})},FetchData:async function(){var e=this;this.isLoading=!0;var t=`CompanyId=${e.CompanyId}&pageSize=${e.PageSize}&pageNum=${e.PageNumber}&sortBy=${e.SortBy}&sortExp=${e.SortExp}&searchQuery=${e.searchCondition.trim()}`;await n["a"].ChannelListing(t).then((function(t){e.Headers=t.data.FieldSchema;const a=["channel_name","channel_desc","status_id"];e.filteredHeaders=e.Headers.filter(e=>a.includes(e.COLUMN_NAME)),e.filteredHeaders.forEach(t=>{t.settings=null,"channel_name"==t.COLUMN_NAME&&(t.settings={clickEvent:e.clickEventOfColumn,formatter:e.columnDataFormatter}),"status_id"==t.COLUMN_NAME&&(t.settings={isInSlot:!0})}),""!=t.data.Data&&null!=t.data.Data?(t.data.Data.length>0?(e.ChannelData=t.data.Data,e.ChannelData.forEach(e=>{e.created_by=JSON.parse(e.created_by),e.status_id=JSON.parse(e.status_id)}),e.TotalRecords=e.ChannelData[0].total_records,e.TotalPages=Math.ceil(e.TotalRecords/e.PageSize),e.CurrentPage=e.PageNumber,e.noRecord=!1):(e.ReportData=[],e.noRecord=!0,e.TotalRecords=0),void 0!=localStorage.SavedParameters&&localStorage.removeItem("SavedParameters")):(e.noRecord=!0,e.ReportData=[],e.TotalRecords=0),setTimeout((function(){e.ResponsiveDataTable("tablelistingdata")}),500),e.isLoading=!1}))},closeModalSharePopup:function(){$("#modalshareview").modal("hide"),this.showsharereportview=!1},getStatuslistForListing:function(e,t){var a=this,o="langCode="+t+"&statusType="+e+"&hasglobal=true";n["a"].statusdropdown(o).then((function(e){if("Success"==e.data.status){var t=e.data.result;a.StatusListForListing=t.data}}))}}},m=p,S=a("2877"),f=Object(S["a"])(m,o,i,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d208d94.js.map