(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0e53c1"],{

/***/ "942b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7de95e48-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ApprovalRule/ApprovalRuleList.vue?vue&type=template&id=1d7dbd26
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('loader',{attrs:{"is-visible":_vm.isLoading}}),_c('tg-list',{attrs:{"IsShowAction":false,"showCheckBox":true,"listType":[_vm.DetailListType],"ModuleName":"Approval","SubModuleCode":"Timer","IdentityColumn":"RULEID","HeaderText":_vm.$t('ApprovalRule'),"ListData":_vm.RuleData,"HeaderData":_vm.Headers,"widgets":_vm.widgets,"callbackfunction":_vm.FetchData,"HeaderButtons":_vm.listheaderbuttons,"TotalRecords":_vm.TotalRecords,"SearchFields":_vm.leftSearchFields,"RenderRowActionMethod":_vm.renderActions,"ListDataCallBackFunction":_vm.FetchData,"LegendArray":_vm.LegendArray,"SortExp":_vm.SortExp,"SortBy":_vm.SortBy,"NorecordfoundText":_vm.$t('NoRecordfound')},on:{"LeftsearchButtonClick":_vm.leftCommonSearch,"PagerButtonClick":_vm.pagerMethod,"HeaderButtonClick":_vm.commonHeaderButtonClick,"ActionButtonClick":_vm.actionButtonClick,"SortdataButtonClick":_vm.sortdata},scopedSlots:_vm._u([{key:"slotdata",fn:function(ref){
var data = ref.data;
return [(data.column.COLUMN_NAME == 'STATUS')?[_c('td',{staticClass:"text-center single-action",attrs:{"title":data.row.STATUSID == 1001 ? 'Active' : 'Inactive'}},[_c('div',{staticClass:"cstm-drop-btn"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(data.row.STATUSID),expression:"data.row.STATUSID"}],class:data.row.STATUSID == 1001 ? 'ddlupdatestatus w-80 btn-success' : 'ddlupdatestatus w-80 btn-danger',on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(data.row, "STATUSID", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.DrpdownUpdateStatus(data.row.STATUSID, data.row.RULEID);}]}},[_c('option',{attrs:{"value":"1001","selected":"selected"}},[_vm._v("Active")]),_c('option',{attrs:{"value":"1002"}},[_vm._v("Inactive")])])])])]:_vm._e(),(data.column.COLUMN_NAME == 'RULENAME')?[(data.row.RULENAME)?_c('span',{staticClass:"text-dark"},[_c('a',{attrs:{"href":"javascript:;","id":data.row.RULEID},on:{"click":function($event){return _vm.EditRule(data.row.RULEID)}}},[_c('em',{staticClass:"text-primary",attrs:{"aria-hidden":"true"}},[_vm._v(_vm._s(data.row.RULENAME))])])]):_vm._e()]:_vm._e()]}}])})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/ApprovalRule/ApprovalRuleList.vue?vue&type=template&id=1d7dbd26

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__("1157");

// CONCATENATED MODULE: ./src/views/ApprovalRule/ApprovalRuleSchema.js



let buttons = [{
  title: 'Page Tour',
  iconClass: 'fa fa-road',
  callbackfunction: 'setTourGuideSteps',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: true
}, {
  title: 'Add New',
  iconClass: 'fa fa-plus',
  callbackfunction: 'AddRule',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: true,
  id: 'AddNewRule'
}, {
  title: 'Delete',
  iconClass: 'fa fa-trash',
  callbackfunction: 'DeleteRule',
  additionalClass: '',
  id: 'DeleteMultiple',
  isdisabled: true,
  isvisible: true,
  checkPrivilege: true
}];
let leftsearchSchema = [{
  fieldName: 'RULE NAME',
  fieldType: "text",
  fieldIcon: "fa fa-check-circle",
  paramName: "ruleName",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: []
}, {
  fieldName: 'MODULE',
  fieldType: "ddl-check",
  fieldIcon: "fa fa-cubes",
  paramName: "moduleIds",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: []
}, {
  fieldName: 'APPROVAL CHAIN',
  fieldType: "ddl-check",
  fieldIcon: "fa fa-chain",
  paramName: "approvalChainIds",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: []
}, {
  fieldName: 'USER',
  fieldType: "ddl-check",
  fieldIcon: "fa fa-users",
  paramName: "userIds",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: []
}, {
  fieldName: 'THE APPROVER',
  fieldType: "ddl-check",
  fieldIcon: "fa fa-user",
  paramName: "approverIds",
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
let listActions = [{
  title: 'Edit',
  href: '/AssetCatalog/Update/{ASSET_CATALOGUE_ID}',
  icon: 'fa fa-pencil text-success action-icon',
  additionalSpan: '',
  isVisible: true
}, {
  title: 'Clone',
  href: 'javascript:void(0)',
  callbackfunction: 'OpenClonePopup',
  icon: 'fa fa-clone text-success action-icon',
  additionalSpan: '',
  isVisible: true
}, {
  title: 'Detail Products History',
  href: '/AssetAssignment/Index/{ASSET_CATALOGUE_ID}',
  icon: 'fa fa-file text-warning action-icon',
  additionalSpan: '',
  isVisible: true
}, {
  title: 'View attached file(s)',
  callbackfunction: 'OpenViewFilePopup',
  href: 'javascript:void(0)',
  icon: 'fa fa-eye text-primary action-icon',
  additionalSpan: '',
  isVisible: true
}];
function bindleftCommonSearchdropdown(instance, modulename, filtername) {
  var vm = instance;
  var TagData = [];
  if (filtername == "APPROVALRULE") {
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
        vm.leftSearchFields[3].listOptions = TagData;
        vm.leftSearchFields[4].listOptions = TagData;
      }
    });
  }
  if (filtername == "ApprovalChain") {
    let obj = {};
    DataService["a" /* default */].GetApprovalChainsByCompanyId().then(response => {
      var json = response.data;
      if (json != null) {
        json.forEach(function (item, index) {
          obj = {
            name: item.APPROVAL_CHAIN_NAME,
            value: `${item.APPROVAL_CHAIN_ID}`
          };
          TagData.push(obj);
        });
        vm.leftSearchFields[2].listOptions = TagData;
      }
    });
  }
  if (filtername == "Module") {
    let obj = {};
    var url = `userTypeID=1`;
    DataService["a" /* default */].GetApprovalTypes(url).then(response => {
      var json = response.data;
      if (json != null) {
        json.forEach(function (item, index) {
          let obj = {
            name: item.APPROVAL_TYPE_NAME,
            value: `${item.APPROVAL_TYPE_ID}`
          };
          TagData.push(obj);
        });
        vm.leftSearchFields[1].listOptions = TagData;
      }
    });
  }
}
/* harmony default export */ var ApprovalRuleSchema = ({
  buttons,
  leftsearchSchema,
  listActions,
  bindleftCommonSearchdropdown
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ApprovalRule/ApprovalRuleList.vue?vue&type=script&lang=js

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



/* harmony default export */ var ApprovalRuleListvue_type_script_lang_js = ({
  data() {
    return {
      widgets: [],
      LegendArray: [],
      CategorytList: [],
      isLoading: false,
      leftSearchFields: ApprovalRuleSchema.leftsearchSchema,
      listActions: ApprovalRuleSchema.listActions,
      Headers: [{
        "COLUMN_NAME": 'RULENAME',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('RuleName'),
        "DISPLAY_ORDER": 1,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": 'MODULE',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Module'),
        "DISPLAY_ORDER": 2
      }, {
        "COLUMN_NAME": 'LIMITEDDURATION',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Duration'),
        "DISPLAY_ORDER": 3
      }, {
        "COLUMN_NAME": 'USERS',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Users'),
        "DISPLAY_ORDER": 4
        // settings: {
        //     isInSlot: true,
        // }
      }, {
        "COLUMN_NAME": 'APPROVALCHAINNAME',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('ApprovalChain'),
        "DISPLAY_ORDER": 5
        // settings: {
        //     isInSlot: true,
        // }
      }, {
        "COLUMN_NAME": 'APPROVERS',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Approvers'),
        "DISPLAY_ORDER": 6
        // settings: {
        //     isInSlot: true,
        // }
      }, {
        "COLUMN_NAME": "STATUS",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Active'),
        "DISPLAY_ORDER": 7,
        settings: {
          isInSlot: true
        }
      }],
      noRecord: true,
      statusIds: '',
      LocationId: '',
      IsDefault: '',
      RuleData: [],
      TotalRecords: 0,
      PageNumber: 1,
      CurrentPage: 1,
      TotalPages: 0,
      StatusData: [],
      listheaderbuttons: ApprovalRuleSchema.buttons,
      DetailListType: 'List',
      ruleName: '',
      moduleIds: '',
      approvalChainIds: '',
      userIds: '',
      approverIds: '',
      statusIds: '',
      sortBy: '',
      sortExp: '',
      PageSize: 10,
      isPartial: 0
    };
  },
  created() {
    this.FetchData();
    ApprovalRuleSchema.bindleftCommonSearchdropdown(this, 'Approval', 'APPROVALRULE');
    ApprovalRuleSchema.bindleftCommonSearchdropdown(this, "Approval", "ApprovalChain");
    ApprovalRuleSchema.bindleftCommonSearchdropdown(this, "Approval", "Module");
    //Schema.bindleftCommonSearchdropdown(this, 'Asset', 'Sub_Module_Name');
  },

  methods: {
    async FetchData() {
      var vueObj = this;
      var url = `${vueObj.searchCondition}&ruleName=${vueObj.ruleName}&moduleIds=${vueObj.moduleIds}&approvalChainIds=${vueObj.approvalChainIds}&userIds=${vueObj.userIds}&approverIds=${vueObj.approverIds}&statusIds=${vueObj.statusIds}&sortBy=${vueObj.sortBy}&sortExp=${vueObj.sortExp}&pageSize=${vueObj.PageSize}&pageNum=${vueObj.PageNumber}&isPartial=${vueObj.isPartial}`;
      DataService["a" /* default */].ApprovalRuleListing(url).then(response => {
        if (response.data != null) {
          if (response.data.length > 0) {
            vueObj.RuleData = response.data;
            vueObj.RuleData.forEach(row => {
              row.isCheckBoxDisabled = false;
              if (row.UCOUNT == 0) {
                row.isCheckBoxDisabled = false;
              } else {
                row.isCheckBoxDisabled = true;
              }
            });
            vueObj.TotalRecords = response.data[0].TotalRecords;
            vueObj.TotalPages = Math.ceil(vueObj.TotalRecords / vueObj.PageSize);
            vueObj.CurrentPage = vueObj.PageNumber;
            vueObj.noRecord = false;
          } else {
            vueObj.RuleData = [];
            vueObj.noRecord = true;
            vueObj.TotalRecords = 0;
          }
        } else {
          vueObj.noRecord = true;
          vueObj.RuleData = [];
          vueObj.TotalRecords = 0;
        }
        setTimeout(function () {
          vueObj.CheckBoxBootstrap();
        }, 100);
      });
      vueObj.isLoading = false;
    },
    EditRule: function (RULEID) {
      this.$router.push({
        name: 'ApprovalRuleAdd',
        params: {
          id: RULEID
        }
      });
    },
    DrpdownUpdateStatus(statusId, id) {
      var vm = this;
      vm.isLoading = true;
      vm.confirmR(vm.$t('Are you sure to update this record?'), true, false, function (result) {
        var url = `id=${id}&statusId=${statusId}&tablename=TALYGEN_APPROVAL_RULE&columnname=APPROVAL_RULE_ID`;
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
    DeleteRule() {
      var vm = this;
      var val = "";
      $('.chkItems:checkbox:checked').not("[id^='chkAll']").each(function () {
        if (val.length > 0) val += ',';
        val += $(this).val();
      });
      if (val.length > 0) {
        vm.confirmR(vm.$t("ConfirmDelete"), true, vm.$t("Delete") + "  ", function () {
          var postJSON = {
            ids: val,
            tblname: "TALYGEN_APPROVAL_RULE",
            primarycolname: "APPROVAL_RULE_ID"
          };
          vm.isLoading = true;
          var url = `ids=${val}`;
          DataService["a" /* default */].DeleteRule(url).then(response => {
            if (response.data) {
              $("[id^='chkAll']").prop("checked", false).removeAttr('checked');
              $('.chkItems:checkbox:checked').prop("checked", false).removeAttr('checked');
              $("[id^='DeleteMultiple']").removeClass('enable').addClass('disabled');
              vm.ShowAlert(vm.$t('DeletedSuccess', [vm.$t('ApprovalRule')]), "Success", true, vm.$t('Alert'));
              vm.FetchData();
            } else {
              vm.ShowAlert(vm.$t('DeletedError', [vm.$t('Group_Item')]), "failure", true, vm.$t('Alert'));
            }
            vm.isLoading = false;
          });
        });
      }
    },
    actionButtonClick(callbackfunction, item) {},
    renderActions(row) {},
    pagerMethod: function (value) {
      this.PageSize = value.PageSize;
      this.PageNumber = value.PageNumber;
      this.FetchData();
    },
    commonHeaderButtonClick(event) {
      debugger;
      switch (event.callbackfunction) {
        case "DeleteRule":
          this.DeleteRule();
          break;
        case "setTourGuideSteps":
          this.setTourGuideSteps(0);
          break;
        case "AddRule":
          this.AddNewRule();
          break;
      }
    },
    AddNewRule: function () {
      this.$router.push({
        name: 'ApprovalRuleAdd'
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
// CONCATENATED MODULE: ./src/views/ApprovalRule/ApprovalRuleList.vue?vue&type=script&lang=js
 /* harmony default export */ var ApprovalRule_ApprovalRuleListvue_type_script_lang_js = (ApprovalRuleListvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/ApprovalRule/ApprovalRuleList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ApprovalRule_ApprovalRuleListvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ApprovalRuleList = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0e53c1.js.map