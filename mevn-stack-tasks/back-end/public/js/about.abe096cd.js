(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"057f":function(t,e,n){var r=n("fc6a"),o=n("241c").f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==a.call(t)?s(t):o(r(t))}},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),a=n("60ae"),i=o("species");t.exports=function(t){return a>=51||!r((function(){var e=[],n=e.constructor={};return n[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,n){var r=n("861d"),o=n("e8b5"),a=n("b622"),i=a("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"746f":function(t,e,n){var r=n("428f"),o=n("5135"),a=n("c032"),i=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||i(e,t,{value:a.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),o=n("9bf2"),a=n("5c6c");t.exports=function(t,e,n){var i=r(e);i in t?o.f(t,i,a(0,n)):t[i]=n}},a434:function(t,e,n){"use strict";var r=n("23e7"),o=n("23cb"),a=n("a691"),i=n("50c4"),s=n("7b0b"),c=n("65f0"),u=n("8418"),d=n("1dde"),f=Math.max,l=Math.min,p=9007199254740991,m="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d("splice")},{splice:function(t,e){var n,r,d,g,v,h,b=s(this),y=i(b.length),w=o(t,y),_=arguments.length;if(0===_?n=r=0:1===_?(n=0,r=y-w):(n=_-2,r=l(f(a(e),0),y-w)),y+n-r>p)throw TypeError(m);for(d=c(b,r),g=0;g<r;g++)v=w+g,v in b&&u(d,g,b[v]);if(d.length=r,n<r){for(g=w;g<y-r;g++)v=g+r,h=g+n,v in b?b[h]=b[v]:delete b[h];for(g=y;g>y-r+n;g--)delete b[g-1]}else if(n>r)for(g=y-r;g>w;g--)v=g+r-1,h=g+n-1,v in b?b[h]=b[v]:delete b[h];for(g=0;g<n;g++)b[g+w]=arguments[g+2];return b.length=y-r+n,d}})},a4d3:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),a=n("c430"),i=n("83ab"),s=n("4930"),c=n("d039"),u=n("5135"),d=n("e8b5"),f=n("861d"),l=n("825a"),p=n("7b0b"),m=n("fc6a"),g=n("c04e"),v=n("5c6c"),h=n("7c73"),b=n("df75"),y=n("241c"),w=n("057f"),_=n("7418"),x=n("06cf"),S=n("9bf2"),C=n("d1e7"),O=n("9112"),G=n("6eeb"),A=n("5692"),D=n("f772"),P=n("d012"),j=n("90e3"),E=n("b622"),N=n("c032"),$=n("746f"),k=n("d44e"),I=n("69f3"),J=n("b727").forEach,T=D("hidden"),F="Symbol",M="prototype",U=E("toPrimitive"),B=I.set,Q=I.getterFor(F),W=Object[M],q=o.Symbol,z=o.JSON,H=z&&z.stringify,K=x.f,L=S.f,R=w.f,V=C.f,X=A("symbols"),Y=A("op-symbols"),Z=A("string-to-symbol-registry"),tt=A("symbol-to-string-registry"),et=A("wks"),nt=o.QObject,rt=!nt||!nt[M]||!nt[M].findChild,ot=i&&c((function(){return 7!=h(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=K(W,e);r&&delete W[e],L(t,e,n),r&&t!==W&&L(W,e,r)}:L,at=function(t,e){var n=X[t]=h(q[M]);return B(n,{type:F,tag:t,description:e}),i||(n.description=e),n},it=s&&"symbol"==typeof q.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},st=function(t,e,n){t===W&&st(Y,e,n),l(t);var r=g(e,!0);return l(n),u(X,r)?(n.enumerable?(u(t,T)&&t[T][r]&&(t[T][r]=!1),n=h(n,{enumerable:v(0,!1)})):(u(t,T)||L(t,T,v(1,{})),t[T][r]=!0),ot(t,r,n)):L(t,r,n)},ct=function(t,e){l(t);var n=m(e),r=b(n).concat(pt(n));return J(r,(function(e){i&&!dt.call(n,e)||st(t,e,n[e])})),t},ut=function(t,e){return void 0===e?h(t):ct(h(t),e)},dt=function(t){var e=g(t,!0),n=V.call(this,e);return!(this===W&&u(X,e)&&!u(Y,e))&&(!(n||!u(this,e)||!u(X,e)||u(this,T)&&this[T][e])||n)},ft=function(t,e){var n=m(t),r=g(e,!0);if(n!==W||!u(X,r)||u(Y,r)){var o=K(n,r);return!o||!u(X,r)||u(n,T)&&n[T][r]||(o.enumerable=!0),o}},lt=function(t){var e=R(m(t)),n=[];return J(e,(function(t){u(X,t)||u(P,t)||n.push(t)})),n},pt=function(t){var e=t===W,n=R(e?Y:m(t)),r=[];return J(n,(function(t){!u(X,t)||e&&!u(W,t)||r.push(X[t])})),r};s||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=j(t),n=function(t){this===W&&n.call(Y,t),u(this,T)&&u(this[T],e)&&(this[T][e]=!1),ot(this,e,v(1,t))};return i&&rt&&ot(W,e,{configurable:!0,set:n}),at(e,t)},G(q[M],"toString",(function(){return Q(this).tag})),C.f=dt,S.f=st,x.f=ft,y.f=w.f=lt,_.f=pt,i&&(L(q[M],"description",{configurable:!0,get:function(){return Q(this).description}}),a||G(W,"propertyIsEnumerable",dt,{unsafe:!0})),N.f=function(t){return at(E(t),t)}),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:q}),J(b(et),(function(t){$(t)})),r({target:F,stat:!0,forced:!s},{for:function(t){var e=String(t);if(u(Z,e))return Z[e];var n=q(e);return Z[e]=n,tt[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(u(tt,t))return tt[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!i},{create:ut,defineProperty:st,defineProperties:ct,getOwnPropertyDescriptor:ft}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:lt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:c((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(p(t))}}),z&&r({target:"JSON",stat:!0,forced:!s||c((function(){var t=q();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}))},{stringify:function(t){var e,n,r=[t],o=1;while(arguments.length>o)r.push(arguments[o++]);if(n=e=r[1],(f(e)||void 0!==t)&&!it(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!it(e))return e}),r[1]=e,H.apply(z,r)}}),q[M][U]||O(q[M],U,q[M].valueOf),k(q,F),P[T]=!0},b0c0:function(t,e,n){var r=n("83ab"),o=n("9bf2").f,a=Function.prototype,i=a.toString,s=/^\s*function ([^ (]*)/,c="name";!r||c in a||o(a,c,{configurable:!0,get:function(){try{return i.call(this).match(s)[1]}catch(t){return""}}})},b727:function(t,e,n){var r=n("f8c2"),o=n("44ad"),a=n("7b0b"),i=n("50c4"),s=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,d=4==t,f=6==t,l=5==t||f;return function(p,m,g,v){for(var h,b,y=a(p),w=o(y),_=r(m,g,3),x=i(w.length),S=0,C=v||s,O=e?C(p,x):n?C(p,0):void 0;x>S;S++)if((l||S in w)&&(h=w[S],b=_(h,S,y),t))if(e)O[S]=b;else if(b)switch(t){case 3:return!0;case 5:return h;case 6:return S;case 2:c.call(O,h)}else if(d)return!1;return f?-1:u||d?d:O}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},b831:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("Grades")]),n("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:t.message.color},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.message.text)+" ")]),t.update?n("form",{on:{submit:function(e){return e.preventDefault(),t.updateGrade(t.updatedGrade)}}},[n("h3",[t._v("Update grade")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.updatedGrade.name,expression:"updatedGrade.name"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.updatedGrade.name},on:{input:function(e){e.target.composing||t.$set(t.updatedGrade,"name",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.updatedGrade.description,expression:"updatedGrade.description"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.updatedGrade.description},on:{input:function(e){e.target.composing||t.$set(t.updatedGrade,"description",e.target.value)}}}),n("b-button",{staticClass:"btn-warning my-2 mx-2",attrs:{type:"submit"}},[t._v("Confirm")]),n("b-button",{staticClass:"my-2",attrs:{type:"submit"},on:{click:function(e){t.update=!1}}},[t._v("Cancel")])],1):t._e(),t.update?t._e():n("form",{on:{submit:function(e){return e.preventDefault(),t.addGrade()}}},[n("h3",[t._v("Add new grade")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.grade.name,expression:"grade.name"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.grade.name},on:{input:function(e){e.target.composing||t.$set(t.grade,"name",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.grade.description,expression:"grade.description"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.grade.description},on:{input:function(e){e.target.composing||t.$set(t.grade,"description",e.target.value)}}}),n("b-button",{staticClass:"btn-success my-2 btn-block",attrs:{type:"submit"}},[t._v("Add")])],1),n("table",{staticClass:"table"},[t._m(0),n("tbody",t._l(t.grades,(function(e,r){return n("tr",{key:r},[n("th",{attrs:{scope:"row"}},[t._v(t._s(e._id))]),n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.description))]),n("td",[n("b-button",{staticClass:"btn-danger mx-2",on:{click:function(n){return t.deleteGrade(e._id)}}},[t._v("Delete")]),n("b-button",{staticClass:"btn-warning",on:{click:function(n){return t.activateEdition(e._id)}}},[t._v("Update")])],1)])})),0)])],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#")]),n("th",{attrs:{scope:"col"}},[t._v("Name")]),n("th",{attrs:{scope:"col"}},[t._v("Description")]),n("th",{attrs:{scope:"col"}},[t._v("Actions")])])])}],a=(n("a4d3"),n("e01a"),n("c740"),n("a434"),n("b0c0"),{data:function(){return{grades:[],message:{color:"",text:""},dismissSecs:5,dismissCountDown:0,grade:{name:"",description:""},update:!1,updatedGrade:{}}},created:function(){this.listGrades()},methods:{alert:function(){this.message.color="success",this.message.text="Proofing alert",this.showAlert()},listGrades:function(){var t=this;this.axios("/grade").then((function(e){console.log(e.data),t.grades=e.data})).catch((function(t){console.log(t.response)}))},addGrade:function(){var t=this;console.log(this.grade),this.axios.post("/new-grade",this.grade).then((function(e){t.grades.push(e.data),t.grade.name="",t.grade.description="",t.message.color="success",t.message.text="Added grade",t.showAlert()})).catch((function(e){console.log(e.response),e.response.data.error.errors.name.message?t.message.text=e.response.data.error.errors.name.message:t.message.text="System error",t.message.color="danger",t.showAlert()}))},deleteGrade:function(t){var e=this;console.log(t),this.axios.delete("/grade/".concat(t)).then((function(t){var n=e.grades.findIndex((function(e){return e._id===t.data._id}));e.grades.splice(n,1),e.message.color="success",e.message.text="Deleted grade",e.showAlert()})).catch((function(t){console.log(t.response)}))},activateEdition:function(t){var e=this;this.update=!0,console.log(t),this.axios.get("/grade/".concat(t)).then((function(t){e.updatedGrade=t.data})).catch((function(t){console.log(t.response)}))},updateGrade:function(t){var e=this;this.axios.put("/grade/".concat(t._id),t).then((function(t){var n=e.grades.findIndex((function(e){return e._id===t.data._id}));e.grades[n].name=t.data.name,e.grades[n].description=t.data.description,e.message.color="success",e.message.text="Updated grade",e.showAlert(),e.update=!1})).catch((function(t){console.log(t.response)}))},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}}}),i=a,s=n("2877"),c=Object(s["a"])(i,r,o,!1,null,null,null);e["default"]=c.exports},c032:function(t,e,n){e.f=n("b622")},c740:function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").findIndex,a=n("44d2"),i="findIndex",s=!0;i in[]&&Array(1)[i]((function(){s=!1})),r({target:"Array",proto:!0,forced:s},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),a(i)},e01a:function(t,e,n){"use strict";var r=n("23e7"),o=n("83ab"),a=n("da84"),i=n("5135"),s=n("861d"),c=n("9bf2").f,u=n("e893"),d=a.Symbol;if(o&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var f={},l=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof l?new d(t):void 0===t?d():d(t);return""===t&&(f[e]=!0),e};u(l,d);var p=l.prototype=d.prototype;p.constructor=l;var m=p.toString,g="Symbol(test)"==String(d("test")),v=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=m.call(t);if(i(f,t))return"";var n=g?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:l})}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},f820:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],a=n("2877"),i={},s=Object(a["a"])(i,r,o,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=about.abe096cd.js.map