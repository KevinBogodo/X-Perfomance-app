(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11c041ef"],{"0fd9":function(t,e,n){"use strict";var a=n("ade3"),i=n("5530"),r=(n("13d5"),n("d3b7"),n("caad"),n("2532"),n("99af"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("3ca3"),n("ddb0"),n("159b"),n("14d9"),n("4b85"),n("2b0e")),o=n("d9f7"),s=n("80d2"),c=["sm","md","lg","xl"],u=["start","end","center"];function l(t,e){return c.reduce((function(n,a){return n[t+Object(s["D"])(a)]=e(),n}),{})}var d=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},f=l("align",(function(){return{type:String,default:null,validator:d}})),p=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},h=l("justify",(function(){return{type:String,default:null,validator:p}})),v=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},b=l("alignContent",(function(){return{type:String,default:null,validator:v}})),g={align:Object.keys(f),justify:Object.keys(h),alignContent:Object.keys(b)},m={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,n){var a=m[t];if(null!=n){if(e){var i=e.replace(t,"");a+="-".concat(i)}return a+="-".concat(n),a.toLowerCase()}}var j=new Map;e["a"]=r["default"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:p}},h),{},{alignContent:{type:String,default:null,validator:v}},b),render:function(t,e){var n=e.props,i=e.data,r=e.children,s="";for(var c in n)s+=String(n[c]);var u=j.get(s);if(!u){var l,d;for(d in u=[],g)g[d].forEach((function(t){var e=n[t],a=y(d,t,e);a&&u.push(a)}));u.push((l={"no-gutters":n.noGutters,"row--dense":n.dense},Object(a["a"])(l,"align-".concat(n.align),n.align),Object(a["a"])(l,"justify-".concat(n.justify),n.justify),Object(a["a"])(l,"align-content-".concat(n.alignContent),n.alignContent),l)),j.set(s,u)}return t(n.tag,Object(o["a"])(i,{staticClass:"row",class:u}),r)}})},1859:function(t,e,n){"use strict";n.r(e);var a=n("62ad"),i=n("a523"),r=n("5530"),o=(n("a9e3"),n("c7cd"),n("b5b6"),n("8dd9")),s=n("3a66"),c=n("d10f"),u=n("58df"),l=n("80d2"),d=Object(u["a"])(o["a"],Object(s["a"])("footer",["height","inset"]),c["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(r["a"])(Object(r["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(r["a"])(Object(r["a"])({},o["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(l["h"])(t),left:Object(l["h"])(this.computedLeft),right:Object(l["h"])(this.computedRight),bottom:Object(l["h"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),f=n("132d"),p=n("0fd9"),h=n("2fa4"),v=function(){var t=this,e=t._self._c;return e(d,{attrs:{id:"dashboard-core-footer"}},[e(i["a"],[e(p["a"],{attrs:{align:"center","no-gutters":""}},[t._l(t.links,(function(n,i){return e(a["a"],{key:i,staticClass:"text-center mb-sm-0 mb-5",attrs:{cols:"auto"}},[e("a",{staticClass:"mr-0 grey--text text--darken-3",attrs:{href:n.href,rel:"noopener",target:"_blank"},domProps:{textContent:t._s(n.text)}})])})),e(h["a"],{staticClass:"hidden-sm-and-down"}),e(a["a"],{attrs:{cols:"12",md:"auto"}},[e("div",{staticClass:"body-1 font-weight-light pt-6 pt-md-0 text-center"},[t._v(" © 2019, made with "),e(f["a"],{attrs:{size:"18"}},[t._v(" mdi-heart ")]),t._v(" by "),e("a",{attrs:{href:"https://www.creative-tim.com"}},[t._v("Creative Tim")]),t._v(" for a better web. ")],1)])],2)],1)],1)},b=[],g={name:"DashboardCoreFooter",data:function(){return{links:[{href:"#",text:"Creative Tim"},{href:"#",text:"About Us"},{href:"#",text:"Blog"},{href:"#",text:"Licenses"}]}}},m=g,y=(n("356c"),n("2877")),j=Object(y["a"])(m,v,b,!1,null,null,null);e["default"]=j.exports},"20f6":function(t,e,n){},"2fa4":function(t,e,n){"use strict";n("20f6");var a=n("80d2");e["a"]=Object(a["i"])("spacer","div","v-spacer")},"356c":function(t,e,n){"use strict";n("9043")},"3a66":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("fe6c"),i=n("58df");function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(i["a"])(Object(a["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,n=e.length;t<n;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},9043:function(t,e,n){},a523:function(t,e,n){"use strict";n("4de4"),n("d3b7"),n("b64b"),n("2ca0"),n("99af"),n("20f6"),n("4b85"),n("498a"),n("a15b");var a=n("2b0e");function i(t){return a["default"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var a=n.props,i=n.data,r=n.children;i.staticClass="".concat(t," ").concat(i.staticClass||"").trim();var o=i.attrs;if(o){i.attrs={};var s=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));s.length&&(i.staticClass+=" ".concat(s.join(" ")))}return a.id&&(i.domProps=i.domProps||{},i.domProps.id=a.id),e(a.tag,i,r)}})}var r=n("d9f7");e["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,a=e.props,i=e.data,o=e.children,s=i.attrs;return s&&(i.attrs={},n=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(i.domProps=i.domProps||{},i.domProps.id=a.id),t(a.tag,Object(r["a"])(i,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(n||[])}),o)}})},b5b6:function(t,e,n){}}]);
//# sourceMappingURL=chunk-11c041ef.9cb24ac8.js.map