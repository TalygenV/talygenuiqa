(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2565"],{"244a":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("section",{staticClass:"main-content"},[t("loader",{attrs:{"is-visible":e.isLoading}}),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12 padding-t_8"},[t("div",{staticClass:"theme-primary partition-full"},[t("span",{staticClass:"p-name text-white"},[e._v(" "+e._s(e.$t("AddArticle")))])])])]),t("div",{staticClass:"border p-3"},[t("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit},scopedSlots:e._u([{key:"tgslot-Description",fn:function({data:a}){return[t("ckeditor",{attrs:{editor:e.editor},on:{ready:e.onReady},model:{value:a.fieldInfo.value,callback:function(t){e.$set(a.fieldInfo,"value",t)},expression:"data.fieldInfo.value"}}),t("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Header"}},[e._v(e._s(a.error))])]}}])})],1)],1)},l=[],s=(a("14d9"),a("b7ef"),a("9769")),o={data(){return{editor:this.CLASSIC_EDITOR,isLoading:!1,isAllowedFileType:null,FormSchema:[{layoutType:"triple",Data:[{astype:"TextField",label:this.$t("Title"),name:"Title",value:"",placeholder:this.$t("Title"),validationRules:{required:!0,max:100}},{astype:"SelectField",label:this.$t("Category"),name:"Category",value:"",config:{options:[]},placeholder:this.$t("Category"),validationRules:{required:!0,max:100}},{astype:"SelectField",label:this.$t("AssignTo"),name:"AssignTo",value:"",config:{options:[]},placeholder:this.$t("Category"),validationRules:{required:!0,max:100}},{astype:"FileField",showLabel:!1,name:"ExpenseAttechment",value:"",placeholder:"",validationRules:!1,FieldIndex:0,config:{maxSize:1e4,accept:[{fileType:"png",iconClass:"fa-file-image-o"},{fileType:"jpg",iconClass:"fa-file-image-o"},{fileType:"jpeg",iconClass:"fa-file-image-o"},{fileType:"pdf",iconClass:"fa-file-archive-o"}],showSelectedFiles:[],onDeleteSelectedFiles:this.onDeleteSelectedFiles,onChange:this.GetBase64String,showAddIcon:!1,onAddButtonClick:"",multiple:!1}},{astype:"TextField",label:this.$t("SortDescription"),name:"SortDescription",value:"",placeholder:this.$t("ShortDescription"),validationRules:{required:!0,max:100}},{astype:"RadioField",label:this.$t("Status"),name:"Status",value:"1105",config:{options:[],onChange:this.onChangeRadio},placeholder:this.$t("SelectStatus"),validationRules:{required:!0,max:100}}]},{layoutType:"single",Data:[{astype:"SlotField",label:this.$t("Description"),name:"Description",value:"",placeholder:"",config:{options:[]},settings:{isInSlot:!0},visibility:!0,validationRules:{required:!0,max:200}}]},{layoutType:"single",Data:[{astype:"toggleField",label:this.$t("VisibleToClient"),name:"VisibleToClient",value:"",placeholder:"",validationRules:""}]}],buttons:[{type:"submit",class:"btn btn-info save",text:"<i class='fa fa-eye pr-2'></i> Preview",onClick:this.Preview},{type:"submit",class:"btn btn-success save",text:"<i class='fa fa-save pr-2'></i>Save"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i> Cancel",onClick:this.Close}],fileName:null,file:null,ArticleId:0,allowedPerFileSizeInMb:0,disallowFileTypes:"",ArticleModel:{ArticleId:0,ArticleTitle:"",CategoryId:"",StatusId:"",Description:"",SortDescription:"",AssignTo:"",VisibleToClient:"",fileData:[],ModuleName:"",Type:"",SubModuleCode:""},StatusId:null,checkFileValidSize:!1,checkFileValidExt:!1,fileExt:"",fileSize:""}},created:function(){this.GetStatus(),this.GetCategory(),this.GetUsersByCompanyId(),this.GetConfigurationValueByKey(),this.$route.params.id>0&&this.GetArticleById(this.$route.params.id)},methods:{onReady(e){e.ui.getEditableElement().parentElement.insertBefore(e.ui.view.toolbar.element,e.ui.getEditableElement())},onDeleteSelectedFiles:function(e){this.$delete(this.FormSchema[0].Data[3].config,"showSelectedFiles")},onChangeRadio:function(e,t){var a=this;a.StatusId=e.target.dataset.value},GetStatus:function(){var e="type=KnowledgeBase";s["a"].GetDDLData(e).then(e=>{if(e.data.DATA.length>0){var t=e.data.DATA;t.forEach(e=>{var t={name:e.name,value:e.value};this.FormSchema[0].Data[5].config.options.push(t)})}})},GetCategory:function(){var e=this;s["a"].GetCategoryDDL().then(t=>{if(t.data.result.length>0){var a=t.data.result;a.forEach(t=>{if(null==t.TICKET_ARTICLE_CATEGORY_PARENT){let a={name:t.TICKET_ARTICLE_CATEGORY_NAME,value:t.TICKET_ARTICLE_CATEGORY_ID};e.FormSchema[0].Data[1].config.options.push(a)}if(t.TICKET_ARTICLE_CATEGORY_PARENT==t.TICKET_ARTICLE_CATEGORY_PARENT){let a={name:t.TICKET_ARTICLE_CATEGORY_NAME,value:t.TICKET_ARTICLE_CATEGORY_ID};e.FormSchema[0].Data[1].config.options.push(a)}})}})},GetUsersByCompanyId:function(){var e="moduleName=KnowledgeBase";s["a"].GetUsersByCompanyId(e).then(e=>{if(JSON.parse(e.data.result).length>0){var t=JSON.parse(e.data.result);t.forEach(e=>{var t={name:e.USERNAME,value:e.USER_ID};this.FormSchema[0].Data[2].config.options.push(t)})}})},GetConfigurationValueByKey:async function(){var e=this,t="moduleName=KnowledgeBase";await s["a"].FrontSiteUrlHostName(t).then((function(t){t.data.list.result.length>0&&$.each(t.data.list.result,$.proxy((function(t,a){"AttachmentFileSize"==a.coreConfigKey?e.allowedPerFileSizeInMb=a.configDataValue:"AllowedFileTypes"==a.coreConfigKey&&(e.disallowFileTypes=a.configDataValue)}),this))}))},GetArticleById:async function(e){var t=this,a="articleId="+e;await s["a"].GetArticleById(a).then((function(e){if("Success"==e.data.status){var a=JSON.parse(e.data.result);t.FormSchema[0].Data[0].value=a[0].TICKET_ARTICLE_TITLE,t.FormSchema[0].Data[1].value=a[0].TICKET_ARTICLE_CATEGORY_ID,t.FormSchema[0].Data[2].value=a[0].TICKET_ARTICLE_ASSIGNED_TO,t.FormSchema[0].Data[4].value=a[0].TICKET_ARTICLE_KEYWORDS,t.FormSchema[0].Data[5].value=a[0].STATUS_ID,t.FormSchema[1].Data[0].value=a[0].TICKET_ARTICLE_DESC,t.FormSchema[2].Data[0].value=a[0].VISIBLE_TO_CLIENT;var i={attachmentName:a[0].ATTACHMENT_NAME,attachmentPath:a[0].ATTACHMENTFULLPATH};t.FormSchema[0].Data[3].config.showSelectedFiles.push(i)}t.fileSize=JSON.parse(a[0].ATTACHMENT_DESC).Size,t.fileExt="."+JSON.parse(a[0].ATTACHMENT_DESC).Extension}))},setFile:function(e){var t=this;t.file=e.target.files[0],t.FileName=e.target.files[0].name},SizeToMb:function(e){var t=this,a=1048576*parseInt(t.allowedPerFileSizeInMb,10);if(e>a)return-1;var i=e/1024/1024;return i},GetBase64String:function(e){try{var t=this;t.fileData=[],t.fileExt="";var a=e.target.files[0],i=new FileReader;i.onload=function(e){return function(e){var i=e.target.result,l=window.btoa(i),s=a.name;t.fileName=s;var o=s.lastIndexOf("."),n=s.substring(o+1,s.length);t.fileExt+="."+n;var r='{"ContentType":"'+a.type+'","Size":"'+a.size+'","Extension":"'+n+'"}',c=a.size;t.fileSize=c;var d={attachement_mime:r,fileName:s,base64String:l,fileSize:a.size,contentType:a.type};t.fileData.push(d)}}(),i.readAsBinaryString(a)}catch(l){}},Close:function(){this.$router.push({name:"KnowledgebaseCAUser"})},onClickSelectedFile(){},onSubmit(e,t){var a=this;a.isLoading=!0;var i=e,l=a.disallowFileTypes.split(",");l.includes(a.fileExt)?a.checkFileValidExt=!0:(a.checkFileValidExt=!1,a.ShowAlert(a.$t("InvalidFileUploadMsg",a.fileName,a.disallowFileTypes),"warning",!0,a.$t("Alert")));var o=this.SizeToMb(a.fileSize);if(o<parseInt(a.allowedPerFileSizeInMb,10)?a.checkFileValidSize=!0:(a.checkFileValidSize=!1,a.ShowAlert(a.$t("ExceedAllowedSize",a.fileName,a.allowedPerFileSizeInMb),"warning",!0,a.$t("Alert"))),1==a.checkFileValidExt&&1==a.checkFileValidSize){a.ArticleModel.ArticleId=a.ArticleId,a.ArticleModel.ArticleTitle=i.Title,a.ArticleModel.CategoryId=i.Category,a.ArticleModel.StatusId=null==a.StatusId?a.FormSchema[0].Data[5].value:a.StatusId,a.ArticleModel.Description=i.Description,a.ArticleModel.SortDescription=i.SortDescription,a.ArticleModel.AssignTo=i.AssignTo,a.ArticleModel.VisibleToClient=1==i.VisibleToClient?1:0,a.ArticleModel.fileData=a.fileData,a.ArticleModel.ModuleName="Ticketing",a.ArticleModel.Type=a.$route.params.id>0?"UPDATE":"ADD",a.ArticleModel.SubModuleCode="KnowledgeBase";var n=JSON.stringify(a.ArticleModel);s["a"].SaveUpdateArticle(n).then(e=>{"Success"==e.data.status&&(e.data.result>0&&3!=e.data.result&&"ADD"==a.ArticleModel.Type?(a.ShowAlert(a.$t("AddedSuccess",[a.$t("Article")]),"Success",!0,a.$t("Alert")),a.$router.push({name:"KnowledgebaseCAUser"})):3==e.data.result&&"ADD"==a.ArticleModel.Type?a.ShowAlert(a.$t("AlreadyExists",[a.$t("Article")]),"failure",!0,a.$t("Alert")):0==e.data.result&&3!=e.data.result&&"UPDATE"==a.ArticleModel.Type&&(a.ShowAlert(a.$t("UpdatedSuccess",[a.$t("Article")]),"failure",!0,a.$t("Alert")),a.$router.push({name:"KnowledgebaseCAUser"}))),a.isLoading=!1})}else a.isLoading=!1}}},n=o,r=a("2877"),c=Object(r["a"])(n,i,l,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0b2565.js.map