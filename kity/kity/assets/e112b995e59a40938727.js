(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{14:function(t,e,n){"use strict";n.d(e,"i",function(){return d}),n.d(e,"j",function(){return h}),n.d(e,"a",function(){return m}),n.d(e,"o",function(){return v}),n.d(e,"e",function(){return y}),n.d(e,"f",function(){return x}),n.d(e,"c",function(){return j}),n.d(e,"n",function(){return _}),n.d(e,"h",function(){return w}),n.d(e,"p",function(){return C}),n.d(e,"k",function(){return O}),n.d(e,"m",function(){return E}),n.d(e,"d",function(){return R}),n.d(e,"b",function(){return S}),n.d(e,"g",function(){return T}),n.d(e,"l",function(){return N});var r=n(562),o=(n(593),n(594),n(595),n(87)),c=(n(597),n(599),n(600),n(603),n(275),n(120),n(27)),l=(n(250),n(176),n(93),n(270),n(177),n(44)),f=n(8);function d(t){f.default.config.errorHandler&&f.default.config.errorHandler(t)}function h(t){return t.then(function(t){return t.default||t})}function m(t,e){if(e||!t.options.__hasNuxtData){var n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){var data=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),Object(l.a)({},data,e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function v(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=f.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function y(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function x(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}function j(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function _(t){return Promise.all(j(t,function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=v(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}},t)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function w(t){return k.apply(this,arguments)}function k(){return(k=Object(c.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,_(e);case 4:return t.abrupt("return",Object(l.a)({},e,{meta:y(e).map(function(t,n){return Object(l.a)({},t.options.meta,(e.matched[n]||{}).meta)})}));case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}function C(t,e){return $.apply(this,arguments)}function $(){return($=Object(c.a)(regeneratorRuntime.mark(function t(e,n){var c,l,f,d;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),n.ssrContext&&(e.context.ssrContext=n.ssrContext),e.context.redirect=function(t,path,n){if(t){e.context._redirected=!0;var r=Object(o.a)(path);if("number"==typeof t||"undefined"!==r&&"object"!==r||(n=path||{},path=t,r=Object(o.a)(path),t=302),"object"===r&&(path=e.router.resolve(path).route.fullPath),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=M(path,n),window.location.replace(path),new Error("ERR_REDIRECT");e.context.next({path:path,query:n,status:t})}},e.context.nuxtState=window.__NUXT__),t.next=3,Promise.all([w(n.route),w(n.from)]);case 3:c=t.sent,l=Object(r.a)(c,2),f=l[0],d=l[1],n.route&&(e.context.route=f),n.from&&(e.context.from=d),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{};case 15:case"end":return t.stop()}},t)}))).apply(this,arguments)}function O(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():E(t[0],e).then(function(){return O(t.slice(1),e)})}function E(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,data){t&&e.error(t),n(data=data||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function R(base,t){var path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}function S(t,e){return function(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"===Object(o.a)(t[i])&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){for(var path="",data=n||{},o=r||{},c=o.pretty?A:encodeURIComponent,l=0;l<t.length;l++){var f=t[l];if("string"!=typeof f){var d=data[f.name||"pathMatch"],h=void 0;if(null==d){if(f.optional){f.partial&&(path+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(d)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(d)+"`");if(0===d.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var m=0;m<d.length;m++){if(h=c(d[m]),!e[l].test(h))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(h)+"`");path+=(0===m?f.prefix:f.delimiter)+h}}else{if(h=f.asterisk?encodeURI(d).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):c(d),!e[l].test(h))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+h+'"');path+=f.prefix+h}}else path+=f}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",l=e&&e.delimiter||"/";for(;null!=(n=P.exec(t));){var f=n[0],d=n[1],h=n.index;if(path+=t.slice(c,h),c=h+f.length,d)path+=d[1];else{var m=t[c],v=n[2],y=n[3],x=n[4],j=n[5],_=n[6],w=n[7];path&&(r.push(path),path="");var k=null!=v&&null!=m&&m!==v,C="+"===_||"*"===_,$="?"===_||"*"===_,O=n[2]||l,pattern=x||j;r.push({name:y||o++,prefix:v||"",delimiter:O,optional:$,repeat:C,partial:k,asterisk:!!w,pattern:pattern?z(pattern):w?".*":"[^"+L(O)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e))}function T(t,e){var n={},r=Object(l.a)({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function N(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return Object(l.a)({},t,{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var P=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function A(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function L(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function z(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function M(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,c=t.split("/"),l=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");return 2===(c=path.split("#")).length&&(path=c[0],o=c[1]),l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),l+=o?"#"+o:""}},161:function(t,e,n){},162:function(t,e,n){},163:function(module,__webpack_exports__,__webpack_require__){"use strict";var code_box=__webpack_require__(611),that;__webpack_exports__.a={props:{code_src:"",code_key:""},data:function(){return that=this,{code_option:{tabSize:4,mode:"text/javascript",theme:"base16-dark",lineNumbers:!0,line:!0},code_data:this.code_src,code_fullscreen:!1}},methods:{code_change:function(code){this.code_data=code},code_copy:function(t){this.$copyText(this.code_data).then(function(t){that.$message.success("复制成功!")},function(t){that.$message.error("复制失败!")})},code_run:function code_run(){document.getElementById("code_result").innerHTML="",eval(this.code_data)}}}},165:function(t,e,n){"use strict";n(259),n(262),n(176),n(264),n(266);var r=n(8),o=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},c=window.IntersectionObserver&&new window.IntersectionObserver(function(t){t.forEach(function(t){var e=t.intersectionRatio,link=t.target;e<=0||link.__prefetch()})});e.a={name:"NuxtLink",extends:r.default.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}},mounted:function(){this.noPrefetch||o(this.observe,{timeout:2e3})},beforeDestroy:function(){this.__observed&&(c.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe:function(){c&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetch.bind(this),c.observe(this.$el),this.__observed=!0)},shouldPrefetch:function(){return this.getPrefetchComponents().length>0},canPrefetch:function(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents:function(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map(function(t){return t.components.default}).filter(function(t){return"function"==typeof t&&!t.options&&!t.__prefetched})},prefetch:function(){if(this.canPrefetch()){c.unobserve(this.$el);var t=this.getPrefetchComponents(),e=!0,n=!1,r=void 0;try{for(var o,l=t[Symbol.iterator]();!(e=(o=l.next()).done);e=!0){var f=o.value;try{f(),f.__prefetched=!0}catch(t){}}}catch(t){n=!0,r=t}finally{try{e||null==l.return||l.return()}finally{if(n)throw r}}}}}}},246:function(t,e,n){"use strict";e.a={}},248:function(t,e){"serviceWorker"in navigator?navigator.serviceWorker.register("/sw.js",{scope:"/"}).then(function(t){window.$sw=t}).catch(function(t){console.error("Service worker registration failed:",t)}):console.warn("Service workers are not supported.")},249:function(t,e,n){"use strict";var r=n(163).a,o=n(60),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("no-ssr",[n("div",{class:["code_box_wrap",t.code_fullscreen?"full":""]},[n("codemirror",{staticClass:"code_box",attrs:{value:t.code_src,options:t.code_option},on:{input:t.code_change}}),t._v(" "),n("a-button-group",{staticClass:"code_src_opt",attrs:{size:"small"}},[n("a-tooltip",{attrs:{title:t.code_fullscreen?"退出全屏编辑":"全屏编辑"}},[n("a-button",{attrs:{icon:t.code_fullscreen?"fullscreen-exit":"fullscreen"},on:{click:function(e){t.code_fullscreen=!t.code_fullscreen}}})],1),t._v(" "),n("a-tooltip",{attrs:{title:"复制代码"}},[n("a-button",{attrs:{icon:"copy"},on:{click:t.code_copy}})],1),t._v(" "),n("a-tooltip",{attrs:{title:"运行代码"}},[n("a-button",{attrs:{icon:"caret-right"},on:{click:t.code_run}})],1)],1)],1)])},[],!1,null,null,null);e.a=component.exports},556:function(t){t.exports={start:{title:"开始",child:{install:"安装"}},summary:{title:"框架概要",child:{core:"核心介绍",animate:"动画介绍",filter:"滤镜介绍",graphic:"图形介绍"}}}},563:function(t,e,n){t.exports=n(564)},564:function(t,e,n){"use strict";n.r(e),function(t){n(250),n(259),n(262);var e=n(87),r=(n(120),n(574),n(27)),o=(n(264),n(266),n(176),n(93),n(270),n(177),n(269),n(578),n(590),n(592),n(8)),c=n(553),l=n(246),f=n(14),d=n(71),h=n(165);o.default.component(h.a.name,h.a),o.default.component("NLink",h.a),t.fetch||(t.fetch=c.a);var m,v,y=[],x=window.__NUXT__||{};Object.assign(o.default.config,{silent:!0,performance:!1});var j=o.default.config.errorHandler||console.error;function _(t,e,n){var r=function(component){var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];return option.apply(void 0,n)}return option}(component,"transition",e,n)||{};return"string"==typeof t?{name:t}:t};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function w(t,e,n){return k.apply(this,arguments)}function k(){return(k=Object(r.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,l,d,h=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!m.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?Object(f.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,Object(f.n)(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return h._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=23;break;case 12:if(t.prev=12,t.t0=t.catch(4),c=t.t0||{},l=c.statusCode||c.status||c.response&&c.response.status||500,d=c.message||"",!/^Loading( CSS)? chunk (\d)+ failed\./.test(d)){t.next=20;break}return window.location.reload(!0),t.abrupt("return");case 20:this.error({statusCode:l,message:d}),this.$nuxt.$emit("routeChanged",e,n,c),r();case 23:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function C(t,e){return x.serverRendered&&e&&Object(f.a)(t,e),t._Ctor=t,t}function $(t){var path=Object(f.d)(t.options.base,t.options.mode);return Object(f.c)(t.match(path),function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e,n,r,o,c){var l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return l=C(Object(f.o)(e),x.data?x.data[c]:null),r.components[o]=l,t.abrupt("return",l);case 7:case"end":return t.stop()}},t)}));return function(e,n,r,o,c){return t.apply(this,arguments)}}())}function O(t,e,n){var r=this,o=[],c=!1;if(void 0!==n&&(o=[],(n=Object(f.o)(n)).options.middleware&&(o=o.concat(n.options.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof l.a[t]&&(c=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),l.a[t])}),!c)return Object(f.k)(o,e)}function E(t,e,n){return R.apply(this,arguments)}function R(){return(R=Object(r.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,l,h,v,x,j,w,k,C,$,E,R,S,T,N,P=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return e===n?y=[]:(o=[],y=Object(f.e)(n,o).map(function(t,i){return Object(f.b)(n.matched[o[i]].path)(n.params)})),c=!1,l=function(path){n.path===path.path&&P.$loading.finish&&P.$loading.finish(),n.path!==path.path&&P.$loading.pause&&P.$loading.pause(),c||(c=!0,r(path))},t.next=7,Object(f.p)(m,{route:e,from:n,next:l.bind(this)});case 7:if(this._dateLastError=m.nuxt.dateErr,this._hadError=!!m.nuxt.err,h=[],(v=Object(f.e)(e,h)).length){t.next=25;break}return t.next=14,O.call(this,v,m.context);case 14:if(!c){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof d.a.layout?d.a.layout(m.context):d.a.layout);case 18:return x=t.sent,t.next=21,O.call(this,v,m.context,x);case 21:if(!c){t.next=23;break}return t.abrupt("return");case 23:return m.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return v.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(_(v,e,n)),t.prev=27,t.next=30,O.call(this,v,m.context);case 30:if(!c){t.next=32;break}return t.abrupt("return");case 32:if(!m.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(j=v[0].options.layout)&&(j=j(m.context)),t.next=38,this.loadLayout(j);case 38:return j=t.sent,t.next=41,O.call(this,v,m.context,j);case 41:if(!c){t.next=43;break}return t.abrupt("return");case 43:if(!m.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:w=!0,t.prev=46,k=!0,C=!1,$=void 0,t.prev=50,E=v[Symbol.iterator]();case 52:if(k=(R=E.next()).done){t.next=64;break}if("function"==typeof(S=R.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,S.options.validate(m.context);case 58:if(w=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:k=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),C=!0,$=t.t0;case 70:t.prev=70,t.prev=71,k||null==E.return||E.return();case 73:if(t.prev=73,!C){t.next=76;break}throw $;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(w){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(v.map(function(t,i){if(t._path=Object(f.b)(e.matched[h[i]].path)(e.params),t._dataRefresh=!1,P._pathChanged&&P._queryChanged||t._path!==y[i])t._dataRefresh=!0;else if(!P._pathChanged&&P._queryChanged){var n=t.options.watchQuery;!0===n?t._dataRefresh=!0:Array.isArray(n)&&(t._dataRefresh=n.some(function(t){return P._diffQuery[t]}))}if(!P._hadError&&P._isMounted&&!t._dataRefresh)return Promise.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,c=!!t.options.fetch,l=o&&c?30:45;if(o){var d=Object(f.m)(t.options.asyncData,m.context).then(function(e){Object(f.a)(t,e),P.$loading.increase&&P.$loading.increase(l)});r.push(d)}if(P.$loading.manual=!1===t.options.loading,c){var p=t.options.fetch(m.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){P.$loading.increase&&P.$loading.increase(l)}),r.push(p)}return Promise.all(r)}));case 89:c||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(T=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,T));case 97:return y=[],Object(f.i)(T),"function"==typeof(N=d.a.layout)&&(N=N(m.context)),t.next=103,this.loadLayout(N);case 103:this.error(T),this.$nuxt.$emit("routeChanged",e,n,T),r();case 106:case"end":return t.stop()}},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function S(t,n){Object(f.c)(t,function(t,n,r,c){return"object"!==Object(e.a)(t)||t.options||((t=o.default.extend(t))._Ctor=t,r.components[c]=t),t})}function T(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?d.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(m.context)),this.setLayout(e)}function N(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||o.default.nextTick(function(){var e=[],r=Object(f.f)(t,e),c=Object(f.e)(t,e);r.forEach(function(t,i){if(t&&t.constructor._dataRefresh&&c[i]===t.constructor&&!0!==t.$vnode.data.keepAlive&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var n in e)o.default.set(t.$data,n,e[n])}}),T.call(n,t)})}function P(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),v.afterEach(function(e,n){o.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function A(){return(A=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,c,l,d;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return m=e.app,v=e.router,t.next=4,Promise.all($(v));case 4:return n=t.sent,r=new o.default(m),c=x.layout||"default",t.next=9,r.loadLayout(c);case 9:if(r.setLayout(c),l=function(){r.$mount("#__nuxt"),v.afterEach(S),v.afterEach(N.bind(r)),o.default.nextTick(function(){P(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(_(n,v.currentRoute)),y=v.currentRoute.matched.map(function(t){return Object(f.b)(t.path)(v.currentRoute.params)})),r.$loading={},x.error&&r.error(x.error),v.beforeEach(w.bind(r)),v.beforeEach(E.bind(r)),!x.serverRendered){t.next=20;break}return l(),t.abrupt("return");case 20:d=function(){S(v.currentRoute,v.currentRoute),T.call(r,v.currentRoute),l()},E.call(r,v.currentRoute,v.currentRoute,function(path){if(path){var t=v.afterEach(function(e,n){t(),d()});v.push(path,void 0,function(t){t&&j(t)})}else d()});case 22:case"end":return t.stop()}},t)}))).apply(this,arguments)}Object(d.b)().then(function(t){return A.apply(this,arguments)}).catch(function(t){var e=new Error(t);e.message="[nuxt] Error while mounting app: "+e.message,j(e)})}.call(this,n(37))},606:function(t,e,n){"use strict";var r=n(161);n.n(r).a},607:function(t,e,n){"use strict";var r=n(162);n.n(r).a},610:function(t,e,n){},71:function(t,e,n){"use strict";n(93);var r=n(44),o=(n(120),n(27)),c=(n(177),n(8)),l=n(554),f=n.n(l),d=n(247),h=n(14),m=function(){return Object(h.j)(Promise.all([n.e(0),n.e(4)]).then(n.bind(null,1403)))},v=function(){return Object(h.j)(Promise.all([n.e(0),n.e(3)]).then(n.bind(null,1404)))};c.default.use(d.a),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",function(){window.history.scrollRestoration="auto"}),window.addEventListener("load",function(){window.history.scrollRestoration="manual"}));var y=function(t,e,n){var r=!1;return t.matched.length<2&&t.matched.every(function(t){return!1!==t.components.default.options.scrollToTop})?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var x=n(555),j=n.n(x),_=Object(r.a)({},j.a,{name:"NoSsr"}),w={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render:function(t,e){var n=e.parent,data=e.data,r=e.props;data.nuxtChild=!0;for(var o=n,c=n.$nuxt.nuxt.transitions,l=n.$nuxt.nuxt.defaultTransition,f=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&f++,n=n.$parent;data.nuxtChildDepth=f;var d=c[f]||l,h={};k.forEach(function(t){void 0!==d[t]&&(h[t]=d[t])});var m={};C.forEach(function(t){"function"==typeof d[t]&&(m[t]=d[t].bind(o))});var v=m.beforeEnter;m.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),v)return v.call(o,t)};var y=[t("router-view",data)];return r.keepAlive&&(y=[t("keep-alive",{props:r.keepAliveProps},y)]),t("transition",{props:h,on:m},y)}},k=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],C=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],$={name:"NuxtError",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},O=(n(606),n(60)),E=Object(O.a)($,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,R={name:"Nuxt",components:{NuxtChild:w,NuxtError:E},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(h.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},beforeCreate:function(){c.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render:function(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},S={name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},T=(n(607),Object(O.a)(S,void 0,void 0,!1,null,null,null).exports),N=(n(608),n(609),n(610),n(249)),P=n(556),A={data:function(){return{collapsed:!1,left_menu:P}}},L=Object(O.a)(A,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-layout",[n("a-layout-header",{staticClass:"header"},[t._v("\n    DEMO\n  ")]),t._v(" "),n("a-layout",[n("a-layout-sider",{staticStyle:{background:"#fff"},attrs:{width:"180"}},[n("a-menu",{style:{height:"100%",borderRight:0},attrs:{mode:"inline",defaultSelectedKeys:["install"],defaultOpenKeys:["start"]}},t._l(t.left_menu,function(e,r){return n("a-sub-menu",{key:r},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))]),t._v(" "),t._l(e.child,function(e,r){return n("a-menu-item",{key:r},[t._v("\n            "+t._s(e)+"\n          ")])})],2)}),1)],1),t._v(" "),n("a-layout",{staticStyle:{padding:"0 24px 24px"}},[n("nuxt")],1)],1)],1)},[],!1,null,null,null).exports,z={_code_box:N.a,_default:L},M={head:{title:"kity-demo",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"kity lib help"},{hid:"mobile-web-app-capable",name:"mobile-web-app-capable",content:"yes"},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:"kity-demo"},{hid:"author",name:"author",content:"hunkxia"},{hid:"theme-color",name:"theme-color",content:"#fff"},{hid:"og:type",name:"og:type",property:"og:type",content:"website"},{hid:"og:title",name:"og:title",property:"og:title",content:"kity-demo"},{hid:"og:site_name",name:"og:site_name",property:"og:site_name",content:"kity-demo"},{hid:"og:description",name:"og:description",property:"og:description",content:"kity lib help"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"manifest",href:"/kity/assets/manifest.e28464b2.json"},{rel:"shortcut icon",href:"/kity/assets/icons/icon_64.9mld2VBMsQ$.png"},{rel:"apple-touch-icon",href:"/kity/assets/icons/icon_512.9mld2VBMsQ$.png",sizes:"512x512"}],script:[{src:"/js/kity.min.js"}],style:[],htmlAttrs:{lang:"en"}},render:function(t,e){var n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:function(){return{isOnline:!0,layout:null,layoutName:""}},beforeCreate:function(){c.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){c.default.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline:function(){return!this.isOnline}},methods:{refreshOnlineStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&z["_"+t]||(t="default"),this.layoutName=t,this.layout=z["_"+t],this.layout},loadLayout:function(t){return t&&z["_"+t]||(t="default"),Promise.resolve(z["_"+t])}},components:{NuxtLoading:T}},D=n(248),B=n.n(D),I=(n(275),function(t,e){return Q.apply(this,arguments)});function Q(){return(Q=Object(o.a)(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n((r={accessibleIcons:!0,iconProperty:"$icon",icons:{64:"/kity/assets/icons/icon_64.9mld2VBMsQ$.png",120:"/kity/assets/icons/icon_120.9mld2VBMsQ$.png",144:"/kity/assets/icons/icon_144.9mld2VBMsQ$.png",152:"/kity/assets/icons/icon_152.9mld2VBMsQ$.png",192:"/kity/assets/icons/icon_192.9mld2VBMsQ$.png",384:"/kity/assets/icons/icon_384.9mld2VBMsQ$.png",512:"/kity/assets/icons/icon_512.9mld2VBMsQ$.png"}}).iconProperty.replace("$",""),U(r.icons));case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}var U=function(t){return function(e){return t[e]||""}},V=n(557),K=n.n(V),J=function(){c.default.use(K.a)},H=n(559),F=n.n(H);c.default.component("vue-markdown",F.a);var W=n(560),G=n.n(W);c.default.use(G.a);n(1370),n(1371);var X=n(1372);c.default.use(X);var Y=n(561),Z=n.n(Y);c.default.use(Z.a),n.d(e,"b",function(){return et}),n.d(e,"a",function(){return E}),c.default.component(_.name,_),c.default.component(w.name,w),c.default.component("NChild",w),c.default.component(R.name,R),c.default.use(f.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var tt={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function et(t){return nt.apply(this,arguments)}function nt(){return(nt=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,o,l,f,path,x;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new d.a({mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:y,routes:[{path:"/index.1",component:m,name:"index.1"},{path:"/",component:v,name:"index"}],fallback:!1});case 2:return n=t.sent,o=Object(r.a)({router:n,nuxt:{defaultTransition:tt,transitions:[tt],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},tt,{name:t}):Object.assign({},tt,t):tt}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,o.context._errored=!!t,t=t?Object(h.l)(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},M),l=e?e.next:function(t){return o.router.push(t)},e?f=n.resolve(e.url).route:(path=Object(h.d)(n.options.base),f=n.resolve(path).route),t.next=8,Object(h.p)(o,{route:f,next:l,error:o.nuxt.error.bind(o),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0,ssrContext:e});case 8:if(x=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");o[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";c.default[n]||(c.default[n]=!0,c.default.use(function(){c.default.prototype.hasOwnProperty(t)||Object.defineProperty(c.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},"function"!=typeof B.a){t.next=12;break}return t.next=12,B()(o.context,x);case 12:if("function"!=typeof I){t.next=15;break}return t.next=15,I(o.context,x);case 15:if("function"!=typeof J){t.next=18;break}return t.next=18,J(o.context,x);case 18:t.next=21;break;case 21:t.next=24;break;case 24:t.next=27;break;case 27:t.next=30;break;case 30:t.next=33;break;case 33:return t.abrupt("return",{app:o,router:n});case 34:case"end":return t.stop()}},t)}))).apply(this,arguments)}},767:function(t,e,n){var map={"./af":332,"./af.js":332,"./ar":333,"./ar-dz":334,"./ar-dz.js":334,"./ar-kw":335,"./ar-kw.js":335,"./ar-ly":336,"./ar-ly.js":336,"./ar-ma":337,"./ar-ma.js":337,"./ar-sa":338,"./ar-sa.js":338,"./ar-tn":339,"./ar-tn.js":339,"./ar.js":333,"./az":340,"./az.js":340,"./be":341,"./be.js":341,"./bg":342,"./bg.js":342,"./bm":343,"./bm.js":343,"./bn":344,"./bn.js":344,"./bo":345,"./bo.js":345,"./br":346,"./br.js":346,"./bs":347,"./bs.js":347,"./ca":348,"./ca.js":348,"./cs":349,"./cs.js":349,"./cv":350,"./cv.js":350,"./cy":351,"./cy.js":351,"./da":352,"./da.js":352,"./de":353,"./de-at":354,"./de-at.js":354,"./de-ch":355,"./de-ch.js":355,"./de.js":353,"./dv":356,"./dv.js":356,"./el":357,"./el.js":357,"./en-SG":358,"./en-SG.js":358,"./en-au":359,"./en-au.js":359,"./en-ca":360,"./en-ca.js":360,"./en-gb":361,"./en-gb.js":361,"./en-ie":362,"./en-ie.js":362,"./en-il":363,"./en-il.js":363,"./en-nz":364,"./en-nz.js":364,"./eo":365,"./eo.js":365,"./es":366,"./es-do":367,"./es-do.js":367,"./es-us":368,"./es-us.js":368,"./es.js":366,"./et":369,"./et.js":369,"./eu":370,"./eu.js":370,"./fa":371,"./fa.js":371,"./fi":372,"./fi.js":372,"./fo":373,"./fo.js":373,"./fr":374,"./fr-ca":375,"./fr-ca.js":375,"./fr-ch":376,"./fr-ch.js":376,"./fr.js":374,"./fy":377,"./fy.js":377,"./ga":378,"./ga.js":378,"./gd":379,"./gd.js":379,"./gl":380,"./gl.js":380,"./gom-latn":381,"./gom-latn.js":381,"./gu":382,"./gu.js":382,"./he":383,"./he.js":383,"./hi":384,"./hi.js":384,"./hr":385,"./hr.js":385,"./hu":386,"./hu.js":386,"./hy-am":387,"./hy-am.js":387,"./id":388,"./id.js":388,"./is":389,"./is.js":389,"./it":390,"./it-ch":391,"./it-ch.js":391,"./it.js":390,"./ja":392,"./ja.js":392,"./jv":393,"./jv.js":393,"./ka":394,"./ka.js":394,"./kk":395,"./kk.js":395,"./km":396,"./km.js":396,"./kn":397,"./kn.js":397,"./ko":398,"./ko.js":398,"./ku":399,"./ku.js":399,"./ky":400,"./ky.js":400,"./lb":401,"./lb.js":401,"./lo":402,"./lo.js":402,"./lt":403,"./lt.js":403,"./lv":404,"./lv.js":404,"./me":405,"./me.js":405,"./mi":406,"./mi.js":406,"./mk":407,"./mk.js":407,"./ml":408,"./ml.js":408,"./mn":409,"./mn.js":409,"./mr":410,"./mr.js":410,"./ms":411,"./ms-my":412,"./ms-my.js":412,"./ms.js":411,"./mt":413,"./mt.js":413,"./my":414,"./my.js":414,"./nb":415,"./nb.js":415,"./ne":416,"./ne.js":416,"./nl":417,"./nl-be":418,"./nl-be.js":418,"./nl.js":417,"./nn":419,"./nn.js":419,"./pa-in":420,"./pa-in.js":420,"./pl":421,"./pl.js":421,"./pt":422,"./pt-br":423,"./pt-br.js":423,"./pt.js":422,"./ro":424,"./ro.js":424,"./ru":425,"./ru.js":425,"./sd":426,"./sd.js":426,"./se":427,"./se.js":427,"./si":428,"./si.js":428,"./sk":429,"./sk.js":429,"./sl":430,"./sl.js":430,"./sq":431,"./sq.js":431,"./sr":432,"./sr-cyrl":433,"./sr-cyrl.js":433,"./sr.js":432,"./ss":434,"./ss.js":434,"./sv":435,"./sv.js":435,"./sw":436,"./sw.js":436,"./ta":437,"./ta.js":437,"./te":438,"./te.js":438,"./tet":439,"./tet.js":439,"./tg":440,"./tg.js":440,"./th":441,"./th.js":441,"./tl-ph":442,"./tl-ph.js":442,"./tlh":443,"./tlh.js":443,"./tr":444,"./tr.js":444,"./tzl":445,"./tzl.js":445,"./tzm":446,"./tzm-latn":447,"./tzm-latn.js":447,"./tzm.js":446,"./ug-cn":448,"./ug-cn.js":448,"./uk":449,"./uk.js":449,"./ur":450,"./ur.js":450,"./uz":451,"./uz-latn":452,"./uz-latn.js":452,"./uz.js":451,"./vi":453,"./vi.js":453,"./x-pseudo":454,"./x-pseudo.js":454,"./yo":455,"./yo.js":455,"./zh-cn":456,"./zh-cn.js":456,"./zh-hk":457,"./zh-hk.js":457,"./zh-tw":458,"./zh-tw.js":458};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=767}},[[563,5,2,6]]]);