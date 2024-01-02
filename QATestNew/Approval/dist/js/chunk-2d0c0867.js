(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0c0867"],{

/***/ "41c7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7de95e48-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ApprovalChain/ApprovalChainList.vue?vue&type=template&id=3a1e5ff0
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('loader',{attrs:{"is-visible":_vm.isLoading}}),_c('tg-list',{attrs:{"IsShowAction":false,"showCheckBox":true,"listType":['List'],"ModuleName":"Approval","SubModuleCode":"Approval","IdentityColumn":"APPROVALCHAINID","HeaderText":_vm.$t('Approval Chain'),"ListData":_vm.ChainData,"HeaderData":_vm.Headers,"widgets":_vm.widgets,"callbackfunction":_vm.FetchData,"HeaderButtons":_vm.listheaderbuttons,"TotalRecords":_vm.TotalRecords,"SearchFields":_vm.leftSearchFields,"RenderRowActionMethod":_vm.renderActions,"ListDataCallBackFunction":_vm.FetchData,"LegendArray":_vm.LegendArray,"SortExp":_vm.SortExp,"SortBy":_vm.SortBy,"NorecordfoundText":_vm.$t('NoRecordfound')},on:{"LeftsearchButtonClick":_vm.leftCommonSearch,"PagerButtonClick":_vm.pagerMethod,"HeaderButtonClick":_vm.commonHeaderButtonClick,"SortdataButtonClick":_vm.sortdata},scopedSlots:_vm._u([{key:"slotdata",fn:function(ref){
var data = ref.data;
return [(data.column.COLUMN_NAME == 'STATUS')?[(data.row.SCOUNT == 0 && data.row.DCOUNT == 0)?[_c('td',{staticClass:"text-center single-action",attrs:{"title":data.row.STATUSID == 1001 ? 'Active' : 'Inactive'}},[_c('div',{staticClass:"cstm-drop-btn"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(data.row.STATUSID),expression:"data.row.STATUSID"}],class:data.row.STATUSID == 1001 ? 'ddlupdatestatus w-80 btn-success' : 'ddlupdatestatus w-80 btn-danger',on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(data.row, "STATUSID", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.DropdownUpdateStatus(data.row.STATUSID, data.row.APPROVALCHAINID);}]}},[_c('option',{attrs:{"value":"1001","selected":"selected"}},[_vm._v("Active")]),_c('option',{attrs:{"value":"1002"}},[_vm._v("Inactive")])])])])]:[_c('td',{staticClass:"text-center single-action",attrs:{"title":data.row.STATUSID == 1001 ? 'Active' : 'Inactive'}},[_c('div',{staticClass:"cstm-drop-btn"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(data.row.STATUSID),expression:"data.row.STATUSID"}],class:data.row.STATUSID == 1001 ? 'ddlupdatestatus w-80 btn-success' : 'ddlupdatestatus w-80 btn-danger',attrs:{"disabled":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(data.row, "STATUSID", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"1001","selected":"selected"}},[_vm._v("Active")]),_c('option',{attrs:{"value":"1002"}},[_vm._v("Inactive")])])])])]]:_vm._e(),(data.column.COLUMN_NAME == 'APPROVALCHAINNAME')?[(data.row.APPROVALCHAINNAME)?_c('span',{staticClass:"text-dark"},[_c('a',{attrs:{"href":"javascript:;","id":data.row.APPROVALCHAINID},on:{"click":function($event){return _vm.EditChain(data.row.APPROVALCHAINID)}}},[_c('em',{staticClass:"text-primary",attrs:{"aria-hidden":"true"}},[_vm._v(_vm._s(data.row.APPROVALCHAINNAME))])])]):_vm._e()]:_vm._e(),(data.column.COLUMN_NAME == 'ACTION')?[_c('td',{staticClass:"text-center single-action"},[_c('div',{staticClass:"cstm-drop-btn"},[_c('span',{attrs:{"title":"Change Order","data-toggle-tooltip":"tooltip"}},[_c('a',{on:{"click":function($event){return _vm.ChangeOrder(data.row.APPROVALCHAINID)}}},[_c('em',{staticClass:"text-primary",attrs:{"aria-hidden":"true"}},[_c('i',{staticClass:"fa fa-retweet text-dark action-icon"})])])])])])]:_vm._e()]}}])})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/ApprovalChain/ApprovalChainList.vue?vue&type=template&id=3a1e5ff0

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./src/views/ApprovalChain/ApprovalChainSchema.js


let buttons = [{
  title: 'Page Tour',
  iconClass: 'fa fa-road',
  callbackfunction: 'setTourGuideSteps',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}, {
  title: 'Add',
  iconClass: 'fa fa-plus',
  callbackfunction: 'AddNewChain',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  id: 'AddNewChain',
  checkPrivilege: false
}, {
  title: 'Delete',
  iconClass: 'fa fa-trash',
  callbackfunction: 'Delete',
  additionalClass: '',
  id: 'DeleteMultiple',
  isdisabled: true,
  isvisible: true,
  checkPrivilege: true
}];
let leftsearchSchema = [{
  fieldName: "APPROVAL CHAIN",
  fieldType: "text",
  fieldIcon: "fa fa-chain",
  paramName: "chainName",
  fieldSearchConditionName: [''],
  value: null,
  listOptions: []
}, {
  fieldName: 'APPROVAL GROUP',
  fieldType: "ddl-check",
  fieldIcon: "fa fa-check-circle",
  paramName: "approvalGroupIds",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: []
}, {
  fieldName: 'User',
  fieldType: "ddl-check",
  fieldIcon: "fa fa-users",
  paramName: "userIds",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: []
}, {
  fieldName: 'STATUS',
  fieldType: "ddl-check",
  fieldIcon: "fa fa-bar-chart",
  paramName: "statusIds",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: [{
    value: '1001',
    name: 'ACTIVE'
  }, {
    value: '1002',
    name: 'INACTIVE'
  }]
}];
function bindleftCommonSearchdropdown(instance, modulename, filtername) {
  var vm = instance;
  var TagData = [];
  if (filtername == 'APPROVALGROUP') {
    let obj = {};
    DataService["a" /* default */].GetApprovalGroupByCompanyId().then(response => {
      var json = response.data;
      if (json != null) {
        json.forEach(function (item, index) {
          obj = {
            name: item.APPROVAL_GROUP_NAME,
            value: `${item.APPROVAL_GROUP_ID}`
          };
          TagData.push(obj);
        });
        vm.leftSearchFields[1].listOptions = TagData;
      }
    });
  }
  if (filtername == 'APPROVALRULE') {
    let obj = {};
    var url = `isIncludeLoginUserId=1&approvalGroupIds=&approvalChainIds=&moduleName=${filtername}&DepartmentIds`;
    DataService["a" /* default */].LoadUsersByCompanyId(url).then(response => {
      var json = response.data;
      if (json != null) {
        json.forEach(function (item, index) {
          obj = {
            name: item.USERNAME,
            value: `${item.USER_ID}`
          };
          TagData.push(obj);
        });
        vm.leftSearchFields[2].listOptions = TagData;
      }
    });
  }
}
/* harmony default export */ var ApprovalChainSchema = ({
  buttons,
  leftsearchSchema,
  bindleftCommonSearchdropdown
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ApprovalChain/ApprovalChainList.vue?vue&type=script&lang=js

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
//



/* harmony default export */ var ApprovalChainListvue_type_script_lang_js = ({
  data() {
    return {
      listheaderbuttons: ApprovalChainSchema.buttons,
      leftSearchFields: ApprovalChainSchema.leftsearchSchema,
      listActions: ApprovalChainSchema.listActions,
      userIds: '',
      statusIds: '',
      approvalGroupIds: '',
      PageSize: 20,
      PageNumber: 1,
      TotalRecords: 0,
      SortBy: '',
      SortExp: '',
      isLoading: false,
      noRecord: true,
      CurrentPage: 1,
      TotalPages: 0,
      approvalChainListData: [],
      Headers: [{
        "COLUMN_NAME": 'APPROVALCHAINNAME',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": 'Approval Chain Name',
        "DISPLAY_ORDER": 1,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": 'GROUPS',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": 'Approval Groups',
        "DISPLAY_ORDER": 2
      }, {
        "COLUMN_NAME": 'USERS',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": 'Users',
        "DISPLAY_ORDER": 3
      }, {
        "COLUMN_NAME": 'DESCRIPTION',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": 'Description',
        "DISPLAY_ORDER": 4
      }, {
        "COLUMN_NAME": 'STATUS',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": 'Status',
        "DISPLAY_ORDER": 5,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": 'ACTION',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": 'Action',
        "DISPLAY_ORDER": 6,
        settings: {
          isInSlot: true
        }
      }],
      search: '',
      isPartial: 0,
      ChainData: [],
      LegendArray: [],
      widgets: []
    };
  },
  mounted: function () {
    $('[data-toggle="tooltip"]').tooltip();
  },
  created() {
    var vm = this;
    vm.FetchData();
    ApprovalChainSchema.bindleftCommonSearchdropdown(vm, "Approval", "APPROVALGROUP");
    ApprovalChainSchema.bindleftCommonSearchdropdown(vm, "Approval", "APPROVALRULE");
  },
  methods: {
    async FetchData() {
      var vm = this;
      var url = `${vm.searchCondition}&userIds=${vm.userIds}&approvalGroupIds=${vm.approvalGroupIds}&statusIds=${vm.statusIds}&sortBy=${vm.SortBy}&sortExp=${vm.SortExp}&pageSize=${vm.PageSize}&pageNum=${vm.PageNumber}&isPartial=${vm.isPartial}`;
      await DataService["a" /* default */].ApprovalChainListing(url).then(response => {
        if (response.data != null) {
          if (response.data.length > 0) {
            vm.ChainData = response.data;
            vm.ChainData.forEach(row => {
              row.isCheckBoxDisabled = false;
              if (row.DCOUNT == 0 && row.SCOUNT == 0) {
                row.isCheckBoxDisabled = false;
              } else {
                row.isCheckBoxDisabled = true;
              }
            });
            vm.TotalRecords = response.data[0].TOTALRECORDS;
            vm.TotalPages = Math.ceil(vm.TotalRecords / vm.PageSize);
            vm.CurrentPage = vm.PageNumber;
            vm.noRecord = false;
          } else {
            vm.ChainData = [];
            vm.noRecord = true;
            vm.TotalRecords = 0;
          }
        } else {
          vm.noRecord = true;
          vm.ChainData = [];
          vm.TotalRecords = 0;
        }
        setTimeout(function () {
          vm.CheckBoxBootstrap();
        }, 100);
        setTimeout(function () {
          vm.ResponsiveDataTable('tablelistingdata');
        }, 500);
      });
      vm.isLoading = false;
    },
    DeleteApprovalChain() {
      var vm = this;
      var val = "";
      $('.chkItems:checkbox:checked').not("[id^='chkAll']").each(function () {
        if (val.length > 0) val += ',';
        val += $(this).val();
      });
      if (val.length > 0) {
        vm.confirmR(vm.$t("ConfirmDelete"), true, vm.$t("Delete") + "  ", function () {
          vm.isLoading = true;
          var url = `ids=${val}`;
          DataService["a" /* default */].DeleteApprovalChain(url).then(response => {
            if (response.data) {
              $("[id^='chkAll']").prop("checked", false).removeAttr('checked');
              $('.chkItems:checkbox:checked').prop("checked", false).removeAttr('checked');
              $("[id^='DeleteMultiple']").removeClass('enable').addClass('disabled');
              vm.ShowAlert(vm.$t('DeletedSuccess', [vm.$t('ApprovalChain')]), "Success", true, vm.$t('Alert'));
              vm.FetchData();
            } else {
              vm.ShowAlert(vm.$t('DeletedError', [vm.$t('ApprovalChain')]), "failure", true, vm.$t('Alert'));
            }
            vm.isLoading = false;
          });
        });
      }
    },
    DropdownUpdateStatus(statusId, id) {
      var vm = this;
      vm.isLoading = true;
      vm.confirmR(vm.$t('Are you sure you want to update this record?'), true, false, function (result) {
        var url = `id=${id}&statusId=${statusId}&tablename=TALYGEN_APPROVAL_CHAIN&columnname=APPROVAL_CHAIN_ID`;
        DataService["a" /* default */].UpdateStatus(url).then(response => {
          var status = '';
          vm.ShowAlert(vm.$t('UpdateStatus'), "success", 'Alert');
          vm.FetchData();
          vm.isLoading = false;
        });
      });
      vm.FetchData();
      vm.isLoading = false;
    },
    commonHeaderButtonClick(event) {
      switch (event.callbackfunction) {
        case "Delete":
          this.DeleteApprovalChain();
          break;
        case "setTourGuideSteps":
          this.setTourGuideSteps(0);
          break;
        case "AddNewChain":
          this.AddNewChain();
          break;
      }
    },
    AddNewChain: function () {
      this.$router.push({
        name: 'Add Approval Chain'
      });
    },
    EditChain: function (APPROVALCHAINID) {
      this.$router.push({
        name: 'Add Approval Chain',
        params: {
          id: APPROVALCHAINID
        }
      });
    },
    ChangeOrder: function (APPROVALCHAINID) {
      this.$router.push({
        name: 'Manage Group',
        params: {
          id: APPROVALCHAINID
        }
      });
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
    pagerMethod: function (value) {
      this.PageSize = value.PageSize;
      this.PageNumber = value.PageNumber;
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
    },
    renderActions() {}
  }
});
// CONCATENATED MODULE: ./src/views/ApprovalChain/ApprovalChainList.vue?vue&type=script&lang=js
 /* harmony default export */ var ApprovalChain_ApprovalChainListvue_type_script_lang_js = (ApprovalChainListvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/ApprovalChain/ApprovalChainList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ApprovalChain_ApprovalChainListvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ApprovalChainList = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0c0867.js.map