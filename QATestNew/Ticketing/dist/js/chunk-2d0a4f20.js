(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4f20"],{"0934":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"padding-t_10",attrs:{id:"reportstabsdata"}},[t("div",{staticClass:"left-menu-tab new_tab"},[t("div",{staticClass:"col-md-12 p-0"},[t("div",{staticClass:"theme-primary partition"},[t("span",{staticClass:"p-name text-white"},[e._v(e._s(e.$t("Ticket"))+" "+e._s(e.$t("Reports")))])])]),t("div",{staticClass:"pt-2 mb-1 w-100 d-none d-lg-block"},[t("div",{staticClass:"input-group customsearchbox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.SearchText,expression:"SearchText"}],staticClass:"form-control searchcustomfilter border-right-0",attrs:{type:"text",maxlength:"50",placeholder:e.$t("SearchbyFieldName"),autocomplete:"off"},domProps:{value:e.SearchText},on:{keyup:e.SearchTab,input:function(t){t.target.composing||(e.SearchText=t.target.value)}}}),e._m(0)])]),t("div",{staticClass:"mt-2",staticStyle:{"max-height":"700px"},attrs:{id:"divscrollsetuptabs"}},[t("ul",{staticClass:"nav nav-pills flex-column left-tab responivecustomtab lefttabiconfix lefttabflexible",attrs:{id:"myTab",role:"tablist"}},[t("li",[t("a",{staticClass:"nav-link left-menu",class:{active:1==e.activeKey},attrs:{"data-toggle":"tab","data-bs-toggle":"#TicketReport",href:"javascript:void(0)",id:"aTicketReport","data-text":"TicketDetail","data-ordername":"TicketSummary",privilege:"TicketDetail"},on:{click:function(t){return e.loadData("TicketSummary")}}},[t("em",{staticClass:"fa fa-ticket",attrs:{"aria-hidden":"true"}}),e._v(" "+e._s(e.$t("Ticket"))+" "+e._s(e.$t("Summary"))+" "+e._s(e.$t("Report"))+" ")])]),t("li",[t("a",{staticClass:"nav-link left-menu",class:{active:2==e.activeKey},attrs:{"data-toggle":"tab","data-bs-toggle":"#TicketingPrivilegeReport",href:"javascript:void(0)",id:"aTicketingPrivilegeReport","data-text":"TicketingPrivilegeReport","data-ordername":"TicketingPrivilegeReport",privilege:"TicketingPrivilegeReport"},on:{click:function(t){return e.loadData("TicketPrivilege")}}},[t("em",{staticClass:"fa fa-file-text",attrs:{"aria-hidden":"true"}}),e._v(" "+e._s(e.$t("TicketingPrivilege"))+" "+e._s(e.$t("Report"))+" ")])]),t("li",[t("a",{staticClass:"nav-link left-menu",class:{active:3==e.activeKey},attrs:{"data-toggle":"tab","data-bs-toggle":"#TicketDetailReport",href:"javascript:void(0)",id:"aTicketDetailReport","data-text":"TicketDetailReport","data-ordername":"TicketDetailReport",privilege:"TicketDetailReport"},on:{click:function(t){return e.loadData("TicketDetails")}}},[t("em",{staticClass:"fa fa-file-pdf-o",attrs:{"aria-hidden":"true"}}),e._v(" "+e._s(e.$t("Ticket"))+" "+e._s(e.$t("Detail"))+" "+e._s(e.$t("Report"))+" ")])])])])]),t("div",{staticClass:"right-content"},[t("div",{staticClass:"col-md-12 p-0"},[t("div",{staticClass:"theme-primary partition p-actions-expand",staticStyle:{overflow:"visible"}},[t("span",{staticClass:"p-name text-white",attrs:{id:"spnreporttext"}},[e._v(e._s(this.headerText))])])]),t("div",{staticClass:"col-md-12 p-0"},[t("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[e._m(1),e.TicketSummarytab?t("div",{staticClass:"tab-pane pb-2",class:{"active show":1==e.activeKey},attrs:{role:"tabpanel",id:"tab-overlimlit-content","aria-labelledby":"tab-overlimlit-content"}},[t("div",{attrs:{id:"listing"}},[t("div",{staticClass:"col-md-12 p-0"},[t("Form",{ref:"Expenseform"},[t("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit}})],1)],1)])]):e._e(),e.TicketPrivilegeTab?t("div",{staticClass:"tab-pane pb-2",class:{"active show":2==e.activeKey},attrs:{role:"tabpanel",id:"tab-expensereport-content","aria-labelledby":"tab-expensereport-content"}},[t("div",{staticClass:"listing"},[t("Form",{ref:"Expenseform"},[t("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema1},on:{OnSubmit:e.onSubmit1}})],1)],1)]):e._e(),e.TicketDetailsTab?t("div",{staticClass:"tab-pane pb-2",class:{"active show":3==e.activeKey},attrs:{role:"tabpanel",id:"tab-Reimbursements-content","aria-labelledby":"tab-Reimbursements-content"}},[t("div",{staticClass:"listing"},[t("Form",{ref:"Expenseform"},[t("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema2},on:{OnSubmit:e.onSubmit2}})],1)],1)]):e._e(),t("div",{staticClass:"col-lg-12 float-left p-0"},[t("div",{staticClass:"col-md-12 placeholder border mt-0 py-3 w-100 float-left border-top-0"},[e.parameter.length>0?t("ReportViewer",{attrs:{parameter:e.parameter,reportPath:e.reportPath}}):e._e()],1)])])])])])},r=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"input-group-append"},[t("span",{staticClass:"input-group-text bg-transparent bg-white border-left-0"},[t("i",{staticClass:"fa fa-search"})])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"expand-list"},[t("a",{staticClass:"expand-list-btn justify-content-center align-items-center",attrs:{href:"javascript:;"}},[t("em",{staticClass:"icon-solid arrow-solid-left text-white",staticStyle:{"font-size":"9pt"}})])])}],l=(a("14d9"),a("9769")),o=function(){var e=this;e._self._c;return e._m(0)},s=[function(){var e=this,t=e._self._c;return t("div",{staticStyle:{height:"600px"}},[t("div",{staticStyle:{width:"100%","min-height":"650px","margin-bottom":"0%",height:"auto"},attrs:{id:"viewer"}})])}],n={props:{reportPath:null,parameter:null},data:function(){return{Token:null}},created:function(){this.Token=this.GetUserInfo.Token},mounted(){var e=this;console.log(e.parameter),setTimeout((function(){$("#viewer").boldReportViewer({reportServiceUrl:"http://localhost:12597/api/ReportViewer",reportPath:e.reportPath,processingMode:"Remote",parameters:e.parameter,reportServerUrl:"http://172.22.23.102/ReportServer",ajaxBeforeLoad:e.setReportToken})}),2e3)},methods:{setReportToken:function(e){e.headers.push({Key:"content-type",Value:"application/json;charset=UTF-8"}),e.headers.push({Key:"Authorization",Value:"Bearer "+this.Token})}}},c=n,u=a("2877"),m=Object(u["a"])(c,o,s,!1,null,null,null),d=m.exports,p={components:{ReportViewer:d},data(){return{FormSchema:[{layoutType:"triple",Data:[{astype:"TextField",label:"Ticket Number",name:"TicketNumber",value:"",validationRules:{required:!0}},{astype:"TextField",label:"Subject",name:"Subject",value:"",validationRules:{required:!0}},{astype:"MultiSelectField",label:"Submitted By",name:"SubmittedBy",value:"",mode:"tag",placeholder:"Select",config:{options:[]},validationRules:{required:!0}},{astype:"MultiSelectField",label:"Assigned To",name:"AssignedTo",value:"",mode:"tag",placeholder:"Select",config:{options:[]},validationRules:{required:!0}},{astype:"MultiSelectField",label:"Client",name:"Client",value:"",mode:"tag",placeholder:"Select",config:{options:[]},validationRules:{required:!0}},{astype:"MultiSelectField",label:"Priority",name:"Priority",value:"",mode:"tag",placeholder:"Select",config:{options:[]},validationRules:{required:!0}},{astype:"MultiSelectField",label:"Assign Department",name:"AssignDepartment",value:"",mode:"tag",placeholder:"Select",config:{options:[]},validationRules:{required:!0}},{astype:"MultiSelectField",label:"Status",name:"Status",value:"",mode:"tag",placeholder:"Select",config:{options:[]},validationRules:{required:!0}},{astype:"MultiSelectField",label:"Category",name:"Category",value:"",mode:"tag",placeholder:"Select",config:{options:[]},validationRules:{required:!0}},{astype:"DateField",label:"Date From (M/D/YYYY)",name:"TicketDateFrom",value:"",placeholder:"M/D/YYYY",validationRules:{required:!0},config:{format:"M/D/YYYY"}},{astype:"DateField",label:"Date To (M/D/YYYY)",name:"TicketDateTo",value:"",placeholder:"M/D/YYYY",validationRules:{required:!0},config:{format:"M/D/YYYY"}},{astype:"MultiSelectField",label:"Product",name:"Product",value:"",mode:"tag",placeholder:"Select",config:{options:[]},validationRules:{required:!0}},{astype:"MultiSelectField",label:"Channel",name:"Channel",value:"",mode:"tag",placeholder:"Select",config:{options:[]},validationRules:{required:!0}}]}],FormSchema1:[{layoutType:"triple",Data:[{astype:"MultiSelectField",label:"Assign Department",name:"AssignDepartment",value:"",mode:"tag",placeholder:"Select",config:{options:[]},validationRules:{required:!0}}]}],FormSchema2:[{layoutType:"triple",Data:[{astype:"TextField",label:"Ticket Number",name:"TicketNumber",value:"",validationRules:{required:!0}},{astype:"TextField",label:"Subject",name:"Subject",value:"",validationRules:{required:!0}},{astype:"MultiSelectField",label:"Submitted By",name:"SubmittedBy",value:"",mode:"tag",placeholder:"Select",config:{options:[]},validationRules:{required:!0}},{astype:"MultiSelectField",label:"Assigned To",name:"AssignedTo",value:"",mode:"tag",placeholder:"Select",config:{options:[]},validationRules:{required:!0}},{astype:"MultiSelectField",label:"Client",name:"Client",value:"",mode:"tag",placeholder:"Select",config:{options:[]},validationRules:{required:!0}},{astype:"MultiSelectField",label:"Priority",name:"Priority",value:"",mode:"tag",placeholder:"Select",config:{options:[]},validationRules:{required:!0}},{astype:"MultiSelectField",label:"AssignDepartment",name:"AssignDepartment",value:"",mode:"tag",placeholder:"Select",config:{options:[]},validationRules:{required:!0}},{astype:"MultiSelectField",label:"Status",name:"Status",value:"",mode:"tag",placeholder:"Select",config:{options:[]},validationRules:{required:!0}},{astype:"MultiSelectField",label:"Category",name:"Category",value:"",mode:"tag",placeholder:"Select",config:{options:[]},validationRules:{required:!0}},{astype:"DateField",label:"Date From (M/D/YYYY)",name:"TicketDateFrom",value:"",placeholder:"M/D/YYYY",validationRules:{required:!0},config:{format:"M/D/YYYY"}},{astype:"DateField",label:"Date To (M/D/YYYY)",name:"TicketDateTo",value:"",placeholder:"M/D/YYYY",validationRules:{required:!0},config:{format:"M/D/YYYY"}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear All",onClick:this.onClear}],UserLicenseModules:null,ConfgurationValueByKey:null,SearchText:"",activeKey:1,isLoading:!1,reportPath:null,parameter:[],TicketSummarytab:!0,TicketPrivilegeTab:!1,TicketDetailsTab:!1,headerText:"Ticket Summary Report"}},created:function(){this.GetUserList(),this.GetClientList(),this.GetPriorityList(),this.GetAllDepartmentList(),this.GetTicketStatus(),this.GetCategory(),this.GetProductsList(),this.GetChannelList()},methods:{SearchTab:function(e){var t=this.SearchText;$("ul#myTab").find("li").each((function(){t=t.toLowerCase();var e=$(this).find("a").text().toLowerCase();e.includes(t)?$(this).closest("li").show():$(this).closest("li").hide()}))},GetUserList:function(){var e=this,t="moduleName=TicketReport";l["a"].GetUserList(t).then(t=>{if(t.data.length>0){var a=t.data;a.forEach(t=>{e.FormSchema[0].Data[2].config.options.push({name:t.userName,value:t.userId}),e.FormSchema[0].Data[3].config.options.push({name:t.userName,value:t.userId}),e.FormSchema2[0].Data[2].config.options.push({name:t.userName,value:t.userId}),e.FormSchema2[0].Data[3].config.options.push({name:t.userName,value:t.userId})})}})},GetClientList:function(){var e=this,t="reqFrom=CUSTOM";l["a"].GetClientList(t).then(t=>{if("Success"==t.data.status){var a=t.data.result;a.forEach(t=>{e.FormSchema[0].Data[4].config.options.push({name:t.PARENT_NAME,value:t.PARENT_ID}),e.FormSchema2[0].Data[4].config.options.push({name:t.PARENT_NAME,value:t.PARENT_ID})})}})},GetPriorityList:function(){var e=this,t="isSupportTicket=false";l["a"].GetPrioritybyCompanyId(t).then(t=>{if(t.data.length>0){var a=t.data;a.forEach(t=>{e.FormSchema[0].Data[5].config.options.push({name:t.prioritY_NAME,value:t.prioritY_ID}),e.FormSchema2[0].Data[5].config.options.push({name:t.prioritY_NAME,value:t.prioritY_ID})})}})},GetAllDepartmentList:function(){var e=this;l["a"].GetDepartmentListbyCompanyForClient().then(t=>{if(t.data.length>0){var a=t.data;a.forEach(t=>{e.FormSchema[0].Data[6].config.options.push({name:t.departmenT_NAME,value:t.departmenT_ID}),e.FormSchema1[0].Data[0].config.options.push({name:t.departmenT_NAME,value:t.departmenT_ID}),e.FormSchema2[0].Data[6].config.options.push({name:t.departmenT_NAME,value:t.departmenT_ID})})}})},GetTicketStatus:function(){var e=this;l["a"].GetTicketStatus().then(t=>{if("Success"==t.data.status){var a=t.data.result;a.forEach(t=>{e.FormSchema[0].Data[7].config.options.push({name:t.STATUS_NAME,value:t.STATUS_ID}),e.FormSchema2[0].Data[7].config.options.push({name:t.STATUS_NAME,value:t.STATUS_ID})})}})},GetCategory:function(){var e=this,t="categoryTypeId=TICKET_CATEGORY&is_Global=false&showActiveStatus=true";l["a"].GetDDLCategoryForTicket(t).then(t=>{if(t.data.length>0){var a=t.data;a.forEach(t=>{e.FormSchema[0].Data[8].config.options.push({name:t.name,value:t.value}),e.FormSchema2[0].Data[8].config.options.push({name:t.name,value:t.value})})}})},GetProductsList:function(){var e=this;l["a"].GetProductsList().then(t=>{if(t.data.length>0){var a=t.data;a.forEach(t=>{e.FormSchema[0].Data[11].config.options.push({name:t.name,value:t.value})})}})},GetChannelList:function(){var e=this;l["a"].GetDDLChannelByCompanyId().then(t=>{if(t.data.length>0){var a=t.data;a.forEach(t=>{e.FormSchema[0].Data[12].config.options.push({name:t.name,value:t.value})})}})},loadData:function(e){var t=this;"TicketSummary"==e?(t.activeKey=1,t.TicketSummarytab=!0,t.TicketPrivilegeTab=!1,t.TicketDetailsTab=!1,t.headerText="Ticket Summary Report",t.parameter=[]):"TicketPrivilege"==e?(t.activeKey=2,t.TicketSummarytab=!1,t.TicketPrivilegeTab=!0,t.TicketDetailsTab=!1,t.headerText="Ticket Privilege Report",t.parameter=[]):(t.activeKey=3,t.TicketSummarytab=!1,t.TicketPrivilegeTab=!1,t.TicketDetailsTab=!0,t.headerText="Ticket Details Report",t.parameter=[])},onClear:function(){var e=this;1==e.activeKey&&(e.FormSchema[0].Data[0].value=[],e.FormSchema[0].Data[1].value=[],e.FormSchema[0].Data[2].value=[],e.FormSchema[0].Data[3].value=[],e.FormSchema[0].Data[4].value=[],e.FormSchema[0].Data[5].value=[],e.FormSchema[0].Data[6].value="",e.FormSchema[0].Data[7].value="",e.FormSchema[0].Data[8].value="",e.FormSchema[0].Data[9].value="",e.FormSchema[0].Data[10].value="",e.FormSchema[0].Data[11].value="",e.FormSchema[0].Data[12].value="",e.parameter=[]),2==e.activeKey&&(e.FormSchema1[0].Data[0].value=[],e.parameter=[]),3==e.activeKey&&(e.FormSchema2[0].Data[0].value=[],e.FormSchema2[0].Data[1].value=[],e.FormSchema2[0].Data[2].value=[],e.FormSchema2[0].Data[3].value=[],e.FormSchema2[0].Data[4].value=[],e.FormSchema2[0].Data[5].value=[],e.FormSchema2[0].Data[6].value="",e.FormSchema2[0].Data[7].value="",e.FormSchema2[0].Data[8].value="",e.FormSchema2[0].Data[9].value="",e.FormSchema2[0].Data[10].value="",e.parameter=[])},onSubmit:function(e){var t=this,a="",i="",r="",o="",s="",n="",c="",u="",m="";e.SubmittedBy.forEach(e=>{a+=e.value+","}),e.AssignedTo.forEach(e=>{i+=e.value+","}),e.Client.forEach(e=>{r+=e.value+","}),e.Priority.forEach(e=>{o+=e.value+","}),e.AssignDepartment.forEach(e=>{n+=e.value+","}),e.Status.forEach(e=>{c+=e.value+","}),e.Category.forEach(e=>{s+=e.value+","}),e.Product.forEach(e=>{u+=e.value+","}),e.Channel.forEach(e=>{m+=e.value+","});var d={reportName:"ticketdetailreport",moduleName:"Ticketing",TicketNumber:e.TicketNumber,TicketSubject:e.Subject,SubmittedBy:a,AssignedTo:i,Client:r,Priority:o,AssignDepartment:n,Status:c,Category:s,Product:u,Channel:m,dateFrom:t.$options.filters.formatDatee(e.TicketDateFrom),dateTo:t.$options.filters.formatDatee(e.TicketDateTo)},p=JSON.stringify(d);l["a"].ReportMain(p).then(e=>{t.reportPath=e.data.reportpath,t.parameter=e.data.parameters})},onSubmit1:function(e){var t=this,a="";e.AssignDepartment.forEach(e=>{a+=e.value+","});var i={reportName:"tickethodreport",moduleName:"Ticketing",AssignDepartment:a},r=JSON.stringify(i);l["a"].ReportMain(r).then(e=>{t.reportPath=e.data.reportpath,t.parameter=e.data.parameters})},onSubmit2:function(e){var t=this,a="",i="",r="",o="",s="",n="",c="";e.SubmittedBy.forEach(e=>{a+=e.value+","}),e.AssignedTo.forEach(e=>{i+=e.value+","}),e.Client.forEach(e=>{r+=e.value+","}),e.Priority.forEach(e=>{o+=e.value+","}),e.AssignDepartment.forEach(e=>{n+=e.value+","}),e.Status.forEach(e=>{c+=e.value+","}),e.Category.forEach(e=>{s+=e.value+","});var u={reportName:"ticketreport",moduleName:"Ticketing",TicketNumber:e.TicketNumber,TicketSubject:e.Subject,SubmittedBy:a,AssignedTo:i,Client:r,Priority:o,AssignDepartment:n,Status:c,Category:s,dateFrom:t.$options.filters.formatDatee(e.TicketDateFrom),dateTo:t.$options.filters.formatDatee(e.TicketDateTo)},m=JSON.stringify(u);l["a"].ReportMain(m).then(e=>{t.reportPath=e.data.reportpath,t.parameter=e.data.parameters})}}},h=p,v=Object(u["a"])(h,i,r,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0a4f20.js.map