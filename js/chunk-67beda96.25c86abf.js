(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67beda96"],{"16b7":function(t,e,a){"use strict";a("a9e3");var i=a("2b0e");e["a"]=i["default"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var a=this;this.clearDelay();var i=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){a.isActive={open:!0,close:!1}[t]},i)}}})},"21be":function(t,e,a){"use strict";var i=a("2909"),n=(a("99af"),a("caad"),a("2532"),a("14d9"),a("2b0e")),o=a("80d2");e["a"]=n["default"].extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(o["t"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,a=[this.stackMinZIndex,Object(o["t"])(e)],n=[].concat(Object(i["a"])(document.getElementsByClassName("v-menu__content--active")),Object(i["a"])(document.getElementsByClassName("v-dialog__content--active"))),s=0;s<n.length;s++)t.includes(n[s])||a.push(Object(o["t"])(n[s]));return Math.max.apply(Math,a)}}})},2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var i=a("6b75");function n(t){if(Array.isArray(t))return Object(i["a"])(t)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function o(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var s=a("06c5");a("d9e2");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return n(t)||o(t)||Object(s["a"])(t)||r()}},"2fa4":function(t,e,a){"use strict";a("20f6");var i=a("80d2");e["a"]=Object(i["i"])("spacer","div","v-spacer")},"38e4":function(t,e,a){"use strict";a.r(e);var i=a("8336"),n=a("b0af"),o=a("99d9"),s=a("62ad"),r=a("a523"),c=a("169a"),l=a("132d"),d=a("adda"),u=a("0fd9"),h=a("8dd9"),v=a("2fa4"),f=a("ade3"),m=function(){var t,e=this,a=e._self._c;return a(r["a"],{attrs:{id:"alerts",fluid:"",tag:"section"}},[a("base-v-component",{attrs:{heading:"Alerts",link:"components/alerts"}}),a(u["a"],[a(s["a"],{attrs:{cols:"12",md:"6"}},[a(n["a"],[a(o["b"],[a("base-subheading",{attrs:{subheading:"Notification Style"}}),a("base-material-alert",{attrs:{color:"info",dark:""}},[e._v(" This is a plain notification. ")]),a("base-material-alert",{attrs:{color:"info",dark:"",dismissible:""}},[e._v(" This is a notification with close button. ")]),a("base-material-alert",{attrs:{color:"info",dark:"",dismissible:"",icon:"mdi-bell"}},[e._v(" This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style. ")]),a("base-material-alert",{attrs:{color:"primary",dark:"",dismissible:"",icon:"mdi-bell"}},[e._v(" You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style. ")])],1)],1)],1),a(s["a"],{attrs:{cols:"12",md:"6"}},[a(n["a"],[a(o["b"],[a("base-subheading",{attrs:{subheading:"Notification states"}}),e._l(e.colors,(function(t){return a("base-material-alert",{key:t,attrs:{color:t,dark:"",dismissible:""}},[a("span",{staticClass:"text-uppercase",domProps:{textContent:e._s(t)}}),e._v(' — This is a regular alert made with the color of "'+e._s(t)+'" ')])})),a("base-material-alert",{attrs:{color:"secondary",dark:"",dismissible:""}},[a("span",[e._v("PRIMARY")]),e._v(' — This is a regular alert made with the color "secondary" ')]),a("base-material-alert",{attrs:{color:"pink darken-1",dark:"",dismissible:""}},[a("span",[e._v("PINK DARKEN-1")]),e._v(' — This is a regular alert made with the color "pink darken-1" ')])],2)],1)],1),a(s["a"],{attrs:{cols:"12"}},[a(n["a"],[a(o["b"],{staticClass:"text-center"},[a("base-subheading",{staticClass:"text-center",attrs:{subheading:"Snackbar Locations"}}),a(u["a"],{staticClass:"mt-n12",attrs:{justify:"center"}},[a(s["a"],{attrs:{cols:"10",lg:"8"}},[a(u["a"],e._l(e.directions,(function(t){return a(s["a"],{key:t,attrs:{cols:"4"}},[a(i["a"],{staticClass:"v-btn--block",attrs:{color:"secondary",default:""},on:{click:function(a){e.randomColor(),e.direction=t,e.snackbar=!0}}},[e._v(" "+e._s(t)+" ")])],1)})),1)],1)],1),a("base-subheading",{staticClass:"text-center",attrs:{subheading:"Dialogs"}}),a(u["a"],{staticClass:"mt-n12",attrs:{justify:"center"}},[a(s["a"],{attrs:{cols:"10",lg:"8"}},[a(u["a"],[a(s["a"],{attrs:{cols:"4"}},[a(i["a"],{attrs:{color:"secondary",default:"",rounded:""},on:{click:function(t){e.dialog=!0}}},[e._v(" Classic Dialog ")])],1),a(s["a"],{attrs:{cols:"4"}},[a(i["a"],{attrs:{color:"info",default:"",rounded:""},on:{click:function(t){e.dialog2=!0}}},[e._v(" Notice Modal ")])],1),a(s["a"],{attrs:{cols:"4"}},[a(i["a"],{attrs:{color:"pink darken-1",dark:"",default:"",rounded:""},on:{click:function(t){e.dialog3=!0}}},[e._v(" Small Alert Modal ")])],1)],1)],1)],1)],1)],1)],1)],1),a("base-material-snackbar",e._b({attrs:{type:e.color},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},"base-material-snackbar",(t={},Object(f["a"])(t,e.parsedDirection[0],!0),Object(f["a"])(t,e.parsedDirection[1],!0),t),!1),[e._v(" Welcome to "),a("span",{staticClass:"font-weight-bold"},[e._v(" MATERIAL DASHBOARD ")]),e._v(" — a beautiful admin panel for every web developer. ")]),a(c["a"],{attrs:{"max-width":"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a(n["a"],{staticClass:"text-center"},[a(o["c"],[e._v(" Dialog Title "),a(v["a"]),a(l["a"],{attrs:{"aria-label":"Close"},on:{click:function(t){e.dialog=!1}}},[e._v(" mdi-close ")])],1),a(o["b"],[e._v(" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. ")]),a(o["a"],[a(v["a"]),a(i["a"],{attrs:{color:"error",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Close ")])],1)],1)],1),a(c["a"],{attrs:{"max-width":"500"},model:{value:e.dialog2,callback:function(t){e.dialog2=t},expression:"dialog2"}},[a(n["a"],[a(o["c"],[e._v(" How do you become an affiliate? "),a(v["a"]),a(l["a"],{attrs:{"aria-label":"Close"},on:{click:function(t){e.dialog2=!1}}},[e._v(" mdi-close ")])],1),a(o["b"],{staticClass:"body-1 text-center"},[a(u["a"],[a(s["a"],{attrs:{cols:"12",md:"8"}},[a("div",[a("div",[a("strong",[e._v("1. Register")])]),a("div",{staticClass:"grey--text"},[e._v(" The first step is to create an account at Creative Tim. You can choose a social network or go for the classic version, whatever works best for you. ")])])]),a(s["a"],{staticClass:"hidden-sm-and-down",attrs:{md:"4"}},[a(h["a"],[a(d["a"],{attrs:{src:"https://demos.creative-tim.com/material-dashboard/assets/img/card-1.jpg",height:"100",width:"200"}})],1)],1),a(s["a"],{attrs:{cols:"12",md:"8"}},[a("div",[a("div",[a("strong",[e._v("2. Apply")])]),a("div",{staticClass:"grey--text"},[e._v(" The first step is to create an account at "),a("a",{attrs:{href:"http://www.creative-tim.com/"}},[e._v("Creative Tim")]),e._v(". You can choose a social network or go for the classic version, whatever works best for you. ")])])]),a(s["a"],{staticClass:"hidden-sm-and-down",attrs:{md:"4"}},[a(h["a"],[a(d["a"],{attrs:{src:"https://demos.creative-tim.com/material-dashboard/assets/img/card-2.jpg",height:"100",width:"200"}})],1)],1),a(s["a"],{attrs:{cols:"12"}},[e._v(" If you have more questions, don't hesitate to contact us or send us a tweet @creativetim. We're here to help! ")])],1),a(i["a"],{staticClass:"mt-6",attrs:{color:"info",depressed:"",default:"",rounded:""},on:{click:function(t){e.dialog2=!1}}},[e._v(" Sounds good ")])],1)],1)],1),a(c["a"],{attrs:{"max-width":"300"},model:{value:e.dialog3,callback:function(t){e.dialog3=t},expression:"dialog3"}},[a(n["a"],[a(o["c"],[e._v(" Are you sure? "),a(v["a"]),a(l["a"],{attrs:{"aria-label":"Close"},on:{click:function(t){e.dialog3=!1}}},[e._v(" mdi-close ")])],1),a(o["b"],{staticClass:"pb-6 pt-12 text-center"},[a(i["a"],{staticClass:"mr-3",attrs:{text:""},on:{click:function(t){e.dialog3=!1}}},[e._v(" Nevermind ")]),a(i["a"],{attrs:{color:"success",text:""},on:{click:function(t){e.dialog3=!1}}},[e._v(" Yes ")])],1)],1)],1)],1)},p=[],b={name:"DashboardNotifications",data:function(){return{color:"info",colors:["info","success","warning","error"],dialog:!1,dialog2:!1,dialog3:!1,direction:"top center",directions:["top left","top center","top right","bottom left","bottom center","bottom right"],snackbar:!1}},computed:{parsedDirection:function(){return this.direction.split(" ")}},methods:{randomColor:function(){this.color=this.colors[Math.floor(Math.random()*this.colors.length)]}}},g=b,y=a("2877"),k=Object(y["a"])(g,m,p,!1,null,null,null);e["default"]=k.exports},"480e":function(t,e,a){"use strict";a("7db0"),a("d3b7");var i=a("7560");e["a"]=i["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:i["a"].options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})},"4ad4":function(t,e,a){"use strict";var i=a("53ca"),n=(a("caad"),a("b64b"),a("d3b7"),a("b0c0"),a("16b7")),o=a("f2e7"),s=a("58df"),r=a("80d2"),c=a("d9bd"),l=Object(s["a"])(n["a"],o["a"]);e["a"]=l.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(i["a"])(t))}},disabled:Boolean,internalActivator:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,openOnFocus:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}},watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(r["s"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(c["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=Object.keys(this.listeners),e=0,a=t;e<a.length;e++){var i=a[e];this.getActivator().addEventListener(i,this.listeners[i])}}},genActivator:function(){var t=Object(r["r"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:this.openOnClick&&!this.openOnHover?"button":void 0,"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):this.openOnClick&&(e.click=function(e){var a=t.getActivator(e);a&&a.focus(),e.stopPropagation(),t.isActive=!t.isActive}),this.openOnFocus&&(e.focus=function(e){t.getActivator(e),e.stopPropagation(),t.isActive=!t.isActive}),e},getActivator:function(t){if(this.activatorElement)return this.activatorElement;var e=null;if(this.activator){var a=this.internalActivator?this.$el:document;e="string"===typeof this.activator?a.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var i=this.activatorNode[0].componentInstance;e=i&&i.$options.mixins&&i.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?i.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=(null===e||void 0===e?void 0:e.nodeType)===Node.ELEMENT_NODE?e:null,this.activatorElement},getContentSlot:function(){return Object(r["r"])(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=Object.keys(this.listeners),e=0,a=t;e<a.length;e++){var i=a[e];this.activatorElement.removeEventListener(i,this.listeners[i])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},"75eb":function(t,e,a){"use strict";var i=a("ade3"),n=a("53ca"),o=(a("d3b7"),a("159b"),a("caad"),a("2532"),a("a630"),a("3ca3"),a("9d65")),s=a("80d2"),r=a("58df"),c=a("d9bd");function l(t){var e=Object(n["a"])(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}function d(t){t.forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}e["a"]=Object(r["a"])(o["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:l},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach((function(e){if(e.elm&&t.$el.parentNode){var a=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,a)}}))}}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content)},destroyed:function(){var t=this;if(this.activatorNode){var e=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];if(this.$el.isConnected){var a=new MutationObserver((function(i){i.some((function(e){return Array.from(e.removedNodes).includes(t.$el)}))&&(a.disconnect(),d(e))}));a.observe(this.$el.parentNode,{subtree:!1,childList:!0})}else d(e)}},methods:{getScopeIdAttrs:function(){var t=Object(s["o"])(this.$vnode,"context.$options._scopeId");return t&&Object(i["a"])({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||(t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(c["c"])("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}})},a293:function(t,e,a){"use strict";var i=a("53ca"),n=(a("14d9"),a("d3b7"),a("dd89"));function o(){return!0}function s(t,e,a){if(!t||!1===r(t,a))return!1;var o=Object(n["a"])(e);if("undefined"!==typeof ShadowRoot&&o instanceof ShadowRoot&&o.host===t.target)return!1;var s=("object"===Object(i["a"])(a.value)&&a.value.include||function(){return[]})();return s.push(e),!s.some((function(e){return e.contains(t.target)}))}function r(t,e){var a="object"===Object(i["a"])(e.value)&&e.value.closeConditional||o;return a(t)}function c(t,e,a){var i="function"===typeof a.value?a.value:a.value.handler;e._clickOutside.lastMousedownWasOutside&&s(t,e,a)&&setTimeout((function(){r(t,a)&&i&&i(t)}),0)}function l(t,e){var a=Object(n["a"])(t);e(document),"undefined"!==typeof ShadowRoot&&a instanceof ShadowRoot&&e(a)}var d={inserted:function(t,e,a){var i=function(a){return c(a,t,e)},n=function(a){t._clickOutside.lastMousedownWasOutside=s(a,t,e)};l(t,(function(t){t.addEventListener("click",i,!0),t.addEventListener("mousedown",n,!0)})),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[a.context._uid]={onClick:i,onMousedown:n}},unbind:function(t,e,a){t._clickOutside&&(l(t,(function(e){var i;if(e&&(null===(i=t._clickOutside)||void 0===i?void 0:i[a.context._uid])){var n=t._clickOutside[a.context._uid],o=n.onClick,s=n.onMousedown;e.removeEventListener("click",o,!0),e.removeEventListener("mousedown",s,!0)}})),delete t._clickOutside[a.context._uid])}};e["a"]=d},a523:function(t,e,a){"use strict";a("4de4"),a("d3b7"),a("b64b"),a("2ca0"),a("99af"),a("20f6"),a("4b85"),a("498a"),a("a15b");var i=a("2b0e");function n(t){return i["default"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var i=a.props,n=a.data,o=a.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var s=n.attrs;if(s){n.attrs={};var r=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}));r.length&&(n.staticClass+=" ".concat(r.join(" ")))}return i.id&&(n.domProps=n.domProps||{},n.domProps.id=i.id),e(i.tag,n,o)}})}var o=a("d9f7");e["a"]=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,i=e.props,n=e.data,s=e.children,r=n.attrs;return r&&(n.attrs={},a=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),i.id&&(n.domProps=n.domProps||{},n.domProps.id=i.id),t(i.tag,Object(o["a"])(n,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(a||[])}),s)}})},b848:function(t,e,a){"use strict";var i=a("2909"),n=(a("14d9"),a("58df"));function o(t){for(var e=[],a=0;a<t.length;a++){var n=t[a];n.isActive&&n.isDependent?e.push(n):e.push.apply(e,Object(i["a"])(o(n.$children)))}return e}e["a"]=Object(n["a"])().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),a=0;a<e.length;a++)e[a].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?o(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),a=0;a<e.length;a++)t.push.apply(t,Object(i["a"])(e[a].getClickableDependentElements()));return t},getClickableDependentElements:function(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push.apply(t,Object(i["a"])(this.getOpenDependentElements())),t}}})},dd89:function(t,e,a){"use strict";function i(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}var e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}a.d(e,"a",(function(){return i}))},e4d3:function(t,e,a){"use strict";var i=a("2b0e");e["a"]=i["default"].extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}})}}]);
//# sourceMappingURL=chunk-67beda96.25c86abf.js.map