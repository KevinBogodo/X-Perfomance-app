(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d68125a"],{"0fd9":function(t,e,a){"use strict";var n=a("ade3"),i=a("5530"),r=(a("13d5"),a("d3b7"),a("caad"),a("2532"),a("99af"),a("b64b"),a("ac1f"),a("5319"),a("4ec9"),a("3ca3"),a("ddb0"),a("159b"),a("14d9"),a("4b85"),a("2b0e")),o=a("d9f7"),s=a("80d2"),c=["sm","md","lg","xl"],u=["start","end","center"];function l(t,e){return c.reduce((function(a,n){return a[t+Object(s["D"])(n)]=e(),a}),{})}var d=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},f=l("align",(function(){return{type:String,default:null,validator:d}})),p=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},h=l("justify",(function(){return{type:String,default:null,validator:p}})),v=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},b=l("alignContent",(function(){return{type:String,default:null,validator:v}})),g={align:Object.keys(f),justify:Object.keys(h),alignContent:Object.keys(b)},m={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,a){var n=m[t];if(null!=a){if(e){var i=e.replace(t,"");n+="-".concat(i)}return n+="-".concat(a),n.toLowerCase()}}var j=new Map;e["a"]=r["default"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:p}},h),{},{alignContent:{type:String,default:null,validator:v}},b),render:function(t,e){var a=e.props,i=e.data,r=e.children,s="";for(var c in a)s+=String(a[c]);var u=j.get(s);if(!u){var l,d;for(d in u=[],g)g[d].forEach((function(t){var e=a[t],n=y(d,t,e);n&&u.push(n)}));u.push((l={"no-gutters":a.noGutters,"row--dense":a.dense},Object(n["a"])(l,"align-".concat(a.align),a.align),Object(n["a"])(l,"justify-".concat(a.justify),a.justify),Object(n["a"])(l,"align-content-".concat(a.alignContent),a.alignContent),l)),j.set(s,u)}return t(a.tag,Object(o["a"])(i,{staticClass:"row",class:u}),r)}})},1859:function(t,e,a){"use strict";a.r(e);var n=a("62ad"),i=a("a523"),r=a("5530"),o=(a("a9e3"),a("c7cd"),a("b5b6"),a("8dd9")),s=a("3a66"),c=a("d10f"),u=a("58df"),l=a("80d2"),d=Object(u["a"])(o["a"],Object(s["a"])("footer",["height","inset"]),c["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(r["a"])(Object(r["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(r["a"])(Object(r["a"])({},o["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(l["h"])(t),left:Object(l["h"])(this.computedLeft),right:Object(l["h"])(this.computedRight),bottom:Object(l["h"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),f=a("132d"),p=a("0fd9"),h=a("2fa4"),v=function(){var t=this,e=t._self._c;return e(d,{attrs:{id:"dashboard-core-footer"}},[e(i["a"],[e(p["a"],{attrs:{align:"center","no-gutters":""}},[t._l(t.links,(function(a,i){return e(n["a"],{key:i,staticClass:"text-center mb-sm-0 mb-5",attrs:{cols:"auto"}},[e("a",{staticClass:"mr-0 grey--text text--darken-3",attrs:{href:a.href,rel:"noopener",target:"_blank"},domProps:{textContent:t._s(a.text)}})])})),e(h["a"],{staticClass:"hidden-sm-and-down"}),e(n["a"],{attrs:{cols:"12",md:"auto"}},[e("div",{staticClass:"body-1 font-weight-light pt-6 pt-md-0 text-center"},[t._v(" © 2019, made with "),e(f["a"],{attrs:{size:"18"}},[t._v(" mdi-heart ")]),t._v(" by "),e("a",{attrs:{href:"https://www.creative-tim.com"}},[t._v("Creative Tim")]),t._v(" for a better web. ")],1)])],2)],1)],1)},b=[],g={name:"DashboardCoreFooter",data:function(){return{links:[{href:"#",text:"Creative Tim"},{href:"#",text:"About Us"},{href:"#",text:"Blog"},{href:"#",text:"Licenses"}]}}},m=g,y=(a("356c"),a("2877")),j=Object(y["a"])(m,v,b,!1,null,null,null);e["default"]=j.exports},"20f6":function(t,e,a){},"2fa4":function(t,e,a){"use strict";a("20f6");var n=a("80d2");e["a"]=Object(n["i"])("spacer","div","v-spacer")},"356c":function(t,e,a){"use strict";a("90439")},"3a66":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a("fe6c"),i=a("58df");function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(i["a"])(Object(n["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,a=e.length;t<a;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},90439:function(t,e,a){},a523:function(t,e,a){"use strict";a("4de4"),a("d3b7"),a("b64b"),a("2ca0"),a("99af"),a("20f6"),a("4b85"),a("498a"),a("a15b");var n=a("2b0e");function i(t){return n["default"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var n=a.props,i=a.data,r=a.children;i.staticClass="".concat(t," ").concat(i.staticClass||"").trim();var o=i.attrs;if(o){i.attrs={};var s=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));s.length&&(i.staticClass+=" ".concat(s.join(" ")))}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),e(n.tag,i,r)}})}var r=a("d9f7");e["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,n=e.props,i=e.data,o=e.children,s=i.attrs;return s&&(i.attrs={},a=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),t(n.tag,Object(r["a"])(i,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(a||[])}),o)}})},b5b6:function(t,e,a){}}]);
//# sourceMappingURL=chunk-2d68125a.0ab28ea8.js.map