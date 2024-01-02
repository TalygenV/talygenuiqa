(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d22dd5c"],{

/***/ "f8d8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7de95e48-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/TimesheetApproval/TimesheetApprovalHistory.vue?vue&type=template&id=a2c93dc6
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('loader',{attrs:{"is-visible":_vm.isLoading}}),_c('tg-list',{attrs:{"IsShowAction":false,"showCheckBox":true,"listType":[_vm.DetailListType],"ModuleName":"Approval","SubModuleCode":"Approval","IdentityColumn":"GROUPID","HeaderText":_vm.$t('TimesheetApprovalsHistory'),"ListData":_vm.GroupData,"HeaderData":_vm.Headers,"widgets":_vm.widgets,"callbackfunction":_vm.FetchData,"HeaderButtons":_vm.listheaderbuttons,"TotalRecords":_vm.TotalRecords,"SearchFields":_vm.leftSearchFields,"RenderRowActionMethod":_vm.renderActions,"ListDataCallBackFunction":_vm.FetchData,"LegendArray":_vm.LegendArray,"SortExp":_vm.SortExp,"SortBy":_vm.SortBy,"NorecordfoundText":_vm.$t('NoRecordfound')},on:{"LeftsearchButtonClick":_vm.leftCommonSearch,"PagerButtonClick":_vm.pagerMethod,"HeaderButtonClick":_vm.commonHeaderButtonClick,"ActionButtonClick":_vm.actionButtonClick,"SortdataButtonClick":_vm.sortdata}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/TimesheetApproval/TimesheetApprovalHistory.vue?vue&type=template&id=a2c93dc6

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./src/views/TimesheetApproval/TimesheetApprovalHistorySchema.js

let buttons = [{
  title: 'Back to list',
  iconClass: 'fa fa-angle-double-left pr-2',
  callbackfunction: 'BackTolist',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}];
let leftsearchSchema = [{
  fieldName: 'Status',
  fieldType: "ddl-check",
  fieldIcon: "fa fa-bar-chart",
  paramName: "statusIds",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: [{
    value: '1001',
    name: 'Approved'
  }, {
    value: '1002',
    name: 'Rejected'
  }]
}, {
  fieldName: "Date From",
  fieldType: "date-range",
  fieldIcon: "fa-calendar",
  fieldSearchConditionName: [],
  isSearch: false,
  datePickerConfig: {
    useCurrent: false,
    showClear: true,
    showClose: true,
    allowInputToggle: true,
    minDate: false,
    maxDate: false,
    widgetPositioning: {
      horizontal: 'right',
      vertical: 'bottom'
    }
  }
}, {
  fieldName: "Date To",
  fieldType: "date-range",
  fieldIcon: "fa-calendar",
  fieldSearchConditionName: [],
  isSearch: false,
  datePickerConfig: {
    useCurrent: false,
    showClear: true,
    showClose: true,
    allowInputToggle: true,
    minDate: false,
    maxDate: false,
    widgetPositioning: {
      horizontal: 'right',
      vertical: 'bottom'
    }
  }
}, {
  fieldName: 'User',
  fieldType: "ddl-check",
  fieldIcon: "fa fa-users",
  paramName: "userIds",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: []
}];
function bindleftCommonSearchdropdown(instance, modulename, filtername) {
  // var vm = instance;
  // if (filtername == "APPROVALRULE") {
  //     var url=`isIncludeLoginUserId=1&approvalGroupIds=&approvalChainIds=&moduleName=${filtername}&DepartmentIds`; 
  // }
  // DataService.LoadUsersByCompanyId(url).then(response=>{     
  //     var json= response.data;
  //     if(json !=null){   
  //         json.forEach(function (item, index){
  //             let obj={
  //                 name:item.USERNAME,
  //                 value:`${item.USER_ID}`
  //             }     
  //             vm.leftSearchFields[1].listOptions.push(obj); 
  //         });            
  //         return vm.LeadStatusList;           
  //     }
  // });
}
/* harmony default export */ var TimesheetApprovalHistorySchema = ({
  buttons,
  leftsearchSchema,
  bindleftCommonSearchdropdown
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/TimesheetApproval/TimesheetApprovalHistory.vue?vue&type=script&lang=js

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import DataService from '../../service/DataService';

/* harmony default export */ var TimesheetApprovalHistoryvue_type_script_lang_js = ({
  data() {
    return {
      isLoading: false,
      leftSearchFields: TimesheetApprovalHistorySchema.leftsearchSchema,
      listActions: TimesheetApprovalHistorySchema.listActions,
      LegendArray: [],
      Headers: [{
        "COLUMN_NAME": '',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('TimesheetPeriod'),
        "DISPLAY_ORDER": 1
      }, {
        "COLUMN_NAME": '',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('UserName'),
        "DISPLAY_ORDER": 2
      }, {
        "COLUMN_NAME": '',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('TrackedHour'),
        "DISPLAY_ORDER": 3
      }, {
        "COLUMN_NAME": '',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('PerDiem'),
        "DISPLAY_ORDER": 4
      }, {
        "COLUMN_NAME": '',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Status'),
        "DISPLAY_ORDER": 4,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": '',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Comment'),
        "DISPLAY_ORDER": 4,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": '',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Rollback'),
        "DISPLAY_ORDER": 4,
        settings: {
          isInSlot: true
        }
      }],
      noRecord: true,
      SortBy: '',
      SortExp: '',
      GroupData: [],
      TotalRecords: 0,
      PageNumber: 1,
      PageSize: 10,
      CurrentPage: 1,
      TotalPages: 0,
      listheaderbuttons: TimesheetApprovalHistorySchema.buttons,
      DetailListType: 'List'
    };
  },
  created() {
    var vm = this;
    vm.FetchData();
    vm.LegendArray = [{
      class: 'legend-pending colorboxsquare',
      text: 'The approved entries which have been rejected(Override) by CA'
    }, {
      class: 'legends_medium colorboxsquare',
      text: 'The pending entries which have been approved/rejected directly by CA'
    }];
  },
  methods: {
    async FetchData() {
      var vm = this;
    },
    BackTolist() {
      this.$router.push({
        name: 'Timesheet Approvals'
      });
    },
    actionButtonClick(callbackfunction, item) {},
    renderActions(row) {},
    pagerMethod: function (value) {
      this.PageSize = value.PageSize;
      this.PageNumber = value.PageNumber;
      this.FetchData();
    },
    commonHeaderButtonClick(event) {
      switch (event.callbackfunction) {
        case "BackTolist":
          this.BackTolist();
          break;
      }
    },
    leftCommonSearch: function (value) {
      this.PageNumber = value.PageNumber;
      this.isPaged = 1;
      if (typeof value.searchCondition != 'undefined') {
        this.searchCondition = value.searchConditionJson;
      } else {
        this.searchCondition = "";
      }
      this.FetchData();
    },
    sortdata: function (s) {
      var SortDir = "sort tb_headerSortDown";
      this.SortBy = s;
      if (s === this.SortBy) {
        if (this.SortExp == "") {
          this.SortExp = "ASC";
          SortDir = "sort tb_headerSortDown";
        } else if (this.SortExp == "ASC") {
          this.SortExp = "DESC";
          SortDir = "sort tb_headerSortUp";
        } else {
          this.SortExp = "ASC";
          SortDir = "sort tb_headerSortDown";
        }
      }
      this.FetchData();
      $("#" + s + '  span:first-child').attr("class", SortDir);
    }
  }
});
// CONCATENATED MODULE: ./src/views/TimesheetApproval/TimesheetApprovalHistory.vue?vue&type=script&lang=js
 /* harmony default export */ var TimesheetApproval_TimesheetApprovalHistoryvue_type_script_lang_js = (TimesheetApprovalHistoryvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/TimesheetApproval/TimesheetApprovalHistory.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  TimesheetApproval_TimesheetApprovalHistoryvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TimesheetApprovalHistory = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d22dd5c.js.map