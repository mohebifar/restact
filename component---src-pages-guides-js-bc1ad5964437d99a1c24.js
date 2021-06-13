webpackJsonp([80228475665765],{82:function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function r(e){return"string"!=typeof e&&(e=String(e)),e}function n(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return b.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function a(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function s(e){var t=new FileReader,r=a(t);return t.readAsArrayBuffer(e),r}function u(e){var t=new FileReader,r=a(t);return t.readAsText(e),r}function d(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}function l(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(b.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(b.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(b.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(b.arrayBuffer&&b.blob&&g(e))this._bodyArrayBuffer=l(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!b.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!v(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=l(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(d(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function c(e){var t=e.toUpperCase();return _.indexOf(t)>-1?t:e}function h(e,t){t=t||{};var r=t.body;if(e instanceof h){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=c(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function p(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function y(e){var t=new o,r=e.replace(/\r?\n[\t ]+/g," ");return r.split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}}),t}function m(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var b={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(b.arrayBuffer)var w=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],g=function(e){return e&&DataView.prototype.isPrototypeOf(e)},v=ArrayBuffer.isView||function(e){return e&&w.indexOf(Object.prototype.toString.call(e))>-1};o.prototype.append=function(e,n){e=t(e),n=r(n);var o=this.map[e];this.map[e]=o?o+","+n:n},o.prototype.delete=function(e){delete this.map[t(e)]},o.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,n){this.map[t(e)]=r(n)},o.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),n(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),n(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),n(e)},b.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];h.prototype.clone=function(){return new h(this,{body:this._bodyInit})},f.call(h.prototype),f.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},m.error=function(){var e=new m(null,{status:0,statusText:""});return e.type="error",e};var x=[301,302,303,307,308];m.redirect=function(e,t){if(x.indexOf(t)===-1)throw new RangeError("Invalid status code");return new m(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=h,e.Response=m,e.fetch=function(e,t){return new Promise(function(r,n){var o=new h(e,t),i=new XMLHttpRequest;i.onload=function(){var e={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var t="response"in i?i.response:i.responseText;r(new m(t,e))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials?i.withCredentials=!0:"omit"===o.credentials&&(i.withCredentials=!1),"responseType"in i&&b.blob&&(i.responseType="blob"),o.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send("undefined"==typeof o._bodyInit?null:o._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},416:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=r(12),i=n(o),a=(0,i.default)(["\n  background-color: #8a9694;\n  background-blend-mode: multiply;\n  background-image: url(https://upload.wikimedia.org/wikipedia/commons/c/ce/New_Residence%2C_Memorial_University_of_Newfoundland.jpg);\n  background-size: cover;\n  background-position: center 30%;\n  padding: 120px 0;\n  text-align: center;\n  color: white;\n  margin-bottom: 50px;\n  text-shadow: 0 0 25px #000;\n\n  h1 {\n    font-weight: 400;\n    font-size: 2.5em;\n  }\n\n  h2 {\n    font-weight: 300;\n  }\n"],["\n  background-color: #8a9694;\n  background-blend-mode: multiply;\n  background-image: url(https://upload.wikimedia.org/wikipedia/commons/c/ce/New_Residence%2C_Memorial_University_of_Newfoundland.jpg);\n  background-size: cover;\n  background-position: center 30%;\n  padding: 120px 0;\n  text-align: center;\n  color: white;\n  margin-bottom: 50px;\n  text-shadow: 0 0 25px #000;\n\n  h1 {\n    font-weight: 400;\n    font-size: 2.5em;\n  }\n\n  h2 {\n    font-weight: 300;\n  }\n"]),s=(0,i.default)(["\n  display: block;\n  text-align: center;\n  border: 1px solid #dadada;\n  border-radius: 5px;\n  padding: 10px;\n  color: #777;\n\n  > .icon {\n    font-size: 3.5em;\n    margin-bottom: 10px;\n  }\n\n  &:hover {\n    color: #40b7a1;\n    border-color: #40b7a1;\n  }\n"],["\n  display: block;\n  text-align: center;\n  border: 1px solid #dadada;\n  border-radius: 5px;\n  padding: 10px;\n  color: #777;\n\n  > .icon {\n    font-size: 3.5em;\n    margin-bottom: 10px;\n  }\n\n  &:hover {\n    color: #40b7a1;\n    border-color: #40b7a1;\n  }\n"]),u=r(2),d=n(u),l=r(14),f=n(l);r(82);var c=r(76),h=n(c),p=r(108),y=n(p),m=r(93),b=n(m),w=r(27),g=f.default.div(a),v=(0,f.default)(b.default)(s),_=[{title:"اسکان و محل اقامت",path:"/guides/accommodation",icon:"home"},{title:"بانک و افتتاح حساب",path:"/guides/banks",icon:"money"},{title:"ورود به سینت‌جانز",path:"/guides/coming-to-st-johns",icon:"plane"},{title:"بیمه درمانی",path:"/guides/health-insurance",icon:"user-md"},{title:"حمل و نقل شهری",path:"/guides/transportation",icon:"bus"},{title:"جاذبه‌های گردشگری",path:"/guides",icon:"tripadvisor"}],x=function(){return d.default.createElement("div",null,d.default.createElement(y.default,null,d.default.createElement("title",null,"راهنمای ورودی‌های جدید - مان‌ایرانیان"),d.default.createElement("meta",{name:"description",content:"راهنمای ورود به سینت‌جانز نیوفاوندلند کانادا برای دانشجویان جدید دانشگاه مموریال"}),d.default.createElement("meta",{name:"keywords",content:"Memorial University, Iranian, MUNIranians, Guide, Newcomers, Persian, راهنمای ورود به کانادا, حساب بانکی کانادا, بلیت کانادا, نیوفاوندلند, Newfoundland"})),d.default.createElement(g,null,d.default.createElement("h1",{className:"farsi"},"راهنمای ورودی‌های جدید"),d.default.createElement("h2",null,"Guides for Newcomers")),d.default.createElement(w.Container,null,d.default.createElement(w.Panel,null,d.default.createElement(w.Flex,{flexDirection:["column","row","row"],wrap:"wrap",flexJustifyContent:"space-between"},_.map(function(e){var t=e.path,r=e.title,n=e.icon;return d.default.createElement(w.Box,{key:t,width:[1,.5,.5],p:[5,5,5]},d.default.createElement(v,{className:"farsi",to:t},d.default.createElement("div",{className:"icon"},d.default.createElement(h.default,{name:n})),d.default.createElement("div",null,r)))})))),d.default.createElement("div",{style:{marginBottom:50}}))};x.propTypes={},t.default=x,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-guides-js-bc1ad5964437d99a1c24.js.map