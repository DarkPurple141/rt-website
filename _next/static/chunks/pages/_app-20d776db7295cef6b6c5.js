_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery,i=void 0!==o&&o;return n||r&&i}},0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"20a2":function(e,t,n){e.exports=n("nOHt")},"36e1":function(e,t,n){},"48fX":function(e,t,n){var a=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},"5fIB":function(e,t,n){var a=n("7eYB");e.exports=function(e){if(Array.isArray(e))return a(e)}},"6kmo":function(e,t,n){},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0,i=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){i=!0;var c=r.key.slice(r.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var s=0,l=f.length;s<l;s++){var u=f[s];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var d=r.props[u],p=a[u]||new Set;"name"===u&&i||!p.has(d)?(p.add(d),a[u]=p):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),a=(0,r.useContext)(c.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:p,headManager:a,inAmpMode:(0,s.isInAmpMode)(n)},t)}m.rewind=function(){};var y=m;t.default=y},FYa8:function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=r},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},XDrK:function(e,t,n){e.exports={contact:"styles_contact__3iRkN",snippet:"styles_snippet__3nIJz"}},Xuae:function(e,t,n){"use strict";var a=n("mPvQ"),r=n("/GRZ"),o=n("i2R6"),i=(n("qXWd"),n("48fX")),c=n("tCBg"),s=n("T0f4");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=s(e);if(t){var r=s(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){i(n,e);var t=l(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("zoAU"),r=n("7KCV");t.__esModule=!0,t.default=void 0;var o=r(n("q1tI")),i=n("elyg"),c=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,a){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;l[t+"%"+n+(r?"%"+r:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),r=n&&n.pathname||"/",d=o.default.useMemo((function(){var t=(0,i.resolveHref)(r,e.href,!0),n=a(t,2),o=n[0],c=n[1];return{href:o,as:e.as?(0,i.resolveHref)(r,e.as):c||o}}),[r,e.href,e.as]),f=d.href,p=d.as,m=e.children,y=e.replace,h=e.shallow,v=e.scroll,g=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var b=o.Children.only(m),w=b&&"object"===typeof b&&b.ref,x=(0,s.useIntersection)({rootMargin:"200px"}),k=a(x,2),_=k[0],j=k[1],M=o.default.useCallback((function(e){_(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,_]);(0,o.useEffect)((function(){var e=j&&t&&(0,i.isLocalURL)(f),a="undefined"!==typeof g?g:n&&n.locale,r=l[f+"%"+p+(a?"%"+a:"")];e&&!r&&u(n,f,p,{locale:a})}),[p,f,j,g,t,n]);var C={ref:M,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:o,locale:s,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,n,f,p,y,h,v,g)},onMouseEnter:function(e){(0,i.isLocalURL)(f)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),u(n,f,p,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var E="undefined"!==typeof g?g:n&&n.locale,N=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(p,E,n&&n.locales,n&&n.domainLocales);C.href=N||(0,i.addBasePath)((0,i.addLocale)(p,E,n&&n.defaultLocale))}return o.default.cloneElement(b,C)};t.default=d},cha2:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N}));var a=n("q1tI"),r=n.n(a),o=(n("36e1"),n("6kmo"),n("g4pe")),i=n.n(o),c=n("20a2"),s=n("MX0m"),l=n.n(s),u=n("YFqc"),d=n.n(u),f=n("YyUk"),p=r.a.createElement,m=function(e){},y=Object(a.forwardRef)((function(e,t){var n=e.links,a=e.className,o=e.selectedLink,i=e.onClick,c=void 0===i?m:i,s=e.children;return p(r.a.Fragment,null,p("ul",{ref:t,onClick:c,className:l.a.dynamic([["1541204071",[f.a]]])+" "+(a||"")},n.map((function(e){return p("li",{key:e.href,className:l.a.dynamic([["1541204071",[f.a]]])},p(d.a,{href:"/[project]",as:"/".concat(e.href)},p("a",{className:l.a.dynamic([["1541204071",[f.a]]])+" "+((o===e.href?"project-link active":"project-link")||"")},e.name)))})),p("li",{className:l.a.dynamic([["1541204071",[f.a]]])},s)),p(l.a,{id:"1541204071",dynamic:[f.a]},[".project-link.__jsx-style-dynamic-selector{line-height:2em;padding:0.2em 0;}","@media screen and (max-width:".concat(f.a,"px){ul.__jsx-style-dynamic-selector{padding:2em 0;}.project-links.__jsx-style-dynamic-selector{display:none;}.project-link.active.__jsx-style-dynamic-selector{color:#f1eeea;}.project-link.__jsx-style-dynamic-selector:hover{color:white;}}")]))})),h=n("XDrK"),v=n.n(h),g=r.a.createElement,b=function(){return g("p",null,g("span",{itemProp:"telephone"},g("a",{href:"tel:+61280974246"},"+612 8097 4246")))},w=function(){return g("p",null,g("span",{itemProp:"email"},g("a",{href:"mailto:mail@retallackthompson.com"},"mail@retallackthompson.com")))},x=function(){return g("footer",{className:"".concat(v.a.contact," ").concat(v.a.snippet," mobile-only")},g(b,null),g(w,null))},k=function(){return g("div",{className:"".concat(v.a.contact," desktop-only")},g("address",null,g("p",null,"157 Crown Street"),g("p",null,"Darlinghurst NSW 2010")),g(b,null),g(w,null))},_=r.a.createElement,j=function(e){var t=e.projects,n=void 0===t?[]:t,o=Object(c.useRouter)(),i=Object(a.useState)(0),s=i[0],u=i[1],p=Object(a.useRef)(null),m=o.query&&o.query.project;return _(r.a.Fragment,null,_("div",{id:"mobileNav",style:{height:s},className:l.a.dynamic([["1807616519",[f.a]]])},_(y,{onClick:function(){u(0)},ref:p,selectedLink:m,links:n},_(d.a,{href:"/about"},_("a",{className:l.a.dynamic([["1807616519",[f.a]]])+" project-link"},"About")))),_("header",{itemScope:!0,itemType:"http://schema.org/LocalBusiness",className:l.a.dynamic([["1807616519",[f.a]]])},_("div",{className:l.a.dynamic([["1807616519",[f.a]]])},_(d.a,{href:"/"},_("a",{className:l.a.dynamic([["1807616519",[f.a]]])},_("h1",{itemProp:"name",className:l.a.dynamic([["1807616519",[f.a]]])+" logo"},"Retallack Thompson"))),_(y,{className:"project-links",selectedLink:m,links:n})),_("a",{id:"navMenuButton",onClick:function(){return u((function(e){var t;return e?0:(null===(t=p.current)||void 0===t?void 0:t.clientHeight)||0}))},className:l.a.dynamic([["1807616519",[f.a]]])},"Menu"),_("div",{className:l.a.dynamic([["1807616519",[f.a]]])+" desktop-only"},_("p",{className:l.a.dynamic([["1807616519",[f.a]]])},_(d.a,{href:"/about"},_("a",{className:l.a.dynamic([["1807616519",[f.a]]])},"About"))),_("p",{className:l.a.dynamic([["1807616519",[f.a]]])},_("a",{target:"_blank",rel:"noreferrer",href:"https://instagram.com/retallackthompson",className:l.a.dynamic([["1807616519",[f.a]]])},"Instagram"))),_(k,null)),_(l.a,{id:"1807616519",dynamic:[f.a]},["#mobileNav.__jsx-style-dynamic-selector{height:0px;display:none;overflow:hidden;-webkit-transition:height 0.2s ease-in-out;transition:height 0.2s ease-in-out;}","#navMenuButton.__jsx-style-dynamic-selector{cursor:pointer;display:none;}","header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:inherit;line-height:2em;min-width:200px;}",".logo.__jsx-style-dynamic-selector{-webkit-letter-spacing:0.0769231em;-moz-letter-spacing:0.0769231em;-ms-letter-spacing:0.0769231em;letter-spacing:0.0769231em;margin-top:0;margin-bottom:20px;font-weight:inherit;font-size:inherit;}","@media screen and (max-width:".concat(f.a,"px){header.__jsx-style-dynamic-selector{padding:20px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;}.logo.__jsx-style-dynamic-selector{font-size:inherit;margin:0;}#navMenuButton.__jsx-style-dynamic-selector{display:block;}#mobileNav.__jsx-style-dynamic-selector{display:block;padding:0;line-height:2.5;font-size:18px;text-align:center;color:rgba(241,238,234,0.7);background-color:#a3a3a3;width:100%;}}")]))},M=r.a.createElement,C=function(e){var t=e.children;return M("div",{id:"app",className:l.a.dynamic([["2123701227",[f.a]]])},t,M(l.a,{id:"2123701227",dynamic:[f.a]},["#app.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-flow:nowrap;-ms-flex-flow:nowrap;flex-flow:nowrap;padding:50px;}","@media screen and (max-width:".concat(f.a,"px){#app.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0;}}")]))},E=r.a.createElement;function N(e){var t=e.Component,n=e.pageProps;Object(a.useEffect)((function(){var e=window.innerHeight;function t(){document.documentElement.style.setProperty("--mobile-viewport","".concat(window.innerHeight,"px"))}return document.documentElement.style.setProperty("--mobile-viewport","".concat(e,"px")),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]);var r=Object(c.useRouter)();return Object(a.useEffect)((function(){var e=function(e){!function(e){window.gtag("config","UA-177304801-1",{page_path:e})}(e)};return r.events.on("routeChangeComplete",e),function(){r.events.off("routeChangeComplete",e)}}),[r.events]),E(C,null,E(i.a,null,E("title",null,"Retallack Thompson Architects"),E("meta",{property:"og:site_name",content:"Retallack Thompson Architects"}),E("link",{rel:"icon",href:"/favicon.ico"}),E("link",{rel:"shortcut icon",type:"image/x-icon",href:"/favicon.ico"}),E("meta",{property:"og:type",content:"website"}),E("meta",{key:"og-image",property:"og:image",content:"".concat("https://retallackthompson.com","/img/og-image.jpeg")}),E("meta",{key:"twitter-image",name:"twitter:image",content:"".concat("https://retallackthompson.com","/img/og-image.jpeg")}),E("meta",{key:"og:description",property:"og:description",content:"Retallack Thompson Architects is a Sydney-based architecture firm seeking to create timeless and enduring architecture, interior and landscape design."}),E("meta",{key:"description",name:"description",content:"Retallack Thompson Architects is a Sydney-based architecture firm seeking to create timeless and enduring architecture, interior and landscape design."}),E("meta",{key:"twitter:card",name:"twitter:card",content:"summary"})),E(j,{projects:n.projects}),E("main",{"data-page":n.name},E(t,n),E(x,null)))}},g4pe:function(e,t,n){e.exports=n("8Kt/")},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},mPvQ:function(e,t,n){var a=n("5fIB"),r=n("rlHP"),o=n("KckH"),i=n("kG2m");e.exports=function(e){return a(e)||r(e)||o(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var a=n("C+bE"),r=n("qXWd");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?r(e):t}},vNVm:function(e,t,n){"use strict";var a=n("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,s=(0,r.useRef)(),l=(0,r.useState)(!1),u=a(l,2),d=u[0],f=u[1],p=(0,r.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var a=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:r,elements:a}),n}(n),r=a.id,o=a.observer,i=a.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,r.useEffect)((function(){if(!i&&!d){var e=(0,o.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[d]),[p,d]};var r=n("q1tI"),o=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var c=new Map}},[[0,0,1,3,2]]]);