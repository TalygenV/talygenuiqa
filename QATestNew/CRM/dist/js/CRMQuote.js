(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CRMQuote"],{"3ce6":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("loader",{attrs:{"is-visible":e.isLoading}}),a("tg-list",{ref:"tgList",attrs:{IsShowAction:!0,showCheckBox:!0,ModuleName:"CRM",SubModuleCode:"CRM_QUOTES",IdentityColumn:"Order_id",HeaderText:e.$t("CRM_QUOTES"),ListData:e.QuotationData,HeaderData:e.Headers,NorecordfoundText:e.$t("NoRecordfound"),HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,SearchFields:e.leftSearchFields,RenderRowActionMethod:e.renderActions,ListDataCallBackFunction:e.FetchData,LegendArray:e.LegendArray,IsFilterApplied:!!e.searchCondition,SortExp:e.SortExp,SortBy:e.SortBy,ViewList:e.ViewList,CurrentPageNumber:e.PageNumber},on:{ApplyView:e.OnApplyView,LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,ActionButtonClick:e.actionButtonClick,SortdataButtonClick:e.sortdata},scopedSlots:e._u([{key:"slotdata",fn:function(t){var i=t.data;return["status_id"==i.column.COLUMN_NAME?[e.isCRMShowStausDrop(i.row.status_id,"CRM_QUOTES")?a("listing-status",{ref:"updatestatus",attrs:{isfor:"CRM_QUOTES",dataid:i.row.Order_id,"data-controller":"Crm",statuslist:e.StatusListForListing,item:i,"data-action":"index",dataselected:i.row.status_id,callbackfunction:e.FetchData,isselectedvaluestring:!0}}):e._e(),e.isCRMShowStausDrop(i.row.status_id,"CRM_QUOTES")?e._e():a("a",{staticClass:"inactive-disabled"},[a("span",{class:e.getStatusClass(i.row.status_id,"status_id")},[e._v(" "+e._s(i.row[i.column.COLUMN_NAME])+" ")])])]:e._e()]}}])}),e.showFilter?a("searchfilter",{attrs:{submodulecode:"CRM_QUOTES",modulename:"CRM",callbackfunction:e.FetchData},on:{close:function(t){e.showFilter=!1},FilterData:e.FilterData}},[a("h5",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.$t("Search")))])]):e._e(),e.ShowManageView?a("viewlayout",{directives:[{name:"show",rawName:"v-show",value:e.ShowManageView,expression:"ShowManageView"}],attrs:{submodulecode:"CRM_QUOTES",modulename:"CRM",callbackfunction:e.FetchData,commonapiurl:e.commonAPIUrl,usertype:e.usertype},on:{close:function(t){e.ShowManageView=!1}}},[a("h5",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.$t("Search")))])]):e._e(),e.showAddEmailTemplate?a("modalemail",{attrs:{selectedids:e.modalItem,userid:e.userid,companyid:e.companyId,submodulecode:"CRM_QUOTES"},on:{close:function(t){e.showAddEmailTemplate=!1}}},[a("h5",{staticClass:"modal-title",attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.$t("SendEmail")))])]):e._e(),e.showAddEventModal?a("modalfollowupslist",{attrs:{srcId:e.souceID,modulename:"CRM",submodulecode:"CRM_QUOTES",userid:e.userid},on:{close:e.closeEventViewModal}}):e._e(),e.showQuoteToProjectModal?a("modalconvertQuoteToProject",{attrs:{orderIdForConvertToProject:e.orderIdForConvertToProject},on:{close:e.closeDialogueForQuoteToProject}}):e._e()],1)},o=[],s=a("5530"),l=a("53ca"),r=a("c7eb"),n=a("1da1"),c=a("ade3"),d=(a("d3b7"),a("159b"),a("a434"),a("e9c4"),a("c740"),[{fieldName:"Quotation Number",fieldType:"text",fieldIcon:"fa-file",fieldSearchConditionName:["order_number"],isSearch:!1,value:"",listOptions:[]},{fieldName:"Quote Title",fieldType:"text",fieldIcon:"fa-file-text-o",fieldSearchConditionName:["order_title"],isSearch:!1,value:"",listOptions:[]},{fieldName:"Quote Type",fieldType:"radio",fieldIcon:"fa-file-o",fieldSearchConditionName:["orders.quotation_type"],isSearch:!1,value:"",listOptions:[{value:"1",name:"Project"},{value:"2",name:"Deal"},{value:"3",name:"General"}]}]),u=[{title:"Page Tour",iconClass:"fa fa-road",callbackfunction:"setTourGuideSteps",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Reset",iconClass:"fa-filter text-danger",callbackfunction:"removeFilter",href:"",additionalClass:"",isdisabled:!1,isvisible:!1,checkPrivilege:!1},{title:"Filters",iconClass:"fa-filter",callbackfunction:"openFilterPopUp",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Add Quote",iconClass:"fa-plus",href:"/CRM/ManageQuotation/0/CRM/CRM_QUOTES/0",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0,id:"addQuote_a"},{title:"ExportToExcel",iconClass:"fa-file-excel-o",callbackfunction:"downloadExceldata",href:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{id:"Sendbulkmail",title:"SendEmail",iconClass:"fa-envelope",callbackfunction:"sendBulkEmail",isdisabled:!0,isvisible:!0},{id:"DeleteMultiple",title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",isdisabled:!0,isvisible:!0}],m=[{title:"View",href:"/CRM/ViewQuotationDetails/{Order_id}/CRM/CRM_QUOTES",icon:"fa fa-eye action-icon",additionalSpan:""},{title:"Edit",href:"/CRM/ManageQuotation/{Order_id}/CRM/CRM_QUOTES/0",icon:"fa fa-pencil text-success action-icon",additionalSpan:""},{title:"Follow-Ups",callbackfunction:"openAddNewEvent",icon:"fa fa-flag text-muted action-icon",additionalSpan:""},{title:"Convert Quotation",callbackfunction:"ConvertToOther",icon:"fa fa-retweet text-warning action-icon",additionalSpan:""}],h={buttons:u,leftSearchFields:d,listActions:m},f=a("9769"),p=a("fc0b"),v=a("cdd5"),C=a("b32d"),S=a("e29d"),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"my-popups"},[a("div",{staticClass:"modal d-block"},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[e._v(" "+e._s(e.$t("ConvertQuotation"))+" ")]),a("button",{staticClass:"close",attrs:{href:"javascript:;"},on:{click:function(t){return e.$emit("close")}}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"modal-body"},[a("Form",{ref:"form"},[a("div",{staticClass:"d-flex flex-wrap"},[a("div",{staticClass:"col-md-12 p-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"},[a("div",{staticClass:"form-group"},[a("label",[e._v(e._s(e.$t("ProjectTemplate"))+":"),a("span",{staticClass:"text-danger"},[e._v("*")])]),a("Field",{attrs:{name:"projectTemplate",rules:{required:!0},label:"project template"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors,o=t.touched,s=t.invalid;return[a("select",{class:{"form-control":!0,"is-invalid":o&&s},attrs:{name:"projectTemplate"}},[a("option",{attrs:{value:""}},[e._v(e._s(e.$t("SelectTemplate")))]),e._l(e.ProjectTemplateListJson,(function(t){return a("option",{key:t,domProps:{value:t.value}},[e._v(e._s(t.name))])}))],2),a("span",{staticClass:"invalid-feedback",attrs:{name:"projectTemplate"}},[e._v(e._s(i[0]))])]}}]),model:{value:e.conProjectTemplate,callback:function(t){e.conProjectTemplate=t},expression:"conProjectTemplate"}})],1)]),a("div",{staticClass:"col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"},[a("div",{staticClass:"form-group"},[a("label",[e._v(e._s(e.$t("ProjectName"))+":")]),a("Field",{attrs:{name:"projectName",rules:{required:!0},label:"project name"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors,o=t.touched,s=t.invalid;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.conProjectName,expression:"conProjectName"}],class:{"form-control":!0,"is-invalid":o&&s},attrs:{type:"text",name:"projectName",id:"projectName",placeholder:e.$t("ProjectName")},domProps:{value:e.conProjectName},on:{input:function(t){t.target.composing||(e.conProjectName=t.target.value)}}}),a("span",{staticClass:"invalid-feedback",attrs:{name:"projectName"}},[e._v(e._s(i[0]))])]}}])})],1)])]),a("div",{staticClass:"row flex-row-reverse"},[a("div",{staticClass:"col-lg-6 text-right"},[a("a",{staticClass:"btn btn-success mr-2",attrs:{href:"javascript:;"},on:{click:function(t){return e.convertToProject()}}},[a("em",{staticClass:"fa fa-retweet pr-2"}),e._v(" "+e._s(e.$t("Convert")))]),a("a",{staticClass:"btn btn-danger",attrs:{href:"javascript:;"},on:{click:function(t){return e.$emit("close")}}},[a("em",{staticClass:"fa fa-times pr-2"}),e._v(" "+e._s(e.$t("Cancel"))+" ")])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"py-2"})])])])])])],1)])])])])},b=[],g={props:{orderIdForConvertToProject:null},data:function(){return{conProjectName:"",conProjectTemplate:"",ProjectTemplateListJson:[]}},created:function(){this.GetProjectTemplatelist()},methods:{GetProjectTemplatelist:function(){var e=this,t="id=&moduleName=CRM&type=PROJECT";f["a"].getDDLData(t).then((function(t){var a=t.data;null!=a&&(e.ProjectTemplateListJson=a.DATA)}))},convertToProject:function(){var e=this;e.$refs.form.setFieldTouched("projectTemplate",!0),e.$refs.form.setFieldTouched("projectName",!0),e.$refs.form.validate().then((function(t){if(t.valid){var a="name="+e.conProjectName+"&type=PROJECT";f["a"].CheckDuplicate(a).then((function(t){var a=t.data;if(null!=a)if(1==a)e.ShowAlert(e.$t("ProjectNameAlreadyExist"),"warning",!0,e.$t("Alert"));else{var i={orderId:e.orderIdForConvertToProject,projectName:e.conProjectName,projectTmplateId:e.conProjectTemplate},o=JSON.stringify(i);f["a"].ConvertQuoteToProject(o).then((function(t){"Success"==t.data[0].Status?(e.$emit("close"),e.ShowAlert(e.$t("LeadConvertSuccess",[e.$t("QuotationTitle"),e.$t("Project")]),"success",!0,e.$t("Alert"))):e.ShowAlert(e.$t("LeadConvertError",[e.$t("QuotationTitle"),e.$t("Project")]),"failure",!0,e.$t("Alert"))}))}}))}}))}}},E=g,w=a("2877"),T=Object(w["a"])(E,_,b,!1,null,null,null),D=T.exports,A={components:{viewlayout:v["a"],modalemail:C["a"],searchfilter:p["a"],modalfollowupslist:S["a"],modalconvertQuoteToProject:D},data:function(){var e;return e={LegendArray:[],ViewList:[],isLoading:!1,leftSearchFields:h.leftSearchFields,userid:null,usertype:null,searchCondition:"",selectedQuoteType:"",ddlQuoteType:"",Status:"",txtquotetitle:"",txtquotenumber:"",quotationNumberId:"",Title:"",QuotationType:"",quotationDateFrom:"",quotationDateTo:"",IsAnySearch:!1,PageNumber:1,PageSize:10,SortBy:"",SortExp:"",listheaderbuttons:h.buttons,Headers:null,noRecord:!1,listActions:h.listActions,TotalRecords:0,StatusListForListing:[]},Object(c["a"])(e,"IsAnySearch",!1),Object(c["a"])(e,"souceID",0),Object(c["a"])(e,"QuotationData",null),Object(c["a"])(e,"showAddEventModal",!1),Object(c["a"])(e,"ShowManageView",!1),Object(c["a"])(e,"showFilter",!1),Object(c["a"])(e,"showAddEmailTemplate",!1),Object(c["a"])(e,"appliedFilter",[]),Object(c["a"])(e,"privilegeParams",null),Object(c["a"])(e,"orderIdForConvertToProject",null),Object(c["a"])(e,"showQuoteToProjectModal",!1),Object(c["a"])(e,"ViewListId",""),e},created:function(){this.userid=this.GetUserInfo.ID,this.usertype=this.GetUserInfo.UserType,this.privilegeParams="controller=CRM&action=";var e=this;e.getStatuslistForListing("CRM","en"),e.FetchData(),e.GetDdlRecords_ViewList(),e.LegendArray=[{class:"bg-warning colorboxsquare",text:e.$t("ListingLegend",["Quotation"])}]},methods:{GetDdlRecords_ViewList:function(){var e=Object(n["a"])(Object(r["a"])().mark((function e(){var t,a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,t.ViewList=[],a="moduleName=CRM&subModuleCode=CRM_QUOTES&viewId=0&pageSize=100&pageNum=1&sortBy=&sortExp=",e.next=5,f["a"].GetViewList(a).then((function(e){e.data&&"undefined"!=typeof e.data.DATA&&(t.ViewList=e.data.DATA);var a=0;t.ViewListId="0",null==t.ViewList||""==t.ViewList||t.ViewList.forEach((function(e){e.IS_SLECTED_USER_ID>0&&(a+=1,t.ViewListId=e.VIEW_ID)}));var i=0;a>0?t.ViewList.splice(i,0,{SUB_MODULE_NAME:"",SUB_MODULE_CODE:"",VIEW_NAME:"Default View",VIEW_ID:0,IS_APPLICABLE_TO_ALL:1,MODULE_NAME:"",CREATED_AT:"",IS_SLECTED_USER_ID:0,CAN_EDIT:0,ROWNUMBER:0,VIEW_TYPE:"",USER_LIST:""}):null==t.ViewList||""==t.ViewList?t.ViewList.push({SUB_MODULE_NAME:"",SUB_MODULE_CODE:"",VIEW_NAME:"Default View",VIEW_ID:0,IS_APPLICABLE_TO_ALL:1,MODULE_NAME:"",CREATED_AT:"",IS_SLECTED_USER_ID:1,CAN_EDIT:0,ROWNUMBER:0,VIEW_TYPE:"",USER_LIST:""}):t.ViewList.splice(i,0,{SUB_MODULE_NAME:"",SUB_MODULE_CODE:"",VIEW_NAME:"Default View",VIEW_ID:0,IS_APPLICABLE_TO_ALL:1,MODULE_NAME:"",CREATED_AT:"",IS_SLECTED_USER_ID:1,CAN_EDIT:0,ROWNUMBER:0,VIEW_TYPE:"",USER_LIST:""}),setTimeout((function(){t.ViewListId>0?t.$refs.tgList.$refs.tgListHeaderButtons.ViewListId=t.ViewListId:t.$refs.tgList.$refs.tgListHeaderButtons.ViewListId="0"}),1e3)}));case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),DefaultView:function(){var e=this,t={ModuleName:"CRM",SubmoduleCode:"CRM_QUOTES"},a=JSON.stringify(t);f["a"].ClearView(a).then((function(t){null!=t.data&&("1"==t.data.code||"1"==t.data.Code)?(e.ShowAlert(e.$t("ClearSuccess",[e.$t("DefaultView")]),"success",!0,e.$t("Alert")),e.FetchData()):e.ShowAlert(e.$t("ErrorWhileProcessingRequest"),"failure",!0,e.$t("Alert"))}))},OnApplyView:function(e){var t=this;if("0"==e)t.DefaultView();else{var a={ViewId:e,ModuleName:"CRM",SubmoduleCode:"CRM_QUOTES"},i=JSON.stringify(a);f["a"].ApplyView(i).then((function(e){null!=e.data&&("1"==e.data.code||"1"==e.data.Code)?(t.ShowAlert(t.$t("ApplySuccess",[t.$t("View")]),"success",!0,t.$t("Alert")),t.$emit("RefreshManageView"),t.FetchData()):t.ShowAlert(t.$t("AddedError",[t.$t("View")]),"failure",!0,t.$t("Alert"))}))}},FilterData:function(e,t,a,i,o,s){this.pageNum=e,this.pageSize=t,this.sortBy=a,this.sortExp=i,this.searchCondition=o,null!=Object(l["a"])(s)&&this.appliedFilter.push(s),this.FetchData()},FetchData:function(e){var t=this.getRequestParams(this.pageNumber,this.pageSize,this.sortBy,this.sortExp,this.isPaged,this.searchcondition),a=this;a.isLoading=!0,t.pageSize=e?a.TotalRecords:a.PageSize,t.pageNumber=a.PageNumber,t.searchCondition=a.searchCondition,a.PageNumber?t.pageNum=a.PageNumber:a.PageNumber=t.pageNum=1,"undefined"!=typeof a.isPaged?t.isPaged=a.isPaged:a.isPaged=t.isPaged=1,t.isPaged=a.isPaged,t.sortBy=a.SortBy,t.sortExp=a.SortExp;var i="";if(a.isBlank(this.searchCondition)||(i+=a.searchCondition),a.isBlank(this.conditionForInstantSearch)||(i+=a.isBlank(a.searchCondition)?a.conditionForInstantSearch:" AND "+a.conditionForInstantSearch),""!=i){if(t.searchCondition=i,a.appliedFilter.length>0){var o=a.listheaderbuttons.findIndex((function(e){return"removeFilter"===e.callbackfunction}));a.listheaderbuttons[o].isvisible=!0;var s=a.listheaderbuttons.findIndex((function(e){return"openFilterPopUp"===e.callbackfunction}));a.listheaderbuttons[s].iconClass="fa fa-filter text-success"}}else if(0==a.appliedFilter.length){var l=a.listheaderbuttons.findIndex((function(e){return"removeFilter"===e.callbackfunction}));a.listheaderbuttons[l].isvisible=!1;var r=a.listheaderbuttons.findIndex((function(e){return"openFilterPopUp"===e.callbackfunction}));a.listheaderbuttons[r].iconClass="fa fa-filter"}e?(t.isPaged=0,f["a"].QuotesListing(t).then((function(e){a.isLoading=!1,""!=e.data&&null!=e.data?a.JSONToCSVConvertor(e.data,"Quotation-Detail",!0):a.ModelnoRecord=!0}))):f["a"].QuotesListing(t).then((function(e){a.isLoading=!1,null!=e.data?(a.Headers=e.data.schema,a.Headers.forEach((function(e){e.settings=null,"status_id"==e.COLUMN_NAME&&(e.settings={isInSlot:!0}),"order_number"==e.COLUMN_NAME&&(e.settings={clickEvent:a.clickEventOfColumn,formatter:a.columnDataFormatter})})),e.data.data.length>0?(a.QuotationData=e.data.data,a.QuotationData.forEach((function(e){e.isCheckBoxDisabled=!1,e.additionalClass="","Closed"==e.status_id&&(e.isCheckBoxDisabled=!0,e.additionalClass="warning-bar"),e.rowDetailsUrl="",""==e.rowDetailsUrl&&(e.rowDetailsUrl="/CRM/ViewQuotationDetails/"+e.Order_id+"/CRM/CRM_QUOTES")})),a.TotalRecords=e.data.data[0].total_records,a.TotalPages=Math.ceil(a.TotalRecords/a.PageSize),a.CurrentPage=a.PageNumber,a.GetDdlRecords_ViewList(),$("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),$("#DeleteQuotation").addClass("disabled"),$("#Sendbulkmail").addClass("disabled")):(a.noRecord=!0,a.QuotationData=[],a.TotalRecords=0)):(a.noRecord=!0,a.QuotationData=[],a.Headers=[],a.TotalRecords=0),setTimeout((function(){a.ResponsiveDataTable("tablelistingdata")}),500),a.isLoading=!1}))},renderActions:function(e){var t=this,a=[];return t.listActions.forEach((function(t){var i=Object(s["a"])({},t);switch(t.title){case"View":i.isVisible="Draft"!=e.status_id;break;case"Edit":i.isVisible=e.ref_source_id<=0&&"Closed"!=e.status_id;break;case"Follow-Ups":i.isVisible="Closed"!=e.status_id;break;case"Convert Quotation":i.isVisible="Draft"!=e.status_id&&"Closed"!=e.status_id&&e.ref_source_id<=0&&("Deal"==e.quotation_type||"Project"==e.quotation_type);break}a.push(i)})),a},ConvertToOther:function(e){if("Deal"==e.quotation_type){var t=this,a=t.$t("ConfirmConvert",[String(t.$t("Quotation")).toLowerCase(),e.order_number,String(t.$t("Sales_Order")).toLowerCase()]);t.confirmR(a,!0,t.$t("ConvertQuotation"),(function(){var i={SubModuleCode:"CRM_QUOTES",OrderId:e.Order_id,ToSubModuleCode:"CRM_SALES_ORDERS"},o=JSON.stringify(i);f["a"].ConvertOrder(o).then((function(e){"1"==e.data[0].Code?(a=t.$t("SubmitSuccess",[t.$t("Sales_Order"),t.$t("Generated"),e.data[0].Name]),t.FetchData(),t.ShowAlert(a,"success",!0,t.$t("Alert"))):t.ShowAlert(t.$t("AddedError",[t.$t("Quotation")]),"failure",!0,t.$t("Alert"))}))}))}else"Project"==e.quotation_type&&this.openDialogueForQuoteToProject(e.Order_id)},openDialogueForQuoteToProject:function(e){this.orderIdForConvertToProject=e,this.showQuoteToProjectModal=!this.showQuoteToProjectModal},closeDialogueForQuoteToProject:function(){this.showQuoteToProjectModal=!1,this.FetchData()},commonDeleteData:function(e){var t=this;f["a"].CheckPrivilege(t.privilegeParams+"DeleteQuotation").then((function(e){if(e.data){var a="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0?t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("Quotation"),(function(){var e={ids:a,moduleName:"CRM",subModuleCode:"CRM_QUOTES"},i=JSON.stringify(e);f["a"].CommonDelete(i).then((function(e){var a="";200==e.status?($("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),$("#DeleteMultiple").addClass("disabled"),a=t.ShowAlert(t.$t("DeletedSuccess",[t.$t("Quotation")]),"success",!0,t.$t("Alert")),t.PageNumber=parseInt(t.PageNumber)-1,t.PageNumber<=0&&(t.PageNumber=1),t.FetchData()):a=t.ShowAlert(t.$t("DeletedError",[t.$t("Quotation")]),"failure",!0,t.$t("Alert")),setTimeout((function(){a.modal("hide")}),2e3)}))})):alert(t.$t("Selectanyrecordtodelete"))}else t.ShowAlert("You are not authorized","failure",!0,"Alert")}))},ManageView:function(){this.ShowManageView=!0,setTimeout((function(){$("#modalManageView").modal("show"),setTimeout((function(){SetBootstraptoolTip()}),200)}),1e3)},pagerMethod:function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,this.FetchData()},openFilterPopUp:function(e){this.cancelOrRefresh(),this.showFilter=!0},cancelOrRefresh:function(){this.searchCondition="",this.stageName="",this.selectedQuoteType="",this.Status="",this.txtquotenumber="",this.txtquotetitle="",this.quotationNumberId="",this.Title="",this.QuotationType="",this.quotationDateFrom="",this.quotationDateTo="",this.PageNumber=1,this.IsAnySearch=!1,this.FetchData()},sortdata:function(e){var t="sort tb_headerSortDown";this.SortBy=e,e===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",t="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",t="sort tb_headerSortUp"):(this.SortExp="ASC",t="sort tb_headerSortDown")),this.FetchData(),$("#"+e+"  span:first-child").attr("class",t)},commonHeaderButtonClick:function(e){switch(e.callbackfunction){case"ManageView":this.ManageView();break;case"openFilterPopUp":this.openFilterPopUp();break;case"downloadExceldata":this.FetchData(!0);break;case"sendBulkEmail":this.SendBulkEmail();break;case"commonDeleteData":this.commonDeleteData();break;case"removeFilter":var t=this;this.searchCondition="";var a=t.listheaderbuttons.findIndex((function(e){return"removeFilter"===e.callbackfunction}));t.listheaderbuttons[a].isvisible=!1;var i=t.listheaderbuttons.findIndex((function(e){return"openFilterPopUp"===e.callbackfunction}));t.listheaderbuttons[i].iconClass="fa fa-filter";try{t.appliedFilter=[]}catch(o){}t.FetchData();break;case"setTourGuideSteps":this.setTourGuideSteps(0);break}},SendBulkEmail:function(e){var t=this;f["a"].CheckPrivilege(t.privilegeParams+"SendBulkEmail").then((function(e){if(e.data){var a="",i="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").not(".CloseLeadInput").each((function(){i.length>0&&(i+=","),i+=$(this).val(),a=i})),a.length>0&&(t.showAddEmailTemplate=!0,t.modalItem=a)}else t.ShowAlert("You are not authorized","failure",!0,"Alert")}))},getStatuslistForListing:function(e,t){var a=this,i="langCode="+t+"&statusType="+e+"&hasglobal=true";f["a"].statusdropdown(i).then((function(e){if("Success"==e.data.status){var t=e.data.result;a.StatusListForListing=t.data}}))},getRequestParams:function(e,t,a,i,o,s){var l={};return e&&(l["pageNum"]=e),s&&(l["searchcondition"]=s),o&&(l["isPaged"]=o),a&&(l["sortBy"]=a),i&&(l["sortExp"]=i),t&&(l["pageSize"]=t),l},leftCommonSearch:function(e){this.PageNumber=e.PageNumber,"undefined"!=typeof e.searchCondition?this.searchCondition=e.searchCondition:this.searchCondition="",this.FetchData()},currentPageMethod:function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,this.FetchData()},GetPageSizeOption:function(){for(var e=[],t=10,a=t;a<t+95;a+=5)e.push(a);this.PageSizeOption=e},openAddNewEvent:function(e,t){var a=this;a.souceID=t.Order_id,a.selectedItem=e,a.showAddEventModal=!a.showAddEventModal},closeEventViewModal:function(){this.showAddEventModal=!1},actionButtonClick:function(e,t,a,i){var o=this;switch(e){case"checkPrivilegeView":break;case"checkPrivilegeDetails":break;case"openAddNewEvent":o.openAddNewEvent(t.Order_id,t);break;case"ConvertToOther":o.ConvertToOther(t);break}},clickEventOfColumn:function(e,t){"order_number"==t.COLUMN_NAME&&this.$router.push({path:"/CRM/ViewQuotationDetails/"+e.Order_id+"/CRM/CRM_QUOTES"})}}},k=A,P=Object(w["a"])(k,i,o,!1,null,null,null);t["default"]=P.exports},b32d:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal d-block my-popups dialog"},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[e._t("header",(function(){return[a("h5",[e._v(e._s(e.$t("SendEmail")))])]})),a("button",{staticClass:"close",attrs:{href:"javascript:;"},on:{click:function(t){return e.$emit("close")}}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])],2),a("div",{staticClass:"modal-body"},[a("Form",{ref:"form",scopedSlots:e._u([{key:"default",fn:function(t){var i=t.valid,o=t.errors;return[a("div",{},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-md-12 col-lg-6 col-xl-6 float-left"},[a("div",{staticClass:"form-group"},[a("label",[e._v(" "+e._s(e.$t("Subject"))+":"),a("span",{staticClass:"text-danger"},[e._v("*")])]),a("Field",{attrs:{name:"Email Subject",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.emailSubject,expression:"emailSubject"}],class:{"form-control":!0,"is-invalid":i[0]},attrs:{type:"text",maxlength:50,name:"emailSubject",disabled:e.isView},domProps:{value:e.emailSubject},on:{input:function(t){t.target.composing||(e.emailSubject=t.target.value)}}}),a("span",{staticClass:"invalid-feedback",attrs:{name:"Email Subject"}},[e._v(e._s(i[0]))])]}}],null,!0)})],1)]),a("div",{staticClass:"col-sm-12 col-md-12 col-lg-6 col-xl-6 float-left"},[a("div",{staticClass:"form-group"},[a("label",[e._v(" "+e._s(e.$t("EmailTemplate"))+":"),a("span",{staticClass:"text-danger"},[e._v("*")])]),a("Field",{attrs:{name:"Email TemplateValue",rules:{required:!0},label:"Email"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("select",{class:{"form-control":!0,"is-invalid":i[0]},attrs:{id:"",name:"emailtemplateValue"},domProps:{value:e.emailtemplateValue},on:{change:e.getSelectedValue}},[a("option",{attrs:{value:""}},[e._v(" "+e._s(e.$t("Select"))+" "+e._s(e.$t("EmailTemplate"))+" ")]),e._l(e.emailtemplate,(function(t,i){return a("option",{key:i,domProps:{value:t.value}},[e._v(e._s(t.name))])}))],2),a("span",{staticClass:"invalid-feedback",attrs:{name:"Email TemplateValue"}},[e._v(e._s(i[0]))])]}}],null,!0),model:{value:e.emailtemplateValue,callback:function(t){e.emailtemplateValue=t},expression:"emailtemplateValue"}})],1)]),a("div",{staticClass:"col-sm-12 col-md-12 col-lg-6 col-xl-6 float-left"},[a("div",{staticClass:"form-group"},[a("label",[e._v(" "+e._s(e.$t("Priority"))+":"),a("span",{staticClass:"text-danger"},[e._v("*")])]),a("Field",{attrs:{name:"Email PriorityValue",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("select",{directives:[{name:"model",rawName:"v-model",value:e.emailPriorityValue,expression:"emailPriorityValue"}],class:{"form-control":!0,"is-invalid":i[0]},attrs:{id:"emailPriorityValue",name:"emailPriorityValue"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.emailPriorityValue=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[e._v(" "+e._s(e.$t("Select"))+" "+e._s(e.$t("Priority"))+" ")]),a("option",{attrs:{value:"normal"}},[e._v(e._s(e.$t("Normal"))+" ")]),a("option",{attrs:{value:"low"}},[e._v(" "+e._s(e.$t("Low"))+" ")]),a("option",{attrs:{value:"high"}},[e._v(" "+e._s(e.$t("High"))+" ")])]),i[0]?a("span",{staticClass:"invalid-feedback",attrs:{name:"Email PriorityValue"}},[e._v(e._s(i[0]))]):e._e()]}}],null,!0)})],1)]),"CampaignDetails"!=e.callFrom?a("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12"},[a("div",{staticClass:"form-group"},[a("label",[e._v(" "+e._s(e.$t("Description"))+":"),a("span",{staticClass:"text-danger"},[e._v("*")])]),a("Field",{attrs:{name:"Description",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("ckeditor",{staticStyle:{height:"400px"},attrs:{editor:e.editor},model:{value:e.Description,callback:function(t){e.Description=t},expression:"Description"}}),i[0]?a("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Description"}},[e._v(e._s(i[0]))]):e._e()]}}],null,!0)})],1)]):e._e()]),a("div",{staticClass:"row flex-row-reverse"},[a("div",{staticClass:"col-lg-6 text-right"},[a("div",{staticClass:"py-2"},[a("a",{staticClass:"btn btn-success formbtn text-white mr-2",attrs:{href:"javascript:;"},on:{click:function(t){return e.saveEmail(i,o)}}},[a("em",{staticClass:"fa fa-send pr-2"}),e._v(e._s(e.$t("Send"))+" ")]),a("a",{staticClass:"btn btn-danger formbtn widthhalf text-white",on:{click:function(t){return e.$emit("close")}}},[a("em",{staticClass:"fa fa-close pr-2"}),e._v(e._s(e.$t("Cancel"))+" ")])])]),a("div",{staticClass:"col-lg-6 pt-2"},[a("small",{staticClass:"text-danger"},[e._v(" "+e._s(e.$t("MandatoryString"))+" ")])])])])]}}])})],1)])])])])},o=[],s=(a("a9e3"),a("e9c4"),a("9769")),l={props:{selectedids:null,userid:{type:Number,required:!0},companyid:{type:Number,required:!0},templatename:{type:String,required:!0},selecteditems:{type:Array,required:!0},emailSubject:{type:String,required:!0},submodulecode:{type:String,required:!0},callFrom:{type:String}},data:function(){return{emailSubject:"",emailPriorityValue:"",duedate:"",Subject:"",txtemailDescription:"",emailtemplate:[],Message:"",emailtemplateValue:"",modal:[],isView:!1,editor:this.CLASSIC_EDITOR,options:{useCurrent:!1,showClear:!0,showClose:!0}}},created:function(){this.modal=this.modalItem,this.GetEmailTemplate()},methods:{onReady:function(e){e.ui.getEditableElement().parentElement.insertBefore(e.ui.view.toolbar.element,e.ui.getEditableElement())},GetEmailTemplate:function(){var e=this,t="id=&type=EMAILTEMPLATE";"CRM_STAGES"==e.submodulecode&&(t="",t="id=&type=CRM_STAGE_EMAILTEMPLATE"),s["a"].getLeaOwnerBySearch(t).then((function(t){var a=t.data;if(null!=a)return e.emailtemplate=a.DATA,e.emailtemplate}))},loadEmailTemplate:function(e){if(""!=e){var t=this,a=e,i="id="+a;s["a"].GetEmailData(i).then((function(e){var a=e.data;null!=a&&(t.Description=a.data[0].template_content)}))}else t.txtemailDescription=""},getSelectedValue:function(e){this.emailtemplateValue=e.target.value,this.loadEmailTemplate(this.emailtemplateValue)},saveEmail:function(e,t){var a=this;a.$refs.form.validate().then((function(e){if(e){var t={templatename:a.emailtemplateValue,selecteditems:a.selectedids,emailSubject:a.emailSubject,emailPriorityValue:a.emailPriorityValue,submodulecode:a.submodulecode,mailStatus:0,emailCc:null,emailBcc:null,body:"CampaignDetails"==a.callFrom?null:a.Description,to:null};if("CampaignDetails"==a.callFrom){t.campaignId=a.$route.params.id;var i=JSON.stringify(t);s["a"].AddGroupEmailTemplate(i).then((function(e){"Success"==e.data[0].Status?(a.ShowAlert(a.$t("Email Sent Successfully"),"success",!0,a.$t("Alert")),a.duedate="",a.Subject="",a.priority="",a.Message="",a.$emit("close"),$("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked")):a.ShowAlert(a.$t("UnknownErrorOccur"),"warning",!0,a.$t("Alert"))}))}else{i=JSON.stringify(t);s["a"].AddEmailTemplate(i).then((function(e){200==e.status?(a.ShowAlert(a.$t("Email Sent Successfully"),"success",!0,a.$t("Alert")),a.duedate="",a.Subject="",a.priority="",a.Message="",a.$emit("close"),$("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),$("#Sendbulkmail").addClass("disabled"),$("#ChangeOwnerId").addClass("disabled"),$("#AdditionalOwnerId").addClass("disabled"),$("#CloseLeadId").addClass("disabled"),$("[id^=Delete]").addClass("disabled")):a.ShowAlert(a.$t("UnknownErrorOccur"),"warning",!0,a.$t("Alert"))}))}}}))}}},r=l,n=a("2877"),c=Object(n["a"])(r,i,o,!1,null,null,null);t["a"]=c.exports}}]);
//# sourceMappingURL=CRMQuote.js.map