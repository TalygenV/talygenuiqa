(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ec673b5"],{"186d":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".singleselectlook .multiselect__select:before{z-index:99}.singleselectlook .multiselect__tags{padding:8px 30px 0 8px!important;min-height:36px!important}.singleselectlook .multiselect__input{margin-bottom:0}",""]),t.exports=e},"43e9":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loader",{attrs:{"is-visible":t.isLoading}}),a("div",{staticClass:"row mt-2 ml-1 mr-1"},[a("tg-list",{attrs:{IsShowAction:!1,showCheckBox:!0,ModuleName:"CompanyDirectory",SubModuleCode:"CompanyDirectory",IdentityColumn:"user_title_id",HeaderText:t.$t("UserTitle"),ListData:t.DirectoryData,HeaderData:t.Headers,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords,IsSearchFieldsOnTop:!1,SortExp:t.SortExp,SortBy:t.SortBy,SearchPosition:"top",SearchFields:t.topSearchFields,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.FetchData,IsFilterApplied:!!t.searchCondition,LegendArray:[],sourcetype:"",NorecordfoundText:t.$t("NoRecordfound")},on:{LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,ActionButtonClick:t.actionButtonClick,SortdataButtonClick:t.sortdata},scopedSlots:t._u([{key:"slotdata",fn:function(e){var i=e.data;return["DETAIL"==i.column.COLUMN_NAME?[a("em",{staticClass:"applyjobicon  details",attrs:{id:"ancDetails",title:"","data-toggle-tooltip":"tooltip","data-original-title":"Details"},on:{click:function(e){return t.Detail(i.row.userid)}}},[a("i",{staticClass:"fa fa-file-text-o action-icon text-info"})])]:t._e()]}}])})],1),t.showContactDetail?a("div",{staticClass:"my-popups"},[a("div",{staticClass:"modal d-block"},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("ContactDetail")]),a("button",{staticClass:"close",attrs:{type:"button","data-original-title":"Close"},on:{click:function(e){return t.CloseContactDetail()}}},[a("em",{staticClass:"fa fa-times"})])]),a("div",{staticClass:"border p-3"},[a("div",{staticClass:"heading-border"},[a("h5",{staticClass:"h5"},[a("span",[t._v("Communication")]),a("small",{staticClass:"float-right icon_add add cursorpointer",attrs:{id:"AddCommunication",title:"AddCommunicationService",checkprivilege:"yes"},on:{click:function(e){return t.AddCommunication()}}},[a("i",{staticClass:"fa fa-plus pr-2"}),t._v(t._s(t.$t("AddNew"))+" ")])])]),a("div",[t.showCommunication?a("AddCommunication",{attrs:{Userid:t.Userid,Items:t.Item,ModuleName:t.MODULENAME,SubModule:t.SubModuleCode,title:t.ManageUserTitle,emitName:"addReloadData"},on:{close:function(e){t.showCommunication=!1},addReloadData:function(e){t.FetchCommunication(),t.showCommunication=!1}}}):t._e(),a("tg-list",{attrs:{IsShowAction:!1,showCheckBox:!1,ModuleName:"CompanyDirectory",SubModuleCode:"CompanyDirectory",IdentityColumn:"user_title_id",HeaderText:t.$t("UserTitle"),ListData:t.CommunicationData,HeaderData:t.Header1,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords1,IsSearchFieldsOnTop:!1,SortExp:t.SortExp,SortBy:t.SortBy,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.FetchCommunication,IsFilterApplied:!!t.searchCondition,LegendArray:[],sourcetype:"",NorecordfoundText:t.$t("NoRecordfound")},on:{LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod1,HeaderButtonClick:t.commonHeaderButtonClick,ActionButtonClick:t.actionButtonClick,SortdataButtonClick:t.sortdata1},scopedSlots:t._u([{key:"slotdata",fn:function(e){var i=e.data;return["Edit"==i.column.COLUMN_NAME?[a("em",{staticClass:"editicon enable editrecord",attrs:{id:"ancEditEmail",title:"Edit"},on:{click:function(e){return t.EditCommunication(i.row)}}},[a("i",{staticClass:"fa fa-pencil text-success action-icon"})])]:t._e(),"Delete"==i.column.COLUMN_NAME?[a("em",{staticClass:"enable delete",attrs:{title:"Delete",id:"ancDelEmail",url:"email"},on:{click:function(e){return t.DeleteCommunication(i.row,"Communication")}}},[a("i",{staticClass:"fa fa-trash text-danger action-icon"})])]:t._e()]}}],null,!1,770267704)})],1)]),a("div",{staticClass:"border p-3"},[a("div",{staticClass:"heading-border"},[a("h5",{staticClass:"h5"},[a("span",[t._v("Address")]),a("small",{staticClass:"float-right icon_add add cursorpointer",attrs:{id:"AddAddress",title:"AddAddressService",checkprivilege:"yes"},on:{click:function(e){return t.AddAddress()}}},[a("i",{staticClass:"fa fa-plus pr-2"}),t._v(t._s(t.$t("AddNew"))+" ")])])]),a("div",[t.showAddAddress?a("AddAddress",{attrs:{Userid:t.Userid,Items:t.Item1,ModuleName:t.MODULENAME,SubModule:t.SubModuleCode,title:t.ManageUserTitle,emitName:"addReloadData"},on:{close:function(e){t.showAddAddress=!1},addReloadData:function(e){t.FetchCommunication(),t.showAddAddress=!1}}}):t._e(),a("tg-list",{attrs:{IsShowAction:!1,showCheckBox:!1,ModuleName:"CompanyDirectory",SubModuleCode:"CompanyDirectory",IdentityColumn:"user_title_id",HeaderText:t.$t("UserTitle"),ListData:t.AddressData,HeaderData:t.Header2,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords2,IsSearchFieldsOnTop:!1,SortExp:t.SortExp,SortBy:t.SortBy,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.FetchCommunication,IsFilterApplied:!!t.searchCondition,LegendArray:[],sourcetype:"",NorecordfoundText:t.$t("NoRecordfound")},on:{LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod1,HeaderButtonClick:t.commonHeaderButtonClick,ActionButtonClick:t.actionButtonClick,SortdataButtonClick:t.sortdata1},scopedSlots:t._u([{key:"slotdata",fn:function(e){var i=e.data;return["Edit"==i.column.COLUMN_NAME?[a("em",{staticClass:"editicon enable editrecord text-center",attrs:{title:"Edit"},on:{click:function(e){return t.EditAddress(i.row)}}},[a("i",{staticClass:"fa fa-pencil text-success action-icon"})])]:t._e(),"Delete"==i.column.COLUMN_NAME?[a("em",{staticClass:"enable delete text-center",attrs:{title:"Delete"},on:{click:function(e){return t.DeleteCommunication(i.row,"Address")}}},[a("i",{staticClass:"fa fa-trash text-danger action-icon"})])]:t._e()]}}],null,!1,94903704)})],1)]),a("div",{staticClass:"border p-3"},[a("div",{staticClass:"heading-border"},[a("h5",{staticClass:"h5"},[a("span",[t._v("Contact Number")]),a("small",{staticClass:"float-right icon_add add cursorpointer",attrs:{id:"AddContactNumber",title:"AddContactNumberService",checkprivilege:"yes"},on:{click:function(e){return t.AddContactNumber()}}},[a("i",{staticClass:"fa fa-plus pr-2"}),t._v(t._s(t.$t("AddNew"))+" ")])])]),a("div",[t.showContactNumber?a("ContactNumber",{attrs:{Userid:t.Userid,Items:t.Item2,ModuleName:t.MODULENAME,SubModule:t.SubModuleCode,title:t.ManageUserTitle,emitName:"addReloadData"},on:{close:function(e){t.showContactNumber=!1},addReloadData:function(e){t.FetchCommunication(),t.showContactNumber=!1}}}):t._e(),a("tg-list",{attrs:{IsShowAction:!1,showCheckBox:!1,ModuleName:"CompanyDirectory",SubModuleCode:"CompanyDirectory",IdentityColumn:"user_title_id",HeaderText:t.$t("UserTitle"),ListData:t.ContactNumberData,HeaderData:t.Header3,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords3,IsSearchFieldsOnTop:!1,SortExp:t.SortExp,SortBy:t.SortBy,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.FetchCommunication,IsFilterApplied:!!t.searchCondition,LegendArray:[],sourcetype:"",NorecordfoundText:t.$t("NoRecordfound")},on:{LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod1,HeaderButtonClick:t.commonHeaderButtonClick,ActionButtonClick:t.actionButtonClick,SortdataButtonClick:t.sortdata1},scopedSlots:t._u([{key:"slotdata",fn:function(e){var i=e.data;return["Edit"==i.column.COLUMN_NAME?[a("em",{staticClass:"editicon enable editrecord text-center",attrs:{title:"Edit"},on:{click:function(e){return t.EditContactNumber(i.row)}}},[a("i",{staticClass:"fa fa-pencil text-success action-icon"})])]:t._e(),"Delete"==i.column.COLUMN_NAME?[a("em",{staticClass:"enable delete text-center",attrs:{title:"Delete",url:"email"},on:{click:function(e){return t.DeleteCommunication(i.row,"ContactNumber")}}},[a("i",{staticClass:"fa fa-trash text-danger action-icon"})])]:t._e()]}}],null,!1,1009145161)})],1)])])])])]):t._e()],1)},s=[],o=a("9769");let n=[{fieldName:"Search by User Name",fieldType:"text",fieldSearchConditionName:["username"],isSearch:!0,value:null}];function l(t,e,a){let i={};i["moduleName"]=e,i["type"]=a}var r={topsearchSchema:n,bindleftCommonSearchdropdown:l},d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"my-popups"},[a("div",{staticClass:"modal d-block "},[a("div",{staticClass:"modal-dialog ui-draggable",staticStyle:{display:"inline-block"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header ui-draggable-handle"},[a("h5",{staticClass:"modal-title",attrs:{id:"ui-id-26"}},[t._v(t._s(t.$t("Communication")))]),a("button",{staticClass:"close",attrs:{type:"button",title:"","data-original-title":"Close"},on:{click:function(e){return t.$emit("close")}}},[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),a("span",{staticClass:"user-guide"},[a("a",{staticClass:"ancuserguide text-white",attrs:{"data-toggle":"collapse",href:"#collapseReplyUG",role:"button","aria-expanded":"false","aria-controls":"collapseExample"}},[a("em",{staticClass:"fa fa-files-o pr-2"}),t._v(t._s(t.$t("GuideForUser")))]),a("div",{staticClass:"divancuserguide collapse overflow-auto",attrs:{id:"collapseReplyUG"}},[a("div",{staticClass:"custom-scrollbar-js",attrs:{id:"scrollbarreplyuserguideMangeView"}},[a("div",{staticClass:"con",domProps:{innerHTML:t._s(t.$t("CommunicationGuide"))}})])])])]),a("div",{staticClass:"modal-body",staticStyle:{height:"auto","min-height":"0px","max-height":"none"},attrs:{id:"backgroundPopup"}},[a("section",{staticClass:"main-content",attrs:{id:"main-content"}},[a("section",{staticClass:"main-content"},[a("div",{staticClass:"container-fluid p-0"},[a("div",{staticClass:"p-0"},[a("dynamic-form",{ref:"addCommunication",attrs:{schema:t.FormSchema,buttons:t.buttons},on:{OnSubmit:t.onSubmit},scopedSlots:t._u([{key:"tgslot-ScreenName",fn:function(e){var i=e.data;return[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:i.fieldInfo.value,expression:"data.fieldInfo.value"}],class:{"form-control w-100":!0,"is-invalid":""!=i.error.length},attrs:{type:"text",name:t.ScreenName},domProps:{value:i.fieldInfo.value},on:{input:function(e){e.target.composing||t.$set(i.fieldInfo,"value",e.target.value)}}}),""!=i.error.length?a("span",{staticClass:"invalid-feedback",attrs:{name:"ScreenName"}},[t._v(t._s(i.error))]):t._e()])]}}])})],1)])])])])])])])])])},c=[],u=(a("14d9"),a("ed09")),m=a("7bb1"),p=a("b9b9");Object(m["c"])("required",{validate(t){return console.log("checkk"),{required:!0,valid:-1===["",null,void 0].indexOf(t)}},message:"The {_field_} is required"});var h=Object(u["defineComponent"])({name:"Manage Departemts",components:{ValidationObserver:m["a"],ValidationProvider:m["b"]},props:{Userid:{type:Number},Items:{type:Array},addApiUrl:{type:String},emitName:{type:String},ModuleName:{type:String},SubModule:{type:String},title:{type:String},recordId:{type:Number}},data(){return{editor:this.CLASSIC_EDITOR,FormSchema:[{layoutType:"double",Data:[{astype:"SelectField",label:this.$t("CommunicationType"),name:"CommunicationType",value:"",placeholder:"Communication Type",config:{options:[]},validationRules:{required:!0}},{astype:"SlotField",label:this.$t("Address/Screen Name"),name:"ScreenName",value:"",placeholder:"",validationRules:{required:!0}}]},{layoutType:"single",Data:[{astype:"TextAreaField",label:this.$t("Note/Description"),name:"Description",value:"",placeholder:this.$t("Note/Description"),validationRules:""},{astype:"toggleField",label:this.$t("Visible To Client"),name:"is_visible",value:"",placeholder:"",validationRules:""}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save",isVisible:!0},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.closePopup}],TypeData:[],emailValidate:{},emailValidateemails:{},isLoading:!1}},created:function(){var t=this;t.GetEmailTypes(),t.Items.emailId>0&&(t.FormSchema[0].Data[0].value=t.Items.typeId,t.FormSchema[0].Data[1].value=t.Items.screenName,t.FormSchema[1].Data[0].value=t.Items.userEmailDesc,t.FormSchema[1].Data[1].value=t.Items.isVisibleToClient),setTimeout(()=>{this.$refs.addCommunication.UpdateKeyValue()},200)},methods:{getForm:function(t){var e=this;e.isLoading=!0;var a=`recordId=${t}&moduleName=${e.ModuleName}&subModuleCode=${e.SubModule}`;o["a"].GetDynamicForm(a).then((function(t){null!=t&&null!=t.data&&(e.isMapFeature=t.data.isFsmLocating,t.data.data,e.FormSchema=Object(p["a"])(t.data.data),console.log("tis",e.FormSchema),e.FormSchema.length>0&&(e.FormSchema[0].visibility=!1),e.isLoading=!1)}))},async GetEmailTypes(){var t=this;t.isLoading=!0,await o["a"].GetEmailTypes().then(e=>{null!=JSON.parse(e.data)&&(t.TypeData=[],t.TypeData=JSON.parse(e.data),t.TypeData.forEach((e,a)=>{t.FormSchema[0].Data[0].config.options.push({name:e.CARRIER_TYPE_NAME,value:e.CARRIER_TYPE_ID})}),t.isLoading=!1),t.isLoading=!1})},async onSubmit(){let t=Object(p["b"])(this.FormSchema);o["a"].DepartmentAdd(t,this.addApiUrl).then(t=>{null!=t.data.Result&&t.data.Result.MAIN_ID>0?(this.ShowAlert(this.$t("SavedSuccessfully"),"success",!1,this.$t("Alert")),this.$emit(this.emitName)):this.ShowAlert(this.$t(t.data.Status),"danger",!1,this.$t("Alert"))})},closePopup(){this.$emit("close")},onSubmit:function(t){var e=this,a={user_email_id:e.Items.emailId>0?e.Items.emailId:0,Userid:e.Userid,typeId:t.CommunicationType,ScreenName:t.ScreenName,Description:t.Description,is_visible:t.is_visible,addToDir:!0,is_default:!1},i=new FormData;i.append("postString",JSON.stringify(a)),o["a"].AddUpdateEmail(i).then(t=>{if(null!=t.data){const a=JSON.parse(t.data);1==a.status_id&&"add"==a.status_msg?(e.ShowAlert(e.$t("AddCommunication"),"success",e.$t("Alert")),e.closePopup(),e.$parent.FetchCommunication(),e.isLoading=!1):2==a.status_id&&"updated"==a.status_msg?(e.ShowAlert(e.$t("UpdatedCommunication"),"success",e.$t("Alert")),e.closePopup(),e.$parent.FetchCommunication(),e.isLoading=!1):(e.ShowAlert(e.$t("UnknownError"),"failure",e.$t("Alert")),e.closePopup(),e.isLoading=!1)}})}}}),C=h,S=(a("5ab0"),a("2877")),A=Object(S["a"])(C,d,c,!1,null,null,null),b=A.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"my-popups"},[a("div",{staticClass:"modal d-block "},[a("div",{staticClass:"modal-dialog ui-draggable",staticStyle:{display:"inline-block"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header ui-draggable-handle"},[a("h5",{staticClass:"modal-title",attrs:{id:"ui-id-26"}},[t._v(t._s(t.$t("Address")))]),a("button",{staticClass:"close",attrs:{type:"button",title:"","data-original-title":"Close"},on:{click:function(e){return t.$emit("close")}}},[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),a("span",{staticClass:"user-guide"},[a("a",{staticClass:"ancuserguide text-white",attrs:{"data-toggle":"collapse",href:"#collapseReplyUG",role:"button","aria-expanded":"false","aria-controls":"collapseExample"}},[a("em",{staticClass:"fa fa-files-o pr-2"}),t._v(t._s(t.$t("GuideForUser")))]),a("div",{staticClass:"divancuserguide collapse overflow-auto",attrs:{id:"collapseReplyUG"}},[a("div",{staticClass:"custom-scrollbar-js",attrs:{id:"scrollbarreplyuserguideMangeView"}},[a("div",{staticClass:"con",domProps:{innerHTML:t._s(t.$t("AddressGuide"))}})])])])]),a("div",{staticClass:"modal-body",staticStyle:{height:"auto","min-height":"0px","max-height":"none"},attrs:{id:"backgroundPopup"}},[a("section",{staticClass:"main-content",attrs:{id:"main-content"}},[a("section",{staticClass:"main-content"},[a("div",{staticClass:"container-fluid p-0"},[a("div",{staticClass:"p-0"},[a("dynamic-form",{ref:"addAddress",staticClass:"daterangecontrolHS",attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}})],1)])])])])])])])])])},f=[];Object(m["c"])("required",{validate(t){return console.log("checkk"),{required:!0,valid:-1===["",null,void 0].indexOf(t)}},message:"The {_field_} is required"});var D=Object(u["defineComponent"])({name:"Manage Departemts",components:{ValidationObserver:m["a"],ValidationProvider:m["b"]},props:{Userid:{type:Number},Items:{type:Array},addApiUrl:{type:String},emitName:{type:String},ModuleName:{type:String},SubModule:{type:String},title:{type:String},recordId:{type:Number}},data(){return{editor:this.CLASSIC_EDITOR,department:{name:"",status:{name:"active",id:1},visibaleToclients:!1,visibaleToTicting:!1,description:""},FormSchema:[{layoutType:"double",Data:[{astype:"TextField",label:this.$t("AddressLine1"),name:"AddressLine1",value:"",placeholder:"Address Line 1",validationRules:{required:!0},disabled:!1},{astype:"TextField",label:this.$t("AddressLine2"),name:"AddressLine2",value:"",placeholder:"Address Line 2",validationRules:{required:!1},disabled:!1},{astype:"SelectField",label:this.$t("Country"),name:"Country",value:"",placeholder:"",validationRules:{required:!0,max:250},config:{option_request_url:"https://qatestnewapi.talygen.com/api/Common/GetDDLData?moduleName=CRM&type=COUNTRIES",token:this.GetUserInfo.Token,onChange:this.onChangeDropdown}},{astype:"SelectField",label:this.$t("State/Province"),name:"State",value:"",placeholder:"",config:{options:[]}},{astype:"TextField",label:this.$t("City"),name:"City",value:"",placeholder:"City",validationRules:{required:!1},disabled:!1},{astype:"TextField",label:this.$t("ZipCode"),name:"ZipCode",value:"",placeholder:"Zip Code",validationRules:{required:!1},disabled:!1},{astype:"TextField",label:this.$t("Note/Description About Address"),name:"NoteDescription",value:"",placeholder:"Note/Description About Address",validationRules:{required:!1},disabled:!1},{astype:"toggleField",label:this.$t("Visible To Client"),name:"VisibleToClient",value:"",placeholder:"",validationRules:""}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save",isVisible:!0},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.closePopup}],isLoading:!1,StateData:[]}},created:function(){var t=this;t.Items.addressId>0&&(t.FormSchema[0].Data[0].value=t.Items.userAddress1,t.FormSchema[0].Data[1].value=t.Items.userAddress2,t.FormSchema[0].Data[2].value=t.Items.countryId,t.onChangeDropdown(t.Items.countryId),setTimeout(()=>{t.FormSchema[0].Data[3].value=t.Items.userStateId},300),t.FormSchema[0].Data[4].value=t.Items.userCity,t.FormSchema[0].Data[5].value=t.Items.userZipCode,t.FormSchema[0].Data[6].value=t.Items.userAddressDesc,t.FormSchema[0].Data[7].value=t.Items.isVisibleToClient),setTimeout(()=>{this.$refs.addAddress.UpdateKeyValue()},200)},methods:{async onChangeDropdown(t){var e=this,a="object"===typeof t?t.target.value:t,i="countryId="+a;await o["a"].GetStateListByCountryId(i).then((function(t){e.StateData=JSON.parse(t.data).data,e.StateData=e.StateData.map(t=>({name:t.name,value:t.state_id})),$.each(e.FormSchema,(function(t,a){$.each(a.Data,(function(t,a){"State"==a.name&&(a.value="",a.config.options=e.StateData)}))}))}))},onSubmit:function(t){var e=this,a={user_address_id:e.Items.addressId>0?e.Items.addressId:0,Userid:e.Userid,address1:t.AddressLine1,address2:t.AddressLine2,countryId:t.Country,stateId:t.State,stateName:t.State>0?e.StateData.find(e=>e.value===t.State).name:"",city:t.City,zipcode:t.ZipCode,desc:t.NoteDescription,is_visible:t.VisibleToClient,addToDir:!0},i=new FormData;i.append("postString",JSON.stringify(a)),o["a"].AddUpdateAddress(i).then(t=>{if(null!=t.data){const a=JSON.parse(t.data);1==a.status_id&&"add"==a.status_msg?(e.ShowAlert(e.$t("AddedAddress"),"success",e.$t("Alert")),e.closePopup(),e.$parent.FetchCommunication(),e.isLoading=!1):2==a.status_id&&"updated"==a.status_msg?(e.ShowAlert(e.$t("UpdatedAddress"),"success",e.$t("Alert")),e.closePopup(),e.$parent.FetchCommunication(),e.isLoading=!1):(e.ShowAlert(e.$t("UnknownError"),"failure",e.$t("Alert")),e.closePopup(),e.isLoading=!1)}})},getForm:function(t){var e=this;e.isLoading=!0;var a=`recordId=${t}&moduleName=${e.ModuleName}&subModuleCode=${e.SubModule}`;o["a"].GetDynamicForm(a).then((function(t){null!=t&&null!=t.data&&(e.isMapFeature=t.data.isFsmLocating,t.data.data,e.FormSchema=Object(p["a"])(t.data.data),console.log("tis",e.FormSchema),e.FormSchema.length>0&&(e.FormSchema[0].visibility=!1),e.isLoading=!1)}))},closePopup(){this.$emit("close")}}}),v=D,y=(a("adcf"),Object(S["a"])(v,g,f,!1,null,null,null)),_=y.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"my-popups"},[a("div",{staticClass:"modal d-block "},[a("div",{staticClass:"modal-dialog ui-draggable",staticStyle:{display:"inline-block"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header ui-draggable-handle"},[a("h5",{staticClass:"modal-title",attrs:{id:"ui-id-26"}},[t._v(" "+t._s(t.$t("ContactNumber")))]),a("button",{staticClass:"close",attrs:{type:"button",title:"","data-original-title":"Close"},on:{click:function(e){return t.$emit("close")}}},[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),a("span",{staticClass:"user-guide"},[a("a",{staticClass:"ancuserguide text-white",attrs:{"data-toggle":"collapse",href:"#collapseReplyUG",role:"button","aria-expanded":"false","aria-controls":"collapseExample"}},[a("em",{staticClass:"fa fa-files-o pr-2"}),t._v(t._s(t.$t("GuideForUser")))]),a("div",{staticClass:"divancuserguide collapse overflow-auto",attrs:{id:"collapseReplyUG"}},[a("div",{staticClass:"custom-scrollbar-js",attrs:{id:"scrollbarreplyuserguideMangeView"}},[a("div",{staticClass:"con",domProps:{innerHTML:t._s(t.$t("ContactNumberGuide"))}})])])])]),a("div",{staticClass:"modal-body",staticStyle:{height:"auto","min-height":"0px","max-height":"none"},attrs:{id:"backgroundPopup"}},[a("section",{staticClass:"main-content",attrs:{id:"main-content"}},[a("section",{staticClass:"main-content"},[a("div",{staticClass:"container-fluid p-0"},[a("div",{staticClass:"p-0"},[a("dynamic-form",{ref:"dynamicForm",staticClass:"daterangecontrolHS",attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}})],1)])])])])])])])])])},I=[];Object(m["c"])("required",{validate(t){return console.log("checkk"),{required:!0,valid:-1===["",null,void 0].indexOf(t)}},message:"The {_field_} is required"});var E=Object(u["defineComponent"])({name:"Manage Departemts",components:{ValidationObserver:m["a"],ValidationProvider:m["b"]},props:{Userid:{type:Number},Items:{type:Array},emitName:{type:String},ModuleName:{type:String},SubModule:{type:String},title:{type:String},recordId:{type:Number}},data(){return{editor:this.CLASSIC_EDITOR,department:{name:"",status:{name:"active",id:1},visibaleToclients:!1,visibaleToTicting:!1,description:""},FormSchema:[{layoutType:"double",Data:[{astype:"NumericField",label:this.$t("ContactNumber"),name:"ContactNumber",value:"",placeholder:"Contact Number",validationRules:{required:!0},disabled:!1},{astype:"TextField",label:this.$t("Note/Description"),name:"NoteDescription",value:"",placeholder:"Note/Description",validationRules:{required:!0},disabled:!1},{astype:"toggleField",label:this.$t("Visible To Client"),name:"VisibleToClient",value:"",placeholder:"",validationRules:{required:!0}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save",isVisible:!0},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.closePopup}],isLoading:!1}},created:function(){var t=this;t.Items.phoneId>0&&(t.FormSchema[0].Data[0].value=t.Items.contact,t.FormSchema[0].Data[1].value=t.Items.description,t.FormSchema[0].Data[2].value=t.Items.isVisibleToClient)},methods:{onSubmit:function(t){var e=this,a={userPhoneId:e.Items.phoneId>0?e.Items.phoneId:0,Userid:e.Userid,phone:t.ContactNumber,phonedesc:t.NoteDescription,is_visible:t.VisibleToClient,addToDir:!0},i=new FormData;i.append("postString",JSON.stringify(a)),o["a"].AddUpdateContact(i).then(t=>{if(null!=t.data){const a=JSON.parse(t.data);1==a.status_id&&"add"==a.status_msg?(e.ShowAlert(e.$t("AddedContactNumber"),"success",e.$t("Alert")),e.closePopup(),e.$parent.FetchCommunication(),e.isLoading=!1):2==a.status_id&&"updated"==a.status_msg?(e.ShowAlert(e.$t("UpdatedContactNumber"),"success",e.$t("Alert")),e.closePopup(),e.$parent.FetchCommunication(),e.isLoading=!1):(e.ShowAlert(e.$t("UnknownError"),"failure",e.$t("Alert")),e.closePopup(),e.isLoading=!1)}})},getForm:function(t){var e=this;e.isLoading=!0;var a=`recordId=${t}&moduleName=${this.ModuleName}&subModuleCode=${this.SubModule}`;o["a"].GetDynamicForm(a).then((function(t){null!=t&&null!=t.data&&(e.isMapFeature=t.data.isFsmLocating,t.data.data,e.FormSchema=Object(p["a"])(t.data.data),console.log("tis",e.FormSchema),e.FormSchema.length>0&&(e.FormSchema[0].visibility=!1),e.isLoading=!1)}))},closePopup(){this.$emit("close")}}}),L=E,T=(a("7a79"),Object(S["a"])(L,N,I,!1,null,null,null)),M=T.exports,R={components:{AddCommunication:b,AddAddress:_,ContactNumber:M},data(){return{showContactDetail:!1,showCommunication:!1,showAddAddress:!1,showContactNumber:!1,Userid:0,noRecord:!1,isLoading:!1,DirectoryData:[],CommunicationData:[],AddressData:[],ContactNumberData:[],TotalRecords:0,TotalRecords1:0,TotalRecords2:0,TotalRecords3:0,listheaderbuttons:null,topSearchFields:r.topsearchSchema,PageSize:10,PageNumber:1,isPaged:1,TotalPages:0,listActions:null,searchCondition:null,conditionForInstantSearch:"",SortBy:null,SortExp:null,MODULENAME:"CompanyDirectory",SUBMODULECODE:"CompanyDirectory",privilegeParams:null,sharetype:"",Item:[],Item1:[],Item2:[],Headers:[{COLUMN_NAME:"username",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"username",DISPLAY_ORDER:1},{COLUMN_NAME:"address",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"address",DISPLAY_ORDER:2},{COLUMN_NAME:"contactnumber",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"contactnumber",DISPLAY_ORDER:3},{COLUMN_NAME:"DETAIL",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"DETAIL",DISPLAY_ORDER:4,settings:{isInSlot:!0}}],Header1:[{COLUMN_NAME:"screenName",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"screenName",DISPLAY_ORDER:1},{COLUMN_NAME:"communicationType",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"communicationType",DISPLAY_ORDER:2},{COLUMN_NAME:"Edit",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Edit",DISPLAY_ORDER:3,settings:{isInSlot:!0}},{COLUMN_NAME:"Delete",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("Delete"),DISPLAY_ORDER:9,settings:{isInSlot:!0}}],Header2:[{COLUMN_NAME:"address",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"address",DISPLAY_ORDER:1},{COLUMN_NAME:"Edit",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Edit",DISPLAY_ORDER:3,settings:{isInSlot:!0}},{COLUMN_NAME:"Delete",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("Delete"),DISPLAY_ORDER:9,settings:{isInSlot:!0}}],Header3:[{COLUMN_NAME:"contact",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"contact",DISPLAY_ORDER:1},{COLUMN_NAME:"description",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"description",DISPLAY_ORDER:2},{COLUMN_NAME:"Edit",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Edit",DISPLAY_ORDER:3,settings:{isInSlot:!0}},{COLUMN_NAME:"Delete",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("Delete"),DISPLAY_ORDER:9,settings:{isInSlot:!0}}]}},mounted(){r.topsearchSchema.forEach(t=>{t.value="",t.isSearch=!1})},created:function(){var t=this;t.privilegeParams="controller=User&action=",t.FetchData()},methods:{renderActions:function(t){console.log(t)},commonHeaderButtonClick:function(t){switch(t.callbackfunction){case"ActiveMultipleListing":this.UpdateStatus("Active");break;case"InactiveMultipleListing":this.UpdateStatus("Inactive");break;case"commonDeleteData":this.commonDeleteData();break;case"AddUserTitle":this.showUserTitle=!0;break}},actionButtonClick:function(t,e,a,i){},sortdata:async function(t){var e="sort tb_headerSortDown";this.SortBy=t,t===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",e="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",e="sort tb_headerSortUp"):(this.SortExp="ASC",e="sort tb_headerSortDown")),await this.FetchData(),$("#th-"+t+"  span:first-child").attr("class",e)},pagerMethod:async function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,await this.FetchData()},leftCommonSearch:async function(t){this.PageNumber=t.PageNumber,this.isPaged=1,"undefined"!=typeof t.searchCondition?this.searchCondition=t.searchCondition:this.searchCondition="",await this.FetchData()},Detail:function(t){var e=this;e.Userid=t,e.showContactDetail=!0,e.FetchCommunication()},CloseContactDetail:function(){var t=this;t.showContactDetail=!1},AddCommunication:function(){var t=this;t.showCommunication=!0},EditCommunication:function(t){var e=this;e.Item=t,e.showCommunication=!0},AddAddress:function(){var t=this;t.showAddAddress=!0},EditAddress:function(t){var e=this;e.Item1=t,e.showAddAddress=!0},AddContactNumber:function(){var t=this;t.showContactNumber=!0},EditContactNumber:function(t){var e=this;e.Item2=t,e.showContactNumber=!0},DeleteCommunication:function(t,e){var a=this;a.confirmR(a.$t("ConfirmDelete"),!0,a.$t("Delete")+"  "+a.$t(e),(function(){var i="";i="Communication"==e?`?UserId=${a.Userid}&RecordId=${t.emailId}&Type=${e}`:"Address"==e?`?UserId=${a.Userid}&RecordId=${t.addressId}&Type=${e}`:`?UserId=${a.Userid}&RecordId=${t.phoneId}&Type=${e}`,o["a"].DeleteRecords(i).then(t=>{if(null!=t.data){const e=JSON.parse(t.data)[0];1==e.status_id&&"Communication"==e.status_msg?(a.ShowAlert(a.$t("DeletedSuccess",[a.$t("Communication")]),"success",!0,a.$t("Alert")),a.FetchCommunication(),a.isLoading=!1):1==e.status_id&&"Address"==e.status_msg?(a.ShowAlert(a.$t("DeletedSuccess",[a.$t("Address")]),"success",!0,a.$t("Alert")),a.FetchCommunication(),a.isLoading=!1):1==e.status_id&&"ContactNumber"==e.status_msg?(a.ShowAlert(a.$t("DeletedSuccess",[a.$t("ContactNumber")]),"success",!0,a.$t("Alert")),a.FetchCommunication(),a.isLoading=!1):(a.ShowAlert(a.$t("DeletedError",[a.$t("Record")]),"failure",!0,a.$t("Alert")),a.isLoading=!1)}})}))},FetchData:async function(){var t=this;this.isLoading=!0;var e=`pageSize=${t.PageSize}&pageNum=${t.PageNumber}&sortBy=${t.SortBy}&sortExp=${t.SortExp}&search=${""==t.searchCondition?null:t.searchCondition}`;await o["a"].DirectoryListing(e).then((function(e){e.data.length>0?(t.DirectoryData=e.data,t.TotalRecords=t.DirectoryData[0].total,t.TotalPages=Math.ceil(t.TotalRecords/t.PageSize),t.CurrentPage=t.PageNumber,t.noRecord=!1,t.isLoading=!1):(t.noRecord=!0,t.DirectoryData=[],t.TotalRecords=0,t.isLoading=!1),setTimeout((function(){t.ResponsiveDataTable("tablelistingdata")}),500),t.isLoading=!1}))},FetchCommunication:async function(){var t=this;this.isLoading=!0;var e="UserId="+t.Userid;await o["a"].GetContactsofUser(e).then((function(e){e.data.item1.length>0?t.CommunicationData=e.data.item1:t.CommunicationData=[],e.data.item2.length>0?t.AddressData=e.data.item2:t.AddressData=[],e.data.item3.length>0?t.ContactNumberData=e.data.item3:t.ContactNumberData=[],setTimeout((function(){t.ResponsiveDataTable("tablelistingdata")}),500),t.isLoading=!1}))}}},x=R,F=Object(S["a"])(x,i,s,!1,null,null,null);e["default"]=F.exports},"5ab0":function(t,e,a){"use strict";a("97fb")},"5f71":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".singleselectlook .multiselect__select:before{z-index:99}.singleselectlook .multiselect__tags{padding:8px 30px 0 8px!important;min-height:36px!important}.singleselectlook .multiselect__input{margin-bottom:0}",""]),t.exports=e},"6f8d":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".singleselectlook .multiselect__select:before{z-index:99}.singleselectlook .multiselect__tags{padding:8px 30px 0 8px!important;min-height:36px!important}.singleselectlook .multiselect__input{margin-bottom:0}",""]),t.exports=e},"7a79":function(t,e,a){"use strict";a("b459")},"97fb":function(t,e,a){var i=a("6f8d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("499e").default;s("8f931ac0",i,!0,{sourceMap:!1,shadowMode:!1})},adcf:function(t,e,a){"use strict";a("b812")},b459:function(t,e,a){var i=a("5f71");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("499e").default;s("2371c77a",i,!0,{sourceMap:!1,shadowMode:!1})},b812:function(t,e,a){var i=a("186d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("499e").default;s("797c3b96",i,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=chunk-0ec673b5.js.map