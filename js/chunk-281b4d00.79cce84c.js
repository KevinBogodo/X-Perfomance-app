(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-281b4d00"],{a55b:function(e,t,o){"use strict";o.r(t);var s=o("8336"),a=function(){var e=this,t=e._self._c;return t("section",{staticClass:"dark"},[e._m(0),t("form",[t("h3",{staticStyle:{color:"#080710"}},[e._v(e._s(e.title))]),t("label",{attrs:{for:"username"}},[e._v(e._s(e.username))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.body.email,expression:"form.body.email"}],attrs:{type:"text",placeholder:e.username_placeholder},domProps:{value:e.form.body.email},on:{input:function(t){t.target.composing||e.$set(e.form.body,"email",t.target.value)}}}),t("label",{attrs:{for:"password"}},[e._v(e._s(e.Password))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.body.password,expression:"form.body.password"}],attrs:{type:"password",placeholder:e.password_placeholder},domProps:{value:e.form.body.password},on:{input:function(t){t.target.composing||e.$set(e.form.body,"password",t.target.value)}}}),t("div",{staticClass:"d-flex justify-content-center"},[t("el-checkbox",{model:{value:e.form.remember,callback:function(t){e.$set(e.form,"remember",t)},expression:"form.remember"}},[e._v(e._s(e.remember))])],1),t("el-select",{staticClass:"mt-3 p-2",staticStyle:{width:"100%"},attrs:{placeholder:"Select"},on:{change:function(t){return e.isAllLocations(e.value_lang)}},model:{value:e.value_lang,callback:function(t){e.value_lang=t},expression:"value_lang"}},e._l(e.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),t(s["a"],{staticClass:"mt-4",attrs:{depressed:"",color:"0080ff"},on:{click:e.loginDefault}},[e._v(e._s(e.login))])],1)])},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"background"},[t("div",{staticClass:"shape"}),t("div",{staticClass:"shape"})])}],r=(o("c1f9"),o("d81d"),o("323e")),l=o.n(r),i=(o("a5d8"),{data:function(){return{title:this.$t("login-section.title"),username:this.$t("login-section.username"),username_placeholder:this.$t("login-section.username-placeholder"),password_placeholder:this.$t("login-section.password-placeholder"),Password:this.$t("login-section.Password"),remember:this.$t("login-section.remember"),login:this.$t("login-section.login"),warning:this.$t("login-section.warning"),step:1,checked:!1,options:[{value:"1",label:"Français || French"},{value:"2",label:"English || Anglais"}],value_lang:"1",form:{body:{email:"",password:""},remember:!1,fetchUser:!0,staySignedIn:!1,errors:{}}}},created:function(){},mounted:function(){console.log(this.$auth.user())},methods:{errors:function(e){this.form.errors=Object.fromEntries(e.data.errors.map((function(e){return[e.field,e.msg]})))},isAllLocations:function(e){1==e?(this.$i18n.locale="fr",console.log(this.$i18n.locale)):(this.$i18n.locale="en",console.log(this.$i18n.locale))},loginDefault:function(){var e=this;l.a.start(),this.$auth.login({data:this.form.body,remember:this.form.remember,fetchUser:this.form.fetchUser,staySignedIn:this.form.staySignedIn}).then(null,(function(t){console.log(t),e.$notify({type:"error",title:e.warning})})),l.a.done()}}}),c=i,u=(o("ba8a"),o("2877")),d=Object(u["a"])(c,a,n,!1,null,"e594ec60",null);t["default"]=d.exports},b565:function(e,t,o){},ba8a:function(e,t,o){"use strict";o("b565")},c1f9:function(e,t,o){var s=o("23e7"),a=o("2266"),n=o("8418");s({target:"Object",stat:!0},{fromEntries:function(e){var t={};return a(e,(function(e,o){n(t,e,o)}),{AS_ENTRIES:!0}),t}})}}]);
//# sourceMappingURL=chunk-281b4d00.79cce84c.js.map