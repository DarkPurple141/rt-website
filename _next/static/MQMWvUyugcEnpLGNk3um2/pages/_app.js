(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery;return n||r&&(void 0!==o&&o)}},0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"36e1":function(e,t,n){},"6kmo":function(e,t,n){},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a=s(n("q1tI")),r=s(n("Xuae")),o=n("lwAK"),i=n("FYa8"),c=n("/0+H");function s(e){return e&&e.__esModule?e:{default:e}}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var c=0,s=d.length;c<s;c++){var l=d[c];if(r.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var u=r.props[l],f=a[l]||new Set;f.has(u)?o=!1:(f.add(u),a[l]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var p=(0,r.default)();function m(e){var t=e.children;return(a.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(p,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:(0,c.isInAmpMode)(e)},t)}))})))}m.rewind=p.rewind;var h=m;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||r(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var a=n("lwsE"),r=n("PJYZ"),o=n("W8MJ"),i=n("7W2i"),c=n("a1gu"),s=n("Nsbk"),l=n("RIqP");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=s(e);if(t){var r=s(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(c){i(l,c);var s=u(l);function l(e){var o;return a(this,l),o=s.call(this,e),f&&(t.add(r(o)),n(r(o))),o}return o(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(d.Component))}},YFqc:function(e,t,n){e.exports=n("cTJO")},YyUk:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a=768,r=20},cTJO:function(e,t,n){"use strict";var a=n("lwsE"),r=n("W8MJ"),o=n("7W2i"),i=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return i(this,n)}}var l=n("TqRt"),u=n("284h");t.__esModule=!0,t.default=void 0;var d,f=u(n("q1tI")),p=n("QmWs"),m=n("g/15"),h=l(n("nOHt")),y=n("elyg");function v(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var k=new Map,w=window.IntersectionObserver,x={};function g(){return d||(w?d=new w((function(e){e.forEach((function(e){if(k.has(e.target)){var t=k.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(e.target),k.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var b=function(e){o(n,e);var t=s(n);function n(e){var r;return a(this,n),(r=t.call(this,e)).p=void 0,r.cleanUpListeners=function(){},r.formatUrls=function(e){var t=null,n=null,a=null;return function(r,o){if(a&&r===t&&o===n)return a;var i=e(r,o);return t=r,n=o,a=i,i}}((function(e,t){return{href:(0,y.addBasePath)(v(e)),as:t?(0,y.addBasePath)(v(t)):t}})),r.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,a=t.target;if("A"!==n||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=r.formatUrls(r.props.href,r.props.as),i=o.href,c=o.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var s=window.location.pathname;i=(0,p.resolve)(s,i),c=c?(0,p.resolve)(s,c):i,e.preventDefault();var l=r.props.scroll;null==l&&(l=c.indexOf("#")<0),h.default[r.props.replace?"replace":"push"](i,c,{shallow:r.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},r.p=!1!==e.prefetch,r}return r(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,a=t.as,r=(0,p.resolve)(e,n);return[r,a?(0,p.resolve)(e,a):r]}},{key:"handleRef",value:function(e){var t=this;this.p&&w&&e&&e.tagName&&(this.cleanUpListeners(),x[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=g();return n?(n.observe(e),k.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}k.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),x[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,r=n.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var o=f.Children.only(t),i={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=r||a),f.default.cloneElement(o,i)}}]),n}(f.Component);t.default=b},cha2:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var a=n("q1tI"),r=n.n(a),o=(n("36e1"),n("6kmo"),n("8Kt/")),i=n.n(o),c=n("MX0m"),s=n.n(c),l=n("YFqc"),u=n.n(l),d=n("nOHt"),f=n("YyUk"),p=r.a.createElement,m=function(e){},h=Object(a.forwardRef)((function(e,t){var n=e.links,a=e.className,o=e.selectedLink,i=e.onClick,c=void 0===i?m:i,l=e.children;return p(r.a.Fragment,null,p("ul",{ref:t,onClick:c,className:s.a.dynamic([["1541204071",[f.a]]])+" "+(a||"")},n.map((function(e){return p("li",{key:e.href,className:s.a.dynamic([["1541204071",[f.a]]])},p(u.a,{href:"/[project]",as:e.href},p("a",{className:s.a.dynamic([["1541204071",[f.a]]])+" "+((o===e.href?"project-link active":"project-link")||"")},e.name)))})),p("li",{className:s.a.dynamic([["1541204071",[f.a]]])},l)),p(s.a,{id:"1541204071",dynamic:[f.a]},[".project-link.__jsx-style-dynamic-selector{line-height:2em;padding:0.2em 0;}","@media screen and (max-width:".concat(f.a,"px){ul.__jsx-style-dynamic-selector{padding:2em 0;}.project-links.__jsx-style-dynamic-selector{display:none;}.project-link.active.__jsx-style-dynamic-selector{color:#f1eeea;}.project-link.__jsx-style-dynamic-selector:hover{color:white;}}")]))})),y=r.a.createElement,v=function(e){var t=e.projects,n=void 0===t?[]:t,o=Object(d.useRouter)(),i=Object(a.useState)(0),c=i[0],l=i[1],p=Object(a.useRef)(null),m=o.query&&o.query.project;return y(r.a.Fragment,null,y("div",{id:"mobileNav",style:{height:c},className:s.a.dynamic([["482687396",[f.a]]])},y(h,{onClick:function(){l(0)},ref:p,selectedLink:m,links:n},y(u.a,{href:"/about"},y("a",{className:s.a.dynamic([["482687396",[f.a]]])+" project-link"},"About")))),y("header",{itemScope:!0,itemType:"http://schema.org/LocalBusiness",className:s.a.dynamic([["482687396",[f.a]]])},y("div",{className:s.a.dynamic([["482687396",[f.a]]])},y(u.a,{href:"/"},y("a",{className:s.a.dynamic([["482687396",[f.a]]])},y("h1",{itemProp:"name",className:s.a.dynamic([["482687396",[f.a]]])+" logo"},"Retallack Thompson"))),y(h,{className:"project-links",selectedLink:m,links:n})),y("a",{id:"navMenuButton",onClick:function(){return l((function(e){var t;return e?0:(null===(t=p.current)||void 0===t?void 0:t.clientHeight)||0}))},className:s.a.dynamic([["482687396",[f.a]]])},"Menu"),y("div",{className:s.a.dynamic([["482687396",[f.a]]])+" desktop-only"},y("p",{className:s.a.dynamic([["482687396",[f.a]]])},y(u.a,{href:"/about"},y("a",{className:s.a.dynamic([["482687396",[f.a]]])},"About"))),y("p",{className:s.a.dynamic([["482687396",[f.a]]])},y("a",{target:"_blank",rel:"noreferrer",href:"https://instagram.com/retallackthompson",className:s.a.dynamic([["482687396",[f.a]]])},"Instagram"))),y("div",{className:s.a.dynamic([["482687396",[f.a]]])+" contact desktop-only"},y("address",{className:s.a.dynamic([["482687396",[f.a]]])},y("p",{className:s.a.dynamic([["482687396",[f.a]]])},"157 Crown Street"),y("p",{className:s.a.dynamic([["482687396",[f.a]]])},"Darlinghurst NSW 2010")),y("p",{className:s.a.dynamic([["482687396",[f.a]]])},y("span",{itemProp:"telephone",className:s.a.dynamic([["482687396",[f.a]]])},y("a",{href:"tel:+61280974246",className:s.a.dynamic([["482687396",[f.a]]])},"+612 8097 4246"))),y("p",{className:s.a.dynamic([["482687396",[f.a]]])},y("span",{itemProp:"email",className:s.a.dynamic([["482687396",[f.a]]])},y("a",{href:"mailto:mail@retallackthompson.com",className:s.a.dynamic([["482687396",[f.a]]])},"mail@retallackthompson.com"))))),y(s.a,{id:"482687396",dynamic:[f.a]},["#mobileNav.__jsx-style-dynamic-selector{height:0px;display:none;overflow:hidden;-webkit-transition:height 0.2s ease-in-out;transition:height 0.2s ease-in-out;}","#navMenuButton.__jsx-style-dynamic-selector{cursor:pointer;display:none;}",".contact.__jsx-style-dynamic-selector{line-height:1.6;color:#a3a3a3;}",".contact.__jsx-style-dynamic-selector:hover{color:inherit;}",".desktop-only.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;}","header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:inherit;line-height:2em;min-width:200px;}",".logo.__jsx-style-dynamic-selector{-webkit-letter-spacing:0.0769231em;-moz-letter-spacing:0.0769231em;-ms-letter-spacing:0.0769231em;letter-spacing:0.0769231em;margin-top:0;margin-bottom:20px;font-weight:inherit;font-size:inherit;}","@media screen and (max-width:".concat(f.a,"px){header.__jsx-style-dynamic-selector{padding:20px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;}.desktop-only.__jsx-style-dynamic-selector{display:none;}.logo.__jsx-style-dynamic-selector{font-size:inherit;margin:0;}#navMenuButton.__jsx-style-dynamic-selector{display:block;}#mobileNav.__jsx-style-dynamic-selector{display:block;padding:0;line-height:2.5;font-size:18px;text-align:center;color:rgba(241,238,234,0.7);background-color:#a3a3a3;width:100%;}}")]))},k=r.a.createElement,w=function(e){var t=e.children;return k("div",{id:"app",className:s.a.dynamic([["2123701227",[f.a]]])},t,k(s.a,{id:"2123701227",dynamic:[f.a]},["#app.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-flow:nowrap;-ms-flex-flow:nowrap;flex-flow:nowrap;padding:50px;}","@media screen and (max-width:".concat(f.a,"px){#app.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0;}}")]))},x=r.a.createElement;function g(e){var t=e.Component,n=e.pageProps;return x(w,null,x(i.a,null,x("title",null,"Retallack Thompson"),x("meta",{property:"og:site_name",content:"Retallack Thompson"}),x("link",{rel:"icon",href:"/favicon.ico"}),x("link",{rel:"shortcut icon",type:"image/x-icon",href:"/favicon.ico"}),x("meta",{property:"og:type",content:"website"}),x("meta",{name:"description",content:"Retallack Thompson Architects is a Sydney-based architecture firm seeking to create timeless and enduring architecture, interior and landscape design."})),x(v,{projects:n.projects}),x("main",null,x(t,n)))}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r}},[[0,0,1,2,4]]]);