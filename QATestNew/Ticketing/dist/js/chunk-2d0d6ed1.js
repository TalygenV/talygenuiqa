(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6ed1"],{7541:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main-content"},[e("loader",{attrs:{"is-visible":t.isLoading}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 padding-t_8"},[e("div",{staticClass:"theme-primary partition-full"},[e("span",{staticClass:"p-name text-white"},[t._v(" "+t._s(t.$t("ManageLayoutTitle")))])]),e("div",{staticClass:"modal-body"},[e("dynamic-form",{attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit},scopedSlots:t._u([{key:"tgslot-ExternalLayoutLink",fn:function({data:a}){return[e("div",{staticClass:"input-group mb-3"},[e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text",staticStyle:{height:"35px"}},[t._v(t._s(t.HttpText)+"//")]),e("input",{staticClass:"form-control exteranllink text-truncate",attrs:{name:"ExternalLayoutLink",placeholder:"http://abc.com/PostApplicant",type:"text"}}),e("span",{staticClass:"input-group-text",staticStyle:{height:"35px"}},[t._v(t._s(t.FHttpText))])])])]}},{key:"tgslot-Header",fn:function({data:a}){return[e("ckManageLayoutEditor",{attrs:{editor:t.editor},on:{ready:t.onReady},model:{value:a.fieldInfo.value,callback:function(e){t.$set(a.fieldInfo,"value",e)},expression:"data.fieldInfo.value"}}),e("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Header"}},[t._v(t._s(a.error))])]}},{key:"tgslot-Footer",fn:function({data:a}){return[e("ckManageLayoutEditor",{attrs:{editor:t.editor},on:{ready:t.onReady},model:{value:a.fieldInfo.value,callback:function(e){t.$set(a.fieldInfo,"value",e)},expression:"data.fieldInfo.value"}}),e("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Footer"}},[t._v(t._s(a.error))])]}},{key:"tgslot-HomePageText",fn:function({data:a}){return[e("ckManageLayoutEditor",{attrs:{editor:t.editor},on:{ready:t.onReady},model:{value:a.fieldInfo.value,callback:function(e){t.$set(a.fieldInfo,"value",e)},expression:"data.fieldInfo.value"}}),e("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Footer"}},[t._v(t._s(a.error))])]}}])}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"py-2"},[e("small",{staticClass:"text-danger"},[t._v(t._s(t.$t("MandatoryString")))])])])])],1)])])],1)},i=[],l=(a("14d9"),a("9769")),s={data(){return{isLoading:!1,FormSchema:[{layoutType:"four",Data:[{astype:"TextField",label:"Welcome Text",name:"WelcomeText",value:"",placeholder:"You Are in Ticketing Module",validationRules:{required:!1}},{astype:"ColorField",label:this.$t("Background Color"),name:"BackgroundColor",value:"#FFFFFF",placeholder:"",validationRules:{required:!1}},{astype:"ColorField",label:this.$t("Font Color"),name:"FontColor",value:"#FFFFFF",placeholder:"",validationRules:{required:!1}},{astype:"SelectField",label:this.$t("Font Size"),name:"FontSize",value:"",config:{options:[]},placeholder:"Select Font Size",validationRules:{required:!1}}]},{layoutType:"double",Data:[{astype:"TextField",label:this.$t("Redirect To Url"),name:"RedirectToUrl",value:"",placeholder:"http://abc.com/PostApplicant",validationRules:{required:!1}},{astype:"SlotField",label:this.$t("External Layout Link"),name:"ExternalLayoutLink",value:"",placeholder:"",validationRules:{required:!1}}]},{layoutType:"single",Data:[{astype:"SlotField",label:this.$t("Header Text"),name:"Header",value:"",placeholder:"",config:{options:[]},settings:{isInSlot:!0},visibility:!0,validationRules:{required:!0,max:200}}]},{layoutType:"single",Data:[{astype:"SlotField",label:this.$t("Footer Text"),name:"Footer",value:"",placeholder:"",config:{options:[]},settings:{isInSlot:!0},visibility:!0,validationRules:{required:!0,max:200}}]},{layoutType:"single",Data:[{astype:"SlotField",label:this.$t("Home Page Text"),name:"HomePageText",value:"",placeholder:"",config:{options:[]},settings:{isInSlot:!0},visibility:!0,validationRules:{required:!0,max:200}}]}],buttons:[{type:"submit",class:"btn btn-success save",text:"<i class='fa fa-save pr-2'></i>Submit"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-refresh pr-2'></i>Reset",onClick:this.Reset}],FontSize:36,HostName:"",HttpText:""}},created:function(){this.GetFontSizeList(this.FontSize),this.FrontSiteUrlHostName()},methods:{Reset(t){},FrontSiteUrlHostName(){var t="configkey=FrontSiteUrl";l["a"].FrontSiteUrlHostName(t).then(t=>{t.data.list.result.length>0&&(this.HostName=t.data.list.result[0].configDataValue.split("/"),this.HttpText=this.HostName[0],this.FHttpText=this.HostName[2])})},GetFontSizeList(t){for(let e=10;e<=t;e+=2){let t={name:e,value:e};this.FormSchema[0].Data[3].config.options.push(t)}},onSubmit(t,e){var a=this;a.isLoading=!0;var o={layoutid:0,Header:t.Header,Footer:t.Footer,BackgroundColor:t.BackgroundColor,FontColor:t.FontColor,FontSize:t.FontSize,WelcomeText:t.WelcomeText,ExternalLayoutLink:t.ExternalLayoutLink,HomePageText:t.HomePageText,RedirectToUrl:t.RedirectToUrl},i=JSON.stringify(o);l["a"].SaveTicketManageLayout(i).then(t=>{"ADD"==t.data.result?a.ShowAlert(a.$t("AddedSuccess",[a.$t("ManageLayoutTitle")]),"success",!0,a.$t("Alert")):"UPDATE"==t.data.result?a.ShowAlert(a.$t("UpdatedSuccess",[a.$t("ManageLayoutTitle")]),"success",!0,a.$t("Alert")):a.ShowAlert(a.$t("AddedError",[a.$t("ManageLayoutTitle")]),"failure",!0,a.$t("Alert")),a.isLoading=!1})}}},n=s,r=a("2877"),d=Object(r["a"])(n,o,i,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0d6ed1.js.map