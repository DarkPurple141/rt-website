(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return o}));var i=n("q1tI"),r=n.n(i),a=n("hIcj"),c=r.a.createElement,o=!0;t.default=function(e){var t=e.slides;return c(a.a,{isAuto:!0,slides:t})}},hIcj:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,r=!1,a=void 0;try{for(var c,o=e[Symbol.iterator]();!(i=(c=o.next()).done)&&(n.push(c.value),!t||n.length!==t);i=!0);}catch(s){r=!0,a=s}finally{try{i||null==o.return||o.return()}finally{if(r)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=n("MX0m"),c=n.n(a),o=n("q1tI"),s=n.n(o),l=n("YyUk"),d=n("wG+1"),u=function(e,t){var n=Object(o.useRef)();Object(o.useEffect)((function(){n.current=e}),[e]),Object(o.useEffect)((function(){if(null!==t){var e=setInterval((function(){return n.current.apply(void 0,arguments)}),t);return function(){return clearInterval(e)}}}),[t])};var b=n("nOHt");var y=function(e,t){var n=Object(o.useState)(0),i=n[0],r=n[1],a=Object(b.useRouter)(),c=e.filter((function(e){return e.src||d.RichText.asText(e)})),s=Object(o.useCallback)((function(){r((function(e){return(e+1)%c.length}))}),[c]);Object(o.useEffect)((function(){r(0)}),[a.asPath]);var l,y,f=Object(o.useCallback)((function(){r((function(e){return(e-1<0?c.length-1:e-1)%c.length}))}),[c]);return l="keyup",y=function(e){if(!t){var n=e.key;"ArrowLeft"===n?f():"ArrowRight"===n&&s()}},Object(o.useEffect)((function(){return window.addEventListener(l,y),function(){return window.removeEventListener(l,y)}}),[l,y]),u((function(){t&&s()}),4e3),[i,function(e){if(e.preventDefault(),!t){var n=e.currentTarget.getBoundingClientRect(),i=n.width,r=n.x;e.clientX-r>i/2?s():f()}},c]},f=s.a.createElement;t.a=function(e){var t=e.slides,n=e.isAuto,i=r(y(t,n),3),a=i[0],o=i[1],s=i[2];return f("div",{className:c.a.dynamic([["1814745283",[l.b/2,l.b,l.b,l.b,l.a,l.b,l.b/2]]])+" container"},f("div",{onClick:o,className:c.a.dynamic([["1814745283",[l.b/2,l.b,l.b,l.b,l.a,l.b,l.b/2]]])+" "+"gallery ".concat(n?"automatic":"")},f("div",{className:c.a.dynamic([["1814745283",[l.b/2,l.b,l.b,l.b,l.a,l.b,l.b/2]]])+" slide-count"},a+1," / ",t.length),s.map((function(e,t){return e.src?f("img",{key:e.src,src:e.src,alt:e.alt,className:c.a.dynamic([["1814745283",[l.b/2,l.b,l.b,l.b,l.a,l.b,l.b/2]]])+" "+((t===a?"selected slide":"slide")||"")}):f("div",{key:"text",className:c.a.dynamic([["1814745283",[l.b/2,l.b,l.b,l.b,l.a,l.b,l.b/2]]])+" "+((t===a?"selected slide":"slide")||"")},f("div",{className:c.a.dynamic([["1814745283",[l.b/2,l.b,l.b,l.b,l.a,l.b,l.b/2]]])+" text-slide"},f(d.RichText,{render:e})))}))),f(c.a,{id:"1814745283",dynamic:[l.b/2,l.b,l.b,l.b,l.a,l.b,l.b/2]},[".container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:inherit;}",".slide-count.__jsx-style-dynamic-selector{color:#a3a3a3;right:0;bottom:0;position:absolute;z-index:10;}",".slide.__jsx-style-dynamic-selector{position:absolute;-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;opacity:0;}",".text-slide.__jsx-style-dynamic-selector{padding-bottom:".concat(l.b/2,"px;width:500px;margin:auto;border-bottom:1px solid #a3a3a3;}"),".slide.selected.__jsx-style-dynamic-selector{z-index:2;opacity:1;}",".gallery.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:inherit;position:relative;margin:0 auto;}",".text.__jsx-style-dynamic-selector{min-width:150px;width:calc((100% - ".concat(l.b,"px) / 4);margin:0 ").concat(l.b,"px;}"),".text.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;margin-bottom:".concat(l.b,"px;}"),"@media screen and (max-width:".concat(l.a,"px){.slide-count.__jsx-style-dynamic-selector{display:none;}.container.__jsx-style-dynamic-selector{display:block;padding:0 ").concat(l.b,"px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.text.__jsx-style-dynamic-selector{margin:0;width:87%;}.text-slide.__jsx-style-dynamic-selector{width:inherit;}.gallery.__jsx-style-dynamic-selector{display:block;}.slide.__jsx-style-dynamic-selector{max-height:none;margin:").concat(l.b/2,"px 0;}.__jsx-style-dynamic-selector:not(.automatic)>.slide.__jsx-style-dynamic-selector{position:static;opacity:1;}.slide.__jsx-style-dynamic-selector:first-of-type{margin-top:0;}}")]))}}},[["/EDR",0,1,2,3,4]]]);