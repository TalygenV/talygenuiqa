(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ebf59f7c"],{"0cb2":function(e,t,a){"use strict";var i=a("e330"),s=a("7b0b"),l=Math.floor,o=i("".charAt),n=i("".replace),r=i("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,d=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,a,i,u,m){var p=a+e.length,f=i.length,v=d;return void 0!==u&&(u=s(u),v=c),n(m,v,(function(s,n){var c;switch(o(n,0)){case"$":return"$";case"&":return e;case"`":return r(t,0,a);case"'":return r(t,p);case"<":c=u[r(n,1,-1)];break;default:var d=+n;if(0===d)return s;if(d>f){var m=l(d/10);return 0===m?s:m<=f?void 0===i[m-1]?o(n,1):i[m-1]+o(n,1):s}c=i[d-1]}return void 0===c?"":c}))}},"44e7":function(e,t,a){"use strict";var i=a("861d"),s=a("c6b6"),l=a("b622"),o=l("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[o])?!!t:"RegExp"===s(e))}},"5b81":function(e,t,a){"use strict";var i=a("23e7"),s=a("c65b"),l=a("e330"),o=a("1d80"),n=a("1626"),r=a("7234"),c=a("44e7"),d=a("577e"),u=a("dc4a"),m=a("90d8"),p=a("0cb2"),f=a("b622"),v=a("c430"),b=f("replace"),h=TypeError,g=l("".indexOf),y=l("".replace),_=l("".slice),C=Math.max;i({target:"String",proto:!0},{replaceAll:function(e,t){var a,i,l,f,k,F,S,w,A,x=o(this),D=0,T=0,I="";if(!r(e)){if(a=c(e),a&&(i=d(o(m(e))),!~g(i,"g")))throw new h("`.replaceAll` does not allow non-global regexes");if(l=u(e,b),l)return s(l,e,x,t);if(v&&a)return y(d(x),e,t)}f=d(x),k=d(e),F=n(t),F||(t=d(t)),S=k.length,w=C(1,S),D=g(f,k);while(-1!==D)A=F?d(t(k,D,f)):p(k,f,D,[],void 0,t),I+=_(f,T,D)+A,T=D+S,D=D+w>f.length?-1:g(f,k,D+w);return T<f.length&&(I+=_(f,T)),I}})},"8dd4":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"my-popups"},[a("loader",{attrs:{"is-visible":e.isLoading}}),a("div",{staticClass:"modal d-block "},[a("div",{staticClass:"modal-dialog ui-draggable",staticStyle:{display:"inline-block"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header ui-draggable-handle"},[a("h5",{staticClass:"modal-title",attrs:{id:"ui-id-26"}},[e._v(e._s(e.title))]),a("button",{staticClass:"close",attrs:{type:"button",title:"","data-original-title":"Close"},on:{click:function(t){return e.$emit("close")}}},[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),a("span",{staticClass:"user-guide"},[e._m(0),a("div",{staticClass:"divancuserguide collapse overflow-auto",attrs:{id:"collapseReplyUG"}},[a("div",{staticClass:"custom-scrollbar-js",attrs:{id:"scrollbarreplyuserguideMangeView"}},[a("div",{staticClass:"con",domProps:{innerHTML:e._s(e.$t(e.addUserGuide))}})])])])]),a("div",{staticClass:"modal-body",staticStyle:{height:"auto","min-height":"0px","max-height":"none"},attrs:{id:"backgroundPopup"}},[a("section",{staticClass:"main-content",attrs:{id:"main-content"}},[a("section",{staticClass:"main-content"},[a("div",{staticClass:"container-fluid p-0"},[a("div",{staticClass:"p-0"},[a("dynamic-form",{ref:"dynamicForm",staticClass:"daterangecontrolHS",attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit},scopedSlots:e._u([e.showContractDiv?{key:"tgslot-AvailableClientsLang",fn:function(t){t.data;return[a("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left p-0"},[a("div",{staticClass:"col-lg-12 float-left",staticStyle:{display:"block"},attrs:{id:"divContract"}},[a("input",{attrs:{id:"hdnSelectedContractsEdit",type:"hidden",value:""}}),a("div",{staticClass:"col-12 p-0 d-flex flex-wrap mb-2"},[a("div",{staticClass:"mover-panel-box",attrs:{id:"divAvailableColumnsAll"}},[a("div",{staticClass:"row m-0"},[a("div",{staticClass:"heading-border"},[a("h5",{staticClass:"h5"},[a("span",[e._v("Available Clients Lang")])])]),a("div",{staticClass:"pt-2 d-inline-block w-100"},[a("div",{staticClass:"col-12 p-0 mt-0"},[a("div",{staticClass:"col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 float-left pr-1 pl-0"},[a("input",{staticClass:"form-control",attrs:{id:"txtAvailableColumnsInSetup",maxlength:"50",type:"text",placeholder:"Search",autocomplete:"off"}})]),a("div",{staticClass:"col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 float-left pl-0"},[a("div",{staticClass:"search-btm-btn background-0 text-left form-check-inline"},[a("a",{staticClass:"btn btn-success mr-1 px-4",attrs:{title:"",id:"ancSearchAvailableColumnsInSetup",href:"javascript:;","data-toggle-tooltip":"tooltip","data-original-title":"Search"}},[a("i",{staticClass:"fa fa-search"})]),a("a",{staticClass:"btn btn-danger px-4",attrs:{href:"javascript:;",title:"",id:"ancClearAvailableColumnsInSetup","data-toggle-tooltip":"tooltip","data-original-title":"Clear"}},[a("i",{staticClass:"fa fa-refresh"})])])])])]),a("div",{staticClass:"w-100 mt-2",staticStyle:{display:"none"}},[a("div",{staticClass:"input-group d-flex mt-1"},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",staticStyle:{display:"none"},attrs:{type:"checkbox",id:"chk_62"}}),a("label",{staticClass:"custom-control-label universal-custom-control-label pt-1",attrs:{for:"chk_62"}})]),e._v("Select All ")])]),a("div",{staticClass:"w-100 table-responsive mt-1 listingcontrol",staticStyle:{height:"360px"},attrs:{id:"columns"}},[a("ul",{staticClass:"list-group"},[a("li",{staticClass:"norecords list-group-item",staticStyle:{display:"block"},attrs:{id:"norecordAvailable"}},[a("div",{staticClass:"text-danger text-center no-record"},[e._v("No record(s) found")])])])])])]),a("div",{staticClass:"mover-controls ancArrowdata"},[a("button",{attrs:{type:"button",id:"aMoveAllColumnArrow","data-toggle-tooltip":"tooltip",title:"","data-original-title":"Move All Right"}},[a("i",{staticClass:"fa fa-angle-double-down fa-2x d-md-none",attrs:{"aria-hidden":"true"}}),a("i",{staticClass:"fa fa-angle-double-right fa-2x d-none d-md-block",attrs:{"aria-hidden":"true"}})]),a("button",{attrs:{type:"button",id:"aColumnArrow","data-toggle-tooltip":"tooltip",title:"","data-original-title":"Move Right"}},[a("i",{staticClass:"fa fa-angle-down fa-2x d-md-none",attrs:{"aria-hidden":"true"}}),a("i",{staticClass:"fa fa-angle-right fa-2x d-none d-md-block",attrs:{"aria-hidden":"true"}})]),a("button",{attrs:{type:"button",id:"aColumnRemoveArrow","data-toggle-tooltip":"tooltip",title:"","data-original-title":"Move Left"}},[a("i",{staticClass:"fa fa-angle-up fa-2x d-md-none",attrs:{"aria-hidden":"true"}}),a("i",{staticClass:"fa fa-angle-left fa-2x d-none d-md-block",attrs:{"aria-hidden":"true"}})]),a("button",{attrs:{type:"button",id:"aMoveAllColumnRemoveArrow","data-toggle-tooltip":"tooltip",title:"","data-original-title":"Move All Left"}},[a("i",{staticClass:"fa fa-angle-double-up fa-2x d-md-none",attrs:{"aria-hidden":"true"}}),a("i",{staticClass:"fa fa-angle-double-left fa-2x d-none d-md-block",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"mover-panel-box",attrs:{id:"divAvailableColumnsAll"}},[a("div",{staticClass:"row m-0"},[a("div",{staticClass:"heading-border"},[a("h5",{staticClass:"h5"},[a("span",[e._v("Selected Clients Lang")])])]),a("div",{staticClass:"pt-2 d-inline-block w-100"},[a("div",{staticClass:"col-12 p-0 mt-0"},[a("div",{staticClass:"col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 float-left pr-1 pl-0"},[a("input",{staticClass:"form-control",attrs:{id:"txtSelectedColumnsInSetup",maxlength:"50",type:"text",placeholder:"Search",autocomplete:"off"}})]),a("div",{staticClass:"col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 float-left pl-0"},[a("div",{staticClass:"search-btm-btn background-0 text-left form-check-inline"},[a("a",{staticClass:"btn btn-success mr-1 px-4",attrs:{title:"",id:"ancSearchSelectedColumnsInSetup",href:"javascript:;","data-toggle-tooltip":"tooltip","data-original-title":"Search"}},[a("i",{staticClass:"fa fa-search"})]),a("a",{staticClass:"btn btn-danger px-4",attrs:{href:"javascript:;",title:"",id:"ancClearSelectedColumnsInSetup","data-toggle-tooltip":"tooltip","data-original-title":"Clear"}},[a("i",{staticClass:"fa fa-refresh"})])])])])]),a("div",{staticClass:"w-100 table-responsive mt-2 listingcontrol"},[a("ul",{staticClass:"list-group",staticStyle:{height:"360px","overflow-y":"auto"},attrs:{id:"visiblecolumn"}},[a("li",{staticClass:"norecords list-group-item ui-sortable-handle",attrs:{id:"norecordVisibleColumn"}},[a("div",{staticClass:"text-danger text-center no-record"},[e._v("No record(s) found")])])])]),a("div",{staticClass:"w-100 float-left"},[a("span",{staticClass:"invalid-feedback",staticStyle:{display:"none"},attrs:{id:"spnselectedContracts"}},[e._v("Client is required")])])])])])])])]}}:null,{key:"tgslot-ManageQuestionaire",fn:function(t){t.data;return[e.ManageQuestionaire?a("div",{staticClass:"container-fluid p-0"},[a("div",{staticClass:"w-100 float-left",attrs:{id:"divShowlistingData"}},[a("div",{staticClass:"listing",attrs:{id:"divReviewTemplateQuestion"}},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered dt-responsive nowrap mt-0",staticStyle:{width:"100%"},attrs:{id:"tblReviewTemplateQuestion"}},[a("thead",{staticClass:"thead-bg"},[a("tr",[a("th",{attrs:{scope:"col",width:"30px"}},[a("div",{staticClass:"snap_checkbox custom-control custom-checkbox"},[a("input",{staticClass:"masterchk custom-control-input",attrs:{type:"checkbox",id:"ChkMainItems","data-change-id":"no"},on:{change:function(t){return e.SelectAllChk("ChkMainItems")}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"ChkMainItems"}})])]),a("th",[e._v("Title")]),a("th",[e._v("Stars")]),a("th",[e._v("Visibility")])])]),a("tbody",e._l(e.GetReviewQuestionList,(function(t,i){return a("tr",[a("td",{staticClass:"chcklbl"},[a("div",{staticClass:"snap_checkbox custom-control custom-checkbox float-left"},[a("input",{staticClass:"deletable custom-control-input",attrs:{type:"checkbox",id:"chk_"+t.QUESTION_BANK_ID,"data-change-id":"no"}}),a("label",{staticClass:"custom-control-label",attrs:{for:"chk_"+t.QUESTION_BANK_ID}})])]),a("td",[a("div",{staticClass:"form-group"},[a("span",{attrs:{title:t.TITLE,searchtext:t.TITLE,descriptio:t.DESCRIPTION}},[e._v(e._s(t.TITLE))])])]),a("td",[a("div",{staticClass:"form-group"},[a("div",{staticClass:"pl-0 border-0"},e._l(e.RadioOptions,(function(i,s){return a("div",{staticClass:"custom-control w-auto custom-control-inline custom-radio"},[a("input",{staticClass:"custom-control-input dynamic",attrs:{type:"radio",id:"radio_"+i.value+"_"+t.QUESTION_BANK_ID,name:"stars_"+t.QUESTION_BANK_ID},on:{change:function(a){return e.GetRadioValue("stars_"+t.QUESTION_BANK_ID,a,"radio_"+i.value+"_"+t.QUESTION_BANK_ID)}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"radio_"+i.value+"_"+t.QUESTION_BANK_ID}},[e._v(e._s(i.label))])])})),0)])]),a("td",[a("div",{staticClass:"form-group"},[a("div",{staticClass:"pl-0 border-0"},e._l(e.RadioVisibilityOtions,(function(i,s){return a("div",{staticClass:"custom-control w-auto custom-control-inline custom-radio"},[a("input",{staticClass:"custom-control-input dynamic",attrs:{type:"radio",id:"radio"+i.value+"_"+t.QUESTION_BANK_ID,name:"radiovisibility_"+t.QUESTION_BANK_ID},on:{change:function(a){return e.GetRadioValue("radiovisibility_"+t.QUESTION_BANK_ID,a,"radio"+i.value+"_"+t.QUESTION_BANK_ID)}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"radio"+i.value+"_"+t.QUESTION_BANK_ID}},[e._v(e._s(i.label)+" ")])])})),0)])])])})),0)])])])])]):e._e()]}},{key:"tgslot-FeedbackQuestion",fn:function(t){t.data;return[a("div",{staticClass:"col-lg-12 mt-3 mb-3"},[a("div",{staticClass:"heading-border"},[a("h5",{staticClass:"h5"},[a("span",[e._v("List of Question/Answering Type(s)")])])])]),e._l(e.FeedbackColumnArray,(function(t,i){return a("div",{staticClass:"col-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 float-left applyalternatebg"},[a("div",{staticClass:"row question-answer-list div_question_answer mb-3"},[a("div",{staticClass:"col-sm-12 col-md-6 col-lg-6 col-xl-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Feedback Question:"),a("span",{staticClass:"text-danger"},[e._v("*")])]),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.FeedbackQuestion,expression:"feedbackitem.FeedbackQuestion"}],staticClass:"form-control QuestionText",attrs:{type:"text",maxlength:"200",autocomplete:"off"},domProps:{value:t.FeedbackQuestion},on:{input:function(a){a.target.composing||e.$set(t,"FeedbackQuestion",a.target.value)}}})])])]),a("div",{staticClass:"col-sm-12 col-md-6 col-lg-6 col-xl-6"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Answering Type:"),a("span",{staticClass:"text-danger"},[e._v("*")])]),a("div",{staticClass:"col-12 p-0 float-left DivAnsweringType"},[a("div",{staticClass:"input-group "},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.FeedbackAnswerType,expression:"feedbackitem.FeedbackAnswerType"}],staticClass:"form-control AnswerType",on:{change:[function(a){var i=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(t,"FeedbackAnswerType",a.target.multiple?i:i[0])},function(a){return e.GetAnswerType(t.FeedbackAnswerType,i)}]}},[a("option",{attrs:{value:""}},[e._v("Select Type")]),a("option",{attrs:{value:"Comments"}},[e._v("Comments")]),a("option",{attrs:{value:"Star Rating"}},[e._v("Star Rating")]),a("option",{attrs:{value:"Objective"}},[e._v("Objective")])]),a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text border-0 bg-transparent p-0 pl-2"},[0==i?a("a",{staticClass:"addquestionbox round-icon-small btn-success-light adinvc",attrs:{href:"javascript:void(0)",id:"ancSplit",title:"Add More"},on:{click:e.AddMoreFeedbackQuestion}},[a("i",{staticClass:"fa fa-plus pt-7 font-18"})]):e._e(),i>0?a("a",{staticClass:"round-icon-small btn-danger-light deletequestionbox float-left",attrs:{href:"javascript:void(0)",id:"ancSplitDel",title:"Delete"},on:{click:function(a){return e.DeleteFeedbackRow(t.FeedbackIndex)}}},[a("i",{staticClass:"fa fa-trash"})]):e._e()])])]),t.FeedbackIndex==i&&""!=t.FeedbackAnswerType&&"Objective"==t.FeedbackAnswerType?a("div",{staticClass:"objectiveAnswers form-group w-100 mt-2"},[a("ul",{staticClass:"options liststylenone pl-0"},[a("li",[a("div",{staticClass:"custom-control custom-radio custom-control-inline"},[a("input",{staticClass:"form-check-input OptionName custom-control-input",attrs:{type:"radio",name:"ListQuestions_OptionName_"+i,value:"2-point scale (Eg: Yes, No)",checked:"checked",id:"rdo_"+i+0},on:{change:function(t){return e.GetObjectiveValue(t,i)}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"rdo_"+i+0}}),a("label",{staticClass:"mb-0",attrs:{for:"rdo_"+i+0}},[e._v(" 2-point scale (Eg: Yes, No) ")])])]),a("li",[a("div",{staticClass:"custom-control custom-radio custom-control-inline"},[a("input",{staticClass:"form-check-input OptionName custom-control-input",attrs:{type:"radio",name:"ListQuestions_OptionName_"+i,value:"3-point scale (Eg: Agree, Undecided, Disagree)",id:"rdo_"+i+1},on:{change:function(t){return e.GetObjectiveValue(t,i)}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"rdo_"+i+1}}),a("label",{staticClass:"mb-0",attrs:{for:"rdo_"+i+1}},[e._v(" 3-point scale (Eg: Agree, Undecided, Disagree) ")])])]),a("li",[a("div",{staticClass:"custom-control custom-radio custom-control-inline"},[a("input",{staticClass:"form-check-input OptionName custom-control-input",attrs:{type:"radio",name:"ListQuestions_OptionName_"+i,value:"5-point scale (Eg: Poor, Bad, Neutral, Good, Very Good)",id:"rdo_"+i+2},on:{change:function(t){return e.GetObjectiveValue(t,i)}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"rdo_"+i+2}}),a("label",{staticClass:"mb-0",attrs:{for:"rdo_"+i+2}},[e._v(" 5-point scale (Eg: Poor, Bad, Neutral, Good, Very Good) ")])])])])]):e._e()])])])])])])])}))]}}],null,!0)})],1)])])])])])])])],1)])},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"ancuserguide",attrs:{"data-toggle":"collapse",href:"javascript:;",role:"button","aria-expanded":"false","aria-controls":"collapseExample"}},[a("em"),e._v("User Guide")])}],o=(a("14d9"),a("5b81"),a("b7ef"),a("ed09")),n=a("7bb1"),r=(a("b9b9"),a("9769")),c=a("c1df"),d=a.n(c);a("1157");Object(n["c"])("required",{validate(e){return console.log("checkk"),{required:!0,valid:-1===["",null,void 0].indexOf(e)}},message:"The {_field_} is required"});var u=Object(o["defineComponent"])({components:{ValidationObserver:n["a"],ValidationProvider:n["b"]},props:{addApiUrl:{type:String},emitName:{type:String},moduleName:{type:String},subModule:{type:String},title:{type:String},recordId:{type:Number},addUserGuide:{type:String}},created:function(){let e=this.recordId?this.recordId:0;this.getForm(e),"Review"==this.moduleName&&"PerformanceReview"==this.subModule&&this.GetReviewTemplateData(),setTimeout(()=>{this.getchecked()},2e3)},mounted:function(){},watch:{hoursDifference(){}},methods:{getchecked(){"Review"==this.moduleName&&"PerformanceReview"==this.subModule&&(""!=this.skill&&$(".input-group").find(".custom-checkbox").find($('input[type="checkbox"]#is_skill_enable_3')).prop("checked",!0),""!=this.notes&&$(".input-group").find(".custom-checkbox").find($('input[type="checkbox"]#is_skill_enable_0')).prop("checked",!0),""!=this.feedback&&$(".input-group").find(".custom-checkbox").find($('input[type="checkbox"]#is_skill_enable_1')).prop("checked",!0),""!=this.goal&&$(".input-group").find(".custom-checkbox").find($('input[type="checkbox"]#is_skill_enable_2')).prop("checked",!0),""!=this.training&&$(".input-group").find(".custom-checkbox").find($('input[type="checkbox"]#is_skill_enable_4')).prop("checked",!0)),"Immigration"==this.moduleName&&"Passport"==this.subModule&&(""!=this.male&&$(".input-group").find(".custom-radio").find($('input[type="radio"]#sex_0')).prop("checked",!0),""!=this.female&&$(".input-group").find(".custom-radio").find($('input[type="radio"]#sex_1')).prop("checked",!0))},getDifference(){if(!this.startTime||!this.endTime)return"Start time and end time are required to calculate the difference.";{const e=this.startTime.split(":"),t=this.endTime.split(":");let a=parseInt(e[0]),i=parseInt(t[0]);e[1].includes("PM")&&12!==a&&(a+=12),t[1].includes("PM")&&12!==i&&(i+=12);const s=60*a+parseInt(e[1]),l=60*i+parseInt(t[1]);let o=l-s;o<0&&(o+=1440);let n=Math.floor(o/60),r=o%60;this.hoursDifference=parseFloat(n+"."+r)}},getForm:function(e){var t=this;t.isLoading=!0;var a=`recordId=${e}&moduleName=${this.moduleName}&subModuleCode=${this.subModule}`;r["a"].GetDynamicForm(a).then((function(e){if(null!=e&&null!=e.data){if(t.isMapFeature=e.data.isFsmLocating,t.FormSchema=t.$refs.dynamicForm.ConvertCustomFieldIntoDynamicFormObj(e.data.data),"Company"==t.moduleName&&"CompanyHoliday"==t.subModule){var a=e.data.LocationData[0]["COMPANY_LOCATION_ID"];t.FormSchema.push({groupId:null,group_name:"",layoutType:"single",visibility:!0,Data:[{astype:"SlotField",label:"",name:"AvailableClientsLang",value:"",visibility:!0,placeholder:"",config:{options:[],showAddIcon:!1},validationRules:""}]}),t.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{"Location"==e.name&&(e.value=a)})})}else"Review"==t.moduleName&&"PerformanceReview"==t.subModule?(t.FormSchema.push({groupId:null,group_name:"",layoutType:"single",visibility:!0,Data:[{astype:"SlotField",label:t.$t("Question"),name:"ManageQuestionaire",value:"",visibility:!0,placeholder:"",config:{options:[],showAddIcon:!1},validationRules:""}]}),t.ManageQuestionaire=!0):"Company"==t.moduleName&&"Feedback"==t.subModule?t.FormSchema.push({groupId:null,group_name:"",layoutType:"single",visibility:!0,Data:[{astype:"SlotField",label:"",name:"FeedbackQuestion",value:"",visibility:!0,placeholder:"",config:{options:[],showAddIcon:!1},validationRules:""}]}):"Immigration"==t.moduleName&&"Passport"==t.subModule&&t.FormSchema.push({layoutType:"single",visibility:!0,Data:[{astype:"FileField",label:"Attachment",name:"attachment",value:"",visibility:!0,placeholder:"",config:{options:[],showAddIcon:!1},validationRules:""}]});t.FormSchema.forEach((e,a)=>{e.Data.forEach((e,a)=>{if("user_name"!=e.name&&"password"!=e.name&&"signature"!=e.name&&"from_time"!=e.name&&"to_time"!=e.name||(e.visibility=!1),"RadioField"==e.astype&&(e.value=1),"break_duration"==e.name&&(e.config.is24hr=!0,""!=e.value)){var i=new Date;let t=e.value.split(":");i=new Date(i.getFullYear(),i.getMonth(),i.getDate(),parseInt(t[0]),parseInt(t[1])),e.value=i}"attachment"==e.name&&(e.config={maxSize:5,accept:[{fileType:"doc",iconClass:"fa-file-word-o"},{fileType:"docx",iconClass:"fa-file-word-o"},{fileType:"txt",iconClass:"fa-file-text-o"},{fileType:"jpg",iconClass:"fa-file-image-o"},{fileType:"jpeg",iconClass:"fa-file-image-o"},{fileType:"png",iconClass:"fa-file-image-o"},{fileType:"gif",iconClass:"fa-file-image-o"},{fileType:"bmp",iconClass:"fa-file-image-o"}],multiple:!1}),"is_note_enable"==e.name&&"1"==e.value&&(t.notes="is_skill_enable_0"),"is_feedback_enable"==e.name&&"1"==e.value&&(t.feedback="is_skill_enable_1"),"is_goal_enable"==e.name&&"1"==e.value&&(t.goal="is_skill_enable_2"),"is_skill_enable"==e.name&&"1"==e.value&&(t.skill="is_skill_enable_3"),"is_training_feedback_enabled"==e.name&&"1"==e.value&&(t.training="is_skill_enable_4"),"shift_hours"==e.name&&(e.disabled=!0,e.placeholder="Shift Hours"),"sex"==e.name&&1==e.value&&(t.male="sex_0"),"sex"==e.name&&0==e.value&&(t.female="sex_1"),"startdate"==e.name&&(e.config.minDate=new Date),e.config.onChange=t.OnChangeEventsforField})}),console.log(t.FormSchema),t.FormSchema.length>0&&(t.FormSchema[0].visibility=!1),t.isLoading=!1}}))},GetStartData:function(e,t){var a=this;a.FormSchema[2].Data[1].config.minDate=e},OnChangeEventsforField:function(e,t,a){let i=this;if("FILL_DEPENDENT"==e){t.config.options=[];var s=`id=&moduleName=${i.moduleName}&type=${t.config.fieldCode}&search=&refId=${a}`;r["a"].GetDDLData(s).then((function(e){if(e.data){var a=e.data;null!=a&&(t.config.options=e.data.DATA,i.$refs.dynamicForm.UpdateKeyValue())}}))}else{if("payment_gateway_code"==t.name&&"Authorize"==t.config.options.filter(e=>e.value==t.value)[0].name?i.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{"user_name"==e.name&&(e.visibility=!0,e.label="API Login ID"),"password"==e.name&&(e.visibility=!0,e.label="Transaction Key"),"signature"==e.name&&(e.visibility=!1)})}):"payment_gateway_code"==t.name&&"Paypal"==t.config.options.filter(e=>e.value==t.value)[0].name?i.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{"user_name"==e.name&&(e.visibility=!0,e.label="User Name"),"password"==e.name&&(e.visibility=!0,e.label="Password"),"signature"==e.name&&(e.visibility=!0)})}):i.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{"user_name"==e.name&&(e.visibility=!0,e.label="Secret Key"),"password"==e.name&&(e.visibility=!0,e.label="Publishable Key"),"signature"==e.name&&(e.visibility=!1)})}),"attachment"==t.name&&i.GetBase64String(t.value),"start_time"==t.name&&(i.startTime=i.$options.filters.formatTime(t.value),i.getDifference()),"end_time"==t.name&&(i.endTime=i.$options.filters.formatTime(t.value),i.getDifference()),"location_country"==t.name&&(console.log("country",t.value),this.GetStateDDL(t.value)),"is_full_day"==t.name&&"Partial Day"==t.config.options.filter(e=>e.value==t.value)[0].name?i.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{"from_time"==e.name&&(e.visibility=!0),"to_time"==e.name&&(e.visibility=!0)})}):"is_full_day"==t.name&&"Partial Day"!=t.config.options.filter(e=>e.value==t.value)[0].name&&i.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{"from_time"==e.name&&(e.visibility=!1),"to_time"==e.name&&(e.visibility=!1)})}),"category_type_id"==t.name&&"Ticket"==t.config.options.filter(e=>e.value==t.value)[0].name?i.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{"IsForServiceRequest"==e.name&&(e.visibility=!0)})}):"category_type_id"==t.name&&"Ticket"!=t.config.options.filter(e=>e.value==t.value)[0].name&&i.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{"IsForServiceRequest"==e.name&&(e.visibility=!1)})}),"isFixed"==t.name&&"Observed"==t.config.options.filter(e=>e.value==t.value)[0].name?i.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{"is_recurring"==e.name&&(e.value=0,e.disabled=!0)})}):i.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{"is_recurring"==e.name&&(e.disabled=!1)})}),"startdate"==t.name&&(i.$refs.dynamicForm.updateProperty("enddate","config.minDate",e),i.$refs.dynamicForm.UpdateKeyValue()),"issue_date"==t.name&&"Immigration"==i.moduleName&&(i.$refs.dynamicForm.updateProperty("expiry_date","config.minDate",e),i.$refs.dynamicForm.UpdateKeyValue()),"end_time"==t.name&&"Shift"==i.moduleName){var l=i.hoursDifference;i.$refs.dynamicForm.updateProperty("shift_hours","value",l),i.$refs.dynamicForm.updateProperty("min_hours","value",l),i.$refs.dynamicForm.UpdateKeyValue()}if("is_additional_comments"==t.name&&1==t.value&&"Company"==i.moduleName&&"Feedback"==i.subModule&&(i.$refs.dynamicForm.updateProperty("additional_comments","visibility",!0),i.$refs.dynamicForm.UpdateKeyValue()),"is_additional_comments"==t.name&&0==t.value&&"Company"==i.moduleName&&"Feedback"==i.subModule&&(i.$refs.dynamicForm.updateProperty("additional_comments","visibility",!1),i.$refs.dynamicForm.UpdateKeyValue()),"Company"==i.moduleName&&"Feedback"==i.subModule&&("type_code"==t.name&&"Ticketing"==t.config.options.filter(e=>e.value==t.value)[0].name&&(i.$refs.dynamicForm.updateProperty("department_id","visibility",!0),i.$refs.dynamicForm.UpdateKeyValue()),"type_code"==t.name&&"Ticketing"!=t.config.options.filter(e=>e.value==t.value)[0].name&&(i.$refs.dynamicForm.updateProperty("department_id","visibility",!1),i.$refs.dynamicForm.UpdateKeyValue())),"effective_from_date"==t.name&&(i.$refs.dynamicForm.updateProperty("effective_to_date","config.minDate",e),i.$refs.dynamicForm.UpdateKeyValue()),"IsForCompany"==t.name){const e=t.value.find(e=>0==e);i.showContractDiv=void 0!=e}}},GetBase64String:function(e){try{var t=this,a=e[0],i=new FileReader;i.onload=function(e){return function(e){var i=e.target.result,s=window.btoa(i),l=a.name;t.fileName=l;var o=l.lastIndexOf("."),n=l.substring(o+1,l.length);t.fileExt+="."+n;var r='{"ContentType":"'+a.type+'","Size":"'+a.size+'","Extension":"'+n+'"}',c=a.size;t.fileSize=c;var d={attachement_mime:r,fileName:l,base64String:s,fileSize:a.size,contentType:a.type};console.log(d),t.fileData.push(d)}}(),i.readAsBinaryString(a)}catch(s){}},SizeToMb:function(e){var t=this,a=1048576*parseInt(t.allowedPerFileSizeInMb,10);if(e>a)return-1;var i=e/1024/1024;return i},GetStateDDL:async function(e){var t=0;t=e,console.log(t);var a="id=&&moduleName=Location&type=STATE&search=&refId="+t;try{const e=await r["a"].GetDDLData(a);e.data&&e.data.DATA?(ths.$refs.dynamicForm.updateProperty("on_behalf_consumer_id","config.options",e.data.DATA),console.log("No data received from the API")):"payment_gateway_code"==y.name&&"Authorize"==y.config.OptionsForBind[0].name?ths.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{"user_name"==e.name&&(e.visibility=!0,e.label="API Login ID"),"password"==e.name&&(e.visibility=!0,e.label="Transaction Key"),"signature"==e.name&&(e.visibility=!1)})}):"payment_gateway_code"==y.name&&"Paypal"==y.config.OptionsForBind[1].name?ths.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{"user_name"==e.name&&(e.visibility=!0,e.label="User Name"),"password"==e.name&&(e.visibility=!0,e.label="Password"),"signature"==e.name&&(e.visibility=!0)})}):ths.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{"user_name"==e.name&&(e.visibility=!0,e.label="Secret Key"),"password"==e.name&&(e.visibility=!0,e.label="Publishable Key"),"signature"==e.name&&(e.visibility=!1)})})}catch(i){}},async onSubmit(){var e=this,t=[];e.isLoading=!0;let a=e.$refs.dynamicForm.ConvertDynamicFormObjToCustomFieldObj(this.FormSchema);"Break"==this.moduleName&&a.find((function(e){"break_duration"==e.field_name&&(e.field_value=d()(new Date(e.field_value)).format("HH:mm"))})),"Shift"==this.moduleName&&a.find((function(e){"start_time"==e.field_name&&(e.field_value=d()(new Date(e.field_value)).format("HH:mm"))})),"Shift"==this.moduleName&&a.find((function(e){"end_time"==e.field_name&&(e.field_value=d()(new Date(e.field_value)).format("HH:mm"))})),"Immigration"==e.moduleName&&"Passport"==e.subModule&&(a.find((function(e){"attachment"!=e.field_name&&t.push(e)})),a={data:t,moduleCode:e.moduleName,subModuleCode:e.subModule,attachmentData:e.fileData.length>0?e.fileData:null}),"AnnouncementMessage"==e.moduleName&&"AnnouncementMessage"==e.subModule?a={data:a,moduleCode:e.moduleName,subModuleCode:e.subModule,attachmentData:e.fileData.length>0?e.fileData:null}:"Company"==e.moduleName&&"Feedback"==e.subModule&&(a={data:a,feedbackData:e.FeedbackColumnArray}),r["a"].DepartmentAdd(a,this.addApiUrl).then(t=>{e.isLoading=!1,null!=t.data.Result&&t.data.Result.MAIN_ID>0?(this.ShowAlert(this.$t("SavedSuccessfully"),"success",!1,this.$t("Alert")),this.$emit(this.emitName)):"FAILURE"==this.$t(t.data.Status)?this.ShowAlert(this.$t("ErrorWhileSavingRecords"),"danger",!1,this.$t("Alert")):this.ShowAlert(this.$t("RecordAlreadyExists"),"danger",!1,this.$t("Alert"))})},closePopup(){this.$emit("close")},async GetReviewTemplateData(){var e=this;await r["a"].GetReviewTemplateData().then(t=>{var a=JSON.parse(t.data.Result);a.length>0&&(e.GetReviewQuestionList=a)}).catch(e=>{console.log(e)})},GetRadioValue(e,t,a){if(void 0!=e&&e.includes("stars")){var s=document.getElementsByName(e);for(i=0;i<s.length;i++)$('input[type="radio"]data').prop("checked",!1);$('input[type="radio"]#getid').prop("checked",!0)}if(e.includes("radiovisibility")){s=document.getElementsByName(e);for(i=0;i<s.length;i++)$('input[type="radio"]data').prop("checked",!1);$('input[type="radio"]#getid').prop("checked",!0)}},SelectAllChk(e){if("ChkMainItems"==e)for(var t=document.getElementsByTagName("input"),a=0;a<t.length;a++)if("checkbox"==t[a].type&&"deletable custom-control-input"==t[a].className){var i=document.getElementsByClassName("masterchk custom-control-input ");i[0].checked?t[a].checked=!0:t[a].checked=!1}},GetAnswerType(e,t){var a=this;if("Objective"==e){var i=a.FeedbackColumnArray.find(e=>e.FeedbackIndex===t);void 0!=i&&(i.FeedbackAnsweringType="2-point scale (Eg: Yes, No)",i.FeedbackAnsweringValue=i.FeedbackAnsweringType.split("(Eg: ")[1].replaceAll(", ","_").replaceAll(")",""))}else a.FeedbackColumnArray.forEach(e=>{e.FeedbackAnsweringType="",e.FeedbackAnsweringValue=""})},AddMoreFeedbackQuestion(){var e=this;e.FeedbackColumnArray.push({FeedbackQuestion:"",FeedbackAnswerType:"",FeedbackIndex:e.count=e.count+1,FeedbackAnsweringType:"",FeedbackAnsweringValue:""})},DeleteFeedbackRow(e){var t=this,a=t.FeedbackColumnArray.findIndex(t=>t.FeedbackIndex===e);a>-1&&t.FeedbackColumnArray.splice(a,1),t.FeedbackColumnArray.forEach((e,a)=>{e.FeedbackIndex=a,t.count=a})},GetObjectiveValue(e,t){var a=this,i=a.FeedbackColumnArray.find(e=>e.FeedbackIndex===t);void 0!=i&&(i.FeedbackAnsweringType=e.target.value,i.FeedbackAnsweringValue=i.FeedbackAnsweringType.split("(Eg: ")[1].replaceAll(", ","_").replaceAll(")",""))}},data(){return{startTime:null,endTime:null,hoursDifference:null,fileData:[],editor:this.CLASSIC_EDITOR,department:{name:"",status:{name:"active",id:1},visibaleToclients:!1,visibaleToTicting:!1,description:""},buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save",isVisible:!0},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.closePopup}],FormSchema:[],OtherSchema:[],isLoading:!1,showContractDiv:!1,ManageQuestionaire:!1,modelStars:[],GetCheckedValue:null,modelQuestionVisibility:[],GetReviewQuestionList:[],RadioOptions:[{label:"Enable",value:0},{label:"Disable",value:1}],RadioVisibilityOtions:[{label:"Both",value:2},{label:"Candidate",value:3},{label:"Reviewer",value:4}],FeedbackColumnArray:[{FeedbackQuestion:"",FeedbackAnswerType:"",FeedbackIndex:0,FeedbackAnsweringType:"",FeedbackAnsweringValue:""}],count:0,skill:"",notes:"",feedback:"",goal:"",training:"",male:"",female:""}}}),m=u,p=(a("e207"),a("2877")),f=Object(p["a"])(m,s,l,!1,null,null,null);t["a"]=f.exports},"90d8":function(e,t,a){"use strict";var i=a("c65b"),s=a("1a2d"),l=a("3a9b"),o=a("ad6d"),n=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in n||s(e,"flags")||!l(n,e)?t:i(o,e)}},ad6d:function(e,t,a){"use strict";var i=a("825a");e.exports=function(){var e=i(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},b6392:function(e,t,a){var i=a("f153");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=a("499e").default;s("6566351e",i,!0,{sourceMap:!1,shadowMode:!1})},e207:function(e,t,a){"use strict";a("b6392")},f153:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".singleselectlook .multiselect__select:before{z-index:99}.singleselectlook .multiselect__tags{padding:8px 30px 0 8px!important;min-height:36px!important}.singleselectlook .multiselect__input{margin-bottom:0}",""]),e.exports=t}}]);
//# sourceMappingURL=chunk-ebf59f7c.js.map