(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1909"],{"471a":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loader",{attrs:{"is-visible":t.isLoading}}),a("section",{staticClass:"main-content"},[a("div",{ref:"hellp",attrs:{id:"divMaindealData"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 padding-t_8"},[a("div",{staticClass:"theme-primary partition-full"},[a("span",{staticClass:"p-name text-white"},[t._v(t._s(t.$t("AddPolicy")))]),a("span",{staticClass:"float-right"},[a("a",{staticClass:"p-action-btn text-white",attrs:{href:"javascript:;",title:t.$t("BacktoList")},on:{click:t.Close}},[a("em",{staticClass:"fa fa-angle-double-left pr-2",attrs:{"aria-hidden":"true"}}),a("br"),t._v(t._s(t.$t("BacktoList"))+" ")])])])])]),a("div",{staticClass:"border p-3"},[a("dynamic-form",{ref:"AddEmployee",attrs:{buttons:t.buttons,schema:t.FormSchema,mandatorytext:t.MandatoryString},on:{OnSubmit:t.onSubmit},scopedSlots:t._u([{key:"tgslot-Probation_Period",fn:function(e){e.data;return[a("div",{staticClass:"col-lg-12 mt-3"},[a("div",{staticClass:"heading-border mb-2"},[a("h5",{staticClass:"h5"},[a("span",[t._v(t._s(t.$t("ProbationPeriod")))]),a("small",{staticClass:"float-right"},[a("a",{attrs:{href:"javascript:;",id:"ProbationPeriod"},on:{click:t.addNewProbation}},[a("em",{staticClass:"fa fa-plus pr-2"}),t._v(t._s(t.$t("AddNew")))])])])])]),a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"listing"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered dataTable no-footer",attrs:{id:"tblProbationPeriod"}},[a("thead",{staticClass:"thead-bg"},[a("tr",[a("th",{attrs:{"min-width":"150px !important;"}},[a("span",{staticClass:"reqfield"},[t._v(t._s(t.$t("Department")))])]),a("th",{attrs:{"min-width":"150px !important;"}},[a("span",{staticClass:"reqfield"},[t._v(t._s(t.$t("Duration")))])]),a("th",{attrs:{"min-width":"150px !important;"}},[a("span",[t._v(t._s(t.$t("Days")))])]),a("th",{staticClass:"text-center"},[a("span",[t._v(t._s(t.$t("Action")))])])])]),a("tbody",t._l(t.probations,(function(e,i){return a("tr",{key:i},[a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.department_id,expression:"probation.department_id"}],staticClass:"form-control valid",on:{change:[function(a){var i=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(e,"department_id",a.target.multiple?i:i[0])},function(a){return t.probationDepartmentChange(e)}]}},[a("option",{attrs:{value:""}},[t._v(t._s(t.$t("Select")))]),t._l(t.DepartmentData,(function(e,i){return a("option",{key:i,domProps:{value:String(e.value)}},[t._v(" "+t._s(t.$t(e.name)))])}))],2)]),a("td",[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.duration,expression:"probation.duration"}],staticClass:"form-control",attrs:{type:"text",autocomplete:"off"},domProps:{value:e.duration},on:{input:[function(a){a.target.composing||t.$set(e,"duration",a.target.value)},function(a){return t.checkLength(e)}]}}),a("span",{staticClass:"input-group-text p-0 border-0 bg-white"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.duration_type,expression:"probation.duration_type"}],staticClass:"nosearch form-control",on:{change:function(a){var i=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(e,"duration_type",a.target.multiple?i:i[0])}}},[a("option",{attrs:{value:"1"}},[t._v(t._s(t.$t("Month/s")))]),a("option",{attrs:{value:"2"}},[t._v(t._s(t.$t("Day/s")))])])])]),a("span",{staticClass:"field-validation-valid",staticStyle:{display:"none","font-weight":"normal","font-size":"90%"},attrs:{id:"messageProbationDuration"}})]),a("td",{staticClass:"align-top"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.days_type,expression:"probation.days_type"}],staticClass:"form-control",on:{change:function(a){var i=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(e,"days_type",a.target.multiple?i:i[0])}}},[a("option",{attrs:{value:"1"}},[t._v(t._s(t.$t("Calendar")))]),a("option",{attrs:{value:"2"}},[t._v(t._s(t.$t("Business")))])])]),a("td",{staticClass:"single-action text-center"},[a("a",{directives:[{name:"show",rawName:"v-show",value:i>0,expression:"index > 0"}],staticClass:"delete-row",attrs:{title:"Delete"},on:{click:function(e){return t.deleteProbation(i)}}},[a("em",{staticClass:"fa fa-trash text-danger"})])])])})),0)])])])])]}},{key:"tgslot-Notice_period",fn:function(e){e.data;return[a("div",{staticClass:"col-lg-12 mt-3"},[a("div",{staticClass:"heading-border mt-3 mb-2"},[a("h5",{staticClass:"h5"},[a("span",[t._v(t._s(t.$t("NoticePeriod")))]),a("small",{staticClass:"float-right"},[a("a",{attrs:{href:"javascript:;",id:"NoticePeriod"},on:{click:t.addNewNotice}},[a("em",{staticClass:"fa fa-plus pr-2"}),t._v(t._s(t.$t("AddNew")))])])])])]),a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"listing"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered dataTable no-footer",attrs:{id:"tblNoticePeriod"}},[a("thead",{staticClass:"thead-bg"},[a("tr",[a("th",{attrs:{"min-width":"150px !important;"}},[a("span",{staticClass:"reqfield"},[t._v(t._s(t.$t("Department")))])]),a("th",{attrs:{"min-width":"150px !important;"}},[a("span",{staticClass:"reqfield"},[t._v(t._s(t.$t("Duration")))])]),a("th",{attrs:{"min-width":"150px !important;"}},[a("span",[t._v(t._s(t.$t("Days")))])]),a("th",{staticClass:"text-center"},[a("span",[t._v(t._s(t.$t("Action")))])])])]),a("tbody",t._l(t.notices,(function(e,i){return a("tr",{key:i},[a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.department_id,expression:"notice.department_id"}],staticClass:"form-control valid",on:{change:[function(a){var i=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(e,"department_id",a.target.multiple?i:i[0])},function(a){return t.noticeDepartmentChange(e)}]}},[a("option",{attrs:{value:""}},[t._v(t._s(t.$t("Select")))]),t._l(t.DepartmentData,(function(e,i){return a("option",{key:i,domProps:{value:String(e.value)}},[t._v(" "+t._s(t.$t(e.name)))])}))],2)]),a("td",[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.duration,expression:"notice.duration"}],staticClass:"form-control",attrs:{type:"text",autocomplete:"off"},domProps:{value:e.duration},on:{input:[function(a){a.target.composing||t.$set(e,"duration",a.target.value)},function(a){return t.checkLength(e)}]}}),a("span",{staticClass:"input-group-text p-0 border-0 bg-white"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.duration_type,expression:"notice.duration_type"}],staticClass:"nosearch form-control",on:{change:function(a){var i=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(e,"duration_type",a.target.multiple?i:i[0])}}},[a("option",{attrs:{value:"1"}},[t._v(t._s(t.$t("Month/s")))]),a("option",{attrs:{value:"2"}},[t._v(t._s(t.$t("Day/s")))])])])]),a("span",{staticClass:"field-validation-valid",staticStyle:{display:"none","font-weight":"normal","font-size":"90%"},attrs:{id:"messageNoticeDuration"}})]),a("td",{staticClass:"align-top"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.days_type,expression:"notice.days_type"}],staticClass:"form-control",on:{change:function(a){var i=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(e,"days_type",a.target.multiple?i:i[0])}}},[a("option",{attrs:{value:"1"}},[t._v(t._s(t.$t("Calendar")))]),a("option",{attrs:{value:"2"}},[t._v(t._s(t.$t("Business")))])])]),a("td",{staticClass:"single-action text-center"},[a("a",{directives:[{name:"show",rawName:"v-show",value:i>0,expression:"index > 0"}],staticClass:"delete-row",attrs:{title:"Delete"},on:{click:function(e){return t.deleteNotice(i)}}},[a("em",{staticClass:"fa fa-trash text-danger"})])])])})),0)])])])])]}}])})],1)])])],1)},s=[],n=(a("14d9"),a("9769")),o={data(){return{probations:[{department_id:"",duration:"",duration_type:"1",days_type:"1"}],notices:[{department_id:"",duration:"",duration_type:"1",days_type:"1"}],isLoading:!1,DepartmentData:[],CompanyId:null,Userid:null,policyModels:[],MandatoryString:"Fields marked with an asterisk (*) are mandatory.",FormSchema:[{layoutType:"triple",Data:[{astype:"TextField",label:this.$t("PolicyName"),name:"PolicyName",value:"",placeholder:"Policy Name",validationRules:{required:!0,max:100}},{astype:"DateField",label:this.$t("StartDate"),name:"StartDate",value:"",placeholder:"Enter Start Date",config:{options:[]},validationRules:{required:!0},visibility:!0}]},{layoutType:"single",Data:[{astype:"TextAreaField",label:this.$t("Description"),name:"Description",value:"",validationRules:""}]},{layoutType:"single",Data:[{astype:"SlotField",name:"Probation_Period",value:"",visibility:!0,validationRules:{required:!1}}]},{layoutType:"single",Data:[{astype:"SlotField",name:"Notice_period",value:"",visibility:!0,validationRules:{required:!1}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save",isVisible:!0},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.Close}]}},created:async function(){var t=this;t.CompanyId=this.GetUserInfo.CompanyId,t.Userid=this.GetUserInfo.ID,t.PolicyId=this.$route.params.id,await t.ShowDepartment()},methods:{Close:function(){this.$router.push({name:"PolicyListing"})},ShowDepartment:async function(){var t=this;t.DepartmentData=[];var e="ids=&moduleName=&type=DEPARTMENT_TYPE&search=&refId=";await n["a"].GetDDLData(e).then((function(e){e.data.DATA.length>0&&(t.FormSchema[0].Data[1].config.options=e.data.DATA,t.DepartmentData=e.data.DATA),t.$refs.AddEmployee.UpdateKeyValue()}))},addNewProbation(){this.probations.push({department_id:"",duration:"",duration_type:"1",days_type:"1"})},addNewNotice(){this.notices.push({department_id:"",duration:"",duration_type:"1",days_type:"1"})},deleteProbation(t){t>0&&this.probations.splice(t,1)},deleteNotice(t){t>0&&this.notices.splice(t,1)},probationDepartmentChange(t){},noticeDepartmentChange(t){},checkLength(t){},onSubmit(t,e){var a=this,i=t.PolicyName,s=t.Description,o=t.StartDate;a.probations.forEach(t=>{var e={policy_id:a.PolicyId,name:i,description:s,start_date:o,status:1001,company_id:a.CompanyId,user_id:a.Userid,department_id:t.department_id,duration_type_id:t.duration_type,duration:t.duration,days_type_id:t.days_type,period_type:0,TYPE_VAL:"INSERT",DurationType:t.duration_type,DaysType:t.days_type};a.policyModels.push(e)}),a.notices.forEach(t=>{var e={policy_id:a.PolicyId,name:i,description:s,start_date:o,status:1001,company_id:a.CompanyId,user_id:a.Userid,department_id:t.department_id,duration_type_id:t.duration_type,duration:t.duration,days_type_id:t.days_type,period_type:1,TYPE_VAL:"INSERT",DurationType:t.duration_type,DaysType:t.days_type};a.policyModels.push(e)});var r=a.policyModels,l=JSON.stringify(r);n["a"].AddEditPolicy(l).then(t=>{1==t.data[0].result?(a.ShowAlert(a.$t("AddedSuccess",[a.$t("Policy")]),"success",!0,a.$t("Alert")),a.Close(),a.$parent.FetchData()):(a.ShowAlert(a.$t("AddedError",[a.$t("Policy")]),"failure",!0,a.$t("Alert")),a.Close())})}}},r=o,l=a("2877"),d=Object(l["a"])(r,i,s,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0c1909.js.map