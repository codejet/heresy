/*! (c) Andrea Giammarchi - ISC */var heresy=function(e){"use strict";var t=(...e)=>e,n=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var o=this.ownerDocument.createRange();o.setStartBefore(e?t[1]:n),o.setEndAfter(r),o.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,o=0,s=r.length;o<s;o++)t.appendChild(r[o]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice);const{isArray:r}=Array,o=n.prototype.nodeType,s=e=>document.createElementNS("http://www.w3.org/1999/xhtml",e),a=(e,t)=>("svg"===t?i:c)(e),c=e=>{const t=s("template");return t.innerHTML=e,t.content},i=e=>{const{content:t}=s("template"),n=s("div");n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>";const{childNodes:r}=n.firstChild;let{length:o}=r;for(;o--;)t.appendChild(r[0]);return t},l=(e,t,n,r,o,s)=>{if(o-r<2)t.insertBefore(e(n[r],1),s);else{const a=t.ownerDocument.createDocumentFragment();for(;r<o;)a.appendChild(e(n[r++],1));t.insertBefore(a,s)}},u=(e,t)=>e==t,f=e=>e,p=(e,t,n,r,o,s,a)=>{const c=s-o;if(c<1)return-1;for(;n-t>=c;){let c=t,i=o;for(;c<n&&i<s&&a(e[c],r[i]);)c++,i++;if(i===s)return t;t=c+1}return-1},d=(e,t,n,r,o)=>n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:o,h=(e,t,n,r,o)=>{if(o-r<2)t.removeChild(e(n[r],-1));else{const s=t.ownerDocument.createRange();s.setStartBefore(e(n[r],-1)),s.setEndAfter(e(n[o-1],-1)),s.deleteContents()}},m=(e,t,n)=>{let r=1,o=t;for(;r<o;){const t=(r+o)/2>>>0;n<e[t]?o=t:r=t+1}return r},g=(e,t,n,r,o,s,a,c,i,u,f,p,d)=>{((e,t,n,r,o,s,a,c,i)=>{const u=new Map,f=e.length;let p=a,d=0;for(;d<f;)switch(e[d++]){case 0:o++,p++;break;case 1:u.set(r[o],1),l(t,n,r,o++,o,p<c?t(s[p],0):i);break;case-1:p++}for(d=0;d<f;)switch(e[d++]){case 0:a++;break;case-1:u.has(s[a])?a++:h(t,n,s,a++,a)}})(((e,t,n,r,o,s,a)=>{const c=n+s,i=[];let l,u,f,p,d,h,m;e:for(l=0;l<=c;l++){if(l>50)return null;for(m=l-1,d=l?i[l-1]:[0,0],h=i[l]=[],u=-l;u<=l;u+=2){for(f=(p=u===-l||u!==l&&d[m+u-1]<d[m+u+1]?d[m+u+1]:d[m+u-1]+1)-u;p<s&&f<n&&a(r[o+p],e[t+f]);)p++,f++;if(p===s&&f===n)break e;h[l+u]=p}}const g=Array(l/2+c/2);let v=g.length-1;for(l=i.length-1;l>=0;l--){for(;p>0&&f>0&&a(r[o+p-1],e[t+f-1]);)g[v--]=0,p--,f--;if(!l)break;m=l-1,d=l?i[l-1]:[0,0],(u=p-f)==-l||u!==l&&d[m+u-1]<d[m+u+1]?(f--,g[v--]=1):(p--,g[v--]=-1)}return g})(n,r,s,a,c,u,p)||((e,t,n,r,o,s,a,c)=>{let i=0,l=r<c?r:c;const u=Array(l++),f=Array(l);f[0]=-1;for(let e=1;e<l;e++)f[e]=a;const p=new Map;for(let e=s;e<a;e++)p.set(o[e],e);for(let r=t;r<n;r++){const t=p.get(e[r]);null!=t&&-1<(i=m(f,l,t))&&(f[i]=t,u[i]={newi:r,oldi:t,prev:u[i-1]})}for(i=--l,--a;f[i]>a;)--i;l=c+r-i;const d=Array(l);let h=u[i];for(--n;h;){const{newi:e,oldi:t}=h;for(;n>e;)d[--l]=1,--n;for(;a>t;)d[--l]=-1,--a;d[--l]=0,--n,--a,h=h.prev}for(;n>=t;)d[--l]=1,--n;for(;a>=s;)d[--l]=-1,--a;return d})(n,r,o,s,a,c,i,u),e,t,n,r,a,c,f,d)},v=(e,t,n,r)=>{r||(r={});const o=r.compare||u,s=r.node||f,a=null==r.before?null:s(r.before,0),c=t.length;let i=c,m=0,v=n.length,y=0;for(;m<i&&y<v&&o(t[m],n[y]);)m++,y++;for(;m<i&&y<v&&o(t[i-1],n[v-1]);)i--,v--;const w=m===i,b=y===v;if(w&&b)return n;if(w&&y<v)return l(s,e,n,y,v,d(s,t,m,c,a)),n;if(b&&m<i)return h(s,e,t,m,i),n;const N=i-m,x=v-y;let E=-1;if(N<x){if(-1<(E=p(n,y,v,t,m,i,o)))return l(s,e,n,y,E,s(t[m],0)),l(s,e,n,E+N,v,d(s,t,i,c,a)),n}else if(x<N&&-1<(E=p(t,m,i,n,y,v,o)))return h(s,e,t,m,E),h(s,e,t,E+x,i),n;return N<2||x<2?(l(s,e,n,y,v,s(t[m],0)),h(s,e,t,m,i),n):N===x&&((e,t,n,r,o,s)=>{for(;r<o&&s(n[r],e[t-1]);)r++,t--;return 0===t})(n,v,t,m,i,o)?(l(s,e,n,y,v,d(s,t,i,c,a)),n):(g(s,e,n,y,v,x,t,m,i,N,c,o,a),n)};var y,w=document.importNode,b="".trim,N="-"+Math.random().toFixed(6)+"%";try{"content"in(y=document.createElement("template"))&&(y.innerHTML='<p tabindex="'+N+'"></p>',y.content.childNodes[0].getAttribute("tabindex")==N)||(N="_dt: "+N.slice(1,-1)+";")}catch(e){}var x="\x3c!--"+N+"--\x3e",E=8,C=1,k=3,A=/^(?:style|textarea)$/i,$=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var j=" \\f\\n\\r\\t",M="[^"+j+"\\/>\"'=]+",S="["+j+"]+"+M,T="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",O="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+M.replace("\\/","")+"))?)",L=new RegExp(T+S+O+"+)(["+j+"]*/?>)","g"),D=new RegExp(T+S+O+"*)(["+j+"]*/>)","g"),W=new RegExp("("+S+"\\s*=\\s*)(['\"]?)"+x+"\\2","gi");function Z(e,t,n,r){return"<"+t+n.replace(W,_)+r}function _(e,t,n){return t+(n||'"')+N+(n||'"')}function z(e,t,n){return $.test(t)?e:"<"+t+n+"></"+t+">"}function P(e,t,n,r){return{name:r,node:t,path:n,type:e}}function R(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function V(e,t,n,r){for(var o=new Map,s=e.attributes,a=[],c=a.slice.call(s,0),i=c.length,l=0;l<i;){var u=c[l++];if(u.value===N){var f=u.name;if(!o.has(f)){var p=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/,"$1"),d=s[p]||s[p.toLowerCase()];o.set(f,d),t.push(P("attr",d,r,p))}a.push(u)}}for(i=a.length,l=0;l<i;){var h=a[l++];/^id$/i.test(h.name)?e.removeAttribute(h.name):e.removeAttributeNode(h)}var m=e.nodeName;if(/^script$/i.test(m)){var g=document.createElement(m);for(i=s.length,l=0;l<i;)g.setAttributeNode(s[l++].cloneNode(!0));g.textContent=e.textContent,e.parentNode.replaceChild(g,e)}}var B=new WeakMap,G=new WeakMap;function H(e,t){var n=function(e){return e.join(x).replace(D,z).replace(L,Z)}(t),r=e.transform;r&&(n=r(n));var o=a(n,e.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===b.call(r.textContent).length&&e.removeChild(r)}}(o);var s=[];!function e(t,n,r,o){for(var s=t.childNodes,a=s.length,c=0;c<a;){var i=s[c];switch(i.nodeType){case C:var l=o.concat(c);V(i,n,r,l),e(i,n,r,l);break;case E:var u=i.textContent;if(u===N)r.shift(),n.push(A.test(t.nodeName)?P("text",t,o):P("any",i,o.concat(c)));else switch(u.slice(0,2)){case"/*":if("*/"!==u.slice(-2))break;case"👻":t.removeChild(i),c--,a--}break;case k:A.test(t.nodeName)&&b.call(i.textContent)===x&&(r.shift(),n.push(P("text",t,o)))}c++}}(o,s,t.slice(0),[]);var c={content:o,updates:function(n){for(var r=[],o=s.length,a=0;a<o;){var c=s[a++],i=R(n,c.path);switch(c.type){case"any":r.push(e.any(i,[]));break;case"attr":r.push(e.attribute(i,c.name,c.node));break;case"text":r.push(e.text(i)),i.textContent=""}}return function(){var e=arguments.length,s=e-1,a=1;if(o!==s)throw new Error(s+" values instead of "+o+"\n"+t.join(", "));for(;a<e;)r[a-1](arguments[a++]);return n}}};return B.set(t,c),c}function F(e){return function(t){var n=G.get(e);return null!=n&&n.template===t||(n=function(e,t){var n=B.get(t)||H(e,t),r=w.call(document,n.content,!0),o={content:r,template:t,updates:n.updates(r)};return G.set(e,o),o}(e,t)),n.updates.apply(null,arguments),n.content}}var q=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,o){var s,a;return function(c){var i,l,u,f;switch(typeof c){case"object":if(c){if("object"===s){if(!o&&a!==c)for(l in a)l in c||(r[l]="")}else o?r.value="":r.cssText="";for(l in i=o?{}:r,c)u="number"!=typeof(f=c[l])||e.test(l)?f:f+"px",!o&&/^--/.test(l)?i.setProperty(l,u):i[l]=u;s="object",o?r.value=function(e){var r,o=[];for(r in e)o.push(r.replace(t,n),":",e[r],";");return o.join("")}(a=i):a=c;break}default:a!=c&&(s="string",a=c,o?r.value=c||"":r.cssText=c||"")}}}}();const I=(e,t)=>e.nodeType===o?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e,U=(e,t)=>{let n,r=!1;const o=t.cloneNode(!0);return t=>{n!==t&&(n=t,o.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(o)),o.value=t):(o.value=t,r||(r=!0,e.setAttributeNode(o)))))}},J=(e,t)=>{let n;return r=>{n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},K=/^(?:form|list)$/i,Q=[].slice,X=(e,t)=>e.ownerDocument.createTextNode(t);function Y(e){return this.type=e,F(this)}function ee(e){return e(this)}Y.prototype={attribute(e,t,n){switch(t){case"class":if("ownerSVGElement"in e)return U(e,n);t="className";case"data":case"props":return J(e,t);case"style":return q(e,n,"ownerSVGElement"in e);case"ref":return(e=>t=>{t.current=e})(e);default:return"."===t.slice(0,1)?((e,t)=>n=>{e[t]=n})(e,t.slice(1)):"on"===t.slice(0,2)?((e,t)=>{let n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}})(e,t):t in e&&!("ownerSVGElement"in e||K.test(t))?J(e,t):U(e,n)}},any(e,t){const n={node:I,before:e},o="ownerSVGElement"in e?"svg":"html";let s,c=!1;const i=l=>{switch(typeof l){case"string":case"number":case"boolean":c?s!==l&&(s=l,t[0].textContent=l):(c=!0,s=l,t=v(e.parentNode,t,[X(e,l)],n));break;case"function":i(l(e));break;case"object":case"undefined":if(null==l){c=!1,t=v(e.parentNode,t,[],n);break}default:if(c=!1,s=l,r(l))if(0===l.length)t.length&&(t=v(e.parentNode,t,[],n));else switch(typeof l[0]){case"string":case"number":case"boolean":i(String(l));break;case"function":i(l.map(ee,e));break;case"object":r(l[0])&&(l=l.concat.apply([],l));default:t=v(e.parentNode,t,l,n)}else(e=>"ELEMENT_NODE"in e)(l)?t=v(e.parentNode,t,11===l.nodeType?Q.call(l.childNodes):[l],n):"text"in l?i(String(l.text)):"any"in l?i(l.any):"html"in l?t=v(e.parentNode,t,Q.call(a([].concat(l.html).join(""),o).childNodes),n):"length"in l&&i(Q.call(l))}};return i},text(e){let t;const n=r=>{if(t!==r){t=r;const o=typeof r;"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(Q.call(r).join("")):"function"===o?n(r(e)):e.textContent=null==r?"":r}};return n}};const te=new WeakMap,ne=new WeakMap;let re=null;function oe(e,t){const n=function(e,t){const n=re;(re=te.get(e)||function(e){const t={i:0,length:0,stack:[],update:!1};return te.set(e,t),t}(e)).i=0;const r=t.call(this);let o;if(r instanceof fe){o=ce(le(r,0),re.update);const{i:e,length:t,stack:n,update:s}=re;e<t&&n.splice(re.length=e),s&&(re.update=!1)}else o=ce(r,!1);return re=n,o}.call(this,e,t);return ne.get(e)!==n&&(ne.set(e,n),function(e,t){e.textContent="",e.appendChild(t)}(e,n)),e}const se=ie("html"),ae=ie("svg");function ce(e,t){return e.nodeType===o?e.valueOf(t):e}function ie(e){const n=new WeakMap;return r.for=((r,o)=>{const s=n.get(r)||function(e){const t={$:null};return n.set(e,t),t}(r);return null==o&&(o="$"),s[o]||function(n,r){let o=null;const s=new Y(e);return n[r]=function(){const e=s.apply(null,t.apply(null,arguments));return o||(o=ue(e))}}(s,o)}),r;function r(){const n=t.apply(null,arguments);return re?new fe(e,n):new Y(e).apply(null,n)}}function le(e,t){const{i:n,length:o,stack:s}=re,{type:a,args:c}=e,i=n<o;re.i++,i||(re.length=s.push({l:t,kind:a,tag:null,tpl:c[0],wire:null})),function e(t,n,o){for(const{length:s}=t;n<s;n++){const s=t[n];"object"==typeof s&&s&&(s instanceof fe?t[n]=le(s,o-1):r(s)&&(t[n]=e(s,0,o++)))}return t}(c,1,t+1);const l=s[n];if(i){const{l:e,kind:n,tag:r,tpl:o,wire:s}=l;if(e===t&&a===n&&o===c[0])return r.apply(null,c),s}const u=new Y(a),f=ue(u.apply(null,c));return l.l=t,l.kind=a,l.tag=u,l.tpl=c[0],l.wire=f,n<1&&(re.update=!0),f}function ue(e){const t=e.childNodes,{length:r}=t;return 1===r?t[0]:r?new n(t):e}function fe(e,t){this.type=e,this.args=t}Object.freeze(fe);let pe=null;try{pe=new{o(){}}.o}catch(e){}let de=e=>(class extends e{});if(pe){const{getPrototypeOf:e,setPrototypeOf:t}=Object,{construct:n}="object"==typeof Reflect?Reflect:{construct(e,n,r){const o=[null];for(let e=0;e<n.length;e++)o.push(n[e]);const s=e.bind.apply(e,o);return t(new s,r.prototype)}};de=function(r,o){function s(){return n(o?e(r):r,arguments,s)}return t(s.prototype,r.prototype),t(s,r)}}const he={map:{},re:null},me=e=>new RegExp(`<(/)?(${e.join("|")})([^A-Za-z0-9_])`,"g");let ge=null;const ve=(e,t)=>{const{map:n,re:r}=ge||t;return e.replace(r,(e,t,r,o)=>{const{tagName:s,is:a,element:c}=n[r];return c?t?`</${a}>`:`<${a}${o}`:t?`</${s}>`:`<${s} is="${a}"${o}`})},ye=({tagName:e,is:t,element:n})=>n?t:`${e}[is="${t}"]`,we=()=>ge,be=e=>{ge=e},Ne="_🔥",{defineProperties:xe}=Object,Ee=new WeakMap,Ce=new WeakMap,ke=new WeakSet,Ae="attributeChangedCallback",$e="connectedCallback",je=`dis${$e}`,Me=(e,t,n)=>{if(n in e){const r=e[n];t[n]={configurable:!0,value(){return Re.call(this),r.apply(this,arguments)}}}else t[n]={configurable:!0,value:Re}},Se=e=>{const t=[],n={html:{configurable:!0,get:_e},svg:{configurable:!0,get:ze}};n[Ne]={value:{events:t,info:null}},"handleEvent"in e||(n.handleEvent={configurable:!0,value:Pe}),"oninit"in e&&(t.push("init"),Me(e,n,"render")),Me(e,n,Ae),Me(e,n,$e),Me(e,n,je),[[Ae,"onattributechanged",Ve],[$e,"onconnected",Be],[je,"ondisconnected",He],[$e,"render",Ge]].forEach(([r,o,s])=>{if(!(r in e)&&o in e)if("render"!==o&&t.push(o.slice(2)),r in n){const e=n[r].value;n[r]={configurable:!0,value(){return e.apply(this,arguments),s.apply(this,arguments)}}}else n[r]={configurable:!0,value:s}}),xe(e,n)},Te=e=>new Event(e),Oe=(...e)=>new fe("html",e);Oe.for=se.for;const Le=(...e)=>new fe("svg",e);Le.for=ae.for;const De=(e,t,n)=>{const r=We(e,t,new WeakMap);return n.set(e,r),r},We=(e,t,n)=>(r,...o)=>{const s=(e=>e)(r),a=n.get(s)||((e,t,{info:n})=>{const r=n?ve(t.join(Ne),n).split(Ne):t;return e.set(t,r),r})(n,s,e[Ne]);return oe(e,()=>t(a,...o))};function Ze(e){this.addEventListener(e,this)}function _e(){return Ee.get(this)||De(this,Oe,Ee)}function ze(){return Ce.get(this)||De(this,Le,Ce)}function Pe(e){this[`on${e.type}`](e)}function Re(){ke.has(this)||(ke.add(this),this[Ne].events.forEach(Ze,this),this.dispatchEvent(Te("init")))}function Ve(e,t,n){const r=Te("attributechanged");r.attributeName=e,r.oldValue=t,r.newValue=n,this.dispatchEvent(r)}function Be(){this.dispatchEvent(Te("connected"))}function Ge(){this.render()}function He(){this.dispatchEvent(Te("disconnected"))}const{create:Fe,defineProperty:qe,defineProperties:Ie,getOwnPropertyNames:Ue,getOwnPropertySymbols:Je,getOwnPropertyDescriptor:Ke,keys:Qe}=Object,Xe={element:HTMLElement},Ye=new WeakMap,et=new WeakMap,tt=e=>e.tagName||e.extends,nt=e=>{const t=Fe(null),n=Fe(null),r={statics:t,prototype:n,tag:tt(e)};return Ue(e).concat(Je(e)).forEach(r=>{const o=Ke(e,r);switch(o.enumerable=!1,r){case"extends":r="tagName";case"contains":case"includes":case"name":case"observedAttributes":case"style":case"tagName":t[r]=o;break;default:n[r]=o}}),r},rt=(e,t,n)=>{if(e.indexOf(":")<0&&(e+=":"+tt(t)),!/^([A-Z][A-Za-z0-9_]*):([A-Za-z0-9-]+)$/.test(e))throw"Invalid name or tagName";const{$1:r,$2:o}=RegExp,s=function(e,t){return e.replace(/([A-Z])([A-Z][a-z])/g,t="$1"+(t||"-")+"$2").replace(/([a-z])([A-Z])/g,t).toLowerCase()}(r)+n+"-heresy";if(customElements.get(s))throw`Duplicated ${s} definition`;const a=de("object"==typeof t?et.get(t)||(e=>{const{statics:t,prototype:n,tag:r}=nt(e),o=de(Xe[r]||(Xe[r]=document.createElement(r).constructor),!1);return Se(Ie(o.prototype,n)),et.set(e,Ie(o,t)),o})(t):Ye.get(t)||(e=>{const t=de(e,!1);return Se(t.prototype),Ye.set(e,t),t})(t),!0),c="element"===o;if(qe(a,"new",{value:c?()=>document.createElement(s):()=>document.createElement(o,{is:s})}),qe(a.prototype,"is",{value:s}),""===n){const e=(e=>{const{length:t}=e;let n=0,r=0;for(;r<t;)n=(n<<5)-n+e.charCodeAt(r++),n&=n;return n.toString(36)})(s.slice(0,-7).toUpperCase());he.map[r]=ot(a,o,s,{id:e,i:0}),he.re=me(Qe(he.map))}const i=[s,a];return c||i.push({extends:o}),customElements.define(...i),{Class:a,is:s,name:r,tagName:o}},ot=(e,t,n,r)=>{const{prototype:o}=e,s=((e,t)=>({tagName:e,is:t,element:"element"===e}))(t,n),a=[ye(s)],c=e.includes||e.contains;if(c){const e={};Qe(c).forEach(t=>{const n=`-${r.id}-${r.i++}`,{Class:o,is:s,name:i,tagName:l}=rt(t,c[t],n);a.push(ye(e[i]=ot(o,l,s,r)))});const t=me(Qe(e)),{events:n}=o[Ne],s={events:n,info:{map:e,re:t}};if(qe(o,Ne,{value:s}),"render"in o){const{render:e}=o,{info:t}=s;qe(o,"render",{value(){const n=we();be(t);const r=e.apply(this,arguments);return be(n),r}})}}return"style"in e&&(e=>{const t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e));const n=document.head||document.querySelector("head");n.insertBefore(t,n.lastChild)})(e.style(...a)),s};return(e=>{const{transform:t}=Y.prototype;Y.prototype.transform=t?n=>e(t(n)):e})(e=>ve(e,he)),e.define=((e,t)=>("string"==typeof e?rt(e,t,""):rt(e.name,e,"")).Class),e.html=Oe,e.ref=((e,t)=>e?e[t]||(e[t]={current:null}):{current:null}),e.render=((e,t)=>oe(e,"function"==typeof t?t:()=>t)),e.svg=Le,e}({});
