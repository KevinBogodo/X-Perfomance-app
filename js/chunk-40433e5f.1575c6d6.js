(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40433e5f","chunk-2d0da541","chunk-2d0c46b2","chunk-2d0b1676","chunk-2d0de7bf"],{"1e4f":function(e,t,a){},2068:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("h1",[e._v("All users setting")])},s=[],l=a("2877"),r={},i=Object(l["a"])(r,n,s,!1,null,null,null);t["default"]=i.exports},"3b6c":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("h1",[e._v("All users setting")])},s=[],l=a("2877"),r={},i=Object(l["a"])(r,n,s,!1,null,null,null);t["default"]=i.exports},6700:function(e,t,a){"use strict";a.r(t);a("caad"),a("2532");var n=function(){var e=this,t=e._self._c;return t("el-tabs",{staticClass:"m-2",staticStyle:{height:"85vh",overflow:"scroll"},attrs:{type:"border-card"}},[e.permissions.includes("preference")?t("el-tab-pane",{attrs:{label:"Préferences"}}):e._e(),e.permissions.includes("notifications")?t("el-tab-pane",{attrs:{label:"Notifications"}}):e._e(),e.permissions.includes("entreprise")?t("el-tab-pane",{attrs:{label:"Entreprise"}},[t("EntrePrisePage")],1):e._e(),e.permissions.includes("agence")?t("el-tab-pane",{attrs:{label:"Agences"}},[t("CrudAgencePage")],1):e._e(),e.permissions.includes("banque")?t("el-tab-pane",{attrs:{label:"Banques"}},[t("CrudBanquePage")],1):e._e(),e.permissions.includes("utilisateur")?t("el-tab-pane",{attrs:{label:"Utilisateurs"}},[t("CrudUserPage")],1):e._e(),e.permissions.includes("role")?t("el-tab-pane",{attrs:{label:"Roles & Permissions"}},[t("CrudRolePage")],1):e._e(),e.permissions.includes("permission")?t("el-tab-pane",{attrs:{label:"Permissions"}},[t("CrudPermissionPage")],1):e._e()],1)},s=[],l=(a("323e"),a("a5d8"),a("270c")),r=a("81c5"),i=a("6aaa"),o=a("3b6c"),c=a("2068"),u=a("869d"),d={components:{CrudUserPage:l["default"],CrudAgencePage:r["default"],CrudBanquePage:i["default"],CrudPermissionPage:o["default"],CrudRolePage:c["default"],EntrePrisePage:u["default"]},data:function(){return{permissions:[]}},created:function(){this.permission()},methods:{permission:function(){this.permissions=JSON.parse(localStorage.getItem("menu")),this.permissions=this.permissions.setting[0]}}},f=d,p=a("2877"),m=Object(p["a"])(f,n,s,!1,null,null,null);t["default"]=m.exports},"6aaa":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("h1",[e._v("All users setting")])},s=[],l=a("2877"),r={},i=Object(l["a"])(r,n,s,!1,null,null,null);t["default"]=i.exports},"7c24":function(e,t,a){"use strict";a("1e4f")},"81c5":function(e,t,a){"use strict";a.r(t);var n=a("169a"),s=(a("4de4"),a("d3b7"),a("ac1f"),a("841c"),a("caad"),a("2532"),function(){var e=this,t=e._self._c;return t("div",{staticClass:"p-3"},[t("div",{staticClass:"display-2 font-weight-light mt-2"},[e._v(" Gestion des agences ")]),t("el-divider",{staticClass:"mt-2"}),e.loading?t("el-skeleton",{attrs:{rows:20,animated:""}}):t("div",[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.all_data.filter((function(t){return!e.search||t.code.toLowerCase().includes(e.search.toLowerCase())}))}},[t("el-table-column",{attrs:{label:"Code",prop:"code"}}),t("el-table-column",{attrs:{label:"Nom",prop:"nom"}}),t("el-table-column",{attrs:{label:"Ville",prop:"ville"}}),t("el-table-column",{attrs:{label:"Adresse",prop:"adresse"}}),t("el-table-column",{attrs:{align:"right"},scopedSlots:e._u([{key:"header",fn:function(a){return[t("el-input",{attrs:{size:"mini",placeholder:"Type to search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]}},{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.handleEdit(a.$index,a.row)}}},[e._v("Editer")]),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(a.$index,a.row)}}},[e._v("Supprimer")])]}}])})],1),t(n["a"],{attrs:{"max-width":"600","max-heigth":"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t("ModalAgenceComponent",{attrs:{dialog:e.dialog}})],1)],1)],1)}),l=[],r=a("c7eb"),i=a("1da1"),o=a("323e"),c=a.n(o),u=(a("a5d8"),a("cee4")),d=(a("c1df"),a("b0af")),f=a("99d9"),p=a("62ad"),m=a("132d"),b=a("0fd9"),g=a("2fa4"),h=a("8654"),v=function(){var e=this,t=e._self._c;return t(d["a"],{staticClass:"text-left"},[t(f["c"],[t("div",{staticClass:"subtitle-1 font-weight-light text-left ml-3 mt-2"},[e._v(" Modification de l'agence ")]),t(g["a"]),t(m["a"],{attrs:{"aria-label":"Close"},on:{click:function(t){e.dialog=!1}}},[e._v(" mdi-close ")])],1),t(f["b"],[t(b["a"],[t(p["a"],{attrs:{cols:"12",md:"6"}},[t(h["a"],{staticClass:"purple-input",attrs:{label:"code"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),t(p["a"],{attrs:{cols:"12",md:"6"}},[t(h["a"],{staticClass:"purple-input",attrs:{label:"Nom"},model:{value:e.form.nom,callback:function(t){e.$set(e.form,"nom",t)},expression:"form.nom"}})],1),t(p["a"],{attrs:{cols:"12",md:"6"}},[t(h["a"],{staticClass:"purple-input",attrs:{label:"Ville"},model:{value:e.form.ville,callback:function(t){e.$set(e.form,"ville",t)},expression:"form.ville"}})],1),t(p["a"],{attrs:{cols:"12",md:"6"}},[t(h["a"],{staticClass:"purple-input",attrs:{label:"Quartier"},model:{value:e.form.quartier,callback:function(t){e.$set(e.form,"quartier",t)},expression:"form.quartier"}})],1)],1)],1),t(f["a"],[t(g["a"]),t(b["a"],[t(p["a"],{staticClass:"text-right",attrs:{cols:"12"}},[t("el-button",{attrs:{type:"warning",round:""}},[e._v("Annuler")]),t("el-button",{attrs:{type:"primary",round:""}},[e._v("Continuer"),t("i",{staticClass:"el-icon-arrow-right el-icon-right"})])],1)],1)],1)],1)},_=[],C={components:{},props:["dialog"],data:function(){return{all_data:[],search:"",loading:!0,form:""}},created:function(){this.loadData()},methods:{loadData:function(){var e=this;return Object(i["a"])(Object(r["a"])().mark((function t(){var a;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c.a.start(),t.prev=1,t.next=4,u["a"].get("v1/xperf/setting/agence/get");case 4:a=t.sent,e.all_data=a.data,e.loading=!1,t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](1),e.loading=!1,e.$notify({type:"error",title:"Echec de recuperation"});case 13:c.a.done();case 14:case"end":return t.stop()}}),t,null,[[1,9]])})))()},handleEdit:function(e,t){this.dialog=!0,this.form=t},handleDelete:function(e,t){console.log(e,t)}}},x=C,w=(a("7c24"),a("2877")),k=Object(w["a"])(x,v,_,!1,null,null,null),P=k.exports,y={components:{ModalAgenceComponent:P},data:function(){return{all_data:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"John",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Morgan",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Jessy",address:"No. 189, Grove St, Los Angeles"}],search:"",loading:!0,dialog:!1,form:""}},created:function(){this.loadData()},methods:{loadData:function(){var e=this;return Object(i["a"])(Object(r["a"])().mark((function t(){var a;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c.a.start(),t.prev=1,t.next=4,u["a"].get("v1/xperf/setting/agence/get");case 4:a=t.sent,e.all_data=a.data,e.loading=!1,t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](1),e.loading=!1,e.$notify({type:"error",title:"Echec de recuperation"});case 13:c.a.done();case 14:case"end":return t.stop()}}),t,null,[[1,9]])})))()},handleEdit:function(e,t){this.dialog=1,this.form=t},handleDelete:function(e,t){console.log(e,t)}}},A=y,O=(a("dbe3"),Object(w["a"])(A,s,l,!1,null,null,null));t["default"]=O.exports},"869d":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("h1",[e._v("Bill setting")])},s=[],l=a("2877"),r={},i=Object(l["a"])(r,n,s,!1,null,null,null);t["default"]=i.exports},9465:function(e,t,a){},dbe3:function(e,t,a){"use strict";a("9465")}}]);
//# sourceMappingURL=chunk-40433e5f.1575c6d6.js.map