(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a1f12634"],{"29cf":function(e,a,t){var i=t("24fb");a=i(!1),a.push([e.i,".is-visible[data-v-696c6eb8]{display:inline-block;height:auto}",""]),e.exports=a},"5d5c":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e._self._c;return a("div",[a("loader",{attrs:{isVisible:e.isLoading}}),a("section",{staticClass:"main-content"},[a("tg-list",{attrs:{IsShowAction:!0,ModuleName:"CustomField",SubModuleCode:"CustomField",LegendArray:[],showCheckBox:!0,IdentityColumn:"custom_field_id",listType:["List"],ListData:e.FieldsData,HeaderText:e.$t("Custom_Fields"),HeaderData:e.Headers,HeaderButtons:e.listheaderbuttons,SearchFields:e.leftSearchFields,RenderRowActionMethod:e.renderActions,ListDataCallBackFunction:e.FetchData,TotalRecords:e.TotalRecords,SortExp:e.SortExp,SortBy:e.SortBy,NorecordfoundText:e.$t("NoRecordfound")},on:{PagerButtonClick:e.pagerMethod,SortdataButtonClick:e.sortdata,ActionButtonClick:e.actionButtonClick,HeaderButtonClick:e.commonHeaderButtonClick,LeftsearchButtonClick:e.leftCommonSearch},scopedSlots:e._u([{key:"slotdata",fn:function({data:t}){return["name"==t.column.COLUMN_NAME?[a("span",{class:t.row.data_type_list[0].class_name},[e._v("    "+e._s(t.row.name)+" ")])]:e._e(),"total_layout"==t.column.COLUMN_NAME?[t.row.total_layout>0?[a("span",{staticClass:"fa fa-eye text-info action-icon",staticStyle:{"font-size":"18px"},on:{click:function(a){return e.viewCustomLayoutList(t.row.custom_layout_list,t.row.custom_field_id)}}})]:e._e(),[a("span",[0==t.row.total_layout?a("h4",{staticClass:"fa fa-eye action-icon",staticStyle:{"font-size":"18px"}}):e._e()])]]:e._e()]}}])})],1),e.showCustomfieldPopup?a("OpenAddCustomFieldPopup",{attrs:{ModuleId:e.ModuleId,Sub_ModuleId:e.Sub_ModuleId,LanguageArrayData:e.LanguageArray}}):e._e(),e.isShowCloneFieldPopup?a("CloneField",{attrs:{CustomFieldId:e.CustomFieldId}}):e._e(),e.isShowDependencyFieldPopup?a("DependencyField",{attrs:{DependencyData:e.DependencyData,CustomFieldId:e.CustomFieldId}}):e._e(),e.isShowEditCustomField?a("EditCustomField",{attrs:{CustomFieldArray:e.CustomFieldArray,LanguageArray:e.LanguageArray}}):e._e(),e.isShowCustomLayoutList?a("CustomLayoutList",{attrs:{CustomLayoutList:e.CustomLayoutList}}):e._e(),e.isShowModulePopup?a("AddModuleAndSubModuelVue",{on:{openCustomField:e.openCustomField}}):e._e()],1)},o=[],l=(t("14d9"),t("9769"));let s=[{title:"Add Custom Field",iconClass:"fa-plus",callbackfunction:"AddCustomField",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0},{id:"DeleteMultiple",title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",isdisabled:!0,isvisible:!0,isEnabledOnSelectedRow:!0}],d=[{fieldName:"FIELD NAME",fieldType:"text",fieldIcon:"fa fa-columns",fieldSearchConditionName:["name"],isSearch:!1,value:"",listOptions:[]},{fieldName:"MODULE",fieldType:"radio",fieldIcon:"fa fa-user",fieldSearchConditionName:["module_id"],isSearch:!1,value:"",listOptions:[]},{fieldName:" SUB MODULE",fieldType:"ddl-check",fieldIcon:"fa fa-user",fieldSearchConditionName:["sub_module_id"],isSearch:!1,value:"",listOptions:[]},{fieldName:"STATUS",fieldType:"radio",fieldIcon:"fa fa-bar-chart",paramName:"statusIds",fieldSearchConditionName:["status_id"],isSearch:!1,value:"",listOptions:[{value:"1001",name:"ACTIVE"},{value:"1002",name:"INACTIVE"}]}],n=[{title:"Preview",callbackfunction:"OpenAddPAge",icon:"fa fa-eye text-success action-icon",additionalSpan:""},{title:"Edit",callbackfunction:"EditCustomField",icon:"fa fa-pencil text-success action-icon",additionalSpan:""},{title:"Dependency",callbackfunction:"DependencyField",href:"javascript:void(0)",icon:"fa fa-brands fa-stack-overflow",additionalSpan:""},{title:"Clone",callbackfunction:"CloneField",href:"javascript:void(0)",icon:"fa fa-paper-plane text-success action-icon",additionalSpan:""},{title:"Delete",callbackfunction:"DeleteSingleRecord",href:"javascript:void(0)",icon:"fa fa-clock-o text-warning action-icon",additionalSpan:""}],u=[{COLUMN_NAME:"name",DATA_TYPE:"Text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Field Name",DISPLAY_ORDER:1},{COLUMN_NAME:"module_name",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Module Name",DISPLAY_ORDER:2},{COLUMN_NAME:"sub_module_name",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Sub Module Name",DISPLAY_ORDER:3},{COLUMN_NAME:"length",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Length",DISPLAY_ORDER:4},{COLUMN_NAME:"total_layout",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Layout Count ",DISPLAY_ORDER:4}];function r(e,a,t,i){var o=e;if("module"==t){var s="moduleId=&userTypeId=1&requestFrom=&isCustomFieldEnable=1";l["a"].Modulenamedata(s).then((function(e){var a=e.data.Data;null!=a&&(o.leftSearchFields[1].listOptions=a.map(e=>{const a={};return a.name=e.module_name,a.value=e.module_id.toString(),a}))}))}if("subModule"==t){o.leftSearchFields[2].listOptions=[];var d=`moduleId=${i}&userTypeId=1&requestFrom=&isCustomFieldEnable=1`;l["a"].Modulenamedata(d).then(e=>{null!=e.data.Data&&(o.subModuleNameList=e.data.Data,o.subModuleNameList.forEach((e,a)=>{let t={name:e.sub_module_name,value:e.sub_module_id};o.leftSearchFields[2].listOptions.push(t)}))})}}var c={buttons:s,leftsearchSchema:d,listActions:n,TableHeader:u,bindleftCommonSearchdropdown:r},m=t("1d8b"),p=function(){var e=this,a=e._self._c;return a("div",{staticClass:"my-popups"},[a("div",{staticClass:"modal d-block"},[a("div",{staticClass:"modal-dialog modal-dialog-centered ui-draggable"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header ui-draggable-handle py-0"},[a("button",{staticClass:"close",attrs:{type:"button"},on:{click:e.closePopup}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),a("h4",{staticClass:"modal-title py-3",attrs:{name:"header"}},[e._v(" Edit "+e._s(e.CustomFieldArray.name)+" "+e._s(e.$t("Properties"))+" ")])]),a("div",{staticClass:"listing py-3 px-3"},[a("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit}})],1)])])])])},h=[],C=t("240d"),S={components:{DynamicForm:C["DynamicForm"]},props:{FieldName:{type:String,required:!0},CustomFieldArray:{type:Object,required:!0},LanguageArray:{type:Array,required:!0}},data(){return{lenghtOfLanguageDiv:null,finalJsonData:[],Lblname:"",myObj:[],IsRequired:null,displayName:"",ddlLanguage:"",LengthVal:"",DecimalVal:"",txtDescription:"",dummyArray:[],SelectedData:[],langSelectedData:[],displayNameTextData:[],diplayNameWithCulture:[],langCulture:[],languageCultureArray:[],displayNameData:"",FormSchema:[{layoutType:"four",Data:[{astype:"TextField",label:"Label",name:"Label",value:"",placeholder:"",disabled:!1,validationRules:{required:!0}},{astype:"TextField",label:"Pick List Option",name:"PickListOption",value:"",visibility:!1,placeholder:"",validationRules:{required:!0}},{astype:"NumericField",label:"Length",name:"Length",value:"",placeholder:"",visibility:!0,validationRules:{required:!0}},{astype:"NumericField",label:"Decimal Places",name:"DecimalPlaces",value:"",placeholder:"",visibility:!1,validationRules:{required:!0}},{astype:"CheckBoxField",label:"Mark as Required",name:"MarkasRequired",value:"",placeholder:"",visibility:!0,config:{options:[{value:"1",name:""}]}},{astype:"TextAreaField",label:"Description",name:"Description",value:"",placeholder:"",visibility:!0,validationRules:"",config:{rows:3}}]},{layoutType:"double",Data:[{astype:"SelectField",label:"Language",name:"Language",value:"",placeholder:"",chkIndex:0,visibility:!1,config:{options:[]},validationRules:"required"},{astype:"TextField",label:"Display Name",name:"DisplayName",value:"",placeholder:"",chktxtIndex:0,visibility:!1,validationRules:{required:!0,max:250},config:{showAddIcon:!0,onAddButtonClick:this.AddMultiLanguage}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Update"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.closePopup}]}},created:function(){var e=this;e.ShowHideFields(),e.BindLangDDL(),e.EditBindFornData()},methods:{EditBindFornData(){var e=this;e.FormSchema[0].Data[0].value=e.CustomFieldArray.name,e.FormSchema[0].Data[1].value="undefind"!=e.CustomFieldArray.picklist_options?e.CustomFieldArray.picklist_options:"",e.FormSchema[0].Data[2].value=e.CustomFieldArray.length,e.FormSchema[0].Data[3].value="undefind"!=e.CustomFieldArray.decimal_places?e.CustomFieldArray.decimal_places:"",e.FormSchema[0].Data[4].value=1==e.CustomFieldArray.is_required?"1":"",e.FormSchema[0].Data[5].value=e.CustomFieldArray.description;var a={};if(e.CustomFieldArray.location_json.forEach(t=>{a={},a.value=t.lang_id,e.languageCultureArray.push(a),a={},a.value=t.localization_value,e.languageCultureArray.push(a)}),0!=e.CustomFieldArray.location_json.length){var t=e.languageCultureArray.length/2,i=1;e.languageCultureArray.forEach((a,o)=>{i<t&&(e.FormSchema[1].Data.push({astype:"SelectField",label:"Language",name:"Language"+e.FormSchema[1].Data.length,value:"",placeholder:"",chkIndex:e.FormSchema[1].Data.length,config:{options:[]},validationRules:"required"},{astype:"TextField",label:"Display Name",name:"DisplayName"+e.FormSchema[1].Data.length,value:"",placeholder:"",chktxtIndex:e.FormSchema[1].Data.length,validationRules:{required:!0,max:250},config:{showAddIcon:!0,onaddIconBackground:"bg-danger",onAddButtonClick:e.RemoveFile,addIcon:"fa fa-trash"}}),e.BindLangDDL(e.Lblname),i++)}),e.languageCultureArray.forEach((a,t)=>{e.FormSchema[1].Data[t].value=a.value})}},ShowHideFields(){var e=this;1==e.CustomFieldArray.is_system_generated?(e.FormSchema[0].Data[1].visibility=!1,e.FormSchema[0].Data[0].disabled=!0,e.FormSchema[0].Data[2].visibility=!1,e.FormSchema[0].Data[3].visibility=!1,e.FormSchema[0].Data[5].visibility=!1,e.FormSchema[1].Data[0].visibility=!1,e.FormSchema[1].Data[1].visibility=!1):(e.FormSchema[1].Data[0].visibility=!0,e.FormSchema[1].Data[1].visibility=!0,"Decimal"==e.FieldName&&(e.FormSchema[0].Data[3].visibility=!0),"Select List"!=e.FieldName&&"Checkbox"!=e.FieldName||(e.FormSchema[0].Data[1].visibility=!0),"Date"==e.FieldName&&(e.FormSchema[0].Data[1].visibility=!1,e.FormSchema[0].Data[3].visibility=!1))},BindLangDDL(e){var a=this;void 0==e?a.LanguageArray.forEach((e,t)=>{a.FormSchema[1].Data[0].config.options.push({value:e.lang_id,name:e.lang_name})}):a.LanguageArray.forEach((t,i)=>{"undefined"!=typeof e&&null!=e&&a.FormSchema[1].Data.forEach((e,i)=>{i%2==0&&a.FormSchema[1].Data[i].config.options.push({value:t.lang_id,name:t.lang_name})})})},closePopup(){var e=this;e.$parent.isShowEditCustomField=!1,e.$parent.FetchData()},AddMultiLanguage(){var e=this;e.FormSchema[1].Data.push({astype:"SelectField",label:"Language",name:"Language"+e.FormSchema[1].Data.length,value:"",placeholder:"",chkIndex:e.FormSchema[1].Data.length,config:{options:[]},validationRules:"required"},{astype:"TextField",label:"Display Name",name:"DisplayName"+e.FormSchema[1].Data.length,value:"",placeholder:"",chktxtIndex:e.FormSchema[1].Data.length,validationRules:{required:!0,max:250},config:{showAddIcon:!0,onaddIconBackground:"bg-danger",onAddButtonClick:e.RemoveFile,addIcon:"fa fa-trash"}}),e.FormSchema[1].Data.forEach(a=>{e.Lblname=a.name}),e.BindLangDDL(e.Lblname)},RemoveFile:function(e,a){var t=this,i=t.FormSchema[1].Data.findIndex(e=>e.chktxtIndex===a.chktxtIndex),o=i-1;i>-1&&t.FormSchema[1].Data.splice(i,1),o>-1&&t.FormSchema[1].Data.splice(o,1)},onSubmit(e,a){var t=this;t.lenghtOfLanguageDiv=t.FormSchema[1].Data;var i={};t.lenghtOfLanguageDiv.forEach((e,a)=>{"SelectField"==e.astype&&(i.localization_id=0,i.custom_field_id=0,i.user_guide="",i.lang_id=e.value),"TextField"==e.astype&&(i.localization_value=e.value,t.langCulture.push(i),i={})});var o="";if(t.FormSchema[1].Data.length>0){t.FormSchema[1].Data.forEach((e,a)=>{o+=a%2!=0?e.value+"^":e.value+","});var s=o.length-1;t.displayNameData=o.slice(0,s)}void 0!=t.CustomFieldArray&&(0!=t.FormSchema[0].Data[4].value.length?t.CustomFieldArray.is_required=void 0!=t.FormSchema[0].Data[4].value[0]:t.CustomFieldArray.is_required="",void 0!=e.PickListOption&&(t.CustomFieldArray.picklist_options=e.PickListOption),void 0!=e.Length&&(t.CustomFieldArray.length=e.Length),t.CustomFieldArray.group_id>0&&(t.CustomFieldArray.is_updated=1));let d={CUSTOM_FIELD_ID:t.CustomFieldArray.custom_field_id,MODULE_ID:t.CustomFieldArray.module_id,SUB_MODULE_ID:t.CustomFieldArray.sub_module_id,NAME:e.Label,DISPLAY_NAME:t.CustomFieldArray.display_name,DESCRIPTION:t.CustomFieldArray.Description,PICKLIST_OPTION:e.PickListOption,TYPE_ID:t.CustomFieldArray.data_type_id,LENGTH:e.Length,IS_REQUIRED:null!==e.MarkasRequired&&void 0!==e.MarkasRequired&&"1"===e.MarkasRequired.toString()?1:0,STATUSID:1001,DECIMAL_PLACES:e.DecimalPlaces,LOC_VALUE:t.displayNameData,FORM_FIELD_VISIBILITY:"YES",LIST_FIELD_VISIBILITY:"YES"};t.finalJsonData.push(d);var n="jsonString="+JSON.stringify(t.finalJsonData);l["a"].SaveUpdateCustomField(n).then((function(e){var a=JSON.parse(e.data);1==a.STATUS_CODE?(t.ShowAlert(t.$t("CustomFieldSuccess",[t.$t("Field")]),"success",!0,t.$t("Alert")),t.closePopup()):3==a.STATUS_CODE?t.ShowAlert(t.$t("CustomFieldExists"),"danger",!0,t.$t("Alert")):2==a.STATUS_CODE&&(t.ShowAlert(t.$t("CustomFieldUpdate"),"success",!0,t.$t("Alert")),t.closePopup())}))}}},y=S,f=t("2877"),F=Object(f["a"])(y,p,h,!1,null,null,null),g=F.exports,v=function(){var e=this,a=e._self._c;return a("div",{staticClass:"my-popups"},[a("div",{staticClass:"modal d-block"},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[e._v(" "+e._s(e.$t("CloneField"))+" ")]),a("button",{staticClass:"close",attrs:{type:"button","data-original-title":"Close"},on:{click:function(a){return e.ClosePopup()}}},[a("em",{staticClass:"fa fa-times"})])]),a("div",{staticClass:"border p-3"},[e.DataLoaded?a("DynamicForm",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit}}):e._e(),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"py-2"},[a("span",{staticClass:"mandatory"},[e._v(" "+e._s(e.$t("MandatoryString"))+" ")])])])],1)])])])])},D=[],b={components:{DynamicForm:C["DynamicForm"]},props:{CustomFieldId:{type:Number,required:!0}},data(){return{DataLoaded:!1,FormSchema:[{layoutType:"double",Data:[{astype:"TextField",label:"Custom Field Name",name:"CustomFieldName",value:"",placeholder:"Enter Custom Field Name",validationRules:{required:!0}},{astype:"TextField",label:"Display Name",name:"DisplayName",placeholder:"Enter Display Name",value:"",validationRules:{required:!0}}]}],buttons:[{type:"submit",class:"btn btn-success saveSendforApproval",text:"<i class='fa fa-save pr-2'></i> Save"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i> Cancel",onClick:this.ClosePopup}]}},created:function(){this.DataLoaded=!0},methods:{ClosePopup(){var e=this;e.$parent.isShowCloneFieldPopup=!1},onSubmit(e,a){var t=this;let i=`custom_field_id=${t.CustomFieldId}&customFieldDisplayName=${e.DisplayName}&customFieldName=${e.CustomFieldName}`;l["a"].CloneCustomField(i).then(e=>{if("NAME_EXIST"==e.data)t.ShowAlert(t.$t("Custom Field Name Already Exist"),"warning",t.$t("Alert"));else{if("CLONE"==e.data)return t.ShowAlert(t.$t("Clone Custom Field Successfully Done"),"success",t.$t("Alert")),t.ClosePopup(),void t.$parent.FetchData();"DISPLAY_NAME_EXIST"==e.data?t.ShowAlert(t.$t("Display Name Already Exist"),"warning",t.$t("Alert")):t.ShowAlert(t.$t("Something went wrong"),"failure",t.$t("Alert"))}})}}},_=b,L=Object(f["a"])(_,v,D,!1,null,null,null),A=L.exports,E=function(){var e=this,a=e._self._c;return a("div",{staticClass:"my-popups"},[a("div",{staticClass:"modal d-block"},[a("div",{staticClass:"modal-dialog modal-dialog-centered ui-draggable"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header ui-draggable-handle py-0"},[a("button",{staticClass:"close",attrs:{type:"button"},on:{click:e.closePopup}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),a("h4",{staticClass:"modal-title py-3",attrs:{name:"header"}},[e._v(" "+e._s(e.$t("CustomFieldDependency"))+" ")])]),a("div",{staticClass:"listing py-3 px-3"},[a("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit}})],1)])])])])},I=[],N={components:{DynamicForm:C["DynamicForm"]},props:{CustomFieldId:{type:Number,required:!0},DependencyData:{type:Array,required:!0}},data(){return{type:"dependonddl",CustomData:[],CustomArray:[],FormSchema:[{layoutType:"Single",Data:[{astype:"SelectField",label:this.$t("DependOn"),name:"DependOn",value:"",config:{options:[],onChange:this.GetCustomFieldDDL},validationRules:"required"}]},{layoutType:"Single",Data:[{astype:"MultiSelectField",label:this.$t("ShowWhen"),name:"ShowWhen",value:null,mode:"tag",placeholder:"",config:{options:[]},validationRules:"required"}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.closePopup}]}},created:function(){var e=this;e.GetCustomFieldDependent()},methods:{GetCustomFieldDependent(){var e=this,a=[],t="customFieldId="+e.CustomFieldId;l["a"].GetCustomFieldDependentListing(t).then(t=>{a=JSON.parse(t.data),null!=a.data&&a.data.forEach(a=>{e.FormSchema[0].Data[0].config.options.push({value:a.custom_field_id,name:a.name})})})},GetCustomFieldDDL(e,a,t){var i=this,o=[];i.CustomFieldId=t||e.target.value,i.FormSchema[1].Data[0].config.options=[];var s=`customFieldId=${i.CustomFieldId}&Type=${i.type}`;l["a"].GetCustomFieldShowWhenDDL(s).then(e=>{o=JSON.parse(e.data),null!=o&&o.forEach(e=>{i.FormSchema[1].Data[0].config.options.push({value:e.value,name:e.name})})})},closePopup(){var e=this;e.$parent.isShowDependencyFieldPopup=!1},onSubmit(e,a){}}},M=N,P=Object(f["a"])(M,E,I,!1,null,null,null),k=P.exports,w=function(){var e=this,a=e._self._c;return a("div",{staticClass:"my-popups"},[a("div",{staticClass:"modal d-block"},[a("div",{staticClass:"modal-dialog modal-dialog-centered",staticStyle:{"max-width":"900px !important"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header theme-primary partition-full"},[a("h4",{staticClass:"modal-title"},[e._v(e._s(e.$t("Custom_Layout_List")))]),a("button",{staticClass:"close",attrs:{type:"button"},on:{click:e.ClosePopup}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"listing py-3 px-3"},[a("div",{staticClass:"table-responsive table-fix-header",attrs:{id:"div_forListView"}},[a("table",{staticClass:"table table-bordered mt-0",staticStyle:{width:"100%"},attrs:{id:"tblRElatedProductsList"}},[a("thead",{staticClass:"thead-bg"},[a("tr",[a("th",[a("span",[e._v(e._s(e.$t("layout_name")))])])])]),a("tbody",e._l(e.CustomLayoutList,(function(t){return a("tr",{key:t},[a("td",[a("span",{staticClass:"text-overflow-dynamic-container"},[e._v(" "+e._s(t.layout_name)+" ")])])])})),0)])])])])])])])},x=[],O={props:{CustomLayoutList:{type:Array,required:!0}},data(){return{}},created:function(){},methods:{ClosePopup(){var e=this;e.$parent.isShowCustomLayoutList=!1}}},T=O,R=Object(f["a"])(T,w,x,!1,null,null,null),B=R.exports,q=function(){var e=this,a=e._self._c;return a("div",{staticClass:"my-popups"},[a("div",{staticClass:"modal d-block"},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[e._v(" "+e._s(e.$t("AddModule"))+" ")]),a("button",{staticClass:"close",attrs:{type:"button","data-original-title":"Close"},on:{click:function(a){return e.ClosePopup()}}},[a("em",{staticClass:"fa fa-times"})])]),a("div",{staticClass:"border p-3"},[e.DataLoaded?a("DynamicForm",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit}}):e._e(),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"py-2"},[a("span",{staticClass:"mandatory"},[e._v(" "+e._s(e.$t("MandatoryString"))+" ")])])])],1)])])])])},U=[],Y={components:{DynamicForm:C["DynamicForm"]},props:{CustomFieldId:{type:Number,required:!0}},data(){return{DataLoaded:!1,FormSchema:[{layoutType:"double",Data:[{astype:"SelectField",label:"Module Name",name:"ModuleName",value:"",placeholder:"",disabled:!1,config:{options:[],showAddIcon:!1,onChange:this.getSubModuleByModuleId},validationRules:"required"},{astype:"SelectField",label:"Sub Module Name",name:"SubModuleName",value:"",placeholder:"",disabled:!1,config:{options:[],showAddIcon:!1},validationRules:"required"}]}],buttons:[{type:"submit",class:"btn btn-info ",text:"<i class='fa fa-save pr-2'></i> Next"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i> Cancel",onClick:this.ClosePopup}]}},created:function(){var e=this;this.DataLoaded=!0,e.getModule()},methods:{getModule:function(){var e=this,a="moduleId=&userTypeId=1&requestFrom=&isCustomFieldEnable=1";l["a"].Modulenamedata(a).then(a=>{null!=a.data.Data&&(e.moduleNameList=a.data.Data,e.moduleNameList.forEach((a,t)=>{e.FormSchema[0].Data[0].config.options.push({value:a.module_id,name:a.module_name})}))})},getSubModuleByModuleId(e,a,t){var i=this;i.ddlModuleId=t||e.target.value,i.FormSchema[0].Data[1].config.options=[];var o=`moduleId=${i.ddlModuleId}&userTypeId=1&requestFrom=&isCustomFieldEnable=1`;l["a"].Modulenamedata(o).then(e=>{null!=e.data.Data&&(i.subModuleNameList=e.data.Data,i.subModuleNameList.forEach((e,a)=>{i.FormSchema[0].Data[1].config.options.push({value:e.sub_module_id,name:e.sub_module_name})}))})},ClosePopup(){var e=this;e.$parent.isShowModulePopup=!1},onSubmit(e,a){var t=this;t.$emit("openCustomField",e)}}},V=Y,j=Object(f["a"])(V,q,U,!1,null,null,null),H=j.exports,z={components:{OpenAddCustomFieldPopup:m["a"],CloneField:A,EditCustomField:g,DependencyField:k,CustomLayoutList:B,AddModuleAndSubModuelVue:H},data(){return{isLoading:!1,isShowEditCustomField:!1,isShowModulePopup:!1,PageSize:10,PageNumber:1,isPaged:1,TotalPages:0,SortBy:"",SortExp:"",PageSizeOption:null,CurrentPage:1,listheaderbuttons:c.buttons,leftSearchFields:c.leftsearchSchema,listActions:c.listActions,Headers:c.TableHeader,searchCondition:"",TotalRecords:0,CustomlayoutId:"",FieldsData:[],showCustomfieldPopup:!1,module_id:"",sub_module_id:"",newLanguageArray:[],LanguageArray:[],isShowCloneFieldPopup:!1,CustomFieldId:null,isShowDependencyFieldPopup:!1,CustomFieldArray:[],isShowCustomLayoutList:!1,CustomLayoutList:[],ModuleId:null,Sub_ModuleId:null,DependencyData:[]}},created:function(){var e=this;e.FetchData(),e.getLanguageList(),e.leftSearchFields[1].onChange=e.getClickEvent,c.bindleftCommonSearchdropdown(e,"CustomField","module")},methods:{viewCustomLayoutList(e,a){var t=this;if(null==a&&void 0==a)return t.isShowCustomLayoutList=!1;t.CustomLayoutList=e,t.isShowCustomLayoutList=!0},getClickEvent:function(){var e=this,a=this.leftSearchFields[1].value;c.bindleftCommonSearchdropdown(e,"CustomField","subModule",a)},async getLanguageList(){var e=this;l["a"].GetLanguageList().then(a=>{if("Success"==a.data.status){let t={lang_name:"",lang_id:""};e.newLanguageArray=a.data.result.DATA,e.newLanguageArray.forEach(a=>{t={lang_name:a.LANG_NAME,lang_id:a.LANG_ID},e.LanguageArray.push(t)})}})},FetchData:function(){var e=this;e.isLoading=!0;var a=`module_id=${e.module_id}&sub_module_id=${e.sub_module_id}&searchCondition=${e.searchCondition}&sortBy=${e.SortBy}&sortExp=${e.SortExp}&pageSize=${e.PageSize}&pageNumber=${e.PageNumber}`;l["a"].GetCustomUserDefinedCustomFieldListing(a).then((function(a){e.isLoading=!1,null!=JSON.parse(a.data)?(e.FieldsData=JSON.parse(a.data).data,e.FieldsData.forEach(e=>{e.isCheckBoxDisabled=!1,1==e.is_disabled?e.isCheckBoxDisabled=!0:e.isCheckBoxDisabled=!1}),e.Headers.forEach(a=>{a.settings=null,"name"==a.COLUMN_NAME&&(a.settings={isInSlot:!0,clickEvent:e.clickEventOfColumn}),"module_name"==a.COLUMN_NAME&&(a.settings={}),a.COLUMN_NAME,"length"==a.COLUMN_NAME&&(a.settings={}),"is_disabled"==a.COLUMN_NAME&&(a.settings={isInSlot:!0}),"total_layout"==a.COLUMN_NAME&&(a.settings={isInSlot:!0})}),null!=e.FieldsData?(e.TotalRecords=e.FieldsData[0].TOTAL_RECORDS,e.TotalPages=Math.ceil(e.TotalRecords/e.PageSize),e.CurrentPage=e.PageNumber,e.noRecord=!1):(e.noRecord=!0,e.FieldsData=[],e.TotalRecords=0,e.isLoading=!1)):(e.noRecord=!0,e.FieldsData=[],e.TotalRecords=0,e.isLoading=!1)})),e.isLoading=!1},renderActions:function(e){var a=this;let t=[];return a.listActions.forEach(e=>{let a={...e};switch(a.title){case"Preview":a.isVisible=!0;break;case"Edit":a.isVisible=!0;break;case"Dependency":a.isVisible=!0;break;case"Clone":a.isVisible=!0;break;case"Delete":a.isVisible=!0;break}t.push(a)}),t},leftCommonSearch:function(e){this.PageNumber=e.PageNumber,"undefined"!=typeof e.searchCondition?this.searchCondition=e.searchCondition:this.searchCondition="",this.FetchData()},actionButtonClick:function(e,a,t,i){var o=this;switch(e){case"OpenAddPAge":break;case"EditCustomField":o.EditCustomField(a);break;case"DependencyField":o.DependencyField(a);break;case"CloneField":o.AddCloneField(a);break;case"DeleteSingleRecord":o.commonDeleteData();break}},commonHeaderButtonClick:function(e){switch(e.callbackfunction){case"AddCustomField":this.AddCustomField(e);break;case"commonDeleteData":this.commonDeleteData();break}},AddCloneField:function(e){var a=this;return null!=e.custom_field_id||void 0!=e.custom_field_id?(a.CustomFieldId=e.custom_field_id,a.isShowCloneFieldPopup=!0):a.isShowCloneFieldPopup=!1},CloseAddCustomFieldPoup(){var e=this;e.showCustomfieldPopup=!1},clickEventOfColumn:function(e,a){a.COLUMN_NAME},EditCustomField:function(e){var a=this;return null!=e.custom_field_id||void 0!=e.custom_field_id?(a.CustomFieldArray=e,a.isShowEditCustomField=!0):a.isShowEditCustomField=!1},commonDeleteData:function(e){var a=this,t="";a.isLoading=!0,null==e?$(".chkItems:checkbox:checked").not("[id^='chkAll_0']").each((function(){t.length>0&&(t+=","),t+=$(this).val()})):t=e,null!=t?a.confirmR(a.$t("ConfirmDelete"),!0,a.$t("Delete")+"  "+a.$t("Report"),(function(){})):a.ShowAlert(a.$t("Selectanyrecordtodelete")),a.isLoading=!1},async DependencyField(e){var a=this;return null!=e.custom_field_id||void 0!=e.custom_field_id?(a.CustomFieldId=e.custom_field_id,await a.MappingLookupList(),a.isShowDependencyFieldPopup=!0):a.isShowDependencyFieldPopup=!1},async MappingLookupList(){var e=this;let a=[];var t="customFieldId="+e.CustomFieldId;await l["a"].GetCustomFieldShowWhenDDL(t).then(t=>{a=JSON.parse(t.data),e.DependencyData=a})},AddCustomField:function(e){var a=this;a.isShowModulePopup=!0},openCustomField(e){let a=this;a.ModuleId=e.ModuleName,a.Sub_ModuleId=e.SubModuleName,a.isShowModulePopup=!1,a.showCustomfieldPopup=!0},hidePopup(){var e=this;e.showCustomfieldPopup=!1},sortdata:function(e){var a="sort tb_headerSortDown";this.SortBy=e,e===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",a="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",a="sort tb_headerSortUp"):(this.SortExp="ASC",a="sort tb_headerSortDown")),this.FetchData(),$("#"+e+"  span:first-child").attr("class",a)},CloseAddPopup:function(){var e=this;e.showLayoutPopup=!1},pagerMethod:function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,this.FetchData()}}},G=z,J=(t("efca"),Object(f["a"])(G,i,o,!1,null,"696c6eb8",null));a["default"]=J.exports},e598:function(e,a,t){var i=t("29cf");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=t("499e").default;o("600b4708",i,!0,{sourceMap:!1,shadowMode:!1})},efca:function(e,a,t){"use strict";t("e598")}}]);
//# sourceMappingURL=chunk-a1f12634.js.map