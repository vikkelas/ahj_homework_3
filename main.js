!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=64)}([function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,r(27))},function(t,n){var r=Function.prototype,e=r.bind,o=r.call,i=e&&e.bind(o);t.exports=e?function(t){return t&&i(o,t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},function(t,n){t.exports=function(t){return"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){var e=r(2);t.exports=function(t){return"object"==typeof t?null!==t:e(t)}},function(t,n,r){var e=r(0),o=r(14),i=r(6),c=r(17),u=r(18),a=r(19),f=o("wks"),s=e.Symbol,l=s&&s.for,p=a?s:s&&s.withoutSetter||c;t.exports=function(t){if(!i(f,t)||!u&&"string"!=typeof f[t]){var n="Symbol."+t;u&&i(s,t)?f[t]=s[t]:f[t]=a&&l?l(n):p(n)}return f[t]}},function(t,n,r){var e=r(1),o=r(16),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},function(t,n,r){var e=r(3);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,r){var e={};e[r(5)("toStringTag")]="z",t.exports="[object z]"===String(e)},function(t,n,r){var e=r(0),o=r(15),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,r){var e=r(0),o=r(2),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t]):e[t]&&e[t][n]}},function(t,n,r){var e=r(7),o=r(33),i=r(42);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(1),o=r(2),i=r(9),c=e(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return c(t)}),t.exports=i.inspectSource},function(t,n,r){var e=r(1),o=e({}.toString),i=e("".slice);t.exports=function(t){return i(o(t),8,-1)}},function(t,n,r){var e=r(28),o=r(9);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.19.1",mode:e?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var e=r(0),o=Object.defineProperty;t.exports=function(t,n){try{o(e,t,{value:n,configurable:!0,writable:!0})}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(0),o=r(29),i=e.Object;t.exports=function(t){return i(o(t))}},function(t,n,r){var e=r(1),o=0,i=Math.random(),c=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+c(++o+i,36)}},function(t,n,r){var e=r(30),o=r(3);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},function(t,n,r){var e=r(18);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,r){var e=r(0),o=r(4),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n){var r=Function.prototype.call;t.exports=r.bind?r.bind(r):function(){return r.apply(r,arguments)}},function(t,n,r){var e=r(0),o=r(10),i=r(2),c=r(38),u=r(19),a=e.Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return i(n)&&c(n.prototype,a(t))}},function(t,n,r){var e=r(0),o=r(2),i=r(40),c=e.TypeError;t.exports=function(t){if(o(t))return t;throw c(i(t)+" is not a function")}},function(t,n,r){var e=r(0),o=r(8),i=r(2),c=r(13),u=r(5)("toStringTag"),a=e.Object,f="Arguments"==c(function(){return arguments}());t.exports=o?c:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=a(t),u))?r:f?c(n):"Object"==(e=c(n))&&i(n.callee)?"Arguments":e}},function(t,n,r){},function(t,n,r){var e=r(8),o=r(32),i=r(48);e||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n){t.exports=!1},function(t,n,r){var e=r(0).TypeError;t.exports=function(t){if(null==t)throw e("Can't call method on "+t);return t}},function(t,n,r){var e,o,i=r(0),c=r(31),u=i.process,a=i.Deno,f=u&&u.versions||a&&a.version,s=f&&f.v8;s&&(o=(e=s.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&c&&(!(e=c.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=c.match(/Chrome\/(\d+)/))&&(o=+e[1]),t.exports=o},function(t,n,r){var e=r(10);t.exports=e("navigator","userAgent")||""},function(t,n,r){var e=r(0),o=r(2),i=r(6),c=r(11),u=r(15),a=r(12),f=r(43),s=r(47).CONFIGURABLE,l=f.get,p=f.enforce,v=String(String).split("String");(t.exports=function(t,n,r,a){var f,l=!!a&&!!a.unsafe,y=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet,b=a&&void 0!==a.name?a.name:n;o(r)&&("Symbol("===String(b).slice(0,7)&&(b="["+String(b).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(r,"name")||s&&r.name!==b)&&c(r,"name",b),(f=p(r)).source||(f.source=v.join("string"==typeof b?b:""))),t!==e?(l?!d&&t[n]&&(y=!0):delete t[n],y?t[n]=r:c(t,n,r)):y?t[n]=r:u(n,r)})(Function.prototype,"toString",(function(){return o(this)&&l(this).source||a(this)}))},function(t,n,r){var e=r(0),o=r(7),i=r(34),c=r(35),u=r(36),a=e.TypeError,f=Object.defineProperty;n.f=o?f:function(t,n,r){if(c(t),n=u(n),c(r),i)try{return f(t,n,r)}catch(t){}if("get"in r||"set"in r)throw a("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(7),o=r(3),i=r(20);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(0),o=r(4),i=e.String,c=e.TypeError;t.exports=function(t){if(o(t))return t;throw c(i(t)+" is not an object")}},function(t,n,r){var e=r(37),o=r(22);t.exports=function(t){var n=e(t,"string");return o(n)?n:n+""}},function(t,n,r){var e=r(0),o=r(21),i=r(4),c=r(22),u=r(39),a=r(41),f=r(5),s=e.TypeError,l=f("toPrimitive");t.exports=function(t,n){if(!i(t)||c(t))return t;var r,e=u(t,l);if(e){if(void 0===n&&(n="default"),r=o(e,t,n),!i(r)||c(r))return r;throw s("Can't convert object to primitive value")}return void 0===n&&(n="number"),a(t,n)}},function(t,n,r){var e=r(1);t.exports=e({}.isPrototypeOf)},function(t,n,r){var e=r(23);t.exports=function(t,n){var r=t[n];return null==r?void 0:e(r)}},function(t,n,r){var e=r(0).String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},function(t,n,r){var e=r(0),o=r(21),i=r(2),c=r(4),u=e.TypeError;t.exports=function(t,n){var r,e;if("string"===n&&i(r=t.toString)&&!c(e=o(r,t)))return e;if(i(r=t.valueOf)&&!c(e=o(r,t)))return e;if("string"!==n&&i(r=t.toString)&&!c(e=o(r,t)))return e;throw u("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e,o,i,c=r(44),u=r(0),a=r(1),f=r(4),s=r(11),l=r(6),p=r(9),v=r(45),y=r(46),d=u.TypeError,b=u.WeakMap;if(c||p.state){var h=p.state||(p.state=new b),x=a(h.get),m=a(h.has),g=a(h.set);e=function(t,n){if(m(h,t))throw new d("Object already initialized");return n.facade=t,g(h,t,n),n},o=function(t){return x(h,t)||{}},i=function(t){return m(h,t)}}else{var S=v("state");y[S]=!0,e=function(t,n){if(l(t,S))throw new d("Object already initialized");return n.facade=t,s(t,S,n),n},o=function(t){return l(t,S)?t[S]:{}},i=function(t){return l(t,S)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw d("Incompatible receiver, "+t+" required");return r}}}},function(t,n,r){var e=r(0),o=r(2),i=r(12),c=e.WeakMap;t.exports=o(c)&&/native code/.test(i(c))},function(t,n,r){var e=r(14),o=r(17),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports={}},function(t,n,r){var e=r(7),o=r(6),i=Function.prototype,c=e&&Object.getOwnPropertyDescriptor,u=o(i,"name"),a=u&&"something"===function(){}.name,f=u&&(!e||e&&c(i,"name").configurable);t.exports={EXISTS:u,PROPER:a,CONFIGURABLE:f}},function(t,n,r){"use strict";var e=r(8),o=r(24);t.exports=e?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,n,r){var e=r(0),o=r(50),i=r(51),c=r(52),u=r(11),a=function(t){if(t&&t.forEach!==c)try{u(t,"forEach",c)}catch(n){t.forEach=c}};for(var f in o)o[f]&&a(e[f]&&e[f].prototype);a(i)},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,r){var e=r(20)("span").classList,o=e&&e.constructor&&e.constructor.prototype;t.exports=o===Object.prototype?void 0:o},function(t,n,r){"use strict";var e=r(53).forEach,o=r(63)("forEach");t.exports=o?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n,r){var e=r(54),o=r(1),i=r(55),c=r(16),u=r(56),a=r(59),f=o([].push),s=function(t){var n=1==t,r=2==t,o=3==t,s=4==t,l=6==t,p=7==t,v=5==t||l;return function(y,d,b,h){for(var x,m,g=c(y),S=i(g),L=e(d,b),j=u(S),w=0,O=h||a,_=n?O(y,j):r||p?O(y,0):void 0;j>w;w++)if((v||w in S)&&(m=L(x=S[w],w,g),t))if(n)_[w]=m;else if(m)switch(t){case 3:return!0;case 5:return x;case 6:return w;case 2:f(_,x)}else switch(t){case 4:return!1;case 7:f(_,x)}return l?-1:o||s?s:_}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}},function(t,n,r){var e=r(1),o=r(23),i=e(e.bind);t.exports=function(t,n){return o(t),void 0===n?t:i?i(t,n):function(){return t.apply(n,arguments)}}},function(t,n,r){var e=r(0),o=r(1),i=r(3),c=r(13),u=e.Object,a=o("".split);t.exports=i((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==c(t)?a(t,""):u(t)}:u},function(t,n,r){var e=r(57);t.exports=function(t){return e(t.length)}},function(t,n,r){var e=r(58),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){var n=+t;return n!=n||0===n?0:(n>0?e:r)(n)}},function(t,n,r){var e=r(60);t.exports=function(t,n){return new(e(t))(0===n?0:n)}},function(t,n,r){var e=r(0),o=r(61),i=r(62),c=r(4),u=r(5)("species"),a=e.Array;t.exports=function(t){var n;return o(t)&&(n=t.constructor,(i(n)&&(n===a||o(n.prototype))||c(n)&&null===(n=n[u]))&&(n=void 0)),void 0===n?a:n}},function(t,n,r){var e=r(13);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(1),o=r(3),i=r(2),c=r(24),u=r(10),a=r(12),f=function(){},s=[],l=u("Reflect","construct"),p=/^\s*(?:class|function)\b/,v=e(p.exec),y=!p.exec(f),d=function(t){if(!i(t))return!1;try{return l(f,s,t),!0}catch(t){return!1}};t.exports=!l||o((function(){var t;return d(d.call)||!d(Object)||!d((function(){t=!0}))||t}))?function(t){if(!i(t))return!1;switch(c(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return y||!!v(p,a(t))}:d},function(t,n,r){"use strict";var e=r(3);t.exports=function(t,n){var r=[][t];return!!r&&e((function(){r.call(null,n||function(){throw 1},1)}))}},function(t,n,r){"use strict";r.r(n);r(25),r(26),r(49);var e=document.querySelector(".statistics"),o=document.querySelector(".new__game"),i=document.querySelector(".modal__window"),c=document.querySelectorAll(".box-cell"),u=Math.floor(Math.random()*c.length),a=0,f=null,s=0;function l(){null===f?(f=Math.floor(Math.random()*c.length),c[f].classList.add("box__cell-active")):f===u?(c[f].classList.remove("box__cell-active"),f=Math.floor(Math.random()*c.length),c[f].classList.add("box__cell-active")):(c[f].classList.remove("box__cell-active"),c[f=u].classList.add("box__cell-active"))}var p=setInterval(l,1e3);c.forEach((function(t){t.addEventListener("click",(function(t){t.currentTarget.classList.contains("box__cell-active")?(s+=1,e.innerHTML="Очков ".concat(s)):5===(a+=1)&&(c.forEach((function(t){t.classList.contains("box__cell-active")&&t.classList.remove("box__cell-active")})),clearInterval(p),i.style.display="flex")}))})),o.addEventListener("click",(function(){i.style.display="none",a=0,s=0,e.innerHTML="Очков ".concat(s),p=setInterval(l,1e3)}))}]);