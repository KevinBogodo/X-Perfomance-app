(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ffe81b9"],{"0fd9":function(t,e,a){"use strict";var i=a("ade3"),n=a("5530"),o=(a("13d5"),a("d3b7"),a("caad"),a("2532"),a("99af"),a("b64b"),a("ac1f"),a("5319"),a("4ec9"),a("3ca3"),a("ddb0"),a("159b"),a("14d9"),a("4b85"),a("2b0e")),s=a("d9f7"),r=a("80d2"),l=["sm","md","lg","xl"],c=["start","end","center"];function d(t,e){return l.reduce((function(a,i){return a[t+Object(r["D"])(i)]=e(),a}),{})}var u=function(t){return[].concat(c,["baseline","stretch"]).includes(t)},h=d("align",(function(){return{type:String,default:null,validator:u}})),f=function(t){return[].concat(c,["space-between","space-around"]).includes(t)},v=d("justify",(function(){return{type:String,default:null,validator:f}})),m=function(t){return[].concat(c,["space-between","space-around","stretch"]).includes(t)},b=d("alignContent",(function(){return{type:String,default:null,validator:m}})),g={align:Object.keys(h),justify:Object.keys(v),alignContent:Object.keys(b)},p={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,a){var i=p[t];if(null!=a){if(e){var n=e.replace(t,"");i+="-".concat(n)}return i+="-".concat(a),i.toLowerCase()}}var w=new Map;e["a"]=o["default"].extend({name:"v-row",functional:!0,props:Object(n["a"])(Object(n["a"])(Object(n["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u}},h),{},{justify:{type:String,default:null,validator:f}},v),{},{alignContent:{type:String,default:null,validator:m}},b),render:function(t,e){var a=e.props,n=e.data,o=e.children,r="";for(var l in a)r+=String(a[l]);var c=w.get(r);if(!c){var d,u;for(u in c=[],g)g[u].forEach((function(t){var e=a[t],i=y(u,t,e);i&&c.push(i)}));c.push((d={"no-gutters":a.noGutters,"row--dense":a.dense},Object(i["a"])(d,"align-".concat(a.align),a.align),Object(i["a"])(d,"justify-".concat(a.justify),a.justify),Object(i["a"])(d,"align-content-".concat(a.alignContent),a.alignContent),d)),w.set(r,c)}return t(a.tag,Object(s["a"])(n,{staticClass:"row",class:c}),o)}})},"2fa4":function(t,e,a){"use strict";a("20f6");var i=a("80d2");e["a"]=Object(i["i"])("spacer","div","v-spacer")},"368e":function(t,e,a){},"38e4":function(t,e,a){"use strict";a.r(e);var i=a("8336"),n=a("b0af"),o=a("99d9"),s=a("62ad"),r=a("a523"),l=a("5530"),c=a("2909"),d=a("ade3"),u=(a("a9e3"),a("498a"),a("caad"),a("2532"),a("d3b7"),a("7db0"),a("368e"),a("480e")),h=a("4ad4"),f=a("b848"),v=a("75eb"),m=a("e707"),b=a("e4d3"),g=a("21be"),p=a("a293"),y=a("58df"),w=a("d9bd"),k=a("80d2"),O=Object(y["a"])(f["a"],v["a"],m["a"],b["a"],g["a"],h["a"]),C=O.extend({name:"v-dialog",directives:{ClickOutside:p["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(d["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(d["a"])(t,"v-dialog--active",this.isActive),Object(d["a"])(t,"v-dialog--persistent",this.persistent),Object(d["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(d["a"])(t,"v-dialog--scrollable",this.scrollable),Object(d["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(w["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):m["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){var e,a;(null===(e=t.$refs.dialog)||void 0===e?void 0:e.contains(document.activeElement))||(t.previousActiveElement=document.activeElement,null===(a=t.$refs.dialog)||void 0===a||a.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===k["w"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var a=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),i=Object(c["a"])(a).find((function(t){return!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]')}));i&&i.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(u["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(l["a"])({role:"dialog","aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(l["a"])(Object(l["a"])({},t.style),{},{maxWidth:Object(k["h"])(this.maxWidth),width:Object(k["h"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}}),_=a("132d"),x=a("adda"),S=a("0fd9"),j=a("8dd9"),A=a("2fa4"),$=function(){var t,e=this,a=e._self._c;return a(r["a"],{attrs:{id:"alerts",fluid:"",tag:"section"}},[a("base-v-component",{attrs:{heading:"Alerts",link:"components/alerts"}}),a(S["a"],[a(s["a"],{attrs:{cols:"12",md:"6"}},[a(n["a"],[a(o["b"],[a("base-subheading",{attrs:{subheading:"Notification Style"}}),a("base-material-alert",{attrs:{color:"info",dark:""}},[e._v(" This is a plain notification. ")]),a("base-material-alert",{attrs:{color:"info",dark:"",dismissible:""}},[e._v(" This is a notification with close button. ")]),a("base-material-alert",{attrs:{color:"info",dark:"",dismissible:"",icon:"mdi-bell"}},[e._v(" This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style. ")]),a("base-material-alert",{attrs:{color:"primary",dark:"",dismissible:"",icon:"mdi-bell"}},[e._v(" You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style. ")])],1)],1)],1),a(s["a"],{attrs:{cols:"12",md:"6"}},[a(n["a"],[a(o["b"],[a("base-subheading",{attrs:{subheading:"Notification states"}}),e._l(e.colors,(function(t){return a("base-material-alert",{key:t,attrs:{color:t,dark:"",dismissible:""}},[a("span",{staticClass:"text-uppercase",domProps:{textContent:e._s(t)}}),e._v(' — This is a regular alert made with the color of "'+e._s(t)+'" ')])})),a("base-material-alert",{attrs:{color:"secondary",dark:"",dismissible:""}},[a("span",[e._v("PRIMARY")]),e._v(' — This is a regular alert made with the color "secondary" ')]),a("base-material-alert",{attrs:{color:"pink darken-1",dark:"",dismissible:""}},[a("span",[e._v("PINK DARKEN-1")]),e._v(' — This is a regular alert made with the color "pink darken-1" ')])],2)],1)],1),a(s["a"],{attrs:{cols:"12"}},[a(n["a"],[a(o["b"],{staticClass:"text-center"},[a("base-subheading",{staticClass:"text-center",attrs:{subheading:"Snackbar Locations"}}),a(S["a"],{staticClass:"mt-n12",attrs:{justify:"center"}},[a(s["a"],{attrs:{cols:"10",lg:"8"}},[a(S["a"],e._l(e.directions,(function(t){return a(s["a"],{key:t,attrs:{cols:"4"}},[a(i["a"],{staticClass:"v-btn--block",attrs:{color:"secondary",default:""},on:{click:function(a){e.randomColor(),e.direction=t,e.snackbar=!0}}},[e._v(" "+e._s(t)+" ")])],1)})),1)],1)],1),a("base-subheading",{staticClass:"text-center",attrs:{subheading:"Dialogs"}}),a(S["a"],{staticClass:"mt-n12",attrs:{justify:"center"}},[a(s["a"],{attrs:{cols:"10",lg:"8"}},[a(S["a"],[a(s["a"],{attrs:{cols:"4"}},[a(i["a"],{attrs:{color:"secondary",default:"",rounded:""},on:{click:function(t){e.dialog=!0}}},[e._v(" Classic Dialog ")])],1),a(s["a"],{attrs:{cols:"4"}},[a(i["a"],{attrs:{color:"info",default:"",rounded:""},on:{click:function(t){e.dialog2=!0}}},[e._v(" Notice Modal ")])],1),a(s["a"],{attrs:{cols:"4"}},[a(i["a"],{attrs:{color:"pink darken-1",dark:"",default:"",rounded:""},on:{click:function(t){e.dialog3=!0}}},[e._v(" Small Alert Modal ")])],1)],1)],1)],1)],1)],1)],1)],1),a("base-material-snackbar",e._b({attrs:{type:e.color},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},"base-material-snackbar",(t={},Object(d["a"])(t,e.parsedDirection[0],!0),Object(d["a"])(t,e.parsedDirection[1],!0),t),!1),[e._v(" Welcome to "),a("span",{staticClass:"font-weight-bold"},[e._v(" MATERIAL DASHBOARD ")]),e._v(" — a beautiful admin panel for every web developer. ")]),a(C,{attrs:{"max-width":"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a(n["a"],{staticClass:"text-center"},[a(o["c"],[e._v(" Dialog Title "),a(A["a"]),a(_["a"],{attrs:{"aria-label":"Close"},on:{click:function(t){e.dialog=!1}}},[e._v(" mdi-close ")])],1),a(o["b"],[e._v(" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. ")]),a(o["a"],[a(A["a"]),a(i["a"],{attrs:{color:"error",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Close ")])],1)],1)],1),a(C,{attrs:{"max-width":"500"},model:{value:e.dialog2,callback:function(t){e.dialog2=t},expression:"dialog2"}},[a(n["a"],[a(o["c"],[e._v(" How do you become an affiliate? "),a(A["a"]),a(_["a"],{attrs:{"aria-label":"Close"},on:{click:function(t){e.dialog2=!1}}},[e._v(" mdi-close ")])],1),a(o["b"],{staticClass:"body-1 text-center"},[a(S["a"],[a(s["a"],{attrs:{cols:"12",md:"8"}},[a("div",[a("div",[a("strong",[e._v("1. Register")])]),a("div",{staticClass:"grey--text"},[e._v(" The first step is to create an account at Creative Tim. You can choose a social network or go for the classic version, whatever works best for you. ")])])]),a(s["a"],{staticClass:"hidden-sm-and-down",attrs:{md:"4"}},[a(j["a"],[a(x["a"],{attrs:{src:"https://demos.creative-tim.com/material-dashboard/assets/img/card-1.jpg",height:"100",width:"200"}})],1)],1),a(s["a"],{attrs:{cols:"12",md:"8"}},[a("div",[a("div",[a("strong",[e._v("2. Apply")])]),a("div",{staticClass:"grey--text"},[e._v(" The first step is to create an account at "),a("a",{attrs:{href:"http://www.creative-tim.com/"}},[e._v("Creative Tim")]),e._v(". You can choose a social network or go for the classic version, whatever works best for you. ")])])]),a(s["a"],{staticClass:"hidden-sm-and-down",attrs:{md:"4"}},[a(j["a"],[a(x["a"],{attrs:{src:"https://demos.creative-tim.com/material-dashboard/assets/img/card-2.jpg",height:"100",width:"200"}})],1)],1),a(s["a"],{attrs:{cols:"12"}},[e._v(" If you have more questions, don't hesitate to contact us or send us a tweet @creativetim. We're here to help! ")])],1),a(i["a"],{staticClass:"mt-6",attrs:{color:"info",depressed:"",default:"",rounded:""},on:{click:function(t){e.dialog2=!1}}},[e._v(" Sounds good ")])],1)],1)],1),a(C,{attrs:{"max-width":"300"},model:{value:e.dialog3,callback:function(t){e.dialog3=t},expression:"dialog3"}},[a(n["a"],[a(o["c"],[e._v(" Are you sure? "),a(A["a"]),a(_["a"],{attrs:{"aria-label":"Close"},on:{click:function(t){e.dialog3=!1}}},[e._v(" mdi-close ")])],1),a(o["b"],{staticClass:"pb-6 pt-12 text-center"},[a(i["a"],{staticClass:"mr-3",attrs:{text:""},on:{click:function(t){e.dialog3=!1}}},[e._v(" Nevermind ")]),a(i["a"],{attrs:{color:"success",text:""},on:{click:function(t){e.dialog3=!1}}},[e._v(" Yes ")])],1)],1)],1)],1)},E=[],T={name:"DashboardNotifications",data:function(){return{color:"info",colors:["info","success","warning","error"],dialog:!1,dialog2:!1,dialog3:!1,direction:"top center",directions:["top left","top center","top right","bottom left","bottom center","bottom right"],snackbar:!1}},computed:{parsedDirection:function(){return this.direction.split(" ")}},methods:{randomColor:function(){this.color=this.colors[Math.floor(Math.random()*this.colors.length)]}}},N=T,I=a("2877"),L=Object(I["a"])(N,$,E,!1,null,null,null);e["default"]=L.exports},"3c93":function(t,e,a){},"480e":function(t,e,a){"use strict";a("7db0"),a("d3b7");var i=a("7560");e["a"]=i["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:i["a"].options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})},a293:function(t,e,a){"use strict";var i=a("53ca"),n=(a("14d9"),a("d3b7"),a("dd89"));function o(){return!0}function s(t,e,a){if(!t||!1===r(t,a))return!1;var o=Object(n["a"])(e);if("undefined"!==typeof ShadowRoot&&o instanceof ShadowRoot&&o.host===t.target)return!1;var s=("object"===Object(i["a"])(a.value)&&a.value.include||function(){return[]})();return s.push(e),!s.some((function(e){return e.contains(t.target)}))}function r(t,e){var a="object"===Object(i["a"])(e.value)&&e.value.closeConditional||o;return a(t)}function l(t,e,a){var i="function"===typeof a.value?a.value:a.value.handler;e._clickOutside.lastMousedownWasOutside&&s(t,e,a)&&setTimeout((function(){r(t,a)&&i&&i(t)}),0)}function c(t,e){var a=Object(n["a"])(t);e(document),"undefined"!==typeof ShadowRoot&&a instanceof ShadowRoot&&e(a)}var d={inserted:function(t,e,a){var i=function(a){return l(a,t,e)},n=function(a){t._clickOutside.lastMousedownWasOutside=s(a,t,e)};c(t,(function(t){t.addEventListener("click",i,!0),t.addEventListener("mousedown",n,!0)})),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[a.context._uid]={onClick:i,onMousedown:n}},unbind:function(t,e,a){t._clickOutside&&(c(t,(function(e){var i;if(e&&(null===(i=t._clickOutside)||void 0===i?void 0:i[a.context._uid])){var n=t._clickOutside[a.context._uid],o=n.onClick,s=n.onMousedown;e.removeEventListener("click",o,!0),e.removeEventListener("mousedown",s,!0)}})),delete t._clickOutside[a.context._uid])}};e["a"]=d},a523:function(t,e,a){"use strict";a("4de4"),a("d3b7"),a("b64b"),a("2ca0"),a("99af"),a("20f6"),a("4b85"),a("498a"),a("a15b");var i=a("2b0e");function n(t){return i["default"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var i=a.props,n=a.data,o=a.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var s=n.attrs;if(s){n.attrs={};var r=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}));r.length&&(n.staticClass+=" ".concat(r.join(" ")))}return i.id&&(n.domProps=n.domProps||{},n.domProps.id=i.id),e(i.tag,n,o)}})}var o=a("d9f7");e["a"]=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,i=e.props,n=e.data,s=e.children,r=n.attrs;return r&&(n.attrs={},a=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),i.id&&(n.domProps=n.domProps||{},n.domProps.id=i.id),t(i.tag,Object(o["a"])(n,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(a||[])}),s)}})},dd89:function(t,e,a){"use strict";function i(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}var e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}a.d(e,"a",(function(){return i}))},e4d3:function(t,e,a){"use strict";var i=a("2b0e");e["a"]=i["default"].extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}})},e707:function(t,e,a){"use strict";a("a9e3"),a("caad"),a("2532");var i=a("5530"),n=(a("14d9"),a("3c93"),a("a9ad")),o=a("7560"),s=a("f2e7"),r=a("58df"),l=Object(r["a"])(n["a"],o["a"],s["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(i["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),c=l,d=a("80d2"),u=a("2b0e");e["a"]=u["default"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new c({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(d["t"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(d["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("key"in t){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[d["w"].up,d["w"].pageup],a=[d["w"].down,d["w"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!a.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var a,i,n=e.shiftKey||e.deltaX?"x":"y",o="y"===n?e.deltaY:e.deltaX||e.deltaY;"y"===n?(a=0===t.scrollTop,i=t.scrollTop+t.clientHeight===t.scrollHeight):(a=0===t.scrollLeft,i=t.scrollLeft+t.clientWidth===t.scrollWidth);var s=o<0,r=o>0;return!(a||!s)||(!(i||!r)||!(!a&&!i)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=Object(d["g"])(t);if("keydown"===t.type&&e[0]===document.body){var a=this.$refs.dialog,i=window.getSelection().anchorNode;return!(a&&this.hasScrollbar(a)&&this.isInside(i,a))||!this.shouldScroll(a,t)}for(var n=0;n<e.length;n++){var o=e[n];if(o===document)return!0;if(o===document.documentElement)return!0;if(o===this.$refs.content)return!0;if(this.hasScrollbar(o))return!this.shouldScroll(o,t)}return!0},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(d["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})}}]);
//# sourceMappingURL=chunk-5ffe81b9.27c246ec.js.map