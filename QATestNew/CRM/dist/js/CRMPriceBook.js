(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CRMPriceBook"],{"366a":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("loader",{attrs:{"is-visible":e.isLoading}}),i("TgList",{attrs:{IsShowAction:"false",ModuleName:"CRM",SubModuleCode:"CRM_PRICE_BOOKS",IdentityColumn:"price_book_id",HeaderText:e.$t("PRICE_BOOKS"),ListData:e.PriceBookData,HeaderData:e.Headers,RenderRowActionMethod:e.renderActions,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,SearchFields:e.leftSearchFields,LegendArray:e.LegendArray,ListDataCallBackFunction:e.FetchData,IsFilterApplied:!!e.searchCondition,SortExp:e.SortExp,SortBy:e.SortBy,CurrentPageNumber:e.PageNumber},on:{LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,SortdataButtonClick:e.sortdata},scopedSlots:e._u([{key:"slotdata",fn:function(t){var a=t.data;return["View"==a.column.COLUMN_NAME?[i("td",{staticClass:"text-center single-action tour_viewitem"},[i("RouterLink",{staticStyle:{color:"dodgerblue"},attrs:{title:e.$t("ViewPriceBook"),to:"/CRM/ViewPriceBookDetails/"+a.row.price_book_id+"/CRM/CRM_PRICE_BOOKS",typetitle:e.$t("View"),typefor:"Edit",value:a.row.price_book_id}},[i("em",{staticClass:"fa fa-eye text-info action-icon"})])],1)]:e._e(),"Edit"==a.column.COLUMN_NAME?[i("td",{staticClass:"text-center single-action tour_viewitem"},[i("RouterLink",{class:{disabled:"Closed"==a.row.status_id},attrs:{title:e.$t("EditPriceBook"),to:"/CRM/ManagePriceBook/"+a.row.price_book_id+"/CRM/CRM_PRICE_BOOKS",typetitle:e.$t("Edit"),typefor:e.Edit,value:a.row.price_book_id}},[i("em",{staticClass:"fa fa-pencil text-success action-icon action-icon1",class:{disabled:"Closed"==a.row.status_id}})])],1)]:e._e(),"status_id"==a.column.COLUMN_NAME?[e.isCRMShowStausDrop(a.row.status_id,"CRM_PRICE_BOOKS")?i("listing-status",{ref:"updatestatus",attrs:{isfor:"CRM_PRICE_BOOKS",dataid:a.row.price_book_id,"data-controller":"Crm",statuslist:e.StatusListForListing,item:a,"data-action":"index",dataselected:a.row.status_id,callbackfunction:e.FetchData,isselectedvaluestring:!0}}):e._e(),e.isCRMShowStausDrop(a.row.status_id,"CRM_PRICE_BOOKS")?e._e():i("a",{staticClass:"inactive-disabled"},[i("span",{class:e.getStatusClass(a.row.status_id,"status_id")},[e._v(" "+e._s(a.row[a.column.COLUMN_NAME])+" ")])])]:e._e()]}}])}),e.showFilter?i("searchfilter",{attrs:{submodulecode:"CRM_PRICE_BOOKS",modulename:"CRM",userid:e.userid,companyid:e.CompanyId,callbackfunction:e.FetchData},on:{close:function(t){e.showFilter=!1},FilterData:e.FilterData}},[i("h5",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.$t("Search")))])]):e._e(),e.ShowManageView?i("viewlayout",{directives:[{name:"show",rawName:"v-show",value:e.ShowManageView,expression:"ShowManageView"}],attrs:{submodulecode:"CRM_PRICE_BOOKS",modulename:"CRM",callbackfunction:e.FetchData,commonapiurl:e.commonAPIUrl,usertype:e.usertype},on:{close:function(t){e.ShowManageView=!1}}},[i("h5",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.$t("Search")))])]):e._e()],1)},o=[],s=i("53ca"),r=i("ade3"),n=(i("498a"),i("e9c4"),i("c740"),i("d3b7"),i("159b"),[{title:"Page Tour",iconClass:"fa fa-road",callbackfunction:"setTourGuideSteps",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Reset",iconClass:"fa-filter text-danger",callbackfunction:"removeFilter",href:"",additionalClass:"",isdisabled:!1,isvisible:!1,checkPrivilege:!1},{title:"Filters",iconClass:"fa-filter",callbackfunction:"openFilterPopUp",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"ManageView",iconClass:"fa-list-alt",callbackfunction:"ManageView",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Add Price Book",iconClass:"fa-plus",href:"/CRM/ManagePriceBook/0/CRM/CRM_PRICE_BOOKS",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0,id:"addPriceBook_a"},{title:"ExportToExcel",iconClass:"fa-file-excel-o",callbackfunction:"downloadExceldata",href:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{id:"DeleteMultiple",title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",isdisabled:!0,isvisible:!0}]),c=[{fieldName:"Price Book Name",fieldType:"text",fieldIcon:"fa fa-search",fieldSearchConditionName:["price_book_name"],isSearch:!1,isvisible:!0,isdisabled:!1,value:"",listOptions:[]}],l={buttons:n,leftSearchFields:c},d=i("2aeb"),u=i("9769"),h=i("cdd5"),f=i("fc0b"),p={components:{TgList:d["a"],viewlayout:h["a"],searchfilter:f["a"]},data:function(){return Object(r["a"])({appliedFilter:[],listheaderbuttons:l.buttons,PriceBookData:null,Headers:null,userid:null,usertype:null,PageNumber:1,PageSize:10,SortBy:"",SortExp:"",noRecord:!1,TotalRecords:0,StatusListForListing:[],souceID:0,showFilter:!1,showAddEventModal:!1,ShowManageView:!1,searchCondition:"",isLoading:!1,priceBookName:"",IsAnySearch:"",BookName:"",srchcondition:"",leftSearchFields:l.leftSearchFields,privilegeParams:null,Edit:null,LegendArray:[]},"Headers",[{COLUMN_NAME:"price_book_name",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Price Book Name",DISPLAY_ORDER:1},{COLUMN_NAME:"status_id",DATA_TYPE:"select",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"STATUS_NAME",DISPLAY_ORDER:2},{COLUMN_NAME:"effective_start_date",DATA_TYPE:"date",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Effective From","DISPLAY_ORDER ":3},{COLUMN_NAME:"effective_end_date",DATA_TYPE:"date",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"effective_end_date",DISPLAY_ORDER:4},{COLUMN_NAME:"price_book_owner",DATA_TYPE:"select",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Price Book Owner",DISPLAY_ORDER:5},{COLUMN_NAME:"price_book_model",DATA_TYPE:"select",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Price Book Model",DISPLAY_ORDER:6},{COLUMN_NAME:"View",DATA_TYPE:"",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"View",DISPLAY_ORDER:7},{COLUMN_NAME:"Edit",DATA_TYPE:"",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Edit",DISPLAY_ORDER:8}])},created:function(){this.userid=this.GetUserInfo.ID,this.usertype=this.GetUserInfo.UserType,this.privilegeParams="controller=CRM&action=";var e=this;e.FetchData(),e.getStatuslistForListing("CRM","en"),e.LegendArray=[{class:"bg-primary colorboxsquare",text:e.$t("CloseLeadLegend",["Price Books"])}]},methods:{renderActions:function(){},cancelOrRefresh:function(){this.BookName="",this.priceBookName="",this.searchCondition="",this.srchcondition="",this.IsAnySearch=!1,this.FetchData()},leftCommonSearch:function(e){this.PageNumber=e.PageNumber,"undefined"!=typeof e.searchCondition?this.searchCondition=e.searchCondition:this.searchCondition="",this.FetchData()},Searchdata:function(e){this.PageNumber=1,this.GroupStart=this.PageNumber,this.GroupEnd=this.PageNumber+2,this.IsAnySearch=!1,""!=$.trim(this.priceBookName)&&(this.IsAnySearch=!0,this.srchcondition+=""!=$.trim(this.srchcondition)?" AND":"",this.srchcondition+=" del.price_book_name LIKE '%25"+this.priceBookName+"%25'"),this.FetchData()},sortdata:function(e){var t="sort tb_headerSortDown";this.SortBy=e,e===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",t="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",t="sort tb_headerSortUp"):(this.SortExp="ASC",t="sort tb_headerSortDown")),this.FetchData(),$("#"+e+"  span:first-child").attr("class",t)},pagerMethod:function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,this.FetchData()},commonDeleteData:function(e){var t=this;u["a"].CheckPrivilege(t.privilegeParams+"DeletePriceBook").then((function(e){if(e.data){var i="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){i.length>0&&(i+=","),i+=$(this).val()})),i.length>0?t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("PriceBook"),(function(){var e={ids:i,moduleName:"CRM",subModuleCode:"CRM_PRICE_BOOKS"},a=JSON.stringify(e);u["a"].CommonDeleteData(a).then((function(e){var i="";200==e.status?($("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),$("#DeleteMultiple").addClass("disabled"),i=t.ShowAlert(t.$t("DeletedSuccess",[t.$t("PriceBook")]),"Success",!0,t.$t("Alert")),t.PageNumber=parseInt(t.PageNumber)-1,t.PageNumber<=0&&(t.PageNumber=1),t.FetchData()):i=t.ShowAlert(t.$t("DeletedError",[t.$t("PriceBook")]),"failure",!0,t.$t("Alert")),setTimeout((function(){i.modal("hide")}),2e3)}))})):t.ShowAlert(t.$t("Selectanyrecordtodelete"))}else t.ShowAlert("You are not authorized","failure",!0,"Alert")}))},ManageView:function(){this.ShowManageView=!0,setTimeout((function(){$("#modalManageView").modal("show"),setTimeout((function(){SetBootstraptoolTip()}),200)}),1e3)},FilterData:function(e,t,i,a,o,r){this.pageNum=e,this.pageSize=t,this.sortBy=i,this.sortExp=a,this.searchCondition=o,null!=Object(s["a"])(r)&&this.appliedFilter.push(r),this.FetchData()},openFilterPopUp:function(){this.showFilter=!0},getStatuslistForListing:function(e,t){var i=this,a="langCode="+t+"&statusType="+e+"&hasglobal=true";u["a"].statusdropdown(a).then((function(e){if("Success"==e.data.status){var t=e.data.result;i.StatusListForListing=t.data}}))},commonHeaderButtonClick:function(e){switch(e.callbackfunction){case"ManageView":this.ManageView();break;case"openFilterPopUp":this.openFilterPopUp();break;case"downloadExceldata":this.FetchData(!0);break;case"commonDeleteData":this.commonDeleteData();break;case"removeFilter":var t=this;this.searchCondition="";var i=t.listheaderbuttons.findIndex((function(e){return"removeFilter"===e.callbackfunction}));t.listheaderbuttons[i].isvisible=!1;var a=t.listheaderbuttons.findIndex((function(e){return"openFilterPopUp"===e.callbackfunction}));t.listheaderbuttons[a].iconClass="fa fa-filter";try{t.appliedFilter=[]}catch(o){}t.FetchData();break;case"setTourGuideSteps":this.setTourGuideSteps(0);break}},getRequestParams:function(e,t,i,a,o,s,r){var n={};return e&&(n["pageNum"]=e),s&&(n["pricebookname"]=s),r&&(n["searchCondition"]=r),o&&(n["isPaged"]=o),i&&(n["sortBy"]=i),a&&(n["sortExp"]=a),t&&(n["pageSize"]=t),n},clickEventOfColumn:function(e,t){"price_book_name"==t.COLUMN_NAME&&this.$router.push({path:"/CRM/ViewPriceBookDetails/"+e.price_book_id+"/CRM/CRM_PRICE_BOOKS"})},FetchData:function(e){var t=this.getRequestParams(this.pageNumber,this.pageSize,this.sortBy,this.sortExp,this.isPaged,this.pricebookname,this.searchcondition),i=this;i.isLoading=!0,t.pageSize=e?i.TotalRecords:i.PageSize,t.pageNumber=i.PageNumber,t.searchCondition=i.searchCondition,t.pricebookname=i.leftSearchFields[0].value,i.PageNumber?t.pageNum=i.PageNumber:i.PageNumber=t.pageNum=1,"undefined"!=typeof i.isPaged?t.isPaged=i.isPaged:i.isPaged=t.isPaged=1,t.isPaged=i.isPaged,t.sortBy=i.SortBy,t.sortExp=i.SortExp;var a="";if(i.isBlank(i.searchCondition)||(a+=i.searchCondition),i.isBlank(i.conditionForInstantSearch)||(a+=i.isBlank(i.searchCondition)?i.conditionForInstantSearch:" AND "+i.conditionForInstantSearch),""!=a){if(t.searchCondition=a,i.appliedFilter.length>0){var o=i.listheaderbuttons.findIndex((function(e){return"removeFilter"===e.callbackfunction}));i.listheaderbuttons[o].isvisible=!0;var s=i.listheaderbuttons.findIndex((function(e){return"openFilterPopUp"===e.callbackfunction}));i.listheaderbuttons[s].iconClass="fa fa-filter text-success"}}else if(0==i.appliedFilter.length){var r=i.listheaderbuttons.findIndex((function(e){return"removeFilter"===e.callbackfunction}));i.listheaderbuttons[r].isvisible=!1;var n=i.listheaderbuttons.findIndex((function(e){return"openFilterPopUp"===e.callbackfunction}));i.listheaderbuttons[n].iconClass="fa fa-filter"}e?(t.isPaged=0,u["a"].PriceBookListing(t).then((function(e){""!=e.data&&null!=e.data?i.JSONToCSVConvertor(e.data,"PriceBook-Detail",!0):i.ModelnoRecord=!0,i.isLoading=!1}))):u["a"].PriceBookListing(t).then((function(e){null!=e.data?(i.Headers.forEach((function(e){e.settings=null,"price_book_name"==e.COLUMN_NAME&&(e.settings={clickEvent:i.clickEventOfColumn,formatter:i.columnDataFormatter}),"status_id"==e.COLUMN_NAME&&(e.settings={isInSlot:!0}),"View"==e.COLUMN_NAME&&(e.settings={isInSlot:!0}),"Edit"==e.COLUMN_NAME&&(e.settings={isInSlot:!0})})),e.data.data.length>0?(i.PriceBookData=e.data.data,i.PriceBookData.forEach((function(e){e.isCheckBoxDisabled=!1,e.additionalClass="","Closed"==e.status_id&&(e.isCheckBoxDisabled=!0,e.additionalClass="medium-bar"),e.rowDetailsUrl="",""==e.rowDetailsUrl&&(e.rowDetailsUrl="/CRM/ViewPriceBookDetails/"+e.price_book_id+"/CRM/CRM_PRICE_BOOKS")})),i.TotalRecords=e.data.data[0].totalrecords,i.TotalPages=Math.ceil(i.TotalRecords/i.PageSize),i.CurrentPage=i.PageNumber,$("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),$("#DeleteMultiple").addClass("disabled"),i.noRecord=!1):(i.noRecord=!0,i.PriceBookData=[],i.TotalRecords=0)):(i.noRecord=!0,i.PriceBookData=[],i.Headers=[],i.TotalRecords=0),setTimeout((function(){i.ResponsiveDataTable("tablelistingdata")}),500),i.isLoading=!1}))}}},S=p,C=i("2877"),_=Object(C["a"])(S,a,o,!1,null,null,null);t["default"]=_.exports}}]);
//# sourceMappingURL=CRMPriceBook.js.map