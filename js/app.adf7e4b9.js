(function(t){function e(e){for(var r,i,o=e[0],u=e[1],c=e[2],f=0,p=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/newsfacts/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0022":function(t,e,n){"use strict";n("c022")},"034f":function(t,e,n){"use strict";n("85ec")},"119a":function(t,e,n){},1360:function(t,e,n){},"246d":function(t,e,n){"use strict";n("119a")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=(n("d3b7"),n("bc3a")),s=n.n(a),i={},o=s.a.create(i);o.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),o.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){return t.axios=o,window.axios=o,Object.defineProperties(t.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}}),e},r["a"].use(Plugin);Plugin;var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("NavBar",{attrs:{appname:"Newsfacts"}}),n("router-view",{attrs:{id:"page"}})],1)],1)},c=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"bar"}},[n("v-toolbar",{attrs:{id:"navbar",app:"",color:"#7d4bde",dark:""}},[n("v-toolbar-title",{attrs:{id:"appname"}},[t._v(t._s(t.appname))]),n("v-spacer"),n("span",t._l(t.items,(function(e){return n("router-link",{key:e.link,staticClass:"nav-elt",attrs:{"active-class":"",tag:"span",to:e.link}},[t._v(" "+t._s(e.title.toUpperCase())+" ")])})),1)],1)],1)},f=[],p={name:"NavBar",props:{appname:String},data:function(){return{items:[{title:"Home",link:"/"},{title:"Sites",link:"/sites"}]}}},v=p,d=(n("0022"),n("2877")),m=n("6544"),h=n.n(m),b=n("2fa4"),_=n("71d9"),g=n("2a7f"),w=Object(d["a"])(v,l,f,!1,null,"c0d4021c",null),y=w.exports;h()(w,{VSpacer:b["a"],VToolbar:_["a"],VToolbarTitle:g["a"]});var O={name:"App",components:{NavBar:y},created:function(){this.$store.commit("refreshData")}},j=O,$=(n("034f"),n("7496")),x=n("f6c4"),S=Object(d["a"])(j,u,c,!1,null,null,null),k=S.exports;h()(S,{VApp:$["a"],VMain:x["a"]});var P=n("f309");r["a"].use(P["a"]);var E=new P["a"]({}),T=n("8c4f"),C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",{staticClass:"page-title"},[t._v("Home")])])}],N={name:"Home",components:{}},R=N,V=Object(d["a"])(R,C,D,!1,null,"2721d804",null),M=V.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",{staticClass:"page-title"},[t._v("Sites")]),n("refresh",{attrs:{id:"refresh"}}),t._l(t.sites,(function(e){return n("router-link",{key:e.name,staticClass:"site",attrs:{tag:"div",to:"/sites/"+e.route}},[n("h1",[t._v(t._s(e.name))])])}))],2)},H=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{flat:"",id:"refresh",color:"#330055"},on:{click:t.refreshData}},[t._v("Refresh ")])},J=[],U={name:"Refresh",methods:{refreshData:function(){this.$store.commit("refreshData")}}},q=U,F=(n("ca03"),n("8336")),I=Object(d["a"])(q,A,J,!1,null,"6e1e9e13",null),z=I.exports;h()(I,{VBtn:F["a"]});var G={name:"Sites",components:{Refresh:z},computed:{sites:function(){return this.$store.state.newssite},votes:function(){return this.$store.state.vote},dimensions:function(){return this.$store.state.dimension},people:function(){return this.$store.state.person}}},K=G,L=(n("64e3"),Object(d["a"])(K,B,H,!1,null,"279e4c30",null)),Q=L.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",{key:t.site.name,staticClass:"page-title"},[t._v(" "+t._s(null!=t.site?t.site.name:"ERROR: SITE NOT FOUND")+" ")])])},X=[],Y=(n("4de4"),{name:"SitePage",computed:{site:function(){var t=this;return this.$store.state.newssite.filter((function(e){return e.route==t.$route.params.site}))[0]}}}),Z=Y,tt=(n("246d"),Object(d["a"])(Z,W,X,!1,null,"732ab768",null)),et=tt.exports;r["a"].use(T["a"]);var nt=new T["a"]({routes:[{path:"/",name:"Home",component:M},{path:"/sites",name:"Sites",component:Q},{path:"/sites/:site",name:"Site",component:et}]}),rt=n("2f62");r["a"].use(rt["a"]);var at=new rt["a"].Store({state:{dimension:[],newssite:[],vote:[],person:[]},mutations:{refreshData:function(){for(var t=this,e=function(){var e=r[n];s.a.get("http://localhost:3000/".concat(e)).then((function(n){t.state[e]=n.data}))},n=0,r=["dimension","newssite","vote","person"];n<r.length;n++)e()}}});r["a"].config.productionTip=!1,new r["a"]({vuetify:E,router:nt,store:at,render:function(t){return t(k)}}).$mount("#app")},"64e3":function(t,e,n){"use strict";n("e6df")},"85ec":function(t,e,n){},c022:function(t,e,n){},ca03:function(t,e,n){"use strict";n("1360")},e6df:function(t,e,n){}});
//# sourceMappingURL=app.adf7e4b9.js.map