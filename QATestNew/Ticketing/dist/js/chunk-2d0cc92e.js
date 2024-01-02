(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc92e"],{"4f06":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("section",[t("tg-list",{directives:[{name:"show",rawName:"v-show",value:e.IscrewView,expression:"IscrewView"}],attrs:{IsShowAction:!0,ModuleName:"Ticketing",SubModuleCode:"FSM_CREW",LegendArray:[],RenderRowActionMethod:e.renderActions,widgets:[],IdentityColumn:"crew_id",HeaderText:e.$t("Crew"),listType:["List"],ListData:e.CrewList,HeaderData:e.Headers,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,SearchFields:e.leftSearchFields,ListDataCallBackFunction:e.FetchRecords,showCheckBox:!0,SortExp:e.SortExp,SortBy:e.SortBy,NorecordfoundText:e.$t("NoRecordfound")},on:{ActionButtonClick:e.actionButtonClick,LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,SortdataButtonClick:e.sortdata},scopedSlots:e._u([{key:"slotdata",fn:function({data:a}){return["STATUS_NAME"==a.column.COLUMN_NAME?[t("a",{staticClass:"active"},["Active"==a.row.STATUS_NAME?t("span",{class:e.getStatusClassList(a.row.STATUS_NAME,"STATUS_NAME")},[e._v(" "+e._s(a.row[a.column.COLUMN_NAME])+" ")]):e._e(),"Inactive"==a.row.STATUS_NAME?t("span",{class:e.getStatusClassList(a.row.STATUS_NAME,"STATUS_NAME")},[e._v(" "+e._s(e.$t("Inactive"))+" ")]):e._e()])]:e._e()]}}])}),e.AddCrewPopup?t("AddCrewPopup",{attrs:{CrewId:e.ticketSourceId}}):e._e()],1)},i=[];a("88a7"),a("271a"),a("5494"),a("14d9");let r=[{title:"Add",iconClass:"fa fa-plus",callbackfunction:"openaddWorkType",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0,id:"Addticketing"},{title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!1,id:"DeleteMultiple",isEnabledOnSelectedRow:!0}],o=[{fieldName:"Crew Name",fieldType:"text",fieldIcon:"fa fa-map-marker",fieldSearchConditionName:["search"],paramName:"search",isSearch:!1,value:"",listOptions:[]}],c=[{title:"Edit",href:"javascript:void(0)",icon:"fa fa-pencil action-icon",callbackfunction:"Edit",additionalSpan:""},{title:"View",href:"javascript:void(0)",callbackfunction:"ClickOnView",icon:"fa fa-eye action-icon",additionalSpan:""}];var l={buttons:r,leftsearchSchema:o,listActions:c},n=a("9769"),d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"my-popups"},[t("loader",{attrs:{"is-visible":e.isLoading}}),t("div",{staticClass:"modal d-block"},[t("div",{staticClass:"modal-dialog modal-dialog-centered"},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header theme-primary partition-full d-flex"},[t("h4",{staticClass:"modal-title"},[e._v(e._s(e.$t("ManageServiceCrew")))]),t("button",{staticClass:"close",attrs:{type:"button"},on:{click:e.Close}},[t("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),t("span",{staticClass:"user-guide"},[t("a",{staticClass:"ancuserguide text-white",attrs:{"data-toggle":"collapse",href:"#collapseReplyUG",role:"button","aria-expanded":"false","aria-controls":"collapseExample"}},[t("em",{staticClass:"fa fa-files-o pr-2"}),e._v(e._s(e.$t("GuideForUser")))]),t("div",{staticClass:"divancuserguide collapse overflow-auto",attrs:{id:"collapseReplyUG"}},[t("div",{staticClass:"custom-scrollbar-js",attrs:{id:"scrollbarreplyuserguideMangeView"}},[t("div",{staticClass:"con",domProps:{innerHTML:e._s(e.$t("UgAddEditFSMCrew"))}})])])])]),t("div",{staticClass:"modal-body"},[t("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit}})],1)])])])],1)},u=[],h={props:{CrewId:{type:Number,required:!0}},data(){return{isLoading:!1,FormSchema:[{layoutType:"double",Data:[{astype:"TextField",label:this.$t("CrewName"),name:"CrewName",value:"",placeholder:this.$t("EnterCrewName"),validationRules:{required:!0,max:100}},{astype:"NumericField",label:this.$t("CrewSize"),name:"CrewSize",value:"",placeholder:this.$t("EnterCrewSize"),validationRules:{required:!0,max:100}}]},{layoutType:"single",Data:[{astype:"SelectField",label:this.$t("Status"),name:"Status",value:"",config:{options:[{value:"1001",name:"Active"},{value:"1002",name:"InActive"}]},placeholder:this.$t("SelectStatus"),validationRules:{required:!0,max:100}}]},{layoutType:"single",Data:[{astype:"TextAreaField",label:this.$t("description"),name:"Description",value:"",placeholder:this.$t("EnterDescription"),validationRules:""}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Close",onClick:this.Close}]}},created:async function(){this.FetchData()},methods:{FetchData:function(){var e=this,t="Id="+e.CrewId;n["a"].FetchDataByCrewId(t).then((function(t){null!=t.data&&""!=t.data&&"Success"==t.data.status&&(e.FormSchema[0].Data[0].value=t.data.result.data[0].crew_name,e.FormSchema[0].Data[1].value=t.data.result.data[0].crew_size,e.FormSchema[1].Data[0].value=t.data.result.data[0].status_id,e.FormSchema[2].Data[0].value=t.data.result.data[0].description)}))},Close:function(){this.$parent.AddCrewPopup=!1},onSubmit(e,t){var a=this,s={Id:null==a.CrewId?0:a.CrewId,CrewName:e.CrewName,CrewSize:e.CrewSize,FSMTerritoryListId:null,Desc:e.Description,Status:e.Status},i=JSON.stringify(s);n["a"].SaveTicketingCrew(i).then(e=>{if("Success"==e.data.status){var t=JSON.parse(e.data.result);"ALREADY EXISTS"==t.MSG?a.ShowAlert(a.$t("AlreadyExists",[a.$t("Crew")]),"failure",!0,a.$t("Alert")):(a.CrewId>0?(a.ShowAlert(a.$t("UpdatedSuccess",[a.$t("Crew")]),"success",!0,a.$t("Alert")),a.Close()):a.ShowAlert(a.$t("AddedSuccess",[a.$t("Crew")]),"success",!0,a.$t("Alert")),a.Close(),a.$parent.FetchRecords())}else a.ShowAlert(a.$t("AddedError",[a.$t("Crew")]),"failure",!0,a.$t("Alert")),a.Close()})}}},S=h,p=a("2877"),C=Object(p["a"])(S,d,u,!1,null,null,null),m=C.exports,w={components:{AddCrewPopup:m},data(){return{IscrewView:!0,AddCrewPopup:!1,showSetupTickectSource:!1,showExpanded:"",StatusMappingList:[],noRecords:!1,SortBy:"",SortExp:"",PageSize:"10",PageNumber:"1",TotalRecords:0,CurrentPage:1,TotalPages:0,SearchCondition:"",CrewList:[],GroupStart:1,GroupEnd:3,ticketSourceId:0,Headers:[{COLUMN_NAME:"crew_name",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Crew Name",DISPLAY_ORDER:1},{COLUMN_NAME:"crew_size",DATA_TYPE:"string",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Crew Size",DISPLAY_ORDER:2},{COLUMN_NAME:"STATUS_NAME",DATA_TYPE:"string",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Status",DISPLAY_ORDER:3}],listheaderbuttons:l.buttons,leftSearchFields:l.leftsearchSchema,listActions:l.listActions,user_type:null,user_id:null,companyId:null,search:""}},created:async function(){var e=this;e.user_id=this.GetUserInfo.ID,e.user_type=this.GetUserInfo.UserType,e.companyId=this.GetUserInfo.CompanyId,await e.FetchRecords()},methods:{paramsToObject(e){const t={};for(const[a,s]of e)t[a]=s;return t},leftCommonSearch:function(e){const t=new URLSearchParams(e.searchConditionJson),a=t.entries(),s=this.paramsToObject(a);s.hasOwnProperty("search")?this.search=s["search"]:this.search="",this.PageNumber=e.PageNumber,this.isPaged=1,"undefined"!=typeof e.searchCondition?this.searchCondition=e.searchCondition:this.searchCondition="",this.FetchRecords()},actionButtonClick(e,t,a,s){switch(e){case"Edit":this.openPopupForSetupCrewList(t.crew_id);break;case"ClickOnView":this.CrewDeatail(t.crew_id);break}},renderActions:function(e){var t=this;let a=[];return t.listActions.forEach(e=>{let t={...e};switch(t.title){case"Edit":t.isVisible=!0;break;case"ClickOnView":t.isVisible=!0;break;default:t.isVisible=!0}a.push(t)}),a},FetchRecords:async function(){var e=this;e.isBlank(e.SearchCondition)||(e.PageNumber=1);var t=`sortBy=${e.SortBy}&sortExp=${e.SortExp}&pageSize=${e.PageSize}&pageNumber=${e.PageNumber}`;e.isBlank(this.search)||(t+="&search="+this.search),await n["a"].GetFsmCrewList(t).then((function(t){e.Headers.forEach(e=>{e.settings=null,"STATUS_NAME"==e.COLUMN_NAME&&(e.settings={isInSlot:!0,isForTag:!0}),"View"==e.COLUMN_NAME&&(e.settings={isInSlot:!0}),"Edit"==e.COLUMN_NAME&&(e.settings={isInSlot:!0})}),e.CrewList=[],e.TotalPages=Math.ceil(e.TotalRecords/e.PageSize),e.TotalRecords=0,null!=t.data&&""!=t.data&&("Success"==t.data.status?(e.CrewList=t.data.result.data,e.TotalPages=Math.ceil(e.TotalRecords/e.PageSize),e.CurrentPage=e.PageNumber,e.CrewList.length>0?(e.TotalRecords=t.data.result.data[0].TOTALRECORDS,e.listheaderbuttons[1].isdisabled=!0,e.noRecords=!1):e.noRecords=!0):e.noRecords=!0,setTimeout((function(){e.ResponsiveDataTable("tablelistingdata")}),500))}))},pagerMethod:function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,this.FetchRecords()},commonHeaderButtonClick:function(e){switch(e.callbackfunction){case"commonDeleteData":this.commonDeleteData();break;case"openaddWorkType":this.openPopupForSetupCrewList(null);break}},sortdata:function(e){this.SortBy=e;var t="ASC";"ASC"==this.SortExp&&(t="DESC"),this.SortExp=t,this.SortBy=e,this.SortExp=t,this.PageNumber=1,this.GroupStart=this.PageNumber,this.GroupEnd=this.PageNumber+2,this.FetchRecords()},openPopupForSetupCrewList:function(e){void 0==e&&(e=0),this.ticketSourceId=e,this.AddCrewPopup=!this.AddCrewPopup},commonDeleteData:function(e){var t=this,a="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0?t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("Crew"),(function(){var e={ids:a,companyId:t.companyId,userId:t.user_id,moduleName:"FSM",refCode:"TALYGEN_FSM_CREW"},s=JSON.stringify(e);n["a"].deleteActivityData(s).then(e=>{var a="";"Success"==e.data[0].Status?(t.FetchRecords(),a=t.ShowAlert(t.$t("DeletedSuccess",[t.$t("Crew")]),"Success",!0,t.$t("Alert"))):a=t.ShowAlert(t.$t("DeletedError",[t.$t("Crew")]),"failure",!0,t.$t("Alert")),setTimeout((function(){a.modal("hide")}),2e3)})})):alert(t.$t("Selectanyrecordtodelete"))},getStatusClassList:function(e){var t="";switch(e){case"Active":t="px-2 text-center text-white d-block bg-success";break;case"Inactive":t="px-2 text-center text-white d-block bg-danger";break;default:t=""}return t},CrewDeatail(e){this.$router.push({name:"CrewDetail",params:{id:e}})}}},f=w,A=Object(p["a"])(f,s,i,!1,null,null,null);t["default"]=A.exports}}]);
//# sourceMappingURL=chunk-2d0cc92e.js.map