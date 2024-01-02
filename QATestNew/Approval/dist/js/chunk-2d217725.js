(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d217725"],{

/***/ "c783":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7de95e48-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ApprovalChain/AddApprovalChain.vue?vue&type=template&id=4c07ad16&lang=en
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('loader',{attrs:{"is-visible":_vm.isLoading}}),_c('div',[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-12 padding-t_8"},[_c('div',{staticClass:"theme-primary partition-full"},[_c('span',{staticClass:"p-name text-white"},[_vm._v(_vm._s(_vm.$t('AddApprovalChain')))])])])])]),_c('div',{staticClass:"border p-3"},[_c('dynamic-form',{attrs:{"lang":"en","buttons":_vm.buttons,"schema":_vm.FormSchema},on:{"OnSubmit":_vm.onSubmit}}),_c('small',{staticClass:"text-danger"},[_vm._v("Fields marked with an asterisk (*) are mandatory.")])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/ApprovalChain/AddApprovalChain.vue?vue&type=template&id=4c07ad16&lang=en

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ApprovalChain/AddApprovalChain.vue?vue&type=script&lang=js

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


/* harmony default export */ var AddApprovalChainvue_type_script_lang_js = ({
  data() {
    return {
      isLoading: false,
      DataLoaded: 0,
      ApprovalChainId: 0,
      groupList: [],
      TagsSelectedArray: [],
      FormSchema: [{
        layoutType: "triple",
        Data: [{
          astype: "TextField",
          label: this.$t('ApprovalChainName'),
          name: "ApprovalChainName",
          value: "",
          placeholder: "",
          config: {
            onChange: this.checkName
          },
          validationRules: {
            "required": true
          }
        }, {
          astype: "SelectField",
          label: this.$t('Status'),
          name: "Status",
          value: 1001,
          placeholder: "",
          validationRules: {
            "required": true
          },
          config: {
            options: [{
              value: "1001",
              name: 'Active'
            }, {
              value: "1002",
              name: 'Inactive'
            }]
          }
        }, {
          astype: "MultiSelectField",
          label: this.$t('SelectApprovalGroup'),
          name: "ApprovalGroup",
          value: "",
          mode: "tag",
          placeholder: "",
          validationRules: {
            "required": true
          },
          config: {
            options: []
          }
        }]
      }, {
        layoutType: "Single",
        Data: [{
          astype: "TextAreaField",
          label: this.$t('Description'),
          name: "Description",
          value: "",
          placeholder: "",
          validationRules: {
            "required": false
          }
        }]
      }],
      buttons: [{
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>Save"
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-close pr-2'></i>Cancel",
        onClick: this.onCancel
      }]
    };
  },
  created: async function () {
    await this.GetApprovalGroups();
    if (this.$route.params.id != null) {
      this.ApprovalChainId = this.$route.params.id;
      await this.GetApprovalGroups();
      await this.ManageChain();
    }
    this.DataLoaded = 1;
  },
  methods: {
    onSubmit: function (formfields) {
      var vm = this;
      var jsonobj = {
        ApprovalChainId: vm.ApprovalChainId,
        ApprovalChainName: formfields.ApprovalChainName,
        StatusId: formfields.Status,
        Groups: Array.prototype.map.call(formfields.ApprovalGroup, function (item) {
          return item.value;
        }).join(","),
        Description: formfields.Description
      };
      var poststring = JSON.stringify(jsonobj);
      DataService["a" /* default */].AddApprovalChain(poststring).then(response => {
        if (response.data == '-1') {
          vm.ShowAlert(vm.$t('AlreadyExists'), "warning", true, vm.$t("Alert"));
          vm.onCancel();
        } else if (response.data == '-2') {
          vm.ShowAlert(vm.$t('AlreadyExists'), "warning", true, vm.$t("Alert"));
          vm.onCancel();
        } else if (response.data == '-3') {
          vm.ShowAlert(vm.$t("Something went Wrong"), "failure", true, vm.$t('Alert'));
          vm.onCancel();
        } else {
          vm.ShowAlert(vm.$t("ApprovalChainSuccessfullyAdded"), "Success", true, vm.$t('Alert'));
          vm.onCancel();
        }
      });
    },
    GetApprovalGroups: async function () {
      var vm = this;
      DataService["a" /* default */].GetApprovalGroupByCompanyId().then(response => {
        var json = response.data;
        if (json != null) {
          json.forEach(function (item, index) {
            vm.FormSchema[0].Data[2].config.options.push({
              name: item.APPROVAL_GROUP_NAME,
              value: `${item.APPROVAL_GROUP_ID}`
            });
          });
        }
      });
    },
    ManageChain: async function () {
      var vm = this;
      vm.isLoading = true;
      var url = `id=${this.$route.params.id}`;
      await DataService["a" /* default */].GetByChainId(url).then(response => {
        var chainData = JSON.parse(response.data);
        if (chainData.length > 0) {
          this.FormSchema[0].Data[0].value = chainData[0].approval_chain_name;
          this.FormSchema[0].Data[1].value = chainData[0].status_id;
          vm.groupList = chainData[0].GROUPS.split(",");
          var UserList = [];
          for (let i = 0; i < vm.groupList.length - 1; i++) {
            UserList.push(vm.groupList[i]);
          }
          UserList.forEach(item => {
            var obj = vm.FormSchema[0].Data[2].config.options.find(x => x.value == item);
            if (obj != undefined) {
              vm.TagsSelectedArray.push({
                label: obj.name,
                value: obj.value
              });
            }
          });
          this.FormSchema[0].Data[2].value = vm.TagsSelectedArray;
          this.FormSchema[1].Data[0].value = chainData[0].description;
        }
      });
      vm.isLoading = false;
    },
    onCancel: function () {
      this.$router.push({
        name: 'Approval Chain'
      });
    },
    checkName(e, Fields) {
      var vm = this;
      var chainName = Fields.value;
      var url = `ApprovalChainName=${chainName}`;
      DataService["a" /* default */].CheckDuplicate(url).then(response => {
        if (response.data == true && vm.FormSchema[0].Data[0].value) {
          vm.FormSchema[0].Data[0].value = '';
          vm.ShowAlert(vm.$t('ChainExist'), "warning", true, vm.$t("Alert"));
          vm.FormSchema[0].Data[0].validationRules.required = true;
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/ApprovalChain/AddApprovalChain.vue?vue&type=script&lang=js
 /* harmony default export */ var ApprovalChain_AddApprovalChainvue_type_script_lang_js = (AddApprovalChainvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/ApprovalChain/AddApprovalChain.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ApprovalChain_AddApprovalChainvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddApprovalChain = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d217725.js.map