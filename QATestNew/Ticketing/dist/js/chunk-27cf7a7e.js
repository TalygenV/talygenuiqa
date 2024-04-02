(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27cf7a7e"],{b502:function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"my-popups"},[t("loader",{attrs:{"is-visible":e.isLoading}}),t("div",{staticClass:"modal d-block"},[t("div",{staticClass:"modal-dialog modal-dialog-centered"},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header theme-primary partition-full d-flex"},[t("h4",{staticClass:"modal-title"},[e._v(e._s(e.$t("ManageWorkType")))]),t("button",{staticClass:"close",attrs:{type:"button"},on:{click:e.Close}},[t("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),t("span",{staticClass:"user-guide"},[t("a",{staticClass:"ancuserguide text-white",attrs:{"data-toggle":"collapse",href:"#collapseReplyUG",role:"button","aria-expanded":"false","aria-controls":"collapseExample"}},[t("em",{staticClass:"fa fa-files-o pr-2"}),e._v(e._s(e.$t("GuideForUser")))]),t("div",{staticClass:"divancuserguide collapse overflow-auto",attrs:{id:"collapseReplyUG"}},[t("div",{staticClass:"custom-scrollbar-js",attrs:{id:"scrollbarreplyuserguideMangeView"}},[t("div",{staticClass:"con",domProps:{innerHTML:e._s(e.$t("UgAddEditWorkType"))}})])])])]),t("div",{staticClass:"modal-body"},[t("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit},scopedSlots:e._u([{key:"tgslot-AutoCreateService",fn:function({data:a}){return[t("div",{staticClass:"form-group mb-0"},[t("label",{staticClass:"switch"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.fieldInfo.value,expression:"data.fieldInfo.value"},{name:"disabled",rawName:"v-disabled",value:e.disabled,expression:"disabled"}],staticClass:"form-check-input custom-control-input dynamic",attrs:{type:"checkbox",name:"IsLogin"},domProps:{checked:Array.isArray(a.fieldInfo.value)?e._i(a.fieldInfo.value,null)>-1:a.fieldInfo.value},on:{change:[function(t){var s=a.fieldInfo.value,i=t.target,r=!!i.checked;if(Array.isArray(s)){var l=null,o=e._i(s,l);i.checked?o<0&&e.$set(a.fieldInfo,"value",s.concat([l])):o>-1&&e.$set(a.fieldInfo,"value",s.slice(0,o).concat(s.slice(o+1)))}else e.$set(a.fieldInfo,"value",r)},function(t){return e.checkForAutoCreateEnable(a.fieldInfo.value)}]}}),t("span",{staticClass:"slider round",staticStyle:{cursor:"default"}},[t("span",{staticClass:"slider-yes"},[e._v(e._s(e.$t("Yes")))]),t("span",{staticClass:"slider-no"},[e._v(e._s(e.$t("No")))])])])]),e.AutoServiceDisabled?t("span",{staticClass:"text-danger",staticStyle:{"font-size":"12px"}},[e._v(e._s(e.$t("AutoServiceDisabled")))]):e._e()]}}])})],1)])])])],1)},i=[],r=a("9769"),l={props:{WorkTypeId:{type:Number,required:!0}},data(){return{isLoading:!1,AutoServiceDisabled:!0,FormSchema:[{layoutType:"triple",Data:[{astype:"TextField",label:this.$t("WorkTypeName"),name:"WorkTypeName",value:"",placeholder:this.$t("EnterWorkTypeName"),validationRules:{required:!0,max:100}},{astype:"TextAreaField",label:this.$t("DESCRIPTION"),name:"DESCRIPTION",value:"",placeholder:this.$t("EnterDescription"),validationRules:""},{astype:"SlotField",label:this.$t("AutoCreateService"),name:"AutoCreateService",value:"",placeholder:"",config:{options:[]},visibility:!0,validationRules:"",settings:{isInSlot:!0}},{astype:"NumericField",label:this.$t("MinimumCrewSize"),name:"MinimumCrewSize",value:"",placeholder:this.$t("EnterMinimumCrewSize"),validationRules:""},{astype:"NumericField",label:this.$t("RecommendedCrewSize"),name:"RecommendedCrewSize",value:"",placeholder:this.$t("EnterRecommendedCrewSize"),validationRules:""},{astype:"SelectField",label:this.$t("DurationType"),name:"DurationType",value:"",placeholder:this.$t("SelectDuration"),validationRules:{required:!0,max:100},config:{options:[{value:"HH",name:"Hours"},{value:"MM",name:"Minutes"}]}},{astype:"NumericField",label:this.$t("EstimateDuration"),name:"EstimateDuration",value:"",placeholder:"",validationRules:{required:!0,max:100}},{astype:"NumericField",label:this.$t("MaxDuration"),name:"MaxDuration",value:"",placeholder:"",validationRules:""},{astype:"ColorField",label:this.$t("ColorField"),name:"ColorField",value:"",placeholder:"",validationRules:{required:!0,max:100}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Close",onClick:this.Close}]}},created:async function(){this.FetchData()},methods:{FetchData:function(){var e=this,t="WtId="+e.WorkTypeId;r["a"].FetchDataByWorktypeId(t).then((function(t){null!=t.data&&""!=t.data&&("Success"==t.data.status&&(e.FormSchema[0].Data[0].value=t.data.result.data[0].worktype_name,e.FormSchema[0].Data[1].value=t.data.result.data[0].description,e.FormSchema[0].Data[2].value=t.data.result.data[0].auto_create_sa,e.FormSchema[0].Data[3].value=t.data.result.data[0].min_crew_size,e.FormSchema[0].Data[4].value=t.data.result.data[0].rec_crew_size,e.FormSchema[0].Data[5].value=t.data.result.data[0].duration_type,e.FormSchema[0].Data[6].value=t.data.result.data[0].estimate_duration,e.FormSchema[0].Data[7].value=t.data.result.data[0].maximum_duration,e.FormSchema[0].Data[8].value=t.data.result.data[0].color),1==t.data.result.data[0].auto_create_sa&&(e.AutoServiceDisabled=!1))}))},Close:function(){this.$parent.AddWorkTypePopup=!1},checkForAutoCreateEnable:function(e){var t=this;t.AutoServiceDisabled=1!=e},onSubmit(e,t){var a=this,s={WorkTypeID:null==a.WorkTypeId?0:a.WorkTypeId,WorktypeName:e.WorkTypeName,Desc:e.DESCRIPTION,Auto:e.AutoCreateService,MinimumCrew:e.MinimumCrewSize,Crew:e.RecommendedCrewSize,DurationType:e.DurationType,Duration:e.EstimateDuration,MaxDuration:e.MaxDuration,color:e.ColorField,due_date_offset:"",Exect:"",CommissionType:a.CommissionType,CommissionValue:a.CommissionValue,company_id:null,status_id:1001,created_by:null,modified_by:null,modified_at:""},i=JSON.stringify(s);r["a"].SaveWorkType(i).then(e=>{if("Success"==e.data.status){var t=JSON.parse(e.data.result);"ALREADY EXISTS"==t.MSG?a.ShowAlert(a.$t("AlreadyExists",[a.$t("WorkType")]),"failure",!0,a.$t("Alert")):(a.WorkTypeId>0?(a.ShowAlert(a.$t("UpdatedSuccess",[a.$t("WorkType")]),"success",!0,a.$t("Alert")),a.Close()):(a.ShowAlert(a.$t("AddedSuccess",[a.$t("WorkType")]),"success",!0,a.$t("Alert")),a.Close()),a.$parent.FetchRecords())}else a.ShowAlert(a.$t("AddedError",[a.$t("Resource")]),"failure",!0,a.$t("Alert")),a.Close()})}}},o=l,n=a("2877"),c=Object(n["a"])(o,s,i,!1,null,null,null);t["a"]=c.exports},baf1:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("section",[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12 padding-t_8"},[t("div",{staticClass:"theme-primary partition-full"},[t("span",{staticClass:"p-name text-white"},[e._v(e._s(e.$t("Service")))])])])]),t("div",{staticClass:"border p-3"},[t("Form",{ref:"AddService"},[t("div",{staticClass:"row"},[t("div",{staticClass:"listing"},[t("label",{staticClass:"ml-3"},[e._v("Work Type:"),t("sup",{staticClass:"text-danger"},[e._v("*")])]),t("div",{staticClass:"d-flex"},[t("div",{staticClass:"col-lg-4"},[t("Field",{attrs:{name:"WorkType",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function({errors:a}){return[t("select",{directives:[{name:"model",rawName:"v-model",value:e.workTypeId,expression:"workTypeId"}],staticClass:"form-control level",class:{"form-control":!0,"is-invalid":a[0]},attrs:{name:"workTypeId"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.workTypeId=t.target.multiple?a:a[0]}}},[t("option",{attrs:{value:""}},[e._v("Select Work Type")]),e._l(e.WorkTypeData,(function(a){return t("option",{key:a,domProps:{value:a.value}},[e._v(" "+e._s(a.name))])}))],2),a[0]?t("span",{staticClass:"invalid-feedback d-block",attrs:{name:"WorkType"+e.index}},[e._v(e._s(a[0]))]):e._e()]}}])})],1),e._v(" OR "),t("div",{staticClass:"col-lg-4"},[t("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:function(t){return e.OpenManagePopup()}}},[t("i",{staticClass:"fa fa-plus pr-2"}),e._v(e._s(e.$t("CreateNewWorkType")))])])])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"listing mt-3 px-3"},[t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-bordered dt-responsive nowrap mt-0 dataTable no-footer dtr-inline",attrs:{id:"tbContainer"}},[t("thead",{staticClass:"thead-bg"},[t("tr",[t("th",[t("span",[e._v(e._s(e.$t("ServiceName")))])]),t("th",[t("span",[e._v(e._s(e.$t("Cost")))])]),t("th",[t("span",[e._v(e._s(e.$t("Markup")))])]),t("th",[t("span",[e._v(e._s(e.$t("UnitPrice")))])]),t("th",[t("span",[e._v(e._s(e.$t("ServiceDuration")))])]),t("th",[t("span",[e._v(e._s(e.$t("Description")))])]),t("th",{staticClass:"text-center single-action"},[t("a",{staticClass:"round-icon-small btn-success-light d-block float-none m-auto",staticStyle:{"line-height":"33px"},attrs:{href:"javascript:;",id:"btnAdd",title:"Add"},on:{click:e.AddRow}},[t("i",{staticClass:"fa fa-plus"})])])])]),t("tbody",e._l(e.Mainleveldiv,(function(a,s){return t("tr",{key:s,staticClass:"mainleveldiv"},[t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:a.ServiceName,expression:"item.ServiceName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"ServiceName"},domProps:{value:a.ServiceName},on:{input:function(t){t.target.composing||e.$set(a,"ServiceName",t.target.value)}}})]),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:a.Cost,expression:"item.Cost"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Cost"},domProps:{value:a.Cost},on:{input:[function(t){t.target.composing||e.$set(a,"Cost",t.target.value)},function(t){return e.onCostChange(s)}]}})]),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:a.Markup,expression:"item.Markup"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Markup"},domProps:{value:a.Markup},on:{input:[function(t){t.target.composing||e.$set(a,"Markup",t.target.value)},function(t){return e.onMarkupChange(s)}]}})]),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:a.UnitPrice,expression:"item.UnitPrice"}],staticClass:"form-control",attrs:{type:"number",placeholder:"UnitPrice"},domProps:{value:a.UnitPrice},on:{input:[function(t){t.target.composing||e.$set(a,"UnitPrice",t.target.value)},function(t){return e.onUnitPriceChange(s)}]}})]),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:a.ServiceDuration,expression:"item.ServiceDuration"}],staticClass:"form-control",attrs:{type:"number",placeholder:"ServiceDuration"},domProps:{value:a.ServiceDuration},on:{input:function(t){t.target.composing||e.$set(a,"ServiceDuration",t.target.value)}}})]),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:a.Description,expression:"item.Description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Description"},domProps:{value:a.Description},on:{input:function(t){t.target.composing||e.$set(a,"Description",t.target.value)}}})]),0!=s?t("td",{staticClass:"text-center single-action"},[t("a",{staticClass:"round-icon-small btn-danger-light d-block float-none m-auto",attrs:{href:"javascript:;",id:"btnRemove",title:"Remove"},on:{click:function(t){return e.DeleteUser(s)}}},[t("i",{staticClass:"fa fa-trash"})])]):e._e()])})),0)])])])]),t("div",{staticClass:"col-12 mt-3"},[t("div",{staticClass:"row flex-row-reverse"},[t("div",{staticClass:"col-lg-6 text-right"},[t("a",{staticClass:"btn btn-success",attrs:{href:"javascript:;",id:"aChainTicketSave",title:"Save"},on:{click:e.SaveData}},[t("i",{staticClass:"fa fa-floppy-o pr-2"}),t("span",[e._v(e._s(e.$t("Save")))])]),e._v("  "),t("RouterLink",{staticClass:"btn btn-danger",attrs:{to:"/Ticketing/ServiceListing",title:"Cancel"}},[t("i",{staticClass:"fa fa-times pr-2"}),t("span",[e._v(e._s(e.$t("Cancel")))])])],1),t("div",{staticClass:"col-lg-6"},[t("div",{staticClass:"col-lg-6"},[t("div",{staticClass:"py-2"},[t("span",{staticClass:"text-danger"},[e._v(e._s(e.$t("MandatoryString")))])])])])])])])],1),e.AddWorkTypePopup?t("AddWorkTypePopup"):e._e()],1)},i=[],r=(a("14d9"),a("9769")),l=a("b502"),o={components:{AddWorkTypePopup:l["a"]},created:function(){var e=this;e.GetDropDownData()},data(){return{WorkTypeData:[],AddWorkTypePopup:!1,workTypeId:"",Mainleveldiv:[{ServiceName:"",Cost:"",Markup:"",UnitPrice:"",ServiceDuration:"",Description:""}],buttons:[{type:"submit",class:"btn btn-warning",text:"<i class='fa fa-save pr-2'></i>Save Of Draft",isVisible:!1}]}},methods:{AddRow:function(e){var t=this;t.Mainleveldiv.push({ServiceName:"",Cost:"",Markup:"",UnitPrice:"",ServiceDuration:"",Description:""})},GetDropDownData:function(){var e=this,t="id=&moduleName=TICKETING&type=FSM_WORKTYPE&search=&refId=";r["a"].GetDDLData(t).then(t=>{200==t.status&&(void 0==t.data.DATA&&null==t.data.DATA||t.data.DATA.forEach(t=>{e.WorkTypeData.push({value:t.value,name:t.name})}))})},onCostChange:function(e){let t=this.Mainleveldiv[e],a=parseFloat(t.Cost),s=parseFloat(t.Markup);t.UnitPrice=this.calculateUnitPrice(a,s)},onUnitPriceChange:function(e){let t=this.Mainleveldiv[e],a=parseFloat(t.UnitPrice),s=parseFloat(t.Cost);t.Markup=this.calculateMarkupPercentage(s,a)},onMarkupChange:function(e){let t=this.Mainleveldiv[e],a=parseFloat(t.Markup),s=parseFloat(t.Cost);t.UnitPrice=this.calculateUnitPrice(s,a)},calculateUnitPrice:function(e,t){return(e+e*t/100).toFixed(2)},calculateMarkupPercentage:function(e,t){return((t-e)/e*100).toFixed(2)},OpenManagePopup:function(e){var t=this;t.AddWorkTypePopup=!t.AddWorkTypePopup},DeleteUser:function(e){var t=this;t.Mainleveldiv.splice(e,1)},SaveData:function(){var e=this;e.$refs.AddService.validate().then(t=>{if(t){var a=`workTypeId=${e.workTypeId}&serviceDetailData=${JSON.stringify(e.Mainleveldiv)}`;r["a"].AddServiceForm(a).then(t=>{1==t.data?(e.ShowAlert("Service has been succesfully added","success"),e.$router.push({path:"/Ticketing/ServiceListing"})):e.ShowAlert(e.$t("GroupHasAdded"),"success")})}})}}},n=o,c=a("2877"),d=Object(c["a"])(n,s,i,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-27cf7a7e.js.map