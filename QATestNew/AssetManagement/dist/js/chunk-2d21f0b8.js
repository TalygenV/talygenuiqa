(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f0b8"],{d7c2:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main-content"},[e("loader",{attrs:{"is-visible":t.isLoading}}),e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 padding-t_8"},[e("div",{staticClass:"theme-primary partition-full"},[e("span",{staticClass:"p-name text-white"},[t._v(t._s(t.$t("ASSET_ASSIGN_Desc")))]),e("span",{staticClass:"p-actions float-right"},[e("a",{staticClass:"p-action-btn text-white",attrs:{title:"BacktoList"},on:{click:t.BackTolist}},[e("em",{staticClass:"fa fa-angle-double-left pr-2"}),e("br"),e("span",[t._v(t._s(t.$t("BacktoList")))])])])])])])]),e("div",{staticClass:"border p-3"},[e("div",{staticClass:"col-md-12 p-0",attrs:{id:"dynmicForm"}},[e("Form",{ref:"ProductAssignmentForm"},[t.DataLoaded?e("dynamic-form",{attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},scopedSlots:t._u([{key:"tgslot-DateofAssignment",fn:function({data:a}){return[e("div",{staticClass:"input-group"},[e("v-date-picker",{staticClass:"timedate input-group",attrs:{popover:t.popover,name:t.DateofAssignment,"min-date":t.getMinDate(),mode:"dateTime","minute-increment":5},scopedSlots:t._u([{key:"default",fn:function({inputValue:a,togglePopover:s}){return[e("input",t._g({class:{"form-control":!0},attrs:{placeholder:"M/D/YYYY h:mm A"},domProps:{value:a},on:{click:function(t){return s()}}},t.inputEvents)),e("div",{staticClass:"input-group-append",on:{click:function(t){return s()}}},[e("span",{staticClass:"input-group-text"},[e("em",{staticClass:"fa fa-calendar"})])])]}}],null,!0),model:{value:t.DateofAssignment,callback:function(e){t.DateofAssignment=e},expression:"DateofAssignment"}})],1)]}},{key:"tgslot-DateofAssignmentTill",fn:function({data:a}){return[e("div",{staticClass:"input-group"},[e("v-date-picker",{staticClass:"timedate input-group",attrs:{popover:t.popover,name:t.DateofAssignmentTill,"min-date":t.getMinDate(),mode:"dateTime","minute-increment":5},scopedSlots:t._u([{key:"default",fn:function({inputValue:a,togglePopover:s}){return[e("input",t._g({class:{"form-control":!0},attrs:{placeholder:"M/D/YYYY h:mm A"},domProps:{value:a},on:{click:function(t){return s()}}},t.inputEvents)),e("div",{staticClass:"input-group-append",on:{click:function(t){return s()}}},[e("span",{staticClass:"input-group-text"},[e("em",{staticClass:"fa fa-calendar"})])])]}}],null,!0),model:{value:t.DateofAssignmentTill,callback:function(e){t.DateofAssignmentTill=e},expression:"DateofAssignmentTill"}})],1)]}}],null,!1,3463087764)}):t._e()],1),t.DataLoaded?e("SearchAsset",{attrs:{GetParentDetails:t.GetParentDetails},on:{GetDetailsofParent:t.GetDetails,AssestArrayData:t.AssestArrayData}}):t._e(),e("div",{staticClass:"row flex-row-reverse py-3"},[e("div",{staticClass:"col-lg-6 text-right"},[e("a",{staticClass:"btn btn-success formbtn text-white mr-1",attrs:{href:"javascript:void(0);",title:t.$t("Save")},on:{click:t.SubmitData}},[e("i",{staticClass:"fa fa-save pr-2"}),e("span",[t._v(t._s(t.$t("Save")))])]),e("a",{staticClass:"btn btn-danger formbtn text-white",attrs:{href:"javascript:;",title:t.$t("Cancel")},on:{click:function(e){return t.onCancel()}}},[e("i",{staticClass:"fa fa-close pr-2"}),e("span",[t._v(t._s(t.$t("Cancel")))])])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"py-2"},[e("small",{staticClass:"text-danger"},[t._v(t._s(t.$t("MandatoryString")))])])])])],1)])],1)},i=[],n=(a("14d9"),a("1115")),r=a("b25f"),o=a("1315"),l={components:{SearchAsset:r["a"]},data(){return{DataLoaded:0,isLoading:!1,UsersData:[],DateofAssignment:"",Users:"",Remarks:"",DateofAssignmentTill:"",Groupname:"",Users1:"",Users2:"",popover:{visibility:"click"},UserId:null,GetParentDetails:null,SelfCheckout:null,RequestFrom:"",isUsedFor:"",selectedOption:"",checked:!0,unchecked:!1,txtAssignUserType:"User",disabled:!1,dataArray:[],buttons:[],pendingItem:"",checkAvailability:"",FormSchema:[{layoutType:"four",Data:[{astype:"SelectField",label:this.$t("Departments"),name:"Departments",value:"",placeholder:"",disabled:!1,config:{options:[],onChange:this.GetCompanyUsers},validationRules:{required:!1}},{astype:"RadioField",label:this.$t("AssignTo"),name:"AssignTo",value:"User",placeholder:"",config:{options:[{value:"User",name:"User"},{value:"Client",name:"Client"}],onChange:this.AssignUserType},validationRules:{required:!0}},{astype:"SelectField",label:this.$t("SelectUser"),name:"User",value:"",placeholder:"",visibility:!0,validationRules:{required:!0},config:{options:[],onChange:this.GetDetails}},{astype:"SelectField",label:this.$t("ExistingClient"),name:"Client",value:"",placeholder:"",visibility:!1,validationRules:{required:!0},config:{options:[]}},{astype:"SelectField",label:this.$t("NotificationUser"),name:"NotificationUser",value:"",placeholder:"",validationRules:{required:!1},config:{options:[]}},{astype:"slotField",label:this.$t("DateofAssignmentt"),name:"DateofAssignment",value:"",placeholder:"",validationRules:"required",config:{format:"MM/DD/YYYY HH:MM A",minDate:new Date}},{astype:"slotField",label:this.$t("DateofAssignmentTilll"),name:"DateofAssignmentTill",value:"",placeholder:"",validationRules:"required",config:{format:"MM/DD/YYYY HH:MM A",minDate:new Date}}]},{Data:[{astype:"TextAreaField",label:this.$t("Remarks"),name:"Remarks",value:"",placeholder:"",validationRules:"",config:{rows:5}}]}],Timezone:""}},created:async function(){await this.GetDepartment(),await this.GetNotificationUser(),await this.GetCompanyUsers(),await this.GetCompanyClients(),this.UserId=this.GetUserInfo.ID,this.DataLoaded=1;const t=new Date;this.DateofAssignment=new Date,t.setDate(t.getDate()+7),this.DateofAssignmentTill=t,this.Timezone=this.GetUserInfo.TimeZone,"myitems"==this.$route.params.reqForm?this.FormSchema[0].Data[2].value=this.UserId:"pendingRequest"==this.$route.params.reqForm?(this.pendingItem=this.$route.params.items,null!=this.pendingItem&&""!=this.pendingItem&&"undefined"!=this.pendingItem&&(this.FormSchema[0].Data[2].value=this.pendingItem.USER_ID,this.FormSchema[0].Data[0].value=this.pendingItem.DEPARTMENT_ID,this.DateofAssignment=this.pendingItem.FROM_TIME,this.DateofAssignmentTill=this.pendingItem.TO_TIME)):"checkAssetAvailability"==this.$route.params.reqForm&&(this.checkAvailability=this.$route.params.items,null!=this.checkAvailability&&""!=this.checkAvailability&&this.checkAvailability)},methods:{AssignUserType:async function(t,e){e.value=t.target.getAttribute("data-value"),"AssignTo_1"==t.target.attributes.id.value?(this.FormSchema[0].Data[2].visibility=!1,this.FormSchema[0].Data[3].visibility=!0,this.FormSchema[0].Data[0].disabled=!0):(this.FormSchema[0].Data[2].visibility=!0,this.FormSchema[0].Data[3].visibility=!1,this.FormSchema[0].Data[0].disabled=!1)},BackTolist:function(){this.$router.push({name:"ProductAssignment"})},onCancel:function(){this.$router.push({name:"ProductAssignment"})},GetDepartment:async function(){let t="includeInactiveStatus=true&isTicketHandler=false";await n["a"].GetDepartment(t).then(t=>{t.data.forEach(t=>{this.FormSchema[0].Data[0].config.options.push({name:""+t.department_name,value:""+t.department_id})})})},GetNotificationUser:async function(){let t="moduleName=ASSETASSIGNMENT&department_ids=";await n["a"].GetNotficationUsers(t).then(t=>{t.data.data.forEach(t=>{this.FormSchema[0].Data[4].config.options.push({name:""+t.NAME,value:""+t.USER_ID})})})},GetCompanyUsers:async function(){var t=this;t.FormSchema[0].Data[2].config.options=[],t.isLoading=!0;var e=t.FormSchema[0].Data[0].value;let a="moduleName=ASSETASSIGNMENT&department_ids="+e;await n["a"].GetCompanyUsers(a).then(e=>{this.UsersData=e.data,e.data.forEach(e=>{this.FormSchema[0].Data[2].config.options.push({name:""+e.USERNAME,value:""+e.USER_ID}),t.isLoading=!1}),e.data.length<=0&&(this.FormSchema[0].Data[2].config.options=[],t.isLoading=!1)})},GetCompanyClients:async function(){let t="moduleName=ASSETASSIGNMENT&department_ids=";await n["a"].GetCompanyClients(t).then(t=>{t.data.forEach(t=>{this.FormSchema[0].Data[3].config.options.push({name:""+t.USERNAME,value:""+t.user_id})})})},GetDetails:function(){var t=this,e=this.FormSchema[0].Data[2].value;t.GetParentDetails={DepartmentID:t.txtDepartment,UserID:e,GetNotificationUserID:t.Users1,FromDate:t.DateofAssignment,TillDate:t.DateofAssignmentTill,SelfCheckout:null,RequestFrom:"assetassignment",isUsedFor:"search",pendingItems:t.pendingItem,checkAvailabilities:t.checkAvailability},sessionStorage.setItem("GetParentDetails",JSON.stringify(t.GetParentDetails))},AssestArrayData(t){this.dataArray=t},SubmitData:function(){var t=this,e=t.$children[2].$children[3].GetRequstionList;"Client"==t.FormSchema[0].Data[1].value?(t.$refs.ProductAssignmentForm.fields.Departments.failed=!1,t.FormSchema[0].Data[0].validationRules.required=!1):(t.$refs.ProductAssignmentForm.fields.Departments.failed=!0,t.FormSchema[0].Data[0].validationRules.required=!1),t.$refs.ProductAssignmentForm.validate().then(a=>{if(t.$refs.ProductAssignmentForm.errors["Assign To"].length>0&&(a=!0),""==t.FormSchema[0].Data[2].value&&""==t.FormSchema[0].Data[3].value&&(a=!1),a){var s=new FormData,i=[];let a="";var r="";for(let e=0;e<t.dataArray.length;e++)a=t.dataArray.length>1?t.dataArray[0].AssetUniqueName:a+","+t.dataArray[e].AssetUniqueName;t.UsersData.forEach(e=>{e.USER_ID==parseInt(t.FormSchema[0].Data[2].value)&&(r=e.USERNAME)});var o=!1;if(t.dataArray.forEach(t=>{(null===t.RequestQuantity||""===t.RequestQuantity||0===t.RequestQuantity||isNaN(t.RequestQuantity)||"undefined"===t.RequestQuantity)&&(o=!0)}),o)return t.ShowAlert(t.$t("RequestQuantityRequired"),"warning",!0,t.$t("Alert")),!1;e.forEach(e=>{var a={AssetCatalogUniqueId:e.ChildUniqueId,RequestFromRequsition:1,IsGroup:null,ParentAssetCatalogUniqueId:e.ChildUniqueId,AssetQuantity:e.RequestQuantity,RequestQuantity:e.RequestQuantity,BatchId:e.RequisitionBatchId,AssetUniqueName:e.ChildUniqueName};t.dataArray.push(a)});var l={UserId:"Client"==t.FormSchema[0].Data[1].value?t.FormSchema[0].Data[3].value:t.FormSchema[0].Data[2].value,DepartmentId:t.FormSchema[0].Data[0].value,AssignedFrom:null,AssignedTill:null,AssignedFromDateTime:t.$options.filters.formatDateTimeYYMMDD(t.DateofAssignment),AssignedTillDateTime:t.$options.filters.formatDateTimeYYMMDD(t.DateofAssignmentTill),StartTime:null,EndTime:null,Comment:t.FormSchema[1].Data[0].value,NotificationUsers:t.FormSchema[0].Data[4].value,RequestFrom:"AssetAssign",IsRequestFromRequisition:!1,IssueToName:r,RFID:0,GroupRequistionAssestInfostring:t.dataArray,itemNames:t.dataArray.map(t=>t.AssetUniqueName).join(",")};i.length,s.append("postString",JSON.stringify(l)),t.dataArray.length>0?n["a"].SaveGroupAssign(s).then(e=>{0==e.data.status?""==e.data.existIds&&(t.ShowAlert(t.$t("Itemassignedsuccessfully"),"success",t.$t("Alert")),"MyItems"==t.$route.query.reqForm||"pendingRequest"==t.$route.query.reqForm||t.onCancel()):t.ShowAlert(t.$t("ErrorWhileProcessingRequest"),"failure",t.$t("Alert"))}):t.ShowAlert(t.$t("AddAtLeastOne"),"failure",t.$t("Alert"))}})},formatTimeToCustomFormat(t){if(null!=t&&""!==t){const e=o["DateTime"].fromJSDate(new Date(t),{zone:"utc"}),a="Etc/GMT"+this.Timezone,s=e.setZone(a),i=s.toFormat("MM/dd/yyyy h:mm");return i}return""}}},m=l,u=a("2877"),c=Object(u["a"])(m,s,i,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d21f0b8.js.map