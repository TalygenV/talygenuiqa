(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CRMManageLead"],{"4e3a":function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("section",{staticClass:"main-content"},[t("loader",{attrs:{"is-visible":a.isLoading}}),t("div",{attrs:{id:"divMainLeadData"}},["Wizard"!=a.callFrom?t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12 padding-t_8"},[t("div",{staticClass:"theme-primary partition-full"},[t("span",{staticClass:"p-name text-white"},[a._v("Manage Lead")]),t("span",{staticClass:"float-right"},[t("a",{staticClass:"p-action-btn text-white",attrs:{href:"javascript:;",title:"Page Tour"},on:{click:function(e){return a.setTourGuideSteps(0)}}},[t("em",{staticClass:"fa fa-road",attrs:{"aria-hidden":"true"}}),t("br"),a._v("Page Tour ")])])])])]):a._e(),t("div",{staticClass:"border p-3"},[t("Form",{ref:"LeadForm"},[t("dynamic-form",{ref:"ManageLeadForm",attrs:{buttons:a.buttons,schema:a.FormSchema},on:{OnSubmit:a.saveForm}})],1),a.showaddindustryModal?t("modaladdindustry",{attrs:{callFrom:"lead"},on:{close:function(e){a.showaddindustryModal=!1},updatedata:a.UpdateSelectJson}}):a._e(),a.showaddroletitleModal?t("modaladdroletitle",{on:{close:function(e){a.showaddroletitleModal=!1},updatedata:a.UpdateSelectJson}}):a._e(),a.showaddleadsourceModal?t("modaladdleadsource",{attrs:{callFrom:"lead"},on:{close:function(e){a.showaddleadsourceModal=!1},updatedata:a.UpdateSelectJson}}):a._e()],1)])],1)])},o=[],d=t("c7eb"),r=t("1da1"),i=(t("d3b7"),t("159b"),t("b0c0"),t("4de4"),t("99af"),t("e9c4"),t("9769")),s=t("4dad"),l=t("3a69"),c=t("e7cc"),u={props:{callFrom:null},components:{modaladdindustry:s["a"],modaladdroletitle:l["a"],modaladdleadsource:c["a"]},data:function(){return{isLoading:!1,leadId:this.$route.params.id,showaddindustryModal:!1,showaddroletitleModal:!1,showaddleadsourceModal:!1,phoneError:!1,UserName:null,UserId:null,FormSchema:[],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save",onclick:this.saveForm},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.onCancel,isVisible:!0}]}},created:function(){var a=this;return Object(r["a"])(Object(d["a"])().mark((function e(){var t;return Object(d["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=a,t.UserId=t.GetUserInfo.ID,t.UserName=t.GetUserInfo.Name,t.getForm(t.leadId);case 4:case"end":return e.stop()}}),e)})))()},methods:{getForm:function(a){var e=this;e.isLoading=!0;var t="recordId=".concat(a,"&moduleName=CRM&subModuleCode=CRM_LEADS&langCode=en");i["a"].GetDynamicForm(t).then((function(a){null!=a&&null!=a.data&&(e.FormSchema=e.$refs.ManageLeadForm.ConvertCustomFieldIntoDynamicFormObj(a.data.data),e.FormSchema.forEach((function(a,t){a.Data.forEach(function(){var t=Object(r["a"])(Object(d["a"])().mark((function t(n,o){var r,i;return Object(d["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("industry_type_id"==n.name&&(n.config.showAddIcon=!0,n.config.onAddButtonClick=e.openaddIndustrypopup),"channel_id"==n.name&&(n.config.showAddIcon=!0,n.config.onAddButtonClick=e.openaddLeadSourcepopup),"role_title_id"==n.name&&(n.config.showAddIcon=!0,n.config.onAddButtonClick=e.openaddRoleTitlepopup),"lead_state"==n.name&&""==n.value&&(n.config.options=null),"lead_country"!=n.name||""==n.value){t.next=8;break}return r=a.Data.filter((function(a){return"lead_state"==a.name}))[0],t.next=8,e.GetDropDownData("ACCOUNT_STATE",r,n.value,"EDIT");case 8:"lead_date"==n.name&&""==n.value&&(n.value=new Date),"status_id"==n.name&&""==n.value&&(n.value=n.config.options.filter((function(a){return"active"==a.name.toLowerCase()}))[0].value),"lead_owner_id"==n.name&&(""==n.value?n.value={label:e.UserName,value:e.UserId}:null!=n.config.options?(i=n.config.options.filter((function(a){return a.value==n.value}))[0],n.value={label:i.name,value:i.value}):n.value={label:e.UserName,value:e.UserId}),"lead_date"==n.name&&(n.config={mode:"date",format:"M/D/YYYY"}),"expected_close_date"==n.name&&(n.config={mode:"date",format:"M/D/YYYY",minDate:new Date}),n.config.onChange=e.onChangeEventForFields;case 14:case"end":return t.stop()}}),t)})));return function(a,e){return t.apply(this,arguments)}}())})),e.isLoading=!1)}))},openaddIndustrypopup:function(){var a=this;a.showaddindustryModal=!0},openaddRoleTitlepopup:function(){var a=this;a.showaddroletitleModal=!0},openaddLeadSourcepopup:function(){var a=this;a.showaddleadsourceModal=!0},UpdateSelectJson:function(a,e){var t=this;t.FormSchema.forEach((function(t,n){t.Data.forEach((function(t,n){t.name==a&&null!=e&&(t.config.options=[],e.forEach((function(a){t.config.options.push({name:a.name,value:a.value})})))}))}))},onChangeEventForFields:function(a,e,t){var n=this,o=this;"lead_country"==e.name&&n.FormSchema.forEach((function(a,t){a.Data.forEach(function(){var a=Object(r["a"])(Object(d["a"])().mark((function a(t,n){var r;return Object(d["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if("lead_state"!=t.name){a.next=4;break}return r=e.value,a.next=4,o.GetDropDownData("ACCOUNT_STATE",t,r,null);case 4:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}())}))},GetDropDownData:function(){var a=Object(r["a"])(Object(d["a"])().mark((function a(e,t,n,o){var r,s;return Object(d["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=this,s="id=&moduleName=CRM&type=".concat(e,"&refId=").concat(n),a.next=4,i["a"].getDDLData(s+"&search=").then((function(a){if(void 0!=a.data.DATA){var n=a.data.DATA;t.config.options=[],"EDIT"!=o&&(t.value=""),"ACCOUNT_STATE"==e&&n.forEach((function(a){t.config.options.push({value:a.value,name:a.name})})),r.$refs.ManageLeadForm.UpdateKeyValue()}}));case 4:case"end":return a.stop()}}),a,this)})));function e(e,t,n,o){return a.apply(this,arguments)}return e}(),saveForm:function(){var a=this;a.$refs.LeadForm.validate().then((function(e){if(e){a.isLoading=!0;var t=a.$refs.ManageLeadForm.ConvertDynamicFormObjToCustomFieldObj(a.FormSchema);t.forEach((function(e){"lead_owner_id"==e.field_name&&(a.isBlank(e.field_value)||(e.field_value=e.field_value.value)),"modified_by"==e.field_name&&(e.field_value=vm.UserId)}));var n={data:t,moduleCode:"CRM",subModuleCode:"CRM_LEADS"};i["a"].SaveDynamicForm(JSON.stringify(n)).then((function(e){null!=e&&null!=e.data&&"Success"==e.data[0].Status&&(a.leadId>0?(a.ShowAlert(a.$t("UpdatedSuccess",[a.$t("Lead")]),"success",!0,a.$t("Alert")),a.$router.push({name:"CRMLead"})):(a.ShowAlert(a.$t("AddedSuccess",[a.$t("Lead")]),"success",!0,a.$t("Alert")),a.$router.push({name:"CRMLead"})))})),a.isLoading=!1}}))},onCancel:function(){var a=this;"Wizard"==a.callFrom?a.$emit("closewizard"):a.$router.push({name:"CRMLead"})}}},f=u,m=t("2877"),p=Object(m["a"])(f,n,o,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=CRMManageLead.js.map