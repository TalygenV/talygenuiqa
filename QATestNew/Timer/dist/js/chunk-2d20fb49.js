(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20fb49"],{b588:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("section",[e("loader",{attrs:{"is-visible":t.isLoading}}),e("tg-list",{attrs:{IsShowAction:!0,showCheckBox:!1,listType:[t.ListType],ModuleName:"Timer",SubModuleCode:"Timer",IdentityColumn:"user_id",HeaderText:t.$t("LiveMonitoring"),ListData:t.UserList,HeaderData:t.Headers,widgets:t.widgets,callbackfunction:t.FetchData,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords,SearchFields:t.leftSearchFields,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.FetchData,LegendArray:t.LegendArray,SortExp:t.sortExp,SortBy:t.sortBy,NorecordfoundText:t.$t("NoRecordfound")},on:{LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,ActionButtonClick:t.actionButtonClick,SortdataButtonClick:t.sortdata},scopedSlots:t._u([{key:"slotdata",fn:function({data:a}){return["user_status"==a.column.COLUMN_NAME?[e("a",{staticClass:"inactive-disabled"},[e("span",{class:{"btn d-inline-block text-center text-truncate btn-success":"Active"==a.row.user_status,"btn d-inline-block text-center text-truncate btn-danger":"Stopped"==a.row.status_name,"btn d-inline-block text-center text-truncate btn-warning":"Idle"==a.row.status_name,"btn d-inline-block text-center text-truncate btn-primary":"Slacking"==a.row.status_name}},[t._v(" "+t._s(a.row[a.column.COLUMN_NAME])+" ")])])]:t._e(),"productive_type"==a.column.COLUMN_NAME?[e("a",{staticClass:"inactive-disabled"},[e("span",{class:{"btn d-inline-block text-center text-truncate btn-warning":"Neutral"==a.row.productive_type,"btn d-inline-block text-center text-truncate btn-success":"Productive"==a.row.status_name,"btn d-inline-block text-center text-truncate btn-secondary":"Unproductive"==a.row.status_name}},[t._v(" "+t._s(a.row[a.column.COLUMN_NAME])+" ")])])]:t._e(),"left_time"==a.column.COLUMN_NAME?[t._v(" "+t._s("00:00:00"==a.row[a.column.COLUMN_NAME]?"-":a.row[a.column.COLUMN_NAME])+" ")]:t._e()]}}])}),t.isShowLive?e("LiveView",{attrs:{Item:t.LiveItem},on:{close:function(e){t.isShowLive=!1}}}):t._e()],1)},i=[],r=(a("14d9"),a("9769"));let n=[{fieldName:"User Name",fieldType:"ddl-check",fieldIcon:"fa fa-user",paramName:"userIds",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"Department",fieldType:"ddl-check",fieldIcon:"fa fa-suitcase",paramName:"departmentIds",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"Status",fieldType:"ddl-check",fieldIcon:"fa fa-user",paramName:"statusIds",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"Shift",fieldType:"ddl-check",fieldIcon:"fa fa-clock-o",paramName:"shitfIds",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]}],o=[{title:"Live View",callbackfunction:"GotoLive",icon:"fa fa-tv text-primary action-icon",additionalSpan:"",isVisible:!0}];async function c(t,e,a){var s=t;if("USERS"==a){var i=`id=&moduleName=${e}&type=${a}&search=&refId=`;await r["a"].GetDDLData(i).then((function(t){if(t.data){let e={};t.data.DATA.forEach(t=>{e={name:t.name,value:t.value},s.leftSearchFields[0].listOptions.push(e)})}}))}if("DEPARTMENT"==a){i=`id=&moduleName=${e}&type=${a}&search=&refId=`;await r["a"].GetDDLData(i).then((function(t){if(t.data){let e={};t.data.DATA.forEach(t=>{e={name:t.name,value:t.value},s.leftSearchFields[1].listOptions.push(e)})}}))}}var l={leftsearchSchema:n,bindleftCommonSearchdropdown:c,listActions:o},d=function(){var t=this,e=t._self._c;return e("section",[e("loader",{attrs:{"is-visible":t.isLoading}}),e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered ui-draggable"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header ui-draggable-handle"},[e("h4",{staticClass:"modal-title pt-1",attrs:{name:"header"}},[t._v(" "+t._s(t.$t("LiveView"))+" - "+t._s(t.Item.username)+" ")]),e("button",{staticClass:"close",on:{click:function(e){return t.StopStreaming()}}},[e("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"mx-auto mt-5",staticStyle:{"max-width":"1280px"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"livescreen_leftbase"},[e("div",{staticClass:"led_screen mb-3 float-left w-100"},[t.imageSrc?e("img",{attrs:{src:t.imageSrc,alt:"Base64 Image"}}):t._e(),e("div",{staticClass:"fullscreen_btn",attrs:{title:t.$t("FullScreen")}},[e("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.ShowFullScreen()}}},[e("em",{staticClass:"fa fa-expand"})])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 text-left font-23"},[t._v("07-05-2024 - 04:52 PM")]),t.isStartedRecording?e("div",{staticClass:"col-lg-6 text-right font-23"},[t._v("["),e("em",{staticClass:"fa fa-circle text-danger"}),t._v(" rec] 00:02:04")]):t._e()])]),e("div",{staticClass:"livescreen_rightbase"},[e("div",{staticClass:"cont_desc"},[e("h3",[t._v(t._s(t.$t("SystemName"))+":")]),e("span",[t._v("Talygen-SYS-142")])]),e("div",{staticClass:"cont_desc"},[e("h3",[t._v(t._s(t.$t("OperatingSystem"))+":")]),e("span",[t._v("Window 10")])]),e("div",{staticClass:"cont_desc"},[e("h3",[t._v(t._s(t.$t("IpAddress"))+":")]),e("span",[t._v("192.168.0.210")])]),e("div",{staticClass:"cont_desc"},[e("h3",[t._v(t._s(t.$t("MACAddressVdesk"))+":")]),e("span",[t._v("00-BO-DO-63-C2-26")])]),e("div",{staticClass:"cont_desc"},[e("h3",[t._v(t._s(t.$t("Shift"))+":")]),e("span",[t._v("09:00AM - 06:00PM")])]),e("div",{staticClass:"cont_desc"},[e("h3",[t._v(t._s(t.$t("Location"))+":")]),e("span",[t._v("New York")])]),e("div",{staticClass:"cont_btns col-lg-12"},[e("div",{staticClass:"smallbtns text-center w-100 d-flex mb-2"},[e("a",{staticClass:"btn btn-yellow",attrs:{title:t.$t("ForceLogout")},on:{click:function(e){return t.ForceLogout()}}},[e("em",{staticClass:"fa fa-keyboard-o"})]),e("a",{staticClass:"btn btn-blue",attrs:{title:t.isFreezeKeyboard?t.$t("UnfreezeKeyboard"):t.$t("FreezeKeyboard")},on:{click:function(e){return t.FreezeUnfreezeKeyboard()}}},[e("em",{staticClass:"fa fa-keyboard-o"})]),e("a",{staticClass:"btn btn-purple",attrs:{title:t.isFreezeMouse?t.$t("UnfreezeMouse"):t.$t("FreezeMouse")},on:{click:function(e){return t.FreezeUnfreezeMouse()}}},[e("em",{staticClass:"fa fa-keyboard-o"})])]),e("div",{staticClass:"largebtns"},[t.isStartedRecording?t._e():e("a",{staticClass:"btn btn-primary",on:{click:function(e){return t.StartRecording()}}},[t._v(t._s(t.$t("StartRecording")))]),t.isStartedRecording?e("a",{staticClass:"btn btn-danger",on:{click:function(e){return t.StopRecording()}}},[t._v(t._s(t.$t("StopRecording")))]):t._e(),e("a",{staticClass:"btn btn-success"},[t._v(t._s(t.$t("TakeScreenshot")))]),t.isShowDownload?e("a",{staticClass:"btn btn-secondary",on:{click:function(e){return t.DownloadRecording()}}},[t._v(t._s(t.$t("DownloadNow")))]):t._e(),e("a",{staticClass:"btn btn-danger"},[t._v(t._s(t.$t("ExitFullScreen")))])])])])])])])])])])])],1)},u=[],m={props:{Item:{type:Object,required:!0}},data(){return{isLoading:!1,isStartedRecording:!1,isShowDownload:!1,isFreezeKeyboard:!1,isFreezeMouse:!1,isLogout:!1,imageSrc:""}},created(){var t=this;t.LiveStreaming()},sockets:{imageData(t){var e=this;e.imageSrc="data:image/jpeg;base64,"+t.imageBuffer},stopImageTransfer(){var t=this;t.imageSrc=""}},methods:{LiveStreaming(){var t=this;t.$socket.emit("startStreaming",t.Item)},StopStreaming(){var t=this;t.$socket.emit("stopStreaming",t.Item),t.$emit("close")},StartRecording(){var t=this;t.isStartedRecording=!0,t.isShowDownload=!1},StopRecording(){var t=this;t.isStartedRecording=!1,t.isShowDownload=!0},DownloadRecording(){},ForceLogout(){var t=this;t.isLogout=!0,t.confirmR(t.$t("AreYouSureYouWantToLogOffUserSystem"),!0,"",(function(){}))},FreezeUnfreezeKeyboard(){var t=this;t.isFreezeKeyboard?(t.isFreezeKeyboard=!1,t.$socket.emit("unfreezeKeyboard",t.Item)):(t.isFreezeKeyboard=!0,t.$socket.emit("freezeKeyboard",t.Item))},FreezeUnfreezeMouse(){var t=this;t.isFreezeMouse?(t.isFreezeMouse=!1,t.$socket.emit("unfreezeMouse",t.Item)):(t.isFreezeMouse=!0,t.$socket.emit("freezeMouse",t.Item))},ShowFullScreen(){}}},f=m,h=a("2877"),v=Object(h["a"])(f,d,u,!1,null,null,null),S=v.exports,_={components:{LiveView:S},data(){return{Headers:[{COLUMN_NAME:"username",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("Employee_Name"),DISPLAY_ORDER:1},{COLUMN_NAME:"user_status",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("CurrentStatus"),DISPLAY_ORDER:2,settings:{isInSlot:!0}},{COLUMN_NAME:"department_name",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("Department"),DISPLAY_ORDER:3},{COLUMN_NAME:"arrival_time",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("Arrivaltime"),DISPLAY_ORDER:4},{COLUMN_NAME:"left_time",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("Lefttime"),DISPLAY_ORDER:5,settings:{isInSlot:!0}},{COLUMN_NAME:"application_display_name",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("ActivityWorking"),DISPLAY_ORDER:6},{COLUMN_NAME:"productive_type",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("AppProductivity"),DISPLAY_ORDER:7,settings:{isInSlot:!0}}],widgets:[{icon:"fa fa-list-ul",value:0,name:"No. of employees",class:"one_wid",onClick:this.widgetClick},{icon:"fa fa-ticket",value:0,name:"Currently Active",class:"two_wid",onClick:this.widgetClick},{icon:"fa fa-reply",value:0,name:"Inactive",class:"three_wid",onClick:this.widgetClick},{icon:"fa fa-calendar-check-o",value:0,name:"Idle",class:"four_wid",onClick:this.widgetClick},{icon:"fa fa-file-text",value:0,name:"Slacking",class:"five_wid",onClick:this.widgetClick}],isLoading:!1,ListType:"List",UserList:[],listheaderbuttons:[],TotalRecords:0,leftSearchFields:l.leftsearchSchema,listActions:l.listActions,LegendArray:[],sortBy:"",sortExp:"",PageNumber:1,searchCondition:"",isShowLive:!1,intervalId:null}},beforeDestroy(){var t=this;t.stopInterval()},async created(){var t=this;await l.bindleftCommonSearchdropdown(this,"Timer","USERS"),await l.bindleftCommonSearchdropdown(this,"Timer","DEPARTMENT"),t.startInterval()},methods:{async FetchData(){var t=this,e="",a="",s="",i="";t.leftSearchFields.forEach(t=>{"userIds"==t.paramName?e=t.value:"departmentIds"==t.paramName?a=t.value:"statusIds"==t.paramName?s=t.value:"shitfIds"==t.paramName&&(i=t.value)});var n="NO",o=`userIds=${e}&departmentIds=${a}&statusIds=${s}&shitfIds=${i}&isShiftView=${n}`;await r["a"].GetLiveUsers(o).then(e=>{t.UserList=[],e.data&&e.data.length>0&&(t.UserList=e.data)})},widgetClick(){},actionButtonClick(t,e){var a=this;switch(t){case"GotoLive":a.GotoLive(e);break}},renderActions(t){var e=this;let a=[];return e.listActions.forEach(t=>{let e={...t};switch(e.title){case"Live View":e.isVisible=!0;break;default:e.isVisible=!0;break}a.push(e)}),a},pagerMethod:function(t){var e=this;e.pageSize=t.PageSize,e.pageNum=t.PageNumber,e.FetchData()},leftCommonSearch:function(t){var e=this;e.PageNumber=t.PageNumber,e.isPaged=1,"undefined"!=typeof t.searchCondition?e.searchCondition=t.searchConditionJson:e.searchCondition="",e.FetchData()},commonHeaderButtonClick(t){},sortdata:function(t){var e=this,a="sort tb_headerSortDown";e.sortBy=t,t===e.sortBy&&(""==e.sortExp?(e.sortExp="ASC",a="sort tb_headerSortDown"):"ASC"==e.sortExp?(e.sortExp="DESC",a="sort tb_headerSortUp"):(e.sortExp="ASC",a="sort tb_headerSortDown")),e.FetchData(),$("#"+t+"  span:first-child").attr("class",a)},GotoLive(t){var e=this;e.LiveItem=t,e.isShowLive=!0},startInterval(){var t=this;t.FetchData(),t.intervalId=setInterval(t.FetchData,12e4)},stopInterval(){var t=this;clearInterval(t.intervalId)}}},p=_,C=Object(h["a"])(p,s,i,!1,null,null,null);e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-2d20fb49.js.map