(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1076583e"],{"39f5":function(e,a,t){var i=t("24fb");a=i(!1),a.push([e.i,".unlayer-editor{position:relative;height:650px;width:1200px}.unlayer-editor iframe{position:absolute}",""]),e.exports=a},"49aa":function(e,a,t){var i=t("39f5");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=t("499e").default;o("1e8ae2a5",i,!0,{sourceMap:!1,shadowMode:!1})},"502a":function(e,a,t){"use strict";t("f372")},"7ac6":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e._self._c;return a("div",[a("loader",{attrs:{"is-visible":e.isLoading}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-2 mt-2"},[a("LeftColumn")],1),e.isShowList?a("div",{staticClass:"col-10"},[a("tg-list",{attrs:{IsShowAction:!1,showCheckBox:!0,ModuleName:"EmailTemplate",SubModuleCode:"EmailTemplate",IdentityColumn:"template_id",HeaderText:e.$t("EmailTemplate"),ListData:e.EmailTemplateData,HeaderData:e.filteredHeaders,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,IsSearchFieldsOnTop:!1,SearchPosition:"top",SearchFields:e.topSearchFields,RenderRowActionMethod:e.renderActions,ListDataCallBackFunction:e.FetchData,IsFilterApplied:!!e.searchCondition,LegendArray:[],sourcetype:"",NorecordfoundText:e.$t("NoRecordfound")},on:{LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,ActionButtonClick:e.actionButtonClick,SortdataButtonClick:e.sortdata},scopedSlots:e._u([{key:"slotdata",fn:function({data:t}){return["status_id"==t.column.COLUMN_NAME?[e.isCRMShowStausDrop(t.row.status_id,"COMPANYSETUP_UPDATE")?a("listing-status",{ref:"updatestatus",attrs:{isfor:"COMPANYSETUP_UPDATE",dataid:t.row.template_id,"data-controller":"COMPANYSETUP_UPDATE",statuslist:e.StatusListForListing,item:t.row.template_id,"data-action":"index",module:"EmailTemplate",subModule:"EmailTemplate",dataselected:1001==t.row.status_id.value?"Active":"Inactive",callbackfunction:e.FetchData,isselectedvaluestring:!0}}):e._e()]:e._e()]}}],null,!1,1748797246)})],1):e.showEmailTemplate?a("div",{staticClass:"col-10"},[a("AddEmailTemplate",{attrs:{EditItme:e.Item}})],1):e.ShowAddAdvancedEmailTemplate?a("div",{staticClass:"col-10"},[a("AddAdvancedEmailTemplate",{attrs:{EditItme:e.Item,Template_id:e.Template_id}})],1):e._e()])],1)},o=[],l=(t("14d9"),t("b7ef"),t("9769"));let n=[{title:"Add Advanced Email Template",iconClass:"fa fa-envelope-o",callbackfunction:"AddAdvancedEmailTemplate",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0},{title:"Add",iconClass:"fa-plus",callbackfunction:"AddEmailTemplate",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0},{id:"ActiveMultiple",title:"Active",iconClass:"fa-check",callbackfunction:"ActiveMultipleListing",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0},{id:"InactiveMultiple",title:"Inactive",iconClass:"fa-close",callbackfunction:"InactiveMultipleListing",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0},{id:"DeleteMultiple",title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",isdisabled:!0,isvisible:!0}],s=[{fieldName:"Search by Name",fieldType:"text",fieldSearchConditionName:["template_name"],isSearch:!0}],r=[{title:"View",callbackfunction:"ViewReport",icon:"fa fa-eye action-icon",additionalSpan:""},{title:"Edit",callbackfunction:"editreport",icon:"fa fa-pencil text-success action-icon",additionalSpan:""},{title:"Send Email",callbackfunction:"sendemail",href:"javascript:void(0)",icon:"fa fa-paper-plane text-success action-icon",additionalSpan:""},{title:"Schedule",callbackfunction:"setschedule",href:"javascript:void(0)",icon:"fa fa-clock-o text-warning action-icon",additionalSpan:""},{title:"Share",callbackfunction:"sharereport",href:"javascript:void(0)",icon:"fa fa-share-alt text-success action-icon",additionalSpan:""}];function d(e,a,t){var i=e;let o=t,n={};n["moduleName"]=a,n["type"]=t,l["a"].GetMainReportSearching(o).then((function(e){console.log(leftsearchSchema);var a=e.data;console.log("folderid",a),null!=a&&("FOLDER_NAME"==t&&(i.leftSearchFields[4].listOptions=a.map(e=>{const a={};return a.name=e.FOLDER_NAME,a.value=e.FOLDER_ID.toString(),a}),i.LeadStatusList=a.map(e=>{const a={};return a.name=e.FOLDER_NAME,a.value=e.FOLDER_ID.toString(),a})),"CREATED_BY"==t&&(i.leftSearchFields[3].listOptions=a.map(e=>{const a={};return a.name=e.CREATED_BY,a.value=e.CREATED_ID.toString(),a}),i.LeadStatusList=a.map(e=>{const a={};return a.name=e.CREATED_BY,a.value=e.CREATED_ID.toString(),a})),"MODIFIED_BY"==t&&(i.leftSearchFields[7].listOptions=a.map(e=>{const a={};return a.name=e.MODIFIED_BY,a.value=e.MODIFIED_ID.toString(),a}),i.LeadStatusList=a.map(e=>{const a={};return a.name=e.MODIFIED_BY,a.value=e.MODIFIED_ID.toString(),a})))}))}var m={buttons:n,topsearchSchema:s,listActions:r,bindleftCommonSearchdropdown:d},c=t("8dd4"),u=t("aae2"),p=function(){var e=this,a=e._self._c;return a("section",{staticClass:"main-content"},[a("loader",{attrs:{"is-visible":e.isLoading}}),a("div",{staticClass:"container-fluid border-0 m-0 p-0"},[a("div",{staticClass:"w-100"},[a("div",{staticClass:"col-md-12 p-0"},[a("div",{staticClass:"theme-primary partition-full"},[a("span",{staticClass:"p-name text-white"},[e._v(e._s(e.$t("AddEmailTemplate")))]),a("span",{staticClass:"p-actions float-right tablehead"},[a("a",{staticClass:"p-action-btn text-white",attrs:{href:"/EmailTemplate/Index"}},[a("i",{staticClass:"fa fa-angle-double-left"}),a("br"),e._v(e._s(e.$t("BacktoList"))+" ")])])])])])]),a("div",{staticClass:"border p-3"},[a("dynamic-form",{ref:"AddEditEmail",attrs:{schema:e.FormSchema,buttons:e.buttons},on:{OnSubmit:e.onSubmit},scopedSlots:e._u([{key:"tgslot-emailEditor",fn:function({data:t}){return[a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("EmailEditor",{ref:"emailEditor",attrs:{name:"emailEditor",appearance:e.appearance,"min-height":e.minHeight,"project-id":e.Template_id,locale:e.locale,tools:e.tools,options:e.options},on:{load:e.editorLoaded}})],1),e.flag?e._e():a("span",{staticClass:"text-danger ml-4",attrs:{name:"emailEditor"}},[e._v(e._s(t.error))])])]}}])})],1)],1)},h=[],S=t("b990"),g={props:{Template_id:{type:Number,required:!0},EditItme:{type:Array,required:!1}},name:"app",components:{EmailEditor:S["EmailEditor"]},data(){return{isLoading:!1,FormSchema:[{layoutType:"triple",Data:[{astype:"TextField",label:this.$t("TemplateName"),name:"TemplateName",value:"",placeholder:"Template Name",validationRules:{required:!0},disabled:!1},{astype:"TextField",label:this.$t("Subject"),name:"Subject",value:"",placeholder:"Subject",validationRules:{required:!0}},{astype:"SelectField",label:this.$t("Category"),name:"Category",value:"",placeholder:"Category",config:{options:[],onChange:this.GetSubCategoryDDL},validationRules:{required:!0}},{astype:"SelectField",label:this.$t("SubCategory"),name:"SubCategory",value:"",placeholder:"Sub Category",config:{options:[]}},{astype:"SelectField",label:this.$t("Status"),name:"Status",value:"",placeholder:"Status",config:{options:[]}}]},{layoutType:"single",Data:[{astype:"SlotField",name:"emailEditor",value:"",placeholder:"Create Template",validationRules:{required:!1},config:{options:[],onChange:this.PaymentGatewayAdditionalDetail}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.BackButton}],minHeight:"800px",locale:"en",tools:{image:{enabled:!0}},options:{},appearance:{theme:"light",panels:{tools:{dock:"right"}}},CatData:[],TempContent:"",isDataLoaded:!1,flag:!1,SubCatData:[],fileData:[],UserId:"",CompanyId:"",ContainerName:""}},async created(){var e=this;e.ContainerName=e.GetUserInfo.ContainerName,e.UserId=e.GetUserInfo.ID,e.CompanyId=e.GetUserInfo.CompanyId,await e.GetTemplateCategoryListForCA(),await e.GetStatusList(),e.EditItme.template_id>0&&(e.Template_id=e.EditItme.template_id,e.FormSchema[0].Data[0].value=e.EditItme.template_name,e.FormSchema[0].Data[0].disabled=!0,e.FormSchema[0].Data[1].value=e.EditItme.template_subject,e.CatData.forEach(a=>{a.template_category_name===e.EditItme.template_category_id&&(e.FormSchema[0].Data[2].value=a.module_id)}),await e.GetSubCategoryDDL(e.FormSchema[0].Data[2].value),e.SubCatData.forEach(a=>{a.NAME===e.EditItme.template_sub_category_id&&(e.FormSchema[0].Data[3].value=a.SUB_MODULE_ID)}),e.FormSchema[0].Data[4].value=e.EditItme.status_id.value,e.editorData=e.EditItme.template_content),e.$refs.AddEditEmail.UpdateKeyValue()},updated(){var e=this;try{this.$refs.emailEditor.editor.registerCallback("image",(function(a,t){let i,o=a.attachments[0],l=new FileReader;l.onloadend=function(){var a=l.result.lastIndexOf(",");i=l.result.substring(a+1,l.result.length);var t=o.name.lastIndexOf("."),n=o.name.substring(t+1,o.name.length),s='{"ContentType":"'+o.type+'","Size":"'+o.size+'","Extension":"'+n+'"}',r={attachement_mime:s,fileName:o.name,base64String:i,fileSize:o.size,contentType:o.type,Extension:n,subModuleCode:"EmailTemplate",moduleName:"EmailTemplate",containerName:e.ContainerName,userId:e.UserId,companyId:e.CompanyId,id:0};e.fileData.push(r)},a&&l.readAsDataURL(o)}))}catch(a){}},methods:{async UploadFile(e){var a=this;a.isLoading=!0,a.fileData.forEach(a=>{a.id=e});var t=JSON.stringify(a.fileData);await l["a"].UploadFile(t).then(e=>{"Success"==e.data[0].Status?(e.data[0].Name,a.isLoading=!1):a.isLoading=!1}),a.isLoading=!1},async BindTemplateDetails(e){var a=this;if(e>0){a.isLoading=!0;var t="id="+e;await l["a"].GetEmailTemplateDetails(t).then(e=>{e.data.templateContent,JSON.parse(e.data.templateJson),e.data.templateJson;a.isDataLoaded=!0})}else a.isLoading=!1},async GetStatusList(){var e=this;e.isLoading=!0,await l["a"].GetStatusList().then(a=>{if(null!=JSON.parse(a.data)){var t=[];t=JSON.parse(a.data),t.forEach((a,t)=>{"Deleted"!=a.STATUS&&e.FormSchema[0].Data[4].config.options.push({name:a.STATUS,value:a.STATUS_ID})}),e.isLoading=!1}e.isLoading=!1})},async GetSubCategoryDDL(e){var a=this;if(a.isLoading=!0,void 0==e.target)var t="ModuleID="+e;else if(""==!e.target.value)t="ModuleID="+e.target.value;await l["a"].GetTemplateSubCategoryList(t).then(e=>{null!=JSON.parse(e.data)?(a.SubCatData=[],a.SubCatData=JSON.parse(e.data),a.FormSchema[0].Data[3].config.options=[],a.SubCatData.forEach((e,t)=>{a.FormSchema[0].Data[3].config.options.push({name:e.NAME,value:e.SUB_MODULE_ID})}),a.isLoading=!1):a.isLoading=!1})},async GetTemplateCategoryListForCA(){var e=this;e.isLoading=!0,await l["a"].GetTemplateCategoryListForCA().then(a=>{null!=JSON.parse(a.data)&&(e.CatData=[],e.CatData=JSON.parse(a.data),e.CatData.forEach((a,t)=>{e.FormSchema[0].Data[2].config.options.push({name:a.template_category_name,value:a.module_id})}),e.isLoading=!1),e.isLoading=!1})},async PaymentGatewayAdditionalDetail(){var e=this;e.isLoading=!0;var a="ModuleID="+evt.target.value;await l["a"].GetTemplateSubCategoryList(a).then(a=>{null!=JSON.parse(a.data)&&(e.SubCatData=[],e.SubCatData=JSON.parse(a.data),e.SubCatData.forEach((a,t)=>{e.FormSchema[0].Data[3].config.options.push({name:a.NAME,value:a.SUB_MODULE_ID})}),e.isLoading=!1),e.isLoading=!1})},async editorLoaded(){var e=this;if(e.isLoading=!0,e.Template_id>0){var a="id="+e.Template_id;await l["a"].GetEmailTemplateDetails(a).then(a=>{if(e.TemplateData=a.data,null!=a.data){var t=JSON.parse(a.data.templateJson);e.$refs.emailEditor.editor.loadDesign(t),e.FormSchema[0].Data[0].disabled=!0,e.FormSchema[0].Data[0].value=e.TemplateData.templateName,e.FormSchema[0].Data[1].value=e.TemplateData.templateSubject,e.FormSchema[0].Data[3].value=e.TemplateData.templateSubCategoryId,e.FormSchema[0].Data[4].value=e.TemplateData.statusId;var i=e.CatData.find(a=>a.template_category_id==e.TemplateData.templateCategoryId);i&&(e.FormSchema[0].Data[2].value=i.module_id,e.GetSubCategoryDDL(e.FormSchema[0].Data[2].value)),e.isLoading=!1}})}else e.isLoading=!1},onSubmit(e){var a=this;a.isLoading=!0;var t=a.FormSchema[0].Data[0].value,i=a.FormSchema[0].Data[1].value,o=a.FormSchema[0].Data[2].value,n=a.FormSchema[0].Data[3].value,s=a.FormSchema[0].Data[4].value,r=a.CatData.find(e=>e.module_id==o);if(r)var d=r.template_category_id;a.$refs.emailEditor.editor.exportHtml(e=>{var o=e.design,r=e.html,m=JSON.stringify(o);a.flag=!1,a.FormSchema[1].Data[0].validationRules.required=!1;var c=a.stripHtmlTags(r);c.trim().length>=2?(a.flag=!0,a.FormSchema[1].Data[0].validationRules.required=!1):(a.flag=!1,a.FormSchema[1].Data[0].validationRules.required=!0);var u={TemplateId:a.EditItme.template_id>0?a.EditItme.template_id:a.Template_id,TemplateName:t,TemplateContent:r,StatusId:s,TemplateCategoryId:d,TemplateSubCategoryId:n,TemplateSubject:i,TemplateJson:m,TemplateType:!1},p=new FormData;p.append("postString",JSON.stringify(u));JSON.stringify(u);a.flag&&l["a"].AddAdvancedEmailTemplate(p).then(async e=>{const t=JSON.parse(e.data);""==t[0].status&&"TemplateNameExists"==t[0].msg?(a.ShowAlert(a.$t("TemplateNameExists"),"warning",a.$t("Alert")),a.isLoading=!1):1==t[0].status_id&&"add"==t[0].status_msg?(await a.UploadFile(t[0].template_id),a.ShowAlert(a.$t("AddEmailSuccess"),"success",a.$t("Alert")),a.isLoading=!1,window.location.reload()):2==t[0].status_id&&"updated"==t[0].status_msg?(await a.UploadFile(a.EditItme.template_id),a.ShowAlert(a.$t("UpdateEmail"),"success",a.$t("Alert")),a.isLoading=!1,window.location.reload()):(a.ShowAlert(a.$t("UnknownError"),"failure",a.$t("Alert")),a.isLoading=!1)})})},stripHtmlTags:function(e){if(!e)return"";var a=e.replace(/<style([\s\S]*?)<\/style>/gi,"");return a=a.replace(/<[^>]*>?/gm,"").replace(/\n/g,""),a},BackButton(){window.location.reload()}}},f=g,v=(t("d288"),t("2877")),C=Object(v["a"])(f,p,h,!1,null,null,null),D=C.exports,y=function(){var e=this,a=e._self._c;return a("section",{staticClass:"main-content"},[a("loader",{attrs:{"is-visible":e.isLoading}}),a("div",{staticClass:"container-fluid border-0 m-0 p-0"},[a("div",{staticClass:"w-100"},[a("div",{staticClass:"col-md-12 p-0"},[a("div",{staticClass:"theme-primary partition-full"},[a("span",{staticClass:"p-name text-white"},[e._v(e._s(e.$t("AddEmailTemplate")))]),a("span",{staticClass:"p-actions float-right tablehead"},[a("a",{staticClass:"p-action-btn text-white",attrs:{href:"/EmailTemplate/Index"}},[a("i",{staticClass:"fa fa-angle-double-left"}),a("br"),e._v(e._s(e.$t("BacktoList")))])])])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-md-12 col-lg-8 col-xl-8 mb-3 mt-3"},[a("div",{staticClass:"border p-3"},[a("dynamic-form",{attrs:{schema:e.FormSchema,buttons:e.buttons},on:{OnSubmit:e.SubmitData},scopedSlots:e._u([{key:"tgslot-Content",fn:function({data:t}){return[a("ckeditor",{ref:"textarea",class:{"is-invalid":""!=t.error},attrs:{editor:e.editor},on:{ready:e.onReady},model:{value:e.editorData,callback:function(a){e.editorData=a},expression:"editorData"}}),a("span",{staticClass:"invalid-feedback"},[e._v(e._s(t.error))])]}}])}),a("div",{staticClass:"col-sm-12 col-md-6 col-lg-6 text-left"},[a("div",{staticClass:"form-group text-danger m-0"},[e._v(" "+e._s(e.$t("MandatoryString"))+" ")])])],1)]),a("div",{staticClass:"col-sm-12 col-md-12 col-lg-4 col-xl-4 float-left mb-3 mt-3"},[a("div",{staticClass:"form-content-new"},[a("div",{staticClass:"table-heading-wb bg-transparent p-3 tblHeadingSpan"},[a("span",{staticClass:"font-14"},[a("div",{staticClass:"con",domProps:{innerHTML:e._s(e.$t("Offertemplateguide"))}})])]),a("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left pb-3",staticStyle:{"max-height":"400px","overflow-y":"auto",display:"block"},attrs:{id:"greetinguserguide"}},e._l(e.UserGuidData,(function(t,i){return a("div",{staticClass:"form-group col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left mb-1",staticStyle:{cursor:"pointer"}},[a("div",{staticClass:"row border-dotted py-2 appendText etemplaterows noSelect",staticStyle:{"-moz-user-select":"none"}},[a("div",{staticClass:"col-10 col-sm-10 col-md- 10 col-lg-10 col-xl-10 float-left"},[a("label",{staticClass:"font-weight-light float-left p-0 m-0",staticStyle:{cursor:"pointer"}},[e._v(e._s(t.name))])]),a("div",{staticClass:"col-2 col-sm-2 col-md- 2 col-lg-2 col-xl-2 float-left text-right m-0"},[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return e.BindFields(t.value)}}},[a("em",{staticClass:"fa fa-reply text-info"})])])])])})),0)])])])],1)},T=[],b={props:{EditItme:{type:Array,required:!1}},data(){return{UserGuidData:[],id:null,isLoading:!1,editor:this.CLASSIC_EDITOR,FormSchema:[{layoutType:"triple",Data:[{astype:"TextField",label:this.$t("TemplateName"),name:"TemplateName",value:"",placeholder:"Template Name",validationRules:{required:!0},disabled:!1},{astype:"TextField",label:this.$t("Subject"),name:"Subject",value:"",placeholder:"Subject",validationRules:{required:!0}},{astype:"SelectField",label:this.$t("Category"),name:"Category",value:"",placeholder:"Category",config:{options:[],onChange:this.GetSubCategoryDDL},validationRules:{required:!0}},{astype:"SelectField",label:this.$t("SubCategory"),name:"SubCategory",value:"",placeholder:"Sub Category",config:{options:[]}},{astype:"SelectField",label:this.$t("Status"),name:"Status",value:"",placeholder:"Status",config:{options:[]}}]},{layoutType:"single",Data:[{astype:"SlotField",name:"Content",value:"",visibility:!0,showLabel:!1}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.Cancel}],Offertemplateguide:[{name:"First Name",value:"FirstName"},{name:"Date Of Birth",value:"DateOfBirth"},{name:"Email",value:"Email"},{name:"Address",value:"Address"},{name:"Reporting Manager",value:"ReportingManager"},{name:"Last Name",value:"LastName"},{name:"Compensation stocks",value:"Compensationstocks"},{name:"Compensation period",value:"Compensationperiod"},{name:"Department",value:"Department"},{name:"Company Name",value:"CompanyName"},{name:"Job Location",value:"JobLocation"},{name:"Employement Type",value:"EmployementType"},{name:"Joining Date",value:"JoiningDate"},{name:"Company Url",value:"CompanyUrl"},{name:"Company Address",value:"CompanyAddress"},{name:"Company City",value:"CompanyCity"},{name:"Company State",value:"CompanyState"},{name:"Company ZipCode",value:"CompanyZipCode"},{name:"Job Title",value:"JobTitle"},{name:"Job Department",value:"JobDepartment"}],greetinguserguide:[{name:"First Name",value:"FirstName"},{name:"Last Name",value:"LastName"},{name:"Name",value:"Name"},{name:"Company Url",value:"CompanyUrl"},{name:"Company Address",value:"CompanyAddress"},{name:"Company City",value:"CompanyCity"},{name:"Company State",value:"CompanyState"},{name:"Company ZipCode",value:"CompanyZipCode"},{name:"Client Name",value:"ClientName"},{name:"FrontSiteUrl",value:"FrontSiteUrl"},{name:"Url",value:"Url"},{name:"Consumer Name",value:"ConsumerName"},{name:"Consumer Email",value:"ConsumerEmail"},{name:"Candidate Email",value:"CandidateEmail"},{name:"Job Title",value:"JobTitle"}],appointmentuserguide:[{name:"Consumer Name",value:"ConsumerName"},{name:"Consumer Email",value:"ConsumerEmail"}],appointmentregistrationuserguide:[{name:"Client Name",value:"ClientName"},{name:"FrontSite Url",value:"FrontSiteUrl"},{name:"Url",value:"Url"},{name:"Consumer Email",value:"ConsumerEmail"}],ticketinguserguide:[{name:"Site URL",value:"SiteURL"},{name:"Ip Address",value:"IpAddress"},{name:"Plateform",value:"Plateform"},{name:"Type",value:"Type"},{name:"Requesting Page",value:"RequestingPage"},{name:"Raised By Name",value:"RaisedByName"},{name:"Dear Name",value:"DearName"},{name:"Ticket Number",value:"TicketNumber"},{name:"Date",value:"Date"},{name:"Subject",value:"Subject"},{name:"Company Name",value:"CompanyName"},{name:"Phone",value:"Phone"},{name:"Email",value:"Email"},{name:"Priority",value:"Priority"},{name:"Department",value:"Department"},{name:"Comments",value:"Comments"},{name:"Assigned To Email",value:"AssignedToEmail"},{name:"Url",value:"Url"},{name:"ARaised By Email",value:"RaisedByEmail"},{name:"Closed By",value:"ClosedBy"},{name:"TicketType",value:"TicketType"},{name:"Contact Person",value:"ContactPerson"},{name:"Ticket Status",value:"TicketStatus"},{name:"Ticket Closed by Text",value:"TicketClosedbyText"},{name:"Ticket Previous Status",value:"TicketPreviousStatus"},{name:"Ticket Current Status",value:"TicketCurrentStatus"},{name:"Mergeor Split Ticket Numbers",value:"MergeorSplitTicketNumbers"}],interviewscheduletemplate:[{name:"First Name",value:"FirstName"},{name:"LastName",value:"LastName"},{name:"Company Name",value:"CompanyName"},{name:"Company Url",value:"CompanyUrl"},{name:"Company Address",value:"CompanyAddress"},{name:"Company City",value:"CompanyCity"},{name:"Company State",value:"CompanyState"},{name:"Company ZipCode",value:"CompanyZipCode"},{name:"Date Time",value:"DateTime"},{name:"Client Name",value:"ClientName"},{name:"Front Site Url",value:"FrontSiteUrl"},{name:"Url",value:"Url"},{name:"Consumer Name",value:"ConsumerName"},{name:"Consumer Email",value:"ConsumerEmail"}],editorData:"",SubCatData:[],currentCursorPosition:null}},async created(){var e=this;await e.GetTemplateCategoryListForCA(),await e.GetStatusList(),e.EditItme.template_id>0&&(e.FormSchema[0].Data[0].value=e.EditItme.template_name,e.FormSchema[0].Data[0].disabled=!0,e.FormSchema[0].Data[1].value=e.EditItme.template_subject,e.CatData.forEach(a=>{a.template_category_name===e.EditItme.template_category_id&&(e.FormSchema[0].Data[2].value=a.module_id)}),await e.GetSubCategoryDDL(e.FormSchema[0].Data[2].value),e.SubCatData.forEach(a=>{a.NAME===e.EditItme.template_sub_category_id&&(e.FormSchema[0].Data[3].value=a.SUB_MODULE_ID)}),e.FormSchema[0].Data[4].value=e.EditItme.status_id.value,e.editorData=e.EditItme.template_content)},methods:{onReady(e){e.ui.getEditableElement().parentElement.insertBefore(e.ui.view.toolbar.element,e.ui.getEditableElement())},async GetStatusList(){var e=this;e.isLoading=!0,await l["a"].GetStatusList().then(a=>{null!=JSON.parse(a.data)&&(e.SubCatData=[],e.SubCatData=JSON.parse(a.data),e.SubCatData.forEach((a,t)=>{"Deleted"!=a.STATUS&&e.FormSchema[0].Data[4].config.options.push({name:a.STATUS,value:a.STATUS_ID})}),e.isLoading=!1),e.isLoading=!1})},async GetSubCategoryDDL(e){var a=this;if(a.isLoading=!0,void 0==e.target){var t="ModuleID="+e;a.id=e}else{t="ModuleID="+e.target.value;a.id=e.target.value}await l["a"].GetTemplateSubCategoryList(t).then(e=>{null!=JSON.parse(e.data)&&(a.SubCatData=[],a.SubCatData=JSON.parse(e.data),a.FormSchema[0].Data[3].config.options=[],a.SubCatData.forEach((e,t)=>{a.FormSchema[0].Data[3].config.options.push({name:e.NAME,value:e.SUB_MODULE_ID})}),a.isLoading=!1)}),await a.SetTemplateVariable(a.id)},async GetTemplateCategoryListForCA(){var e=this;e.isLoading=!0,await l["a"].GetTemplateCategoryListForCA().then(a=>{null!=JSON.parse(a.data)&&(e.CatData=JSON.parse(a.data),e.CatData.forEach((a,t)=>{e.FormSchema[0].Data[2].config.options.push({name:a.template_category_name,value:a.module_id})}),e.isLoading=!1),e.isLoading=!1})},BindFields(e){this.$refs.textarea.editor;const a=this.$refs.textarea.$_instance.model.document.selection;if(a){const t=a.getFirstPosition();this.currentCursorPosition={index:t.index},this.currentCursorPosition.index=e,this.editorData+="@"+e+"@"}else console.log("No selection found")},SubmitData(){var e=this,a=e.FormSchema[0].Data[0].value,t=e.FormSchema[0].Data[1].value,i=e.FormSchema[0].Data[2].value,o=e.FormSchema[0].Data[3].value,n=e.FormSchema[0].Data[4].value,s=e.CatData.find(e=>e.module_id==i);if(s)var r=s.template_category_id;var d=e.$refs.textarea.$_lastEditorData,m={TemplateId:e.EditItme.template_id>0?e.EditItme.template_id:e.TemplateId,TemplateName:a,TemplateContent:d,StatusId:n,TemplateCategoryId:r,TemplateSubCategoryId:o,TemplateSubject:t,TemplateJson:"",TemplateType:!0},c=new FormData;c.append("postString",JSON.stringify(m));JSON.stringify(m);l["a"].AddAdvancedEmailTemplate(c).then(a=>{const t=JSON.parse(a.data);""==t[0].status&&"TemplateNameExists"==t[0].msg?e.ShowAlert(e.$t("TemplateNameExists"),"warning",e.$t("Alert")):1==t[0].status_id&&"add"==t[0].status_msg?(e.ShowAlert(e.$t("AddEmailSuccess"),"success",e.$t("Alert")),window.location.reload()):2==t[0].status_id&&"updated"==t[0].status_msg?(e.ShowAlert(e.$t("UpdateEmail"),"success",e.$t("Alert")),window.location.reload()):e.ShowAlert(e.$t("UnknownError"),"failure",e.$t("Alert"))})},SetTemplateVariable(e){var a=this;a.isLoading=!0;var t=a.CatData.find(a=>a.module_id==e);if(t){a.UserGuidData=[];var i=t.template_category_name;a.UserGuidData="Appointment Calendar"==i?a.appointmentuserguide:"Appointment Registration"==i?a.appointmentregistrationuserguide:"Greeting"==i?a.greetinguserguide:"Ticketing"==i?a.ticketinguserguide:"CRM"==i||"EVENT"==i||"FSM"==i?[]:a.greetinguserguide}a.isLoading=!1},Cancel:function(){window.location.reload()}}},E=b,_=Object(v["a"])(E,y,T,!1,null,null,null),A=_.exports,I={components:{LeftColumn:u["a"],AddCompanySetup:c["a"],AddAdvancedEmailTemplate:D,AddEmailTemplate:A},props:{sourcetype:{type:String,required:!0}},data(){return{recordId:0,showEmailTemplate:!1,noRecord:!1,isLoading:!1,CompanyId:null,EmailTemplateData:[],TotalRecords:0,listheaderbuttons:m.buttons,topSearchFields:m.topsearchSchema,ShowManageView:!1,ShowAddCustomReportView:!1,PageSize:10,PageNumber:1,isPaged:1,TotalPages:0,listActions:m.listActions,searchCondition:"",conditionForInstantSearch:"",SortBy:"",SortExp:"",showsharereportview:!1,showemailreportview:!1,showschedulereportview:!1,ReportID:null,reportname:"",reportid:"",foldername:"",folderid:"",LeadStatusList:[],searchcondition:"",MODULENAME:"EmailTemplate",SUBMODULECODE:"EmailTemplate",privilegeParams:null,sharetype:"",filteredHeaders:[],StatusListForListing:[{STATUS:"Active",STATUS_ID:1001,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#28a745"},{STATUS:"Inactive",STATUS_ID:1002,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#d72435"}],ShowAddAdvancedEmailTemplate:!1,Template_id:0,isShowList:!0,Item:[]}},async created(){var e=this;e.CompanyId=e.GetUserInfo.CompanyId,e.privilegeParams="controller=EmailTemplate&action=",await e.FetchData(),m.bindleftCommonSearchdropdown(e,"Dynamic_Reporting","FOLDER_NAME"),m.bindleftCommonSearchdropdown(e,"Dynamic_Reporting","CREATED_BY"),m.bindleftCommonSearchdropdown(e,"Dynamic_Reporting","MODIFIED_BY"),e.getStatuslistForListing("Dynamic_Reporting","en")},computed:{filteredUserData(){return this.vueObj.UserData.map(e=>{const a={...e};return null!==a.USER_EMP_ID&&""!==a.USER_EMP_ID||(a.USER_EMP_ID="--"),a})}},mounted(){m.topsearchSchema.forEach(e=>{e.value="",e.isSearch=!1})},methods:{renderActions:function(e){console.log(e)},commonHeaderButtonClick:function(e){switch(console.log(e),e.callbackfunction){case"commonDeleteData":this.commonDeleteData();break;case"ActiveMultipleListing":this.UpdateStatus("Active");break;case"InactiveMultipleListing":this.UpdateStatus("Inactive");break;case"AddEmailTemplate":this.AddEmailTemplate();break;case"AddAdvancedEmailTemplate":this.AddAdvancedEmailTemplate();break}},AddEmailTemplate(){var e=this;e.ShowAddAdvancedEmailTemplate=!1,e.isShowList=!1,e.showEmailTemplate=!0},AddAdvancedEmailTemplate(){var e=this;e.showEmailTemplate=!1,e.isShowList=!1,e.ShowAddAdvancedEmailTemplate=!0},actionButtonClick:function(e,a,t,i){var o=this;switch(e){case"sharereport":o=this;l["a"].CheckPrivilege(o.privilegeParams+"ShareReport").then(t=>{if(!t.data)return o.ShowAlert(o.$t("UnAuthorized"),"warning",!0,"Alert"),!1;o.sharetype=e,o.folderid=a.FOLDER_ID,o.ReportID=a.REPORT_ID,o.foldername=a.REPORTNAME,o.showsharereportview=!0,$("#modalshareview").modal("show"),setTimeout((function(){$("#modalshareview").modal("show"),setTimeout((function(){o.SetBootstraptoolTip()}),200)}),1e3)});break;case"sendemail":o.sendemail(a.REPORT_ID,a.MODULENAME,a.SUBMODULECODE);break;case"editreport":o.editreport(a);break;case"setschedule":o.setschedule(a.REPORT_ID);break;case"ViewReport":o.ViewReport(a.REPORT_ID,a.ACCESS,a.FOLDER_ID);break}},editreport:function(e){var a=this;l["a"].CheckPrivilege(a.privilegeParams+"Update").then(t=>{if(!t.data)return a.ShowAlert(a.$t("UnAuthorized"),"warning",!0,"Alert"),!1;a.$router.push({name:"EditDataReport",params:{Modulename:e.MODULENAME,Submodulecode:e.SUBMODULECODE,ReportName:e.REPORTNAME,ReportID:e.REPORT_ID,Module_Id:e.MODULE_ID,Folder_Id:e.FOLDER_ID,Sub_Module_Id:e.Sub_Module_Id,Version:a.Version,Action:"Edit"}})})},ViewReport:function(e,a,t){var i=this;i.$router.push("/Report/viewcustomreport/"+btoa(JSON.stringify({ReportID:e,ACCESS:a,Folder_Id:t})))},sortdata:async function(e){var a="sort tb_headerSortDown";this.SortBy=e,e===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",a="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",a="sort tb_headerSortUp"):(this.SortExp="ASC",a="sort tb_headerSortDown")),await this.FetchData(),$("#th-"+e+"  span:first-child").attr("class",a)},pagerMethod:async function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,await this.FetchData()},leftCommonSearch:async function(e){this.PageNumber=e.PageNumber,this.isPaged=1,"undefined"!=typeof e.searchCondition?this.searchCondition=e.searchCondition:this.searchCondition="",await this.FetchData()},ManageFolder:function(){var e=this;l["a"].CheckPrivilege(e.privilegeParams+"FolderListing").then(a=>{if(!a.data)return e.ShowAlert(e.$t("UnAuthorized"),"warning",!0,"Alert"),!1;var t;e.ShowManageView=!0,$("#modalManageView").modal("show"),setTimeout((function(){$("#modalManageView").modal("show"),setTimeout((function(){e.SetBootstraptoolTip()}),200)}),1e3),null===(t=e.$refs.managefolder)||void 0===t||t.GetViewList()})},AddDesignation:function(){var e=this;console.log(e,"Add")},commonDeleteData:function(e){var a=this,t="";$(".chkItems:checkbox:checked").not("[id^='chkAll_0']").each((function(){t.length>0&&(t+=","),t+=$(this).val()})),t.length>0?a.confirmR(a.$t("ConfirmDelete"),!0,a.$t("Delete")+"  "+a.$t("Report"),(function(){var e={ids:t,moduleName:"EmailTemplate",subModuleCode:"EmailTemplate",refCode:"COMPANYSETUP_DELETE"},i=JSON.stringify(e);l["a"].CommonDeleteData(i).then((async function(e){200==e.status?($(".chkItems:checkbox:checked,#chkAll_0").prop("checked",!1).removeAttr("checked"),$("#DeleteMultiple").addClass("disabled"),a.ShowAlert(a.$t("DeletedSuccess",[a.$t("Report")]),"success",!0,a.$t("Alert")),a.PageNumber=parseInt(a.PageNumber)-1,a.PageNumber<=0&&(a.PageNumber=1),await a.FetchData()):a.ShowAlert(a.$t("DeletedError",[a.$t("Report")]),"success",!0,a.$t("Alert"))}))})):a.ShowAlert(a.$t("Selectanyrecordtodelete"))},UpdateStatus:async function(e){var a=this;e="Active"==e?1001:1002;var t="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){t.length>0&&(t+=","),t+=$(this).val()})),t.length>0&&a.confirmR(a.$t("AreYouSureToUpdateStatus"),!0,a.$t("update")+"  "+a.$t("status"),(function(){var i={ID:t,StatusId:e,IsFor:"COMPANYSETUP_UPDATE",Module:"EmailTemplate",Submodule:"EmailTemplate"},o=JSON.stringify(i);console.log(o),l["a"].CommonUpdateStatus(o).then(e=>{200==e.status&&($(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),a.ShowAlert(a.$t("RecordUpdatedSuccessfully",[a.$t("Report")]),"success",!0,a.$t("Alert")),a.FetchData())})}))},getRequestParams:function(e,a,t,i,o,l){let n={};return e&&(n["pageNumber"]=e),l&&(n["searchcondition"]=l),o&&(n["is_paged"]=o),t&&(n["sortBy"]=t),i&&(n["sortExp"]=i),a&&(n["pageSize"]=a),n},clickEventOfColumn:function(e,a){var t=this;"template_name"==a.COLUMN_NAME&&(1==e.template_type?(t.Item=e,t.showEmailTemplate=!0,t.ShowAddAdvancedEmailTemplate=!1,t.isShowList=!1):(t.Item=e,t.Template_id=e.template_id,t.ShowAddAdvancedEmailTemplate=!0,t.showEmailTemplate=!1,t.isShowList=!1)),"USERNAME"==a.COLUMN_NAME&&this.$router.push({name:"viewcustomreport",params:{ReportID:e.REPORT_ID,ACCESS:e.ACCESS}})},FetchData:async function(){var e=this;this.isLoading=!0;var a=`CompanyId=${e.CompanyId}&pageSize=${e.PageSize}&pageNum=${e.PageNumber}&sortBy=${e.SortBy}&sortExp=${e.SortExp}&searchQuery=${e.searchCondition.trim()}`;await l["a"].EmailTemplateListing(a).then((function(a){e.Headers=a.data.FieldSchema;const t=["template_name","template_subject","template_category_id","template_sub_category_id","created_at","created_by","status_id"];e.filteredHeaders=e.Headers.filter(e=>t.includes(e.COLUMN_NAME)),e.filteredHeaders.forEach(a=>{a.settings=null,"template_name"==a.COLUMN_NAME&&(a.settings={clickEvent:e.clickEventOfColumn,formatter:e.columnDataFormatter}),"status_id"==a.COLUMN_NAME&&(a.settings={isInSlot:!0})}),""!=a.data.Data&&null!=a.data.Data?(a.data.Data.length>0?(e.EmailTemplateData=a.data.Data,e.EmailTemplateData.forEach(e=>{e.template_category_id=null!=JSON.parse(e.template_category_id).Name?JSON.parse(e.template_category_id).Name:"--",e.modified_by=JSON.parse(e.modified_by),e.status_id=JSON.parse(e.status_id),e.created_by=null!=JSON.parse(e.created_by).Name?JSON.parse(e.created_by).Name:"--",e.template_sub_category_id=null!=JSON.parse(e.template_sub_category_id).Name?JSON.parse(e.template_sub_category_id).Name:"--"}),e.TotalRecords=e.EmailTemplateData[0].total_records,e.TotalPages=Math.ceil(e.TotalRecords/e.PageSize),e.CurrentPage=e.PageNumber,e.noRecord=!1):(e.EmailTemplateData=[],e.noRecord=!0,e.TotalRecords=0),void 0!=localStorage.SavedParameters&&localStorage.removeItem("SavedParameters")):(e.noRecord=!0,e.EmailTemplateData=[],e.TotalRecords=0),setTimeout((function(){e.ResponsiveDataTable("tablelistingdata")}),500),e.isLoading=!1}))},closeModalSharePopup:function(){$("#modalshareview").modal("hide"),this.showsharereportview=!1},getStatuslistForListing:function(e,a){var t=this,i="langCode="+a+"&statusType="+e+"&hasglobal=true";l["a"].statusdropdown(i).then((function(e){if("Success"==e.data.status){var a=e.data.result;t.StatusListForListing=a.data}}))}}},w=I,L=Object(v["a"])(w,i,o,!1,null,null,null);a["default"]=L.exports},"8cc6":function(e,a,t){var i=t("24fb");a=i(!1),a.push([e.i,".left-tab-container[data-v-2b7f3374]{max-height:70vh;overflow-y:auto}.left-tab .nav-link.left-menu a[data-v-2b7f3374]{width:100%;display:flex}.left-tab .nav-link.left-menu.active .listing[data-v-2b7f3374],.left-tab .nav-link.left-menu[data-v-2b7f3374]:hover,.listing[data-v-2b7f3374]:hover{color:#fff}",""]),e.exports=a},aae2:function(e,a,t){"use strict";var i=function(){var e=this,a=e._self._c;return a("div",{staticClass:"left-menu-tab mt-2"},[e._m(0),a("div",{staticClass:"left-tab-container"},[a("div",{staticClass:"mb-0 d-lg-block p-2 border"},[a("div",{staticClass:"input-group customsearchbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.MainSearchmodel,expression:"MainSearchmodel"}],staticClass:"form-control searchcustomfilter border-right-0",attrs:{type:"text",maxlength:"50",id:"searchinput",placeholder:"Search by Name",autocomplete:"off"},domProps:{value:e.MainSearchmodel},on:{keydown:e.ListFiltering,keyup:e.ListFiltering,mouseup:e.SelectAllSearch,mouseleave:e.SelectAllSearch,input:function(a){a.target.composing||(e.MainSearchmodel=a.target.value)}}}),e._m(1)])]),a("ul",{staticClass:"nav nav-pills flex-column left-tab responivecustomtab lefttabiconfix"},e._l(0==e.searchColumnfilter.length?e.leftTabList:e.searchColumnfilter,(function(t){return a("li",{class:{"nav-link left-menu":!0,active:t.goTo===e.$route.path}},[a("router-link",{staticStyle:{"align-items":"center"},attrs:{to:t.goTo}},[a("div",{staticClass:"listing"},[a("i",{staticClass:"mr-2",class:t.icon}),e._v(e._s(t.title))])])],1)})),0)])])},o=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"theme-primary partition"},[a("span",{staticClass:"p-name text-white"},[e._v("Company Setup")])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text bg-transparent bg-white border-left-0"},[a("i",{staticClass:"fa fa-search"})])])}],l=(t("14d9"),t("5b81"),{name:"listing-status",props:{HeaderText:{type:String,required:!0}},data:function(){return{GetSelectedValue:"",Header:this.HeaderText,searchColumnfilter:[],Header:this.HeaderText,leftTabList:[{title:"Announcement",icon:"fa fa-bullhorn",goTo:"/AnnouncementMessage/Index"},{title:"Break",icon:"fa fa-clock-o",goTo:"/Break/Index"},{title:"Category",icon:"fa fa-tasks",goTo:"/Category/Index"},{title:"Channel",icon:"fa fa-television",goTo:"/Channel/Index"},{title:"Company Holiday",icon:"fa fa-calendar",goTo:"/CompanyHoliday/Index"},{title:"Company Notification",icon:"fa fa-bell",goTo:"/CompanyNotification/Index"},{title:"Contact Type",icon:"fa fa-list-alt",goTo:"/ContactType/Index"},{title:"Currency Management",icon:"fa fa-list-alt",goTo:"/CurrencyManagement/Index"},{title:"Department",icon:"fa fa-users",goTo:"/Department/Index"},{title:"Designation",icon:"fa fa-address-card",goTo:"/Designation/Index"},{title:"Email Template",icon:"fa fa-clock-o",goTo:"/EmailTemplate/Index"},{title:"Feedback",icon:"fa fa-map-marker",goTo:"/Feedback/Index"},{title:"Greeting",icon:"fa fa-thumbs-o-up",goTo:"/Greeting/Index"},{title:"Industry Type",icon:"fa fa-building-o",goTo:"/IndustryType/Index"},{title:"Immigration",icon:"fa fa-address-card",goTo:"/Immigration/Index"},{title:"Location",icon:"fa fa-map-marker",goTo:"/Location/Index"},{title:"Login Authorization",icon:"fa fa-map-marker",goTo:"/LoginAuthorization/Index"},{title:"Payment Gateway",icon:"fa fa-clock-o",goTo:"/PaymentGateway/Index"},{title:"Provisional Right",icon:"fa fa-map-marker",goTo:"/ProvisionalRight/Index"},{title:"Review Template",icon:"fa fa-clock-o",goTo:"/ReviewTemplate/Index"},{title:"Service",icon:"fa fa-star",goTo:"/Service/Index"},{title:"Shift",icon:"fa fa-clock-o",goTo:"/Shift/Index"},{title:"Skill",icon:"fa fa-star",goTo:"/Skill/Index"},{title:"Stage",icon:"fa fa-bar-chart",goTo:"/Stage/Index"},{title:"Status",icon:"fa fa-bar-chart",goTo:"/Status/Index"},{title:"User Title",icon:"fa fa-star",goTo:"/UserTitle/Index"}]}},methods:{SelectAllSearch(){var e=this;e.GetSelectedValue=window.getSelection().toString()},ListFiltering(){var e=this,a=document.getElementById("searchinput"),t=a.value;""!=e.GetSelectedValue&&(t=t.replaceAll(e.GetSelectedValue,""),e.GetSelectedValue="");var i=[],o=[];e.leftTabList.forEach(a=>{o.push(a),i=o.filter(a=>{var i=e.$t(a.title);return i.replace(/\W/g,"").toLowerCase().includes(t.replace(/\W/g,"").toLowerCase())})}),e.searchColumnfilter=i,o=[],i=[]}}}),n=l,s=(t("502a"),t("2877")),r=Object(s["a"])(n,i,o,!1,null,"2b7f3374",null);a["a"]=r.exports},d288:function(e,a,t){"use strict";t("49aa")},f372:function(e,a,t){var i=t("8cc6");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=t("499e").default;o("5279c6f0",i,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=chunk-1076583e.js.map