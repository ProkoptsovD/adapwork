var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire4f3d;t.register("49n9P",(function(e,n){var s,i=t("bC9KT");if(!gsap||!i.default)return console.error("Gsap or SplitType were not loaded");const o=null===(s=null===window||void 0===window?void 0:window.matchMedia("(max-width: 1243px)"))||void 0===s?void 0:s.matches;new(0,i.default)(".split-text",{types:"words, chars",tagName:"span"});const r=gsap.timeline(),l=gsap.timeline();l.to(".scroll-up",{scrollTrigger:{trigger:"#white-bevelled-box",start:"top 0%",scrub:.2,end:"+=2200"},y:"-300%",ease:"none"}),l.to(".scroll-up",{scrollTrigger:{trigger:"#white-bevelled-box",start:"top 0%",scrub:2,end:"+=500"},ease:"none",opacity:1}),r.to("#white-bevelled-box",{scrollTrigger:{trigger:".is--animated_text",start:o?"top 30%":"top 10%",scrub:.3,pin:!0,containerAnimation:l}}),r.from(".is--animated_text .char",{scrollTrigger:{trigger:".is--animated_text",start:o?"top 30%":"top 10%",end:"+=2000",scrub:1,pin:!0},opacity:.05,ease:"back.out(2)",stagger:{amount:10,from:"start"}}),gsap.to(".certificated-by",{opacity:1,duration:.5,scrollTrigger:{trigger:".certificated-by",start:"60% bottom",scrub:!0,once:!0}})})),t.register("bC9KT",(function(t,e){var n,s,i,o;function r(t,e){return Object.getOwnPropertyNames(Object(t)).reduce(((n,s)=>{const i=Object.getOwnPropertyDescriptor(Object(t),s),o=Object.getOwnPropertyDescriptor(Object(e),s);return Object.defineProperty(n,s,o||i)}),{})}function l(t){return"string"==typeof t}function c(t){return Array.isArray(t)}function a(t={}){const e=r(t);let n;return void 0!==e.types?n=e.types:void 0!==e.split&&(n=e.split),void 0!==n&&(e.types=(l(n)||c(n)?String(n):"").split(",").map((t=>String(t).trim())).filter((t=>/((line)|(word)|(char))/i.test(t)))),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(t.position)),e}function d(t){const e=l(t)||c(t)?String(t):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function p(t){return null!==t&&"object"==typeof t}function u(t){return p(t)&&/^(1|3|11)$/.test(t.nodeType)}function h(t){return c(t)?t:null==t?[]:function(t){return p(t)&&function(t){return"number"==typeof t&&t>-1&&t%1==0}(t.length)}(t)?Array.prototype.slice.call(t):[t]}function f(t){let e=t;return l(t)&&(e=/^(#[a-z]\w+)$/.test(t.trim())?document.getElementById(t.trim().slice(1)):document.querySelectorAll(t)),h(e).reduce(((t,e)=>[...t,...h(e).filter(u)]),[])}n=t.exports,s="default",i=function(){return Y},Object.defineProperty(n,s,{get:i,set:o,enumerable:!0,configurable:!0}),(()=>{function t(...t){const e=t.length;for(let n=0;n<e;n++){const e=t[n];1===e.nodeType||11===e.nodeType?this.appendChild(e):this.appendChild(document.createTextNode(String(e)))}}function e(...t){for(;this.lastChild;)this.removeChild(this.lastChild);t.length&&this.append(...t)}function n(...t){const e=this.parentNode;let n=t.length;if(e)for(n||e.removeChild(this);n--;){let s=t[n];"object"!=typeof s?s=this.ownerDocument.createTextNode(s):s.parentNode&&s.parentNode.removeChild(s),n?e.insertBefore(this.previousSibling,s):e.replaceChild(s,this)}}"undefined"!=typeof Element&&(Element.prototype.append||(Element.prototype.append=t,DocumentFragment.prototype.append=t),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=n,DocumentFragment.prototype.replaceWith=n))})();const{entries:g,keys:y,values:m}=Object,b={};let w=0;function C(t,e,n){if(!p(t))return console.warn("[data.set] owner is not an object"),null;const s=t._splittype||(t._splittype=++w),i=b[s]||(b[s]={});return void 0===n?e&&Object.getPrototypeOf(e)===Object.prototype&&(b[s]={...i,...e}):void 0!==e&&(i[e]=n),n}function v(t,e){const n=p(t)?t._splittype:null,s=n&&b[n]||{};return void 0===e?s:s[e]}function x(t){const e=t&&t._splittype;e&&(delete t[e],delete b[e])}const E="\ud800-\udfff",$="\\u0300-\\u036f\\ufe20-\\ufe23",S="\\u20d0-\\u20f0",T="\\ufe0e\\ufe0f",j="[\ud800-\udfff]",O="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",W="[^\ud800-\udfff]",N="(?:\ud83c[\udde6-\uddff]){2}",D="[\ud800-\udbff][\udc00-\udfff]",P="\\u200d",R=`${`(?:${O}|\ud83c[\udffb-\udfff])`}?`,k="[\\ufe0e\\ufe0f]?",A=k+R+("(?:\\u200d(?:"+[W,N,D].join("|")+")"+k+R+")*"),_=`(?:${[`${W}${O}?`,O,N,D,j].join("|")}\n)`,B=RegExp(`\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|${_}${A}`,"g"),F=RegExp(`[${[P,E,$,S,T].join("")}]`);function L(t){return F.test(t)}function H(t){return L(t)?function(t){return t.match(B)||[]}(t):function(t){return t.split("")}(t)}function M(t,e=""){var n;return(t=null==(n=t)?"":String(n))&&l(t)&&!e&&L(t)?H(t):t.split(e)}function q(t,e){const n=document.createElement(t);return e?(Object.keys(e).forEach((t=>{const s=e[t],i=l(s)?s.trim():s;null!==i&&""!==i&&("children"===t?n.append(...h(i)):n.setAttribute(t,i))})),n):n}var z={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function K(t,e){const n=d((e=r(z,e)).types),s=e.tagName,i=t.nodeValue,o=document.createDocumentFragment();let l=[],c=[];return/^\s/.test(i)&&o.append(" "),l=function(t,e=" "){return(t?String(t):"").trim().replace(/\s+/g," ").split(e)}(i).reduce(((t,i,r,l)=>{let a,d;return n.chars&&(d=M(i).map((t=>{const n=q(s,{class:`${e.splitClass} ${e.charClass}`,style:"display: inline-block;",children:t});return C(n,"isChar",!0),c=[...c,n],n}))),n.words||n.lines?(a=q(s,{class:`${e.wordClass} ${e.splitClass}`,style:"display: inline-block; "+(n.words&&e.absolute?"position: relative;":""),children:n.chars?d:i}),C(a,{isWord:!0,isWordStart:!0,isWordEnd:!0}),o.appendChild(a)):d.forEach((t=>{o.appendChild(t)})),r<l.length-1&&o.append(" "),n.words?t.concat(a):t}),[]),/\s$/.test(i)&&o.append(" "),t.replaceWith(o),{words:l,chars:c}}function V(t,e){const n=t.nodeType,s={words:[],chars:[]};if(!/(1|3|11)/.test(n))return s;if(3===n&&/\S/.test(t.nodeValue))return K(t,e);const i=h(t.childNodes);if(i.length&&(C(t,"isSplit",!0),!v(t).isRoot)){t.style.display="inline-block",t.style.position="relative";const e=t.nextSibling,n=t.previousSibling,s=t.textContent||"",i=e?e.textContent:" ",o=n?n.textContent:" ";C(t,{isWordEnd:/\s$/.test(s)||/^\s/.test(i),isWordStart:/^\s/.test(s)||/\s$/.test(o)})}return i.reduce(((t,n)=>{const{words:s,chars:i}=V(n,e);return{words:[...t.words,...s],chars:[...t.chars,...i]}}),s)}function G(t){v(t).isWord?(x(t),t.replaceWith(...t.childNodes)):h(t.children).forEach((t=>G(t)))}function I(t,e,n){const s=d(e.types),i=e.tagName,o=t.getElementsByTagName("*"),r=[];let l,c,a,p=[],u=null,f=[];const g=t.parentElement,y=t.nextElementSibling,m=document.createDocumentFragment(),b=window.getComputedStyle(t),w=b.textAlign,x=.2*parseFloat(b.fontSize);return e.absolute&&(a={left:t.offsetLeft,top:t.offsetTop,width:t.offsetWidth},c=t.offsetWidth,l=t.offsetHeight,C(t,{cssWidth:t.style.width,cssHeight:t.style.height})),h(o).forEach((i=>{const o=i.parentElement===t,{width:l,height:c,top:a,left:d}=function(t,e,n,s){if(!n.absolute)return{top:e?t.offsetTop:null};const i=t.offsetParent,[o,r]=s;let l=0,c=0;if(i&&i!==document.body){const t=i.getBoundingClientRect();l=t.x+o,c=t.y+r}const{width:a,height:d,x:p,y:u}=t.getBoundingClientRect();return{width:a,height:d,top:u+r-c,left:p+o-l}}(i,o,e,n);/^br$/i.test(i.nodeName)||(s.lines&&o&&((null===u||a-u>=x)&&(u=a,r.push(p=[])),p.push(i)),e.absolute&&C(i,{top:a,left:d,width:l,height:c}))})),g&&g.removeChild(t),s.lines&&(f=r.map((t=>{const n=q(i,{class:`${e.splitClass} ${e.lineClass}`,style:`display: block; text-align: ${w}; width: 100%;`});C(n,"isLine",!0);const s={height:0,top:1e4};return m.appendChild(n),t.forEach(((t,e,i)=>{const{isWordEnd:o,top:r,height:l}=v(t),c=i[e+1];s.height=Math.max(s.height,l),s.top=Math.min(s.top,r),n.appendChild(t),o&&v(c).isWordStart&&n.append(" ")})),e.absolute&&C(n,{height:s.height,top:s.top}),n})),s.words||G(m),t.replaceChildren(m)),e.absolute&&(t.style.width=`${t.style.width||c}px`,t.style.height=`${l}px`,h(o).forEach((t=>{const{isLine:e,top:n,left:s,width:i,height:o}=v(t),r=v(t.parentElement),l=!e&&r.isLine;t.style.top=`${l?n-r.top:n}px`,t.style.left=e?`${a.left}px`:s-(l?a.left:0)+"px",t.style.height=`${o}px`,t.style.width=e?`${a.width}px`:`${i}px`,t.style.position="absolute"}))),g&&(y?g.insertBefore(t,y):g.appendChild(t)),f}let X=r(z,{});class Y{static get data(){return b}static get defaults(){return X}static set defaults(t){X=r(X,a(t))}static setDefaults(t){return X=r(X,a(t)),z}static revert(t){f(t).forEach((t=>{const{isSplit:e,html:n,cssWidth:s,cssHeight:i}=v(t);e&&(t.innerHTML=n,t.style.width=s||"",t.style.height=i||"",x(t))}))}static create(t,e){return new Y(t,e)}split(t){this.revert(),this.elements.forEach((t=>{C(t,"html",t.innerHTML)})),this.lines=[],this.words=[],this.chars=[];const e=[window.pageXOffset,window.pageYOffset];void 0!==t&&(this.settings=r(this.settings,a(t)));const n=d(this.settings.types);n.none||(this.elements.forEach((t=>{C(t,"isRoot",!0);const{words:e,chars:n}=V(t,this.settings);this.words=[...this.words,...e],this.chars=[...this.chars,...n]})),this.elements.forEach((t=>{if(n.lines||this.settings.absolute){const n=I(t,this.settings,e);this.lines=[...this.lines,...n]}})),this.isSplit=!0,window.scrollTo(e[0],e[1]),g(b).forEach((([t,{isRoot:e,isSplit:n}])=>{e&&n||(b[t]=null,delete b[t])})))}revert(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),Y.revert(this.elements)}constructor(t,e){this.isSplit=!1,this.settings=r(X,a(e)),this.elements=f(t),this.split()}}}));
//# sourceMappingURL=reveal-text-on-scroll.ebebbb52.js.map