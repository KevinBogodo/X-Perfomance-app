(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1200c9ee"],{"09ae":function(t,e,i){"use strict";i.r(e);var n=i("ce7e"),r=i("adda"),o=i("8860"),a=i("da13"),s=i("5530"),c=(i("a9e3"),i("c7cd"),i("99af"),i("14d9"),i("3c65"),i("7958"),i("3a66")),l=i("a9ad"),u=i("b848"),h=i("e4cd"),d=i("e707"),v=i("d10f"),p=i("7560"),f=i("a293"),m=i("dc22"),g=i("c3f0"),b=i("80d2"),y=i("58df"),w=Object(y["a"])(Object(c["a"])("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),l["a"],u["a"],h["a"],d["a"],v["a"],p["a"]),O=w.extend({name:"v-navigation-drawer",directives:{ClickOutside:f["a"],Resize:m["a"],Touch:g["a"]},provide:function(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return Object(s["a"])({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&h["a"].options.computed.isMobile.call(this)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX";return{height:Object(b["h"])(this.height),top:this.isBottom?"auto":Object(b["h"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat(Object(b["h"])(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat(Object(b["h"])(this.computedTransform,"%"),")"),width:Object(b["h"])(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(r["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives:function(){var t=this,e=[{name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},genListeners:function(){var t=this,e={mouseenter:function(){return t.isMouseover=!0},mouseleave:function(){return t.isMouseover=!1},transitionend:function(e){if(e.target===e.currentTarget){t.$emit("transitionend",e);var i=document.createEvent("UIEvents");i.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(i)}}};return this.miniVariant&&(e.click=function(){return t.$emit("update:mini-variant",!1)}),e},genPosition:function(t){var e=Object(b["r"])(this,t);return e?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},e):e},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.miniVariant?this.miniVariantWidth:this.width);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.expandOnHover&&this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(b["r"])(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}}),A=function(){var t=this,e=t._self._c;return e(O,t._b({attrs:{id:"core-navigation-drawer",dark:"rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)"!==t.barColor,"expand-on-hover":t.expandOnHover,right:t.$vuetify.rtl,src:t.barImage,"mobile-break-point":"960",app:"",width:"260"},scopedSlots:t._u([{key:"img",fn:function(i){return[e(r["a"],t._b({attrs:{gradient:"to bottom, ".concat(t.barColor),src:t.barImage}},"v-img",i,!1))]}},{key:"append",fn:function(){return[e("div",{on:{click:function(e){return t.logout()}}},[e("base-item",{attrs:{item:{title:t.$t("log_out"),icon:"el-icon-switch-button"}}})],1),e("div",{staticClass:"ml-5",staticStyle:{color:"#ffff","font-size":"10px","text-align":"left"}},[e("p",[t._v(" version du logiciel "+t._s(t.versionApp)+" ")])])]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},"v-navigation-drawer",t.$attrs,!1),[e(n["a"],{staticClass:"mb-1"}),e(o["a"],{attrs:{dense:"",nav:""}},[e(a["a"],[e(r["a"],{attrs:{src:i("a136")}})],1)],1),e(n["a"],{staticClass:"mb-2"}),e(o["a"],{attrs:{expand:"",nav:""}},[e("div"),t._l(t.computedItems,(function(t,i){return[t.children?e("base-item-group",{key:"group-".concat(i),attrs:{item:t}}):e("base-item",{key:"item-".concat(i),attrs:{item:t}})]})),e("div")],2)],1)},$=[],k=(i("d81d"),i("d3b7"),i("159b"),i("2f62")),x=i("323e"),_=i.n(x),C=(i("a5d8"),i("9224")),j={name:"X-Performance",props:{expandOnHover:{type:Boolean,default:!1}},data:function(){return{items:[{icon:"el-icon-menu",title:"Acceuil",to:"/"}],versionApp:"",res_menu:[]}},computed:Object(s["a"])(Object(s["a"])({},Object(k["c"])(["barColor","barImage"])),{},{drawer:{get:function(){return this.$store.state.drawer},set:function(t){this.$store.commit("SET_DRAWER",t)}},computedItems:function(){return this.items.map(this.mapItem)},profile:function(){return{avatar:!0,title:this.$t("avatar")}}}),methods:{mapItem:function(t){return Object(s["a"])(Object(s["a"])({},t),{},{children:t.children?t.children.map(this.mapItem):"",title:this.$t(t.title)})},logout:function(){_.a.start(),this.$auth.logout({makeRequest:!0,redirect:{name:"login"}}),_.a.done()},getMenuSection:function(){var t=this;_.a.start();try{var e=JSON.parse(localStorage.getItem("menu")),i=e.menu.menu;i.forEach((function(e){t.res_menu.push(e)})),this.buildMenu()}catch(n){this.$notify({type:"error",title:"Echec de recuperation"})}},buildMenu:function(){var t=this;this.res_menu.forEach((function(e){if("report"==e){var i={icon:"el-icon-s-order",title:"Rapport",to:"/pages/rapport"};t.items.push(i)}else if("statistique"==e){i={icon:"el-icon-data-analysis",title:"Statistique",to:"/pages/statistique"};t.items.push(i)}else if("administration"==e){i={icon:"el-icon-s-cooperation",title:"Administration",to:"/pages/administration"};t.items.push(i)}else if("contact"==e){i={icon:"el-icon-s-custom",title:"Client",to:"/pages/client"};t.items.push(i)}else if("setting"==e){i={icon:"el-icon-setting",title:"Paramètre",to:"/pages/parametre"};t.items.push(i)}}));var e={icon:"el-icon-chat-line-square",title:"Messagerie",to:"/pages/message"};this.items.push(e);var i={icon:"el-icon-user",title:"Mon compte",to:"/pages/profile"};this.items.push(i),_.a.done()}},created:function(){this.getMenuSection(),this.versionApp=C.version},mounted:function(){}},E=j,M=(i("dd68"),i("2877")),S=Object(M["a"])(E,A,$,!1,null,null,null);e["default"]=S.exports},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i("6b75");function r(t){if(Array.isArray(t))return Object(n["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function o(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var a=i("06c5");i("d9e2");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return r(t)||o(t)||Object(a["a"])(t)||s()}},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i("fe6c"),r=i("58df");function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(r["a"])(Object(n["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"3c65":function(t,e,i){"use strict";var n=i("23e7"),r=i("7b0b"),o=i("07fa"),a=i("3a34"),s=i("083a"),c=i("3511"),l=1!==[].unshift(0),u=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}},h=l||!u();n({target:"Array",proto:!0,arity:1,forced:h},{unshift:function(t){var e=r(this),i=o(e),n=arguments.length;if(n){c(i+n);var l=i;while(l--){var u=l+n;l in e?e[u]=e[l]:s(e,u)}for(var h=0;h<n;h++)e[h]=arguments[h]}return a(e,i+n)}})},"3c93":function(t,e,i){},7958:function(t,e,i){},"82af":function(t,e,i){},9224:function(t){t.exports=JSON.parse('{"name":"X-Performance","version":"1.1.0","private":true,"author":"XJOEL GROUP","repository":"https://github.com/KevinBogodo/X-performance_dev_front","scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","test:unit":"vue-cli-service test:unit","test:e2e":"vue-cli-service test:e2e","lint":"vue-cli-service lint","dev":"vue-cli-service serve --open","electron:build":"vue-cli-service electron:build","electron:serve":"vue-cli-service electron:serve","i18n:report":"vue-cli-service i18n:report --src \'./src/**/*.?(js|vue)\' --locales \'./src/locales/**/*.json\'","now-start":"vue-cli-service serve","postinstall":"electron-builder install-app-deps","postuninstall":"electron-builder install-app-deps"},"main":"background.js","dependencies":{"@fortawesome/fontawesome-svg-core":"^6.2.1","@fortawesome/free-regular-svg-icons":"^6.2.1","@fortawesome/free-solid-svg-icons":"^6.2.1","@fortawesome/vue-fontawesome":"^2.0.10","@websanova/vue-auth":"^4.2.1","apexcharts":"^3.37.1","axios":"^1.3.1","bootstrap":"^5.2.3","bootstrap-vue":"^2.23.1","core-js":"^3.6.2","element-ui":"^2.15.12","keen-ui":"^1.4.0","moment":"^2.29.4","nprogress":"^0.2.0","vue":"^2.6.11","vue-apexcharts":"^1.6.2","vue-axios":"^3.5.2","vue-i18n":"^8.15.3","vue-router":"^3.1.3","vue-step-progress":"^0.3.8","vue-step-wizard":"^0.1.17","vuetify":"^2.2.11","vuex":"^3.1.2"},"devDependencies":{"@fortawesome/fontawesome-free":"^6.2.1","@vue/cli-plugin-babel":"^4.1.2","@vue/cli-plugin-e2e-cypress":"^4.1.2","@vue/cli-plugin-eslint":"^4.1.2","@vue/cli-plugin-unit-jest":"^4.1.2","@vue/cli-service":"^4.1.2","@vue/eslint-config-standard":"^5.0.1","@vue/test-utils":"1.0.0-beta.30","babel-core":"7.0.0-bridge.0","babel-eslint":"^10.0.3","babel-jest":"^24.9.0","electron":"^12.0.0","electron-devtools-installer":"^3.1.0","eslint":"^6.8.0","eslint-config-vuetify":"^0.4.1","eslint-plugin-vue":"^6.1.2","material-design-icons-iconfont":"^6.7.0","sass":"^1.24.3","sass-loader":"^8.0.0","vee-validate":"^3.2.2","vue-chartist":"^2.2.1","vue-cli-plugin-electron-builder":"~2.1.1","vue-cli-plugin-i18n":"^0.6.0","vue-cli-plugin-vuetify":"^2.0.3","vue-template-compiler":"^2.6.11","vue-world-map":"^0.1.1","vuetify-loader":"^1.4.3"}}')},a136:function(t,e,i){t.exports=i.p+"img/Icon.52945906.png"},a293:function(t,e,i){"use strict";var n=i("53ca"),r=(i("14d9"),i("d3b7"),i("dd89"));function o(){return!0}function a(t,e,i){if(!t||!1===s(t,i))return!1;var o=Object(r["a"])(e);if("undefined"!==typeof ShadowRoot&&o instanceof ShadowRoot&&o.host===t.target)return!1;var a=("object"===Object(n["a"])(i.value)&&i.value.include||function(){return[]})();return a.push(e),!a.some((function(e){return e.contains(t.target)}))}function s(t,e){var i="object"===Object(n["a"])(e.value)&&e.value.closeConditional||o;return i(t)}function c(t,e,i){var n="function"===typeof i.value?i.value:i.value.handler;e._clickOutside.lastMousedownWasOutside&&a(t,e,i)&&setTimeout((function(){s(t,i)&&n&&n(t)}),0)}function l(t,e){var i=Object(r["a"])(t);e(document),"undefined"!==typeof ShadowRoot&&i instanceof ShadowRoot&&e(i)}var u={inserted:function(t,e,i){var n=function(i){return c(i,t,e)},r=function(i){t._clickOutside.lastMousedownWasOutside=a(i,t,e)};l(t,(function(t){t.addEventListener("click",n,!0),t.addEventListener("mousedown",r,!0)})),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[i.context._uid]={onClick:n,onMousedown:r}},unbind:function(t,e,i){t._clickOutside&&(l(t,(function(e){var n;if(e&&(null===(n=t._clickOutside)||void 0===n?void 0:n[i.context._uid])){var r=t._clickOutside[i.context._uid],o=r.onClick,a=r.onMousedown;e.removeEventListener("click",o,!0),e.removeEventListener("mousedown",a,!0)}})),delete t._clickOutside[i.context._uid])}};e["a"]=u},b848:function(t,e,i){"use strict";var n=i("2909"),r=(i("14d9"),i("58df"));function o(t){for(var e=[],i=0;i<t.length;i++){var r=t[i];r.isActive&&r.isDependent?e.push(r):e.push.apply(e,Object(n["a"])(o(r.$children)))}return e}e["a"]=Object(r["a"])().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),i=0;i<e.length;i++)e[i].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?o(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),i=0;i<e.length;i++)t.push.apply(t,Object(n["a"])(e[i].getClickableDependentElements()));return t},getClickableDependentElements:function(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push.apply(t,Object(n["a"])(this.getOpenDependentElements())),t}}})},dd68:function(t,e,i){"use strict";i("82af")},dd89:function(t,e,i){"use strict";function n(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}var e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}i.d(e,"a",(function(){return n}))},e707:function(t,e,i){"use strict";i("a9e3"),i("caad"),i("2532");var n=i("5530"),r=(i("14d9"),i("3c93"),i("a9ad")),o=i("7560"),a=i("f2e7"),s=i("58df"),c=Object(s["a"])(r["a"],o["a"],a["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(n["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),l=c,u=i("80d2"),h=i("2b0e");e["a"]=h["default"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new l({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(u["t"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(u["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("key"in t){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[u["w"].up,u["w"].pageup],i=[u["w"].down,u["w"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var i,n,r=e.shiftKey||e.deltaX?"x":"y",o="y"===r?e.deltaY:e.deltaX||e.deltaY;"y"===r?(i=0===t.scrollTop,n=t.scrollTop+t.clientHeight===t.scrollHeight):(i=0===t.scrollLeft,n=t.scrollLeft+t.clientWidth===t.scrollWidth);var a=o<0,s=o>0;return!(i||!a)||(!(n||!s)||!(!i&&!n)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=Object(u["g"])(t);if("keydown"===t.type&&e[0]===document.body){var i=this.$refs.dialog,n=window.getSelection().anchorNode;return!(i&&this.hasScrollbar(i)&&this.isInside(n,i))||!this.shouldScroll(i,t)}for(var r=0;r<e.length;r++){var o=e[r];if(o===document)return!0;if(o===document.documentElement)return!0;if(o===this.$refs.content)return!0;if(this.hasScrollbar(o))return!this.shouldScroll(o,t)}return!0},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(u["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})}}]);
//# sourceMappingURL=chunk-1200c9ee.4efaf302.js.map