function Zw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Mg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ug={exports:{}},Al={},jg={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bo=Symbol.for("react.element"),eE=Symbol.for("react.portal"),tE=Symbol.for("react.fragment"),nE=Symbol.for("react.strict_mode"),rE=Symbol.for("react.profiler"),iE=Symbol.for("react.provider"),sE=Symbol.for("react.context"),oE=Symbol.for("react.forward_ref"),aE=Symbol.for("react.suspense"),lE=Symbol.for("react.memo"),uE=Symbol.for("react.lazy"),Jf=Symbol.iterator;function cE(t){return t===null||typeof t!="object"?null:(t=Jf&&t[Jf]||t["@@iterator"],typeof t=="function"?t:null)}var zg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wg=Object.assign,Bg={};function Yi(t,e,n){this.props=t,this.context=e,this.refs=Bg,this.updater=n||zg}Yi.prototype.isReactComponent={};Yi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Yi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hg(){}Hg.prototype=Yi.prototype;function Gd(t,e,n){this.props=t,this.context=e,this.refs=Bg,this.updater=n||zg}var qd=Gd.prototype=new Hg;qd.constructor=Gd;Wg(qd,Yi.prototype);qd.isPureReactComponent=!0;var Xf=Array.isArray,$g=Object.prototype.hasOwnProperty,Yd={current:null},Vg={key:!0,ref:!0,__self:!0,__source:!0};function Kg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$g.call(e,r)&&!Vg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:bo,type:t,key:s,ref:o,props:i,_owner:Yd.current}}function dE(t,e){return{$$typeof:bo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qd(t){return typeof t=="object"&&t!==null&&t.$$typeof===bo}function hE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zf=/\/+/g;function Tu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?hE(""+t.key):e.toString(36)}function _a(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case bo:case eE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Tu(o,0):r,Xf(i)?(n="",t!=null&&(n=t.replace(Zf,"$&/")+"/"),_a(i,e,n,"",function(u){return u})):i!=null&&(Qd(i)&&(i=dE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Zf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Xf(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Tu(s,a);o+=_a(s,e,n,l,i)}else if(l=cE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Tu(s,a++),o+=_a(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Yo(t,e,n){if(t==null)return t;var r=[],i=0;return _a(t,r,"","",function(s){return e.call(n,s,i++)}),r}function fE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var at={current:null},ya={transition:null},pE={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:ya,ReactCurrentOwner:Yd};Z.Children={map:Yo,forEach:function(t,e,n){Yo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Yo(t,function(){e++}),e},toArray:function(t){return Yo(t,function(e){return e})||[]},only:function(t){if(!Qd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=Yi;Z.Fragment=tE;Z.Profiler=rE;Z.PureComponent=Gd;Z.StrictMode=nE;Z.Suspense=aE;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pE;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Wg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Yd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)$g.call(e,l)&&!Vg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:bo,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:sE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iE,_context:t},t.Consumer=t};Z.createElement=Kg;Z.createFactory=function(t){var e=Kg.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:oE,render:t}};Z.isValidElement=Qd;Z.lazy=function(t){return{$$typeof:uE,_payload:{_status:-1,_result:t},_init:fE}};Z.memo=function(t,e){return{$$typeof:lE,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=ya.transition;ya.transition={};try{t()}finally{ya.transition=e}};Z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Z.useCallback=function(t,e){return at.current.useCallback(t,e)};Z.useContext=function(t){return at.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return at.current.useDeferredValue(t)};Z.useEffect=function(t,e){return at.current.useEffect(t,e)};Z.useId=function(){return at.current.useId()};Z.useImperativeHandle=function(t,e,n){return at.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return at.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return at.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return at.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return at.current.useReducer(t,e,n)};Z.useRef=function(t){return at.current.useRef(t)};Z.useState=function(t){return at.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return at.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return at.current.useTransition()};Z.version="18.2.0";jg.exports=Z;var R=jg.exports;const pe=Fg(R),ep=Zw({__proto__:null,default:pe},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mE=R,gE=Symbol.for("react.element"),vE=Symbol.for("react.fragment"),_E=Object.prototype.hasOwnProperty,yE=mE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wE={key:!0,ref:!0,__self:!0,__source:!0};function Gg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)_E.call(e,r)&&!wE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:gE,type:t,key:s,ref:o,props:i,_owner:yE.current}}Al.Fragment=vE;Al.jsx=Gg;Al.jsxs=Gg;Ug.exports=Al;var k=Ug.exports,Ic={},qg={exports:{}},Rt={},Yg={exports:{}},Qg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,W){var B=O.length;O.push(W);e:for(;0<B;){var de=B-1>>>1,we=O[de];if(0<i(we,W))O[de]=W,O[B]=we,B=de;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var W=O[0],B=O.pop();if(B!==W){O[0]=B;e:for(var de=0,we=O.length,Zt=we>>>1;de<Zt;){var Ze=2*(de+1)-1,Ut=O[Ze],Pe=Ze+1,Me=O[Pe];if(0>i(Ut,B))Pe<we&&0>i(Me,Ut)?(O[de]=Me,O[Pe]=B,de=Pe):(O[de]=Ut,O[Ze]=B,de=Ze);else if(Pe<we&&0>i(Me,B))O[de]=Me,O[Pe]=B,de=Pe;else break e}}return W}function i(O,W){var B=O.sortIndex-W.sortIndex;return B!==0?B:O.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,m=!1,v=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(O){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=O)r(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function _(O){if(y=!1,g(O),!v)if(n(l)!==null)v=!0,ee(I);else{var W=n(u);W!==null&&Re(_,W.startTime-O)}}function I(O,W){v=!1,y&&(y=!1,p(E),E=-1),m=!0;var B=h;try{for(g(W),d=n(l);d!==null&&(!(d.expirationTime>W)||O&&!L());){var de=d.callback;if(typeof de=="function"){d.callback=null,h=d.priorityLevel;var we=de(d.expirationTime<=W);W=t.unstable_now(),typeof we=="function"?d.callback=we:d===n(l)&&r(l),g(W)}else r(l);d=n(l)}if(d!==null)var Zt=!0;else{var Ze=n(u);Ze!==null&&Re(_,Ze.startTime-W),Zt=!1}return Zt}finally{d=null,h=B,m=!1}}var T=!1,C=null,E=-1,S=5,P=-1;function L(){return!(t.unstable_now()-P<S)}function D(){if(C!==null){var O=t.unstable_now();P=O;var W=!0;try{W=C(!0,O)}finally{W?F():(T=!1,C=null)}}else T=!1}var F;if(typeof f=="function")F=function(){f(D)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,he=K.port2;K.port1.onmessage=D,F=function(){he.postMessage(null)}}else F=function(){w(D,0)};function ee(O){C=O,T||(T=!0,F())}function Re(O,W){E=w(function(){O(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,ee(I))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(h){case 1:case 2:case 3:var W=3;break;default:W=h}var B=h;h=W;try{return O()}finally{h=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,W){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var B=h;h=O;try{return W()}finally{h=B}},t.unstable_scheduleCallback=function(O,W,B){var de=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?de+B:de):B=de,O){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=B+we,O={id:c++,callback:W,priorityLevel:O,startTime:B,expirationTime:we,sortIndex:-1},B>de?(O.sortIndex=B,e(u,O),n(l)===null&&O===n(u)&&(y?(p(E),E=-1):y=!0,Re(_,B-de))):(O.sortIndex=we,e(l,O),v||m||(v=!0,ee(I))),O},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(O){var W=h;return function(){var B=h;h=W;try{return O.apply(this,arguments)}finally{h=B}}}})(Qg);Yg.exports=Qg;var EE=Yg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg=R,kt=EE;function N(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xg=new Set,qs={};function Jr(t,e){Li(t,e),Li(t+"Capture",e)}function Li(t,e){for(qs[t]=e,t=0;t<e.length;t++)Xg.add(e[t])}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cc=Object.prototype.hasOwnProperty,IE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tp={},np={};function CE(t){return Cc.call(np,t)?!0:Cc.call(tp,t)?!1:IE.test(t)?np[t]=!0:(tp[t]=!0,!1)}function SE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function TE(t,e,n,r){if(e===null||typeof e>"u"||SE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xe[t]=new lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xe[e]=new lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xe[t]=new lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xe[t]=new lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xe[t]=new lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xe[t]=new lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xe[t]=new lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xe[t]=new lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xe[t]=new lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jd=/[\-:]([a-z])/g;function Xd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jd,Xd);Xe[e]=new lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jd,Xd);Xe[e]=new lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jd,Xd);Xe[e]=new lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xe[t]=new lt(t,1,!1,t.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xe[t]=new lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zd(t,e,n,r){var i=Xe.hasOwnProperty(e)?Xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(TE(e,n,i,r)&&(n=null),r||i===null?CE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var On=Jg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qo=Symbol.for("react.element"),oi=Symbol.for("react.portal"),ai=Symbol.for("react.fragment"),eh=Symbol.for("react.strict_mode"),Sc=Symbol.for("react.profiler"),Zg=Symbol.for("react.provider"),ev=Symbol.for("react.context"),th=Symbol.for("react.forward_ref"),Tc=Symbol.for("react.suspense"),kc=Symbol.for("react.suspense_list"),nh=Symbol.for("react.memo"),zn=Symbol.for("react.lazy"),tv=Symbol.for("react.offscreen"),rp=Symbol.iterator;function ls(t){return t===null||typeof t!="object"?null:(t=rp&&t[rp]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,ku;function Cs(t){if(ku===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ku=e&&e[1]||""}return`
`+ku+t}var Ru=!1;function Pu(t,e){if(!t||Ru)return"";Ru=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ru=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Cs(t):""}function kE(t){switch(t.tag){case 5:return Cs(t.type);case 16:return Cs("Lazy");case 13:return Cs("Suspense");case 19:return Cs("SuspenseList");case 0:case 2:case 15:return t=Pu(t.type,!1),t;case 11:return t=Pu(t.type.render,!1),t;case 1:return t=Pu(t.type,!0),t;default:return""}}function Rc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ai:return"Fragment";case oi:return"Portal";case Sc:return"Profiler";case eh:return"StrictMode";case Tc:return"Suspense";case kc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ev:return(t.displayName||"Context")+".Consumer";case Zg:return(t._context.displayName||"Context")+".Provider";case th:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nh:return e=t.displayName||null,e!==null?e:Rc(t.type)||"Memo";case zn:e=t._payload,t=t._init;try{return Rc(t(e))}catch{}}return null}function RE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rc(e);case 8:return e===eh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function nv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function PE(t){var e=nv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Jo(t){t._valueTracker||(t._valueTracker=PE(t))}function rv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=nv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ma(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pc(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ip(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function iv(t,e){e=e.checked,e!=null&&Zd(t,"checked",e,!1)}function Nc(t,e){iv(t,e);var n=or(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bc(t,e.type,n):e.hasOwnProperty("defaultValue")&&bc(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function sp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bc(t,e,n){(e!=="number"||Ma(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ss=Array.isArray;function wi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function xc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(N(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function op(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(N(92));if(Ss(n)){if(1<n.length)throw Error(N(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function sv(t,e){var n=or(e.value),r=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ap(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ov(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ov(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xo,av=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xo=Xo||document.createElement("div"),Xo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ys(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},NE=["Webkit","ms","Moz","O"];Object.keys(bs).forEach(function(t){NE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),bs[e]=bs[t]})});function lv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||bs.hasOwnProperty(t)&&bs[t]?(""+e).trim():e+"px"}function uv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=lv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var bE=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ac(t,e){if(e){if(bE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(N(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(N(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(N(61))}if(e.style!=null&&typeof e.style!="object")throw Error(N(62))}}function Lc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dc=null;function rh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mc=null,Ei=null,Ii=null;function lp(t){if(t=Ao(t)){if(typeof Mc!="function")throw Error(N(280));var e=t.stateNode;e&&(e=Ul(e),Mc(t.stateNode,t.type,e))}}function cv(t){Ei?Ii?Ii.push(t):Ii=[t]:Ei=t}function dv(){if(Ei){var t=Ei,e=Ii;if(Ii=Ei=null,lp(t),e)for(t=0;t<e.length;t++)lp(e[t])}}function hv(t,e){return t(e)}function fv(){}var Nu=!1;function pv(t,e,n){if(Nu)return t(e,n);Nu=!0;try{return hv(t,e,n)}finally{Nu=!1,(Ei!==null||Ii!==null)&&(fv(),dv())}}function Qs(t,e){var n=t.stateNode;if(n===null)return null;var r=Ul(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(N(231,e,typeof n));return n}var Fc=!1;if(Sn)try{var us={};Object.defineProperty(us,"passive",{get:function(){Fc=!0}}),window.addEventListener("test",us,us),window.removeEventListener("test",us,us)}catch{Fc=!1}function xE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var xs=!1,Fa=null,Ua=!1,Uc=null,OE={onError:function(t){xs=!0,Fa=t}};function AE(t,e,n,r,i,s,o,a,l){xs=!1,Fa=null,xE.apply(OE,arguments)}function LE(t,e,n,r,i,s,o,a,l){if(AE.apply(this,arguments),xs){if(xs){var u=Fa;xs=!1,Fa=null}else throw Error(N(198));Ua||(Ua=!0,Uc=u)}}function Xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function mv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function up(t){if(Xr(t)!==t)throw Error(N(188))}function DE(t){var e=t.alternate;if(!e){if(e=Xr(t),e===null)throw Error(N(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return up(i),t;if(s===r)return up(i),e;s=s.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?t:e}function gv(t){return t=DE(t),t!==null?vv(t):null}function vv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vv(t);if(e!==null)return e;t=t.sibling}return null}var _v=kt.unstable_scheduleCallback,cp=kt.unstable_cancelCallback,ME=kt.unstable_shouldYield,FE=kt.unstable_requestPaint,Ne=kt.unstable_now,UE=kt.unstable_getCurrentPriorityLevel,ih=kt.unstable_ImmediatePriority,yv=kt.unstable_UserBlockingPriority,ja=kt.unstable_NormalPriority,jE=kt.unstable_LowPriority,wv=kt.unstable_IdlePriority,Ll=null,un=null;function zE(t){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(Ll,t,void 0,(t.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:HE,WE=Math.log,BE=Math.LN2;function HE(t){return t>>>=0,t===0?32:31-(WE(t)/BE|0)|0}var Zo=64,ea=4194304;function Ts(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function za(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ts(a):(s&=o,s!==0&&(r=Ts(s)))}else o=n&~i,o!==0?r=Ts(o):s!==0&&(r=Ts(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Gt(e),i=1<<n,r|=t[n],e&=~i;return r}function $E(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function VE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Gt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=$E(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function jc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ev(){var t=Zo;return Zo<<=1,!(Zo&4194240)&&(Zo=64),t}function bu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gt(e),t[e]=n}function KE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Gt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function sh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Gt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function Iv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Cv,oh,Sv,Tv,kv,zc=!1,ta=[],Yn=null,Qn=null,Jn=null,Js=new Map,Xs=new Map,Bn=[],GE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dp(t,e){switch(t){case"focusin":case"focusout":Yn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":Js.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xs.delete(e.pointerId)}}function cs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ao(e),e!==null&&oh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function qE(t,e,n,r,i){switch(e){case"focusin":return Yn=cs(Yn,t,e,n,r,i),!0;case"dragenter":return Qn=cs(Qn,t,e,n,r,i),!0;case"mouseover":return Jn=cs(Jn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Js.set(s,cs(Js.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Xs.set(s,cs(Xs.get(s)||null,t,e,n,r,i)),!0}return!1}function Rv(t){var e=kr(t.target);if(e!==null){var n=Xr(e);if(n!==null){if(e=n.tag,e===13){if(e=mv(n),e!==null){t.blockedOn=e,kv(t.priority,function(){Sv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Dc=r,n.target.dispatchEvent(r),Dc=null}else return e=Ao(n),e!==null&&oh(e),t.blockedOn=n,!1;e.shift()}return!0}function hp(t,e,n){wa(t)&&n.delete(e)}function YE(){zc=!1,Yn!==null&&wa(Yn)&&(Yn=null),Qn!==null&&wa(Qn)&&(Qn=null),Jn!==null&&wa(Jn)&&(Jn=null),Js.forEach(hp),Xs.forEach(hp)}function ds(t,e){t.blockedOn===e&&(t.blockedOn=null,zc||(zc=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,YE)))}function Zs(t){function e(i){return ds(i,t)}if(0<ta.length){ds(ta[0],t);for(var n=1;n<ta.length;n++){var r=ta[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Yn!==null&&ds(Yn,t),Qn!==null&&ds(Qn,t),Jn!==null&&ds(Jn,t),Js.forEach(e),Xs.forEach(e),n=0;n<Bn.length;n++)r=Bn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Bn.length&&(n=Bn[0],n.blockedOn===null);)Rv(n),n.blockedOn===null&&Bn.shift()}var Ci=On.ReactCurrentBatchConfig,Wa=!0;function QE(t,e,n,r){var i=ce,s=Ci.transition;Ci.transition=null;try{ce=1,ah(t,e,n,r)}finally{ce=i,Ci.transition=s}}function JE(t,e,n,r){var i=ce,s=Ci.transition;Ci.transition=null;try{ce=4,ah(t,e,n,r)}finally{ce=i,Ci.transition=s}}function ah(t,e,n,r){if(Wa){var i=Wc(t,e,n,r);if(i===null)zu(t,e,r,Ba,n),dp(t,r);else if(qE(i,t,e,n,r))r.stopPropagation();else if(dp(t,r),e&4&&-1<GE.indexOf(t)){for(;i!==null;){var s=Ao(i);if(s!==null&&Cv(s),s=Wc(t,e,n,r),s===null&&zu(t,e,r,Ba,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else zu(t,e,r,null,n)}}var Ba=null;function Wc(t,e,n,r){if(Ba=null,t=rh(r),t=kr(t),t!==null)if(e=Xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=mv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ba=t,null}function Pv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(UE()){case ih:return 1;case yv:return 4;case ja:case jE:return 16;case wv:return 536870912;default:return 16}default:return 16}}var $n=null,lh=null,Ea=null;function Nv(){if(Ea)return Ea;var t,e=lh,n=e.length,r,i="value"in $n?$n.value:$n.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ea=i.slice(t,1<r?1-r:void 0)}function Ia(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function na(){return!0}function fp(){return!1}function Pt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?na:fp,this.isPropagationStopped=fp,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),e}var Qi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uh=Pt(Qi),Oo=Se({},Qi,{view:0,detail:0}),XE=Pt(Oo),xu,Ou,hs,Dl=Se({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ch,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hs&&(hs&&t.type==="mousemove"?(xu=t.screenX-hs.screenX,Ou=t.screenY-hs.screenY):Ou=xu=0,hs=t),xu)},movementY:function(t){return"movementY"in t?t.movementY:Ou}}),pp=Pt(Dl),ZE=Se({},Dl,{dataTransfer:0}),eI=Pt(ZE),tI=Se({},Oo,{relatedTarget:0}),Au=Pt(tI),nI=Se({},Qi,{animationName:0,elapsedTime:0,pseudoElement:0}),rI=Pt(nI),iI=Se({},Qi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sI=Pt(iI),oI=Se({},Qi,{data:0}),mp=Pt(oI),aI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=uI[t])?!!e[t]:!1}function ch(){return cI}var dI=Se({},Oo,{key:function(t){if(t.key){var e=aI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ia(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ch,charCode:function(t){return t.type==="keypress"?Ia(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ia(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hI=Pt(dI),fI=Se({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gp=Pt(fI),pI=Se({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ch}),mI=Pt(pI),gI=Se({},Qi,{propertyName:0,elapsedTime:0,pseudoElement:0}),vI=Pt(gI),_I=Se({},Dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yI=Pt(_I),wI=[9,13,27,32],dh=Sn&&"CompositionEvent"in window,Os=null;Sn&&"documentMode"in document&&(Os=document.documentMode);var EI=Sn&&"TextEvent"in window&&!Os,bv=Sn&&(!dh||Os&&8<Os&&11>=Os),vp=String.fromCharCode(32),_p=!1;function xv(t,e){switch(t){case"keyup":return wI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ov(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var li=!1;function II(t,e){switch(t){case"compositionend":return Ov(e);case"keypress":return e.which!==32?null:(_p=!0,vp);case"textInput":return t=e.data,t===vp&&_p?null:t;default:return null}}function CI(t,e){if(li)return t==="compositionend"||!dh&&xv(t,e)?(t=Nv(),Ea=lh=$n=null,li=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bv&&e.locale!=="ko"?null:e.data;default:return null}}var SI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!SI[t.type]:e==="textarea"}function Av(t,e,n,r){cv(r),e=Ha(e,"onChange"),0<e.length&&(n=new uh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var As=null,eo=null;function TI(t){$v(t,0)}function Ml(t){var e=di(t);if(rv(e))return t}function kI(t,e){if(t==="change")return e}var Lv=!1;if(Sn){var Lu;if(Sn){var Du="oninput"in document;if(!Du){var wp=document.createElement("div");wp.setAttribute("oninput","return;"),Du=typeof wp.oninput=="function"}Lu=Du}else Lu=!1;Lv=Lu&&(!document.documentMode||9<document.documentMode)}function Ep(){As&&(As.detachEvent("onpropertychange",Dv),eo=As=null)}function Dv(t){if(t.propertyName==="value"&&Ml(eo)){var e=[];Av(e,eo,t,rh(t)),pv(TI,e)}}function RI(t,e,n){t==="focusin"?(Ep(),As=e,eo=n,As.attachEvent("onpropertychange",Dv)):t==="focusout"&&Ep()}function PI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ml(eo)}function NI(t,e){if(t==="click")return Ml(e)}function bI(t,e){if(t==="input"||t==="change")return Ml(e)}function xI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qt=typeof Object.is=="function"?Object.is:xI;function to(t,e){if(Qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Cc.call(e,i)||!Qt(t[i],e[i]))return!1}return!0}function Ip(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cp(t,e){var n=Ip(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ip(n)}}function Mv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Mv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fv(){for(var t=window,e=Ma();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ma(t.document)}return e}function hh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function OI(t){var e=Fv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Mv(n.ownerDocument.documentElement,n)){if(r!==null&&hh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Cp(n,s);var o=Cp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var AI=Sn&&"documentMode"in document&&11>=document.documentMode,ui=null,Bc=null,Ls=null,Hc=!1;function Sp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hc||ui==null||ui!==Ma(r)||(r=ui,"selectionStart"in r&&hh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ls&&to(Ls,r)||(Ls=r,r=Ha(Bc,"onSelect"),0<r.length&&(e=new uh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ui)))}function ra(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ci={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},Mu={},Uv={};Sn&&(Uv=document.createElement("div").style,"AnimationEvent"in window||(delete ci.animationend.animation,delete ci.animationiteration.animation,delete ci.animationstart.animation),"TransitionEvent"in window||delete ci.transitionend.transition);function Fl(t){if(Mu[t])return Mu[t];if(!ci[t])return t;var e=ci[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Uv)return Mu[t]=e[n];return t}var jv=Fl("animationend"),zv=Fl("animationiteration"),Wv=Fl("animationstart"),Bv=Fl("transitionend"),Hv=new Map,Tp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(t,e){Hv.set(t,e),Jr(e,[t])}for(var Fu=0;Fu<Tp.length;Fu++){var Uu=Tp[Fu],LI=Uu.toLowerCase(),DI=Uu[0].toUpperCase()+Uu.slice(1);mr(LI,"on"+DI)}mr(jv,"onAnimationEnd");mr(zv,"onAnimationIteration");mr(Wv,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(Bv,"onTransitionEnd");Li("onMouseEnter",["mouseout","mouseover"]);Li("onMouseLeave",["mouseout","mouseover"]);Li("onPointerEnter",["pointerout","pointerover"]);Li("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MI=new Set("cancel close invalid load scroll toggle".split(" ").concat(ks));function kp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,LE(r,e,void 0,t),t.currentTarget=null}function $v(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;kp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;kp(i,a,u),s=l}}}if(Ua)throw t=Uc,Ua=!1,Uc=null,t}function ve(t,e){var n=e[qc];n===void 0&&(n=e[qc]=new Set);var r=t+"__bubble";n.has(r)||(Vv(e,t,2,!1),n.add(r))}function ju(t,e,n){var r=0;e&&(r|=4),Vv(n,t,r,e)}var ia="_reactListening"+Math.random().toString(36).slice(2);function no(t){if(!t[ia]){t[ia]=!0,Xg.forEach(function(n){n!=="selectionchange"&&(MI.has(n)||ju(n,!1,t),ju(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ia]||(e[ia]=!0,ju("selectionchange",!1,e))}}function Vv(t,e,n,r){switch(Pv(e)){case 1:var i=QE;break;case 4:i=JE;break;default:i=ah}n=i.bind(null,e,n,t),i=void 0,!Fc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function zu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=kr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}pv(function(){var u=s,c=rh(n),d=[];e:{var h=Hv.get(t);if(h!==void 0){var m=uh,v=t;switch(t){case"keypress":if(Ia(n)===0)break e;case"keydown":case"keyup":m=hI;break;case"focusin":v="focus",m=Au;break;case"focusout":v="blur",m=Au;break;case"beforeblur":case"afterblur":m=Au;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=eI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=mI;break;case jv:case zv:case Wv:m=rI;break;case Bv:m=vI;break;case"scroll":m=XE;break;case"wheel":m=yI;break;case"copy":case"cut":case"paste":m=sI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=gp}var y=(e&4)!==0,w=!y&&t==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,g;f!==null;){g=f;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,p!==null&&(_=Qs(f,p),_!=null&&y.push(ro(f,_,g)))),w)break;f=f.return}0<y.length&&(h=new m(h,v,null,n,c),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Dc&&(v=n.relatedTarget||n.fromElement)&&(kr(v)||v[Tn]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?kr(v):null,v!==null&&(w=Xr(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(y=pp,_="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=gp,_="onPointerLeave",p="onPointerEnter",f="pointer"),w=m==null?h:di(m),g=v==null?h:di(v),h=new y(_,f+"leave",m,n,c),h.target=w,h.relatedTarget=g,_=null,kr(c)===u&&(y=new y(p,f+"enter",v,n,c),y.target=g,y.relatedTarget=w,_=y),w=_,m&&v)t:{for(y=m,p=v,f=0,g=y;g;g=ri(g))f++;for(g=0,_=p;_;_=ri(_))g++;for(;0<f-g;)y=ri(y),f--;for(;0<g-f;)p=ri(p),g--;for(;f--;){if(y===p||p!==null&&y===p.alternate)break t;y=ri(y),p=ri(p)}y=null}else y=null;m!==null&&Rp(d,h,m,y,!1),v!==null&&w!==null&&Rp(d,w,v,y,!0)}}e:{if(h=u?di(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var I=kI;else if(yp(h))if(Lv)I=bI;else{I=PI;var T=RI}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=NI);if(I&&(I=I(t,u))){Av(d,I,n,c);break e}T&&T(t,h,u),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&bc(h,"number",h.value)}switch(T=u?di(u):window,t){case"focusin":(yp(T)||T.contentEditable==="true")&&(ui=T,Bc=u,Ls=null);break;case"focusout":Ls=Bc=ui=null;break;case"mousedown":Hc=!0;break;case"contextmenu":case"mouseup":case"dragend":Hc=!1,Sp(d,n,c);break;case"selectionchange":if(AI)break;case"keydown":case"keyup":Sp(d,n,c)}var C;if(dh)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else li?xv(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(bv&&n.locale!=="ko"&&(li||E!=="onCompositionStart"?E==="onCompositionEnd"&&li&&(C=Nv()):($n=c,lh="value"in $n?$n.value:$n.textContent,li=!0)),T=Ha(u,E),0<T.length&&(E=new mp(E,t,null,n,c),d.push({event:E,listeners:T}),C?E.data=C:(C=Ov(n),C!==null&&(E.data=C)))),(C=EI?II(t,n):CI(t,n))&&(u=Ha(u,"onBeforeInput"),0<u.length&&(c=new mp("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}$v(d,e)})}function ro(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ha(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Qs(t,n),s!=null&&r.unshift(ro(t,s,i)),s=Qs(t,e),s!=null&&r.push(ro(t,s,i))),t=t.return}return r}function ri(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Rp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Qs(n,s),l!=null&&o.unshift(ro(n,l,a))):i||(l=Qs(n,s),l!=null&&o.push(ro(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var FI=/\r\n?/g,UI=/\u0000|\uFFFD/g;function Pp(t){return(typeof t=="string"?t:""+t).replace(FI,`
`).replace(UI,"")}function sa(t,e,n){if(e=Pp(e),Pp(t)!==e&&n)throw Error(N(425))}function $a(){}var $c=null,Vc=null;function Kc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gc=typeof setTimeout=="function"?setTimeout:void 0,jI=typeof clearTimeout=="function"?clearTimeout:void 0,Np=typeof Promise=="function"?Promise:void 0,zI=typeof queueMicrotask=="function"?queueMicrotask:typeof Np<"u"?function(t){return Np.resolve(null).then(t).catch(WI)}:Gc;function WI(t){setTimeout(function(){throw t})}function Wu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Zs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Zs(e)}function Xn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function bp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ji=Math.random().toString(36).slice(2),nn="__reactFiber$"+Ji,io="__reactProps$"+Ji,Tn="__reactContainer$"+Ji,qc="__reactEvents$"+Ji,BI="__reactListeners$"+Ji,HI="__reactHandles$"+Ji;function kr(t){var e=t[nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Tn]||n[nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=bp(t);t!==null;){if(n=t[nn])return n;t=bp(t)}return e}t=n,n=t.parentNode}return null}function Ao(t){return t=t[nn]||t[Tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function di(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(N(33))}function Ul(t){return t[io]||null}var Yc=[],hi=-1;function gr(t){return{current:t}}function ye(t){0>hi||(t.current=Yc[hi],Yc[hi]=null,hi--)}function ge(t,e){hi++,Yc[hi]=t.current,t.current=e}var ar={},it=gr(ar),mt=gr(!1),Ur=ar;function Di(t,e){var n=t.type.contextTypes;if(!n)return ar;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function gt(t){return t=t.childContextTypes,t!=null}function Va(){ye(mt),ye(it)}function xp(t,e,n){if(it.current!==ar)throw Error(N(168));ge(it,e),ge(mt,n)}function Kv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(N(108,RE(t)||"Unknown",i));return Se({},n,r)}function Ka(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,Ur=it.current,ge(it,t),ge(mt,mt.current),!0}function Op(t,e,n){var r=t.stateNode;if(!r)throw Error(N(169));n?(t=Kv(t,e,Ur),r.__reactInternalMemoizedMergedChildContext=t,ye(mt),ye(it),ge(it,t)):ye(mt),ge(mt,n)}var pn=null,jl=!1,Bu=!1;function Gv(t){pn===null?pn=[t]:pn.push(t)}function $I(t){jl=!0,Gv(t)}function vr(){if(!Bu&&pn!==null){Bu=!0;var t=0,e=ce;try{var n=pn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}pn=null,jl=!1}catch(i){throw pn!==null&&(pn=pn.slice(t+1)),_v(ih,vr),i}finally{ce=e,Bu=!1}}return null}var fi=[],pi=0,Ga=null,qa=0,bt=[],xt=0,jr=null,mn=1,gn="";function Er(t,e){fi[pi++]=qa,fi[pi++]=Ga,Ga=t,qa=e}function qv(t,e,n){bt[xt++]=mn,bt[xt++]=gn,bt[xt++]=jr,jr=t;var r=mn;t=gn;var i=32-Gt(r)-1;r&=~(1<<i),n+=1;var s=32-Gt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,mn=1<<32-Gt(e)+i|n<<i|r,gn=s+t}else mn=1<<s|n<<i|r,gn=t}function fh(t){t.return!==null&&(Er(t,1),qv(t,1,0))}function ph(t){for(;t===Ga;)Ga=fi[--pi],fi[pi]=null,qa=fi[--pi],fi[pi]=null;for(;t===jr;)jr=bt[--xt],bt[xt]=null,gn=bt[--xt],bt[xt]=null,mn=bt[--xt],bt[xt]=null}var Tt=null,Ct=null,Ee=!1,Ht=null;function Yv(t,e){var n=Ot(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ap(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tt=t,Ct=Xn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tt=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=jr!==null?{id:mn,overflow:gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ot(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tt=t,Ct=null,!0):!1;default:return!1}}function Qc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Jc(t){if(Ee){var e=Ct;if(e){var n=e;if(!Ap(t,e)){if(Qc(t))throw Error(N(418));e=Xn(n.nextSibling);var r=Tt;e&&Ap(t,e)?Yv(r,n):(t.flags=t.flags&-4097|2,Ee=!1,Tt=t)}}else{if(Qc(t))throw Error(N(418));t.flags=t.flags&-4097|2,Ee=!1,Tt=t}}}function Lp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function oa(t){if(t!==Tt)return!1;if(!Ee)return Lp(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Kc(t.type,t.memoizedProps)),e&&(e=Ct)){if(Qc(t))throw Qv(),Error(N(418));for(;e;)Yv(t,e),e=Xn(e.nextSibling)}if(Lp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(N(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=Xn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=Tt?Xn(t.stateNode.nextSibling):null;return!0}function Qv(){for(var t=Ct;t;)t=Xn(t.nextSibling)}function Mi(){Ct=Tt=null,Ee=!1}function mh(t){Ht===null?Ht=[t]:Ht.push(t)}var VI=On.ReactCurrentBatchConfig;function Wt(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ya=gr(null),Qa=null,mi=null,gh=null;function vh(){gh=mi=Qa=null}function _h(t){var e=Ya.current;ye(Ya),t._currentValue=e}function Xc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Si(t,e){Qa=t,gh=mi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dt=!0),t.firstContext=null)}function Lt(t){var e=t._currentValue;if(gh!==t)if(t={context:t,memoizedValue:e,next:null},mi===null){if(Qa===null)throw Error(N(308));mi=t,Qa.dependencies={lanes:0,firstContext:t}}else mi=mi.next=t;return e}var Rr=null;function yh(t){Rr===null?Rr=[t]:Rr.push(t)}function Jv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,yh(e)):(n.next=i.next,i.next=n),e.interleaved=n,kn(t,r)}function kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wn=!1;function wh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,kn(t,n)}return i=r.interleaved,i===null?(e.next=e,yh(r)):(e.next=i.next,i.next=e),r.interleaved=e,kn(t,n)}function Ca(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sh(t,n)}}function Dp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ja(t,e,n,r){var i=t.updateQueue;Wn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(h=e,m=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(m,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(m,d,h):v,h==null)break e;d=Se({},d,h);break e;case 2:Wn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Wr|=o,t.lanes=o,t.memoizedState=d}}function Mp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var Zv=new Jg.Component().refs;function Zc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zl={isMounted:function(t){return(t=t._reactInternals)?Xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ot(),i=tr(t),s=wn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Zn(t,s,i),e!==null&&(qt(e,t,i,r),Ca(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ot(),i=tr(t),s=wn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zn(t,s,i),e!==null&&(qt(e,t,i,r),Ca(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ot(),r=tr(t),i=wn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Zn(t,i,r),e!==null&&(qt(e,t,r,n),Ca(e,t,r))}};function Fp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!to(n,r)||!to(i,s):!0}function e_(t,e,n){var r=!1,i=ar,s=e.contextType;return typeof s=="object"&&s!==null?s=Lt(s):(i=gt(e)?Ur:it.current,r=e.contextTypes,s=(r=r!=null)?Di(t,i):ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Up(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&zl.enqueueReplaceState(e,e.state,null)}function ed(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Zv,wh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Lt(s):(s=gt(e)?Ur:it.current,i.context=Di(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&zl.enqueueReplaceState(i,i.state,null),Ja(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Zv&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,t))}return t}function aa(t,e){throw t=Object.prototype.toString.call(e),Error(N(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jp(t){var e=t._init;return e(t._payload)}function t_(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=nr(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,_){return f===null||f.tag!==6?(f=Yu(g,p.mode,_),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,_){var I=g.type;return I===ai?c(p,f,g.props.children,_,g.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===zn&&jp(I)===f.type)?(_=i(f,g.props),_.ref=fs(p,f,g),_.return=p,_):(_=Na(g.type,g.key,g.props,null,p.mode,_),_.ref=fs(p,f,g),_.return=p,_)}function u(p,f,g,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Qu(g,p.mode,_),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,_,I){return f===null||f.tag!==7?(f=Ar(g,p.mode,_,I),f.return=p,f):(f=i(f,g),f.return=p,f)}function d(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Yu(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Qo:return g=Na(f.type,f.key,f.props,null,p.mode,g),g.ref=fs(p,null,f),g.return=p,g;case oi:return f=Qu(f,p.mode,g),f.return=p,f;case zn:var _=f._init;return d(p,_(f._payload),g)}if(Ss(f)||ls(f))return f=Ar(f,p.mode,g,null),f.return=p,f;aa(p,f)}return null}function h(p,f,g,_){var I=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:a(p,f,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Qo:return g.key===I?l(p,f,g,_):null;case oi:return g.key===I?u(p,f,g,_):null;case zn:return I=g._init,h(p,f,I(g._payload),_)}if(Ss(g)||ls(g))return I!==null?null:c(p,f,g,_,null);aa(p,g)}return null}function m(p,f,g,_,I){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(g)||null,a(f,p,""+_,I);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Qo:return p=p.get(_.key===null?g:_.key)||null,l(f,p,_,I);case oi:return p=p.get(_.key===null?g:_.key)||null,u(f,p,_,I);case zn:var T=_._init;return m(p,f,g,T(_._payload),I)}if(Ss(_)||ls(_))return p=p.get(g)||null,c(f,p,_,I,null);aa(f,_)}return null}function v(p,f,g,_){for(var I=null,T=null,C=f,E=f=0,S=null;C!==null&&E<g.length;E++){C.index>E?(S=C,C=null):S=C.sibling;var P=h(p,C,g[E],_);if(P===null){C===null&&(C=S);break}t&&C&&P.alternate===null&&e(p,C),f=s(P,f,E),T===null?I=P:T.sibling=P,T=P,C=S}if(E===g.length)return n(p,C),Ee&&Er(p,E),I;if(C===null){for(;E<g.length;E++)C=d(p,g[E],_),C!==null&&(f=s(C,f,E),T===null?I=C:T.sibling=C,T=C);return Ee&&Er(p,E),I}for(C=r(p,C);E<g.length;E++)S=m(C,p,E,g[E],_),S!==null&&(t&&S.alternate!==null&&C.delete(S.key===null?E:S.key),f=s(S,f,E),T===null?I=S:T.sibling=S,T=S);return t&&C.forEach(function(L){return e(p,L)}),Ee&&Er(p,E),I}function y(p,f,g,_){var I=ls(g);if(typeof I!="function")throw Error(N(150));if(g=I.call(g),g==null)throw Error(N(151));for(var T=I=null,C=f,E=f=0,S=null,P=g.next();C!==null&&!P.done;E++,P=g.next()){C.index>E?(S=C,C=null):S=C.sibling;var L=h(p,C,P.value,_);if(L===null){C===null&&(C=S);break}t&&C&&L.alternate===null&&e(p,C),f=s(L,f,E),T===null?I=L:T.sibling=L,T=L,C=S}if(P.done)return n(p,C),Ee&&Er(p,E),I;if(C===null){for(;!P.done;E++,P=g.next())P=d(p,P.value,_),P!==null&&(f=s(P,f,E),T===null?I=P:T.sibling=P,T=P);return Ee&&Er(p,E),I}for(C=r(p,C);!P.done;E++,P=g.next())P=m(C,p,E,P.value,_),P!==null&&(t&&P.alternate!==null&&C.delete(P.key===null?E:P.key),f=s(P,f,E),T===null?I=P:T.sibling=P,T=P);return t&&C.forEach(function(D){return e(p,D)}),Ee&&Er(p,E),I}function w(p,f,g,_){if(typeof g=="object"&&g!==null&&g.type===ai&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Qo:e:{for(var I=g.key,T=f;T!==null;){if(T.key===I){if(I=g.type,I===ai){if(T.tag===7){n(p,T.sibling),f=i(T,g.props.children),f.return=p,p=f;break e}}else if(T.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===zn&&jp(I)===T.type){n(p,T.sibling),f=i(T,g.props),f.ref=fs(p,T,g),f.return=p,p=f;break e}n(p,T);break}else e(p,T);T=T.sibling}g.type===ai?(f=Ar(g.props.children,p.mode,_,g.key),f.return=p,p=f):(_=Na(g.type,g.key,g.props,null,p.mode,_),_.ref=fs(p,f,g),_.return=p,p=_)}return o(p);case oi:e:{for(T=g.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Qu(g,p.mode,_),f.return=p,p=f}return o(p);case zn:return T=g._init,w(p,f,T(g._payload),_)}if(Ss(g))return v(p,f,g,_);if(ls(g))return y(p,f,g,_);aa(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Yu(g,p.mode,_),f.return=p,p=f),o(p)):n(p,f)}return w}var Fi=t_(!0),n_=t_(!1),Lo={},cn=gr(Lo),so=gr(Lo),oo=gr(Lo);function Pr(t){if(t===Lo)throw Error(N(174));return t}function Eh(t,e){switch(ge(oo,e),ge(so,t),ge(cn,Lo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Oc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Oc(e,t)}ye(cn),ge(cn,e)}function Ui(){ye(cn),ye(so),ye(oo)}function r_(t){Pr(oo.current);var e=Pr(cn.current),n=Oc(e,t.type);e!==n&&(ge(so,t),ge(cn,n))}function Ih(t){so.current===t&&(ye(cn),ye(so))}var Ie=gr(0);function Xa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hu=[];function Ch(){for(var t=0;t<Hu.length;t++)Hu[t]._workInProgressVersionPrimary=null;Hu.length=0}var Sa=On.ReactCurrentDispatcher,$u=On.ReactCurrentBatchConfig,zr=0,Ce=null,Fe=null,He=null,Za=!1,Ds=!1,ao=0,KI=0;function et(){throw Error(N(321))}function Sh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qt(t[n],e[n]))return!1;return!0}function Th(t,e,n,r,i,s){if(zr=s,Ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sa.current=t===null||t.memoizedState===null?QI:JI,t=n(r,i),Ds){s=0;do{if(Ds=!1,ao=0,25<=s)throw Error(N(301));s+=1,He=Fe=null,e.updateQueue=null,Sa.current=XI,t=n(r,i)}while(Ds)}if(Sa.current=el,e=Fe!==null&&Fe.next!==null,zr=0,He=Fe=Ce=null,Za=!1,e)throw Error(N(300));return t}function kh(){var t=ao!==0;return ao=0,t}function tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Ce.memoizedState=He=t:He=He.next=t,He}function Dt(){if(Fe===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=He===null?Ce.memoizedState:He.next;if(e!==null)He=e,Fe=t;else{if(t===null)throw Error(N(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},He===null?Ce.memoizedState=He=t:He=He.next=t}return He}function lo(t,e){return typeof e=="function"?e(t):e}function Vu(t){var e=Dt(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((zr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Ce.lanes|=c,Wr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Qt(r,e.memoizedState)||(dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ce.lanes|=s,Wr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ku(t){var e=Dt(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Qt(s,e.memoizedState)||(dt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function i_(){}function s_(t,e){var n=Ce,r=Dt(),i=e(),s=!Qt(r.memoizedState,i);if(s&&(r.memoizedState=i,dt=!0),r=r.queue,Rh(l_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,uo(9,a_.bind(null,n,r,i,e),void 0,null),Ke===null)throw Error(N(349));zr&30||o_(n,e,i)}return i}function o_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function a_(t,e,n,r){e.value=n,e.getSnapshot=r,u_(e)&&c_(t)}function l_(t,e,n){return n(function(){u_(e)&&c_(t)})}function u_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qt(t,n)}catch{return!0}}function c_(t){var e=kn(t,1);e!==null&&qt(e,t,1,-1)}function zp(t){var e=tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lo,lastRenderedState:t},e.queue=t,t=t.dispatch=YI.bind(null,Ce,t),[e.memoizedState,t]}function uo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function d_(){return Dt().memoizedState}function Ta(t,e,n,r){var i=tn();Ce.flags|=t,i.memoizedState=uo(1|e,n,void 0,r===void 0?null:r)}function Wl(t,e,n,r){var i=Dt();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&Sh(r,o.deps)){i.memoizedState=uo(e,n,s,r);return}}Ce.flags|=t,i.memoizedState=uo(1|e,n,s,r)}function Wp(t,e){return Ta(8390656,8,t,e)}function Rh(t,e){return Wl(2048,8,t,e)}function h_(t,e){return Wl(4,2,t,e)}function f_(t,e){return Wl(4,4,t,e)}function p_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function m_(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4,4,p_.bind(null,e,t),n)}function Ph(){}function g_(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function v_(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function __(t,e,n){return zr&21?(Qt(n,e)||(n=Ev(),Ce.lanes|=n,Wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dt=!0),t.memoizedState=n)}function GI(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=$u.transition;$u.transition={};try{t(!1),e()}finally{ce=n,$u.transition=r}}function y_(){return Dt().memoizedState}function qI(t,e,n){var r=tr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},w_(t))E_(e,n);else if(n=Jv(t,e,n,r),n!==null){var i=ot();qt(n,t,r,i),I_(n,e,r)}}function YI(t,e,n){var r=tr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(w_(t))E_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Qt(a,o)){var l=e.interleaved;l===null?(i.next=i,yh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Jv(t,e,i,r),n!==null&&(i=ot(),qt(n,t,r,i),I_(n,e,r))}}function w_(t){var e=t.alternate;return t===Ce||e!==null&&e===Ce}function E_(t,e){Ds=Za=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function I_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sh(t,n)}}var el={readContext:Lt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},QI={readContext:Lt,useCallback:function(t,e){return tn().memoizedState=[t,e===void 0?null:e],t},useContext:Lt,useEffect:Wp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ta(4194308,4,p_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ta(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ta(4,2,t,e)},useMemo:function(t,e){var n=tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=qI.bind(null,Ce,t),[r.memoizedState,t]},useRef:function(t){var e=tn();return t={current:t},e.memoizedState=t},useState:zp,useDebugValue:Ph,useDeferredValue:function(t){return tn().memoizedState=t},useTransition:function(){var t=zp(!1),e=t[0];return t=GI.bind(null,t[1]),tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ce,i=tn();if(Ee){if(n===void 0)throw Error(N(407));n=n()}else{if(n=e(),Ke===null)throw Error(N(349));zr&30||o_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Wp(l_.bind(null,r,s,t),[t]),r.flags|=2048,uo(9,a_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=tn(),e=Ke.identifierPrefix;if(Ee){var n=gn,r=mn;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ao++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=KI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},JI={readContext:Lt,useCallback:g_,useContext:Lt,useEffect:Rh,useImperativeHandle:m_,useInsertionEffect:h_,useLayoutEffect:f_,useMemo:v_,useReducer:Vu,useRef:d_,useState:function(){return Vu(lo)},useDebugValue:Ph,useDeferredValue:function(t){var e=Dt();return __(e,Fe.memoizedState,t)},useTransition:function(){var t=Vu(lo)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:i_,useSyncExternalStore:s_,useId:y_,unstable_isNewReconciler:!1},XI={readContext:Lt,useCallback:g_,useContext:Lt,useEffect:Rh,useImperativeHandle:m_,useInsertionEffect:h_,useLayoutEffect:f_,useMemo:v_,useReducer:Ku,useRef:d_,useState:function(){return Ku(lo)},useDebugValue:Ph,useDeferredValue:function(t){var e=Dt();return Fe===null?e.memoizedState=t:__(e,Fe.memoizedState,t)},useTransition:function(){var t=Ku(lo)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:i_,useSyncExternalStore:s_,useId:y_,unstable_isNewReconciler:!1};function ji(t,e){try{var n="",r=e;do n+=kE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Gu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function td(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ZI=typeof WeakMap=="function"?WeakMap:Map;function C_(t,e,n){n=wn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){nl||(nl=!0,dd=r),td(t,e)},n}function S_(t,e,n){n=wn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){td(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){td(t,e),typeof r!="function"&&(er===null?er=new Set([this]):er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Bp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ZI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=fC.bind(null,t,e,n),e.then(t,t))}function Hp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $p(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wn(-1,1),e.tag=2,Zn(n,e,1))),n.lanes|=1),t)}var eC=On.ReactCurrentOwner,dt=!1;function st(t,e,n,r){e.child=t===null?n_(e,null,n,r):Fi(e,t.child,n,r)}function Vp(t,e,n,r,i){n=n.render;var s=e.ref;return Si(e,i),r=Th(t,e,n,r,s,i),n=kh(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rn(t,e,i)):(Ee&&n&&fh(e),e.flags|=1,st(t,e,r,i),e.child)}function Kp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Mh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,T_(t,e,s,r,i)):(t=Na(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:to,n(o,r)&&t.ref===e.ref)return Rn(t,e,i)}return e.flags|=1,t=nr(s,r),t.ref=e.ref,t.return=e,e.child=t}function T_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(to(s,r)&&t.ref===e.ref)if(dt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(dt=!0);else return e.lanes=t.lanes,Rn(t,e,i)}return nd(t,e,n,r,i)}function k_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(vi,Et),Et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(vi,Et),Et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(vi,Et),Et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(vi,Et),Et|=r;return st(t,e,i,n),e.child}function R_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nd(t,e,n,r,i){var s=gt(n)?Ur:it.current;return s=Di(e,s),Si(e,i),n=Th(t,e,n,r,s,i),r=kh(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rn(t,e,i)):(Ee&&r&&fh(e),e.flags|=1,st(t,e,n,i),e.child)}function Gp(t,e,n,r,i){if(gt(n)){var s=!0;Ka(e)}else s=!1;if(Si(e,i),e.stateNode===null)ka(t,e),e_(e,n,r),ed(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Lt(u):(u=gt(n)?Ur:it.current,u=Di(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Up(e,o,r,u),Wn=!1;var h=e.memoizedState;o.state=h,Ja(e,r,o,i),l=e.memoizedState,a!==r||h!==l||mt.current||Wn?(typeof c=="function"&&(Zc(e,n,c,r),l=e.memoizedState),(a=Wn||Fp(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Xv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Wt(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Lt(l):(l=gt(n)?Ur:it.current,l=Di(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Up(e,o,r,l),Wn=!1,h=e.memoizedState,o.state=h,Ja(e,r,o,i);var v=e.memoizedState;a!==d||h!==v||mt.current||Wn?(typeof m=="function"&&(Zc(e,n,m,r),v=e.memoizedState),(u=Wn||Fp(e,n,u,r,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return rd(t,e,n,r,s,i)}function rd(t,e,n,r,i,s){R_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Op(e,n,!1),Rn(t,e,s);r=e.stateNode,eC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Fi(e,t.child,null,s),e.child=Fi(e,null,a,s)):st(t,e,a,s),e.memoizedState=r.state,i&&Op(e,n,!0),e.child}function P_(t){var e=t.stateNode;e.pendingContext?xp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xp(t,e.context,!1),Eh(t,e.containerInfo)}function qp(t,e,n,r,i){return Mi(),mh(i),e.flags|=256,st(t,e,n,r),e.child}var id={dehydrated:null,treeContext:null,retryLane:0};function sd(t){return{baseLanes:t,cachePool:null,transitions:null}}function N_(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(Ie,i&1),t===null)return Jc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$l(o,r,0,null),t=Ar(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=sd(n),e.memoizedState=id,t):Nh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return tC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=nr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=nr(a,s):(s=Ar(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?sd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=id,r}return s=t.child,t=s.sibling,r=nr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Nh(t,e){return e=$l({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function la(t,e,n,r){return r!==null&&mh(r),Fi(e,t.child,null,n),t=Nh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function tC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Gu(Error(N(422))),la(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=$l({mode:"visible",children:r.children},i,0,null),s=Ar(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Fi(e,t.child,null,o),e.child.memoizedState=sd(o),e.memoizedState=id,s);if(!(e.mode&1))return la(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(N(419)),r=Gu(s,r,void 0),la(t,e,o,r)}if(a=(o&t.childLanes)!==0,dt||a){if(r=Ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,kn(t,i),qt(r,t,i,-1))}return Dh(),r=Gu(Error(N(421))),la(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=pC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ct=Xn(i.nextSibling),Tt=e,Ee=!0,Ht=null,t!==null&&(bt[xt++]=mn,bt[xt++]=gn,bt[xt++]=jr,mn=t.id,gn=t.overflow,jr=e),e=Nh(e,r.children),e.flags|=4096,e)}function Yp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xc(t.return,e,n)}function qu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function b_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(st(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yp(t,n,e);else if(t.tag===19)Yp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Xa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),qu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Xa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}qu(e,!0,n,null,s);break;case"together":qu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ka(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Rn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(N(153));if(e.child!==null){for(t=e.child,n=nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function nC(t,e,n){switch(e.tag){case 3:P_(e),Mi();break;case 5:r_(e);break;case 1:gt(e.type)&&Ka(e);break;case 4:Eh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(Ya,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?N_(t,e,n):(ge(Ie,Ie.current&1),t=Rn(t,e,n),t!==null?t.sibling:null);ge(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return b_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,k_(t,e,n)}return Rn(t,e,n)}var x_,od,O_,A_;x_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};od=function(){};O_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Pr(cn.current);var s=null;switch(n){case"input":i=Pc(t,i),r=Pc(t,r),s=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),s=[];break;case"textarea":i=xc(t,i),r=xc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=$a)}Ac(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(qs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(qs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ve("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};A_=function(t,e,n,r){n!==r&&(e.flags|=4)};function ps(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function rC(t,e,n){var r=e.pendingProps;switch(ph(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(e),null;case 1:return gt(e.type)&&Va(),tt(e),null;case 3:return r=e.stateNode,Ui(),ye(mt),ye(it),Ch(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(oa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ht!==null&&(pd(Ht),Ht=null))),od(t,e),tt(e),null;case 5:Ih(e);var i=Pr(oo.current);if(n=e.type,t!==null&&e.stateNode!=null)O_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(N(166));return tt(e),null}if(t=Pr(cn.current),oa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[nn]=e,r[io]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<ks.length;i++)ve(ks[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":ip(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":op(r,s),ve("invalid",r)}Ac(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&sa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&sa(r.textContent,a,t),i=["children",""+a]):qs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":Jo(r),sp(r,s,!0);break;case"textarea":Jo(r),ap(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=$a)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ov(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[nn]=e,t[io]=r,x_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Lc(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<ks.length;i++)ve(ks[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":ip(t,r),i=Pc(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),ve("invalid",t);break;case"textarea":op(t,r),i=xc(t,r),ve("invalid",t);break;default:i=r}Ac(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?uv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&av(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ys(t,l):typeof l=="number"&&Ys(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ve("scroll",t):l!=null&&Zd(t,s,l,o))}switch(n){case"input":Jo(t),sp(t,r,!1);break;case"textarea":Jo(t),ap(t);break;case"option":r.value!=null&&t.setAttribute("value",""+or(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?wi(t,!!r.multiple,s,!1):r.defaultValue!=null&&wi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=$a)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tt(e),null;case 6:if(t&&e.stateNode!=null)A_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(N(166));if(n=Pr(oo.current),Pr(cn.current),oa(e)){if(r=e.stateNode,n=e.memoizedProps,r[nn]=e,(s=r.nodeValue!==n)&&(t=Tt,t!==null))switch(t.tag){case 3:sa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nn]=e,e.stateNode=r}return tt(e),null;case 13:if(ye(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&Ct!==null&&e.mode&1&&!(e.flags&128))Qv(),Mi(),e.flags|=98560,s=!1;else if(s=oa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(N(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[nn]=e}else Mi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tt(e),s=!1}else Ht!==null&&(pd(Ht),Ht=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?je===0&&(je=3):Dh())),e.updateQueue!==null&&(e.flags|=4),tt(e),null);case 4:return Ui(),od(t,e),t===null&&no(e.stateNode.containerInfo),tt(e),null;case 10:return _h(e.type._context),tt(e),null;case 17:return gt(e.type)&&Va(),tt(e),null;case 19:if(ye(Ie),s=e.memoizedState,s===null)return tt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ps(s,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xa(t),o!==null){for(e.flags|=128,ps(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>zi&&(e.flags|=128,r=!0,ps(s,!1),e.lanes=4194304)}else{if(!r)if(t=Xa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ps(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ee)return tt(e),null}else 2*Ne()-s.renderingStartTime>zi&&n!==1073741824&&(e.flags|=128,r=!0,ps(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=Ie.current,ge(Ie,r?n&1|2:n&1),e):(tt(e),null);case 22:case 23:return Lh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Et&1073741824&&(tt(e),e.subtreeFlags&6&&(e.flags|=8192)):tt(e),null;case 24:return null;case 25:return null}throw Error(N(156,e.tag))}function iC(t,e){switch(ph(e),e.tag){case 1:return gt(e.type)&&Va(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ui(),ye(mt),ye(it),Ch(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ih(e),null;case 13:if(ye(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(N(340));Mi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(Ie),null;case 4:return Ui(),null;case 10:return _h(e.type._context),null;case 22:case 23:return Lh(),null;case 24:return null;default:return null}}var ua=!1,nt=!1,sC=typeof WeakSet=="function"?WeakSet:Set,j=null;function gi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function ad(t,e,n){try{n()}catch(r){Te(t,e,r)}}var Qp=!1;function oC(t,e){if($c=Wa,t=Fv(),hh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vc={focusedElem:t,selectionRange:n},Wa=!1,j=e;j!==null;)if(e=j,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,j=t;else for(;j!==null;){e=j;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,w=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:Wt(e.type,y),w);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(_){Te(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,j=t;break}j=e.return}return v=Qp,Qp=!1,v}function Ms(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ad(e,n,s)}i=i.next}while(i!==r)}}function Bl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ld(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function L_(t){var e=t.alternate;e!==null&&(t.alternate=null,L_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[nn],delete e[io],delete e[qc],delete e[BI],delete e[HI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function D_(t){return t.tag===5||t.tag===3||t.tag===4}function Jp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||D_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ud(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$a));else if(r!==4&&(t=t.child,t!==null))for(ud(t,e,n),t=t.sibling;t!==null;)ud(t,e,n),t=t.sibling}function cd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(cd(t,e,n),t=t.sibling;t!==null;)cd(t,e,n),t=t.sibling}var qe=null,Bt=!1;function Mn(t,e,n){for(n=n.child;n!==null;)M_(t,e,n),n=n.sibling}function M_(t,e,n){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(Ll,n)}catch{}switch(n.tag){case 5:nt||gi(n,e);case 6:var r=qe,i=Bt;qe=null,Mn(t,e,n),qe=r,Bt=i,qe!==null&&(Bt?(t=qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(Bt?(t=qe,n=n.stateNode,t.nodeType===8?Wu(t.parentNode,n):t.nodeType===1&&Wu(t,n),Zs(t)):Wu(qe,n.stateNode));break;case 4:r=qe,i=Bt,qe=n.stateNode.containerInfo,Bt=!0,Mn(t,e,n),qe=r,Bt=i;break;case 0:case 11:case 14:case 15:if(!nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ad(n,e,o),i=i.next}while(i!==r)}Mn(t,e,n);break;case 1:if(!nt&&(gi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Te(n,e,a)}Mn(t,e,n);break;case 21:Mn(t,e,n);break;case 22:n.mode&1?(nt=(r=nt)||n.memoizedState!==null,Mn(t,e,n),nt=r):Mn(t,e,n);break;default:Mn(t,e,n)}}function Xp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sC),e.forEach(function(r){var i=mC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:qe=a.stateNode,Bt=!1;break e;case 3:qe=a.stateNode.containerInfo,Bt=!0;break e;case 4:qe=a.stateNode.containerInfo,Bt=!0;break e}a=a.return}if(qe===null)throw Error(N(160));M_(s,o,i),qe=null,Bt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Te(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)F_(e,t),e=e.sibling}function F_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(e,t),en(t),r&4){try{Ms(3,t,t.return),Bl(3,t)}catch(y){Te(t,t.return,y)}try{Ms(5,t,t.return)}catch(y){Te(t,t.return,y)}}break;case 1:zt(e,t),en(t),r&512&&n!==null&&gi(n,n.return);break;case 5:if(zt(e,t),en(t),r&512&&n!==null&&gi(n,n.return),t.flags&32){var i=t.stateNode;try{Ys(i,"")}catch(y){Te(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&iv(i,s),Lc(a,o);var u=Lc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?uv(i,d):c==="dangerouslySetInnerHTML"?av(i,d):c==="children"?Ys(i,d):Zd(i,c,d,u)}switch(a){case"input":Nc(i,s);break;case"textarea":sv(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?wi(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?wi(i,!!s.multiple,s.defaultValue,!0):wi(i,!!s.multiple,s.multiple?[]:"",!1))}i[io]=s}catch(y){Te(t,t.return,y)}}break;case 6:if(zt(e,t),en(t),r&4){if(t.stateNode===null)throw Error(N(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){Te(t,t.return,y)}}break;case 3:if(zt(e,t),en(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zs(e.containerInfo)}catch(y){Te(t,t.return,y)}break;case 4:zt(e,t),en(t);break;case 13:zt(e,t),en(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Oh=Ne())),r&4&&Xp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(nt=(u=nt)||c,zt(e,t),nt=u):zt(e,t),en(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(j=t,c=t.child;c!==null;){for(d=j=c;j!==null;){switch(h=j,m=h.child,h.tag){case 0:case 11:case 14:case 15:Ms(4,h,h.return);break;case 1:gi(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){Te(r,n,y)}}break;case 5:gi(h,h.return);break;case 22:if(h.memoizedState!==null){em(d);continue}}m!==null?(m.return=h,j=m):em(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=lv("display",o))}catch(y){Te(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){Te(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:zt(e,t),en(t),r&4&&Xp(t);break;case 21:break;default:zt(e,t),en(t)}}function en(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(D_(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ys(i,""),r.flags&=-33);var s=Jp(t);cd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Jp(t);ud(t,a,o);break;default:throw Error(N(161))}}catch(l){Te(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function aC(t,e,n){j=t,U_(t)}function U_(t,e,n){for(var r=(t.mode&1)!==0;j!==null;){var i=j,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ua;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||nt;a=ua;var u=nt;if(ua=o,(nt=l)&&!u)for(j=i;j!==null;)o=j,l=o.child,o.tag===22&&o.memoizedState!==null?tm(i):l!==null?(l.return=o,j=l):tm(i);for(;s!==null;)j=s,U_(s),s=s.sibling;j=i,ua=a,nt=u}Zp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,j=s):Zp(t)}}function Zp(t){for(;j!==null;){var e=j;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nt||Bl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!nt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Wt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Mp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Mp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Zs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}nt||e.flags&512&&ld(e)}catch(h){Te(e,e.return,h)}}if(e===t){j=null;break}if(n=e.sibling,n!==null){n.return=e.return,j=n;break}j=e.return}}function em(t){for(;j!==null;){var e=j;if(e===t){j=null;break}var n=e.sibling;if(n!==null){n.return=e.return,j=n;break}j=e.return}}function tm(t){for(;j!==null;){var e=j;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Bl(4,e)}catch(l){Te(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Te(e,i,l)}}var s=e.return;try{ld(e)}catch(l){Te(e,s,l)}break;case 5:var o=e.return;try{ld(e)}catch(l){Te(e,o,l)}}}catch(l){Te(e,e.return,l)}if(e===t){j=null;break}var a=e.sibling;if(a!==null){a.return=e.return,j=a;break}j=e.return}}var lC=Math.ceil,tl=On.ReactCurrentDispatcher,bh=On.ReactCurrentOwner,At=On.ReactCurrentBatchConfig,ne=0,Ke=null,Oe=null,Qe=0,Et=0,vi=gr(0),je=0,co=null,Wr=0,Hl=0,xh=0,Fs=null,ct=null,Oh=0,zi=1/0,fn=null,nl=!1,dd=null,er=null,ca=!1,Vn=null,rl=0,Us=0,hd=null,Ra=-1,Pa=0;function ot(){return ne&6?Ne():Ra!==-1?Ra:Ra=Ne()}function tr(t){return t.mode&1?ne&2&&Qe!==0?Qe&-Qe:VI.transition!==null?(Pa===0&&(Pa=Ev()),Pa):(t=ce,t!==0||(t=window.event,t=t===void 0?16:Pv(t.type)),t):1}function qt(t,e,n,r){if(50<Us)throw Us=0,hd=null,Error(N(185));xo(t,n,r),(!(ne&2)||t!==Ke)&&(t===Ke&&(!(ne&2)&&(Hl|=n),je===4&&Hn(t,Qe)),vt(t,r),n===1&&ne===0&&!(e.mode&1)&&(zi=Ne()+500,jl&&vr()))}function vt(t,e){var n=t.callbackNode;VE(t,e);var r=za(t,t===Ke?Qe:0);if(r===0)n!==null&&cp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&cp(n),e===1)t.tag===0?$I(nm.bind(null,t)):Gv(nm.bind(null,t)),zI(function(){!(ne&6)&&vr()}),n=null;else{switch(Iv(r)){case 1:n=ih;break;case 4:n=yv;break;case 16:n=ja;break;case 536870912:n=wv;break;default:n=ja}n=K_(n,j_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function j_(t,e){if(Ra=-1,Pa=0,ne&6)throw Error(N(327));var n=t.callbackNode;if(Ti()&&t.callbackNode!==n)return null;var r=za(t,t===Ke?Qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=il(t,r);else{e=r;var i=ne;ne|=2;var s=W_();(Ke!==t||Qe!==e)&&(fn=null,zi=Ne()+500,Or(t,e));do try{dC();break}catch(a){z_(t,a)}while(1);vh(),tl.current=s,ne=i,Oe!==null?e=0:(Ke=null,Qe=0,e=je)}if(e!==0){if(e===2&&(i=jc(t),i!==0&&(r=i,e=fd(t,i))),e===1)throw n=co,Or(t,0),Hn(t,r),vt(t,Ne()),n;if(e===6)Hn(t,r);else{if(i=t.current.alternate,!(r&30)&&!uC(i)&&(e=il(t,r),e===2&&(s=jc(t),s!==0&&(r=s,e=fd(t,s))),e===1))throw n=co,Or(t,0),Hn(t,r),vt(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(N(345));case 2:Ir(t,ct,fn);break;case 3:if(Hn(t,r),(r&130023424)===r&&(e=Oh+500-Ne(),10<e)){if(za(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Gc(Ir.bind(null,t,ct,fn),e);break}Ir(t,ct,fn);break;case 4:if(Hn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Gt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lC(r/1960))-r,10<r){t.timeoutHandle=Gc(Ir.bind(null,t,ct,fn),r);break}Ir(t,ct,fn);break;case 5:Ir(t,ct,fn);break;default:throw Error(N(329))}}}return vt(t,Ne()),t.callbackNode===n?j_.bind(null,t):null}function fd(t,e){var n=Fs;return t.current.memoizedState.isDehydrated&&(Or(t,e).flags|=256),t=il(t,e),t!==2&&(e=ct,ct=n,e!==null&&pd(e)),t}function pd(t){ct===null?ct=t:ct.push.apply(ct,t)}function uC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Qt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hn(t,e){for(e&=~xh,e&=~Hl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gt(e),r=1<<n;t[n]=-1,e&=~r}}function nm(t){if(ne&6)throw Error(N(327));Ti();var e=za(t,0);if(!(e&1))return vt(t,Ne()),null;var n=il(t,e);if(t.tag!==0&&n===2){var r=jc(t);r!==0&&(e=r,n=fd(t,r))}if(n===1)throw n=co,Or(t,0),Hn(t,e),vt(t,Ne()),n;if(n===6)throw Error(N(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ir(t,ct,fn),vt(t,Ne()),null}function Ah(t,e){var n=ne;ne|=1;try{return t(e)}finally{ne=n,ne===0&&(zi=Ne()+500,jl&&vr())}}function Br(t){Vn!==null&&Vn.tag===0&&!(ne&6)&&Ti();var e=ne;ne|=1;var n=At.transition,r=ce;try{if(At.transition=null,ce=1,t)return t()}finally{ce=r,At.transition=n,ne=e,!(ne&6)&&vr()}}function Lh(){Et=vi.current,ye(vi)}function Or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jI(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(ph(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Va();break;case 3:Ui(),ye(mt),ye(it),Ch();break;case 5:Ih(r);break;case 4:Ui();break;case 13:ye(Ie);break;case 19:ye(Ie);break;case 10:_h(r.type._context);break;case 22:case 23:Lh()}n=n.return}if(Ke=t,Oe=t=nr(t.current,null),Qe=Et=e,je=0,co=null,xh=Hl=Wr=0,ct=Fs=null,Rr!==null){for(e=0;e<Rr.length;e++)if(n=Rr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Rr=null}return t}function z_(t,e){do{var n=Oe;try{if(vh(),Sa.current=el,Za){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Za=!1}if(zr=0,He=Fe=Ce=null,Ds=!1,ao=0,bh.current=null,n===null||n.return===null){je=1,co=e,Oe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Qe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Hp(o);if(m!==null){m.flags&=-257,$p(m,o,a,s,e),m.mode&1&&Bp(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Bp(s,u,e),Dh();break e}l=Error(N(426))}}else if(Ee&&a.mode&1){var w=Hp(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),$p(w,o,a,s,e),mh(ji(l,a));break e}}s=l=ji(l,a),je!==4&&(je=2),Fs===null?Fs=[s]:Fs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=C_(s,l,e);Dp(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(er===null||!er.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=S_(s,a,e);Dp(s,_);break e}}s=s.return}while(s!==null)}H_(n)}catch(I){e=I,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(1)}function W_(){var t=tl.current;return tl.current=el,t===null?el:t}function Dh(){(je===0||je===3||je===2)&&(je=4),Ke===null||!(Wr&268435455)&&!(Hl&268435455)||Hn(Ke,Qe)}function il(t,e){var n=ne;ne|=2;var r=W_();(Ke!==t||Qe!==e)&&(fn=null,Or(t,e));do try{cC();break}catch(i){z_(t,i)}while(1);if(vh(),ne=n,tl.current=r,Oe!==null)throw Error(N(261));return Ke=null,Qe=0,je}function cC(){for(;Oe!==null;)B_(Oe)}function dC(){for(;Oe!==null&&!ME();)B_(Oe)}function B_(t){var e=V_(t.alternate,t,Et);t.memoizedProps=t.pendingProps,e===null?H_(t):Oe=e,bh.current=null}function H_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=iC(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,Oe=null;return}}else if(n=rC(n,e,Et),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);je===0&&(je=5)}function Ir(t,e,n){var r=ce,i=At.transition;try{At.transition=null,ce=1,hC(t,e,n,r)}finally{At.transition=i,ce=r}return null}function hC(t,e,n,r){do Ti();while(Vn!==null);if(ne&6)throw Error(N(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(N(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(KE(t,s),t===Ke&&(Oe=Ke=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ca||(ca=!0,K_(ja,function(){return Ti(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=At.transition,At.transition=null;var o=ce;ce=1;var a=ne;ne|=4,bh.current=null,oC(t,n),F_(n,t),OI(Vc),Wa=!!$c,Vc=$c=null,t.current=n,aC(n),FE(),ne=a,ce=o,At.transition=s}else t.current=n;if(ca&&(ca=!1,Vn=t,rl=i),s=t.pendingLanes,s===0&&(er=null),zE(n.stateNode),vt(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(nl)throw nl=!1,t=dd,dd=null,t;return rl&1&&t.tag!==0&&Ti(),s=t.pendingLanes,s&1?t===hd?Us++:(Us=0,hd=t):Us=0,vr(),null}function Ti(){if(Vn!==null){var t=Iv(rl),e=At.transition,n=ce;try{if(At.transition=null,ce=16>t?16:t,Vn===null)var r=!1;else{if(t=Vn,Vn=null,rl=0,ne&6)throw Error(N(331));var i=ne;for(ne|=4,j=t.current;j!==null;){var s=j,o=s.child;if(j.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(j=u;j!==null;){var c=j;switch(c.tag){case 0:case 11:case 15:Ms(8,c,s)}var d=c.child;if(d!==null)d.return=c,j=d;else for(;j!==null;){c=j;var h=c.sibling,m=c.return;if(L_(c),c===u){j=null;break}if(h!==null){h.return=m,j=h;break}j=m}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}j=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,j=o;else e:for(;j!==null;){if(s=j,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ms(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,j=p;break e}j=s.return}}var f=t.current;for(j=f;j!==null;){o=j;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,j=g;else e:for(o=f;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Bl(9,a)}}catch(I){Te(a,a.return,I)}if(a===o){j=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,j=_;break e}j=a.return}}if(ne=i,vr(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(Ll,t)}catch{}r=!0}return r}finally{ce=n,At.transition=e}}return!1}function rm(t,e,n){e=ji(n,e),e=C_(t,e,1),t=Zn(t,e,1),e=ot(),t!==null&&(xo(t,1,e),vt(t,e))}function Te(t,e,n){if(t.tag===3)rm(t,t,n);else for(;e!==null;){if(e.tag===3){rm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(er===null||!er.has(r))){t=ji(n,t),t=S_(e,t,1),e=Zn(e,t,1),t=ot(),e!==null&&(xo(e,1,t),vt(e,t));break}}e=e.return}}function fC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ot(),t.pingedLanes|=t.suspendedLanes&n,Ke===t&&(Qe&n)===n&&(je===4||je===3&&(Qe&130023424)===Qe&&500>Ne()-Oh?Or(t,0):xh|=n),vt(t,e)}function $_(t,e){e===0&&(t.mode&1?(e=ea,ea<<=1,!(ea&130023424)&&(ea=4194304)):e=1);var n=ot();t=kn(t,e),t!==null&&(xo(t,e,n),vt(t,n))}function pC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$_(t,n)}function mC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(e),$_(t,n)}var V_;V_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mt.current)dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dt=!1,nC(t,e,n);dt=!!(t.flags&131072)}else dt=!1,Ee&&e.flags&1048576&&qv(e,qa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ka(t,e),t=e.pendingProps;var i=Di(e,it.current);Si(e,n),i=Th(null,e,r,t,i,n);var s=kh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gt(r)?(s=!0,Ka(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wh(e),i.updater=zl,e.stateNode=i,i._reactInternals=e,ed(e,r,t,n),e=rd(null,e,r,!0,s,n)):(e.tag=0,Ee&&s&&fh(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ka(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=vC(r),t=Wt(r,t),i){case 0:e=nd(null,e,r,t,n);break e;case 1:e=Gp(null,e,r,t,n);break e;case 11:e=Vp(null,e,r,t,n);break e;case 14:e=Kp(null,e,r,Wt(r.type,t),n);break e}throw Error(N(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),nd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Gp(t,e,r,i,n);case 3:e:{if(P_(e),t===null)throw Error(N(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Xv(t,e),Ja(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ji(Error(N(423)),e),e=qp(t,e,r,n,i);break e}else if(r!==i){i=ji(Error(N(424)),e),e=qp(t,e,r,n,i);break e}else for(Ct=Xn(e.stateNode.containerInfo.firstChild),Tt=e,Ee=!0,Ht=null,n=n_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mi(),r===i){e=Rn(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return r_(e),t===null&&Jc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Kc(r,i)?o=null:s!==null&&Kc(r,s)&&(e.flags|=32),R_(t,e),st(t,e,o,n),e.child;case 6:return t===null&&Jc(e),null;case 13:return N_(t,e,n);case 4:return Eh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fi(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Vp(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(Ya,r._currentValue),r._currentValue=o,s!==null)if(Qt(s.value,o)){if(s.children===i.children&&!mt.current){e=Rn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=wn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Xc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(N(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Xc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Si(e,n),i=Lt(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=Wt(r,e.pendingProps),i=Wt(r.type,i),Kp(t,e,r,i,n);case 15:return T_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),ka(t,e),e.tag=1,gt(r)?(t=!0,Ka(e)):t=!1,Si(e,n),e_(e,r,i),ed(e,r,i,n),rd(null,e,r,!0,t,n);case 19:return b_(t,e,n);case 22:return k_(t,e,n)}throw Error(N(156,e.tag))};function K_(t,e){return _v(t,e)}function gC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(t,e,n,r){return new gC(t,e,n,r)}function Mh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vC(t){if(typeof t=="function")return Mh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===th)return 11;if(t===nh)return 14}return 2}function nr(t,e){var n=t.alternate;return n===null?(n=Ot(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Na(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Mh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ai:return Ar(n.children,i,s,e);case eh:o=8,i|=8;break;case Sc:return t=Ot(12,n,e,i|2),t.elementType=Sc,t.lanes=s,t;case Tc:return t=Ot(13,n,e,i),t.elementType=Tc,t.lanes=s,t;case kc:return t=Ot(19,n,e,i),t.elementType=kc,t.lanes=s,t;case tv:return $l(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Zg:o=10;break e;case ev:o=9;break e;case th:o=11;break e;case nh:o=14;break e;case zn:o=16,r=null;break e}throw Error(N(130,t==null?t:typeof t,""))}return e=Ot(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ar(t,e,n,r){return t=Ot(7,t,r,e),t.lanes=n,t}function $l(t,e,n,r){return t=Ot(22,t,r,e),t.elementType=tv,t.lanes=n,t.stateNode={isHidden:!1},t}function Yu(t,e,n){return t=Ot(6,t,null,e),t.lanes=n,t}function Qu(t,e,n){return e=Ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _C(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bu(0),this.expirationTimes=bu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fh(t,e,n,r,i,s,o,a,l){return t=new _C(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ot(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wh(s),t}function yC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function G_(t){if(!t)return ar;t=t._reactInternals;e:{if(Xr(t)!==t||t.tag!==1)throw Error(N(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(N(171))}if(t.tag===1){var n=t.type;if(gt(n))return Kv(t,n,e)}return e}function q_(t,e,n,r,i,s,o,a,l){return t=Fh(n,r,!0,t,i,s,o,a,l),t.context=G_(null),n=t.current,r=ot(),i=tr(n),s=wn(r,i),s.callback=e??null,Zn(n,s,i),t.current.lanes=i,xo(t,i,r),vt(t,r),t}function Vl(t,e,n,r){var i=e.current,s=ot(),o=tr(i);return n=G_(n),e.context===null?e.context=n:e.pendingContext=n,e=wn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Zn(i,e,o),t!==null&&(qt(t,i,o,s),Ca(t,i,o)),o}function sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function im(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Uh(t,e){im(t,e),(t=t.alternate)&&im(t,e)}function wC(){return null}var Y_=typeof reportError=="function"?reportError:function(t){console.error(t)};function jh(t){this._internalRoot=t}Kl.prototype.render=jh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(N(409));Vl(t,e,null,null)};Kl.prototype.unmount=jh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){Vl(null,t,null,null)}),e[Tn]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Tv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bn.length&&e!==0&&e<Bn[n].priority;n++);Bn.splice(n,0,t),n===0&&Rv(t)}};function zh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sm(){}function EC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=sl(o);s.call(u)}}var o=q_(e,r,t,0,null,!1,!1,"",sm);return t._reactRootContainer=o,t[Tn]=o.current,no(t.nodeType===8?t.parentNode:t),Br(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=sl(l);a.call(u)}}var l=Fh(t,0,!1,null,null,!1,!1,"",sm);return t._reactRootContainer=l,t[Tn]=l.current,no(t.nodeType===8?t.parentNode:t),Br(function(){Vl(e,l,n,r)}),l}function ql(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=sl(o);a.call(l)}}Vl(e,o,t,i)}else o=EC(n,e,t,i,r);return sl(o)}Cv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ts(e.pendingLanes);n!==0&&(sh(e,n|1),vt(e,Ne()),!(ne&6)&&(zi=Ne()+500,vr()))}break;case 13:Br(function(){var r=kn(t,1);if(r!==null){var i=ot();qt(r,t,1,i)}}),Uh(t,1)}};oh=function(t){if(t.tag===13){var e=kn(t,134217728);if(e!==null){var n=ot();qt(e,t,134217728,n)}Uh(t,134217728)}};Sv=function(t){if(t.tag===13){var e=tr(t),n=kn(t,e);if(n!==null){var r=ot();qt(n,t,e,r)}Uh(t,e)}};Tv=function(){return ce};kv=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};Mc=function(t,e,n){switch(e){case"input":if(Nc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ul(r);if(!i)throw Error(N(90));rv(r),Nc(r,i)}}}break;case"textarea":sv(t,n);break;case"select":e=n.value,e!=null&&wi(t,!!n.multiple,e,!1)}};hv=Ah;fv=Br;var IC={usingClientEntryPoint:!1,Events:[Ao,di,Ul,cv,dv,Ah]},ms={findFiberByHostInstance:kr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},CC={bundleType:ms.bundleType,version:ms.version,rendererPackageName:ms.rendererPackageName,rendererConfig:ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:On.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gv(t),t===null?null:t.stateNode},findFiberByHostInstance:ms.findFiberByHostInstance||wC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!da.isDisabled&&da.supportsFiber)try{Ll=da.inject(CC),un=da}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IC;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zh(e))throw Error(N(200));return yC(t,e,null,n)};Rt.createRoot=function(t,e){if(!zh(t))throw Error(N(299));var n=!1,r="",i=Y_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Fh(t,1,!1,null,null,n,!1,r,i),t[Tn]=e.current,no(t.nodeType===8?t.parentNode:t),new jh(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(N(188)):(t=Object.keys(t).join(","),Error(N(268,t)));return t=gv(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return Br(t)};Rt.hydrate=function(t,e,n){if(!Gl(e))throw Error(N(200));return ql(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!zh(t))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Y_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=q_(e,null,t,1,n??null,i,!1,s,o),t[Tn]=e.current,no(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Kl(e)};Rt.render=function(t,e,n){if(!Gl(e))throw Error(N(200));return ql(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!Gl(t))throw Error(N(40));return t._reactRootContainer?(Br(function(){ql(null,null,t,!1,function(){t._reactRootContainer=null,t[Tn]=null})}),!0):!1};Rt.unstable_batchedUpdates=Ah;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Gl(n))throw Error(N(200));if(t==null||t._reactInternals===void 0)throw Error(N(38));return ql(t,e,n,!1,r)};Rt.version="18.2.0-next-9e3b772b8-20220608";function Q_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Q_)}catch(t){console.error(t)}}Q_(),qg.exports=Rt;var SC=qg.exports,om=SC;Ic.createRoot=om.createRoot,Ic.hydrateRoot=om.hydrateRoot;/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ho(){return ho=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ho.apply(this,arguments)}var Kn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Kn||(Kn={}));const am="popstate";function TC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return md("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ol(i)}return RC(e,n,null,t)}function Ae(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Wh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function kC(){return Math.random().toString(36).substr(2,8)}function lm(t,e){return{usr:t.state,key:t.key,idx:e}}function md(t,e,n,r){return n===void 0&&(n=null),ho({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Xi(e):e,{state:n,key:e&&e.key||r||kC()})}function ol(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Xi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function RC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Kn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ho({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Kn.Pop;let w=c(),p=w==null?null:w-u;u=w,l&&l({action:a,location:y.location,delta:p})}function h(w,p){a=Kn.Push;let f=md(y.location,w,p);n&&n(f,w),u=c()+1;let g=lm(f,u),_=y.createHref(f);try{o.pushState(g,"",_)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(_)}s&&l&&l({action:a,location:y.location,delta:1})}function m(w,p){a=Kn.Replace;let f=md(y.location,w,p);n&&n(f,w),u=c();let g=lm(f,u),_=y.createHref(f);o.replaceState(g,"",_),s&&l&&l({action:a,location:y.location,delta:0})}function v(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:ol(w);return Ae(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let y={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(am,d),l=w,()=>{i.removeEventListener(am,d),l=null}},createHref(w){return e(i,w)},createURL:v,encodeLocation(w){let p=v(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:m,go(w){return o.go(w)}};return y}var um;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(um||(um={}));function PC(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Xi(e):e,i=Bh(r.pathname||"/",n);if(i==null)return null;let s=J_(t);NC(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=UC(s[a],WC(i));return o}function J_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ae(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=rr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ae(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),J_(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:MC(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of X_(s.path))i(s,o,l)}),e}function X_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=X_(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function NC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:FC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bC=/^:\w+$/,xC=3,OC=2,AC=1,LC=10,DC=-2,cm=t=>t==="*";function MC(t,e){let n=t.split("/"),r=n.length;return n.some(cm)&&(r+=DC),e&&(r+=OC),n.filter(i=>!cm(i)).reduce((i,s)=>i+(bC.test(s)?xC:s===""?AC:LC),r)}function FC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function UC(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=jC({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:rr([i,c.pathname]),pathnameBase:VC(rr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=rr([i,c.pathnameBase]))}return s}function jC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=zC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=BC(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function zC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Wh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function WC(t){try{return decodeURI(t)}catch(e){return Wh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function BC(t,e){try{return decodeURIComponent(t)}catch(n){return Wh(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Bh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function HC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Xi(t):t;return{pathname:n?n.startsWith("/")?n:$C(n,e):e,search:KC(r),hash:GC(i)}}function $C(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ju(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Z_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ey(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Xi(t):(i=ho({},t),Ae(!i.pathname||!i.pathname.includes("?"),Ju("?","pathname","search",i)),Ae(!i.pathname||!i.pathname.includes("#"),Ju("#","pathname","hash",i)),Ae(!i.search||!i.search.includes("#"),Ju("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=HC(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const rr=t=>t.join("/").replace(/\/\/+/g,"/"),VC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),KC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,GC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function qC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ty=["post","put","patch","delete"];new Set(ty);const YC=["get",...ty];new Set(YC);/**
 * React Router v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function al(){return al=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},al.apply(this,arguments)}const Hh=R.createContext(null),QC=R.createContext(null),Zi=R.createContext(null),Yl=R.createContext(null),_r=R.createContext({outlet:null,matches:[],isDataRoute:!1}),ny=R.createContext(null);function JC(t,e){let{relative:n}=e===void 0?{}:e;Do()||Ae(!1);let{basename:r,navigator:i}=R.useContext(Zi),{hash:s,pathname:o,search:a}=iy(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:rr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Do(){return R.useContext(Yl)!=null}function Ql(){return Do()||Ae(!1),R.useContext(Yl).location}function ry(t){R.useContext(Zi).static||R.useLayoutEffect(t)}function XC(){let{isDataRoute:t}=R.useContext(_r);return t?fS():ZC()}function ZC(){Do()||Ae(!1);let t=R.useContext(Hh),{basename:e,navigator:n}=R.useContext(Zi),{matches:r}=R.useContext(_r),{pathname:i}=Ql(),s=JSON.stringify(Z_(r).map(l=>l.pathnameBase)),o=R.useRef(!1);return ry(()=>{o.current=!0}),R.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=ey(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:rr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const eS=R.createContext(null);function tS(t){let e=R.useContext(_r).outlet;return e&&R.createElement(eS.Provider,{value:t},e)}function iy(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=R.useContext(_r),{pathname:i}=Ql(),s=JSON.stringify(Z_(r).map(o=>o.pathnameBase));return R.useMemo(()=>ey(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function nS(t,e){return rS(t,e)}function rS(t,e,n){Do()||Ae(!1);let{navigator:r}=R.useContext(Zi),{matches:i}=R.useContext(_r),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Ql(),u;if(e){var c;let y=typeof e=="string"?Xi(e):e;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||Ae(!1),u=y}else u=l;let d=u.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",m=PC(t,{pathname:h}),v=lS(m&&m.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:rr([a,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:rr([a,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return e&&v?R.createElement(Yl.Provider,{value:{location:al({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Kn.Pop}},v):v}function iS(){let t=hS(),e=qC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),n?R.createElement("pre",{style:i},n):null,s)}const sS=R.createElement(iS,null);class oS extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?R.createElement(_r.Provider,{value:this.props.routeContext},R.createElement(ny.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function aS(t){let{routeContext:e,match:n,children:r}=t,i=R.useContext(Hh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(_r.Provider,{value:e},r)}function lS(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Ae(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||sS);let h=e.concat(s.slice(0,u+1)),m=()=>{let v;return c?v=d:l.route.Component?v=R.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,R.createElement(aS,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?R.createElement(oS,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var gd;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(gd||(gd={}));var fo;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(fo||(fo={}));function uS(t){let e=R.useContext(Hh);return e||Ae(!1),e}function cS(t){let e=R.useContext(QC);return e||Ae(!1),e}function dS(t){let e=R.useContext(_r);return e||Ae(!1),e}function sy(t){let e=dS(),n=e.matches[e.matches.length-1];return n.route.id||Ae(!1),n.route.id}function hS(){var t;let e=R.useContext(ny),n=cS(fo.UseRouteError),r=sy(fo.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function fS(){let{router:t}=uS(gd.UseNavigateStable),e=sy(fo.UseNavigateStable),n=R.useRef(!1);return ry(()=>{n.current=!0}),R.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,al({fromRouteId:e},s)))},[t,e])}function dm(t){return tS(t.context)}function jn(t){Ae(!1)}function pS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Kn.Pop,navigator:s,static:o=!1}=t;Do()&&Ae(!1);let a=e.replace(/^\/*/,"/"),l=R.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Xi(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:m="default"}=r,v=R.useMemo(()=>{let y=Bh(u,a);return y==null?null:{location:{pathname:y,search:c,hash:d,state:h,key:m},navigationType:i}},[a,u,c,d,h,m,i]);return v==null?null:R.createElement(Zi.Provider,{value:l},R.createElement(Yl.Provider,{children:n,value:v}))}function mS(t){let{children:e,location:n}=t;return nS(vd(e),n)}var hm;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(hm||(hm={}));new Promise(()=>{});function vd(t,e){e===void 0&&(e=[]);let n=[];return R.Children.forEach(t,(r,i)=>{if(!R.isValidElement(r))return;let s=[...e,i];if(r.type===R.Fragment){n.push.apply(n,vd(r.props.children,s));return}r.type!==jn&&Ae(!1),!r.props.index||!r.props.children||Ae(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=vd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _d(){return _d=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_d.apply(this,arguments)}function gS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function vS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function _S(t,e){return t.button===0&&(!e||e==="_self")&&!vS(t)}const yS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],fm="startTransition";function wS(t){let{basename:e,children:n,window:r}=t,i=R.useRef();i.current==null&&(i.current=TC({window:r,v5Compat:!0}));let s=i.current,[o,a]=R.useState({action:s.action,location:s.location}),l=R.useCallback(u=>{fm in ep?ep[fm](()=>a(u)):a(u)},[a]);return R.useLayoutEffect(()=>s.listen(l),[s,l]),R.createElement(pS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const ES=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",IS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fn=R.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=gS(e,yS),{basename:h}=R.useContext(Zi),m,v=!1;if(typeof u=="string"&&IS.test(u)&&(m=u,ES))try{let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),_=Bh(g.pathname,h);g.origin===f.origin&&_!=null?u=_+g.search+g.hash:v=!0}catch{}let y=JC(u,{relative:i}),w=CS(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(f){r&&r(f),f.defaultPrevented||w(f)}return R.createElement("a",_d({},d,{href:m||y,onClick:v||s?r:p,ref:n,target:l}))});var pm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(pm||(pm={}));var mm;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(mm||(mm={}));function CS(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=XC(),l=Ql(),u=iy(t,{relative:o});return R.useCallback(c=>{if(_S(c,n)){c.preventDefault();let d=r!==void 0?r:ol(l)===ol(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const SS="_container_6zt4m_5",TS="_btninvis_6zt4m_21",kS="_navbar_6zt4m_39",RS="_navlogo_6zt4m_61",PS="_navlogotext_6zt4m_81",NS="_navinvis_6zt4m_97",bS="_navlink_6zt4m_105",xS="_navlink2_6zt4m_141",OS="_footer_6zt4m_185",AS="_invisfooter_6zt4m_197",LS="_subfooter_6zt4m_203",DS="_paracontainer_6zt4m_217",MS="_header_6zt4m_225",FS="_logo_6zt4m_243",US="_cardContainer_6zt4m_265",jS="_card_6zt4m_265",zS="_cardHouse_6zt4m_321",WS="_cardTitle_6zt4m_339",BS="_cardPara_6zt4m_367",HS="_textContainer_6zt4m_393",$S="_textCard_6zt4m_411",VS="_textCardStyle_6zt4m_435",KS="_textCardFlex_6zt4m_447",GS="_pictureblock_6zt4m_463",qS="_invisblock_6zt4m_481",YS="_newsFlex_6zt4m_499",QS="_newsHeader_6zt4m_509",JS="_newsforminput_6zt4m_527",XS="_newsformtextarea_6zt4m_539",ZS="_newsformbtn_6zt4m_551",eT="_formstyle_6zt4m_587",tT="_newscontainer_6zt4m_603",nT="_newslist_6zt4m_621",rT="_newsparagraph_6zt4m_633",iT="_newsheadline_6zt4m_649",sT="_textNphoto_6zt4m_667",oT="_newsparagraphtext_6zt4m_681",aT="_newsphoto_6zt4m_695",lT="_emptydiv_6zt4m_717",uT="_usersigned_6zt4m_725",cT="_underConstruction_6zt4m_741",dT="_underconst_6zt4m_761",hT="_contactform_6zt4m_775",fT="_contactform2_6zt4m_789",pT="_contactsubject_6zt4m_801",mT="_contactmessage_6zt4m_815",gT="_contactbtn_6zt4m_825",vT="_contacttitle_6zt4m_835",_T="_textCard2_6zt4m_1045",yT="_accessRequestForm_6zt4m_1855",M={container:SS,btninvis:TS,navbar:kS,navlogo:RS,navlogotext:PS,navinvis:NS,navlink:bS,navlink2:xS,footer:OS,invisfooter:AS,subfooter:LS,paracontainer:DS,header:MS,logo:FS,cardContainer:US,card:jS,cardHouse:zS,cardTitle:WS,cardPara:BS,textContainer:HS,textCard:$S,textCardStyle:VS,textCardFlex:KS,pictureblock:GS,invisblock:qS,newsFlex:YS,newsHeader:QS,newsforminput:JS,newsformtextarea:XS,newsformbtn:ZS,formstyle:eT,newscontainer:tT,newslist:nT,newsparagraph:rT,newsheadline:iT,textNphoto:sT,newsparagraphtext:oT,newsphoto:aT,emptydiv:lT,usersigned:uT,underConstruction:cT,underconst:dT,contactform:hT,contactform2:fT,contactsubject:pT,contactmessage:mT,contactbtn:gT,contacttitle:vT,textCard2:_T,accessRequestForm:yT};function gm(){return k.jsxs("div",{className:M.footer,children:[k.jsx("div",{className:M.invisfooter}),k.jsxs("div",{className:M.subfooter,children:[k.jsx("p",{className:M.footertext,children:"Footer Text"}),k.jsx("p",{className:M.footertext,children:"Copyright information TM 2019-2049"})]})]})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=function(t,e){if(!t)throw es(e)},es=function(t){return new Error("Firebase Database ("+oy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},$h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(h=64)),r.push(n[c],n[d],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ay(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new ET;const h=s<<2|a>>4;if(r.push(h),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ET extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ly=function(t){const e=ay(t);return $h.encodeByteArray(e,!0)},ll=function(t){return ly(t).replace(/\./g,"")},ul=function(t){try{return $h.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(t){return po(void 0,t)}function po(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!CT(n)||(t[n]=po(t[n],e[n]));return t}function CT(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=()=>ST().__FIREBASE_DEFAULTS__,kT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},RT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ul(t[1]);return e&&JSON.parse(e)},Jl=()=>{try{return TT()||kT()||RT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},uy=t=>{var e,n;return(n=(e=Jl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},PT=t=>{const e=uy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},cy=()=>{var t;return(t=Jl())===null||t===void 0?void 0:t.config},dy=t=>{var e;return(e=Jl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ll(JSON.stringify(n)),ll(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function hy(){var t;const e=(t=Jl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bT(){return typeof self=="object"&&self.self===self}function fy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function py(){const t=Le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function my(){return oy.NODE_ADMIN===!0}function cl(){try{return typeof indexedDB=="object"}catch{return!1}}function xT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT="FirebaseError";class _t extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=OT,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zr.prototype.create)}}class Zr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?AT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new _t(i,a,r)}}function AT(t,e){return t.replace(LT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const LT=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){return JSON.parse(t)}function Ve(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=mo(ul(s[0])||""),n=mo(ul(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},DT=function(t){const e=gy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},MT=function(t){const e=gy(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Wi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function yd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function dl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function hl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(vm(s)&&vm(o)){if(!hl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function vm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _i(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Rs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const h=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function vy(t,e){const n=new UT(t,e);return n.subscribe.bind(n)}class UT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");jT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Xu),i.error===void 0&&(i.error=Xu),i.complete===void 0&&(i.complete=Xu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xu(){}function Kh(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,x(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},eu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t){return t&&t._delegate?t._delegate:t}class Pn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Xl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HT(e))try{this.getOrInitializeService({instanceIdentifier:Cr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cr){return this.instances.has(e)}getOptions(e=Cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:BT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cr){return this.component?this.component.multipleInstances?e:Cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BT(t){return t===Cr?void 0:t}function HT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new WT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=[];var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const _y={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},VT=ue.INFO,KT={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},GT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=KT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tu{constructor(e){this.name=e,this._logLevel=VT,this._logHandler=GT,this._userLogHandler=null,Gh.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_y[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}function qT(t){Gh.forEach(e=>{e.setLogLevel(t)})}function YT(t,e){for(const n of Gh){let r=null;e&&e.level&&(r=_y[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:ue[s].toLowerCase(),message:a,args:o,type:i.name})}}}const QT=(t,e)=>e.some(n=>t instanceof n);let _m,ym;function JT(){return _m||(_m=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XT(){return ym||(ym=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yy=new WeakMap,wd=new WeakMap,wy=new WeakMap,Zu=new WeakMap,qh=new WeakMap;function ZT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ir(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yy.set(n,t)}).catch(()=>{}),qh.set(e,t),e}function ek(t){if(wd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});wd.set(t,e)}let Ed={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tk(t){Ed=t(Ed)}function nk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ec(this),e,...n);return wy.set(r,e.sort?e.sort():[e]),ir(r)}:XT().includes(t)?function(...e){return t.apply(ec(this),e),ir(yy.get(this))}:function(...e){return ir(t.apply(ec(this),e))}}function rk(t){return typeof t=="function"?nk(t):(t instanceof IDBTransaction&&ek(t),QT(t,JT())?new Proxy(t,Ed):t)}function ir(t){if(t instanceof IDBRequest)return ZT(t);if(Zu.has(t))return Zu.get(t);const e=rk(t);return e!==t&&(Zu.set(t,e),qh.set(e,t)),e}const ec=t=>qh.get(t);function ik(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ir(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ir(o.result),l.oldVersion,l.newVersion,ir(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const sk=["get","getKey","getAll","getAllKeys","count"],ok=["put","add","delete","clear"],tc=new Map;function wm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tc.get(e))return tc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ok.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||sk.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return tc.set(e,s),s}tk(t=>({...t,get:(e,n,r)=>wm(e,n)||t.get(e,n,r),has:(e,n)=>!!wm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Id="@firebase/app",Em="0.9.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new tu("@firebase/app"),uk="@firebase/app-compat",ck="@firebase/analytics-compat",dk="@firebase/analytics",hk="@firebase/app-check-compat",fk="@firebase/app-check",pk="@firebase/auth",mk="@firebase/auth-compat",gk="@firebase/database",vk="@firebase/database-compat",_k="@firebase/functions",yk="@firebase/functions-compat",wk="@firebase/installations",Ek="@firebase/installations-compat",Ik="@firebase/messaging",Ck="@firebase/messaging-compat",Sk="@firebase/performance",Tk="@firebase/performance-compat",kk="@firebase/remote-config",Rk="@firebase/remote-config-compat",Pk="@firebase/storage",Nk="@firebase/storage-compat",bk="@firebase/firestore",xk="@firebase/firestore-compat",Ok="firebase",Ak="9.22.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="[DEFAULT]",Lk={[Id]:"fire-core",[uk]:"fire-core-compat",[dk]:"fire-analytics",[ck]:"fire-analytics-compat",[fk]:"fire-app-check",[hk]:"fire-app-check-compat",[pk]:"fire-auth",[mk]:"fire-auth-compat",[gk]:"fire-rtdb",[vk]:"fire-rtdb-compat",[_k]:"fire-fn",[yk]:"fire-fn-compat",[wk]:"fire-iid",[Ek]:"fire-iid-compat",[Ik]:"fire-fcm",[Ck]:"fire-fcm-compat",[Sk]:"fire-perf",[Tk]:"fire-perf-compat",[kk]:"fire-rc",[Rk]:"fire-rc-compat",[Pk]:"fire-gcs",[Nk]:"fire-gcs-compat",[bk]:"fire-fst",[xk]:"fire-fst-compat","fire-js":"fire-js",[Ok]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new Map,go=new Map;function fl(t,e){try{t.container.addComponent(e)}catch(n){Hr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ey(t,e){t.container.addOrOverwriteComponent(e)}function cr(t){const e=t.name;if(go.has(e))return Hr.debug(`There were multiple attempts to register component ${e}.`),!1;go.set(e,t);for(const n of ur.values())fl(n,t);return!0}function Mo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dk(t,e,n=lr){Mo(t,e).clearInstance(n)}function Mk(){go.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},En=new Zr("app","Firebase",Fk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uk=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw En.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=Ak;function Yh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw En.create("bad-app-name",{appName:String(i)});if(n||(n=cy()),!n)throw En.create("no-options");const s=ur.get(i);if(s){if(hl(n,s.options)&&hl(r,s.config))return s;throw En.create("duplicate-app",{appName:i})}const o=new $T(i);for(const l of go.values())o.addComponent(l);const a=new Uk(n,r,o);return ur.set(i,a),a}function Qh(t=lr){const e=ur.get(t);if(!e&&t===lr&&cy())return Yh();if(!e)throw En.create("no-app",{appName:t});return e}function jk(){return Array.from(ur.values())}async function Iy(t){const e=t.name;ur.has(e)&&(ur.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function dn(t,e,n){var r;let i=(r=Lk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hr.warn(a.join(" "));return}cr(new Pn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Cy(t,e){if(t!==null&&typeof t!="function")throw En.create("invalid-log-argument");YT(t,e)}function Sy(t){qT(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk="firebase-heartbeat-database",Wk=1,vo="firebase-heartbeat-store";let nc=null;function Ty(){return nc||(nc=ik(zk,Wk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vo)}}}).catch(t=>{throw En.create("idb-open",{originalErrorMessage:t.message})})),nc}async function Bk(t){try{return await(await Ty()).transaction(vo).objectStore(vo).get(ky(t))}catch(e){if(e instanceof _t)Hr.warn(e.message);else{const n=En.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hr.warn(n.message)}}}async function Im(t,e){try{const r=(await Ty()).transaction(vo,"readwrite");await r.objectStore(vo).put(e,ky(t)),await r.done}catch(n){if(n instanceof _t)Hr.warn(n.message);else{const r=En.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hr.warn(r.message)}}}function ky(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=1024,$k=30*24*60*60*1e3;class Vk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Gk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Cm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=$k}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Cm(),{heartbeatsToSend:n,unsentEntries:r}=Kk(this._heartbeatsCache.heartbeats),i=ll(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Cm(){return new Date().toISOString().substring(0,10)}function Kk(t,e=Hk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Sm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Gk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cl()?xT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Bk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Im(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Im(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sm(t){return ll(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(t){cr(new Pn("platform-logger",e=>new ak(e),"PRIVATE")),cr(new Pn("heartbeat",e=>new Vk(e),"PRIVATE")),dn(Id,Em,t),dn(Id,Em,"esm2017"),dn("fire-js","")}qk("");const Yk=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:_t,SDK_VERSION:yr,_DEFAULT_ENTRY_NAME:lr,_addComponent:fl,_addOrOverwriteComponent:Ey,_apps:ur,_clearComponents:Mk,_components:go,_getProvider:Mo,_registerComponent:cr,_removeServiceInstance:Dk,deleteApp:Iy,getApp:Qh,getApps:jk,initializeApp:Yh,onLog:Cy,registerVersion:dn,setLogLevel:Sy},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e,n){this._delegate=e,this.firebase=n,fl(e,new Pn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Iy(this._delegate)))}_getService(e,n=lr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=lr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){fl(this._delegate,e)}_addOrOverwriteComponent(e){Ey(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Tm=new Zr("app-compat","Firebase",Jk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:dn,setLogLevel:Sy,onLog:Cy,apps:null,SDK_VERSION:yr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:Yk}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||lr,!Jt(e,u))throw Tm.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const d=Yh(u,c);if(Jt(e,d.name))return e[d.name];const h=new t(d,n);return e[d.name]=h,h}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,d=c.replace("-compat","");if(cr(u)&&u.type==="PUBLIC"){const h=(m=i())=>{if(typeof m[d]!="function")throw Tm.create("invalid-app-argument",{appName:c});return m[d]()};u.serviceProps!==void 0&&po(h,u.serviceProps),n[d]=h,t.prototype[d]=function(...m){return this._getService.bind(this,c).apply(this,u.multipleInstances?m:[])}}return u.type==="PUBLIC"?n[d]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(){const t=Xk(Qk);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Ry,extendNamespace:e,createSubscribe:vy,ErrorFactory:Zr,deepExtend:po});function e(n){po(t,n)}return t}const Zk=Ry();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=new tu("@firebase/app-compat"),e1="@firebase/app-compat",t1="0.2.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t){dn(e1,t1,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(bT()&&self.firebase!==void 0){km.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&km.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Mt=Zk;n1();var r1="firebase",i1="9.22.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt.registerVersion(r1,i1,"app-compat");function Jh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const gs={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ii={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function Py(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const o1=s1,a1=Py,Ny=new Zr("auth","Firebase",Py());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=new tu("@firebase/auth");function l1(t,...e){pl.logLevel<=ue.WARN&&pl.warn(`Auth (${yr}): ${t}`,...e)}function ba(t,...e){pl.logLevel<=ue.ERROR&&pl.error(`Auth (${yr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t,...e){throw Xh(t,...e)}function Je(t,...e){return Xh(t,...e)}function by(t,e,n){const r=Object.assign(Object.assign({},a1()),{[e]:n});return new Zr("auth","Firebase",r).create(e,{appName:t.name})}function ts(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ge(t,"argument-error"),by(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ny.create(t,...e)}function b(t,e,...n){if(!t)throw Xh(e,...n)}function ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ba(e),new Error(e)}function Xt(t,e){t||ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Zh(){return Rm()==="http:"||Rm()==="https:"}function Rm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zh()||fy()||"connection"in navigator)?navigator.onLine:!0}function c1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xt(n>e,"Short delay should be less than long delay!"),this.isMobile=Vh()||Zl()}get(){return u1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(t,e){Xt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=new Fo(3e4,6e4);function De(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ze(t,e,n,r,i={}){return Oy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ei(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),xy.fetch()(Ay(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Oy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},d1),e);try{const i=new f1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ps(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ps(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ps(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ps(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw by(t,c,u);Ge(t,c)}}catch(i){if(i instanceof _t)throw i;Ge(t,"network-request-failed",{message:String(i)})}}async function An(t,e,n,r,i={}){const s=await ze(t,e,n,r,i);return"mfaPendingCredential"in s&&Ge(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ay(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ef(t.config,i):`${t.config.apiScheme}://${i}`}class f1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Je(this.auth,"network-request-failed")),h1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ps(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Je(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p1(t,e){return ze(t,"POST","/v1/accounts:delete",e)}async function m1(t,e){return ze(t,"POST","/v1/accounts:update",e)}async function g1(t,e){return ze(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function v1(t,e=!1){const n=$(t),r=await n.getIdToken(e),i=nu(r);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:js(rc(i.auth_time)),issuedAtTime:js(rc(i.iat)),expirationTime:js(rc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function rc(t){return Number(t)*1e3}function nu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ba("JWT malformed, contained fewer than 3 sections"),null;try{const i=ul(n);return i?JSON.parse(i):(ba("Failed to decode base64 JWT payload"),null)}catch(i){return ba("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function _1(t){const e=nu(t);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _t&&y1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function y1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=js(this.lastLoginAt),this.creationTime=js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Nn(t,g1(n,{idToken:r}));b(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?C1(s.providerUserInfo):[],a=I1(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ly(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function E1(t){const e=$(t);await yo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function I1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function C1(t){return t.map(e=>{var{providerId:n}=e,r=Jh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S1(t,e){const n=await Oy(t,{},async()=>{const r=ei({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ay(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",xy.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return b(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await S1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new wo;return r&&(b(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(b(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(b(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wo,this.toJSON())}_performRefresh(){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t,e){b(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Lr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Jh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new w1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ly(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Nn(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return v1(this,e)}reload(){return E1(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Nn(this,p1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:_,isAnonymous:I,providerData:T,stsTokenManager:C}=n;b(g&&C,e,"internal-error");const E=wo.fromJSON(this.name,C);b(typeof g=="string",e,"internal-error"),Un(d,e.name),Un(h,e.name),b(typeof _=="boolean",e,"internal-error"),b(typeof I=="boolean",e,"internal-error"),Un(m,e.name),Un(v,e.name),Un(y,e.name),Un(w,e.name),Un(p,e.name),Un(f,e.name);const S=new Lr({uid:g,auth:e,email:h,emailVerified:_,displayName:d,isAnonymous:I,photoURL:v,phoneNumber:m,tenantId:y,stsTokenManager:E,createdAt:p,lastLoginAt:f});return T&&Array.isArray(T)&&(S.providerData=T.map(P=>Object.assign({},P))),w&&(S._redirectEventId=w),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new wo;i.updateFromServerResponse(n);const s=new Lr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await yo(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=new Map;function St(t){Xt(t instanceof Function,"Expected a class definition");let e=Pm.get(t);return e?(Xt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dy.type="NONE";const Bi=Dy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(t,e,n){return`firebase:${t}:${e}:${n}`}class ki{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Dr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Dr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ki(St(Bi),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||St(Bi);const o=Dr(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Lr._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ki(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ki(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(My(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jy(e))return"Blackberry";if(zy(e))return"Webos";if(tf(e))return"Safari";if((e.includes("chrome/")||Fy(e))&&!e.includes("edge/"))return"Chrome";if(Uo(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function My(t=Le()){return/firefox\//i.test(t)}function tf(t=Le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fy(t=Le()){return/crios\//i.test(t)}function Uy(t=Le()){return/iemobile/i.test(t)}function Uo(t=Le()){return/android/i.test(t)}function jy(t=Le()){return/blackberry/i.test(t)}function zy(t=Le()){return/webos/i.test(t)}function ns(t=Le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function T1(t=Le()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function k1(t=Le()){var e;return ns(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function R1(){return py()&&document.documentMode===10}function Wy(t=Le()){return ns(t)||Uo(t)||zy(t)||jy(t)||/windows phone/i.test(t)||Uy(t)}function P1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(t,e=[]){let n;switch(t){case"Browser":n=Nm(Le());break;case"Worker":n=`${Nm(Le())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yr}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N1(t){return(await ze(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Hy(t,e){return ze(t,"GET","/v2/recaptchaConfig",De(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t){return t!==void 0&&t.getResponse!==void 0}function xm(t){return t!==void 0&&t.enterprise!==void 0}class $y{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function nf(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Je("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",b1().appendChild(r)})}function Vy(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const x1="https://www.google.com/recaptcha/enterprise.js?render=",O1="recaptcha-enterprise",A1="NO_RECAPTCHA";class Ky{constructor(e){this.type=O1,this.auth=be(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Hy(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new $y(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;xm(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(A1)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&xm(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}nf(x1+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function dr(t,e,n,r=!1){const i=new Ky(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Om(this),this.idTokenSubscription=new Om(this),this.beforeStateQueue=new L1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ny,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=St(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ki.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=c1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(St(e))})}async initializeRecaptchaConfig(){const e=await Hy(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new $y(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Ky(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&St(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await ki.create(this,[St(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return b(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=By(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&l1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function be(t){return $(t)}class Om{constructor(e){this.auth=e,this.observer=null,this.addObserver=vy(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(t,e){const n=Mo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(hl(s,e??{}))return i;Ge(i,"already-initialized")}return n.initialize({options:e})}function F1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(St);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Gy(t,e,n){const r=be(t);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=qy(e),{host:o,port:a}=U1(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||j1()}function qy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function U1(t){const e=qy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Am(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Am(o)}}}function Am(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function j1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ln("not implemented")}_getIdTokenResponse(e){return ln("not implemented")}_linkToIdToken(e,n){return ln("not implemented")}_getReauthenticationResolver(e){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yy(t,e){return ze(t,"POST","/v1/accounts:resetPassword",De(t,e))}async function Qy(t,e){return ze(t,"POST","/v1/accounts:update",e)}async function z1(t,e){return ze(t,"POST","/v1/accounts:update",De(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic(t,e){return An(t,"POST","/v1/accounts:signInWithPassword",De(t,e))}async function ru(t,e){return ze(t,"POST","/v1/accounts:sendOobCode",De(t,e))}async function W1(t,e){return ru(t,e)}async function sc(t,e){return ru(t,e)}async function oc(t,e){return ru(t,e)}async function B1(t,e){return ru(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H1(t,e){return An(t,"POST","/v1/accounts:signInWithEmailLink",De(t,e))}async function $1(t,e){return An(t,"POST","/v1/accounts:signInWithEmailLink",De(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo extends rs{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Eo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Eo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await dr(e,r,"signInWithPassword");return ic(e,i)}else return ic(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await dr(e,r,"signInWithPassword");return ic(e,s)}else return Promise.reject(i)});case"emailLink":return H1(e,{email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Qy(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $1(e,{idToken:n,email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(t,e){return An(t,"POST","/v1/accounts:signInWithIdp",De(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1="http://localhost";class hn extends rs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ge("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Jh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new hn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return In(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,In(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,In(e,n)}buildRequest(){const e={requestUri:V1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ei(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K1(t,e){return ze(t,"POST","/v1/accounts:sendVerificationCode",De(t,e))}async function G1(t,e){return An(t,"POST","/v1/accounts:signInWithPhoneNumber",De(t,e))}async function q1(t,e){const n=await An(t,"POST","/v1/accounts:signInWithPhoneNumber",De(t,e));if(n.temporaryProof)throw Ps(t,"account-exists-with-different-credential",n);return n}const Y1={USER_NOT_FOUND:"user-not-found"};async function Q1(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return An(t,"POST","/v1/accounts:signInWithPhoneNumber",De(t,n),Y1)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends rs{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Mr({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Mr({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return G1(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return q1(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Q1(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Mr({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function X1(t){const e=_i(Rs(t)).link,n=e?_i(Rs(e)).deep_link_id:null,r=_i(Rs(t)).deep_link_id;return(r?_i(Rs(r)).link:null)||r||n||e||t}class iu{constructor(e){var n,r,i,s,o,a;const l=_i(Rs(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=J1((i=l.mode)!==null&&i!==void 0?i:null);b(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=X1(e);try{return new iu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.providerId=wr.PROVIDER_ID}static credential(e,n){return Eo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=iu.parseLink(n);return b(r,"argument-error"),Eo._fromEmailAndCode(e,r.code,r.tenantId)}}wr.PROVIDER_ID="password";wr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends Ln{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ri extends is{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return b("providerId"in n&&"signInMethod"in n,"argument-error"),hn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return b(e.idToken||e.accessToken,"argument-error"),hn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ri.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ri.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Ri(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends is{constructor(){super("facebook.com")}static credential(e){return hn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends is{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return sn.credential(n,r)}catch{return null}}}sn.GOOGLE_SIGN_IN_METHOD="google.com";sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends is{constructor(){super("github.com")}static credential(e){return hn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.GITHUB_SIGN_IN_METHOD="github.com";on.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1="http://localhost";class Hi extends rs{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return In(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,In(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,In(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Hi(r,s)}static _create(e,n){return new Hi(e,n)}buildRequest(){return{requestUri:Z1,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR="saml.";class ml extends Ln{constructor(e){b(e.startsWith(eR),"argument-error"),super(e)}static credentialFromResult(e){return ml.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return ml.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Hi.fromJSON(e);return b(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Hi._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends is{constructor(){super("twitter.com")}static credential(e,n){return hn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return an.credential(n,r)}catch{return null}}}an.TWITTER_SIGN_IN_METHOD="twitter.com";an.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xa(t,e){return An(t,"POST","/v1/accounts:signUp",De(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Lr._fromIdTokenResponse(e,r,i),o=Lm(r);return new Ft({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Lm(r);return new Ft({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Lm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tR(t){var e;const n=be(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ft({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await xa(n,{returnSecureToken:!0}),i=await Ft._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends _t{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,gl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new gl(e,n,r,i)}}function Jy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?gl._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nR(t,e){const n=$(t);await su(!0,n,e);const{providerUserInfo:r}=await m1(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Xy(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function rf(t,e,n=!1){const r=await Nn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ft._forOperation(t,"link",r)}async function su(t,e,n){await yo(e);const r=Xy(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";b(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zy(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Nn(t,Jy(r,i,e,t),n);b(s.idToken,r,"internal-error");const o=nu(s.idToken);b(o,r,"internal-error");const{sub:a}=o;return b(t.uid===a,r,"user-mismatch"),Ft._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ge(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e0(t,e,n=!1){const r="signIn",i=await Jy(t,r,e),s=await Ft._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ou(t,e){return e0(be(t),e)}async function t0(t,e){const n=$(t);return await su(!1,n,e.providerId),rf(n,e)}async function n0(t,e){return Zy($(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rR(t,e){return An(t,"POST","/v1/accounts:signInWithCustomToken",De(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iR(t,e){const n=be(t),r=await rR(n,{token:e,returnSecureToken:!0}),i=await Ft._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?sf._fromServerResponse(e,n):"totpInfo"in n?of._fromServerResponse(e,n):Ge(e,"internal-error")}}class sf extends jo{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new sf(n)}}class of extends jo{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new of(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t,e,n){var r;b(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),b(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(b(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(b(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sR(t,e,n){var r;const i=be(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await dr(i,s,"getOobCode",!0);n&&Pi(i,o,n),await sc(i,o)}else n&&Pi(i,s,n),await sc(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await dr(i,s,"getOobCode",!0);n&&Pi(i,a,n),await sc(i,a)}else return Promise.reject(o)})}async function oR(t,e,n){await Yy($(t),{oobCode:e,newPassword:n})}async function aR(t,e){await z1($(t),{oobCode:e})}async function r0(t,e){const n=$(t),r=await Yy(n,{oobCode:e}),i=r.requestType;switch(b(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":b(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":b(r.mfaInfo,n,"internal-error");default:b(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=jo._fromServerResponse(be(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function lR(t,e){const{data:n}=await r0($(t),e);return n.email}async function uR(t,e,n){var r;const i=be(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await dr(i,s,"signUpPassword");o=xa(i,u)}else o=xa(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await dr(i,s,"signUpPassword");return xa(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Ft._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function cR(t,e,n){return ou($(t),wr.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR(t,e,n){var r;const i=be(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,l){b(l.handleCodeInApp,i,"argument-error"),l&&Pi(i,a,l)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await dr(i,s,"getOobCode",!0);o(a,n),await oc(i,a)}else o(s,n),await oc(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const l=await dr(i,s,"getOobCode",!0);o(l,n),await oc(i,l)}else return Promise.reject(a)})}function hR(t,e){const n=iu.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function fR(t,e,n){const r=$(t),i=wr.credentialWithLink(e,n||_o());return b(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),ou(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pR(t,e){return ze(t,"POST","/v1/accounts:createAuthUri",De(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mR(t,e){const n=Zh()?_o():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await pR($(t),r);return i||[]}async function gR(t,e){const n=$(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Pi(n.auth,i,e);const{email:s}=await W1(n.auth,i);s!==t.email&&await t.reload()}async function vR(t,e,n){const r=$(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Pi(r.auth,s,n);const{email:o}=await B1(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _R(t,e){return ze(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=$(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Nn(r,_R(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function wR(t,e){return i0($(t),e,null)}function ER(t,e){return i0($(t),null,e)}async function i0(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Nn(t,Qy(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=nu(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Ni(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new CR(s,i);case"github.com":return new SR(s,i);case"google.com":return new TR(s,i);case"twitter.com":return new kR(s,i,t.screenName||null);case"custom":case"anonymous":return new Ni(s,null);default:return new Ni(s,r,i)}}class Ni{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class s0 extends Ni{constructor(e,n,r,i){super(e,n,r),this.username=i}}class CR extends Ni{constructor(e,n){super(e,"facebook.com",n)}}class SR extends s0{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class TR extends Ni{constructor(e,n){super(e,"google.com",n)}}class kR extends s0{constructor(e,n,r){super(e,"twitter.com",n,r)}}function RR(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:IR(n)}function PR(t,e,n,r){return $(t).onIdTokenChanged(e,n,r)}function NR(t,e,n){return $(t).beforeAuthStateChanged(e,n)}function bR(t,e,n,r){return $(t).onAuthStateChanged(e,n,r)}class Nr{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new Nr("enroll",e,n)}static _fromMfaPendingCredential(e){return new Nr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Nr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Nr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=be(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>jo._fromServerResponse(r,a));b(i.mfaPendingCredential,r,"internal-error");const o=Nr._fromMfaPendingCredential(i.mfaPendingCredential);return new af(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await Ft._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return b(n.user,r,"internal-error"),Ft._forOperation(n.user,n.operationType,u);default:Ge(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function xR(t,e){var n;const r=$(t),i=e;return b(e.customData.operationType,r,"argument-error"),b((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),af._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(t,e){return ze(t,"POST","/v2/accounts/mfaEnrollment:start",De(t,e))}function AR(t,e){return ze(t,"POST","/v2/accounts/mfaEnrollment:finalize",De(t,e))}function LR(t,e){return ze(t,"POST","/v2/accounts/mfaEnrollment:withdraw",De(t,e))}class lf{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>jo._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new lf(e)}async getSession(){return Nr._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Nn(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Nn(this.user,LR(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const ac=new WeakMap;function DR(t){const e=$(t);return ac.has(e)||ac.set(e,lf._fromUser(e)),ac.get(e)}const vl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vl,"1"),this.storage.removeItem(vl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(){const t=Le();return tf(t)||ns(t)}const FR=1e3,UR=10;class a0 extends o0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=MR()&&P1(),this.fallbackToPolling=Wy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);R1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,UR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},FR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}a0.type="LOCAL";const au=a0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0 extends o0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}l0.type="SESSION";const hr=l0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new lu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await jR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=zo("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return window}function WR(t){xe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(){return typeof xe().WorkerGlobalScope<"u"&&typeof xe().importScripts=="function"}async function BR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $R(){return uf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0="firebaseLocalStorageDb",VR=1,_l="firebaseLocalStorage",c0="fbase_key";class Wo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function uu(t,e){return t.transaction([_l],e?"readwrite":"readonly").objectStore(_l)}function KR(){const t=indexedDB.deleteDatabase(u0);return new Wo(t).toPromise()}function Cd(){const t=indexedDB.open(u0,VR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_l,{keyPath:c0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_l)?e(r):(r.close(),await KR(),e(await Cd()))})})}async function Dm(t,e,n){const r=uu(t,!0).put({[c0]:e,value:n});return new Wo(r).toPromise()}async function GR(t,e){const n=uu(t,!1).get(e),r=await new Wo(n).toPromise();return r===void 0?null:r.value}function Mm(t,e){const n=uu(t,!0).delete(e);return new Wo(n).toPromise()}const qR=800,YR=3;class d0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>YR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lu._getInstance($R()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await BR(),!this.activeServiceWorker)return;this.sender=new zR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||HR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cd();return await Dm(e,vl,"1"),await Mm(e,vl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>GR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=uu(i,!1).getAll();return new Wo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}d0.type="LOCAL";const $i=d0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(t,e){return ze(t,"POST","/v2/accounts/mfaSignIn:start",De(t,e))}function JR(t,e){return ze(t,"POST","/v2/accounts/mfaSignIn:finalize",De(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR=500,ZR=6e4,ha=1e12;class eP{constructor(e){this.auth=e,this.counter=ha,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new tP(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||ha;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||ha;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||ha;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class tP{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;b(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=nP(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},ZR)},XR))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function nP(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=Vy("rcb"),rP=new Fo(3e4,6e4),iP="https://www.google.com/recaptcha/api.js?";class sP{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=xe().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return b(oP(n),e,"argument-error"),this.shouldResolveImmediately(n)&&bm(xe().grecaptcha)?Promise.resolve(xe().grecaptcha):new Promise((r,i)=>{const s=xe().setTimeout(()=>{i(Je(e,"network-request-failed"))},rP.get());xe()[lc]=()=>{xe().clearTimeout(s),delete xe()[lc];const a=xe().grecaptcha;if(!a||!bm(a)){i(Je(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const d=l(u,c);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${iP}?${ei({onload:lc,render:"explicit",hl:n})}`;nf(o).catch(()=>{clearTimeout(s),i(Je(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=xe().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function oP(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class aP{async load(e){return new eP(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0="recaptcha",lP={theme:"light",type:"image"};let uP=class{constructor(e,n=Object.assign({},lP),r){this.parameters=n,this.type=h0,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=be(r),this.isInvisible=this.parameters.size==="invisible",b(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;b(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new aP:new sP,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){b(!this.parameters.sitekey,this.auth,"argument-error"),b(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),b(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=xe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){b(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){b(Zh()&&!uf(),this.auth,"internal-error"),await cP(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await N1(this.auth);b(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return b(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function cP(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Mr._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function dP(t,e,n){const r=be(t),i=await cu(r,e,$(n));return new cf(i,s=>ou(r,s))}async function hP(t,e,n){const r=$(t);await su(!1,r,"phone");const i=await cu(r.auth,e,$(n));return new cf(i,s=>t0(r,s))}async function fP(t,e,n){const r=$(t),i=await cu(r.auth,e,$(n));return new cf(i,s=>n0(r,s))}async function cu(t,e,n){var r;const i=await n.verify();try{b(typeof i=="string",t,"argument-error"),b(n.type===h0,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return b(o.type==="enroll",t,"internal-error"),(await OR(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{b(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return b(a,t,"missing-multi-factor-info"),(await QR(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await K1(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function pP(t,e){await rf($(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $r=class Oa{constructor(e){this.providerId=Oa.PROVIDER_ID,this.auth=be(e)}verifyPhoneNumber(e,n){return cu(this.auth,e,$(n))}static credential(e,n){return Mr._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Oa.credentialFromTaggedObject(n)}static credentialFromError(e){return Oa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Mr._fromTokenResponse(n,r):null}};$r.PROVIDER_ID="phone";$r.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t,e){return e?St(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df extends rs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return In(e,this._buildIdpRequest())}_linkToIdToken(e,n){return In(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return In(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function mP(t){return e0(t.auth,new df(t),t.bypassAuthState)}function gP(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),Zy(n,new df(t),t.bypassAuthState)}async function vP(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),rf(n,new df(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mP;case"linkViaPopup":case"linkViaRedirect":return vP;case"reauthViaPopup":case"reauthViaRedirect":return gP;default:Ge(this.auth,"internal-error")}}resolve(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P=new Fo(2e3,1e4);async function yP(t,e,n){const r=be(t);ts(t,e,Ln);const i=ti(r,n);return new vn(r,"signInViaPopup",e,i).executeNotNull()}async function wP(t,e,n){const r=$(t);ts(r.auth,e,Ln);const i=ti(r.auth,n);return new vn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function EP(t,e,n){const r=$(t);ts(r.auth,e,Ln);const i=ti(r.auth,n);return new vn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class vn extends f0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,vn.currentPopupAction&&vn.currentPopupAction.cancel(),vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){Xt(this.filter.length===1,"Popup operations only handle one event");const e=zo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_P.get())};e()}}vn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP="pendingRedirect",zs=new Map;class CP extends f0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=zs.get(this.auth._key());if(!e){try{const r=await SP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}zs.set(this.auth._key(),e)}return this.bypassAuthState||zs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SP(t,e){const n=m0(e),r=p0(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function hf(t,e){return p0(t)._set(m0(e),"true")}function TP(){zs.clear()}function ff(t,e){zs.set(t._key(),e)}function p0(t){return St(t._redirectPersistence)}function m0(t){return Dr(IP,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(t,e,n){return RP(t,e,n)}async function RP(t,e,n){const r=be(t);ts(t,e,Ln),await r._initializationPromise;const i=ti(r,n);return await hf(i,r),i._openRedirect(r,e,"signInViaRedirect")}function PP(t,e,n){return NP(t,e,n)}async function NP(t,e,n){const r=$(t);ts(r.auth,e,Ln),await r.auth._initializationPromise;const i=ti(r.auth,n);await hf(i,r.auth);const s=await g0(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function bP(t,e,n){return xP(t,e,n)}async function xP(t,e,n){const r=$(t);ts(r.auth,e,Ln),await r.auth._initializationPromise;const i=ti(r.auth,n);await su(!1,r,e.providerId),await hf(i,r.auth);const s=await g0(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function OP(t,e){return await be(t)._initializationPromise,du(t,e,!1)}async function du(t,e,n=!1){const r=be(t),i=ti(r,e),o=await new CP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function g0(t){const e=zo(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=10*60*1e3;class v0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Je(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fm(e))}saveEventToCache(e){this.cachedEventUids.add(Fm(e)),this.lastProcessedEventTime=Date.now()}}function Fm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y0(t,e={}){return ze(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MP=/^https?/;async function FP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await y0(t);for(const n of e)try{if(UP(n))return}catch{}Ge(t,"unauthorized-domain")}function UP(t){const e=_o(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!MP.test(n))return!1;if(DP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP=new Fo(3e4,6e4);function Um(){const t=xe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zP(t){return new Promise((e,n)=>{var r,i,s;function o(){Um(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Um(),n(Je(t,"network-request-failed"))},timeout:jP.get()})}if(!((i=(r=xe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=xe().gapi)===null||s===void 0)&&s.load)o();else{const a=Vy("iframefcb");return xe()[a]=()=>{gapi.load?o():n(Je(t,"network-request-failed"))},nf(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Aa=null,e})}let Aa=null;function WP(t){return Aa=Aa||zP(t),Aa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP=new Fo(5e3,15e3),HP="__/auth/iframe",$P="emulator/auth/iframe",VP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GP(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ef(e,$P):`https://${t.config.authDomain}/${HP}`,r={apiKey:e.apiKey,appName:t.name,v:yr},i=KP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ei(r).slice(1)}`}async function qP(t){const e=await WP(t),n=xe().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:GP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Je(t,"network-request-failed"),a=xe().setTimeout(()=>{s(o)},BP.get());function l(){xe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QP=500,JP=600,XP="_blank",ZP="http://localhost";class jm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eN(t,e,n,r=QP,i=JP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},YP),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Le().toLowerCase();n&&(a=Fy(u)?XP:n),My(u)&&(e=e||ZP,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[m,v])=>`${h}${m}=${v},`,"");if(k1(u)&&a!=="_self")return tN(e||"",a),new jm(null);const d=window.open(e||"",a,c);b(d,t,"popup-blocked");try{d.focus()}catch{}return new jm(d)}function tN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN="__/auth/handler",rN="emulator/auth/handler",iN=encodeURIComponent("fac");async function Sd(t,e,n,r,i,s){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:yr,eventId:i};if(e instanceof Ln){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof is){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${iN}=${encodeURIComponent(l)}`:"";return`${sN(t)}?${ei(a).slice(1)}${u}`}function sN({config:t}){return t.emulator?ef(t,rN):`https://${t.authDomain}/${nN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="webStorageSupport";class oN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hr,this._completeRedirectFn=du,this._overrideRedirectResult=ff}async _openPopup(e,n,r,i){var s;Xt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Sd(e,n,r,_o(),i);return eN(e,o,zo())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Sd(e,n,r,_o(),i);return WR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Xt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await qP(e),r=new v0(e);return n.register("authEvent",i=>(b(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(uc,{type:uc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[uc];o!==void 0&&n(!!o),Ge(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wy()||tf()||ns()}}const w0=oN;class aN{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return ln("unexpected MultiFactorSessionType")}}}class pf extends aN{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new pf(e)}_finalizeEnroll(e,n,r){return AR(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return JR(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class E0{constructor(){}static assertion(e){return pf._fromCredential(e)}}E0.FACTOR_ID="phone";var zm="@firebase/auth",Wm="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cN(t){cr(new Pn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;b(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:By(t)},u=new D1(r,i,s,l);return F1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),cr(new Pn("auth-internal",e=>{const n=be(e.getProvider("auth").getImmediate());return(r=>new lN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(zm,Wm,uN(t)),dn(zm,Wm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN=5*60,hN=dy("authIdTokenMaxAge")||dN;let Bm=null;const fN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>hN)return;const i=n==null?void 0:n.token;Bm!==i&&(Bm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function pN(t=Qh()){const e=Mo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=M1(t,{popupRedirectResolver:w0,persistence:[$i,au,hr]}),r=dy("authTokenSyncURL");if(r){const s=fN(r);NR(n,s,()=>s(n.currentUser)),PR(n,o=>s(o))}const i=uy("auth");return i&&Gy(n,`http://${i}`),n}cN("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN=2e3;async function gN(t,e,n){var r;const{BuildInfo:i}=Vr();Xt(e.sessionId,"AuthEvent did not contain a session ID");const s=await EN(e.sessionId),o={};return ns()?o.ibi=i.packageName:Uo()?o.apn=i.packageName:Ge(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Sd(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function vN(t){const{BuildInfo:e}=Vr(),n={};ns()?n.iosBundleId=e.packageName:Uo()?n.androidPackageName=e.packageName:Ge(t,"operation-not-supported-in-this-environment"),await y0(t,n)}function _N(t){const{cordova:e}=Vr();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,T1()?"_blank":"_system","location=yes"),n(i)})})}async function yN(t,e,n){const{cordova:r}=Vr();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var d;s();const h=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(Je(t,"redirect-cancelled-by-user"))},mN))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Uo()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function wN(t){var e,n,r,i,s,o,a,l,u,c;const d=Vr();b(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),b(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),b(typeof((s=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),b(typeof((l=(a=(o=d==null?void 0:d.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),b(typeof((c=(u=d==null?void 0:d.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function EN(t){const e=IN(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function IN(t){if(Xt(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN=20;class SN extends v0{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function TN(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:PN(),postBody:null,tenantId:t.tenantId,error:Je(t,"no-auth-event")}}function kN(t,e){return Td()._set(kd(t),e)}async function Hm(t){const e=await Td()._get(kd(t));return e&&await Td()._remove(kd(t)),e}function RN(t,e){var n,r;const i=bN(e);if(i.includes("/__/auth/callback")){const s=La(i),o=s.firebaseError?NN(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?Je(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function PN(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<CN;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Td(){return St(au)}function kd(t){return Dr("authEvent",t.config.apiKey,t.name)}function NN(t){try{return JSON.parse(t)}catch{return null}}function bN(t){const e=La(t),n=e.link?decodeURIComponent(e.link):void 0,r=La(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return La(i).link||i||r||n||t}function La(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return _i(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN=500;class ON{constructor(){this._redirectPersistence=hr,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=du,this._overrideRedirectResult=ff}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new SN(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ge(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){wN(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),TP(),await this._originValidation(e);const o=TN(e,r,i);await kN(e,o);const a=await gN(e,o,n),l=await _N(a);return yN(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vN(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Vr(),o=setTimeout(async()=>{await Hm(e),n.onEvent($m())},xN),a=async c=>{clearTimeout(o);const d=await Hm(e);let h=null;d&&(c!=null&&c.url)&&(h=RN(d,c.url)),n.onEvent(h||$m())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;Vr().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(d){console.error(d)}}}}const AN=ON;function $m(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Je("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(t,e){be(t)._logFramework(e)}var DN="@firebase/auth-compat",MN="0.4.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=1e3;function Ws(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function UN(){return Ws()==="http:"||Ws()==="https:"}function I0(t=Le()){return!!((Ws()==="file:"||Ws()==="ionic:"||Ws()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function jN(){return Zl()||hy()}function zN(){return py()&&(document==null?void 0:document.documentMode)===11}function WN(t=Le()){return/Edge\/\d+/.test(t)}function BN(t=Le()){return zN()||WN(t)}function C0(){try{const t=self.localStorage,e=zo();if(t)return t.setItem(e,"1"),t.removeItem(e),BN()?cl():!0}catch{return mf()&&cl()}return!1}function mf(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function cc(){return(UN()||fy()||I0())&&!jN()&&C0()&&!mf()}function S0(){return I0()&&typeof document<"u"}async function HN(){return S0()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},FN);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function $N(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It={LOCAL:"local",NONE:"none",SESSION:"session"},vs=b,T0="persistence";function VN(t,e){if(vs(Object.values(It).includes(e),t,"invalid-persistence-type"),Zl()){vs(e!==It.SESSION,t,"unsupported-persistence-type");return}if(hy()){vs(e===It.NONE,t,"unsupported-persistence-type");return}if(mf()){vs(e===It.NONE||e===It.LOCAL&&cl(),t,"unsupported-persistence-type");return}vs(e===It.NONE||C0(),t,"unsupported-persistence-type")}async function Rd(t){await t._initializationPromise;const e=k0(),n=Dr(T0,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function KN(t,e){const n=k0();if(!n)return[];const r=Dr(T0,t,e);switch(n.getItem(r)){case It.NONE:return[Bi];case It.LOCAL:return[$i,hr];case It.SESSION:return[hr];default:return[]}}function k0(){var t;try{return((t=$N())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=b;class Gn{constructor(){this.browserResolver=St(w0),this.cordovaResolver=St(AN),this.underlyingResolver=null,this._redirectPersistence=hr,this._completeRedirectFn=du,this._overrideRedirectResult=ff}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return S0()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return GN(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await HN();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(t){return t.unwrap()}function qN(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(t){return P0(t)}function QN(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new JN(t,xR(t,e))}else if(r){const i=P0(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function P0(t){const{_tokenResponse:e}=t instanceof _t?t.customData:t;if(!e)return null;if(!(t instanceof _t)&&"temporaryProof"in e&&"phoneNumber"in e)return $r.credentialFromResult(t);const n=e.providerId;if(!n||n===gs.PASSWORD)return null;let r;switch(n){case gs.GOOGLE:r=sn;break;case gs.FACEBOOK:r=rn;break;case gs.GITHUB:r=on;break;case gs.TWITTER:r=an;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Hi._create(n,a):hn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Ri(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof _t?r.credentialFromError(t):r.credentialFromResult(t)}function ut(t,e){return e.catch(n=>{throw n instanceof _t&&QN(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:YN(n),additionalUserInfo:RR(n),user:_n.getOrCreate(i)}})}async function Pd(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>ut(t,n.confirm(r))}}class JN{constructor(e,n){this.resolver=n,this.auth=qN(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return ut(R0(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this._delegate=e,this.multiFactor=DR(e)}static getOrCreate(e){return _n.USER_MAP.has(e)||_n.USER_MAP.set(e,new _n(e)),_n.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return ut(this.auth,t0(this._delegate,e))}async linkWithPhoneNumber(e,n){return Pd(this.auth,hP(this._delegate,e,n))}async linkWithPopup(e){return ut(this.auth,EP(this._delegate,e,Gn))}async linkWithRedirect(e){return await Rd(be(this.auth)),bP(this._delegate,e,Gn)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return ut(this.auth,n0(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Pd(this.auth,fP(this._delegate,e,n))}reauthenticateWithPopup(e){return ut(this.auth,wP(this._delegate,e,Gn))}async reauthenticateWithRedirect(e){return await Rd(be(this.auth)),PP(this._delegate,e,Gn)}sendEmailVerification(e){return gR(this._delegate,e)}async unlink(e){return await nR(this._delegate,e),this}updateEmail(e){return wR(this._delegate,e)}updatePassword(e){return ER(this._delegate,e)}updatePhoneNumber(e){return pP(this._delegate,e)}updateProfile(e){return yR(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return vR(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}_n.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=b;class Nd{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;_s(r,"invalid-api-key",{appName:e.name}),_s(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Gn:void 0;this._delegate=n.initialize({options:{persistence:XN(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(o1),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?_n.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){Gy(this._delegate,e,n)}applyActionCode(e){return aR(this._delegate,e)}checkActionCode(e){return r0(this._delegate,e)}confirmPasswordReset(e,n){return oR(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return ut(this._delegate,uR(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return mR(this._delegate,e)}isSignInWithEmailLink(e){return hR(this._delegate,e)}async getRedirectResult(){_s(cc(),this._delegate,"operation-not-supported-in-this-environment");const e=await OP(this._delegate,Gn);return e?ut(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){LN(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=Vm(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=Vm(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return dR(this._delegate,e,n)}sendPasswordResetEmail(e,n){return sR(this._delegate,e,n||void 0)}async setPersistence(e){VN(this._delegate,e);let n;switch(e){case It.SESSION:n=hr;break;case It.LOCAL:n=await St($i)._isAvailable()?$i:au;break;case It.NONE:n=Bi;break;default:return Ge("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return ut(this._delegate,tR(this._delegate))}signInWithCredential(e){return ut(this._delegate,ou(this._delegate,e))}signInWithCustomToken(e){return ut(this._delegate,iR(this._delegate,e))}signInWithEmailAndPassword(e,n){return ut(this._delegate,cR(this._delegate,e,n))}signInWithEmailLink(e,n){return ut(this._delegate,fR(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Pd(this._delegate,dP(this._delegate,e,n))}async signInWithPopup(e){return _s(cc(),this._delegate,"operation-not-supported-in-this-environment"),ut(this._delegate,yP(this._delegate,e,Gn))}async signInWithRedirect(e){return _s(cc(),this._delegate,"operation-not-supported-in-this-environment"),await Rd(this._delegate),kP(this._delegate,e,Gn)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return lR(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Nd.Persistence=It;function Vm(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&_n.getOrCreate(o)),error:e,complete:n}}function XN(t,e){const n=KN(t,e);if(typeof self<"u"&&!n.includes($i)&&n.push($i),typeof window<"u")for(const r of[au,hr])n.includes(r)||n.push(r);return n.includes(Bi)||n.push(Bi),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(){this.providerId="phone",this._delegate=new $r(R0(Mt.auth()))}static credential(e,n){return $r.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}gf.PHONE_SIGN_IN_METHOD=$r.PHONE_SIGN_IN_METHOD;gf.PROVIDER_ID=$r.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=b;class eb{constructor(e,n,r=Mt.app()){var i;ZN((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new uP(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb="auth-compat";function nb(t){t.INTERNAL.registerComponent(new Pn(tb,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Nd(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ii.EMAIL_SIGNIN,PASSWORD_RESET:ii.PASSWORD_RESET,RECOVER_EMAIL:ii.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ii.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ii.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ii.VERIFY_EMAIL}},EmailAuthProvider:wr,FacebookAuthProvider:rn,GithubAuthProvider:on,GoogleAuthProvider:sn,OAuthProvider:Ri,SAMLAuthProvider:ml,PhoneAuthProvider:gf,PhoneMultiFactorGenerator:E0,RecaptchaVerifier:eb,TwitterAuthProvider:an,Auth:Nd,AuthCredential:rs,Error:_t}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(DN,MN)}nb(Mt);const rb="AIzaSyBjvXNvBDagb-3P4BwDi4CHC88SSSDcYZ4",ib={apiKey:rb,authDomain:"akksdev-e0197.firebaseapp.com",projectId:"akksdev-e0197",databaseURL:"https://akksdev-e0197-default-rtdb.europe-west1.firebasedatabase.app/"};Mt.initializeApp(ib);const sb=()=>{const t=localStorage.getItem("allowedEmails");return t?JSON.parse(t):[]},ob=t=>{localStorage.setItem("allowedEmails",JSON.stringify(t))};let Io=["serz25905@gmail.com","akksbusinessinquiry@gmail.com","akkseiendomogholding@outlook.com"];const ab=sb();Io=[...Io,...ab];const Bo=t=>Io.includes(t),lb=t=>Bo(t)?!1:(Io.push(t),ob(Io),!0),ub=t=>{localStorage.setItem("username",t)};function N0(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=N0(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function qn(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=N0(t))&&(r&&(r+=" "),r+=e);return r}const Bs=t=>typeof t=="number"&&!isNaN(t),Kr=t=>typeof t=="string",ht=t=>typeof t=="function",Da=t=>Kr(t)||ht(t)?t:null,dc=t=>R.isValidElement(t)||Kr(t)||ht(t)||Bs(t);function cb(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function hu(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:l,preventExitTransition:u,done:c,nodeRef:d,isIn:h}=o;const m=r?`${e}--${l}`:e,v=r?`${n}--${l}`:n,y=R.useRef(0);return R.useLayoutEffect(()=>{const w=d.current,p=m.split(" "),f=g=>{g.target===d.current&&(w.dispatchEvent(new Event("d")),w.removeEventListener("animationend",f),w.removeEventListener("animationcancel",f),y.current===0&&g.type!=="animationcancel"&&w.classList.remove(...p))};w.classList.add(...p),w.addEventListener("animationend",f),w.addEventListener("animationcancel",f)},[]),R.useEffect(()=>{const w=d.current,p=()=>{w.removeEventListener("animationend",p),i?cb(w,c,s):c()};h||(u?p():(y.current=1,w.className+=` ${v}`,w.addEventListener("animationend",p)))},[h]),pe.createElement(pe.Fragment,null,a)}}function Km(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const Nt={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},fa=t=>{let{theme:e,type:n,...r}=t;return pe.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},hc={info:function(t){return pe.createElement(fa,{...t},pe.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return pe.createElement(fa,{...t},pe.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return pe.createElement(fa,{...t},pe.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return pe.createElement(fa,{...t},pe.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return pe.createElement("div",{className:"Toastify__spinner"})}};function db(t){const[,e]=R.useReducer(m=>m+1,0),[n,r]=R.useState([]),i=R.useRef(null),s=R.useRef(new Map).current,o=m=>n.indexOf(m)!==-1,a=R.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:o,getToast:m=>s.get(m)}).current;function l(m){let{containerId:v}=m;const{limit:y}=a.props;!y||v&&a.containerId!==v||(a.count-=a.queue.length,a.queue=[])}function u(m){r(v=>m==null?[]:v.filter(y=>y!==m))}function c(){const{toastContent:m,toastProps:v,staleId:y}=a.queue.shift();h(m,v,y)}function d(m,v){let{delay:y,staleId:w,...p}=v;if(!dc(m)||function(D){return!i.current||a.props.enableMultiContainer&&D.containerId!==a.props.containerId||s.has(D.toastId)&&D.updateId==null}(p))return;const{toastId:f,updateId:g,data:_}=p,{props:I}=a,T=()=>u(f),C=g==null;C&&a.count++;const E={...I,style:I.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(p).filter(D=>{let[F,K]=D;return K!=null})),toastId:f,updateId:g,data:_,closeToast:T,isIn:!1,className:Da(p.className||I.toastClassName),bodyClassName:Da(p.bodyClassName||I.bodyClassName),progressClassName:Da(p.progressClassName||I.progressClassName),autoClose:!p.isLoading&&(S=p.autoClose,P=I.autoClose,S===!1||Bs(S)&&S>0?S:P),deleteToast(){const D=Km(s.get(f),"removed");s.delete(f),Nt.emit(4,D);const F=a.queue.length;if(a.count=f==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),F>0){const K=f==null?a.props.limit:1;if(F===1||K===1)a.displayedToast++,c();else{const he=K>F?F:K;a.displayedToast=he;for(let ee=0;ee<he;ee++)c()}}else e()}};var S,P;E.iconOut=function(D){let{theme:F,type:K,isLoading:he,icon:ee}=D,Re=null;const O={theme:F,type:K};return ee===!1||(ht(ee)?Re=ee(O):R.isValidElement(ee)?Re=R.cloneElement(ee,O):Kr(ee)||Bs(ee)?Re=ee:he?Re=hc.spinner():(W=>W in hc)(K)&&(Re=hc[K](O))),Re}(E),ht(p.onOpen)&&(E.onOpen=p.onOpen),ht(p.onClose)&&(E.onClose=p.onClose),E.closeButton=I.closeButton,p.closeButton===!1||dc(p.closeButton)?E.closeButton=p.closeButton:p.closeButton===!0&&(E.closeButton=!dc(I.closeButton)||I.closeButton);let L=m;R.isValidElement(m)&&!Kr(m.type)?L=R.cloneElement(m,{closeToast:T,toastProps:E,data:_}):ht(m)&&(L=m({closeToast:T,toastProps:E,data:_})),I.limit&&I.limit>0&&a.count>I.limit&&C?a.queue.push({toastContent:L,toastProps:E,staleId:w}):Bs(y)?setTimeout(()=>{h(L,E,w)},y):h(L,E,w)}function h(m,v,y){const{toastId:w}=v;y&&s.delete(y);const p={content:m,props:v};s.set(w,p),r(f=>[...f,w].filter(g=>g!==y)),Nt.emit(4,Km(p,p.props.updateId==null?"added":"updated"))}return R.useEffect(()=>(a.containerId=t.containerId,Nt.cancelEmit(3).on(0,d).on(1,m=>i.current&&u(m)).on(5,l).emit(2,a),()=>{s.clear(),Nt.emit(3,a)}),[]),R.useEffect(()=>{a.props=t,a.isToastActive=o,a.displayedToast=n.length}),{getToastToRender:function(m){const v=new Map,y=Array.from(s.values());return t.newestOnTop&&y.reverse(),y.forEach(w=>{const{position:p}=w.props;v.has(p)||v.set(p,[]),v.get(p).push(w)}),Array.from(v,w=>m(w[0],w[1]))},containerRef:i,isToastActive:o}}function Gm(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function qm(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function hb(t){const[e,n]=R.useState(!1),[r,i]=R.useState(!1),s=R.useRef(null),o=R.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=R.useRef(t),{autoClose:l,pauseOnHover:u,closeToast:c,onClick:d,closeOnClick:h}=t;function m(_){if(t.draggable){_.nativeEvent.type==="touchstart"&&_.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",p),document.addEventListener("mouseup",f),document.addEventListener("touchmove",p),document.addEventListener("touchend",f);const I=s.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=I.getBoundingClientRect(),I.style.transition="",o.x=Gm(_.nativeEvent),o.y=qm(_.nativeEvent),t.draggableDirection==="x"?(o.start=o.x,o.removalDistance=I.offsetWidth*(t.draggablePercent/100)):(o.start=o.y,o.removalDistance=I.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function v(_){if(o.boundingRect){const{top:I,bottom:T,left:C,right:E}=o.boundingRect;_.nativeEvent.type!=="touchend"&&t.pauseOnHover&&o.x>=C&&o.x<=E&&o.y>=I&&o.y<=T?w():y()}}function y(){n(!0)}function w(){n(!1)}function p(_){const I=s.current;o.canDrag&&I&&(o.didMove=!0,e&&w(),o.x=Gm(_),o.y=qm(_),o.delta=t.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),I.style.transform=`translate${t.draggableDirection}(${o.delta}px)`,I.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function f(){document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",f),document.removeEventListener("touchmove",p),document.removeEventListener("touchend",f);const _=s.current;if(o.canDrag&&o.didMove&&_){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),void t.closeToast();_.style.transition="transform 0.2s, opacity 0.2s",_.style.transform=`translate${t.draggableDirection}(0)`,_.style.opacity="1"}}R.useEffect(()=>{a.current=t}),R.useEffect(()=>(s.current&&s.current.addEventListener("d",y,{once:!0}),ht(t.onOpen)&&t.onOpen(R.isValidElement(t.children)&&t.children.props),()=>{const _=a.current;ht(_.onClose)&&_.onClose(R.isValidElement(_.children)&&_.children.props)}),[]),R.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||w(),window.addEventListener("focus",y),window.addEventListener("blur",w)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",y),window.removeEventListener("blur",w))}),[t.pauseOnFocusLoss]);const g={onMouseDown:m,onTouchStart:m,onMouseUp:v,onTouchEnd:v};return l&&u&&(g.onMouseEnter=w,g.onMouseLeave=y),h&&(g.onClick=_=>{d&&d(_),o.canCloseOnClick&&c()}),{playToast:y,pauseToast:w,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:g}}function b0(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return pe.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},pe.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},pe.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function fb(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:l,progress:u,rtl:c,isIn:d,theme:h}=t;const m=s||l&&u===0,v={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:m?0:1};l&&(v.transform=`scaleX(${u})`);const y=qn("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${h}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":c}),w=ht(o)?o({rtl:c,type:i,defaultClassName:y}):qn(y,o);return pe.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:w,style:v,[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{d&&r()}})}const pb=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=hb(t),{closeButton:s,children:o,autoClose:a,onClick:l,type:u,hideProgressBar:c,closeToast:d,transition:h,position:m,className:v,style:y,bodyClassName:w,bodyStyle:p,progressClassName:f,progressStyle:g,updateId:_,role:I,progress:T,rtl:C,toastId:E,deleteToast:S,isIn:P,isLoading:L,iconOut:D,closeOnClick:F,theme:K}=t,he=qn("Toastify__toast",`Toastify__toast-theme--${K}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":F}),ee=ht(v)?v({rtl:C,position:m,type:u,defaultClassName:he}):qn(he,v),Re=!!T||!a,O={closeToast:d,type:u,theme:K};let W=null;return s===!1||(W=ht(s)?s(O):R.isValidElement(s)?R.cloneElement(s,O):b0(O)),pe.createElement(h,{isIn:P,done:S,position:m,preventExitTransition:n,nodeRef:r},pe.createElement("div",{id:E,onClick:l,className:ee,...i,style:y,ref:r},pe.createElement("div",{...P&&{role:I},className:ht(w)?w({type:u}):qn("Toastify__toast-body",w),style:p},D!=null&&pe.createElement("div",{className:qn("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!L})},D),pe.createElement("div",null,o)),W,pe.createElement(fb,{..._&&!Re?{key:`pb-${_}`}:{},rtl:C,theme:K,delay:a,isRunning:e,isIn:P,closeToast:d,hide:c,type:u,style:g,className:f,controlledProgress:Re,progress:T||0})))},fu=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},mb=hu(fu("bounce",!0));hu(fu("slide",!0));hu(fu("zoom"));hu(fu("flip"));const bd=R.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=db(t),{className:s,style:o,rtl:a,containerId:l}=t;function u(c){const d=qn("Toastify__toast-container",`Toastify__toast-container--${c}`,{"Toastify__toast-container--rtl":a});return ht(s)?s({position:c,rtl:a,defaultClassName:d}):qn(d,Da(s))}return R.useEffect(()=>{e&&(e.current=r.current)},[]),pe.createElement("div",{ref:r,className:"Toastify",id:l},n((c,d)=>{const h=d.length?{...o}:{...o,pointerEvents:"none"};return pe.createElement("div",{className:u(c),style:h,key:`container-${c}`},d.map((m,v)=>{let{content:y,props:w}=m;return pe.createElement(pb,{...w,isIn:i(w.toastId),style:{...w.style,"--nth":v+1,"--len":d.length},key:`toast-${w.key}`},y)}))}))});bd.displayName="ToastContainer",bd.defaultProps={position:"top-right",transition:mb,autoClose:5e3,closeButton:b0,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let fc,Sr=new Map,Ns=[],gb=1;function x0(){return""+gb++}function vb(t){return t&&(Kr(t.toastId)||Bs(t.toastId))?t.toastId:x0()}function Hs(t,e){return Sr.size>0?Nt.emit(0,t,e):Ns.push({content:t,options:e}),e.toastId}function yl(t,e){return{...e,type:e&&e.type||t,toastId:vb(e)}}function pa(t){return(e,n)=>Hs(e,yl(t,n))}function le(t,e){return Hs(t,yl("default",e))}le.loading=(t,e)=>Hs(t,yl("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),le.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=Kr(i)?le.loading(i,n):le.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,d,h)=>{if(d==null)return void le.dismiss(r);const m={type:c,...a,...n,data:h},v=Kr(d)?{render:d}:d;return r?le.update(r,{...m,...v}):le(v.render,{...m,...v}),h},u=ht(t)?t():t;return u.then(c=>l("success",o,c)).catch(c=>l("error",s,c)),u},le.success=pa("success"),le.info=pa("info"),le.error=pa("error"),le.warning=pa("warning"),le.warn=le.warning,le.dark=(t,e)=>Hs(t,yl("default",{theme:"dark",...e})),le.dismiss=t=>{Sr.size>0?Nt.emit(1,t):Ns=Ns.filter(e=>t!=null&&e.options.toastId!==t)},le.clearWaitingQueue=function(t){return t===void 0&&(t={}),Nt.emit(5,t)},le.isActive=t=>{let e=!1;return Sr.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},le.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:s}=i;const o=Sr.get(s||fc);return o&&o.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:x0()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,Hs(o,s)}},0)},le.done=t=>{le.update(t,{progress:1})},le.onChange=t=>(Nt.on(4,t),()=>{Nt.off(4,t)}),le.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},le.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Nt.on(2,t=>{fc=t.containerId||t,Sr.set(fc,t),Ns.forEach(e=>{Nt.emit(0,e.content,e.options)}),Ns=[]}).on(3,t=>{Sr.delete(t.containerId||t),Sr.size===0&&Nt.off(0).off(1).off(5)});const _b=()=>{const t=()=>{const e=new Mt.auth.GoogleAuthProvider;e.setCustomParameters({prompt:"select_account"}),Mt.auth().signInWithPopup(e).then(n=>{const r=n.user,i=r.email,s=r.displayName;if(ub(s),Bo(i))console.log("Logged in user:",r),le.success("Successfully logged in!"),setTimeout(()=>{window.location.href="/AKKS/"},1e3);else throw new Error("Access Denied")}).catch(n=>{n.message==="Access Denied"?le.error("Access Denied: You are not allowed to access this part of the site.",{autoClose:3e3}):console.error("Error logging in:",n)})};return k.jsx(k.Fragment,{children:k.jsx("a",{className:M.navlink,onClick:t,children:"Sign In"})})},yb=()=>{const t=()=>{Mt.auth().signOut().then(()=>{console.log("User logged out successfully")}).catch(e=>{console.error("Error logging out:",e)})};return k.jsx(k.Fragment,{children:k.jsx("a",{className:M.navlink,onClick:t,children:"Sign Out"})})};function wb(){const[t,e]=R.useState(null);return R.useEffect(()=>{const n=Mt.auth().onAuthStateChanged(r=>{if(r){const i=r.email;Bo(i)&&e(r)}else Mt.auth().signOut(),e(null)});return()=>n()},[]),k.jsx("div",{children:t?k.jsxs("div",{children:[k.jsxs("div",{className:M.navbar,children:[k.jsx("div",{className:M.navlogo,children:k.jsx(Fn,{className:M.navlogotext,to:"/AKKS",children:"AKKS"})}),k.jsx("div",{className:M.navinvis}),k.jsx("a",{className:M.navlink2,children:"ADMIN"}),k.jsx(Fn,{className:M.navlink,to:"/AKKS/news",children:"News"}),k.jsx(Fn,{className:M.navlink,to:"/AKKS/under",children:"Company Info"}),k.jsx(Fn,{className:M.navlink,to:"/AKKS/contact",children:"Contact Us"}),k.jsx("div",{className:M.navlink,children:k.jsx(yb,{})})]}),k.jsx(dm,{}),k.jsx(gm,{})]}):k.jsxs("div",{children:[k.jsxs("div",{className:M.navbar,children:[k.jsx("div",{className:M.navlogo,children:k.jsx(Fn,{className:M.navlogotext,to:"/AKKS",children:"AKKS"})}),k.jsx("div",{className:M.navinvis}),k.jsx(Fn,{className:M.navlink,to:"/AKKS/news",children:"News"}),k.jsx(Fn,{className:M.navlink,to:"/AKKS/under",children:"Company Info"}),k.jsx(Fn,{className:M.navlink,to:"/AKKS/contact",children:"Contact Us"}),k.jsx("div",{className:M.navlink,children:k.jsx(_b,{})})]}),k.jsx(dm,{}),k.jsx(gm,{})]})})}const Ym="@firebase/database",Qm="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let O0="";function Eb(t){O0=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:mo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Jt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ib(e)}}catch{}return new Cb},br=A0("localStorage"),xd=A0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new tu("@firebase/database"),Sb=function(){let t=1;return function(){return t++}}(),L0=function(t){const e=zT(t),n=new FT;n.update(e);const r=n.digest();return $h.encodeByteArray(r)},Ho=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ho.apply(null,r):typeof r=="object"?e+=Ve(r):e+=r,e+=" "}return e};let Fr=null,Jm=!0;const Tb=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(bi.logLevel=ue.VERBOSE,Fr=bi.log.bind(bi),e&&xd.set("logging_enabled",!0)):typeof t=="function"?Fr=t:(Fr=null,xd.remove("logging_enabled"))},rt=function(...t){if(Jm===!0&&(Jm=!1,Fr===null&&xd.get("logging_enabled")===!0&&Tb(!0)),Fr){const e=Ho.apply(null,t);Fr(e)}},$o=function(t){return function(...e){rt(t,...e)}},Od=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ho(...t);bi.error(e)},bn=function(...t){const e=`FIREBASE FATAL ERROR: ${Ho(...t)}`;throw bi.error(e),new Error(e)},yt=function(...t){const e="FIREBASE WARNING: "+Ho(...t);bi.warn(e)},kb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&yt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},D0=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Rb=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Vi="[MIN_NAME]",Gr="[MAX_NAME]",ss=function(t,e){if(t===e)return 0;if(t===Vi||e===Gr)return-1;if(e===Vi||t===Gr)return 1;{const n=Xm(t),r=Xm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Pb=function(t,e){return t===e?0:t<e?-1:1},ys=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ve(e))},vf=function(t){if(typeof t!="object"||t===null)return Ve(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ve(e[r]),n+=":",n+=vf(t[e[r]]);return n+="}",n},M0=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function wt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const F0=function(t){x(!D0(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(c.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Nb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},bb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function xb(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Ob=new RegExp("^-?(0*)\\d{1,10}$"),Ab=-2147483648,Lb=2147483647,Xm=function(t){if(Ob.test(t)){const e=Number(t);if(e>=Ab&&e<=Lb)return e}return null},os=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw yt("Exception was thrown by user callback.",n),e},Math.floor(0))}},Db=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$s=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){yt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(rt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',yt(e)}}class xi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}xi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f="5",U0="v",j0="s",z0="r",W0="f",B0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,H0="ls",$0="p",Ad="ac",V0="websocket",K0="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=br.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&br.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Ub(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function q0(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let r;if(e===V0)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===K0)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ub(t)&&(n.ns=t.namespace);const i=[];return wt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(){this.counters_={}}incrementCounter(e,n=1){Jt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return IT(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc={},mc={};function yf(t){const e=t.toString();return pc[e]||(pc[e]=new jb),pc[e]}function zb(t,e){const n=t.toString();return mc[n]||(mc[n]=e()),mc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&os(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="start",Bb="close",Hb="pLPCommand",$b="pRTLPCB",Y0="id",Q0="pw",J0="ser",Vb="cb",Kb="seg",Gb="ts",qb="d",Yb="dframe",X0=1870,Z0=30,Qb=X0-Z0,Jb=25e3,Xb=3e4;class yi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$o(e),this.stats_=yf(n),this.urlFn=l=>(this.appCheckToken&&(l[Ad]=this.appCheckToken),q0(n,K0,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Wb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Xb)),Rb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new wf((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Zm)this.id=a,this.password=l;else if(o===Bb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Zm]="t",r[J0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Vb]=this.scriptTagHolder.uniqueCallbackIdentifier),r[U0]=_f,this.transportSessionId&&(r[j0]=this.transportSessionId),this.lastSessionId&&(r[H0]=this.lastSessionId),this.applicationId&&(r[$0]=this.applicationId),this.appCheckToken&&(r[Ad]=this.appCheckToken),typeof location<"u"&&location.hostname&&B0.test(location.hostname)&&(r[z0]=W0);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){yi.forceAllow_=!0}static forceDisallow(){yi.forceDisallow_=!0}static isAvailable(){return yi.forceAllow_?!0:!yi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Nb()&&!bb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ly(n),i=M0(r,Qb);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Yb]="t",r[Y0]=e,r[Q0]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class wf{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Sb(),window[Hb+this.uniqueCallbackIdentifier]=e,window[$b+this.uniqueCallbackIdentifier]=n,this.myIFrame=wf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){rt("frame writing exception"),a.stack&&rt(a.stack),rt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||rt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Y0]=this.myID,e[Q0]=this.myPW,e[J0]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Z0+r.length<=X0;){const o=this.pendingSegs.shift();r=r+"&"+Kb+i+"="+o.seg+"&"+Gb+i+"="+o.ts+"&"+qb+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Jb)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{rt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=16384,ex=45e3;let wl=null;typeof MozWebSocket<"u"?wl=MozWebSocket:typeof WebSocket<"u"&&(wl=WebSocket);class $t{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$o(this.connId),this.stats_=yf(n),this.connURL=$t.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[U0]=_f,typeof location<"u"&&location.hostname&&B0.test(location.hostname)&&(o[z0]=W0),n&&(o[j0]=n),r&&(o[H0]=r),i&&(o[Ad]=i),s&&(o[$0]=s),q0(e,V0,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,br.set("previous_websocket_failure",!0);try{let r;my(),this.mySock=new wl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){$t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&wl!==null&&!$t.forceDisallow_}static previouslyFailed(){return br.isInMemoryStorage||br.get("previous_websocket_failure")===!0}markConnectionHealthy(){br.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=mo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=M0(n,Zb);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ex))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$t.responsesRequiredToBeHealthy=2;$t.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[yi,$t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=$t&&$t.isAvailable();let r=n&&!$t.previouslyFailed();if(e.webSocketOnly&&(n||yt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[$t];else{const i=this.transports_=[];for(const s of Co.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Co.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Co.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx=6e4,nx=5e3,rx=10*1024,ix=100*1024,gc="t",eg="d",sx="s",tg="r",ox="e",ng="o",rg="a",ig="n",sg="p",ax="h";class lx{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$o("c:"+this.id+":"),this.transportManager_=new Co(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=$s(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ix?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>rx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(gc in e){const n=e[gc];n===rg?this.upgradeIfSecondaryHealthy_():n===tg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ng&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ys("t",e),r=ys("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:sg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:rg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ig,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ys("t",e),r=ys("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ys(gc,e);if(eg in e){const r=e[eg];if(n===ax){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ig){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===sx?this.onConnectionShutdown_(r):n===tg?this.onReset_(r):n===ox?Od("Server Error: "+r):n===ng?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Od("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),_f!==r&&yt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),$s(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(tx))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$s(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(nx))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:sg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(br.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends tw{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Vh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new El}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=32,ag=768;class fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function oe(){return new fe("")}function G(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function fr(t){return t.pieces_.length-t.pieceNum_}function me(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new fe(t.pieces_,e)}function nw(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ux(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function rw(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function iw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new fe(e,0)}function Ue(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof fe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new fe(n,0)}function Q(t){return t.pieceNum_>=t.pieces_.length}function ft(t,e){const n=G(t),r=G(e);if(n===null)return e;if(n===r)return ft(me(t),me(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ef(t,e){if(fr(t)!==fr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Vt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(fr(t)>fr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class cx{constructor(e,n){this.errorPrefix_=n,this.parts_=rw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=eu(this.parts_[r]);sw(this)}}function dx(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=eu(e),sw(t)}function hx(t){const e=t.parts_.pop();t.byteLength_-=eu(e),t.parts_.length>0&&(t.byteLength_-=1)}function sw(t){if(t.byteLength_>ag)throw new Error(t.errorPrefix_+"has a key path longer than "+ag+" bytes ("+t.byteLength_+").");if(t.parts_.length>og)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+og+") or object contains a cycle "+Tr(t))}function Tr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If extends tw{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new If}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=1e3,fx=60*5*1e3,lg=30*1e3,px=1.3,mx=3e4,gx="server_kill",ug=3;class Cn extends ew{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Cn.nextPersistentConnectionId_++,this.log_=$o("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ws,this.maxReconnectDelay_=fx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!my())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");If.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&El.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ve(s)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Xl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Cn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Jt(e,"w")){const r=Wi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();yt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||MT(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=lg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=DT(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ve(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Od("Unrecognized action received from server: "+Ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ws,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ws,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>mx&&(this.reconnectDelay_=ws),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*px)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Cn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?rt("getToken() completed but was canceled"):(rt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new lx(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{yt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(gx)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&yt(d),l())}}}interrupt(e){rt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){rt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yd(this.interruptReasons_)&&(this.reconnectDelay_=ws,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>vf(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new fe(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){rt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ug&&(this.reconnectDelay_=lg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){rt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ug&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+O0.replace(/\./g,"-")]=1,Vh()?e["framework.cordova"]=1:Zl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=El.getInstance().currentlyOnline();return yd(this.interruptReasons_)&&e}}Cn.nextPersistentConnectionId_=0;Cn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new q(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new q(Vi,e),i=new q(Vi,n);return this.compare(r,i)!==0}minPost(){return q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ma;class ow extends pu{static get __EMPTY_NODE(){return ma}static set __EMPTY_NODE(e){ma=e}compare(e,n){return ss(e.name,n.name)}isDefinedOn(e){throw es("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return q.MIN}maxPost(){return new q(Gr,ma)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new q(e,ma)}toString(){return".key"}}const Oi=new ow;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$e.RED,this.left=i??pt.EMPTY_NODE,this.right=s??pt.EMPTY_NODE}copy(e,n,r,i,s){return new $e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return pt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return pt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$e.RED=!0;$e.BLACK=!1;class vx{copy(e,n,r,i,s){return this}insert(e,n,r){return new $e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class pt{constructor(e,n=pt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new pt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(e){return new pt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ga(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ga(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ga(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ga(this.root_,null,this.comparator_,!0,e)}}pt.EMPTY_NODE=new vx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _x(t,e){return ss(t.name,e.name)}function Cf(t,e){return ss(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ld;function yx(t){Ld=t}const aw=function(t){return typeof t=="number"?"number:"+F0(t):"string:"+t},lw=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Jt(e,".sv"),"Priority must be a string or number.")}else x(t===Ld||t.isEmpty(),"priority of unexpected type.");x(t===Ld||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cg;class Be{constructor(e,n=Be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),lw(this.priorityNode_)}static set __childrenNodeConstructor(e){cg=e}static get __childrenNodeConstructor(){return cg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Q(e)?this:G(e)===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=G(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(x(r!==".priority"||fr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Be.__childrenNodeConstructor.EMPTY_NODE.updateChild(me(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+aw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=F0(this.value_):e+=this.value_,this.lazyHash_=L0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Be.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Be.VALUE_TYPE_ORDER.indexOf(n),s=Be.VALUE_TYPE_ORDER.indexOf(r);return x(i>=0,"Unknown leaf type: "+n),x(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uw,cw;function wx(t){uw=t}function Ex(t){cw=t}class Ix extends pu{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ss(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return q.MIN}maxPost(){return new q(Gr,new Be("[PRIORITY-POST]",cw))}makePost(e,n){const r=uw(e);return new q(n,new Be("[PRIORITY-POST]",r))}toString(){return".priority"}}const ke=new Ix;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx=Math.log(2);class Sx{constructor(e){const n=s=>parseInt(Math.log(s)/Cx,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Il=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,h;if(c===0)return null;if(c===1)return d=t[l],h=n?n(d):d,new $e(h,d.node,$e.BLACK,null,null);{const m=parseInt(c/2,10)+l,v=i(l,m),y=i(m+1,u);return d=t[m],h=n?n(d):d,new $e(h,d.node,$e.BLACK,v,y)}},s=function(l){let u=null,c=null,d=t.length;const h=function(v,y){const w=d-v,p=d;d-=v;const f=i(w+1,p),g=t[w],_=n?n(g):g;m(new $e(_,g.node,y,null,f))},m=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<l.count;++v){const y=l.nextBitIsOne(),w=Math.pow(2,l.count-(v+1));y?h(w,$e.BLACK):(h(w,$e.BLACK),h(w,$e.RED))}return c},o=new Sx(t.length),a=s(o);return new pt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vc;const si={};class yn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(si&&ke,"ChildrenNode.ts has not been loaded"),vc=vc||new yn({".priority":si},{".priority":ke}),vc}get(e){const n=Wi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof pt?n:null}hasIndex(e){return Jt(this.indexSet_,e.toString())}addIndex(e,n){x(e!==Oi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(q.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Il(r,e.getCompare()):a=si;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new yn(c,u)}addToIndexes(e,n){const r=dl(this.indexes_,(i,s)=>{const o=Wi(this.indexSet_,s);if(x(o,"Missing index implementation for "+s),i===si)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(q.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Il(a,o.getCompare())}else return si;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new q(e.name,a))),l.insert(e,e.node)}});return new yn(r,this.indexSet_)}removeFromIndexes(e,n){const r=dl(this.indexes_,i=>{if(i===si)return i;{const s=n.get(e.name);return s?i.remove(new q(e.name,s)):i}});return new yn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Es;class H{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&lw(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Es||(Es=new H(new pt(Cf),null,yn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Es}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Es:n}}getChild(e){const n=G(e);return n===null?this:this.getImmediateChild(n).getChild(me(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new q(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Es:this.priorityNode_;return new H(i,o,s)}}updateChild(e,n){const r=G(e);if(r===null)return n;{x(G(e)!==".priority"||fr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(me(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ke,(o,a)=>{n[o]=a.val(e),r++,s&&H.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+aw(this.getPriority().val())+":"),this.forEachChild(ke,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":L0(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new q(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new q(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Vo?-1:0}withIndex(e){if(e===Oi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Oi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ke),i=n.getIterator(ke);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Oi?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Tx extends H{constructor(){super(new pt(Cf),H.EMPTY_NODE,yn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const Vo=new Tx;Object.defineProperties(q,{MIN:{value:new q(Vi,H.EMPTY_NODE)},MAX:{value:new q(Gr,Vo)}});ow.__EMPTY_NODE=H.EMPTY_NODE;Be.__childrenNodeConstructor=H;yx(Vo);Ex(Vo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx=!0;function Ye(t,e=null){if(t===null)return H.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Be(n,Ye(e))}if(!(t instanceof Array)&&kx){const n=[];let r=!1;if(wt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ye(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new q(o,l)))}}),n.length===0)return H.EMPTY_NODE;const s=Il(n,_x,o=>o.name,Cf);if(r){const o=Il(n,ke.getCompare());return new H(s,Ye(e),new yn({".priority":o},{".priority":ke}))}else return new H(s,Ye(e),yn.Default)}else{let n=H.EMPTY_NODE;return wt(t,(r,i)=>{if(Jt(t,r)&&r.substring(0,1)!=="."){const s=Ye(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ye(e))}}wx(Ye);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx extends pu{constructor(e){super(),this.indexPath_=e,x(!Q(e)&&G(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ss(e.name,n.name):s}makePost(e,n){const r=Ye(e),i=H.EMPTY_NODE.updateChild(this.indexPath_,r);return new q(n,i)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,Vo);return new q(Gr,e)}toString(){return rw(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px extends pu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ss(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(e,n){const r=Ye(e);return new q(n,r)}toString(){return".value"}}const Nx=new Px;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(t){return{type:"value",snapshotNode:t}}function Ki(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function So(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function To(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function bx(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(So(n,a)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ki(n,r)):o.trackChildChange(To(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ke,(i,s)=>{n.hasChild(i)||r.trackChildChange(So(i,s))}),n.isLeafNode()||n.forEachChild(ke,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(To(i,s,o))}else r.trackChildChange(Ki(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?H.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.indexedFilter_=new Sf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ko.getStartPost_(e),this.endPost_=ko.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new q(n,r))||(r=H.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=H.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(H.EMPTY_NODE);const s=this;return n.forEachChild(ke,(o,a)=>{s.matches(new q(o,a))||(i=i.updateImmediateChild(o,H.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ko(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new q(n,r))||(r=H.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=H.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=H.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(H.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,H.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,m)=>d(m,h)}else o=this.index_.getCompare();const a=e;x(a.numChildren()===this.limit_,"");const l=new q(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,l);if(c&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(To(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(So(n,d));const y=a.updateImmediateChild(n,H.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Ki(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(So(u.name,u.node)),s.trackChildChange(Ki(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,H.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ke}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Vi}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ke}copy(){const e=new Tf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ox(t){return t.loadsAllData()?new Sf(t.getIndex()):t.hasLimit()?new xx(t):new ko(t)}function dg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ke?n="$priority":t.index_===Nx?n="$value":t.index_===Oi?n="$key":(x(t.index_ instanceof Rx,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ve(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ve(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ve(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ve(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function hg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ke&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends ew{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=$o("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Cl.getListenId_(e,r),a={};this.listens_[o]=a;const l=dg(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Wi(this.listens_,o)===a){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Cl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=dg(e._queryParams),r=e._path.toString(),i=new Xl;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ei(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=mo(a.responseText)}catch{yt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&yt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(){return{value:null,children:new Map}}function hw(t,e,n){if(Q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=G(e);t.children.has(r)||t.children.set(r,Sl());const i=t.children.get(r);e=me(e),hw(i,e,n)}}function Dd(t,e,n){t.value!==null?n(e,t.value):Lx(t,(r,i)=>{const s=new fe(e.toString()+"/"+r);Dd(i,s,n)})}function Lx(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&wt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=10*1e3,Mx=30*1e3,Fx=5*60*1e3;class Ux{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Dx(e);const r=fg+(Mx-fg)*Math.random();$s(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;wt(e,(i,s)=>{s>0&&Jt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),$s(this.reportStats_.bind(this),Math.floor(Math.random()*2*Fx))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Kt||(Kt={}));function fw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function kf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Rf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Kt.ACK_USER_WRITE,this.source=fw()}operationForChild(e){if(Q(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new fe(e));return new Tl(oe(),n,this.revert)}}else return x(G(this.path)===e,"operationForChild called for unrelated child."),new Tl(me(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n){this.source=e,this.path=n,this.type=Kt.LISTEN_COMPLETE}operationForChild(e){return Q(this.path)?new Ro(this.source,oe()):new Ro(this.source,me(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Kt.OVERWRITE}operationForChild(e){return Q(this.path)?new qr(this.source,oe(),this.snap.getImmediateChild(e)):new qr(this.source,me(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Kt.MERGE}operationForChild(e){if(Q(this.path)){const n=this.children.subtree(new fe(e));return n.isEmpty()?null:n.value?new qr(this.source,oe(),n.value):new Po(this.source,oe(),n)}else return x(G(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Po(this.source,me(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Q(e))return this.isFullyInitialized()&&!this.filtered_;const n=G(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function zx(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(bx(o.childName,o.snapshotNode))}),Is(t,i,"child_removed",e,r,n),Is(t,i,"child_added",e,r,n),Is(t,i,"child_moved",s,r,n),Is(t,i,"child_changed",e,r,n),Is(t,i,"value",e,r,n),i}function Is(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>Bx(t,a,l)),o.forEach(a=>{const l=Wx(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function Wx(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Bx(t,e,n){if(e.childName==null||n.childName==null)throw es("Should only compare child_ events.");const r=new q(e.childName,e.snapshotNode),i=new q(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(t,e){return{eventCache:t,serverCache:e}}function Vs(t,e,n,r){return mu(new Yr(e,n,r),t.serverCache)}function pw(t,e,n,r){return mu(t.eventCache,new Yr(e,n,r))}function Md(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Qr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _c;const Hx=()=>(_c||(_c=new pt(Pb)),_c);class _e{constructor(e,n=Hx()){this.value=e,this.children=n}static fromObject(e){let n=new _e(null);return wt(e,(r,i)=>{n=n.set(new fe(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:oe(),value:this.value};if(Q(e))return null;{const r=G(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(me(e),n);return s!=null?{path:Ue(new fe(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Q(e))return this;{const n=G(e),r=this.children.get(n);return r!==null?r.subtree(me(e)):new _e(null)}}set(e,n){if(Q(e))return new _e(n,this.children);{const r=G(e),s=(this.children.get(r)||new _e(null)).set(me(e),n),o=this.children.insert(r,s);return new _e(this.value,o)}}remove(e){if(Q(e))return this.children.isEmpty()?new _e(null):new _e(null,this.children);{const n=G(e),r=this.children.get(n);if(r){const i=r.remove(me(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new _e(null):new _e(this.value,s)}else return this}}get(e){if(Q(e))return this.value;{const n=G(e),r=this.children.get(n);return r?r.get(me(e)):null}}setTree(e,n){if(Q(e))return n;{const r=G(e),s=(this.children.get(r)||new _e(null)).setTree(me(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new _e(this.value,o)}}fold(e){return this.fold_(oe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ue(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,oe(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Q(e))return null;{const s=G(e),o=this.children.get(s);return o?o.findOnPath_(me(e),Ue(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,oe(),n)}foreachOnPath_(e,n,r){if(Q(e))return this;{this.value&&r(n,this.value);const i=G(e),s=this.children.get(i);return s?s.foreachOnPath_(me(e),Ue(n,i),r):new _e(null)}}foreach(e){this.foreach_(oe(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ue(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.writeTree_=e}static empty(){return new Yt(new _e(null))}}function Ks(t,e,n){if(Q(e))return new Yt(new _e(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ft(i,e);return s=s.updateChild(o,n),new Yt(t.writeTree_.set(i,s))}else{const i=new _e(n),s=t.writeTree_.setTree(e,i);return new Yt(s)}}}function pg(t,e,n){let r=t;return wt(n,(i,s)=>{r=Ks(r,Ue(e,i),s)}),r}function mg(t,e){if(Q(e))return Yt.empty();{const n=t.writeTree_.setTree(e,new _e(null));return new Yt(n)}}function Fd(t,e){return ni(t,e)!=null}function ni(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ft(n.path,e)):null}function gg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ke,(r,i)=>{e.push(new q(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new q(r,i.value))}),e}function sr(t,e){if(Q(e))return t;{const n=ni(t,e);return n!=null?new Yt(new _e(n)):new Yt(t.writeTree_.subtree(e))}}function Ud(t){return t.writeTree_.isEmpty()}function Gi(t,e){return mw(oe(),t.writeTree_,e)}function mw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(x(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=mw(Ue(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ue(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t,e){return yw(e,t)}function $x(t,e,n,r,i){x(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ks(t.visibleWrites,e,n)),t.lastWriteId=r}function Vx(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Kx(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Gx(a,r.path)?i=!1:Vt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return qx(t),!0;if(r.snap)t.visibleWrites=mg(t.visibleWrites,r.path);else{const a=r.children;wt(a,l=>{t.visibleWrites=mg(t.visibleWrites,Ue(r.path,l))})}return!0}else return!1}function Gx(t,e){if(t.snap)return Vt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Vt(Ue(t.path,n),e))return!0;return!1}function qx(t){t.visibleWrites=gw(t.allWrites,Yx,oe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Yx(t){return t.visible}function gw(t,e,n){let r=Yt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Vt(n,o)?(a=ft(n,o),r=Ks(r,a,s.snap)):Vt(o,n)&&(a=ft(o,n),r=Ks(r,oe(),s.snap.getChild(a)));else if(s.children){if(Vt(n,o))a=ft(n,o),r=pg(r,a,s.children);else if(Vt(o,n))if(a=ft(o,n),Q(a))r=pg(r,oe(),s.children);else{const l=Wi(s.children,G(a));if(l){const u=l.getChild(me(a));r=Ks(r,oe(),u)}}}else throw es("WriteRecord should have .snap or .children")}}return r}function vw(t,e,n,r,i){if(!r&&!i){const s=ni(t.visibleWrites,e);if(s!=null)return s;{const o=sr(t.visibleWrites,e);if(Ud(o))return n;if(n==null&&!Fd(o,oe()))return null;{const a=n||H.EMPTY_NODE;return Gi(o,a)}}}else{const s=sr(t.visibleWrites,e);if(!i&&Ud(s))return n;if(!i&&n==null&&!Fd(s,oe()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Vt(u.path,e)||Vt(e,u.path))},a=gw(t.allWrites,o,e),l=n||H.EMPTY_NODE;return Gi(a,l)}}}function Qx(t,e,n){let r=H.EMPTY_NODE;const i=ni(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ke,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=sr(t.visibleWrites,e);return n.forEachChild(ke,(o,a)=>{const l=Gi(sr(s,new fe(o)),a);r=r.updateImmediateChild(o,l)}),gg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=sr(t.visibleWrites,e);return gg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Jx(t,e,n,r,i){x(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ue(e,n);if(Fd(t.visibleWrites,s))return null;{const o=sr(t.visibleWrites,s);return Ud(o)?i.getChild(n):Gi(o,i.getChild(n))}}function Xx(t,e,n,r){const i=Ue(e,n),s=ni(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=sr(t.visibleWrites,i);return Gi(o,r.getNode().getImmediateChild(n))}else return null}function Zx(t,e){return ni(t.visibleWrites,e)}function eO(t,e,n,r,i,s,o){let a;const l=sr(t.visibleWrites,e),u=ni(l,oe());if(u!=null)a=u;else if(n!=null)a=Gi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=h.getNext();for(;m&&c.length<i;)d(m,r)!==0&&c.push(m),m=h.getNext();return c}else return[]}function tO(){return{visibleWrites:Yt.empty(),allWrites:[],lastWriteId:-1}}function kl(t,e,n,r){return vw(t.writeTree,t.treePath,e,n,r)}function Nf(t,e){return Qx(t.writeTree,t.treePath,e)}function vg(t,e,n,r){return Jx(t.writeTree,t.treePath,e,n,r)}function Rl(t,e){return Zx(t.writeTree,Ue(t.treePath,e))}function nO(t,e,n,r,i,s){return eO(t.writeTree,t.treePath,e,n,r,i,s)}function bf(t,e,n){return Xx(t.writeTree,t.treePath,e,n)}function _w(t,e){return yw(Ue(t.treePath,e),t.writeTree)}function yw(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,To(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,So(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ki(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,To(r,e.snapshotNode,i.oldSnap));else throw es("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const ww=new iO;class xf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Yr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Qr(this.viewCache_),s=nO(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sO(t){return{filter:t}}function oO(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function aO(t,e,n,r,i){const s=new rO;let o,a;if(n.type===Kt.OVERWRITE){const u=n;u.source.fromUser?o=jd(t,e,u.path,u.snap,r,i,s):(x(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Q(u.path),o=Pl(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Kt.MERGE){const u=n;u.source.fromUser?o=uO(t,e,u.path,u.children,r,i,s):(x(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=zd(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Kt.ACK_USER_WRITE){const u=n;u.revert?o=hO(t,e,u.path,r,i,s):o=cO(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Kt.LISTEN_COMPLETE)o=dO(t,e,n.path,r,s);else throw es("Unknown operation type: "+n.type);const l=s.getChanges();return lO(e,o,l),{viewCache:o,changes:l}}function lO(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Md(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(dw(Md(e)))}}function Ew(t,e,n,r,i,s){const o=e.eventCache;if(Rl(r,n)!=null)return e;{let a,l;if(Q(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Qr(e),c=u instanceof H?u:H.EMPTY_NODE,d=Nf(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=kl(r,Qr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=G(n);if(u===".priority"){x(fr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=vg(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=me(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const h=vg(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=bf(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return Vs(e,a,o.isFullyInitialized()||Q(n),t.filter.filtersNodes())}}function Pl(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(Q(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),m,null)}else{const m=G(n);if(!l.isCompleteForPath(n)&&fr(n)>1)return e;const v=me(n),w=l.getNode().getImmediateChild(m).updateChild(v,r);m===".priority"?u=c.updatePriority(l.getNode(),w):u=c.updateChild(l.getNode(),m,w,v,ww,null)}const d=pw(e,u,l.isFullyInitialized()||Q(n),c.filtersNodes()),h=new xf(i,d,s);return Ew(t,d,n,i,h,a)}function jd(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new xf(i,e,s);if(Q(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Vs(e,u,!0,t.filter.filtersNodes());else{const d=G(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Vs(e,u,a.isFullyInitialized(),a.isFiltered());else{const h=me(n),m=a.getNode().getImmediateChild(d);let v;if(Q(h))v=r;else{const y=c.getCompleteChild(d);y!=null?nw(h)===".priority"&&y.getChild(iw(h)).isEmpty()?v=y:v=y.updateChild(h,r):v=H.EMPTY_NODE}if(m.equals(v))l=e;else{const y=t.filter.updateChild(a.getNode(),d,v,h,c,o);l=Vs(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function _g(t,e){return t.eventCache.isCompleteForChild(e)}function uO(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Ue(n,l);_g(e,G(c))&&(a=jd(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Ue(n,l);_g(e,G(c))||(a=jd(t,a,c,u,i,s,o))}),a}function yg(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function zd(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;Q(n)?u=r:u=new _e(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),v=yg(t,m,h);l=Pl(t,l,new fe(d),v,i,s,o,a)}}),u.children.inorderTraversal((d,h)=>{const m=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!m){const v=e.serverCache.getNode().getImmediateChild(d),y=yg(t,v,h);l=Pl(t,l,new fe(d),y,i,s,o,a)}}),l}function cO(t,e,n,r,i,s,o){if(Rl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Pl(t,e,n,l.getNode().getChild(n),i,s,a,o);if(Q(n)){let u=new _e(null);return l.getNode().forEachChild(Oi,(c,d)=>{u=u.set(new fe(c),d)}),zd(t,e,n,u,i,s,a,o)}else return e}else{let u=new _e(null);return r.foreach((c,d)=>{const h=Ue(n,c);l.isCompleteForPath(h)&&(u=u.set(c,l.getNode().getChild(h)))}),zd(t,e,n,u,i,s,a,o)}}function dO(t,e,n,r,i){const s=e.serverCache,o=pw(e,s.getNode(),s.isFullyInitialized()||Q(n),s.isFiltered());return Ew(t,o,n,r,ww,i)}function hO(t,e,n,r,i,s){let o;if(Rl(r,n)!=null)return e;{const a=new xf(r,e,i),l=e.eventCache.getNode();let u;if(Q(n)||G(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=kl(r,Qr(e));else{const d=e.serverCache.getNode();x(d instanceof H,"serverChildren would be complete if leaf node"),c=Nf(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=G(n);let d=bf(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,me(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,H.EMPTY_NODE,me(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=kl(r,Qr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Rl(r,oe())!=null,Vs(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Sf(r.getIndex()),s=Ox(r);this.processor_=sO(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(H.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(H.EMPTY_NODE,a.getNode(),null),c=new Yr(l,o.isFullyInitialized(),i.filtersNodes()),d=new Yr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=mu(d,c),this.eventGenerator_=new jx(this.query_)}get query(){return this.query_}}function pO(t){return t.viewCache_.serverCache.getNode()}function mO(t,e){const n=Qr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Q(e)&&!n.getImmediateChild(G(e)).isEmpty())?n.getChild(e):null}function wg(t){return t.eventRegistrations_.length===0}function gO(t,e){t.eventRegistrations_.push(e)}function Eg(t,e,n){const r=[];if(n){x(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Ig(t,e,n,r){e.type===Kt.MERGE&&e.source.queryId!==null&&(x(Qr(t.viewCache_),"We should always have a full cache before handling merges"),x(Md(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=aO(t.processor_,i,e,n,r);return oO(t.processor_,s.viewCache),x(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Iw(t,s.changes,s.viewCache.eventCache.getNode(),null)}function vO(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ke,(s,o)=>{r.push(Ki(s,o))}),n.isFullyInitialized()&&r.push(dw(n.getNode())),Iw(t,r,n.getNode(),e)}function Iw(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return zx(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nl;class _O{constructor(){this.views=new Map}}function yO(t){x(!Nl,"__referenceConstructor has already been defined"),Nl=t}function wO(){return x(Nl,"Reference.ts has not been loaded"),Nl}function EO(t){return t.views.size===0}function Of(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return x(s!=null,"SyncTree gave us an op for an invalid query."),Ig(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Ig(o,e,n,r));return s}}function IO(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=kl(n,i?r:null),l=!1;a?l=!0:r instanceof H?(a=Nf(n,r),l=!1):(a=H.EMPTY_NODE,l=!1);const u=mu(new Yr(a,l,!1),new Yr(r,i,!1));return new fO(e,u)}return o}function CO(t,e,n,r,i,s){const o=IO(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),gO(o,n),vO(o,n)}function SO(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=pr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Eg(u,n,r)),wg(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Eg(l,n,r)),wg(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!pr(t)&&s.push(new(wO())(e._repo,e._path)),{removed:s,events:o}}function Cw(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ai(t,e){let n=null;for(const r of t.views.values())n=n||mO(r,e);return n}function Sw(t,e){if(e._queryParams.loadsAllData())return gu(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Tw(t,e){return Sw(t,e)!=null}function pr(t){return gu(t)!=null}function gu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bl;function TO(t){x(!bl,"__referenceConstructor has already been defined"),bl=t}function kO(){return x(bl,"Reference.ts has not been loaded"),bl}let RO=1;class Cg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _e(null),this.pendingWriteTree_=tO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function kw(t,e,n,r,i){return $x(t.pendingWriteTree_,e,n,r,i),i?Ko(t,new qr(fw(),e,n)):[]}function xr(t,e,n=!1){const r=Vx(t.pendingWriteTree_,e);if(Kx(t.pendingWriteTree_,e)){let s=new _e(null);return r.snap!=null?s=s.set(oe(),!0):wt(r.children,o=>{s=s.set(new fe(o),!0)}),Ko(t,new Tl(r.path,s,n))}else return[]}function vu(t,e,n){return Ko(t,new qr(kf(),e,n))}function PO(t,e,n){const r=_e.fromObject(n);return Ko(t,new Po(kf(),e,r))}function NO(t,e){return Ko(t,new Ro(kf(),e))}function bO(t,e,n){const r=Lf(t,n);if(r){const i=Df(r),s=i.path,o=i.queryId,a=ft(s,e),l=new Ro(Rf(o),a);return Mf(t,s,l)}else return[]}function Wd(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Tw(o,e))){const l=SO(o,e,n,r);EO(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,m)=>pr(m));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const m=AO(h);for(let v=0;v<m.length;++v){const y=m[v],w=y.query,p=Nw(t,y);t.listenProvider_.startListening(Gs(w),xl(t,w),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Gs(e),null):u.forEach(h=>{const m=t.queryToTagMap.get(_u(h));t.listenProvider_.stopListening(Gs(h),m)}))}LO(t,u)}return a}function xO(t,e,n,r){const i=Lf(t,r);if(i!=null){const s=Df(i),o=s.path,a=s.queryId,l=ft(o,e),u=new qr(Rf(a),l,n);return Mf(t,o,u)}else return[]}function OO(t,e,n,r){const i=Lf(t,r);if(i){const s=Df(i),o=s.path,a=s.queryId,l=ft(o,e),u=_e.fromObject(n),c=new Po(Rf(a),l,u);return Mf(t,o,c)}else return[]}function Sg(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,m)=>{const v=ft(h,i);s=s||Ai(m,v),o=o||pr(m)});let a=t.syncPointTree_.get(i);a?(o=o||pr(a),s=s||Ai(a,oe())):(a=new _O,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=H.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,v)=>{const y=Ai(v,oe());y&&(s=s.updateImmediateChild(m,y))}));const u=Tw(a,e);if(!u&&!e._queryParams.loadsAllData()){const h=_u(e);x(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=DO();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const c=Pf(t.pendingWriteTree_,i);let d=CO(a,e,n,c,s,l);if(!u&&!o&&!r){const h=Sw(a,e);d=d.concat(MO(t,e,h))}return d}function Af(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ft(o,e),u=Ai(a,l);if(u)return u});return vw(i,e,s,n,!0)}function Ko(t,e){return Rw(e,t.syncPointTree_,null,Pf(t.pendingWriteTree_,oe()))}function Rw(t,e,n,r){if(Q(t.path))return Pw(t,e,n,r);{const i=e.get(oe());n==null&&i!=null&&(n=Ai(i,oe()));let s=[];const o=G(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=_w(r,o);s=s.concat(Rw(a,l,u,c))}return i&&(s=s.concat(Of(i,t,r,n))),s}}function Pw(t,e,n,r){const i=e.get(oe());n==null&&i!=null&&(n=Ai(i,oe()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=_w(r,o),c=t.operationForChild(o);c&&(s=s.concat(Pw(c,a,l,u)))}),i&&(s=s.concat(Of(i,t,r,n))),s}function Nw(t,e){const n=e.query,r=xl(t,n);return{hashFn:()=>(pO(e)||H.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?bO(t,n._path,r):NO(t,n._path);{const s=xb(i,n);return Wd(t,n,null,s)}}}}function xl(t,e){const n=_u(e);return t.queryToTagMap.get(n)}function _u(t){return t._path.toString()+"$"+t._queryIdentifier}function Lf(t,e){return t.tagToQueryMap.get(e)}function Df(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new fe(t.substr(0,e))}}function Mf(t,e,n){const r=t.syncPointTree_.get(e);x(r,"Missing sync point for query tag that we're tracking");const i=Pf(t.pendingWriteTree_,e);return Of(r,n,i,null)}function AO(t){return t.fold((e,n,r)=>{if(n&&pr(n))return[gu(n)];{let i=[];return n&&(i=Cw(n)),wt(r,(s,o)=>{i=i.concat(o)}),i}})}function Gs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(kO())(t._repo,t._path):t}function LO(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=_u(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function DO(){return RO++}function MO(t,e,n){const r=e._path,i=xl(t,e),s=Nw(t,n),o=t.listenProvider_.startListening(Gs(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)x(!pr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!Q(u)&&c&&pr(c))return[gu(c).query];{let h=[];return c&&(h=h.concat(Cw(c).map(m=>m.query))),wt(d,(m,v)=>{h=h.concat(v)}),h}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Gs(c),xl(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ff(n)}node(){return this.node_}}class Uf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ue(this.path_,e);return new Uf(this.syncTree_,n)}node(){return Af(this.syncTree_,this.path_)}}const FO=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Tg=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return UO(t[".sv"],e,n);if(typeof t[".sv"]=="object")return jO(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},UO=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},jO=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&x(!1,"Unexpected increment value: "+r);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},zO=function(t,e,n,r){return jf(e,new Uf(n,t),r)},bw=function(t,e,n){return jf(t,new Ff(e),n)};function jf(t,e,n){const r=t.getPriority().val(),i=Tg(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Tg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Be(a,Ye(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Be(i))),o.forEachChild(ke,(a,l)=>{const u=jf(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Wf(t,e){let n=e instanceof fe?e:new fe(e),r=t,i=G(n);for(;i!==null;){const s=Wi(r.node.children,i)||{children:{},childCount:0};r=new zf(i,r,s),n=me(n),i=G(n)}return r}function as(t){return t.node.value}function xw(t,e){t.node.value=e,Bd(t)}function Ow(t){return t.node.childCount>0}function WO(t){return as(t)===void 0&&!Ow(t)}function yu(t,e){wt(t.node.children,(n,r)=>{e(new zf(n,t,r))})}function Aw(t,e,n,r){n&&!r&&e(t),yu(t,i=>{Aw(i,e,!0,r)}),n&&r&&e(t)}function BO(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Go(t){return new fe(t.parent===null?t.name:Go(t.parent)+"/"+t.name)}function Bd(t){t.parent!==null&&HO(t.parent,t.name,t)}function HO(t,e,n){const r=WO(n),i=Jt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Bd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Bd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O=/[\[\].#$\/\u0000-\u001F\u007F]/,VO=/[\[\].#$\u0000-\u001F\u007F]/,yc=10*1024*1024,Lw=function(t){return typeof t=="string"&&t.length!==0&&!$O.test(t)},Dw=function(t){return typeof t=="string"&&t.length!==0&&!VO.test(t)},KO=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Dw(t)},Mw=function(t,e,n,r){r&&e===void 0||Bf(Kh(t,"value"),e,n)},Bf=function(t,e,n){const r=n instanceof fe?new cx(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Tr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Tr(r)+" with contents = "+e.toString());if(D0(e))throw new Error(t+"contains "+e.toString()+" "+Tr(r));if(typeof e=="string"&&e.length>yc/3&&eu(e)>yc)throw new Error(t+"contains a string greater than "+yc+" utf8 bytes "+Tr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(wt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Lw(o)))throw new Error(t+" contains an invalid key ("+o+") "+Tr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);dx(r,o),Bf(t,a,r),hx(r)}),i&&s)throw new Error(t+' contains ".value" child '+Tr(r)+" in addition to actual children.")}},Fw=function(t,e,n,r){if(!(r&&n===void 0)&&!Dw(n))throw new Error(Kh(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},GO=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Fw(t,e,n,r)},Hf=function(t,e){if(G(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},qO=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Lw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!KO(n))throw new Error(Kh(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $f(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Ef(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Uw(t,e,n){$f(t,n),jw(t,r=>Ef(r,e))}function xn(t,e,n){$f(t,n),jw(t,r=>Vt(r,e)||Vt(e,r))}function jw(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(QO(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function QO(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Fr&&rt("event: "+n.toString()),os(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO="repo_interrupt",XO=25;class ZO{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new YO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Sl(),this.transactionQueueTree_=new zf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function eA(t,e,n){if(t.stats_=yf(t.repoInfo_),t.forceRestClient_||Db())t.server_=new Cl(t.repoInfo_,(r,i,s,o)=>{kg(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Rg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ve(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Cn(t.repoInfo_,e,(r,i,s,o)=>{kg(t,r,i,s,o)},r=>{Rg(t,r)},r=>{tA(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=zb(t.repoInfo_,()=>new Ux(t.stats_,t.server_)),t.infoData_=new Ax,t.infoSyncTree_=new Cg({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=vu(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Kf(t,"connected",!1),t.serverSyncTree_=new Cg({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);xn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function zw(t){const n=t.infoData_.getNode(new fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Vf(t){return FO({timestamp:zw(t)})}function kg(t,e,n,r,i){t.dataUpdateCount++;const s=new fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=dl(n,u=>Ye(u));o=OO(t.serverSyncTree_,s,l,i)}else{const l=Ye(n);o=xO(t.serverSyncTree_,s,l,i)}else if(r){const l=dl(n,u=>Ye(u));o=PO(t.serverSyncTree_,s,l)}else{const l=Ye(n);o=vu(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=wu(t,s)),xn(t.eventQueue_,a,o)}function Rg(t,e){Kf(t,"connected",e),e===!1&&rA(t)}function tA(t,e){wt(e,(n,r)=>{Kf(t,n,r)})}function Kf(t,e,n){const r=new fe("/.info/"+e),i=Ye(n);t.infoData_.updateSnapshot(r,i);const s=vu(t.infoSyncTree_,r,i);xn(t.eventQueue_,r,s)}function Ww(t){return t.nextWriteId_++}function nA(t,e,n,r,i){Gf(t,"set",{path:e.toString(),value:n,priority:r});const s=Vf(t),o=Ye(n,r),a=Af(t.serverSyncTree_,e),l=bw(o,a,s),u=Ww(t),c=kw(t.serverSyncTree_,e,l,u,!0);$f(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const v=h==="ok";v||yt("set at "+e+" failed: "+h);const y=xr(t.serverSyncTree_,u,!v);xn(t.eventQueue_,e,y),oA(t,i,h,m)});const d=Kw(t,e);wu(t,d),xn(t.eventQueue_,d,[])}function rA(t){Gf(t,"onDisconnectEvents");const e=Vf(t),n=Sl();Dd(t.onDisconnect_,oe(),(i,s)=>{const o=zO(i,s,t.serverSyncTree_,e);hw(n,i,o)});let r=[];Dd(n,oe(),(i,s)=>{r=r.concat(vu(t.serverSyncTree_,i,s));const o=Kw(t,i);wu(t,o)}),t.onDisconnect_=Sl(),xn(t.eventQueue_,oe(),r)}function iA(t,e,n){let r;G(e._path)===".info"?r=Sg(t.infoSyncTree_,e,n):r=Sg(t.serverSyncTree_,e,n),Uw(t.eventQueue_,e._path,r)}function Hd(t,e,n){let r;G(e._path)===".info"?r=Wd(t.infoSyncTree_,e,n):r=Wd(t.serverSyncTree_,e,n),Uw(t.eventQueue_,e._path,r)}function sA(t){t.persistentConnection_&&t.persistentConnection_.interrupt(JO)}function Gf(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),rt(n,...e)}function oA(t,e,n,r){e&&os(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Bw(t,e,n){return Af(t.serverSyncTree_,e,n)||H.EMPTY_NODE}function qf(t,e=t.transactionQueueTree_){if(e||Eu(t,e),as(e)){const n=$w(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&aA(t,Go(e),n)}else Ow(e)&&yu(e,n=>{qf(t,n)})}function aA(t,e,n){const r=n.map(u=>u.currentWriteId),i=Bw(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];x(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=ft(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Gf(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(xr(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Eu(t,Wf(t.transactionQueueTree_,e)),qf(t,t.transactionQueueTree_),xn(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)os(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{yt("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}wu(t,e)}},o)}function wu(t,e){const n=Hw(t,e),r=Go(n),i=$w(t,n);return lA(t,i,r),r}function lA(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=ft(n,l.path);let c=!1,d;if(x(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(xr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=XO)c=!0,d="maxretry",i=i.concat(xr(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Bw(t,l.path,o);l.currentInputSnapshot=h;const m=e[a].update(h.val());if(m!==void 0){Bf("transaction failed: Data returned ",m,l.path);let v=Ye(m);typeof m=="object"&&m!=null&&Jt(m,".priority")||(v=v.updatePriority(h.getPriority()));const w=l.currentWriteId,p=Vf(t),f=bw(v,h,p);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=f,l.currentWriteId=Ww(t),o.splice(o.indexOf(w),1),i=i.concat(kw(t.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),i=i.concat(xr(t.serverSyncTree_,w,!0))}else c=!0,d="nodata",i=i.concat(xr(t.serverSyncTree_,l.currentWriteId,!0))}xn(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Eu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)os(r[a]);qf(t,t.transactionQueueTree_)}function Hw(t,e){let n,r=t.transactionQueueTree_;for(n=G(e);n!==null&&as(r)===void 0;)r=Wf(r,n),e=me(e),n=G(e);return r}function $w(t,e){const n=[];return Vw(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Vw(t,e,n){const r=as(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);yu(e,i=>{Vw(t,i,n)})}function Eu(t,e){const n=as(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,xw(e,n.length>0?n:void 0)}yu(e,r=>{Eu(t,r)})}function Kw(t,e){const n=Go(Hw(t,e)),r=Wf(t.transactionQueueTree_,e);return BO(r,i=>{wc(t,i)}),wc(t,r),Aw(r,i=>{wc(t,i)}),n}function wc(t,e){const n=as(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(xr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?xw(e,void 0):n.length=s+1,xn(t.eventQueue_,Go(e),i);for(let o=0;o<r.length;o++)os(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function cA(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):yt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Pg=function(t,e){const n=dA(t),r=n.namespace;n.domain==="firebase.com"&&bn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&bn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||kb();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new G0(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new fe(n.pathString)}},dA=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=uA(t.substring(c,d)));const h=cA(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",hA=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Ng.charAt(n%64),n=Math.floor(n/64);x(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Ng.charAt(e[i]);return x(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ve(this.snapshot.exportVal())}}class qw{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Q(this._path)?null:nw(this._path)}get ref(){return new Dn(this._repo,this._path)}get _queryIdentifier(){const e=hg(this._queryParams),n=vf(e);return n==="{}"?"default":n}get _queryObject(){return hg(this._queryParams)}isEqual(e){if(e=$(e),!(e instanceof Yf))return!1;const n=this._repo===e._repo,r=Ef(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ux(this._path)}}class Dn extends Yf{constructor(e,n){super(e,n,new Tf,!1)}get parent(){const e=iw(this._path);return e===null?null:new Dn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class No{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new fe(e),r=qi(this.ref,e);return new No(this._node.getChild(n),r,ke)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new No(i,qi(this.ref,r),ke)))}hasChild(e){const n=new fe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function $d(t,e){return t=$(t),t._checkNotDeleted("ref"),e!==void 0?qi(t._root,e):t._root}function qi(t,e){return t=$(t),G(t._path)===null?GO("child","path",e,!1):Fw("child","path",e,!1),new Dn(t._repo,Ue(t._path,e))}function fA(t,e){t=$(t),Hf("push",t._path),Mw("push",e,t._path,!0);const n=zw(t._repo),r=hA(n),i=qi(t,r),s=qi(t,r);let o;return e!=null?o=Qw(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function pA(t){return Hf("remove",t._path),Qw(t,null)}function Qw(t,e){t=$(t),Hf("set",t._path),Mw("set",e,t._path,!1);const n=new Xl;return nA(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Iu{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Gw("value",this,new No(e.snapshotNode,new Dn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new qw(this,e,n):null}matches(e){return e instanceof Iu?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Cu{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new qw(this,e,n):null}createEvent(e,n){x(e.childName!=null,"Child events should have a childName.");const r=qi(new Dn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Gw(e.type,this,new No(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Cu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function mA(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{Hd(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new Yw(n,s||void 0),a=e==="value"?new Iu(o):new Cu(e,o);return iA(t._repo,t,a),()=>Hd(t._repo,t,a)}function gA(t,e,n,r){return mA(t,"value",e,n,r)}function vA(t,e,n){let r=null;const i=n?new Yw(n):null;e==="value"?r=new Iu(i):e&&(r=new Cu(e,i)),Hd(t._repo,t,r)}yO(Dn);TO(Dn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A="FIREBASE_DATABASE_EMULATOR_HOST",Vd={};let yA=!1;function wA(t,e,n,r){t.repoInfo_=new G0(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function EA(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||bn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),rt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Pg(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[_A]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=Pg(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new xi(xi.OWNER):new Fb(t.name,t.options,e);qO("Invalid Firebase Database URL",o),Q(o.path)||bn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=CA(a,t,c,new Mb(t.name,n));return new SA(d,t)}function IA(t,e){const n=Vd[e];(!n||n[t.key]!==t)&&bn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),sA(t),delete n[t.key]}function CA(t,e,n,r){let i=Vd[e.name];i||(i={},Vd[e.name]=i);let s=i[t.toURLString()];return s&&bn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new ZO(t,yA,n,r),i[t.toURLString()]=s,s}class SA{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(eA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dn(this._repo,oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(IA(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&bn("Cannot call "+e+" on a deleted database.")}}function Kd(t=Qh(),e){const n=Mo(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=PT("database");r&&TA(n,...r)}return n}function TA(t,e,n,r={}){t=$(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&bn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&bn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new xi(xi.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:NT(r.mockUserToken,t.app.options.projectId);s=new xi(o)}wA(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(t){Eb(yr),cr(new Pn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return EA(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),dn(Ym,Qm,t),dn(Ym,Qm,"esm2017")}Cn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Cn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};kA();const RA=()=>{const[t,e]=R.useState(""),[n,r]=R.useState(""),i=s=>{if(s.preventDefault(),t===""||n===""){le.error("Please fill in all fields.");return}const o=localStorage.getItem("username"),a=Kd(),l=$d(a,"news");fA(l,{title:t,paragraph:n,username:o,timestamp:{".sv":"timestamp"}}),e(""),r("")};return k.jsxs("form",{className:M.formstyle,onSubmit:i,children:[k.jsx("input",{className:M.newsforminput,type:"text",placeholder:"Title",value:t,onChange:s=>e(s.target.value)}),k.jsx("textarea",{className:M.newsformtextarea,placeholder:"Paragraph",value:n,onChange:s=>r(s.target.value)}),k.jsx("button",{className:M.newsformbtn,type:"submit",children:"Submit"}),k.jsxs("p",{children:["Current Timestamp: ",new Date().toString()]})]})},bg=()=>{const[t,e]=R.useState([]),[n,r]=R.useState(null);R.useEffect(()=>{console.log("Fetching news data...");const o=pN(),a=bR(o,l=>{r(l)});return()=>{a()}},[]);const i=o=>{const a=Kd(),l=$d(a,"news/"+o);pA(l).then(()=>{le.success("News item removed successfully.")}).catch(u=>{console.error("Error removing news item:",u),le.error("Failed to remove news item.")})};R.useEffect(()=>{const o=Kd(),a=$d(o,"news"),l=u=>{console.log("handleData function executed");const c=u.val(),h=Object.keys(c||{}).map(m=>({id:m,...c[m]})).reverse();e(h),console.log("News data fetched successfully...")};return gA(a,l,u=>{console.error("Error fetching news data:",u)}),()=>{vA(a,l)}},[]);const s=o=>new Date(o).toLocaleString();return k.jsx("div",{className:M.newscontainer,children:t.map(o=>k.jsx("div",{className:M.newslist,children:k.jsxs("div",{className:M.newsparagraph,children:[k.jsx("h1",{className:M.newsheadline,children:o.title}),k.jsxs("div",{className:M.textNphoto,children:[k.jsx("p",{className:M.newsparagraphtext,children:o.paragraph}),k.jsxs("div",{className:M.newsFlex,children:[k.jsxs("span",{className:M.usersigned,children:["Posted by: ",o.username]}),k.jsxs("p",{className:M.usersigned,children:["Published: ",s(o.timestamp)]})]}),Bo(n==null?void 0:n.email)&&k.jsx("button",{className:M.newsformbtn,onClick:()=>i(o.id),children:"Remove"})]})]})},o.id))})};function PA(){const[t,e]=R.useState(null);return R.useEffect(()=>{const n=Mt.auth().onAuthStateChanged(r=>{if(r){const i=r.email;Bo(i)&&e(r)}else Mt.auth().signOut(),e(null)});return()=>n()},[]),k.jsx("div",{className:M.newscontainer,children:t?k.jsxs("div",{className:M.newscontainer,children:[k.jsx("h1",{className:M.newsHeader,children:"News"}),k.jsx(RA,{}),k.jsx(bg,{}),k.jsx("div",{className:M.emptydiv})]}):k.jsxs("div",{className:M.newscontainer,children:[k.jsx("h1",{className:M.newsHeader,children:"News"}),k.jsx(bg,{})]})})}var Jw={exports:{}};(function(t,e){(function(r,i){t.exports=i(R)})(typeof self<"u"?self:Mg,function(n){return function(r){var i={};function s(o){if(i[o])return i[o].exports;var a=i[o]={i:o,l:!1,exports:{}};return r[o].call(a.exports,a,a.exports,s),a.l=!0,a.exports}return s.m=r,s.c=i,s.d=function(o,a,l){s.o(o,a)||Object.defineProperty(o,a,{enumerable:!0,get:l})},s.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},s.t=function(o,a){if(1&a&&(o=s(o)),8&a||4&a&&typeof o=="object"&&o&&o.__esModule)return o;var l=Object.create(null);if(s.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:o}),2&a&&typeof o!="string")for(var u in o)s.d(l,u,function(c){return o[c]}.bind(null,u));return l},s.n=function(o){var a=o&&o.__esModule?function(){return o.default}:function(){return o};return s.d(a,"a",a),a},s.o=function(o,a){return Object.prototype.hasOwnProperty.call(o,a)},s.p="",s(s.s=3)}([function(r,i){r.exports=n},function(r,i,s){function o(p){return(o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g})(p)}function a(p,f){if(!(p instanceof f))throw new TypeError("Cannot call a class as a function")}function l(p,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function");p.prototype=Object.create(f&&f.prototype,{constructor:{value:p,writable:!0,configurable:!0}}),f&&u(p,f)}function u(p,f){return(u=Object.setPrototypeOf||function(_,I){return _.__proto__=I,_})(p,f)}function c(p){var f=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var _,I=h(p);if(f){var T=h(this).constructor;_=Reflect.construct(I,arguments,T)}else _=I.apply(this,arguments);return d(this,_)}}function d(p,f){return!f||o(f)!=="object"&&typeof f!="function"?function(_){if(_===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _}(p):f}function h(p){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(g){return g.__proto__||Object.getPrototypeOf(g)})(p)}var m=this&&this.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(i,"__esModule",{value:!0}),i.Background=i.Parallax=void 0;var v=m(s(0)),y=function(p){l(g,p);var f=c(g);function g(){return a(this,g),f.apply(this,arguments)}return g}(v.default.Component);i.Parallax=y;var w=function(p){l(g,p);var f=c(g);function g(){return a(this,g),f.apply(this,arguments)}return g}(v.default.Component);i.Background=w},function(r,i,s){Object.defineProperty(i,"__esModule",{value:!0}),i.canUseDOM=i.getNodeHeight=i.isScrolledIntoView=i.getWindowHeight=void 0,i.getWindowHeight=function(o){if(!o)return 0;var a=window,l=document,u=l.documentElement,c=l.getElementsByTagName("body")[0];return a.innerHeight||u.clientHeight||c.clientHeight},i.isScrolledIntoView=function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,l=arguments.length>2?arguments[2]:void 0;if(!l)return!1;var u=o.getBoundingClientRect().top-a,c=o.getBoundingClientRect().bottom+a;return u<=i.getWindowHeight(l)&&c>=0},i.getNodeHeight=function(o,a){return o?a&&"clientHeight"in a?a.clientHeight:i.getWindowHeight(o):0},i.canUseDOM=function(){return!(typeof window>"u"||!window.document||!window.document.createElement)}},function(r,i,s){var o=this&&this.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(i,"__esModule",{value:!0}),i.Background=i.Parallax=void 0;var a=o(s(4));i.Parallax=a.default;var l=o(s(7));i.Background=l.default},function(r,i,s){function o(_){return(o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T})(_)}function a(_,I){for(var T=0;T<I.length;T++){var C=I[T];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(_,C.key,C)}}function l(_,I){return(l=Object.setPrototypeOf||function(C,E){return C.__proto__=E,C})(_,I)}function u(_){var I=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var C,E=d(_);if(I){var S=d(this).constructor;C=Reflect.construct(E,arguments,S)}else C=E.apply(this,arguments);return c(this,C)}}function c(_,I){return!I||o(I)!=="object"&&typeof I!="function"?function(C){if(C===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return C}(_):I}function d(_){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(T){return T.__proto__||Object.getPrototypeOf(T)})(_)}var h=this&&this.__importDefault||function(_){return _&&_.__esModule?_:{default:_}};Object.defineProperty(i,"__esModule",{value:!0});var m=h(s(0)),v=s(1),y=s(5),w=s(2),p=h(s(6)),f={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},g=function(_){(function(E,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");E.prototype=Object.create(S&&S.prototype,{constructor:{value:E,writable:!0,configurable:!0}}),S&&l(E,S)})(T,_);var I=u(T);function T(C){var E;return function(P,L){if(!(P instanceof L))throw new TypeError("Cannot call a class as a function")}(this,T),(E=I.call(this,C)).onWindowResize=function(){E.parentHeight=w.getNodeHeight(E.canUseDOM,E.parent),E.updatePosition()},E.onWindowLoad=function(){E.updatePosition()},E.onScroll=function(){if(E.canUseDOM){var S=Date.now();S-E.timestamp>=10&&w.isScrolledIntoView(E.node,100,E.canUseDOM)&&(window.requestAnimationFrame(E.updatePosition),E.timestamp=S)}},E.onContentMount=function(S){E.content=S},E.updatePosition=function(){if(E.content){var S=!1;E.contentHeight=E.content.getBoundingClientRect().height,E.contentWidth=E.node.getBoundingClientRect().width,E.img&&E.img.naturalWidth/E.img.naturalHeight<E.contentWidth/E.getImageHeight()&&(S=!0);var P=y.getRelativePosition(E.node,E.canUseDOM),L=!!E.img,D=E.bg&&E.state.splitChildren.bgChildren.length>0;L&&E.setImagePosition(P,S),D&&E.setBackgroundPosition(P),L||D||E.setState({percentage:P})}},E.state={bgImage:C.bgImage,bgImageSrcSet:C.bgImageSrcSet,bgImageSizes:C.bgImageSizes,imgStyle:f,bgStyle:Object.assign(Object.assign({},f),C.bgStyle),percentage:0,splitChildren:y.getSplitChildren(C)},E.canUseDOM=w.canUseDOM(),E.node=null,E.content=null,E.bgImageLoaded=!1,E.bgImageRef=void 0,E.parent=C.parent,E.parentHeight=w.getNodeHeight(E.canUseDOM,E.parent),E.timestamp=Date.now(),E.isDynamicBlur=y.getHasDynamicBlur(C.blur),E}return function(E,S,P){return S&&a(E.prototype,S),P&&a(E,P),E}(T,[{key:"componentDidMount",value:function(){var E=this.props.parent,S=this.state,P=S.bgImage,L=S.bgImageSrcSet,D=S.bgImageSizes;this.parent=E||document,this.addListeners(),P?this.loadImage(P,L,D):this.updatePosition()}},{key:"componentDidUpdate",value:function(E){var S=this.props,P=S.parent,L=S.bgImage,D=S.bgImageSrcSet,F=S.bgImageSizes,K=this.state.bgImage;E.parent!==P&&(this.removeListeners(this.parent),this.parent=P,P&&this.addListeners()),this.parentHeight=w.getNodeHeight(this.canUseDOM,this.parent),K!==L&&this.loadImage(L,D,F)}},{key:"componentWillUnmount",value:function(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setBackgroundPosition",value:function(E){var S=this.props,P=S.disabled,L=S.strength,D=Object.assign({},this.state.bgStyle);if(!P){var F="translate3d(-50%, ".concat((L<0?L:0)-L*E,"px, 0)");D.WebkitTransform=F,D.transform=F}this.setState({bgStyle:D,percentage:E})}},{key:"setImagePosition",value:function(E){var S=arguments.length>1&&arguments[1]!==void 0&&arguments[1],P=this.props,L=P.disabled,D=P.strength,F=P.blur,K=S?"auto":"".concat(this.getImageHeight(),"px"),he=S?"".concat(this.contentWidth,"px"):"auto",ee=Object.assign(Object.assign({},this.state.imgStyle),{height:K,width:he});if(!L){var Re=D<0,O=(Re?D:0)-D*E,W="translate3d(-50%, ".concat(O,"px, 0)"),B="none";F&&(B="blur(".concat(y.getBlurValue(this.isDynamicBlur,F,E),"px)")),ee.WebkitTransform=W,ee.transform=W,ee.WebkitFilter=B,ee.filter=B}this.setState({imgStyle:ee,percentage:E})}},{key:"getImageHeight",value:function(){var E=this.props.strength,S=(E<0?2.5:1)*Math.abs(E);return Math.floor(this.contentHeight+S)}},{key:"loadImage",value:function(E,S,P){var L=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(D){L.setState({bgImage:E,bgImageSrcSet:S,bgImageSizes:P},function(){return L.updatePosition()}),L.props.onLoad&&L.props.onLoad(D)},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=E,this.bgImageRef.srcset=S||"",this.bgImageRef.sizes=P||""}},{key:"releaseImage",value:function(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"addListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function(E){this.canUseDOM&&(E&&E.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"render",value:function(){var E=this,S=this.props,P=S.className,L=S.style,D=S.bgClassName,F=S.contentClassName,K=S.bgImageAlt,he=S.renderLayer,ee=S.bgImageStyle,Re=S.lazy,O=this.state,W=O.bgImage,B=O.bgImageSrcSet,de=O.bgImageSizes,we=O.percentage,Zt=O.imgStyle,Ze=O.bgStyle,Ut=O.splitChildren;return m.default.createElement("div",{className:"react-parallax ".concat(P),style:Object.assign({position:"relative",overflow:"hidden"},L),ref:function(Me){E.node=Me}},W?m.default.createElement("img",{className:D,src:W,srcSet:B,sizes:de,ref:function(Me){E.img=Me},alt:K,style:Object.assign(Object.assign({},Zt),ee),loading:Re?"lazy":"eager"}):null,he?he(-(we-1)):null,Ut.bgChildren.length>0?m.default.createElement("div",{className:"react-parallax-background-children",ref:function(Me){E.bg=Me},style:Ze},Ut.bgChildren):null,m.default.createElement(p.default,{onMount:this.onContentMount,className:F},Ut.children))}}],[{key:"getDerivedStateFromProps",value:function(E){return{splitChildren:y.getSplitChildren(E)}}}]),T}(v.Parallax);g.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",contentClassName:"",disabled:!1,strength:100},i.default=g},function(r,i,s){function o(u){return(o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d})(u)}Object.defineProperty(i,"__esModule",{value:!0}),i.setBlur=i.getBlurValue=i.getHasDynamicBlur=i.getSplitChildren=i.getRelativePosition=i.getPercentage=void 0;var a=s(0),l=s(2);i.getPercentage=function(u,c,d){return(d-u)/(c-u)||0},i.getRelativePosition=function(u,c){if(!c)return 0;var d=u.getBoundingClientRect(),h=d.top,m=d.height,v=l.getNodeHeight(c),y=m>v?m:v,w=Math.round(h>y?y:h);return i.getPercentage(0,y,w)},i.getSplitChildren=function(u){var c=[],d=a.Children.toArray(u.children);return d.forEach(function(h,m){var v=h;v.type&&v.type.isParallaxBackground&&(c=c.concat(d.splice(m,1)))}),{bgChildren:c,children:d}},i.getHasDynamicBlur=function(u){return o(u)==="object"&&u.min!==void 0&&u.max!==void 0},i.getBlurValue=function(u,c,d){return u?c.min+(1-d)*c.max:c},i.setBlur=function(u,c){u.style.webkitFilter="blur(".concat(c,"px)"),u.style.filter="blur(".concat(c,"px)")}},function(r,i,s){var o=this&&this.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(i,"__esModule",{value:!0});var a=o(s(0));i.default=function(u){var c=u.children,d=u.onMount,h=u.className;return a.default.createElement("div",{ref:function(v){return d(v)},className:h||"react-parallax-content",style:{position:"relative"}},c)}},function(r,i,s){function o(w){return(o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f})(w)}function a(w,p){if(!(w instanceof p))throw new TypeError("Cannot call a class as a function")}function l(w,p){for(var f=0;f<p.length;f++){var g=p[f];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(w,g.key,g)}}function u(w,p){return(u=Object.setPrototypeOf||function(g,_){return g.__proto__=_,g})(w,p)}function c(w){var p=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var g,_=h(w);if(p){var I=h(this).constructor;g=Reflect.construct(_,arguments,I)}else g=_.apply(this,arguments);return d(this,g)}}function d(w,p){return!p||o(p)!=="object"&&typeof p!="function"?function(g){if(g===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g}(w):p}function h(w){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(f){return f.__proto__||Object.getPrototypeOf(f)})(w)}var m=this&&this.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(i,"__esModule",{value:!0});var v=m(s(0)),y=function(w){(function(_,I){if(typeof I!="function"&&I!==null)throw new TypeError("Super expression must either be null or a function");_.prototype=Object.create(I&&I.prototype,{constructor:{value:_,writable:!0,configurable:!0}}),I&&u(_,I)})(f,w);var p=c(f);function f(){return a(this,f),p.apply(this,arguments)}return function(_,I,T){return I&&l(_.prototype,I),T&&l(_,T),_}(f,[{key:"render",value:function(){var _=this.props,I=_.className,T=_.children;return v.default.createElement("div",{className:"react-parallax-background ".concat(I)},T)}}]),f}(s(1).Background);y.defaultProps={className:""},y.isParallaxBackground=!0,i.default=y}])})})(Jw);var xg=Jw.exports;const Og="/AKKS/assets/akks-holding-eiendom-as-high-resolution-logo-color-on-transparent-background-abe5c3df.webp",Ag="/AKKS/assets/avi-waxman-f9qZuKoZYoY-unsplash-c408f03e.webp";function Ec(t){return k.jsxs("div",{className:M.card,children:[k.jsx("img",{src:t.imgname,className:M.cardHouse}),k.jsx("p",{className:M.cardPara,children:t.para}),k.jsx("h1",{className:M.cardTitle,children:t.title})]})}const Lg="/AKKS/assets/house1-3fb7a555.webp",NA="/AKKS/assets/house3-528c21ac.webp",bA="/AKKS/assets/mm-4ab36aed.webp";function xA(t){return k.jsxs("div",{className:M.textContainer,children:[k.jsxs("div",{className:M.textCard,children:[k.jsx("p",{className:M.textCardStyle,children:t.para}),k.jsxs("div",{className:M.textCardFlex,children:[k.jsx("img",{className:M.pictureblock,src:t.imgname}),k.jsx("div",{className:M.invisblock})]})]}),k.jsx("div",{className:M.asd})]})}var Xw={exports:{}};(function(t,e){(function(r,i){t.exports=i(R)})(Mg,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(a,l)=>{l.match=v,l.parse=y;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,c=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,d=/^(?:(min|max)-)?(.+)/,h=/(em|rem|px|cm|mm|in|pt|pc)?$/,m=/(dpi|dpcm|dppx)?$/;function v(g,_){return y(g).some(function(I){var T=I.inverse,C=I.type==="all"||_.type===I.type;if(C&&T||!(C||T))return!1;var E=I.expressions.every(function(S){var P=S.feature,L=S.modifier,D=S.value,F=_[P];if(!F)return!1;switch(P){case"orientation":case"scan":return F.toLowerCase()===D.toLowerCase();case"width":case"height":case"device-width":case"device-height":D=f(D),F=f(F);break;case"resolution":D=p(D),F=p(F);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":D=w(D),F=w(F);break;case"grid":case"color":case"color-index":case"monochrome":D=parseInt(D,10)||1,F=parseInt(F,10)||0;break}switch(L){case"min":return F>=D;case"max":return F<=D;default:return F===D}});return E&&!T||!E&&T})}function y(g){return g.split(",").map(function(_){_=_.trim();var I=_.match(u),T=I[1],C=I[2],E=I[3]||"",S={};return S.inverse=!!T&&T.toLowerCase()==="not",S.type=C?C.toLowerCase():"all",E=E.match(/\([^\)]+\)/g)||[],S.expressions=E.map(function(P){var L=P.match(c),D=L[1].toLowerCase().match(d);return{modifier:D[1],feature:D[2],value:L[2]}}),S})}function w(g){var _=Number(g),I;return _||(I=g.match(/^(\d+)\s*\/\s*(\d+)$/),_=I[1]/I[2]),_}function p(g){var _=parseFloat(g),I=String(g).match(m)[1];switch(I){case"dpcm":return _/2.54;case"dppx":return _*96;default:return _}}function f(g){var _=parseFloat(g),I=String(g).match(h)[1];switch(I){case"em":return _*16;case"rem":return _*16;case"cm":return _*96/2.54;case"mm":return _*96/2.54/10;case"in":return _*96;case"pt":return _*72;case"pc":return _*72/12;default:return _}}},"./node_modules/hyphenate-style-name/index.js":(a,l,u)=>{u.r(l),u.d(l,{default:()=>y});var c=/[A-Z]/g,d=/^ms-/,h={};function m(w){return"-"+w.toLowerCase()}function v(w){if(h.hasOwnProperty(w))return h[w];var p=w.replace(c,m);return h[w]=d.test(p)?"-"+p:p}const y=v},"./node_modules/matchmediaquery/index.js":(a,l,u)=>{var c=u("./node_modules/css-mediaquery/index.js").match,d=typeof window<"u"?window.matchMedia:null;function h(v,y,w){var p=this;if(d&&!w){var f=d.call(window,v);this.matches=f.matches,this.media=f.media,f.addListener(I)}else this.matches=c(v,y),this.media=v;this.addListener=g,this.removeListener=_,this.dispose=T;function g(C){f&&f.addListener(C)}function _(C){f&&f.removeListener(C)}function I(C){p.matches=C.matches,p.media=C.media}function T(){f&&f.removeListener(I)}}function m(v,y,w){return new h(v,y,w)}a.exports=m},"./node_modules/object-assign/index.js":a=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function d(m){if(m==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(m)}function h(){try{if(!Object.assign)return!1;var m=new String("abc");if(m[5]="de",Object.getOwnPropertyNames(m)[0]==="5")return!1;for(var v={},y=0;y<10;y++)v["_"+String.fromCharCode(y)]=y;var w=Object.getOwnPropertyNames(v).map(function(f){return v[f]});if(w.join("")!=="0123456789")return!1;var p={};return"abcdefghijklmnopqrst".split("").forEach(function(f){p[f]=f}),Object.keys(Object.assign({},p)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}a.exports=h()?Object.assign:function(m,v){for(var y,w=d(m),p,f=1;f<arguments.length;f++){y=Object(arguments[f]);for(var g in y)u.call(y,g)&&(w[g]=y[g]);if(l){p=l(y);for(var _=0;_<p.length;_++)c.call(y,p[_])&&(w[p[_]]=y[p[_]])}}return w}},"./node_modules/prop-types/checkPropTypes.js":(a,l,u)=>{var c=function(){};{var d=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),h={},m=u("./node_modules/prop-types/lib/has.js");c=function(y){var w="Warning: "+y;typeof console<"u"&&console.error(w);try{throw new Error(w)}catch{}}}function v(y,w,p,f,g){for(var _ in y)if(m(y,_)){var I;try{if(typeof y[_]!="function"){var T=Error((f||"React class")+": "+p+" type `"+_+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof y[_]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw T.name="Invariant Violation",T}I=y[_](w,_,f,p,null,d)}catch(E){I=E}if(I&&!(I instanceof Error)&&c((f||"React class")+": type specification of "+p+" `"+_+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof I+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),I instanceof Error&&!(I.message in h)){h[I.message]=!0;var C=g?g():"";c("Failed "+p+" type: "+I.message+(C??""))}}}v.resetWarningCache=function(){h={}},a.exports=v},"./node_modules/prop-types/factoryWithTypeCheckers.js":(a,l,u)=>{var c=u("./node_modules/react-is/index.js"),d=u("./node_modules/object-assign/index.js"),h=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),m=u("./node_modules/prop-types/lib/has.js"),v=u("./node_modules/prop-types/checkPropTypes.js"),y=function(){};y=function(p){var f="Warning: "+p;typeof console<"u"&&console.error(f);try{throw new Error(f)}catch{}};function w(){return null}a.exports=function(p,f){var g=typeof Symbol=="function"&&Symbol.iterator,_="@@iterator";function I(A){var z=A&&(g&&A[g]||A[_]);if(typeof z=="function")return z}var T="<<anonymous>>",C={array:L("array"),bigint:L("bigint"),bool:L("boolean"),func:L("function"),number:L("number"),object:L("object"),string:L("string"),symbol:L("symbol"),any:D(),arrayOf:F,element:K(),elementType:he(),instanceOf:ee,node:B(),objectOf:O,oneOf:Re,oneOfType:W,shape:we,exact:Zt};function E(A,z){return A===z?A!==0||1/A===1/z:A!==A&&z!==z}function S(A,z){this.message=A,this.data=z&&typeof z=="object"?z:{},this.stack=""}S.prototype=Error.prototype;function P(A){var z={},te=0;function J(re,Y,X,ie,ae,se,U){if(ie=ie||T,se=se||X,U!==h){if(f){var We=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw We.name="Invariant Violation",We}else if(typeof console<"u"){var jt=ie+":"+X;!z[jt]&&te<3&&(y("You are manually calling a React.PropTypes validation function for the `"+se+"` prop on `"+ie+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),z[jt]=!0,te++)}}return Y[X]==null?re?Y[X]===null?new S("The "+ae+" `"+se+"` is marked as required "+("in `"+ie+"`, but its value is `null`.")):new S("The "+ae+" `"+se+"` is marked as required in "+("`"+ie+"`, but its value is `undefined`.")):null:A(Y,X,ie,ae,se)}var V=J.bind(null,!1);return V.isRequired=J.bind(null,!0),V}function L(A){function z(te,J,V,re,Y,X){var ie=te[J],ae=Pe(ie);if(ae!==A){var se=Me(ie);return new S("Invalid "+re+" `"+Y+"` of type "+("`"+se+"` supplied to `"+V+"`, expected ")+("`"+A+"`."),{expectedType:A})}return null}return P(z)}function D(){return P(w)}function F(A){function z(te,J,V,re,Y){if(typeof A!="function")return new S("Property `"+Y+"` of component `"+V+"` has invalid PropType notation inside arrayOf.");var X=te[J];if(!Array.isArray(X)){var ie=Pe(X);return new S("Invalid "+re+" `"+Y+"` of type "+("`"+ie+"` supplied to `"+V+"`, expected an array."))}for(var ae=0;ae<X.length;ae++){var se=A(X,ae,V,re,Y+"["+ae+"]",h);if(se instanceof Error)return se}return null}return P(z)}function K(){function A(z,te,J,V,re){var Y=z[te];if(!p(Y)){var X=Pe(Y);return new S("Invalid "+V+" `"+re+"` of type "+("`"+X+"` supplied to `"+J+"`, expected a single ReactElement."))}return null}return P(A)}function he(){function A(z,te,J,V,re){var Y=z[te];if(!c.isValidElementType(Y)){var X=Pe(Y);return new S("Invalid "+V+" `"+re+"` of type "+("`"+X+"` supplied to `"+J+"`, expected a single ReactElement type."))}return null}return P(A)}function ee(A){function z(te,J,V,re,Y){if(!(te[J]instanceof A)){var X=A.name||T,ie=qo(te[J]);return new S("Invalid "+re+" `"+Y+"` of type "+("`"+ie+"` supplied to `"+V+"`, expected ")+("instance of `"+X+"`."))}return null}return P(z)}function Re(A){if(!Array.isArray(A))return arguments.length>1?y("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):y("Invalid argument supplied to oneOf, expected an array."),w;function z(te,J,V,re,Y){for(var X=te[J],ie=0;ie<A.length;ie++)if(E(X,A[ie]))return null;var ae=JSON.stringify(A,function(U,We){var jt=Me(We);return jt==="symbol"?String(We):We});return new S("Invalid "+re+" `"+Y+"` of value `"+String(X)+"` "+("supplied to `"+V+"`, expected one of "+ae+"."))}return P(z)}function O(A){function z(te,J,V,re,Y){if(typeof A!="function")return new S("Property `"+Y+"` of component `"+V+"` has invalid PropType notation inside objectOf.");var X=te[J],ie=Pe(X);if(ie!=="object")return new S("Invalid "+re+" `"+Y+"` of type "+("`"+ie+"` supplied to `"+V+"`, expected an object."));for(var ae in X)if(m(X,ae)){var se=A(X,ae,V,re,Y+"."+ae,h);if(se instanceof Error)return se}return null}return P(z)}function W(A){if(!Array.isArray(A))return y("Invalid argument supplied to oneOfType, expected an instance of array."),w;for(var z=0;z<A.length;z++){var te=A[z];if(typeof te!="function")return y("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Su(te)+" at index "+z+"."),w}function J(V,re,Y,X,ie){for(var ae=[],se=0;se<A.length;se++){var U=A[se],We=U(V,re,Y,X,ie,h);if(We==null)return null;We.data&&m(We.data,"expectedType")&&ae.push(We.data.expectedType)}var jt=ae.length>0?", expected one of type ["+ae.join(", ")+"]":"";return new S("Invalid "+X+" `"+ie+"` supplied to "+("`"+Y+"`"+jt+"."))}return P(J)}function B(){function A(z,te,J,V,re){return Ze(z[te])?null:new S("Invalid "+V+" `"+re+"` supplied to "+("`"+J+"`, expected a ReactNode."))}return P(A)}function de(A,z,te,J,V){return new S((A||"React class")+": "+z+" type `"+te+"."+J+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+V+"`.")}function we(A){function z(te,J,V,re,Y){var X=te[J],ie=Pe(X);if(ie!=="object")return new S("Invalid "+re+" `"+Y+"` of type `"+ie+"` "+("supplied to `"+V+"`, expected `object`."));for(var ae in A){var se=A[ae];if(typeof se!="function")return de(V,re,Y,ae,Me(se));var U=se(X,ae,V,re,Y+"."+ae,h);if(U)return U}return null}return P(z)}function Zt(A){function z(te,J,V,re,Y){var X=te[J],ie=Pe(X);if(ie!=="object")return new S("Invalid "+re+" `"+Y+"` of type `"+ie+"` "+("supplied to `"+V+"`, expected `object`."));var ae=d({},te[J],A);for(var se in ae){var U=A[se];if(m(A,se)&&typeof U!="function")return de(V,re,Y,se,Me(U));if(!U)return new S("Invalid "+re+" `"+Y+"` key `"+se+"` supplied to `"+V+"`.\nBad object: "+JSON.stringify(te[J],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(A),null,"  "));var We=U(X,se,V,re,Y+"."+se,h);if(We)return We}return null}return P(z)}function Ze(A){switch(typeof A){case"number":case"string":case"undefined":return!0;case"boolean":return!A;case"object":if(Array.isArray(A))return A.every(Ze);if(A===null||p(A))return!0;var z=I(A);if(z){var te=z.call(A),J;if(z!==A.entries){for(;!(J=te.next()).done;)if(!Ze(J.value))return!1}else for(;!(J=te.next()).done;){var V=J.value;if(V&&!Ze(V[1]))return!1}}else return!1;return!0;default:return!1}}function Ut(A,z){return A==="symbol"?!0:z?z["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&z instanceof Symbol:!1}function Pe(A){var z=typeof A;return Array.isArray(A)?"array":A instanceof RegExp?"object":Ut(z,A)?"symbol":z}function Me(A){if(typeof A>"u"||A===null)return""+A;var z=Pe(A);if(z==="object"){if(A instanceof Date)return"date";if(A instanceof RegExp)return"regexp"}return z}function Su(A){var z=Me(A);switch(z){case"array":case"object":return"an "+z;case"boolean":case"date":case"regexp":return"a "+z;default:return z}}function qo(A){return!A.constructor||!A.constructor.name?T:A.constructor.name}return C.checkPropTypes=v,C.resetWarningCache=v.resetWarningCache,C.PropTypes=C,C}},"./node_modules/prop-types/index.js":(a,l,u)=>{{var c=u("./node_modules/react-is/index.js"),d=!0;a.exports=u("./node_modules/prop-types/factoryWithTypeCheckers.js")(c.isElement,d)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":a=>{var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";a.exports=l},"./node_modules/prop-types/lib/has.js":a=>{a.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(a,l)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var u=typeof Symbol=="function"&&Symbol.for,c=u?Symbol.for("react.element"):60103,d=u?Symbol.for("react.portal"):60106,h=u?Symbol.for("react.fragment"):60107,m=u?Symbol.for("react.strict_mode"):60108,v=u?Symbol.for("react.profiler"):60114,y=u?Symbol.for("react.provider"):60109,w=u?Symbol.for("react.context"):60110,p=u?Symbol.for("react.async_mode"):60111,f=u?Symbol.for("react.concurrent_mode"):60111,g=u?Symbol.for("react.forward_ref"):60112,_=u?Symbol.for("react.suspense"):60113,I=u?Symbol.for("react.suspense_list"):60120,T=u?Symbol.for("react.memo"):60115,C=u?Symbol.for("react.lazy"):60116,E=u?Symbol.for("react.block"):60121,S=u?Symbol.for("react.fundamental"):60117,P=u?Symbol.for("react.responder"):60118,L=u?Symbol.for("react.scope"):60119;function D(U){return typeof U=="string"||typeof U=="function"||U===h||U===f||U===v||U===m||U===_||U===I||typeof U=="object"&&U!==null&&(U.$$typeof===C||U.$$typeof===T||U.$$typeof===y||U.$$typeof===w||U.$$typeof===g||U.$$typeof===S||U.$$typeof===P||U.$$typeof===L||U.$$typeof===E)}function F(U){if(typeof U=="object"&&U!==null){var We=U.$$typeof;switch(We){case c:var jt=U.type;switch(jt){case p:case f:case h:case v:case m:case _:return jt;default:var Qf=jt&&jt.$$typeof;switch(Qf){case w:case g:case C:case T:case y:return Qf;default:return We}}case d:return We}}}var K=p,he=f,ee=w,Re=y,O=c,W=g,B=h,de=C,we=T,Zt=d,Ze=v,Ut=m,Pe=_,Me=!1;function Su(U){return Me||(Me=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),qo(U)||F(U)===p}function qo(U){return F(U)===f}function A(U){return F(U)===w}function z(U){return F(U)===y}function te(U){return typeof U=="object"&&U!==null&&U.$$typeof===c}function J(U){return F(U)===g}function V(U){return F(U)===h}function re(U){return F(U)===C}function Y(U){return F(U)===T}function X(U){return F(U)===d}function ie(U){return F(U)===v}function ae(U){return F(U)===m}function se(U){return F(U)===_}l.AsyncMode=K,l.ConcurrentMode=he,l.ContextConsumer=ee,l.ContextProvider=Re,l.Element=O,l.ForwardRef=W,l.Fragment=B,l.Lazy=de,l.Memo=we,l.Portal=Zt,l.Profiler=Ze,l.StrictMode=Ut,l.Suspense=Pe,l.isAsyncMode=Su,l.isConcurrentMode=qo,l.isContextConsumer=A,l.isContextProvider=z,l.isElement=te,l.isForwardRef=J,l.isFragment=V,l.isLazy=re,l.isMemo=Y,l.isPortal=X,l.isProfiler=ie,l.isStrictMode=ae,l.isSuspense=se,l.isValidElementType=D,l.typeOf=F})()},"./node_modules/react-is/index.js":(a,l,u)=>{a.exports=u("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(a,l,u)=>{u.r(l),u.d(l,{shallowEqualArrays:()=>d,shallowEqualObjects:()=>c});function c(h,m){if(h===m)return!0;if(!h||!m)return!1;var v=Object.keys(h),y=Object.keys(m),w=v.length;if(y.length!==w)return!1;for(var p=0;p<w;p++){var f=v[p];if(h[f]!==m[f]||!Object.prototype.hasOwnProperty.call(m,f))return!1}return!0}function d(h,m){if(h===m)return!0;if(!h||!m)return!1;var v=h.length;if(m.length!==v)return!1;for(var y=0;y<v;y++)if(h[y]!==m[y])return!1;return!0}},"./src/Component.ts":function(a,l,u){var c=this&&this.__rest||function(v,y){var w={};for(var p in v)Object.prototype.hasOwnProperty.call(v,p)&&y.indexOf(p)<0&&(w[p]=v[p]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,p=Object.getOwnPropertySymbols(v);f<p.length;f++)y.indexOf(p[f])<0&&Object.prototype.propertyIsEnumerable.call(v,p[f])&&(w[p[f]]=v[p[f]]);return w},d=this&&this.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(l,"__esModule",{value:!0});var h=d(u("./src/useMediaQuery.ts")),m=function(v){var y=v.children,w=v.device,p=v.onChange,f=c(v,["children","device","onChange"]),g=(0,h.default)(f,w,p);return typeof y=="function"?y(g):g?y:null};l.default=m},"./src/Context.ts":(a,l,u)=>{Object.defineProperty(l,"__esModule",{value:!0});var c=u("react"),d=(0,c.createContext)(void 0);l.default=d},"./src/index.ts":function(a,l,u){var c=this&&this.__importDefault||function(y){return y&&y.__esModule?y:{default:y}};Object.defineProperty(l,"__esModule",{value:!0}),l.Context=l.toQuery=l.useMediaQuery=l.default=void 0;var d=c(u("./src/useMediaQuery.ts"));l.useMediaQuery=d.default;var h=c(u("./src/Component.ts"));l.default=h.default;var m=c(u("./src/toQuery.ts"));l.toQuery=m.default;var v=c(u("./src/Context.ts"));l.Context=v.default},"./src/mediaQuery.ts":function(a,l,u){var c=this&&this.__assign||function(){return c=Object.assign||function(_){for(var I,T=1,C=arguments.length;T<C;T++){I=arguments[T];for(var E in I)Object.prototype.hasOwnProperty.call(I,E)&&(_[E]=I[E])}return _},c.apply(this,arguments)},d=this&&this.__rest||function(_,I){var T={};for(var C in _)Object.prototype.hasOwnProperty.call(_,C)&&I.indexOf(C)<0&&(T[C]=_[C]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,C=Object.getOwnPropertySymbols(_);E<C.length;E++)I.indexOf(C[E])<0&&Object.prototype.propertyIsEnumerable.call(_,C[E])&&(T[C[E]]=_[C[E]]);return T},h=this&&this.__importDefault||function(_){return _&&_.__esModule?_:{default:_}};Object.defineProperty(l,"__esModule",{value:!0});var m=h(u("./node_modules/prop-types/index.js")),v=m.default.oneOfType([m.default.string,m.default.number]),y={all:m.default.bool,grid:m.default.bool,aural:m.default.bool,braille:m.default.bool,handheld:m.default.bool,print:m.default.bool,projection:m.default.bool,screen:m.default.bool,tty:m.default.bool,tv:m.default.bool,embossed:m.default.bool},w={orientation:m.default.oneOf(["portrait","landscape"]),scan:m.default.oneOf(["progressive","interlace"]),aspectRatio:m.default.string,deviceAspectRatio:m.default.string,height:v,deviceHeight:v,width:v,deviceWidth:v,color:m.default.bool,colorIndex:m.default.bool,monochrome:m.default.bool,resolution:v,type:Object.keys(y)};w.type;var p=d(w,["type"]),f=c({minAspectRatio:m.default.string,maxAspectRatio:m.default.string,minDeviceAspectRatio:m.default.string,maxDeviceAspectRatio:m.default.string,minHeight:v,maxHeight:v,minDeviceHeight:v,maxDeviceHeight:v,minWidth:v,maxWidth:v,minDeviceWidth:v,maxDeviceWidth:v,minColor:m.default.number,maxColor:m.default.number,minColorIndex:m.default.number,maxColorIndex:m.default.number,minMonochrome:m.default.number,maxMonochrome:m.default.number,minResolution:v,maxResolution:v},p),g=c(c({},y),f);l.default={all:g,types:y,matchers:w,features:f}},"./src/toQuery.ts":function(a,l,u){var c=this&&this.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(l,"__esModule",{value:!0});var d=c(u("./node_modules/hyphenate-style-name/index.js")),h=c(u("./src/mediaQuery.ts")),m=function(p){return"not ".concat(p)},v=function(p,f){var g=(0,d.default)(p);return typeof f=="number"&&(f="".concat(f,"px")),f===!0?g:f===!1?m(g):"(".concat(g,": ").concat(f,")")},y=function(p){return p.join(" and ")},w=function(p){var f=[];return Object.keys(h.default.all).forEach(function(g){var _=p[g];_!=null&&f.push(v(g,_))}),y(f)};l.default=w},"./src/useMediaQuery.ts":function(a,l,u){var c=this&&this.__importDefault||function(S){return S&&S.__esModule?S:{default:S}};Object.defineProperty(l,"__esModule",{value:!0});var d=u("react"),h=c(u("./node_modules/matchmediaquery/index.js")),m=c(u("./node_modules/hyphenate-style-name/index.js")),v=u("./node_modules/shallow-equal/dist/index.esm.js"),y=c(u("./src/toQuery.ts")),w=c(u("./src/Context.ts")),p=function(S){return S.query||(0,y.default)(S)},f=function(S){if(S){var P=Object.keys(S);return P.reduce(function(L,D){return L[(0,m.default)(D)]=S[D],L},{})}},g=function(){var S=(0,d.useRef)(!1);return(0,d.useEffect)(function(){S.current=!0},[]),S.current},_=function(S){var P=(0,d.useContext)(w.default),L=function(){return f(S)||f(P)},D=(0,d.useState)(L),F=D[0],K=D[1];return(0,d.useEffect)(function(){var he=L();(0,v.shallowEqualObjects)(F,he)||K(he)},[S,P]),F},I=function(S){var P=function(){return p(S)},L=(0,d.useState)(P),D=L[0],F=L[1];return(0,d.useEffect)(function(){var K=P();D!==K&&F(K)},[S]),D},T=function(S,P){var L=function(){return(0,h.default)(S,P||{},!!P)},D=(0,d.useState)(L),F=D[0],K=D[1],he=g();return(0,d.useEffect)(function(){if(he){var ee=L();return K(ee),function(){ee&&ee.dispose()}}},[S,P]),F},C=function(S){var P=(0,d.useState)(S.matches),L=P[0],D=P[1];return(0,d.useEffect)(function(){var F=function(K){D(K.matches)};return S.addListener(F),D(S.matches),function(){S.removeListener(F)}},[S]),L},E=function(S,P,L){var D=_(P),F=I(S);if(!F)throw new Error("Invalid or missing MediaQuery!");var K=T(F,D),he=C(K),ee=g();return(0,d.useEffect)(function(){ee&&L&&L(he)},[he]),(0,d.useEffect)(function(){return function(){K&&K.dispose()}},[]),he};l.default=E},react:a=>{a.exports=n}},i={};function s(a){var l=i[a];if(l!==void 0)return l.exports;var u=i[a]={exports:{}};return r[a].call(u.exports,u,u.exports,s),u.exports}s.d=(a,l)=>{for(var u in l)s.o(l,u)&&!s.o(a,u)&&Object.defineProperty(a,u,{enumerable:!0,get:l[u]})},s.o=(a,l)=>Object.prototype.hasOwnProperty.call(a,l),s.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var o=s("./src/index.ts");return o})())})(Xw);var OA=Xw.exports;const Dg=Fg(OA);function AA(){return k.jsx("div",{children:k.jsxs("div",{className:M.container,children:[k.jsxs("div",{className:M.hero,children:[k.jsx(Dg,{maxWidth:600,children:k.jsx(xg.Parallax,{blur:0,bgImage:Ag,bgImageAlt:"sky photo over some houses",strength:100,children:k.jsx("div",{className:M.paracontainer,children:k.jsx("div",{className:M.header,children:k.jsx("img",{src:Og,className:M.logo})})})})}),k.jsx(Dg,{minWidth:600,children:k.jsx(xg.Parallax,{blur:0,bgImage:Ag,bgImageAlt:"sky photo over some houses",strength:300,children:k.jsx("div",{className:M.paracontainer,children:k.jsx("div",{className:M.header,children:k.jsx("img",{src:Og,className:M.logo})})})})})]}),k.jsxs("div",{children:[k.jsxs("div",{className:M.cardContainer,children:[k.jsx(Ec,{imgname:Lg,title:"Buy a Home",para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ut quia sapiente ea minima."}),k.jsx(Ec,{imgname:Lg,title:"Sell a Home",para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ut quia sapiente ea minima."}),k.jsx(Ec,{imgname:NA,title:"Rent a Home",para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ut quia sapiente ea minima."})]}),k.jsx(xA,{para:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero error non dignissimos ex repellendus, eum, porro nihil quidem iusto veniam fugiat libero delectus natus quod! Nemo quo deleniti nihil minus?",imgname:bA})]})]})})}const LA="/AKKS/assets/underconstruction-0620185d.webp";function DA(){return k.jsxs("div",{className:M.newscontainer,children:[k.jsx("h1",{className:M.underconst,children:"This part of the website is under construction."}),k.jsx("img",{src:LA,className:M.underConstruction})]})}var MA={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function FA(t){if(typeof t=="number")return{value:t,unit:"px"};var e,n=(t.match(/^[0-9.]*/)||"").toString();n.includes(".")?e=parseFloat(n):e=parseInt(n,10);var r=(t.match(/[^0-9]*$/)||"").toString();return MA[r]?{value:e,unit:r}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}function va(t){var e=FA(t);return"".concat(e.value).concat(e.unit)}var UA=function(t,e,n){var r="react-spinners-".concat(t,"-").concat(n);if(typeof window>"u"||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var s=i.sheet,o=`
    @keyframes `.concat(r,` {
      `).concat(e,`
    }
  `);return s&&s.insertRule(o,0),r},Ol=globalThis&&globalThis.__assign||function(){return Ol=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Ol.apply(this,arguments)},jA=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n},zA=UA("BounceLoader","0% {transform: scale(0)} 50% {transform: scale(1.0)} 100% {transform: scale(0)}","bounce");function WA(t){var e=t.loading,n=e===void 0?!0:e,r=t.color,i=r===void 0?"#000000":r,s=t.speedMultiplier,o=s===void 0?1:s,a=t.cssOverride,l=a===void 0?{}:a,u=t.size,c=u===void 0?60:u,d=jA(t,["loading","color","speedMultiplier","cssOverride","size"]),h=function(v){var y=v===1?"".concat(1/o,"s"):"0s";return{position:"absolute",height:va(c),width:va(c),backgroundColor:i,borderRadius:"100%",opacity:.6,top:0,left:0,animationFillMode:"both",animation:"".concat(zA," ").concat(2.1/o,"s ").concat(y," infinite ease-in-out")}},m=Ol({display:"inherit",position:"relative",width:va(c),height:va(c)},l);return n?R.createElement("span",Ol({style:m},d),R.createElement("span",{style:h(1)}),R.createElement("span",{style:h(2)})):null}const BA=()=>{const[t,e]=R.useState(!1),[n,r]=R.useState(""),[i,s]=R.useState(""),o=a=>{if(a.preventDefault(),!n||!i){le.error("Please fill in all fields");return}e(!0);const u=`mailto:akksbusinessinquiry@gmail.com?subject=${encodeURIComponent(n)}&body=${encodeURIComponent(i)}`;window.open(u),setTimeout(()=>{window.location.href="/AKKS/"},3e3)};return k.jsxs("div",{className:M.contactform,children:[k.jsx("h1",{className:M.contacttitle,children:"Contact Us"}),k.jsxs("form",{className:M.contactform2,onSubmit:o,children:[k.jsx("input",{className:M.contactsubject,type:"text",placeholder:"Subject",value:n,onChange:a=>r(a.target.value)}),k.jsx("textarea",{className:M.contactmessage,placeholder:"Message",value:i,onChange:a=>s(a.target.value)}),k.jsx("button",{className:M.contactbtn,type:"submit",children:"Send Email"})]}),t&&k.jsx(WA,{color:"#123abc",loading:t})]})},HA=()=>{const[t,e]=R.useState(""),[n,r]=R.useState(""),i=o=>{if(o.preventDefault(),!t){alert("Please enter a valid email address.");return}lb(t)?(e(""),r("Email has been added to the whitelist.")):alert("Email is already allowed.")},s=()=>{localStorage.removeItem("allowedEmails"),alert("Whitelisted emails cleared successfully."),window.location.reload()};return k.jsxs("div",{className:M.accessRequestForm,children:[k.jsxs("form",{onSubmit:i,children:[k.jsx("input",{type:"email",placeholder:"Enter email",value:t,onChange:o=>e(o.target.value)}),k.jsx("button",{type:"submit",children:"Add Email(local storage only for testing purposes)"})]}),n&&k.jsx("p",{children:n}),k.jsx("button",{type:"button",onClick:s,children:"Clear my whitelisted email and log me out"})]})};function $A(){return k.jsxs(k.Fragment,{children:[k.jsx(wS,{children:k.jsx(mS,{children:k.jsxs(jn,{path:"/AKKS",element:k.jsx(wb,{}),children:[k.jsx(jn,{index:!0,element:k.jsx(AA,{})}),k.jsx(jn,{path:"news",element:k.jsx(PA,{})}),k.jsx(jn,{path:"under",element:k.jsx(DA,{})}),k.jsx(jn,{path:"contact",element:k.jsx(BA,{})}),k.jsx(jn,{path:"acess",element:k.jsx(HA,{})}),k.jsx(jn,{path:"*",element:k.jsx("h1",{children:"404"})})]})})}),k.jsx(bd,{position:"top-right"})]})}Ic.createRoot(document.getElementById("root")).render(k.jsx($A,{}));
