(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15fe4dd3"],{"1be4":function(t,e,i){var a=i("d066");t.exports=a("document","documentElement")},"33d1":function(t,e,i){"use strict";var a=i("23e7"),s=i("7b0b"),o=i("07fa"),n=i("5926"),r=i("44d2");a({target:"Array",proto:!0},{at:function(t){var e=s(this),i=o(e),a=n(t),r=a>=0?a:i+a;return r<0||r>=i?void 0:e[r]}}),r("at")},"37e8":function(t,e,i){var a=i("83ab"),s=i("aed9"),o=i("9bf2"),n=i("825a"),r=i("fc6a"),c=i("df75");e.f=a&&!s?Object.defineProperties:function(t,e){n(t);var i,a=r(e),s=c(e),d=s.length,l=0;while(d>l)o.f(t,i=s[l++],a[i]);return t}},"44d2":function(t,e,i){var a=i("b622"),s=i("7c73"),o=i("9bf2").f,n=a("unscopables"),r=Array.prototype;void 0==r[n]&&o(r,n,{configurable:!0,value:s(null)}),t.exports=function(t){r[n][t]=!0}},"7c73":function(t,e,i){var a,s=i("825a"),o=i("37e8"),n=i("7839"),r=i("d012"),c=i("1be4"),d=i("cc12"),l=i("f772"),u=">",h="<",S="prototype",f="script",p=l("IE_PROTO"),A=function(){},b=function(t){return h+f+u+t+h+"/"+f+u},L=function(t){t.write(b("")),t.close();var e=t.parentWindow.Object;return t=null,e},_=function(){var t,e=d("iframe"),i="java"+f+":";return e.style.display="none",c.appendChild(e),e.src=String(i),t=e.contentWindow.document,t.open(),t.write(b("document.F=Object")),t.close(),t.F},m=function(){try{a=new ActiveXObject("htmlfile")}catch(e){}m="undefined"!=typeof document?document.domain&&a?L(a):_():L(a);var t=n.length;while(t--)delete m[S][n[t]];return m()};r[p]=!0,t.exports=Object.create||function(t,e){var i;return null!==t?(A[S]=s(t),i=new A,A[S]=null,i[p]=t):i=m(),void 0===e?i:o.f(i,e)}},d6de:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("section",[e("tg-list",{directives:[{name:"show",rawName:"v-show",value:t.IscrewView,expression:"IscrewView"}],attrs:{IsShowAction:!0,ModuleName:"Ticketing",SubModuleCode:"Ticketing",LegendArray:[],RenderRowActionMethod:t.renderActions,widgets:[],IdentityColumn:"sla_id",SearchFields:t.leftSearchFields,HeaderText:t.$t("SLA"),listType:["List"],ListData:t.SLAList,HeaderData:t.Headers,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords,ListDataCallBackFunction:t.FetchRecords,showCheckBox:!0,SortExp:t.SortExp,SortBy:t.SortBy,NorecordfoundText:t.$t("NoRecordfound")},on:{ActionButtonClick:t.actionButtonClick,LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,SortdataButtonClick:t.sortdata},scopedSlots:t._u([{key:"slotdata",fn:function({data:i}){return["status_id"==i.column.COLUMN_NAME?[t.isCRMShowStausDrop(i.row.status_id,"Ticketing")?e("listing-status",{ref:"updatestatus",attrs:{isfor:"policy",dataid:i.row.sla_id,"data-controller":"Crm",statuslist:t.StatusListForListing,item:i.status_id,"data-action":"index",dataselected:1001==i.row.status_id?"Active":"Inactive",callbackfunction:t.FetchRecords,isselectedvaluestring:!0}}):t._e(),t.isCRMShowStausDrop(i.row.status_id,"Ticketing")?t._e():e("a",{staticClass:"inactive-disabled"},[e("span",{class:t.getStatusClass(i.row.status_id,"status_id")},[t._v(" "+t._s(i.row[i.column.COLUMN_NAME])+" ")])])]:t._e(),"policy_name"==i.column.COLUMN_NAME?[e("RouterLink",{attrs:{to:"/Ticketing/addpolicy/"+i.row.sla_id,title:i.row[i.column.COLUMN_NAME],"data-toggle-tooltip":"tooltip","data-original-title":"Click here to edit Ticketing Policy"}},[t._v(" "+t._s(i.row[i.column.COLUMN_NAME])+" ")])]:t._e(),"policy_date"==i.column.COLUMN_NAME?[e("span",[t._v(" "+t._s(t.$options.filters.formatDate(i.row.policy_date))+" ")])]:t._e()]}}])})],1)},s=[];i("33d1"),i("ea98"),i("14d9"),i("88a7"),i("271a"),i("5494");let o=[{title:"Add",iconClass:"fa fa-plus",callbackfunction:"openaddTicketPolicy",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0,id:"AddPolicy"},{id:"Active",title:"Active",iconClass:"fa fa-check",callbackfunction:"updateStatus",isdisabled:!0,isvisible:!0,isEnabledOnSelectedRow:!0},{id:"Inactive",title:"Inactive",iconClass:"fa fa-close",callbackfunction:"updateStatus",isdisabled:!0,isvisible:!0,isEnabledOnSelectedRow:!0},{id:"DeleteMultiple",title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",isdisabled:!0,isvisible:!0,isEnabledOnSelectedRow:!0}],n=[{fieldName:"Search By Policy Name",fieldType:"text",fieldIcon:"fa fa-map-marker",fieldSearchConditionName:["search"],paramName:"search",isSearch:!1,value:"",listOptions:[]}],r=[{title:"UpOrder",href:"javascript:void(0)",icon:"fa fa-arrow-circle-up text-dark action-icon UpDisplayOrder",callbackfunction:"UpOrder",additionalSpan:"",class:"UpDisplayOrder"},{title:"DownOrder",href:"javascript:void(0)",callbackfunction:"DownOrder",icon:"fa fa-arrow-circle-down text-dark action-icon DownDisplayOrder",additionalSpan:"",class:"DownDisplayOrder"}];var c={buttons:o,leftsearchSchema:n,listActions:r},d=i("9769"),l={data(){return{IscrewView:!0,showSetupTickectSource:!1,showExpanded:"",StatusMappingList:[],noRecords:!1,SortBy:"",SortExp:"",PageSize:"10",PageNumber:"1",TotalRecords:0,CurrentPage:1,TotalPages:0,SearchCondition:"",SLAList:[],GroupStart:1,GroupEnd:3,ticketSourceId:0,Headers:[{COLUMN_NAME:"policy_name",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Policy Name",DISPLAY_ORDER:1},{COLUMN_NAME:"policy_date",DATA_TYPE:"string",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Policy Date",DISPLAY_ORDER:2},{COLUMN_NAME:"ORDER_LEVEL",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Order Level",DISPLAY_ORDER:3},{COLUMN_NAME:"status_id",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Status",DISPLAY_ORDER:3}],listheaderbuttons:c.buttons,leftSearchFields:c.leftsearchSchema,listActions:c.listActions,user_type:null,user_id:null,companyId:null,search:"",StatusListForListing:[{STATUS:"Active",STATUS_ID:1001,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#28a745"},{STATUS:"Inactive",STATUS_ID:1002,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#d72435"}]}},created:async function(){var t=this;t.user_id=this.GetUserInfo.ID,t.user_type=this.GetUserInfo.UserType,t.companyId=this.GetUserInfo.CompanyId,await t.FetchRecords(),t.EnableDisableButtons()},methods:{paramsToObject(t){const e={};for(const[i,a]of t)e[i]=a;return e},UPDownDisplay:function(t,e){var i=this;let a=i.SLAList.findIndex(e=>e.sla_id===t.sla_id);if("UPArrow"==e){var s=t.sla_id,o=i.SLAList.at(--a),n=t.ORDER_LEVEL,r=o.sla_id,c=o.ORDER_LEVEL;let e=i.SLAList.findIndex(e=>e.sla_id===t.sla_id);const h=i.SLAList[e];i.SLAList.splice(e,1),i.SLAList.splice(e-1,0,h);var l={id:s,idc:r,disorder:n,disordc:c,type:"up"},u=JSON.stringify(l);d["a"].MovePolicyDisplayOrder(u).then((function(t){t.data.status&&(i.ShowAlert(i.$t("RecordMovedSuccessfully",[i.$t("")]),"success",!0,i.$t("Alert")),i.FetchRecords())}))}else if("DownArrow"==e){s=t.sla_id,o=i.SLAList.at(++a),n=t.ORDER_LEVEL,r=o.sla_id,c=o.ORDER_LEVEL;let e=i.SLAList.findIndex(e=>e.sla_id===t.sla_id);const h=i.SLAList[e];i.SLAList.splice(e,1),i.SLAList.splice(e+1,0,h);l={id:s,idc:r,disorder:n,disordc:c,type:"down"},u=JSON.stringify(l);d["a"].MovePolicyDisplayOrder(u).then((function(t){t.data.status&&(i.ShowAlert(i.$t("RecordMovedSuccessfully",[i.$t("")]),"success",!0,i.$t("Alert")),i.FetchRecords())}))}i.EnableDisableButtons()},renderActions:function(t){var e=this;let i=[];return e.listActions.forEach(t=>{let e={...t};switch(e.title){case"UpOrder":e.isVisible=!0;break;case"DownOrder":e.isVisible=!0;break;default:e.isVisible=!0}i.push(e)}),i},actionButtonClick(t,e,i,a){switch(t){case"UpOrder":this.UPDownDisplay(e,"UPArrow");break;case"DownOrder":this.UPDownDisplay(e,"DownArrow");break}},EnableDisableButtons:function(){$(".UpDisplayOrder,.DownDisplayOrder").show(),$(".UpDisplayOrder").first().hide(),$(".DownDisplayOrder").last().hide()},leftCommonSearch:function(t){const e=new URLSearchParams(t.searchConditionJson),i=e.entries(),a=this.paramsToObject(i);a.hasOwnProperty("search")?this.search=a["search"]:this.search="",this.PageNumber=t.PageNumber,this.isPaged=1,"undefined"!=typeof t.searchCondition?this.searchCondition=t.searchCondition:this.searchCondition="",this.FetchRecords()},UpdateStatus:async function(t){var e=this;t="Active"==t?1001:1002;var i="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){i.length>0&&(i+=","),i+=$(this).val()})),i.length>0&&e.confirmR(e.$t("ConfirmUpdateStatusRecord"),!0,e.$t("Active")+"  "+e.$t("Inactive"),(function(){var a=`id=${i}&statusId=${t}&isFor=policy`;d["a"].updatestatus(a).then(t=>{1==t.data&&(e.listheaderbuttons[1].isdisabled=!0,e.listheaderbuttons[2].isdisabled=!0,e.listheaderbuttons[3].isdisabled=!0,e.ShowAlert(e.$t("UpdatedSuccess",[e.$t("Status")]),"success",!0,e.$t("Alert")),e.FetchRecords())})}))},FetchRecords:async function(){var t=this;t.isBlank(t.SearchCondition)||(t.PageNumber=1);var e=`sortBy=${t.SortBy}&sortExp=${t.SortExp}&pageSize=${t.PageSize}&pageNumber=${t.PageNumber}`;t.isBlank(this.search)||(e+="&search="+this.search),await d["a"].GetPolicyListSLA(e).then((function(e){t.Headers.forEach(t=>{t.settings=null,"status_id"==t.COLUMN_NAME&&(t.DISPLAY_NAME="Status",t.settings={isInSlot:!0,isForTag:!0}),"policy_name"==t.COLUMN_NAME&&(t.settings={isInSlot:!0}),"policy_date"==t.COLUMN_NAME&&(t.settings={isInSlot:!0})}),t.SLAList=[],t.TotalPages=Math.ceil(t.TotalRecords/t.PageSize),t.TotalRecords=0,null!=e.data&&""!=e.data&&("OK"==e.statusText||200==e.status?(t.SLAList=e.data,t.TotalPages=Math.ceil(t.TotalRecords/t.PageSize),t.CurrentPage=t.PageNumber,t.SLAList.length>0?(t.TotalRecords=e.data[0].TOTALRECORDS,t.listheaderbuttons[1].isdisabled=!0,t.listheaderbuttons[2].isdisabled=!0,t.listheaderbuttons[3].isdisabled=!0,t.noRecords=!1):t.noRecords=!0):t.noRecords=!0,setTimeout((function(){t.ResponsiveDataTable("tablelistingdata")}),500))}))},pagerMethod:async function(t){var e=this;this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,await e.FetchRecords(),e.EnableDisableButtons()},commonHeaderButtonClick:function(t){switch(t.callbackfunction){case"openaddTicketPolicy":this.openAddEditTicketPolicy(0);break;case"commonDeleteData":this.commonDeleteData();break;case"openaddWorkType":this.openPopupForSetupCrewList(null);break;case"updateStatus":this.UpdateStatus(t.id);break}},openAddEditTicketPolicy(t){this.$router.push({name:"addpolicy",params:{id:t}})},sortdata:async function(t){var e=this;this.SortBy=t;var i="ASC";"ASC"==this.SortExp&&(i="DESC"),this.SortExp=i,this.SortBy=t,this.SortExp=i,this.PageNumber=1,this.GroupStart=this.PageNumber,this.GroupEnd=this.PageNumber+2,await e.FetchRecords(),e.EnableDisableButtons()},commonDeleteData:function(t){var e=this,i="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){i.length>0&&(i+=","),i+=$(this).val()})),i.length>0?e.confirmR(e.$t("ConfirmDelete"),!0,e.$t("Delete")+"  "+e.$t("Crew"),(function(){var t={ids:i,companyId:e.companyId,userId:e.user_id,moduleName:"FSM",refCode:"TALYGEN_TICKET_SLA"},a=JSON.stringify(t);d["a"].deleteActivityData(a).then(t=>{var i="";"Success"==t.data[0].Status?(e.listheaderbuttons[1].isdisabled=!0,e.listheaderbuttons[2].isdisabled=!0,e.listheaderbuttons[3].isdisabled=!0,e.FetchRecords(),i=e.ShowAlert(e.$t("DeletedSuccess",[e.$t("SLA")]),"Success",!0,e.$t("Alert"))):i=e.ShowAlert(e.$t("DeletedError",[e.$t("SLA")]),"failure",!0,e.$t("Alert")),setTimeout((function(){i.modal("hide")}),2e3)})})):alert(e.$t("Selectanyrecordtodelete"))},getStatusClass:function(t){var e="";switch(t){case"Active":e="px-2 text-center bg-success text-white d-block";break;case"Inactive":e="px-2 text-center bg-danger text-white d-block";break;default:e=""}return e}}},u=l,h=i("2877"),S=Object(h["a"])(u,a,s,!1,null,null,null);e["default"]=S.exports},df75:function(t,e,i){var a=i("ca84"),s=i("7839");t.exports=Object.keys||function(t){return a(t,s)}},ea98:function(t,e,i){"use strict";var a=i("23e7"),s=i("e330"),o=i("1d80"),n=i("5926"),r=i("577e"),c=i("d039"),d=s("".charAt),l=c((function(){return"\ud842"!=="𠮷".at(-2)}));a({target:"String",proto:!0,forced:l},{at:function(t){var e=r(o(this)),i=e.length,a=n(t),s=a>=0?a:i+a;return s<0||s>=i?void 0:d(e,s)}})}}]);
//# sourceMappingURL=chunk-15fe4dd3.js.map