(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc835"],{"4df5":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e._self._c;return t("section",[t("div",{staticClass:"theme-primary partition-full"},[t("span",{staticClass:"p-name text-white"},[e._v("Zone Management")]),t("div",{staticClass:"clear showclear"}),t("div",{staticClass:"p-actions legends_topbar float-right"},[t("div",{staticClass:"p-action-map collapse_map"},[t("a",{staticClass:"e-c-map p-action-btn text-white align-items-center d-flex",attrs:{href:"javascript:;"},on:{click:e.ShowHideMap}},[t("i",{staticClass:"fa fa-angle-double-up pr-2",attrs:{id:"icnToggleMap"}}),t("span",{attrs:{id:"spnToggleMap"}},[e._v(e._s(e.mapHeaderText))])])]),t("div",{staticClass:"p-action-map"},[e.isShowCreatePolygon?t("a",{staticClass:"p-action-btn text-white align-items-center d-flex",attrs:{href:"javascript:;"},on:{click:e.CreatePolygon}},[t("i",{staticClass:"fa fa-map-marker pr-2"}),t("span",[e._v("Create Polygon")])]):e._e()])])]),e.isShowMap?t("ManageMap",{key:e.componentKey,staticClass:"row",attrs:{mapType:"Google",editZone:e.editZone,mapWidth:"100%",mapHeight:"780px",mapContainer:"zoneMapDiv",latLng:e.latLng,Data:e.mapObj,config:e.config,zoneId:e.zoneId},on:{AddZonePopUp:e.AddZonePopUp,FetchData:e.FetchData,GetAddress:e.GetAddress}}):e._e(),t("tg-list",{directives:[{name:"show",rawName:"v-show",value:e.IsZoneView,expression:"IsZoneView"}],attrs:{IsShowAction:!0,ModuleName:"Ticketing",SubModuleCode:"",IdentityColumn:"ZONE_ID",LegendArray:[],RenderRowActionMethod:e.renderActions,widgets:[],listType:["List"],ListData:e.ZoneList,HeaderData:e.Headers,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,SearchFields:e.leftSearchFields,ListDataCallBackFunction:e.FetchData,showCheckBox:!0,SortExp:e.SortExp,SortBy:e.SortBy,NorecordfoundText:e.$t("NoRecordfound")},on:{ActionButtonClick:e.actionButtonClick,LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,SortdataButtonClick:e.sortdata},scopedSlots:e._u([{key:"slotdata",fn:function({data:a}){return["STATUS_ID"==a.column.COLUMN_NAME?[t("a",{staticClass:"inactive-disabled"},["Active"==a.row.STATUS_ID?t("span",{class:e.getStatusClassList(a.row.STATUS_ID,"status_id")},[e._v(" "+e._s(a.row[a.column.COLUMN_NAME])+" ")]):e._e()])]:e._e(),"CREATED_AT"==a.column.COLUMN_NAME?[t("span",[e._v(" "+e._s(e.$options.filters.formatDate(a.row.CREATED_AT))+" ")])]:e._e()]}}])}),e.editZone?t("modalSaveZoneVue",{attrs:{zoneEditData:e.zoneEditData},on:{Close:e.Close,SaveZoneData:e.SaveZoneData}}):e._e()],1)},s=[],i=(a("14d9"),a("88a7"),a("271a"),a("5494"),a("9769"));let n=[{id:"Import",title:"Import",iconClass:"fa fa-download",callbackfunction:"",isdisabled:!0,isvisible:!1},{title:"Add Zone",iconClass:"fa fa-plus",callbackfunction:"openaddZone",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0,id:"AddZone"},{id:"DeleteMultiple",title:"Delete",iconClass:"fa-trash-o",isEnabledOnSelectedRow:!0,callbackfunction:"commonDeleteData",isdisabled:!0,isvisible:!0,isEnabledOnSelectedRow:!0}],r=[{fieldName:"Zone Name",fieldType:"text",fieldIcon:"fa fa-map-marker",fieldSearchConditionName:["search"],paramName:"search",isSearch:!1,value:"",listOptions:[]},{fieldName:"Zone Type",fieldType:"dropdown",fieldIcon:"fa fa-map-marker",fieldSearchConditionName:["searchzonetype"],paramName:"searchzonetype",isSearch:!1,value:"",listOptions:[{value:"",name:"Zone Type"},{value:"high_profile",name:"High_Profile"},{value:"Locator",name:"Locator"},{value:"LocatorAfterHours",name:"Locator After Hours"},{value:"Yard",name:"Yard"}]}];let c=[{title:"View",href:"javascript:void(0)",icon:"fa fa-eye action-icon",callbackfunction:"View",additionalSpan:""},{title:"Edit",href:"javascript:void(0)",icon:"fa fa-pencil action-icon",callbackfunction:"Edit",additionalSpan:""}];var l={buttons:n,leftsearchSchema:r,listActions:c},d=a("33e4"),p=a("3975"),h=a("e222"),u={components:{ManageMap:d["a"],AddZone:p["a"],modalSaveZoneVue:h["a"]},data(){return{Headers:[{COLUMN_NAME:"ZONE_NAME",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Name",DISPLAY_ORDER:1},{COLUMN_NAME:"NUMBER_OF_SHAPE",DATA_TYPE:"string",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Number of Shapes",DISPLAY_ORDER:2},{COLUMN_NAME:"ZONE_TYPE",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Zone Type",DISPLAY_ORDER:3},{COLUMN_NAME:"CREATED_BY",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Created by",DISPLAY_ORDER:3},{COLUMN_NAME:"CREATED_AT",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Created at",DISPLAY_ORDER:3},{COLUMN_NAME:"STATUS_ID",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"status",DISPLAY_ORDER:4}],listheaderbuttons:l.buttons,leftSearchFields:l.leftsearchSchema,isShowCreatePolygon:!1,IsZoneView:!0,listActions:l.listActions,ZoneList:[],UserListLevelOne:[],UserListLevelTwo:[],alllevelselectedusers:[],SortBy:"",SortExp:"",PageSize:10,PageNumber:1,CurrentPage:1,TotalPages:0,GroupStart:1,GroupEnd:3,NoRecord:!0,TotalRecords:0,SearchCondition:"",SearchTypeCondition:"",SearchConditionByName:"",SearchType:"",MapCoordArray:[],txtZoneName:"",txtZoneDesc:"",PolygonType:"Polygon",ZoneType:"Locator",isSending:!1,userid:[],GeoJsonFile:"",GeoJsonData:"",ViewZoneById:"",ItemSelected:null,ZoneId:0,inputs:[],YardTrueFalse:!1,selectoptions:"",SelectedItem:null,IsSearchTrueOrFalse:!1,ShowMapData:!1,ShowCreatePolygonText:!1,ISFSMLOCATING:!1,StrokeWidthValue:"2",StrokeOpacityValue:"0.0",FillOpacityValue:"0.5",UserDataListing:[],searchzonetype:"",search:"",isShowMap:!1,componentKey:0,zoneId:0,mapHeaderText:"Expand map",mapObj:[],showAddZone:!1,zoneData:[],editZone:!1,zoneEditData:[],config:{isShowSearchBox:!0,isShowCurrentLocation:!0}}},created:async function(){this.user_id=this.GetUserInfo.ID,this.user_type=this.GetUserInfo.UserType,this.companyId=this.GetUserInfo.CompanyId,await this.FetchData(),await l.ShowSearchData(),this.ShowHideMap()},methods:{ShowHideMap:function(){this.mapObj=[];var e=$("#icnToggleMap");0==this.isShowMap?(this.isShowMap=!0,this.isShowCreatePolygon=!0,this.mapHeaderText="Collapse map",e.hasClass("fa-angle-double-up")&&(e.removeClass("fa-angle-double-up"),e.addClass("fa-angle-double-down"))):(this.isShowMap=!1,this.mapHeaderText="Expand map",e.hasClass("fa-angle-double-down")&&(e.removeClass("fa-angle-double-down"),e.addClass("fa-angle-double-up")))},Close:function(){var e=this;e.showAddZone=!1,e.editZone=!1},AddZonePopUp:function(){var e=this;e.mapObj=[],e.showAddZone=!0},paramsToObject(e){const t={};for(const[a,o]of e)t[a]=o;return t},actionButtonClick(e,t,a,o){switch(e){case"View":this.openPopupForSetupZoneList(t);break;case"Edit":this.Edits(t);break}},openPopupForSetupZoneList:function(e){var t=this;t.zoneData=e;var a="id="+e.ZONE_ID;t.zoneId=e.ZONE_ID,t.mapObj=[];var o={latlong:"",refValue:t.zoneId,popupHeaderHtml:"",popupHeaderColor:"",popupBodyHtml:"",popupFooterHtml:"",pinLatLong:{latitude:"",longitude:""},polygons:[],address:"",priority:"",color_code:""};let s=[];i["a"].GetZoneById(a).then((function(e){let a=JSON.parse(e.data.result.DATA[0].JSON_DATA).features;a.forEach((function(e,a){let o=[];e.geometry.coordinates[0].forEach((function(e,t){o.push({latitude:e[0],longitude:e[1]})})),s.push({name:"",fillColor:e.properties["fillColor"],strokeColor:e.properties["stroke"],strokeWeight:e.properties["stroke-width"],strokeOpacity:e.properties["stroke-opacity"],opacity:e.properties["fill-opacity"],latLong:o,FormName:t.zoneData.ZONE_NAME,Description:t.zoneData.ZONE_DESCRIPTION,ZoneType:t.zoneData.ZONE_TYPE,YardEmails:t.zoneData.YARD_EMAILS,locatorids:e.properties["locatorids"]})})),o.polygons=s,t.mapObj.push(o),0==t.isShowMap&&t.ShowHideMap(),$(window).scrollTop(0)}))},renderActions:function(e){var t=this;let a=[];return t.listActions.forEach(e=>{let t={...e};switch(t.title){case"Edit":t.isVisible=!0;break;default:t.isVisible=!0}a.push(t)}),a},leftCommonSearch:function(e){const t=new URLSearchParams(e.searchConditionJson),a=t.entries(),o=this.paramsToObject(a);o.hasOwnProperty("search")?this.search=o["search"]:this.search="",o.hasOwnProperty("searchzonetype")?this.searchzonetype=o["searchzonetype"]:this.searchzonetype="",this.PageNumber=e.PageNumber,this.isPaged=1,"undefined"!=typeof e.searchCondition?this.searchCondition=e.searchCondition:this.searchCondition="",this.FetchData()},FetchData:async function(){var e=this,t=`pageSize=${e.PageSize}&pageNumber=${e.PageNumber}&sortBy=${e.SortBy}&sortExp=${e.SortExp}`;this.isBlank(this.search)||(t+="&search="+this.search),this.isBlank(this.searchzonetype)||(t+="&searchzonetype="+this.searchzonetype),await i["a"].ZoneList(t).then((function(t){if(""!=t.data&&null!=t.data)if(e.Headers.forEach(e=>{e.settings=null,"STATUS_ID"==e.COLUMN_NAME&&(e.settings={isInSlot:!0}),"CREATED_AT"==e.COLUMN_NAME&&(e.settings={isInSlot:!0})}),t.data.result.DATA.length>0){e.ZoneList=t.data.result.DATA,e.TotalPages=Math.ceil(e.TotalRecords/e.PageSize),e.listheaderbuttons[2].isdisabled=!0,e.CurrentPage=e.PageNumber,e.ZoneList.length>0?(e.TotalRecords=t.data.result.DATA[0].TOTALRECORDS,e.NoRecord=!1):e.NoRecord=!0,$.each(e.ZoneList.DATA,(function(t,a){var o={Coord:a.LAT_LONG_MAP,Shape_Color:a.SHAPE_COLOR,GeoJSONData:null==a.ZONE_COORDINATES_DATA?null:JSON.parse(a.ZONE_COORDINATES_DATA)};e.MapCoordArray.push(o)}));var a=e.ZoneList;null!=a&&(e.ZoneId=a.ZONE_ID,e.txtZoneName=a.ZONE_NAME,e.txtZoneDesc=a.ZONE_DESCRIPTION,e.ItemSelected=a),e.isShowMap=!1}else e.noRecord=!0,e.ZoneList=[],e.TotalRecords=0;else e.noRecord=!0,e.ZoneList=[],e.Headers=[],e.TotalRecords=0;setTimeout((function(){e.ResponsiveDataTable("tablelistingdata")}),500)}))},commonHeaderButtonClick:function(e){switch(e.callbackfunction){case"openaddTicketGroup":this.openaddTicketGroup();break;case"commonDeleteData":this.commonDeleteData();break;case"openupdateStatus":this.showUpdateStatusModal=!0;break;case"openaddZone":this.openaddZone();break}},openaddZone:function(){var e=this;e.mapObj=[],e.isShowCreatePolygon=!0,e.isShowMap=!0},Edits:function(e){var t=this;t.zoneEditData=[],t.zoneEditData.push({ZONENAME:e.ZONE_NAME,ZONEDESCRIPTION:e.ZONE_DESCRIPTION,Refrence:"Edit",ZONETYPE:e.ZONE_TYPE,YARDEMAILS:e.YARD_EMAILS}),t.editZone=!0},pagerMethod:function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,this.FetchData()},sortdata:function(e){this.SortBy=e;var t="ASC";"ASC"==this.SortExp&&(t="DESC"),this.SortExp=t,this.SortBy=e,this.SortExp=t,this.PageNumber=1,this.GroupStart=this.PageNumber,this.GroupEnd=this.PageNumber+2,this.FetchData()},SaveZoneData:function(e){var t=this,a={ZoneId:e.ZoneId,ZoneName:e.Name,ZoneDesc:e.Description,ZoneType:e.ZoneType,YardEmails:e.YardEmails},o=JSON.stringify(a);i["a"].UpdateZone(o).then((function(e){"1"==e.data.code&&(t.ShowAlert(t.$t("UpdatedSuccess",[t.$t("Zone")]),"success",!0,t.$t("Alert")),t.editZone=!1,t.FetchData())}))},getStatusClassList:function(e){var t="";switch(e){case"Active":t="px-2 text-center bg-success text-white d-block";break;case"Inactive":t="px-2 text-center bg-danger text-white d-block";break;default:t=""}return t},commonDeleteData:function(e){var t=this,a="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0?t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("Ticketing Service Board"),(function(){var e={ids:a,moduleName:"FSM",subModuleCode:"FSM_DETAIL"},o=JSON.stringify(e);i["a"].deleteActivityData(o).then(e=>{var a="";"Success"==e.data[0].Status?($("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$("[id^='DeleteItem']").removeClass("enable").addClass("disabled"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),t.FetchData(),a=t.ShowAlert(t.$t("DeletedSuccess",[t.$t("Zone")]),"Success",!0,t.$t("Alert"))):a=t.ShowAlert(t.$t("DeletedError",[t.$t("Zone")]),"failure",!0,t.$t("Alert")),setTimeout((function(){a.modal("hide")}),2e3)})})):alert(t.$t("Selectanyrecordtodelete"))},CreatePolygon:function(){var e=this;e.config={isShowDrawButton:!0,isShowSearchBox:!0,isShowCurrentLocation:!0}}}},S=u,A=a("2877"),m=Object(A["a"])(S,o,s,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0cc835.js.map