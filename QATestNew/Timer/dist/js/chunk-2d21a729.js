(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a729"],{bc0b:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("section",[e("loader",{attrs:{"is-visible":t.isLoading}}),e("tg-list",{attrs:{IsShowAction:!1,showCheckBox:!1,listType:[t.DetailListType],ModuleName:"Timer",SubModuleCode:"Timer",IdentityColumn:"category_id",HeaderText:"History",ListData:t.ApplicationCategoryHistoryList,HeaderData:t.Headers,widgets:t.widgets,callbackfunction:t.FetchData,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords,SearchFields:t.leftSearchFields,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.FetchData,LegendArray:t.LegendArray,SortExp:t.sortExp,SortBy:t.sortBy,NorecordfoundText:t.$t("NoRecordfound")},on:{LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,ActionButtonClick:t.actionButtonClick,SortdataButtonClick:t.sortdata},scopedSlots:t._u([{key:"slotdata",fn:function({data:a}){return["application_name"==a.column.COLUMN_NAME?[e("div",{class:a.row.icon_class?"appicon "+a.row.icon_class:"appicon default"}),e("a",{attrs:{href:"",title:a.row.application_display_name}},[t._v(" "+t._s(t.TruncateStr(a.row.application_display_name,20))+" ")])]:t._e(),"modified_at"==a.column.COLUMN_NAME?[e("span",[t._v(t._s(t.formatTimeToCustomFormat(a.row.modified_at)))])]:t._e()]}}])})],1)},i=[],r=(a("14d9"),a("9769"));let s=[{title:"Back to list",iconClass:"fa fa-angle-double-left pr-2",callbackfunction:"Backtolist",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1}],n=[{fieldName:"User",fieldType:"ddl-check",fieldIcon:"fa fa-user",paramName:"userIds",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"Date",fieldType:"date-range",fieldIcon:"fa-calendar",fieldSearchConditionName:["orders.order_date|orders.order_date"],isSearch:!1,datePickerConfig:{useCurrent:!1,showClear:!0,showClose:!0,allowInputToggle:!0,minDate:!1,maxDate:!1,widgetPositioning:{horizontal:"right",vertical:"bottom"}}},{fieldName:"Category",fieldType:"ddl-check",fieldIcon:"fa fa-suitcase",paramName:"categoryIds",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]}];function c(t,e,a){var o=t;if("USERS"==a){var i=`id=&modulename=${e}&type=${a}&search=&refId=`;r["a"].GetDDLData(i).then((function(t){let e={};t.data.DATA.forEach(t=>{e={name:t.name,value:t.value},o.leftSearchFields[0].listOptions.push(e)})}))}if("Category"==a){var s="pageSize=500&sortBy=category_name&sortExp=ASC";r["a"].GetCategoryListing(s).then((function(t){JSON.parse(t.data).data.forEach(t=>{let e={name:t.category_name,value:""+t.category_id};o.leftSearchFields[2].listOptions.push(e)})}))}}var d={buttons:s,leftsearchSchema:n,bindleftCommonSearchdropdown:c},l=a("1315"),h={data(){return{ApplicationCategoryHistoryList:[],leftSearchFields:d.leftsearchSchema,listActions:d.listActions,Headers:[{COLUMN_NAME:"application_name",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("ApplicationWebsite"),DISPLAY_ORDER:1,settings:{isInSlot:!0}},{COLUMN_NAME:"Category",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("Category"),DISPLAY_ORDER:2},{COLUMN_NAME:"PriviousCategory",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("Previouscategory"),DISPLAY_ORDER:3},{COLUMN_NAME:"UserName",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("Changedby"),DISPLAY_ORDER:4},{COLUMN_NAME:"modified_at",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("Lastupdated"),DISPLAY_ORDER:5,settings:{isInSlot:!0}}],noRecord:!0,TotalRecords:0,CurrentPage:1,TotalPages:0,sortBy:"",sortExp:"",pageSize:10,pageNum:1,legendProgress:[{class:"",backgroundColor:"#17a2b8",name:"Draft"},{class:"legend-Progress",backgroundColor:"",name:"Approved"},{class:"legend-pending",backgroundColor:"",name:"Pending"},{class:"",backgroundColor:"#fe6847",name:"SendForCorrection"},{class:"",backgroundColor:"#ee1313",name:"Rejected"}],LegendArray:[],PageSizeOption:null,listheaderbuttons:d.buttons,isLoading:!1,DetailListType:"List"}},created(){this.FetchData(),d.bindleftCommonSearchdropdown(this,"Timer","USERS"),d.bindleftCommonSearchdropdown(this,"Timer","Category")},methods:{async FetchData(){var t=this;t.isLoading=!0;var e=`pageSize=${t.pageSize}&pageNum=${t.pageNum}&sortBy=${t.sortBy}&sortExp=${t.sortExp}&${t.searchCondition}`;await r["a"].GetTimeTrackingHistoryListing(e).then(e=>{e.data.data.length>0?(t.ApplicationCategoryHistoryList=e.data.data,t.isLoading=!1,t.TotalRecords=e.data.data[0].TotalRecords,t.TotalPages=Math.ceil(t.TotalRecords/t.pageSize),t.CurrentPage=t.pageNum,t.noRecord=!1,$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked")):t.ApplicationCategoryHistoryList=[],t.isLoading=!1}),setTimeout((function(){t.CheckBoxBootstrap()}),100)},actionButtonClick(t,e){},renderActions(t){},pagerMethod:function(t){this.pageSize=t.PageSize,this.pageNum=t.PageNumber,this.FetchData()},Backtolist:function(){this.$router.push({name:"UsedApplicationListing"})},commonHeaderButtonClick(t){switch(t.callbackfunction){case"Backtolist":this.Backtolist();break}},leftCommonSearch:function(t){this.PageNumber=t.PageNumber,this.isPaged=1,"undefined"!=typeof t.searchCondition?this.searchCondition=t.searchConditionJson:this.searchCondition="",this.FetchData()},sortdata:function(t){var e="sort tb_headerSortDown";this.sortBy=t,t===this.sortBy&&(""==this.sortExp?(this.sortExp="ASC",e="sort tb_headerSortDown"):"ASC"==this.sortExp?(this.sortExp="DESC",e="sort tb_headerSortUp"):(this.sortExp="ASC",e="sort tb_headerSortDown")),this.FetchData(),$("#"+t+"  span:first-child").attr("class",e)},formatTimeToCustomFormat(t){if(null!=t&&""!=t){const e=l["DateTime"].fromISO(t,{zone:"utc"}),a=Intl.DateTimeFormat().resolvedOptions().timeZone,o=e.setZone(a),i=o.toFormat("MM/dd/yyyy h:mm a");return i}return"NA"}}},u=h,p=a("2877"),m=Object(p["a"])(u,o,i,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d21a729.js.map