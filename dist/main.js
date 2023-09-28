(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),i=n(645),c=n.n(i),a=n(667),d=n.n(a),s=new URL(n(777),n.b),l=c()(o()),u=d()(s);l.push([e.id,`body {\n    margin: 0;\n    background-image: url(${u});\n    background-size: cover;\n}\n\n#content {\n    display: grid;\n    grid-template-rows: 8% 1fr 8%;\n    width: 100vw;\n    height: 100vh;\n}\n\n.bar {\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    background-color: #fdba74;\n}\n\n.bar button {\n    border-style: none;\n    margin-left: 2rem;\n    margin-right: 2rem;\n    background-color: #fdba74;\n}\n\n.home-page {\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    padding-bottom: 8rem;\n}\n\n.quote {\n    color: white;\n    font-weight: bolder;\n}\n\n.footer {\n    background-color: #fdba74;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    grid-row: 3/4;\n}\n\n.menu-div {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    background-color: antiquewhite;\n}\n\n.menu-item {\n    border-style: solid;\n}\n\nform {\n    background-color: antiquewhite;\n    display: flex;\n    flex-direction: column;\n}\n\n.form-top {\n    display: flex; \n    flex-direction: column;\n    \n}\n\nform div {\n    display: flex;\n    flex-direction: column;\n    padding: 1rem;\n    justify-items: center;\n    align-items: center;\n}\n\n.message-input {\n    width: 50%;\n    height: 10rem;\n}\n\nbutton[type='submit'] {\n    width: 25%;\n    align-self: center;\n}\n\n\n\n\n\n`,""]);const p=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&c[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},c=[],a=0;a<e.length;a++){var d=e[a],s=r.base?d[0]+r.base:d[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=a,t.splice(a,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var a=n(i[c]);t[a].references--}for(var d=r(e,o),s=0;s<i.length;s++){var l=n(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},777:(e,t,n)=>{e.exports=n.p+"ac8b162f5cddd04965fe.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{function e(){const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("child"),t.classList.add("home-page");const n=document.createElement("p");n.classList.add("quote"),t.appendChild(n),e.appendChild(t),n.textContent="This restaurant is certainly a restaurant..."}var t=n(379),r=n.n(t),o=n(795),i=n.n(o),c=n(569),a=n.n(c),d=n(565),s=n.n(d),l=n(216),u=n.n(l),p=n(589),m=n.n(p),f=n(426),h={};h.styleTagTransform=m(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=u(),r()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,function(){const t=document.getElementById("content"),n=document.createElement("div");n.classList.add("bar");const r=document.createElement("button"),o=document.createElement("button"),i=document.createElement("button");r.classList.add("home"),r.textContent="Home",o.classList.add("menu"),o.textContent="Menu",i.classList.add("contact"),i.textContent="Contact",n.appendChild(r),n.appendChild(o),n.appendChild(i),t.appendChild(n),r.addEventListener("click",(()=>{document.querySelectorAll(".child").forEach((e=>e.remove())),console.log("ran"),e()})),o.addEventListener("click",(()=>{document.querySelectorAll(".child").forEach((e=>e.remove())),function(){const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("child"),t.classList.add("menu-div");const n=["chicken","chicken","chicken","chicken","chicken","chicken","chicken","chicken","chicken","chicken","chicken","chicken"];n.forEach(((e,r)=>{const o=document.createElement("div");o.classList.add("menu-item");const i=document.createElement("p"),c=document.createElement("p"),a=document.createElement("p");o.appendChild(i),o.appendChild(c),o.appendChild(a),i.textContent=n[r],c.textContent="description description description description description description description description",a.textContent="$9.99",t.appendChild(o)})),e.appendChild(t)}()})),i.addEventListener("click",(()=>{document.querySelectorAll(".child").forEach((e=>e.remove())),function(){const e=document.getElementById("content"),t=document.createElement("form");t.classList.add("child");const n=document.createElement("div"),r=document.createElement("label"),o=document.createElement("input");r.setAttribute("for","firstName"),r.textContent="First Name:",o.setAttribute("type","text"),o.setAttribute("id","firstName"),o.setAttribute("name","firstName"),n.appendChild(r),n.appendChild(o);const i=document.createElement("div"),c=document.createElement("label"),a=document.createElement("input");c.setAttribute("for","lastName"),c.textContent="Last Name:",a.setAttribute("type","text"),a.setAttribute("id","lastName"),a.setAttribute("name","lastName"),i.appendChild(c),i.appendChild(a);const d=document.createElement("div"),s=document.createElement("label"),l=document.createElement("input");s.setAttribute("for","email"),s.textContent="Email:",l.setAttribute("type","email"),l.setAttribute("id","email"),l.setAttribute("name","email"),d.appendChild(s),d.appendChild(l);const u=document.createElement("div"),p=document.createElement("label"),m=document.createElement("input");p.setAttribute("for","phone"),p.textContent="Phone Number:",m.setAttribute("type","number"),m.setAttribute("id","phone"),m.setAttribute("name","phone"),u.appendChild(p),u.appendChild(m);const f=document.createElement("div"),h=document.createElement("label"),b=document.createElement("input");b.classList.add("message-input"),h.setAttribute("for","message"),h.textContent="Message:",b.setAttribute("type","text"),b.setAttribute("id","message"),b.setAttribute("name","message"),f.appendChild(h),f.appendChild(b);const v=document.createElement("button");v.setAttribute("type","submit"),v.textContent="Submit";const g=document.createElement("div");g.classList.add("form-top"),g.append(n),g.append(i),g.append(d),g.append(u),t.append(g),t.append(f),t.append(v),e.appendChild(t)}()}))}(),e(),function(){const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("footer"),t.textContent="Photo: Jason Leung",e.appendChild(t)}()})()})();