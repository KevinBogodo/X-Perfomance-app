(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-878d4598"],{"0fd9":function(t,e,a){"use strict";var s=a("ade3"),i=a("5530"),n=(a("13d5"),a("d3b7"),a("caad"),a("2532"),a("99af"),a("b64b"),a("ac1f"),a("5319"),a("4ec9"),a("3ca3"),a("ddb0"),a("159b"),a("14d9"),a("4b85"),a("2b0e")),r=a("d9f7"),o=a("80d2"),l=["sm","md","lg","xl"],d=["start","end","center"];function c(t,e){return l.reduce((function(a,s){return a[t+Object(o["D"])(s)]=e(),a}),{})}var h=function(t){return[].concat(d,["baseline","stretch"]).includes(t)},f=c("align",(function(){return{type:String,default:null,validator:h}})),m=function(t){return[].concat(d,["space-between","space-around"]).includes(t)},u=c("justify",(function(){return{type:String,default:null,validator:m}})),b=function(t){return[].concat(d,["space-between","space-around","stretch"]).includes(t)},g=c("alignContent",(function(){return{type:String,default:null,validator:b}})),p={align:Object.keys(f),justify:Object.keys(u),alignContent:Object.keys(g)},y={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,a){var s=y[t];if(null!=a){if(e){var i=e.replace(t,"");s+="-".concat(i)}return s+="-".concat(a),s.toLowerCase()}}var C=new Map;e["a"]=n["default"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},f),{},{justify:{type:String,default:null,validator:m}},u),{},{alignContent:{type:String,default:null,validator:b}},g),render:function(t,e){var a=e.props,i=e.data,n=e.children,o="";for(var l in a)o+=String(a[l]);var d=C.get(o);if(!d){var c,h;for(h in d=[],p)p[h].forEach((function(t){var e=a[t],s=v(h,t,e);s&&d.push(s)}));d.push((c={"no-gutters":a.noGutters,"row--dense":a.dense},Object(s["a"])(c,"align-".concat(a.align),a.align),Object(s["a"])(c,"justify-".concat(a.justify),a.justify),Object(s["a"])(c,"align-content-".concat(a.alignContent),a.alignContent),c)),C.set(o,d)}return t(a.tag,Object(r["a"])(i,{staticClass:"row",class:d}),n)}})},"20f6":function(t,e,a){},a523:function(t,e,a){"use strict";a("4de4"),a("d3b7"),a("b64b"),a("2ca0"),a("99af"),a("20f6"),a("4b85"),a("498a"),a("a15b");var s=a("2b0e");function i(t){return s["default"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var s=a.props,i=a.data,n=a.children;i.staticClass="".concat(t," ").concat(i.staticClass||"").trim();var r=i.attrs;if(r){i.attrs={};var o=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(i.staticClass+=" ".concat(o.join(" ")))}return s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),e(s.tag,i,n)}})}var n=a("d9f7");e["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,s=e.props,i=e.data,r=e.children,o=i.attrs;return o&&(i.attrs={},a=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),t(s.tag,Object(n["a"])(i,{staticClass:"container",class:Array({"container--fluid":s.fluid}).concat(a||[])}),r)}})},de1f:function(t,e,a){"use strict";a.r(e);var s=a("b0af"),i=a("99d9"),n=a("62ad"),r=a("a523"),o=a("0fd9"),l=function(){var t=this,e=t._self._c;return e(r["a"],{attrs:{id:"grid",fluid:"",tag:"section"}},[e("base-v-component",{attrs:{heading:"Grid System",link:"components/grid"}}),e(o["a"],{staticClass:"text-center"},[e("base-subheading",{staticClass:"pb-0 pl-3 mt-5",attrs:{subheading:"XS Grid",text:"Always Horizontal"}}),t._l(3,(function(a){return e(n["a"],{key:"cols-".concat(a),staticClass:"pt-0",attrs:{cols:"4"}},[e(s["a"],{staticClass:"mt-0"},[e(i["b"],{staticClass:"red--text text--darken-4"},[t._v(" col-4 ")])],1)],1)})),e("base-subheading",{staticClass:"pb-0 pl-3 mt-5",attrs:{subheading:"SM Grid",text:"Collapsed at 600px"}}),t._l(3,(function(a){return e(n["a"],{key:"sm-".concat(a),staticClass:"pt-0",attrs:{cols:"12",sm:"4"}},[e(s["a"],{staticClass:"mt-0"},[e(i["b"],{staticClass:"red--text text--darken-4"},[t._v(" col-sm-4 ")])],1)],1)})),e("base-subheading",{staticClass:"pb-0 pl-3 mt-5",attrs:{subheading:"MD Grid",text:"Collapsed at 960px"}}),t._l(3,(function(a){return e(n["a"],{key:"md-".concat(a),staticClass:"pt-0",attrs:{cols:"12",md:"4"}},[e(s["a"],{staticClass:"mt-0"},[e(i["b"],{staticClass:"red--text text--darken-4"},[t._v(" col-md-4 ")])],1)],1)})),e("base-subheading",{staticClass:"pb-0 pl-3 mt-5",attrs:{subheading:"LG Grid",text:"Collapsed at 1280px"}}),t._l(3,(function(a){return e(n["a"],{key:"lg-".concat(a),staticClass:"pt-0",attrs:{cols:"12",lg:"4"}},[e(s["a"],{staticClass:"mt-0"},[e(i["b"],{staticClass:"red--text text--darken-4"},[t._v(" col-lg-4 ")])],1)],1)})),e("base-subheading",{staticClass:"pb-0 pl-3 mt-5",attrs:{subheading:"XL Grid",text:"Collapsed at 1920px"}}),t._l(3,(function(a){return e(n["a"],{key:"xl-".concat(a),staticClass:"pt-0",attrs:{cols:"12",xl:"4"}},[e(s["a"],{staticClass:"mt-0"},[e(i["b"],{staticClass:"red--text text--darken-4"},[t._v(" col-xl-4 ")])],1)],1)})),e("base-subheading",{staticClass:"pb-0 pl-3 mt-5",attrs:{subheading:"Mixed Grid",text:"Showing different sizes on different screens"}}),t._l(4,(function(a){return e(n["a"],{key:"mixed-".concat(a),staticClass:"pt-0",attrs:{sm:"6",lg:"3"}},[e(s["a"],{staticClass:"mt-0"},[e(i["b"],{staticClass:"red--text text--darken-4"},[t._v(" col-xl-4 ")])],1)],1)}))],2),e(o["a"],{staticClass:"text-center"},[e("base-subheading",{staticClass:"pb-0 pl-3 mt-5",attrs:{subheading:"Offset Grid",text:"Adding some space when neede"}}),e(n["a"],{staticClass:"pt-0",attrs:{md:"3"}},[e(s["a"],{staticClass:"mt-0"},[e(i["b"],{staticClass:"red--text text--darken-4"},[t._v(" col-md-3 ")])],1)],1),e(n["a"],{staticClass:"ml-auto",attrs:{md:"3"}},[e(s["a"],{staticClass:"mt-0"},[e(i["b"],{staticClass:"red--text text--darken-4"},[t._v(" col-md-4 ml-auto mr-auto ")])],1)],1)],1),e(o["a"],{staticClass:"text-center"},t._l(2,(function(a){return e(n["a"],{key:"offset-".concat(a),staticClass:"ml-auto mr-auto",attrs:{md:"4"}},[e(s["a"],{staticClass:"mt-0"},[e(i["b"],{staticClass:"red--text text--darken-4"},[t._v(" col-md-4 ml-auto mr-auto ")])],1)],1)})),1),e(o["a"],{staticClass:"text-center mb-12"},[e(n["a"],{staticClass:"ml-auto mr-auto",attrs:{md:"6"}},[e(s["a"],{staticClass:"mt-0"},[e(i["b"],{staticClass:"red--text text--darken-4"},[t._v(" col-md-6 ml-auto mr-auto ")])],1)],1)],1),e(o["a"],[e("paragraph-heading",{staticClass:"text-center pb-0"},[e("h4",{staticClass:"font-weight-light"},[t._v(" Paragraphs ")])]),e(n["a"],{attrs:{cols:"12 pt-0"}},[e(s["a"],[e(r["a"],{attrs:{fluid:""}},[e(o["a"],[e(n["a"],{attrs:{cols:"12",md:"6"}},[e("paragraph-heading",[t._v("Some Title Here")]),e(i["b"],{staticClass:"font-weight-light"},[t._v(' One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What\'s happened to me?" he thought. ')])],1),e(n["a"],{attrs:{cols:"12",md:"6"}},[e("paragraph-heading",[t._v("Another Title Here")]),e(i["b"],{staticClass:"font-weight-light"},[t._v(' One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What\'s happened to me?" he thought. ')])],1),e(n["a"],{attrs:{cols:"12",md:"4"}},[e("paragraph-heading",[t._v("Some Title Here")]),e(i["b"],{staticClass:"font-weight-light"},[t._v(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. ")])],1),e(n["a"],{attrs:{cols:"12",md:"4"}},[e("paragraph-heading",[t._v("Another Title Here")]),e(i["b"],{staticClass:"font-weight-light"},[t._v(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. ")])],1),e(n["a"],{attrs:{cols:"12",md:"4"}},[e("paragraph-heading",[t._v("Another Title Here")]),e(i["b"],{staticClass:"font-weight-light"},[t._v(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. ")])],1),e(n["a"],{attrs:{cols:"12",md:"4"}},[e("paragraph-heading",[t._v("Some Title Here")]),e(i["b"],{staticClass:"font-weight-light"},[t._v(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. ")])],1),e(n["a"],{attrs:{cols:"12",md:"8"}},[e("paragraph-heading",[t._v("Another Title Here")]),e(i["b"],{staticClass:"font-weight-light"},[t._v(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. ")])],1)],1)],1)],1)],1)],1)],1)},d=[],c={name:"DashboardGrid",components:{ParagraphHeading:{render:function(t){return t("div",{class:"headline font-weight-light col cols-12"},this.$slots.default)}}}},h=c,f=a("2877"),m=Object(f["a"])(h,l,d,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-878d4598.32a8a50c.js.map