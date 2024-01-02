(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0b9b6b"],{

/***/ "33b7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7de95e48-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ApprovalRule/AddApprovalRule.vue?vue&type=template&id=a4f45340
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('loader',{attrs:{"is-visible":_vm.isLoading}}),_c('div',{staticClass:"border p-3"},[_c('dynamic-form',{attrs:{"lang":"en","buttons":_vm.buttons,"schema":_vm.FormSchema},on:{"OnSubmit":_vm.onSubmit},scopedSlots:_vm._u([{key:"tgslot-Approval",fn:function(ref){
var data = ref.data;
return [_c('div',{staticClass:"input-group"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(data.fieldInfo.value),expression:"data.fieldInfo.value"}],staticClass:"form-control",attrs:{"maxlength":5,"step":"any"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(data.fieldInfo, "value", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"selected":"","value":"0"}},[_vm._v("Select Approval Chain")]),_vm._l((_vm.ApprovalChainList),function(item){return _c('option',{domProps:{"value":item.APPROVAL_CHAIN_ID}},[_vm._v(_vm._s(item.APPROVAL_CHAIN_NAME))])})],2),_c('span',{staticClass:"input-group-append"},[_c('a',{staticClass:"input-group-text",attrs:{"id":"spnOutOF"},on:{"click":function($event){return _vm.ShowGroupPopup(data.fieldInfo.value)}}},[_c('i',{staticClass:"fa fa-eye"})])])])]}}])}),_c('small',{staticClass:"text-danger"},[_vm._v("Fields marked with an asterisk (*) are mandatory.")]),(_vm.IsShowGroup)?_c('ApprovalGroup',{attrs:{"ApprovalchainId":_vm.ApprovalchainId,"ApprovalchainName":_vm.ApprovalchainName}}):_vm._e()],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/ApprovalRule/AddApprovalRule.vue?vue&type=template&id=a4f45340

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./node_modules/tg-controls_cli/dist/myLib.common.js
var myLib_common = __webpack_require__("240d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7de95e48-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Model/ApprovalGroupPopup.vue?vue&type=template&id=5b0b61a8
var ApprovalGroupPopupvue_type_template_id_5b0b61a8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"my-popups"},[_c('div',{staticClass:"modal d-block"},[_c('div',{staticClass:"modal-dialog modal-dialog-centered",staticStyle:{"max-width":"900px !important"}},[_c('div',{staticClass:"modal-content"},[_c('div',{staticClass:"modal-header theme-primary partition-full"},[_c('h4',{staticClass:"modal-title"},[_vm._v(_vm._s(_vm.$t('ApprovalChain'))+": "+_vm._s(this.ChainName)+" ")]),_c('button',{staticClass:"close",attrs:{"type":"button"},on:{"click":_vm.ClosePopup}},[_c('em',{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),_c('div',{staticClass:"modal-body"},[_c('div',{staticClass:"col-md-12"},[_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"listing OuterMainDiv"},[_c('div',{staticClass:"row",staticStyle:{"max-height":"500px","overflow-y":"auto"}},[_c('tg-list',{attrs:{"IsShowAction":false,"listType":['List'],"ModuleName":"Approval","SubModuleCode":"ApprovalRule","IdentityColumn":"APPROVALCHAINGROUPMAPID","ListData":_vm.GroupData,"HeaderData":_vm.Headers,"callbackfunction":_vm.FetchData,"TotalRecords":_vm.TotalRecords,"ListDataCallBackFunction":_vm.FetchData,"SortExp":_vm.SortExp,"SortBy":_vm.SortBy,"NorecordfoundText":_vm.$t('NoRecordfound')},on:{"PagerButtonClick":_vm.pagerMethod},scopedSlots:_vm._u([{key:"slotdata",fn:function(ref){
var data = ref.data;
return [(data.column.COLUMN_NAME == 'GROUPNAME')?[_vm._v(" "+_vm._s(data.row.GROUPNAME)+" ")]:_vm._e(),(data.column.COLUMN_NAME == 'USERS')?[_vm._v(" "+_vm._s(data.row.USERS)+" ")]:_vm._e(),(data.column.COLUMN_NAME == 'APPROVERORDER')?[_vm._v(" "+_vm._s(data.row.APPROVERORDER)+" ")]:_vm._e(),(data.column.COLUMN_NAME == 'Action')?[_c('td',{staticClass:"text-center single-action"},[_c('div',{staticClass:"cstm-drop-btn"},[_c('span',[_c('a',{on:{"click":function($event){return _vm.DeleteApprovalGroup(data.row)}}},[_c('em',{staticClass:"text-primary",attrs:{"aria-hidden":"true"}},[_c('i',{staticClass:"fa fa-trash text-danger action-icon"})])])])])])]:_vm._e(),(data.column.COLUMN_NAME == 'RankUp' && _vm.GroupData.length > 1)?[(data.row.APPROVERORDER > 1)?[_c('span',[_c('a',{on:{"click":function($event){return _vm.RankUpDown(data.row.APPROVALCHAINGROUPMAPID, 'RankUp')}}},[_c('em',{staticClass:"text-primary",attrs:{"aria-hidden":"true"}},[_c('i',{staticClass:"fa fa-arrow-up text-primary action-icon down"})])])])]:_vm._e()]:_vm._e(),(data.column.COLUMN_NAME == 'RankDown' && _vm.GroupData.length > 1)?[(data.row.APPROVERORDER < _vm.GroupData.length)?[_c('span',[_c('a',{on:{"click":function($event){return _vm.RankUpDown(data.row.APPROVALCHAINGROUPMAPID, 'RankDown')}}},[_c('em',{staticClass:"text-primary",attrs:{"aria-hidden":"true"}},[_c('i',{staticClass:"fa fa-arrow-down text-primary action-icon down"})])])])]:_vm._e()]:_vm._e()]}}])})],1)])])])])])])])])}
var ApprovalGroupPopupvue_type_template_id_5b0b61a8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Model/ApprovalGroupPopup.vue?vue&type=template&id=5b0b61a8

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Model/ApprovalGroupPopup.vue?vue&type=script&lang=js
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


/* harmony default export */ var ApprovalGroupPopupvue_type_script_lang_js = ({
  // props: {
  //     ApprovalchainId: String

  // },
  props: {
    ApprovalchainId: {
      type: String
    },
    ApprovalchainName: {
      type: String
    }
  },
  data() {
    return {
      ChainName: '',
      leftSearchFields: [],
      TotalRecords: 0,
      listheaderbuttons: [],
      GroupData: [],
      IsShowGroup: false,
      Headers: [{
        "COLUMN_NAME": 'GROUPNAME',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('ApprovalGroupName'),
        "DISPLAY_ORDER": 1,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": 'USERS',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Users'),
        "DISPLAY_ORDER": 2,
        settings: {
          isInSlot: true
        }
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
        "DISPLAY_ORDER": 5,
        settings: {
          isInSlot: true
        }
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
    debugger;
    var vm = this;
    vm.ChainName = vm.ApprovalchainName;
    var id = vm.ApprovalchainId;
    vm.FetchData();
  },
  methods: {
    async FetchData() {
      var vueObj = this;
      var url = `approvalChainId=${vueObj.ApprovalchainId}`;
      DataService["a" /* default */].ApprovalGroupListByApprovalCHainId(url).then(response => {
        if (response.data != null) {
          if (response.data.length > 0) {
            vueObj.GroupData = response.data;
            //vueObj.TotalRecords = response.data[0].TotalRecords
            //vueObj.TotalPages = Math.ceil(vueObj.TotalRecords / vueObj.PageSize);
            //vueObj.CurrentPage = vueObj.PageNumber;
            vueObj.noRecord = false;
          } else {
            vueObj.GroupData = [];
            vueObj.noRecord = true;
            vueObj.TotalRecords = 0;
          }
        } else {
          vueObj.noRecord = true;
          vueObj.GroupData = [];
          vueObj.TotalRecords = 0;
        }
        setTimeout(function () {
          vueObj.CheckBoxBootstrap();
        }, 100);
      });
      vueObj.isLoading = false;
    },
    ClosePopup() {
      var vm = this;
      vm.$parent.CloseGroupPopup();
    },
    DeleteApprovalGroup(data) {
      debugger;
      var vm = this;
      vm.confirmR(vm.$t("ConfirmDelete"), true, vm.$t("Delete") + "  ", function () {
        vm.isLoading = true;
        var param = `id=${data.APPROVALCHAINGROUPMAPID}`;
        DataService["a" /* default */].DeleteApprovalGroup(param).then(response => {
          if (response.data == '0') {
            vm.ShowAlert(vm.$t('DeletedSuccessfully'), "success", true, vm.$t("Alert"));
          } else if (response.data == '-1') {
            vm.ShowAlert(vm.$t('Unable to delete,approval chain requires at least one group'), "warning", true, vm.$t("Alert"));
          }
          vm.isLoading = false;
          vm.FetchData();
        });
      });
    },
    RankUpDown(GetId, GetName) {
      debugger;
      var vm = this;
      vm.isLoading = true;
      var Chainid = vm.ApprovalchainId;
      var GetIndex = vm.GroupData.findIndex(x => x.APPROVALCHAINGROUPMAPID === GetId);
      if (GetName == 'RankUp') {
        var GetNextId = vm.GroupData[GetIndex - 1].APPROVALCHAINGROUPMAPID;
      } else {
        var GetNextId = vm.GroupData[GetIndex + 1].APPROVALCHAINGROUPMAPID;
      }
      vm.confirmR(vm.$t('VerifysequenceofApprovalGroup'), true, false, function (result) {
        var url = `approvalChainId=${Chainid}&approvalChainApprovalGroupMapId1=${GetId}&approvalChainApprovalGroupMapId2=${GetNextId}`;
        DataService["a" /* default */].SwapApproverOrder(url).then(response => {
          debugger;
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
    commonHeaderButtonClick(event) {
      switch (event.callbackfunction) {
        case "DeleteRule":
          this.DeleteRule();
          break;
        case "AddNewGroup":
          this.AddNewGroup();
          break;
      }
    },
    actionButtonClick(callbackfunction, item) {},
    pagerMethod: function (value) {
      this.PageSize = value.PageSize;
      this.PageNumber = value.PageNumber;
      this.FetchData();
    },
    renderActions(row) {}
  }
});
// CONCATENATED MODULE: ./src/components/Model/ApprovalGroupPopup.vue?vue&type=script&lang=js
 /* harmony default export */ var Model_ApprovalGroupPopupvue_type_script_lang_js = (ApprovalGroupPopupvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Model/ApprovalGroupPopup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Model_ApprovalGroupPopupvue_type_script_lang_js,
  ApprovalGroupPopupvue_type_template_id_5b0b61a8_render,
  ApprovalGroupPopupvue_type_template_id_5b0b61a8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ApprovalGroupPopup = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ApprovalRule/AddApprovalRule.vue?vue&type=script&lang=js

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




/* harmony default export */ var AddApprovalRulevue_type_script_lang_js = ({
  components: {
    ApprovalGroup: ApprovalGroupPopup,
    TreeSelectField: myLib_common["TreeSelectField"]
  },
  data() {
    return {
      Usersdata: [],
      ApprovalchainName: '',
      ApprovalChainList: [],
      FormSchema: [{
        layoutType: "four",
        Data: [{
          astype: "TreeSelectField",
          label: this.$t('Location'),
          name: "Location",
          value: null,
          placeholder: "Select Location",
          disabled: true,
          visibility: false,
          config: {
            options: []
          },
          validationRules: {
            "required": true
          }
        }, {
          astype: "TextField",
          label: this.$t('AuditRuleName'),
          name: "AuditRule",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true,
            max: 250
          }
        }, {
          astype: "SelectField",
          label: this.$t('Module'),
          name: "Module",
          value: 2,
          placeholder: "",
          config: {
            options: [{
              value: 2,
              name: "Expense"
            }, {
              value: 3,
              name: "Leave"
            }, {
              value: 4,
              name: "Timesheet"
            }, {
              value: 5,
              name: "Attendance"
            }, {
              value: 6,
              name: "Product"
            }],
            onChange: this.OnDeploymentType
          }

          // validationRules: { "required": true },
        }, {
          astype: "SelectField",
          label: this.$t('Project'),
          name: "project_name",
          value: '',
          placeholder: "",
          visibility: true,
          config: {
            options: [],
            onChange: this.GetUserbyProject
          },
          validationRules: {
            "required": true
          }
        }, {
          astype: "MultiSelectField",
          label: this.$t('Users'),
          name: "User",
          value: null,
          mode: "tag",
          placeholder: "",
          validationRules: {
            "required": true
          },
          config: {
            options: []
          }
        }, {
          astype: "toggleField",
          label: this.$t('LimitedDuration'),
          name: "Limited_Duration",
          value: 0,
          placeholder: "",
          visibility: true,
          validationRules: {
            "required": false
          }
        }, {
          astype: "RadioField",
          label: this.$t('ApprovalType'),
          name: "Approvaltype",
          value: 1,
          placeholder: "",
          config: {
            options: [{
              value: 1,
              name: "Approval Chain"
            }, {
              value: 2,
              name: "Client "
            }, {
              value: 3,
              name: "Both"
            }],
            onChange: this.OnApprovalType
            //CallBackFunction: null
          },

          validationRules: {
            "required": false
          }
        }, {
          astype: "SlotField",
          label: this.$t('SelectApproval'),
          name: "Approval",
          value: "0",
          placeholder: "",
          validationRules: {
            "required": false,
            max: 5,
            "min_value": 1
          },
          visibility: true,
          config: {
            onKeyUp: this.GetAssetCost
          }
        },
        // {
        //     astype: "SelectField",
        //     label: this.$t('SelectApproval'),
        //     name: "project_name",
        //     value: "",
        //     placeholder: "",
        //     visibility:true,
        //     config: {
        //         options: [],

        //     },
        //     validationRules: { "required": true },
        // },
        {
          astype: "MultiSelectField",
          label: this.$t('SelectClient'),
          name: "Client",
          value: null,
          mode: "Select Client",
          visibility: false,
          placeholder: "",
          config: {
            options: []
          },
          validationRules: {
            "required": true
          }
        }, {
          astype: "SelectField",
          label: 'Status',
          name: "Status_value",
          value: 1001,
          config: {
            options: [{
              value: 1001,
              name: "Active"
            }, {
              value: 1002,
              name: "Inactive"
            }]
          },
          validationRules: {
            "required": true
          }
        }, {
          astype: "toggleField",
          label: this.$t('UseSequence'),
          name: "Sequence",
          value: 0,
          placeholder: "",
          validationRules: {
            "required": false
          }
        }]
      },
      // {
      //     layoutType: "One",
      //     Data: [

      //     ]
      // },
      {
        layoutType: "One",
        Data: [{
          astype: "TextAreaField",
          label: this.$t('Description'),
          name: "Description",
          value: null,
          placeholder: ""
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
      }],
      myObj: [],
      LocationData: [],
      StatusData: [{
        name: 'Active',
        value: 1001
      }, {
        name: 'Inactive',
        value: 1002
      }],
      projectdata: [],
      StateData: [],
      TagData: [],
      UserList: [],
      TagsSelectedArray: [],
      DataLoaded: 0,
      UserId: '',
      IsShowGroup: false,
      ApprovalchainId: null,
      ApprovalChainList: [],
      ApprovalID: 0,
      ApprovalRuleId: 0,
      isLoading: false,
      ApprovaltypesId: 0,
      ClientData: [],
      ClientSelectedArray: []
    };
  },
  async created() {
    debugger;
    //this.isLoading = true
    await this.GetLocation();
    await this.GetProjectList();
    await this.GetApprovalChain();
    if (this.$route.params.id != null) {
      this.ApprovalRuleId = this.$route.params.id;
      //this.GetUserbyProject();
      await this.ManageRule();
      await this.OnDeploymentType(this.ApprovalID);
      if (this.ApprovaltypesId != null) {
        await this.OnApprovalType(this.ApprovaltypesId);
      }

      //this.isLoading = false
    }

    //this.isLoading = false
  },

  methods: {
    onSubmit: function (formfields) {
      if (formfields.Approvaltype == 1) {
        var approvaltype = "ApprovalChain";
      } else if (formfields.Approvaltype == 2) {
        var approvaltype = "Client";
      } else {
        var approvaltype = "Both";
      }
      var vm = this;
      var jsonobj = {
        ApprovalRuleId: vm.ApprovalRuleId != 0 ? vm.ApprovalRuleId : 0,
        RuleName: formfields.AuditRule,
        RuleDescription: formfields.Description,
        ApprovalTypeId: formfields.Module,
        IsLimitedDuration: formfields.Limited_Duration,
        dStart: null,
        dEnd: null,
        //RuleBaseType: formfields.Description,
        ProjectId: formfields.project_name == null ? null : formfields.project_name,
        Users: formfields.User == null ? null : formfields.User,
        Tasks: null,
        Clients: formfields.Client == null ? null : formfields.Client.value == undefined ? null : formfields.Client.value,
        ClientApprovalType: formfields.Approvaltype == null ? null : approvaltype,
        LocationId: formfields.Location == null ? null : formfields.Location,
        ApprovalChainId: formfields.Approval,
        UseSequence: formfields.Sequence,
        StatusId: formfields.Status_value,
        Users: formfields.User == null ? null : Array.prototype.map.call(formfields.User, function (item) {
          return item.value;
        }).join(",")
      };
      var poststring = JSON.stringify(jsonobj);
      debugger;
      DataService["a" /* default */].AddRule(poststring).then(response => {
        debugger;
        if (response.data == true) {
          this.$router.push({
            name: 'ApprovalRule'
          });
          vm.ShowAlert("Approval Rule SuccessFully added ", 'success', true, vm.$t('Alert'));
        }
      });
    },
    ManageRule: async function () {
      var vm = this;
      vm.isLoading = true;
      var url = `id=${this.$route.params.id}`;
      await DataService["a" /* default */].GetRuleById(url).then(async response => {
        var RuleData = JSON.parse(response.data);
        vm.ApprovalID = RuleData[0].APPROVAL_TYPE_ID;
        vm.ApprovaltypesId = RuleData[0].APPROVAL_TYPE == "ApprovalChain" ? 1 : RuleData[0].APPROVAL_TYPE == "Client" ? 2 : RuleData[0].APPROVAL_TYPE == "Both" ? 3 : null;
        vm.Approvaltype;
        if (RuleData.length > 0) {
          this.FormSchema[0].Data[0].value = RuleData[0].LOCATION_ID;
          this.FormSchema[0].Data[1].value = RuleData[0].RULE_NAME;
          this.FormSchema[0].Data[2].value = RuleData[0].APPROVAL_TYPE_ID;
          this.FormSchema[0].Data[3].value = RuleData[0].PROJECT_ID;
          if (RuleData[0].PROJECT_ID != 0) {
            await vm.GetUserbyProject(RuleData[0].PROJECT_ID);
          } else {
            await vm.GetUsers();
          }
          this.FormSchema[0].Data[4].value = RuleData[0].USERS;
          vm.UserList = RuleData[0].USERS != null ? RuleData[0].USERS.split(",") : RuleData[0].USERS;
          if (vm.UserList != null) {
            debugger;
            var listUsers = [];
            for (let i = 0; i < vm.UserList.length - 1; i++) {
              listUsers.push(vm.UserList[i]);
            }
            listUsers.forEach(item => {
              var obj = vm.projectdata.length > 0 ? vm.projectdata.find(x => x.USER_ID == item) : vm.Usersdata.find(x => x.USER_ID == item);
              if (obj != undefined) {
                if (obj.USER_NAME != undefined) {
                  vm.TagsSelectedArray.push({
                    label: obj.USER_NAME,
                    value: obj.USER_ID
                  });
                } else {
                  vm.TagsSelectedArray.push({
                    label: obj.USERNAME,
                    value: obj.USER_ID
                  });
                }
              }
            });
            this.FormSchema[0].Data[4].value = vm.TagsSelectedArray;
          }
          this.FormSchema[0].Data[5].value = RuleData[0].IS_LIMITED_DURATION;
          this.FormSchema[0].Data[6].value = RuleData[0].APPROVAL_TYPE == "ApprovalChain" ? 1 : RuleData[0].APPROVAL_TYPE == "Client" ? 2 : RuleData[0].APPROVAL_TYPE == "Both" ? 3 : null;
          this.FormSchema[0].Data[7].value = RuleData[0].APPROVAL_CHAIN_ID;
          await vm.GetClientbyProject(RuleData[0].PROJECT_ID);
          this.FormSchema[0].Data[8].value = RuleData[0].CLIENTS != null ? RuleData[0].CLIENTS : RuleData[0].CLIENTS;
          vm.ClienList = RuleData[0].CLIENTS != null ? RuleData[0].USERS.split(",") : RuleData[0].CLIENTS;
          if (vm.ClienList != null) {
            debugger;
            var ClienList = [];
            for (let i = 0; i < vm.ClientData.length; i++) {
              ClienList.push(vm.ClientData[i]);
            }
            ClienList.forEach(item => {
              var obj = vm.ClientData.find(x => x.USER_ID == item.USER_ID);
              {
                vm.ClientSelectedArray.push({
                  label: obj.USERNAME,
                  value: obj.USER_ID
                });
              }
            });
            this.FormSchema[0].Data[8].value = vm.ClientSelectedArray;
          }
          this.FormSchema[0].Data[9].value = RuleData[0].STATUS_ID;
          this.FormSchema[0].Data[10].value = RuleData[0].USE_SEQUENCE;
          this.FormSchema[1].Data[0].value = RuleData[0].RULE_DESCRIPTION;
        }
        vm.isLoading = false;
      });
    },
    GetProjectList: async function () {
      // var usertype = GetUserInfo.value.UserType;${usertype}
      var vm = this;
      var url = `userType=CA&IsEncrptedId='no'`;
      DataService["a" /* default */].GetProjectListing(url).then(response => {
        var json = response.data;
        //  var array = JSON.parse("[" + json + "]");
        if (json != null) {
          json.forEach(function (item, index) {
            vm.FormSchema[0].Data[3].config.options.push({
              name: `${item.ProjectName}`,
              value: `${item.ProjectId}`
            });
          });
          // return vm.LeadStatusList;
        }
      });
    },

    GetUserbyProject: async function (e, field) {
      var vm = this;
      vm.FormSchema[0].Data[4].config.options = [];
      if (field == undefined) {
        var url = `ProjectId=${e}&ModuleName=APPROVALRULE`;
      } else {
        var url = `ProjectId=${field.value}&ModuleName=APPROVALRULE`;
      }
      await DataService["a" /* default */].GetUsersByProjectId(url).then(response => {
        vm.projectdata = response.data;
        if (vm.projectdata != null) {
          vm.projectdata.forEach(function (item, index) {
            vm.FormSchema[0].Data[4].config.options.push({
              name: `${item.USER_NAME}`,
              value: `${item.USER_ID}`
            });
          });
        }
        if (field != undefined) {
          this.GetClientbyProject(e, field);
        }
      });
    },
    GetClientbyProject: async function (e, field) {
      var vm = this;
      // vm.FormSchema[0].Data[5].config.options=[];
      var url = field != undefined ? `ProjectId=${field.value}` : `ProjectId=${e}`;
      await DataService["a" /* default */].LoadClientByProjectId(url).then(response => {
        vm.ClientData = response.data;
        if (vm.ClientData != null) {
          vm.ClientData.forEach(function (item, index) {
            vm.FormSchema[0].Data[8].config.options.push({
              name: `${item.USERNAME}`,
              value: `${item.USER_ID}`
            });
          });
          //return vm.LeadStatusList;
        }
      });
    },

    GetUsers: async function () {
      var vm = this;
      vm.FormSchema[0].Data[4].config.options = [];
      var url = `isIncludeLoginUserId=1&approvalGroupIds=&approvalChainIds=&moduleName=APPROVALRULE&DepartmentIds`;
      await DataService["a" /* default */].LoadUsersByCompanyId(url).then(response => {
        vm.Usersdata = response.data;
        if (vm.Usersdata != null) {
          vm.Usersdata.forEach(function (item, index) {
            vm.FormSchema[0].Data[4].config.options.push({
              name: `${item.USERNAME}`,
              value: `${item.USER_ID}`
            });
          });
        }
      });
    },
    GetApprovalChain: async function () {
      var vm = this;
      DataService["a" /* default */].GetApprovalChainsByCompanyId().then(response => {
        vm.ApprovalChainList = response.data;
      });
    },
    onCancel: function () {
      this.$router.push({
        name: 'ApprovalRule'
      });
    },
    ShowGroupPopup(targetValue) {
      const foundElement = this.ApprovalChainList.find(element => element.APPROVAL_CHAIN_ID === targetValue);
      this.ApprovalchainId = foundElement.APPROVAL_CHAIN_ID;
      this.ApprovalchainName = foundElement.APPROVAL_CHAIN_NAME;
      this.IsShowGroup = true;
    },
    CloseGroupPopup() {
      var vm = this;
      vm.IsShowGroup = false;
    },
    async GetLocation() {
      var vm = this;
      var params = `reqForm=`;
      await DataService["a" /* default */].GetLocationByCompanyId(params).then(response => {
        vm.LocationData = response.data;
        vm.FindalLocationArray = [];
        vm.LocationData.forEach(value => {
          var CheckIfExist = vm.FindalLocationArray.filter(function (el) {
            return el.COMPANY_LOCATION_ID == value.COMPANY_LOCATION_ID;
          });
          if (CheckIfExist.length == 0) {
            if (value.PARENT_LOCATION_ID == null) {
              let locationId = value.COMPANY_LOCATION_ID;
              let rslt = vm.getChildLocation(locationId, value, response.data);
              vm.FindalLocationArray.push(rslt);
            }
          }
        });
        vm.FormSchema[0].Data[0].config.options = vm.FindalLocationArray;
      });
    },
    getChildLocation: function (locationId, currentItem, data) {
      let ths = this;
      let treeArray = {};
      treeArray = {
        id: currentItem.COMPANY_LOCATION_ID,
        label: currentItem.LOCATION_NAME
      };
      let retrunArray = treeArray;
      var childArray = data.filter(function (el) {
        return el.PARENT_LOCATION_ID == locationId;
      });
      let finalChildArray = [];
      childArray.forEach(value => {
        let ChildfolderId = value.COMPANY_LOCATION_ID;
        var CheckIfExist1 = finalChildArray.filter(function (el) {
          return el.COMPANY_LOCATION_ID == value.COMPANY_LOCATION_ID;
        });
        if (CheckIfExist1.length == 0) {
          var CheckIfExist = data.filter(function (el) {
            return el.PARENT_LOCATION_ID == ChildfolderId;
          });
          if (CheckIfExist != null && CheckIfExist.length > 0) {
            let rslt = ths.getChildLocation(ChildfolderId, value, data);
            finalChildArray.push(rslt);
          } else {
            treeArray = {
              id: `${value.COMPANY_LOCATION_ID}`,
              label: `${value.LOCATION_NAME}`
            };
            finalChildArray.push(treeArray);
          }
        }
      });
      retrunArray.children = finalChildArray;
      return retrunArray;
    },
    async OnDeploymentType(event, field) {
      var vm = this;
      vm.isLoading = true;
      //field.value = event.target.getAttribute('data-value');
      if (field != undefined ? field.value == 2 : event == 2) {
        vm.FormSchema[0].Data[4].visibility = true;
        vm.FormSchema[0].Data[3].visibility = true;
        vm.FormSchema[0].Data[6].visibility = true;
        vm.FormSchema[0].Data[0].visibility = false;
        vm.FormSchema[0].Data[5].visibility = true;
        if (this.$route.params.id == null) {
          vm.FormSchema[0].Data[4].config.options = [];
        }
      }
      if (field != undefined ? field.value == 3 : event == 3) {
        debugger;
        vm.FormSchema[0].Data[4].visibility = true;
        vm.FormSchema[0].Data[0].visibility = false;
        vm.FormSchema[0].Data[5].visibility = true;
        vm.FormSchema[0].Data[8].value = '';
        //vm.FormSchema[0].Data[6].config.options=[];
        // vm.FormSchema[0].Data[3].config.options=[];
        //vm.FormSchema[0].Data[3].value = 0;
        vm.FormSchema[0].Data[3].visibility = false;
        //  vm.FormSchema[0].Data[4].value= '';
        //  vm.FormSchema[0].Data[4].config.options=[];
        vm.FormSchema[0].Data[0].value = '';
        vm.FormSchema[0].Data[6].visibility = false;
        await vm.GetUsers();
      }
      if (field != undefined ? field.value == 4 : event == 4) {
        vm.FormSchema[0].Data[4].visibility = true;
        vm.FormSchema[0].Data[3].visibility = true;
        vm.FormSchema[0].Data[6].visibility = true;
        vm.FormSchema[0].Data[0].visibility = false;
        vm.FormSchema[0].Data[5].visibility = true;
        if (this.$route.params.id == null) {
          vm.FormSchema[0].Data[4].config.options = [];
        }
        //GetProjectList();
      }

      if (field != undefined ? field.value == 5 : event == 5) {
        vm.FormSchema[0].Data[3].visibility = false;
        vm.FormSchema[0].Data[6].visibility = false;
        vm.FormSchema[0].Data[0].visibility = false;
        vm.FormSchema[0].Data[5].visibility = true;
        vm.FormSchema[0].Data[8].config.options = [];
        // vm.FormSchema[0].Data[5]=[];
        // vm.FormSchema[0].Data[6].config.options=[];
        // vm.FormSchema[0].Data[3].config.options=[];
        // vm.FormSchema[0].Data[0].config.options=[];
        await vm.GetUsers();
      }
      if (field != undefined ? field.value == 6 : event == 6) {
        vm.FormSchema[0].Data[3].visibility = false;
        vm.FormSchema[0].Data[4].visibility = false;
        vm.FormSchema[0].Data[6].visibility = true;
        vm.FormSchema[0].Data[5].visibility = false;
        vm.FormSchema[0].Data[0].visibility = true;
        vm.FormSchema[0].Data[8].config.options = [];
        // vm.GetLocation();
      }

      // var data = vm.FormSchema[0].Data[2].config.options;
      //  data.forEach(item => {
      //     field = field != undefined ? field.value : event
      //     if(item.value == field){
      //         vm.FormSchema[0].Data[2].config.value(item.value);
      //     }
      // var checkvalue = data.find(item.value == field.value);
      // if(checkvalue > -1 ){
      //     vm.FormSchema[0].Data[2].config.value(item.value);
      // }
      //})
      vm.isLoading = false;
      vm.FormSchema[0].Data[8].config.options = [];
    }
  },
  OnApprovalType(event, field) {
    debugger;
    var vm = this;
    vm.isLoading = true;
    //     field.value = event.target.getAttribute('data-value');
    if (field != undefined ? field.value == 1 : event == 1) {
      vm.FormSchema[0].Data[7].visibility = true;
      vm.FormSchema[0].Data[8].visibility = false;
      vm.FormSchema[0].Data[5].config.options = [];
      //vm.FormSchema[0].Data[5].config.options=[];
    }

    if (field != undefined ? field.value == 2 : event == 2) {
      vm.FormSchema[0].Data[7].visibility = false;
      vm.FormSchema[0].Data[8].visibility = true;
    }
    if (field != undefined ? field.value == 3 : event == 3) {
      this.FormSchema[0].Data[7].visibility = true;
      this.FormSchema[0].Data[8].visibility = true;
    }
    vm.isLoading = false;
  }
});
// CONCATENATED MODULE: ./src/views/ApprovalRule/AddApprovalRule.vue?vue&type=script&lang=js
 /* harmony default export */ var ApprovalRule_AddApprovalRulevue_type_script_lang_js = (AddApprovalRulevue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/views/ApprovalRule/AddApprovalRule.vue





/* normalize component */

var AddApprovalRule_component = Object(componentNormalizer["a" /* default */])(
  ApprovalRule_AddApprovalRulevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddApprovalRule = __webpack_exports__["default"] = (AddApprovalRule_component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0b9b6b.js.map