(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-705c8cae"],{"0fd9":function(t,e,a){"use strict";var s=a("ade3"),n=a("5530"),r=(a("13d5"),a("d3b7"),a("caad"),a("2532"),a("99af"),a("b64b"),a("ac1f"),a("5319"),a("4ec9"),a("3ca3"),a("ddb0"),a("159b"),a("14d9"),a("4b85"),a("2b0e")),i=a("d9f7"),l=a("80d2"),d=["sm","md","lg","xl"],c=["start","end","center"];function o(t,e){return d.reduce((function(a,s){return a[t+Object(l["D"])(s)]=e(),a}),{})}var u=function(t){return[].concat(c,["baseline","stretch"]).includes(t)},v=o("align",(function(){return{type:String,default:null,validator:u}})),f=function(t){return[].concat(c,["space-between","space-around"]).includes(t)},h=o("justify",(function(){return{type:String,default:null,validator:f}})),p=function(t){return[].concat(c,["space-between","space-around","stretch"]).includes(t)},b=o("alignContent",(function(){return{type:String,default:null,validator:p}})),g={align:Object.keys(v),justify:Object.keys(h),alignContent:Object.keys(b)},m={align:"align",justify:"justify",alignContent:"align-content"};function _(t,e,a){var s=m[t];if(null!=a){if(e){var n=e.replace(t,"");s+="-".concat(n)}return s+="-".concat(a),s.toLowerCase()}}var y=new Map;e["a"]=r["default"].extend({name:"v-row",functional:!0,props:Object(n["a"])(Object(n["a"])(Object(n["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u}},v),{},{justify:{type:String,default:null,validator:f}},h),{},{alignContent:{type:String,default:null,validator:p}},b),render:function(t,e){var a=e.props,n=e.data,r=e.children,l="";for(var d in a)l+=String(a[d]);var c=y.get(l);if(!c){var o,u;for(u in c=[],g)g[u].forEach((function(t){var e=a[t],s=_(u,t,e);s&&c.push(s)}));c.push((o={"no-gutters":a.noGutters,"row--dense":a.dense},Object(s["a"])(o,"align-".concat(a.align),a.align),Object(s["a"])(o,"justify-".concat(a.justify),a.justify),Object(s["a"])(o,"align-content-".concat(a.alignContent),a.alignContent),o)),y.set(l,c)}return t(a.tag,Object(i["a"])(n,{staticClass:"row",class:c}),r)}})},"1f4f":function(t,e,a){"use strict";var s=a("5530"),n=(a("a9e3"),a("8b37"),a("80d2")),r=a("7560"),i=a("58df");e["a"]=Object(i["a"])(r["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(s["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n["h"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"8b37":function(t,e,a){},be93:function(t,e,a){"use strict";a.r(e);var s=a("62ad"),n=a("0fd9"),r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-3"},[e(n["a"],{staticClass:"m-3"},[e(s["a"],{attrs:{cols:"12",sm:"6",lg:"4"}},[e("base-material-stats-card",{attrs:{color:"blue",icon:"mdi-poll",title:"Soldes ",value:"200,000,000","sub-icon":"mdi-tag","sub-text":"Solde Actuel de l'agence"}})],1),e(s["a"],{attrs:{cols:"12",sm:"6",lg:"4"}},[e("base-material-stats-card",{attrs:{color:"primary",icon:"mdi-poll",title:"Versement",value:"75,521,000","sub-icon":"mdi-tag","sub-text":"Total versements sur le mois"}})],1),e(s["a"],{attrs:{cols:"12",sm:"6",lg:"4"}},[e("base-material-stats-card",{attrs:{color:"primary",icon:"mdi-poll",title:"Dépenses",value:"75,521,000","sub-icon":"mdi-tag","sub-text":"Total des dépenses sur le mois"}})],1)],1),e("div",[e("RegularTableHeaderAdd")],1)],1)},i=[],l=(a("c1df"),a("323e"),a("1f4f")),d=function(){var t=this,e=t._self._c;return e("base-material-card",{staticClass:"px-5 py-3",staticStyle:{cursor:"pointer"},attrs:{icon:"mdi-clipboard-text",title:"Simple Table"}},[e(l["a"],[e("thead",[e("tr",[e("th",{staticClass:"primary--text"},[t._v(" IDs ")]),e("th",{staticClass:"primary--text"},[t._v(" Name ")]),e("th",{staticClass:"primary--text"},[t._v(" Country ")]),e("th",{staticClass:"primary--text"},[t._v(" City ")]),e("th",{staticClass:"text-right primary--text"},[t._v(" Salary ")])])]),e("tbody",[e("tr",[e("td",[t._v("1")]),e("td",[t._v("Dakota Rice")]),e("td",[t._v("Niger")]),e("td",[t._v("Oud-Turnhout")]),e("td",{staticClass:"text-right"},[t._v(" $36,738 ")])]),e("tr",[e("td",[t._v("2")]),e("td",[t._v("Minverva Hooper")]),e("td",[t._v("Curaçao")]),e("td",[t._v("Sinaas-Waas")]),e("td",{staticClass:"text-right"},[t._v(" $23,789 ")])]),e("tr",[e("td",[t._v("3")]),e("td",[t._v("Sage Rodriguez")]),e("td",[t._v("Netherlands")]),e("td",[t._v("Baileux")]),e("td",{staticClass:"text-right"},[t._v(" $56,142 ")])]),e("tr",[e("td",[t._v("4")]),e("td",[t._v("Philip Chaney")]),e("td",[t._v("Korea, South")]),e("td",[t._v("Overland Park")]),e("td",{staticClass:"text-right"},[t._v(" $38,735 ")])]),e("tr",[e("td",[t._v("5")]),e("td",[t._v("Doris Greene")]),e("td",[t._v("Malawi")]),e("td",[t._v("Feldkirchen in Kärnten")]),e("td",{staticClass:"text-right"},[t._v(" $63,542 ")])]),e("tr",[e("td",[t._v("6")]),e("td",[t._v("Mason Porter")]),e("td",[t._v("Chile")]),e("td",[t._v("Gloucester")]),e("td",{staticClass:"text-right"},[t._v(" $78,615 ")])])])])],1)},c=[],o=a("2877"),u={},v=Object(o["a"])(u,d,c,!1,null,null,null),f=v.exports,h={components:{RegularTableHeaderAdd:f}},p=h,b=Object(o["a"])(p,r,i,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-705c8cae.fd28d2ca.js.map