(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d3cc90d"],{2529:function(e,t,a){var i=a("611c");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=a("499e").default;o("3cc447c8",i,!0,{sourceMap:!1,shadowMode:!1})},"36e6":function(e,t,a){"use strict";a("2529")},"3ab3":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("loader",{attrs:{"is-visible":e.isLoading}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-2 mt-2"},[a("LeftColumn")],1),a("div",{staticClass:"col-10"},[a("tg-list",{attrs:{IsShowAction:!1,showCheckBox:!0,ModuleName:"Dynamic_Reporting",SubModuleCode:"Dynamic_Reporting",IdentityColumn:"holiday_id",HeaderText:e.$t("CompanyHoliday"),ListData:e.CompanyHolidayData,HeaderData:e.filteredHeaders,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,IsSearchFieldsOnTop:!1,SearchPosition:"top",SearchFields:e.topSearchFields,RenderRowActionMethod:e.renderActions,ListDataCallBackFunction:e.FetchData,IsFilterApplied:!!e.searchCondition,LegendArray:[],sourcetype:"",NorecordfoundText:e.$t("NoRecordfound")},on:{LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,ActionButtonClick:e.actionButtonClick,SortdataButtonClick:e.sortdata},scopedSlots:e._u([{key:"slotdata",fn:function(t){var i=t.data;return["status_id"==i.column.COLUMN_NAME?[e.isCRMShowStausDrop(i.row.status_id,"COMPANYSETUP_UPDATE")?a("listing-status",{ref:"updatestatus",attrs:{isfor:"COMPANYSETUP_UPDATE",dataid:i.row.holiday_id,"data-controller":"COMPANYSETUP_UPDATE",statuslist:e.StatusListForListing,item:i.row.holiday_id,"data-action":"index",module:"Company",subModule:"CompanyHoliday",dataselected:1001==i.row.status_id.value?"Active":"Inactive",callbackfunction:e.FetchData,isselectedvaluestring:!0}}):e._e()]:e._e()]}}])})],1)]),e.showCompanyHoliday?a("AddCompanySetup",{attrs:{recordId:e.recordId,title:e.$t("Manage Company Holiday"),moduleName:"Company",emitName:"addReloadData",addApiUrl:"/CompanyHoliday/add",addUserGuide:"User_Guide_Company_Holiday",subModule:"CompanyHoliday"},on:{close:function(t){e.showCompanyHoliday=!1,e.recordId=0},addReloadData:function(t){e.FetchData(),e.showCompanyHoliday=!1,e.recordId=0}}}):e._e(),e.showCompanyHolidayList?a("CompanyHolidayList",{attrs:{title:e.$t("Holiday Bank"),CompanyHolidayData:e.CompanyHolidayData,moduleName:"Company",emitName:"addReloadData",addApiUrl:"/CompanyHoliday/add",addUserGuide:"User_Guide_Company_Holiday",subModule:"CompanyHoliday"},on:{close:function(t){e.showCompanyHolidayList=!1,e.recordId=0}}}):e._e()],1)},o=[],l=(a("14d9"),a("b7ef"),a("9769"));let s=[{title:"Holiday Bank",iconClass:"fa-gears",callbackfunction:"ShowHolidayList",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0},{title:"Add",iconClass:"fa-plus",callbackfunction:"AddDepartment",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0},{id:"ActiveMultiple",title:"Active",iconClass:"fa-check",callbackfunction:"ActiveMultipleListing",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0},{id:"InactiveMultiple",title:"Inactive",iconClass:"fa-close",callbackfunction:"InactiveMultipleListing",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0},{id:"DeleteMultiple",title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",isdisabled:!0,isvisible:!0}],n=[{fieldName:"Name",fieldType:"text",fieldSearchConditionName:["holiday_name"],isSearch:!1},{fieldName:"Location",fieldType:"ddl-check",fieldIcon:"fa-map-marker",fieldSearchConditionName:["location"],isSearch:!1,value:null,listOptions:[]},{fieldName:"Holiday For",fieldType:"ddl-check",fieldIcon:"fa-file",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[{name:"Company",value:1},{name:"Contact",value:0}]},{fieldName:"Holiday Source",fieldType:"ddl-check",fieldIcon:"fa-file",fieldSearchConditionName:["holiday_source"],isSearch:!1,value:"",listOptions:[{name:"Holiday Bank",value:"holidaybank"},{name:"Manual",value:"manual"}]},{fieldName:"Date Range From (M/D/YYYY)",fieldType:"date",fieldIcon:"fa-calendar",fieldSearchConditionName:["holiday_date"],isSearch:!1,value:"",datePickerConfig:{formate:"yyyy-mm-dd"}},{fieldName:"Date Range To (M/D/YYYY)",fieldType:"date",fieldIcon:"fa-calendar",fieldSearchConditionName:["holiday_date"],isSearch:!1,value:"",datePickerConfig:{formate:"yyyy-mm-dd"}},{fieldName:"Client",fieldType:"ddl-check",fieldIcon:"fa-user",fieldSearchConditionName:["REP.MODIFIED_BY"],isSearch:!1,value:"",listOptions:[]}],d=[{fieldName:"Search",fieldType:"text",fieldIcon:"fa-file",fieldSearchConditionName:["Bank_Holiday_Name"],isSearch:!0,value:"",listOptions:[]}],r=[{COLUMN_NAME:"Bank_Holiday_Name",DATA_TYPE:"Text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Holiday Name",DISPLAY_ORDER:1},{COLUMN_NAME:"Bank_Holiday_Desc",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Holiday Description",DISPLAY_ORDER:2},{COLUMN_NAME:"IsRecurring",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Recurring",DISPLAY_ORDER:3},{COLUMN_NAME:"Bank_Holiday_Type",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Holiday Type",DISPLAY_ORDER:4}],c=[{title:"Edit",callbackfunction:"editreport",icon:"fa fa-pencil text-success action-icon",additionalSpan:""},{title:"Delete",callbackfunction:"delete",icon:"fa fa-trash-o action-icon",additionalSpan:""}];function u(e,t,a){var i=e;let o=a,s={};s["moduleName"]=t,s["type"]=a,l["a"].GetMainReportSearching(o).then((function(e){var t=e.data;console.log("folderid",t),null!=t&&("FOLDER_NAME"==a&&(i.leftSearchFields[4].listOptions=t.map(e=>{const t={};return t.name=e.FOLDER_NAME,t.value=e.FOLDER_ID.toString(),t}),i.LeadStatusList=t.map(e=>{const t={};return t.name=e.FOLDER_NAME,t.value=e.FOLDER_ID.toString(),t})),"CREATED_BY"==a&&(i.leftSearchFields[3].listOptions=t.map(e=>{const t={};return t.name=e.CREATED_BY,t.value=e.CREATED_ID.toString(),t}),i.LeadStatusList=t.map(e=>{const t={};return t.name=e.CREATED_BY,t.value=e.CREATED_ID.toString(),t})),"MODIFIED_BY"==a&&(i.leftSearchFields[7].listOptions=t.map(e=>{const t={};return t.name=e.MODIFIED_BY,t.value=e.MODIFIED_ID.toString(),t}),i.LeadStatusList=t.map(e=>{const t={};return t.name=e.MODIFIED_BY,t.value=e.MODIFIED_ID.toString(),t})))}))}function h(){var e=this,t="RequestFrom=COMPANY_PARENT_LOCATION";l["a"].CompanyHolidayMultipleLocation(t).then((function(t){""!=t.data.result&&null!=t.data.result&&t.data.result.length>0&&t.data.result.forEach(t=>{let a={value:t.COMPANY_LOCATION_ID,name:t.LOCATION_NAME};e.topsearchSchema[1].listOptions.push(a)})}))}var m={buttons:s,topsearchSchema:n,topSearchHolidaySchema:d,holidayColumnSchema:r,listActions:c,bindleftCommonSearchdropdown:u,LocationbindleftCommonSearchdropdown:h},p=a("8dd4"),f=a("aae2"),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"my-popups"},[a("div",{staticClass:"modal d-block "},[a("div",{staticClass:"modal-dialog ui-draggable",staticStyle:{display:"inline-block"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header ui-draggable-handle"},[a("h5",{staticClass:"modal-title",attrs:{id:"ui-id-26"}},[e._v(e._s(e.title))]),a("button",{staticClass:"close",attrs:{type:"button",title:"","data-original-title":"Close"},on:{click:function(t){return e.$emit("close")}}},[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"modal-body",staticStyle:{height:"auto","min-height":"0px","max-height":"none"},attrs:{id:"backgroundPopup"}},[a("section",{staticClass:"main-content",attrs:{id:"main-content"}},[a("section",{staticClass:"main-content"},[a("div",{staticClass:"container-fluid p-0"},[a("div",{staticClass:"p-0"},[a("dynamic-form",{ref:"dynamicForm",staticClass:"daterangecontrolHS",attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.SaveHolidayBank},scopedSlots:e._u([e.showContractDiv?{key:"tgslot-AvailableClientsLang",fn:function(t){t.data;return[a("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left p-0"},[a("div",{staticClass:"col-lg-12 float-left",staticStyle:{display:"block"},attrs:{id:"divContract"}},[a("input",{attrs:{id:"hdnSelectedContractsEdit",type:"hidden",value:""}}),a("div",{staticClass:"col-12 p-0 d-flex flex-wrap mb-2"},[a("div",{staticClass:"mover-panel-box",attrs:{id:"divAvailableColumnsAll"}},[a("div",{staticClass:"row m-0"},[a("div",{staticClass:"heading-border"},[a("h5",{staticClass:"h5"},[a("span",[e._v("Available Clients Lang")])])]),a("div",{staticClass:"pt-2 d-inline-block w-100"},[a("div",{staticClass:"col-12 p-0 mt-0"},[a("div",{staticClass:"col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 float-left pr-1 pl-0"},[a("input",{staticClass:"form-control",attrs:{id:"txtAvailableColumnsInSetup",maxlength:"50",type:"text",placeholder:"Search",autocomplete:"off"}})]),a("div",{staticClass:"col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 float-left pl-0"},[a("div",{staticClass:"search-btm-btn background-0 text-left form-check-inline"},[a("a",{staticClass:"btn btn-success mr-1 px-4",attrs:{title:"",id:"ancSearchAvailableColumnsInSetup",href:"javascript:;","data-toggle-tooltip":"tooltip","data-original-title":"Search"}},[a("i",{staticClass:"fa fa-search"})]),a("a",{staticClass:"btn btn-danger px-4",attrs:{href:"javascript:;",title:"",id:"ancClearAvailableColumnsInSetup","data-toggle-tooltip":"tooltip","data-original-title":"Clear"}},[a("i",{staticClass:"fa fa-refresh"})])])])])]),a("div",{staticClass:"w-100 mt-2",staticStyle:{display:"none"}},[a("div",{staticClass:"input-group d-flex mt-1"},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",staticStyle:{display:"none"},attrs:{type:"checkbox",id:"chk_62"}}),a("label",{staticClass:"custom-control-label universal-custom-control-label pt-1",attrs:{for:"chk_62"}})]),e._v("Select All ")])]),a("div",{staticClass:"w-100 table-responsive mt-1 listingcontrol",staticStyle:{height:"360px"},attrs:{id:"columns"}},[a("ul",{staticClass:"list-group"},[a("li",{staticClass:"norecords list-group-item",staticStyle:{display:"block"},attrs:{id:"norecordAvailable"}},[a("div",{staticClass:"text-danger text-center no-record"},[e._v("No record(s) found")])])])])])]),a("div",{staticClass:"mover-controls ancArrowdata"},[a("button",{attrs:{type:"button",id:"aMoveAllColumnArrow","data-toggle-tooltip":"tooltip",title:"","data-original-title":"Move All Right"}},[a("i",{staticClass:"fa fa-angle-double-down fa-2x d-md-none",attrs:{"aria-hidden":"true"}}),a("i",{staticClass:"fa fa-angle-double-right fa-2x d-none d-md-block",attrs:{"aria-hidden":"true"}})]),a("button",{attrs:{type:"button",id:"aColumnArrow","data-toggle-tooltip":"tooltip",title:"","data-original-title":"Move Right"}},[a("i",{staticClass:"fa fa-angle-down fa-2x d-md-none",attrs:{"aria-hidden":"true"}}),a("i",{staticClass:"fa fa-angle-right fa-2x d-none d-md-block",attrs:{"aria-hidden":"true"}})]),a("button",{attrs:{type:"button",id:"aColumnRemoveArrow","data-toggle-tooltip":"tooltip",title:"","data-original-title":"Move Left"}},[a("i",{staticClass:"fa fa-angle-up fa-2x d-md-none",attrs:{"aria-hidden":"true"}}),a("i",{staticClass:"fa fa-angle-left fa-2x d-none d-md-block",attrs:{"aria-hidden":"true"}})]),a("button",{attrs:{type:"button",id:"aMoveAllColumnRemoveArrow","data-toggle-tooltip":"tooltip",title:"","data-original-title":"Move All Left"}},[a("i",{staticClass:"fa fa-angle-double-up fa-2x d-md-none",attrs:{"aria-hidden":"true"}}),a("i",{staticClass:"fa fa-angle-double-left fa-2x d-none d-md-block",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"mover-panel-box",attrs:{id:"divAvailableColumnsAll"}},[a("div",{staticClass:"row m-0"},[a("div",{staticClass:"heading-border"},[a("h5",{staticClass:"h5"},[a("span",[e._v("Selected Clients Lang")])])]),a("div",{staticClass:"pt-2 d-inline-block w-100"},[a("div",{staticClass:"col-12 p-0 mt-0"},[a("div",{staticClass:"col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 float-left pr-1 pl-0"},[a("input",{staticClass:"form-control",attrs:{id:"txtSelectedColumnsInSetup",maxlength:"50",type:"text",placeholder:"Search",autocomplete:"off"}})]),a("div",{staticClass:"col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 float-left pl-0"},[a("div",{staticClass:"search-btm-btn background-0 text-left form-check-inline"},[a("a",{staticClass:"btn btn-success mr-1 px-4",attrs:{title:"",id:"ancSearchSelectedColumnsInSetup",href:"javascript:;","data-toggle-tooltip":"tooltip","data-original-title":"Search"}},[a("i",{staticClass:"fa fa-search"})]),a("a",{staticClass:"btn btn-danger px-4",attrs:{href:"javascript:;",title:"",id:"ancClearSelectedColumnsInSetup","data-toggle-tooltip":"tooltip","data-original-title":"Clear"}},[a("i",{staticClass:"fa fa-refresh"})])])])])]),a("div",{staticClass:"w-100 table-responsive mt-2 listingcontrol"},[a("ul",{staticClass:"list-group",staticStyle:{height:"360px","overflow-y":"auto"},attrs:{id:"visiblecolumn"}},[a("li",{staticClass:"norecords list-group-item ui-sortable-handle",attrs:{id:"norecordVisibleColumn"}},[a("div",{staticClass:"text-danger text-center no-record"},[e._v("No record(s) found")])])])]),a("div",{staticClass:"w-100 float-left"},[a("span",{staticClass:"invalid-feedback",staticStyle:{display:"none"},attrs:{id:"spnselectedContracts"}},[e._v("Client is required")])])])])])])])]}}:null,{key:"tgslot-AvailableHolidayListing",fn:function(t){t.data;return[a("tg-list",{attrs:{IsShowAction:!1,showCheckBox:!0,ModuleName:"Company",SubModuleCode:"CompanyHoliday",IdentityColumn:"Bank_Holiday_Id",HeaderText:e.$t("CompanyHoliday"),ListData:e.CompanyHolidayListData,HeaderData:e.holidayColumnNames,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,IsSearchFieldsOnTop:!1,SearchPosition:"top",SearchFields:e.SearchHolidayFields,RenderRowActionMethod:e.renderActions,ListDataCallBackFunction:e.FetchData,IsFilterApplied:!!e.searchCondition,LegendArray:[],sourcetype:"",NorecordfoundText:e.$t("NoRecordfound")},on:{LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,ActionButtonClick:e.actionButtonClick,SortdataButtonClick:e.sortdata},scopedSlots:e._u([{key:"slotdata",fn:function(t){var i=t.data;return["IsRecurring"==i.column.COLUMN_NAME?[a("div",{staticClass:"form-group mb-0"},[a("label",{staticClass:"switch"},[a("input",{directives:[{name:"model",rawName:"v-model",value:i.row.IsRecurring,expression:"data.row.IsRecurring"},{name:"disabled",rawName:"v-disabled",value:e.disabled,expression:"disabled"}],staticClass:"form-check-input custom-control-input dynamic",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(i.row.IsRecurring)?e._i(i.row.IsRecurring,null)>-1:i.row.IsRecurring},on:{change:[function(t){var a=i.row.IsRecurring,o=t.target,l=!!o.checked;if(Array.isArray(a)){var s=null,n=e._i(a,s);o.checked?n<0&&e.$set(i.row,"IsRecurring",a.concat([s])):n>-1&&e.$set(i.row,"IsRecurring",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(i.row,"IsRecurring",l)},function(t){return e.checkForAutoCreateEnable(i.row,"IsRecurring")}]}}),a("span",{staticClass:"slider round",staticStyle:{cursor:"default"}},[a("span",{staticClass:"slider-yes"},[e._v(e._s(e.$t("Yes")))]),a("span",{staticClass:"slider-no"},[e._v(e._s(e.$t("No")))])])])])]:e._e(),"Bank_Holiday_Type"==i.column.COLUMN_NAME?[a("div",{staticClass:"custom-control custom-radio custom-control-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:i.row.IsFixedDate,expression:"data.row.IsFixedDate"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"radiofixed"+i.row.Bank_Holiday_Id,name:"radioholidaytype"+i.row.Bank_Holiday_Id},domProps:{value:1,checked:e._q(i.row.IsFixedDate,1)},on:{change:[function(t){return e.$set(i.row,"IsFixedDate",1)},function(t){return e.checkForAutoCreateEnable(i.row,"IsFixedDate")}]}}),a("label",{staticClass:"custom-control-label",class:{disabled:i.row.Old_Holiday_id>0&&null!=i.row.Old_Holiday_id},attrs:{for:"radiofixed"+i.row.Bank_Holiday_Id}},[e._v("Fixed")])]),a("div",{staticClass:"custom-control custom-radio custom-control-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:i.row.IsFixedDate,expression:"data.row.IsFixedDate"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"radioObserved"+i.row.Bank_Holiday_Id,name:"radioholidaytype"+i.row.Bank_Holiday_Id},domProps:{value:0,checked:e._q(i.row.IsFixedDate,0)},on:{change:[function(t){return e.$set(i.row,"IsFixedDate",0)},function(t){return e.checkForAutoCreateEnable(i.row,"IsFixedDate")}]}}),a("label",{staticClass:"custom-control-label",class:{disabled:i.row.Old_Holiday_id>0&&null!=i.row.Old_Holiday_id},attrs:{for:"radioObserved"+i.row.Bank_Holiday_Id}},[e._v("Observed")])])]:e._e()]}}],null,!0)})]}}],null,!0)})],1)])])])])])])])])])},y=[],C=a("ed09"),v=a("7bb1"),b=(a("b9b9"),a("2b0e")),S={name:"Toggle",emits:["input","update:modelValue","change"],props:{value:{validator:function(e){return e=>-1!==["number","string","boolean"].indexOf(typeof e)||null==e},required:!1},modelValue:{validator:function(e){return e=>-1!==["number","string","boolean"].indexOf(typeof e)||null==e},required:!1},id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1},aria:{required:!1,type:Object,default:()=>({})}},setup(e,t){const a=function(e,t,a){const{value:i,modelValue:o,falseValue:l,trueValue:s,disabled:n}=Object(b["toRefs"])(e),d=o&&void 0!==o.value?o:i,r=Object(b["computed"])(()=>d.value===s.value),c=e=>{t.emit("input",e),t.emit("update:modelValue",e),t.emit("change",e)},u=()=>{c(s.value)},h=()=>{c(l.value)};return-1!==[null,void 0,!1,0,"0","off"].indexOf(d.value)&&-1===[l.value,s.value].indexOf(d.value)&&h(),-1!==[!0,1,"1","on"].indexOf(d.value)&&-1===[l.value,s.value].indexOf(d.value)&&u(),{externalValue:d,checked:r,update:c,check:u,uncheck:h,handleInput:e=>{c(e.target.checked?s.value:l.value)},handleClick:()=>{n.value||(r.value?h():u())}}}(e,t),i=function(e,t,a){const{trueValue:i,falseValue:o,onLabel:l,offLabel:s}=Object(b["toRefs"])(e),n=a.checked,d=a.update;return{label:Object(b["computed"])(()=>{let e=n.value?l.value:s.value;return e||(e="&nbsp;"),e}),toggle:()=>{d(n.value?o.value:i.value)},on:()=>{d(i.value)},off:()=>{d(o.value)}}}(e,0,{checked:a.checked,update:a.update}),o=function(e,t,a){const i=Object(b["toRefs"])(e),o=i.disabled,l=a.checked,s=Object(b["computed"])(()=>({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label",...i.classes.value}));return{classList:Object(b["computed"])(()=>({container:s.value.container,toggle:[s.value.toggle,o.value?l.value?s.value.toggleOnDisabled:s.value.toggleOffDisabled:l.value?s.value.toggleOn:s.value.toggleOff],handle:[s.value.handle,o.value?l.value?s.value.handleOnDisabled:s.value.handleOffDisabled:l.value?s.value.handleOn:s.value.handleOff],label:s.value.label}))}}(e,0,{checked:a.checked}),l=function(e,t,a){const{disabled:i}=Object(b["toRefs"])(e),o=a.check,l=a.uncheck,s=a.checked;return{handleSpace:()=>{i.value||(s.value?l():o())}}}(e,0,{check:a.check,uncheck:a.uncheck,checked:a.checked});return{...a,...o,...i,...l}}};const _=["tabindex","aria-checked","aria-describedby","aria-labelledby"],D=["id","name","value","checked","disabled"],k=["innerHTML"],A=["checked"];S.render=function(e,t,a,i,o,l){return Object(b["openBlock"])(),Object(b["createElementBlock"])("div",Object(b["mergeProps"])({class:e.classList.container,tabindex:a.disabled?void 0:0,"aria-checked":e.checked,"aria-describedby":a.describedby,"aria-labelledby":a.labelledby,role:"switch"},a.aria,{onKeypress:t[1]||(t[1]=Object(b["withKeys"])(Object(b["withModifiers"])((...t)=>e.handleSpace&&e.handleSpace(...t),["prevent"]),["space"]))}),[Object(b["withDirectives"])(Object(b["createElementVNode"])("input",{type:"checkbox",id:a.id,name:a.name,value:a.trueValue,checked:e.checked,disabled:a.disabled},null,8,D),[[b["vShow"],!1]]),Object(b["createElementVNode"])("div",{class:Object(b["normalizeClass"])(e.classList.toggle),onClick:t[0]||(t[0]=(...t)=>e.handleClick&&e.handleClick(...t))},[Object(b["createElementVNode"])("span",{class:Object(b["normalizeClass"])(e.classList.handle)},null,2),Object(b["renderSlot"])(e.$slots,"label",{checked:e.checked,classList:e.classList},()=>[Object(b["createElementVNode"])("span",{class:Object(b["normalizeClass"])(e.classList.label),innerHTML:e.label},null,10,k)]),a.required?(Object(b["openBlock"])(),Object(b["createElementBlock"])("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:e.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,A)):Object(b["createCommentVNode"])("v-if",!0)],2)],16,_)},S.__file="src/Toggle.vue";a("c1df");Object(v["c"])("required",{validate(e){return console.log("checkk"),{required:!0,valid:-1===["",null,void 0].indexOf(e)}},message:"The {_field_} is required"});var I=Object(C["defineComponent"])({components:{ValidationObserver:v["a"],ValidationProvider:v["b"],Toggle:S},props:{CompanyHolidayData:{type:Array},addApiUrl:{type:String},emitName:{type:String},moduleName:{type:String},subModule:{type:String},title:{type:String},recordId:{type:Number},addUserGuide:{type:String}},data(){return{startTime:null,endTime:null,hoursDifference:null,fileData:[],CompanyHolidayListData:[],SearchHolidayFields:m.topSearchHolidaySchema,holidayColumnNames:m.holidayColumnSchema,editor:this.CLASSIC_EDITOR,department:{name:"",status:{name:"active",id:1},visibaleToclients:!1,visibaleToTicting:!1,description:""},buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save",isVisible:!0,onClick:this.SaveHolidayBank},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.closePopup}],FormSchema:[{layoutType:"triple",Data:[{astype:"SelectField",label:this.$t("HBLocation"),name:"Select Location",value:"",placeholder:"",config:{options:[],showAddIcon:!1},validationRules:"required",disabled:!1},{astype:"CheckBoxField",label:"",name:"HolidayList",value:"",placeholder:"",config:{options:[{name:"Company",value:"Company"},{name:"Client",value:"Client"}],showAddIcon:!1,onChange:this.GetCheckBoxValue},validationRules:""},{astype:"RadioField",label:this.$t("SelectYear"),name:"SelectYear",value:"2024",placeholder:"",visibility:!0,config:{options:[{value:2023,name:"Preview Year (2023)"},{value:2024,name:"Current Year (2024)"},{value:2025,name:"Next Year (2025)"}],showAddIcon:!1,onChange:this.GetRadioValue},validationRules:""}]},{layoutType:"single",Data:[{astype:"SlotField",label:"",name:"AvailableClientsLang",value:"",placeholder:"",config:{options:[],showAddIcon:!1},validationRules:""}]},{layoutType:"single",Data:[{astype:"SlotField",label:"",name:"AvailableHolidayListing",value:"",placeholder:"",config:{options:[],showAddIcon:!1},validationRules:""}]}],isLoading:!1,showContractDiv:!1,GetSaveHolidayData:[]}},created:async function(){await this.FetchData(),await this.GetLocationDDL()},methods:{checkForAutoCreateEnable(e){var t=this,a=t.GetSaveHolidayData.find(t=>t.holidaybank_id===e.Bank_Holiday_Id);void 0!=a?(a.IsRecurring=0==e.IsRecurring?0:1,a.IsFixedDate=e.IsFixedDate):t.GetSaveHolidayData.push({client_id:"",locations:t.FormSchema[0].Data[0].value,holidaybank_id:e.Bank_Holiday_Id,country_id:e.Bank_Holiday_Country_Id,IsRecurring:0==e.IsRecurring?0:1,IsFixedDate:e.IsFixedDate})},async GetLocationDDL(){var e=this,t="RequestFrom=COMPANY_PARENT_LOCATION";await l["a"].CompanyHolidayMultipleLocation(t).then((function(t){""!=t.data.result&&null!=t.data.result&&t.data.result.length>0&&(t.data.result.forEach(t=>{e.FormSchema[0].Data[0].config.options.push({value:t.COMPANY_LOCATION_ID,name:t.LOCATION_NAME})}),e.$refs.dynamicForm.UpdateKeyValue())}))},async FetchData(){var e=this;e.isLoading=!0;var t=`moduleName=${e.moduleName}&subModuleCode=${e.subModule}`;await l["a"].HolidayBankListing(t).then((function(t){console.log(t),""!=t.data&&null!=t.data&&t.data.result.length>0&&(console.log(t.data.result),e.holidayColumnNames.forEach(e=>{"Bank_Holiday_Type"!=e.COLUMN_NAME&&"IsRecurring"!=e.COLUMN_NAME||(e.settings={isInSlot:!0})}),e.CompanyHolidayListData=t.data.result)}))},async SaveHolidayBank(){var e=this,t="year="+e.FormSchema[0].Data[2].value,a={MainData:e.GetSaveHolidayData};l["a"].AddHolidayInBank(t,a).then((function(e){console.log(e);var t=e.data.result;null!=t&&("Success"==t.status&&"1"==t.code&&this.ShowAlert(this.$t("SavedSuccessfully"),"success",!1,this.$t("Alert")),"Failure"==t.status&&"0"==t.code&&this.ShowAlert(this.$t("ErrorWhileSavingRecords"),"danger",!1,this.$t("Alert")))}))},closePopup(){this.$emit("close")},GetCheckBoxValue(){var e=this;"Client"==e.FormSchema[0].Data[1].value?e.showContractDiv=!0:e.showContractDiv=!1}}}),O=I,w=(a("36e6"),a("2877")),E=Object(w["a"])(O,g,y,!1,null,null,null),L=E.exports,R={components:{LeftColumn:f["a"],AddCompanySetup:p["a"],CompanyHolidayList:L},props:{sourcetype:{type:String,required:!0},addUserGuide:{type:String}},data(){return{recordId:0,showCompanyHoliday:!1,showCompanyHolidayList:!1,noRecord:!1,isLoading:!1,CompanyId:null,CompanyHolidayData:[],TotalRecords:0,listheaderbuttons:m.buttons,topSearchFields:m.topsearchSchema,ShowManageView:!1,ShowAddCustomReportView:!1,PageSize:10,PageNumber:1,isPaged:1,TotalPages:0,listActions:m.listActions,searchCondition:"",conditionForInstantSearch:"",SortBy:"",SortExp:"",showsharereportview:!1,showemailreportview:!1,showschedulereportview:!1,ReportID:null,reportname:"",reportid:"",foldername:"",folderid:"",LeadStatusList:[],searchcondition:"",MODULENAME:null,SUBMODULECODE:null,privilegeParams:null,sharetype:"",filteredHeaders:[],userid:null,StatusListForListing:[{STATUS:"Active",STATUS_ID:1001,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#28a745"},{STATUS:"Inactive",STATUS_ID:1002,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#d72435"}]}},async created(){var e=this;e.CompanyId=e.GetUserInfo.CompanyId,e.privilegeParams="controller=Shift&action=",e.userid=e.GetUserInfo.UserId,m.LocationbindleftCommonSearchdropdown(),m.buttons[1].isdisabled=!1,await e.FetchData(),m.bindleftCommonSearchdropdown(e,"Dynamic_Reporting","FOLDER_NAME"),m.bindleftCommonSearchdropdown(e,"Dynamic_Reporting","CREATED_BY"),m.bindleftCommonSearchdropdown(e,"Dynamic_Reporting","MODIFIED_BY"),e.getStatuslistForListing("Dynamic_Reporting","en")},computed:{filteredUserData(){return this.vueObj.UserData.map(e=>{const t={...e};return null!==t.USER_EMP_ID&&""!==t.USER_EMP_ID||(t.USER_EMP_ID="--"),t})}},mounted(){m.topsearchSchema.forEach(e=>{e.value="",e.isSearch=!1})},methods:{renderActions:function(e){console.log(e)},commonHeaderButtonClick:function(e){switch(e.callbackfunction){case"commonDeleteData":this.commonDeleteData();break;case"ActiveMultipleListing":this.UpdateStatus("Active");break;case"InactiveMultipleListing":this.UpdateStatus("InActive");break;case"AddDepartment":this.showCompanyHoliday=!0;break;case"ShowHolidayList":this.showCompanyHolidayList=!0;break}},actionButtonClick:function(e,t,a,i){var o=this;switch(e){case"sharereport":o=this;l["a"].CheckPrivilege(o.privilegeParams+"ShareReport").then(a=>{if(!a.data)return o.ShowAlert(o.$t("UnAuthorized"),"warning",!0,"Alert"),!1;o.sharetype=e,o.folderid=t.FOLDER_ID,o.ReportID=t.REPORT_ID,o.foldername=t.REPORTNAME,o.showsharereportview=!0,$("#modalshareview").modal("show"),setTimeout((function(){$("#modalshareview").modal("show"),setTimeout((function(){o.SetBootstraptoolTip()}),200)}),1e3)});break;case"sendemail":o.sendemail(t.REPORT_ID,t.MODULENAME,t.SUBMODULECODE);break;case"editreport":o.editreport(t);break;case"setschedule":o.setschedule(t.REPORT_ID);break;case"ViewReport":o.ViewReport(t.REPORT_ID,t.ACCESS,t.FOLDER_ID);break}},editreport:function(e){var t=this;l["a"].CheckPrivilege(t.privilegeParams+"Update").then(a=>{if(!a.data)return t.ShowAlert(t.$t("UnAuthorized"),"warning",!0,"Alert"),!1;t.$router.push({name:"EditDataReport",params:{Modulename:e.MODULENAME,Submodulecode:e.SUBMODULECODE,ReportName:e.REPORTNAME,ReportID:e.REPORT_ID,Module_Id:e.MODULE_ID,Folder_Id:e.FOLDER_ID,Sub_Module_Id:e.Sub_Module_Id,Version:t.Version,Action:"Edit"}})})},ViewReport:function(e,t,a){var i=this;i.$router.push("/Report/viewcustomreport/"+btoa(JSON.stringify({ReportID:e,ACCESS:t,Folder_Id:a})))},sortdata:async function(e){var t="sort tb_headerSortDown";this.SortBy=e,e===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",t="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",t="sort tb_headerSortUp"):(this.SortExp="ASC",t="sort tb_headerSortDown")),await this.FetchData(),$("#th-"+e+"  span:first-child").attr("class",t)},pagerMethod:async function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,await this.FetchData()},leftCommonSearch:async function(e){this.PageNumber=e.PageNumber,this.isPaged=1,"undefined"!=typeof e.searchCondition?(e.searchCondition.includes("holiday_date")&&(e.searchCondition=e.searchCondition.replace("=",">="),e.searchCondition=e.searchCondition.replace("holiday_date) =","holiday_date) <=")),this.searchCondition=e.searchCondition):this.searchCondition="",await this.FetchData()},ManageFolder:function(){var e=this;l["a"].CheckPrivilege(e.privilegeParams+"FolderListing").then(t=>{if(!t.data)return e.ShowAlert(e.$t("UnAuthorized"),"warning",!0,"Alert"),!1;var a;e.ShowManageView=!0,$("#modalManageView").modal("show"),setTimeout((function(){$("#modalManageView").modal("show"),setTimeout((function(){e.SetBootstraptoolTip()}),200)}),1e3),null===(a=e.$refs.managefolder)||void 0===a||a.GetViewList()})},AddDesignation:function(){var e=this;console.log(e,"Add")},commonDeleteData:function(e){var t=this,a="";$(".chkItems:checkbox:checked").not("[id^='chkAll_0']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0?t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("Report"),(function(){var e={ids:a,moduleName:"Company",subModuleCode:"CompanyHoliday",refCode:"COMPANYSETUP_DELETE"},i=JSON.stringify(e);l["a"].CommonDeleteData(i).then((async function(e){200==e.status?($(".chkItems:checkbox:checked,#chkAll_0").prop("checked",!1).removeAttr("checked"),$("#DeleteMultiple").addClass("disabled"),t.ShowAlert(t.$t("DeletedSuccess",[t.$t("Report")]),"success",!0,t.$t("Alert")),t.PageNumber=parseInt(t.PageNumber)-1,t.PageNumber<=0&&(t.PageNumber=1),await t.FetchData()):t.ShowAlert(t.$t("DeletedError",[t.$t("Report")]),"success",!0,t.$t("Alert"))}))})):t.ShowAlert(t.$t("Selectanyrecordtodelete"))},UpdateStatus:async function(e){var t=this;e="Active"==e?1001:1002;var a="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0&&(t.listheaderbuttons[3].isdisabled=!1,t.listheaderbuttons[2].isdisabled=!1,t.confirmR(t.$t("AreYouSureToUpdateStatus"),!0,t.$t("update")+"  "+t.$t("status"),(function(){var i={ID:a,StatusId:e,IsFor:"COMPANYSETUP_UPDATE",Module:"Company",Submodule:"CompanyHoliday"},o=JSON.stringify(i);l["a"].CommonUpdateStatus(o).then(e=>{200==e.status&&($(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),t.ShowAlert(t.$t("DeletedSuccess",[t.$t("Report")]),"success",!0,t.$t("Alert")),t.FetchData())})})))},getRequestParams:function(e,t,a,i,o,l){let s={};return e&&(s["pageNumber"]=e),l&&(s["searchcondition"]=l),o&&(s["is_paged"]=o),a&&(s["sortBy"]=a),i&&(s["sortExp"]=i),t&&(s["pageSize"]=t),s},clickEventOfColumn:function(e,t){console.log(e,t),"holiday_name"==t.COLUMN_NAME&&(this.recordId=e.holiday_id,this.showCompanyHoliday=!0)},FetchData:async function(){var e=this;this.isLoading=!0;var t=`CompanyId=${e.CompanyId}&pageSize=${e.PageSize}&pageNum=${e.PageNumber}&sortBy=${e.SortBy}&sortExp=${e.SortExp}&searchQuery=${e.searchCondition.trim()}`;await l["a"].CompanyHolidayListing(t).then((function(t){e.Headers=t.data.FieldSchema;const a=["holiday_name","holiday_description","holiday_date","is_recurring","status_id"];e.filteredHeaders=e.Headers.filter(e=>a.includes(e.COLUMN_NAME)),e.filteredHeaders.forEach(t=>{t.settings=null,"holiday_name"==t.COLUMN_NAME&&(t.settings={clickEvent:e.clickEventOfColumn,formatter:e.columnDataFormatter}),"status_id"==t.COLUMN_NAME&&(t.settings={isInSlot:!0})}),""!=t.data.Data&&null!=t.data.Data?(t.data.Data.length>0?(e.CompanyHolidayData=t.data.Data,e.CompanyHolidayData.forEach(e=>{e.created_by=JSON.parse(e.created_by),e.modified_by=JSON.parse(e.modified_by),e.status_id=JSON.parse(e.status_id)}),e.TotalRecords=e.CompanyHolidayData[0].total_records,e.TotalPages=Math.ceil(e.TotalRecords/e.PageSize),e.CurrentPage=e.PageNumber,e.noRecord=!1,e.listheaderbuttons[3].isdisabled=!0,e.listheaderbuttons[2].isdisabled=!0):(e.CompanyHolidayData=[],e.noRecord=!0,e.TotalRecords=0),void 0!=localStorage.SavedParameters&&localStorage.removeItem("SavedParameters")):(e.noRecord=!0,e.CompanyHolidayData=[],e.TotalRecords=0,e.listheaderbuttons[3].isdisabled=!0,e.listheaderbuttons[2].isdisabled=!0),setTimeout((function(){e.ResponsiveDataTable("tablelistingdata")}),500),e.isLoading=!1}))},closeModalSharePopup:function(){$("#modalshareview").modal("hide"),this.showsharereportview=!1},getStatuslistForListing:function(e,t){var a=this,i="langCode="+t+"&statusType="+e+"&hasglobal=true";l["a"].statusdropdown(i).then((function(e){if("Success"==e.data.status){var t=e.data.result;a.StatusListForListing=t.data}}))}}},N=R,M=Object(w["a"])(N,i,o,!1,null,null,null);t["default"]=M.exports},"611c":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".singleselectlook .multiselect__select:before{z-index:99}.singleselectlook .multiselect__tags{padding:8px 30px 0 8px!important;min-height:36px!important}.singleselectlook .multiselect__input{margin-bottom:0}",""]),e.exports=t}}]);
//# sourceMappingURL=chunk-2d3cc90d.js.map