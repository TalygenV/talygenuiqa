(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CRM Invoice~CRMDeal~CRMLead~CRMPurchaseOrder~CRMQuote~CRMSalesOrderListing~CRMStage~CRMVendor~Contra~26117e4a"],{"6c06":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-popups"},[a("loader",{attrs:{"is-visible":t.isLoading}}),a("div",{staticClass:"modal d-block"},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v(t._s(t.header))]),a("button",{staticClass:"close",attrs:{href:"javascript:;"},on:{click:function(e){return t.$emit("close")}}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"modal-body"},[a("Form",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(e){var i=e.valid,s=e.errors;return[a("div",{staticClass:"d-flex flex-wrap"},[a("div",{staticClass:"col-md-12 p-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"},[a("div",{staticClass:"form-group"},[a("label",[t._v(" "+t._s(t.$t("Subject"))+":"),a("span",{staticClass:"text-danger"},[t._v("*")])]),a("Field",{attrs:{name:"Subject",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.Subject,expression:"Subject"}],class:{"form-control":!0,"is-invalid":i[0]},attrs:{id:"Subject",name:"Subject",maxlength:"200",type:"text"},domProps:{value:t.Subject},on:{input:function(e){e.target.composing||(t.Subject=e.target.value)}}}),i[0]?a("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Subject"}},[t._v(t._s(i[0]))]):t._e()]}}],null,!0)})],1)]),a("div",{staticClass:"col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"},[a("div",{staticClass:"form-group"},[a("label",[t._v(" "+t._s(t.$t("FollowUp"))+" "+t._s(t.$t("ScheduleDate"))+":"),a("span",{staticClass:"text-danger"},[t._v("*")])]),a("div",{staticClass:"input-group"},[a("Field",{attrs:{name:"due date",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;return[a("v-date-picker",{staticClass:"input-group",attrs:{mode:"dateTime","min-date":new Date,"minute-increment":5},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.inputValue,o=e.inputEvents,l=e.togglePopover;return[a("input",t._g({class:{"form-control":!0,"is-invalid":i[0]},domProps:{value:s}},o)),a("div",{staticClass:"input-group-append",on:{click:function(t){return l()}}},[a("span",{staticClass:"input-group-text"},[a("em",{staticClass:"fa fa-calendar"})])])]}}],null,!0),model:{value:t.duedate,callback:function(e){t.duedate=e},expression:"duedate"}}),i[0]?a("span",{staticClass:"invalid-feedback d-block"},[t._v(t._s(i[0]))]):t._e()]}}],null,!0)})],1)])]),a("div",{staticClass:"clearfix"}),a("div",{staticClass:"col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"},[a("div",{staticClass:"form-group"},[a("label",[t._v(" "+t._s(t.$t("Priority"))+":")]),a("Field",{attrs:{name:"priority",rules:{required:!1}}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.priorityValue,expression:"priorityValue"}],staticClass:"form-control",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.priorityValue=e.target.multiple?a:a[0]},t.getSelectedValue]}},[a("option",{attrs:{value:""}},[t._v(t._s(t.$t("SelectPriorityLevel"))+" ")]),t._l(t.priority,(function(e,i){return a("option",{key:i,domProps:{value:e.value}},[t._v(" "+t._s(e.name)+" ")])}))],2)])],1)]),a("div",{staticClass:"col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left",class:{"d-none":t.enableReminder}},[a("div",{staticClass:"form-group"},[a("label",[t._v(t._s(t.$t("Default"))+" "+t._s(t.$t("Reminder"))+":")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.DefaultReminder,expression:"DefaultReminder"}],staticClass:"form-control disabled",attrs:{id:"DefaultReminder",name:"DefaultReminder",value:"",maxlength:"200",type:"text"},domProps:{value:t.DefaultReminder},on:{input:function(e){e.target.composing||(t.DefaultReminder=e.target.value)}}})])]),a("div",{staticClass:"clearfix"}),a("div",{staticClass:"col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"},[a("div",{staticClass:"form-group"},[a("label",[t._v(t._s(t.$t("OverrideDefault"))+" "+t._s(t.$t("Reminder"))+":")]),a("div",{staticClass:"Col-4"},[a("label",{staticClass:"switch"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.enableReminder,expression:"enableReminder"}],staticClass:"form-check-input rdoticketfor custom-control-input dynamic",attrs:{type:"checkbox"},domProps:{value:t.enableReminder,checked:Array.isArray(t.enableReminder)?t._i(t.enableReminder,t.enableReminder)>-1:t.enableReminder},on:{change:function(e){var a=t.enableReminder,i=e.target,s=!!i.checked;if(Array.isArray(a)){var o=t.enableReminder,l=t._i(a,o);i.checked?l<0&&(t.enableReminder=a.concat([o])):l>-1&&(t.enableReminder=a.slice(0,l).concat(a.slice(l+1)))}else t.enableReminder=s}}}),a("span",{staticClass:"slider round"},[a("span",{staticClass:"slider-yes"},[t._v("Yes")]),a("span",{staticClass:"slider-no"},[t._v("NO")])])])])])]),a("div",{staticClass:"clearfix"}),a("div",{staticClass:"col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"},[a("div",{staticClass:"form-group"},[a("label",{class:{"d-none":!t.enableReminder}},[t._v(t._s(t.$t("Duration"))+":"),a("span",{staticClass:"text-danger"},[t._v("*")])]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedDurationValue,expression:"selectedDurationValue"}],staticClass:"form-control",class:{"d-none":!t.enableReminder},staticStyle:{"max-width":"100%"},attrs:{id:"duration"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedDurationValue=e.target.multiple?a:a[0]},t.getValidate]}},[a("option",{attrs:{value:""}},[t._v("Select")]),t._l(t.reminderDurationValues,(function(e,i){return a("option",{key:i,domProps:{value:e,innerHTML:t._s(e)}})}))],2),a("span",{staticClass:"text-danger DurationReq small",class:{"d-none":!t.enableReminder},attrs:{id:"DurationReq"}})])]),a("div",{staticClass:"clearfix"}),a("div",{staticClass:"col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"},[a("div",{staticClass:"form-group"},[a("label",{class:{"d-none":!t.enableReminder}},[t._v(t._s(t.$t("SelectType"))+":"),a("span",{staticClass:"text-danger"},[t._v("*")])]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedDurationType,expression:"selectedDurationType"}],staticClass:"form-control",class:{"d-none":!t.enableReminder},staticStyle:{"max-width":"100%"},attrs:{id:"durationType"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedDurationType=e.target.multiple?a:a[0]},t.getValidate]}},[a("option",{attrs:{value:""}},[t._v("Select")]),t._l(t.reminderDurationTypes,(function(e,i){return a("option",{key:i,domProps:{value:e,innerHTML:t._s(e)}})}))],2),a("span",{staticClass:"text-danger DurationTypeReq small",class:{"d-none":!t.enableReminder}})])]),a("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left"},[a("div",{staticClass:"form-group"},[a("label",[t._v(" "+t._s(t.$t("FollowUpCRM"))+" "+t._s(t.$t("Message"))+":"),a("span",{staticClass:"text-danger"},[t._v("*")])]),a("Field",{attrs:{name:"Message",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;return[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.Message,expression:"Message"}],class:{"form-control":!0,"is-invalid":i[0]},attrs:{id:"Message",name:"Message",maxlength:1e3,rows:"5"},domProps:{value:t.Message},on:{input:function(e){e.target.composing||(t.Message=e.target.value)}}}),i[0]?a("span",{staticClass:"invalid-feedback",attrs:{name:"Message"}},[t._v(t._s(i[0]))]):t._e()]}}],null,!0)})],1)])]),a("div",{staticClass:"row flex-row-reverse"},[a("div",{staticClass:"col-lg-6 text-right"},[a("button",{staticClass:"btn btn-success save-btn mr-1",attrs:{type:"button"},on:{click:function(e){return t.saveTask(i,s)}}},[a("em",{staticClass:"fa fa-save pr-2",attrs:{"aria-hidden":"true"}}),t._v(t._s(t.$t("Save"))+" ")]),a("button",{staticClass:"btn btn-danger delete-btn",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.$emit("close")}}},[a("em",{staticClass:"fa fa-close pr-2",attrs:{"aria-hidden":"true"}}),t._v(t._s(t.$t("Cancel"))+" ")])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"py-2"},[a("span",{staticClass:"mandatory"},[t._v(" "+t._s(t.$t("MandatoryString"))+" ")])])])])])])]}}])})],1)])])])],1)},s=[],o=a("c7eb"),l=a("1da1"),n=(a("ac1f"),a("5319"),a("d3b7"),a("3ca3"),a("ddb0"),a("9861"),a("841c"),a("e9c4"),a("9769")),r={props:{modulename:{type:String,required:!0},modalFollowUpItem:null,submodulecode:{type:String,required:!0},sourceid:{Type:String,required:!0}},data:function(){return{isLoading:!1,currentDate:new Date,duedate:new Date,Subject:"",priority:[],Message:"",priorityValue:"",activitySourceID:0,modal:null,isView:!1,popover:{visibility:"click"},optionsMindate:{format:"MMM dd yyyy",useCurrent:!1,showClear:!0,showClose:!0,allowInputToggle:!0,minDate:new Date(Date.now())},FollowUpIdForEdit:0,reminderDurationValues:["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60"],reminderDurationTypes:["Minutes","Hours","Days"],enableReminder:!1,selectedDurationType:"",selectedDurationValue:"",DefaultReminder:"",header:this.$t("Add")+" "+this.$t("FollowUp")}},created:function(){this.activitySourceID=this.sourceid,this.GetPriority(),this.GetDefaultReminder(),this.FollowUpIdForEdit=0,this.modalFollowUpItem&&this.FetchEventViewData(this.modalFollowUpItem.followup_notification_id),this.optionsMindate.minDate=new Date(Date.now())},methods:{FetchEventViewData:function(t){var e=this;e.FollowUpIdForEdit=0,e.optionsMindate.minDate=!1;var a="id="+t+"&refId="+e.sourceid+"&subModuleCode="+e.modulename+"&moduleCode="+e.submodulecode;n["a"].updateActivityData(a).then((function(a){if(e.FollowUpIdForEdit=t,e.header=e.$t("Edit")+" "+e.$t("FollowUp"),null!=a.data){var i=a.data.data;e.duedate=e.$options.filters.formatDate(i[0].followUpDate),e.Message=i[0].followup_notification_message,e.Subject=i[0].followup_notification_subject,e.priorityValue=null!=i[0].priority_lavel&&0!=i[0].priority_lavel?i[0].priority_lavel:"",e.optionsMindate.minDate=new Date(Date.now());var s=i[0].reminder_duration;0!=s&&s<60?($(".rdoticketfor").trigger("click"),e.selectedDurationType="Minutes",e.selectedDurationValue=s):0!=s&&(60==s||s<1440)?($(".rdoticketfor").trigger("click"),e.selectedDurationType="Hours",e.selectedDurationValue=parseInt(s/60)):0!=s&&s>=1440&&($(".rdoticketfor").trigger("click"),e.selectedDurationType="Days",e.selectedDurationValue=parseInt(s/1440))}}))},GetPriority:function(){var t=this,e="id=&moduleName="+this.submodulecode+"&type=PRIORITY";n["a"].getLeaOwnerBySearch(e).then((function(e){var a=e.data;if(null!=a)return t.priority=a.DATA,t.priority}))},getSelectedValue:function(t){this.priorityValue=t.target.value},formatDate:function(t){if(t)try{var e=Globalize.culture().calendar.patterns.t;e=String(e).replace("t","A").replace("t","");var a=new Date(moment(String(t)).year(),moment(String(t)).month(),moment(String(t)).date(),moment(String(t)).hours(),moment(String(t)).minutes());return moment(a,"YYYY-MM-DD HH:mm:ss").format("MM-dd-yyyy")}catch(i){}},getValidate:function(){var t=$(".rdoticketfor").is(":checked")?"yes":"no",e=$("#duration").val(),a=$("#durationType").val();"yes"!=t||"0"!=e&&""!=e?$(".DurationReq").html(""):$(".DurationReq").html("Duration Is Required."),"yes"==t&&""==a?$(".DurationTypeReq").html("Duration Type Is Required."):$(".DurationTypeReq").html("")},saveTask:function(t,e){var a=this;this.$refs.form.validate().then((function(t){var e=new URLSearchParams(window.location.search),i=e.get("reqfrom");null==i&&(i=window.location.pathname.indexOf("Listing")>-1||window.location.pathname.indexOf("Index")>-1?1:0);var s=parseInt(i)||0,o=$(".rdoticketfor").is(":checked")?"yes":"no",l=$("#duration").val(),r=$("#durationType").val(),d=0,c="";"yes"!=o||"0"!=l&&""!=l?$(".DurationReq").html(""):(c="no",$(".DurationReq").html("Duration Is Required.")),"yes"==o&&""==r?(c="no",$(".DurationTypeReq").html("Duration Type Is Required.")):$(".DurationTypeReq").html("");var u=new Date(a.duedate),m=new Date,p=u-m,v=Math.floor(p/1e3/60);if("yes"==o){if("Minutes"==r?d=l:"Hours"==r?d=60*l:"Days"==r&&(d=24*l*60),v<=d||v<=0)return a.ShowAlert(a.$t("InvalidReminderDuration"),"failure",!0,a.$t("Alert")),!1}else if(d=a.DefaultReminder.value,v<=d||v<=0)return a.ShowAlert(a.$t("InvalidReminderDate"),"failure",!0,a.$t("Alert")),!1;if(o&&0==c.length){var f={sourceId:a.activitySourceID,moduleName:a.modulename,subModuleCode:a.submodulecode,subjecttext:a.Subject,dueDate:a.duedate,priorityLavel:a.priorityValue,messagetext:a.Message,reminderduration:d,activityType:"FollowUp",activityId:a.FollowUpIdForEdit},_=JSON.stringify(f);t&&(a.isLoading=!0,n["a"].Addtask(_).then((function(t){a.isLoading=!1,"Success"==t.data[0].Status?(f.activityId>0?a.ShowAlert(a.$t("UpdatedSuccess",[a.$t("FollowUp")]),"success",!0,a.$t("Alert")):a.ShowAlert(a.$t("AddedSuccess",[a.$t("FollowUp")]),"success",!0,a.$t("Alert")),a.duedate="",a.Subject="",a.priority="",a.Message="",a.showAddTaskModal=!1,a.$emit("close"),s>0?a.$parent.loadFollowUpData(null,a.sourceid):a.$parent.loadData("activities")):"Exist"==t.data[0].Status&&a.ShowAlert(a.$t("AlreadyExist",[a.$t("FollowUp")]),"warning",!0,a.$t("Alert"))}))),a.isLoading=!1}}))},GetDefaultReminder:function(){var t=this;return Object(l["a"])(Object(o["a"])().mark((function e(){var a;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t,a.DefaultReminder="",e.next=4,n["a"].GetConfigurationValueForCompanyByKey("key=ReminderDuration").then((function(t){a.DefaultReminder=t.data}));case 4:parseInt(a.DefaultReminder)>60&&parseInt(a.DefaultReminder)<=1440?a.DefaultReminder=parseInt(a.DefaultReminder/60)+" Hours":parseInt(a.DefaultReminder)>1440?a.DefaultReminder=parseInt(a.DefaultReminder/1440)+" Days":a.DefaultReminder=a.DefaultReminder+" Minutes";case 5:case"end":return e.stop()}}),e)})))()}}},d=r,c=a("2877"),u=Object(c["a"])(d,i,s,!1,null,null,null);e["a"]=u.exports},e29d:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"my-popups"},[a("div",{staticClass:"modal d-block"},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v(" "+t._s(t.$t("FollowUp")))]),a("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.closePopup()}}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"modal-body",staticStyle:{"max-height":"600px","overflow-y":"auto"}},[a("div",{staticClass:"listing"},[t.followupList.length>0?a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered dt-responsive nowrap mt-0",attrs:{id:"table-openactivities-content","aria-describedby":"folowuplist"}},[a("thead",{staticClass:"thead-bg"},[a("tr",[a("th",{attrs:{scope:"col"}},[a("span",[t._v(" "+t._s(t.$t("Subject"))+" ")])]),a("th",{attrs:{scope:"col"}},[a("span",[t._v(" "+t._s(t.$t("Activity"))+" "+t._s(t.$t("Type"))+" ")])]),a("th",{attrs:{scope:"col"}},[a("span",[t._v(" "+t._s(t.$t("Activity"))+" "+t._s(t.$t("ScheduleDate"))+" ")])]),a("th",{attrs:{scope:"col"}},[a("span",[t._v(" "+t._s(t.$t("Activity"))+" "+t._s(t.$t("OWNER"))+" ")])]),a("th",{attrs:{scope:"col"}},[a("span",[t._v(" "+t._s(t.$t("CreatedAt"))+" ")])]),a("th",{attrs:{scope:"col"}},[a("span",[t._v(" "+t._s(t.$t("Status"))+" ")])]),a("th",{staticClass:"text-center",attrs:{scope:"col"}},[a("span",[t._v(" "+t._s(t.$t("Action"))+" ")])])])]),a("tbody",t._l(t.followupList,(function(e){return a("tr",[a("td",[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.openToAddEditFollowUp(e)}}},[t._v(t._s(e.followup_notification_subject))])]),a("td",["FollowUp"===e.activity_type?a("div",[a("label",[t._v(" "+t._s(t.$t("FollowUp"))+" ")])]):a("div",[t._v(" "+t._s(e.activity_type)+" ")])]),a("td",[t._v(t._s(t.$options.filters.formatDate(e.followup_notification_schedule)))]),a("td",[t._v(t._s(e.activity_owner))]),a("td",[t._v(t._s(t.$options.filters.formatDate(e.created_at)))]),a("td",[a("span",{class:{"px-2 bg-success text-white d-block text-center":"Active"==e.status_name,"px-2 bg-danger text-white d-block text-center":"Inactive"==e.status_name}},[t._v(t._s(e.status_name))])]),a("td",{staticClass:"text-center single-action"},[a("a",{attrs:{href:"javascript:;",title:t.$t("Delete")},on:{click:function(a){return t.DeleteActivityData(e.followup_notification_id)}}},[a("em",{staticClass:"fa fa-trash action-icon text-danger"})])])])})),0)])]):t._e(),0==t.followupList.length?a("div",{staticClass:"text-center text-danger p-4 border no-record"},[t._v(" "+t._s(t.$t("NoRecordfound")))]):t._e()])]),a("div",{staticClass:"modal-footer"},[a("div",{staticClass:"col-lg-6 text-right p-0"},[a("a",{staticClass:"btn btn-success formbtn text-white",attrs:{href:"javascript:;"},on:{click:function(e){return t.openToAddEditFollowUp(null)}}},[a("em",{staticClass:"fa fa-plus pr-2"}),t._v(t._s(t.$t("Add"))+" "+t._s(t.$t("FollowUp")))])])])])])]),t.showAddEventModalForAddEdit?a("modalevent",{ref:"addEditFollowupModal",attrs:{modulename:t.modulename,submodulecode:t.submodulecode,sourceid:t.sourceId},on:{close:function(e){t.showAddEventModalForAddEdit=!1}}}):t._e()],1)])},s=[],o=(a("a9e3"),a("4de4"),a("d3b7"),a("e9c4"),a("6c06")),l=a("9769"),n={components:{modalevent:o["a"]},props:{modulename:{type:String,required:!0},submodulecode:{type:String,required:!0},userid:{type:Number,required:!0},leadInfo:{Type:Object,required:!0},srcId:{Type:String,required:!0}},data:function(){return{followupList:[],showAddEventModalForAddEdit:!1,sourceId:null,listItem:null}},created:function(){this.sourceId=this.srcId,this.loadFollowUpData(this.leadInfo,this.srcId)},methods:{formatDateTimeFunc:function(t){if(t)return moment(String(t),"YYYY-MM-DD HH:mm").format("MM/dd/yyyy")},loadFollowUpData:function(t,e){if("undefined"!=typeof e&&null!=e&&""!=e){var a=this;a.listItem=t,a.sourceId=e,a.followupList=[];var i="id="+e+"&subModuleCode="+a.submodulecode+"&moduleName="+a.modulename;l["a"].getFollowupList(i).then((function(t){""!=t.data&&null!=t.data&&t.data.data.length>0?(a.followupList=t.data.data.filter((function(t){return"FollowUp"==t.activity_type})),setTimeout((function(){a.CheckBoxBootstrap()}),100),setTimeout((function(){a.ResponsiveDataTable("table-openactivities-content")}),500)):a.followupList=[]}))}},DeleteActivityData:function(t){var e=this;t>0&&e.confirmR(this.$t("ConfirmDelete"),!0,this.$t("Confirm"),(function(){var a={ids:t,moduleName:e.modulename,subModuleCode:e.submodulecode,refCode:"DELETE_VIEW_ACTIVITY",refId:e.sourceId},i=JSON.stringify(a);l["a"].deleteActivityData(i).then((function(t){"Success"==t.data[0].Status?(e.ShowAlert(e.$t("DeletedSuccess",[e.$t("FollowUp")]),"success",!0,e.$t("Alert")),e.loadFollowUpData(null,e.sourceId)):e.ShowAlert(e.$t("DeletedError",[e.$t("FollowUp")]),"warning",!0,e.$t("Alert"))}))}))},closePopup:function(){this.$emit("close")},openToAddEditFollowUp:function(t){var e=this;if(null!=e.listItem&&"NO"!=e.listItem.is_additional_lead_owner&&"CRM_LEADS"==e.submodulecode){var a=JSON.parse(e.listItem.is_additional_lead_owner),i=a.filter((function(t){return"AddAcitvities"==t.permission_code}));i.length>0?(e.showAddEventModalForAddEdit=!0,null!=t&&setTimeout((function(){e.$refs.addEditFollowupModal.FetchEventViewData(t.followup_notification_id)}),500)):alert(e.$t("additionalOwnerAuthorityWarning"))}else e.showAddEventModalForAddEdit=!0,console.log(e.sourceId),null!=t&&setTimeout((function(){e.$refs.addEditFollowupModal.FetchEventViewData(t.followup_notification_id)}),500)}}},r=n,d=a("2877"),c=Object(d["a"])(r,i,s,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=CRM Invoice~CRMDeal~CRMLead~CRMPurchaseOrder~CRMQuote~CRMSalesOrderListing~CRMStage~CRMVendor~Contra~26117e4a.js.map