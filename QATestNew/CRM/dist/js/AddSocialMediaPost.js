(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AddSocialMediaPost"],{"09c5":function(e,t,a){var n=a("7928");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=a("499e").default;o("528881b0",n,!0,{sourceMap:!1,shadowMode:!1})},"0ccb":function(e,t,a){var n=a("e330"),o=a("50c4"),i=a("577e"),r=a("1148"),s=a("1d80"),l=n(r),c=n("".slice),d=Math.ceil,u=function(e){return function(t,a,n){var r,u,f=i(s(t)),m=o(a),p=f.length,h=void 0===n?" ":i(n);return m<=p||""==h?f:(r=m-p,u=l(h,d(r/h.length)),u.length>r&&(u=c(u,0,r)),e?f+u:u+f)}};e.exports={start:u(!1),end:u(!0)}},"4d90":function(e,t,a){"use strict";var n=a("23e7"),o=a("0ccb").start,i=a("9a0c");n({target:"String",proto:!0,forced:i},{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},6086:function(e,t,a){"use strict";a.r(t),a.d(t,"uploader",(function(){return C}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("div",{staticClass:"container-fluid mt-3 tab-style plaintabs"},[a("loader",{attrs:{"is-visible":e.isLoading}}),a("div",{staticClass:"col-md-12 p-0 mt-2"},[a("div",{staticClass:"theme-primary partition-full"},[a("span",{staticClass:"p-name text-white"},[e._v(e._s(e.$t("NewSocialPost")))]),a("span",{staticClass:"p-actions float-right"},[a("a",{staticClass:"p-action-btn text-white",attrs:{href:"javascript:;",value:"cal",id:"ShowCalender",title:"","data-toggle-tooltip":"tooltip","data-original-title":"Back to List"},on:{click:function(t){return e.BackToList()}}},[a("i",{staticClass:"fa fa-angle-double-left pr-2"}),a("br"),a("span",[e._v(" Back to List")])])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 p-0 mt-2 float-left"},[a("div",{staticClass:"col-sm-12 col-md-6 p-0 float-left position-relative"},[a("Form",{ref:"AddPost"},[a("dynamic-form",{ref:"AddPostForm",attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},scopedSlots:e._u([{key:"tgslot-Content",fn:function(t){var n=t.data;return[a("ckeditor",{attrs:{editor:e.editor},on:{ready:e.onReady},model:{value:n.fieldInfo.value,callback:function(t){e.$set(n.fieldInfo,"value",t)},expression:"data.fieldInfo.value"}}),a("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Content"}},[e._v(e._s(n.error))])]}}])}),e.isShowAdditionalBtns?a("div",{staticClass:"col-12 float-left mt-3 modal-post"},[a("div",{staticClass:"float-left border bg-white"},[a("a",{staticClass:"float-left d-flex p-2 borderbottom w-100",attrs:{href:"javascript:;"},on:{click:function(t){return e.saveForm("PostNow")}}},[a("div",{staticClass:"float-left d-block"},[a("em",{staticClass:"fa fa-paper-plane text-info p-3 font-24"})]),a("div",{staticClass:"float-left mt-2 ml-2"},[a("span",{staticClass:"w-100 float-left font-weight-medium"},[e._v("Post Now")]),a("span",{staticClass:"w-100 float-left font-12 font-weight-medium"},[e._v("Send out this post to the selected social channels/accounts.")])])]),a("a",{staticClass:"float-left d-flex p-2 borderbottom w-100",attrs:{href:"javascript:;"},on:{click:function(t){return e.SchedulePost("SchedulePost")}}},[a("div",{staticClass:"float-left d-block"},[a("em",{staticClass:"fa fa-clock-o p-3 font-24",staticStyle:{color:"#1dbdac"}})]),a("div",{staticClass:"float-left mt-2 ml-2"},[a("span",{staticClass:"w-100 float-left font-weight-medium"},[e._v("Schedule Post")]),a("span",{staticClass:"w-100 float-left font-12 font-weight-medium"},[e._v("Schedule a post for a later date or time.")])])]),a("a",{staticClass:"float-left d-flex p-2 borderbottom w-100",attrs:{href:"javascript:;"},on:{click:function(t){return e.SchedulePost("SendForApproval")}}},[a("div",{staticClass:"float-left d-block"},[a("em",{staticClass:"fa fa-check-circle text-success p-3 font-24"})]),a("div",{staticClass:"float-left mt-2 ml-2"},[a("span",{staticClass:"w-100 float-left font-weight-medium"},[e._v("Send Post For Approval")]),a("span",{staticClass:"w-100 float-left font-12 font-weight-medium"},[e._v("Send for approval first with in your agency or organisation.")])])]),a("a",{staticClass:"float-left d-flex p-2 w-100",attrs:{href:"javascript:;"},on:{click:function(t){return e.DeletePost()}}},[a("div",{staticClass:"float-left d-block"},[a("em",{staticClass:"fa fa-trash text-danger p-3 font-24"})]),a("div",{staticClass:"float-left mt-2 ml-2"},[a("span",{staticClass:"w-100 float-left font-weight-medium"},[e._v("Delete")]),a("span",{staticClass:"w-100 float-left font-12 font-weight-medium"},[e._v("Delete this post forever.")])])])])]):e._e()],1)],1),a("div",{staticClass:"col-sm-12 col-md-6 p-0 float-left p-4 "},[a("div",{staticClass:"bg-light p-3 float-left col-sm-12"},[a("div",{staticClass:"col-12  p-2"},[a("div",{staticClass:"col-12 d-flex align-items-center bg-white p-2"},[a("span",[e._v("Preview in")]),"FACEBOOK"==e.PageFrom?a("span",{staticClass:"ml-2"},[a("em",{staticClass:"fa fa-facebook-square",staticStyle:{"font-size":"28px",color:"#0067ff"}})]):e._e()]),a("div",{staticClass:" bg-grey p-2 float-left col-sm-12"},[a("div",{staticClass:"col-sm-12 col-md-12 float-left"},[a("div",{staticClass:"float-left fb_pagelist mb-3 mt-3"},[a("img",{staticClass:"float-left ",attrs:{src:"/Content/images/hr_1.jpg"}}),a("span",{staticClass:"float-left ml-2 w-60"},[a("span",{staticClass:"float-left w-100"},[e._v(e._s(e.PageName))]),a("small",{staticClass:"text-secondary float-left"},[e._v(" "+e._s(e.$options.filters.formatDate(e.CreatedDate)))])])])]),a("div",{staticClass:"col-12  p-2 mt-2 float-left"},[a("div",{domProps:{innerHTML:e._s(e.FormSchema[1].Data[0].value)}}),e._l(e.fileData,(function(e){return a("img",{staticClass:"img-fluid",attrs:{src:"data:image/gif;base64,"+e.base64String}})}))],2)])])])])])]),e.isShowScheduleApproveModal?a("modalScheduleAndApprovePost",{attrs:{ScheduleData:e.ScheduleData,reqFrom:e.reqFrom},on:{close:function(t){e.isShowScheduleApproveModal=!1}}}):e._e()],1)])},o=[],i=a("53ca"),r=a("c7eb"),s=a("1da1"),l=(a("81b2"),a("0eb6"),a("b7ef"),a("8bd4"),a("d3b7"),a("159b"),a("4de4"),a("b0c0"),a("ac1f"),a("5319"),a("1276"),a("e9c4"),a("313d"),a("4d90"),a("25f0"),a("9769")),c=a("d4ec"),d=a("bee2"),u=function(){function e(t){Object(c["a"])(this,e),this.loader=t}return Object(d["a"])(e,[{key:"upload",value:function(){var e=this;return new Promise((function(t,a){var n=new window.FileReader;n.addEventListener("load",(function(){t({default:n.result})})),n.addEventListener("error",(function(e){a(e)})),n.addEventListener("abort",(function(){a()})),e.loader.file.then((function(e){n.readAsDataURL(e)}))}))}},{key:"abort",value:function(){}}]),e}(),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("div",{staticClass:"modal my-popups  fade show",staticStyle:{display:"block"},attrs:{role:"dialog"}},[a("div",{staticClass:"modal-dialog mw-1100",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header mheader-user"},[a("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(t){return e.$emit("close")}}},[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),a("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[e._v(e._s(e.$t(e.reqFrom)))])]),a("div",{staticClass:"modal-body"},[e.isLoaded?a("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit}}):e._e(),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"py-2"},[a("span",{staticClass:"mandatory"},[e._v(" "+e._s(e.$t("MandatoryString"))+" ")])])])],1)])])])])},m=[],p={props:{reqFrom:{type:String,required:!0},ScheduleData:{type:Object,required:!0}},data:function(){return{isLoaded:!1,FormSchema:[{layoutType:"double",Data:[{astype:"DateField",label:"Start Date (M/D/YYYY)",name:"StartDate",value:"",placeholder:"",config:{format:"M/D/YYYY",minDate:new Date,onChange:this.onChangeDate},validationRules:{required:!0},visibility:!0},{astype:"DateField",label:this.$t("StartTime"),name:"StartTime",value:"",placeholder:"",config:{mode:"Time",minDate:new Date},validationRules:{required:!0},visibility:!0},{astype:"SelectField",label:this.$t("Approver"),name:"Approver",value:"",placeholder:"",config:{options:[]},validationRules:{required:!0},visibility:!1},{astype:"TextField",label:this.$t("AddNote"),name:"AddNote",value:"",placeholder:"",validationRules:{required:!1},visibility:!1}]}],buttons:[{type:"submit",class:"btn btn-success",text:"SchedulePost"==this.reqFrom?"Schedule Post":'<i class="fa fa-clock-o pr-2"></i>Schedule & Send For Approval'},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.Close}]}},created:function(){var e=this;return Object(s["a"])(Object(r["a"])().mark((function t(){var a;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e,!(a.ScheduleData.length>0&&null!=a.ScheduleData[0].start_date)){t.next=4;break}return t.next=4,e.FetchData();case 4:if("SendForApproval"!=a.reqFrom){t.next=9;break}return a.FormSchema[0].Data[2].visibility=!0,a.FormSchema[0].Data[3].visibility=!0,t.next=9,a.GetCampaignApprovers();case 9:a.isLoaded=!0;case 10:case"end":return t.stop()}}),t)})))()},methods:{FetchData:function(){var e=Object(s["a"])(Object(r["a"])().mark((function e(){var t,a,n,o,i,s,l,c,d,u,f,m,p;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this,a=t.ScheduleData[0],n=a.start_time,o=new Date,i=o.getFullYear(),s=o.getMonth(),l=o.getDate(),c=n.split(":"),d=parseInt(c[0],10),u=parseInt(c[1],10),f=parseInt(c[2],10),m=new Date(i,s,l,d,u,f),p=m.toString(),t.FormSchema[0].Data[0].value=a.start_date,t.FormSchema[0].Data[1].value=p,t.FormSchema[0].Data[2].value=a.approver_id,t.FormSchema[0].Data[3].value=a.note;case 17:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onSubmit:function(e,t){var a=this;a.$parent.scheduleDate=e.StartDate,a.$parent.scheduleTime=e.StartTime,a.$parent.approverId=e.Approver,a.$parent.approverNote=e.AddNote,a.$parent.saveForm(a.reqFrom),a.$emit("close")},Close:function(){var e=this;e.$emit("close")},onChangeDate:function(e,t,a){var n=this;"StartDate"==t.name&&(n.FormSchema[0].Data[0].config.minDate=e,n.FormSchema[0].Data[1].value=e)},GetCampaignApprovers:function(){var e=this;return Object(s["a"])(Object(r["a"])().mark((function t(){var a,n;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,n="id=&moduleName=CRM&type=CRM_APPROVER_USERS",t.next=4,l["a"].getDDLData(n+"&search=").then((function(e){if(""!=e.data){var t=e.data.DATA,n=[];null!=t&&(t.forEach((function(e){n.push({name:e.name,value:e.value})})),a.FormSchema[0].Data[2].config.options=t)}}));case 4:case"end":return t.stop()}}),t)})))()}}},h=p,v=a("2877"),g=Object(v["a"])(h,f,m,!1,null,null,null),b=g.exports,S={components:{modalScheduleAndApprovePost:b},data:function(){return{editor:this.CLASSIC_EDITOR,isLoading:!1,AllPages:[],content:"<p>Some initial content</p>",editorConfig:{extraPlugins:[C]},File:null,fileData:[],schedule:[],PostId:0,PageFrom:"",PageName:"",CreatedDate:"",PageRouteId:0,ScheduleData:[],approverData:[],base64String:null,isShowAdditionalBtns:!1,isShowScheduleApproveModal:!1,reqFrom:"",scheduleDate:null,scheduleTime:null,approverId:0,approverNote:"",PageTitle:"",ContainerName:null,IsDraft:!1,UserId:0,CompanyId:0,TagData:[],TagName:"",UserTimeZone:"",ModuleName:"CRM",base64StringData:"",blobPath:"https://cogniterblob.blob.core.windows.net/",SubModuleCode:"CRM_POST_SENT",FormSchema:[{layoutType:"double",Data:[{astype:"SelectField",label:this.$t("PostTo"),name:"PostTo",value:"",placeholder:this.$t("Select"),config:{options:[],onChange:this.SetPreviewData},validationRules:{required:!0}},{astype:"SelectField",label:this.$t("AssignCampaignOwner"),name:"AssignCampaignOwner",value:"",placeholder:this.$t("Select"),config:{options:[]},validationRules:{required:!0}}]},{layoutType:"single",Data:[{astype:"SlotField",label:this.$t("Content"),name:"Content",value:"",placeholder:"",validationRules:{required:!0}},{astype:"FileField",showLabel:!0,label:this.$t("Upload Imgae/Video"),name:"Attachment",value:"",placeholder:"",validationRules:"",FieldIndex:0,config:{maxSize:1,accept:[{fileType:"doc",iconClass:"fa-file-word-o"},{fileType:"docx",iconClass:"fa-file-word-o"},{fileType:"txt",iconClass:"fa-file-text-o"},{fileType:"jpg",iconClass:"fa-file-image-o"},{fileType:"jpeg",iconClass:"fa-file-image-o"},{fileType:"png",iconClass:"fa-file-image-o"},{fileType:"gif",iconClass:"fa-file-image-o"},{fileType:"bmp",iconClass:"fa-file-image-o"},{fileType:"mp4",iconClass:"fa-file-video-o"},{fileType:"mov",iconClass:"fa-file-video-o"}],showSelectedFiles:[],onChange:this.GetBase64String,showAddIcon:!1,onAddButtonClick:"",multiple:!1}},{astype:"TextAreaField",label:this.$t("FollowUpComment"),name:"FollowUpComment",value:"",placeholder:"",validationRules:{required:!1}},{astype:"SelectField",label:this.$t("Category"),name:"Category",value:"",placeholder:"Select",config:{options:[],showAddIcon:!0,onAddButtonClick:this.AddCategory},validationRules:{required:!1}},{astype:"SelectField",label:this.$t("Tags"),name:"Tags",value:"",placeholder:"Select",config:{options:[]},validationRules:{required:!1}}]}],buttons:[{type:"submit",class:"btn btn-success save",text:"<i class='fa fa-save pr-2'></i>Save for Later",value:"Draft",onClick:this.saveForm},{type:"button",class:"btn btn-primary",text:"Post<i class='fa fa-angle-double-right pl-2 pr-2'></i>",onClick:this.hideShowBtns}]}},created:function(){var e=this;return Object(s["a"])(Object(r["a"])().mark((function t(){var a;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,t.next=3,a.GetPageList();case 3:if(a.FormSchema[1].Data[0].value=a.content,a.CompanyId=a.GetUserInfo.CompanyId,a.ContainerName=a.GetUserInfo.ContainerName,a.UserTimeZone=a.GetUserInfo.TimeZone,a.UserId=a.GetUserInfo.ID,a.PreviousId=e.$route.params.PrevId,a.PageRouteId=0==e.$route.params.id?0:atob(e.$route.params.id),!(a.PageRouteId>0&&"Editcampaign"==e.$route.params.reqForm)){t.next=15;break}return t.next=13,e.Editcampaign();case 13:t.next=17;break;case 15:return t.next=17,e.FetchData();case 17:return t.next=19,a.GetCampaignOwners();case 19:return t.next=21,a.GetTags();case 21:return t.next=23,a.GetCategories();case 23:a.$refs.AddPostForm.UpdateKeyValue();case 24:case"end":return t.stop()}}),t)})))()},methods:{AddCategory:function(){window.open("http://localhost:9000/Category/Index","_blank")},FetchData:function(){var e=Object(s["a"])(Object(r["a"])().mark((function e(){var t,a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,t.isLoading=!0,t.PostId=t.PageRouteId,a="id=".concat(t.PageRouteId),e.next=6,l["a"].GetSocialMediaPost(a).then(function(){var e=Object(s["a"])(Object(r["a"])().mark((function e(a){var n,o,i,s;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null==a.data||""==a.data){e.next=19;break}if(!(a.data.data.length>0)){e.next=19;break}if(n=a.data.data[0],t.FormSchema[0].Data[0].value=n.ref_page_id,t.FormSchema[0].Data[1].value=n.campaign_owner_id,t.FormSchema[1].Data[0].value=n.content,t.FormSchema[1].Data[2].value=n.followup_content,t.FormSchema[1].Data[3].value=n.category_id,t.FormSchema[1].Data[4].value=n.tag_id,o={start_date:n.start_date,start_time:n.start_time,approver_id:n.approver_id,note:n.note},t.ScheduleData.push(o),null==n.attachement_path){e.next=18;break}return t.FormSchema[1].Data[1].config.showSelectedFiles.push({attachmentName:n.attachement_name,attachmentPath:t.blobPath+"/"+t.containerName+"/"+n.attachement_path}),i="path=".concat(n.attachement_path),e.next=16,l["a"].GetBase64String(i).then((function(e){t.base64StringData=e.data}));case 16:s={attachement_mime:n.attachement_mime,fileName:n.attachement_name,userId:t.UserId,companyId:t.CompanyId,id:0,moduleName:t.ModuleName,subModuleCode:t.SubModuleCode,containerName:t.ContainerName,base64String:t.base64StringData,attachement_path:""},t.fileData.push(s);case 18:t.AllPages.forEach((function(e){e.PAGE_ID==n.ref_page_id&&("FACEBOOK"==e.ACCOUNT_NAME?t.PageFrom="FACEBOOK":"INSTAGRAM"==e.ACCOUNT_NAME&&(t.PageFrom="INSTAGRAM")),t.isLoading=!1}));case 19:t.isLoading=!1;case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),Editcampaign:function(){var e=Object(s["a"])(Object(r["a"])().mark((function e(){var t,a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,t.isLoading=!0,a="id=".concat(t.PageRouteId),e.next=5,l["a"].GetCampaignData(a).then(function(){var e=Object(s["a"])(Object(r["a"])().mark((function e(a){var n,o,i,s;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null==a.data||""==a.data){e.next=28;break}if(!(a.data.data.length>0)){e.next=28;break}if(n="",t.PreviousId>0?(n=a.data.data,a.data.data.forEach((function(e,o){e.MainId==t.PreviousId&&(n=a.data.data[o])}))):n=a.data.data[a.data.data.length-1],null!=n.PostId){e.next=25;break}if(t.IsDraft=n.is_draft,0==n.is_draft&&(t.buttons[0].class+=" disabled",t.buttons[1].class+=" disabled"),t.PostId=null==n.PostId?n.MainId:n.PostId,t.FormSchema[0].Data[0].value=n.ref_page_id,t.FormSchema[0].Data[1].value=n.campaign_owner_id,t.FormSchema[1].Data[0].value=n.content,t.FormSchema[1].Data[2].value=n.followup_content,t.FormSchema[1].Data[3].value=n.category_id,t.FormSchema[1].Data[4].value=n.tag_id,o={start_date:n.start_date,start_time:n.start_time,approver_id:n.approver_id,note:n.note},t.ScheduleData.push(o),null==n.attachement_path){e.next=23;break}return t.FormSchema[1].Data[1].config.showSelectedFiles.push({attachmentName:n.attachement_name,attachmentPath:t.blobPath+"/"+t.containerName+"/"+n.attachement_path}),i="path=".concat(n.attachement_path),e.next=21,l["a"].GetBase64String(i).then((function(e){t.base64StringData=e.data}));case 21:s={attachement_mime:n.attachement_mime,fileName:n.attachement_name,userId:t.UserId,companyId:t.CompanyId,id:0,moduleName:t.ModuleName,subModuleCode:t.SubModuleCode,containerName:t.ContainerName,base64String:t.base64StringData,attachement_path:""},t.fileData.push(s);case 23:e.next=27;break;case 25:t.PageRouteId=n.PostId,t.FetchData();case 27:t.AllPages.forEach((function(e){e.PAGE_ID==n.ref_page_id&&("FACEBOOK"==e.ACCOUNT_NAME?t.PageFrom="FACEBOOK":"INSTAGRAM"==e.ACCOUNT_NAME&&(t.PageFrom="INSTAGRAM")),t.isLoading=!1}));case 28:t.isLoading=!1;case 29:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onReady:function(e){e.ui.getEditableElement().parentElement.insertBefore(e.ui.view.toolbar.element,e.ui.getEditableElement());var t=document.querySelector(".ck-file-dialog-button");t.remove();var a=document.getElementsByClassName("ck-dropdown")[2];a.remove()},BackToList:function(){this.$router.push({name:"CRMCampaign",params:{reqForm:"AddPost"}})},DeletePost:function(){var e=this;0==e.PageRouteId?(e.FormSchema[0].Data[0].value="",e.FormSchema[0].Data[1].value="",e.FormSchema[1].Data[0].value="",e.FormSchema[1].Data[1].value="",e.FormSchema[1].Data[2].value="",e.FormSchema[1].Data[3].value="",e.FormSchema[1].Data[4].value="",e.fileData=[],e.PageFrom="",e.CreatedDate="",e.PageName=""):e.saveForm("Delete")},SetPreviewData:function(e,t){var a=this,n=e.target.value;a.PageFrom="",a.CreatedDate="",a.PageName="",a.AllPages.forEach((function(e){e.PAGE_ID==n&&("FACEBOOK"==e.ACCOUNT_NAME?(a.PageFrom="FACEBOOK",a.CreatedDate=e.CreatedDate,a.PageName=e.PAGE_NAME):"INSTAGRAM"==e.ACCOUNT_NAME&&(a.PageFrom="INSTAGRAM"))}))},saveForm:function(e){var t=this;t.isLoading=!0,"object"==Object(i["a"])(e)&&(e=e.value);var a=!1;return"Draft"!=e&&1!=t.IsDraft||(a=!0),"SchedulePost"==e&&0==t.IsDraft&&0!=t.PostId?(t.ShowAlert(t.$t("AlreadyScheduled"),"failure",!0,t.$t("Alert")),t.isLoading=!1,!1):"PostNow"==e&&0==t.IsDraft&&0!=t.PostId?(t.ShowAlert(t.$t("AlreadyPostUploaded"),"failure",!0,t.$t("Alert")),t.isLoading=!1,!1):void t.$refs.AddPost.validate().then(function(){var n=Object(s["a"])(Object(r["a"])().mark((function n(o){var i,s,c,d,u,f,m,p,h,v,g,b,S,C,D,_,w,A,P,F,y,I,T,x,O,N,M;return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!o){n.next=53;break}if(i="",t.schedule=[],t.approverData=[],s=t.$refs.AddPostForm.ConvertDynamicFormObjToCustomFieldObj(t.FormSchema),"PostNow"==e&&(a=!1),"SchedulePost"==e?(c={start_date:t.scheduleDate?t.$options.filters.formatDate(t.scheduleDate):t.scheduleDate,start_time:t.scheduleTime?t.$options.filters.formatTime(t.scheduleTime):t.scheduleTime},t.schedule.push(c),a=!1):t.schedule=[],"SendForApproval"==e?(d={start_date:t.scheduleDate?t.$options.filters.formatDate(t.scheduleDate):t.scheduleDate,start_time:t.scheduleTime?t.$options.filters.formatTime(t.scheduleTime):t.scheduleTime,approver_id:t.approverId,note:t.approverNote},t.approverData.push(d),a=!1):t.approverData=[],u=t.removeHTMLTags(s.filter((function(e){return"Content"==e.field_name}))[0].field_value),f=s.filter((function(e){return"Tags"==e.field_name}))[0].field_value,t.TagData.forEach((function(e){e.value==f&&(t.TagName=e.name)})),m="",""!=t.TagName&&(m=t.TagName.replace(/\s/g,"")),p=s.filter((function(e){return"PostTo"==e.field_name}))[0].field_value,t.AllPages.forEach((function(e){e.PAGE_ID==p&&(t.PageTitle=e.PAGE_NAME)})),h=t.PageTitle,v=1001,"Delete"==e&&(v=1003),g={post_id:null==t.PostId?0:t.PostId,ref_page_id:s.filter((function(e){return"PostTo"==e.field_name}))[0].field_value,campaign_owner_id:s.filter((function(e){return"AssignCampaignOwner"==e.field_name}))[0].field_value,content:u,followup_content:s.filter((function(e){return"FollowUpComment"==e.field_name}))[0].field_value,category_id:s.filter((function(e){return"Category"==e.field_name}))[0].field_value,tag_id:s.filter((function(e){return"Tags"==e.field_name}))[0].field_value,is_draft:a,schedule_date:t.scheduleDate?t.$options.filters.formatDate(t.scheduleDate):t.scheduleDate,schedule_time:t.scheduleTime?t.$options.filters.formatTime(t.scheduleTime):t.scheduleTime,schedule:t.schedule,approver:t.approverData,attachments:t.fileData,PostMessageAndTags:""==m?u:u+" #"+m,ref_Page_Title:h,draft_status:t.IsDraft,json_status_id:v,UserTimeZone:t.UserTimeZone},"SchedulePost"!=e){n.next=40;break}if(b=new Date,S=g.schedule_date,C=g.schedule_time,D=C.split(":"),_=parseInt(D[0]),w=parseInt(D[1].split(" ")[0]),A=D[1].split(" ")[1],"PM"===A&&_<12?_+=12:"AM"===A&&12===_&&(_=0),P=S.split("/"),F=parseInt(P[0])-1,y=parseInt(P[1]),I=parseInt(P[2]),T=new Date(I,F,y,_,w),x=new Date(T),O=x-b,N=O/6e4,!(Math.abs(N)<20&&"SchedulePost"==e)){n.next=40;break}return t.ShowAlert(t.$t("MinimumScheduleTime"),"warning",!0,t.$t("Alert")),t.isLoading=!1,n.abrupt("return",!1);case 40:if(i=JSON.stringify(g),M=t.AllPages.filter((function(e){return e.PAGE_ID==g.ref_page_id}))[0].ACCOUNT_NAME,!M||a||"SendForApproval"==e){n.next=49;break}if("facebook"!=M.toLowerCase()){n.next=48;break}return n.next=46,l["a"].UploadFacebookPost(i).then((function(e){var t=JSON.parse(i),a=void 0==e.data.post_id?e.data.id:e.data.post_id;t.Fb_Post_id=a,i=JSON.stringify(t)}));case 46:n.next=49;break;case 48:M.toLowerCase();case 49:return t.scheduleDate=null,t.scheduleTime=null,n.next=53,t.SaveSocialMediaPost(i,e);case 53:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())},uploadAdapterPlugin:function(e){var t=this;e.plugins.get("FileRepository").createUploadAdapter=function(e){return e.file.then((function(e){t.File=e}))}},removeHTMLTags:function(e){return e.replace(/<[^>]*>/g,"")},GetPageList:function(){var e=this;return Object(s["a"])(Object(r["a"])().mark((function t(){var a,n;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e,n="TYPE=CRM_SOCIAL&MODULE_NAME=CRM",l["a"].GetTriggerFieldValue(n).then((function(e){a.AllPages=e.data,null!=a.AllPages&&void 0!=a.AllPages&&(a.FormSchema[0].Data[0].config.options=[],a.AllPages.forEach((function(e){a.FormSchema[0].Data[0].config.options.push({name:e.NAME,value:e.PAGE_ID})})))}));case 3:case"end":return t.stop()}}),t)})))()},GetCampaignOwners:function(){var e=this;return Object(s["a"])(Object(r["a"])().mark((function t(){var a,n;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,n="id=&moduleName=CRM&type=CRM_USERS",t.next=4,l["a"].getDDLData(n+"&search=").then((function(e){if(""!=e.data){var t=e.data.DATA,n=[];null!=t&&(a.FormSchema[0].Data[1].config.options=[],t.forEach((function(e){n.push({name:e.name,value:e.value})})),a.FormSchema[0].Data[1].config.options=n,a.FormSchema[0].Data[1].value=a.UserId)}}));case 4:case"end":return t.stop()}}),t)})))()},GetTags:function(){var e=this;return Object(s["a"])(Object(r["a"])().mark((function t(){var a,n;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,n="id=&moduleName=CRM&type=CRM_TAGS",t.next=4,l["a"].getDDLData(n+"&search=").then((function(e){if(""!=e.data){a.TagData=e.data.DATA;var t=[];null!=a.TagData&&(a.FormSchema[1].Data[4].config.options=[],a.TagData.forEach((function(e){t.push({name:e.name,value:e.value})})),a.FormSchema[1].Data[4].config.options=t)}}));case 4:case"end":return t.stop()}}),t)})))()},GetCategories:function(){var e=this;return Object(s["a"])(Object(r["a"])().mark((function t(){var a,n;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,n="id=&moduleName=CRM&type=CRM_CAMPAIGN_CATEGORY",t.next=4,l["a"].getDDLData(n+"&search=").then((function(e){if(""!=e.data){var t=e.data.DATA,n=[];null!=t&&(a.FormSchema[1].Data[3].config.options=[],t.forEach((function(e){n.push({name:e.name,value:e.value})})),a.FormSchema[1].Data[3].config.options=n)}}));case 4:case"end":return t.stop()}}),t)})))()},GetBase64String:function(e){try{var t=this;t.fileData=[];for(var a=e.target.files,n=0;n<a.length;n++){var o=a[n],i=new FileReader;i.onload=function(e){return function(e){var a=e.target.result,n=window.btoa(a);t.base64String=n;var i=o.name;t.fileName=i;var r=i.lastIndexOf("."),s=i.substring(r+1,i.length);t.fileExt+="."+s;var l='{"ContentType":"'+o.type+'","Size":"'+o.size+'","Extension":"'+s+'"}',c=o.size;t.fileSize=c;var d={attachement_mime:l,fileName:i,userId:t.UserId,companyId:t.CompanyId,id:0,moduleName:t.ModuleName,subModuleCode:t.SubModuleCode,containerName:t.ContainerName,base64String:n,attachement_path:""};t.fileData.push(d)}}(),i.readAsBinaryString(o)}}catch(r){}},hideShowBtns:function(){var e=this;e.isShowAdditionalBtns=!e.isShowAdditionalBtns},SaveSocialMediaPost:function(e,t){var a=this;return Object(s["a"])(Object(r["a"])().mark((function n(){var o;return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=a,n.next=3,l["a"].SaveSocialPost(e).then(function(){var e=Object(s["a"])(Object(r["a"])().mark((function e(a){var n,i,s,c,d,u,f,m;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(a.data.MAIN_ID>0)){e.next=18;break}if(!(o.fileData.length>0)){e.next=6;break}return o.fileData.forEach((function(e){e.id=a.data.MAIN_ID})),n=JSON.stringify(o.fileData),e.next=6,l["a"].UploadFile(n).then((function(e){}));case 6:return o.isLoading=!1,"PostNow"==t?o.ShowAlert(o.$t([o.$t("PostUploaded")]),"success",!0,o.$t("Alert")):"SchedulePost"==t?o.ShowAlert(o.$t([o.$t("PostScheduled")]),"success",!0,o.$t("Alert")):"SendForApproval"==t?o.ShowAlert(o.$t([o.$t("PostSentApproval")]),"success",!0,o.$t("Alert")):"Draft"==t&&o.ShowAlert(o.$t([o.$t("PostSaveAsDraft")]),"success",!0,o.$t("Alert")),i=new Date,s=i.getFullYear(),c=(i.getMonth()+1).toString().padStart(2,"0"),d=i.getDate().toString().padStart(2,"0"),u=s+"-"+c+"-"+d,f=0==o.approverId?o.GetUserInfo.ID:o.approverId,m={message:o.PageName+"^"+u+"^"+o.GetUserInfo.Name+"^"+f,notificationFor:f,typeCode:0==o.approverId?"CRM_CAMPAIGN_INSERT":"CRM_APPROVAL_RAISED_BY",referenceId:a.data.CAMPAIGN_ID?a.data.CAMPAIGN_ID:a.data.MAIN_ID,referenceId2:0},e.next=17,l["a"].InsertNotification(JSON.stringify(m)).then((function(e){}));case 17:o.$router.push({name:"CRMCampaign"});case 18:o.isLoading=!1;case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()},SchedulePost:function(e){var t=this;t.reqFrom=e,t.isShowScheduleApproveModal=!0}}},C=function(e){e.plugins.get("FileRepository").createUploadAdapter=function(e){return new u(e)}},D=S,_=(a("9914"),Object(v["a"])(D,n,o,!1,null,null,null));t["default"]=_.exports},7928:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".modal-post{position:absolute;bottom:39px;z-index:1;right:0;max-width:450px;padding:0}",""]),e.exports=t},"81b2":function(e,t,a){var n=a("23e7"),o=a("d066"),i=a("e330"),r=a("d039"),s=a("577e"),l=a("1a2d"),c=a("d6d6"),d=a("b917").ctoi,u=/[^\d+/a-z]/i,f=/[\t\n\f\r ]+/g,m=/[=]+$/,p=o("atob"),h=String.fromCharCode,v=i("".charAt),g=i("".replace),b=i(u.exec),S=r((function(){return""!==p(" ")})),C=!r((function(){p("a")})),D=!S&&!C&&!r((function(){p()})),_=!S&&!C&&1!==p.length;n({global:!0,enumerable:!0,forced:S||C||D||_},{atob:function(e){if(c(arguments.length,1),D||_)return p(e);var t,a,n=g(s(e),f,""),i="",r=0,S=0;if(n.length%4==0&&(n=g(n,m,"")),n.length%4==1||b(u,n))throw new(o("DOMException"))("The string is not correctly encoded","InvalidCharacterError");while(t=v(n,r++))l(d,t)&&(a=S%4?64*a+d[t]:d[t],S++%4&&(i+=h(255&a>>(-2*S&6))));return i}})},9914:function(e,t,a){"use strict";a("09c5")},"9a0c":function(e,t,a){var n=a("342f");e.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)}}]);
//# sourceMappingURL=AddSocialMediaPost.js.map