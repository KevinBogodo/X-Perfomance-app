(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9328ff5e"],{"0fd9":function(t,e,a){"use strict";var n=a("ade3"),r=a("5530"),s=(a("13d5"),a("d3b7"),a("caad"),a("2532"),a("99af"),a("b64b"),a("ac1f"),a("5319"),a("4ec9"),a("3ca3"),a("ddb0"),a("159b"),a("14d9"),a("4b85"),a("2b0e")),i=a("d9f7"),o=a("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function d(t,e){return c.reduce((function(a,n){return a[t+Object(o["D"])(n)]=e(),a}),{})}var u=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},f=d("align",(function(){return{type:String,default:null,validator:u}})),h=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},g=d("justify",(function(){return{type:String,default:null,validator:h}})),p=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},v=d("alignContent",(function(){return{type:String,default:null,validator:p}})),b={align:Object.keys(f),justify:Object.keys(g),alignContent:Object.keys(v)},m={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,a){var n=m[t];if(null!=a){if(e){var r=e.replace(t,"");n+="-".concat(r)}return n+="-".concat(a),n.toLowerCase()}}var _=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u}},f),{},{justify:{type:String,default:null,validator:h}},g),{},{alignContent:{type:String,default:null,validator:p}},v),render:function(t,e){var a=e.props,r=e.data,s=e.children,o="";for(var c in a)o+=String(a[c]);var l=_.get(o);if(!l){var d,u;for(u in l=[],b)b[u].forEach((function(t){var e=a[t],n=y(u,t,e);n&&l.push(n)}));l.push((d={"no-gutters":a.noGutters,"row--dense":a.dense},Object(n["a"])(d,"align-".concat(a.align),a.align),Object(n["a"])(d,"justify-".concat(a.justify),a.justify),Object(n["a"])(d,"align-content-".concat(a.alignContent),a.alignContent),d)),_.set(o,l)}return t(a.tag,Object(i["a"])(r,{staticClass:"row",class:l}),s)}})},1901:function(t,e,a){"use strict";a("3644")},"1f4f":function(t,e,a){"use strict";var n=a("5530"),r=(a("a9e3"),a("8b37"),a("80d2")),s=a("7560"),i=a("58df");e["a"]=Object(i["a"])(s["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(n["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(r["h"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"20f6":function(t,e,a){},3644:function(t,e,a){},"3cac":function(t,e,a){"use strict";a.r(e);var n=a("8336"),r=a("62ad"),s=a("a523"),i=a("132d"),o=a("0fd9"),c=a("1f4f"),l=function(){var t=this,e=t._self._c;return e(s["a"],{attrs:{id:"upgrade",fluid:"",tag:"section"}},[e(o["a"],{attrs:{justify:"center"}},[e(r["a"],{attrs:{cols:"12",md:"8"}},[e("base-material-card",{attrs:{color:"primary"},scopedSlots:t._u([{key:"heading",fn:function(){return[e("div",{staticClass:"display-2 font-weight-light"},[t._v(" Vuetify Material Dashboard ")]),e("div",{staticClass:"subtitle-1 font-weight-light"},[t._v(" Are you looking for more components? Please check our Premium Version of Vuetify Material Dashboard ")])]},proxy:!0}])},[e(c["a"],[e("thead",[e("tr",[e("th"),e("th",{staticClass:"subheading font-weight-light text-center"},[t._v(" Free ")]),e("th",{staticClass:"subheading font-weight-light text-center"},[t._v(" PRO ")])])]),e("tbody",{staticClass:"text-center"},[e("tr",[e("th",{staticClass:"text-left font-weight-light subtitle-1"},[t._v(" Components ")]),e("td",[t._v("60")]),e("td",[t._v("200")])]),e("tr",[e("th",{staticClass:"text-left font-weight-light subtitle-1"},[t._v(" Plugins ")]),e("td",[t._v("2")]),e("td",[t._v("4")])]),e("tr",[e("th",{staticClass:"text-left font-weight-light subtitle-1"},[t._v(" Example Pages ")]),e("td",[t._v("3")]),e("td",[t._v("8")])]),e("tr",[e("th",{staticClass:"text-left font-weight-light subtitle-1"},[t._v(" Login, Register, Pricing, Lock Pages ")]),e("td",[e(i["a"],{attrs:{color:"error"}},[t._v(" mdi-close ")])],1),e("td",[e(i["a"],{attrs:{color:"success"}},[t._v(" mdi-check ")])],1)]),e("tr",[e("th",{staticClass:"text-left font-weight-light subtitle-1"},[t._v(" Premium Support ")]),e("td",[e(i["a"],{attrs:{color:"error"}},[t._v(" mdi-close ")])],1),e("td",[e(i["a"],{attrs:{color:"success"}},[t._v(" mdi-check ")])],1)]),e("tr",[e("th"),e("td",[t._v("Free")]),e("td",[t._v("Just for "),e("b",{staticClass:"subheading"},[t._v("$79")])])]),e("tr",[e("th"),e("td",[e(n["a"],{attrs:{color:"grey",disabled:""}},[t._v(" Current Version ")])],1),e("td",[e(n["a"],{attrs:{color:"success",target:"_blank",href:"https://www.creative-tim.com/product/vuetify-material-dashboard-pro?ref=vtymd-upgrade-page"}},[t._v(" Upgrade to Pro ")])],1)])])])],1)],1)],1)],1)},d=[],u={name:"DashboardDashboard"},f=u,h=(a("1901"),a("2877")),g=Object(h["a"])(f,l,d,!1,null,null,null);e["default"]=g.exports},"8b37":function(t,e,a){},a523:function(t,e,a){"use strict";a("4de4"),a("d3b7"),a("b64b"),a("2ca0"),a("99af"),a("20f6"),a("4b85"),a("498a"),a("a15b");var n=a("2b0e");function r(t){return n["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var n=a.props,r=a.data,s=a.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var i=r.attrs;if(i){r.attrs={};var o=Object.keys(i).filter((function(t){if("slot"===t)return!1;var e=i[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(r.staticClass+=" ".concat(o.join(" ")))}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),e(n.tag,r,s)}})}var s=a("d9f7");e["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,n=e.props,r=e.data,i=e.children,o=r.attrs;return o&&(r.attrs={},a=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),t(n.tag,Object(s["a"])(r,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(a||[])}),i)}})}}]);
//# sourceMappingURL=chunk-9328ff5e.2d501cea.js.map