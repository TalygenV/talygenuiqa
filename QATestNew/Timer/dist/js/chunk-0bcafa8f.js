(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bcafa8f"],{"21e9":function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[t.open?e("div",{staticClass:"overlay",attrs:{id:"notifymessage"}},[e("div",{staticClass:"alert alert-dismissible fade show msg mw-90",class:t.typeClass,attrs:{role:"alert"}},[e("span",[t._v(t._s(t.message))]),e("button",{staticClass:"close p-1",staticStyle:{background:"none !important"},attrs:{type:"button",id:"closenotifymessage"},on:{click:function(e){t.$emit("close"),t.close()}}},[t._m(0)])])]):t._e()])},r=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fa fa-times text-secondary"})])}],i=a("ed09"),o=Object(i["b"])({components:{},props:{message:{type:String},type:{type:String},open:{type:Boolean}},data(){return{typeClass:""}},created(){this.changeClassName()},methods:{changeClassName(){(this.type="error")?this.typeClass="alert-danger":(this.type="warning")?this.typeClass="alert-warning":this.typeClass="alert-success"},close(){this.open=!1,this.$emit("close")}}}),l=o,c=a("2877"),n=Object(c["a"])(l,s,r,!1,null,null,null);e["a"]=n.exports},"5a18":function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog ui-draggable",staticStyle:{display:"inline-block"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header ui-draggable-handle"},[e("h5",{staticClass:"modal-title",attrs:{id:"ui-id-26"}},[t._v(t._s(t.$t("UpdateTimer"))+" ")]),e("button",{staticClass:"close",attrs:{type:"button",title:"","data-original-title":"Close"},on:{click:function(e){return t.$emit("close")}}},[e("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),e("div",{staticClass:"modal-body",staticStyle:{height:"auto","min-height":"0px","max-height":"none"},attrs:{id:"backgroundPopup"}},[e("section",{staticClass:"main-content",attrs:{id:"main-content"}},[e("section",{staticClass:"main-content"},[e("div",{staticClass:"time-tracker bg-white border-0",attrs:{id:"timetracking_wrap"}},[e("ValidationObserver",{ref:"form",scopedSlots:t._u([{key:"default",fn:function({handleSubmit:a}){return[e("form",{ref:"form",on:{submit:function(e){return e.preventDefault(),a(t.submitForm)}}},[e("div",{staticClass:"record mn trackbx-time row"},[e("div",{staticClass:"col-sm-12 col-md-12 col-lg-7 col-xl-7 float-left"},[e("div",{staticClass:"row"},[e("div",{staticClass:"proj_list w-100 float-left"},[e("div",{staticClass:"col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left common_multiselect"},[e("div",{staticClass:"form-group"},[e("label",[t._v(" "+t._s(t.$t("SelectYourProject"))+": ")]),e("multiselect",{staticClass:"form-group border-0",attrs:{placeholder:t.$t("searchProject"),options:t.store.getProjectsByUser,label:"projectName","track-by":"projectId","show-labels":!1,id:"exampleFormControlSelect1"},on:{input:t.taskByProject},model:{value:t.trackerData.projectId,callback:function(e){t.$set(t.trackerData,"projectId",e)},expression:"trackerData.projectId"}})],1)]),e("div",{staticClass:"col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left common_multiselect"},[e("div",{staticClass:"form-group"},[e("label",[t._v(t._s(t.$t("SelectYourTask"))+":")]),e("multiselect",{staticClass:"form-control tt_ddr col border-0 p-0",attrs:{placeholder:t.$t("searchTask"),id:"exampleFormControlSelect2",options:t.store.getTasksFromProject,label:"firstAttribute","track-by":"value","show-labels":!1},on:{input:t.isBillableSatus},scopedSlots:t._u([{key:"option",fn:function(a){return[e("div",{staticClass:"option__desc"},[e("span",{staticClass:"option__title"},[t._v(t._s(a.option.firstAttribute))]),e("label",{staticClass:"float-right text-light px-2 ml-1 taskcount"},[t._v(t._s(a.option.subTasksCount))]),e("label",{staticClass:"float-right"},[t._v(" "+t._s(a.option.thirdAttribute)+"% ")])])]}}],null,!0),model:{value:t.trackerData.taskId,callback:function(e){t.$set(t.trackerData,"taskId",e)},expression:"trackerData.taskId"}})],1)]),e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left fields_left arabicpulright"},[e("div",{staticClass:"form-group"},[e("ValidationProvider",{staticClass:"tt_textarea_span position-relative",attrs:{rules:t.trackerData.projectId?"":"required"},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.trackerData.trackDescription,expression:"trackerData.trackDescription"}],staticClass:"timertxtarea form-control",class:a[0]?"is-invalid":"",staticStyle:{"border-color":"#BDBCBD",resize:"none"},attrs:{id:"Taskdescription",name:"Description",rows:"10",cols:"2000",placeholder:t.$t("PleaseEnterDescription"),maxlength:"2000"},domProps:{value:t.trackerData.trackDescription},on:{keydown:t.textCounter,keyup:t.textCounter,mouseout:t.textCounter,input:function(e){e.target.composing||t.$set(t.trackerData,"trackDescription",e.target.value)}}}),e("span",{staticClass:"text-danger font-12"},[t._v(t._s(a[0]))])]}}],null,!0)}),e("br"),e("small",[e("strong",[e("span",{staticClass:"alert-warning px-2 mr-2",attrs:{id:"txtCount"}},[t._v(t._s(t.textCountertlength))])]),t._v(" "+t._s(t.$t("CharactersLeft"))+" ")])],1)])])])]),e("div",{staticClass:"col-sm-12 col-md-12 col-lg-5 col-xl-5 float-left"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left common_multiselect"},[e("div",{staticClass:"form-group mb-0"},[e("label",[t._v(" "+t._s(t.$t("SelectTagName"))+": ")]),e("multiselect",{staticClass:"form-group tt_ddr_1 col border-0 p-0",attrs:{placeholder:t.$t("selectTags"),multiple:!0,options:t.store.getTags,label:"tagName","track-by":"tagId","show-labels":!1,id:"exampleFormControlSelect1"},model:{value:t.tagSelect,callback:function(e){t.tagSelect=e},expression:"tagSelect"}})],1)]),e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left"},[e("div",{staticClass:"chkbillable custom-control custom-checkbox custom-control-inline mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.trackerData.isBillable,expression:"trackerData.isBillable"}],staticClass:"custom-control-input",staticStyle:{display:"none"},attrs:{type:"checkbox","data-change-id":"no",id:"chkTaskBillable"},domProps:{checked:Array.isArray(t.trackerData.isBillable)?t._i(t.trackerData.isBillable,null)>-1:t.trackerData.isBillable},on:{change:function(e){var a=t.trackerData.isBillable,s=e.target,r=!!s.checked;if(Array.isArray(a)){var i=null,o=t._i(a,i);s.checked?o<0&&t.$set(t.trackerData,"isBillable",a.concat([i])):o>-1&&t.$set(t.trackerData,"isBillable",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.trackerData,"isBillable",r)}}}),e("label",{staticClass:"custom-control-label universal-custom-control-label pt-1",attrs:{for:"chkTaskBillable"}}),t._v(" "+t._s(t.$t("Billable"))+" ")])]),e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left time-tracked mb-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.totalHours,expression:"totalHours"}],staticClass:"DivTimer timerclck fontbold digitalbg form-control m-0",staticStyle:{"font-size":"18px"},attrs:{id:"txtTotal"},domProps:{value:t.totalHours},on:{input:function(e){e.target.composing||(t.totalHours=e.target.value)}}}),e("span",{staticClass:"px-2"},[t._v(" "+t._s(t.$t("TimeTracked"))+" ")])]),e("div",{attrs:{id:"Edit12HourFormat"}},[e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left time-tracked mb-2 newtimertracked"},[e("div",{staticClass:"input-group"},[e("vue-timepicker",{attrs:{format:"HH:mm","hide-clear-button":""},on:{input:t.getTimeDiff},scopedSlots:t._u([{key:"icon",fn:function(){return[e("i",{staticClass:"fa fa-clock-o text-dark font-14 mx-2"})]},proxy:!0}],null,!0),model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}}),e("span",{staticClass:"px-2 timedate-label"},[t._v(t._s(t.$t("EventStartTime")))])],1)]),e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left time-tracked mb-2 newtimertracked"},[e("div",{staticClass:"input-group"},[e("vue-timepicker",{attrs:{format:"HH:mm","hide-clear-button":""},on:{input:t.getTimeDiff},scopedSlots:t._u([{key:"icon",fn:function(){return[e("i",{staticClass:"fa fa-clock-o text-dark font-14 mx-2"})]},proxy:!0}],null,!0),model:{value:t.endTime,callback:function(e){t.endTime=e},expression:"endTime"}}),e("span",{staticClass:"px-2 timedate-label"},[t._v(t._s(t.$t("StopTime")))])],1)])]),e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left time-tracked mb-2 newtimertracked"},[e("div",{staticClass:"input-group"},[e("DatePicker",{attrs:{popover:!1},scopedSlots:t._u([{key:"default",fn:function({togglePopover:a,inputValue:s,inputEvents:r}){return[e("input",t._g({staticClass:"form-control",attrs:{placeholder:"M/D/YYYY"},domProps:{value:s}},r)),e("div",{staticClass:"input-group-append",on:{click:a}},[e("span",{staticClass:"input-group-text"},[e("em",{staticClass:"fa fa-calendar"})])]),e("span",{staticClass:"px-2 timedate-label"},[t._v(t._s(t.$t("ExpenseDate")))])]}}],null,!0),model:{value:t.trackerData.DateSet,callback:function(e){t.$set(t.trackerData,"DateSet",e)},expression:"trackerData.DateSet"}})],1)])])]),e("div",{staticClass:"col-12 mt-3 float-left"},[e("div",{staticClass:"row flex-row-reverse"},[e("div",{staticClass:"col-lg-12 text-right"},[e("button",{staticClass:"btn btn-success formbtn mr-1",attrs:{id:"btnUpdate",type:"submit"}},[e("i",{staticClass:"fa fa-save pr-2"}),t._v(t._s(t.$t("Update")))]),e("button",{staticClass:"btn btn-danger formbtn",on:{click:t.deleteEntry}},[e("i",{staticClass:"fa fa-trash pr-2"}),t._v(t._s(t.$t("Delete")))])])])])])])]}}])})],1)])])])])])])]),e("Alert",{attrs:{type:t.store.getAlertMessage.type,message:t.store.getAlertMessage.message,open:t.store.getAlertMessage.open},on:{close:function(e){t.store.$state.getMessageAlert.open=!1}}})],1)},r=[],i=(a("14d9"),a("ed09")),o=a("7bb1"),l=a("c1df"),c=a.n(l),n=a("97fc"),d=a.n(n),m=a("404b"),u=a.n(m),p=a("21e9"),h=a("9769"),f=a("fd0a"),k=a("b9b9");Object(o["c"])("required",{validate(t){return{required:!0,valid:-1===["",null,void 0].indexOf(t)}},message:"{_field_} is required",computesRequired:!0});var C=Object(i["b"])({name:"Update Timer",components:{ValidationProvider:o["b"],ValidationObserver:o["a"],VueTimepicker:d.a,DatePicker:u.a,Alert:p["a"]},props:{store:{type:Object},trackUpdatRecord:{type:Object}},created(){this.fatchData()},mounted(){},methods:{async fatchData(){if(this.store.tagGetForTimer(),Object.assign(this.formData,this.trackerData),await this.store.getProjects(),await this.store.getTimerInfo(),0!=this.trackUpdatRecord.PROJECT_ID?this.projectId():this.trackerData.projectId=null,0!=this.trackUpdatRecord.TASK_ID?(await this.store.loadTasks(this.trackUpdatRecord.PROJECT_ID),this.taskId()):this.trackerData.taskId=null,this.trackUpdatRecord.TAG_ID){let t=this.trackUpdatRecord.TAG_ID.split(",");t.map(t=>{this.tagSelect.push(this.store.getTags.find(e=>e.tagId==t))})}this.trackerData.trackDescription=this.trackUpdatRecord.TRACK_DESCRIPTION,this.startTime=this.trackUpdatRecord.TRACK_START_TIME,this.endTime=this.trackUpdatRecord.TRACK_END_TIME,this.trackerData.DateSet=this.trackUpdatRecord.DateSet},async submitForm(){this.validHours()&&(this.tagSelect.map((t,e)=>{this.trackerData.TagIds+=0!=e?","+t.tagId:t.tagId}),this.trackerData.trackId=this.trackUpdatRecord.TRACK_ID,this.trackerData.projectId=this.trackerData.projectId?this.trackerData.projectId.projectId:null,this.trackerData.taskId=this.trackerData.taskId?this.trackerData.taskId.value:null,await this.store.updateTrackEntry(this.trackerData),"TimerEntryUpdated"==this.store.getUpdateTrackEntryRes.status&&(this.$emit("closeUpdateModal"),this.$emit("close")))},async deleteEntry(){var t=this,e=`ids=${this.trackUpdatRecord.TRACK_ID}&ActionType=Delete`;h["a"].setAction(e).then(e=>{"DeletedSuccessfully"==e.data?(t.ShowAlert(f["a"].t("DeletedSuccessfully"),"success",!0,f["a"].t("Alert")),this.$emit("closeUpdateModal"),this.$emit("close")):t.ShowAlert(f["a"].t("Failure"),"error",!0,f["a"].t("Alert"))})},taskByProject(){this.trackerData.projectId&&this.store.loadTasks(this.trackerData.projectId.projectId),this.store.$state.tasks=[]},isBillableSatus(){this.trackerData.isBillable=this.trackerData.taskId.isBillable},textCounter(){this.textCountertlength=2e3-this.trackerData.trackDescription.length},projectId(){this.trackerData.projectId=this.trackUpdatRecord.PROJECT_ID?this.store.getProjectsByUser.find(t=>t.projectId==this.trackUpdatRecord.PROJECT_ID):null},taskId(){this.trackerData.taskId=this.trackUpdatRecord.TASK_ID?this.store.getTasksFromProject.find(t=>t.value==this.trackUpdatRecord.TASK_ID):null},validHours(){let t=!1;if(this.startTime)if(this.endTime){if(this.startTime&&this.endTime){let e=c()(new Date(this.trackerData.DateSet),"YYYY-MM-DD").format("YYYY-MM-DD"),a=c()(e+" "+this.startTime,"YYYY-MM-DD HH:mm"),s=c()(e+" "+this.endTime,"YYYY-MM-DD HH:mm"),r=c()(c()().format("YYYY-MM-DD HH:mm"));if(a.valueOf()>s.valueOf()||s.valueOf()>r.valueOf())this.store.alertBOxForMessage({type:"warning",open:!0,message:"You can not enter time for the future. Please update the time entered"});else{t=!0;let e=Object(k["g"])({startDate:c()(this.startTime,"hh:mm"),endDate:c()(this.endTime,"hh:mm")},"seconds");this.trackerData.startDate=a.format("YYYY-MM-DD HH:mm:ss"),this.trackerData.DateSet=a.format("YYYY-MM-DD HH:mm:ss"),this.trackerData.startTime=a.format("YYYY-MM-DD HH:mm:ss"),this.trackerData.stopTime=s.format("YYYY-MM-DD HH:mm:ss"),this.totalHours=Object(k["e"])(e),this.trackerData.totalHours=e}}}else this.status=!1,this.store.alertBOxForMessage({type:"warning",open:!0,message:"Please Enter End Date"});else this.status=!1,this.store.alertBOxForMessage({type:"warning",open:!0,message:"Please Enter start Date"});return t},getTimeDiff(){if(this.startTime&&this.endTime){let t=c()(new Date(this.trackerData.DateSet),"YYYY-MM-DD").format("YYYY-MM-DD"),e=c()(t+" "+this.startTime,"YYYY-MM-DD HH:mm"),a=c()(t+" "+this.endTime,"YYYY-MM-DD HH:mm"),s=c()(c()().format("YYYY-MM-DD HH:mm"));if(e.valueOf()>a.valueOf()||a.valueOf()>s.valueOf())this.totalHours="00:00:00";else{let t=Object(k["g"])({startDate:c()(this.startTime,"hh:mm"),endDate:c()(this.endTime,"hh:mm")},"seconds");this.totalHours=Object(k["e"])(t)}}}},data(){return{tagSelect:[],formData:{},textCountertlength:2e3,startTime:"00:00",endTime:"00:00",totalHours:"00:00:00",trackerData:{projectId:null,trackDescription:"",taskId:null,isBillable:!0,format:!1,trackId:0,startTime:c()().format("YYYY-MM-DD HH:mm:ss"),DateStart:c()().format("YYYY-MM-DD HH:mm:ss"),DateSet:c()().format("YYYY-MM-DD HH:mm:ss"),stopTime:c()().format("YYYY-MM-DD HH:mm:ss"),currentDate:c()().format("YYYY-MM-DD HH:mm:ss"),createdBy:this.store.getUserInformation.id,totalHours:0,timeformat:"12",TagIds:null,type:"TimeTrack"}}}}),g=C,D=a("2877"),_=Object(D["a"])(g,s,r,!1,null,null,null);e["a"]=_.exports},"7cf3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("section",[e("loader",{attrs:{"is-visible":t.isLoading}}),e("EntryFlagList",{attrs:{store:t.store}})],1)},r=[],i=a("05a5"),o=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",[e("div",[e("loader",{attrs:{"is-visible":t.store.getLoadingStatus}}),e("tg-list",{attrs:{RenderRowActionMethod:t.renderActions,IdentityColumn:"trackId",ModuleName:"Timer",listType:[t.DetailListType],HeaderText:"Flag Track Entry",SubModuleCode:"Timer",SortExp:t.SortExp,callbackfunction:t.FetchData,LegendArray:t.LegendArray,SortBy:t.SortBy,IsShowAction:!1,ListData:t.store.getTrackEntryFlag,HeaderData:t.Headers,TotalRecords:t.TotalRecords,showCheckBox:!0,ListDataCallBackFunction:t.FetchData,NorecordfoundText:t.$t("NoRecordfound"),HeaderButtons:t.entryButton,widgets:[],SearchFields:t.leftSearchFields},on:{HeaderButtonClick:t.commonHeaderButtonClick,PagerButtonClick:t.pagerMethod,SortdataButtonClick:t.sortdata,LeftsearchButtonClick:t.leftCommonSearch},scopedSlots:t._u([{key:"slotdata",fn:function({data:a}){return["comment"==a.column.COLUMN_NAME?[e("div",{on:{click:function(e){return t.commentModalShow(a.row,!0)}}},[e("em",{staticClass:"fa fa-comment-o text-primary",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"noti-circle noti-blue text-center"},[t._v(t._s(a.row.commentsCount))])])]:t._e(),"projectName"==a.column.COLUMN_NAME?[e("a",{staticClass:"text-center",on:{click:function(e){return t.updateTrackRecord(a.row)}}},[t._v(t._s(a.row.projectName)+"- "+t._s(a.row.taskName))])]:t._e(),"startTime"==a.column.COLUMN_NAME?[e("span",{staticClass:"text-center",domProps:{innerHTML:t._s(a.row.startTime)}}),t._v("- "),e("span",{staticClass:"text-center",domProps:{innerHTML:t._s(a.row.stopTime)}})]:t._e(),"pausedHours"==a.column.COLUMN_NAME&&0!=a.row.pausedHours?[e("span",{staticClass:"text-center"},[t._v(t._s(t.convertSecondToHHMMSS(a.row.pausedHours)))])]:t._e(),"totalHours"==a.column.COLUMN_NAME?[e("span",{staticClass:"text-center"},[t._v(t._s(t.convertSecondToHHMMSS(a.row.totalHours)))])]:t._e()]}}])})],1),t.commentShow?e("Comments",{attrs:{store:t.store,flagData:t.flagData,trackIds:t.checkBoxVal},on:{close:function(e){t.commentShow=!1},refreshList:t.FetchData}}):t._e(),t.updatetrackTimeShow?e("UpdateTrackTime",{attrs:{store:t.store,trackUpdatRecord:t.trackUpdateRecords},on:{close:function(e){t.updatetrackTimeShow=!1},closeUpdateModal:t.FetchData}}):t._e()],1)},l=[],c=(a("14d9"),a("ed09")),n=a("9769");const d=[{COLUMN_NAME:"projectName",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Project - Task",DISPLAY_ORDER:1,settings:{isInSlot:!0}},{COLUMN_NAME:"createdByName",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"User Name",DISPLAY_ORDER:1},{COLUMN_NAME:"trackDescription",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Description",DISPLAY_ORDER:3},{COLUMN_NAME:"totalHours",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Time Track",DISPLAY_ORDER:3},{COLUMN_NAME:"newStartDate",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Date",DISPLAY_ORDER:4},{COLUMN_NAME:"startTime",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Start Time - Stop Time",DISPLAY_ORDER:4,settings:{isInSlot:!0}},{COLUMN_NAME:"timeZoneName",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Time Zone",DISPLAY_ORDER:3},{COLUMN_NAME:"pausedHours",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"PausedHours",DISPLAY_ORDER:3,settings:{isInSlot:!0}},{COLUMN_NAME:"comment",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Comment",DISPLAY_ORDER:5,settings:{isInSlot:!0}}];let m=[{title:"Flag",iconClass:"fa fa-flag",callbackfunction:"Flag",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!1,isEnabledOnSelectedRow:!0},{title:"UnFlag",iconClass:"fa fa-close",callbackfunction:"UnFlag",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!1,isEnabledOnSelectedRow:!0}],u=[{fieldName:"User",fieldType:"ddl-radio",fieldIcon:"fa fa-user",paramName:"userId",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"Project",fieldType:"ddl-radio",fieldIcon:"fa fa-suitcase",paramName:"projectId",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"DATE",fieldType:"date-range",fieldIcon:"fa-calendar",fieldSearchConditionName:[""],isSearch:!1,datePickerConfig:{useCurrent:!1,showClear:!0,showClose:!0,allowInputToggle:!0,minDate:!1,maxDate:!1,widgetPositioning:{horizontal:"right",vertical:"bottom"}},secondDatePickerConfig:{useCurrent:!1,showClear:!0,showClose:!0,allowInputToggle:!0,minDate:!1,maxDate:!1,widgetPositioning:{horizontal:"right",vertical:"bottom"}},value:"",secondValue:"",listOptions:[]}];function p(t,e){var a=t;"CA"==e?n["a"].GetUsersByCompanyId().then(t=>{t.data.forEach(t=>{let e={name:t.username,value:t.user_id};a.leftSearchFields[0].listOptions.push(e)})}).catch(t=>{console.log(t)}):"PM"==e&&n["a"].ListTeamUsersByPM().then(t=>{t.data.forEach(t=>{let e={name:t.username,value:t.user_id};a.leftSearchFields[0].listOptions.push(e)})}),n["a"].GetProjectListByUserIdAndUserType().then(t=>{t.data.forEach(t=>{let e={name:t.projectname,value:t.projectid};a.leftSearchFields[1].listOptions.push(e)})})}var h={Headers:d,buttons:m,leftsearchSchema:u,bindleftCommonSearchdropdown:p},f=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog ui-draggable",staticStyle:{display:"inline-block"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header ui-draggable-handle"},[e("h5",{staticClass:"modal-title",attrs:{id:"ui-id-26"}},[t._v(t._s(t.$t("Comments"))+" "+t._s(t.commentData.commentTitle))]),e("button",{staticClass:"close",attrs:{type:"button",title:"","data-original-title":"Close"},on:{click:function(e){return t.$emit("close")}}},[e("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),e("div",{staticClass:"modal-body",staticStyle:{height:"auto","min-height":"0px","max-height":"none"},attrs:{id:"backgroundPopup"}},[e("section",{staticClass:"main-content",attrs:{id:"main-content"}},[e("section",{staticClass:"main-content"},[e("div",{staticClass:"container-fluid p-0"},[e("div",{staticClass:"p-0"},[e("ValidationObserver",{ref:"form",scopedSlots:t._u([{key:"default",fn:function({handleSubmit:a}){return[e("form",{ref:"form",on:{submit:function(e){return e.preventDefault(),a(t.submit)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("ValidationProvider",{staticClass:"tt_textarea_span position-relative",attrs:{rules:"required",name:"title"},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("label",[t._v("Title:"),e("span",{staticClass:"mandatory"},[t._v("*")])]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentData.commentTitle,expression:"commentData.commentTitle"}],staticClass:"form-control",class:a[0]?"is-invalid":"",attrs:{placeholder:t.$t("WriteAComment"),name:"title"},domProps:{value:t.commentData.commentTitle},on:{input:function(e){e.target.composing||t.$set(t.commentData,"commentTitle",e.target.value)}}}),t._v(" "),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(a[0]?t.$t("CommentIsReq"):""))])]}}],null,!0)})],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("ValidationProvider",{staticClass:"tt_textarea_span position-relative",attrs:{rules:"required",name:"Comment"},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("label",[t._v("Comments:"),e("span",{staticClass:"mandatory"},[t._v("*")])]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentData.comment,expression:"commentData.comment"}],staticClass:"form-control",class:a[0]?"is-invalid":"",staticStyle:{"border-color":"#BDBCBD",resize:"none"},attrs:{placeholder:t.$t("WriteAComment"),name:"Comment",maxlength:"2000"},domProps:{value:t.commentData.comment},on:{input:function(e){e.target.composing||t.$set(t.commentData,"comment",e.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(a[0]?t.$t("CommentIsReq"):""))])]}}],null,!0)})],1)]),e("div",{staticClass:"row flex-row-reverse mt-2"},[e("div",{staticClass:"text-end text-right col-12"},[e("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e("i",{staticClass:"fa fa-save pr-2"}),t._v(t._s(t.$t("Save"))+" ")]),e("button",{staticClass:"btn btn-danger",staticStyle:{"margin-left":"5px"},attrs:{type:"button"},on:{click:function(e){return t.$emit("close")}}},[e("i",{staticClass:"fa fa-close pr-2"}),t._v(t._s(t.$t("Cancel"))+" ")])])])])]}}])})],1)])]),e("div",{staticClass:"col-12 tab-pane fade active show"},[0==t.commentList.length.length?e("div",{staticClass:"row ticket-card-container card-view bg-border p-3"},[t._m(0)]):t._e()]),t.commentList.length>0?e("div",{staticClass:"listing mt-4",attrs:{id:"divconversationbox"}},[e("div",{staticClass:"listing tab-content"},[e("div",{staticClass:"col-12 d-flex border border-bottom-0 bg-f5f5f5"},[t._m(1),e("div",{staticClass:"col-md-6 text-right pr-0 bottom_filter_button"},[e("a",{staticClass:"position-relative",staticStyle:{"z-index":"999"},attrs:{href:"javascript:;",id:"ancreplyExpandAllCollapseAll",title:"","data-toggle-tooltip":"tooltip","data-original-title":"Expand All or Collapse All"},on:{click:t.expendOrcollapse}},[t._v("Expand All or Collapse All")])])]),t._l(t.commentList,(function(a,s){return e("div",{key:s,staticClass:"tab-pane fade show activity-tab active pt-2",staticStyle:{"overflow-y":"auto","max-height":"500px"}},[e("div",{staticClass:"w-100",attrs:{id:"accordion"}},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("a",{staticClass:"card-link",attrs:{"data-toggle":"collapse",href:"#collapseOne1requestcomment1","aria-expanded":"true"},on:{click:function(e){return t.toggleCollapse(s)}}},[e("div",{staticClass:"conversation-date heading-border"},[e("span",[e("i",{staticClass:"fa fa-angle-down rotate-icon pr-1",attrs:{"aria-hidden":"true"}}),t._v(t._s(t.dateFormat(a.dateGroup)))])])])]),t.isCollapsed(s)?e("div",{staticClass:"collapse show",attrs:{id:"collapseOne11","data-parent":"#accordion"}},[e("div",{staticClass:"card-body"},t._l(a.trackEntryCommentList,(function(a,s){return e("div",{key:s,staticClass:"conversation-main"},[e("div",{staticClass:"conversation-time"},[e("span",[t._v(t._s(t.timeFormat(a.createD_AT)))])]),e("div",{staticClass:"conversation-box-con"},[e("div",{staticClass:"conversation-box"},[e("div",{staticClass:"name-circle light-yellow"},[e("img",{staticClass:"img-circle avatar",attrs:{src:a.avatar,width:"51",height:"51",alt:"Image"}})]),e("div",{staticClass:"conversation-header addednote-ticket"},[e("span",[e("span",{staticClass:"sender-name"},[t._v(t._s(a.tracK_ENTRY_COMMENT_TITLE))]),e("span",{staticClass:"sender-department"},[t._v(" ("+t._s(a.tracK_ENTRY_COMMENT_DESC)+")")])])]),e("div",{staticClass:"conversation-content"},[e("div",{staticClass:"col-12 p-0 notesdata"},[e("h6",{staticClass:"text-muted time"},[e("i",[e("b",[t._v(t._s(a.createD_BY))]),t._v(", Posted on: "),e("span",{staticClass:"text-danger",attrs:{title:"12/21/2023 10:09:17 AM UTC"}},[t._v(t._s(a.createD_AT))])])])])])])])])})),0)]):t._e()])])])}))],2)]):t._e()])])])])])])])},k=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 mt-2 text-center"},[e("span",{staticClass:"text-danger"},[t._v("NoComments")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"col-md-6 pl-0"},[e("h6",{staticClass:"py-3 mb-0"},[t._v(" Comments ")])])}],C=a("7bb1"),g=a("97fc"),D=a.n(g),_=a("b9b9"),b=a("c1df"),v=a.n(b);Object(C["c"])("required",{validate(t){return console.log("checkk"),{required:!0,valid:-1===["",null,void 0].indexOf(t)}}});var T=Object(c["b"])({name:"Flag comment",components:{ValidationProvider:C["b"],ValidationObserver:C["a"],VueTimepicker:D.a},props:{flagData:{type:Object},store:{type:Object},trackIds:{type:String}},data(){return{collapsedSections:[!1],expendCollapsedSections:[!1],commentList:[],commentData:{commentTitle:"",comment:"",type:"singleComment"}}},created:function(){this.fetchData(this.trackIds),this.toggleCollapse(0)},methods:{async submit(){this.commentData.trackIds=this.trackIds;try{const{data:t}=await n["a"].FlagsPostComment(this.commentData);console.log("data",t),null!=t?(this.ShowAlert(this.$t("CommentHasBeenPostedSuccessfully"),"Success",!0,this.$t("Alert")),this.$emit("refreshList")):vm.ShowAlert($t("Something_Wrong"),"failure",!0,$t("Alert")),this.$emit("close")}catch(t){}},isCollapsed(t){return this.collapsedSections[t]},toggleCollapse(t){this.$set(this.collapsedSections,t,!this.collapsedSections[t])},fetchData(t){var e="trackId="+t;n["a"].GetCommentListBytrackId(e).then(t=>{this.commentList=t.data,console.log("comments",this.commentList)})},dateFormat(t){return Object(_["f"])(t)},timeFormat(t){return v()(t).format("HH:mm")},expendOrcollapse(){let t=!0;this.collapsedSections.map(e=>{e&&(t=!1)}),t?(this.collapsedSections=[],this.commentList.map((t,e)=>{this.toggleCollapse(e)})):this.collapsedSections=[]}}}),S=T,y=a("2877"),x=Object(y["a"])(S,f,k,!1,null,null,null),E=x.exports,A=a("5a18"),I=a("be92"),Y=a("b0ac");const{GetUserInfo:M}=Object(I["d"])(Object(Y["b"])());var w=Object(c["b"])({components:{Comments:E,UpdateTrackTime:A["a"]},props:{store:{type:Object}},created:async function(){h.bindleftCommonSearchdropdown(this,M.value.UserType),this.LegendArray=[{class:"legends_profile colorboxsquare",text:this.$t("Pending")},{class:"lg-approved colorboxsquare",text:this.$t("Approved")},{class:"legends_high colorboxsquare",text:this.$t("AddedManually")},{class:"legends_medium colorboxsquare",text:this.$t("BulkTimeEntry")},{class:"lg-pausedresumed colorboxsquare",text:this.$t("ThirdParty")},{class:"legends_Critical colorboxsquare",text:this.$t("FlaggedEntry")},{class:"legends_low colorboxsquare",text:this.$t("Timesheet")}],this.FetchData()},methods:{async FetchData(){var t=this,e=`pageSize=${t.pageSize}&datefrom=${t.GetFromDate}&dateto=${t.GetToDate}&pageNum=${t.pageNum}&sortBy=${t.sortBy}&sortExp=${t.sortExp}&${t.searchCondition}`;await this.store.trackEntryFlag(e),t.TotalRecords=this.store.getTrackEntryFlag[0].total,t.trackId=this.store.getTrackEntryFlag[0].trackId;let a=!1;if(t.store.getTrackEntryFlag.map(e=>("TRACK_ENTRY_APPROVED"==e.statusCode.toUpperCase()||"TRACK_ENTRY_REJECTED"==e.statusCode.toUpperCase()||"TRACK_ENTRY_DELETE_PENDING"==e.statusCode||0!=e.approversCount||"INACT"==e.projectStatus||"DEL"==e.projectStatus||e.createdByName==M.value.Name?e.isCheckBoxDisabled=!0:(a=!0,e.isCheckBoxDisabled=!1),e.additionalClass=t.addClass(e.statusCode,e.trackAgent,e.trackBy),e)),0==a){let t=document.querySelector(".chkItems");t.disabled=!0}},commentModalShow(t,e){this.checkBoxVal=t.trackId,this.flagData=t,this.commentShow=e},renderActions:function(t){var e=this;let a=[];return e.listActions.forEach(t=>{let e={...t};switch(e.title){case"Edit":e.isVisible=!0;break;case"Delete":e.isVisible=!0;break;default:e.isVisible=!0;break}a.push(e)}),a},commonHeaderButtonClick(t){switch(t.callbackfunction){case"Flag":this.openModal();break;case"UnFlag":this.openModal();break}},openModal(){this.checkBoxVal="";for(var t=document.getElementsByClassName("chkItems"),e=0;t[e];++e)t[e].checked&&(this.checkBoxVal.length>0&&(this.checkBoxVal+=","),this.checkBoxVal+=t[e].value);this.commentShow=!0},pagerMethod:function(t){this.pageSize=t.PageSize,this.pageNum=t.PageNumber,this.FetchData()},leftCommonSearch:function(t){var e=this;if(this.PageNumber=t.PageNumber,this.isPaged=1,"undefined"!=typeof t.searchCondition?this.searchCondition=t.searchConditionJson:this.searchCondition="",t.searchCondition.includes("DATE")){var a=t.searchCondition.split("'");a.forEach(t=>{var a=this.$options.filters.formatDate(t);"Invalid date"!=a&&(""==e.GetFromDate?(e.GetFromDate=a,console.log(e.GetFromDate)):(e.GetToDate=a,console.log(e.GetToDate)))})}this.modelinputdate=null,this.FetchData()},sortdata:function(t){var e="sort tb_headerSortDown";this.sortBy=t,t===this.sortBy&&(""==this.sortExp?(this.sortExp="ASC",e="sort tb_headerSortDown"):"ASC"==this.sortExp?(this.sortExp="DESC",e="sort tb_headerSortUp"):(this.sortExp="ASC",e="sort tb_headerSortDown")),this.FetchData(),$("#"+t+"  span:first-child").attr("class",e)},addClass(t,e,a){var s=t.toUpperCase(),r="",i="",o="";switch(s){case"TRACK_ENTRY_REJECTED":r="delpending";break;case"TRACK_ENTRY_UPDATE_PENDING":r="high-profile-bar";break;case"TRACK_ENTRY_DELETE_PENDING":r="high-profile-bar";break;case"TRACK_ENTRY_ADD_MANUAL_PENDING":r="high-profile-bar";break;case"TRACK_ENTRY_APPROVED":r="lgtr-approved";break;case"SCREEN_FLAGED":r="critical-bar";break;default:r="";break}if(e&&(e.indexOf("Manual")>0?i="high-bar":"bulk"==e.toLowerCase()?i="medium-bar":"timesheet"==e.toLowerCase()?i="low-bar":"third_party"==e.toLowerCase()&&(i="lgtr-pausedresumed")),a)switch(a.ToLower()){case"desktop":case"Linux":o="trackby_desktop";break;case"web":o="trackby_web";break;case"web_manual":o="trackby_web";break;case"third_party":o="trackby_thirdparty";break;case"android":case"iphone":o="trackby_mobile";break;case"desktop_offline":o="trackby_desktop_offline";break;case"bulk":o="bulkentry_web";break;case"timesheet":o="trackby_timesheet";break;case"timesheet_mobile":o="trackby_tsmobile";break;default:o="trackby_mobile";break}return r+" "+o+" "+i},convertSecondToHHMMSS(t){return Object(_["c"])(t)},updateTrackRecord(t){this.trackUpdateRecords=t,this.trackUpdateRecords.PROJECT_ID=t.projectId,this.trackUpdateRecords.TASK_ID=t.taskId,this.trackUpdateRecords.TAG_ID=t.tag_name,this.trackUpdateRecords.TRACK_DESCRIPTION=t.trackDescription,this.trackUpdateRecords.TRACK_START_TIME=t.startTime,this.trackUpdateRecords.TRACK_END_TIME=t.stopTime,this.trackUpdateRecords.TRACK_ID=t.trackId,this.trackUpdateRecords.DateSet=t.dateStart,this.updatetrackTimeShow=!0,console.log("fdf",t)}},data(){return{updatetrackTimeShow:!1,Headers:h.Headers,SortBy:"",SortExp:"",pageSize:20,pageNum:1,TotalRecords:0,TotalPages:1,leftSearchFields:h.leftsearchSchema,entryButton:h.buttons,projectId:"",userid:"",trackId:0,showCommentModal:!1,commentShow:!1,DetailListType:"List",flagData:"",checkBoxVal:"",LegendArray:[],dateFrom:"",GetFromDate:"",GetToDate:"",trackerData:{projectId:0,trackDescription:"",taskId:0,isBillable:0,format:!1,date:null,trackId:0,startTime:v()().format("YYYY-MM-DD HH:mm:ss"),stopTime:v()().format("YYYY-MM-DD HH:mm:ss"),companyId:null,currentDate:v()().format("YYYY-MM-DD HH:mm:ss"),trackAgent:"web",timerStatus:"start",CreatedBy:this.store.getUserInformation.id,createdBy:this.store.getUserInformation.id,linkedTrackId:null,totalHours:0,timeformat:12,TagIds:"",isForcedUpdate:null,type:"TimeTrack",trackType:"TimeTrack",BreakDate:null,BreakName:null,BreakId:"",BreakStartTime:0,Shift_ID:0,SelectedDate:"",Break_Shift:""}}}}),R=w,P=Object(y["a"])(R,o,l,!1,null,null,null),N=P.exports,O=a("ce29"),B={components:{leftSearch:i["a"],EntryFlagList:N},data(){return{}},async created(){},methods:{},setup(){const t=Object(O["a"])();return{store:t}}},L=B,H=Object(y["a"])(L,s,r,!1,null,null,null);e["default"]=H.exports}}]);
//# sourceMappingURL=chunk-0bcafa8f.js.map