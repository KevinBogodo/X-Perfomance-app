(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ffa0008"],{"0c47":function(t,e,r){var n=r("da84"),a=r("d44e");a(n.JSON,"JSON",!0)},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7");function n(t,e,r,n,a,o,i){try{var s=t[o](i),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function s(t){n(i,a,o,s,c,"next",t)}function c(t){n(i,a,o,s,c,"throw",t)}s(void 0)}))}}},"23dc":function(t,e,r){var n=r("d44e");n(Math,"Math",!0)},"3c65":function(t,e,r){"use strict";var n=r("23e7"),a=r("7b0b"),o=r("07fa"),i=r("3a34"),s=r("083a"),c=r("3511"),l=1!==[].unshift(0),u=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}},d=l||!u();n({target:"Array",proto:!0,arity:1,forced:d},{unshift:function(t){var e=a(this),r=o(e),n=arguments.length;if(n){c(r+n);var l=r;while(l--){var u=l+n;l in e?e[u]=e[l]:s(e,u)}for(var d=0;d<n;d++)e[d]=arguments[d]}return i(e,r+n)}})},"3f14":function(t,e,r){"use strict";r.r(e);var n=r("ce7e"),a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-3 col-lg-4 col-md-5 col-sm-6 col-xs-6 mb-1"},[e("label",[t._v(t._s(t.periode)+" : ")]),e("div",{staticClass:"data-picker",staticStyle:{width:"100%"}},[e("el-date-picker",{attrs:{type:"daterange","unlink-panels":"","range-separator":"-",format:"dd/MM/yyyy",clearable:t.clearable,"picker-options":t.pickerOptions},on:{change:function(e){return t.loadFilter()}},model:{value:t.drp,callback:function(e){t.drp=e},expression:"drp"}})],1)]),e("div",{staticClass:"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 margin-bottom"},[e("label",[t._v("Choisir le status : ")]),e("div",{staticClass:"data-picker",staticStyle:{width:"100%"}},[e("ui-select",{attrs:{placeholder:"Choisir une usine",options:t.status},on:{change:function(e){return t.loadConfig()}},model:{value:t.statusSelect,callback:function(e){t.statusSelect=e},expression:"statusSelect"}})],1)]),e("div",{staticClass:"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 margin-bottom ml-2"},[e("label",[t._v("Auteur : ")]),e("div",{staticClass:"data-picker",staticStyle:{width:"100%"}},[e("ui-select",{attrs:{placeholder:"Choisir une usine",options:t.usersList},on:{change:function(e){return t.loadConfig()}},model:{value:t.usersSelect,callback:function(e){t.usersSelect=e},expression:"usersSelect"}})],1)])]),e(n["a"],{staticClass:"mt-5"}),t.all_commande.length>0&&0==t.loading?e("div",{staticClass:"card mt-3"},[e("TableList",{attrs:{all_commande:t.all_commande,loadConfig:t.loadFilter,type:t.type}})],1):t._e(),e("div",{staticClass:"mt-3"},[[e("el-skeleton",{attrs:{loading:t.loading,animated:"",rows:6}})]],2),0!=t.all_commande.length&&""!=t.all_commande.length&&" "!=t.all_commande.length||0!=t.loading?t._e():e("div",{staticClass:"resultat"},[e("el-empty",{attrs:{description:"Pas de données"}})],1)],1)},o=[],i=r("c7eb"),s=r("1da1"),c=(r("d3b7"),r("159b"),r("caad"),r("b0c0"),r("14d9"),r("3c65"),r("2532"),r("cee4")),l=r("c1df"),u=r.n(l),d=r("323e"),f=r.n(d),h=(r("4de4"),r("ac1f"),r("841c"),function(){var t=this,e=t._self._c;return e("el-table",{staticStyle:{width:"100% cursor:pointer"},attrs:{data:t.all_commande.filter((function(e){return!t.search||e.code.toLowerCase().includes(t.search.toLowerCase())}))}},[e("el-table-column",{attrs:{label:"status",width:"120"},scopedSlots:t._u([{key:"default",fn:function(r){return[0==r.row.status?e("el-tag",{attrs:{type:"info",size:"medium"}},[t._v(t._s(r.row.status_t))]):t._e(),1==r.row.status?e("el-tag",{attrs:{size:"medium"}},[t._v(t._s(r.row.status_t))]):t._e(),2==r.row.status?e("el-tag",{attrs:{type:"success",size:"medium"}},[t._v(t._s(r.row.status_t))]):t._e()]}}])}),e("el-table-column",{attrs:{label:"Code",prop:"code"}}),e("el-table-column",{attrs:{label:"Client",prop:"nom_client"}}),e("el-table-column",{attrs:{label:"Prix total",prop:"prix_total"}}),e("el-table-column",{attrs:{label:"Auteur",prop:"name"}}),e("el-table-column",{attrs:{label:"Date de creation",prop:"created_at"}}),e("el-table-column",{attrs:{align:"right"},scopedSlots:t._u([{key:"default",fn:function(r){return[e("div",{staticClass:"row mr-2"},[e("el-select",{staticClass:"col",attrs:{change:t.handleChangeState(r.row),placeholder:"Status",size:"small"},model:{value:r.row.status,callback:function(e){t.$set(r.row,"status",e)},expression:"scope.row.status"}},t._l(t.optionStatus,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value,disabled:t.disabled}})})),1)],1)]}}])},[e("template",{slot:"header"},[e("el-input",{attrs:{size:"mini",placeholder:"Type to search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],2)],1)}),p=[],m={props:["all_commande","loadConfig"],data:function(){return{search:"",optionStatus:[{label:"En cours",value:0},{label:"En attente de recuperation",value:1},{label:"Terminer",value:2}]}},methods:{handleChangeState:function(t){var e=this;f.a.start(),this.all_commande.forEach((function(r){r.id==t.id&&(r.status_active===t.status?console.log("equal"):(console.log("update"),e.updateCommande(t)))})),f.a.done()},showRow:function(t){console.log(t)},updateCommande:function(t){var e=this;return Object(s["a"])(Object(i["a"])().mark((function r(){var n;return Object(i["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n={id:t.id,status:t.status},f.a.start(),r.prev=2,r.next=5,c["a"].post("xpress/commande/updateState",n);case 5:e.$notify({type:"success",title:"Enregistrer"}),e.loadConfig(),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](2),e.$notify({type:"error",title:"Echec d'enregistrement"});case 12:f.a.done();case 13:case"end":return r.stop()}}),r,null,[[2,9]])})))()}}},v=m,y=r("2877"),b=Object(y["a"])(v,h,p,!1,null,null,null),g=b.exports,w={components:{TableList:g},data:function(){return{type:"periode",is_done:0,status:[],usersList:[],usersSelect:"",statusSelect:"",periode:"Choisir la periode",start:u()().subtract(12,"month").startOf("month").toDate(),end:u()().toDate(),clearable:!0,drp:[u()().subtract(1,"isoweek").startOf("isoweek").toDate(),u()().toDate()],pickerOptions:{shortcuts:[{text:"Mois precedent",onClick:function(t){t.$emit("pick",[u()().subtract(1,"month").startOf("month").toDate(),u()().subtract(1,"month").endOf("month").toDate()])}},{text:"Mois en cours",onClick:function(t){t.$emit("pick",[u()().startOf("month").toDate(),new Date])}},{text:"Semaine precedente",onClick:function(t){t.$emit("pick",[u()().subtract(1,"week").startOf("isoWeek").toDate(),u()().subtract(1,"week").endOf("isoWeek").toDate()])}},{text:"Semaine en cours",onClick:function(t){t.$emit("pick",[u()().startOf("isoWeek").toDate(),new Date])}},{text:"Avant hier",onClick:function(t){t.$emit("pick",[u()().subtract(2,"day").toDate(),u()().subtract(2,"day").toDate()])}},{text:"Hier",onClick:function(t){t.$emit("pick",[u()().subtract(1,"day").toDate(),u()().subtract(1,"day").toDate()])}},{text:"Aujoudhuit",onClick:function(t){t.$emit("pick",[u()().toDate(),new Date])}}],format:"dd MM yyyy",firstDayOfWeek:1,disabledDate:this.disabledDueDate},loading:!1,all_commande:[]}},created:function(){u.a.locale("fr"),this.loadFilter()},methods:{disabledDueDate:function(t){return!(t>=this.start&&t<=this.end)},loadFilter:function(){var t=this;return Object(s["a"])(Object(i["a"])().mark((function e(){var r,n,a,o,s,l,d,h;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return f.a.start(),e.prev=1,r={start:u()(new Date(t.drp[0])).startOf("day").format("YYYY-MM-DD HH:mm:ss.SSS"),end:u()(new Date(t.drp[1])).endOf("day").format("YYYY-MM-DD HH:mm:ss.SSS")},e.next=5,c["a"].post("xpress/commande/getFilter",r);case 5:n=e.sent,a=n.data.users,o=[],s=[],l=[],d=[],h="",a.forEach((function(t){d.includes(t.name)||(d.push(t.name),l.push({label:t.name,value:t.id})),0==t.status?(h="En cours",o.includes(h)||(o.push(h),s.push({label:h,value:t.status}))):1==t.status?(h="En attente de Recuperation",o.includes(h)||(o.push(h),s.push({label:h,value:t.status}))):2==t.status&&(h="Terminer",o.includes(h)||(o.push(h),s.push({label:h,value:t.status})))})),t.usersList=l,t.usersList.unshift({label:"Tous",value:0}),t.usersSelect=t.usersList[0],t.status=s,t.status.unshift({label:"Tous",value:4}),t.statusSelect=t.status[0],t.loadConfig(),e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](1),t.$notify({type:"error",title:"Echec de recuperation"});case 25:f.a.done();case 26:case"end":return e.stop()}}),e,null,[[1,22]])})))()},loadConfig:function(){var t=this;return Object(s["a"])(Object(i["a"])().mark((function e(){var r,n,a;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,f.a.start(),r={start:u()(new Date(t.drp[0])).startOf("day").format("YYYY-MM-DD HH:mm:ss.SSS"),end:u()(new Date(t.drp[1])).endOf("day").format("YYYY-MM-DD HH:mm:ss.SSS"),status:t.statusSelect["value"],user:t.usersSelect["value"]},console.log(r),e.next=6,c["a"].post("/xpress/commande/allPressingCmdUser",r);case 6:n=e.sent,t.loading=!1,a=n.data.commande,a.forEach((function(t){0==t.status?t["status_t"]="en cours":1==t.status?t["status_t"]="En attente de R":2==t.status&&(t["status_t"]="Terminer"),t["status_active"]=t.status,t.created_at=u()(new Date(t.created_at)).startOf("day").format("DD/MM/YYYY HH:mm:ss"),console.log(t.created_at)})),t.all_commande=a,t.all_commande_detail=n.data.commande_details,f.a.done();case 13:case"end":return e.stop()}}),e)})))()},handleChangeState:function(t){var e=this;f.a.start(),this.all_commande.forEach((function(r){r.id==t.id&&!r.status_active===t.status&&(console.log("update"),e.updateCommande(t))})),f.a.done()},updateCommande:function(t){var e=this;return Object(s["a"])(Object(i["a"])().mark((function r(){return Object(i["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return f.a.start(),r.prev=1,r.next=4,c["a"].post("xpress/commande/update",t);case 4:e.$notify({type:"success",title:"Enregistrer"}),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](1),e.$notify({type:"error",title:"Echec d'enregistrement"});case 10:f.a.done();case 11:case"end":return r.stop()}}),r,null,[[1,7]])})))()}}},x=w,_=(r("c56b"),Object(y["a"])(x,a,o,!1,null,null,null));e["default"]=_.exports},"841c":function(t,e,r){"use strict";var n=r("c65b"),a=r("d784"),o=r("825a"),i=r("7234"),s=r("1d80"),c=r("129f"),l=r("577e"),u=r("dc4a"),d=r("14c3");a("search",(function(t,e,r){return[function(e){var r=s(this),a=i(e)?void 0:u(e,t);return a?n(a,e,r):new RegExp(e)[t](l(r))},function(t){var n=o(this),a=l(t),i=r(e,n,a);if(i.done)return i.value;var s=n.lastIndex;c(s,0)||(n.lastIndex=0);var u=d(n,a);return c(n.lastIndex,s)||(n.lastIndex=s),null===u?-1:u.index}]}))},"944a":function(t,e,r){var n=r("d066"),a=r("e065"),o=r("d44e");a("toStringTag"),o(n("Symbol"),"Symbol")},b636:function(t,e,r){var n=r("e065");n("asyncIterator")},c56b:function(t,e,r){"use strict";r("cf47")},c7eb:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("b636"),r("944a"),r("0c47"),r("23dc"),r("3410"),r("d9e2"),r("14d9"),r("159b"),r("b0c0"),r("131a"),r("1f68"),r("fb6a");var n=r("53ca");function a(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
a=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(j){u=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),s=new D(n||[]);return o(i,"_invoke",{value:k(t,r,s)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(j){return{type:"throw",arg:j}}}t.wrap=d;var h={};function p(){}function m(){}function v(){}var y={};u(y,s,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(E([])));g&&g!==e&&r.call(g,s)&&(y=g);var w=v.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function a(o,i,s,c){var l=f(t[o],t,i);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==Object(n["a"])(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,s,c)}),(function(t){a("throw",t,s,c)})):e.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return a("throw",t,s,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){a(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function k(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var s=S(i,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function S(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator["return"]&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=f(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function E(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return m.prototype=v,o(w,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:m,configurable:!0}),m.displayName=u(v,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(_.prototype),u(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new _(d(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),u(w,l,"Generator"),u(w,s,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=E,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;C(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}},cf47:function(t,e,r){}}]);
//# sourceMappingURL=chunk-4ffa0008.a12d4245.js.map