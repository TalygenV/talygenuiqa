(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da545"],{"6aae":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("section",[t("loader",{attrs:{"is-visible":e.isLoading}}),t("tg-list",{attrs:{IsShowAction:!1,showCheckBox:!0,listType:[e.DetailListType],ModuleName:"Approval",SubModuleCode:"Approval",IdentityColumn:"GROUPID",HeaderText:e.$t("TimesheetApprovals"),ListData:e.TimesheetApprovalList,HeaderData:e.Headers,widgets:e.widgets,callbackfunction:e.FetchData,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,SearchFields:e.leftSearchFields,RenderRowActionMethod:e.renderActions,ListDataCallBackFunction:e.FetchData,LegendArray:e.LegendArray,SortExp:e.SortExp,SortBy:e.SortBy,NorecordfoundText:e.$t("NoRecordfound")},on:{LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,ActionButtonClick:e.actionButtonClick,SortdataButtonClick:e.sortdata},scopedSlots:e._u([{key:"slotdata",fn:function({data:a}){return["COMMENTSCOUNT"==a.column.COLUMN_NAME?[t("a",{staticClass:"comment",attrs:{href:"javascript:;",weekdatarange:"2022-12-26^2023-01-01",userid:"63221",title:"","data-toggle":"modal","data-target":"#tsacomment","data-toggle-tooltip":"tooltip","data-original-title":"Comments(0)"},on:{click:e.AddCommentPopUp}},[t("i",{staticClass:"fa fa-comment-o text-dark action-icon"}),t("span",{staticClass:"noti-circle noti-blue text-center"},[e._v(e._s(a.row.COMMENTSCOUNT))])])]:e._e(),"View"==a.column.COLUMN_NAME?[t("a",{attrs:{href:"javascript:;"},on:{click:e.GeneralTimesheetPopup}},[t("em",{staticClass:"fa fa-eye text-info action-icon"})])]:e._e(),"STATUS_CODE"==a.column.COLUMN_NAME?[t("span",[e._v(e._s("TRACK_ENTRY_REJECTED"==a.row.STATUS_CODE?"Rejected":"TRACK_ENTRY_ADD_MANUAL_PENDING"==a.row.STATUS_CODE?"Pending":"Approved")+" ")])]:e._e()]}}])}),e.openModal?t("AddComment"):e._e(),e.openGeneralTimesheetModal?t("GeneralTimeSheet"):e._e()],1)},o=[],s=(a("14d9"),a("9769"));let r=[{title:"Approve",iconClass:"fa fa-check",callbackfunction:"ApproveTimesheet",additionalClass:"",isdisabled:!0,isvisible:!0,id:"AddNewGroup",checkPrivilege:!1},{title:"Reject",iconClass:"fa fa-close",callbackfunction:"AddNewGroup",additionalClass:"",isdisabled:!0,isvisible:!0,id:"AddNewGroup",checkPrivilege:!1},{title:"View History",iconClass:"fa fa-history",callbackfunction:"ViewHistory",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1}],l=[{fieldName:"From Date",fieldType:"date",fieldIcon:"fa fa-calendar",paramName:"dtFrom",fieldSearchConditionName:[""],isSearch:!1,datePickerConfig:{useCurrent:!0,showClear:!0,showClose:!0,minDate:!0,maxDate:!0,widgetPositioning:{horizontal:"right",vertical:"bottom"}}},{fieldName:"To Date",fieldType:"date",fieldIcon:"fa fa-calendar",paramName:"dtTo",fieldSearchConditionName:[""],isSearch:!1,datePickerConfig:{useCurrent:!0,showClear:!0,showClose:!0,minDate:!0,maxDate:!0,widgetPositioning:{horizontal:"right",vertical:"bottom"}}},{fieldName:"User",fieldType:"radio",fieldIcon:"fa fa-users",paramName:"SearchuserId",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]}];function n(e,t){var a=e;"CA"==t&&s["a"].GetUsersByCompanyId().then(e=>{e.data.forEach(e=>{let t={name:e.username,value:e.user_id};a.leftSearchFields[2].listOptions.push(t)})}).catch(e=>{console.log(e)})}var c={buttons:r,leftsearchSchema:l,bindleftCommonSearchdropdown:n},d=function(){var e=this,t=e._self._c;return t("section",[t("div",{staticClass:"my-popups"},[t("div",{staticClass:"modal d-block"},[t("div",{staticClass:"modal-dialog modal-dialog-centered ui-draggable"},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header ui-draggable-handle py-0"},[t("h4",{staticClass:"modal-title mt-2 pt-1",attrs:{name:"header"}},[e._v(" "+e._s(e.$t("Comment"))+" ")]),t("button",{staticClass:"close",on:{click:e.closePopup}},[t("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),t("div",{staticClass:"listing py-3 px-3"},[t("dynamic-form",{ref:"PostCommentForm",attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit}})],1)])])])])])},h=[],p={props:{selectedRecordValues:{type:Array,required:!0},AssignDpt:{type:Array,required:!0}},data(){return{FormSchema:[{layoutType:"double",Data:[{astype:"TextField",label:this.$t("Title"),name:"Title",value:"",placeholder:"",config:{},validationRules:{required:!0,max:250}},{astype:"RadioField",label:this.$t("Visibilty"),name:"Visibilty",value:1,placeholder:"",visibility:!0,validationRules:{required:!1},config:{options:[{value:1,name:"Public"},{value:2,name:"Private"}]}}]},{layoutType:"single",Data:[{astype:"TextAreaField",label:this.$t("Description"),name:"Description",value:"",mode:"tag",placeholder:"",config:{options:[]},validationRules:{required:!0}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-send pr-2'></i>Post New Comment",isVisible:!0}],trackId:0,trackAccess:0,isLoading:!1}},created:function(){},methods:{closePopup(){var e=this;e.$parent.CloseComment()},onSubmit:function(e){var t=this,a=`trackId=${t.trackId}&title=${e.Title}&description=${e.Description}&trackAccess=${t.trackAccess}&visibility=${e.Visibilty}`;s["a"].AddComment(a).then(e=>{1==e.data&&(this.$router.push({name:"ApprovalRule"}),t.ShowAlert("Comment SuccessFully added ","success",!0,t.$t("Alert")))})}}},m=p,u=a("2877"),A=Object(u["a"])(m,d,h,!1,null,null,null),C=A.exports,S=function(){var e=this,t=e._self._c;return t("section",[t("div",{staticClass:"my-popups"},[t("div",{staticClass:"modal d-block"},[t("div",{staticClass:"modal-dialog modal-dialog-centered ui-draggable"},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header ui-draggable-handle py-0"},[t("h4",{staticClass:"modal-title mt-2 pt-1",attrs:{name:"header"}},[e._v(" "+e._s(e.$t("Comment"))+" ")]),t("button",{staticClass:"close",on:{click:e.closePopup}},[t("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])])])])])])])},T=[],E={data(){return{}},methods:{closePopup(){this.$parent.GeneralTimesheetClosePopup()}}},D=E,f=Object(u["a"])(D,S,T,!1,null,null,null),_=f.exports,g={components:{AddComment:C,GeneralTimeSheet:_},data(){return{widgets:[],openModal:!1,isLoading:!1,leftSearchFields:c.leftsearchSchema,listActions:c.listActions,listheaderbuttons:c.buttons,LegendArray:[],TimesheetApprovalList:[],Headers:[{COLUMN_NAME:"USER_NAME",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("UserName"),DISPLAY_ORDER:1},{COLUMN_NAME:"WEEK_DATE_RANGE",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("TimesheetPeriod"),DISPLAY_ORDER:2},{COLUMN_NAME:"TRACK_HOURS",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("TrackedHour"),DISPLAY_ORDER:3},{COLUMN_NAME:"BREAK_DURATION",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("BreakHour"),DISPLAY_ORDER:4},{COLUMN_NAME:"TRACK_HOURS",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("FinalTrackedHour"),DISPLAY_ORDER:5},{COLUMN_NAME:"",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("PerDiem"),DISPLAY_ORDER:6},{COLUMN_NAME:"BONUS_AMOUNT",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("BonusAmount"),DISPLAY_ORDER:7},{COLUMN_NAME:"STATUS_CODE",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("Status"),DISPLAY_ORDER:8,settings:{isInSlot:!0}},{COLUMN_NAME:"COMMENTSCOUNT",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("Comment"),DISPLAY_ORDER:9,settings:{isInSlot:!0}},{COLUMN_NAME:"View",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("View"),DISPLAY_ORDER:10,settings:{isInSlot:!0}}],noRecord:!0,SortBy:"",SortExp:"",GroupData:[],TotalRecords:0,CurrentPage:1,TotalPages:0,SearchuserId:"",userType:"CA",DateTime:"",showData:"",statusCode:"",sortExp:"",sortBy:"",pageSize:10,pageNumber:1,projectId:"",DetailListType:"List",openGeneralTimesheetModal:!1}},created(){var e=this;c.bindleftCommonSearchdropdown(this,"CA","USERS"),e.FetchData(),e.LegendArray=[{class:"legend-pending colorboxsquare",text:"Auditable Records"},{class:"legends_profile colorboxsquare",text:"Unpaid Leave Records "},{text:"| The total break hours are shown only if the break is non-billable."}]},methods:{pagerMethod:function(e){this.pageSize=e.PageSize,this.pageNumber=e.PageNumber,this.FetchData()},async FetchData(){var e=this;e.isLoading=!0;var t=`userType=${e.userType}&DateTime=${e.DateTime}&showData=${e.showData}&statusCode=${e.statusCode}&sortBy=${e.sortBy}&sortExp=${e.sortExp}&pageSize=${e.pageSize}&pageNum=${e.pageNumber}&projectId=${e.projectId}&${e.searchCondition}`;await s["a"].TimesheetApprovalList(t).then(t=>{t.data.length>0?(e.TimesheetApprovalList=t.data,e.TimesheetApprovalList.forEach(t=>{var a=e.TimesheetApprovalList.find(e=>e.TRACK_HOURS===t.TRACK_HOURS);a.TRACK_HOURS=e.secondsToTime(t.TRACK_HOURS)}),e.isLoading=!1,e.TotalRecords=t.data[0].TotalRecords,e.TotalPages=Math.ceil(e.TotalRecords/e.pageSize),e.CurrentPage=e.pageNumber,e.noRecord=!1,$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked")):e.TimesheetApprovalList=[],e.isLoading=!1}),setTimeout((function(){e.CheckBoxBootstrap()}),100)},ViewHistory(){this.$router.push({name:"ApprovalHistory"})},commonHeaderButtonClick(e){switch(e.callbackfunction){case"ViewHistory":this.ViewHistory();break}},AddCommentPopUp(){this.openModal=!0},CloseComment(){this.openModal=!1},GeneralTimesheetPopup(){this.openGeneralTimesheetModal=!0},GeneralTimesheetClosePopup(){this.openGeneralTimesheetModal=!1},actionButtonClick(e,t){},renderActions(e){},leftCommonSearch:function(e){this.PageNumber=e.PageNumber,this.isPaged=1,"undefined"!=typeof e.searchCondition?this.searchCondition=e.searchConditionJson:this.searchCondition="",this.FetchData()},sortdata:function(e){var t="sort tb_headerSortDown";this.SortBy=e,e===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",t="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",t="sort tb_headerSortUp"):(this.SortExp="ASC",t="sort tb_headerSortDown")),this.FetchData(),$("#"+e+"  span:first-child").attr("class",t)},secondsToTime(e){var t=Math.floor(e/3600),a=e%3600,i=Math.floor(a/60),o=a%60,s=(Math.ceil(o),t+":"+i);return s},ApproveTimesheet(){var e=this,t="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){t.length>0&&(t+=","),t+=$(this).val()})),t.length>0&&e.confirmR(e.$t("ConfirmDelete"),!0,e.$t("Delete")+"  ",(function(){e.isLoading=!0;var a="ids="+t;s["a"].DeleteRule(a).then(t=>{t.data?($("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),$("[id^='DeleteMultiple']").removeClass("enable").addClass("disabled"),e.ShowAlert(e.$t("DeletedSuccess",[e.$t("Approval")]),"Success",!0,e.$t("Alert")),e.FetchData()):e.ShowAlert(e.$t("DeletedError",[e.$t("Group_Item")]),"failure",!0,e.$t("Alert")),e.isLoading=!1})}))}},components:{AddComment:C}},L=g,b=Object(u["a"])(L,i,o,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d0da545.js.map