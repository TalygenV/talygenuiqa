(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b7014a4"],{"271a":function(t,a,e){"use strict";var i=e("cb2d"),n=e("e330"),s=e("577e"),r=e("d6d6"),o=URLSearchParams,l=o.prototype,d=n(l.getAll),c=n(l.has),u=new o("a=1");!u.has("a",2)&&u.has("a",void 0)||i(l,"has",(function(t){var a=arguments.length,e=a<2?void 0:arguments[1];if(a&&void 0===e)return c(this,t);var i=d(this,t);r(a,1);var n=s(e),o=0;while(o<i.length)if(i[o++]===n)return!0;return!1}),{enumerable:!0,unsafe:!0})},5494:function(t,a,e){"use strict";var i=e("83ab"),n=e("e330"),s=e("edd0"),r=URLSearchParams.prototype,o=n(r.forEach);i&&!("size"in r)&&s(r,"size",{get:function(){var t=0;return o(this,(function(){t++})),t},configurable:!0,enumerable:!0})},6838:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t._self._c;return a("div",[a("loader",{attrs:{"is-visible":t.isLoading}}),a("section",{staticClass:"page-action"},[a("div",{staticClass:"container-fluid p-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 padding-t_8"},[a("div",{staticClass:"theme-primary partition p-actions-expand tablehead"},[a("span",{staticClass:"p-name text-white"},[t._v(t._s(t.$t("UserManual")))]),a("router-link",{attrs:{to:"/Help/HelpAndGuide"}},[a("span",{staticClass:"p-actions"},[a("a",{staticClass:"p-action-btn text-white float-right",attrs:{title:"","data-toggle-tooltip":"tooltip","data-original-title":"Back"}},[a("em",{staticClass:"fa fa-angle-double-left"}),a("br"),t._v(t._s(t.$t("Back")))])])]),a("span",{staticClass:"p-actions float-right",on:{click:function(a){return t.DownloadZipFile(t.UrlList)}}},[a("a",{staticClass:"p-action-btn text-white float-right",attrs:{title:"","data-toggle-tooltip":"tooltip","data-original-title":"Download"}},[a("em",{staticClass:"fa fa-arrow-down"}),a("br"),t._v(t._s(t.$t("Download")))])])],1)])])]),a("div",{staticClass:"row",staticStyle:{"margin-top":"10px"}},t._l(t.UserManualList,(function(e){return a("div",{key:e,staticClass:"col-md-4 mb-3"},[a("div",{staticClass:"border py-4 px-3"},[a("div",{staticClass:"row d-flex align-items-center"},[a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"text-center font-44 geraldine",domProps:{innerHTML:t._s(e.icon)}})]),a("div",{staticClass:"col-md-7",attrs:{id:"Userlist"}},[a("p",{staticClass:"card-text font-14"},[t._v(t._s(e.ModuleName))]),a("div",{staticClass:"description-hover"},[a("span",{staticClass:"card-text font-14 description-text",domProps:{innerHTML:t._s(t.TruncateStr(e.ArticleContent,30))}})])]),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"text-center equator-color"},[a("a",{attrs:{href:"#"}},[a("em",{staticClass:"fa fa-download font-weight-light text-primary font-28",attrs:{"aria-hidden":"true"},on:{click:function(a){return t.DownloadSingleFile(e.FileUrl,e.Articlename)}}})])])])])])])})),0),t.IsDataNotFoundShow?a("div",[t._m(0)]):t._e()])],1)},n=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"border text-center text-danger no-record mt-4 p-2"},[t._v(" No Record Found ")])])}],s=(e("14d9"),e("88a7"),e("271a"),e("5494"),e("9769")),r=e("be92"),o=e("b0ac");const{GetUserInfo:l}=Object(r["d"])(Object(o["b"])());var d={name:"UserManual",data(){return{UserManualList:[],UrlList:[],isLoading:!1,UserManualDescription:"",UserManualIcons:"",IsDataNotFoundShow:!1}},created:function(){this.BindUserManualList()},methods:{TruncateStr(t,a){var e=""+t;if(null!=e)return e.length<=a?t:e.substring(0,a)+"..."},BindUserManualList:function(){var t=this;t.isLoading=!0;var a=`search=&userType=${l.value.UserType}&articleType=UserManual&moduleId=`;s["a"].GetArticleList(a).then((function(a){null!=a.data?(a.data.forEach((a,e)=>{let i={Articlename:a.articleName,ArticleCategoryName:a.articleCatagoryName,ArticleId:a.articleId,FileUrl:a.fileUrl,ArticleContent:a.articlecontent,icon:'<em class="fa '+a.Icon+'" aria-hidden="true"></em>',ModuleName:a.ModuleName};t.UserManualList.push(i)}),a.data.forEach((a,e)=>{null!=a.fileUrl&&t.UrlList.push(a.fileUrl)}),t.isLoading=!1,t.IsDataNotFoundShow=!1):null==a.data&&(t.isLoading=!1,t.IsDataNotFoundShow=!0),t.isLoading=!1}))},DownloadSingleFile:function(t,a){var e=this;e.isLoading=!0;var i=`FileUrl=${t}&ModuleId=`;s["a"].DownloadSingleFile(i).then(t=>{var i=window.URL.createObjectURL(new Blob([t.data])),n=document.createElement("a");n.href=i,n.setAttribute("download",a+".pdf"),document.body.appendChild(n),e.isLoading=!1,n.click()})},DownloadZipFile:function(t){var a=this;a.isLoading=!0;var e="UserManual.zip",i="Files="+t;s["a"].DownloadZipFile(i).then(t=>{var i=window.URL.createObjectURL(new Blob([t.data])),n=document.createElement("a");n.href=i,n.setAttribute("download",e),document.body.appendChild(n),a.isLoading=!1,n.click()})}}},c=d,u=e("2877"),f=Object(u["a"])(c,i,n,!1,null,null,null);a["default"]=f.exports},"88a7":function(t,a,e){"use strict";var i=e("cb2d"),n=e("e330"),s=e("577e"),r=e("d6d6"),o=URLSearchParams,l=o.prototype,d=n(l.append),c=n(l["delete"]),u=n(l.forEach),f=n([].push),h=new o("a=1&a=2&b=3");h["delete"]("a",1),h["delete"]("b",void 0),h+""!=="a=2"&&i(l,"delete",(function(t){var a=arguments.length,e=a<2?void 0:arguments[1];if(a&&void 0===e)return c(this,t);var i=[];u(this,(function(t,a){f(i,{key:a,value:t})})),r(a,1);var n,o=s(t),l=s(e),h=0,p=0,v=!1,g=i.length;while(h<g)n=i[h++],v||n.key===o?(v=!0,c(this,n.key)):p++;while(p<g)n=i[p++],n.key===o&&n.value===l||d(this,n.key,n.value)}),{enumerable:!0,unsafe:!0})},d6d6:function(t,a,e){"use strict";var i=TypeError;t.exports=function(t,a){if(t<a)throw i("Not enough arguments");return t}},edd0:function(t,a,e){"use strict";var i=e("13d2"),n=e("9bf2");t.exports=function(t,a,e){return e.get&&i(e.get,a,{getter:!0}),e.set&&i(e.set,a,{setter:!0}),n.f(t,a,e)}}}]);
//# sourceMappingURL=chunk-3b7014a4.js.map