(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0af0a6"],{"0d40":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("loader",{attrs:{"is-visible":e.isLoading}}),t("section",{staticClass:"main-content"},[t("div",{ref:"hellp",attrs:{id:"divMaindealData"}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12 padding-t_8"},[t("div",{staticClass:"theme-primary partition-full"},[t("span",{staticClass:"p-name text-white"},[e._v(e._s(e.$t("ManageOffboardEmployee")))]),t("span",{staticClass:"float-right"},[t("a",{staticClass:"p-action-btn text-white",attrs:{href:"javascript:;",title:e.$t("BacktoList")},on:{click:e.Close}},[t("em",{staticClass:"fa fa-angle-double-left pr-2",attrs:{"aria-hidden":"true"}}),t("br"),e._v(e._s(e.$t("BacktoList"))+" ")])])])])]),t("div",{staticClass:"border p-3"},[t("Form",{ref:"JobPostForm"},[t("dynamic-form",{ref:"AddEmployee",attrs:{buttons:e.buttons,schema:e.FormSchema,mandatorytext:e.MandatoryString},on:{OnSubmit:e.onSubmit}})],1)],1)])])],1)},l=[],s=(t("14d9"),t("9769")),o={data(){return{isLoading:!1,EmployeeData:[],UserData:[],EmployeeExitId:0,EditEmployeeData:[],MandatoryString:"Fields marked with an asterisk (*) are mandatory.",FormSchema:[{layoutType:"triple",group_name:"Separation Form",group_display_name:this.$t("SeparationForm"),Data:[{astype:"SelectField",label:this.$t("EmployeeName"),name:"EmployeeName",value:"",mode:"tag",config:{options:[],onChange:this.onChangeEmployeeName},visibility:!0,validationRules:{required:!0}},{astype:"TextField",label:this.$t("EmployeeId"),name:"EmployeeId",value:"",validationRules:{required:!1,max:100}},{astype:"TextField",label:this.$t("Email"),name:"Email",value:"",validationRules:{required:!1,max:100}},{astype:"TextField",label:this.$t("Department"),name:"Department",value:"",validationRules:{required:!1,max:100}},{astype:"TextField",label:this.$t("Designation"),name:"Designation",value:"",validationRules:{required:!1,max:100}}]},{layoutType:"single",Data:[{astype:"TextAreaField",label:this.$t("Reason"),name:"Reason",value:"",validationRules:""}]},{layoutType:"triple",group_name:"Employee Checklist",group_display_name:this.$t("EmployeeChecklist"),Data:[{astype:"RadioField",label:this.$t("AllTaskCompleted"),name:"AllTaskCompleted",value:"0",placeholder:"",config:{options:[{value:"1",name:"Yes"},{value:"0",name:"No"}]},visibility:!0,validationRules:{required:!1}},{astype:"RadioField",label:this.$t("KnowledgeTransferred"),name:"KnowledgeTransferred",value:"0",placeholder:"",config:{options:[{value:"1",name:"Yes"},{value:"0",name:"No"}]},visibility:!0,validationRules:{required:!1}},{astype:"RadioField",label:this.$t("DocumentTransferred"),name:"DocumentTransferred",value:"0",placeholder:"",config:{options:[{value:"1",name:"Yes"},{value:"0",name:"No"}]},visibility:!0,validationRules:{required:!1}},{astype:"RadioField",label:this.$t("StaffIdentificationCardCollected"),name:"StaffIdentificationCardCollected",value:"0",placeholder:"",config:{options:[{value:"1",name:"Yes"},{value:"0",name:"No"}]},visibility:!0,validationRules:{required:!1}}]},{layoutType:"triple",group_name:"IT Department",group_display_name:this.$t("ITDepartment"),Data:[{astype:"RadioField",label:this.$t("EmailAccessUpdated"),name:"EmailAccessUpdated",value:"0",placeholder:"",config:{options:[{value:"1",name:"Yes"},{value:"0",name:"No"}]},visibility:!0,validationRules:{required:!1}},{astype:"RadioField",label:this.$t("ITAssetsVerified"),name:"ITAssetsVerified",value:"0",placeholder:"",config:{options:[{value:"1",name:"Yes"},{value:"0",name:"No"}]},visibility:!0,validationRules:{required:!1}}]},{layoutType:"triple",group_name:"Account Department",group_display_name:this.$t("AccountDepartment"),Data:[{astype:"RadioField",label:this.$t("LeaveBalanceVerified"),name:"LeaveBalanceVerified",value:"0",placeholder:"",config:{options:[{value:"1",name:"Yes"},{value:"0",name:"No"}]},visibility:!0,validationRules:{required:!1}},{astype:"RadioField",label:this.$t("AnyDues"),name:"AnyDues",value:"0",placeholder:"",config:{options:[{value:"1",name:"Yes"},{value:"0",name:"No"}]},visibility:!0,validationRules:{required:!1}},{astype:"RadioField",label:this.$t("FinalPaymentVerified"),name:"FinalPaymentVerified",value:"0",placeholder:"",config:{options:[{value:"1",name:"Yes"},{value:"0",name:"No"}]},visibility:!0,validationRules:{required:!1}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save",isVisible:!0},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.Close}]}},created:function(){var e=this;e.GetUserList(),e.EmployeeExitId=this.$route.params.id,e.EmployeeExitId>0&&e.EditEmployee()},methods:{EditEmployee(){var e=this,a="Id="+e.EmployeeExitId;s["a"].GetEmployeeExitDetails(a).then(a=>{(a.data.status="Success")&&(e.EditEmployeeData=a.data.result[0],null!=e.EditEmployeeData.EMPLOYEE_EXIT_ID&&e.EditEmployeeName(e.EditEmployeeData.EMPLOYEE_EXIT_ID),e.FormSchema[0].Data[1].value=null==e.EditEmployeeData.EMPLOYEE_ID?"--":e.EditEmployeeData.EMPLOYEE_ID,e.FormSchema[1].Data[0].value=e.EditEmployeeData.REASON,e.FormSchema[2].Data[0].value=1==e.EditEmployeeData.IS_ALL_TASK_COMPLETED?1:0,e.FormSchema[2].Data[1].value=1==e.EditEmployeeData.IS_KNOWLEDGE_TRANSFERRED?1:0,e.FormSchema[2].Data[2].value=1==e.EditEmployeeData.IS_DOCUMENT_TRANSFERRED?1:0,e.FormSchema[2].Data[3].value=1==e.EditEmployeeData.IS_STAFF_IDENTIFICATION_CARD_COLLECTED?1:0,e.FormSchema[3].Data[0].value=1==e.EditEmployeeData.IS_EMAIL_ACCESS_UPDATED?1:0,e.FormSchema[3].Data[1].value=1==e.EditEmployeeData.IS_IT_ASSETS_VERIFIED?1:0,e.FormSchema[4].Data[0].value=1==e.EditEmployeeData.IS_LEAVE_BALANCE_VARIFIED?1:0,e.FormSchema[4].Data[1].value=1==e.EditEmployeeData.IS_ANY_DUES?1:0,e.FormSchema[4].Data[2].value=1==e.EditEmployeeData.IS_FINAL_PAYMENT_VARIFIED?1:0)})},GetUserList(){var e=this,a="projectId=&userType=&isActive=1&ticketId=0&moduleName=OffboardEmployee";s["a"].GetUserList(a).then(a=>{""!=a.data&&(e.EmployeeData=a.data,e.EmployeeData.forEach(a=>{e.FormSchema[0].Data[0].config.options.push({name:a.USERNAME,value:a.USERID})})),e.$refs.AddEmployee.UpdateKeyValue()})},onChangeEmployeeName:function(e){var a=this,t=e.currentTarget._vOptions[1],i="UserId="+t;s["a"].GetUserDetailsByUserId(i).then(e=>{""!=e.data&&(a.UserData=e.data[0],a.FormSchema[0].Data[1].value=null==a.UserData.user_emp_id?"--":a.UserData.user_emp_id,a.FormSchema[0].Data[2].value=a.UserData.email_id,a.FormSchema[0].Data[3].value=null==a.UserData.DEPARTMENT_NAME?"--":a.UserData.DEPARTMENT_NAME,a.FormSchema[0].Data[4].value=null==a.UserData.DESIGNATION_NAME?"--":a.UserData.DESIGNATION_NAME,a.FormSchema[1].Data[0].value=a.UserData.reason,a.FormSchema[2].Data[0].value=1==a.UserData.is_all_task_completed?1:0,a.FormSchema[2].Data[1].value=1==a.UserData.is_knowledge_transferred?1:0,a.FormSchema[2].Data[2].value=1==a.UserData.is_document_transferred?1:0,a.FormSchema[2].Data[3].value=1==a.UserData.is_staff_identification_card_collected?1:0,a.FormSchema[3].Data[0].value=1==a.UserData.is_email_access_updated?1:0,a.FormSchema[3].Data[1].value=1==a.UserData.is_it_assets_verified?1:0,a.FormSchema[4].Data[0].value=1==a.UserData.is_leave_balance_varified?1:0,a.FormSchema[4].Data[1].value=1==a.UserData.is_any_dues?1:0,a.FormSchema[4].Data[2].value=1==a.UserData.is_final_payment_varified?1:0)})},EditEmployeeName:function(e){var a=this,t=e;a.FormSchema[0].Data[0].value=e;var i="UserId="+t;s["a"].GetUserDetailsByUserId(i).then(e=>{""!=e.data&&(a.UserData=e.data[0],a.FormSchema[0].Data[1].value=null==a.UserData.user_emp_id?"--":a.UserData.user_emp_id,a.FormSchema[0].Data[2].value=a.UserData.email_id,a.FormSchema[0].Data[3].value=null==a.UserData.DEPARTMENT_NAME?"--":a.UserData.DEPARTMENT_NAME,a.FormSchema[0].Data[4].value=null==a.UserData.DESIGNATION_NAME?"--":a.UserData.DESIGNATION_NAME),a.$refs.AddEmployee.UpdateKeyValue()})},Close:function(){this.$router.push({name:"EmployeeExitListing"})},onSubmit(e,a){var t=this,i={EmpExitId:void 0==t.$parent.EmployeeExitId?0:t.$parent.EmployeeExitId,EmployeeId:e.EmployeeName,AllTaskCompleted:1==e.AllTaskCompleted?"1":"0",KnowledgeTransferred:1==e.KnowledgeTransferred?"1":"0",DocumnetTransferred:1==e.DocumentTransferred?"1":"0",EmailAccessUpdated:1==e.EmailAccessUpdated?"1":"0",ItAssetsVerified:1==e.ITAssetsVerified?"1":"0",LeaveBalanceVarified:1==e.LeaveBalanceVerified?"1":"0",AnyDues:1==e.AnyDues?"1":"0",FinalPaymentVarified:1==e.FinalPaymentVerified?"1":"0",Reason:e.Reason,IsStaffIdentification:1==e.StaffIdentificationCardCollected?"1":"0"},l=JSON.stringify(i);s["a"].SaveExitEmployee(l).then(e=>{(e.data[0].Column1=1)?(t.ShowAlert(t.$t("SaveoffboardEmployee"),"success",!0,t.$t("Alert")),t.Close()):(e.data[0].Column1=2)?(t.ShowAlert(t.$t("UpdateExit"),"success",!0,t.$t("Alert")),t.Close()):t.ShowAlert(t.$t("Exit"),"failure",!0,t.$t("Alert"))})}}},r=o,n=t("2877"),d=Object(n["a"])(r,i,l,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0af0a6.js.map