(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc687806"],{"502a":function(e,t,a){"use strict";a("f372")},"8cc6":function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,".left-tab-container[data-v-2b7f3374]{max-height:70vh;overflow-y:auto}.left-tab .nav-link.left-menu a[data-v-2b7f3374]{width:100%;display:flex}.left-tab .nav-link.left-menu.active .listing[data-v-2b7f3374],.left-tab .nav-link.left-menu[data-v-2b7f3374]:hover,.listing[data-v-2b7f3374]:hover{color:#fff}",""]),e.exports=t},aae2:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"left-menu-tab mt-2"},[e._m(0),a("div",{staticClass:"left-tab-container"},[a("div",{staticClass:"mb-0 d-lg-block p-2 border"},[a("div",{staticClass:"input-group customsearchbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.MainSearchmodel,expression:"MainSearchmodel"}],staticClass:"form-control searchcustomfilter border-right-0",attrs:{type:"text",maxlength:"50",id:"searchinput",placeholder:"Search by Name",autocomplete:"off"},domProps:{value:e.MainSearchmodel},on:{keydown:e.ListFiltering,keyup:e.ListFiltering,mouseup:e.SelectAllSearch,mouseleave:e.SelectAllSearch,input:function(t){t.target.composing||(e.MainSearchmodel=t.target.value)}}}),e._m(1)])]),a("ul",{staticClass:"nav nav-pills flex-column left-tab responivecustomtab lefttabiconfix"},e._l(0==e.searchColumnfilter.length?e.leftTabList:e.searchColumnfilter,(function(t){return a("li",{class:{"nav-link left-menu":!0,active:t.goTo===e.$route.path}},[a("router-link",{staticStyle:{"align-items":"center"},attrs:{to:t.goTo}},[a("div",{staticClass:"listing"},[a("i",{staticClass:"mr-2",class:t.icon}),e._v(e._s(t.title))])])],1)})),0)])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"theme-primary partition"},[a("span",{staticClass:"p-name text-white"},[e._v("Company Setup")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text bg-transparent bg-white border-left-0"},[a("i",{staticClass:"fa fa-search"})])])}],s=(a("14d9"),a("5b81"),{name:"listing-status",props:{HeaderText:{type:String,required:!0}},data:function(){return{GetSelectedValue:"",Header:this.HeaderText,searchColumnfilter:[],Header:this.HeaderText,leftTabList:[{title:"Announcement",icon:"fa fa-bullhorn",goTo:"/AnnouncementMessage/Index"},{title:"Break",icon:"fa fa-clock-o",goTo:"/Break/Index"},{title:"Category",icon:"fa fa-tasks",goTo:"/Category/Index"},{title:"Channel",icon:"fa fa-television",goTo:"/Channel/Index"},{title:"Company Holiday",icon:"fa fa-calendar",goTo:"/CompanyHoliday/Index"},{title:"Company Notification",icon:"fa fa-bell",goTo:"/CompanyNotification/Index"},{title:"Contact Type",icon:"fa fa-list-alt",goTo:"/ContactType/Index"},{title:"Currency Management",icon:"fa fa-list-alt",goTo:"/CurrencyManagement/Index"},{title:"Department",icon:"fa fa-users",goTo:"/Department/Index"},{title:"Designation",icon:"fa fa-address-card",goTo:"/Designation/Index"},{title:"Email Template",icon:"fa fa-clock-o",goTo:"/EmailTemplate/Index"},{title:"Feedback",icon:"fa fa-map-marker",goTo:"/Feedback/Index"},{title:"Greeting",icon:"fa fa-thumbs-o-up",goTo:"/Greeting/Index"},{title:"Industry Type",icon:"fa fa-building-o",goTo:"/IndustryType/Index"},{title:"Immigration",icon:"fa fa-address-card",goTo:"/Immigration/Index"},{title:"Location",icon:"fa fa-map-marker",goTo:"/Location/Index"},{title:"Login Authorization",icon:"fa fa-map-marker",goTo:"/LoginAuthorization/Index"},{title:"Payment Gateway",icon:"fa fa-clock-o",goTo:"/PaymentGateway/Index"},{title:"Provisional Right",icon:"fa fa-map-marker",goTo:"/ProvisionalRight/Index"},{title:"Review Template",icon:"fa fa-clock-o",goTo:"/ReviewTemplate/Index"},{title:"Service",icon:"fa fa-star",goTo:"/Service/Index"},{title:"Shift",icon:"fa fa-clock-o",goTo:"/Shift/Index"},{title:"Skill",icon:"fa fa-star",goTo:"/Skill/Index"},{title:"Stage",icon:"fa fa-bar-chart",goTo:"/Stage/Index"},{title:"Status",icon:"fa fa-bar-chart",goTo:"/Status/Index"},{title:"User Title",icon:"fa fa-star",goTo:"/UserTitle/Index"}]}},methods:{SelectAllSearch(){var e=this;e.GetSelectedValue=window.getSelection().toString()},ListFiltering(){var e=this,t=document.getElementById("searchinput"),a=t.value;""!=e.GetSelectedValue&&(a=a.replaceAll(e.GetSelectedValue,""),e.GetSelectedValue="");var o=[],i=[];e.leftTabList.forEach(t=>{i.push(t),o=i.filter(t=>{var o=e.$t(t.title);return o.replace(/\W/g,"").toLowerCase().includes(a.replace(/\W/g,"").toLowerCase())})}),e.searchColumnfilter=o,i=[],o=[]}}}),n=s,r=(a("502a"),a("2877")),l=Object(r["a"])(n,o,i,!1,null,"2b7f3374",null);t["a"]=l.exports},c09d:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("loader",{attrs:{"is-visible":e.isLoading}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("LeftColumn"),a("div",{staticClass:"right-content"},[a("div",{staticClass:"tab-content"},[e._m(0),a("RightContent",{attrs:{moduleCode:e.moduleCode,subModuleCode:e.subModuleCode,primaryKeyforModule:e.primaryKeyforModule,addAPIUrl:e.addAPIUrl,ActionColunName:e.ActionColunName,addUserGuide:e.addUserGuide}})],1)])],1)])],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"expand-list"},[a("a",{staticClass:"expand-list-btn justify-content-center align-items-center",attrs:{href:"javascript:;"}},[a("i",{staticClass:"icon-solid arrow-solid-left text-white",staticStyle:{"font-size":"9pt"}})])])}],s=a("aae2"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("tg-list",{attrs:{IsShowAction:!1,showCheckBox:!0,ModuleName:"moduleCode",SubModuleCode:"subModuleCode",IdentityColumn:e.primaryKeyforModule,ListData:e.ListingData,HeaderData:e.Headers,HeaderButtons:e.Buttons,TotalRecords:e.TotalRecords,IsSearchFieldsOnTop:!1,SearchPosition:"top",SearchFields:e.topsearchField,RenderRowActionMethod:e.renderActions,ListDataCallBackFunction:e.FetchData,IsFilterApplied:!!e.searchCondition,LegendArray:[],sourcetype:"",NorecordfoundText:e.$t("NoRecordfound")},on:{LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,SortdataButtonClick:e.sortdata},scopedSlots:e._u([{key:"slotdata",fn:function(t){var o=t.data;return["s"==o.column.COLUMN_NAME?[null!=o.row.s.Name?[a("div",[e._v(e._s(o.row.s.Name))])]:[a("div",[e._v("--")])]]:e._e(),"start_time"==o.column.COLUMN_NAME?[null!=o.row.start_time?[a("div",[e._v(e._s(e.formatTime(o.row.start_time)))])]:[a("div",[e._v("--")])]]:e._e(),"end_time"==o.column.COLUMN_NAME?[null!=o.row.start_time?[a("div",[e._v(e._s(e.formatTime(o.row.end_time)))])]:[a("div",[e._v("--")])]]:e._e(),"shift_type"==o.column.COLUMN_NAME?[1==o.row.shift_type?[a("div",[e._v("Flexible")])]:e._e(),0==o.row.shift_type?[a("div",[e._v("Fixed")])]:e._e()]:e._e(),"break_types"==o.column.COLUMN_NAME?[1==o.row.break_types?[a("div",[e._v("Paid")])]:e._e(),0==o.row.break_types?[a("div",[e._v("UnPaid")])]:e._e()]:e._e(),"description"==o.column.COLUMN_NAME?[null!=o.row.description?[a("div",[e._v(e._s(o.row.description))])]:[a("div",[e._v("--")])]]:e._e(),"from_user_id"==o.column.COLUMN_NAME?[null!=o.row.from_user_id.Name?[a("div",[e._v(e._s(o.row.from_user_id.Name))])]:[a("div",[e._v("--")])]]:e._e(),"to_user_id"==o.column.COLUMN_NAME?[null!=o.row.to_user_id.Name?[a("div",[e._v(e._s(o.row.to_user_id.Name))])]:[a("div",[e._v("--")])]]:e._e(),"status_id"==o.column.COLUMN_NAME?[e.isCRMShowStausDrop(o.row.status_id,"COMPANYSETUP_UPDATE")?a("listing-status",{ref:"updatestatus",attrs:{isfor:"COMPANYSETUP_UPDATE",dataid:o.row[e.primaryKeyforModule],"data-controller":e.COMPANYSETUP_UPDATE,statuslist:e.StatusListForListing,item:o.row[e.primaryKeyforModule],"data-action":"index",module:e.moduleCode,subModule:e.subModuleCode,dataselected:"1001"==e.getStatus(o.row.status_id)?"Active":"Inactive",callbackfunction:e.FetchData,isselectedvaluestring:!0}}):e._e()]:e._e()]}}])}),e.showAddPopup?a("AddCompanySetup",{attrs:{recordId:e.recordId,title:e.$t("Manage ")+e.$t(e.subModuleCode),moduleName:e.moduleCode,emitName:"addReloadData",addApiUrl:e.addAPIUrl,subModule:e.subModuleCode,addUserGuide:e.addUserGuide},on:{close:function(t){e.showAddPopup=!1,e.recordId=0},addReloadData:function(t){e.FetchData(),e.showAddPopup=!1,e.recordId=0}}}):e._e()],1)},r=[],l=a("9769"),d=a("8dd4"),c=a("c1df"),u=a.n(c),m={components:{AddCompanySetup:d["a"]},props:{sourcetype:{type:String,required:!0},moduleCode:{type:String,required:!0},subModuleCode:{type:String,required:!0},primaryKeyforModule:{type:String,required:!0},addAPIUrl:{type:String,required:!0},ActionColunName:{type:String,required:!0},addUserGuide:{type:String}},data(){return{recordId:0,showAddPopup:!1,noRecord:!1,isLoading:!1,CompanyId:null,ListingData:[],TotalRecords:0,ShowManageView:!1,ShowAddCustomReportView:!1,PageSize:10,PageNumber:1,isPaged:1,TotalPages:0,searchCondition:"",conditionForInstantSearch:"",SortBy:"",SortExp:"",showsharereportview:!1,showemailreportview:!1,showschedulereportview:!1,foldername:"",folderid:"",LeadStatusList:[],searchcondition:"",PrimaryKeyId:null,privilegeParams:null,sharetype:"",Headers:[],filteredHeaders:[],StatusListForListing:[{STATUS:"Active",STATUS_ID:1001,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#28a745"},{STATUS:"Inactive",STATUS_ID:1002,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#d72435"}],Buttons:[{title:"Add",iconClass:"fa-plus",callbackfunction:"AddScreenPopup",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0},{id:"ActiveMultiple",title:"Active",iconClass:"fa-check",callbackfunction:"ActiveMultipleListing",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0},{id:"InactiveMultiple",title:"Inactive",iconClass:"fa-close",callbackfunction:"InactiveMultipleListing",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0},{id:"DeleteMultiple",title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",isdisabled:!0,isvisible:!0}],topsearchField:[{fieldName:"Search  ",fieldType:"text",fieldSearchConditionName:"",isSearch:!0,value:"",listOptions:[]}]}},async created(){var e=this;e.CompanyId=e.GetUserInfo.CompanyId,e.privilegeParams="controller=Break&action=",await e.FetchData(),e.getStatuslistForListing("Dynamic_Reporting","en")},computed:{filteredUserData(){return this.vueObj.UserData.map(e=>{const t={...e};return null!==t.USER_EMP_ID&&""!==t.USER_EMP_ID||(t.USER_EMP_ID="--"),t})}},mounted(){var e=this;e.topsearchField.forEach(e=>{e.value="",e.isSearch=!1})},updated(){const e=document.getElementsByClassName("theme-primary partition p-actions-expand");if(e[0]&&"p-name text-white"!=e[0].lastChild.className){const t=document.createElement("span");t.className="p-name text-white",t.textContent=this.$t(this.subModuleCode),e[0].appendChild(t)}},methods:{getStatus:function(e){try{const t=JSON.parse(e);return t.value}catch(t){return console.error("Error parsing status_id:",t),e}},formatTime(e){return e?u()(e).format("hh:mm A"):"--"},renderActions:function(e){console.log(e)},commonHeaderButtonClick:function(e){switch(e.callbackfunction){case"commonDeleteData":this.commonDeleteData();break;case"ActiveMultipleListing":console.log("Active"),this.UpdateStatus("Active");break;case"InactiveMultipleListing":console.log("Inactive"),this.UpdateStatus("Inactive");break;case"AddScreenPopup":this.showAddPopup=!0;break}},sortdata:async function(e){var t="sort tb_headerSortDown";this.SortBy=e,e===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",t="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",t="sort tb_headerSortUp"):(this.SortExp="ASC",t="sort tb_headerSortDown")),await this.FetchData(),$("#th-"+e+"  span:first-child").attr("class",t)},pagerMethod:async function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,await this.FetchData()},leftCommonSearch:async function(e){var t=this;console.log(t.searchCondition),this.PageNumber=e.PageNumber,this.isPaged=1,"undefined"!=typeof e.searchCondition?this.searchCondition=e.searchCondition:this.searchCondition="",await this.FetchData()},commonDeleteData:function(e){var t=this,a="";$(".chkItems:checkbox:checked").not("[id^='chkAll_0']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0?t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("Report"),(function(){var e={ids:a,moduleName:t.moduleCode,subModuleCode:t.subModuleCode,refCode:"COMPANYSETUP_DELETE"},o=JSON.stringify(e);l["a"].CommonDeleteData(o).then((async function(e){200==e.status?($(".chkItems:checkbox:checked,#chkAll_0").prop("checked",!1).removeAttr("checked"),$("#DeleteMultiple").addClass("disabled"),t.ShowAlert(t.$t("DeletedSuccessfully",[t.$t("Report")]),"success",!0,t.$t("Alert")),t.PageNumber=parseInt(t.PageNumber)-1,t.PageNumber<=0&&(t.PageNumber=1),await t.FetchData()):t.ShowAlert(t.$t("DeletedError",[t.$t("Report")]),"success",!0,t.$t("Alert"))}))})):t.ShowAlert(t.$t("Selectanyrecordtodelete"))},UpdateStatus:async function(e){var t=this;e="Active"==e?1001:1002;var a="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0&&t.confirmR(t.$t("AreYouSureToUpdateStatus"),!0,t.$t("update")+"  "+t.$t("status"),(function(){var o={ID:a,StatusId:e,IsFor:"COMPANYSETUP_UPDATE",Module:t.moduleCode,Submodule:t.subModuleCode},i=JSON.stringify(o);l["a"].CommonUpdateStatus(i).then(e=>{200==e.status&&($(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),t.ShowAlert(t.$t("RecordUpdatedSuccessfully",[t.$t("Report")]),"success",!0,t.$t("Alert")),t.FetchData())})}))},getRequestParams:function(e,t,a,o,i,s){let n={};return e&&(n["pageNumber"]=e),s&&(n["searchcondition"]=s),i&&(n["is_paged"]=i),a&&(n["sortBy"]=a),o&&(n["sortExp"]=o),t&&(n["pageSize"]=t),n},clickEventOfColumn:function(e,t){var a=this;"title"==t.COLUMN_NAME&&"AnnouncementMessage"==a.moduleCode?(this.recordId=e.id,this.showAddPopup=!0):"title"==t.COLUMN_NAME&&"Review"==a.moduleCode?(this.recordId=e.review_template_id,this.showAddPopup=!0):"title"==t.COLUMN_NAME&&"Skill"==a.moduleCode?(this.recordId=e.skill_id,this.showAddPopup=!0):"stage_name"==t.COLUMN_NAME&&"Stage"==a.moduleCode?(this.recordId=e.stage_id,this.showAddPopup=!0):t.COLUMN_NAME==a.ActionColunName&&(this.recordId=e[a.primaryKeyforModule],this.showAddPopup=!0)},FetchData:async function(){var e=this;this.isLoading=!0;var t=`CompanyId=${e.CompanyId}&pageSize=${e.PageSize}&pageNum=${e.PageNumber}&sortBy=${e.SortBy}&sortExp=${e.SortExp}&searchQuery=${e.searchCondition.trim()}&module=${e.moduleCode}&submodule=${e.subModuleCode}`;let a=e.getServiceMethod(e.moduleCode,e.subModuleCode);await a(t).then((function(t){e.Headers=t.data.FieldSchema,e.Headers.forEach(t=>{t.DISPLAY_NAME=e.$t(t.DISPLAY_NAME),"status_id"==t.COLUMN_NAME&&(t.settings={isInSlot:!0}),"Shift"==e.moduleCode&&"start_time"==t.COLUMN_NAME&&(t.settings={isInSlot:!0}),"Shift"==e.moduleCode&&"end_time"==t.COLUMN_NAME&&(t.settings={isInSlot:!0}),"Shift"==e.moduleCode&&"shift_type"==t.COLUMN_NAME&&(t.settings={isInSlot:!0}),"Break"==e.moduleCode&&"break_types"==t.COLUMN_NAME&&(t.settings={isInSlot:!0}),t.COLUMN_NAME==e.ActionColunName&&(e.topsearchField.map(e=>e.fieldSearchConditionName=[t.COLUMN_NAME]),t.settings={clickEvent:e.clickEventOfColumn,formatter:e.columnDataFormatter}),t.COLUMN_NAME==e.primaryKeyforModule&&(t.VISIBLE=!1)}),""!=t.data.Data&&null!=t.data.Data?t.data.Data.length>0?(e.ListingData=t.data.Data,e.ListingData.forEach((t,a)=>{"Department"==e.moduleCode&&"Department"==e.subModuleCode?t.is_visibile_to_client=1==t.is_visibile_to_client?"Yes":"No":"Category"==e.moduleCode&&"Category"==e.subModuleCode?t.category_type_id=null!=JSON.parse(t.category_type_id).Name?JSON.parse(t.category_type_id).Name:"--":"ContactType"==e.moduleCode&&"ContactType"==e.subModuleCode?t.type=null!=JSON.parse(t.type).Name?JSON.parse(t.type).Name:"--":"ProvisionalRight"==e.moduleCode&&"ProvisionalRight"==e.subModuleCode?e.ListingData.forEach(e=>{e.from_user_id=null!=JSON.parse(e.from_user_id).Name?JSON.parse(e.from_user_id).Name:"--",e.to_user_id=null!=JSON.parse(e.to_user_id).Name?JSON.parse(e.to_user_id).Name:"--"}):"Stage"==e.moduleCode&&"Stage"==e.subModuleCode?t.phase_id=null!=JSON.parse(t.phase_id).Name?JSON.parse(t.phase_id).Name:"--":"Status"==e.moduleCode&&"Status"==e.subModuleCode?t.status_type_id=null!=JSON.parse(t.status_type_id).Name?JSON.parse(t.status_type_id).Name:"--":"User"==e.moduleCode&&"UserTitle"==e.subModuleCode?t.modified_by=null!=JSON.parse(t.modified_by).Name?JSON.parse(t.modified_by).Name:"--":"Company"==e.moduleCode&&"Feedback"==e.subModuleCode?t.type_code=null!=JSON.parse(t.type_code).Name?JSON.parse(t.type_code).Name:"--":"Location"==e.moduleCode&&"Location"==e.subModuleCode&&(t.location_country=null!=JSON.parse(t.location_country).Name?JSON.parse(t.location_country).Name:"--",t.location_state=null!=JSON.parse(t.location_state).Name?JSON.parse(t.location_state).Name:"--"),t.created_by=JSON.parse(t.created_by).Name}),e.TotalRecords=e.ListingData[0].total_records,e.TotalPages=Math.ceil(e.TotalRecords/e.PageSize),e.CurrentPage=e.PageNumber,e.noRecord=!1):(e.ListingData=[],e.noRecord=!0,e.TotalRecords=0):(e.noRecord=!0,e.ListingData=[],e.TotalRecords=0),setTimeout((function(){e.ResponsiveDataTable("tablelistingdata")}),500),e.isLoading=!1}))},closeModalSharePopup:function(){$("#modalshareview").modal("hide"),this.showsharereportview=!1},getStatuslistForListing:function(e,t){var a=this,o="langCode="+t+"&statusType="+e+"&hasglobal=true";l["a"].statusdropdown(o).then((function(e){if("Success"==e.data.status){var t=e.data.result;a.StatusListForListing=t.data}}))},getServiceMethod:function(e,t){return"AnnouncementMessage"==e&&"AnnouncementMessage"==t?l["a"].AnnouncementMessageListing:"Break"==e&&"Break"==t?l["a"].BreakListing:"Channel"==e&&"Channel"==t?l["a"].ChannelListing:"Category"==e&&"Category"==t?l["a"].CategoryListing:"ContactType"==e&&"ContactType"==t?l["a"].ContactTypeListing:"Department"==e&&"Department"==t?l["a"].DepartmentListing:"Designation"==e&&"Designation"==t?l["a"].DesignationListing:"Company"==e&&"Feedback"==t?l["a"].FeedbackListing:"Company"==e&&"Greeting"==t?l["a"].GreetingListing:"Immigration"==e&&"Passport"==t?l["a"].ImmigrationListing:"IndustryTypes"==e&&"IndustryTypes"==t?l["a"].IndustryTypeListing:"Location"==e&&"Location"==t?l["a"].LocationListing:"LoginAuthorization"==e&&"LoginAuthorization"==t?l["a"].LoginAuthorizationListing:"PaymentGateway"==e&&"PaymentGateway"==t?l["a"].PaymentGatewayListing:"ProvisionalRight"==e&&"ProvisionalRight"==t?l["a"].ProvisionalRightListing:"Review"==e&&"PerformanceReview"==t?l["a"].ReviewTemplateListing:"Shift"==e&&"Shift"==t?l["a"].ShiftListing:"Skill"==e&&"Skill"==t?l["a"].SkillListing:"Stage"==e&&"Stage"==t?l["a"].StageListing:"User"==e&&"UserTitle"==t?l["a"].UserTitleListing:"Status"==e&&"Status"==t?l["a"].StatusListing:"Appointment"==e&&"Service"==t?l["a"].ServiceListing:void 0}}},p=m,h=a("2877"),f=Object(h["a"])(p,n,r,!1,null,null,null),g=f.exports,C={components:{LeftColumn:s["a"],RightContent:g},props:{moduleCode:{type:String,default:""},subModuleCode:{type:String,default:""},primaryKeyforModule:{type:String,default:""},addAPIUrl:{type:String,required:!0},ActionColunName:{type:String,required:!0},addUserGuide:{type:String,required:!0}}},S=C,_=Object(h["a"])(S,o,i,!1,null,null,null);t["a"]=_.exports},f372:function(e,t,a){var o=a("8cc6");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=a("499e").default;i("5279c6f0",o,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=chunk-cc687806.js.map