webpackJsonp([0],{"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},R4wc:function(t,e,r){var n=r("kM2E");n(n.S+n.F,"Object",{assign:r("To3L")})},SldL:function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u="object"==typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=x;var f="suspendedStart",h="suspendedYield",p="executing",v="completed",d={},y={};y[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(R([])));m&&m!==n&&o.call(m,a)&&(y=m);var w=k.prototype=b.prototype=Object.create(y);L.prototype=w.constructor=k,k.constructor=L,k[c]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},E(O.prototype),O.prototype[s]=function(){return this},l.AsyncIterator=O,l.async=function(t,e,r,n){var o=new O(x(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},E(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=R,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return s.type="throw",s.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:R(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}}}function x(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),a=new F(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return G()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=j(a,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=_(t,e,r);if("normal"===c.type){if(n=r.done?v:h,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=v,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function _(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function b(){}function L(){}function k(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function O(t){var e;this._invoke=function(r,n){function i(){return new Promise(function(e,i){!function e(r,n,i,a){var s=_(t[r],t,n);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){c.value=t,i(c)},a)}a(s.arg)}(r,n,e,i)})}return e=e?e.then(i,i):i()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=_(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function R(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:G}}function G(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},TGvd:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Xxa5"),o=r.n(n),i=r("exGp"),a=r.n(i),s=r("woOf"),c=r.n(s),u=r("kxiW"),l=r.n(u),f={name:"Dashboard",data:function(){return{e1:c()(1,this.$store.state.user).onLevel,steps:5,win:!1,userAnswer:"",dialog:!1}},computed:{userLevel:function(){return this.$store.state.user.onLevel}},watch:{steps:function(t){this.e1>t&&(this.e1=t,this.$store.dispatch("setLevel",t))}},methods:{answers:function(t){var e=this;return a()(o.a.mark(function t(){var r,n,i,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=101,n=l.a.database().ref("scores/1"),i=n.once("value",function(t){return r=t.val(),console.log("In answers functions "+r),r}),console.log("After promises "+r),t.next=6,i;case 6:return a=t.sent,t.abrupt("return",a);case 8:case"end":return t.stop()}},t,e)}))()},nextStep:function(t){console.log(this.answers(t)),123==this.userAnswer?(t===this.steps?(this.e1=t+1,this.win=!0,alert("Hey !! You Won")):this.e1=t+1,this.$store.dispatch("setLevel",this.e1)):this.dialog=!0,this.userAnswer=""}}},h={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-content",[r("v-stepper",{staticClass:"success",attrs:{vertical:""},model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}},[t._l(t.steps,function(e){return[r("v-stepper-step",{key:e+"-step",attrs:{complete:t.e1>e,step:e}},[t._v("\n          Day "+t._s(e)+"\n        ")]),t._v(" "),e!==t.steps?r("v-divider",{key:e}):t._e(),t._v(" "),r("v-stepper-items",[r("v-stepper-content",{key:e+"-content",attrs:{step:e}},[r("v-card",{staticClass:"mb-5",attrs:{color:"grey lighten-1",height:"200px"}}),t._v(" "),r("v-text-field",{attrs:{wrap:"",type:"text",placeholder:"Write your answer here"},model:{value:t.userAnswer,callback:function(e){t.userAnswer=e},expression:"userAnswer"}}),t._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:function(r){t.nextStep(e)}}},[t._v("\n              Submit\n            ")])],1)],1)]})],2),t._v(" "),r("div",{staticClass:"text-xs-center"},[r("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"headline grey lighten-2 red--text"},[t._v("\n            Wrong Answer\n          ")]),t._v(" "),r("v-card-text",{staticClass:"success"},[t._v("\n          Oops !! Wrong Answer.\n          ")]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",{staticClass:"accent"},[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n              Clear\n            ")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},p=r("VU/8")(f,h,!1,null,null,null);e.default=p.exports},To3L:function(t,e,r){"use strict";var n=r("lktj"),o=r("1kS7"),i=r("NpIQ"),a=r("sB3e"),s=r("MU5D"),c=Object.assign;t.exports=!c||r("S82l")(function(){var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach(function(t){e[t]=t}),7!=c({},t)[r]||Object.keys(c({},e)).join("")!=n})?function(t,e){for(var r=a(t),c=arguments.length,u=1,l=o.f,f=i.f;c>u;)for(var h,p=s(arguments[u++]),v=l?n(p).concat(l(p)):n(p),d=v.length,y=0;d>y;)f.call(p,h=v[y++])&&(r[h]=p[h]);return r}:c},V3tA:function(t,e,r){r("R4wc"),t.exports=r("FeBl").Object.assign},Xxa5:function(t,e,r){t.exports=r("jyFz")},exGp:function(t,e,r){"use strict";e.__esModule=!0;var n,o=r("//Fk"),i=(n=o)&&n.__esModule?n:{default:n};e.default=function(t){return function(){var e=t.apply(this,arguments);return new i.default(function(t,r){return function n(o,a){try{var s=e[o](a),c=s.value}catch(t){return void r(t)}if(!s.done)return i.default.resolve(c).then(function(t){n("next",t)},function(t){n("throw",t)});t(c)}("next")})}}},jyFz:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("SldL"),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},woOf:function(t,e,r){t.exports={default:r("V3tA"),__esModule:!0}}});
//# sourceMappingURL=0.9d210f16865dbfb9e391.js.map