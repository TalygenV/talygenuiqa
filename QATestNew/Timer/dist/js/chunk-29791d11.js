(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29791d11"],{"3a5e":function(t,e,a){"use strict";a.r(e);var i={};a.r(i),a.d(i,"alpha",(function(){return p})),a.d(i,"alpha_dash",(function(){return A})),a.d(i,"alpha_num",(function(){return b})),a.d(i,"alpha_spaces",(function(){return S})),a.d(i,"between",(function(){return w})),a.d(i,"confirmed",(function(){return D})),a.d(i,"digits",(function(){return N})),a.d(i,"dimensions",(function(){return L})),a.d(i,"double",(function(){return Ht})),a.d(i,"email",(function(){return V})),a.d(i,"excluded",(function(){return K})),a.d(i,"ext",(function(){return X})),a.d(i,"image",(function(){return et})),a.d(i,"integer",(function(){return it})),a.d(i,"is",(function(){return rt})),a.d(i,"is_not",(function(){return lt})),a.d(i,"length",(function(){return ht})),a.d(i,"max",(function(){return pt})),a.d(i,"max_value",(function(){return At})),a.d(i,"mimes",(function(){return $t})),a.d(i,"min",(function(){return gt})),a.d(i,"min_value",(function(){return Ft})),a.d(i,"numeric",(function(){return jt})),a.d(i,"oneOf",(function(){return W})),a.d(i,"regex",(function(){return Ut})),a.d(i,"required",(function(){return Et})),a.d(i,"required_if",(function(){return Bt})),a.d(i,"size",(function(){return Gt}));var n=function(){var t=this,e=t._self._c;return e("section",[e("loader",{attrs:{"is-visible":t.isLoading}}),e("div",{staticClass:"left-menu-tab"},[t.DataLoaded?e("dynamic-form",{attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema}}):t._e()],1),e("div",{staticClass:"right-content"},[e("div",{staticClass:"theme-primary partition p-actions-expand",attrs:{id:"ProductivityHeading"}},[e("span",{staticClass:"p-name text-white"},[t._v(t._s(t.$t("UserProductivity")))])]),e("Form",{ref:"ProductivityForm"},[e("div",{staticClass:"DivProductivity col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left p-0"},[e("div",{staticClass:"col-lg-12 mt-3 p-0"},[t.SelectAllBox?e("div",{staticClass:"col-sm-12 col-md-12 float-right col-lg-3 col-xl-3"},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 float-left"},[e("div",{staticClass:"input-group ml-3"},[e("div",{staticClass:"custom-control custom-checkbox custom-check custom-control-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.isChecked,expression:"isChecked"}],attrs:{name:"SelectAll",id:"chkAll",type:"checkbox"},domProps:{checked:Array.isArray(t.isChecked)?t._i(t.isChecked,null)>-1:t.isChecked},on:{click:function(e){return t.SelectAll()},change:function(e){var a=t.isChecked,i=e.target,n=!!i.checked;if(Array.isArray(a)){var c=null,r=t._i(a,c);i.checked?r<0&&(t.isChecked=a.concat([c])):r>-1&&(t.isChecked=a.slice(0,r).concat(a.slice(r+1)))}else t.isChecked=n}}}),e("label",{staticClass:"custom-control-label universal-custom-control-label pt-1",attrs:{for:"chkAll"}}),t._v(" "+t._s(t.$t("SelectAll"))+" ")])])])])])]):t._e(),e("div",{staticClass:"heading-border mb-2"},[e("h5",{staticClass:"h5"},[e("span",[t._v(t._s(t.$t("ProductivityApps")))])])])]),e("div",{staticClass:"p-3"},[t._l(t.ApplicationData,(function(a,i){return"Productive"===a.productive_type?e("div",{key:i,staticClass:"col-sm-12 col-md-12 float-left col-lg-3 col-xl-3",attrs:{id:a.application_display_name}},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 float-left"},[e("div",{staticClass:"input-group"},[e("label",{staticClass:"form-check form-check-inline",attrs:{title:a.application_display_name}},[e("a",{staticClass:"custom-control custom-check custom-control-inline"},[e("input",{staticClass:"custom-control-input chkItems",attrs:{type:"checkbox",name:a.application_display_name,id:"chk_"+a.application_id},domProps:{value:a.application_id},on:{click:function(e){return t.ShowDivClick()}}}),e("label",{staticClass:"custom-control-label universal-custom-control-label pt-1",attrs:{for:"chk_"+a.application_id}})]),e("em",{class:a.icon_class?"appicon "+a.icon_class:"appicon default"}),t._v("  "+t._s(t.TruncateStr(a.application_display_name,20))+" ")])])])])])]):t._e()})),t.showDiv?e("div",{staticClass:"row col-12"},[e("div",{staticClass:"col-2 col-sm-3 ml-4"},[e("label",[e("span",{attrs:{id:""}},[t._v(t._s(t.$t("SelectStatus")))])]),e("span",{staticClass:"text-danger"},[t._v("*")]),e("Field",{staticClass:"w-100",attrs:{name:"Type",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("select",{directives:[{name:"model",rawName:"v-model",value:t.SelectedVal,expression:"SelectedVal"}],class:{"form-control w-100":!0,"is-invalid":a[0]},attrs:{name:"Type"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.SelectedVal=e.target.multiple?a:a[0]}}},[e("option",{attrs:{value:""}},[t._v(t._s(t.$t("Select")))]),e("option",{attrs:{value:"Productive"}},[t._v(t._s(t.$t("Productive")))]),e("option",{attrs:{value:"UnProductive"}},[t._v(t._s(t.$t("UnProductive")))]),e("option",{attrs:{value:"Neutral"}},[t._v(t._s(t.$t("Neutral")))])]),a[0]?e("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Type"}},[t._v(t._s(a[0]))]):t._e()]}}],null,!1,1208815144)})],1),e("div",{staticClass:"col-1 col-sm-2 mt-4"},[e("button",{staticClass:"form-control btn btn-success",attrs:{type:"button"},on:{click:t.ConfirmChanges}},[t._v("Confirm")])])]):t._e()],2)])]),e("Form",{ref:"UnProductivityForm"},[e("div",{staticClass:"DivUnProductivity col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left p-0"},[e("div",{staticClass:"col-lg-12 mt-3 p-0"},[t.SelectAllBox1?e("div",{staticClass:"col-sm-12 col-md-12 float-right col-lg-3 col-xl-3"},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 float-left"},[e("div",{staticClass:"input-group ml-3"},[e("div",{staticClass:"custom-control custom-checkbox custom-check custom-control-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.isChecked1,expression:"isChecked1"}],attrs:{name:"SelectAll1",id:"chkAll1",type:"checkbox"},domProps:{checked:Array.isArray(t.isChecked1)?t._i(t.isChecked1,null)>-1:t.isChecked1},on:{click:function(e){return t.SelectAll(1)},change:function(e){var a=t.isChecked1,i=e.target,n=!!i.checked;if(Array.isArray(a)){var c=null,r=t._i(a,c);i.checked?r<0&&(t.isChecked1=a.concat([c])):r>-1&&(t.isChecked1=a.slice(0,r).concat(a.slice(r+1)))}else t.isChecked1=n}}}),e("label",{staticClass:"custom-control-label universal-custom-control-label pt-1",attrs:{for:"chkAll1"}}),t._v(" "+t._s(t.$t("SelectAll"))+" ")])])])])])]):t._e(),e("div",{staticClass:"heading-border mb-2"},[e("h5",{staticClass:"h5"},[e("span",[t._v(t._s(t.$t("UnProductivityApps")))])])])]),e("div",{staticClass:"p-3"},[t._l(t.ApplicationData,(function(a,i){return"UnProductive"===a.productive_type?e("div",{key:i,staticClass:"col-sm-12 col-md-12 float-left col-lg-3 col-xl-3",attrs:{id:a.application_display_name}},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 float-left"},[e("div",{staticClass:"input-group"},[e("label",{staticClass:"form-check form-check-inline",attrs:{title:a.application_display_name}},[e("a",{staticClass:"custom-control custom-check custom-control-inline"},[e("input",{staticClass:"custom-control-input chkItems1",attrs:{type:"checkbox",name:a.application_display_name,id:"chkb_"+a.application_id},domProps:{value:a.application_id},on:{click:function(e){return t.ShowDivClick(1)}}}),e("label",{staticClass:"custom-control-label universal-custom-control-label pt-1",attrs:{for:"chkb_"+a.application_id}})]),e("em",{class:a.icon_class?"appicon "+a.icon_class:"appicon default"}),t._v(" "+t._s(t.TruncateStr(a.application_display_name,20))+" ")])])])])])]):t._e()})),t.showDiv1?e("div",{staticClass:"row col-12"},[e("div",{staticClass:"col-2 col-sm-3 ml-4"},[e("label",[e("span",{attrs:{id:""}},[t._v(t._s(t.$t("SelectStatus")))])]),e("span",{staticClass:"text-danger"},[t._v("*")]),e("Field",{staticClass:"w-100",attrs:{name:"Type",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("select",{directives:[{name:"model",rawName:"v-model",value:t.SelectedVal1,expression:"SelectedVal1"}],class:{"form-control w-100":!0,"is-invalid":a[0]},attrs:{name:"Type"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.SelectedVal1=e.target.multiple?a:a[0]}}},[e("option",{attrs:{value:""}},[t._v(t._s(t.$t("Select")))]),e("option",{attrs:{value:"Productive"}},[t._v(t._s(t.$t("Productive")))]),e("option",{attrs:{value:"UnProductive"}},[t._v(t._s(t.$t("UnProductive")))]),e("option",{attrs:{value:"Neutral"}},[t._v(t._s(t.$t("Neutral")))])]),a[0]?e("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Type"}},[t._v(t._s(a[0]))]):t._e()]}}],null,!1,2475217529)})],1),e("div",{staticClass:"col-1 col-sm-2 mt-4"},[e("button",{staticClass:"form-control btn btn-success",attrs:{type:"button"},on:{click:t.ConfirmChanges1}},[t._v("Confirm")])])]):t._e()],2)])]),e("Form",{ref:"NeutralForm"},[e("div",{staticClass:"DivNeutral col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left p-0"},[e("div",{staticClass:"col-lg-12 mt-3 p-0"},[t.SelectAllBox2?e("div",{staticClass:"col-sm-12 col-md-12 float-right col-lg-3 col-xl-3",attrs:{id:"SelectAll2"}},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 float-left"},[e("div",{staticClass:"input-group ml-3"},[e("div",{staticClass:"custom-control custom-checkbox custom-check custom-control-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.isChecked2,expression:"isChecked2"}],attrs:{name:"SelectAll2",id:"chkAll2",type:"checkbox"},domProps:{checked:Array.isArray(t.isChecked2)?t._i(t.isChecked2,null)>-1:t.isChecked2},on:{click:function(e){return t.SelectAll(2)},change:function(e){var a=t.isChecked2,i=e.target,n=!!i.checked;if(Array.isArray(a)){var c=null,r=t._i(a,c);i.checked?r<0&&(t.isChecked2=a.concat([c])):r>-1&&(t.isChecked2=a.slice(0,r).concat(a.slice(r+1)))}else t.isChecked2=n}}}),e("label",{staticClass:"custom-control-label universal-custom-control-label pt-1",attrs:{for:"chkAll2"}}),t._v(" "+t._s(t.$t("SelectAll"))+" ")])])])])])]):t._e(),e("div",{staticClass:"heading-border mb-2"},[e("h5",{staticClass:"h5"},[e("span",[t._v(t._s(t.$t("NeutralApps")))])])])]),e("div",{staticClass:"p-3"},[t._l(t.ApplicationData,(function(a,i){return"Neutral"===a.productive_type?e("div",{key:i,staticClass:"col-sm-12 col-md-12 float-left col-lg-3 col-xl-3",attrs:{id:a.application_display_name}},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 float-left"},[e("div",{staticClass:"input-group"},[e("label",{staticClass:"form-check form-check-inline",attrs:{title:a.application_display_name}},[e("a",{staticClass:"custom-control custom-check custom-control-inline"},[e("input",{staticClass:"custom-control-input chkItems2",attrs:{type:"checkbox",name:a.application_display_name,id:"chkbox_"+a.application_id},domProps:{value:a.application_id},on:{click:function(e){return t.ShowDivClick(2)}}}),e("label",{staticClass:"custom-control-label universal-custom-control-label pt-1",attrs:{for:"chkbox_"+a.application_id}})]),e("em",{class:a.icon_class?"appicon "+a.icon_class:"appicon default"}),t._v("  "+t._s(t.TruncateStr(a.application_display_name,20))+" ")])])])])])]):t._e()})),t.showDiv2?e("div",{staticClass:"row col-12"},[e("div",{staticClass:"col-2 col-sm-3 ml-4"},[e("label",[e("span",{attrs:{id:""}},[t._v(t._s(t.$t("SelectStatus")))])]),e("span",{staticClass:"text-danger"},[t._v("*")]),e("Field",{staticClass:"w-100",attrs:{name:"Type",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("select",{directives:[{name:"model",rawName:"v-model",value:t.SelectedVal2,expression:"SelectedVal2"}],class:{"form-control w-100":!0,"is-invalid":a[0]},attrs:{name:"Type"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.SelectedVal2=e.target.multiple?a:a[0]}}},[e("option",{attrs:{value:""}},[t._v(t._s(t.$t("Select")))]),e("option",{attrs:{value:"Productive"}},[t._v(t._s(t.$t("Productive")))]),e("option",{attrs:{value:"UnProductive"}},[t._v(t._s(t.$t("UnProductive")))]),e("option",{attrs:{value:"Neutral"}},[t._v(t._s(t.$t("Neutral")))])]),a[0]?e("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Type"}},[t._v(t._s(a[0]))]):t._e()]}}],null,!1,4048748794)})],1),e("div",{staticClass:"col-1 col-sm-2 mt-4"},[e("button",{staticClass:"form-control btn btn-success",attrs:{type:"button"},on:{click:t.ConfirmChanges2}},[t._v("Confirm")])])]):t._e()],2)])])],1)],1)},c=[],r=(a("14d9"),a("9769")),s=a("2b0e"),o=a("7bb1"),l={en:/^[A-Z]*$/i,cs:/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,da:/^[A-ZÆØÅ]*$/i,de:/^[A-ZÄÖÜß]*$/i,es:/^[A-ZÁÉÍÑÓÚÜ]*$/i,fa:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,fr:/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,it:/^[A-Z\xC0-\xFF]*$/i,lt:/^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,nl:/^[A-ZÉËÏÓÖÜ]*$/i,hu:/^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,pl:/^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,pt:/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,ro:/^[A-ZĂÂÎŞŢ]*$/i,ru:/^[А-ЯЁ]*$/i,sk:/^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,sr:/^[A-ZČĆŽŠĐ]*$/i,sv:/^[A-ZÅÄÖ]*$/i,tr:/^[A-ZÇĞİıÖŞÜ]*$/i,uk:/^[А-ЩЬЮЯЄІЇҐ]*$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,az:/^[A-ZÇƏĞİıÖŞÜ]*$/i,el:/^[Α-ώ]*$/i,ja:/^[A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF]*$/i,he:/^[A-Z\u05D0-\u05EA']*$/i},u={en:/^[A-Z\s]*$/i,cs:/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,da:/^[A-ZÆØÅ\s]*$/i,de:/^[A-ZÄÖÜß\s]*$/i,es:/^[A-ZÁÉÍÑÓÚÜ\s]*$/i,fa:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,fr:/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,it:/^[A-Z\xC0-\xFF\s]*$/i,lt:/^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,nl:/^[A-ZÉËÏÓÖÜ\s]*$/i,hu:/^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,pl:/^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,pt:/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,ro:/^[A-ZĂÂÎŞŢ\s]*$/i,ru:/^[А-ЯЁ\s]*$/i,sk:/^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,sr:/^[A-ZČĆŽŠĐ\s]*$/i,sv:/^[A-ZÅÄÖ\s]*$/i,tr:/^[A-ZÇĞİıÖŞÜ\s]*$/i,uk:/^[А-ЩЬЮЯЄІЇҐ\s]*$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,az:/^[A-ZÇƏĞİıÖŞÜ\s]*$/i,el:/^[Α-ώ\s]*$/i,ja:/^[A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF\s]*$/i,he:/^[A-Z\u05D0-\u05EA'\s]*$/i},d={en:/^[0-9A-Z]*$/i,cs:/^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,da:/^[0-9A-ZÆØÅ]$/i,de:/^[0-9A-ZÄÖÜß]*$/i,es:/^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,fa:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,fr:/^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,it:/^[0-9A-Z\xC0-\xFF]*$/i,lt:/^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,hu:/^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,nl:/^[0-9A-ZÉËÏÓÖÜ]*$/i,pl:/^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,pt:/^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,ro:/^[0-9A-ZĂÂÎŞŢ]*$/i,ru:/^[0-9А-ЯЁ]*$/i,sk:/^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,sr:/^[0-9A-ZČĆŽŠĐ]*$/i,sv:/^[0-9A-ZÅÄÖ]*$/i,tr:/^[0-9A-ZÇĞİıÖŞÜ]*$/i,uk:/^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,ar:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,az:/^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,el:/^[0-9Α-ώ]*$/i,ja:/^[0-9A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF]*$/i,he:/^[0-9A-Z\u05D0-\u05EA']*$/i},h={en:/^[0-9A-Z_-]*$/i,cs:/^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,da:/^[0-9A-ZÆØÅ_-]*$/i,de:/^[0-9A-ZÄÖÜß_-]*$/i,es:/^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,fa:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,fr:/^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,it:/^[0-9A-Z\xC0-\xFF_-]*$/i,lt:/^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,nl:/^[0-9A-ZÉËÏÓÖÜ_-]*$/i,hu:/^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,pl:/^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,pt:/^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,ro:/^[0-9A-ZĂÂÎŞŢ_-]*$/i,ru:/^[0-9А-ЯЁ_-]*$/i,sk:/^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,sr:/^[0-9A-ZČĆŽŠĐ_-]*$/i,sv:/^[0-9A-ZÅÄÖ_-]*$/i,tr:/^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,uk:/^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,ar:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,az:/^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i,el:/^[0-9Α-ώ_-]*$/i,ja:/^[0-9A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF_-]*$/i,he:/^[0-9A-Z\u05D0-\u05EA'_-]*$/i},v=function(t,e){var a=(void 0===e?{}:e).locale,i=void 0===a?"":a;return Array.isArray(t)?t.every((function(t){return v(t,{locale:i})})):i?(l[i]||l.en).test(t):Object.keys(l).some((function(e){return l[e].test(t)}))},m=[{name:"locale"}],p={validate:v,params:m},f=function(t,e){var a=(void 0===e?{}:e).locale,i=void 0===a?"":a;return Array.isArray(t)?t.every((function(t){return f(t,{locale:i})})):i?(h[i]||h.en).test(t):Object.keys(h).some((function(e){return h[e].test(t)}))},k=[{name:"locale"}],A={validate:f,params:k},_=function(t,e){var a=(void 0===e?{}:e).locale,i=void 0===a?"":a;return Array.isArray(t)?t.every((function(t){return _(t,{locale:i})})):i?(d[i]||d.en).test(t):Object.keys(d).some((function(e){return d[e].test(t)}))},y=[{name:"locale"}],b={validate:_,params:y},g=function(t,e){var a=(void 0===e?{}:e).locale,i=void 0===a?"":a;return Array.isArray(t)?t.every((function(t){return g(t,{locale:i})})):i?(u[i]||u.en).test(t):Object.keys(u).some((function(e){return u[e].test(t)}))},C=[{name:"locale"}],S={validate:g,params:C},F=function(t,e){var a=void 0===e?{}:e,i=a.min,n=a.max;return Array.isArray(t)?t.every((function(t){return!!F(t,{min:i,max:n})})):Number(i)<=t&&Number(n)>=t},x=[{name:"min"},{name:"max"}],w={validate:F,params:x},Z=function(t,e){var a=e.target;return String(t)===String(a)},j=[{name:"target",isTarget:!0}],D={validate:Z,params:j},P=function(t,e){var a=e.length;if(Array.isArray(t))return t.every((function(t){return P(t,{length:a})}));var i=String(t);return/^[0-9]*$/.test(i)&&i.length===a},U=[{name:"length",cast:function(t){return Number(t)}}],N={validate:P,params:U},T=function(t,e,a){var i=window.URL||window.webkitURL;return new Promise((function(n){var c=new Image;c.onerror=function(){return n(!1)},c.onload=function(){return n(c.width===e&&c.height===a)},c.src=i.createObjectURL(t)}))},I=function(t,e){var a=e.width,i=e.height,n=[];t=Array.isArray(t)?t:[t];for(var c=0;c<t.length;c++){if(!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(t[c].name))return Promise.resolve(!1);n.push(t[c])}return Promise.all(n.map((function(t){return T(t,a,i)}))).then((function(t){return t.every((function(t){return t}))}))},E=[{name:"width",cast:function(t){return Number(t)}},{name:"height",cast:function(t){return Number(t)}}],L={validate:I,params:E},O=function(t,e){var a=(void 0===e?{}:e).multiple,i=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return a&&!Array.isArray(t)&&(t=String(t).split(",").map((function(t){return t.trim()}))),Array.isArray(t)?t.every((function(t){return i.test(String(t))})):i.test(String(t))},z=[{name:"multiple",default:!1}],V={validate:O,params:z};function B(t){return null===t||void 0===t}function R(t){return Array.isArray(t)&&0===t.length}function q(t){return"function"===typeof t}function G(t,e){return-1!==t.indexOf(e)}function J(t){return q(Array.from)?Array.from(t):M(t)}function M(t){for(var e=[],a=t.length,i=0;i<a;i++)e.push(t[i]);return e}var H=function(t,e){return Array.isArray(t)?t.every((function(t){return H(t,e)})):J(e).some((function(e){return e==t}))},W={validate:H},Y=function(t,e){return!H(t,e)},K={validate:Y},Q=function(t,e){var a=new RegExp(".("+e.join("|")+")$","i");return Array.isArray(t)?t.every((function(t){return a.test(t.name)})):a.test(t.name)},X={validate:Q},tt=function(t){var e=/\.(jpg|svg|jpeg|png|bmp|gif|webp)$/i;return Array.isArray(t)?t.every((function(t){return e.test(t.name)})):e.test(t.name)},et={validate:tt},at=function(t){return Array.isArray(t)?t.every((function(t){return/^-?[0-9]+$/.test(String(t))})):/^-?[0-9]+$/.test(String(t))},it={validate:at},nt=function(t,e){var a=e.other;return t===a},ct=[{name:"other"}],rt={validate:nt,params:ct},st=function(t,e){var a=e.other;return t!==a},ot=[{name:"other"}],lt={validate:st,params:ot},ut=function(t,e){var a=e.length;return!B(t)&&("string"===typeof t&&(t=J(t)),"number"===typeof t&&(t=String(t)),t.length||(t=J(t)),t.length===a)},dt=[{name:"length",cast:function(t){return Number(t)}}],ht={validate:ut,params:dt},vt=function(t,e){var a=e.length;return B(t)?a>=0:Array.isArray(t)?t.every((function(t){return vt(t,{length:a})})):String(t).length<=a},mt=[{name:"length",cast:function(t){return Number(t)}}],pt={validate:vt,params:mt},ft=function(t,e){var a=e.max;return!B(t)&&""!==t&&(Array.isArray(t)?t.length>0&&t.every((function(t){return ft(t,{max:a})})):Number(t)<=a)},kt=[{name:"max",cast:function(t){return Number(t)}}],At={validate:ft,params:kt},_t=function(t,e){var a=new RegExp(e.join("|").replace("*",".+")+"$","i");return Array.isArray(t)?t.every((function(t){return a.test(t.type)})):a.test(t.type)},$t={validate:_t},yt=function(t,e){var a=e.length;return!B(t)&&(Array.isArray(t)?t.every((function(t){return yt(t,{length:a})})):String(t).length>=a)},bt=[{name:"length",cast:function(t){return Number(t)}}],gt={validate:yt,params:bt},Ct=function(t,e){var a=e.min;return!B(t)&&""!==t&&(Array.isArray(t)?t.length>0&&t.every((function(t){return Ct(t,{min:a})})):Number(t)>=a)},St=[{name:"min",cast:function(t){return Number(t)}}],Ft={validate:Ct,params:St},xt=/^[٠١٢٣٤٥٦٧٨٩]+$/,wt=/^[0-9]+$/,Zt=function(t){var e=function(t){var e=String(t);return wt.test(e)||xt.test(e)};return Array.isArray(t)?t.every(e):e(t)},jt={validate:Zt},Dt=function(t,e){var a=e.regex;return Array.isArray(t)?t.every((function(t){return Dt(t,{regex:a})})):a.test(String(t))},Pt=[{name:"regex",cast:function(t){return"string"===typeof t?new RegExp(t):t}}],Ut={validate:Dt,params:Pt},Nt=function(t,e){var a=(void 0===e?{allowFalse:!0}:e).allowFalse,i={valid:!1,required:!0};return B(t)||R(t)?i:!1!==t||a?(i.valid=!!String(t).trim().length,i):i},Tt=!0,It=[{name:"allowFalse",default:!0}],Et={validate:Nt,params:It,computesRequired:Tt},Lt=function(t){return R(t)||G([!1,null,void 0],t)||!String(t).trim().length},Ot=function(t,e){var a,i=e.target,n=e.values;return n&&n.length?(Array.isArray(n)||"string"!==typeof n||(n=[n]),a=n.some((function(t){return t==String(i).trim()}))):a=!Lt(i),a?{valid:!Lt(t),required:a}:{valid:!0,required:a}},zt=[{name:"target",isTarget:!0},{name:"values"}],Vt=!0,Bt={validate:Ot,params:zt,computesRequired:Vt},Rt=function(t,e){var a=e.size;if(isNaN(a))return!1;var i=1024*a;if(!Array.isArray(t))return t.size<=i;for(var n=0;n<t.length;n++)if(t[n].size>i)return!1;return!0},qt=[{name:"size",cast:function(t){return Number(t)}}],Gt={validate:Rt,params:qt},Jt=function(t,e){var a=e||{},i=a.decimals,n=void 0===i?0:i,c=a.separator,r=void 0===c?"dot":c,s="comma"===r?",?":"\\.?",o=0===n?"\\d*":"(\\d{"+n+"})?",l=new RegExp("^-?\\d+"+s+o+"$");return Array.isArray(t)?t.every((function(t){return l.test(String(t))})):l.test(String(t))},Mt=[{name:"decimals",default:0},{name:"separator",default:"dot"}],Ht={validate:Jt,params:Mt};function Wt(t){return a("bb28")(`./${t}.json`).then(e=>{Object(o["d"])(t,e)})}Wt("en"),Object.keys(i).forEach(t=>{Object(o["c"])(t,i[t])}),Object(o["c"])("password",{params:["target"],validate(t,{target:e}){return t===e},message:"Password confirmation does not match"}),Object(o["c"])("url",{validate(t){return!!t&&/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(t)},message:"The {_field_} field must be a valid URL"}),Object(o["c"])("colorCode",{validate(t){return!!t&&/^#[0-9A-F]{6}$/.test(t)},message:"The {_field_} field must be a valid color"}),Object(o["c"])("ZipCode",{validate(t){return!!t&&/(^\d{6}$)|(^\d{5}-\d{4}$)/.test(t)},message:"The {_field_} field is not valid"}),s["default"].component("Form",o["a"]),s["default"].component("Field",o["b"]);var Yt={comments:{validationRules:void 0},data(){return{ApplicationData:[],SelectedVal:"",SelectedVal1:"",SelectedVal2:"",showDiv:!1,showDiv1:!1,showDiv2:!1,isChecked:!1,isChecked1:!1,isChecked2:!1,SelectAllBox:!1,SelectAllBox1:!1,SelectAllBox2:!1,navheading:"User Productivity",isLoading:!1,FormSchema:[{layoutType:"single",Data:[{astype:"SelectField",label:this.$t("SelectUser"),name:"User",value:"",placeholder:"",visibility:!0,validationRules:{required:!0},config:{options:[],onChange:this.FetchData}}]}],buttons:[],DataLoaded:0}},mounted(){},created:async function(){var t=this;await t.GetCompanyUsers(),await t.FetchData(),t.DataLoaded=1},methods:{GetCompanyUsers:async function(){var t=this;t.isLoading=!0,await r["a"].GetConfigUsersByCompanyId().then(e=>{t.UsersData=e.data,t.UsersData.length>0?e.data.forEach(e=>{t.FormSchema[0].Data[0].config.options.push({name:""+e.username,value:""+e.user_id})}):t.FormSchema[0].Data[0].config.options=[]}),t.isLoading=!1},FetchData:async function(){var t=this;t.isLoading=!0;var e="";e=null==t.FormSchema[0].Data[0].value||""==t.FormSchema[0].Data[0].value?"userid=0":"userid="+t.FormSchema[0].Data[0].value,await r["a"].GetAllApp(e).then(e=>{e.data.length>0?(t.ApplicationData=e.data,t.isLoading=!1):(t.ApplicationData=[],t.isLoading=!1),t.showDiv=!1,t.showDiv1=!1,t.showDiv2=!1,t.isChecked=!1,t.isChecked1=!1,t.isChecked2=!1,t.SelectAllBox=!1,t.SelectAllBox1=!1,t.SelectAllBox2=!1,t.ApplicationData.forEach(e=>{"Productive"===e.productive_type?t.SelectAllBox=!0:"UnProductive"===e.productive_type?t.SelectAllBox1=!0:"Neutral"===e.productive_type&&(t.SelectAllBox2=!0)})})},ShowDivClick:function(t){var e="";"undefined"==t||""==t||null==t?$(".chkItems:checkbox:checked").each((function(){e.length>0&&(e+=","),e+=$(this).val()})):$(`.chkItems${t}:checkbox:checked`).each((function(){e.length>0&&(e+=","),e+=$(this).val()})),e?"undefined"==t||""==t||null==t?(this.showDiv=!0,this.showDiv1=!1,this.showDiv2=!1,$('.chkItems1:checkbox:not("#chkAll")').prop("checked",!1),$('.chkItems2:checkbox:not("#chkAll")').prop("checked",!1)):1==t?(this.showDiv1=!0,this.showDiv=!1,this.showDiv2=!1,$('.chkItems:checkbox:not("#chkAll")').prop("checked",!1),$('.chkItems2:checkbox:not("#chkAll")').prop("checked",!1)):(this.showDiv2=!0,this.showDiv=!1,this.showDiv1=!1,$('.chkItems:checkbox:not("#chkAll")').prop("checked",!1),$('.chkItems1:checkbox:not("#chkAll")').prop("checked",!1)):(this.showDiv=!1,this.showDiv1=!1,this.showDiv2=!1)},SelectAll:function(t){"undefined"==t||""==t||null==t?(this.isChecked?$('.chkItems:checkbox:not("#chkAll")').prop("checked",!1):$('.chkItems:checkbox:not("#chkAll")').prop("checked",!0),this.isChecked1=!1,this.isChecked2=!1):1==t?(this.isChecked1?$(`.chkItems${t}:checkbox:not("#chkAll${t}")`).prop("checked",!1):$(`.chkItems${t}:checkbox:not("#chkAll${t}")`).prop("checked",!0),this.isChecked=!1,this.isChecked2=!1):(this.isChecked2?$(`.chkItems${t}:checkbox:not("#chkAll${t}")`).prop("checked",!1):$(`.chkItems${t}:checkbox:not("#chkAll${t}")`).prop("checked",!0),this.isChecked1=!1,this.isChecked=!1),this.ShowDivClick(t)},ConfirmChanges(){var t=this,e="";null!=t.FormSchema[0].Data[0].value&&""!=t.FormSchema[0].Data[0].value||($('[name="User"]').focus(),$('[name="User"]').blur()),$(".chkItems:checkbox:checked").each((function(){e.length>0&&(e+=","),e+=$(this).val()})),this.$refs.ProductivityForm.validate().then(a=>{a&&e&&(t.SelectedVal&&t.FormSchema[0].Data[0].value?t.UpdateProductiveType(e,t.SelectedVal,t.FormSchema[0].Data[0].value):(t.FetchData(),t.isLoading=!1))})},ConfirmChanges1(){var t=this,e="";null!=t.FormSchema[0].Data[0].value&&""!=t.FormSchema[0].Data[0].value||($('[name="User"]').focus(),$('[name="User"]').blur()),$(".chkItems1:checkbox:checked").each((function(){e.length>0&&(e+=","),e+=$(this).val()})),this.$refs.UnProductivityForm.validate().then(a=>{a&&e&&(t.SelectedVal1&&t.FormSchema[0].Data[0].value?t.UpdateProductiveType(e,t.SelectedVal1,t.FormSchema[0].Data[0].value):(t.FetchData(),t.isLoading=!1))})},ConfirmChanges2(){var t=this,e="";null!=t.FormSchema[0].Data[0].value&&""!=t.FormSchema[0].Data[0].value||($('[name="User"]').focus(),$('[name="User"]').blur()),$(".chkItems2:checkbox:checked").each((function(){e.length>0&&(e+=","),e+=$(this).val()})),this.$refs.NeutralForm.validate().then(a=>{a&&e&&(t.SelectedVal2&&t.FormSchema[0].Data[0].value?t.UpdateProductiveType(e,t.SelectedVal2,t.FormSchema[0].Data[0].value):(t.FetchData(),t.isLoading=!1))})},UpdateProductiveType(t,e,a){var i=this,n=`Ids=${t}&Type=${e}&selectedUserId=${a}`;r["a"].UpdateProductiveType(n).then(t=>{t.data.length>0?(i.ShowAlert(i.$t("AppTypeSuccessfully"),"success",!0,i.$t("Alert")),i.FetchData(),i.isLoading=!1):(i.FetchData(),i.isLoading=!1)})}}},Kt=Yt,Qt=a("2877"),Xt=Object(Qt["a"])(Kt,n,c,!1,null,null,null);e["default"]=Xt.exports},bb28:function(t,e,a){var i={"./ar.json":["d4d7","chunk-2d21e599"],"./az.json":["5db6","chunk-2d0d3c19"],"./bd.json":["2b85","chunk-2d0bd263"],"./bg.json":["3108","chunk-2d0b8ddc"],"./ca.json":["36fd","chunk-2d0ba757"],"./ckb.json":["5ac5","chunk-2d0d30f4"],"./cs.json":["f694","chunk-2d22d0a1"],"./da.json":["853c","chunk-2d0de343"],"./de.json":["f551","chunk-2d22cc61"],"./el.json":["3be5","chunk-2d0c4c35"],"./en.json":["2593","chunk-2d0b2993"],"./es.json":["5a17","chunk-2d0d2ae8"],"./et.json":["28b1","chunk-2d0b39cb"],"./eu.json":["656c","chunk-2d0cfae2"],"./fa.json":["5ea1","chunk-2d0d3fb6"],"./fi.json":["e9cd","chunk-2d226ccb"],"./fr.json":["6fde","chunk-2d0db867"],"./he.json":["d567","chunk-2d21e3c8"],"./hr.json":["dc20","chunk-2d228ff3"],"./hu.json":["bed6","chunk-2d21b4cb"],"./id.json":["7a70","chunk-2d0e1459"],"./it.json":["e26a","chunk-2d224d0e"],"./ja.json":["ddd7","chunk-2d2299c9"],"./ka.json":["fdcd","chunk-2d238295"],"./ko.json":["e48c","chunk-2d2254d0"],"./lt.json":["85f3","chunk-2d0de940"],"./lv.json":["c64c","chunk-2d217318"],"./mn.json":["0c64","chunk-2d0aed27"],"./ms_MY.json":["3708","chunk-2d0ba462"],"./nb_NO.json":["16c1","chunk-2d0abe09"],"./ne.json":["52b8","chunk-2d0c8069"],"./nl.json":["562f","chunk-2d0c89cb"],"./nn_NO.json":["c7c8","chunk-2d217c5f"],"./pl.json":["94ce","chunk-2d0e59b3"],"./pt_BR.json":["38a9","chunk-2d0bae13"],"./pt_PT.json":["3207","chunk-2d0b919c"],"./ro.json":["eaf5","chunk-2d230321"],"./ru.json":["8de0","chunk-2d0e998d"],"./sk.json":["70d1","chunk-2d0d61dc"],"./sl.json":["2572","chunk-2d0b2954"],"./sq.json":["5e5e","chunk-2d0d3a96"],"./sr.json":["111a","chunk-2d0aa566"],"./sr_Latin.json":["4aa8","chunk-2d0cbc5a"],"./sv.json":["ec0a","chunk-2d230445"],"./th.json":["51d9","chunk-2d0c7ce7"],"./tr.json":["55f0","chunk-2d0c8c20"],"./uk.json":["e4b6","chunk-2d2259b9"],"./uz.json":["93ed","chunk-2d0e562f"],"./vi.json":["368c","chunk-2d0ba1c4"],"./zh_CN.json":["1cd5","chunk-2d0b6719"],"./zh_TW.json":["60d4","chunk-2d0ced80"]};function n(t){if(!a.o(i,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[t],n=e[0];return a.e(e[1]).then((function(){return a.t(n,3)}))}n.keys=function(){return Object.keys(i)},n.id="bb28",t.exports=n}}]);
//# sourceMappingURL=chunk-29791d11.js.map