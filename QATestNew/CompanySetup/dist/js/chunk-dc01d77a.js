(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc01d77a"],{3291:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("loader",{attrs:{isVisible:e.isLoading}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-2 mt-2"},[a("LeftColumn")],1),a("div",{staticClass:"col-10"},[a("tg-list",{attrs:{IsShowAction:!1,showCheckBox:!0,ModuleName:"Dynamic_Reporting",SubModuleCode:"Dynamic_Reporting",IdentityColumn:"greeting_template_id",HeaderText:e.$t("Greeting"),ListData:e.GreetingData,HeaderData:e.filteredHeaders,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,IsSearchFieldsOnTop:!1,RenderRowActionMethod:e.renderActions,ListDataCallBackFunction:e.FetchData,IsFilterApplied:!!e.searchCondition,LegendArray:[],sourcetype:"",NorecordfoundText:e.$t("NoRecordfound")},on:{LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,ActionButtonClick:e.actionButtonClick,SortdataButtonClick:e.sortdata},scopedSlots:e._u([{key:"slotdata",fn:function(t){var i=t.data;return["template_id"===i.column.COLUMN_NAME?[a("select",{staticClass:"form-control w-100",attrs:{name:"template_id"}},[a("option",{attrs:{value:"",selected:"selected"}},[e._v("Select Template")]),a("option",{domProps:{value:i.row.template_id}},[e._v(e._s(i.row.template_id))])])]:e._e(),"status_id"==i.column.COLUMN_NAME?[e.isCRMShowStausDrop(i.row.status_id,"COMPANYSETUP_UPDATE")?a("listing-status",{ref:"updatestatus",attrs:{isfor:"COMPANYSETUP_UPDATE",dataid:i.row.greeting_template_id,"data-controller":"COMPANYSETUP_UPDATE",statuslist:e.StatusListForListing,item:i.row.greeting_template_id,"data-action":"index",module:"Company",subModule:"Greeting",dataselected:1001==i.row.status_id.value?"Active":"Inactive",callbackfunction:e.FetchData,isselectedvaluestring:!0}}):e._e()]:e._e()]}}])})],1)]),e.showGreeting?a("AddCompanySetup",{attrs:{recordId:e.recordId,title:e.$t("CAMANAGEGreeting"),moduleName:"Greeting",emitName:"addReloadData",addApiUrl:"/Greeting/add",subModule:"Greeting"},on:{close:function(t){e.showGreeting=!1,e.recordId=0},addReloadData:function(t){e.FetchData(),e.showGreeting=!1,e.recordId=0}}}):e._e()],1)},o=[],r=(a("14d9"),a("b7ef"),a("9769")),n=a("d731"),s=a("8dd4"),c=a("aae2"),l={components:{LeftColumn:c["a"],AddCompanySetup:s["a"]},props:{sourcetype:{type:String,required:!0}},data(){return{recordId:0,noRecord:!1,isLoading:!1,CompanyId:null,GreetingData:[],TotalRecords:0,listheaderbuttons:n["a"].buttons,leftSearchFields:n["a"].leftsearchSchema,ShowManageView:!1,ShowAddCustomReportView:!1,PageSize:10,PageNumber:1,isPaged:1,TotalPages:0,listActions:n["a"].listActions,searchCondition:"",conditionForInstantSearch:"",SortBy:"",SortExp:"",showsharereportview:!1,showemailreportview:!1,showschedulereportview:!1,ReportID:null,reportname:"",reportid:"",foldername:"",folderid:"",LeadStatusList:[],searchcondition:"",MODULENAME:null,SUBMODULECODE:null,privilegeParams:null,sharetype:"",filteredHeaders:[],StatusListForListing:[{STATUS:"Active",STATUS_ID:1001,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#28a745"},{STATUS:"Inactive",STATUS_ID:1002,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#d72435"}],showGreeting:!1}},async created(){var e=this;e.CompanyId=e.GetUserInfo.CompanyId,e.privilegeParams="controller=Greeting&action=",await e.FetchData(),n["a"].bindleftCommonSearchdropdown(e,"Dynamic_Reporting","FOLDER_NAME"),n["a"].bindleftCommonSearchdropdown(e,"Dynamic_Reporting","CREATED_BY"),n["a"].bindleftCommonSearchdropdown(e,"Dynamic_Reporting","MODIFIED_BY"),e.getStatuslistForListing("Dynamic_Reporting","en")},computed:{filteredUserData(){return this.vueObj.UserData.map(e=>{const t={...e};return null!==t.USER_EMP_ID&&""!==t.USER_EMP_ID||(t.USER_EMP_ID="--"),t})}},mounted(){n["a"].leftsearchSchema.forEach(e=>{e.value="",e.isSearch=!1})},methods:{renderActions:function(e){console.log(e)},commonHeaderButtonClick:function(e){switch(e.callbackfunction){case"ActiveMultipleListing":this.UpdateStatus("Active");break;case"InactiveMultipleListing":this.UpdateStatus("Inactive");break;case"commonDeleteData":this.commonDeleteData();break;case"AddGreeting":this.showGreeting=!0;break}},actionButtonClick:function(e,t,a,i){var o=this;switch(e){case"sharereport":o=this;r["a"].CheckPrivilege(o.privilegeParams+"ShareReport").then(a=>{if(!a.data)return o.ShowAlert(o.$t("UnAuthorized"),"warning",!0,"Alert"),!1;o.sharetype=e,o.folderid=t.FOLDER_ID,o.ReportID=t.REPORT_ID,o.foldername=t.REPORTNAME,o.showsharereportview=!0,$("#modalshareview").modal("show"),setTimeout((function(){$("#modalshareview").modal("show"),setTimeout((function(){o.SetBootstraptoolTip()}),200)}),1e3)});break;case"sendemail":o.sendemail(t.REPORT_ID,t.MODULENAME,t.SUBMODULECODE);break;case"editreport":o.editreport(t);break;case"setschedule":o.setschedule(t.REPORT_ID);break;case"ViewReport":o.ViewReport(t.REPORT_ID,t.ACCESS,t.FOLDER_ID);break}},editreport:function(e){var t=this;r["a"].CheckPrivilege(t.privilegeParams+"Update").then(a=>{if(!a.data)return t.ShowAlert(t.$t("UnAuthorized"),"warning",!0,"Alert"),!1;t.$router.push({name:"EditDataReport",params:{Modulename:e.MODULENAME,Submodulecode:e.SUBMODULECODE,ReportName:e.REPORTNAME,ReportID:e.REPORT_ID,Module_Id:e.MODULE_ID,Folder_Id:e.FOLDER_ID,Sub_Module_Id:e.Sub_Module_Id,Version:t.Version,Action:"Edit"}})})},ViewReport:function(e,t,a){var i=this;i.$router.push("/Report/viewcustomreport/"+btoa(JSON.stringify({ReportID:e,ACCESS:t,Folder_Id:a})))},sortdata:async function(e){var t="sort tb_headerSortDown";this.SortBy=e,e===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",t="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",t="sort tb_headerSortUp"):(this.SortExp="ASC",t="sort tb_headerSortDown")),await this.FetchData(),$("#th-"+e+"  span:first-child").attr("class",t)},pagerMethod:async function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,await this.FetchData()},leftCommonSearch:async function(e){this.PageNumber=e.PageNumber,this.isPaged=1,"undefined"!=typeof e.searchCondition?this.searchCondition=e.searchCondition:this.searchCondition="",await this.FetchData()},ManageFolder:function(){var e=this;r["a"].CheckPrivilege(e.privilegeParams+"FolderListing").then(t=>{if(!t.data)return e.ShowAlert(e.$t("UnAuthorized"),"warning",!0,"Alert"),!1;var a;e.ShowManageView=!0,$("#modalManageView").modal("show"),setTimeout((function(){$("#modalManageView").modal("show"),setTimeout((function(){e.SetBootstraptoolTip()}),200)}),1e3),null===(a=e.$refs.managefolder)||void 0===a||a.GetViewList()})},AddGreeting:function(){var e=this;console.log(e,"Add")},commonDeleteData:function(e){var t=this,a="";$(".chkItems:checkbox:checked").not("[id^='chkAll_0']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0?t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("Greeting"),(async function(){var e={ids:a,moduleName:"Company",subModuleCode:"Greeting",refCode:"COMPANYSETUP_DELETE"},i=JSON.stringify(e);console.log(i),await r["a"].CommonDeleteData(i).then((async function(e){console.log(e),200==e.status?($(".chkItems:checkbox:checked,#chkAll_0").prop("checked",!1).removeAttr("checked"),$("#DeleteMultiple").addClass("disabled"),t.ShowAlert(t.$t("DeletedSuccessfully",[t.$t("Greeting")]),"success",!0,t.$t("Alert")),t.PageNumber=parseInt(t.PageNumber)-1,t.PageNumber<=0&&(t.PageNumber=1),await t.FetchData()):t.ShowAlert(t.$t("DeletedError",[t.$t("Report")]),"success",!0,t.$t("Alert"))}))})):t.ShowAlert(t.$t("Selectanyrecordtodelete"))},UpdateStatus:async function(e){var t=this;e="Active"==e?1001:1002;var a="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0&&t.confirmR(t.$t("AreYouSureToUpdateStatus"),!0,t.$t("update")+"  "+t.$t("status"),(function(){var i={ID:a,StatusId:e,IsFor:"COMPANYSETUP_UPDATE",Module:"Company",Submodule:"Greeting"},o=JSON.stringify(i);r["a"].CommonUpdateStatus(o).then(e=>{200==e.status&&($(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),t.ShowAlert(t.$t("RecordUpdatedSuccessfully",[t.$t("Report")]),"success",!0,t.$t("Alert")),t.FetchData())})}))},getRequestParams:function(e,t,a,i,o,r){let n={};return e&&(n["pageNumber"]=e),r&&(n["searchcondition"]=r),o&&(n["is_paged"]=o),a&&(n["sortBy"]=a),i&&(n["sortExp"]=i),t&&(n["pageSize"]=t),n},clickEventOfColumn:function(e,t){"greetingtype"==t.COLUMN_NAME&&(this.recordId=e.greeting_template_id,this.showGreeting=!0),"USERNAME"==t.COLUMN_NAME&&this.$router.push({name:"viewcustomreport",params:{ReportID:e.REPORT_ID,ACCESS:e.ACCESS}})},async FetchData(){var e=this;e.isLoading=!0;var t=`CompanyId=${e.CompanyId}&pageSize=${e.PageSize}&pageNum=${e.PageNumber}&sortBy=${e.SortBy}&sortExp=${e.SortExp}&searchQuery=${e.searchCondition.trim()}`;await r["a"].GreetingListing(t).then((function(t){e.Headers=t.data.FieldSchema;const a=["greetingtype","template_id","status_id"];e.filteredHeaders=e.Headers.filter(e=>a.includes(e.COLUMN_NAME)),e.filteredHeaders.forEach(t=>{t.settings=null,"greetingtype"==t.COLUMN_NAME&&(t.settings={clickEvent:e.clickEventOfColumn,formatter:e.columnDataFormatter}),"status_id"!=t.COLUMN_NAME&&"template_id"!=t.COLUMN_NAME||(t.settings={isInSlot:!0})}),""!=t.data.Data&&null!=t.data.Data?(t.data.Data.length>0?(e.GreetingData=t.data.Data,e.GreetingData.forEach(e=>{e.created_by=JSON.parse(e.created_by),e.modified_by=JSON.parse(e.modified_by),e.status_id=JSON.parse(e.status_id)}),e.TotalRecords=e.GreetingData[0].total_records,e.TotalPages=Math.ceil(e.TotalRecords/e.PageSize),e.CurrentPage=e.PageNumber,e.noRecord=!1):(e.noRecord=!0,e.TotalRecords=0),void 0!=localStorage.SavedParameters&&localStorage.removeItem("SavedParameters")):(e.noRecord=!0,e.TotalRecords=0),setTimeout((function(){e.ResponsiveDataTable("tablelistingdata")}),500)})),e.isLoading=!1},closeModalSharePopup:function(){$("#modalshareview").modal("hide"),this.showsharereportview=!1},getStatuslistForListing:function(e,t){var a=this,i="langCode="+t+"&statusType="+e+"&hasglobal=true";r["a"].statusdropdown(i).then((function(e){if("Success"==e.data.status){var t=e.data.result;a.StatusListForListing=t.data}}))}}},d=l,u=a("2877"),h=Object(u["a"])(d,i,o,!1,null,null,null);t["default"]=h.exports},d731:function(e,t,a){"use strict";a("9769");let i=[{title:"Add",iconClass:"fa-plus",callbackfunction:"AddGreeting",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0},{id:"ActiveMultiple",title:"Active",iconClass:"fa-check",callbackfunction:"ActiveMultipleListing",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0},{id:"InactiveMultiple",title:"Inactive",iconClass:"fa-close",callbackfunction:"InactiveMultipleListing",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0},{id:"DeleteMultiple",title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",isdisabled:!0,isvisible:!0}],o=[],r=[{title:"View",callbackfunction:"ViewReport",icon:"fa fa-eye action-icon",additionalSpan:""},{title:"Edit",callbackfunction:"editreport",icon:"fa fa-pencil text-success action-icon",additionalSpan:""},{title:"Send Email",callbackfunction:"sendemail",href:"javascript:void(0)",icon:"fa fa-paper-plane text-success action-icon",additionalSpan:""},{title:"Schedule",callbackfunction:"setschedule",href:"javascript:void(0)",icon:"fa fa-clock-o text-warning action-icon",additionalSpan:""},{title:"Share",callbackfunction:"sharereport",href:"javascript:void(0)",icon:"fa fa-share-alt text-success action-icon",additionalSpan:""}];t["a"]={buttons:i,leftsearchSchema:o,listActions:r}}}]);
//# sourceMappingURL=chunk-dc01d77a.js.map