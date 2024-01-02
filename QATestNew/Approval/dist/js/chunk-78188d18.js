(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-78188d18"],{

/***/ "06ad":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7de95e48-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ApprovalReport/Index.vue?vue&type=template&id=3e309494
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"padding-t_10",attrs:{"id":"reportstabsdata"}},[_c('div',{staticClass:"left-menu-tab new_tab"},[_c('div',{staticClass:"col-md-12 p-0"},[_c('div',{staticClass:"theme-primary partition"},[_c('span',{staticClass:"p-name text-white"},[_vm._v(_vm._s(_vm.$t("ApprovalReport")))])])]),_c('div',{staticClass:"pt-2 mb-1 w-100 d-none d-lg-block"},[_c('div',{staticClass:"input-group customsearchbox"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchQuery),expression:"searchQuery"}],staticClass:"form-control searchcustomfilter border-right-0",attrs:{"type":"text","maxlength":"50","placeholder":_vm.Search,"autocomplete":"off"},domProps:{"value":(_vm.searchQuery)},on:{"input":function($event){if($event.target.composing){ return; }_vm.searchQuery=$event.target.value}}}),_vm._m(0)])]),_c('div',{staticClass:"mt-2",staticStyle:{"max-height":"700px"},attrs:{"id":"divscrollsetuptabs"}},[_c('ul',{staticClass:"nav nav-pills flex-column left-tab responivecustomtab lefttabiconfix lefttabflexible",attrs:{"id":"upper","role":"tablist"}},_vm._l((_vm.filteredTabs),function(tab,index){return _c('li',{key:index},[_c('a',{staticClass:"nav-link left-menu",class:{ active: _vm.activeKey === tab.index },attrs:{"data-toggle":'#' + tab.id},on:{"click":function($event){return _vm.activateTab(tab.index)}}},[_c('i',{class:tab.icon,attrs:{"aria-hidden":"true"}}),_vm._v("  "+_vm._s(_vm.$t(tab.name))+" ")])])}),0)])]),_c('div',{staticClass:"right-content"},[_c('div',{staticClass:"col-md-12 p-0"},[_c('div',{staticClass:"theme-primary partition p-actions-expand",staticStyle:{"overflow":"visible"}},[_c('span',{staticClass:"p-name text-white",attrs:{"id":"spnreporttext"}},[_vm._v(_vm._s(this.$t(_vm.activeTabName)))]),_c('span',{staticClass:"p-actions float-right"},[_c('a',{staticClass:"p-action-btn text-white",staticStyle:{"display":"none"},attrs:{"href":"javascript:;","id":"ancshowmorefilter","title":_vm.$t('Show') + ' ' + _vm.$t('More') + ' ' + _vm.$t('Filter')}},[_c('i',{staticClass:"fa fa-filter",attrs:{"aria-hidden":"true"}}),_c('br'),_vm._v(_vm._s(_vm.$t("Show"))+" "+_vm._s(_vm.$t("More"))+" "+_vm._s(_vm.$t("Filter")))])]),_c('span',{staticClass:"p-actions float-right p-2",staticStyle:{"display":"none"},attrs:{"id":"showDaterange"}}),_vm._m(1)])]),_c('div',{staticClass:"col-md-12 p-0"},[_c('div',{staticClass:"tab-content",attrs:{"id":"myTabContent"}},[_vm._m(2),(_vm.activeKey == 0)?_c('div',{staticClass:"tab-pane",class:{ 'active show': _vm.activeKey == 0 },attrs:{"id":"ProductAssignmentReport"}},[_c('NonRuleUsers')],1):_vm._e(),(_vm.activeKey == 1)?_c('div',{staticClass:"tab-pane",class:{ 'active show': _vm.activeKey == 1 },attrs:{"id":"AuditLogReport"}},[_c('UserWiseApprovalRuleInformation')],1):_vm._e()])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text bg-transparent bg-white border-left-0"},[_c('i',{staticClass:"fa fa-search"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"collapse-head-btns"},[_c('a',{staticClass:"collapse-btns",attrs:{"href":"javascript:;"}},[_c('i',{staticClass:"fa fa-angle-up text-white"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"expand-list"},[_c('a',{staticClass:"expand-list-btn justify-content-center align-items-center",attrs:{"href":"javascript:;"}},[_c('i',{staticClass:"icon-solid arrow-solid-left text-white",staticStyle:{"font-size":"9pt"}})])])}]


// CONCATENATED MODULE: ./src/views/ApprovalReport/Index.vue?vue&type=template&id=3e309494

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7de95e48-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ApprovalReport/UserWiseApprovalRuleInformation.vue?vue&type=template&id=0b2077bb&lang=en
var UserWiseApprovalRuleInformationvue_type_template_id_0b2077bb_lang_en_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('loader',{attrs:{"is-visible":_vm.isLoading}}),_c('dynamic-form',{attrs:{"lang":"en","buttons":_vm.buttons,"schema":_vm.FormSchema},on:{"OnSubmit":_vm.onSubmit}}),_c('div',{staticClass:"row placeholder"},[_c('div',{staticClass:"col-md-12 p-0"},[(_vm.parameter.length>0)?_c('ReportViewer',{attrs:{"parameter":_vm.parameter,"reportPath":_vm.reportPath,"isLoading":_vm.isLoading}}):_vm._e()],1)])],1)}
var UserWiseApprovalRuleInformationvue_type_template_id_0b2077bb_lang_en_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/ApprovalReport/UserWiseApprovalRuleInformation.vue?vue&type=template&id=0b2077bb&lang=en

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7de95e48-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ApprovalReport/ReportViewer.vue?vue&type=template&id=c016ee5c
var ReportViewervue_type_template_id_c016ee5c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('loader',{attrs:{"is-visible":_vm.isLoading}}),_vm._m(0)],1)}
var ReportViewervue_type_template_id_c016ee5c_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"height":"600px"}},[_c('div',{staticStyle:{"width":"100%","min-height":"650px","margin-bottom":"0%","height":"auto"},attrs:{"id":"viewer"}})])}]


// CONCATENATED MODULE: ./src/views/ApprovalReport/ReportViewer.vue?vue&type=template&id=c016ee5c

// EXTERNAL MODULE: ./node_modules/tg-controls_cli/dist/myLib.common.js
var myLib_common = __webpack_require__("240d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ApprovalReport/ReportViewer.vue?vue&type=script&lang=js

//
//
//
//
//
//
//
//
//


/* harmony default export */ var ReportViewervue_type_script_lang_js = ({
  props: {
    reportPath: null,
    parameter: null,
    isLoading: {
      type: Boolean
    }
  },
  data: function () {
    return {
      Token: null
    };
  },
  created: function () {
    debugger;
    this.isLoading = true;
    this.Token = this.GetUserInfo.Token;
  },
  mounted() {
    debugger;
    var vm = this;
    vm.isLoading = true;
    setTimeout(function () {
      $("#viewer").boldReportViewer({
        reportServiceUrl: "https://qatestnewapi.talygen.com/api" + '/ReportViewer',
        //'http://localhost:12597/api/ReportViewer',
        reportPath: vm.reportPath,
        processingMode: "Remote",
        parameters: vm.parameter,
        reportServerUrl: 'http://172.22.23.102/ReportServer',
        // reportServerUrl: 'http://192.168.0.200/ReportServer',
        ajaxBeforeLoad: vm.setReportToken
      });
      vm.isLoading = false;
    }, 2000);
  },
  methods: {
    setReportToken: function (args) {
      args.headers.push({
        Key: 'content-type',
        Value: 'application/json;charset=UTF-8'
      });
      args.headers.push({
        Key: 'Authorization',
        Value: `Bearer ${this.Token}`
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/ApprovalReport/ReportViewer.vue?vue&type=script&lang=js
 /* harmony default export */ var ApprovalReport_ReportViewervue_type_script_lang_js = (ReportViewervue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/views/ApprovalReport/ReportViewer.vue?vue&type=style&index=0&id=c016ee5c&prod&lang=css
var ReportViewervue_type_style_index_0_id_c016ee5c_prod_lang_css = __webpack_require__("c299");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/ApprovalReport/ReportViewer.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ApprovalReport_ReportViewervue_type_script_lang_js,
  ReportViewervue_type_template_id_c016ee5c_render,
  ReportViewervue_type_template_id_c016ee5c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ReportViewer = (component.exports);
// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ApprovalReport/UserWiseApprovalRuleInformation.vue?vue&type=script&lang=js

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



/* harmony default export */ var UserWiseApprovalRuleInformationvue_type_script_lang_js = ({
  components: {
    ReportViewer: ReportViewer
  },
  data() {
    return {
      isLoading: false,
      reportPath: null,
      parameter: [],
      FormSchema: [{
        layoutType: "triple",
        Data: [{
          astype: "TextField",
          label: this.$t("RuleName"),
          name: "RuleName",
          value: null,
          placeholder: "",
          config: {
            options: []
          },
          validationRules: {
            required: false,
            max: 250
          }
        }, {
          astype: "MultiSelectField",
          label: this.$t("Module"),
          name: "Module",
          value: "",
          mode: "tag",
          placeholder: "",
          config: {
            options: []
            //onChange: this.onChangeDropdown,
          }
        }, {
          astype: "MultiSelectField",
          label: this.$t("ApprovalChain"),
          name: "ApprovalChain",
          value: "",
          placeholder: "",
          mode: "tag",
          config: {
            options: []
          }
        }, {
          astype: "MultiSelectField",
          label: this.$t("User"),
          name: "User",
          value: "",
          placeholder: "",
          mode: "tag",
          config: {
            options: []
          }
        }]
      }],
      buttons: [{
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-search pr-2'></i>Search"
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-close pr-2'></i>Clear all",
        onClick: this.ClearAll
      }]
    };
  },
  created() {
    var vm = this;
    this.GetApprovalTypes();
    this.GetApprovalChainsByCompanyId();
    this.LoadUsersByCompanyId();
  },
  methods: {
    async GetApprovalTypes() {
      var vm = this;
      var userTypeID = null;
      var userType = vm.GetUserInfo.UserType;
      if (userType == 'CA') {
        userTypeID = 1;
      } else if (userType == 'PM') {
        userTypeID = 2;
      } else if (userType == 'NU') {
        userTypeID = 3;
      }
      var url = `userTypeID=${userTypeID}`;
      await DataService["a" /* default */].GetApprovalTypes(url).then(response => {
        if (response.data) {
          var json = response.data;
          if (json != null) {
            json.forEach((item, index) => {
              vm.FormSchema[0].Data[1].config.options.push({
                value: item.APPROVAL_TYPE_ID,
                name: item.APPROVAL_TYPE_NAME
              });
            });
          }
        }
      });
    },
    async GetApprovalChainsByCompanyId() {
      var vm = this;
      await DataService["a" /* default */].GetApprovalChainsByCompanyId().then(response => {
        if (response.data) {
          var json = response.data;
          if (json != null) {
            json.forEach((item, index) => {
              vm.FormSchema[0].Data[2].config.options.push({
                value: item.APPROVAL_CHAIN_ID,
                name: item.APPROVAL_CHAIN_NAME
              });
            });
          }
        }
      });
    },
    async LoadUsersByCompanyId() {
      var vm = this;
      var url = `isIncludeLoginUserId=1&approvalGroupIds=&approvalChainIds=&moduleName=${'APPROVALRULE'}&DepartmentIds`;
      await DataService["a" /* default */].LoadUsersByCompanyId(url).then(response => {
        if (response.data) {
          var json = response.data;
          if (json != null) {
            json.forEach((item, index) => {
              vm.FormSchema[0].Data[3].config.options.push({
                value: item.USER_ID,
                name: item.USERNAME
              });
            });
          }
        }
      });
    },
    async onSubmit(e) {
      var vm = this;
      vm.isLoading = true;
      vm.reportPath = '';
      vm.parameter = [];
      var moduleIds = "";
      if (e.Module.length > 0) {
        e.Module.forEach((item, index) => {
          if (index == 0) {
            moduleIds = item.value;
          } else {
            moduleIds += ',' + item.value;
          }
        });
      }
      var chainIds = "";
      if (e.ApprovalChain.length > 0) {
        e.ApprovalChain.forEach((item, index) => {
          if (index == 0) {
            chainIds = item.value;
          } else {
            chainIds += ',' + item.value;
          }
        });
      }
      var userIds = "";
      if (e.User.length > 0) {
        e.User.forEach((item, index) => {
          if (index == 0) {
            userIds = item.value;
          } else {
            userIds += ',' + item.value;
          }
        });
      }
      let myObj = {
        reportName: "userwiseapprovalruleinformation",
        ruleName: e.RuleName,
        moduleIds: moduleIds,
        approvalChainIds: chainIds,
        Idsuser: userIds
      };
      await DataService["a" /* default */].ReportMain(myObj).then(function (response) {
        vm.reportPath = response.data.reportpath;
        vm.parameter = response.data.parameters;
        vm.isLoading = false;
      });
    },
    ClearAll: function () {
      var vm = this;
      vm.FormSchema[0].Data[0].value = '';
      vm.FormSchema[0].Data[1].value = '';
      vm.FormSchema[0].Data[2].value = '';
      vm.FormSchema[0].Data[3].value = '';
      vm.parameter = [];
    }
  }
});
// CONCATENATED MODULE: ./src/views/ApprovalReport/UserWiseApprovalRuleInformation.vue?vue&type=script&lang=js
 /* harmony default export */ var ApprovalReport_UserWiseApprovalRuleInformationvue_type_script_lang_js = (UserWiseApprovalRuleInformationvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/views/ApprovalReport/UserWiseApprovalRuleInformation.vue





/* normalize component */

var UserWiseApprovalRuleInformation_component = Object(componentNormalizer["a" /* default */])(
  ApprovalReport_UserWiseApprovalRuleInformationvue_type_script_lang_js,
  UserWiseApprovalRuleInformationvue_type_template_id_0b2077bb_lang_en_render,
  UserWiseApprovalRuleInformationvue_type_template_id_0b2077bb_lang_en_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var UserWiseApprovalRuleInformation = (UserWiseApprovalRuleInformation_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7de95e48-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ApprovalReport/NonRuleUsers.vue?vue&type=template&id=114ba324
var NonRuleUsersvue_type_template_id_114ba324_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('loader',{attrs:{"is-visible":_vm.isLoading}}),_c('div',[_c('dynamic-form',{attrs:{"lang":"en","buttons":_vm.buttons,"schema":_vm.FormSchema},on:{"OnSubmit":_vm.onSubmit}}),_c('div',{staticClass:"row placeholder"},[_c('div',{staticClass:"col-md-12 p-0"},[(_vm.parameter.length > 0)?_c('ReportViewer',{attrs:{"parameter":_vm.parameter,"reportPath":_vm.reportPath,"isLoading":_vm.isLoading}}):_vm._e()],1)])],1)],1)}
var NonRuleUsersvue_type_template_id_114ba324_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/ApprovalReport/NonRuleUsers.vue?vue&type=template&id=114ba324

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ApprovalReport/NonRuleUsers.vue?vue&type=script&lang=js

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



/* harmony default export */ var NonRuleUsersvue_type_script_lang_js = ({
  components: {
    ReportViewer: ReportViewer
  },
  data() {
    return {
      isLoading: false,
      reportPath: null,
      parameter: [],
      FormSchema: [{
        layoutType: "double",
        Data: [{
          astype: "SelectField",
          label: this.$t("ApprovalType"),
          name: "ApprovalType",
          value: '',
          config: {
            options: []
          }
        }, {
          astype: "TextField",
          label: this.$t("UserName"),
          name: "UserName",
          value: "",
          placeholder: "Search by User Name",
          config: {
            options: []
          }
        }]
      }],
      buttons: [{
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-search pr-2'></i>Search"
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-close pr-2'></i>Clear all",
        onClick: this.ClearAll
      }]
    };
  },
  created() {
    var vm = this;
    this.GetApprovalTypes();
  },
  methods: {
    async GetApprovalTypes() {
      var vm = this;
      var userTypeID = null;
      var userType = vm.GetUserInfo.UserType;
      if (userType == 'CA') {
        userTypeID = 1;
      } else if (userType == 'PM') {
        userTypeID = 2;
      } else if (userType == 'NU') {
        userTypeID = 3;
      }
      var url = `userTypeID=${userTypeID}`;
      await DataService["a" /* default */].GetApprovalTypes(url).then(response => {
        if (response.data) {
          var json = response.data;
          if (json != null) {
            json.forEach((item, index) => {
              vm.FormSchema[0].Data[0].config.options.push({
                value: item.APPROVAL_TYPE_ID,
                name: item.APPROVAL_TYPE_NAME
              });
            });
          }
        }
      });
    },
    async onSubmit(e) {
      var vm = this;
      vm.isLoading = true;
      vm.reportPath = '';
      vm.parameter = [];
      let myObj = {
        reportName: "nonruleuserreport",
        ApprovalTypeIds: e.ApprovalType,
        UserName: e.UserName
      };
      await DataService["a" /* default */].ReportMain(myObj).then(function (response) {
        vm.reportPath = response.data.reportpath;
        vm.parameter = response.data.parameters;
        vm.isLoading = false;
      });
    },
    ClearAll: function () {
      var vm = this;
      vm.FormSchema[0].Data[0].value = '';
      vm.FormSchema[0].Data[1].value = '';
      vm.parameter = [];
    }
  }
});
// CONCATENATED MODULE: ./src/views/ApprovalReport/NonRuleUsers.vue?vue&type=script&lang=js
 /* harmony default export */ var ApprovalReport_NonRuleUsersvue_type_script_lang_js = (NonRuleUsersvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/views/ApprovalReport/NonRuleUsers.vue?vue&type=style&index=0&id=114ba324&prod&lang=css
var NonRuleUsersvue_type_style_index_0_id_114ba324_prod_lang_css = __webpack_require__("5797");

// CONCATENATED MODULE: ./src/views/ApprovalReport/NonRuleUsers.vue






/* normalize component */

var NonRuleUsers_component = Object(componentNormalizer["a" /* default */])(
  ApprovalReport_NonRuleUsersvue_type_script_lang_js,
  NonRuleUsersvue_type_template_id_114ba324_render,
  NonRuleUsersvue_type_template_id_114ba324_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NonRuleUsers = (NonRuleUsers_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ApprovalReport/Index.vue?vue&type=script&lang=js
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
//
//
//
//



/* harmony default export */ var Indexvue_type_script_lang_js = ({
  components: {
    NonRuleUsers: NonRuleUsers,
    UserWiseApprovalRuleInformation: UserWiseApprovalRuleInformation
  },
  data() {
    return {
      activeKey: 0,
      tabNames: ["NonRuleUsers", "UserWiseApprovalRuleInformation"],
      searchQuery: ""
    };
  },
  mounted() {
    this.activateTab(0);
  },
  computed: {
    filteredTabs() {
      if (!this.searchQuery) {
        return this.tabNames.map((name, index) => ({
          name,
          index,
          icon: this.getTabIcon(name)
        }));
      }
      const query = this.searchQuery.toLowerCase();
      return this.tabNames.map((name, index) => ({
        name,
        index,
        icon: this.getTabIcon(name)
      })).filter(tab => this.$t(tab.name).toLowerCase().includes(query));
    },
    activeTabName() {
      return this.tabNames[this.activeKey];
    }
  },
  methods: {
    getTabIcon(name) {
      switch (name) {
        case "NonRuleUsersVue":
        case "UserWiseApprovalRuleInformation":
        default:
          return "";
      }
    },
    activateTab(index) {
      this.activeKey = index;
    }
  }
});
// CONCATENATED MODULE: ./src/views/ApprovalReport/Index.vue?vue&type=script&lang=js
 /* harmony default export */ var ApprovalReport_Indexvue_type_script_lang_js = (Indexvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/views/ApprovalReport/Index.vue





/* normalize component */

var Index_component = Object(componentNormalizer["a" /* default */])(
  ApprovalReport_Indexvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Index = __webpack_exports__["default"] = (Index_component.exports);

/***/ }),

/***/ "0c85":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3e69");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("0d82f925", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "35b2":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("f2a0");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("45ea5a72", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "3e69":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://cdn.boldreports.com/4.2.61/content/material/bold.reports.all.min.css);"]);
exports.push([module.i, "@import url(https://cdn.boldreports.com/external/jquery-1.10.2.min.js);"]);
exports.push([module.i, "@import url(https://cdn.boldreports.com/4.2.61/scripts/common/ej2-base.min.js);"]);
exports.push([module.i, "@import url(https://cdn.boldreports.com/4.2.61/scripts/common/ej2-data.min.js);"]);
exports.push([module.i, "@import url(https://cdn.boldreports.com/4.2.61/scripts/common/ej2-pdf-export.min.js);"]);
exports.push([module.i, "@import url(https://cdn.boldreports.com/4.2.61/scripts/common/ej2-svg-base.min.js);"]);
exports.push([module.i, "@import url(https://cdn.boldreports.com/4.2.61/scripts/data-visualization/ej2-lineargauge.min.js);"]);
exports.push([module.i, "@import url(https://cdn.boldreports.com/4.2.61/scripts/data-visualization/ej2-circulargauge.min.js);"]);
exports.push([module.i, "@import url(https://cdn.boldreports.com/4.2.61/scripts/data-visualization/ej2-maps.min.js);"]);
exports.push([module.i, "@import url(https://cdn.boldreports.com/4.2.61/scripts/common/bold.reports.common.min.js);"]);
exports.push([module.i, "@import url(https://cdn.boldreports.com/4.2.61/scripts/common/bold.reports.widgets.min.js);"]);
exports.push([module.i, "@import url(https://cdn.boldreports.com/4.2.61/scripts/data-visualization/ej.chart.min.js);"]);
exports.push([module.i, "@import url(https://cdn.boldreports.com/4.2.61/scripts/bold.report-viewer.min.js);"]);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "5797":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NonRuleUsers_vue_vue_type_style_index_0_id_114ba324_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("35b2");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NonRuleUsers_vue_vue_type_style_index_0_id_114ba324_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NonRuleUsers_vue_vue_type_style_index_0_id_114ba324_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c299":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportViewer_vue_vue_type_style_index_0_id_c016ee5c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0c85");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportViewer_vue_vue_type_style_index_0_id_c016ee5c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportViewer_vue_vue_type_style_index_0_id_c016ee5c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f2a0":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-treeselect__control{border:1px solid rgba(16,14,14,.4196078431372549)!important}.input-group .w-100 .d-block{position:absolute;margin-top:37px;margin-left:10px}", ""]);
// Exports
module.exports = exports;


/***/ })

}]);
//# sourceMappingURL=chunk-78188d18.js.map