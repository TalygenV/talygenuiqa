(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd2ce85e"],{"12ac":function(t,e,a){"use strict";a("9641")},"1ca2":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return 0==t.checkPublicLinkExpired?e("div",[e("div",{staticClass:"theme-primary partition p-actions-expand tablehead p-actions-collapse mb-3"},[e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left text-right p-0 theme-light-shade"},[t._m(0),e("span",{staticClass:"p-actions float-right"},[e("a",{staticClass:"p-action-btn new text-primary",attrs:{href:"javascript:;","data-toggle-tooltip":"tooltip","data-original-title":"Card View",title:"Download All"},on:{click:t.DownloadFile}},[e("em",{staticClass:"fa fa-download"})]),"ListView"==t.listType?e("a",{class:{"p-action-btn new text-secondary":!0,disabled:!1},attrs:{href:"javascript:;",title:"Card View","data-toggle-tooltip":"tooltip","data-original-title":"Card View"},on:{click:function(e){t.listType="CardView"}}},[e("em",{staticClass:"fa fa-th-large"})]):t._e(),"CardView"==t.listType?e("a",{class:{"p-action-btn new text-secondary":!0,disabled:!1},attrs:{href:"javascript:;",title:"List View","data-toggle-tooltip":"tooltip","data-original-title":"List View"},on:{click:function(e){t.listType="ListView"}}},[e("em",{staticClass:"fa fa-list"})]):t._e()])])]),e("div",{staticClass:"col-md-12 p-0 float-left"},[e("div",{staticClass:"heading-border new mb-3"},[e("h5",{staticClass:"h5"},[e("span",{staticClass:"font-weight-light mr-2"},[t._v(t._s(t.$t("YouAreInside")))]),t._l(t.parentname,(function(a,i){return e("span",{staticClass:"border-0 font-18",class:{disabled:t.parentname.length-1==i}},[""!=t.parentname[0]?e("a",{class:{"disabled text-disabled":t.parentname.length-1==i,"text-primary":t.parentname.length-1!=i},attrs:{folderId:a[1]},on:{click:function(e){return t.SpecificFolder(a[1],t.commonParentName)}}},[t._v(" "+t._s(a[0])+" > ")]):t._e()])})),e("small",{staticClass:"float-right"})],2)])]),e("div",{staticClass:"listing"},["ListView"==t.listType?e("div",{staticClass:"table-responsive table-fix-header",attrs:{id:"div_forListView"}},[e("table",{staticClass:"table table-bordered mt-0",staticStyle:{width:"100%"},attrs:{id:"tblFileList"}},[t._m(1),e("tbody",[t._l(t.folderFileListing,(function(a){return e("tr",[e("td",{class:1==a.IsDocCode?"file-image doc-icon":""},[e("div",{staticClass:"pin pr-2 d-inline-block"},[a.PinId>0?e("em",{staticClass:"fa fa-thumb-tack",staticStyle:{cursor:"pointer"},attrs:{pinId:a.PinId,"aria-hidden":"true"},on:{click:function(e){return t.MarkAsUnPin(a.Id)}}}):t._e()]),0==a.IsDocCode?e("em",{staticClass:"fa fa-folder pr-2 font-18 text-primary",staticStyle:{"font-size":"25px"},attrs:{"aria-hidden":"true"}}):t._e(),0==a.IsDocCode?e("span",{staticClass:"text-overflow-dynamic-container"},[t._v(" "+t._s(a.pin_id)+" "),e("a",{staticClass:"aFileDownload",attrs:{value:a.Id,folderId:a.Id,filepath:a.FilePath,filetype:a.FileType,filename:a.FileName,href:"javascript:;",title:""},on:{click:function(e){return t.GetFolderList(a.Id,t.commonParentName,"","a"+a.Id)}}},[t._v(t._s(a.NAME))])]):t._e(),""==a.DocType||"pdf"!=a.DocExtention&&"pdf"!=a.DocExtention&&"jpg"!=a.DocExtention&&"png"!=a.DocExtention&&"jpeg"!=a.DocExtention?t._e():e("img",{class:t.GetFileIconClass(a.DocExtention),staticStyle:{height:"30px"},attrs:{alt:a.FileType,title:a.DocType,"data-fileType":a.DocExtention,src:t.GetThumbnail(a.FileThumbnailPath)},on:{click:function(e){return t.FilesDetail(a.Id,a.IsDocCode,a.DocPathLocation,a.DocExtention,a.ParentId,a.PERMISSION)}}}),1!=a.IsDocCode||"txt"!=a.DocExtention&&"docx"!=a.DocExtention&&"xlsx"!=a.DocExtention&&"xls"!=a.DocExtention?t._e():e("em",{class:t.GetFileIconClass(a.DocExtention),attrs:{width:"27px"}}),t._v("   "),1==a.IsDocCode?e("span",{staticClass:"text-overflow-dynamic-container"},[e("a",{staticClass:"aFileDownload",attrs:{value:a.Id,doccode:a.IsDocCode,folderId:a.Id,filepath:a.FilePath,filetype:a.FileType,filename:a.FileName,href:"javascript:;",title:""},on:{click:function(e){return t.FilesDetail(a.Id,a.IsDocCode,a.DocPathLocation,a.DocExtention,a.ParentId)}}},[t._v(t._s(a.NAME)+" ")])]):t._e()]),e("td",{staticClass:"text-center"},[e("span",{staticClass:"text-center text-overflow-dynamic-container"},[t._v(" "+t._s(t.convertmbtoKb(a.DocSize))+" ")])]),e("td",{staticClass:"text-center"},[e("span",{staticClass:"text-center text-overflow-dynamic-container"},[t._v(" "+t._s(t.$options.filters.formatDate(a.created_at))+" ")])]),e("td",{staticClass:"text-center single-action"},[e("a",{staticClass:"text-center text-overflow-dynamic-container action-icon",on:{click:function(e){return t.DownloadSingleFiles(a.Id,a.NAME)}}},[1==a.IsDocCode?e("em",{staticClass:"fa fa-download text-info"}):t._e()])])])})),e("tr",[0==t.folderFileListing.length?e("td",{staticClass:"text-danger text-center no-record",attrs:{colspan:"7"}},[t._v(t._s(t.$t("NoRecordfound")))]):t._e()])],2)])]):t._e(),"CardView"==t.listType?e("div",{staticClass:"row card-view bg-border custom-box-width",attrs:{id:"div_forCardView"}},t._l(t.folderFileListing,(function(a){return e("div",{key:a,staticClass:"col-sm-12 col-lg-2 col-xl-2 col-md-12 mb-3 div-cardView"},[e("div",{staticClass:"box docattachment border"},[e("div",{staticClass:"verticle-action"},[1==a.IsDocCode?e("em",{staticClass:"fa fa-download text-info",on:{click:function(e){return t.DownloadSingleFiles(a.Id,a.NAME)}}}):t._e()]),e("div",{staticClass:"pinff pinnewtag pr-2 d-inline-block"},[a.PinId>0?e("em",{staticClass:"fa fa-thumb-tack",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.MarkAsUnPin(a.Id)}}}):t._e()]),e("div",{staticClass:"img-icons new text-center p-2 file-image doc-icon"},[""==a.DocType||"pdf"!=a.DocExtention&&"jpg"!=a.DocExtention&&"png"!=a.DocExtention&&"jpeg"!=a.DocExtention?t._e():e("img",{class:t.GetFileIconClass(a.DocExtention),staticStyle:{height:"85px"},attrs:{alt:a.FileType,title:a.DocType,"data-fileType":a.DocExtention,src:t.GetThumbnail(a.FileThumbnailPath)},on:{click:t.openLightbox}}),"xls"==a.DocExtention||"xlsx"==a.DocExtention||"txt"==a.DocExtention||"docx"==a.DocExtention?e("em",{class:t.GetFileIconClass(a.DocExtention),staticStyle:{height:"85px"},attrs:{alt:a.FileType,title:a.DocType,"data-fileType":a.DocExtention},on:{click:function(e){return t.FilesDetail(a.Id,a.IsDocCode,a.DocPathLocation,a.DocExtention,a.ParentId,a.PERMISSION)}}}):t._e(),0==a.IsDocCode?e("em",{staticClass:"fa fa-folder pr-2 font-18 text-primary",staticStyle:{height:"85px"},attrs:{alt:a.FileType,title:a.DocType,"data-fileType":a.DocExtention},on:{click:function(e){return t.GetFolderList(a.Id,t.commonParentName)}}}):t._e()]),e("div",{staticClass:"row mx-0 mb-3 align-items-end"},[e("div",{staticClass:"col-md-12 font-14 text-center"},[0==a.IsDocCode?e("span",{staticClass:"text-overflow-dynamic-container text-truncate",attrs:{title:a.NAME}},[t._v(" "+t._s(a.pin_id)+" "),e("span",{staticStyle:{display:"block","padding-bottom":"5px"},attrs:{title:a.FileName}},[t._v(" "+t._s(a.NAME)+" ")])]):t._e(),1==a.IsDocCode?e("span",{staticClass:"text-overflow-dynamic-container text-truncate",attrs:{title:a.NAME}},[e("span",{staticStyle:{display:"block","padding-bottom":"5px"},attrs:{title:a.FileName}},[t._v(" "+t._s(a.NAME)+" ")])]):t._e()]),""!=a.DocType?e("div",{staticClass:"col-md-12 font-14 text-center"},[e("span",[t._v(t._s(t.convertmbtoKb(a.DocSize))+" ")]),t._v(" | "),e("span",[t._v(t._s(t.$options.filters.formatDate(a.created_at)))])]):e("div",{staticClass:"col-md-12 font-14 text-center"},[e("em",{attrs:{"aria-hidden":"true"}}),t._v(t._s(a.FileCount)+" Files | "),e("em",{attrs:{"aria-hidden":"true"}}),t._v(t._s(t.convertmbtoKb(a.DocSize))+" ")])])])])})),0):t._e(),e("div",{staticClass:"border-top-pagi"},[e("Pager",{attrs:{numberofrecords:t.totalRecords,"prev-text":"Prev","first-text":"First","last-text":"Last","next-text":"Next"},on:{change:t.pageSizecommon,SetCurrentPage:t.pagerMethod}})],1)])]):e("div",[t._m(2)])},s=[function(){var t=this,e=t._self._c;return e("a",{staticStyle:{float:"left","margin-left":"10px","margin-top":"3px"},attrs:{href:"https://talygen.com/"}},[e("img",{attrs:{src:"/Content/images/footer-light-logo.png",alt:"footer-logo"}})])},function(){var t=this,e=t._self._c;return e("thead",{staticClass:"thead-bg"},[e("tr",[e("th",[e("span",[t._v("Names")])]),e("th",{staticClass:"text-center"},[e("span",[t._v("Size")])]),e("th",{staticClass:"text-center"},[e("span",[t._v("Created On")])]),e("th",{staticClass:"text-center"},[e("span",[t._v("Action")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-12 p-0 m-auto text-center"},[e("title",[t._v("Link Expired")]),e("body",[e("div",{staticClass:"content"},[e("h1",[t._v("Link Expired")]),e("p",[t._v("We're sorry, but the link you are trying to access has expired.")])])])])}],o=(a("b7ef"),a("14d9"),a("5494"),a("9769")),n=a("4555"),r=a("825ae"),l={components:{Pager:n["a"],VueEasyLightbox:r["a"]},created:function(){this.ExpirationDate=this.$route.query.ExpirationDate,this.GetFolderList();var t=atob(window.location.search.split("=")[1].split("&")[0].replace(/[^a-z0-9\s]/gi,"").replace("3","")),e=parseInt(t);this.BreadCrumb("MySpace",e),this.$router.push({path:"/DownloadPublicFolder",query:{FileId:btoa(this.StorageFileId),UniqueCode:window.location.search.split("UniqueCode=")[1]}})},data(){return{folderFileListing:[],parentname:[],totalRecords:null,pageNo:1,pageSize:10,listType:"ListView",visibleRef:!1,ExpirationDate:null,checkPublicLinkExpired:!1}},methods:{GetFolderList:function(t){var e=this;if(null!=t)e.StorageFileId=t;else if(void 0!=t)e.StorageFileId=t;else{var a=atob(window.location.search.split("=")[1].split("&")[0].replace(/[^a-z0-9\s]/gi,"").replace("3",""));e.StorageFileId=parseInt(a)}parseInt(e.StorageFileId)==parseInt(atob(window.location.search.split("=")[1].split("&")[0].replace(/[^a-z0-9\s]/gi,"").replace("3","")))?e.pageNo:e.pageNo=1;const i=new Date,s=new Date(i.toDateString().toWellFormed()).getTime(),n=new Date(e.ExpirationDate).getTime();var r=`folderId=${e.StorageFileId}&pageNo=${e.pageNo}&pageSize=${e.pageSize}&searchFilter&sortBy&sortExp&refCode=Public`;o["a"].GetPubLicLinkFolderList(r).then(t=>{if(isNaN(n)||n>=s)e.folderFileListing=t.data.FolderData;else{e.checkPublicLinkExpired=!0;var a=`folderId=${e.StorageFileId}&refCode=Public`;o["a"].GetStorageFolderDetails(a).then(()=>{alert("hi")})}e.folderFileListing.length>0&&(e.totalRecords=e.folderFileListing[0].totalRecords),setTimeout((function(){e.ResponsiveDataTable("div_forListView")}),500),setTimeout((function(){e.CheckBoxBootstrap()}),100),e.BreadCrumb("MySpace",e.StorageFileId)})},GetThumbnail:function(t){var e=null;if(null!=t)var a=t.includes("wwwroot");return e=1==a?t.replace("/wwwroot",""):t,e},DownloadSingleFiles:function(t,e){var a=`fileId=${t}&refCode=PublicDocFile`;o["a"].DownloadPublicFileSingle(a).then(t=>{var a=window.URL.createObjectURL(new Blob([t.data])),i=document.createElement("a");i.href=a,i.setAttribute("download",e),document.body.appendChild(i),i.click()})},DownloadFile(){var t=window.location.search.split("FolderName")[1],e="storageUniqueCode="+window.location.search.split("UniqueCode=")[1];o["a"].GetPublicallyStorageDocs(e).then(e=>{var a=window.URL.createObjectURL(new Blob([e.data])),i=document.createElement("a");i.href=a,i.setAttribute("download",decodeURIComponent(decodeURIComponent(t))+".zip"),document.body.appendChild(i),i.click()})},pagerMethod:function(t){this.pageNo=t.PageNumber,this.pageSize=t.PageSize,parseInt(this.pageNo)>0?this.GetFolderList(this.StorageFileId):this.pageNo=1},openLightbox:function(){var t=this;t.visibleRef=!0},onHide:function(){var t=this;t.visibleRef=!1},pageSizecommon:function(t){var e=this;e.pageSize=t.target.value,this.GetFolderList()},GetFileIconClass:function(t){t=t.toLowerCase();var e="";return"png"!=t&&"jpeg"!=t&&"jpg"!=t&&"JPG"!=t&&"jfif"!=t||(e="fa fa-file-image-o"),"pdf"==t&&(e="fa fa-file-pdf-o"),"xlsx"==t&&(e="fa fa-file-excel-o"),"txt"==t&&(e="fa fa-file-text-o"),"xls"==t&&(e="fa fa-file-excel-o"),"docx"==t&&(e="fa fa-file-word-o"),e},convertmbtoKb:function(t){var e=0;return e=0==t?"0 Bytes":t<1?t.toFixed(2)+" KB":t.toFixed(2)+" MB",e},BreadCrumb(t,e){var a=this;void 0!=e&&(a.folderId=e),a.parentname=[],a.commonParentName=t,void 0!=a.folderId&&""!=a.folderId||(a.folderId=0),o["a"].GetPublicLinkFolderBreadCrumb(a.folderId).then(t=>{var e=t.data,i=e.split(">");i.forEach((t,e)=>{a.parentname.push(t.split("~"))}),a.closepopup,o["a"].GetParentFolderBreadCrumb(a.folderId).then(t=>{a.breadcrumbForManagePopup=t.data})})},SpecificFolder:function(t,e){var a=this;a.GetFolderList(t)}}},c=l,d=(a("12ac"),a("2877")),p=Object(d["a"])(c,i,s,!1,null,null,null);e["default"]=p.exports},4555:function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return t.TotalPages>0?e("div",{staticClass:"nu-paging"},[e("nav",{attrs:{"aria-label":"Page navigation example col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left"}},[e("ul",{staticClass:"pagination row"},[e("li",{staticClass:"col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left choose-page"},[e("span",{staticClass:"mr-2"},[t._v("Show")]),e("span",{staticClass:"select"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.PageSize,expression:"PageSize"}],staticClass:"form-control form-control-sm",attrs:{id:"pageSize",name:"pageSize"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.PageSize=e.target.multiple?a:a[0]},t.SetPageSize]}},t._l(t.PageSizeOption,(function(a,i){return e("option",{key:i,domProps:{value:a}},[t._v(t._s(a))])})),0)]),e("span",{staticClass:"ml-2"},[t._v(t._s(t.$t("PagingText",[(t.CurrentPage-1)*t.PageSize+1,t.PageSize*t.CurrentPage>t.TotalRecords?t.TotalRecords:t.PageSize*t.CurrentPage,t.TotalRecords])))])]),e("li",{staticClass:"col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"},[t.TotalPages>1?e("ul",{staticClass:"paging-count"},[e("li",{staticClass:"page-item"},[1!=t.CurrentPage?e("a",{staticClass:"page-link first",attrs:{title:t.firstText,href:"javascript:;",val:"1"},on:{click:function(e){return t.SetCurrentPage(1)}}},[t._v(t._s(t.firstText))]):t._e(),1==t.CurrentPage?e("a",{staticClass:"page-link first disabled",attrs:{title:t.firstText,val:"1"}},[t._v(t._s(t.firstText))]):t._e()]),e("li",{staticClass:"page-item"},[1!=t.CurrentPage?e("a",{staticClass:"page-link previous",attrs:{title:t.prevText,href:"javascript:;"},on:{click:function(e){return t.SetCurrentPage(t.CurrentPage-1)}}},[t._v(t._s(t.prevText))]):t._e(),1==t.CurrentPage?e("a",{staticClass:"page-link previous disabled",attrs:{title:t.prevText}},[t._v(t._s(t.prevText))]):t._e()]),t._l(t.TotalPages,(function(a,i){return[a>=t.GroupStart&&a<=t.GroupEnd?e("li",{key:i,staticClass:"page-item"},[i+1==t.CurrentPage?e("a",{staticClass:"page-link active",attrs:{href:"javascript:;"}},[t._v(t._s(i+1))]):t._e(),i+1!=t.CurrentPage?e("a",{staticClass:"page-link",attrs:{href:"javascript:;",val:i},on:{click:function(e){return t.SetCurrentPage(i+1)}}},[t._v(t._s(i+1))]):t._e()]):t._e()]})),e("li",{staticClass:"page-item"},[t.CurrentPage<t.TotalPages?e("a",{staticClass:"page-link next",attrs:{title:t.nextText,href:"javascript:;"},on:{click:function(e){return t.SetCurrentPage(t.CurrentPage+1)}}},[t._v(t._s(t.nextText))]):t._e(),t.CurrentPage>=t.TotalPages?e("a",{staticClass:"page-link disabled next",attrs:{title:t.nextText}},[t._v(t._s(t.nextText))]):t._e()]),e("li",{staticClass:"page-item"},[t.CurrentPage!=t.TotalPages?e("a",{staticClass:"page-link next",attrs:{title:t.lastText,href:"javascript:;",val:t.TotalPages},on:{click:function(e){return t.SetCurrentPage(t.TotalPages)}}},[t._v(t._s(t.lastText))]):t._e(),t.CurrentPage==t.TotalPages?e("a",{staticClass:"page-link next disabled",attrs:{title:t.lastText,val:t.TotalPages}},[t._v(t._s(t.lastText))]):t._e()])],2):t._e()])])])]):t._e()},s=[],o=(a("14d9"),{props:{numberofrecords:{type:Number,required:!0},prevText:{type:String,required:!0},nextText:{type:String,required:!0},firstText:{type:String,required:!0},lastText:{type:String,required:!0},callbackfunction:{type:Function},CurrentPageNumber:{type:Number}},data:function(){return{TotalRecords:0,PageNumber:1,PageSize:10,PageSizeOption:null,CurrentPage:1,TotalPages:0,GroupStart:1,GroupEnd:3,LastPage:!1}},watch:{numberofrecords:function(t){this.CurrentPage>this.PageNumber&&(this.CurrentPage=this.PageNumber),this.TotalRecords=t,this.TotalPages=Math.ceil(this.TotalRecords/this.PageSize),this.TotalPages==this.PageNumber&&this.PageNumber>3?(this.GroupStart=this.PageNumber-2,this.GroupEnd=this.PageNumber):this.TotalPages>this.PageNumber&&this.PageNumber>=3?(this.GroupStart=this.PageNumber-1,this.GroupEnd=this.PageNumber+1):(this.GroupStart=1,this.GroupEnd=3)},CurrentPageNumber:function(t){var e=this;e.CurrentPage=t,1==t&&e.SetCurrentPage(t)}},created:function(){this.GetPageSizeOption()},methods:{GetData:function(){this.$emit("SetCurrentPage",{PageNumber:this.PageNumber,PageSize:this.PageSize}),"undefined"!=typeof this.callbackfunction&&null!=this.callbackfunction&&this.callbackfunction()},SetPageSize:function(t){this.PageSize=t.target.value,this.PageNumber=1,this.CurrentPage=this.PageNumber,this.GroupStart=this.PageNumber,this.GroupEnd=this.PageNumber+2,this.TotalPages=Math.ceil(this.TotalRecords/this.PageSize),this.GetData()},SetCurrentPage:function(t){this.PageNumber=t,this.CurrentPage=t,this.TotalPages==this.PageNumber&&this.PageNumber>3?(this.GroupStart=this.PageNumber-2,this.GroupEnd=this.PageNumber):this.TotalPages>this.PageNumber&&this.PageNumber>=3?(this.GroupStart=this.PageNumber-1,this.GroupEnd=this.PageNumber+1):(this.GroupStart=1,this.GroupEnd=3),this.GetData()},GetPageSizeOption:function(){for(var t=[],e=10,a=e;a<e+95;a+=5)t.push(a);this.PageSizeOption=t}}}),n=o,r=a("2877"),l=Object(r["a"])(n,i,s,!1,null,null,null);e["a"]=l.exports},9641:function(t,e,a){var i=a("ce26");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("499e").default;s("372dde83",i,!0,{sourceMap:!1,shadowMode:!1})},ce26:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"body{padding:0}#divjuda_menu,footer,header{display:none}body{display:flex;justify-content:center;align-items:center;height:100vh;margin:0}.content{text-align:center}",""]),t.exports=e}}]);
//# sourceMappingURL=chunk-bd2ce85e.js.map