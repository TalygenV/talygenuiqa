(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d2109eb"],{

/***/ "b953":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7de95e48-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ApprovalChain/GroupList.vue?vue&type=template&id=0dfc9171&lang=en
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('loader',{attrs:{"is-visible":_vm.isLoading}}),_c('tg-list',{attrs:{"IsShowAction":false,"showCheckBox":false,"listType":[_vm.DetailListType],"ModuleName":"Approval","SubModuleCode":"Approval","IdentityColumn":"APPROVALCHAINID","HeaderText":_vm.$t('ApprovalChain'),"ListData":_vm.AssetGroupingList,"HeaderData":_vm.Headers,"widgets":_vm.widgets,"callbackfunction":_vm.FetchData,"HeaderButtons":_vm.listheaderbuttons,"TotalRecords":_vm.TotalRecords,"SearchFields":_vm.leftSearchFields,"RenderRowActionMethod":_vm.renderActions,"ListDataCallBackFunction":_vm.FetchData,"LegendArray":_vm.LegendArray,"SortExp":_vm.SortExp,"SortBy":_vm.SortBy,"NorecordfoundText":_vm.$t('NoRecordfound')},on:{"LeftsearchButtonClick":_vm.leftCommonSearch,"PagerButtonClick":_vm.pagerMethod,"HeaderButtonClick":_vm.commonHeaderButtonClick,"SortdataButtonClick":_vm.sortdata},scopedSlots:_vm._u([{key:"slotdata",fn:function(ref){
var data = ref.data;
return [(data.column.COLUMN_NAME == 'RankUp' && _vm.AssetGroupingList.length > 1)?[(data.row.APPROVERORDER > 1)?[_c('span',[_c('a',{on:{"click":function($event){return _vm.RankUpDown(data.row.APPROVALCHAINGROUPMAPID,'RankUp')}}},[_c('em',{staticClass:"text-primary",attrs:{"aria-hidden":"true"}},[_c('i',{staticClass:"fa fa-arrow-up text-primary action-icon down"})])])])]:_vm._e()]:_vm._e(),(data.column.COLUMN_NAME == 'RankDown' && _vm.AssetGroupingList.length > 1)?[(data.row.APPROVERORDER < _vm.AssetGroupingList.length)?[_c('span',[_c('a',{on:{"click":function($event){return _vm.RankUpDown(data.row.APPROVALCHAINGROUPMAPID,'RankDown')}}},[_c('em',{staticClass:"text-primary",attrs:{"aria-hidden":"true"}},[_c('i',{staticClass:"fa fa-arrow-down text-primary action-icon down"})])])])]:_vm._e()]:_vm._e(),(data.column.COLUMN_NAME == 'Action')?[_c('td',{staticClass:"text-center single-action"},[_c('div',{staticClass:"cstm-drop-btn"},[_c('span',[_c('a',{on:{"click":function($event){return _vm.DeleteApprovalGroup(data.row)}}},[_c('em',{staticClass:"text-primary",attrs:{"aria-hidden":"true"}},[_c('i',{staticClass:"fa fa-trash text-danger action-icon"})])])])])])]:_vm._e()]}}])}),_vm._m(0)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row flex-row-reverse mb-2"},[_c('div',{staticClass:"col-lg-12"},[_c('div',{staticClass:"py-2"},[_c('span',{staticClass:"text-danger"},[_c('small',[_c('span',{staticClass:"text-danger"},[_vm._v("Order number can be changed by clicking rank up/down arrow button, approval request priority from higher to lower will be followed by order number lower to higher.")])])])])])])}]


// CONCATENATED MODULE: ./src/views/ApprovalChain/GroupList.vue?vue&type=template&id=0dfc9171&lang=en

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./src/views/ApprovalChain/GroupListSchema.js
let buttons = [{
  title: 'Back to list',
  iconClass: 'fa fa-angle-double-left pr-2',
  callbackfunction: 'BackTolist',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}, {
  title: 'Page Tour',
  iconClass: 'fa fa-road',
  callbackfunction: 'setTourGuideSteps',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: true
}];
/* harmony default export */ var GroupListSchema = ({
  buttons
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ApprovalChain/GroupList.vue?vue&type=script&lang=js

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



/* harmony default export */ var GroupListvue_type_script_lang_js = ({
  data() {
    return {
      isLoading: false,
      leftSearchFields: GroupListSchema.leftsearchSchema,
      listActions: GroupListSchema.listActions,
      DetailListType: 'List',
      listheaderbuttons: GroupListSchema.buttons,
      AssetGroupingList: [],
      IsShowGroup: false,
      noRecord: true,
      TotalRecords: 0,
      Headers: [{
        "COLUMN_NAME": 'GROUPNAME',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('ApprovalGroupName'),
        "DISPLAY_ORDER": 1
      }, {
        "COLUMN_NAME": 'USERS',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Users'),
        "DISPLAY_ORDER": 2
      }, {
        "COLUMN_NAME": 'RankUp',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('RankUp'),
        "DISPLAY_ORDER": 3,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": 'RankDown',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('RankDown'),
        "DISPLAY_ORDER": 4,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": 'APPROVERORDER',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": 'Order',
        "DISPLAY_ORDER": 5
      }, {
        "COLUMN_NAME": 'Action',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Action'),
        "DISPLAY_ORDER": 6,
        settings: {
          isInSlot: true
        }
      }]
    };
  },
  created: function () {
    var vm = this;
    if (vm.$route.params.id != null) {
      vm.ApprovalChainId = vm.$route.params.id;
    }
    vm.FetchData();
  },
  methods: {
    async FetchData() {
      var vm = this;
      var url = `id=${this.$route.params.id}`;
      await DataService["a" /* default */].GroupList(url).then(response => {
        if (response.data != null) {
          if (response.data.length > 0) {
            vm.AssetGroupingList = JSON.parse(response.data);
            vm.noRecord = false;
          } else {
            vm.noRecord = true;
          }
        }
      });
    },
    RankUpDown(GetId, GetName) {
      var vm = this;
      vm.isLoading = true;
      var GetIndex = vm.AssetGroupingList.findIndex(x => x.APPROVALCHAINGROUPMAPID === GetId);
      if (GetName == 'RankUp') {
        var GetNextId = vm.AssetGroupingList[GetIndex - 1].APPROVALCHAINGROUPMAPID;
      } else {
        var GetNextId = vm.AssetGroupingList[GetIndex + 1].APPROVALCHAINGROUPMAPID;
      }
      vm.confirmR(vm.$t('VerifysequenceofApprovalGroup'), true, false, function (result) {
        var url = `approvalChainId=${vm.ApprovalChainId}&approvalChainApprovalGroupMapId1=${GetId}&approvalChainApprovalGroupMapId2=${GetNextId}`;
        DataService["a" /* default */].SwapApproverOrder(url).then(response => {
          var arraydata = [];
          arraydata = JSON.parse(response.data);
          if (arraydata[0].Status == 0) {
            vm.ShowAlert(vm.$t('ApprovalChainSuccess'), "success", true, vm.$t("Alert"));
            vm.FetchData();
          }
          vm.isLoading = false;
        });
      });
      vm.isLoading = false;
    },
    DeleteApprovalGroup(data) {
      var vm = this;
      vm.confirmR(vm.$t("ConfirmDelete"), true, vm.$t("Delete") + "  ", function () {
        vm.isLoading = true;
        var param = `id=${data.APPROVALCHAINGROUPMAPID}`;
        DataService["a" /* default */].DeleteApprovalGroup(param).then(response => {
          if (response.data == '0') {
            vm.ShowAlert(vm.$t('DeletedSuccessfully'), "success", true, vm.$t("Alert"));
          } else if (response.data == '-1') {
            vm.ShowAlert(vm.$t('AlreadyExists'), "warning", true, vm.$t("Alert"));
          }
          vm.isLoading = false;
          vm.FetchData();
        });
      });
    },
    ClosePopup() {
      var vm = this;
      vm.$parent.CloseGroupPopup();
    },
    BackTolist() {
      this.$router.push({
        name: 'Approval Chain'
      });
    },
    commonHeaderButtonClick(event) {
      switch (event.callbackfunction) {
        case "DeleteRule":
          this.DeleteRule();
          break;
        case "setTourGuideSteps":
          this.setTourGuideSteps(0);
          break;
        case "BackTolist":
          this.BackTolist();
          break;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/views/ApprovalChain/GroupList.vue?vue&type=script&lang=js
 /* harmony default export */ var ApprovalChain_GroupListvue_type_script_lang_js = (GroupListvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/ApprovalChain/GroupList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ApprovalChain_GroupListvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var GroupList = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d2109eb.js.map