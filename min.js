/*! (c) Andrea Giammarchi - ISC */
var heresy=function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i={};try{i.WeakMap=WeakMap}catch(e){i.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,o=a.prototype;return o.delete=function(e){return this.has(e)&&delete e[this._]},o.get=function(e){return this.has(e)?e[this._]:void 0},o.has=function(e){return r.call(e,this._)},o.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},a;function a(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(i,this)}function i(e){this.set(e[0],e[1])}}(Math.random(),Object)}var c=i.WeakMap,u=function(){var t=!1,n=function(o){if(!("raw"in o)||o.propertyIsEnumerable("raw")||!Object.isFrozen(o.raw)||/Firefox\/(\d+)/.test((e.defaultView.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var a={};n=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return a[t]||(a[t]=e)}}else t=!0;return r(o)};return r;function r(e){return t?e:n(e)}}();function l(e){for(var t=arguments.length,n=[u(e)],r=1;r<t;)n.push(arguments[r++]);return n}var s=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var o=this.ownerDocument.createRange();o.setStartBefore(e?t[1]:n),o.setEndAfter(r),o.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,o=0,a=r.length;o<a;o++)t.appendChild(r[o]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice),f=Array.isArray,h=s.prototype.nodeType,p=function(e){var t="fragment",n="content"in o("template")?function(e){var t=o("template");return t.innerHTML=e,t.content}:function(e){var n=o(t),a=o("template"),i=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var c=RegExp.$1;a.innerHTML="<table>"+e+"</table>",i=a.querySelectorAll(c)}else a.innerHTML=e,i=a.childNodes;return r(n,i),n};return function(e,a){return("svg"===a?function(e){var n=o(t),a=o("div");return a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",r(n,a.firstChild.childNodes),n}:n)(e)};function r(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function o(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(e),d={};try{d.Map=Map}catch(e){d.Map=function(){var e=0,t=[],n=[];return{delete:function(o){var a=r(o);return a&&(t.splice(e,1),n.splice(e,1)),a},get:function(t){return r(t)?n[e]:void 0},has:function(e){return r(e)},set:function(o,a){return n[r(o)?e:t.push(o)-1]=a,this}};function r(n){return-1<(e=t.indexOf(n))}}}var v,g=d.Map,y=function(e,t,n,r,o,a){if(o-r<2)t.insertBefore(e(n[r],1),a);else{for(var i=t.ownerDocument.createDocumentFragment();r<o;)i.appendChild(e(n[r++],1));t.insertBefore(i,a)}},m=function(e,t){return e==t},b=function(e){return e},w=function(e,t,n,r,o,a,i){var c=a-o;if(c<1)return-1;for(;n-t>=c;){for(var u=t,l=o;u<n&&l<a&&i(e[u],r[l]);)u++,l++;if(l===a)return t;t=u+1}return-1},E=function(e,t,n,r,o){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:o},N=function(e,t,n,r,o){if(o-r<2)t.removeChild(e(n[r],-1));else{var a=t.ownerDocument.createRange();a.setStartBefore(e(n[r],-1)),a.setEndAfter(e(n[o-1],-1)),a.deleteContents()}},x=function(e,t,n){for(var r=1,o=t;r<o;){var a=(r+o)/2>>>0;n<e[a]?o=a:r=a+1}return r},C=function(e,t,n,r,o,a,i,c,u,l,s,f,h){!function(e,t,n,r,o,a,i,c,u){for(var l=new g,s=e.length,f=i,h=0;h<s;)switch(e[h++]){case 0:o++,f++;break;case 1:l.set(r[o],1),y(t,n,r,o++,o,f<c?t(a[f],0):u);break;case-1:f++}for(h=0;h<s;)switch(e[h++]){case 0:i++;break;case-1:l.has(a[i])?i++:N(t,n,a,i++,i)}}(function(e,t,n,r,o,a,i){var c,u,l,s,f,h,p,d=n+a,v=[];e:for(c=0;c<=d;c++){if(c>50)return null;for(p=c-1,f=c?v[c-1]:[0,0],h=v[c]=[],u=-c;u<=c;u+=2){for(l=(s=u===-c||u!==c&&f[p+u-1]<f[p+u+1]?f[p+u+1]:f[p+u-1]+1)-u;s<a&&l<n&&i(r[o+s],e[t+l]);)s++,l++;if(s===a&&l===n)break e;h[c+u]=s}}var g=Array(c/2+d/2),y=g.length-1;for(c=v.length-1;c>=0;c--){for(;s>0&&l>0&&i(r[o+s-1],e[t+l-1]);)g[y--]=0,s--,l--;if(!c)break;p=c-1,f=c?v[c-1]:[0,0],(u=s-l)==-c||u!==c&&f[p+u-1]<f[p+u+1]?(l--,g[y--]=1):(s--,g[y--]=-1)}return g}(n,r,a,i,c,l,f)||function(e,t,n,r,o,a,i,c){var u=0,l=r<c?r:c,s=Array(l++),f=Array(l);f[0]=-1;for(var h=1;h<l;h++)f[h]=i;for(var p=new g,d=a;d<i;d++)p.set(o[d],d);for(var v=t;v<n;v++){var y=p.get(e[v]);null!=y&&-1<(u=x(f,l,y))&&(f[u]=y,s[u]={newi:v,oldi:y,prev:s[u-1]})}for(u=--l,--i;f[u]>i;)--u;l=c+r-u;var m=Array(l),b=s[u];for(--n;b;){for(var w=b,E=w.newi,N=w.oldi;n>E;)m[--l]=1,--n;for(;i>N;)m[--l]=-1,--i;m[--l]=0,--n,--i,b=b.prev}for(;n>=t;)m[--l]=1,--n;for(;i>=a;)m[--l]=-1,--i;return m}(n,r,o,a,i,c,u,l),e,t,n,r,i,c,s,h)},k=function(e,t,n,r){r||(r={});for(var o=r.compare||m,a=r.node||b,i=null==r.before?null:a(r.before,0),c=t.length,u=c,l=0,s=n.length,f=0;l<u&&f<s&&o(t[l],n[f]);)l++,f++;for(;l<u&&f<s&&o(t[u-1],n[s-1]);)u--,s--;var h=l===u,p=f===s;if(h&&p)return n;if(h&&f<s)return y(a,e,n,f,s,E(a,t,l,c,i)),n;if(p&&l<u)return N(a,e,t,l,u),n;var d=u-l,v=s-f,g=-1;if(d<v){if(-1<(g=w(n,f,s,t,l,u,o)))return y(a,e,n,f,g,a(t[l],0)),y(a,e,n,g+d,s,E(a,t,u,c,i)),n}else if(v<d&&-1<(g=w(t,l,u,n,f,s,o)))return N(a,e,t,l,g),N(a,e,t,g+v,u),n;return d<2||v<2?(y(a,e,n,f,s,a(t[l],0)),N(a,e,t,l,u),n):d===v&&function(e,t,n,r,o,a){for(;r<o&&a(n[r],e[t-1]);)r++,t--;return 0===t}(n,s,t,l,u,o)?(y(a,e,n,f,s,E(a,t,u,c,i)),n):(C(a,e,n,f,s,v,t,l,u,d,c,o,i),n)},A=function(e,t,n,r,o){var a="importNode"in e,i=e.createDocumentFragment();return i.appendChild(e.createTextNode("g")),i.appendChild(e.createTextNode("")),(a?e.importNode(i,!0):i.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),o=t.childNodes||[],a=o.length,i=0;n&&i<a;i++)r.appendChild(e(o[i],n));return r}:a?e.importNode:function(e,t){return e.cloneNode(!!t)}}(e),O="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},j="-"+Math.random().toFixed(6)+"%";try{"content"in(v=e.createElement("template"))&&(v.innerHTML='<p tabindex="'+j+'"></p>',v.content.childNodes[0].getAttribute("tabindex")==j)||(j="_dt: "+j.slice(1,-1)+";")}catch(e){}var S="\x3c!--"+j+"--\x3e",T=8,_=1,M=3,$=/^(?:style|textarea)$/i,L=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var D=" \\f\\n\\r\\t",P="[^"+D+"\\/>\"'=]+",R="["+D+"]+"+P,Z="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",z="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+P.replace("\\/","")+"))?)",W=new RegExp(Z+R+z+"+)(["+D+"]*/?>)","g"),F=new RegExp(Z+R+z+"*)(["+D+"]*/>)","g"),V=new RegExp("("+R+"\\s*=\\s*)(['\"]?)"+S+"\\2","gi");function H(e,t,n,r){return"<"+t+n.replace(V,B)+r}function B(e,t,n){return t+(n||'"')+j+(n||'"')}function G(e,t,n){return L.test(t)?e:"<"+t+n+"></"+t+">"}function I(e,t,n,r){return{name:r,node:t,path:n,type:e}}function q(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function J(t,n,r,o){for(var a=new g,i=t.attributes,c=[],u=c.slice.call(i,0),l=u.length,s=0;s<l;){var f=u[s++];if(f.value===j){var h=f.name;if(!a.has(h)){var p=r.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/,"$1"),d=i[p]||i[p.toLowerCase()];a.set(h,d),n.push(I("attr",d,o,p))}c.push(f)}}for(l=c.length,s=0;s<l;){var v=c[s++];/^id$/i.test(v.name)?t.removeAttribute(v.name):t.removeAttributeNode(v)}var y=t.nodeName;if(/^script$/i.test(y)){var m=e.createElement(y);for(l=i.length,s=0;s<l;)m.setAttributeNode(i[s++].cloneNode(!0));m.textContent=t.textContent,t.parentNode.replaceChild(m,t)}}var K=new c,Q=new c;function U(e,t){var n=function(e){return e.join(S).replace(F,G).replace(W,H)}(t),r=e.transform;r&&(n=r(n));var o=p(n,e.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===O.call(r.textContent).length&&e.removeChild(r)}}(o);var a=[];!function e(t,n,r,o){for(var a=t.childNodes,i=a.length,c=0;c<i;){var u=a[c];switch(u.nodeType){case _:var l=o.concat(c);J(u,n,r,l),e(u,n,r,l);break;case T:var s=u.textContent;if(s===j)r.shift(),n.push($.test(t.nodeName)?I("text",t,o):I("any",u,o.concat(c)));else switch(s.slice(0,2)){case"/*":if("*/"!==s.slice(-2))break;case"👻":t.removeChild(u),c--,i--}break;case M:$.test(t.nodeName)&&O.call(u.textContent)===S&&(r.shift(),n.push(I("text",t,o)))}c++}}(o,a,t.slice(0),[]);var i={content:o,updates:function(n){for(var r=[],o=a.length,i=0;i<o;){var c=a[i++],u=q(n,c.path);switch(c.type){case"any":r.push(e.any(u,[]));break;case"attr":r.push(e.attribute(u,c.name,c.node));break;case"text":r.push(e.text(u)),u.textContent=""}}return function(){var e=arguments.length,a=e-1,i=1;if(o!==a)throw new Error(a+" values instead of "+o+"\n"+t.join(", "));for(;i<e;)r[i-1](arguments[i++]);return n}}};return K.set(t,i),i}function X(t){return function(n){var r=Q.get(t);return null!=r&&r.template===n||(r=function(t,n){var r=K.get(n)||U(t,n),o=A.call(e,r.content,!0),a={content:o,template:n,updates:r.updates(o)};return Q.set(t,a),a}(t,n)),r.updates.apply(null,arguments),r.content}}var Y=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,o){var a,i;return function(c){var u,l,s,f;switch(typeof c){case"object":if(c){if("object"===a){if(!o&&i!==c)for(l in i)l in c||(r[l]="")}else o?r.value="":r.cssText="";for(l in u=o?{}:r,c)s="number"!=typeof(f=c[l])||e.test(l)?f:f+"px",!o&&/^--/.test(l)?u.setProperty(l,s):u[l]=s;a="object",o?r.value=function(e){var r,o=[];for(r in e)o.push(r.replace(t,n),":",e[r],";");return o.join("")}(i=u):i=c;break}default:i!=c&&(a="string",i=c,o?r.value=c||"":r.cssText=c||"")}}}}(),ee=function(e,t){return e.nodeType===h?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e},te=function(e,t){var n,r=!1,o=t.cloneNode(!0);return function(t){n!==t&&(n=t,o.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(o)),o.value=t):(o.value=t,r||(r=!0,e.setAttributeNode(o)))))}},ne=function(e,t){var n;return function(r){n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},re=/^(?:form|list)$/i,oe=[].slice;function ae(e){return this.type=e,X(this)}function ie(e){return e(this)}ae.prototype={attribute:function(e,t,n){switch(t){case"class":if("ownerSVGElement"in e)return te(e,n);t="className";case"data":case"props":return ne(e,t);case"style":return Y(e,n,"ownerSVGElement"in e);case"ref":return function(e){return function(t){t.current=e}}(e);default:return"."===t.slice(0,1)?function(e,t){return function(n){e[t]=n}}(e,t.slice(1)):"on"===t.slice(0,2)?function(e,t){var n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}}(e,t):t in e&&!("ownerSVGElement"in e||re.test(t))?ne(e,t):te(e,n)}},any:function(e,t){var n,r={node:ee,before:e},o="ownerSVGElement"in e?"svg":"html",a=!1;return function i(c){switch(typeof c){case"string":case"number":case"boolean":a?n!==c&&(n=c,t[0].textContent=c):(a=!0,n=c,t=k(e.parentNode,t,[function(e,t){return e.ownerDocument.createTextNode(t)}(e,c)],r));break;case"function":i(c(e));break;case"object":case"undefined":if(null==c){a=!1,t=k(e.parentNode,t,[],r);break}default:if(a=!1,n=c,f(c))if(0===c.length)t.length&&(t=k(e.parentNode,t,[],r));else switch(typeof c[0]){case"string":case"number":case"boolean":i(String(c));break;case"function":i(c.map(ie,e));break;case"object":f(c[0])&&(c=c.concat.apply([],c));default:t=k(e.parentNode,t,c,r)}else!function(e){return"ELEMENT_NODE"in e}(c)?"text"in c?i(String(c.text)):"any"in c?i(c.any):"html"in c?t=k(e.parentNode,t,oe.call(p([].concat(c.html).join(""),o).childNodes),r):"length"in c&&i(oe.call(c)):t=k(e.parentNode,t,11===c.nodeType?oe.call(c.childNodes):[c],r)}}},text:function(e){var t;return function n(r){if(t!==r){t=r;var o=typeof r;"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(oe.call(r).join("")):"function"===o?n(r(e)):e.textContent=null==r?"":r}}}};var ce=new c,ue=new c,le=null;function se(e,t){var n=function(e,t){var n=le;(le=ce.get(e)||(r=e,o={i:0,length:0,stack:[],update:!1},ce.set(r,o),o)).i=0;var r,o;var a,i=t.call(this);if(i instanceof ye){a=pe(ve(i,0),le.update);var c=le,u=c.i,l=c.length,s=c.stack,f=c.update;u<l&&s.splice(le.length=u),f&&(le.update=!1)}else a=pe(i,!1);return le=n,a}.call(this,e,t);return ue.get(e)!==n&&(ue.set(e,n),function(e,t){e.textContent="",e.appendChild(t)}(e,n)),e}var fe=de("html"),he=de("svg");function pe(e,t){return e.nodeType===h?e.valueOf(t):e}function de(e){var t=new c;return n.for=function(n,r){var o=t.get(n)||function(e){var n={$:null};return t.set(e,n),n}(n);return null==r&&(r="$"),o[r]||function(t,n){var r=null,o=new ae(e);return t[n]=function(){var e=o.apply(null,l.apply(null,arguments));return r||(r=ge(e))}}(o,r)},n;function n(){var t=l.apply(null,arguments);return le?new ye(e,t):new ae(e).apply(null,t)}}function ve(e,t){var n=le,r=n.i,o=n.length,a=n.stack,i=e.type,c=e.args,u=r<o;le.i++,u||(le.length=a.push({l:t,kind:i,tag:null,tpl:c[0],wire:null})),function e(t,n,r){for(var o=t.length;n<o;n++){var a=t[n];"object"==typeof a&&a&&(a instanceof ye?t[n]=ve(a,r-1):f(a)&&(t[n]=e(a,0,r++)))}return t}(c,1,t+1);var l=a[r];if(u){var s=l.l,h=l.kind,p=l.tag,d=l.tpl,v=l.wire;if(s===t&&i===h&&d===c[0])return p.apply(null,c),v}var g=new ae(i),y=ge(g.apply(null,c));return l.l=t,l.kind=i,l.tag=g,l.tpl=c[0],l.wire=y,r<1&&(le.update=!0),y}function ge(e){var t=e.childNodes,n=t.length;return 1===n?t[0]:n?new s(t):e}function ye(e,t){this.type=e,this.args=t}Object.freeze(ye);var me={};try{me.Event=new Event(".").constructor}catch(t){try{me.Event=new CustomEvent(".").constructor}catch(t){me.Event=function(t,n){n||(n={});var r=e.createEvent("Event"),o=!!n.bubbles,a=!!n.cancelable;r.initEvent(t,o,a);try{r.bubbles=o,r.cancelable=a}catch(r){}return r}}}var be=me.Event,we={};try{we.WeakSet=WeakSet}catch(e){!function(e){var t=new e,n=r.prototype;function r(n){t.set(this,new e),n&&n.forEach(this.add,this)}n.add=function(e){return t.get(this).set(e,1),this},n.delete=function(e){return t.get(this).delete(e)},n.has=function(e){return t.get(this).has(e)},we.WeakSet=r}(WeakMap)}var Ee=we.WeakSet,Ne=Object.getPrototypeOf,xe="attributeChangedCallback",Ce="connectedCallback",ke="dis".concat(Ce),Ae=new Ee,Oe=new c,je=function(e,t,n){if(n in e){var r=e[n];t[n]={configurable:!0,value:function(){return ze.call(this),r.call(this)}}}else t[n]={configurable:!0,value:ze}},Se=function(e){Oe.set(e,[]);var t={html:{configurable:!0,get:De},svg:{configurable:!0,get:Pe}};return"handleEvent"in e||(t.handleEvent={configurable:!0,value:Ze}),"is"in e||(t.is={configurable:!0,get:Re}),"oninit"in e&&(Oe.get(e).push("init"),je(e,t,"render")),je(e,t,xe),je(e,t,Ce),je(e,t,ke),[[xe,"onattributechanged",function(e,t,n){var r=new be("attributechanged");r.attributeName=e,r.oldValue=t,r.newValue=n,this.dispatchEvent(r)}],[Ce,"onconnected",function(){this.dispatchEvent(new be("connected"))}],[ke,"ondisconnected",function(){this.dispatchEvent(new be("disconnected"))}],[Ce,"render",function(){this.render()}]].forEach(function(n){var r=a(n,3),o=r[0],i=r[1],c=r[2];if(!(o in e)&&i in e)if("on"===i.slice(0,2)&&Oe.get(e).push(i.slice(2)),o in t){var u=t[o].value;t[o]={configurable:!0,value:function(){return u.apply(this,arguments),c.apply(this,arguments)}}}else t[o]={configurable:!0,value:c}}),t},Te=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new ye("html",t)};Te.for=fe.for;var _e=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new ye("svg",t)};_e.for=he.for;var Me=function(e,t){return se(e,"function"==typeof t?t:function(){return t})},$e=function(e,t){return function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return Me(e,function(){return t.apply(void 0,r)})}};function Le(e){this.addEventListener(e,this)}function De(){return $e(this,Te)}function Pe(){return $e(this,_e)}function Re(){return this.getAttribute("is")}function Ze(e){this["on".concat(e.type)](e)}function ze(){Ae.has(this)||(Ae.add(this),Oe.get(Ne(this)).forEach(Le,this),this.dispatchEvent(new be("init")))}var We=Reflect.construct,Fe=Reflect.setPrototypeOf,Ve=!1;try{Ve=!!new function(){}}catch(e){}var He=Ve?function(e){var t=function t(){return We(e,arguments,t)};return Fe(t,e),Fe(t.prototype,e.prototype),t}:function(e){return function(t){function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),o(this,n(a).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(a,e),a}()},Be=Object.defineProperty,Ge=Object.defineProperties,Ie=Object.getOwnPropertyNames,qe=Object.getOwnPropertySymbols,Je=Object.getOwnPropertyDescriptor,Ke=Object.keys,Qe={element:HTMLElement},Ue={},Xe=null,Ye=!0,et=function(e){return e.tagName||e.extends},tt=0,nt=function(){var t=tt?"-"+tt:"";return tt++,function(n,r){if("string"!=typeof n&&(n=(r=n).name),n.indexOf(":")<0&&(n+=":"+et(r)),"object"==typeof r&&(r=function(t){var n=et(t),r=He(Qe[n]||(Qe[n]=e.createElement(n).constructor));return Ie(t).concat(qe(t)).forEach(function(e){var n=Je(t,e);switch(n.enumerable=!1,e){case"extends":e="tagName";case"name":case"observedAttributes":case"style":case"tagName":Be(r,e,n);break;default:Be(r.prototype,e,n)}}),r}(r)),!/^([A-Z][A-Za-z0-9_]*):([A-Za-z0-9-]+)$/.test(n))throw"Invalid name or tagName";var o,a=RegExp.$1,i=RegExp.$2,c=a.replace(/([A-Z])([A-Z][a-z])/g,o="$1"+(o||"-")+"$2").replace(/([a-z])([A-Z])/g,o).toLowerCase()+t+"-heresy";if(customElements.get(c))throw"Duplicated ".concat(c," definition");var u=r,l=u.prototype,s=u.style;Ge(l,Se(l)),customElements.define(c,r,{extends:i}),Ue[a]={tagName:i,is:c},s&&function(t){var n=e.createElement("style");n.type="text/css",n.styleSheet?n.styleSheet.cssText=t:n.appendChild(e.createTextNode(t));var r=e.head||e.querySelector("head");r.insertBefore(n,r.lastChild)}(s.call(r,"".concat(i,'[is="').concat(c,'"]'))),Ye&&(Ye=!1,function(e){var t=ae.prototype.transform;ae.prototype.transform=t?function(n){return e(t(n))}:e}(function(e){return e.replace(Xe,function(e,t,n,r){var o=Ue[n],a=o.tagName,i=o.is;return t?"</".concat(a,">"):"<".concat(a,' is="').concat(i,'"').concat(r)})}));var f=Ke(Ue).join("|");return Xe=new RegExp("<(/)?(".concat(f,")([^A-Za-z0-9_])"),"g"),r}},rt=Ge(nt(),{local:{get:nt}});return t.define=rt,t.html=Te,t.ref=function(e,t){return e?e[t]||(e[t]={current:null}):{current:null}},t.render=Me,t.svg=_e,t}(document,{});
