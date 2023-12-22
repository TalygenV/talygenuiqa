(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3debacfb"],{"113d":function(e,a,t){"use strict";t("14d9");var i=t("9769");let o=[{title:"Accept Ticket",iconClass:"fa action-icon fa-check",callbackfunction:"AcceptMultipleTickets",additionalClass:"",isdisabled:!0,isvisible:!0,id:"assignTicket",isEnabledOnSelectedRow:!0},{title:"Reject Tickets",iconClass:"fa action-icon fa-close",callbackfunction:"RejectMultipleTickets",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!1,isEnabledOnSelectedRow:!0},{title:"View History",iconClass:"fa action-icon fa-history",callbackfunction:"ViewHistory",additionalClass:"",href:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1}],s=[{title:"Back to list",iconClass:"fa fa-angle-double-left",callbackfunction:"openAcceptancePending",additionalClass:"",isdisabled:!1,isvisible:!0,id:"assignTicket"}],c=[{fieldName:"Priority",fieldType:"radio",fieldIcon:"fa fa-list-ul",paramName:"priorityCode",fieldSearchConditionName:["TP.PRIORITY_ID"],isSearch:!1,value:"",listOptions:[]},{fieldName:"Location",fieldType:"text",fieldIcon:"fa fa-map-marker",fieldSearchConditionName:["TPIN.COUNTY","TPIN.PLACE","TPIN.ADDRNAME","TPIN.ADDRFROM","TPIN.DIGSTREET","TPIN.STATE"],isSearch:!1,paramName:"LocationValue",value:"",listOptions:[]},{fieldName:"Subject",fieldType:"text",fieldIcon:"fa fa-file",fieldSearchConditionName:["TICK.TICKET_SUBJECT"],isSearch:!1,value:"",listOptions:[]},{fieldName:"Ticket Number",fieldType:"text",fieldIcon:"fa fa-ticket",fieldSearchConditionName:["TICK.TICKET_NUMBER"],isSearch:!1,paramName:"ticketNumber",value:"",listOptions:[]},{fieldName:"Assigned To",fieldType:"radio",fieldIcon:"fa fa-user",paramName:"AssignedTo",fieldSearchConditionName:["TICK.Assigned_To"],isSearch:!1,value:"",listOptions:[]},{fieldName:"Ticket Status",fieldType:"ddl-check",fieldIcon:"fa fa-file-text-o",fieldSearchConditionName:["STS.STATUS_NAME"],isSearch:!1,paramName:"Status",value:"",listOptions:[]},{fieldName:"Supervisor",fieldType:"radio",fieldIcon:"fa fa-user-circle-o",paramName:"SupervisorId",fieldSearchConditionName:["TICK.SUPERVISOR"],isSearch:!1,value:"",listOptions:[]},{fieldName:"Critical Approval",fieldType:"radio",fieldIcon:"fa fa-certificate",fieldSearchConditionName:[""],paramName:"CriticalApproval",isSearch:!1,value:"",listOptions:[]},{fieldName:"Form Submit",fieldType:"radio",fieldIcon:"fa fa-wpforms",fieldSearchConditionName:[""],paramName:"IsFormSubmitted",isSearch:!1,value:"",listOptions:[]},{fieldName:"Tags",fieldType:"radio",fieldIcon:"fa fa-wpforms",fieldSearchConditionName:[""],paramName:"TagId",isSearch:!1,value:"",listOptions:[]}],n=[{fieldName:"DATE",fieldType:"date",fieldIcon:"fa fa-calendar",paramName:"date",fieldSearchConditionName:["created_at"],isSearch:!1,datePickerConfig:{useCurrent:!1,showClear:!0,showClose:!0,allowInputToggle:!0,widgetPositioning:{horizontal:"right",vertical:"bottom"}},value:"",listOptions:[]},{fieldName:"TICKET NUMBER",fieldType:"text",fieldIcon:"fa fa-ticket",fieldSearchConditionName:["TT.ticket_number"],isSearch:!1,paramName:"ticketNumber",value:"",listOptions:[]},{fieldName:"LAST ACTIVITY DONE BY",fieldType:"ddl-check",fieldIcon:"fa fa-user",paramName:"assigned_to",fieldSearchConditionName:["TT.assigned_to"],isSearch:!1,value:"",listOptions:[]},{fieldName:"ACCEPTED/REJECTED",fieldType:"radio",fieldIcon:"fa-thumbs-up",fieldSearchConditionName:["TAR.type"],isSearch:!1,paramName:"Accept",value:"",listOptions:[{name:"Accept",value:"accept"},{name:"Reject",value:"reject"}]}],l=[{title:"Accept",href:"javascript:void(0)",callbackfunction:"AcceptRejectTicket",icon:"fa fa-check action-icon",additionalSpan:""},{title:"Reject",href:"javascript:void(0)",callbackfunction:"AcceptRejectTicket",icon:"fa fa-close action-icon",additionalSpan:""},{title:"View on Map",callbackfunction:"openAddNewEvent",href:"javascript:void(0)",icon:"fa fa-map-marker",additionalSpan:"",class:"bg-secondary"},{title:"Edit",href:"javascript:void(0)",icon:"ffa action-icon fa fa-edit",additionalSpan:""},{title:"View Ticket",href:"javascript:void(0)",icon:"fa fa-ticket",callbackfunction:"openViewTicketTab",additionalSpan:"",class:"round-icon-small btn-info"},{title:"Quick View",href:"javascript:void(0)",icon:"fa fa-eye",callbackfunction:"openQuickViewpopup",additionalSpan:"",class:"round-icon-small btn-primary"},{title:"Follow-Up",callbackfunction:"ManageFollowUp",href:"javascript:void(0)",icon:"fa fa-flag",additionalSpan:"",class:"round-icon-small  btn-success"},{title:"View Recurring Detail",callbackfunction:"openViewRecurringTicket",href:"javascript:void(0)",icon:"fa fa-refresh",additionalSpan:"",class:"round-icon-small  btn-success"},{title:"Reopen",callbackfunction:"MarkAsActive",href:"javascript:void(0)",icon:"fa fa-check",additionalSpan:"",class:"round-icon-small btn-success"}];async function r(e,a,t,o,s){var c=e,n="moduleName=Ticketing&type="+t;"FSM_USERS"==t&&await i["a"].GetDDLData(n).then(e=>{e.data.DATA.forEach(e=>{let a={name:e.name,value:e.value};c.leftSearchFields[2].listOptions.push(a)})})}async function d(e,a,t,o,s){var c=e,n="moduleName=Ticketing&type="+t;if("Priority"==t)c.leftSearchFields[0].listOptions.push({name:"All("+s+")",value:""}),o.forEach(e=>{let a={name:e.mapping_name+"("+e.tab_count_data+")",value:e.tab_mapping_id};c.leftSearchFields[0].listOptions.push(a)});else if("FSM_TICKET_TYPE"==t)await i["a"].GetDDLData(n).then(e=>{e.data.DATA.forEach(e=>{let a={name:e.name,value:e.value};c.leftSearchFields[3].listOptions.push(a)})});else if("FSM_USERS"==t)await i["a"].GetDDLData(n).then(e=>{e.data.DATA.forEach(e=>{let a={name:e.name,value:e.value};c.leftSearchFields[4].listOptions.push(a)})});else if("Ticketing"==t){var l="statusType=Ticketing";await i["a"].GetFsmStatusDDLData(l).then(e=>{c.leftSearchFields[5].listOptions=[],e.data.forEach(e=>{let a={name:e.STATUS,value:e.STATUS};c.leftSearchFields[5].listOptions.push(a)})})}else if("TICKET_SUPERVISOR"==t)await i["a"].GetDDLData(n).then(e=>{e.data&&e.data.hasOwnProperty("DATA")&&(c.leftSearchFields[6].listOptions.push({name:"All",value:"All"}),e.data.DATA.forEach(e=>{let a={name:e.name,value:e.value};c.leftSearchFields[6].listOptions.push(a)}))});else if("Critical Approval"==t){let e={name:"ALL",value:"ALL"},a={name:"Approval Pending",value:"APPROVE_PENDING"},t={name:"Approved",value:"APPROVED"};c.leftSearchFields[7].listOptions.push(e),c.leftSearchFields[7].listOptions.push(a),c.leftSearchFields[7].listOptions.push(t)}else if("Form Submit"==t){let e={name:"Yes",value:0},a={name:"No",value:1};c.leftSearchFields[8].listOptions.push(e),c.leftSearchFields[8].listOptions.push(a)}else"TAG_DATA"==t&&await i["a"].GetDDLData(n).then(e=>{e.data.DATA.forEach(e=>{let a={name:e.name,value:e.value};c.leftSearchFields[9].listOptions.push(a)})})}a["a"]={buttons:o,viewHistoryButtons:s,leftsearchSchema:c,leftHistorySearchSchema:n,listActions:l,bindViewHistoryleftCommonSearchdropdown:r,bindleftCommonSearchdropdown:d}},f7e3:function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e._self._c;return a("section",[a("tg-list",{directives:[{name:"show",rawName:"v-show",value:e.IsTicketTypeView,expression:"IsTicketTypeView"}],attrs:{IsShowAction:!1,ModuleName:"FSM",SubModuleCode:"TicketMapping",LegendArray:[],widgets:[],IdentityColumn:"TYPE_ID",listType:["List"],ListData:e.ViewHistoryList,HeaderData:e.Headers,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,SearchFields:e.leftSearchFields,ListDataCallBackFunction:e.FetchRecords,showCheckBox:!1,SortExp:e.SortExp,SortBy:e.SortBy,RenderRowActionMethod:()=>{},NorecordfoundText:e.$t("NoRecordfound")},on:{LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,SortdataButtonClick:e.sortdata}}),e.showFilter?a("searchFilter",{attrs:{submodulecode:"Ticketing",modulename:"Ticketing",callbackfunction:e.fetchRecords},on:{close:function(a){e.showFilter=!1},FilterData:e.FilterData}},[a("h5",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.$t("Search")))])]):e._e()],1)},o=[],s=(t("14d9"),t("88a7"),t("271a"),t("5494"),t("9769")),c=t("113d"),n={data(){return{noRecords:!1,TicketId:0,TotalRecords:0,PageNumber:1,PageSize:10,SortBy:"",SortExp:"",CurrentPage:1,TotalPages:0,SearchCondition:"",ViewHistoryList:[],GroupStart:1,noRecords:!1,BillingTicketType:"",OneCallTicketType:"",CreatedBy:"",ticketSourceId:0,EditData:"",showTickectSource:!1,ShowTicketMapping:!1,showBillingTicketList:!1,showExpanded:"",StatusMappingList:[],index:0,MappedTicketId:"",StatusId:"",manageTicketSourceId:0,IsTicketTypeView:!0,ShowTicketType:!1,listheaderbuttons:c["a"].viewHistoryButtons,leftSearchFields:c["a"].leftHistorySearchSchema,Headers:[{COLUMN_NAME:"ticket_number",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Ticket Number",DISPLAY_ORDER:1},{COLUMN_NAME:"ticket_subject",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Subject",DISPLAY_ORDER:2},{COLUMN_NAME:"UserAssignedTo",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"User Assigned To","DISPLAY_ORDER ":3},{COLUMN_NAME:"LastActivityDoneBy",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Last Activity Done By",DISPLAY_ORDER:4},{COLUMN_NAME:"type",DATA_TYPE:"",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Accepted/Rejected",DISPLAY_ORDER:5},{COLUMN_NAME:"created_at",DATA_TYPE:"date",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Date - Time",DISPLAY_ORDER:5}]}},created:async function(){var e=this;await this.FetchRecords(),await c["a"].bindViewHistoryleftCommonSearchdropdown(e,"Ticketing","FSM_USERS")},FilterData:function(e,a,t,i,o,s){this.pageNum=e,this.pageSize=a,this.sortBy=t,this.sortExp=i,this.searchCondition=o,null!=typeof s&&this.appliedFilter.push(s),this.FetchRecords()},methods:{openAcceptancePending:function(){var e=this;e.$router.push({name:"PendingAcceptanceList"})},sortdata:function(e){var a="sort tb_headerSortDown";"UserAssignedTo"==e?e="user_assigned_to":"LastActivityDoneBy"==e&&(e="last_activity_done_by"),this.SortBy=e,e===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",a="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",a="sort tb_headerSortUp"):(this.SortExp="ASC",a="sort tb_headerSortDown")),this.FetchRecords(),$("#"+e+"  span:first-child").attr("class",a)},commonHeaderButtonClick:function(e){switch(e.callbackfunction){case"openAcceptancePending":this.openAcceptancePending();break}},leftCommonSearch:function(e){this.searchCondition=e.searchCondition;const a=new URLSearchParams(e.searchConditionJson),t=a.entries();this.paramsToObject(t);this.PageNumber=e.PageNumber,this.isPaged=1,this.FetchRecords()},pagerMethod:function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,this.FetchRecords()},FetchRecords:function(){var e=this;e.isBlank(e.SearchCondition)||(e.PageNumber=1);var a=`sortBy=${e.SortBy}&sortExp=${e.SortExp}&pagesize=${e.PageSize}&pagenumber=${e.PageNumber}`,t="";this.isBlank(this.searchCondition)||(t+=encodeURIComponent(this.searchCondition)),""!=t&&(a=a+"&search="+t),s["a"].GetViewHistoryPendingAcceptanceListing(a).then((function(a){e.ViewHistoryList=[],e.TotalPages=Math.ceil(e.TotalRecords/e.PageSize),e.TotalRecords=0,null!=a.data&&""!=a.data&&("Success"==a.data.status?(e.ViewHistoryList=a.data.result.data,e.ViewHistoryList.length>0?(e.TotalRecords=a.data.result.data[0].TOTALRECORDS,e.NoRecord=!1,e.TotalPages=Math.ceil(e.TotalRecords/e.PageSize),e.CurrentPage=e.PageNumber):e.NoRecord=!0):e.NoRecord=!0,setTimeout((function(){e.ResponsiveDataTable("tablelistingdata")}),500))}))}}},l=n,r=t("2877"),d=Object(r["a"])(l,i,o,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-3debacfb.js.map