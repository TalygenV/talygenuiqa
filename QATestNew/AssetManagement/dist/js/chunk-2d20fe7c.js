(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20fe7c"],{b62d:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("section",[e("loader",{attrs:{"is-visible":t.isLoading}}),e("tg-list",{attrs:{IsShowAction:!1,showCheckBox:!0,listType:[t.DetailListType],ModuleName:"Asset",PageSize:t.PageSize,SubModuleCode:"Timer",IdentityColumn:"group_id",HeaderText:t.$t("ProductGroupList"),ListData:t.GroupData,HeaderData:t.Headers,widgets:t.widgets,callbackfunction:t.FetchData,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords,SearchFields:t.leftSearchFields,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.FetchData,LegendArray:t.LegendArray,SortExp:t.SortExp,SortBy:t.SortBy,NorecordfoundText:t.$t("NoRecordfound")},on:{LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,ActionButtonClick:t.actionButtonClick,SortdataButtonClick:t.sortdata},scopedSlots:t._u([{key:"slotdata",fn:function({data:a}){return["STATUS_ID"==a.column.COLUMN_NAME?[e("td",{staticClass:"text-center single-action",attrs:{title:1001==a.row.STATUS_ID?"Active":"Inactive"}},[e("div",{staticClass:"cstm-drop-btn"},[e("select",{directives:[{name:"model",rawName:"v-model",value:a.row.STATUS_ID,expression:"data.row.STATUS_ID"}],class:1001==a.row.STATUS_ID?"ddlupdatestatus w-80 btn-success":"ddlupdatestatus w-80 btn-danger",on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(a.row,"STATUS_ID",e.target.multiple?o:o[0])},function(e){return t.DrpdownUpdateStatus(a.row.STATUS_ID,a.row.group_id)}]}},[e("option",{attrs:{value:"1001",selected:"selected"}},[t._v("Active")]),e("option",{attrs:{value:"1002"}},[t._v("Inactive")])])])])]:t._e(),"TotalItemsCount"==a.column.COLUMN_NAME?[e("span",{staticClass:"text-dark",attrs:{title:a.row.TotalItemsCount}},[e("i",{staticClass:"fa fa-briefcase",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"noti-circle noti-blue"},[t._v(t._s(a.row.TotalItemsCount))])])]:t._e(),"group_name"==a.column.COLUMN_NAME?[a.row.group_name?e("span",{staticClass:"text-dark"},[e("a",{attrs:{href:"javascript:;",id:a.row.group_id,title:a.row.group_name},on:{click:function(e){return t.EditGroup(a.row.group_id)}}},[e("em",{staticClass:"text-primary",attrs:{"aria-hidden":"true"}},[t._v(t._s(a.row.group_name))])])]):t._e()]:t._e()]}}])})],1)},s=[],i=(a("14d9"),a("1115"));let r=[{title:"Add New",iconClass:"fa fa-plus",callbackfunction:"AddNewGroup",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Delete",iconClass:"fa fa-trash",callbackfunction:"DeleteData",additionalClass:"",isdisabled:!0,isvisible:!0,id:"DeleteMultiple",checkPrivilege:!1,isEnabledOnSelectedRow:!0}],n=[{fieldName:"Group Name",fieldType:"text",fieldIcon:"fa-user",paramName:"search",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]}];var c={buttons:r,leftsearchSchema:n},d={data(){return{CategorytList:[],isLoading:!1,leftSearchFields:c.leftsearchSchema,listActions:c.listActions,Headers:[{COLUMN_NAME:"group_name",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("GroupName"),DISPLAY_ORDER:1,settings:{isInSlot:!0}},{COLUMN_NAME:"group_details",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("Detail"),DISPLAY_ORDER:2},{COLUMN_NAME:"device_name",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("DeviceName"),DISPLAY_ORDER:3},{COLUMN_NAME:"item_description",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("AssignedReader"),DISPLAY_ORDER:4},{COLUMN_NAME:"TotalItemsCount",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("TotalItems"),DISPLAY_ORDER:5,settings:{isInSlot:!0}},{COLUMN_NAME:"STATUS_ID",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("Status"),DISPLAY_ORDER:6,settings:{isInSlot:!0}}],noRecord:!0,statusIds:"",LocationId:"",SortBy:"",SortExp:"",IsDefault:"",GroupData:[],TotalRecords:0,PageNumber:1,PageSize:10,CurrentPage:1,TotalPages:0,StatusData:[],listheaderbuttons:c.buttons,DetailListType:"List"}},async created(){await this.GetPageSize(),this.FetchData()},methods:{async GetPageSize(){var t=this,e="key=DefaultPageSize";await i["a"].GetConfigurationValueForCompanyByKey(e).then(e=>{null!=e.data&&(t.PageSize=parseInt(e.data))})},async FetchData(){var t=this,e=`${this.searchCondition}&statusIds=${this.statusIds}&pageSize=${this.PageSize}&pageNum=${this.PageNumber}&sortBy=${this.SortBy}&sortExp=${this.SortExp}&IsDefault=${this.IsDefault}`;i["a"].GetItemGroupList(e).then(e=>{null!=e.data?e.data.data.length>0?(t.GroupData=e.data.data,t.TotalRecords=e.data.data[0].TOTALRECORDS,t.TotalPages=Math.ceil(t.TotalRecords/t.PageSize),t.CurrentPage=t.PageNumber,t.noRecord=!1,$("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),t.listheaderbuttons[1].isdisabled=!0):(t.GroupData=[],t.noRecord=!0,t.TotalRecords=0):(t.noRecord=!0,t.GroupData=[],t.TotalRecords=0),setTimeout((function(){t.CheckBoxBootstrap()}),100)}),vm.isLoading=!1},DrpdownUpdateStatus(t,e){var a=this;a.isLoading=!0;const o={ID:e,StatusId:t,IsFor:"TALYGEN_IOT_ITEMS_GROUP"};var s=JSON.stringify(o);a.confirmR(a.$t("Are you sure to update this record?"),!0,!1,(function(t){i["a"].CommonUpdateStatus(s).then(t=>{a.ShowAlert(a.$t("UpdateStatus"),"success","Alert"),a.FetchData(),a.isLoading=!1})})),a.FetchData(),a.isLoading=!1},Delete(){var t=this,e="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){e.length>0&&(e+=","),e+=$(this).val()})),e.length>0&&t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("Group_Item"),(function(){var a={ids:e,tblname:"Talygen_IoT_Items_Group",primarycolname:"group_id"};t.isLoading=!0;var o=JSON.stringify(a);i["a"].DeleteGroupList(o).then(e=>{e.data?($("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),t.listheaderbuttons[1].isdisabled=!0,t.ShowAlert(t.$t("DeletedSuccess",[t.$t("Group_Item")]),"Success",!0,t.$t("Alert")),t.FetchData()):t.ShowAlert(t.$t("DeletedError",[t.$t("Group_Item")]),"failure",!0,t.$t("Alert")),t.isLoading=!1})}))},actionButtonClick(t,e){},renderActions(t){},pagerMethod:function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,this.FetchData()},commonHeaderButtonClick(t){switch(t.callbackfunction){case"DeleteData":this.Delete();break;case"AddNewGroup":this.AddNewGroup();break}},AddNewGroup:function(){this.$router.push({name:"ManageGroup",params:{id:0}})},EditGroup:function(t){this.$router.push({name:"ManageGroup",params:{id:t}})},leftCommonSearch:function(t){this.PageNumber=t.PageNumber,this.isPaged=1,"undefined"!=typeof t.searchCondition?this.searchCondition=t.searchConditionJson:this.searchCondition="",this.FetchData()},sortdata:function(t){var e="sort tb_headerSortDown";this.SortBy=t,t===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",e="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",e="sort tb_headerSortUp"):(this.SortExp="ASC",e="sort tb_headerSortDown")),this.FetchData(),$("#"+t+"  span:first-child").attr("class",e)}}},l=d,u=a("2877"),h=Object(u["a"])(l,o,s,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d20fe7c.js.map