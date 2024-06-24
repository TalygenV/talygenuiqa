(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-912c3e3a","chunk-2d0e8c5c"],{"8b62":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loader",{attrs:{"is-visible":t.isLoading}}),e("section",{staticClass:"main-content"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 padding-t_8"},[e("div",{staticClass:"theme-primary partition-full"},[e("span",{staticClass:"p-name text-white"},[t._v(t._s(t.$t("AddVendor")))]),e("span",{staticClass:"p-actions float-right"},[e("a",{staticClass:"p-action-btn text-white",attrs:{title:"Back to List"},on:{click:t.Close}},[e("em",{staticClass:"fa fa-angle-double-left"}),e("br"),e("span",[t._v(t._s(t.$t("BacktoList"))+" ")])])])])])]),e("div",{staticClass:"border p-3"},[e("Form",{ref:"form"},[e("dynamic-form",{ref:"AddVendor",attrs:{buttons:t.buttons,schema:t.FormSchema},scopedSlots:t._u([{key:"tgslot-Email",fn:function(a){a.data;return[e("Field",{attrs:{name:"Email",rules:{required:!0}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.txtEmail,expression:"txtEmail"}],staticClass:"form-control box-shadow bg-white",class:{"form-control":!0,"is-invalid":t.CheckEmailtab},attrs:{type:"text",name:"Email"},domProps:{value:t.txtEmail},on:{change:t.validateEmail,input:function(a){a.target.composing||(t.txtEmail=a.target.value)}}})]),t.isInvalidEmail?e("span",{staticClass:"invalid-feedback d-block"},[t._v(" "+t._s(t.$t("EnterValidEmail")))]):t._e(),t.checkEmail?e("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Email"}},[t._v(" "+t._s(t.$t("EmailRequired")))]):t._e()]}},{key:"tgslot-Password",fn:function(a){a.data;return[e("Field",{attrs:{name:"Password",rules:{required:!0}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.txtPassword,expression:"txtPassword"}],staticClass:"form-control box-shadow bg-white",class:{"form-control":!0,"is-invalid":t.checkPasswordtab},attrs:{type:"Password",name:"Password"},domProps:{value:t.txtPassword},on:{change:t.validatePassword,input:function(a){a.target.composing||(t.txtPassword=a.target.value)}}})]),t.isInvalidPassword?e("span",{staticClass:"invalid-feedback d-block"},[t._v(" "+t._s(t.$t("PasswordValidation")))]):t._e(),t.checkPassword?e("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Email"}},[t._v(" "+t._s(t.$t("PasswordRequired")))]):t._e()]}},{key:"tgslot-ConfirmPassword",fn:function(a){a.data;return[e("Field",{attrs:{name:"Password",rules:{required:!0}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.txtconfirmPassword,expression:"txtconfirmPassword"}],staticClass:"form-control box-shadow bg-white",class:{"form-control":!0,"is-invalid":t.checkConPasswordtab},attrs:{type:"Password",name:"ConfirmPassword"},domProps:{value:t.txtconfirmPassword},on:{change:t.validateConPassword,input:function(a){a.target.composing||(t.txtconfirmPassword=a.target.value)}}})]),t.isConfirmPassword?e("span",{staticClass:"invalid-feedback d-block"},[t._v(" "+t._s(t.$t("PwdConfPwdMatching")))]):t._e(),t.checkConPassword?e("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Email"}},[t._v(" "+t._s(t.$t("ConfirmPasswordRequired")))]):t._e()]}}])}),e("div",{staticClass:"row flex-row-reverse mt-2"},[e("div",{staticClass:"col-lg-6 text-right"},[e("a",{staticClass:"btn btn-success mr-2 addSalesOrder_a",attrs:{href:"javascript:;",title:"Save"},on:{click:function(a){return t.SubmitData()}}},[e("em",{staticClass:"fa fa-save pr-2"}),t._v(t._s(t.$t("Save"))+" ")]),e("a",{staticClass:"btn btn-danger",attrs:{href:"javascript:void(0)",title:"Cancel"},on:{click:t.Close}},[e("em",{staticClass:"fa fa-close pr-2"}),t._v(t._s(t.$t("Cancel"))+" ")])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"py-2"},[e("small",{staticClass:"text-danger"},[t._v(t._s(t.$t("MandatoryString")))])])])])],1)],1)])],1)},i=[],o=(e("14d9"),e("9769")),r={data(){return{isLoading:!1,EditFunctionalArea:!1,AddFunctionalArea:!0,txtEmail:"",txtPassword:"",txtconfirmPassword:"",checkEmail:!1,CheckEmailtab:!1,checkPassword:!1,checkPasswordtab:!1,checkConPassword:!1,checkConPasswordtab:!1,isInvalidEmail:"",isInvalidPassword:"",FormSchema:[{layoutType:"triple",Data:[{astype:"TextField",label:this.$t("CompanyName"),name:"CompanyName",value:"",validationRules:{required:!0,max:100}},{astype:"TextField",label:this.$t("FirstName"),name:"FirstName",value:"",validationRules:{required:!0,max:100}},{astype:"TextField",label:this.$t("LastName"),name:"LastName",value:"",validationRules:{required:!0,max:100}}]},{layoutType:"triple",Data:[{astype:"SlotField",label:this.$t("Email"),name:"Email",value:"",validationRules:{required:!0,max:100}},{astype:"SlotField",label:this.$t("Password"),name:"Password",value:"",validationRules:{required:!0,max:100}},{astype:"SlotField",label:this.$t("ConfirmPassword"),name:"ConfirmPassword",value:"",validationRules:{required:!0,max:100}}]},{layoutType:"triple",Data:[{astype:"SelectField",label:this.$t("Country"),name:"Country",value:"",config:{options:[],onChange:this.GetCountryName},validationRules:{required:!0}},{astype:"TextField",label:this.$t("State"),name:"State",value:"",validationRules:{required:!0,max:100}},{astype:"TextField",label:this.$t("City"),name:"City",value:"",validationRules:{required:!0,max:100}}]},{layoutType:"triple",Data:[{astype:"TextField",label:this.$t("Address 1"),name:"Address1",value:"",validationRules:{required:!0,max:100}},{astype:"TextField",label:this.$t("Address 2"),name:"Address2",value:"",validationRules:{required:!1,max:100}},{astype:"NumericField",label:this.$t("ZipCode"),name:"ZipCode",value:"",validationRules:{required:!0,max:100}}]},{layoutType:"triple",Data:[{astype:"NumericField",label:this.$t("PhoneNumber"),name:"PhoneNumber",value:"",validationRules:{required:!0,max:100}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save",isVisible:!1},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",isVisible:!1,onClick:this.Close}],companyId:null,userId:null,RequisitionId:0}},created:async function(){var t=this;await t.ShowCountry()},methods:{ShowCountry:async function(){var t=this;t.CountryData=[];var a="ids=&moduleName=&type=COUNTRIES&search=&refId=";await o["a"].GetDDLData(a).then((function(a){a.data.DATA.length>0&&(t.FormSchema[2].Data[0].config.options=a.data.DATA,t.CountryData=a.data.DATA),t.$refs.AddVendor.UpdateKeyValue()}))},validateEmail:function(){var t=this;t.checkEmail=!1;const a=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;t.isInvalidEmail=!a.test(this.txtEmail),t.CheckEmailtab=t.isInvalidEmail},validatePassword:function(){var t=this;t.txtconfirmPassword="",t.checkPassword=!1;const a=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;t.isInvalidPassword=!a.test(this.txtPassword),t.checkPasswordtab=t.isInvalidPassword},validateConPassword:function(){var t=this;t.txtconfirmPassword!=t.txtPassword?(t.checkConPassword=!1,t.isConfirmPassword=!0,t.checkConPasswordtab=!0):(t.isConfirmPassword=!1,t.checkConPasswordtab=!1)},SubmitData(){var t=this;t.$refs.form.validate().then(a=>{if(t.$refs.form.errors.Email.length>0?(t.checkEmail=!0,t.isInvalidEmail=!1,t.CheckEmailtab=!0):(t.checkEmail=!1,t.CheckEmailtab=!1),t.$refs.form.errors.Password.length>0?(t.checkPassword=!0,t.isInvalidPassword=!1,t.checkPasswordtab=!0):(t.checkPassword=!1,t.checkPasswordtab=!1),""==t.txtconfirmPassword?(t.checkConPassword=!0,t.isConfirmPassword=!1,t.checkConPasswordtab=!0):t.checkConPassword=!1,a){var e={TagId:null==t.TagId?0:t.TagId,tagName:formfields.Tag,tagDesc:formfields.Description,tagStatusId:1001,moduleName:"Hiring"},s=JSON.stringify(e);DataServices.Savetag(s).then(a=>{"Success"==a.data[0].Status?(t.TagId>0?(t.ShowAlert(t.$t("UpdatedSuccess",[t.$t("Tag")]),"success",!0,t.$t("Alert")),t.Close()):t.ShowAlert(t.$t("AddedSuccess",[t.$t("Tag")]),"success",!0,t.$t("Alert")),t.Close(),t.$parent.FetchData()):(t.ShowAlert(t.$t("AddedError",[t.$t("Tag")]),"failure",!0,t.$t("Alert")),t.Close())})}})},Close:function(){this.$router.push({name:"VendorListing"})}}},n=r,d=e("2877"),l=Object(d["a"])(n,s,i,!1,null,null,null);a["default"]=l.exports},cb21:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("loader",{attrs:{"is-visible":t.isLoading}}),e("tg-list",{attrs:{IsShowAction:!1,ModuleName:"HR",SubModuleCode:"",LegendArray:[],RenderRowActionMethod:t.renderActions,widgets:[],IdentityColumn:"VENDOR_ID",listType:["List"],ListData:t.VendorData,HeaderData:t.Headers,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords,SearchFields:t.leftSearchFields,IsSearchFieldsOnTop:"true",SearchPosition:"top",ListDataCallBackFunction:t.FetchData,showCheckBox:!1,SortExp:t.SortExp,SortBy:t.SortBy,NorecordfoundText:t.$t("NoRecordfound")},on:{ActionButtonClick:t.actionButtonClick,LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,SortdataButtonClick:t.sortdata}}),t.ShowAddVendor?e("AddVendor",{attrs:{HeaderText:t.HeaderText}}):t._e()],1)},i=[],o=(e("14d9"),e("f9e7")),r=e("9769"),n=e("8b62"),d={components:{AddVendor:n["default"]},data(){return{isLoading:!1,ShowAddVendor:!1,noRecords:"",Headers:[{COLUMN_NAME:"VENDOR_NAME",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Vendor Name",DISPLAY_ORDER:1},{COLUMN_NAME:"email_id",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Email",DISPLAY_ORDER:2},{COLUMN_NAME:"LOCATION_NAME",DATA_TYPE:"Date",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Location",DISPLAY_ORDER:3},{COLUMN_NAME:"VENDORSERVICES",DATA_TYPE:"Date",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Vendor Services",DISPLAY_ORDER:4},{COLUMN_NAME:"PROJECTNAME",DATA_TYPE:"Date",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Assign Project",DISPLAY_ORDER:5}],leftSearchFields:[{fieldName:"Search",fieldType:"text",fieldSearchConditionName:[""],paramName:"search",isSearch:!0,value:"",listOptions:[]}],SortBy:"",SortExp:"",PageSize:"10",PageNumber:"1",TotalRecords:0,CurrentPage:1,TotalPages:0,searchCondition:"",VendorData:[],listheaderbuttons:o["a"].buttons,listActions:o["a"].listActions,VendorId:0,HeaderText:""}},created:async function(){var t=this;await t.FetchData()},updated(){const t=document.getElementsByClassName("theme-primary partition p-actions-expand");if(t[0]&&"p-name text-white"!=t[0].lastChild.className){const a=document.createElement("span");a.className="p-name text-white",a.textContent=this.$t("VendorListing"),t[0].appendChild(a)}},methods:{AddVendor:function(t,a){this.VendorId=t,this.HeaderText=a,this.ShowAddVendor=!0,"AddVendor"==a&&this.$router.push({name:"AddVendor",params:{reqfrom:"VendorUser/AddVendor",VendorId:t}})},leftCommonSearch:function(t){if(this.PageNumber=t.PageNumber,this.isPaged=1,"undefined"!=typeof t.searchCondition){let a=t.searchConditionJson,e=a.split("=")[1];this.searchCondition=e}else this.searchCondition="";this.FetchData()},commonHeaderButtonClick:function(t){switch(t.callbackfunction){case"AddVendor":this.AddVendor(0,"AddVendor");break}},sortdata:function(t){var a="sort tb_headerSortDown";this.SortBy=t,t===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",a="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",a="sort tb_headerSortUp"):(this.SortExp="ASC",a="sort tb_headerSortDown")),this.FetchData(),$("#"+t+"  span:first-child").attr("class",a)},pagerMethod:function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,this.FetchData()},renderActions:function(){},FetchData:async function(){var t=this,a=`pageSize=${t.PageSize}&pageNum=${t.PageNumber}&sortBy=${t.SortBy}&sortExp=${t.SortExp}`;t.isBlank(this.searchCondition)||(a+="&search="+this.searchCondition),await r["a"].GetVendorListing(a).then(a=>{a.data&&a.data.length>0?(t.VendorData=a.data,t.TotalRecords=a.data[0].TOTAL_RECORD,t.TotalPages=Math.ceil(t.TotalRecords/t.PageSize),t.CurrentPage=t.PageNumber,t.noRecords=!1):(t.VendorData=[],t.TotalRecords=0,t.noRecords=!0)})}}},l=d,c=e("2877"),m=Object(c["a"])(l,s,i,!1,null,null,null);a["default"]=m.exports},f9e7:function(t,a,e){"use strict";let s=[{title:"Add Vendor",iconClass:"fa-plus",callbackfunction:"AddVendor",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1}];a["a"]={buttons:s}}}]);
//# sourceMappingURL=chunk-912c3e3a.js.map