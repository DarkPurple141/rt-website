(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2624:function(e,t,n){"use strict";n.d(t,{r:function(){return r},C:function(){return i}});var r=768,i=20},2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var i,s=(i=n(7294))&&i.__esModule?i:{default:i},o=n(1063),c=n(4651),a=n(7426);var l={};function u(e,t,n,r){if(e&&o.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(i?"%"+i:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,i=c.useRouter(),d=s.default.useMemo((function(){var t=o.resolveHref(i,e.href,!0),n=r(t,2),s=n[0],c=n[1];return{href:s,as:e.as?o.resolveHref(i,e.as):c||s}}),[i,e.href,e.as]),f=d.href,h=d.as,p=e.children,m=e.replace,y=e.shallow,v=e.scroll,_=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var g=(t=s.default.Children.only(p))&&"object"===typeof t&&t.ref,x=a.useIntersection({rootMargin:"200px"}),j=r(x,2),w=j[0],b=j[1],S=s.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);s.default.useEffect((function(){var e=b&&n&&o.isLocalURL(f),t="undefined"!==typeof _?_:i&&i.locale,r=l[f+"%"+h+(t?"%"+t:"")];e&&!r&&u(i,f,h,{locale:t})}),[h,f,b,_,n,i]);var k={ref:S,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,s,c,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[i?"replace":"push"](n,r,{shallow:s,locale:a,scroll:c}))}(e,i,f,h,m,y,v,_)},onMouseEnter:function(e){o.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(i,f,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var R="undefined"!==typeof _?_:i&&i.locale,C=i&&i.isLocaleDomain&&o.getDomainLocale(h,R,i&&i.locales,i&&i.domainLocales);k.href=C||o.addBasePath(o.addLocale(h,R,i&&i.defaultLocale))}return s.default.cloneElement(t,k)};t.default=d},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,a=i.useRef(),l=i.useState(!1),u=r(l,2),d=u[0],f=u[1],h=i.useCallback((function(e){a.current&&(a.current(),a.current=void 0),n||d||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,s=r.observer,o=r.elements;return o.set(e,t),s.observe(e),function(){o.delete(e),s.unobserve(e),0===o.size&&(s.disconnect(),c.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return i.useEffect((function(){if(!o&&!d){var e=s.requestIdleCallback((function(){return f(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[d]),[h,d]};var i=n(7294),s=n(3447),o="undefined"!==typeof IntersectionObserver;var c=new Map},2110:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:function(){return b}});n(2698),n(6753);var i=n(9008),s=n(1163),o=n(7294),c=n(5988),a=n(1664),l=n(2624),u=n(5893);function d(e){}var f=(0,o.forwardRef)((function(e,t){var n=e.links,r=e.className,i=e.selectedLink,s=e.onClick,o=void 0===s?d:s,f=e.children;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("ul",{ref:t,onClick:o,className:c.default.dynamic([["1541204071",[l.r]]])+" "+(r||""),children:[n.map((function(e){return(0,u.jsx)("li",{className:c.default.dynamic([["1541204071",[l.r]]]),children:(0,u.jsx)(a.default,{href:"/[project]",as:"/".concat(e.href),children:(0,u.jsx)("a",{className:c.default.dynamic([["1541204071",[l.r]]])+" "+((i===e.href?"project-link active":"project-link")||""),children:e.name})})},e.href)})),(0,u.jsx)("li",{className:c.default.dynamic([["1541204071",[l.r]]]),children:f})]}),(0,u.jsx)(c.default,{id:"1541204071",dynamic:[l.r],children:[".project-link.__jsx-style-dynamic-selector{line-height:2em;padding:0.2em 0;}","@media screen and (max-width:".concat(l.r,"px){ul.__jsx-style-dynamic-selector{padding:2em 0;}.project-links.__jsx-style-dynamic-selector{display:none;}.project-link.active.__jsx-style-dynamic-selector{color:#f1eeea;}.project-link.__jsx-style-dynamic-selector:hover{color:white;}}")]})]})})),h=n(4071),p=n.n(h),m=function(){return(0,u.jsx)("p",{children:(0,u.jsx)("span",{itemProp:"telephone",children:(0,u.jsx)("a",{href:"tel:+61280974246",children:"+612 8097 4246"})})})},y=function(){return(0,u.jsx)("p",{children:(0,u.jsx)("span",{itemProp:"email",children:(0,u.jsx)("a",{href:"mailto:mail@retallackthompson.com",children:"mail@retallackthompson.com"})})})},v=function(){return(0,u.jsxs)("footer",{className:"".concat(p().contact," ").concat(p().snippet," mobile-only"),children:[(0,u.jsx)(m,{}),(0,u.jsx)(y,{})]})},_=function(){return(0,u.jsxs)("div",{className:"".concat(p().contact," desktop-only"),children:[(0,u.jsxs)("address",{children:[(0,u.jsx)("p",{children:"157 Crown Street"}),(0,u.jsx)("p",{children:"Darlinghurst NSW 2010"})]}),(0,u.jsx)(m,{}),(0,u.jsx)(y,{})]})},g=function(e){var t=e.projects,n=void 0===t?[]:t,r=(0,s.useRouter)(),i=(0,o.useState)(0),d=i[0],h=i[1],p=(0,o.useRef)(null),m=r.query&&r.query.project;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{id:"mobileNav",style:{height:d},className:c.default.dynamic([["1807616519",[l.r]]]),children:(0,u.jsx)(f,{onClick:function(){h(0)},ref:p,selectedLink:m,links:n,children:(0,u.jsx)(a.default,{href:"/about",children:(0,u.jsx)("a",{className:c.default.dynamic([["1807616519",[l.r]]])+" project-link",children:"About"})})})}),(0,u.jsxs)("header",{itemScope:!0,itemType:"http://schema.org/LocalBusiness",className:c.default.dynamic([["1807616519",[l.r]]]),children:[(0,u.jsxs)("div",{className:c.default.dynamic([["1807616519",[l.r]]]),children:[(0,u.jsx)(a.default,{href:"/",children:(0,u.jsx)("a",{className:c.default.dynamic([["1807616519",[l.r]]]),children:(0,u.jsx)("h1",{itemProp:"name",className:c.default.dynamic([["1807616519",[l.r]]])+" logo",children:"Retallack Thompson"})})}),(0,u.jsx)(f,{className:"project-links",selectedLink:m,links:n})]}),(0,u.jsx)("a",{id:"navMenuButton",onClick:function(){return h((function(e){var t;return e?0:(null===(t=p.current)||void 0===t?void 0:t.clientHeight)||0}))},className:c.default.dynamic([["1807616519",[l.r]]]),children:"Menu"}),(0,u.jsxs)("div",{className:c.default.dynamic([["1807616519",[l.r]]])+" desktop-only",children:[(0,u.jsx)("p",{className:c.default.dynamic([["1807616519",[l.r]]]),children:(0,u.jsx)(a.default,{href:"/about",children:(0,u.jsx)("a",{className:c.default.dynamic([["1807616519",[l.r]]]),children:"About"})})}),(0,u.jsx)("p",{className:c.default.dynamic([["1807616519",[l.r]]]),children:(0,u.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://instagram.com/retallackthompson",className:c.default.dynamic([["1807616519",[l.r]]]),children:"Instagram"})})]}),(0,u.jsx)(_,{})]}),(0,u.jsx)(c.default,{id:"1807616519",dynamic:[l.r],children:["#mobileNav.__jsx-style-dynamic-selector{height:0px;display:none;overflow:hidden;-webkit-transition:height 0.2s ease-in-out;transition:height 0.2s ease-in-out;}","#navMenuButton.__jsx-style-dynamic-selector{cursor:pointer;display:none;}","header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:inherit;line-height:2em;min-width:200px;}",".logo.__jsx-style-dynamic-selector{-webkit-letter-spacing:0.0769231em;-moz-letter-spacing:0.0769231em;-ms-letter-spacing:0.0769231em;letter-spacing:0.0769231em;margin-top:0;margin-bottom:20px;font-weight:inherit;font-size:inherit;}","@media screen and (max-width:".concat(l.r,"px){header.__jsx-style-dynamic-selector{padding:20px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;}.logo.__jsx-style-dynamic-selector{font-size:inherit;margin:0;}#navMenuButton.__jsx-style-dynamic-selector{display:block;}#mobileNav.__jsx-style-dynamic-selector{display:block;padding:0;line-height:2.5;font-size:18px;text-align:center;color:rgba(241,238,234,0.7);background-color:#a3a3a3;width:100%;}}")]})]})},x=function(e){var t=e.children;return(0,u.jsxs)("div",{id:"app",className:c.default.dynamic([["2123701227",[l.r]]]),children:[t,(0,u.jsx)(c.default,{id:"2123701227",dynamic:[l.r],children:["#app.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-flow:nowrap;-ms-flex-flow:nowrap;flex-flow:nowrap;padding:50px;}","@media screen and (max-width:".concat(l.r,"px){#app.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0;}}")]})]})};function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e){var t=e.Component,n=e.pageProps;(0,o.useEffect)((function(){var e=window.innerHeight;function t(){document.documentElement.style.setProperty("--mobile-viewport","".concat(window.innerHeight,"px"))}return document.documentElement.style.setProperty("--mobile-viewport","".concat(e,"px")),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]);var r=(0,s.useRouter)();return(0,o.useEffect)((function(){var e=function(e){!function(e){window.gtag("config","UA-177304801-1",{page_path:e})}(e)};return r.events.on("routeChangeComplete",e),function(){r.events.off("routeChangeComplete",e)}}),[r.events]),(0,u.jsxs)(x,{children:[(0,u.jsxs)(i.default,{children:[(0,u.jsx)("title",{children:"Retallack Thompson Architects"}),(0,u.jsx)("meta",{property:"og:site_name",content:"Retallack Thompson Architects"}),(0,u.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,u.jsx)("link",{rel:"shortcut icon",type:"image/x-icon",href:"/favicon.ico"}),(0,u.jsx)("meta",{property:"og:type",content:"website"}),(0,u.jsx)("meta",{property:"og:image",content:"".concat("https://retallackthompson.com","/img/og-image.jpeg")},"og-image"),(0,u.jsx)("meta",{name:"twitter:image",content:"".concat("https://retallackthompson.com","/img/og-image.jpeg")},"twitter-image"),(0,u.jsx)("meta",{property:"og:description",content:"Retallack Thompson Architects is a Sydney-based architecture firm seeking to create timeless and enduring architecture, interior and landscape design."},"og:description"),(0,u.jsx)("meta",{name:"description",content:"Retallack Thompson Architects is a Sydney-based architecture firm seeking to create timeless and enduring architecture, interior and landscape design."},"description"),(0,u.jsx)("meta",{name:"twitter:title",content:"Retallack Thompson Architects"},"twitter:title"),(0,u.jsx)("meta",{name:"twitter:card",content:"summary_large_image"},"twitter:card")]}),(0,u.jsx)(g,{projects:n.projects}),(0,u.jsxs)("main",{"data-page":n.name,children:[(0,u.jsx)(t,w({},n)),(0,u.jsx)(v,{})]})]})}},6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2110)}])},4071:function(e){e.exports={contact:"styles_contact__3iRkN",snippet:"styles_snippet__3nIJz"}},2698:function(){},6753:function(){},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)},1163:function(e,t,n){e.exports=n(4651)},4155:function(e){var t,n,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"===typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var c,a=[],l=!1,u=-1;function d(){l&&c&&(l=!1,c.length?a=c.concat(a):u=-1,a.length&&f())}function f(){if(!l){var e=o(d);l=!0;for(var t=a.length;t;){for(c=a,a=[];++u<t;)c&&c[u].run();u=-1,t=a.length}c=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new h(e,t)),1!==a.length||l||o(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},9887:function(e){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},4287:function(e,t,n){"use strict";var r=n(4155);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var s="undefined"!==typeof r&&r.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},c=function(){function e(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,i=t.optimizeForSpeed,c=void 0===i?s:i,l=t.isBrowser,u=void 0===l?"undefined"!==typeof window:l;a(o(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",a("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,n,r,c=e.prototype;return c.setOptimizeForSpeed=function(e){a("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),a(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(a(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(s||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(a(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(i){return s||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){s||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];a(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];a(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,n){t&&a(o(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},t=e,(n=[{key:"length",get:function(){return this._rulesCount}}])&&i(t.prototype,n),r&&i(t,r),e}();function a(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=c},7884:function(e,t,n){"use strict";t.default=o;var r,i=n(7294);var s=new(((r=n(8122))&&r.__esModule?r:{default:r}).default);function o(e){return"undefined"===typeof window?(s.add(e),null):((0,i.useLayoutEffect)((function(){return s.add(e),function(){s.remove(e)}}),[e.id,String(e.dynamic)]),null)}o.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return s.computeId(t,n)})).join(" ")}},8122:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=s(n(9887)),i=s(n(4287));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,s=t.optimizeForSpeed,o=void 0!==s&&s,c=t.isBrowser,a=void 0===c?"undefined"!==typeof window:c;this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=a,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var s=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=s,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var i=String(n),s=t+i;return e[s]||(e[s]="jsx-"+(0,r.default)(t+"-"+i)),e[s]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var i=n+r;return t[i]||(t[i]=r.replace(e,n)),t[i]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,i=e.id;if(r){var s=this.computeId(i,r);return{styleId:s,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(s,e)})):[this.computeSelector(s,n)]}}return{styleId:this.computeId(i),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},5988:function(e,t,n){e.exports=n(7884)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(4651)}));var n=e.O();_N_E=n}]);