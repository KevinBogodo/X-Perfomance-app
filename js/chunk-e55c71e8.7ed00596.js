(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e55c71e8","chunk-b5501a6e"],{"0c47":function(t,e,n){var a=n("da84"),r=n("d44e");r(a.JSON,"JSON",!0)},"0fd9":function(t,e,n){"use strict";var a=n("ade3"),r=n("5530"),i=(n("13d5"),n("d3b7"),n("caad"),n("2532"),n("99af"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("3ca3"),n("ddb0"),n("159b"),n("14d9"),n("4b85"),n("2b0e")),o=n("d9f7"),s=n("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(n,a){return n[t+Object(s["D"])(a)]=e(),n}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},f=u("align",(function(){return{type:String,default:null,validator:d}})),h=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},v=u("justify",(function(){return{type:String,default:null,validator:h}})),p=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},m=u("alignContent",(function(){return{type:String,default:null,validator:p}})),g={align:Object.keys(f),justify:Object.keys(v),alignContent:Object.keys(m)},y={align:"align",justify:"justify",alignContent:"align-content"};function b(t,e,n){var a=y[t];if(null!=n){if(e){var r=e.replace(t,"");a+="-".concat(r)}return a+="-".concat(n),a.toLowerCase()}}var w=new Map;e["a"]=i["default"].extend({name:"v-row",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:h}},v),{},{alignContent:{type:String,default:null,validator:p}},m),render:function(t,e){var n=e.props,r=e.data,i=e.children,s="";for(var c in n)s+=String(n[c]);var l=w.get(s);if(!l){var u,d;for(d in l=[],g)g[d].forEach((function(t){var e=n[t],a=b(d,t,e);a&&l.push(a)}));l.push((u={"no-gutters":n.noGutters,"row--dense":n.dense},Object(a["a"])(u,"align-".concat(n.align),n.align),Object(a["a"])(u,"justify-".concat(n.justify),n.justify),Object(a["a"])(u,"align-content-".concat(n.alignContent),n.alignContent),u)),w.set(s,l)}return t(n.tag,Object(o["a"])(r,{staticClass:"row",class:l}),i)}})},"169a":function(t,e,n){"use strict";var a=n("5530"),r=n("2909"),i=n("ade3"),o=(n("a9e3"),n("498a"),n("caad"),n("2532"),n("d3b7"),n("7db0"),n("368e"),n("480e")),s=n("4ad4"),c=n("b848"),l=n("75eb"),u=n("e707"),d=n("e4d3"),f=n("21be"),h=n("a293"),v=n("58df"),p=n("d9bd"),m=n("80d2"),g=Object(v["a"])(c["a"],l["a"],u["a"],d["a"],f["a"],s["a"]);e["a"]=g.extend({name:"v-dialog",directives:{ClickOutside:h["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(i["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(i["a"])(t,"v-dialog--active",this.isActive),Object(i["a"])(t,"v-dialog--persistent",this.persistent),Object(i["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(i["a"])(t,"v-dialog--scrollable",this.scrollable),Object(i["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(p["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):u["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){var e,n;(null===(e=t.$refs.dialog)||void 0===e?void 0:e.contains(document.activeElement))||(t.previousActiveElement=document.activeElement,null===(n=t.$refs.dialog)||void 0===n||n.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===m["w"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),a=Object(r["a"])(n).find((function(t){return!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]')}));a&&a.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(a["a"])({role:"dialog","aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(a["a"])(Object(a["a"])({},t.style),{},{maxWidth:Object(m["h"])(this.maxWidth),width:Object(m["h"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("d3b7");function a(t,e,n,a,r,i,o){try{var s=t[i](o),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(a,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function s(t){a(o,r,i,s,c,"next",t)}function c(t){a(o,r,i,s,c,"throw",t)}s(void 0)}))}}},"20f6":function(t,e,n){},"23dc":function(t,e,n){var a=n("d44e");a(Math,"Math",!0)},"368e":function(t,e,n){},"3c93":function(t,e,n){},"4bd4":function(t,e,n){"use strict";var a=n("5530"),r=(n("caad"),n("2532"),n("07ac"),n("4de4"),n("d3b7"),n("159b"),n("14d9"),n("7db0"),n("58df")),i=n("7e2b"),o=n("3206");e["a"]=Object(r["a"])(i["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,n=function(t){return t.$watch("hasError",(function(n){e.$set(e.errorBag,t._uid,n)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=n(t)))})):a.valid=n(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var n=this.watchers.find((function(t){return t._uid===e._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"944a":function(t,e,n){var a=n("d066"),r=n("e065"),i=n("d44e");r("toStringTag"),i(a("Symbol"),"Symbol")},a523:function(t,e,n){"use strict";n("4de4"),n("d3b7"),n("b64b"),n("2ca0"),n("99af"),n("20f6"),n("4b85"),n("498a"),n("a15b");var a=n("2b0e");function r(t){return a["default"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var a=n.props,r=n.data,i=n.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var o=r.attrs;if(o){r.attrs={};var s=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));s.length&&(r.staticClass+=" ".concat(s.join(" ")))}return a.id&&(r.domProps=r.domProps||{},r.domProps.id=a.id),e(a.tag,r,i)}})}var i=n("d9f7");e["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,a=e.props,r=e.data,o=e.children,s=r.attrs;return s&&(r.attrs={},n=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(r.domProps=r.domProps||{},r.domProps.id=a.id),t(a.tag,Object(i["a"])(r,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(n||[])}),o)}})},b636:function(t,e,n){var a=n("e065");a("asyncIterator")},be93:function(t,e,n){"use strict";n.r(e);var a=n("8336"),r=n("62ad"),i=n("132d"),o=n("0fd9"),s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-3"},[1==t.show_site_filter?e(o["a"],{staticClass:"m-3"},[e("div",{staticClass:"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 margin-bottom"},[e("label",{staticClass:"mb-2"},[t._v(t._s(t.titleChoice)+" : ")]),e("div",{staticClass:"data-picker",staticStyle:{width:"100%"}},[e("ui-select",{attrs:{placeholder:t.titleChoice,options:t.agencesOption},on:{change:function(e){return t.loadConfig(t.agenceSelect)}},model:{value:t.agenceSelect,callback:function(e){t.agenceSelect=e},expression:"agenceSelect"}})],1)])]):t._e(),e(o["a"],{staticClass:"m-3"},[e(r["a"],{attrs:{cols:"12",sm:"6",lg:"4"}},[e("base-material-stats-card",{attrs:{color:"blue",icon:"mdi-poll",title:"Soldes ",value:t.solde,"sub-icon":"mdi-tag","sub-text":"Solde Actuel de l'agence"}})],1),e(r["a"],{attrs:{cols:"12",sm:"6",lg:"4"}},[e("base-material-stats-card",{attrs:{color:"primary",icon:"mdi-poll",title:"Versement",value:t.versement,"sub-icon":"mdi-tag","sub-text":"Total versements sur le mois"}})],1),e(r["a"],{attrs:{cols:"12",sm:"6",lg:"4"}},[e("base-material-stats-card",{attrs:{color:"red",icon:"mdi-poll",title:"Dépenses",value:t.depense,"sub-icon":"mdi-tag","sub-text":"Total des dépenses sur le mois"}})],1)],1),e("div",[e("div",{staticClass:"row"},t._l(t.button_add_config,(function(n){return e("div",{key:n.id,staticClass:"col-3"},[e(a["a"],{staticClass:"mr-2",attrs:{elevation:"1",color:"default"},on:{click:function(e){return t.loadConfigChamp(n)}}},[e(i["a"],{attrs:{left:""}},[t._v("mdi-plus")]),t._v(t._s(n.libelle))],1)],1)})),0),e("RegularTableHeaderAdd",{attrs:{title:t.title,headers:t.headers,items:t.items}})],1),e("BaseModal",{attrs:{dialog:t.dialog,data_champ:t.data_champ,Modal_title:t.Modal_title,type:t.type,loadConfig:t.loadConfig,agenceSelect:t.agenceSelect}})],1)},c=[],l=n("c7eb"),u=n("1da1"),d=(n("d3b7"),n("159b"),n("caad"),n("14d9"),n("2532"),n("cee4")),f=n("c1df"),h=n.n(f),v=n("323e"),p=n.n(v),m=n("f16c"),g=n("99d9"),y=n("a523"),b=n("169a"),w=n("4bd4"),x=n("8654"),_=function(){var t=this,e=t._self._c;return e(b["a"],{attrs:{width:"700"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(g["b"],[e(o["a"],[e(r["a"],{attrs:{cols:"12"}},[e("base-material-card",{scopedSlots:t._u([{key:"heading",fn:function(){return[e("div",{staticClass:"display-2 font-weight-light"},[t._v(" "+t._s(t.Modal_title)+" ")])]},proxy:!0}])},[e(w["a"],[e(y["a"],{staticClass:"py-0"},[e(o["a"],[1==t.type?t._l(t.data_champ,(function(n){return e(r["a"],{key:n.id,attrs:{cols:"12",md:"6"}},["Date"==n.label?e("div",{staticClass:"row"},[e("span",{staticClass:"text-left",staticStyle:{color:"grey"}},[t._v(" "+t._s(n.label))]),e("el-date-picker",{attrs:{type:"date",placeholder:"Choississez le jour"},model:{value:t.form[n.value],callback:function(e){t.$set(t.form,n.value,e)},expression:"form[item.value]"}})],1):"Montant"==n.label?void 0:e(x["a"],{attrs:{label:n.label},on:{change:t.calculMontant},model:{value:t.form[n.value],callback:function(e){t.$set(t.form,n.value,e)},expression:"form[item.value]"}})],2)})):t._l(t.data_champ,(function(n){return e(r["a"],{key:n.id,attrs:{cols:"12",md:"6"}},["date"==n.type?e("div",{staticClass:"row"},[e("span",{staticClass:"text-left",staticStyle:{color:"grey"}},[t._v(" "+t._s(n.label))]),e("el-date-picker",{attrs:{type:"date",placeholder:"Choississez le jour"},model:{value:t.form[n.value],callback:function(e){t.$set(t.form,n.value,e)},expression:"form[item.value]"}})],1):e(x["a"],{attrs:{label:n.label},model:{value:t.form[n.value],callback:function(e){t.$set(t.form,n.value,e)},expression:"form[item.value]"}})],1)})),e(r["a"],{staticClass:"text-right",attrs:{cols:"12"}},[e(a["a"],{staticClass:"mr-0",attrs:{color:"success"},on:{click:function(e){return t.SaveData()}}},[t._v(" Enregistrer ")])],1)],2)],1)],1)],1)],1)],1)],1)],1)},O=[],C={props:["dialog","data_champ","Modal_title","type","loadConfig","agenceSelect"],data:function(){return{form:{mois:null,semaine:null,date:h()().toDate()}}},created:function(){},mounted:function(){},watch:{data_champ:function(){this.setChamp(),this.form["date"]=h()().toDate(),console.log(this.type)}},methods:{setChamp:function(){var t=this;this.data_champ.forEach((function(e){"date"==e.value||(t.form[e.value]=null)})),this.form["type"]=null,console.log(this.form)},calculMontant:function(){null==this.form["encaissement_vte"]&&(this.form["encaissement_vte"]=0),null==this.form["encaissement_credit_m1"]&&(this.form["encaissement_credit_m1"]=0),this.form.montant=parseFloat(this.form["encaissement_credit_m1"])+parseFloat(this.form["encaissement_vte"]),console.log(this.form["montant"])},SaveData:function(){var t=this;return Object(u["a"])(Object(l["a"])().mark((function e(){var n,a,r;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(p.a.start(),e.prev=1,1!=t.type){e.next=17;break}if(null==t.form.date||null==t.form.montant||""==t.form.montant){e.next=15;break}return h()(h()().toDate(),"MM-DD-YYYY").isoWeek(),t.form.date=h()(new Date(t.form.date)).format("YYYY-MM-DD"),t.form.semaine=h()(new Date(t.form.date)).isoWeek(),t.form.mois=h()(new Date(t.form.date)).month()+1,t.form.type=t.type,t.form.agence=t.agenceSelect.value,e.next=12,d["a"].post("xperf/saveOperationEtat",t.form);case 12:n=e.sent,a=n.data.message,200==n.status?(t.loadConfig(t.agenceSelect),t.dialog=!1,t.$notify({type:"success",title:a})):t.$notify({type:"error",title:a});case 15:e.next=29;break;case 17:if(null==t.form.date||null==t.form.montant||""==t.form.montant){e.next=29;break}return h()(h()().toDate(),"MM-DD-YYYY").isoWeek(),t.form.date=h()(new Date(t.form.date)).format("YYYY-MM-DD"),t.form.semaine=h()(new Date(t.form.date)).isoWeek(),t.form.mois=h()(new Date(t.form.date)).month()+1,t.form.type=t.type,t.form.agence=t.agenceSelect.value,e.next=26,d["a"].post("xperf/saveOperationEtat",t.form);case 26:r=e.sent,a=r.data.message,200==r.status?(t.loadConfig(t.agenceSelect),t.dialog=!1,t.$notify({type:"success",title:a})):t.$notify({type:"error",title:a});case 29:e.next=35;break;case 31:e.prev=31,e.t0=e["catch"](1),console.log("d:",e.t0.response),t.$notify({type:"warning",title:e.t0.response.data.message});case 35:p.a.done();case 36:case"end":return e.stop()}}),e,null,[[1,31]])})))()}}},k=C,S=n("2877"),j=Object(S["a"])(k,_,O,!1,null,null,null),E=j.exports,$={components:{RegularTableHeaderAdd:m["a"],BaseModal:E},data:function(){return{title:"Historique des opérations",titleChoice:"Choisir l'agence",dialog:!1,button_add_config:[],agencesOption:[],show_site_filter:0,agenceSelect:[],data_champ:[],Modal_title:"",type:null,solde:null,versement:null,depense:null,headers:[{sortable:!0,text:"Journée concernée",value:"date"},{sortable:!0,text:"Montant",value:"montant"},{sortable:!0,text:"Auteur",value:"auteur"},{sortable:!0,text:"Type",value:"type"},{sortable:!0,text:"Date d'enregistrement",value:"created_at"}],items:[]}},created:function(){this.loadFilter()},methods:{loadFilter:function(){var t=this;return Object(u["a"])(Object(l["a"])().mark((function e(){var n,a,r,i;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return p.a.start(),e.prev=1,e.next=4,d["a"].get("xperf/report/filter");case 4:n=e.sent,a=n.data.agences,r=[],i=[],a.forEach((function(t){r.includes(t.code)||(r.push(t.code),i.push({label:t.nom,value:t.code}))})),i.length>1&&(t.show_site_filter=1),t.agencesOption=i,t.agenceSelect=t.agencesOption[0],e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](1),t.$notify({type:"error",title:"Echec de recuperation"});case 17:t.loadConfig(t.agenceSelect),p.a.done();case 19:case"end":return e.stop()}}),e,null,[[1,14]])})))()},loadConfig:function(t){var e=this;return Object(u["a"])(Object(l["a"])().mark((function n(){var a,r;return Object(l["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return p.a.start(),a={agence:t.value},console.log(a),n.prev=3,n.next=6,d["a"].post("xperf/index",a);case 6:r=n.sent,e.button_add_config=r.data.configType,e.solde=r.data.solde,e.versement=r.data.versement,e.depense=r.data.depense,e.dialog=!1,e.loadDataTab(a),n.next=18;break;case 15:n.prev=15,n.t0=n["catch"](3),e.$notify({type:"error",title:"Echec de recuperation des informations "});case 18:p.a.done();case 19:case"end":return n.stop()}}),n,null,[[3,15]])})))()},loadConfigChamp:function(t){var e=this;return Object(u["a"])(Object(l["a"])().mark((function n(){var a,r,i;return Object(l["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return p.a.start(),n.prev=1,a={id:t.id},n.next=5,d["a"].post("xperf/getConfigChampEtat",a);case 5:r=n.sent,i=r.data.configChamp,e.data_champ=i,e.type=t.id,e.Modal_title=t.libelle,e.dialog=!0,n.next=16;break;case 13:n.prev=13,n.t0=n["catch"](1),e.$notify({type:"error",title:"Echec de recuperation des informations "});case 16:p.a.done();case 17:case"end":return n.stop()}}),n,null,[[1,13]])})))()},loadDataTab:function(t){var e=this;return Object(u["a"])(Object(l["a"])().mark((function n(){var a,r;return Object(l["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return p.a.start(),e.items=[],n.prev=2,n.next=5,d["a"].post("xperf/getShortOp",t);case 5:a=n.sent,r=a.data.data,r.forEach((function(t){var n={created_at:t.created_at,date:t.date,montant:t.montant,auteur:t.auteur,type:t.libelle};e.items.push(n)})),n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](2),e.$notify({type:"error",title:"Echec de recuperation des informations"});case 13:p.a.done();case 14:case"end":return n.stop()}}),n,null,[[2,10]])})))()}}},L=$,A=Object(S["a"])(L,s,c,!1,null,null,null);e["default"]=A.exports},c7eb:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("14d9"),n("159b"),n("b0c0"),n("131a"),n("1f68"),n("fb6a");var a=n("53ca");function r(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
r=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(L){u=function(t,e,n){return t[e]=n}}function d(t,e,n,a){var r=e&&e.prototype instanceof v?e:v,o=Object.create(r.prototype),s=new j(a||[]);return i(o,"_invoke",{value:O(t,n,s)}),o}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(L){return{type:"throw",arg:L}}}t.wrap=d;var h={};function v(){}function p(){}function m(){}var g={};u(g,s,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(E([])));b&&b!==e&&n.call(b,s)&&(g=b);var w=m.prototype=v.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(i,o,s,c){var l=f(t[i],t,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==Object(a["a"])(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,s,c)}),(function(t){r("throw",t,s,c)})):e.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return r("throw",t,s,c)}))}c(l.arg)}var o;i(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,a){r(t,n,e,a)}))}return o=o?o.then(a,a):a()}})}function O(t,e,n){var a="suspendedStart";return function(r,i){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw i;return $()}for(n.method=r,n.arg=i;;){var o=n.delegate;if(o){var s=C(o,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var c=f(t,e,n);if("normal"===c.type){if(a=n.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a="completed",n.method="throw",n.arg=c.arg)}}}function C(t,e){var n=e.method,a=t.iterator[n];if(void 0===a)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,C(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var r=f(a,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function E(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,r=function e(){for(;++a<t.length;)if(n.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:$}}function $(){return{value:void 0,done:!0}}return p.prototype=m,i(w,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:p,configurable:!0}),p.displayName=u(m,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(_.prototype),u(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,a,r,i){void 0===i&&(i=Promise);var o=new _(d(e,n,a,r),i);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},x(w),u(w,l,"Generator"),u(w,s,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var a in e)n.push(a);return n.reverse(),function t(){for(;n.length;){var a=n.pop();if(a in e)return t.value=a,t.done=!1,t}return t.done=!0,t}},t.values=E,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(n,a){return o.type="throw",o.arg=t,e.next=n,a&&(e.method="next",e.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var a=n.completion;if("throw"===a.type){var r=a.arg;S(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}},e707:function(t,e,n){"use strict";n("a9e3"),n("caad"),n("2532");var a=n("5530"),r=(n("14d9"),n("3c93"),n("a9ad")),i=n("7560"),o=n("f2e7"),s=n("58df"),c=Object(s["a"])(r["a"],i["a"],o["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(a["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),l=c,u=n("80d2"),d=n("2b0e");e["a"]=d["default"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new l({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(u["t"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(u["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("key"in t){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[u["w"].up,u["w"].pageup],n=[u["w"].down,u["w"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!n.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var n,a,r=e.shiftKey||e.deltaX?"x":"y",i="y"===r?e.deltaY:e.deltaX||e.deltaY;"y"===r?(n=0===t.scrollTop,a=t.scrollTop+t.clientHeight===t.scrollHeight):(n=0===t.scrollLeft,a=t.scrollLeft+t.clientWidth===t.scrollWidth);var o=i<0,s=i>0;return!(n||!o)||(!(a||!s)||!(!n&&!a)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=Object(u["g"])(t);if("keydown"===t.type&&e[0]===document.body){var n=this.$refs.dialog,a=window.getSelection().anchorNode;return!(n&&this.hasScrollbar(n)&&this.isInside(a,n))||!this.shouldScroll(n,t)}for(var r=0;r<e.length;r++){var i=e[r];if(i===document)return!0;if(i===document.documentElement)return!0;if(i===this.$refs.content)return!0;if(this.hasScrollbar(i))return!this.shouldScroll(i,t)}return!0},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(u["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},f16c:function(t,e,n){"use strict";var a=n("99d9"),r=n("62ad"),i=n("8fea"),o=function(){var t=this,e=t._self._c;return e("div",[e(r["a"],{attrs:{cols:"12",md:"12"}},[e("base-material-card",{staticClass:"px-5 py-3",attrs:{color:"primary"},scopedSlots:t._u([{key:"heading",fn:function(){return[e("div",{staticClass:"display-2 font-weight-light"},[t._v(" "+t._s(t.title)+" ")]),e("div",{staticClass:"subtitle-1 font-weight-light"})]},proxy:!0}])},[e(a["b"],[e(i["a"],{attrs:{headers:t.headers,items:t.items}})],1)],1)],1)],1)},s=[],c={props:["title","headers","items"]},l=c,u=n("2877"),d=Object(u["a"])(l,o,s,!1,null,null,null);e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-e55c71e8.7ed00596.js.map