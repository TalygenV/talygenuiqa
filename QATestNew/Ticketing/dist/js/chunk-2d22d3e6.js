(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d3e6"],{f754:function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e._self._c;return a("section",{staticClass:"main-content"},[a("loader",{attrs:{"is-visible":e.isLoading}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 padding-t_8"},[a("div",{staticClass:"theme-primary partition-full"},[a("span",{staticClass:"p-name text-white"},[e._v(" "+e._s(e.$t("AddTicket")))]),a("span",{staticClass:"float-right"},[a("RouterLink",{staticClass:"p-action-btn text-white float-right",attrs:{to:"/Ticketing/Index"}},[a("em",{staticClass:"fa fa-angle-double-left"}),a("br"),e._v(" "+e._s(e.$t("BacktoList"))+" ")])],1)])])]),e.isSuccessMessage?a("div",{staticClass:"border p-3"},[a("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 ticket-thankyou text-center"},[e._m(0),a("h1",{staticClass:"mt-4 mb-4"},[e._v(e._s(e.$t("ThankYou")))]),a("div",{staticClass:"pb-4 ticket-number"},[a("P",[e._v(e._s(e.saveTicketStatus))]),a("div",{staticStyle:{"font-size":"20px",position:"relative",background:"#fff3cd",padding:"35px 30px",margin:"20px",border:"4px dotted #856404",display:"inline-block",color:"#856404"}},[e._v(" "+e._s(e.TicketNumber))])],1)])]):e._e(),e.isSuccessMessage?e._e():a("dynamic-form",{ref:"AddTicketForm",attrs:{buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.saveForm},scopedSlots:e._u([{key:"tgslot-Description",fn:function({data:t}){return[a("ckeditor",{class:{"is-invalid":""!=t.error},attrs:{editor:e.editor},on:{ready:e.onReady},model:{value:t.fieldInfo.value,callback:function(a){e.$set(t.fieldInfo,"value",a)},expression:"data.fieldInfo.value"}}),a("span",{staticClass:"invalid-feedback"},[e._v(e._s(t.error))])]}},{key:"tgslot-addresFields",fn:function({data:t}){return[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("dynamic-form",{ref:"AddTicketForm1",attrs:{schema:e.StaticObj}})],1),a("div",{staticClass:"col-md-6"},[e.isShowMap?a("ManageMap",{staticClass:"row",attrs:{mapType:"MapBox",mapContainer:"WorkOrder",config:e.config,mapHeight:"355px"},on:{GetAddress:e.GetAddress}}):e._e()],1)])]}}],null,!1,3974122177)}),e.isManageCategory?a("ManageCategory",{attrs:{modulename:"Ticketing",submodulecode:"Ticketing",callbackfunction:e.GetDropDownData}}):e._e()],1)},l=[function(){var e=this,a=e._self._c;return a("span",{staticClass:"checksign text-success"},[a("i",{staticClass:"fa fa-check"})])}],n=(t("14d9"),t("b7ef"),t("9769")),s=t("33e4"),o=function(){var e=this,a=e._self._c;return a("section",[a("div",{staticClass:"my-popups"},[a("loader",{attrs:{"is-visible":e.isLoading}}),a("div",{staticClass:"modal d-block"},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[e._v(e._s(e.$t("ManageCategory")))]),a("button",{staticClass:"close",attrs:{href:"javascript:;"},on:{click:e.Close}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"modal-body"},[a("span",{staticClass:"user-guide"},[a("a",{staticClass:"ancuserguide",attrs:{"data-toggle":"collapse",href:"#collapseReply",role:"button","aria-expanded":"false","aria-controls":"collapseExample"}},[e._v(e._s(e.$t("UserGuide")))]),a("div",{staticClass:"divancuserguide collapse",attrs:{id:"collapseReply"}},[a("div",{staticClass:"custom-scrollbar-js",attrs:{id:"scrollbarmergeuserguide"}},[a("div",{staticClass:"con",domProps:{innerHTML:e._s(e.$t("USER_GUIDE_TICKET_TRANSFER"))}})])])]),a("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.SaveCategoryForm},scopedSlots:e._u([{key:"tgslot-Description",fn:function({data:t}){return[a("ckeditor",{attrs:{editor:e.editor},on:{ready:e.onReady},model:{value:t.fieldInfo.value,callback:function(a){e.$set(t.fieldInfo,"value",a)},expression:"data.fieldInfo.value"}}),a("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Description"}},[e._v(e._s(t.error))])]}},{key:"tgslot-IsForServiceRequest",fn:function({data:t}){return[a("div",{staticClass:"form-group mb-0"},[a("label",{staticClass:"switch"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.fieldInfo.value,expression:"data.fieldInfo.value"},{name:"disabled",rawName:"v-disabled",value:e.disabled,expression:"disabled"}],staticClass:"form-check-input custom-control-input dynamic",attrs:{type:"checkbox",name:"IsLogin"},domProps:{checked:Array.isArray(t.fieldInfo.value)?e._i(t.fieldInfo.value,null)>-1:t.fieldInfo.value},on:{change:[function(a){var i=t.fieldInfo.value,l=a.target,n=!!l.checked;if(Array.isArray(i)){var s=null,o=e._i(i,s);l.checked?o<0&&e.$set(t.fieldInfo,"value",i.concat([s])):o>-1&&e.$set(t.fieldInfo,"value",i.slice(0,o).concat(i.slice(o+1)))}else e.$set(t.fieldInfo,"value",n)},function(a){return e.checkForAutoCreateEnable(t.fieldInfo.value)}]}}),a("span",{staticClass:"slider round",staticStyle:{cursor:"default"}},[a("span",{staticClass:"slider-yes"},[e._v(e._s(e.$t("Yes")))]),a("span",{staticClass:"slider-no"},[e._v(e._s(e.$t("No")))])])])])]}}])})],1)])])])],1)])},r=[],c={props:{modulename:{type:String,required:!0},submodulecode:{type:String,required:!0},callbackfunction:{type:Function}},data(){return{editor:this.$pinia.state.value.UserInfo.ckeditor,isLoading:!1,isSaveAndClose:"",AutoServiceDisabled:!0,FormSchema:[{layoutType:"double",Data:[{astype:"TextField",label:this.$t("Category"),name:"Category",value:"",placeholder:"",validationRules:{required:!0}},{astype:"SelectField",label:this.$t("Status"),name:"Status",value:"",placeholder:"",config:{options:[{value:"1001",name:"Active"},{value:"1003",name:"Inactive"}],showAddIcon:!1},validationRules:{required:!1}}]},{layoutType:"single",Data:[{astype:"SlotField",label:this.$t("IsForServiceRequest"),name:"IsForServiceRequest",value:"",placeholder:"",config:{options:[]},visibility:!0,validationRules:"",settings:{isInSlot:!0}}]},{layoutType:"single",Data:[{astype:"SlotField",label:this.$t("Description"),name:"Description",value:"",placeholder:"",config:{options:[]},settings:{isInSlot:!0},visibility:!0,validationRules:{required:!0,max:200}}]}],buttons:[{type:"submit",class:"btn btn-success save",text:"<i class='fa fa-save pr-2'></i>Save And Close",onClick:this.SaveCategoryFormAndClose},{type:"submit",class:"btn btn-success save",text:"<i class='fa fa-save pr-2'></i>Save"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.Close}]}},async created(){},methods:{checkForAutoCreateEnable:function(e){var a=this;a.AutoServiceDisabled=1!=e},Close:function(){var e=this;e.$parent.isManageCategory=!1},ClearFieldValue:function(){var e=this;e._data.FormSchema[0].Data[0].value="",e._data.FormSchema[0].Data[1].value="",e._data.FormSchema[1].Data[0].value="",e._data.FormSchema[2].Data[0].value=""},SaveCategoryFormAndClose:function(){var e=this;e.isSaveAndClose="SaveAndClose",e.SaveCategoryForm()},SaveCategoryForm:function(e){var a=this,t={CategoryName:a._data.FormSchema[0].Data[0].value,Status:a._data.FormSchema[0].Data[1].value,IsForServiceRequest:a._data.FormSchema[1].Data[0].value,Description:a._data.FormSchema[2].Data[0].value,CategoryType:"TICKET_CATEGORY"},i=JSON.stringify(t);n["a"].SaveCategoryData(i).then(e=>{"Success"==e.data.result.MSG?(a.ShowAlert(a.$t("AddedSuccess",[a.$t("Category")]),"success",!0,a.$t("Alert")),"SaveAndClose"==a.isSaveAndClose?(a.Close(),a.$parent.FormSchema.length>0&&a.$parent.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{"ticket_category_id"==e.name&&a.callbackfunction("TICKET_CATEGORY",e,null)})})):(a.ClearFieldValue(),a.$parent.FormSchema.length>0&&a.$parent.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{"ticket_category_id"==e.name&&a.callbackfunction("TICKET_CATEGORY",e,null)})}))):a.ShowAlert(a.$t("AddedError",[a.$t("Category")]),"failure",!0,a.$t("Alert"))})}}},d=c,u=t("2877"),m=Object(u["a"])(d,o,r,!1,null,null,null),v=m.exports,f={components:{ManageMap:s["a"],ManageCategory:v},data:function(){return{config:{isShowDrawButton:!0,isShowSearchBox:!0},editor:this.$pinia.state.value.UserInfo.ckeditor,isLoading:!1,isForServiceRequest:!1,autoCreateService:!1,isManageCategory:!1,CountryDDl:"",StateDDl:"",Latitude:"",Longitude:"",saveTicketStatus:"",jsonData:{},fileData:[],ticketType:"",clientId:"",TicketNumber:"",isShowMap:!0,isSuccessMessage:!1,bindFrequency:[{value:"Daily",name:"Daily"},{value:"Weekly",name:"Weekly"},{value:"BiWeekly",name:"BiWeekly"},{value:"Monthly",name:"Monthly"},{value:"Quarterly",name:"Quarterly"},{value:"halfYearly",name:"halfYearly"},{value:"Annually",name:"Annually"}],bindWeekDay:[{value:1,name:"Monday"},{value:2,name:"Tuesday"},{value:3,name:"Wednesday"},{value:4,name:"Thursday"},{value:5,name:"Friday"},{value:6,name:"Saturday"},{value:7,name:"Sunday"}],StaticObj:[{layoutType:"single",Data:[{astype:"SelectField",label:this.$t("ClientAddress"),name:"AddrTo",value:"",disabled:!1,config:{options:[],onChange:this.onChangeDropdown},placeholder:this.$t("Select"),validationRules:""}]},{layoutType:"double",Data:[{astype:"TextField",label:this.$t("Address"),name:"Address",value:"",placeholder:this.$t("PleaseEnterAddress"),validationRules:{required:!0}},{astype:"SelectField",label:this.$t("Country"),name:"country_id",value:"",disabled:!0,config:{options:[],onChange:this.GetStateDDL},placeholder:this.$t("Select"),validationRules:""},{astype:"SelectField",label:this.$t("State"),name:"00",value:"",disabled:!0,config:{options:[]},placeholder:this.$t("Select"),validationRules:""},{astype:"TextField",label:this.$t("County"),name:"County",value:"",disabled:!0,placeholder:this.$t("PleaseEnterCounty"),validationRules:""},{astype:"TextField",label:this.$t("City"),name:"City",value:"",disabled:!0,placeholder:this.$t("PleaseEnterCityName"),validationRules:""},{astype:"TextField",label:this.$t("Street"),name:"Street",value:"",disabled:!0,placeholder:this.$t("PleaseEnterStreet"),validationRules:""},{astype:"TextField",label:this.$t("ZipCode"),name:"Zip",value:"",disabled:!0,placeholder:this.$t("PleaseEnterZipCode"),validationRules:""},{astype:"TextField",label:this.$t("NoteAboutAddress"),name:"Notes",value:"",disabled:!1,placeholder:this.$t("PleaseEnterDescription"),validationRules:""}]}],FormSchema:[],buttons:[{type:"submit",class:"btn btn-warning save",text:"<i class='fa fa-save pr-2'></i> Save As Draft",onClick:this.SaveAsDraft},{type:"submit",class:"btn btn-success save",text:"<i class='fa fa-save pr-2'></i> Submit"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i> Cancel",onClick:this.Close}]}},created:function(){this.getForm(),this.GetCountryDDL()},methods:{GetAddress:function(e){var a=this;a.Latitude="",a.Longitude="";let t=a.CountryDDl.filter(a=>a.name===e[0].CompleteAddress.Country.LongName);a._data.StaticObj[1].Data[0].value=e[0].CompleteAddress.FullAddress,a._data.StaticObj[1].Data[1].value=t[0].value,a.GetStateDDL(null,t[0].value),setTimeout((function(){let t=a.StateDDl.filter(a=>a.name===e[0].CompleteAddress.AdministrativeAreaLevel1.LongName);a._data.StaticObj[1].Data[2].value=t[0].value}),1e3),a._data.StaticObj[1].Data[3].value=e[0].CompleteAddress.AdministrativeAreaLevel2.LongName,a._data.StaticObj[1].Data[4].value=e[0].CompleteAddress.City.LongName,a._data.StaticObj[1].Data[5].value=e[0].CompleteAddress.AdministrativeAreaLevel3.LongName,a._data.StaticObj[1].Data[6].value=e[0].CompleteAddress.PinCode.LongName;var i="",l="",n="",s="";e[0].LatLng.forEach((a,t)=>{0==t?(i=e[0].LatLng[0].Lat,l=e[0].LatLng[0].Lng):(n=e[0].LatLng[t].Lat,s=e[0].LatLng[t].Lng)}),a.Latitude=n+","+l,a.Longitude=i+","+s,a.FormSchema.forEach((e,t)=>{e.Data.forEach((t,i)=>{"GeneralInformation"==e.group_name&&("location_se"==t.name&&(t.value=a.Latitude),"location_nw"==t.name&&(t.value=a.Longitude))})})},Close(){this.$router.push({name:"TicketingList"})},GetCountryDDL:async function(e){var a=this;a._data.StaticObj[1].Data[1].config.options=[],a.CountryDDl="";var t="id=&&moduleName=FSM&type=COUNTRIES&search=&refId=";await n["a"].GetDDLDataFSM(t).then((function(e){if(e.data){var t=e.data;a.CountryDDl=e.data.result.DATA,null!=t&&e.data.result.DATA.forEach((e,t)=>{a._data.StaticObj[1].Data[1].config.options.push({value:e.value,name:e.name})})}}))},GetStateDDL:async function(e,a){var t=this,i=0;i=null==e?a:e.target.value.toString(),t._data.StaticObj[1].Data[2].config.options=[],t.StateDDl="";var l="id=&&moduleName=FSM&type=STATE&search=&refId="+i;await n["a"].GetDDLDataFSM(l).then((function(e){if(e.data){var a=e.data;t.StateDDl=e.data.result.DATA,null!=a&&e.data.result.DATA.forEach((e,a)=>{t._data.StaticObj[1].Data[2].config.options.push({value:e.value,name:e.name})})}}))},onReady(e){e.ui.getEditableElement().parentElement.insertBefore(e.ui.view.toolbar.element,e.ui.getEditableElement())},onChangeEventForFields:function(e,a,t){let i=this;var l=this;"ticket_for"==a.name?i.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{"on_behalf"==e.name&&(e.visibility="2"==a.value,e.value="3",e.label="On Behalf"),"on_behalf_consumer_id"==e.name&&"1"!=a.value&&(e.visibility=!0,l.GetDropDownData("FSM_USERS",e,null),e.label="User"),"on_behalf_consumer_id"==e.name&&"1"==a.value&&(e.visibility=!1),"ticket_channel"==e.name&&(e.visibility=!1)})}):"on_behalf"==a.name?i.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{"on_behalf_consumer_id"==e.name&&"4"==a.value&&(e.visibility=!0,e.label="Client",l.GetDropDownData("CLIENTS",e,null)),"on_behalf_consumer_id"==e.name&&"3"==a.value&&(e.visibility=!0,l.GetDropDownData("FSM_USERS",e,null),e.label="User"),"ticket_channel"==e.name&&"4"==a.value&&(e.visibility=!0,e.label="Channel"),"ticket_channel"==e.name&&"3"==a.value&&(e.visibility=!1,e.label="Channel")})}):"ticket_category_id"==a.name?i.FormSchema.forEach((e,t)=>{e.Data.forEach((t,i)=>{if(t.name==a.name){var n;let e=null===(n=t.config.options.find(e=>e.value==a.value))||void 0===n?void 0:n.first_value;l.isForServiceRequest="",l.isForServiceRequest="0"!=e}1==l.isForServiceRequest?("ticket_for"==t.name&&(t.visibility=!1,t.value=1),"on_behalf"==t.name&&(t.visibility=!1,t.value=null),"on_behalf_consumer_id"==t.name&&(t.visibility=!0,t.label="Client",l.GetDropDownData("CLIENTS",t,null)),"ticket_channel"==t.name&&(t.visibility=!0,t.label="Channel"),"Preferred Time"!=e.group_name&&"Address"!=e.group_name||(e.visibility=!0,"START_DATE"!=t.name&&"END_DATE"!=t.name&&"addresFields"!=t.name||(t.visibility=!0,t.config={mode:"DateTime",format:"M/D/YYYY"})),"Recurring"==e.group_name&&(e.visibility=!0,"frequency"==t.name&&(t.visibility=!0,t.config.options=l.bindFrequency),"recurrence"==t.name&&(t.visibility=!0)),"is_field_service"==t.name&&(t.value="",t.visibility=!1,t.value=1)):0==l.isForServiceRequest&&("ticket_for"==t.name&&(t.visibility=!0,t.value=1),"on_behalf_consumer_id"!=t.name&&"cdc_id"!=t.name&&"work_type_id"!=t.name&&"utility_id"!=t.name&&"ticket_channel"!=t.name||(t.visibility=!1),"Scheduled Appointment"!=e.group_name&&"Preferred Time"!=e.group_name&&"Address"!=e.group_name||(e.visibility=!1,"ScheduledStartDate"!=t.name&&"ScheduledEndDate"!=t.name&&"crew_id"!=t.name&&"resource_id"!=t.name&&"START_DATE"!=t.name&&"END_DATE"!=t.name&&"addresFields"!=t.name||(t.visibility=!1)),"Recurring"==e.group_name&&(e.visibility=!1,"frequency"==t.name&&(t.visibility=!1,t.config.options=l.bindFrequency),"recurrence"!=t.name&&"weekly"!=t.name&&"biweekly"!=t.name&&"recurringDate"!=t.name||(t.visibility=!1)),"is_field_service"==t.name&&(t.value="",t.visibility=!1,t.value=0))})}):"frequency"==a.name?i.FormSchema.forEach((e,t)=>{e.Data.forEach((t,i)=>{"Recurring"==e.group_name&&("Daily"==a.value&&("biweekly"!=t.name&&"recurringDate"!=t.name&&"weekly"!=t.name||(t.visibility=!1)),"Weekly"==a.value&&("weekly"==t.name&&(t.visibility=!0,t.config.options=l.bindWeekDay),"biweekly"==t.name&&(t.visibility=!1)),"BiWeekly"==a.value&&("biweekly"==t.name&&(t.visibility=!0,t.config.options=l.bindWeekDay),"weekly"!=t.name&&"recurringDate"!=t.name||(t.visibility=!1)),"Monthly"!=a.value&&"Quarterly"!=a.value&&"halfYearly"!=a.value&&"Annually"!=a.value||("recurringDate"==t.name&&(t.visibility=!0),"weekly"!=t.name&&"biweekly"!=t.name||(t.visibility=!1)))})}):"on_behalf_consumer_id"==a.name?(l.GetClientaddress(null,t.value),i.FormSchema.forEach((e,a)=>{e.Data.forEach((e,a)=>{if("utility_id"==e.name&&1==l.isForServiceRequest){let a=t.value;e.visibility=!0,e.label="Utility Name",l.GetDropDownData("UTILITY_LIST_BY_CLIENT_ID",e,a)}})})):"utility_id"==a.name?i.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{if("cdc_id"==e.name){let t=a.value;e.visibility=!0,l.GetDropDownData("FSM_CDCCODE_FOR_TICKET",e,t)}})}):"cdc_id"==a.name?i.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{if("work_type_id"==e.name){let t=a.value;e.visibility=!0,l.GetDropDownData("FSM_WORKTYPE_BY_CDC",e,t)}})}):"work_type_id"==a.name&&i.FormSchema.forEach((e,i)=>{e.Data.forEach((i,n)=>{var s;let o=null===(s=a.config.options.find(e=>e.value==t.value))||void 0===s?void 0:s.first_value;l.autoCreateService="1"==o,1==l.autoCreateService?("Scheduled Appointment"==e.group_name&&(e.visibility=!0,"ScheduledStartDate"!=i.name&&"ScheduledEndDate"!=i.name&&"crew_id"!=i.name&&"resource_id"!=i.name||(i.visibility=!0,i.config={mode:"DateTime",format:"M/D/YYYY"})),"crew_id"==i.name&&l.GetDropDownData("FSM_CREWNAME",i,null),"resource_id"==i.name&&l.GetDropDownData("FSM_SA_RESOURCENAME",i,null)):0==l.autoCreateService&&"Scheduled Appointment"==e.group_name&&(e.visibility=!1,"ScheduledStartDate"!=i.name&&"ScheduledEndDate"!=i.name&&"crew_id"!=i.name&&"resource_id"!=i.name||(i.visibility=!1))})})},GetClientaddress:async function(e,a){var t=this,i=0;null==e?i=a:(i=e.target.value.toString(),t.clientId=i),t._data.StaticObj[0].Data[0].config.options=[];var l="id=&&moduleName=FSM&type=CLIENT_ADDRESS_LIST_WO&search=&refId="+i;await n["a"].GetDDLDataFSM(l).then((function(e){if(e.data){var a=e.data;null!=a&&e.data.result.DATA.forEach((e,a)=>{t._data.StaticObj[0].Data[0].config.options.push({value:e.value,name:e.name})})}}))},onChangeDropdown:async function(e){var a=this,t=e.target.name,i="";"AddrTo"==t&&(i=e.target.value),a.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{if("on_behalf_consumer_id"==e.name){let t=e.value.value;a.isBlank(t)||""==i||a.BindAddressUsingClientAdrress(t,i)}})})},BindAddressUsingClientAdrress:function(e,a){var t=this,i=`id=${e}&moduleName=TICKETING&addressId=${a}`;n["a"].GetTicketClientAddress(i).then(e=>{null!=e.data.result&&e.data.result.data.length>0&&(t._data.StaticObj[1].Data[0].value=e.data.result.data[0].USER_ADDRESS_1,t._data.StaticObj[1].Data[1].value=e.data.result.data[0].COUNTRY_ID,t._data.StaticObj[1].Data[2].value=e.data.result.data[0].CT[0].ST[0].STATE_ID,t._data.StaticObj[1].Data[4].value=e.data.result.data[0].USER_CITY,t._data.StaticObj[1].Data[6].value=e.data.result.data[0].USER_ZIPCODE)})},GetDropDownData:function(e,a,t){var i=this;if(i.isBlank(t))l=`id=&moduleName=TICKETING&type=${e}&search=&refId=`;else var l=`id=${t}&moduleName=TICKETING&type=${e}&search=&refId=`;n["a"].GetDDLData(l).then(t=>{a.config.options=[],a.value="",200==t.status&&("FSM_USERS"!=e&&"CLIENTS"!=e&&"FSM_CREWNAME"!=e&&"FSM_SA_RESOURCENAME"!=e&&"UTILITY_LIST_BY_CLIENT_ID"!=e&&"FSM_CDCCODE_FOR_TICKET"!=e&&"TICKET_CATEGORY"!=e||t.data.DATA.forEach(e=>{a.config.options.push({value:e.value,name:e.name})}),"FSM_WORKTYPE_BY_CDC"==e&&t.data.DATA.forEach(e=>{a.config.options.push({value:e.value,name:e.name,first_value:e.first_value,second_value:e.second_value})}))})},getForm:function(){var e=this,a="id=0&moduleName=Ticketing&subModuleCode=Ticketing";n["a"].GetDynamicForm(a).then((function(a){null!=a&&null!=a.data&&(e.FormSchema=e.ConvertCustomFieldIntoDynamicFormObj(a.data.data),e.FormSchema.forEach((a,t)=>{a.Data.forEach((t,i)=>{"Scheduled Appointment"!=a.group_name&&"Preferred Time"!=a.group_name&&"Recurring"!=a.group_name||(a.visibility=!1,"ScheduledStartDate"!=t.name&&"ScheduledEndDate"!=t.name&&"crew_id"!=t.name&&"resource_id"!=t.name&&"START_DATE"!=t.name&&"END_DATE"!=t.name&&"frequency"!=t.name&&"weekly"!=t.name&&"biweekly"!=t.name&&"recurringDate"!=t.name||(t.visibility=!1),"recurrence"==t.name&&(t.visibility=!1,t.astype="NumericField")),"is_read"==t.name&&(t.value=0),"cc_users"==t.name&&(t.mode="tag"),"ticket_for"==t.name&&(t.value="1",t.label="Ticket For"),"ticket_category_id"==t.name&&(t.config.showAddIcon=!0,t.config.onAddButtonClick=e.OpenCategoryModal),"on_behalf_consumer_id"!=t.name&&"location_nw"!=t.name&&"location_se"!=t.name&&"TicketType"!=t.name&&"is_field_service"!=t.name&&"on_behalf"!=t.name&&"ticket_channel"!=t.name&&"utility_id"!=t.name&&"cdc_id"!=t.name&&"work_type_id"!=t.name||(t.visibility=!1),"attachment"==t.name&&(t.label="",t.config={maxSize:5,accept:[{fileType:"doc",iconClass:"fa-file-word-o"},{fileType:"docx",iconClass:"fa-file-word-o"},{fileType:"txt",iconClass:"fa-file-text-o"},{fileType:"jpg",iconClass:"fa-file-image-o"},{fileType:"jpeg",iconClass:"fa-file-image-o"},{fileType:"png",iconClass:"fa-file-image-o"},{fileType:"gif",iconClass:"fa-file-image-o"},{fileType:"bmp",iconClass:"fa-file-image-o"},{fileType:"mp4",iconClass:"fa-file-video-o"},{fileType:"mov",iconClass:"fa-file-video-o"}],onChange:e.GetBase64String,showAddIcon:!1,onAddButtonClick:"",multiple:!1}),t.config.onChange=e.onChangeEventForFields})}),e.FormSchema.push({layoutType:"single",group_name:"Address",visibility:!1,Data:[{astype:"SlotField",name:"addresFields",value:"",visibility:!1}]}))}))},OpenCategoryModal:function(){var e=this;e.isManageCategory=!0},GetBase64String:function(e){try{var a=this;a.fileData=[];var t=e.target.files[0],i=new FileReader;i.onload=function(e){return function(e){var i=e.target.result,l=window.btoa(i),n=t.name;a.fileName=n;var s=n.lastIndexOf("."),o=n.substring(s+1,n.length);a.fileExt+="."+o;var r='{"ContentType":"'+t.type+'","Size":"'+t.size+'","Extension":"'+o+'"}',c=t.size;a.fileSize=c;var d={attachement_mime:r,fileName:n,base64String:l,fileSize:t.size,contentType:t.type};a.fileData.push(d)}}(),i.readAsBinaryString(t)}catch(l){}},SaveAsDraft:function(){var e=this;e.FormSchema.forEach((e,a)=>{e.Data.forEach((a,t)=>{"GeneralInformation"==e.group_name&&"TicketType"==a.name&&(a.value="DRAFT")})}),e.ticketType="DRAFT",e.saveForm()},saveForm:function(){var e=this;e.isLoading=!0;var a=e.ConvertDynamicFormObjToCustomFieldObj(e.FormSchema),t=e.ConvertDynamicFormObjToCustomFieldObj(e.StaticObj);a.forEach(a=>{if("on_behalf_consumer_id"==a.field_name&&(e.isBlank(a.field_value)||(a.field_value=a.field_value.value)),"work_type_id"==a.field_name&&(e.isBlank(a.field_value)||(a.field_value=a.field_value.value)),"cc_users"==a.field_name&&!e.isBlank(a.field_value)){var t="",i=0;for(i=0;i<a.field_value.length;i++)t=0==i?a.field_value[i].value:t+","+a.field_value[i].value;a.field_value=t}"weekly"==a.field_name&&(e.isBlank(a.field_value)||(a.field_value=a.field_value.value))}),t.forEach(e=>{a.push(e)});var i={data:a,moduleCode:"Ticketing",subModuleCode:"Ticketing"};n["a"].SaveDynamicForm(JSON.stringify(i)).then((function(a){e.isLoading=!1,null!=a&&null!=a.data&&"Success"==a.data[0].Status?(e.TicketNumber=JSON.parse(a.data[0].Value.OTHER_DATA).TICKET_NUMBER,e.ShowAlert(e.$t("AddedSuccess",[e.$t("Ticket")]),"success",!0,e.$t("Alert")),e.isSuccessMessage=!0,"DRAFT"==e.ticketType?e.saveTicketStatus=e.$t("TicketDraftSubmitStatus"):e.saveTicketStatus=e.$t("TicketSubmitStatus")):(e.ShowAlert(e.$t("ErrorWhileSaving",[e.$t("Ticket")]),"danger",!0,e.$t("Alert")),e.isSuccessMessage=!1)}))}}},h=f,y=Object(u["a"])(h,i,l,!1,null,null,null);a["default"]=y.exports}}]);
//# sourceMappingURL=chunk-2d22d3e6.js.map