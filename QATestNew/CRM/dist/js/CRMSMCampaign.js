(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CRMSMCampaign"],{"0c8f":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("loader",{attrs:{"is-visible":e.isLoading}}),a("tg-list",{attrs:{IsShowAction:!0,ModuleName:"CRM",SubModuleCode:"CRM_CAMPAIGN",RenderRowActionMethod:e.renderActions,IdentityColumn:"campaign_id",HeaderText:e.$t("Campaign"),listType:["List"],ListData:e.CampaignData,HeaderData:e.Headers,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,SearchFields:e.leftSearchFields,ListDataCallBackFunction:e.FetchData,showCheckBox:!0,SortExp:e.SortExp,SortBy:e.SortBy,NorecordfoundText:e.$t("NoRecordfound")},on:{ActionButtonClick:e.actionButtonClick,LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,SortdataButtonClick:e.sortdata}})],1)},o=[],n=a("5530"),c=a("c7eb"),s=a("1da1"),r=(a("d3b7"),a("159b"),a("e9c4"),a("9769")),d=[{title:"Open Events",iconClass:"fa fa-road",callbackfunction:"",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Add New Post",iconClass:"fa-plus",href:"/CRM/AddSocialMediaPost/0",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0,id:""},{title:"Setting",iconClass:"fa-cog",callbackfunction:"",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0,id:""}],l=[{fieldName:"Campaign Type",fieldType:"text",fieldIcon:"fa-envelope",fieldSearchConditionName:["CAMPAIGN_TYPE"],isSearch:!1,value:"",listOptions:[]},{fieldName:"Status",fieldType:"ddl-check",fieldIcon:"fa fa-file-text-o",fieldSearchConditionName:["STATUS_ID"],isSearch:!1,value:"",listOptions:[]},{fieldName:"Campaign Date",fieldType:"date",fieldIcon:"fa fa-calendar",fieldSearchConditionName:["DATE"],isSearch:!1,value:"",listOptions:[]},{fieldName:"Social Media Post",fieldType:"ddl-check",fieldIcon:"fa-edit",fieldSearchConditionName:["CAMPAIGN_TYPE"],isSearch:!1,value:"",listOptions:[]}],u=[{title:"Quick View",href:"javascript:void(0)",icon:"fa fa-eye",callbackfunction:"openQuickViewpopup",additionalSpan:"",class:"round-icon-small btn-primary"},{title:"Send",href:"javascript:void(0)",icon:"fa fa-send text-primary action-icon",additionalSpan:""},{title:"Edit",href:"javascript:void(0)",icon:"fa fa-pencil text-success action-icon",additionalSpan:""},{title:"Delete",href:"javascript:void(0)",icon:"fa fa-trash",callbackfunction:"DeleteCampaign",additionalSpan:""}],h={buttons:d,listActions:u,leftsearchSchema:l},S={data:function(){return{isLoading:!1,FaceBookPages:[],CampaignData:[],listheaderbuttons:h.buttons,leftSearchFields:h.leftsearchSchema,listActions:h.listActions,TotalRecords:0,SortExp:"",SortBy:"",PageNumber:1,PageSize:10,searchCondition:"",Headers:[{COLUMN_NAME:"social_media_post",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Social Media Post",DISPLAY_ORDER:1},{COLUMN_NAME:"created_at",DATA_TYPE:"date",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Created at",DISPLAY_ORDER:2},{COLUMN_NAME:"schedule_on",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Schedule On",DISPLAY_ORDER:3},{COLUMN_NAME:"rejected_by",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Rejected By",DISPLAY_ORDER:4},{COLUMN_NAME:"reason",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Reason",DISPLAY_ORDER:5},{COLUMN_NAME:"reviewed_by",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Reviewed By",DISPLAY_ORDER:6},{COLUMN_NAME:"status_id",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Status",DISPLAY_ORDER:7}]}},created:function(){var e=this;return Object(s["a"])(Object(c["a"])().mark((function t(){var a,i;return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e,i=a.$route.query.code,!i){t.next=5;break}return t.next=5,a.FacebookAuth(i);case 5:e.CampaignData=[{rownumber:1,total_records:125,campaign_id:572,social_media_post:"Noise watch",reviewed_by:"Dave Junior",created_at:"2023-12-20T19:33:43.160",schedule_on:"2023-12-20T19:33:43.160",reason:"Noise watch",created_by:"James OSmith",rejected_by:"James OSmith",status_id:"Active"}],a.FetchData();case 7:case"end":return t.stop()}}),t)})))()},methods:{FetchData:function(){},pagerMethod:function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,this.FetchData()},sortdata:function(e){var t="sort tb_headerSortDown";this.SortBy=e,e===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",t="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",t="sort tb_headerSortUp"):(this.SortExp="ASC",t="sort tb_headerSortDown")),this.FetchData(),$("#"+e+"  span:first-child").attr("class",t)},commonHeaderButtonClick:function(e){switch(e.callbackfunction){case"commonDeleteData":this.commonDeleteData();break;case"openPopUp":break;case"setTourGuideSteps":break}},renderActions:function(e){var t=this,a=[];return t.listActions.forEach((function(e){var t=Object(n["a"])({},e);switch(t.title){case"Edit":t.isVisible=!0;break;case"Delete":t.isVisible=!0;break;default:t.isVisible=!0}a.push(t)})),a},actionButtonClick:function(e,t,a,i,o){switch(e){case"openQuickViewpopup":break;case"DeleteCampaign":break}},leftCommonSearch:function(e){this.PageNumber=e.PageNumber,"undefined"!=typeof e.searchCondition?this.searchCondition=e.searchCondition:this.searchCondition="",this.FetchData()},FacebookAuth:function(e){var t=this;return Object(s["a"])(Object(c["a"])().mark((function a(){var i,o;return Object(c["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=t,o="code=".concat(e),a.next=4,r["a"].FacebookAuth(o).then((function(e){if(e.data){var t=e.data;i.storeLoginData(t)}}));case 4:case"end":return a.stop()}}),a)})))()},storeLoginData:function(e){var t=new Date,a=new Date(t.getTime()+5184e6),i={userId:e,expires:a.getTime()};localStorage.setItem("facebook_login_data",JSON.stringify(i))}}},f=S,p=a("2877"),A=Object(p["a"])(f,i,o,!1,null,null,null);t["default"]=A.exports}}]);
//# sourceMappingURL=CRMSMCampaign.js.map