(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),u=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,u=e.hasQuery;return n||o&&(void 0!==u&&u)}t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(u.AmpStateContext))}},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n("q1tI"),o=n.n(r),u=(n("Bocj"),n("8Kt/")),a=n.n(u),i=o.a.createElement;function c(e){var t=e.Component,n=e.pageProps;return i(o.a.Fragment,null,i(a.a,null,i("title",null,"DCP COVID-19")),i(t,n))}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),u=r(n("Xuae")),a=n("lwAK"),i=n("FYa8"),c=n("/0+H");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var s=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var u=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?u=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?u=!1:t.add(o.type);break;case"meta":for(var i=0,c=s.length;i<c;i++){var l=s[i];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?u=!1:n.add(l);else{var f=o.props[l],d=r[l]||new Set;d.has(f)?u=!1:(d.add(f),r[l]=d)}}}return u}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var p=u.default();function v(e){var t=e.children;return o.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}v.rewind=p.rewind,t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),u=n("Bnag");e.exports=function(e){return r(e)||o(e)||u()}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),u=n("W8MJ"),a=n("a1gu"),i=n("Nsbk"),c=n("7W2i"),l=n("RIqP");function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var s=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(l){c(v,l);var s,p=(s=v,function(){var e,t=i(s);if(f()){var n=i(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return a(this,e)});function v(e){var u;return r(this,v),u=p.call(this,e),d&&(t.add(o(u)),n(o(u))),u}return u(v,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),u(v,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),v}(s.Component)}},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.AmpStateContext=o.createContext({})}},[[0,0,1,4,2,10]]]);