!function(){function t(t){return t&&t.__esModule?t.default:t}var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire4f3d;e.register("g13Vp",(function(t,r){var n,o=e("8NJRj");if(!gsap||!o.default)return console.error("Gsap or SplitType were not loaded");var i=null===(n=null===window||void 0===window?void 0:window.matchMedia("(max-width: 1243px)"))||void 0===n?void 0:n.matches;new(0,o.default)(".split-text",{types:"words, chars",tagName:"span"});var s=gsap.timeline(),a=gsap.timeline();a.to(".scroll-up",{scrollTrigger:{trigger:"#white-bevelled-box",start:"top 0%",scrub:.2,end:"+=2200"},y:"-300%",ease:"none"}),a.to(".scroll-up",{scrollTrigger:{trigger:"#white-bevelled-box",start:"top 0%",scrub:2,end:"+=500"},ease:"none",opacity:1}),s.to("#white-bevelled-box",{scrollTrigger:{trigger:".is--animated_text",start:i?"top 30%":"top 10%",scrub:.3,pin:!0,containerAnimation:a}}),s.from(".is--animated_text .char",{scrollTrigger:{trigger:".is--animated_text",start:i?"top 30%":"top 10%",end:"+=2000",scrub:1,pin:!0},opacity:.05,ease:"back.out(2)",stagger:{amount:10,from:"start"}}),gsap.to(".certificated-by",{opacity:1,duration:.5,scrollTrigger:{trigger:".certificated-by",start:"60% bottom",scrub:!0,once:!0}})})),e.register("8NJRj",(function(r,n){var o,i,s,a;o=r.exports,i="default",s=function(){return rt},Object.defineProperty(o,i,{get:s,set:a,enumerable:!0,configurable:!0});var l=e("8MBJY"),c=e("a2hTj"),u=e("dDDEV"),d=e("1t1Wn"),f=e("8nrFW");function p(t,e){return Object.getOwnPropertyNames(Object(t)).reduce((function(r,n){var o=Object.getOwnPropertyDescriptor(Object(t),n),i=Object.getOwnPropertyDescriptor(Object(e),n);return Object.defineProperty(r,n,i||o)}),{})}function h(t){return"string"==typeof t}function g(t){return Array.isArray(t)}function y(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=p(e);return void 0!==r.types?t=r.types:void 0!==r.split&&(t=r.split),void 0!==t&&(r.types=(h(t)||g(t)?String(t):"").split(",").map((function(t){return String(t).trim()})).filter((function(t){return/((line)|(word)|(char))/i.test(t)}))),(r.absolute||r.position)&&(r.absolute=r.absolute||/absolute/.test(e.position)),r}function v(t){var e=h(t)||g(t)?String(t):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function b(t){return null!==t&&"object"==typeof t}function m(t){return b(t)&&/^(1|3|11)$/.test(t.nodeType)}function w(t){return g(t)?t:null==t?[]:function(t){return b(t)&&function(t){return"number"==typeof t&&t>-1&&t%1==0}(t.length)}(t)?Array.prototype.slice.call(t):[t]}function x(e){var r=e;return h(e)&&(r=/^(#[a-z]\w+)$/.test(e.trim())?document.getElementById(e.trim().slice(1)):document.querySelectorAll(e)),w(r).reduce((function(e,r){return t(f)(e).concat(t(f)(w(r).filter(m)))}),[])}!function(){function e(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];for(var n=e.length,o=0;o<n;o++){var i=e[o];1===i.nodeType||11===i.nodeType?this.appendChild(i):this.appendChild(document.createTextNode(String(i)))}}function r(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];for(;this.lastChild;)this.removeChild(this.lastChild);r.length&&this.append.apply(this,t(f)(r))}function n(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var n=this.parentNode,o=e.length;if(n)for(o||n.removeChild(this);o--;){var i=e[o];"object"!=typeof i?i=this.ownerDocument.createTextNode(i):i.parentNode&&i.parentNode.removeChild(i),o?n.insertBefore(this.previousSibling,i):n.replaceChild(i,this)}}"undefined"!=typeof Element&&(Element.prototype.append||(Element.prototype.append=e,DocumentFragment.prototype.append=e),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=r,DocumentFragment.prototype.replaceChildren=r),Element.prototype.replaceWith||(Element.prototype.replaceWith=n,DocumentFragment.prototype.replaceWith=n))}();var j=Object.entries,_=(Object.keys,Object.values,{}),O=0;function C(e,r,n){if(!b(e))return console.warn("[data.set] owner is not an object"),null;var o=e._splittype||(e._splittype=++O),i=_[o]||(_[o]={});return void 0===n?r&&Object.getPrototypeOf(r)===Object.prototype&&(_[o]=t(u)({},i,r)):void 0!==r&&(i[r]=n),n}function E(t,e){var r=b(t)?t._splittype:null,n=r&&_[r]||{};return void 0===e?n:n[e]}function S(t){var e=t&&t._splittype;e&&(delete t[e],delete _[e])}var M="\ud800-\udfff",P="\\u0300-\\u036f\\ufe20-\\ufe23",T="\\u20d0-\\u20f0",W="\\ufe0e\\ufe0f",k="[".concat(M,"]"),A="[".concat(P).concat(T,"]"),D="\ud83c[\udffb-\udfff]",N="(?:".concat(A,"|").concat(D,")"),R="[^".concat(M,"]"),I="(?:\ud83c[\udde6-\uddff]){2}",B="[\ud800-\udbff][\udc00-\udfff]",F="\\u200d",H="".concat(N,"?"),J="[".concat(W,"]?"),$=J+H+("(?:\\u200d(?:"+[R,I,B].join("|")+")"+J+H+")*"),L="(?:".concat(["".concat(R).concat(A,"?"),A,I,B,k].join("|"),"\n)"),V=RegExp("".concat(D,"(?=").concat(D,")|").concat(L).concat($),"g"),q=RegExp("[".concat([F,M,P,T,W].join(""),"]"));function K(t){return q.test(t)}function Q(t){return K(t)?function(t){return t.match(V)||[]}(t):function(t){return t.split("")}(t)}function X(t){return null==t?"":String(t)}function Y(e,r){var n=document.createElement(e);return r?(Object.keys(r).forEach((function(e){var o,i=r[e],s=h(i)?i.trim():i;null!==s&&""!==s&&("children"===e?(o=n).append.apply(o,t(f)(w(s))):n.setAttribute(e,s))})),n):n}var z={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function G(e,r){var n,o=v((r=p(z,r)).types),i=r.tagName,s=e.nodeValue,a=document.createDocumentFragment(),l=[];return/^\s/.test(s)&&a.append(" "),n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";return(t?String(t):"").trim().replace(/\s+/g," ").split(e)}(s).reduce((function(e,n,s,c){var u,d;return o.chars&&(d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(t=X(t))&&h(t)&&!e&&K(t)?Q(t):t.split(e)}(n).map((function(e){var n=Y(i,{class:"".concat(r.splitClass," ").concat(r.charClass),style:"display: inline-block;",children:e});return C(n,"isChar",!0),l=t(f)(l).concat([n]),n}))),o.words||o.lines?(C(u=Y(i,{class:"".concat(r.wordClass," ").concat(r.splitClass),style:"display: inline-block; ".concat(o.words&&r.absolute?"position: relative;":""),children:o.chars?d:n}),{isWord:!0,isWordStart:!0,isWordEnd:!0}),a.appendChild(u)):d.forEach((function(t){a.appendChild(t)})),s<c.length-1&&a.append(" "),o.words?e.concat(u):e}),[]),/\s$/.test(s)&&a.append(" "),e.replaceWith(a),{words:n,chars:l}}function U(e,r){var n=e.nodeType,o={words:[],chars:[]};if(!/(1|3|11)/.test(n))return o;if(3===n&&/\S/.test(e.nodeValue))return G(e,r);var i=w(e.childNodes);if(i.length&&(C(e,"isSplit",!0),!E(e).isRoot)){e.style.display="inline-block",e.style.position="relative";var s=e.nextSibling,a=e.previousSibling,l=e.textContent||"",c=s?s.textContent:" ",u=a?a.textContent:" ";C(e,{isWordEnd:/\s$/.test(l)||/^\s/.test(c),isWordStart:/^\s/.test(l)||/\s$/.test(u)})}return i.reduce((function(e,n){var o=U(n,r),i=o.words,s=o.chars;return{words:t(f)(e.words).concat(t(f)(i)),chars:t(f)(e.chars).concat(t(f)(s))}}),o)}function Z(e){var r;E(e).isWord?(S(e),(r=e).replaceWith.apply(r,t(f)(e.childNodes))):w(e.children).forEach((function(t){return Z(t)}))}function tt(e,r,n){var o,i,s,a=v(r.types),l=r.tagName,c=e.getElementsByTagName("*"),u=[],f=[],p=null,h=[],g=e.parentElement,y=e.nextElementSibling,b=document.createDocumentFragment(),m=window.getComputedStyle(e),x=m.textAlign,j=.2*parseFloat(m.fontSize);return r.absolute&&(s={left:e.offsetLeft,top:e.offsetTop,width:e.offsetWidth},i=e.offsetWidth,o=e.offsetHeight,C(e,{cssWidth:e.style.width,cssHeight:e.style.height})),w(c).forEach((function(o){var i=o.parentElement===e,s=function(e,r,n,o){if(!n.absolute)return{top:r?e.offsetTop:null};var i=e.offsetParent,s=t(d)(o,2),a=s[0],l=s[1],c=0,u=0;if(i&&i!==document.body){var f=i.getBoundingClientRect();c=f.x+a,u=f.y+l}var p=e.getBoundingClientRect(),h=p.width,g=p.height,y=p.x;return{width:h,height:g,top:p.y+l-u,left:y+a-c}}(o,i,r,n),l=s.width,c=s.height,h=s.top,g=s.left;/^br$/i.test(o.nodeName)||(a.lines&&i&&((null===p||h-p>=j)&&(p=h,u.push(f=[])),f.push(o)),r.absolute&&C(o,{top:h,left:g,width:l,height:c}))})),g&&g.removeChild(e),a.lines&&(h=u.map((function(t){var e=Y(l,{class:"".concat(r.splitClass," ").concat(r.lineClass),style:"display: block; text-align: ".concat(x,"; width: 100%;")});C(e,"isLine",!0);var n={height:0,top:1e4};return b.appendChild(e),t.forEach((function(t,r,o){var i=E(t),s=i.isWordEnd,a=i.top,l=i.height,c=o[r+1];n.height=Math.max(n.height,l),n.top=Math.min(n.top,a),e.appendChild(t),s&&E(c).isWordStart&&e.append(" ")})),r.absolute&&C(e,{height:n.height,top:n.top}),e})),a.words||Z(b),e.replaceChildren(b)),r.absolute&&(e.style.width="".concat(e.style.width||i,"px"),e.style.height="".concat(o,"px"),w(c).forEach((function(t){var e=E(t),r=e.isLine,n=e.top,o=e.left,i=e.width,a=e.height,l=E(t.parentElement),c=!r&&l.isLine;t.style.top="".concat(c?n-l.top:n,"px"),t.style.left="".concat(r?s.left:o-(c?s.left:0),"px"),t.style.height="".concat(a,"px"),t.style.width="".concat(r?s.width:i,"px"),t.style.position="absolute"}))),g&&(y?g.insertBefore(e,y):g.appendChild(e)),h}var et=p(z,{}),rt=function(){"use strict";function e(r,n){t(l)(this,e),this.isSplit=!1,this.settings=p(et,y(n)),this.elements=x(r),this.split()}return t(c)(e,[{key:"split",value:function(e){var r=this;this.revert(),this.elements.forEach((function(t){C(t,"html",t.innerHTML)})),this.lines=[],this.words=[],this.chars=[];var n=[window.pageXOffset,window.pageYOffset];void 0!==e&&(this.settings=p(this.settings,y(e)));var o=v(this.settings.types);o.none||(this.elements.forEach((function(e){C(e,"isRoot",!0);var n=U(e,r.settings),o=n.words,i=n.chars;r.words=t(f)(r.words).concat(t(f)(o)),r.chars=t(f)(r.chars).concat(t(f)(i))})),this.elements.forEach((function(e){if(o.lines||r.settings.absolute){var i=tt(e,r.settings,n);r.lines=t(f)(r.lines).concat(t(f)(i))}})),this.isSplit=!0,window.scrollTo(n[0],n[1]),j(_).forEach((function(e){var r=t(d)(e,2),n=r[0],o=r[1],i=o.isRoot,s=o.isSplit;i&&s||(_[n]=null,delete _[n])})))}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),e.revert(this.elements)}}],[{key:"data",get:function(){return _}},{key:"defaults",get:function(){return et},set:function(t){et=p(et,y(t))}},{key:"setDefaults",value:function(t){return et=p(et,y(t)),z}},{key:"revert",value:function(t){x(t).forEach((function(t){var e=E(t),r=e.isSplit,n=e.html,o=e.cssWidth,i=e.cssHeight;r&&(t.innerHTML=n,t.style.width=o||"",t.style.height=i||"",S(t))}))}},{key:"create",value:function(t,r){return new e(t,r)}}]),e}()})),e.register("8MBJY",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}})),e.register("a2hTj",(function(t,e){"use strict";function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,n){e&&r(t.prototype,e);n&&r(t,n);return t}})),e.register("dDDEV",(function(t,r){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){o.default(t,e,r[e])}))}return t};var n,o=(n=e("hKHmD"))&&n.__esModule?n:{default:n}})),e.register("hKHmD",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,r){e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r;return t}})),e.register("1t1Wn",(function(t,r){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){return n.default(t)||o.default(t,e)||s.default(t,e)||i.default()};var n=a(e("8slrw")),o=a(e("7AJDX")),i=a(e("ifqQW")),s=a(e("auk6i"));function a(t){return t&&t.__esModule?t:{default:t}}})),e.register("8slrw",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return t}})),e.register("7AJDX",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),e.register("ifqQW",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),e.register("auk6i",(function(t,r){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!t)return;if("string"==typeof t)return o.default(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o.default(t,e)};var n,o=(n=e("8NIkP"))&&n.__esModule?n:{default:n}})),e.register("8NIkP",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}})),e.register("8nrFW",(function(t,r){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return n.default(t)||o.default(t)||s.default(t)||i.default()};var n=a(e("kMC0W")),o=a(e("7AJDX")),i=a(e("8CtQK")),s=a(e("auk6i"));function a(t){return t&&t.__esModule?t:{default:t}}})),e.register("kMC0W",(function(t,r){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return o.default(t)};var n,o=(n=e("8NIkP"))&&n.__esModule?n:{default:n}})),e.register("8CtQK",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}))}();
//# sourceMappingURL=reveal-text-on-scroll.99ed5b60.js.map
