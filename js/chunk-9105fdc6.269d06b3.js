(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9105fdc6"],{"0fd9":function(t,e,a){"use strict";var i=a("ade3"),n=a("5530"),s=(a("13d5"),a("d3b7"),a("caad"),a("2532"),a("99af"),a("b64b"),a("ac1f"),a("5319"),a("4ec9"),a("3ca3"),a("ddb0"),a("159b"),a("14d9"),a("4b85"),a("2b0e")),o=a("d9f7"),r=a("80d2"),l=["sm","md","lg","xl"],c=["start","end","center"];function u(t,e){return l.reduce((function(a,i){return a[t+Object(r["D"])(i)]=e(),a}),{})}var d=function(t){return[].concat(c,["baseline","stretch"]).includes(t)},h=u("align",(function(){return{type:String,default:null,validator:d}})),p=function(t){return[].concat(c,["space-between","space-around"]).includes(t)},v=u("justify",(function(){return{type:String,default:null,validator:p}})),f=function(t){return[].concat(c,["space-between","space-around","stretch"]).includes(t)},m=u("alignContent",(function(){return{type:String,default:null,validator:f}})),b={align:Object.keys(h),justify:Object.keys(v),alignContent:Object.keys(m)},g={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,a){var i=g[t];if(null!=a){if(e){var n=e.replace(t,"");i+="-".concat(n)}return i+="-".concat(a),i.toLowerCase()}}var w=new Map;e["a"]=s["default"].extend({name:"v-row",functional:!0,props:Object(n["a"])(Object(n["a"])(Object(n["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},h),{},{justify:{type:String,default:null,validator:p}},v),{},{alignContent:{type:String,default:null,validator:f}},m),render:function(t,e){var a=e.props,n=e.data,s=e.children,r="";for(var l in a)r+=String(a[l]);var c=w.get(r);if(!c){var u,d;for(d in c=[],b)b[d].forEach((function(t){var e=a[t],i=y(d,t,e);i&&c.push(i)}));c.push((u={"no-gutters":a.noGutters,"row--dense":a.dense},Object(i["a"])(u,"align-".concat(a.align),a.align),Object(i["a"])(u,"justify-".concat(a.justify),a.justify),Object(i["a"])(u,"align-content-".concat(a.alignContent),a.alignContent),u)),w.set(r,c)}return t(a.tag,Object(o["a"])(n,{staticClass:"row",class:c}),s)}})},"20f6":function(t,e,a){},"210b":function(t,e,a){},"71a3":function(t,e,a){"use strict";var i=a("5530"),n=(a("ac1f"),a("5319"),a("4e82")),s=a("1c87"),o=a("7560"),r=a("80d2"),l=a("58df"),c=Object(l["a"])(s["a"],Object(n["a"])("tabsBar"),o["a"]);e["a"]=c.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:function(){return{proxyClass:"v-tab--active"}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({"v-tab":!0},s["a"].options.computed.classes.call(this)),{},{"v-tab--disabled":this.disabled},this.groupClasses)},value:function(){var t=this.to||this.href;if(null==t)return t;if(this.$router&&this.to===Object(this.to)){var e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},methods:{click:function(t){this.disabled?t.preventDefault():(this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle())},toggle:function(){this.isActive&&(this.tabsBar.mandatory||this.to)||this.$emit("change")}},render:function(t){var e=this,a=this.generateRouteLink(),n=a.tag,s=a.data;return s.attrs=Object(i["a"])(Object(i["a"])({},s.attrs),{},{"aria-selected":String(this.isActive),role:"tab",tabindex:this.disabled?-1:0}),s.on=Object(i["a"])(Object(i["a"])({},s.on),{},{keydown:function(t){t.keyCode===r["w"].enter&&e.click(t),e.$emit("keydown",t)}}),t(n,s,this.$slots.default)}})},"7eaf":function(t,e,a){"use strict";a.r(e);var i=a("b0af"),n=a("99d9"),s=a("62ad"),o=a("a523"),r=a("5530"),l=a("4e82"),c=a("3206"),u=a("80d2"),d=a("58df"),h=Object(d["a"])(Object(l["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(c["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(r["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(t){this.content=t},unregisterContent:function(){this.content=null},registerHeader:function(t){this.header=t,t.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(t){t.detail&&this.header.$el.blur(),this.$emit("click",t),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var t=this;this.$nextTick((function(){return t.$emit("change")}))}},render:function(t){return t("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(u["r"])(this))}}),p=a("0789"),v=a("9d65"),f=a("a9ad"),m=Object(d["a"])(v["a"],f["a"],Object(c["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel")),b=m.extend().extend({name:"v-expansion-panel-content",data:function(){return{isActive:!1}},computed:{parentIsActive:function(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler:function(t,e){var a=this;t&&(this.isBooted=!0),null==e?this.isActive=t:this.$nextTick((function(){return a.isActive=t}))}}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(t){var e=this;return t(p["a"],this.showLazyContent((function(){return[t("div",e.setBackgroundColor(e.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:e.isActive}]}),[t("div",{class:"v-expansion-panel-content__wrap"},Object(u["r"])(e))])]})))}}),g=a("9d26"),y=a("5607"),w=Object(d["a"])(f["a"],Object(c["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel")),x=w.extend().extend({name:"v-expansion-panel-header",directives:{ripple:y["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(t){this.$emit("click",t)},genIcon:function(){var t=Object(u["r"])(this,"actions")||[this.$createElement(g["a"],this.expandIcon)];return this.$createElement(p["d"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},t)])}},render:function(t){var e=this;return t("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(r["a"])(Object(r["a"])({},this.$listeners),{},{click:this.onClick,mousedown:function(){return e.hasMousedown=!0},mouseup:function(){return e.hasMousedown=!1}})}),[Object(u["r"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),C=(a("0481"),a("4069"),a("210b"),a("604c")),k=a("d9bd"),j=C["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({},C["a"].options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(k["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(k["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(t,e){var a=this.getValue(t,e),i=this.getValue(t,e+1);t.isActive=this.toggleMethod(a),t.nextIsActive=this.toggleMethod(i)}}}),_=a("132d"),O=a("0fd9"),B=a("71a3"),D=a("c671"),T=a("aac8"),P=function(){var t=this,e=t._self._c;return e(o["a"],{attrs:{id:"panels",fluid:"",tag:"section"}},[e("base-v-component",{attrs:{heading:"Tabs",link:"components/tabs"}}),e(O["a"],[e(s["a"],{attrs:{cols:"12",md:"6"}},[e(i["a"],{staticClass:"my-0"},[e(n["b"],[e("base-subheading",{attrs:{subheading:"Navigation Pills",text:"Horizontal Tabs"}}),e("base-material-tabs",{attrs:{color:"warning"}},[t._l(t.tabs,(function(a,i){return e(B["a"],{key:i},[t._v(" "+t._s(a)+" ")])})),e(D["a"],[e(i["a"],{staticClass:"my-0",attrs:{flat:""}},[e(n["b"],[e("p",[t._v(" Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. ")]),e("p",[t._v(" Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. ")]),e("div",[t._v("This is very nice.")])])],1)],1),e(D["a"],[e(i["a"],{staticClass:"my-0",attrs:{flat:""}},[e(n["b"],[e("p",[t._v(" Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. ")]),e("div",[t._v(" Dramatically maintain clicks-and-mortar solutions without functional solutions. ")])])],1)],1),e(D["a"],[e(i["a"],{staticClass:"my-0",attrs:{flat:""}},[e(n["b"],[e("p",[t._v(" Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. ")]),e("div",[t._v(" Dynamically innovate resource-leveling customer service for state of the art customer service. ")])])],1)],1)],2)],1)],1)],1),e(s["a"],{attrs:{cols:"12",md:"6"}},[e(i["a"],{staticClass:"mt-0"},[e(n["b"],[e("base-subheading",{attrs:{subheading:"Navigation Pills",text:"Vertical Tabs"}}),e("base-material-tabs",{attrs:{color:"success",vertical:""}},[t._l(t.tabs,(function(a,i){return e(B["a"],{key:i,staticClass:"mb-1"},[t._v(" "+t._s(a)+" ")])})),e(D["a"],[e(i["a"],{staticClass:"my-0",attrs:{flat:""}},[e(n["b"],{staticClass:"pt-0"},[e("p",[t._v(" Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. ")]),e("p",[t._v(" Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. ")]),e("div",[t._v("This is very nice.")])])],1)],1),e(D["a"],[e(i["a"],{staticClass:"my-0",attrs:{flat:""}},[e(n["b"],{staticClass:"pt-0"},[e("p",[t._v(" Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. ")]),e("div",[t._v(" Dramatically maintain clicks-and-mortar solutions without functional solutions. ")])])],1)],1),e(D["a"],[e(i["a"],{staticClass:"my-0",attrs:{flat:""}},[e(n["b"],{staticClass:"pt-0"},[e("p",[t._v(" Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. ")]),e("div",[t._v(" Dynamically innovate resource-leveling customer service for state of the art customer service. ")])])],1)],1)],2)],1)],1)],1),e(s["a"],{attrs:{cols:"12",md:"6"}},[e(i["a"],[e(n["b"],[e("base-subheading",{attrs:{subheading:"Collapsible Accordion"}}),e(j,t._l(5,(function(a){return e(h,{key:a},[e(x,[t._v(" Collapsible Group Item #"+t._s(a)+" ")]),e(b,[t._v(" Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ")])],1)})),1)],1)],1)],1),e(s["a"],{staticClass:"mb-12",attrs:{cols:"12",md:"6"}},[e(i["a"],[e(n["b"],[e("base-subheading",{attrs:{subheading:"Navigation Pills",text:"Vertical Tabs"}}),e("base-material-tabs",{attrs:{color:"success","icons-and-text":"",vertical:""}},[t._l(t.tabs2,(function(a,i){return e(B["a"],{key:i,staticClass:"mb-5"},[t._v(" "+t._s(a.text)+" "),e(_["a"],{domProps:{textContent:t._s(a.icon)}})],1)})),e(D["a"],[e(i["a"],{staticClass:"my-0",attrs:{flat:""}},[e(n["b"],{staticClass:"pt-0"},[e("p",[t._v(" Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. ")]),e("p",[t._v(" Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. ")]),e("div",[t._v(" Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. ")])])],1)],1),e(D["a"],[e(i["a"],{staticClass:"my-0",attrs:{flat:""}},[e(n["b"],{staticClass:"pt-0"},[e("p",[t._v(" Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. ")]),e("div",[t._v(" Dramatically maintain clicks-and-mortar solutions without functional solutions. ")])])],1)],1)],2)],1)],1)],1),e(s["a"],{staticClass:"mx-auto",attrs:{cols:"12",md:"8"}},[e("div",{staticClass:"text-center headline font-weight-light mb-12 pl-0"},[t._v(" Page Subcategories ")]),e("base-material-tabs",{attrs:{"background-color":"transparent",centered:"",color:"warning","icons-and-text":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[t._l(t.tabs3,(function(a,i){return e(B["a"],{key:i},[t._v(" "+t._s(a.text)+" "),e(_["a"],{domProps:{textContent:t._s(a.icon)}})],1)})),e(T["a"],{staticClass:"pt-12 transparent",model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(D["a"],[e(i["a"],{staticClass:"mt-0 px-5"},[e(n["b"],[e("base-subheading",{attrs:{subheading:"Description about product"}},[e("p",{staticClass:"grey--text body-2 font-weight-light"},[t._v(" More Information here ")])]),e("p",[t._v(" Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. ")]),e("div",[t._v(" Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. ")])],1)],1)],1),e(D["a"],[e(i["a"],{staticClass:"mt-0 px-5"},[e(n["b"],[e("base-subheading",{attrs:{subheading:"Location of the product product"}},[e("p",{staticClass:"grey--text body-2 font-weight-light"},[t._v(" More Information here ")])]),e("p",[t._v(" Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. ")]),e("div",[t._v(" Dramatically maintain clicks-and-mortar solutions without functional solutions ")])],1)],1)],1),e(D["a"],[e(i["a"],{staticClass:"mt-0 px-5"},[e(n["b"],[e("base-subheading",{attrs:{subheading:"Legal info of the product product"}},[e("p",{staticClass:"grey--text body-2 font-weight-light"},[t._v(" More Information here ")])]),e("p",[t._v(" Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. ")]),e("div",[t._v(" Dynamically innovate resource-leveling customer service for state of the art customer service. ")])],1)],1)],1),e(D["a"],[e(i["a"],{staticClass:"mt-0 px-5"},[e(n["b"],[e("base-subheading",{attrs:{heading:"Help center"}},[e("p",{staticClass:"grey--text body-2 font-weight-light"},[t._v(" More Information here ")])]),e("p",[t._v(" From the seamless transition of glass and metal to the streamlined profile, every detail was carefully considered to enhance your experience. So while its display is larger, the phone feels just right. ")]),e("div",[t._v(" Another Text. The first thing you notice when you hold the phone is how great it feels in your hand. The cover glass curves down around the sides to meet the anodized aluminum enclosure in a remarkable, simplified design. ")])],1)],1)],1)],1)],2)],1)],1)],1)},A=[],I={name:"DashboardPanels",data:function(){return{tab:0,tabs:["Profile","Settings","Options"],tabs2:[{text:"Home",icon:"mdi-view-dashboard"},{text:"Settings",icon:"mdi-clock-outline"}],tabs3:[{text:"Description",icon:"mdi-information"},{text:"Location",icon:"mdi-map-marker"},{text:"Legal Info",icon:"mdi-gavel"},{text:"Help Center",icon:"mdi-help-circle-outline"}]}}},$=I,S=a("2877"),z=Object(S["a"])($,P,A,!1,null,null,null);e["default"]=z.exports},a523:function(t,e,a){"use strict";a("4de4"),a("d3b7"),a("b64b"),a("2ca0"),a("99af"),a("20f6"),a("4b85"),a("498a"),a("a15b");var i=a("2b0e");function n(t){return i["default"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var i=a.props,n=a.data,s=a.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var o=n.attrs;if(o){n.attrs={};var r=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}));r.length&&(n.staticClass+=" ".concat(r.join(" ")))}return i.id&&(n.domProps=n.domProps||{},n.domProps.id=i.id),e(i.tag,n,s)}})}var s=a("d9f7");e["a"]=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,i=e.props,n=e.data,o=e.children,r=n.attrs;return r&&(n.attrs={},a=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),i.id&&(n.domProps=n.domProps||{},n.domProps.id=i.id),t(i.tag,Object(s["a"])(n,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(a||[])}),o)}})},c671:function(t,e,a){"use strict";var i=a("9d65"),n=a("4e82"),s=a("c3f0"),o=a("80d2"),r=a("58df"),l=Object(r["a"])(i["a"],Object(n["a"])("windowGroup","v-window-item","v-window")),c=l.extend().extend().extend({name:"v-window-item",directives:{Touch:s["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(o["h"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(o["h"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}});e["a"]=c.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=c.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})}}]);
//# sourceMappingURL=chunk-9105fdc6.269d06b3.js.map