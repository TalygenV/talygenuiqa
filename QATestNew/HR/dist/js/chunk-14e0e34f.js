(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14e0e34f","chunk-2d0af0a6"],{"065e":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("loader",{attrs:{"is-visible":e.isLoading}}),a("tg-list",{attrs:{IsShowAction:!0,ModuleName:"HR",SubModuleCode:"",LegendArray:[],RenderRowActionMethod:e.renderActions,widgets:[],IdentityColumn:"RESIGNATION_ID",listType:["List"],ListData:e.ResignationData,HeaderData:e.Headers,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,SearchFields:e.leftSearchFields,IsSearchFieldsOnTop:"true",SearchPosition:"top",ListDataCallBackFunction:e.FetchData,showCheckBox:!1,SortExp:e.SortExp,SortBy:e.SortBy,NorecordfoundText:e.$t("NoRecordfound")},on:{ActionButtonClick:e.actionButtonClick,LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,SortdataButtonClick:e.sortdata},scopedSlots:e._u([{key:"slotdata",fn:function(t){var s=t.data;return["RESIG_FROM"==s.column.COLUMN_NAME?[a("td",{staticClass:"text-center single-action tourguide_a"},[e._v(" "+e._s(e.$options.filters.formatDate(s.row.RESIG_FROM))+" ")])]:e._e(),"date_of_leave"==s.column.COLUMN_NAME?[a("td",{staticClass:"text-center single-action tourguide_a"},[e._v(" "+e._s(e.$options.filters.formatDate(s.row.date_of_leave))+" ")])]:e._e(),"status_code"==s.column.COLUMN_NAME?[a("td",{staticClass:"text-center single-action tourguide_a"},["Resignation_Accepted"==s.row.status_code?a("span",[e._v(e._s(e.$t("Accepted"))+" ")]):e._e(),"Resignation_Rejected"==s.row.status_code?a("span",[e._v(e._s(e.$t("ApplicantReject"))+" ")]):e._e(),"Resignation_Relieved"==s.row.status_code?a("span",[e._v(e._s(e.$t("Relieved"))+" ")]):e._e(),"Resignation_Pending"==s.row.status_code?a("span",[e._v(e._s(e.$t("EVENT_INV_PENDING"))+" ")]):e._e()])]:e._e()]}}])}),e.ShowAddEmployee?a("AddEmployee"):e._e(),e.ShowApplyResignation?a("ApplyResignation"):e._e(),e.showpreviewModal?a("modalpreview",{attrs:{ResignationReason:e.ResignationReason}}):e._e(),e.showHistoryModal?a("modalstatusHistory",{attrs:{ResignationId:e.ResignationId}}):e._e(),e.showAcceptRequestModal?a("modalAcceptRequest",{attrs:{ResignationItem:e.ResignationItem}}):e._e(),e.showRejectRequestModal?a("modalRejectRequest",{attrs:{ResignationItem:e.ResignationItem}}):e._e(),e.showRelieveRequestModal?a("modalRelieveRequest",{attrs:{ResignationItem:e.ResignationItem}}):e._e()],1)},i=[],o=(a("14d9"),a("9769"));let l=[{title:"Apply Resignation",iconClass:"fa-plus",href:"",additionalClass:"",callbackfunction:"ApplyResignation",isdisabled:!1,isvisible:!0,checkPrivilege:!1,id:""},{title:"Add Offboard Employee ",iconClass:"fa-plus",href:"",callbackfunction:"AddEmployee",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1,id:""}],n=[{title:"Reason",callbackfunction:"Reason",href:"javascript:void(0)",icon:"fa fa-file-o text-primary action-icon",additionalSpan:"",isvisible:!0,isDisabled:!1},{title:"Resource Impact",callbackfunction:"ResourceImpact",href:"javascript:void(0)",icon:"fa fa-user text-primary action-icon",additionalSpan:"",isvisible:!0,isDisabled:!1},{title:"Status History",callbackfunction:"Statushistory",href:"javascript:void(0)",icon:"fa fa-history text-primary action-icon",additionalSpan:"",isvisible:!0,isDisabled:!1},{title:"Accept",callbackfunction:"Accept",href:"javascript:void(0)",icon:"fa fa-check action-icon",additionalSpan:"",isvisible:!0,isDisabled:!0},{title:"Reject",callbackfunction:"Reject",href:"javascript:void(0)",icon:"fa fa-times action-icon",additionalSpan:"",isvisible:!0,isDisabled:!0},{title:"Relieve",callbackfunction:"Relieve",href:"javascript:void(0)",icon:"fa fa-handshake-o text-success action-icon",additionalSpan:"",isvisible:!0,isDisabled:!0},{title:"Feedback Questions",callbackfunction:"Feedback",href:"javascript:void(0)",icon:"fa fa-pencil text-success action-icon",additionalSpan:"",isvisible:!0,isDisabled:!0}];var r={buttons:l,listActions:n},d=a("c1df"),c=a.n(d),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"my-popups"},[a("loader",{attrs:{"is-visible":e.isLoading}}),a("div",{staticClass:"modal d-block"},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header theme-primary partition-full  d-flex"},[a("h4",{staticClass:"modal-title"},[e._v(e._s(e.$t("Preview")))]),a("button",{staticClass:"close",attrs:{type:"button"},on:{click:e.close}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"col-lg-12 mb-3 my-2 float-left"},[a("p",{staticClass:"description mt-2"},[a("span",{domProps:{innerHTML:e._s(e.ResignationReason)}})])]),a("div",{staticClass:"modal-footer"}),a("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 text-right"},[a("a",{staticClass:"btn btn-danger formbtn",attrs:{href:"javascript:;"},on:{click:e.close}},[a("i",{staticClass:"fa fa-times"}),e._v(" "+e._s(e.$t("Cancel"))+" ")])])])])])])],1)},m=[],p={props:{ResignationReason:{type:String,required:!0}},data(){return{isLoading:!1,CompanyName:""}},created:async function(){var e=this;e.CompanyName=this.GetUserInfo.CompanyName},methods:{close:function(){this.$parent.showpreviewModal=!1}}},h=p,f=a("2877"),v=Object(f["a"])(h,u,m,!1,null,null,null),R=v.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"my-popups"},[a("loader",{attrs:{"is-visible":e.isLoading}}),a("div",{staticClass:"modal d-block"},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header theme-primary partition-full  d-flex"},[a("h4",{staticClass:"modal-title"},[e._v(e._s(e.$t("StatusHistory")))]),a("button",{staticClass:"close",attrs:{type:"button"},on:{click:e.close}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"col-md-12 p-0 mt-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"listing mt-2"},[a("div",{staticClass:"table-responsive table-fix-header"},[a("table",{staticClass:"table table-bordered dt-responsive nowrap mt-0",attrs:{id:"tblProjectList1"}},[a("thead",{staticClass:"thead-bg"},[a("tr",[a("th",[a("span",{attrs:{href:"javascript:;"}},[e._v(e._s(e.$t("Name")))])]),a("th",[a("span",{attrs:{href:"javascript:;"}},[e._v(e._s(e.$t("Status"))+" ")])]),a("th",[a("span",{attrs:{href:"javascript:;"}},[e._v(e._s(e.$t("Reason"))+" ")])])])]),a("tbody",[e.noRecord?a("tr",[a("td",{staticClass:"text-center text-danger",attrs:{colspan:"7"}},[e._v(" "+e._s(e.$t("NoRecordfound"))+" ")])]):e._e(),e._l(e.statusHistoryData,(function(t,s){return a("tr",{key:s},[a("td",[e._v(e._s(t.Name))]),a("td",[e._v(e._s(t.status_name))]),a("td",[e._v(e._s(t.reason))])])}))],2)])])])])])])])])])],1)},y=[],D={props:{ResignationId:{type:String,required:!0}},data(){return{isLoading:!1,CompanyName:"",SortBy:"",SortExp:"",statusHistoryData:[],noRecord:!1,PageSize:"10",PageNumber:"1"}},created:async function(){var e=this;e.CompanyName=this.GetUserInfo.CompanyName,e.FetchData()},methods:{FetchData:async function(){var e=this,t=`regid=${e.ResignationId}&pageSize=${e.PageSize}&pageNum=${e.PageNumber}&sortBy=${e.SortBy}&sortExp=${e.SortExp}`;await o["a"].GetStatusHistoryListing(t).then(t=>{t.data&&t.data.length>0?(e.statusHistoryData=[],e.statusHistoryData=t.data,e.TotalRecords=t.data[0].TOTAL_RECORD,e.TotalPages=Math.ceil(e.TotalRecords/e.PageSize),e.CurrentPage=e.PageNumber,e.noRecords=!1):(e.statusHistoryData=[],e.TotalRecords=0,e.noRecords=!0)})},close:function(){this.$parent.showHistoryModal=!1}}},_=D,S=Object(f["a"])(_,E,y,!1,null,null,null),g=S.exports,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"my-popups"},[a("loader",{attrs:{"is-visible":e.isLoading}}),a("div",{staticClass:"modal d-block"},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header theme-primary partition-full d-flex"},[a("h4",{staticClass:"modal-title"},[e._v(e._s(e.$t("AcceptRequest")))]),a("button",{staticClass:"close",attrs:{type:"button"},on:{click:e.Close}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"modal-body"},[a("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit}})],1)])])])],1)},b=[],I={props:{ResignationItem:{type:Object,required:!0}},data(){return{isLoading:!1,FormSchema:[{layoutType:"triple",Data:[{astype:"TextField",label:this.$t("EmployeeResignationFromRequest"),name:"FromRequest",value:"",disabled:!0,validationRules:{required:!1,max:100}},{astype:"TextField",label:this.$t("ResignationExpectedDate"),name:"ExpectedDate",value:"",disabled:!0,validationRules:{required:!1,max:100}},{astype:"DateField",label:this.$t("EffectiveResignationFrom"),name:"ResignationFrom",value:"",validationRules:{required:!0,max:100}}]},{layoutType:"single",Data:[{astype:"TextAreaField",label:this.$t("Reason"),name:"Reason",value:"",validationRules:{required:!0,max:100}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save"}]}},created:async function(){this.FetchData()},methods:{FetchData:function(){var e=this;e.FormSchema[0].Data[0].value=e.$options.filters.formatDate(e.ResignationItem.RESIG_FROM),e.expecteddate(e.ResignationItem)},formatDate:function(e){if(e)return c()(e,"YYYY-MM-DD").format(String("MM/DD/YYYY"))},expecteddate:function(e){var t=this,a=`regid=${e.RESIGNATION_ID}&userId=${e.user_id}`;o["a"].GetExpectedReleaveDate(a).then((function(e){t.FormSchema[0].Data[1].value=t.$options.filters.formatDate(e.data[0].result)}))},Close:function(){this.$parent.showAcceptRequestModal=!1},onSubmit(e,t){var a=this,s={ResignationId:null==a.ResignationItem.RESIGNATION_ID?0:a.ResignationItem.RESIGNATION_ID,EffectiveFrom:a.$options.filters.formatDate(e.ResignationFrom),Reason:e.Reason,Status:"Resignation_Accepted"},i=JSON.stringify(s);o["a"].ResignationStatus(i).then(e=>{"success"==e.data.msg?(a.ShowAlert(a.$t("AcceptedSuccess",[a.$t("Resignation")]),"success",!0,a.$t("Alert")),a.Close(),a.$parent.FetchData()):(a.ShowAlert(a.$t("AddedError",[a.$t("Resignation")]),"failure",!0,a.$t("Alert")),a.Close())})}}},C=I,N=Object(f["a"])(C,A,b,!1,null,null,null),T=N.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"my-popups"},[a("loader",{attrs:{"is-visible":e.isLoading}}),a("div",{staticClass:"modal d-block"},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header theme-primary partition-full d-flex"},[a("h4",{staticClass:"modal-title"},[e._v(e._s(e.$t("RejectRequest")))]),a("button",{staticClass:"close",attrs:{type:"button"},on:{click:e.Close}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"modal-body"},[a("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit}})],1)])])])],1)},F=[],M={props:{ResignationItem:{type:Object,required:!0}},data(){return{isLoading:!1,FormSchema:[{layoutType:"single",Data:[{astype:"TextAreaField",label:this.$t("Reason"),name:"Reason",value:"",validationRules:{required:!0,max:100}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save"}]}},created:async function(){},methods:{Close:function(){this.$parent.showRejectRequestModal=!1},onSubmit(e,t){var a=this,s={ResignationId:null==a.ResignationItem.RESIGNATION_ID?0:a.ResignationItem.RESIGNATION_ID,EffectiveFrom:"",Reason:e.Reason,Status:"Resignation_Rejected"},i=JSON.stringify(s);o["a"].ResignationStatus(i).then(e=>{"success"==e.data.msg?(a.ShowAlert(a.$t("RejectedSuccess",[a.$t("Resignation")]),"success",!0,a.$t("Alert")),a.Close(),a.$parent.FetchData()):(a.ShowAlert(a.$t("AddedError",[a.$t("Resignation")]),"failure",!0,a.$t("Alert")),a.Close())})}}},x=M,L=Object(f["a"])(x,$,F,!1,null,null,null),O=L.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"my-popups"},[a("loader",{attrs:{"is-visible":e.isLoading}}),a("div",{staticClass:"modal d-block"},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header theme-primary partition-full d-flex"},[a("h4",{staticClass:"modal-title"},[e._v(e._s(e.$t("RejectRequest")))]),a("button",{staticClass:"close",attrs:{type:"button"},on:{click:e.Close}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"modal-body"},[a("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit}})],1)])])])],1)},k=[],P={props:{ResignationItem:{type:Object,required:!0}},data(){return{isLoading:!1,FormSchema:[{layoutType:"single",Data:[{astype:"TextAreaField",label:this.$t("Reason"),name:"Reason",value:"",validationRules:{required:!0,max:100}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save"}]}},created:async function(){},methods:{Close:function(){this.$parent.showRejectRequestModal=!1},onSubmit(e,t){var a=this,s={ResignationId:null==a.ResignationItem.RESIGNATION_ID?0:a.ResignationItem.RESIGNATION_ID,EffectiveFrom:"",Reason:e.Reason,Status:"Resignation_Rejected"},i=JSON.stringify(s);o["a"].ResignationStatus(i).then(e=>{"success"==e.data.msg?(a.ShowAlert(a.$t("RejectedSuccess",[a.$t("Resignation")]),"success",!0,a.$t("Alert")),a.Close(),a.$parent.FetchData()):(a.ShowAlert(a.$t("AddedError",[a.$t("Resignation")]),"failure",!0,a.$t("Alert")),a.Close())})}}},U=P,q=Object(f["a"])(U,w,k,!1,null,null,null),V=q.exports,B=a("0d40"),Y={components:{modalpreview:R,modalstatusHistory:g,modalAcceptRequest:T,AddEmployee:B["default"],modalRejectRequest:O,modalRelieveRequest:V},data(){return{isLoading:!1,ShowAddEmployee:!1,ShowApplyResignation:!1,ShowAddVendor:!1,showpreviewModal:!1,ResignationId:0,showHistoryModal:!1,showAcceptRequestModal:!1,showRejectRequestModal:!1,showRelieveRequestModal:!1,Headers:[{COLUMN_NAME:"NAME",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Employee Name",DISPLAY_ORDER:1},{COLUMN_NAME:"email_id",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Email Id",DISPLAY_ORDER:2},{COLUMN_NAME:"DEPT_NAME",DATA_TYPE:"Date",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Department Name",DISPLAY_ORDER:3},{COLUMN_NAME:"DESIG_NAME",DATA_TYPE:"Date",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Designation Name",DISPLAY_ORDER:4},{COLUMN_NAME:"date_of_leave",DATA_TYPE:"Date",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Relieving Date",DISPLAY_ORDER:5},{COLUMN_NAME:"RESIG_FROM",DATA_TYPE:"Date",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Effective Resignation Date Request",DISPLAY_ORDER:4},{COLUMN_NAME:"status_code",DATA_TYPE:"Date",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Status",DISPLAY_ORDER:5}],leftSearchFields:[{fieldName:"Search",fieldType:"text",fieldSearchConditionName:[""],paramName:"search",isSearch:!0,value:"",listOptions:[]}],SortBy:"",ResignationReason:"",SortExp:"",noRecords:"",PageSize:"10",PageNumber:"1",TotalRecords:0,CurrentPage:1,TotalPages:0,searchCondition:"",ResignationData:[],listheaderbuttons:r.buttons,listActions:r.listActions,HeaderText:"",UserType:"",UserId:"",IsDefault:"",ResignationItem:[]}},created:async function(){var e=this;await e.FetchData(),e.UserId=this.GetUserInfo.ID,e.UserType=e.GetUserInfo.UserType,e.IsDefault=e.GetUserInfo.IsDefault,"CA"==e.UserType&&e.IsDefault&&(e.listheaderbuttons[0].isdisabled=!0)},methods:{ApplyResignation:function(e){var t=this;t.ResigId=e,t.ShowApplyResignation=!0,t.$router.push({name:"EmployeeResignation",params:{reqfrom:"ExitPolicy/EmployeeResignation",id:e}})},AddEmployee:function(e){this.EditId=e,this.ShowAddEmployee=!0,this.$router.push({name:"AddEmployee",params:{reqfrom:"ExitPolicy/AddEmployee",id:e}})},formatDate:function(e){return e?c()(e).format("MMMM Do, YYYY"):""},leftCommonSearch:function(e){if(this.PageNumber=e.PageNumber,this.isPaged=1,"undefined"!=typeof e.searchCondition){let t=e.searchConditionJson,a=t.split("=")[1];this.searchCondition=a}else this.searchCondition="";this.FetchData()},commonHeaderButtonClick:function(e){switch(e.callbackfunction){case"AddEmployee":this.AddEmployee(0,"AddEmployee");break;case"ApplyResignation":this.ApplyResignation(0,"ApplyResignation");break}},sortdata:function(e){this.SortBy=e;var t="ASC";"ASC"==this.SortExp&&(t="DESC"),this.SortExp=t,this.SortBy=e,this.SortExp=t,this.PageNumber=1,this.FetchData()},pagerMethod:function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,this.FetchData()},renderActions:function(e){var t=this;let a=[];return t.listActions.forEach(e=>{let t={...e};switch(t.title){case"Reason":t.isVisible=!0;break;case"Resource Impact":t.isVisible=!0;break;case"Status History":t.isVisible=!0;break;case"Accept":t.isVisible=!0,t.isDisabled=!1;break;case"Reject":t.isVisible=!0,t.isDisabled=!1;break;case"Relieve":t.isVisible=!0,t.isDisabled=!1;break;case"Feedback Questions":t.isVisible=!0,t.isDisabled=!1;break;default:t.isVisible=!0}a.push(t)}),a},actionButtonClick:function(e,t,a,s){switch(e){case"Reason":this.OpenReasonModal(t);break;case"Statushistory":this.Statushistory(t);break;case"Accept":this.AcceptRequest(t);break;case"Reject":this.RejectRequest(t);break;case"Relieve":this.RelieveRequest(t);break}},OpenReasonModal:function(e){var t=this;t.ResignationReason=e.RESIGNATION_REASON,t.showpreviewModal=!0},Statushistory:function(e){var t=this;t.ResignationId=e.RESIGNATION_ID,t.showHistoryModal=!0},AcceptRequest:function(e){var t=this;t.ResignationItem=e,t.showAcceptRequestModal=!0},RejectRequest:function(e){var t=this;t.ResignationItem=e,t.showRejectRequestModal=!0},RelieveRequest:function(e){var t=this;t.ResignationItem=e,t.showRelieveRequestModal=!0},FetchData:async function(){var e=this,t=`pageSize=${e.PageSize}&pageNumber=${e.PageNumber}&sortBy=${e.SortBy}&sortExp=${e.SortExp}`;e.isBlank(this.searchCondition)||(t+="&search="+this.searchCondition),await o["a"].GetEmployeeResignationListing(t).then(t=>{t.data&&t.data.length>0?(e.ResignationData=[],e.Headers.forEach(e=>{e.settings=null,"RESIG_FROM"==e.COLUMN_NAME&&(e.settings={isInSlot:!0}),"date_of_leave"==e.COLUMN_NAME&&(e.settings={isInSlot:!0}),"status_code"==e.COLUMN_NAME&&(e.settings={isInSlot:!0})}),e.ResignationData=t.data,e.TotalRecords=t.data[0].TOTAL_RECORD,e.TotalPages=Math.ceil(e.TotalRecords/e.PageSize),e.CurrentPage=e.PageNumber,e.noRecords=!1):(e.ResignationData=[],e.TotalRecords=0,e.noRecords=!0)})}}},j=Y,G=Object(f["a"])(j,s,i,!1,null,null,null);t["default"]=G.exports},"0d40":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("loader",{attrs:{"is-visible":e.isLoading}}),a("section",{staticClass:"main-content"},[a("div",{ref:"hellp",attrs:{id:"divMaindealData"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 padding-t_8"},[a("div",{staticClass:"theme-primary partition-full"},[a("span",{staticClass:"p-name text-white"},[e._v(e._s(e.$t("ManageOffboardEmployee")))]),a("span",{staticClass:"float-right"},[a("a",{staticClass:"p-action-btn text-white",attrs:{href:"javascript:;",title:e.$t("BacktoList")},on:{click:e.Close}},[a("em",{staticClass:"fa fa-angle-double-left pr-2",attrs:{"aria-hidden":"true"}}),a("br"),e._v(e._s(e.$t("BacktoList"))+" ")])])])])]),a("div",{staticClass:"border p-3"},[a("Form",{ref:"JobPostForm"},[a("dynamic-form",{ref:"AddEmployee",attrs:{buttons:e.buttons,schema:e.FormSchema,mandatorytext:e.MandatoryString},on:{OnSubmit:e.onSubmit}})],1)],1)])])],1)},i=[],o=(a("14d9"),a("9769")),l={data(){return{isLoading:!1,userId:"",EmployeeData:[],UserData:[],UsersData:[],EmployeeExitId:0,EditEmployeeData:[],labelValues:[],MandatoryString:"Fields marked with an asterisk (*) are mandatory.",FormSchema:[{layoutType:"triple",group_name:"Separation Form",group_display_name:this.$t("SeparationForm"),Data:[{astype:"SelectField",label:this.$t("EmployeeName"),name:"EmployeeName",value:"",mode:"tag",config:{options:[],onChange:this.onChangeEmployeeName},visibility:!0,validationRules:{required:!0}},{astype:"TextField",label:this.$t("EmployeeId"),name:"EmployeeId",value:"",validationRules:{required:!1,max:100}},{astype:"TextField",label:this.$t("Email"),name:"Email",value:"",validationRules:{required:!1,max:100}},{astype:"TextField",label:this.$t("Department"),name:"Department",value:"",validationRules:{required:!1,max:100}},{astype:"TextField",label:this.$t("Designation"),name:"Designation",value:"",validationRules:{required:!1,max:100}}]},{layoutType:"single",Data:[{astype:"TextAreaField",label:this.$t("Reason"),name:"Reason",value:"",validationRules:""}]},{layoutType:"triple",group_name:"Employee Checklist",group_display_name:this.$t("EmployeeChecklist"),Data:[{astype:"RadioField",label:this.$t("AllTaskCompleted"),name:"AllTaskCompleted",value:"0",placeholder:"",config:{options:[{value:"1",name:"Yes"},{value:"0",name:"No"}]},visibility:!0,validationRules:{required:!1}},{astype:"RadioField",label:this.$t("KnowledgeTransferred"),name:"KnowledgeTransferred",value:"0",placeholder:"",config:{options:[{value:"1",name:"Yes"},{value:"0",name:"No"}]},visibility:!0,validationRules:{required:!1}},{astype:"RadioField",label:this.$t("DocumentTransferred"),name:"DocumentTransferred",value:"0",placeholder:"",config:{options:[{value:"1",name:"Yes"},{value:"0",name:"No"}]},visibility:!0,validationRules:{required:!1}},{astype:"RadioField",label:this.$t("StaffIdentificationCardCollected"),name:"StaffIdentificationCardCollected",value:"0",placeholder:"",config:{options:[{value:"1",name:"Yes"},{value:"0",name:"No"}]},visibility:!0,validationRules:{required:!1}}]},{layoutType:"triple",group_name:"IT Department",group_display_name:this.$t("ITDepartment"),Data:[{astype:"RadioField",label:this.$t("EmailAccessUpdated"),name:"EmailAccessUpdated",value:"0",placeholder:"",config:{options:[{value:"1",name:"Yes"},{value:"0",name:"No"}]},visibility:!0,validationRules:{required:!1}},{astype:"RadioField",label:this.$t("ITAssetsVerified"),name:"ITAssetsVerified",value:"0",placeholder:"",config:{options:[{value:"1",name:"Yes"},{value:"0",name:"No"}]},visibility:!0,validationRules:{required:!1}}]},{layoutType:"triple",group_name:"Account Department",group_display_name:this.$t("AccountDepartment"),Data:[{astype:"RadioField",label:this.$t("LeaveBalanceVerified"),name:"LeaveBalanceVerified",value:"0",placeholder:"",config:{options:[{value:"1",name:"Yes"},{value:"0",name:"No"}]},visibility:!0,validationRules:{required:!1}},{astype:"RadioField",label:this.$t("AnyDues"),name:"AnyDues",value:"0",placeholder:"",config:{options:[{value:"1",name:"Yes"},{value:"0",name:"No"}]},visibility:!0,validationRules:{required:!1}},{astype:"RadioField",label:this.$t("FinalPaymentVerified"),name:"FinalPaymentVerified",value:"0",placeholder:"",config:{options:[{value:"1",name:"Yes"},{value:"0",name:"No"}]},visibility:!0,validationRules:{required:!1}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save",isVisible:!0},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.Close}]}},created:function(){var e=this;e.GetUserList(),e.EmployeeExitId=this.$route.params.id,e.EmployeeExitId>0&&e.EditEmployee()},methods:{EditEmployee(){var e=this,t="Id="+e.EmployeeExitId;o["a"].GetEmployeeExitDetails(t).then(t=>{(t.data.status="Success")&&(e.EditEmployeeData=t.data.result[0],null!=e.EditEmployeeData.EMPLOYEE_ID&&e.EditEmployeeName(e.EditEmployeeData.EMPLOYEE_ID),e.FormSchema[0].Data[1].value=null==e.EditEmployeeData.EMPLOYEE_ID?"--":e.EditEmployeeData.EMPLOYEE_ID,e.FormSchema[1].Data[0].value=e.EditEmployeeData.REASON,e.FormSchema[2].Data[0].value=1==e.EditEmployeeData.IS_ALL_TASK_COMPLETED?1:0,e.FormSchema[2].Data[1].value=1==e.EditEmployeeData.IS_KNOWLEDGE_TRANSFERRED?1:0,e.FormSchema[2].Data[2].value=1==e.EditEmployeeData.IS_DOCUMENT_TRANSFERRED?1:0,e.FormSchema[2].Data[3].value=1==e.EditEmployeeData.IS_STAFF_IDENTIFICATION_CARD_COLLECTED?1:0,e.FormSchema[3].Data[0].value=1==e.EditEmployeeData.IS_EMAIL_ACCESS_UPDATED?1:0,e.FormSchema[3].Data[1].value=1==e.EditEmployeeData.IS_IT_ASSETS_VERIFIED?1:0,e.FormSchema[4].Data[0].value=1==e.EditEmployeeData.IS_LEAVE_BALANCE_VARIFIED?1:0,e.FormSchema[4].Data[1].value=1==e.EditEmployeeData.IS_ANY_DUES?1:0,e.FormSchema[4].Data[2].value=1==e.EditEmployeeData.IS_FINAL_PAYMENT_VARIFIED?1:0)})},EditEmployeeName:function(e){var t=this,a=e;t.FormSchema[0].Data[0].value=e;var s="UserId="+a;o["a"].GetUserDetailsByUserId(s).then(e=>{""!=e.data&&(t.UsersData=e.data[0],t.FormSchema[0].Data[1].value=null==t.UsersData.user_emp_id?"--":t.UsersData.user_emp_id,t.FormSchema[0].Data[2].value=t.UsersData.email_id,t.FormSchema[0].Data[3].value=null==t.UsersData.DEPARTMENT_NAME?"--":t.UsersData.DEPARTMENT_NAME,t.FormSchema[0].Data[4].value=null==t.UsersData.DESIGNATION_NAME?"--":t.UsersData.DESIGNATION_NAME),t.$refs.AddEmployee.UpdateKeyValue()})},GetUserList(){var e=this,t="projectId=&userType=&isActive=1&ticketId=0&moduleName=OffboardEmployee";o["a"].GetUserList(t).then(t=>{""!=t.data&&(e.EmployeeData=t.data,e.EmployeeData.forEach(t=>{e.FormSchema[0].Data[0].config.options.push({name:t.USERNAME,value:t.USERID})})),e.$refs.AddEmployee.UpdateKeyValue()})},onChangeEmployeeName:function(e){var t=this,a=e.currentTarget._vOptions;a.forEach(e=>{t.userId=e});var s="UserId="+t.userId;o["a"].GetUserDetailsByUserId(s).then(e=>{""!=e.data&&(t.UserData=e.data[0],t.FormSchema[0].Data[1].value=null==t.UserData.user_emp_id?"--":t.UserData.user_emp_id,t.FormSchema[0].Data[2].value=t.UserData.email_id,t.FormSchema[0].Data[3].value=null==t.UserData.DEPARTMENT_NAME?"--":t.UserData.DEPARTMENT_NAME,t.FormSchema[0].Data[4].value=null==t.UserData.DESIGNATION_NAME?"--":t.UserData.DESIGNATION_NAME,t.FormSchema[1].Data[0].value=t.UserData.reason,t.FormSchema[2].Data[0].value=1==t.UserData.is_all_task_completed?1:0,t.FormSchema[2].Data[1].value=1==t.UserData.is_knowledge_transferred?1:0,t.FormSchema[2].Data[2].value=1==t.UserData.is_document_transferred?1:0,t.FormSchema[2].Data[3].value=1==t.UserData.is_staff_identification_card_collected?1:0,t.FormSchema[3].Data[0].value=1==t.UserData.is_email_access_updated?1:0,t.FormSchema[3].Data[1].value=1==t.UserData.is_it_assets_verified?1:0,t.FormSchema[4].Data[0].value=1==t.UserData.is_leave_balance_varified?1:0,t.FormSchema[4].Data[1].value=1==t.UserData.is_any_dues?1:0,t.FormSchema[4].Data[2].value=1==t.UserData.is_final_payment_varified?1:0)})},Close:function(){this.$router.push({name:"EmployeeExitListing"})},onSubmit(e,t){var a=this,s={EmpExitId:void 0==a.$parent.EmployeeExitId?0:a.$parent.EmployeeExitId,EmployeeId:e.EmployeeName,AllTaskCompleted:1==e.AllTaskCompleted?"1":"0",KnowledgeTransferred:1==e.KnowledgeTransferred?"1":"0",DocumnetTransferred:1==e.DocumentTransferred?"1":"0",EmailAccessUpdated:1==e.EmailAccessUpdated?"1":"0",ItAssetsVerified:1==e.ITAssetsVerified?"1":"0",LeaveBalanceVarified:1==e.LeaveBalanceVerified?"1":"0",AnyDues:1==e.AnyDues?"1":"0",FinalPaymentVarified:1==e.FinalPaymentVerified?"1":"0",Reason:e.Reason,IsStaffIdentification:1==e.StaffIdentificationCardCollected?"1":"0"},i=JSON.stringify(s);a.confirmR(a.$t("EmployeeResignationNotice"),!0,"Alert",(function(){"0"==e.AllTaskCompleted||"0"==e.KnowledgeTransferred||"0"==e.DocumentTransferred||"0"==e.EmailAccessUpdated||"0"==e.ITAssetsVerified||"0"==e.LeaveBalanceVerified||"0"==e.AnyDues||"0"==e.FinalPaymentVerified||"0"==e.StaffIdentificationCardCollected?(a.labelValues=[],"0"==e.AllTaskCompleted&&a.labelValues.push(a.$t("all_task_completed")),"0"==e.KnowledgeTransferred&&a.labelValues.push(a.$t("KnowledgeTransferred")),"0"==e.DocumentTransferred&&a.labelValues.push(a.$t("DocumentTransferred")),"0"==e.EmailAccessUpdated&&a.labelValues.push(a.$t("EmailAccessUpdated")),"0"==e.LeaveBalanceVerified&&a.labelValues.push(a.$t("LeaveBalanceVerified")),"0"==e.AnyDues&&a.labelValues.push(a.$t("AnyDues")),"0"==e.FinalPaymentVerified&&a.labelValues.push(a.$t("FinalPaymentVerified")),"0"==e.StaffIdentificationCardCollected&&a.labelValues.push(a.$t("StaffIdentificationCardCollected")),a.confirmR("You have left following option: <ul class='px-3' style='display:block;text-align:left'><li>"+a.labelValues.join("</li><li>")+"</li> Do you want to submit with [NO] option selected? ",!0,"Alert",(function(){o["a"].SaveExitEmployee(i).then(e=>{(e.data[0].Column1=1)?(a.ShowAlert(a.$t("SaveoffboardEmployee"),"success",!0,a.$t("Alert")),a.Close()):(e.data[0].Column1=2)?(a.ShowAlert(a.$t("UpdateExit"),"success",!0,a.$t("Alert")),a.Close()):a.ShowAlert(a.$t("Exit"),"failure",!0,a.$t("Alert"))})}))):o["a"].SaveExitEmployee(i).then(e=>{(e.data[0].Column1=1)?(a.ShowAlert(a.$t("SaveoffboardEmployee"),"success",!0,a.$t("Alert")),a.Close()):(e.data[0].Column1=2)?(a.ShowAlert(a.$t("UpdateExit"),"success",!0,a.$t("Alert")),a.Close()):a.ShowAlert(a.$t("Exit"),"failure",!0,a.$t("Alert"))})}))}}},n=l,r=a("2877"),d=Object(r["a"])(n,s,i,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-14e0e34f.js.map