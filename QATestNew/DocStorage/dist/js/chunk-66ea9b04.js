(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66ea9b04"],{"1c89":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("div",[t("loader",{attrs:{"is-visible":e.isLoading}}),t("LeftMenu",{attrs:{userid:e.loggeduserid,RecentPinnedFolderArray:e.RecentFolderArray,sharedChildFolder:e.sharedChildFolder,organizationSpace:e.organizationSpace,pinnedFolderArray:e.pinnedFolderArray,folderTreeList:e.folderTreeList,additionalOrganizationSpace:e.additionalOrganizationSpaces,SharedFolder:e.SharedFolderParent,UserList:e.SharedUserList,FolderArray:e.FindalFolderArray},on:{StorageDocumentListing:e.StorageDocumentListing}}),t("section",{staticClass:"main-content",attrs:{id:"main-content"}},[t("section",{staticClass:"main-content"},[t("div",{staticClass:"right-content hr_jobpost",attrs:{id:"rightMenuRecycle"}},[t("div",{staticClass:"col-md-12 p-0 mb-2"},[t("div",{staticClass:"theme-primary partition p-actions-expand"},[t("span",{staticClass:"p-name text-white"},[e._v(e._s(e.$t("RecycleBin")))]),t("span",{staticClass:"p-actions float-right"},[t("a",{staticClass:"p-action-btn text-white float-right disabled",attrs:{id:"delete"},on:{click:e.DeleteSourceFiles}},[t("em",{staticClass:"fa fa-trash"}),t("br"),e._v(e._s(e.$t("Delete"))+" ")]),t("a",{staticClass:"p-action-btn text-white float-right disabled",attrs:{id:"Restore"},on:{click:e.RestoreFiles}},[t("em",{staticClass:"fa fa-recycle"}),t("br"),e._v(e._s(e.$t("Restore"))+" ")]),t("a",{staticClass:"p-action-btn text-white float-right",attrs:{id:"EmptyBin"},on:{click:e.EmptyBin}},[t("svg",{staticClass:"bi bi-trash",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[t("path",{attrs:{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}}),t("path",{attrs:{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}})]),t("br"),e._v(e._s(e.$t("EmptyBin"))+" ")])])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-2 searchpanel tablehead search float-left"},[t("div",{staticClass:"w-100"},[t("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 Search-panel float-left pt-2 p-0"},[t("div",{staticClass:"col-sm-12 col-md-12 col-lg-6 col-xl-6 float-left"},[t("div",{staticClass:"row mt-0"},[t("div",{staticClass:"col-7 float-left pr-1 pl-0"},[t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchCondition,expression:"searchCondition"}],staticClass:"form-control search",attrs:{id:"search",maxlength:"50",type:"text",placeholder:"Search by Folder name, File name, Tag ...",autocomplete:"off"},domProps:{value:e.searchCondition},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.SearchRecycleBinData(e.searchCondition)},input:function(t){t.target.composing||(e.searchCondition=t.target.value)}}})])]),t("div",{staticClass:"col-5 float-left pl-0"},[t("div",{staticClass:"background-0 text-left form-check-inline"},[t("input",{attrs:{type:"hidden",id:"hdnSearch",value:""}}),t("a",{staticClass:"btn btn-success mr-1 px-4 hlsearch",attrs:{title:"",id:"Go",href:"javascript:;","data-toggle-tooltip":"tooltip","data-original-title":"Search","aria-describedby":"tooltip697211"},on:{click:function(t){return e.SearchRecycleBinData(e.searchCondition)}}},[t("i",{staticClass:"fa fa-search"})]),t("a",{staticClass:"btn btn-danger clearsearchtext px-4",attrs:{href:"javascript:;",title:"","data-toggle-tooltip":"tooltip","data-original-title":"Clear all "},on:{click:e.RefreshPage}},[t("i",{staticClass:"fa fa-refresh"})])])])])])])])]),t("div",{staticClass:"clearfix"})]),t("div",{staticClass:"listing"},[t("div",{staticClass:"expand-list"},[t("a",{staticClass:"expand-list-btn justify-content-center align-items-center",attrs:{href:"javascript:;"},on:{click:e.ExpandCollapseList}},[t("em",{staticClass:"icon-solid arrow-solid-left text-white",staticStyle:{"font-size":"9pt"}})])]),t("div",{staticClass:"table-responsive table-fix-header",attrs:{id:"div_forListView"}},[t("table",{staticClass:"table table-bordered mt-0",staticStyle:{width:"100%"},attrs:{id:"tblRecycleBinFileList"}},[t("thead",{staticClass:"thead-bg"},[t("tr",[t("th",{staticClass:"text-center",staticStyle:{width:"50px !important"},on:{change:function(t){return e.onChange()}}},[t("input",{staticClass:"chkitems",attrs:{id:"chkAll",value:"",type:"checkbox"}})]),t("th",{on:{click:function(t){return e.SortData(t,"Name","Sort","RecycleBin")}}},[t("span",{staticClass:"sort",class:{tb_headerSortDown:"ASC"==e.sortExp&&"Name"==e.specificSortClick,tb_headerSortUp:"DESC"==e.sortExp&&"Name"==e.specificSortClick}},[e._v("Name")])]),t("th",{staticClass:"text-center"},[t("span",[e._v(e._s(e.$t("FileLocation")))])]),t("th",{staticClass:"text-center"},[t("span",[e._v(e._s(e.$t("DeletedOn")))])]),t("th",{staticClass:"text-center"},[t("span",[e._v(e._s(e.$t("Size")))])]),t("th",{staticClass:"text-center"},[t("span",[e._v(e._s(e.$t("RetentionDay")))])]),t("th",{staticClass:"text-center nonresize",attrs:{"data-width":"5%"}},[t("span",[e._v(e._s(e.$t("Action")))])])])]),t("tbody",[e._l(e.recyleBinData,(function(a){return t("tr",[t("td",{staticClass:"text-center"},[t("input",{staticClass:"chkItems",attrs:{docCode:a.IsDocCode,fileid:a.Id,type:"checkbox"},domProps:{value:a.Id},on:{change:function(t){return e.onChange()}}})]),t("td",[1!=a.IsDocCode||"pptx"!=a.DocExtention&&"docx"!=a.DocExtention&&"pdf"!=a.DocExtention&&"jpg"!=a.DocExtention&&"png"!=a.DocExtention&&"jpeg"!=a.DocExtention&&"xlsx"!=a.DocExtention?e._e():t("img",{staticStyle:{height:"30px"},attrs:{alt:a.FileType,title:a.DocType,"data-fileType":a.DocExtention,src:e.GetThumbnail(a.FileThumbnailPath)}}),1==a.IsDocCode?t("em",{class:e.GetFileIconClass(a.DocExtention),attrs:{width:"27px"}}):e._e(),e._v("   "),0==a.IsDocCode?t("em",{staticClass:"fa fa-folder pr-2 font-18 text-primary",attrs:{"aria-hidden":"true"}}):e._e(),t("span",{staticClass:"text-center text-overflow-dynamic-container"},[e._v(" "+e._s(a.NAME)+" ")])]),t("td",{staticClass:"text-center"},[t("span",{staticClass:"text-center text-overflow-dynamic-container"},[e._v(" "+e._s(a.docBreadCrumb)+" ")])]),t("td",{staticClass:"text-center"},[t("span",{staticClass:"text-center text-overflow-dynamic-container"},[e._v(" "+e._s(e.convertdateformat(a.created_at))+" ")])]),t("td",{staticClass:"text-center"},[t("span",{staticClass:"text-center text-overflow-dynamic-container"},[e._v(" "+e._s(e.convertmbtoKb(a.DocSize))+" ")])]),t("td",{staticClass:"text-center"},[t("span",{staticClass:"text-center",staticStyle:{"align-item":"center"}},[e._v(" "+e._s(a.RetentionDays)+" ")])]),t("td",{staticClass:"text-center"},[t("a",{staticClass:"text-center",attrs:{id:"aShareFolder",title:"Restore","data-toggle-tooltip":"tooltip","data-original-title":"Share"},on:{click:function(t){return e.RestoreFiles(a.Id,a.IsDocCode)}}},[t("em",{staticClass:"fa fa-recycle",staticStyle:{"font-size":"18px"}})]),e._v("  "),t("a",{staticClass:"text-center",attrs:{id:"aShareFolder",title:"Delete","data-toggle-tooltip":"tooltip","data-original-title":"Share"},on:{click:function(t){return e.DeleteSourceFiles(a.Id,a.IsDocCode)}}},[t("em",{staticClass:"fa fa-trash",staticStyle:{"font-size":"18px"}})])])])})),t("tr",[0==e.recyleBinData.length?t("td",{staticClass:"text-danger text-center no-record",attrs:{colspan:"7"}},[e._v(e._s(e.$t("NoRecordfound")))]):e._e()])],2)])]),t("Pager",{attrs:{numberofrecords:e.totalRecords,"prev-text":"Prev","first-text":"First","last-text":"Last","next-text":"Next"},on:{SetCurrentPage:e.pagerMethod}})],1)])])])],1)},r=[],s=(a("14d9"),a("9769")),o=a("110b"),l=a("4555"),n=(a("b9b9"),{components:{LeftMenu:o["a"],Pager:l["a"]},data(){return{isLoading:!1,loggeduserid:null,SharedFolderParent:[],FindalFolderArray:[],folderTreeList:[],sharedFolder:[],folderiddata:0,pageNo:1,pageSize:10,recyleBinData:[],totalRecords:0,TotalPages:"",recentFolderList:[],pinnedFolderList:[],RecentFolderArray:[],pinnedFolderArray:[],organizationSpace:[],restoredJsonData:[],specificSortClick:"",listCode:null,sortExp:"",docvalue:null,restoredJson:[],searchText:"",sharedparentfolder:[],sharedChildFolder:[],searchCondition:"",SharedUserList:[],additionalOrganizationSpaces:[]}},updated:function(){this.CheckBoxBootstrap(),this.BindActionButtonEvent()},mounted:function(){$("#FolderFullTree").treeview(),$("body").on("click","#FolderFullTree .folderlink",(function(){$("#FolderFullTree .folderlink").removeClass("selectedfolder"),$(this).addClass("selectedfolder")}))},created:function(){this.loggeduserid=this.GetUserInfo.ID,this.GetSharedFolder(),this.GetFullTree(),this.GetRecyleBinListing()},methods:{convertmbtoKb:function(e){var t=0;return t=0==e?"0 Bytes":e<1?e.toFixed(2)+" KB":e.toFixed(2)+" MB",t},ExpandCollapseList(){var e=document.getElementById("leftmenutree");e.classList.toggle("left-menu-tab-collapsed");var t=document.getElementById("rightMenuRecycle");t.classList.toggle("right-content-expand")},GetFullTree(){var e=this;e.FindalFolderArray=[],e.isLoading=!0,s["a"].FolderFullTreeView().then(t=>{t.data.folderTreeList.forEach((a,i)=>{if(a.OWNER_USER_ID==this.loggeduserid&&0==a.IsGlobal){var r=e.FindalFolderArray.filter((function(e){return e.FOLDER_ID==a.FOLDER_ID}));if(0==r.length&&null==a.FOLDER_PARENT_ID){let i=a.FOLDER_ID,r=e.getChildFolder(i,a,t.data.folderTreeList);e.FindalFolderArray.push(r),e.GetRecentlyAddPinnedFolder()}}}),e.folderTreeList=t.data.folderTreeList,e.SharedUserList=t.data.userList,e.sharedFolder=t.data.sharedTreeList,e.GetOrganizationSpace(),e.isLoading=!1})},convertdateformat:function(e){const t=new Date(e);return t.toISOString().slice(0,10).replace("-","/").replace("-","/")},getChildFolder:function(e,t,a){let i=this,r=t;var s=a.filter((function(t){return t.FOLDER_PARENT_ID==e}));let o=[];return s.forEach((e,t)=>{let r=e.FOLDER_ID;var s=o.filter((function(t){return t.FOLDER_ID==e.FOLDER_ID}));if(0==s.length){var l=a.filter((function(e){return e.FOLDER_PARENT_ID==r}));if(null!=l&&l.length>0){let t=i.getChildFolder(r,e,a);o.push(t)}else o.push(e)}}),r.chidFolder=o,r},GetSharedFolder:function(){var e=this;s["a"].GetSharedFolderTree().then(t=>{e.sharedparentfolder=t.data.SharedFolderData,e.sharedparentfolder.forEach((t,a)=>{if(t.SHARED_USER_ID==e.loggeduserid){var i=e.sharedChildFolder.filter((function(e){return e.FOLDER_ID==t.FOLDER_ID}));if(0==i.length&&null==t.FOLDER_PARENT_ID){let a=t.FOLDER_ID,i=e.getsharedChildFolder(a,t,e.folderTreeList);e.sharedChildFolder.push(i)}}})})},DeleteSourceFiles:function(e,t,a){var i=this,r="",o="";o=t,i.restoredJsonData=[];let l={};e>0&&(r=e,l={SourceId:r,RefCode:t},i.restoredJsonData.push(l)),"Empty"==a?$("#tblRecycleBinFileList .chkItems:checkbox").not("[id^='chkAll']").each((function(){var e=$(this).attr("doccode");o=e,r=$(this).val(),l={SourceId:r,RefCode:e},i.restoredJsonData.push(l)})):$("#tblRecycleBinFileList .chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){var e=$(this).attr("doccode");o=e,r=$(this).val(),l={SourceId:r,RefCode:e},i.restoredJsonData.push(l)}));var n=JSON.stringify(i.restoredJsonData);i.confirmR("Are you sure you want to permanently delete this record ?",!0,i.$t("Warning")+"  "+i.$t("Doc Storage Source"),(function(){i.isLoading=!0,i.restoredJsonData.forEach((e,t)=>{var a=i.recyleBinData.find(t=>t.Id==e.SourceId);if(void 0!=a&&(null!=a.additional_storage_file_id||null!=a.additional_storage_folder_id)){var r=`fileid=${1==o?a.additional_storage_file_id:a.additional_storage_folder_id}&additionalStorageId=${a.additional_storage_id}`;s["a"].DeleteFileFromOneDrive(r).then(e=>{}).catch(e=>{console.log(e)})}}),s["a"].DeleteStorageFilePermanently(JSON.stringify(n)).then(e=>{1==e.data?(i.ShowAlert("Record has been deleted successfully."),i.restoredJsonData=[],i.GetRecyleBinListing()):i.ShowAlert(i.$t("UnknownErrorOccur"),"failure",!0,i.$t("Alert")),i.isLoading=!1})}))},EmptyBin:function(e,t,a){var i=this,r="";i.restoredJsonData=[];var o="";let l={};e>0&&(r=e,l={SourceId:r,RefCode:t},i.restoredJsonData.push(l));var n=`folderId=${i.folderiddata}&pageNo=${i.pageNo}&pageSize=${i.totalRecords}&refCode=Recylebin&SearchFilter=&sortBy=${i.specificSortClick}&sortExp=${i.sortExp}`;s["a"].GetFolderList(n).then(e=>{i.recyleBinData=e.data.FolderData,i.recyleBinData.length>0?i.totalRecords=i.recyleBinData[0].totalRecords:$("#EmptyBin").addClass("disabled"),i.TotalPages=Math.ceil(i.totalRecords/i.pageSize)}),i.confirmR("Are you sure you want to permanently delete this record ?",!0,i.$t("Warning")+"  "+i.$t("Doc Storage Source"),(function(){i.isLoading=!0,$("#tblRecycleBinFileList .chkItems:checkbox").not("[id^='chkAll']").each((function(){var e=$(this).attr("doccode");o=e,r=$(this).val(),l={SourceId:r,RefCode:e},i.restoredJsonData.push(l)})),i.restoredJsonData.forEach((e,t)=>{var a=i.recyleBinData.find(t=>t.Id==e.SourceId);if(void 0!=a&&(null!=a.additional_storage_file_id||null!=a.additional_storage_folder_id)){var r=`fileid=${1==o?a.additional_storage_file_id:a.additional_storage_folder_id}&additionalStorageId=${a.additional_storage_id}`;s["a"].DeleteFileFromOneDrive(r).then(e=>{}).catch(e=>{console.log(e)})}});var e=JSON.stringify(i.restoredJsonData);s["a"].DeleteStorageFilePermanently(JSON.stringify(e)).then(e=>{1==e.data?(i.ShowAlert("Record has been deleted successfully."),i.restoredJsonData=[],i.GetRecyleBinListing()):i.ShowAlert(i.$t("UnknownErrorOccur"),"failure",!0,i.$t("Alert")),i.isLoading=!1})}))},pagerMethod:function(e){var t=this;t.pageSize=e.PageSize,t.GetRecyleBinListing(parseInt(e.PageNumber))},SearchRecycleBinData:function(e){this.searchText=e;var t=this;t.GetRecyleBinListing(NaN==t.pageNo?t.pageNo:1,this.searchText.trim())},RefreshPage:function(){this.$router.push({path:"/RecyleBin"}),window.location.reload("/RecyleBin")},onChange:function(){var e=$(".chkItems:checked").not("[id^='chkAll']").length;e>0?($("#Restore").removeClass("disabled"),$("#delete").removeClass("disabled")):($("#Restore").addClass("disabled"),$("#delete").addClass("disabled"))},SortData:function(e,t,a,i){var r=this;"My Space"==i?r.listCode="MySpace":"RecycleBin"==i&&(r.listCode="RecycleBin");var s=e.target.getAttribute("class");r.specificSortClick=t,"sort"!=s&&"sort tb_headerSortUp"!=s||(r.sortExp="ASC"),"sort tb_headerSortDown"==s&&(r.sortExp="DESC"),r.GetRecyleBinListing()},GetRecyleBinListing:function(e,t){var a=this;a.isLoading=!0,a.totalRecords=0,void 0==t&&(t=""),null!=e&&(a.pageNo=e);var i=`folderId=${a.folderiddata}&pageNo=${a.pageNo}&pageSize=${a.pageSize}&refCode=Recylebin&SearchFilter=${t}&sortBy=${a.specificSortClick}&sortExp=${a.sortExp}`;s["a"].GetFolderList(i).then(e=>{a.recyleBinData=e.data.FolderData,a.recyleBinData.length>0?a.totalRecords=a.recyleBinData[0].totalRecords:$("#EmptyBin").addClass("disabled"),a.TotalPages=Math.ceil(a.totalRecords/a.pageSize),$(".chkItems:checkbox:checked,#chkAll_0").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),$("[id^='Restore']").removeClass("enable").addClass("disabled"),$("[id^='delete']").removeClass("enable").addClass("disabled"),setTimeout((function(){a.ResponsiveDataTable("tblRecycleBinFileList")}),1e3),setTimeout((function(){a.CheckBoxBootstrap()}),100),a.isLoading=!1})},GetRecentlyAddPinnedFolder:function(){var e=this;s["a"].GetRecentlyAndPinnedFolderTreeData().then(t=>{e.recentFolderList=JSON.parse(t.data).RecentFolderList,e.pinnedFolderList=JSON.parse(t.data).PinnedFolderList,e.recentFolderList.forEach((t,a)=>{if(t.OWNER_USER_ID==e.loggeduserid){var i=e.RecentFolderArray.filter((function(e){return e.FOLDER_ID==t.FOLDER_ID}));if(0==i.length&&null==t.FOLDER_PARENT_ID){let a=t.FOLDER_ID,i=e.getsharedChildFolder(a,t,e.folderTreeList);e.RecentFolderArray.push(i)}}}),e.pinnedFolderList.forEach((t,a)=>{if(t.OWNER_USER_ID==e.loggeduserid){var i=e.pinnedFolderArray.filter((function(e){return e.FOLDER_ID==t.FOLDER_ID}));if(0==i.length&&null==t.FOLDER_PARENT_ID){let a=t.FOLDER_ID,i=e.getsharedChildFolder(a,t,e.folderTreeList);e.pinnedFolderArray.push(i)}}})})},GetOrganizationSpace:function(){var e=this;e.additionalOrganizationSpaces=[],s["a"].GetOrganizationFolderTreeData().then(t=>{t.data.folderTreeList.forEach((t,a)=>{var i=e.organizationSpace.filter((function(e){return e.FOLDER_ID==t.FOLDER_ID}));if(0==i.length)if(null==t.FOLDER_PARENT_ID&&(t.additional_storage_id<=0||null==t.additional_storage_id)){let a=t.FOLDER_ID,i=e.getsharedChildFolder(a,t,e.folderTreeList);e.organizationSpace.push(i)}else if(null==t.FOLDER_PARENT_ID&&(null!=t.additional_storage_id||t.additional_storage_id>0)&&null==t.FOLDER_PARENT_ID){let a=t.FOLDER_ID,i=e.getsharedChildFolder(a,t,e.folderTreeList);e.additionalOrganizationSpaces.push(i)}})})},getsharedChildFolder:function(e,t,a){let i=this,r=t;var s=a.filter((function(t){return t.FOLDER_PARENT_ID==e}));let o=[];return s.forEach((e,t)=>{let r=e.FOLDER_ID;var s=o.filter((function(t){return t.FOLDER_ID==e.FOLDER_PARENT_ID}));if(0==s.length){var l=a.filter((function(e){return e.FOLDER_PARENT_ID==r}));if(null!=l&&l.length>0){let t=i.getsharedChildFolder(r,e,a);o.push(t)}else o.push(e)}}),r.chidFolder=o,r},RestoreFiles:function(e,t){var a=this,i="";if(e>0&&(i=e),$("#tblRecycleBinFileList .chkItems:checked").not("[id^='chkAll']").each((function(){i.length>0&&(i+=","),a.docvalue=null!=t?t:$(this).attr("doccode"),i=$(this).val();let e={SourceId:i,RefCode:a.docvalue};a.restoredJson.push(e)})),null!=t){let e={SourceId:i,RefCode:t};a.restoredJson.push(e)}let r=JSON.stringify(a.restoredJson);var o="jsonSourceIds="+r;a.confirmR(a.$t("ConfirmRestoreecord"),!0,a.$t("Delete")+"  "+a.$t("Groups"),(function(){s["a"].RestoreItemsFromRecycleBinList(o).then(e=>{1==e.data?a.confirmR("Are you sure you want to replace this record.",!0,a.$t("Delete")+"  "+a.$t("Groups"),(function(){let e={SourceId:i,RefCode:a.docvalue};a.restoredJson.push(e);let t=JSON.stringify(a.restoredJson);var r=`jsonSourceIds=${t}&IsRestored=1`;s["a"].RestoreItemsFromRecycleBinList(r).then(e=>{2==e.data&&(a.ShowAlert("Record has been successfully replaced"),a.GetRecyleBinListing())})})):3==e.data?(a.ShowAlert("File has been restored successfully"),a.GetRecyleBinListing()):0==e.data?(a.ShowAlert("Folder has been restored successfully"),a.GetRecyleBinListing()):a.ShowAlert(a.$t("UnknownErrorOccur"),"failure",!0,a.$t("Alert"))})}))},GetFileIconClass:function(e){e=e.toLowerCase();var t="";return t="png"==e||"jpeg"==e||"jpg"==e||"JPG"==e||"jfif"==e||"pdf"==e||"xlsx"==e||"docx"==e||"pptx"==e?"d-none":"txt"==e?"fa fa-file-text-o":"xls"==e?"fa fa-file-excel-o":"mp3"==e?"fa fa-file-audio-o":"mp4"==e?"fa fa-file-video-o":"fa fa-file-o",t},StorageDocumentListing:function(e,t,a,i,r,s,o,l,n,c,d,u,h){var g=this;g.$emit("StorageDocumentListing",e,t,a,i,r,s,o,l,n,c,d,u,h)},GetThumbnail:function(e){var t=null;if(null!=e)var a=e.includes("wwwroot");return t=1==a?e.replace("/wwwroot",""):e,t}}}),c=n,d=(a("6d73"),a("2877")),u=Object(d["a"])(c,i,r,!1,null,"3d39788b",null);t["default"]=u.exports},4555:function(e,t,a){"use strict";var i=function(){var e=this,t=e._self._c;return e.TotalPages>0?t("div",{staticClass:"nu-paging"},[t("nav",{attrs:{"aria-label":"Page navigation example col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left"}},[t("ul",{staticClass:"pagination row"},[t("li",{staticClass:"col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left choose-page"},[t("span",{staticClass:"mr-2"},[e._v("Show")]),t("span",{staticClass:"select"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.PageSize,expression:"PageSize"}],staticClass:"form-control form-control-sm",attrs:{id:"pageSize",name:"pageSize"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.PageSize=t.target.multiple?a:a[0]},e.SetPageSize]}},e._l(e.PageSizeOption,(function(a,i){return t("option",{key:i,domProps:{value:a}},[e._v(e._s(a))])})),0)]),t("span",{staticClass:"ml-2"},[e._v(e._s(e.$t("PagingText",[(e.CurrentPage-1)*e.PageSize+1,e.PageSize*e.CurrentPage>e.TotalRecords?e.TotalRecords:e.PageSize*e.CurrentPage,e.TotalRecords])))])]),t("li",{staticClass:"col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"},[e.TotalPages>1?t("ul",{staticClass:"paging-count"},[t("li",{staticClass:"page-item"},[1!=e.CurrentPage?t("a",{staticClass:"page-link first",attrs:{title:e.firstText,href:"javascript:;",val:"1"},on:{click:function(t){return e.SetCurrentPage(1)}}},[e._v(e._s(e.firstText))]):e._e(),1==e.CurrentPage?t("a",{staticClass:"page-link first disabled",attrs:{title:e.firstText,val:"1"}},[e._v(e._s(e.firstText))]):e._e()]),t("li",{staticClass:"page-item"},[1!=e.CurrentPage?t("a",{staticClass:"page-link previous",attrs:{title:e.prevText,href:"javascript:;"},on:{click:function(t){return e.SetCurrentPage(e.CurrentPage-1)}}},[e._v(e._s(e.prevText))]):e._e(),1==e.CurrentPage?t("a",{staticClass:"page-link previous disabled",attrs:{title:e.prevText}},[e._v(e._s(e.prevText))]):e._e()]),e._l(e.TotalPages,(function(a,i){return[a>=e.GroupStart&&a<=e.GroupEnd?t("li",{key:i,staticClass:"page-item"},[i+1==e.CurrentPage?t("a",{staticClass:"page-link active",attrs:{href:"javascript:;"}},[e._v(e._s(i+1))]):e._e(),i+1!=e.CurrentPage?t("a",{staticClass:"page-link",attrs:{href:"javascript:;",val:i},on:{click:function(t){return e.SetCurrentPage(i+1)}}},[e._v(e._s(i+1))]):e._e()]):e._e()]})),t("li",{staticClass:"page-item"},[e.CurrentPage<e.TotalPages?t("a",{staticClass:"page-link next",attrs:{title:e.nextText,href:"javascript:;"},on:{click:function(t){return e.SetCurrentPage(e.CurrentPage+1)}}},[e._v(e._s(e.nextText))]):e._e(),e.CurrentPage>=e.TotalPages?t("a",{staticClass:"page-link disabled next",attrs:{title:e.nextText}},[e._v(e._s(e.nextText))]):e._e()]),t("li",{staticClass:"page-item"},[e.CurrentPage!=e.TotalPages?t("a",{staticClass:"page-link next",attrs:{title:e.lastText,href:"javascript:;",val:e.TotalPages},on:{click:function(t){return e.SetCurrentPage(e.TotalPages)}}},[e._v(e._s(e.lastText))]):e._e(),e.CurrentPage==e.TotalPages?t("a",{staticClass:"page-link next disabled",attrs:{title:e.lastText,val:e.TotalPages}},[e._v(e._s(e.lastText))]):e._e()])],2):e._e()])])])]):e._e()},r=[],s=(a("14d9"),{props:{numberofrecords:{type:Number,required:!0},prevText:{type:String,required:!0},nextText:{type:String,required:!0},firstText:{type:String,required:!0},lastText:{type:String,required:!0},callbackfunction:{type:Function},CurrentPageNumber:{type:Number}},data:function(){return{TotalRecords:0,PageNumber:1,PageSize:10,PageSizeOption:null,CurrentPage:1,TotalPages:0,GroupStart:1,GroupEnd:3,LastPage:!1}},watch:{numberofrecords:function(e){this.CurrentPage>this.PageNumber&&(this.CurrentPage=this.PageNumber),this.TotalRecords=e,this.TotalPages=Math.ceil(this.TotalRecords/this.PageSize),this.TotalPages==this.PageNumber&&this.PageNumber>3?(this.GroupStart=this.PageNumber-2,this.GroupEnd=this.PageNumber):this.TotalPages>this.PageNumber&&this.PageNumber>=3?(this.GroupStart=this.PageNumber-1,this.GroupEnd=this.PageNumber+1):(this.GroupStart=1,this.GroupEnd=3)},CurrentPageNumber:function(e){var t=this;t.CurrentPage=e,1==e&&t.SetCurrentPage(e)}},created:function(){this.GetPageSizeOption()},methods:{GetData:function(){this.$emit("SetCurrentPage",{PageNumber:this.PageNumber,PageSize:this.PageSize}),"undefined"!=typeof this.callbackfunction&&null!=this.callbackfunction&&this.callbackfunction()},SetPageSize:function(e){this.PageSize=e.target.value,this.PageNumber=1,this.CurrentPage=this.PageNumber,this.GroupStart=this.PageNumber,this.GroupEnd=this.PageNumber+2,this.TotalPages=Math.ceil(this.TotalRecords/this.PageSize),this.GetData()},SetCurrentPage:function(e){this.PageNumber=e,this.CurrentPage=e,this.TotalPages==this.PageNumber&&this.PageNumber>3?(this.GroupStart=this.PageNumber-2,this.GroupEnd=this.PageNumber):this.TotalPages>this.PageNumber&&this.PageNumber>=3?(this.GroupStart=this.PageNumber-1,this.GroupEnd=this.PageNumber+1):(this.GroupStart=1,this.GroupEnd=3),this.GetData()},GetPageSizeOption:function(){for(var e=[],t=10,a=t;a<t+95;a+=5)e.push(a);this.PageSizeOption=e}}}),o=s,l=a("2877"),n=Object(l["a"])(o,i,r,!1,null,null,null);t["a"]=n.exports},"6d73":function(e,t,a){"use strict";a("9e7a")},"9e7a":function(e,t,a){var i=a("ab6c");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=a("499e").default;r("fb47558e",i,!0,{sourceMap:!1,shadowMode:!1})},ab6c:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".action-list-box[data-v-3d39788b]{opacity:0;height:0;transition:opacity 1s}.is-visible[data-v-3d39788b]{display:inline-block;height:auto;overflow:hidden!important;height:46px}",""]),e.exports=t}}]);
//# sourceMappingURL=chunk-66ea9b04.js.map