(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4448fdba"],{"1d8b":function(e,a,t){"use strict";var i=function(){var e=this,a=e._self._c;return a("div",[a("div",{staticClass:"my-popups"},[a("div",{staticClass:"modal d-block"},[a("div",{staticClass:"modal-dialog modal-dialog-centered ui-draggable"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header ui-draggable-handle py-0"},[a("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(a){return e.CloseCustomFieldsPopup()}}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),a("h4",{staticClass:"modal-title py-3",attrs:{name:"header"}},[e._v(" "+e._s(e.$t("AddCustomFields"))+" ")])]),a("div",{staticClass:"container-fluid padding-t_10"},[a("div",{staticClass:"left-menu-tab new_tab"},[e._m(0),a("ul",{staticClass:"nav nav-pills flex-column left-tab mt-2 responivecustomtab",attrs:{id:"upper",role:"tablist"}},e._l(e.systemFieldList,(function(t){return a("li",{key:t,staticClass:"nav-item"},[a("a",{staticClass:"nav-link left-menu",class:{active:e.selectedModule===t},attrs:{id:"leftmenu"},on:{click:function(a){return e.activateTab(t)}}},[a("i",{class:t.class_name,attrs:{id:"itemdata"}}),e._v("  "+e._s(t.display_name)+" ")])])})),0)]),a("div",{staticClass:"right-content"},[a("div",{staticClass:"col-lg-12 mb-0 float-left p-0"},[a("div",{staticClass:"heading-border"},[a("h5",{staticClass:"h5"},[a("span",{staticClass:"spngropuname"},[e._v(" "+e._s(e.$t("Forminfo"))+" ")])])])]),a("br"),a("br"),a("Form",{ref:"Propertiesform1"},[e.showFieldPropPopup?a("div",{staticClass:"listing py-3 px-3"},[a("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit}})],1):e._e()])],1)])])])])])])},l=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"col-md-12 p-0"},[a("div",{staticClass:"theme-primary partition"},[a("span",{staticClass:"p-name text-white"},[e._v("User Defined Fields:")])])])}],s=(t("14d9"),t("9769")),n=t("240d"),d={props:{LanguageArrayData:{type:Array,required:!0},Sub_ModuleId:{type:String,required:!0},ModuleId:{type:String,required:!0}},components:{DataService:s["a"],DynamicForm:n["DynamicForm"]},data(){return{drag:!1,dropfieldslist:[],dropfields:[],systemFieldsModel:"",OldIdForProp:"",systemFieldList:[],showFieldPropPopup:!1,FieldName:null,DataTypeId:"",iSLayoutControl:!1,divManageLayoutProp:!1,LanguageArray:[],FieldPropertyData:[],oldFieldPropertyData:[],finalJsonData:[],controlOnStart:!0,bindEditedDataProperty:[],disabled:!1,errorMessage:"",classicon:"",selectedModule:null,langCulture:[],myObj:[],lenghtOfLanguageDiv:null,displayNameData:"",customfieldtypeId:null,FormSchema:[{layoutType:"double",Data:[{astype:"TextField",label:"Label",name:"Label",value:this.FieldName,placeholder:"",visibility:!0,disabled:!1,validationRules:{required:!0},config:{onKeyUp:this.Bindingwithdisplayname}},{astype:"TextAreaField",label:"Pick List Option",name:"PickListOption",value:"",visibility:!1,placeholder:"Enter comma seprated value ",validationRules:{required:!0}},{astype:"NumericField",label:"Length",name:"Length",value:"",placeholder:"Enter Length",visibility:!0,validationRules:{required:!0},config:{onKeyUp:this.LengthLimit}},{astype:"NumericField",label:"Decimal Places",name:"DecimalPlaces",value:"",placeholder:"",visibility:!1,validationRules:{required:!0}},{astype:"CheckBoxField",label:"Mark as Required",name:"MarkasRequired",value:"",placeholder:"",visibility:!0,config:{options:[{value:"1",name:""}]}},{astype:"TextAreaField",label:"Description",name:"Description",value:"",placeholder:"Enter Description",visibility:!0,validationRules:"",config:{rows:3}}]},{layoutType:"double",Data:[{astype:"SelectField",label:"Language",name:"Language",value:"",placeholder:"",chkIndex:0,visibility:!1,config:{options:[]},validationRules:"required"},{astype:"TextField",label:"Display Name",name:"DisplayName",value:"",placeholder:"Enter Display Name",chktxtIndex:0,visibility:!1,validationRules:{required:!0,max:250},config:{showAddIcon:!0,onAddButtonClick:this.AddMultiLanguage}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.CloseCustomFieldsPopup}]}},updated(){var e=this;e.BindLangDDL()},created:function(){var e=this;e.ShowHideFields(),e.GetCustomFieldDataTypes(),e.BindLangDDL()},methods:{LengthLimit(){var e=this;e.FormSchema[0].Data[2].value>250&&(e.FormSchema[0].Data[2].value=250)},isLetter(){var e=this;e.FormSchema[1].Data.forEach(e=>{"Display Name"==e.label&&(e.value=e.value.replace(/[^a-zA-Z]/g,""))})},lableDisplaynamebinding(e){var a=this;a.FormSchema[1].Data[1].value=e},BindLangDDL(e){var a=this;void 0==e?a.LanguageArray.forEach((e,t)=>{a.FormSchema[1].Data[0].config.options.push({value:e.lang_id,name:e.lang_name})}):a.LanguageArray.forEach((t,i)=>{"undefined"!=typeof e&&null!=e&&a.FormSchema[1].Data.forEach((e,i)=>{i%2==0&&a.FormSchema[1].Data[i].config.options.push({value:t.lang_id,name:t.lang_name})})})},RemoveFile:function(e,a){var t=this,i=t.FormSchema[1].Data.findIndex(e=>e.chktxtIndex===a.chktxtIndex),l=i-1;i>-1&&t.FormSchema[1].Data.splice(i,1),l>-1&&t.FormSchema[1].Data.splice(l,1)},AddMultiLanguage(){var e=this;e.FormSchema[1].Data.push({astype:"SelectField",label:"Language",name:"Language"+e.FormSchema[1].Data.length,value:"",placeholder:"",chkIndex:e.FormSchema[1].Data.length,config:{options:[]},validationRules:"required"},{astype:"TextField",label:"Display Name",name:"DisplayName"+e.FormSchema[1].Data.length,value:"",placeholder:"",chktxtIndex:e.FormSchema[1].Data.length,validationRules:{required:!0,max:250},config:{showAddIcon:!0,onaddIconBackground:"bg-danger",onAddButtonClick:e.RemoveFile,addIcon:"fa fa-trash",onKeyUp:this.isLetter}}),e.FormSchema[1].Data.forEach(a=>{e.Lblname=a.name}),e.BindLangDDL(e.Lblname)},ShowHideFields(){var e=this;1==e.IsSystemGeneratedField?(e.FormSchema[0].Data[1].visibility=!1,e.FormSchema[0].Data[0].disabled=!0,e.FormSchema[0].Data[4].disabled=!0,e.FormSchema[0].Data[2].visibility=!1,e.FormSchema[0].Data[3].visibility=!1,e.FormSchema[0].Data[5].visibility=!1,e.FormSchema[1].Data[0].visibility=!1,e.FormSchema[1].Data[1].visibility=!1):(e.FormSchema[1].Data[0].visibility=!0,e.FormSchema[1].Data[1].visibility=!0,"Decimal"==e.FieldName&&(e.FormSchema[0].Data[3].visibility=!0,e.FormSchema[0].Data[2].visibility=!1),"Select List"!=e.FieldName&&"Checkbox"!=e.FieldName&&"Radio"!=e.FieldName||(e.FormSchema[0].Data[1].visibility=!0,e.FormSchema[0].Data[2].visibility=!1),"Date"==e.FieldName&&(e.FormSchema[0].Data[1].visibility=!1,e.FormSchema[0].Data[3].visibility=!1,e.FormSchema[0].Data[2].visibility=!1))},resetform(){var e=this;e.FormSchema[0].Data[0].value="",e.FormSchema[0].Data[1].value="",e.FormSchema[0].Data[2].value="",e.FormSchema[0].Data[3].value="",e.FormSchema[0].Data[4].value="",e.FormSchema[0].Data[5].value="",e.FormSchema[1].Data[0].value="",e.FormSchema[1].Data[1].value=""},activateTab(e){var a=this;a.$refs.Propertiesform1.reset(),a.BindLangDDL(),a.resetform(),a.FormSchema[0].Data[0].value=e.Data_type_name,"Text"==e.Data_type_name?(a.FormSchema[0].Data[3].visibility=!1,a.FormSchema[0].Data[1].visibility=!1,a.FormSchema[0].Data[2].visibility=!0):"Decimal"==e.Data_type_name?(a.FormSchema[0].Data[3].visibility=!0,a.FormSchema[0].Data[2].visibility=!1):"Select List"==e.Data_type_name||"Checkbox"==e.Data_type_name||"Radio"==e.Data_type_name?(a.FormSchema[0].Data[1].visibility=!0,a.FormSchema[0].Data[2].visibility=!1):"Date"==e.Data_type_name?(a.FormSchema[0].Data[1].visibility=!1,a.FormSchema[0].Data[2].visibility=!1,a.FormSchema[0].Data[3].visibility=!1):"Phone"==e.Data_type_name||"Email"==e.Data_type_name?(a.FormSchema[0].Data[2].visibility=!0,a.FormSchema[0].Data[1].visibility=!1,a.FormSchema[0].Data[3].visibility=!1,a.FormSchema[0].Data[1].visibility=!1):"Url"!=e.Data_type_name&&"Text Area"!=e.Data_type_name||(a.FormSchema[0].Data[1].visibility=!1,a.FormSchema[0].Data[3].visibility=!1,a.FormSchema[0].Data[1].visibility=!1,a.FormSchema[0].Data[2].visibility=!0),a.DataTypeId=e.Data_type_id,a.FieldName=e.Data_type_name,a.iSLayoutControl=!0,a.divManageLayoutProp=!1,a.LanguageArray=a.LanguageArrayData,a.oldFieldPropertyData=a.FieldPropertyData,a.showFieldPropPopup=!0,a.selectedModule=e,a.lableDisplaynamebinding(e.Data_type_name)},CloseCustomFieldsPopup(){this.$parent.hidePopup()},endDrag(e,a){},AllowOneElementdrop(){var e=this;null==e.dropfields&&(e.disabled=!1),null!=e.dropfields?e.disabled=!0:e.disabled=!1},clone({name:e}){return{name:e}},pullFunction(){return!this.controlOnStart||"clone"},closeAddCustomFieldPopup(){var e=this;e.$parent.closeAddCustomField()},RemoveField:function(e){var a=this;a.confirmR(a.$t("ConfirmDelete"),!0,a.$t("Delete")+"  "+a.$t("Report"),(function(){var t=a.dropfieldslist.findIndex(a=>a.Data_type_id===e);t>-1&&(a.systemFieldList.push(a.dropfieldslist[t]),a.dropfieldslist.splice(t,1),a.FieldPropertyData=[],""==a.dropfields&&(a.disabled=!1))}))},onSubmit(e,a){var t=this,i="",l=this.FormSchema[1].Data.length;this.FormSchema[1].Data.forEach((e,a)=>{"TextField"!=e.astype?i+=e.value+",":i+=l-1!=a?e.value+"^":e.value});let n={CUSTOM_FIELD_ID:0,MODULE_ID:t.ModuleId,SUB_MODULE_ID:t.Sub_ModuleId,NAME:e.Label,DISPLAY_NAME:e.DisplayName,DESCRIPTION:e.Description,PICKLIST_OPTION:e.PickListOption,TYPE_ID:t.DataTypeId,LENGTH:e.Length,IS_REQUIRED:"undefined"==e.MarkasRequired[0]?0:1,STATUSID:1001,DECIMAL_PLACES:e.DecimalPlaces,LOC_VALUE:i,FORM_FIELD_VISIBILITY:"YES",LIST_FIELD_VISIBILITY:"YES"};t.finalJsonData.push(n);var d="jsonString="+JSON.stringify(t.finalJsonData);s["a"].SaveUpdateCustomField(d).then((function(e){var a=JSON.parse(e.data);1==a.STATUS_CODE?(t.ShowAlert(t.$t("CustomFieldSuccess",[t.$t("Field")]),"success",!0,t.$t("Alert")),t.$emit("GetCustomNewField",t.finalJsonData),t.CloseCustomFieldsPopup()):3==a.STATUS_CODE?t.ShowAlert(t.$t("CustomFieldExists"),"danger",!0,t.$t("Alert")):(t.ShowAlert(t.$t("CustomFieldUpdate"),"success",!0,t.$t("Alert")),t.$emit("GetCustomNewField",t.finalJsonData),t.CloseCustomFieldsPopup())}))},GetCustomFieldDataTypes(){var e=this;s["a"].GetCustomFieldDataType().then((function(a){null!=JSON.parse(a.data)&&(e.systemFieldList=JSON.parse(a.data).data,e.systemFieldList.forEach(e=>{}))}))},Bindingwithdisplayname(e){var a=this;a.FormSchema[1].Data[1].value=e.target._value}}},o=d,r=(t("57f3"),t("2877")),c=Object(r["a"])(o,i,l,!1,null,null,null);a["a"]=c.exports},"213b":function(e,a,t){"use strict";var i=function(){var e=this,a=e._self._c;return a("div",{staticClass:"my-popups"},[a("div",{staticClass:"modal d-block"},[a("div",{staticClass:"modal-dialog modal-dialog-centered ui-draggable"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header ui-draggable-handle py-0"},[a("button",{staticClass:"close",attrs:{type:"button"},on:{click:e.closePopup}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),a("h4",{staticClass:"modal-title py-3",attrs:{name:"header"}},[e._v(" "+e._s(e.$t("CustomFieldDependency"))+" "+e._s(e.displayname)+" ")])]),a("div",{staticClass:"listing py-3 px-3"},[a("dynamic-form",{ref:"DependencyForm",attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit},scopedSlots:e._u([e.DependencyData?{key:"tgslot-ProductTypeCode",fn:function({data:t}){return[a("div",{staticClass:"col-lg-12 p-0 workdiary_sanp_row border p-3"},[a("div",{staticClass:"timeline-panel row"},[a("div",{staticClass:"col-md-6"},[a("ul",{staticClass:"list-group"},e._l(e.GetMultiSelectValue,(function(t,i){return a("li",{key:i,staticClass:"list-group-item",class:{sel:e.selectedItem&&e.selectedItem.name===t.name},on:{click:function(a){return e.showWhenSelectItem(a,t)}}},[e._v(" "+e._s(t.name)+" ")])})),0)]),a("div",{staticClass:"col-md-6 border-left pl-5"},[a("div",{staticClass:"scroldv"},[e.DependencyData?a("div",{staticClass:"d-flex"},[a("h6",{staticClass:"col-md-6"},[e._v("values")]),e._v(" "),a("h6",{staticClass:"col-md-6"},[e._v("Isdefault")])]):e._e(),a("ul",{staticClass:"list-group",attrs:{id:"rightList"}},e._l(e.Dependencyvalues,(function(t,i){return a("li",{staticClass:"list-group-item d-flex"},[a("label",{staticClass:"form-check form-check-inline col-md-6"},[a("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[a("input",{staticClass:"chkItems custom-control-input",attrs:{disabled:e.checkboxdisabled,id:t.value,type:"checkbox"},domProps:{checked:e.checkIfselected(t.value)},on:{change:function(a){return e.checkedSelected(a,t)}}}),a("label",{staticClass:"custom-control-label",attrs:{for:t.value}},[e._v(e._s(t.name))]),a("input",{attrs:{type:"hidden"},domProps:{value:t.value}})])]),a("label",{staticClass:"col-md-6"},[a("div",{staticClass:"customslidercheck"},[a("input",{class:{"form-check-input":!0},attrs:{id:"isTrueCheckDefault",name:"taggele",id:t.value+"_id",type:"checkbox",disabled:0==e.checkIfselected(t.value)},domProps:{checked:e.IsDefaultValue(t.value)},on:{change:function(a){return e.toggleSelected(a,t)}}}),a("span",{staticClass:"slider round"},[a("span",{staticClass:"slider-yes"},[e._v("Yes")]),a("span",{staticClass:"slider-no"},[e._v("No")])])])])])})),0)])])])])]}}:null],null,!0)})],1)])])])])},l=[],s=(t("14d9"),t("240d")),n=t("9769"),d={components:{DynamicForm:s["DynamicForm"]},props:{CustomFieldId:{type:Number,required:!0},DependencyData:{type:Array,required:!0},CustomLayoutId:{type:Number,required:!0},Dependencyvalues:{type:Array,required:!0},displayname:{type:String,required:!0},CustomLayout_Id:{type:Number,required:!0}},data(){return{dependentId:null,selectedItem:null,dependentOnDdlId:"",type:"dependonddl",CustomData:[],dependentListArray:[],CustomArray:[],SelectedCustomFieldName:null,GetMultiSelectValue:[],GetEditDependencyData:[],showWhenListSelectedItem:"",TagsSelectedArray:[],DepartmentData:[],FormSchema:[{layoutType:"Single",Data:[{astype:"SelectField",label:this.$t("DependOn"),name:"DependOn",value:"",visibility:!0,config:{options:[],onChange:this.GetCustomFieldDDL},validationRules:"required"}]},{layoutType:"Single",Data:[{astype:"MultiSelectField",label:this.$t("ShowWhen"),name:"ShowWhen",value:"",mode:"tag",placeholder:"",visibility:!0,config:{options:[],onChange:this.GetMultiValues,onRemove:this.removeRecord}}]},{layoutType:"Single",Data:[{astype:"SlotField",label:"",name:"ProductTypeCode",value:"",placeholder:"",visibility:!0,config:{options:[]}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.closePopup}],checkboxdisabled:!0,isDefault:""}},created:function(){var e=this;e.SelectedCustomFieldName=e.$parent.customFieldName,e.GetCustomFieldDependent(),e.editDependency(),e.Dependencyvalues.length<1&&(e.FormSchema[2].Data[0].visibility=!1,e.FormSchema[1].Data[0].visibility=!1)},methods:{IsDefaultValue:function(e){let a=this,t=!1;if(null!=a.selectedItem&&"undefined"!=typeof a.selectedItem.value){let t=a.dependentListArray.filter(e=>e.value==a.selectedItem.value);if(t.length>0&&t[0].isDefault==e)return!0}return t},checkIfselected:function(e){let a=this,t=!1;if(null!=a.selectedItem&&"undefined"!=typeof a.selectedItem.value){let t=a.dependentListArray.filter(e=>e.value==a.selectedItem.value);if(t.length>0&&t[0].dependent.includes(e))return!0}return t},GetCustomFieldDependent(){var e=this;e.FormSchema[0].Data[0].config.options=[],e.DependencyData.forEach(a=>{e.FormSchema[0].Data[0].config.options.push({value:a.custom_field_id,name:a.display_name?a.display_name:e.$t(a.name)})})},async GetCustomFieldDDL(e,a,t){var i=this,l=[];i.dependentOnDdlId=t||e.target.value,i.FormSchema[1].Data[0].config.options=[];var s=`customFieldId=${i.dependentOnDdlId}&Type=${i.type}`;await n["a"].GetCustomFieldShowWhenDDL(s).then(a=>{l=JSON.parse(a.data),null!=l?(i.Dependencyvalues.length>1?(i.DependencyData=!0,i.FormSchema[2].Data[0].visibility=!0,i.FormSchema[1].Data[0].visibility=!0):(i.DependencyData=!1,i.FormSchema[2].Data[0].visibility=!1,i.FormSchema[1].Data[0].visibility=!1),l.forEach(e=>{i.FormSchema[1].Data[0].config.options.push({value:e.value,name:e.name})})):(i.DependencyData=!1,i.FormSchema[2].Data[0].visibility=!1,i.FormSchema[1].Data[0].visibility=!1),""!=e&&e.target.value==i.dependentId&&i.editDependency(),i.TagsSelectedArray=[],i.GetMultiSelectValue=[],i.FormSchema[1].Data[0].value=[],$("#rightList input:checkbox").each((function(e,a){$(a).prop("checked",!1)}))})},closePopup(){var e=this;e.$parent.isShowDependencyFieldPopup=!1,e.$parent.popupcloseforsystemfields()},showWhenSelectItem(e,a){var t=this,i=[];t.checkboxdisabled=!1,t.GetEditDependencyData.value_mapping&&(i=JSON.parse(t.GetEditDependencyData.value_mapping));var l=document.getElementsByClassName("chkItems custom-control-input");document.getElementsByClassName("form-check-input");i.forEach((e,t)=>{e.value==a.value&&e.dependent.forEach(e=>{for(var a=0;a<l.length;a++)l[a].id==e&&(l[a].checked=!0)})}),t.selectedItem=a},toggleSelected(e,a){var t=this;let i=0;1==e.target.checked&&(i=a.value);let l=this;null!=l.selectedItem&&"undefined"!=typeof l.selectedItem.value&&l.dependentListArray.forEach((function(e){e.value==l.selectedItem.value&&(e.isDefault=i)})),t.$refs.DependencyForm.UpdateKeyValue()},checkedSelected(e,a){var t=this,i=document.getElementById(a.value+"_id");e.target.checked?i&&(i.disabled=!1):i&&(i.disabled=!0,i.checked=!1),t.dependentListArray.forEach((e,i)=>{t.selectedItem.value===e.value&&(t.dependentListArray[i].dependent.push(a.value),t.dependentListArray[i].isDefault="")})},removeRecord(e,a,t){var i=this;let l=i.GetMultiSelectValue.findIndex(a=>a.value===e.value);-1!=l&&(i.GetMultiSelectValue.splice(l,1),i.dependentListArray.splice(l,1))},GetMultiValues(){var e=this,a=e.FormSchema[1].Data[0].config.options.filter(e=>e.name==event.target.textContent)[0];a.isSel=!1,e.GetMultiSelectValue.push(a),e.dependentListArray.push({value:a.value,dependent:[]})},onSubmit(e,a){var t=this,i=e.DependOn,l=[],s=(JSON.stringify(Array.prototype.map.call(e.ShowWhen,(function(e){l.push(e.value)}))),{depend_on:e.DependOn,value:l}),d=`customFieldDependencyId=&customlayoutId=${t.CustomLayout_Id}&customFieldId=${t.CustomFieldId}&dependentOn=${i}&showWhen=${JSON.stringify(s)}&valueMapping=${JSON.stringify(t.dependentListArray)}`;n["a"].ManageCustomFieldDependency(d).then(e=>{"1"==e.data?(t.SetDependField(i),t.ShowAlert(t.$t("DependentSuccess"),"success",!0,t.$t("Alert")),t.closePopup()):"2"==e.data&&(t.SetDependField(i),t.ShowAlert(t.$t("UpdatedSuccessfully"),"success",!0,t.$t("Alert")),t.closePopup())})},SetDependField(e){var a=this;a.$parent.LayoutList.forEach(t=>{t.FieldData.forEach(t=>{t.display_name==a.displayname&&(t.has_dependent_field=e)})})},async editDependency(){var e,a,t=this;t.GetEditDependencyData=[];var i=[];t.TagsSelectedArray=[],t.GetMultiSelectValue=[],t.FormSchema[1].Data[0].value=[];var l=`CustomLayoutId=${t.CustomLayout_Id}&customFieldId=${t.$parent.CustomFieldId}&dependentOnId=`;if(await n["a"].GetCustomFieldId(l).then(e=>{i=JSON.parse(e.data),i.data.length>0&&(t.GetEditDependencyData=i.data[0])}),t.dependentId=null!==(e=null===(a=i.data[0])||void 0===a?void 0:a.dependent_on)&&void 0!==e?e:null,null!=t.dependentId){t.FormSchema[0].Data[0].value=t.dependentId,await t.GetCustomFieldDDL("","",t.dependentId);const e=JSON.parse(t.GetEditDependencyData.show_when).value,a=t.FormSchema[1].Data[0].config.options.filter(a=>e.includes(a.value));return t.GetMultiSelectValue=a,t.dependentListArray=JSON.parse(t.GetEditDependencyData.value_mapping),t.TagsSelectedArray=a.map(e=>({label:e.name,value:e.value})),void(t.FormSchema[1].Data[0].value=t.TagsSelectedArray)}}}},o=d,r=(t("fdcdc"),t("2877")),c=Object(r["a"])(o,i,l,!1,null,"5abd984d",null);a["a"]=c.exports},"57f3":function(e,a,t){"use strict";t("c623")},7469:function(e,a,t){var i=t("24fb");a=i(!1),a.push([e.i,".makepopleft#mainDivProp .dropdown-menu{inset:unset!important;transform:unset!important;right:0!important}",""]),e.exports=a},"99a7":function(e,a,t){var i=t("24fb");a=i(!1),a.push([e.i,".scroldv[data-v-5abd984d]{max-height:490px;overflow-y:scroll}.sel[data-v-5abd984d]{background-color:#41b883;color:#fff}.timeline-panel li[data-v-5abd984d]{max-width:95%;min-width:95%;margin-bottom:0}.custom-checkbox .custom-control-label[data-v-5abd984d]{margin-top:5px;margin-left:0;padding-top:3px;padding-left:5px}.custom-control-input[data-v-5abd984d]{z-index:1;opacity:0;top:5px}.customslidercheck .form-check-input[data-v-5abd984d]{visibility:hidden}.customslidercheck[data-v-5abd984d]{max-width:68px;width:100%;position:relative;height:24px}",""]),e.exports=a},c623:function(e,a,t){var i=t("7469");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var l=t("499e").default;l("4a37806b",i,!0,{sourceMap:!1,shadowMode:!1})},de97:function(e,a,t){var i=t("99a7");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var l=t("499e").default;l("18e9b34a",i,!0,{sourceMap:!1,shadowMode:!1})},fdcdc:function(e,a,t){"use strict";t("de97")}}]);
//# sourceMappingURL=chunk-4448fdba.js.map