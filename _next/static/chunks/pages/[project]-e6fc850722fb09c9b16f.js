_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"20a2":function(e,t,n){e.exports=n("nOHt")},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,u=f.length;s<u;s++){var l=f[s];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var d=a.props[l],p=r[l]||new Set;"name"===l&&i||!p.has(d)?(p.add(d),r[l]=p):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}m.rewind=function(){};var y=m;t.default=y},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nrk7:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return f}));var r=n("q1tI"),a=n.n(r),o=n("wG+1"),i=n("hIcj"),c=n("g4pe"),s=n.n(c),u=a.a.createElement,l=function(e){var t=e.title,n=e.imageUrl,r=e.id;return u(s.a,null,u("title",null,t),u("link",{rel:"canonical",href:"".concat("https://retallackthompson.com","/").concat(r)}),u("meta",{property:"og:title",content:"".concat(t," \u2014 Retallack Thompson")}),u("meta",{property:"og:url",content:"".concat("https://retallackthompson.com","/").concat(r)}),u("meta",{property:"og:image",content:n}),u("meta",{itemProp:"name",content:"".concat(t," \u2014 Retallack Thompson")}),u("meta",{itemProp:"url",content:"".concat("https://retallackthompson.com","/").concat(r)}),u("meta",{name:"twitter:title",content:"".concat(t," \u2014 Retallack Thompson")}),u("meta",{name:"twitter:url",content:"".concat("https://retallackthompson.com","/").concat(r)}),u("meta",{name:"twitter:card",content:"summary"}))},d=a.a.createElement,f=!0;t.default=function(e){var t=e.project,n=e.slides;return d(a.a.Fragment,null,d(l,{id:t.uid,title:o.RichText.asText(t.data.name),imageUrl:n[0].src}),d(i.a,{slides:n}))}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){i(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},g4pe:function(e,t,n){e.exports=n("8Kt/")},hIcj:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=n("MX0m"),i=n.n(o),c=n("q1tI"),s=n.n(c),u=n("wG+1"),l=n("YyUk");var d=n("20a2");var f=function(e,t){var n=Object(c.useState)(0),r=n[0],a=n[1],o=Object(d.useRouter)(),i=e.filter((function(e){return e.src||u.RichText.asText(e)})),s=Object(c.useCallback)((function(){a((function(e){return(e+1)%i.length}))}),[i]);Object(c.useEffect)((function(){a(0)}),[o.asPath]);var l,f,p=Object(c.useCallback)((function(){a((function(e){return(e-1<0?i.length-1:e-1)%i.length}))}),[i]);return l="keyup",f=function(e){if(!t){var n=e.key;"ArrowLeft"===n?p():"ArrowRight"===n&&s()}},Object(c.useEffect)((function(){return window.addEventListener(l,f),function(){return window.removeEventListener(l,f)}}),[l,f]),function(e,t){var n=Object(c.useRef)();Object(c.useEffect)((function(){n.current=e}),[e]),Object(c.useEffect)((function(){if(null!==t){var e=setInterval((function(){return n.current.apply(n,arguments)}),t);return function(){return clearInterval(e)}}}),[t])}((function(){t&&s()}),4e3),[r,function(e){if(e.preventDefault(),!t){var n=e.currentTarget.getBoundingClientRect(),r=n.width,a=n.x;e.clientX-a>r/2?s():p()}},i]},p=s.a.createElement;t.a=function(e){var t=e.slides,n=e.isAuto,r=a(f(t,n),3),o=r[0],c=r[1],s=r[2];return p("div",{className:i.a.dynamic([["2434925065",[l.b/2,l.b,l.b,l.b,l.a,l.b,l.b/2]]])+" container"},p("div",{onClick:c,className:i.a.dynamic([["2434925065",[l.b/2,l.b,l.b,l.b,l.a,l.b,l.b/2]]])+" "+"gallery ".concat(n?"automatic":"")},p("div",{className:i.a.dynamic([["2434925065",[l.b/2,l.b,l.b,l.b,l.a,l.b,l.b/2]]])+" slide-count"},o+1," / ",t.length),s.map((function(e,t){return e.src?p("img",{key:e.src,src:e.src,alt:e.alt,className:i.a.dynamic([["2434925065",[l.b/2,l.b,l.b,l.b,l.a,l.b,l.b/2]]])+" "+((t===o?"selected slide":"slide")||"")}):p("div",{key:"text",className:i.a.dynamic([["2434925065",[l.b/2,l.b,l.b,l.b,l.a,l.b,l.b/2]]])+" "+((t===o?"selected slide":"slide")||"")},p("div",{className:i.a.dynamic([["2434925065",[l.b/2,l.b,l.b,l.b,l.a,l.b,l.b/2]]])+" text-slide"},p(u.RichText,{render:e})))}))),p(i.a,{id:"2434925065",dynamic:[l.b/2,l.b,l.b,l.b,l.a,l.b,l.b/2]},[".container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:inherit;overflow:hidden;}",".slide-count.__jsx-style-dynamic-selector{background-color:rgba(241,238,234,0.7);padding:1px 5px;color:#737373;right:0;bottom:0;position:absolute;z-index:10;}",".slide.__jsx-style-dynamic-selector{position:absolute;-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;opacity:0;}",".text-slide.__jsx-style-dynamic-selector{padding-bottom:".concat(l.b/2,"px;width:500px;margin:auto;border-bottom:1px solid #a3a3a3;}"),".slide.selected.__jsx-style-dynamic-selector{z-index:2;opacity:1;}",".gallery.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:inherit;position:relative;margin:0 auto;}",".text.__jsx-style-dynamic-selector{min-width:150px;width:calc((100% - ".concat(l.b,"px) / 4);margin:0 ").concat(l.b,"px;}"),".text.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;margin-bottom:".concat(l.b,"px;}"),"@media screen and (max-width:".concat(l.a,"px){.slide-count.__jsx-style-dynamic-selector{display:none;}.container.__jsx-style-dynamic-selector{display:block;padding:0 ").concat(l.b,"px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.text.__jsx-style-dynamic-selector{margin:0;width:87%;}.text-slide.__jsx-style-dynamic-selector{width:inherit;}.gallery.__jsx-style-dynamic-selector{display:block;}.slide.__jsx-style-dynamic-selector{max-height:none;margin:").concat(l.b/2,"px 0;}.__jsx-style-dynamic-selector:not(.automatic)>.slide.__jsx-style-dynamic-selector{position:static;opacity:1;}.slide.__jsx-style-dynamic-selector:first-of-type{margin-top:0;}}")]))}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},qZnQ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[project]",function(){return n("Nrk7")}])}},[["qZnQ",0,1,3,2,4]]]);