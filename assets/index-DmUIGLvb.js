(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const WR="modulepreload",GR=function(n){return"/"+n},uy={},KR=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(u=>{if(u=GR(u),u in uy)return;uy[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":WR,c||(p.as="script"),p.crossOrigin="",p.href=u,a&&p.setAttribute("nonce",a),document.head.appendChild(p),c)return new Promise((m,w)=>{p.addEventListener("load",m),p.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};function HR(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var dI={exports:{}},th={},fI={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rl=Symbol.for("react.element"),QR=Symbol.for("react.portal"),YR=Symbol.for("react.fragment"),JR=Symbol.for("react.strict_mode"),XR=Symbol.for("react.profiler"),ZR=Symbol.for("react.provider"),eP=Symbol.for("react.context"),tP=Symbol.for("react.forward_ref"),nP=Symbol.for("react.suspense"),rP=Symbol.for("react.memo"),iP=Symbol.for("react.lazy"),cy=Symbol.iterator;function sP(n){return n===null||typeof n!="object"?null:(n=cy&&n[cy]||n["@@iterator"],typeof n=="function"?n:null)}var pI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mI=Object.assign,gI={};function yo(n,e,t){this.props=n,this.context=e,this.refs=gI,this.updater=t||pI}yo.prototype.isReactComponent={};yo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};yo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function _I(){}_I.prototype=yo.prototype;function Fp(n,e,t){this.props=n,this.context=e,this.refs=gI,this.updater=t||pI}var Up=Fp.prototype=new _I;Up.constructor=Fp;mI(Up,yo.prototype);Up.isPureReactComponent=!0;var hy=Array.isArray,yI=Object.prototype.hasOwnProperty,Bp={current:null},vI={key:!0,ref:!0,__self:!0,__source:!0};function wI(n,e,t){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)yI.call(e,r)&&!vI.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(n&&n.defaultProps)for(r in a=n.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Rl,type:n,key:s,ref:o,props:i,_owner:Bp.current}}function oP(n,e){return{$$typeof:Rl,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function zp(n){return typeof n=="object"&&n!==null&&n.$$typeof===Rl}function aP(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var dy=/\/+/g;function Id(n,e){return typeof n=="object"&&n!==null&&n.key!=null?aP(""+n.key):e.toString(36)}function Bu(n,e,t,r,i){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Rl:case QR:o=!0}}if(o)return o=n,i=i(o),n=r===""?"."+Id(o,0):r,hy(i)?(t="",n!=null&&(t=n.replace(dy,"$&/")+"/"),Bu(i,e,t,"",function(c){return c})):i!=null&&(zp(i)&&(i=oP(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(dy,"$&/")+"/")+n)),e.push(i)),1;if(o=0,r=r===""?".":r+":",hy(n))for(var a=0;a<n.length;a++){s=n[a];var u=r+Id(s,a);o+=Bu(s,e,t,u,i)}else if(u=sP(n),typeof u=="function")for(n=u.call(n),a=0;!(s=n.next()).done;)s=s.value,u=r+Id(s,a++),o+=Bu(s,e,t,u,i);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function mu(n,e,t){if(n==null)return n;var r=[],i=0;return Bu(n,r,"","",function(s){return e.call(t,s,i++)}),r}function lP(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var kt={current:null},zu={transition:null},uP={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:zu,ReactCurrentOwner:Bp};function II(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:mu,forEach:function(n,e,t){mu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return mu(n,function(){e++}),e},toArray:function(n){return mu(n,function(e){return e})||[]},only:function(n){if(!zp(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ne.Component=yo;ne.Fragment=YR;ne.Profiler=XR;ne.PureComponent=Fp;ne.StrictMode=JR;ne.Suspense=nP;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uP;ne.act=II;ne.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var r=mI({},n.props),i=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Bp.current),e.key!==void 0&&(i=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(u in e)yI.call(e,u)&&!vI.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Rl,type:n.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(n){return n={$$typeof:eP,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:ZR,_context:n},n.Consumer=n};ne.createElement=wI;ne.createFactory=function(n){var e=wI.bind(null,n);return e.type=n,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(n){return{$$typeof:tP,render:n}};ne.isValidElement=zp;ne.lazy=function(n){return{$$typeof:iP,_payload:{_status:-1,_result:n},_init:lP}};ne.memo=function(n,e){return{$$typeof:rP,type:n,compare:e===void 0?null:e}};ne.startTransition=function(n){var e=zu.transition;zu.transition={};try{n()}finally{zu.transition=e}};ne.unstable_act=II;ne.useCallback=function(n,e){return kt.current.useCallback(n,e)};ne.useContext=function(n){return kt.current.useContext(n)};ne.useDebugValue=function(){};ne.useDeferredValue=function(n){return kt.current.useDeferredValue(n)};ne.useEffect=function(n,e){return kt.current.useEffect(n,e)};ne.useId=function(){return kt.current.useId()};ne.useImperativeHandle=function(n,e,t){return kt.current.useImperativeHandle(n,e,t)};ne.useInsertionEffect=function(n,e){return kt.current.useInsertionEffect(n,e)};ne.useLayoutEffect=function(n,e){return kt.current.useLayoutEffect(n,e)};ne.useMemo=function(n,e){return kt.current.useMemo(n,e)};ne.useReducer=function(n,e,t){return kt.current.useReducer(n,e,t)};ne.useRef=function(n){return kt.current.useRef(n)};ne.useState=function(n){return kt.current.useState(n)};ne.useSyncExternalStore=function(n,e,t){return kt.current.useSyncExternalStore(n,e,t)};ne.useTransition=function(){return kt.current.useTransition()};ne.version="18.3.1";fI.exports=ne;var jp=fI.exports;const cP=HR(jp);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hP=jp,dP=Symbol.for("react.element"),fP=Symbol.for("react.fragment"),pP=Object.prototype.hasOwnProperty,mP=hP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gP={key:!0,ref:!0,__self:!0,__source:!0};function EI(n,e,t){var r,i={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)pP.call(e,r)&&!gP.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:dP,type:n,key:s,ref:o,props:i,_owner:mP.current}}th.Fragment=fP;th.jsx=EI;th.jsxs=EI;dI.exports=th;var Ko=dI.exports,cf={},TI={exports:{}},Ht={},SI={exports:{}},AI={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(W,J){var ee=W.length;W.push(J);e:for(;0<ee;){var Ae=ee-1>>>1,de=W[Ae];if(0<i(de,J))W[Ae]=J,W[ee]=de,ee=Ae;else break e}}function t(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var J=W[0],ee=W.pop();if(ee!==J){W[0]=ee;e:for(var Ae=0,de=W.length,Fe=de>>>1;Ae<Fe;){var Mn=2*(Ae+1)-1,Fn=W[Mn],Un=Mn+1,Bn=W[Un];if(0>i(Fn,ee))Un<de&&0>i(Bn,Fn)?(W[Ae]=Bn,W[Un]=ee,Ae=Un):(W[Ae]=Fn,W[Mn]=ee,Ae=Mn);else if(Un<de&&0>i(Bn,ee))W[Ae]=Bn,W[Un]=ee,Ae=Un;else break e}}return J}function i(W,J){var ee=W.sortIndex-J.sortIndex;return ee!==0?ee:W.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,p=null,m=3,w=!1,P=!1,C=!1,O=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(W){for(var J=t(c);J!==null;){if(J.callback===null)r(c);else if(J.startTime<=W)r(c),J.sortIndex=J.expirationTime,e(u,J);else break;J=t(c)}}function x(W){if(C=!1,A(W),!P)if(t(u)!==null)P=!0,Vo(U);else{var J=t(c);J!==null&&Ln(x,J.startTime-W)}}function U(W,J){P=!1,C&&(C=!1,S(_),_=-1),w=!0;var ee=m;try{for(A(J),p=t(u);p!==null&&(!(p.expirationTime>J)||W&&!R());){var Ae=p.callback;if(typeof Ae=="function"){p.callback=null,m=p.priorityLevel;var de=Ae(p.expirationTime<=J);J=n.unstable_now(),typeof de=="function"?p.callback=de:p===t(u)&&r(u),A(J)}else r(u);p=t(u)}if(p!==null)var Fe=!0;else{var Mn=t(c);Mn!==null&&Ln(x,Mn.startTime-J),Fe=!1}return Fe}finally{p=null,m=ee,w=!1}}var F=!1,v=null,_=-1,I=5,E=-1;function R(){return!(n.unstable_now()-E<I)}function D(){if(v!==null){var W=n.unstable_now();E=W;var J=!0;try{J=v(!0,W)}finally{J?T():(F=!1,v=null)}}else F=!1}var T;if(typeof y=="function")T=function(){y(D)};else if(typeof MessageChannel<"u"){var Yt=new MessageChannel,ui=Yt.port2;Yt.port1.onmessage=D,T=function(){ui.postMessage(null)}}else T=function(){O(D,0)};function Vo(W){v=W,F||(F=!0,T())}function Ln(W,J){_=O(function(){W(n.unstable_now())},J)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(W){W.callback=null},n.unstable_continueExecution=function(){P||w||(P=!0,Vo(U))},n.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<W?Math.floor(1e3/W):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_getFirstCallbackNode=function(){return t(u)},n.unstable_next=function(W){switch(m){case 1:case 2:case 3:var J=3;break;default:J=m}var ee=m;m=J;try{return W()}finally{m=ee}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(W,J){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ee=m;m=W;try{return J()}finally{m=ee}},n.unstable_scheduleCallback=function(W,J,ee){var Ae=n.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?Ae+ee:Ae):ee=Ae,W){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=ee+de,W={id:d++,callback:J,priorityLevel:W,startTime:ee,expirationTime:de,sortIndex:-1},ee>Ae?(W.sortIndex=ee,e(c,W),t(u)===null&&W===t(c)&&(C?(S(_),_=-1):C=!0,Ln(x,ee-Ae))):(W.sortIndex=de,e(u,W),P||w||(P=!0,Vo(U))),W},n.unstable_shouldYield=R,n.unstable_wrapCallback=function(W){var J=m;return function(){var ee=m;m=J;try{return W.apply(this,arguments)}finally{m=ee}}}})(AI);SI.exports=AI;var _P=SI.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yP=jp,Gt=_P;function B(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var RI=new Set,Ua={};function Xi(n,e){Ks(n,e),Ks(n+"Capture",e)}function Ks(n,e){for(Ua[n]=e,n=0;n<e.length;n++)RI.add(e[n])}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hf=Object.prototype.hasOwnProperty,vP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fy={},py={};function wP(n){return hf.call(py,n)?!0:hf.call(fy,n)?!1:vP.test(n)?py[n]=!0:(fy[n]=!0,!1)}function IP(n,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function EP(n,e,t,r){if(e===null||typeof e>"u"||IP(n,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ct(n,e,t,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var at={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){at[n]=new Ct(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];at[e]=new Ct(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){at[n]=new Ct(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){at[n]=new Ct(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){at[n]=new Ct(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){at[n]=new Ct(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){at[n]=new Ct(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){at[n]=new Ct(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){at[n]=new Ct(n,5,!1,n.toLowerCase(),null,!1,!1)});var $p=/[\-:]([a-z])/g;function qp(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace($p,qp);at[e]=new Ct(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace($p,qp);at[e]=new Ct(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace($p,qp);at[e]=new Ct(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){at[n]=new Ct(n,1,!1,n.toLowerCase(),null,!1,!1)});at.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){at[n]=new Ct(n,1,!1,n.toLowerCase(),null,!0,!0)});function Wp(n,e,t,r){var i=at.hasOwnProperty(e)?at[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(EP(e,t,i,r)&&(t=null),r||i===null?wP(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):i.mustUseProperty?n[i.propertyName]=t===null?i.type===3?!1:"":t:(e=i.attributeName,r=i.attributeNamespace,t===null?n.removeAttribute(e):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?n.setAttributeNS(r,e,t):n.setAttribute(e,t))))}var or=yP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gu=Symbol.for("react.element"),Es=Symbol.for("react.portal"),Ts=Symbol.for("react.fragment"),Gp=Symbol.for("react.strict_mode"),df=Symbol.for("react.profiler"),PI=Symbol.for("react.provider"),kI=Symbol.for("react.context"),Kp=Symbol.for("react.forward_ref"),ff=Symbol.for("react.suspense"),pf=Symbol.for("react.suspense_list"),Hp=Symbol.for("react.memo"),wr=Symbol.for("react.lazy"),CI=Symbol.for("react.offscreen"),my=Symbol.iterator;function Ho(n){return n===null||typeof n!="object"?null:(n=my&&n[my]||n["@@iterator"],typeof n=="function"?n:null)}var Ce=Object.assign,Ed;function ca(n){if(Ed===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Ed=e&&e[1]||""}return`
`+Ed+n}var Td=!1;function Sd(n,e){if(!n||Td)return"";Td=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){r=c}n.call(e.prototype)}else{try{throw Error()}catch(c){r=c}n()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return n.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",n.displayName)),u}while(1<=o&&0<=a);break}}}finally{Td=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ca(n):""}function TP(n){switch(n.tag){case 5:return ca(n.type);case 16:return ca("Lazy");case 13:return ca("Suspense");case 19:return ca("SuspenseList");case 0:case 2:case 15:return n=Sd(n.type,!1),n;case 11:return n=Sd(n.type.render,!1),n;case 1:return n=Sd(n.type,!0),n;default:return""}}function mf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ts:return"Fragment";case Es:return"Portal";case df:return"Profiler";case Gp:return"StrictMode";case ff:return"Suspense";case pf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case kI:return(n.displayName||"Context")+".Consumer";case PI:return(n._context.displayName||"Context")+".Provider";case Kp:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Hp:return e=n.displayName||null,e!==null?e:mf(n.type)||"Memo";case wr:e=n._payload,n=n._init;try{return mf(n(e))}catch{}}return null}function SP(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mf(e);case 8:return e===Gp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function DI(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function AP(n){var e=DI(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function _u(n){n._valueTracker||(n._valueTracker=AP(n))}function NI(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=DI(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}function cc(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function gf(n,e){var t=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function gy(n,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=zr(e.value!=null?e.value:t),n._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function bI(n,e){e=e.checked,e!=null&&Wp(n,"checked",e,!1)}function _f(n,e){bI(n,e);var t=zr(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(r==="submit"||r==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?yf(n,e.type,t):e.hasOwnProperty("defaultValue")&&yf(n,e.type,zr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function _y(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function yf(n,e,t){(e!=="number"||cc(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var ha=Array.isArray;function Os(n,e,t,r){if(n=n.options,e){e={};for(var i=0;i<t.length;i++)e["$"+t[i]]=!0;for(t=0;t<n.length;t++)i=e.hasOwnProperty("$"+n[t].value),n[t].selected!==i&&(n[t].selected=i),i&&r&&(n[t].defaultSelected=!0)}else{for(t=""+zr(t),e=null,i=0;i<n.length;i++){if(n[i].value===t){n[i].selected=!0,r&&(n[i].defaultSelected=!0);return}e!==null||n[i].disabled||(e=n[i])}e!==null&&(e.selected=!0)}}function vf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function yy(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(B(92));if(ha(t)){if(1<t.length)throw Error(B(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:zr(t)}}function VI(n,e){var t=zr(e.value),r=zr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),r!=null&&(n.defaultValue=""+r)}function vy(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function xI(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?xI(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var yu,OI=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,i){MSApp.execUnsafeLocalFunction(function(){return n(e,t,r,i)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(yu=yu||document.createElement("div"),yu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=yu.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ba(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RP=["Webkit","ms","Moz","O"];Object.keys(Ia).forEach(function(n){RP.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ia[e]=Ia[n]})});function LI(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ia.hasOwnProperty(n)&&Ia[n]?(""+e).trim():e+"px"}function MI(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=LI(t,e[t],r);t==="float"&&(t="cssFloat"),r?n.setProperty(t,i):n[t]=i}}var PP=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function If(n,e){if(e){if(PP[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Ef(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tf=null;function Qp(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Sf=null,Ls=null,Ms=null;function wy(n){if(n=Cl(n)){if(typeof Sf!="function")throw Error(B(280));var e=n.stateNode;e&&(e=oh(e),Sf(n.stateNode,n.type,e))}}function FI(n){Ls?Ms?Ms.push(n):Ms=[n]:Ls=n}function UI(){if(Ls){var n=Ls,e=Ms;if(Ms=Ls=null,wy(n),e)for(n=0;n<e.length;n++)wy(e[n])}}function BI(n,e){return n(e)}function zI(){}var Ad=!1;function jI(n,e,t){if(Ad)return n(e,t);Ad=!0;try{return BI(n,e,t)}finally{Ad=!1,(Ls!==null||Ms!==null)&&(zI(),UI())}}function za(n,e){var t=n.stateNode;if(t===null)return null;var r=oh(t);if(r===null)return null;t=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(B(231,e,typeof t));return t}var Af=!1;if(Xn)try{var Qo={};Object.defineProperty(Qo,"passive",{get:function(){Af=!0}}),window.addEventListener("test",Qo,Qo),window.removeEventListener("test",Qo,Qo)}catch{Af=!1}function kP(n,e,t,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(d){this.onError(d)}}var Ea=!1,hc=null,dc=!1,Rf=null,CP={onError:function(n){Ea=!0,hc=n}};function DP(n,e,t,r,i,s,o,a,u){Ea=!1,hc=null,kP.apply(CP,arguments)}function NP(n,e,t,r,i,s,o,a,u){if(DP.apply(this,arguments),Ea){if(Ea){var c=hc;Ea=!1,hc=null}else throw Error(B(198));dc||(dc=!0,Rf=c)}}function Zi(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function $I(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Iy(n){if(Zi(n)!==n)throw Error(B(188))}function bP(n){var e=n.alternate;if(!e){if(e=Zi(n),e===null)throw Error(B(188));return e!==n?null:n}for(var t=n,r=e;;){var i=t.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===t)return Iy(i),n;if(s===r)return Iy(i),e;s=s.sibling}throw Error(B(188))}if(t.return!==r.return)t=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===t){o=!0,t=i,r=s;break}if(a===r){o=!0,r=i,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,r=i;break}if(a===r){o=!0,r=s,t=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(t.alternate!==r)throw Error(B(190))}if(t.tag!==3)throw Error(B(188));return t.stateNode.current===t?n:e}function qI(n){return n=bP(n),n!==null?WI(n):null}function WI(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=WI(n);if(e!==null)return e;n=n.sibling}return null}var GI=Gt.unstable_scheduleCallback,Ey=Gt.unstable_cancelCallback,VP=Gt.unstable_shouldYield,xP=Gt.unstable_requestPaint,Ue=Gt.unstable_now,OP=Gt.unstable_getCurrentPriorityLevel,Yp=Gt.unstable_ImmediatePriority,KI=Gt.unstable_UserBlockingPriority,fc=Gt.unstable_NormalPriority,LP=Gt.unstable_LowPriority,HI=Gt.unstable_IdlePriority,nh=null,Pn=null;function MP(n){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(nh,n,void 0,(n.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:BP,FP=Math.log,UP=Math.LN2;function BP(n){return n>>>=0,n===0?32:31-(FP(n)/UP|0)|0}var vu=64,wu=4194304;function da(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function pc(n,e){var t=n.pendingLanes;if(t===0)return 0;var r=0,i=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~i;a!==0?r=da(a):(s&=o,s!==0&&(r=da(s)))}else o=t&~i,o!==0?r=da(o):s!==0&&(r=da(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=r;0<e;)t=31-dn(e),i=1<<t,r|=n[t],e&=~i;return r}function zP(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jP(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,i=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-dn(s),a=1<<o,u=i[o];u===-1?(!(a&t)||a&r)&&(i[o]=zP(a,e)):u<=e&&(n.expiredLanes|=a),s&=~a}}function Pf(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function QI(){var n=vu;return vu<<=1,!(vu&4194240)&&(vu=64),n}function Rd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Pl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-dn(e),n[e]=t}function $P(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var r=n.eventTimes;for(n=n.expirationTimes;0<t;){var i=31-dn(t),s=1<<i;e[i]=0,r[i]=-1,n[i]=-1,t&=~s}}function Jp(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-dn(t),i=1<<r;i&e|n[r]&e&&(n[r]|=e),t&=~i}}var ce=0;function YI(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var JI,Xp,XI,ZI,eE,kf=!1,Iu=[],Dr=null,Nr=null,br=null,ja=new Map,$a=new Map,Er=[],qP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ty(n,e){switch(n){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":ja.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$a.delete(e.pointerId)}}function Yo(n,e,t,r,i,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Cl(e),e!==null&&Xp(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),n)}function WP(n,e,t,r,i){switch(e){case"focusin":return Dr=Yo(Dr,n,e,t,r,i),!0;case"dragenter":return Nr=Yo(Nr,n,e,t,r,i),!0;case"mouseover":return br=Yo(br,n,e,t,r,i),!0;case"pointerover":var s=i.pointerId;return ja.set(s,Yo(ja.get(s)||null,n,e,t,r,i)),!0;case"gotpointercapture":return s=i.pointerId,$a.set(s,Yo($a.get(s)||null,n,e,t,r,i)),!0}return!1}function tE(n){var e=Si(n.target);if(e!==null){var t=Zi(e);if(t!==null){if(e=t.tag,e===13){if(e=$I(t),e!==null){n.blockedOn=e,eE(n.priority,function(){XI(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ju(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Cf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);Tf=r,t.target.dispatchEvent(r),Tf=null}else return e=Cl(t),e!==null&&Xp(e),n.blockedOn=t,!1;e.shift()}return!0}function Sy(n,e,t){ju(n)&&t.delete(e)}function GP(){kf=!1,Dr!==null&&ju(Dr)&&(Dr=null),Nr!==null&&ju(Nr)&&(Nr=null),br!==null&&ju(br)&&(br=null),ja.forEach(Sy),$a.forEach(Sy)}function Jo(n,e){n.blockedOn===e&&(n.blockedOn=null,kf||(kf=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,GP)))}function qa(n){function e(i){return Jo(i,n)}if(0<Iu.length){Jo(Iu[0],n);for(var t=1;t<Iu.length;t++){var r=Iu[t];r.blockedOn===n&&(r.blockedOn=null)}}for(Dr!==null&&Jo(Dr,n),Nr!==null&&Jo(Nr,n),br!==null&&Jo(br,n),ja.forEach(e),$a.forEach(e),t=0;t<Er.length;t++)r=Er[t],r.blockedOn===n&&(r.blockedOn=null);for(;0<Er.length&&(t=Er[0],t.blockedOn===null);)tE(t),t.blockedOn===null&&Er.shift()}var Fs=or.ReactCurrentBatchConfig,mc=!0;function KP(n,e,t,r){var i=ce,s=Fs.transition;Fs.transition=null;try{ce=1,Zp(n,e,t,r)}finally{ce=i,Fs.transition=s}}function HP(n,e,t,r){var i=ce,s=Fs.transition;Fs.transition=null;try{ce=4,Zp(n,e,t,r)}finally{ce=i,Fs.transition=s}}function Zp(n,e,t,r){if(mc){var i=Cf(n,e,t,r);if(i===null)Ld(n,e,r,gc,t),Ty(n,r);else if(WP(i,n,e,t,r))r.stopPropagation();else if(Ty(n,r),e&4&&-1<qP.indexOf(n)){for(;i!==null;){var s=Cl(i);if(s!==null&&JI(s),s=Cf(n,e,t,r),s===null&&Ld(n,e,r,gc,t),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ld(n,e,r,null,t)}}var gc=null;function Cf(n,e,t,r){if(gc=null,n=Qp(r),n=Si(n),n!==null)if(e=Zi(n),e===null)n=null;else if(t=e.tag,t===13){if(n=$I(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return gc=n,null}function nE(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(OP()){case Yp:return 1;case KI:return 4;case fc:case LP:return 16;case HI:return 536870912;default:return 16}default:return 16}}var Rr=null,em=null,$u=null;function rE(){if($u)return $u;var n,e=em,t=e.length,r,i="value"in Rr?Rr.value:Rr.textContent,s=i.length;for(n=0;n<t&&e[n]===i[n];n++);var o=t-n;for(r=1;r<=o&&e[t-r]===i[s-r];r++);return $u=i.slice(n,1<r?1-r:void 0)}function qu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Eu(){return!0}function Ay(){return!1}function Qt(n){function e(t,r,i,s,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Eu:Ay,this.isPropagationStopped=Ay,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Eu)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Eu)},persist:function(){},isPersistent:Eu}),e}var vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tm=Qt(vo),kl=Ce({},vo,{view:0,detail:0}),QP=Qt(kl),Pd,kd,Xo,rh=Ce({},kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nm,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Xo&&(Xo&&n.type==="mousemove"?(Pd=n.screenX-Xo.screenX,kd=n.screenY-Xo.screenY):kd=Pd=0,Xo=n),Pd)},movementY:function(n){return"movementY"in n?n.movementY:kd}}),Ry=Qt(rh),YP=Ce({},rh,{dataTransfer:0}),JP=Qt(YP),XP=Ce({},kl,{relatedTarget:0}),Cd=Qt(XP),ZP=Ce({},vo,{animationName:0,elapsedTime:0,pseudoElement:0}),ek=Qt(ZP),tk=Ce({},vo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),nk=Qt(tk),rk=Ce({},vo,{data:0}),Py=Qt(rk),ik={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ok={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ak(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=ok[n])?!!e[n]:!1}function nm(){return ak}var lk=Ce({},kl,{key:function(n){if(n.key){var e=ik[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=qu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?sk[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nm,charCode:function(n){return n.type==="keypress"?qu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?qu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),uk=Qt(lk),ck=Ce({},rh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ky=Qt(ck),hk=Ce({},kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nm}),dk=Qt(hk),fk=Ce({},vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),pk=Qt(fk),mk=Ce({},rh,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),gk=Qt(mk),_k=[9,13,27,32],rm=Xn&&"CompositionEvent"in window,Ta=null;Xn&&"documentMode"in document&&(Ta=document.documentMode);var yk=Xn&&"TextEvent"in window&&!Ta,iE=Xn&&(!rm||Ta&&8<Ta&&11>=Ta),Cy=" ",Dy=!1;function sE(n,e){switch(n){case"keyup":return _k.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oE(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ss=!1;function vk(n,e){switch(n){case"compositionend":return oE(e);case"keypress":return e.which!==32?null:(Dy=!0,Cy);case"textInput":return n=e.data,n===Cy&&Dy?null:n;default:return null}}function wk(n,e){if(Ss)return n==="compositionend"||!rm&&sE(n,e)?(n=rE(),$u=em=Rr=null,Ss=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return iE&&e.locale!=="ko"?null:e.data;default:return null}}var Ik={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ny(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Ik[n.type]:e==="textarea"}function aE(n,e,t,r){FI(r),e=_c(e,"onChange"),0<e.length&&(t=new tm("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var Sa=null,Wa=null;function Ek(n){yE(n,0)}function ih(n){var e=Ps(n);if(NI(e))return n}function Tk(n,e){if(n==="change")return e}var lE=!1;if(Xn){var Dd;if(Xn){var Nd="oninput"in document;if(!Nd){var by=document.createElement("div");by.setAttribute("oninput","return;"),Nd=typeof by.oninput=="function"}Dd=Nd}else Dd=!1;lE=Dd&&(!document.documentMode||9<document.documentMode)}function Vy(){Sa&&(Sa.detachEvent("onpropertychange",uE),Wa=Sa=null)}function uE(n){if(n.propertyName==="value"&&ih(Wa)){var e=[];aE(e,Wa,n,Qp(n)),jI(Ek,e)}}function Sk(n,e,t){n==="focusin"?(Vy(),Sa=e,Wa=t,Sa.attachEvent("onpropertychange",uE)):n==="focusout"&&Vy()}function Ak(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ih(Wa)}function Rk(n,e){if(n==="click")return ih(e)}function Pk(n,e){if(n==="input"||n==="change")return ih(e)}function kk(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var mn=typeof Object.is=="function"?Object.is:kk;function Ga(n,e){if(mn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!hf.call(e,i)||!mn(n[i],e[i]))return!1}return!0}function xy(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Oy(n,e){var t=xy(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=xy(t)}}function cE(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?cE(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function hE(){for(var n=window,e=cc();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=cc(n.document)}return e}function im(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Ck(n){var e=hE(),t=n.focusedElem,r=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&cE(t.ownerDocument.documentElement,t)){if(r!==null&&im(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var i=t.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!n.extend&&s>r&&(i=r,r=s,s=i),i=Oy(t,s);var o=Oy(t,r);i&&o&&(n.rangeCount!==1||n.anchorNode!==i.node||n.anchorOffset!==i.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),n.removeAllRanges(),s>r?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Dk=Xn&&"documentMode"in document&&11>=document.documentMode,As=null,Df=null,Aa=null,Nf=!1;function Ly(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Nf||As==null||As!==cc(r)||(r=As,"selectionStart"in r&&im(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Aa&&Ga(Aa,r)||(Aa=r,r=_c(Df,"onSelect"),0<r.length&&(e=new tm("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=As)))}function Tu(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Rs={animationend:Tu("Animation","AnimationEnd"),animationiteration:Tu("Animation","AnimationIteration"),animationstart:Tu("Animation","AnimationStart"),transitionend:Tu("Transition","TransitionEnd")},bd={},dE={};Xn&&(dE=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function sh(n){if(bd[n])return bd[n];if(!Rs[n])return n;var e=Rs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in dE)return bd[n]=e[t];return n}var fE=sh("animationend"),pE=sh("animationiteration"),mE=sh("animationstart"),gE=sh("transitionend"),_E=new Map,My="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ei(n,e){_E.set(n,e),Xi(e,[n])}for(var Vd=0;Vd<My.length;Vd++){var xd=My[Vd],Nk=xd.toLowerCase(),bk=xd[0].toUpperCase()+xd.slice(1);ei(Nk,"on"+bk)}ei(fE,"onAnimationEnd");ei(pE,"onAnimationIteration");ei(mE,"onAnimationStart");ei("dblclick","onDoubleClick");ei("focusin","onFocus");ei("focusout","onBlur");ei(gE,"onTransitionEnd");Ks("onMouseEnter",["mouseout","mouseover"]);Ks("onMouseLeave",["mouseout","mouseover"]);Ks("onPointerEnter",["pointerout","pointerover"]);Ks("onPointerLeave",["pointerout","pointerover"]);Xi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vk=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function Fy(n,e,t){var r=n.type||"unknown-event";n.currentTarget=t,NP(r,e,void 0,n),n.currentTarget=null}function yE(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Fy(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Fy(i,a,c),s=u}}}if(dc)throw n=Rf,dc=!1,Rf=null,n}function _e(n,e){var t=e[Lf];t===void 0&&(t=e[Lf]=new Set);var r=n+"__bubble";t.has(r)||(vE(e,n,2,!1),t.add(r))}function Od(n,e,t){var r=0;e&&(r|=4),vE(t,n,r,e)}var Su="_reactListening"+Math.random().toString(36).slice(2);function Ka(n){if(!n[Su]){n[Su]=!0,RI.forEach(function(t){t!=="selectionchange"&&(Vk.has(t)||Od(t,!1,n),Od(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Su]||(e[Su]=!0,Od("selectionchange",!1,e))}}function vE(n,e,t,r){switch(nE(e)){case 1:var i=KP;break;case 4:i=HP;break;default:i=Zp}t=i.bind(null,e,t,n),i=void 0,!Af||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?n.addEventListener(e,t,{capture:!0,passive:i}):n.addEventListener(e,t,!0):i!==void 0?n.addEventListener(e,t,{passive:i}):n.addEventListener(e,t,!1)}function Ld(n,e,t,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Si(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}jI(function(){var c=s,d=Qp(t),p=[];e:{var m=_E.get(n);if(m!==void 0){var w=tm,P=n;switch(n){case"keypress":if(qu(t)===0)break e;case"keydown":case"keyup":w=uk;break;case"focusin":P="focus",w=Cd;break;case"focusout":P="blur",w=Cd;break;case"beforeblur":case"afterblur":w=Cd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ry;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=JP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=dk;break;case fE:case pE:case mE:w=ek;break;case gE:w=pk;break;case"scroll":w=QP;break;case"wheel":w=gk;break;case"copy":case"cut":case"paste":w=nk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ky}var C=(e&4)!==0,O=!C&&n==="scroll",S=C?m!==null?m+"Capture":null:m;C=[];for(var y=c,A;y!==null;){A=y;var x=A.stateNode;if(A.tag===5&&x!==null&&(A=x,S!==null&&(x=za(y,S),x!=null&&C.push(Ha(y,x,A)))),O)break;y=y.return}0<C.length&&(m=new w(m,P,null,t,d),p.push({event:m,listeners:C}))}}if(!(e&7)){e:{if(m=n==="mouseover"||n==="pointerover",w=n==="mouseout"||n==="pointerout",m&&t!==Tf&&(P=t.relatedTarget||t.fromElement)&&(Si(P)||P[Zn]))break e;if((w||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,w?(P=t.relatedTarget||t.toElement,w=c,P=P?Si(P):null,P!==null&&(O=Zi(P),P!==O||P.tag!==5&&P.tag!==6)&&(P=null)):(w=null,P=c),w!==P)){if(C=Ry,x="onMouseLeave",S="onMouseEnter",y="mouse",(n==="pointerout"||n==="pointerover")&&(C=ky,x="onPointerLeave",S="onPointerEnter",y="pointer"),O=w==null?m:Ps(w),A=P==null?m:Ps(P),m=new C(x,y+"leave",w,t,d),m.target=O,m.relatedTarget=A,x=null,Si(d)===c&&(C=new C(S,y+"enter",P,t,d),C.target=A,C.relatedTarget=O,x=C),O=x,w&&P)t:{for(C=w,S=P,y=0,A=C;A;A=hs(A))y++;for(A=0,x=S;x;x=hs(x))A++;for(;0<y-A;)C=hs(C),y--;for(;0<A-y;)S=hs(S),A--;for(;y--;){if(C===S||S!==null&&C===S.alternate)break t;C=hs(C),S=hs(S)}C=null}else C=null;w!==null&&Uy(p,m,w,C,!1),P!==null&&O!==null&&Uy(p,O,P,C,!0)}}e:{if(m=c?Ps(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var U=Tk;else if(Ny(m))if(lE)U=Pk;else{U=Ak;var F=Sk}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(U=Rk);if(U&&(U=U(n,c))){aE(p,U,t,d);break e}F&&F(n,m,c),n==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&yf(m,"number",m.value)}switch(F=c?Ps(c):window,n){case"focusin":(Ny(F)||F.contentEditable==="true")&&(As=F,Df=c,Aa=null);break;case"focusout":Aa=Df=As=null;break;case"mousedown":Nf=!0;break;case"contextmenu":case"mouseup":case"dragend":Nf=!1,Ly(p,t,d);break;case"selectionchange":if(Dk)break;case"keydown":case"keyup":Ly(p,t,d)}var v;if(rm)e:{switch(n){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ss?sE(n,t)&&(_="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(iE&&t.locale!=="ko"&&(Ss||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ss&&(v=rE()):(Rr=d,em="value"in Rr?Rr.value:Rr.textContent,Ss=!0)),F=_c(c,_),0<F.length&&(_=new Py(_,n,null,t,d),p.push({event:_,listeners:F}),v?_.data=v:(v=oE(t),v!==null&&(_.data=v)))),(v=yk?vk(n,t):wk(n,t))&&(c=_c(c,"onBeforeInput"),0<c.length&&(d=new Py("onBeforeInput","beforeinput",null,t,d),p.push({event:d,listeners:c}),d.data=v))}yE(p,e)})}function Ha(n,e,t){return{instance:n,listener:e,currentTarget:t}}function _c(n,e){for(var t=e+"Capture",r=[];n!==null;){var i=n,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=za(n,t),s!=null&&r.unshift(Ha(n,s,i)),s=za(n,e),s!=null&&r.push(Ha(n,s,i))),n=n.return}return r}function hs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Uy(n,e,t,r,i){for(var s=e._reactName,o=[];t!==null&&t!==r;){var a=t,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=za(t,s),u!=null&&o.unshift(Ha(t,u,a))):i||(u=za(t,s),u!=null&&o.push(Ha(t,u,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var xk=/\r\n?/g,Ok=/\u0000|\uFFFD/g;function By(n){return(typeof n=="string"?n:""+n).replace(xk,`
`).replace(Ok,"")}function Au(n,e,t){if(e=By(e),By(n)!==e&&t)throw Error(B(425))}function yc(){}var bf=null,Vf=null;function xf(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Of=typeof setTimeout=="function"?setTimeout:void 0,Lk=typeof clearTimeout=="function"?clearTimeout:void 0,zy=typeof Promise=="function"?Promise:void 0,Mk=typeof queueMicrotask=="function"?queueMicrotask:typeof zy<"u"?function(n){return zy.resolve(null).then(n).catch(Fk)}:Of;function Fk(n){setTimeout(function(){throw n})}function Md(n,e){var t=e,r=0;do{var i=t.nextSibling;if(n.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){n.removeChild(i),qa(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);qa(e)}function Vr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function jy(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var wo=Math.random().toString(36).slice(2),vn="__reactFiber$"+wo,Qa="__reactProps$"+wo,Zn="__reactContainer$"+wo,Lf="__reactEvents$"+wo,Uk="__reactListeners$"+wo,Bk="__reactHandles$"+wo;function Si(n){var e=n[vn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Zn]||t[vn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=jy(n);n!==null;){if(t=n[vn])return t;n=jy(n)}return e}n=t,t=n.parentNode}return null}function Cl(n){return n=n[vn]||n[Zn],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ps(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(B(33))}function oh(n){return n[Qa]||null}var Mf=[],ks=-1;function ti(n){return{current:n}}function ve(n){0>ks||(n.current=Mf[ks],Mf[ks]=null,ks--)}function pe(n,e){ks++,Mf[ks]=n.current,n.current=e}var jr={},gt=ti(jr),Mt=ti(!1),Oi=jr;function Hs(n,e){var t=n.type.contextTypes;if(!t)return jr;var r=n.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in t)i[s]=e[s];return r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=i),i}function Ft(n){return n=n.childContextTypes,n!=null}function vc(){ve(Mt),ve(gt)}function $y(n,e,t){if(gt.current!==jr)throw Error(B(168));pe(gt,e),pe(Mt,t)}function wE(n,e,t){var r=n.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,SP(n)||"Unknown",i));return Ce({},t,r)}function wc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||jr,Oi=gt.current,pe(gt,n),pe(Mt,Mt.current),!0}function qy(n,e,t){var r=n.stateNode;if(!r)throw Error(B(169));t?(n=wE(n,e,Oi),r.__reactInternalMemoizedMergedChildContext=n,ve(Mt),ve(gt),pe(gt,n)):ve(Mt),pe(Mt,t)}var qn=null,ah=!1,Fd=!1;function IE(n){qn===null?qn=[n]:qn.push(n)}function zk(n){ah=!0,IE(n)}function ni(){if(!Fd&&qn!==null){Fd=!0;var n=0,e=ce;try{var t=qn;for(ce=1;n<t.length;n++){var r=t[n];do r=r(!0);while(r!==null)}qn=null,ah=!1}catch(i){throw qn!==null&&(qn=qn.slice(n+1)),GI(Yp,ni),i}finally{ce=e,Fd=!1}}return null}var Cs=[],Ds=0,Ic=null,Ec=0,Jt=[],Xt=0,Li=null,Wn=1,Gn="";function mi(n,e){Cs[Ds++]=Ec,Cs[Ds++]=Ic,Ic=n,Ec=e}function EE(n,e,t){Jt[Xt++]=Wn,Jt[Xt++]=Gn,Jt[Xt++]=Li,Li=n;var r=Wn;n=Gn;var i=32-dn(r)-1;r&=~(1<<i),t+=1;var s=32-dn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Wn=1<<32-dn(e)+i|t<<i|r,Gn=s+n}else Wn=1<<s|t<<i|r,Gn=n}function sm(n){n.return!==null&&(mi(n,1),EE(n,1,0))}function om(n){for(;n===Ic;)Ic=Cs[--Ds],Cs[Ds]=null,Ec=Cs[--Ds],Cs[Ds]=null;for(;n===Li;)Li=Jt[--Xt],Jt[Xt]=null,Gn=Jt[--Xt],Jt[Xt]=null,Wn=Jt[--Xt],Jt[Xt]=null}var Wt=null,$t=null,Ie=!1,hn=null;function TE(n,e){var t=Zt(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Wy(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Wt=n,$t=Vr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Wt=n,$t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Li!==null?{id:Wn,overflow:Gn}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Zt(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Wt=n,$t=null,!0):!1;default:return!1}}function Ff(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Uf(n){if(Ie){var e=$t;if(e){var t=e;if(!Wy(n,e)){if(Ff(n))throw Error(B(418));e=Vr(t.nextSibling);var r=Wt;e&&Wy(n,e)?TE(r,t):(n.flags=n.flags&-4097|2,Ie=!1,Wt=n)}}else{if(Ff(n))throw Error(B(418));n.flags=n.flags&-4097|2,Ie=!1,Wt=n}}}function Gy(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Wt=n}function Ru(n){if(n!==Wt)return!1;if(!Ie)return Gy(n),Ie=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!xf(n.type,n.memoizedProps)),e&&(e=$t)){if(Ff(n))throw SE(),Error(B(418));for(;e;)TE(n,e),e=Vr(e.nextSibling)}if(Gy(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(B(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){$t=Vr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}$t=null}}else $t=Wt?Vr(n.stateNode.nextSibling):null;return!0}function SE(){for(var n=$t;n;)n=Vr(n.nextSibling)}function Qs(){$t=Wt=null,Ie=!1}function am(n){hn===null?hn=[n]:hn.push(n)}var jk=or.ReactCurrentBatchConfig;function Zo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(B(309));var r=t.stateNode}if(!r)throw Error(B(147,n));var i=r,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(B(284));if(!t._owner)throw Error(B(290,n))}return n}function Pu(n,e){throw n=Object.prototype.toString.call(e),Error(B(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Ky(n){var e=n._init;return e(n._payload)}function AE(n){function e(S,y){if(n){var A=S.deletions;A===null?(S.deletions=[y],S.flags|=16):A.push(y)}}function t(S,y){if(!n)return null;for(;y!==null;)e(S,y),y=y.sibling;return null}function r(S,y){for(S=new Map;y!==null;)y.key!==null?S.set(y.key,y):S.set(y.index,y),y=y.sibling;return S}function i(S,y){return S=Mr(S,y),S.index=0,S.sibling=null,S}function s(S,y,A){return S.index=A,n?(A=S.alternate,A!==null?(A=A.index,A<y?(S.flags|=2,y):A):(S.flags|=2,y)):(S.flags|=1048576,y)}function o(S){return n&&S.alternate===null&&(S.flags|=2),S}function a(S,y,A,x){return y===null||y.tag!==6?(y=Wd(A,S.mode,x),y.return=S,y):(y=i(y,A),y.return=S,y)}function u(S,y,A,x){var U=A.type;return U===Ts?d(S,y,A.props.children,x,A.key):y!==null&&(y.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===wr&&Ky(U)===y.type)?(x=i(y,A.props),x.ref=Zo(S,y,A),x.return=S,x):(x=Ju(A.type,A.key,A.props,null,S.mode,x),x.ref=Zo(S,y,A),x.return=S,x)}function c(S,y,A,x){return y===null||y.tag!==4||y.stateNode.containerInfo!==A.containerInfo||y.stateNode.implementation!==A.implementation?(y=Gd(A,S.mode,x),y.return=S,y):(y=i(y,A.children||[]),y.return=S,y)}function d(S,y,A,x,U){return y===null||y.tag!==7?(y=Ni(A,S.mode,x,U),y.return=S,y):(y=i(y,A),y.return=S,y)}function p(S,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Wd(""+y,S.mode,A),y.return=S,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case gu:return A=Ju(y.type,y.key,y.props,null,S.mode,A),A.ref=Zo(S,null,y),A.return=S,A;case Es:return y=Gd(y,S.mode,A),y.return=S,y;case wr:var x=y._init;return p(S,x(y._payload),A)}if(ha(y)||Ho(y))return y=Ni(y,S.mode,A,null),y.return=S,y;Pu(S,y)}return null}function m(S,y,A,x){var U=y!==null?y.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return U!==null?null:a(S,y,""+A,x);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case gu:return A.key===U?u(S,y,A,x):null;case Es:return A.key===U?c(S,y,A,x):null;case wr:return U=A._init,m(S,y,U(A._payload),x)}if(ha(A)||Ho(A))return U!==null?null:d(S,y,A,x,null);Pu(S,A)}return null}function w(S,y,A,x,U){if(typeof x=="string"&&x!==""||typeof x=="number")return S=S.get(A)||null,a(y,S,""+x,U);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case gu:return S=S.get(x.key===null?A:x.key)||null,u(y,S,x,U);case Es:return S=S.get(x.key===null?A:x.key)||null,c(y,S,x,U);case wr:var F=x._init;return w(S,y,A,F(x._payload),U)}if(ha(x)||Ho(x))return S=S.get(A)||null,d(y,S,x,U,null);Pu(y,x)}return null}function P(S,y,A,x){for(var U=null,F=null,v=y,_=y=0,I=null;v!==null&&_<A.length;_++){v.index>_?(I=v,v=null):I=v.sibling;var E=m(S,v,A[_],x);if(E===null){v===null&&(v=I);break}n&&v&&E.alternate===null&&e(S,v),y=s(E,y,_),F===null?U=E:F.sibling=E,F=E,v=I}if(_===A.length)return t(S,v),Ie&&mi(S,_),U;if(v===null){for(;_<A.length;_++)v=p(S,A[_],x),v!==null&&(y=s(v,y,_),F===null?U=v:F.sibling=v,F=v);return Ie&&mi(S,_),U}for(v=r(S,v);_<A.length;_++)I=w(v,S,_,A[_],x),I!==null&&(n&&I.alternate!==null&&v.delete(I.key===null?_:I.key),y=s(I,y,_),F===null?U=I:F.sibling=I,F=I);return n&&v.forEach(function(R){return e(S,R)}),Ie&&mi(S,_),U}function C(S,y,A,x){var U=Ho(A);if(typeof U!="function")throw Error(B(150));if(A=U.call(A),A==null)throw Error(B(151));for(var F=U=null,v=y,_=y=0,I=null,E=A.next();v!==null&&!E.done;_++,E=A.next()){v.index>_?(I=v,v=null):I=v.sibling;var R=m(S,v,E.value,x);if(R===null){v===null&&(v=I);break}n&&v&&R.alternate===null&&e(S,v),y=s(R,y,_),F===null?U=R:F.sibling=R,F=R,v=I}if(E.done)return t(S,v),Ie&&mi(S,_),U;if(v===null){for(;!E.done;_++,E=A.next())E=p(S,E.value,x),E!==null&&(y=s(E,y,_),F===null?U=E:F.sibling=E,F=E);return Ie&&mi(S,_),U}for(v=r(S,v);!E.done;_++,E=A.next())E=w(v,S,_,E.value,x),E!==null&&(n&&E.alternate!==null&&v.delete(E.key===null?_:E.key),y=s(E,y,_),F===null?U=E:F.sibling=E,F=E);return n&&v.forEach(function(D){return e(S,D)}),Ie&&mi(S,_),U}function O(S,y,A,x){if(typeof A=="object"&&A!==null&&A.type===Ts&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case gu:e:{for(var U=A.key,F=y;F!==null;){if(F.key===U){if(U=A.type,U===Ts){if(F.tag===7){t(S,F.sibling),y=i(F,A.props.children),y.return=S,S=y;break e}}else if(F.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===wr&&Ky(U)===F.type){t(S,F.sibling),y=i(F,A.props),y.ref=Zo(S,F,A),y.return=S,S=y;break e}t(S,F);break}else e(S,F);F=F.sibling}A.type===Ts?(y=Ni(A.props.children,S.mode,x,A.key),y.return=S,S=y):(x=Ju(A.type,A.key,A.props,null,S.mode,x),x.ref=Zo(S,y,A),x.return=S,S=x)}return o(S);case Es:e:{for(F=A.key;y!==null;){if(y.key===F)if(y.tag===4&&y.stateNode.containerInfo===A.containerInfo&&y.stateNode.implementation===A.implementation){t(S,y.sibling),y=i(y,A.children||[]),y.return=S,S=y;break e}else{t(S,y);break}else e(S,y);y=y.sibling}y=Gd(A,S.mode,x),y.return=S,S=y}return o(S);case wr:return F=A._init,O(S,y,F(A._payload),x)}if(ha(A))return P(S,y,A,x);if(Ho(A))return C(S,y,A,x);Pu(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,y!==null&&y.tag===6?(t(S,y.sibling),y=i(y,A),y.return=S,S=y):(t(S,y),y=Wd(A,S.mode,x),y.return=S,S=y),o(S)):t(S,y)}return O}var Ys=AE(!0),RE=AE(!1),Tc=ti(null),Sc=null,Ns=null,lm=null;function um(){lm=Ns=Sc=null}function cm(n){var e=Tc.current;ve(Tc),n._currentValue=e}function Bf(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function Us(n,e){Sc=n,lm=Ns=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Vt=!0),n.firstContext=null)}function rn(n){var e=n._currentValue;if(lm!==n)if(n={context:n,memoizedValue:e,next:null},Ns===null){if(Sc===null)throw Error(B(308));Ns=n,Sc.dependencies={lanes:0,firstContext:n}}else Ns=Ns.next=n;return e}var Ai=null;function hm(n){Ai===null?Ai=[n]:Ai.push(n)}function PE(n,e,t,r){var i=e.interleaved;return i===null?(t.next=t,hm(e)):(t.next=i.next,i.next=t),e.interleaved=t,er(n,r)}function er(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Ir=!1;function dm(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kE(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Yn(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,er(n,t)}return i=r.interleaved,i===null?(e.next=e,hm(r)):(e.next=i.next,i.next=e),r.interleaved=e,er(n,t)}function Wu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Jp(n,t)}}function Hy(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?i=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?i=s=e:s=s.next=e}else i=s=e;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Ac(n,e,t,r){var i=n.updateQueue;Ir=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=n.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,a=s;do{var m=a.lane,w=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var P=n,C=a;switch(m=e,w=t,C.tag){case 1:if(P=C.payload,typeof P=="function"){p=P.call(w,p,m);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=C.payload,m=typeof P=="function"?P.call(w,p,m):P,m==null)break e;p=Ce({},p,m);break e;case 2:Ir=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else w={eventTime:w,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=w,u=p):d=d.next=w,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Fi|=o,n.lanes=o,n.memoizedState=p}}function Qy(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var r=n[e],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Dl={},kn=ti(Dl),Ya=ti(Dl),Ja=ti(Dl);function Ri(n){if(n===Dl)throw Error(B(174));return n}function fm(n,e){switch(pe(Ja,e),pe(Ya,n),pe(kn,Dl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=wf(e,n)}ve(kn),pe(kn,e)}function Js(){ve(kn),ve(Ya),ve(Ja)}function CE(n){Ri(Ja.current);var e=Ri(kn.current),t=wf(e,n.type);e!==t&&(pe(Ya,n),pe(kn,t))}function pm(n){Ya.current===n&&(ve(kn),ve(Ya))}var Re=ti(0);function Rc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ud=[];function mm(){for(var n=0;n<Ud.length;n++)Ud[n]._workInProgressVersionPrimary=null;Ud.length=0}var Gu=or.ReactCurrentDispatcher,Bd=or.ReactCurrentBatchConfig,Mi=0,Pe=null,Ge=null,Je=null,Pc=!1,Ra=!1,Xa=0,$k=0;function dt(){throw Error(B(321))}function gm(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!mn(n[t],e[t]))return!1;return!0}function _m(n,e,t,r,i,s){if(Mi=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Gu.current=n===null||n.memoizedState===null?Kk:Hk,n=t(r,i),Ra){s=0;do{if(Ra=!1,Xa=0,25<=s)throw Error(B(301));s+=1,Je=Ge=null,e.updateQueue=null,Gu.current=Qk,n=t(r,i)}while(Ra)}if(Gu.current=kc,e=Ge!==null&&Ge.next!==null,Mi=0,Je=Ge=Pe=null,Pc=!1,e)throw Error(B(300));return n}function ym(){var n=Xa!==0;return Xa=0,n}function yn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Pe.memoizedState=Je=n:Je=Je.next=n,Je}function sn(){if(Ge===null){var n=Pe.alternate;n=n!==null?n.memoizedState:null}else n=Ge.next;var e=Je===null?Pe.memoizedState:Je.next;if(e!==null)Je=e,Ge=n;else{if(n===null)throw Error(B(310));Ge=n,n={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Je===null?Pe.memoizedState=Je=n:Je=Je.next=n}return Je}function Za(n,e){return typeof e=="function"?e(n):e}function zd(n){var e=sn(),t=e.queue;if(t===null)throw Error(B(311));t.lastRenderedReducer=n;var r=Ge,i=r.baseQueue,s=t.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,t.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((Mi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:n(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,o=r):u=u.next=p,Pe.lanes|=d,Fi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,mn(r,e.memoizedState)||(Vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,t.lastRenderedState=r}if(n=t.interleaved,n!==null){i=n;do s=i.lane,Pe.lanes|=s,Fi|=s,i=i.next;while(i!==n)}else i===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function jd(n){var e=sn(),t=e.queue;if(t===null)throw Error(B(311));t.lastRenderedReducer=n;var r=t.dispatch,i=t.pending,s=e.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do s=n(s,o.action),o=o.next;while(o!==i);mn(s,e.memoizedState)||(Vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,r]}function DE(){}function NE(n,e){var t=Pe,r=sn(),i=e(),s=!mn(r.memoizedState,i);if(s&&(r.memoizedState=i,Vt=!0),r=r.queue,vm(xE.bind(null,t,r,n),[n]),r.getSnapshot!==e||s||Je!==null&&Je.memoizedState.tag&1){if(t.flags|=2048,el(9,VE.bind(null,t,r,i,e),void 0,null),Ze===null)throw Error(B(349));Mi&30||bE(t,e,i)}return i}function bE(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function VE(n,e,t,r){e.value=t,e.getSnapshot=r,OE(e)&&LE(n)}function xE(n,e,t){return t(function(){OE(e)&&LE(n)})}function OE(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!mn(n,t)}catch{return!0}}function LE(n){var e=er(n,1);e!==null&&fn(e,n,1,-1)}function Yy(n){var e=yn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:n},e.queue=n,n=n.dispatch=Gk.bind(null,Pe,n),[e.memoizedState,n]}function el(n,e,t,r){return n={tag:n,create:e,destroy:t,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n)),n}function ME(){return sn().memoizedState}function Ku(n,e,t,r){var i=yn();Pe.flags|=n,i.memoizedState=el(1|e,t,void 0,r===void 0?null:r)}function lh(n,e,t,r){var i=sn();r=r===void 0?null:r;var s=void 0;if(Ge!==null){var o=Ge.memoizedState;if(s=o.destroy,r!==null&&gm(r,o.deps)){i.memoizedState=el(e,t,s,r);return}}Pe.flags|=n,i.memoizedState=el(1|e,t,s,r)}function Jy(n,e){return Ku(8390656,8,n,e)}function vm(n,e){return lh(2048,8,n,e)}function FE(n,e){return lh(4,2,n,e)}function UE(n,e){return lh(4,4,n,e)}function BE(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function zE(n,e,t){return t=t!=null?t.concat([n]):null,lh(4,4,BE.bind(null,e,n),t)}function wm(){}function jE(n,e){var t=sn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&gm(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function $E(n,e){var t=sn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&gm(e,r[1])?r[0]:(n=n(),t.memoizedState=[n,e],n)}function qE(n,e,t){return Mi&21?(mn(t,e)||(t=QI(),Pe.lanes|=t,Fi|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Vt=!0),n.memoizedState=t)}function qk(n,e){var t=ce;ce=t!==0&&4>t?t:4,n(!0);var r=Bd.transition;Bd.transition={};try{n(!1),e()}finally{ce=t,Bd.transition=r}}function WE(){return sn().memoizedState}function Wk(n,e,t){var r=Lr(n);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},GE(n))KE(e,t);else if(t=PE(n,e,t,r),t!==null){var i=Tt();fn(t,n,r,i),HE(t,e,r)}}function Gk(n,e,t){var r=Lr(n),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(GE(n))KE(e,i);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(i.hasEagerState=!0,i.eagerState=a,mn(a,o)){var u=e.interleaved;u===null?(i.next=i,hm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}t=PE(n,e,i,r),t!==null&&(i=Tt(),fn(t,n,r,i),HE(t,e,r))}}function GE(n){var e=n.alternate;return n===Pe||e!==null&&e===Pe}function KE(n,e){Ra=Pc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function HE(n,e,t){if(t&4194240){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Jp(n,t)}}var kc={readContext:rn,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},Kk={readContext:rn,useCallback:function(n,e){return yn().memoizedState=[n,e===void 0?null:e],n},useContext:rn,useEffect:Jy,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ku(4194308,4,BE.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ku(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ku(4,2,n,e)},useMemo:function(n,e){var t=yn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var r=yn();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},r.queue=n,n=n.dispatch=Wk.bind(null,Pe,n),[r.memoizedState,n]},useRef:function(n){var e=yn();return n={current:n},e.memoizedState=n},useState:Yy,useDebugValue:wm,useDeferredValue:function(n){return yn().memoizedState=n},useTransition:function(){var n=Yy(!1),e=n[0];return n=qk.bind(null,n[1]),yn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var r=Pe,i=yn();if(Ie){if(t===void 0)throw Error(B(407));t=t()}else{if(t=e(),Ze===null)throw Error(B(349));Mi&30||bE(r,e,t)}i.memoizedState=t;var s={value:t,getSnapshot:e};return i.queue=s,Jy(xE.bind(null,r,s,n),[n]),r.flags|=2048,el(9,VE.bind(null,r,s,t,e),void 0,null),t},useId:function(){var n=yn(),e=Ze.identifierPrefix;if(Ie){var t=Gn,r=Wn;t=(r&~(1<<32-dn(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=Xa++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=$k++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Hk={readContext:rn,useCallback:jE,useContext:rn,useEffect:vm,useImperativeHandle:zE,useInsertionEffect:FE,useLayoutEffect:UE,useMemo:$E,useReducer:zd,useRef:ME,useState:function(){return zd(Za)},useDebugValue:wm,useDeferredValue:function(n){var e=sn();return qE(e,Ge.memoizedState,n)},useTransition:function(){var n=zd(Za)[0],e=sn().memoizedState;return[n,e]},useMutableSource:DE,useSyncExternalStore:NE,useId:WE,unstable_isNewReconciler:!1},Qk={readContext:rn,useCallback:jE,useContext:rn,useEffect:vm,useImperativeHandle:zE,useInsertionEffect:FE,useLayoutEffect:UE,useMemo:$E,useReducer:jd,useRef:ME,useState:function(){return jd(Za)},useDebugValue:wm,useDeferredValue:function(n){var e=sn();return Ge===null?e.memoizedState=n:qE(e,Ge.memoizedState,n)},useTransition:function(){var n=jd(Za)[0],e=sn().memoizedState;return[n,e]},useMutableSource:DE,useSyncExternalStore:NE,useId:WE,unstable_isNewReconciler:!1};function un(n,e){if(n&&n.defaultProps){e=Ce({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function zf(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:Ce({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var uh={isMounted:function(n){return(n=n._reactInternals)?Zi(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var r=Tt(),i=Lr(n),s=Yn(r,i);s.payload=e,t!=null&&(s.callback=t),e=xr(n,s,i),e!==null&&(fn(e,n,i,r),Wu(e,n,i))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=Tt(),i=Lr(n),s=Yn(r,i);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=xr(n,s,i),e!==null&&(fn(e,n,i,r),Wu(e,n,i))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Tt(),r=Lr(n),i=Yn(t,r);i.tag=2,e!=null&&(i.callback=e),e=xr(n,i,r),e!==null&&(fn(e,n,r,t),Wu(e,n,r))}};function Xy(n,e,t,r,i,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ga(t,r)||!Ga(i,s):!0}function QE(n,e,t){var r=!1,i=jr,s=e.contextType;return typeof s=="object"&&s!==null?s=rn(s):(i=Ft(e)?Oi:gt.current,r=e.contextTypes,s=(r=r!=null)?Hs(n,i):jr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=uh,n.stateNode=e,e._reactInternals=n,r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=s),e}function Zy(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&uh.enqueueReplaceState(e,e.state,null)}function jf(n,e,t,r){var i=n.stateNode;i.props=t,i.state=n.memoizedState,i.refs={},dm(n);var s=e.contextType;typeof s=="object"&&s!==null?i.context=rn(s):(s=Ft(e)?Oi:gt.current,i.context=Hs(n,s)),i.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(zf(n,e,s,t),i.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&uh.enqueueReplaceState(i,i.state,null),Ac(n,t,i,r),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308)}function Xs(n,e){try{var t="",r=e;do t+=TP(r),r=r.return;while(r);var i=t}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:i,digest:null}}function $d(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function $f(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Yk=typeof WeakMap=="function"?WeakMap:Map;function YE(n,e,t){t=Yn(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){Dc||(Dc=!0,Zf=r),$f(n,e)},t}function JE(n,e,t){t=Yn(-1,t),t.tag=3;var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;t.payload=function(){return r(i)},t.callback=function(){$f(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){$f(n,e),typeof r!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function ev(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new Yk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(t)||(i.add(t),n=cC.bind(null,n,e,t),e.then(n,n))}function tv(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function nv(n,e,t,r,i){return n.mode&1?(n.flags|=65536,n.lanes=i,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Yn(-1,1),e.tag=2,xr(t,e,1))),t.lanes|=1),n)}var Jk=or.ReactCurrentOwner,Vt=!1;function wt(n,e,t,r){e.child=n===null?RE(e,null,t,r):Ys(e,n.child,t,r)}function rv(n,e,t,r,i){t=t.render;var s=e.ref;return Us(e,i),r=_m(n,e,t,r,s,i),t=ym(),n!==null&&!Vt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,tr(n,e,i)):(Ie&&t&&sm(e),e.flags|=1,wt(n,e,r,i),e.child)}function iv(n,e,t,r,i){if(n===null){var s=t.type;return typeof s=="function"&&!km(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,XE(n,e,s,r,i)):(n=Ju(t.type,null,r,e,e.mode,i),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&i)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Ga,t(o,r)&&n.ref===e.ref)return tr(n,e,i)}return e.flags|=1,n=Mr(s,r),n.ref=e.ref,n.return=e,e.child=n}function XE(n,e,t,r,i){if(n!==null){var s=n.memoizedProps;if(Ga(s,r)&&n.ref===e.ref)if(Vt=!1,e.pendingProps=r=s,(n.lanes&i)!==0)n.flags&131072&&(Vt=!0);else return e.lanes=n.lanes,tr(n,e,i)}return qf(n,e,t,r,i)}function ZE(n,e,t){var r=e.pendingProps,i=r.children,s=n!==null?n.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Vs,zt),zt|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,pe(Vs,zt),zt|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:t,pe(Vs,zt),zt|=r}else s!==null?(r=s.baseLanes|t,e.memoizedState=null):r=t,pe(Vs,zt),zt|=r;return wt(n,e,i,t),e.child}function eT(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function qf(n,e,t,r,i){var s=Ft(t)?Oi:gt.current;return s=Hs(e,s),Us(e,i),t=_m(n,e,t,r,s,i),r=ym(),n!==null&&!Vt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,tr(n,e,i)):(Ie&&r&&sm(e),e.flags|=1,wt(n,e,t,i),e.child)}function sv(n,e,t,r,i){if(Ft(t)){var s=!0;wc(e)}else s=!1;if(Us(e,i),e.stateNode===null)Hu(n,e),QE(e,t,r),jf(e,t,r,i),r=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=rn(c):(c=Ft(t)?Oi:gt.current,c=Hs(e,c));var d=t.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Zy(e,o,r,c),Ir=!1;var m=e.memoizedState;o.state=m,Ac(e,r,o,i),u=e.memoizedState,a!==r||m!==u||Mt.current||Ir?(typeof d=="function"&&(zf(e,t,d,r),u=e.memoizedState),(a=Ir||Xy(e,t,a,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,kE(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:un(e.type,a),o.props=c,p=e.pendingProps,m=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=rn(u):(u=Ft(t)?Oi:gt.current,u=Hs(e,u));var w=t.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==u)&&Zy(e,o,r,u),Ir=!1,m=e.memoizedState,o.state=m,Ac(e,r,o,i);var P=e.memoizedState;a!==p||m!==P||Mt.current||Ir?(typeof w=="function"&&(zf(e,t,w,r),P=e.memoizedState),(c=Ir||Xy(e,t,c,r,m,P,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),r=!1)}return Wf(n,e,t,r,s,i)}function Wf(n,e,t,r,i,s){eT(n,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&qy(e,t,!1),tr(n,e,s);r=e.stateNode,Jk.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,n!==null&&o?(e.child=Ys(e,n.child,null,s),e.child=Ys(e,null,a,s)):wt(n,e,a,s),e.memoizedState=r.state,i&&qy(e,t,!0),e.child}function tT(n){var e=n.stateNode;e.pendingContext?$y(n,e.pendingContext,e.pendingContext!==e.context):e.context&&$y(n,e.context,!1),fm(n,e.containerInfo)}function ov(n,e,t,r,i){return Qs(),am(i),e.flags|=256,wt(n,e,t,r),e.child}var Gf={dehydrated:null,treeContext:null,retryLane:0};function Kf(n){return{baseLanes:n,cachePool:null,transitions:null}}function nT(n,e,t){var r=e.pendingProps,i=Re.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(i|=1),pe(Re,i&1),n===null)return Uf(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,n=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=dh(o,r,0,null),n=Ni(n,r,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Kf(t),e.memoizedState=Gf,n):Im(e,o));if(i=n.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Xk(n,e,o,r,a,i,t);if(s){s=r.fallback,o=e.mode,i=n.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Mr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Mr(a,s):(s=Ni(s,o,t,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=n.child.memoizedState,o=o===null?Kf(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Gf,r}return s=n.child,n=s.sibling,r=Mr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=r,e.memoizedState=null,r}function Im(n,e){return e=dh({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function ku(n,e,t,r){return r!==null&&am(r),Ys(e,n.child,null,t),n=Im(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Xk(n,e,t,r,i,s,o){if(t)return e.flags&256?(e.flags&=-257,r=$d(Error(B(422))),ku(n,e,o,r)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=dh({mode:"visible",children:r.children},i,0,null),s=Ni(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ys(e,n.child,null,o),e.child.memoizedState=Kf(o),e.memoizedState=Gf,s);if(!(e.mode&1))return ku(n,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=$d(s,r,void 0),ku(n,e,o,r)}if(a=(o&n.childLanes)!==0,Vt||a){if(r=Ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,er(n,i),fn(r,n,i,-1))}return Pm(),r=$d(Error(B(421))),ku(n,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=n.child,e=hC.bind(null,n),i._reactRetry=e,null):(n=s.treeContext,$t=Vr(i.nextSibling),Wt=e,Ie=!0,hn=null,n!==null&&(Jt[Xt++]=Wn,Jt[Xt++]=Gn,Jt[Xt++]=Li,Wn=n.id,Gn=n.overflow,Li=e),e=Im(e,r.children),e.flags|=4096,e)}function av(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),Bf(n.return,e,t)}function qd(n,e,t,r,i){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=t,s.tailMode=i)}function rT(n,e,t){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(wt(n,e,r.children,t),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&av(n,t,e);else if(n.tag===19)av(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}if(pe(Re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(t=e.child,i=null;t!==null;)n=t.alternate,n!==null&&Rc(n)===null&&(i=t),t=t.sibling;t=i,t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null),qd(e,!1,i,t,s);break;case"backwards":for(t=null,i=e.child,e.child=null;i!==null;){if(n=i.alternate,n!==null&&Rc(n)===null){e.child=i;break}n=i.sibling,i.sibling=t,t=i,i=n}qd(e,!0,t,null,s);break;case"together":qd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Hu(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function tr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Fi|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(B(153));if(e.child!==null){for(n=e.child,t=Mr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Mr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Zk(n,e,t){switch(e.tag){case 3:tT(e),Qs();break;case 5:CE(e);break;case 1:Ft(e.type)&&wc(e);break;case 4:fm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(Tc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Re,Re.current&1),e.flags|=128,null):t&e.child.childLanes?nT(n,e,t):(pe(Re,Re.current&1),n=tr(n,e,t),n!==null?n.sibling:null);pe(Re,Re.current&1);break;case 19:if(r=(t&e.childLanes)!==0,n.flags&128){if(r)return rT(n,e,t);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,ZE(n,e,t)}return tr(n,e,t)}var iT,Hf,sT,oT;iT=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Hf=function(){};sT=function(n,e,t,r){var i=n.memoizedProps;if(i!==r){n=e.stateNode,Ri(kn.current);var s=null;switch(t){case"input":i=gf(n,i),r=gf(n,r),s=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),s=[];break;case"textarea":i=vf(n,i),r=vf(n,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(n.onclick=yc)}If(t,r);var o;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ua.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(s||(s=[]),s.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ua.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&_e("scroll",n),s||a===u||(s=[])):(s=s||[]).push(c,u))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};oT=function(n,e,t,r){t!==r&&(e.flags|=4)};function ea(n,e){if(!Ie)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function ft(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function eC(n,e,t){var r=e.pendingProps;switch(om(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return Ft(e.type)&&vc(),ft(e),null;case 3:return r=e.stateNode,Js(),ve(Mt),ve(gt),mm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(Ru(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hn!==null&&(np(hn),hn=null))),Hf(n,e),ft(e),null;case 5:pm(e);var i=Ri(Ja.current);if(t=e.type,n!==null&&e.stateNode!=null)sT(n,e,t,r,i),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return ft(e),null}if(n=Ri(kn.current),Ru(e)){r=e.stateNode,t=e.type;var s=e.memoizedProps;switch(r[vn]=e,r[Qa]=s,n=(e.mode&1)!==0,t){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<fa.length;i++)_e(fa[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":gy(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":yy(r,s),_e("invalid",r)}If(t,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Au(r.textContent,a,n),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Au(r.textContent,a,n),i=["children",""+a]):Ua.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_e("scroll",r)}switch(t){case"input":_u(r),_y(r,s,!0);break;case"textarea":_u(r),vy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=yc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=xI(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof r.is=="string"?n=o.createElement(t,{is:r.is}):(n=o.createElement(t),t==="select"&&(o=n,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):n=o.createElementNS(n,t),n[vn]=e,n[Qa]=r,iT(n,e,!1,!1),e.stateNode=n;e:{switch(o=Ef(t,r),t){case"dialog":_e("cancel",n),_e("close",n),i=r;break;case"iframe":case"object":case"embed":_e("load",n),i=r;break;case"video":case"audio":for(i=0;i<fa.length;i++)_e(fa[i],n);i=r;break;case"source":_e("error",n),i=r;break;case"img":case"image":case"link":_e("error",n),_e("load",n),i=r;break;case"details":_e("toggle",n),i=r;break;case"input":gy(n,r),i=gf(n,r),_e("invalid",n);break;case"option":i=r;break;case"select":n._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),_e("invalid",n);break;case"textarea":yy(n,r),i=vf(n,r),_e("invalid",n);break;default:i=r}If(t,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?MI(n,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&OI(n,u)):s==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Ba(n,u):typeof u=="number"&&Ba(n,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ua.hasOwnProperty(s)?u!=null&&s==="onScroll"&&_e("scroll",n):u!=null&&Wp(n,s,u,o))}switch(t){case"input":_u(n),_y(n,r,!1);break;case"textarea":_u(n),vy(n);break;case"option":r.value!=null&&n.setAttribute("value",""+zr(r.value));break;case"select":n.multiple=!!r.multiple,s=r.value,s!=null?Os(n,!!r.multiple,s,!1):r.defaultValue!=null&&Os(n,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(n.onclick=yc)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ft(e),null;case 6:if(n&&e.stateNode!=null)oT(n,e,n.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(t=Ri(Ja.current),Ri(kn.current),Ru(e)){if(r=e.stateNode,t=e.memoizedProps,r[vn]=e,(s=r.nodeValue!==t)&&(n=Wt,n!==null))switch(n.tag){case 3:Au(r.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Au(r.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[vn]=e,e.stateNode=r}return ft(e),null;case 13:if(ve(Re),r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ie&&$t!==null&&e.mode&1&&!(e.flags&128))SE(),Qs(),e.flags|=98560,s=!1;else if(s=Ru(e),r!==null&&r.dehydrated!==null){if(n===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[vn]=e}else Qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ft(e),s=!1}else hn!==null&&(np(hn),hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(n!==null&&n.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(n===null||Re.current&1?Ke===0&&(Ke=3):Pm())),e.updateQueue!==null&&(e.flags|=4),ft(e),null);case 4:return Js(),Hf(n,e),n===null&&Ka(e.stateNode.containerInfo),ft(e),null;case 10:return cm(e.type._context),ft(e),null;case 17:return Ft(e.type)&&vc(),ft(e),null;case 19:if(ve(Re),s=e.memoizedState,s===null)return ft(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ea(s,!1);else{if(Ke!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Rc(n),o!==null){for(e.flags|=128,ea(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)s=t,n=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return pe(Re,Re.current&1|2),e.child}n=n.sibling}s.tail!==null&&Ue()>Zs&&(e.flags|=128,r=!0,ea(s,!1),e.lanes=4194304)}else{if(!r)if(n=Rc(o),n!==null){if(e.flags|=128,r=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),ea(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return ft(e),null}else 2*Ue()-s.renderingStartTime>Zs&&t!==1073741824&&(e.flags|=128,r=!0,ea(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ue(),e.sibling=null,t=Re.current,pe(Re,r?t&1|2:t&1),e):(ft(e),null);case 22:case 23:return Rm(),r=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?zt&1073741824&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function tC(n,e){switch(om(e),e.tag){case 1:return Ft(e.type)&&vc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Js(),ve(Mt),ve(gt),mm(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return pm(e),null;case 13:if(ve(Re),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Qs()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ve(Re),null;case 4:return Js(),null;case 10:return cm(e.type._context),null;case 22:case 23:return Rm(),null;case 24:return null;default:return null}}var Cu=!1,mt=!1,nC=typeof WeakSet=="function"?WeakSet:Set,K=null;function bs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){be(n,e,r)}else t.current=null}function Qf(n,e,t){try{t()}catch(r){be(n,e,r)}}var lv=!1;function rC(n,e){if(bf=mc,n=hE(),im(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,u=-1,c=0,d=0,p=n,m=null;t:for(;;){for(var w;p!==t||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)m=p,p=w;for(;;){if(p===n)break t;if(m===t&&++c===i&&(a=o),m===s&&++d===r&&(u=o),(w=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=w}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Vf={focusedElem:n,selectionRange:t},mc=!1,K=e;K!==null;)if(e=K,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,K=n;else for(;K!==null;){e=K;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var C=P.memoizedProps,O=P.memoizedState,S=e.stateNode,y=S.getSnapshotBeforeUpdate(e.elementType===e.type?C:un(e.type,C),O);S.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(x){be(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}return P=lv,lv=!1,P}function Pa(n,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&n)===n){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qf(e,t,s)}i=i.next}while(i!==r)}}function ch(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function Yf(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function aT(n){var e=n.alternate;e!==null&&(n.alternate=null,aT(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[vn],delete e[Qa],delete e[Lf],delete e[Uk],delete e[Bk])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function lT(n){return n.tag===5||n.tag===3||n.tag===4}function uv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||lT(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Jf(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=yc));else if(r!==4&&(n=n.child,n!==null))for(Jf(n,e,t),n=n.sibling;n!==null;)Jf(n,e,t),n=n.sibling}function Xf(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(r!==4&&(n=n.child,n!==null))for(Xf(n,e,t),n=n.sibling;n!==null;)Xf(n,e,t),n=n.sibling}var nt=null,cn=!1;function mr(n,e,t){for(t=t.child;t!==null;)uT(n,e,t),t=t.sibling}function uT(n,e,t){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(nh,t)}catch{}switch(t.tag){case 5:mt||bs(t,e);case 6:var r=nt,i=cn;nt=null,mr(n,e,t),nt=r,cn=i,nt!==null&&(cn?(n=nt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):nt.removeChild(t.stateNode));break;case 18:nt!==null&&(cn?(n=nt,t=t.stateNode,n.nodeType===8?Md(n.parentNode,t):n.nodeType===1&&Md(n,t),qa(n)):Md(nt,t.stateNode));break;case 4:r=nt,i=cn,nt=t.stateNode.containerInfo,cn=!0,mr(n,e,t),nt=r,cn=i;break;case 0:case 11:case 14:case 15:if(!mt&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Qf(t,e,o),i=i.next}while(i!==r)}mr(n,e,t);break;case 1:if(!mt&&(bs(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){be(t,e,a)}mr(n,e,t);break;case 21:mr(n,e,t);break;case 22:t.mode&1?(mt=(r=mt)||t.memoizedState!==null,mr(n,e,t),mt=r):mr(n,e,t);break;default:mr(n,e,t)}}function cv(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new nC),e.forEach(function(r){var i=dC.bind(null,n,r);t.has(r)||(t.add(r),r.then(i,i))})}}function ln(n,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:nt=a.stateNode,cn=!1;break e;case 3:nt=a.stateNode.containerInfo,cn=!0;break e;case 4:nt=a.stateNode.containerInfo,cn=!0;break e}a=a.return}if(nt===null)throw Error(B(160));uT(s,o,i),nt=null,cn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){be(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cT(e,n),e=e.sibling}function cT(n,e){var t=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ln(e,n),_n(n),r&4){try{Pa(3,n,n.return),ch(3,n)}catch(C){be(n,n.return,C)}try{Pa(5,n,n.return)}catch(C){be(n,n.return,C)}}break;case 1:ln(e,n),_n(n),r&512&&t!==null&&bs(t,t.return);break;case 5:if(ln(e,n),_n(n),r&512&&t!==null&&bs(t,t.return),n.flags&32){var i=n.stateNode;try{Ba(i,"")}catch(C){be(n,n.return,C)}}if(r&4&&(i=n.stateNode,i!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,u=n.updateQueue;if(n.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&bI(i,s),Ef(a,o);var c=Ef(a,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?MI(i,p):d==="dangerouslySetInnerHTML"?OI(i,p):d==="children"?Ba(i,p):Wp(i,d,p,c)}switch(a){case"input":_f(i,s);break;case"textarea":VI(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?Os(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?Os(i,!!s.multiple,s.defaultValue,!0):Os(i,!!s.multiple,s.multiple?[]:"",!1))}i[Qa]=s}catch(C){be(n,n.return,C)}}break;case 6:if(ln(e,n),_n(n),r&4){if(n.stateNode===null)throw Error(B(162));i=n.stateNode,s=n.memoizedProps;try{i.nodeValue=s}catch(C){be(n,n.return,C)}}break;case 3:if(ln(e,n),_n(n),r&4&&t!==null&&t.memoizedState.isDehydrated)try{qa(e.containerInfo)}catch(C){be(n,n.return,C)}break;case 4:ln(e,n),_n(n);break;case 13:ln(e,n),_n(n),i=n.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Sm=Ue())),r&4&&cv(n);break;case 22:if(d=t!==null&&t.memoizedState!==null,n.mode&1?(mt=(c=mt)||d,ln(e,n),mt=c):ln(e,n),_n(n),r&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!d&&n.mode&1)for(K=n,d=n.child;d!==null;){for(p=K=d;K!==null;){switch(m=K,w=m.child,m.tag){case 0:case 11:case 14:case 15:Pa(4,m,m.return);break;case 1:bs(m,m.return);var P=m.stateNode;if(typeof P.componentWillUnmount=="function"){r=m,t=m.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(C){be(r,t,C)}}break;case 5:bs(m,m.return);break;case 22:if(m.memoizedState!==null){dv(p);continue}}w!==null?(w.return=m,K=w):dv(p)}d=d.sibling}e:for(d=null,p=n;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=LI("display",o))}catch(C){be(n,n.return,C)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(C){be(n,n.return,C)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===n)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break e;for(;p.sibling===null;){if(p.return===null||p.return===n)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ln(e,n),_n(n),r&4&&cv(n);break;case 21:break;default:ln(e,n),_n(n)}}function _n(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(lT(t)){var r=t;break e}t=t.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ba(i,""),r.flags&=-33);var s=uv(n);Xf(n,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=uv(n);Jf(n,a,o);break;default:throw Error(B(161))}}catch(u){be(n,n.return,u)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function iC(n,e,t){K=n,hT(n)}function hT(n,e,t){for(var r=(n.mode&1)!==0;K!==null;){var i=K,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Cu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||mt;a=Cu;var c=mt;if(Cu=o,(mt=u)&&!c)for(K=i;K!==null;)o=K,u=o.child,o.tag===22&&o.memoizedState!==null?fv(i):u!==null?(u.return=o,K=u):fv(i);for(;s!==null;)K=s,hT(s),s=s.sibling;K=i,Cu=a,mt=c}hv(n)}else i.subtreeFlags&8772&&s!==null?(s.return=i,K=s):hv(n)}}function hv(n){for(;K!==null;){var e=K;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mt||ch(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!mt)if(t===null)r.componentDidMount();else{var i=e.elementType===e.type?t.memoizedProps:un(e.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Qy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Qy(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&qa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}mt||e.flags&512&&Yf(e)}catch(m){be(e,e.return,m)}}if(e===n){K=null;break}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}}function dv(n){for(;K!==null;){var e=K;if(e===n){K=null;break}var t=e.sibling;if(t!==null){t.return=e.return,K=t;break}K=e.return}}function fv(n){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{ch(4,e)}catch(u){be(e,t,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){be(e,i,u)}}var s=e.return;try{Yf(e)}catch(u){be(e,s,u)}break;case 5:var o=e.return;try{Yf(e)}catch(u){be(e,o,u)}}}catch(u){be(e,e.return,u)}if(e===n){K=null;break}var a=e.sibling;if(a!==null){a.return=e.return,K=a;break}K=e.return}}var sC=Math.ceil,Cc=or.ReactCurrentDispatcher,Em=or.ReactCurrentOwner,tn=or.ReactCurrentBatchConfig,oe=0,Ze=null,We=null,st=0,zt=0,Vs=ti(0),Ke=0,tl=null,Fi=0,hh=0,Tm=0,ka=null,bt=null,Sm=0,Zs=1/0,$n=null,Dc=!1,Zf=null,Or=null,Du=!1,Pr=null,Nc=0,Ca=0,ep=null,Qu=-1,Yu=0;function Tt(){return oe&6?Ue():Qu!==-1?Qu:Qu=Ue()}function Lr(n){return n.mode&1?oe&2&&st!==0?st&-st:jk.transition!==null?(Yu===0&&(Yu=QI()),Yu):(n=ce,n!==0||(n=window.event,n=n===void 0?16:nE(n.type)),n):1}function fn(n,e,t,r){if(50<Ca)throw Ca=0,ep=null,Error(B(185));Pl(n,t,r),(!(oe&2)||n!==Ze)&&(n===Ze&&(!(oe&2)&&(hh|=t),Ke===4&&Tr(n,st)),Ut(n,r),t===1&&oe===0&&!(e.mode&1)&&(Zs=Ue()+500,ah&&ni()))}function Ut(n,e){var t=n.callbackNode;jP(n,e);var r=pc(n,n===Ze?st:0);if(r===0)t!==null&&Ey(t),n.callbackNode=null,n.callbackPriority=0;else if(e=r&-r,n.callbackPriority!==e){if(t!=null&&Ey(t),e===1)n.tag===0?zk(pv.bind(null,n)):IE(pv.bind(null,n)),Mk(function(){!(oe&6)&&ni()}),t=null;else{switch(YI(r)){case 1:t=Yp;break;case 4:t=KI;break;case 16:t=fc;break;case 536870912:t=HI;break;default:t=fc}t=vT(t,dT.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function dT(n,e){if(Qu=-1,Yu=0,oe&6)throw Error(B(327));var t=n.callbackNode;if(Bs()&&n.callbackNode!==t)return null;var r=pc(n,n===Ze?st:0);if(r===0)return null;if(r&30||r&n.expiredLanes||e)e=bc(n,r);else{e=r;var i=oe;oe|=2;var s=pT();(Ze!==n||st!==e)&&($n=null,Zs=Ue()+500,Di(n,e));do try{lC();break}catch(a){fT(n,a)}while(!0);um(),Cc.current=s,oe=i,We!==null?e=0:(Ze=null,st=0,e=Ke)}if(e!==0){if(e===2&&(i=Pf(n),i!==0&&(r=i,e=tp(n,i))),e===1)throw t=tl,Di(n,0),Tr(n,r),Ut(n,Ue()),t;if(e===6)Tr(n,r);else{if(i=n.current.alternate,!(r&30)&&!oC(i)&&(e=bc(n,r),e===2&&(s=Pf(n),s!==0&&(r=s,e=tp(n,s))),e===1))throw t=tl,Di(n,0),Tr(n,r),Ut(n,Ue()),t;switch(n.finishedWork=i,n.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:gi(n,bt,$n);break;case 3:if(Tr(n,r),(r&130023424)===r&&(e=Sm+500-Ue(),10<e)){if(pc(n,0)!==0)break;if(i=n.suspendedLanes,(i&r)!==r){Tt(),n.pingedLanes|=n.suspendedLanes&i;break}n.timeoutHandle=Of(gi.bind(null,n,bt,$n),e);break}gi(n,bt,$n);break;case 4:if(Tr(n,r),(r&4194240)===r)break;for(e=n.eventTimes,i=-1;0<r;){var o=31-dn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sC(r/1960))-r,10<r){n.timeoutHandle=Of(gi.bind(null,n,bt,$n),r);break}gi(n,bt,$n);break;case 5:gi(n,bt,$n);break;default:throw Error(B(329))}}}return Ut(n,Ue()),n.callbackNode===t?dT.bind(null,n):null}function tp(n,e){var t=ka;return n.current.memoizedState.isDehydrated&&(Di(n,e).flags|=256),n=bc(n,e),n!==2&&(e=bt,bt=t,e!==null&&np(e)),n}function np(n){bt===null?bt=n:bt.push.apply(bt,n)}function oC(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],s=i.getSnapshot;i=i.value;try{if(!mn(s(),i))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Tr(n,e){for(e&=~Tm,e&=~hh,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-dn(e),r=1<<t;n[t]=-1,e&=~r}}function pv(n){if(oe&6)throw Error(B(327));Bs();var e=pc(n,0);if(!(e&1))return Ut(n,Ue()),null;var t=bc(n,e);if(n.tag!==0&&t===2){var r=Pf(n);r!==0&&(e=r,t=tp(n,r))}if(t===1)throw t=tl,Di(n,0),Tr(n,e),Ut(n,Ue()),t;if(t===6)throw Error(B(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,gi(n,bt,$n),Ut(n,Ue()),null}function Am(n,e){var t=oe;oe|=1;try{return n(e)}finally{oe=t,oe===0&&(Zs=Ue()+500,ah&&ni())}}function Ui(n){Pr!==null&&Pr.tag===0&&!(oe&6)&&Bs();var e=oe;oe|=1;var t=tn.transition,r=ce;try{if(tn.transition=null,ce=1,n)return n()}finally{ce=r,tn.transition=t,oe=e,!(oe&6)&&ni()}}function Rm(){zt=Vs.current,ve(Vs)}function Di(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Lk(t)),We!==null)for(t=We.return;t!==null;){var r=t;switch(om(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vc();break;case 3:Js(),ve(Mt),ve(gt),mm();break;case 5:pm(r);break;case 4:Js();break;case 13:ve(Re);break;case 19:ve(Re);break;case 10:cm(r.type._context);break;case 22:case 23:Rm()}t=t.return}if(Ze=n,We=n=Mr(n.current,null),st=zt=e,Ke=0,tl=null,Tm=hh=Fi=0,bt=ka=null,Ai!==null){for(e=0;e<Ai.length;e++)if(t=Ai[e],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,s=t.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}t.pending=r}Ai=null}return n}function fT(n,e){do{var t=We;try{if(um(),Gu.current=kc,Pc){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pc=!1}if(Mi=0,Je=Ge=Pe=null,Ra=!1,Xa=0,Em.current=null,t===null||t.return===null){Ke=1,tl=e,We=null;break}e:{var s=n,o=t.return,a=t,u=e;if(e=st,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=tv(o);if(w!==null){w.flags&=-257,nv(w,o,a,s,e),w.mode&1&&ev(s,c,e),e=w,u=c;var P=e.updateQueue;if(P===null){var C=new Set;C.add(u),e.updateQueue=C}else P.add(u);break e}else{if(!(e&1)){ev(s,c,e),Pm();break e}u=Error(B(426))}}else if(Ie&&a.mode&1){var O=tv(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),nv(O,o,a,s,e),am(Xs(u,a));break e}}s=u=Xs(u,a),Ke!==4&&(Ke=2),ka===null?ka=[s]:ka.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=YE(s,u,e);Hy(s,S);break e;case 1:a=u;var y=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Or===null||!Or.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=JE(s,a,e);Hy(s,x);break e}}s=s.return}while(s!==null)}gT(t)}catch(U){e=U,We===t&&t!==null&&(We=t=t.return);continue}break}while(!0)}function pT(){var n=Cc.current;return Cc.current=kc,n===null?kc:n}function Pm(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),Ze===null||!(Fi&268435455)&&!(hh&268435455)||Tr(Ze,st)}function bc(n,e){var t=oe;oe|=2;var r=pT();(Ze!==n||st!==e)&&($n=null,Di(n,e));do try{aC();break}catch(i){fT(n,i)}while(!0);if(um(),oe=t,Cc.current=r,We!==null)throw Error(B(261));return Ze=null,st=0,Ke}function aC(){for(;We!==null;)mT(We)}function lC(){for(;We!==null&&!VP();)mT(We)}function mT(n){var e=yT(n.alternate,n,zt);n.memoizedProps=n.pendingProps,e===null?gT(n):We=e,Em.current=null}function gT(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=tC(t,e),t!==null){t.flags&=32767,We=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ke=6,We=null;return}}else if(t=eC(t,e,zt),t!==null){We=t;return}if(e=e.sibling,e!==null){We=e;return}We=e=n}while(e!==null);Ke===0&&(Ke=5)}function gi(n,e,t){var r=ce,i=tn.transition;try{tn.transition=null,ce=1,uC(n,e,t,r)}finally{tn.transition=i,ce=r}return null}function uC(n,e,t,r){do Bs();while(Pr!==null);if(oe&6)throw Error(B(327));t=n.finishedWork;var i=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(B(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if($P(n,s),n===Ze&&(We=Ze=null,st=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Du||(Du=!0,vT(fc,function(){return Bs(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=tn.transition,tn.transition=null;var o=ce;ce=1;var a=oe;oe|=4,Em.current=null,rC(n,t),cT(t,n),Ck(Vf),mc=!!bf,Vf=bf=null,n.current=t,iC(t),xP(),oe=a,ce=o,tn.transition=s}else n.current=t;if(Du&&(Du=!1,Pr=n,Nc=i),s=n.pendingLanes,s===0&&(Or=null),MP(t.stateNode),Ut(n,Ue()),e!==null)for(r=n.onRecoverableError,t=0;t<e.length;t++)i=e[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Dc)throw Dc=!1,n=Zf,Zf=null,n;return Nc&1&&n.tag!==0&&Bs(),s=n.pendingLanes,s&1?n===ep?Ca++:(Ca=0,ep=n):Ca=0,ni(),null}function Bs(){if(Pr!==null){var n=YI(Nc),e=tn.transition,t=ce;try{if(tn.transition=null,ce=16>n?16:n,Pr===null)var r=!1;else{if(n=Pr,Pr=null,Nc=0,oe&6)throw Error(B(331));var i=oe;for(oe|=4,K=n.current;K!==null;){var s=K,o=s.child;if(K.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(K=c;K!==null;){var d=K;switch(d.tag){case 0:case 11:case 15:Pa(8,d,s)}var p=d.child;if(p!==null)p.return=d,K=p;else for(;K!==null;){d=K;var m=d.sibling,w=d.return;if(aT(d),d===c){K=null;break}if(m!==null){m.return=w,K=m;break}K=w}}}var P=s.alternate;if(P!==null){var C=P.child;if(C!==null){P.child=null;do{var O=C.sibling;C.sibling=null,C=O}while(C!==null)}}K=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,K=o;else e:for(;K!==null;){if(s=K,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Pa(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,K=S;break e}K=s.return}}var y=n.current;for(K=y;K!==null;){o=K;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,K=A;else e:for(o=y;K!==null;){if(a=K,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ch(9,a)}}catch(U){be(a,a.return,U)}if(a===o){K=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,K=x;break e}K=a.return}}if(oe=i,ni(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(nh,n)}catch{}r=!0}return r}finally{ce=t,tn.transition=e}}return!1}function mv(n,e,t){e=Xs(t,e),e=YE(n,e,1),n=xr(n,e,1),e=Tt(),n!==null&&(Pl(n,1,e),Ut(n,e))}function be(n,e,t){if(n.tag===3)mv(n,n,t);else for(;e!==null;){if(e.tag===3){mv(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Or===null||!Or.has(r))){n=Xs(t,n),n=JE(e,n,1),e=xr(e,n,1),n=Tt(),e!==null&&(Pl(e,1,n),Ut(e,n));break}}e=e.return}}function cC(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),e=Tt(),n.pingedLanes|=n.suspendedLanes&t,Ze===n&&(st&t)===t&&(Ke===4||Ke===3&&(st&130023424)===st&&500>Ue()-Sm?Di(n,0):Tm|=t),Ut(n,e)}function _T(n,e){e===0&&(n.mode&1?(e=wu,wu<<=1,!(wu&130023424)&&(wu=4194304)):e=1);var t=Tt();n=er(n,e),n!==null&&(Pl(n,e,t),Ut(n,t))}function hC(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),_T(n,t)}function dC(n,e){var t=0;switch(n.tag){case 13:var r=n.stateNode,i=n.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=n.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),_T(n,t)}var yT;yT=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Mt.current)Vt=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Vt=!1,Zk(n,e,t);Vt=!!(n.flags&131072)}else Vt=!1,Ie&&e.flags&1048576&&EE(e,Ec,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Hu(n,e),n=e.pendingProps;var i=Hs(e,gt.current);Us(e,t),i=_m(null,e,r,n,i,t);var s=ym();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ft(r)?(s=!0,wc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,dm(e),i.updater=uh,e.stateNode=i,i._reactInternals=e,jf(e,r,n,t),e=Wf(null,e,r,!0,s,t)):(e.tag=0,Ie&&s&&sm(e),wt(null,e,i,t),e=e.child),e;case 16:r=e.elementType;e:{switch(Hu(n,e),n=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=pC(r),n=un(r,n),i){case 0:e=qf(null,e,r,n,t);break e;case 1:e=sv(null,e,r,n,t);break e;case 11:e=rv(null,e,r,n,t);break e;case 14:e=iv(null,e,r,un(r.type,n),t);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),qf(n,e,r,i,t);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),sv(n,e,r,i,t);case 3:e:{if(tT(e),n===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,kE(n,e),Ac(e,r,null,t);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Xs(Error(B(423)),e),e=ov(n,e,r,t,i);break e}else if(r!==i){i=Xs(Error(B(424)),e),e=ov(n,e,r,t,i);break e}else for($t=Vr(e.stateNode.containerInfo.firstChild),Wt=e,Ie=!0,hn=null,t=RE(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Qs(),r===i){e=tr(n,e,t);break e}wt(n,e,r,t)}e=e.child}return e;case 5:return CE(e),n===null&&Uf(e),r=e.type,i=e.pendingProps,s=n!==null?n.memoizedProps:null,o=i.children,xf(r,i)?o=null:s!==null&&xf(r,s)&&(e.flags|=32),eT(n,e),wt(n,e,o,t),e.child;case 6:return n===null&&Uf(e),null;case 13:return nT(n,e,t);case 4:return fm(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=Ys(e,null,r,t):wt(n,e,r,t),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),rv(n,e,r,i,t);case 7:return wt(n,e,e.pendingProps,t),e.child;case 8:return wt(n,e,e.pendingProps.children,t),e.child;case 12:return wt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(Tc,r._currentValue),r._currentValue=o,s!==null)if(mn(s.value,o)){if(s.children===i.children&&!Mt.current){e=tr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Yn(-1,t&-t),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=t,u=s.alternate,u!==null&&(u.lanes|=t),Bf(s.return,t,e),a.lanes|=t;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Bf(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}wt(n,e,i.children,t),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Us(e,t),i=rn(i),r=r(i),e.flags|=1,wt(n,e,r,t),e.child;case 14:return r=e.type,i=un(r,e.pendingProps),i=un(r.type,i),iv(n,e,r,i,t);case 15:return XE(n,e,e.type,e.pendingProps,t);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Hu(n,e),e.tag=1,Ft(r)?(n=!0,wc(e)):n=!1,Us(e,t),QE(e,r,i),jf(e,r,i,t),Wf(null,e,r,!0,n,t);case 19:return rT(n,e,t);case 22:return ZE(n,e,t)}throw Error(B(156,e.tag))};function vT(n,e){return GI(n,e)}function fC(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(n,e,t,r){return new fC(n,e,t,r)}function km(n){return n=n.prototype,!(!n||!n.isReactComponent)}function pC(n){if(typeof n=="function")return km(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Kp)return 11;if(n===Hp)return 14}return 2}function Mr(n,e){var t=n.alternate;return t===null?(t=Zt(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ju(n,e,t,r,i,s){var o=2;if(r=n,typeof n=="function")km(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Ts:return Ni(t.children,i,s,e);case Gp:o=8,i|=8;break;case df:return n=Zt(12,t,e,i|2),n.elementType=df,n.lanes=s,n;case ff:return n=Zt(13,t,e,i),n.elementType=ff,n.lanes=s,n;case pf:return n=Zt(19,t,e,i),n.elementType=pf,n.lanes=s,n;case CI:return dh(t,i,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case PI:o=10;break e;case kI:o=9;break e;case Kp:o=11;break e;case Hp:o=14;break e;case wr:o=16,r=null;break e}throw Error(B(130,n==null?n:typeof n,""))}return e=Zt(o,t,e,i),e.elementType=n,e.type=r,e.lanes=s,e}function Ni(n,e,t,r){return n=Zt(7,n,r,e),n.lanes=t,n}function dh(n,e,t,r){return n=Zt(22,n,r,e),n.elementType=CI,n.lanes=t,n.stateNode={isHidden:!1},n}function Wd(n,e,t){return n=Zt(6,n,null,e),n.lanes=t,n}function Gd(n,e,t){return e=Zt(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function mC(n,e,t,r,i){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rd(0),this.expirationTimes=Rd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cm(n,e,t,r,i,s,o,a,u){return n=new mC(n,e,t,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zt(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},dm(s),n}function gC(n,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Es,key:r==null?null:""+r,children:n,containerInfo:e,implementation:t}}function wT(n){if(!n)return jr;n=n._reactInternals;e:{if(Zi(n)!==n||n.tag!==1)throw Error(B(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(n.tag===1){var t=n.type;if(Ft(t))return wE(n,t,e)}return e}function IT(n,e,t,r,i,s,o,a,u){return n=Cm(t,r,!0,n,i,s,o,a,u),n.context=wT(null),t=n.current,r=Tt(),i=Lr(t),s=Yn(r,i),s.callback=e??null,xr(t,s,i),n.current.lanes=i,Pl(n,i,r),Ut(n,r),n}function fh(n,e,t,r){var i=e.current,s=Tt(),o=Lr(i);return t=wT(t),e.context===null?e.context=t:e.pendingContext=t,e=Yn(s,o),e.payload={element:n},r=r===void 0?null:r,r!==null&&(e.callback=r),n=xr(i,e,o),n!==null&&(fn(n,i,o,s),Wu(n,i,o)),o}function Vc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function gv(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Dm(n,e){gv(n,e),(n=n.alternate)&&gv(n,e)}function _C(){return null}var ET=typeof reportError=="function"?reportError:function(n){console.error(n)};function Nm(n){this._internalRoot=n}ph.prototype.render=Nm.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(B(409));fh(n,e,null,null)};ph.prototype.unmount=Nm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ui(function(){fh(null,n,null,null)}),e[Zn]=null}};function ph(n){this._internalRoot=n}ph.prototype.unstable_scheduleHydration=function(n){if(n){var e=ZI();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Er.length&&e!==0&&e<Er[t].priority;t++);Er.splice(t,0,n),t===0&&tE(n)}};function bm(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function mh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function _v(){}function yC(n,e,t,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Vc(o);s.call(c)}}var o=IT(e,r,n,0,null,!1,!1,"",_v);return n._reactRootContainer=o,n[Zn]=o.current,Ka(n.nodeType===8?n.parentNode:n),Ui(),o}for(;i=n.lastChild;)n.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Vc(u);a.call(c)}}var u=Cm(n,0,!1,null,null,!1,!1,"",_v);return n._reactRootContainer=u,n[Zn]=u.current,Ka(n.nodeType===8?n.parentNode:n),Ui(function(){fh(e,u,t,r)}),u}function gh(n,e,t,r,i){var s=t._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Vc(o);a.call(u)}}fh(e,o,n,i)}else o=yC(t,e,n,i,r);return Vc(o)}JI=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=da(e.pendingLanes);t!==0&&(Jp(e,t|1),Ut(e,Ue()),!(oe&6)&&(Zs=Ue()+500,ni()))}break;case 13:Ui(function(){var r=er(n,1);if(r!==null){var i=Tt();fn(r,n,1,i)}}),Dm(n,1)}};Xp=function(n){if(n.tag===13){var e=er(n,134217728);if(e!==null){var t=Tt();fn(e,n,134217728,t)}Dm(n,134217728)}};XI=function(n){if(n.tag===13){var e=Lr(n),t=er(n,e);if(t!==null){var r=Tt();fn(t,n,e,r)}Dm(n,e)}};ZI=function(){return ce};eE=function(n,e){var t=ce;try{return ce=n,e()}finally{ce=t}};Sf=function(n,e,t){switch(e){case"input":if(_f(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var i=oh(r);if(!i)throw Error(B(90));NI(r),_f(r,i)}}}break;case"textarea":VI(n,t);break;case"select":e=t.value,e!=null&&Os(n,!!t.multiple,e,!1)}};BI=Am;zI=Ui;var vC={usingClientEntryPoint:!1,Events:[Cl,Ps,oh,FI,UI,Am]},ta={findFiberByHostInstance:Si,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wC={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:or.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=qI(n),n===null?null:n.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||_C,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nu.isDisabled&&Nu.supportsFiber)try{nh=Nu.inject(wC),Pn=Nu}catch{}}Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vC;Ht.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bm(e))throw Error(B(200));return gC(n,e,null,t)};Ht.createRoot=function(n,e){if(!bm(n))throw Error(B(299));var t=!1,r="",i=ET;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Cm(n,1,!1,null,null,t,!1,r,i),n[Zn]=e.current,Ka(n.nodeType===8?n.parentNode:n),new Nm(e)};Ht.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(B(188)):(n=Object.keys(n).join(","),Error(B(268,n)));return n=qI(e),n=n===null?null:n.stateNode,n};Ht.flushSync=function(n){return Ui(n)};Ht.hydrate=function(n,e,t){if(!mh(e))throw Error(B(200));return gh(null,n,e,!0,t)};Ht.hydrateRoot=function(n,e,t){if(!bm(n))throw Error(B(405));var r=t!=null&&t.hydratedSources||null,i=!1,s="",o=ET;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=IT(e,null,n,1,t??null,i,!1,s,o),n[Zn]=e.current,Ka(n),r)for(n=0;n<r.length;n++)t=r[n],i=t._getVersion,i=i(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,i]:e.mutableSourceEagerHydrationData.push(t,i);return new ph(e)};Ht.render=function(n,e,t){if(!mh(e))throw Error(B(200));return gh(null,n,e,!1,t)};Ht.unmountComponentAtNode=function(n){if(!mh(n))throw Error(B(40));return n._reactRootContainer?(Ui(function(){gh(null,null,n,!1,function(){n._reactRootContainer=null,n[Zn]=null})}),!0):!1};Ht.unstable_batchedUpdates=Am;Ht.unstable_renderSubtreeIntoContainer=function(n,e,t,r){if(!mh(t))throw Error(B(200));if(n==null||n._reactInternals===void 0)throw Error(B(38));return gh(n,e,t,!1,r)};Ht.version="18.3.1-next-f1338f8080-20240426";function TT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(TT)}catch(n){console.error(n)}}TT(),TI.exports=Ht;var IC=TI.exports,yv=IC;cf.createRoot=yv.createRoot,cf.hydrateRoot=yv.hydrateRoot;var vv={};/**
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
 */const ST=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},EC=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},AT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,u=i+2<n.length,c=u?n[i+2]:0,d=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,w=c&63;u||(w=64,o||(m=64)),r.push(t[d],t[p],t[m],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ST(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):EC(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const p=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new TC;const m=s<<2|a>>4;if(r.push(m),c!==64){const w=a<<4&240|c>>2;if(r.push(w),p!==64){const P=c<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class TC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SC=function(n){const e=ST(n);return AT.encodeByteArray(e,!0)},xc=function(n){return SC(n).replace(/\./g,"")},RT=function(n){try{return AT.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Oc(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!AC(t)||(n[t]=Oc(n[t],e[t]));return n}function AC(n){return n!=="__proto__"}/**
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
 */function PT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const RC=()=>PT().__FIREBASE_DEFAULTS__,PC=()=>{if(typeof process>"u"||typeof vv>"u")return;const n=vv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},kC=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&RT(n[1]);return e&&JSON.parse(e)},Vm=()=>{try{return RC()||PC()||kC()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},kT=()=>{var n;return(n=Vm())===null||n===void 0?void 0:n.config},CC=n=>{var e;return(e=Vm())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class DC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function NC(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[xc(JSON.stringify(t)),xc(JSON.stringify(o)),""].join(".")}/**
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
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function xm(){var n;const e=(n=Vm())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function VC(){return typeof window<"u"||CT()}function CT(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function xC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function DT(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Om(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function NT(){const n=De();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function bT(){return!xm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nl(){try{return typeof indexedDB=="object"}catch{return!1}}function OC(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const LC="FirebaseError";class St extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=LC,Object.setPrototypeOf(this,St.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,es.prototype.create)}}class es{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?MC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new St(i,a,r)}}function MC(n,e){return n.replace(FC,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const FC=/\{\$([^}]+)}/g;/**
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
 */function wv(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function UC(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function rl(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Iv(s)&&Iv(o)){if(!rl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Iv(n){return n!==null&&typeof n=="object"}/**
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
 */function Io(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function pa(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function VT(n,e){const t=new BC(n,e);return t.subscribe.bind(t)}class BC{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");zC(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Kd),i.error===void 0&&(i.error=Kd),i.complete===void 0&&(i.complete=Kd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zC(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Kd(){}/**
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
 */function Y(n){return n&&n._delegate?n._delegate:n}class Nn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _i="[DEFAULT]";/**
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
 */class jC{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new DC;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qC(e))try{this.getOrInitializeService({instanceIdentifier:_i})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=_i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_i){return this.instances.has(e)}getOptions(e=_i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$C(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_i){return this.component?this.component.multipleInstances?e:_i:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $C(n){return n===_i?void 0:n}function qC(n){return n.instantiationMode==="EAGER"}/**
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
 */class xT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Lm=[];var te;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(te||(te={}));const OT={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},WC=te.INFO,GC={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},KC=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=GC[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _h{constructor(e){this.name=e,this._logLevel=WC,this._logHandler=KC,this._userLogHandler=null,Lm.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}function HC(n){Lm.forEach(e=>{e.setLogLevel(n)})}function QC(n,e){for(const t of Lm){let r=null;e&&e.level&&(r=OT[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&n({level:te[s].toLowerCase(),message:a,args:o,type:i.name})}}}const YC=(n,e)=>e.some(t=>n instanceof t);let Ev,Tv;function JC(){return Ev||(Ev=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XC(){return Tv||(Tv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const LT=new WeakMap,rp=new WeakMap,MT=new WeakMap,Hd=new WeakMap,Mm=new WeakMap;function ZC(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Fr(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&LT.set(t,n)}).catch(()=>{}),Mm.set(e,n),e}function eD(n){if(rp.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});rp.set(n,e)}let ip={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return rp.get(n);if(e==="objectStoreNames")return n.objectStoreNames||MT.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Fr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function tD(n){ip=n(ip)}function nD(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Qd(this),e,...t);return MT.set(r,e.sort?e.sort():[e]),Fr(r)}:XC().includes(n)?function(...e){return n.apply(Qd(this),e),Fr(LT.get(this))}:function(...e){return Fr(n.apply(Qd(this),e))}}function rD(n){return typeof n=="function"?nD(n):(n instanceof IDBTransaction&&eD(n),YC(n,JC())?new Proxy(n,ip):n)}function Fr(n){if(n instanceof IDBRequest)return ZC(n);if(Hd.has(n))return Hd.get(n);const e=rD(n);return e!==n&&(Hd.set(n,e),Mm.set(e,n)),e}const Qd=n=>Mm.get(n);function iD(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Fr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Fr(o.result),u.oldVersion,u.newVersion,Fr(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const sD=["get","getKey","getAll","getAllKeys","count"],oD=["put","add","delete","clear"],Yd=new Map;function Sv(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Yd.get(e))return Yd.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=oD.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||sD.includes(t)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&u.done]))[0]};return Yd.set(e,s),s}tD(n=>({...n,get:(e,t,r)=>Sv(e,t)||n.get(e,t,r),has:(e,t)=>!!Sv(e,t)||n.has(e,t)}));/**
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
 */class aD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lD(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function lD(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lc="@firebase/app",sp="0.10.13";/**
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
 */const nr=new _h("@firebase/app"),uD="@firebase/app-compat",cD="@firebase/analytics-compat",hD="@firebase/analytics",dD="@firebase/app-check-compat",fD="@firebase/app-check",pD="@firebase/auth",mD="@firebase/auth-compat",gD="@firebase/database",_D="@firebase/data-connect",yD="@firebase/database-compat",vD="@firebase/functions",wD="@firebase/functions-compat",ID="@firebase/installations",ED="@firebase/installations-compat",TD="@firebase/messaging",SD="@firebase/messaging-compat",AD="@firebase/performance",RD="@firebase/performance-compat",PD="@firebase/remote-config",kD="@firebase/remote-config-compat",CD="@firebase/storage",DD="@firebase/storage-compat",ND="@firebase/firestore",bD="@firebase/vertexai-preview",VD="@firebase/firestore-compat",xD="firebase",OD="10.14.1";/**
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
 */const $r="[DEFAULT]",LD={[Lc]:"fire-core",[uD]:"fire-core-compat",[hD]:"fire-analytics",[cD]:"fire-analytics-compat",[fD]:"fire-app-check",[dD]:"fire-app-check-compat",[pD]:"fire-auth",[mD]:"fire-auth-compat",[gD]:"fire-rtdb",[_D]:"fire-data-connect",[yD]:"fire-rtdb-compat",[vD]:"fire-fn",[wD]:"fire-fn-compat",[ID]:"fire-iid",[ED]:"fire-iid-compat",[TD]:"fire-fcm",[SD]:"fire-fcm-compat",[AD]:"fire-perf",[RD]:"fire-perf-compat",[PD]:"fire-rc",[kD]:"fire-rc-compat",[CD]:"fire-gcs",[DD]:"fire-gcs-compat",[ND]:"fire-fst",[VD]:"fire-fst-compat",[bD]:"fire-vertex","fire-js":"fire-js",[xD]:"fire-js-all"};/**
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
 */const qr=new Map,eo=new Map,to=new Map;function il(n,e){try{n.container.addComponent(e)}catch(t){nr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function FT(n,e){n.container.addOrOverwriteComponent(e)}function Wr(n){const e=n.name;if(to.has(e))return nr.debug(`There were multiple attempts to register component ${e}.`),!1;to.set(e,n);for(const t of qr.values())il(t,n);for(const t of eo.values())il(t,n);return!0}function UT(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function MD(n,e,t=$r){UT(n,e).clearInstance(t)}function BT(n){return n.options!==void 0}function Ve(n){return n.settings!==void 0}function FD(){to.clear()}/**
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
 */const UD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nn=new es("app","Firebase",UD);/**
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
 */let zT=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
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
 */class BD extends zT{constructor(e,t,r,i){const s=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},t),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,pn(Lc,sp,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Um(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw nn.create("server-app-deleted")}}/**
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
 */const ri=OD;function Fm(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$r,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw nn.create("bad-app-name",{appName:String(i)});if(t||(t=kT()),!t)throw nn.create("no-options");const s=qr.get(i);if(s){if(rl(t,s.options)&&rl(r,s.config))return s;throw nn.create("duplicate-app",{appName:i})}const o=new xT(i);for(const u of to.values())o.addComponent(u);const a=new zT(t,r,o);return qr.set(i,a),a}function zD(n,e){if(VC()&&!CT())throw nn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;BT(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((d,p)=>Math.imul(31,d)+p.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw nn.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=eo.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new xT(s);for(const c of to.values())a.addComponent(c);const u=new BD(t,e,s,a);return eo.set(s,u),u}function jD(n=$r){const e=qr.get(n);if(!e&&n===$r&&kT())return Fm();if(!e)throw nn.create("no-app",{appName:n});return e}function $D(){return Array.from(qr.values())}async function Um(n){let e=!1;const t=n.name;qr.has(t)?(e=!0,qr.delete(t)):eo.has(t)&&n.decRefCount()<=0&&(eo.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function pn(n,e,t){var r;let i=(r=LD[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nr.warn(a.join(" "));return}Wr(new Nn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function jT(n,e){if(n!==null&&typeof n!="function")throw nn.create("invalid-log-argument");QC(n,e)}function $T(n){HC(n)}/**
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
 */const qD="firebase-heartbeat-database",WD=1,sl="firebase-heartbeat-store";let Jd=null;function qT(){return Jd||(Jd=iD(qD,WD,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(sl)}catch(t){console.warn(t)}}}}).catch(n=>{throw nn.create("idb-open",{originalErrorMessage:n.message})})),Jd}async function GD(n){try{const t=(await qT()).transaction(sl),r=await t.objectStore(sl).get(WT(n));return await t.done,r}catch(e){if(e instanceof St)nr.warn(e.message);else{const t=nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nr.warn(t.message)}}}async function Av(n,e){try{const r=(await qT()).transaction(sl,"readwrite");await r.objectStore(sl).put(e,WT(n)),await r.done}catch(t){if(t instanceof St)nr.warn(t.message);else{const r=nn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});nr.warn(r.message)}}}function WT(n){return`${n.name}!${n.options.appId}`}/**
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
 */const KD=1024,HD=30*24*60*60*1e3;class QD{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new JD(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Rv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=HD}),this._storage.overwrite(this._heartbeatsCache))}catch(r){nr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Rv(),{heartbeatsToSend:r,unsentEntries:i}=YD(this._heartbeatsCache.heartbeats),s=xc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return nr.warn(t),""}}}function Rv(){return new Date().toISOString().substring(0,10)}function YD(n,e=KD){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Pv(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Pv(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class JD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nl()?OC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await GD(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Av(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Av(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Pv(n){return xc(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function XD(n){Wr(new Nn("platform-logger",e=>new aD(e),"PRIVATE")),Wr(new Nn("heartbeat",e=>new QD(e),"PRIVATE")),pn(Lc,sp,n),pn(Lc,sp,"esm2017"),pn("fire-js","")}XD("");const ZD=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:St,SDK_VERSION:ri,_DEFAULT_ENTRY_NAME:$r,_addComponent:il,_addOrOverwriteComponent:FT,_apps:qr,_clearComponents:FD,_components:to,_getProvider:UT,_isFirebaseApp:BT,_isFirebaseServerApp:Ve,_registerComponent:Wr,_removeServiceInstance:MD,_serverApps:eo,deleteApp:Um,getApp:jD,getApps:$D,initializeApp:Fm,initializeServerApp:zD,onLog:jT,registerVersion:pn,setLogLevel:$T},Symbol.toStringTag,{value:"Module"}));/**
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
 */class eN{constructor(e,t){this._delegate=e,this.firebase=t,il(e,new Nn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Um(this._delegate)))}_getService(e,t=$r){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=$r){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){il(this._delegate,e)}_addOrOverwriteComponent(e){FT(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const tN={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},kv=new es("app-compat","Firebase",tN);/**
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
 */function nN(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:pn,setLogLevel:$T,onLog:jT,apps:null,SDK_VERSION:ri,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:ZD}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||$r,!wv(e,c))throw kv.create("no-app",{appName:c});return e[c]}i.App=n;function s(c,d={}){const p=Fm(c,d);if(wv(e,p.name))return e[p.name];const m=new n(p,t);return e[p.name]=m,m}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const d=c.name,p=d.replace("-compat","");if(Wr(c)&&c.type==="PUBLIC"){const m=(w=i())=>{if(typeof w[p]!="function")throw kv.create("invalid-app-argument",{appName:d});return w[p]()};c.serviceProps!==void 0&&Oc(m,c.serviceProps),t[p]=m,n.prototype[p]=function(...w){return this._getService.bind(this,d).apply(this,c.multipleInstances?w:[])}}return c.type==="PUBLIC"?t[p]:null}function u(c,d){return d==="serverAuth"?null:d}return t}/**
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
 */function GT(){const n=nN(eN);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:GT,extendNamespace:e,createSubscribe:VT,ErrorFactory:es,deepExtend:Oc});function e(t){Oc(n,t)}return n}const rN=GT();/**
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
 */const Cv=new _h("@firebase/app-compat"),iN="@firebase/app-compat",sN="0.2.43";/**
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
 */function oN(n){pn(iN,sN,n)}/**
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
 */try{const n=PT();if(n.firebase!==void 0){Cv.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Cv.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Ur=rN;oN();var aN="firebase",lN="10.14.1";/**
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
 */Ur.registerVersion(aN,lN,"app-compat");function Bm(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const na={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},ds={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function uN(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function KT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cN=uN,hN=KT,HT=new es("auth","Firebase",KT());/**
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
 */const Mc=new _h("@firebase/auth");function dN(n,...e){Mc.logLevel<=te.WARN&&Mc.warn(`Auth (${ri}): ${n}`,...e)}function Xu(n,...e){Mc.logLevel<=te.ERROR&&Mc.error(`Auth (${ri}): ${n}`,...e)}/**
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
 */function lt(n,...e){throw jm(n,...e)}function He(n,...e){return jm(n,...e)}function zm(n,e,t){const r=Object.assign(Object.assign({},hN()),{[e]:t});return new es("auth","Firebase",r).create(e,{appName:n.name})}function et(n){return zm(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Eo(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&lt(n,"argument-error"),zm(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jm(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return HT.create(n,...e)}function z(n,e,...t){if(!n)throw jm(e,...t)}function Sn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Xu(e),new Error(e)}function gn(n,e){n||Sn(e)}/**
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
 */function ol(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function $m(){return Dv()==="http:"||Dv()==="https:"}function Dv(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function fN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($m()||DT()||"connection"in navigator)?navigator.onLine:!0}function pN(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Nl{constructor(e,t){this.shortDelay=e,this.longDelay=t,gn(t>e,"Short delay should be less than long delay!"),this.isMobile=bC()||Om()}get(){return fN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qm(n,e){gn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class QT{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gN=new Nl(3e4,6e4);function Le(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Me(n,e,t,r,i={}){return YT(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Io(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:u},s);return xC()||(c.referrerPolicy="no-referrer"),QT.fetch()(JT(n,n.config.apiHost,t,a),c)})}async function YT(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},mN),e);try{const i=new yN(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ma(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ma(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ma(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw ma(n,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw zm(n,d,c);lt(n,d)}}catch(i){if(i instanceof St)throw i;lt(n,"network-request-failed",{message:String(i)})}}async function ar(n,e,t,r,i={}){const s=await Me(n,e,t,r,i);return"mfaPendingCredential"in s&&lt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function JT(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?qm(n.config,i):`${n.config.apiScheme}://${i}`}function _N(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(He(this.auth,"network-request-failed")),gN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ma(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=He(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */function Nv(n){return n!==void 0&&n.getResponse!==void 0}function bv(n){return n!==void 0&&n.enterprise!==void 0}class vN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return _N(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function wN(n){return(await Me(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function IN(n,e){return Me(n,"GET","/v2/recaptchaConfig",Le(n,e))}/**
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
 */async function EN(n,e){return Me(n,"POST","/v1/accounts:delete",e)}async function TN(n,e){return Me(n,"POST","/v1/accounts:update",e)}async function XT(n,e){return Me(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Da(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SN(n,e=!1){const t=Y(n),r=await t.getIdToken(e),i=yh(r);z(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Da(Xd(i.auth_time)),issuedAtTime:Da(Xd(i.iat)),expirationTime:Da(Xd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xd(n){return Number(n)*1e3}function yh(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Xu("JWT malformed, contained fewer than 3 sections"),null;try{const i=RT(t);return i?JSON.parse(i):(Xu("Failed to decode base64 JWT payload"),null)}catch(i){return Xu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Vv(n){const e=yh(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function rr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof St&&AN(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function AN({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class RN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class op{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Da(this.lastLoginAt),this.creationTime=Da(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function al(n){var e;const t=n.auth,r=await n.getIdToken(),i=await rr(n,XT(t,{idToken:r}));z(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ZT(s.providerUserInfo):[],a=kN(n.providerData,o),u=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new op(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function PN(n){const e=Y(n);await al(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kN(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ZT(n){return n.map(e=>{var{providerId:t}=e,r=Bm(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function CN(n,e){const t=await YT(n,{},async()=>{const r=Io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=JT(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",QT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function DN(n,e){return Me(n,"POST","/v2/accounts:revokeToken",Le(n,e))}/**
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
 */class zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=Vv(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await CN(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new zs;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zs,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
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
 */function gr(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Kn{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Bm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new op(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await rr(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return SN(this,e)}reload(){return PN(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await al(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ve(this.auth.app))return Promise.reject(et(this.auth));const e=await this.getIdToken();return await rr(this,EN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,u,c,d;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(i=t.email)!==null&&i!==void 0?i:void 0,w=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=t.photoURL)!==null&&o!==void 0?o:void 0,C=(a=t.tenantId)!==null&&a!==void 0?a:void 0,O=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=t.createdAt)!==null&&c!==void 0?c:void 0,y=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:A,emailVerified:x,isAnonymous:U,providerData:F,stsTokenManager:v}=t;z(A&&v,e,"internal-error");const _=zs.fromJSON(this.name,v);z(typeof A=="string",e,"internal-error"),gr(p,e.name),gr(m,e.name),z(typeof x=="boolean",e,"internal-error"),z(typeof U=="boolean",e,"internal-error"),gr(w,e.name),gr(P,e.name),gr(C,e.name),gr(O,e.name),gr(S,e.name),gr(y,e.name);const I=new Kn({uid:A,auth:e,email:m,emailVerified:x,displayName:p,isAnonymous:U,photoURL:P,phoneNumber:w,tenantId:C,stsTokenManager:_,createdAt:S,lastLoginAt:y});return F&&Array.isArray(F)&&(I.providerData=F.map(E=>Object.assign({},E))),O&&(I._redirectEventId=O),I}static async _fromIdTokenResponse(e,t,r=!1){const i=new zs;i.updateFromServerResponse(t);const s=new Kn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await al(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ZT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new zs;a.updateFromIdToken(r);const u=new Kn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new op(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const xv=new Map;function qt(n){gn(n instanceof Function,"Expected a class definition");let e=xv.get(n);return e?(gn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,xv.set(n,e),e)}/**
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
 */class e0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}e0.type="NONE";const no=e0;/**
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
 */function bi(n,e,t){return`firebase:${n}:${e}:${t}`}class js{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=bi(this.userKey,i.apiKey,s),this.fullPersistenceKey=bi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new js(qt(no),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||qt(no);const o=bi(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const d=await c._get(o);if(d){const p=Kn._fromJSON(e,d);c!==s&&(a=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new js(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new js(s,e,r))}}/**
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
 */function Ov(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(i0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(t0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(s0(e))return"Blackberry";if(o0(e))return"Webos";if(n0(e))return"Safari";if((e.includes("chrome/")||r0(e))&&!e.includes("edge/"))return"Chrome";if(bl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function t0(n=De()){return/firefox\//i.test(n)}function n0(n=De()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function r0(n=De()){return/crios\//i.test(n)}function i0(n=De()){return/iemobile/i.test(n)}function bl(n=De()){return/android/i.test(n)}function s0(n=De()){return/blackberry/i.test(n)}function o0(n=De()){return/webos/i.test(n)}function Vl(n=De()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function NN(n=De()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function bN(n=De()){var e;return Vl(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function VN(){return NT()&&document.documentMode===10}function a0(n=De()){return Vl(n)||bl(n)||o0(n)||s0(n)||/windows phone/i.test(n)||i0(n)}/**
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
 */function l0(n,e=[]){let t;switch(n){case"Browser":t=Ov(De());break;case"Worker":t=`${Ov(De())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ri}/${r}`}/**
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
 */class xN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function ON(n,e={}){return Me(n,"GET","/v2/passwordPolicy",Le(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const LN=6;class MN{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:LN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class FN{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lv(this),this.idTokenSubscription=new Lv(this),this.beforeStateQueue=new xN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=HT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=qt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await js.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await XT(this,{idToken:e}),r=await Kn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ve(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await al(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ve(this.app))return Promise.reject(et(this));const t=e?Y(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ve(this.app)?Promise.reject(et(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ve(this.app)?Promise.reject(et(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ON(this),t=new MN(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new es("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await DN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&qt(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await js.create(this,[qt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=l0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&dN(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function xe(n){return Y(n)}class Lv{constructor(e){this.auth=e,this.observer=null,this.addObserver=VT(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let xl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function UN(n){xl=n}function Wm(n){return xl.loadJS(n)}function BN(){return xl.recaptchaV2Script}function zN(){return xl.recaptchaEnterpriseScript}function jN(){return xl.gapiScript}function u0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const $N="recaptcha-enterprise",qN="NO_RECAPTCHA";class WN{constructor(e){this.type=$N,this.auth=xe(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{IN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new vN(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;bv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(qN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&bv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=zN();u.length!==0&&(u+=a),Wm(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Mv(n,e,t,r=!1){const i=new WN(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ll(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Mv(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Mv(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)})}function GN(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(qt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function KN(n,e,t){const r=xe(n);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=c0(e),{host:o,port:a}=HN(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||QN()}function c0(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function HN(n){const e=c0(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Fv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Fv(o)}}}function Fv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function QN(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class To{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,t){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}/**
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
 */async function h0(n,e){return Me(n,"POST","/v1/accounts:resetPassword",Le(n,e))}async function YN(n,e){return Me(n,"POST","/v1/accounts:update",e)}async function JN(n,e){return Me(n,"POST","/v1/accounts:signUp",e)}async function XN(n,e){return Me(n,"POST","/v1/accounts:update",Le(n,e))}/**
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
 */async function ZN(n,e){return ar(n,"POST","/v1/accounts:signInWithPassword",Le(n,e))}async function vh(n,e){return Me(n,"POST","/v1/accounts:sendOobCode",Le(n,e))}async function e1(n,e){return vh(n,e)}async function t1(n,e){return vh(n,e)}async function n1(n,e){return vh(n,e)}async function r1(n,e){return vh(n,e)}/**
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
 */async function i1(n,e){return ar(n,"POST","/v1/accounts:signInWithEmailLink",Le(n,e))}async function s1(n,e){return ar(n,"POST","/v1/accounts:signInWithEmailLink",Le(n,e))}/**
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
 */class ul extends To{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ul(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ul(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ll(e,t,"signInWithPassword",ZN);case"emailLink":return i1(e,{email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ll(e,r,"signUpPassword",JN);case"emailLink":return s1(e,{idToken:t,email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Jn(n,e){return ar(n,"POST","/v1/accounts:signInWithIdp",Le(n,e))}/**
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
 */const o1="http://localhost";class bn extends To{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new bn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):lt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Bm(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new bn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Jn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Jn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Jn(e,t)}buildRequest(){const e={requestUri:o1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Io(t)}return e}}/**
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
 */async function a1(n,e){return Me(n,"POST","/v1/accounts:sendVerificationCode",Le(n,e))}async function l1(n,e){return ar(n,"POST","/v1/accounts:signInWithPhoneNumber",Le(n,e))}async function u1(n,e){const t=await ar(n,"POST","/v1/accounts:signInWithPhoneNumber",Le(n,e));if(t.temporaryProof)throw ma(n,"account-exists-with-different-credential",t);return t}const c1={USER_NOT_FOUND:"user-not-found"};async function h1(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return ar(n,"POST","/v1/accounts:signInWithPhoneNumber",Le(n,t),c1)}/**
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
 */class Vi extends To{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Vi({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Vi({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return l1(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return u1(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return h1(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new Vi({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function d1(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function f1(n){const e=xs(pa(n)).link,t=e?xs(pa(e)).deep_link_id:null,r=xs(pa(n)).deep_link_id;return(r?xs(pa(r)).link:null)||r||t||e||n}class wh{constructor(e){var t,r,i,s,o,a;const u=xs(pa(e)),c=(t=u.apiKey)!==null&&t!==void 0?t:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=d1((i=u.mode)!==null&&i!==void 0?i:null);z(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=f1(e);try{return new wh(t)}catch{return null}}}/**
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
 */class ii{constructor(){this.providerId=ii.PROVIDER_ID}static credential(e,t){return ul._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=wh.parseLink(t);return z(r,"argument-error"),ul._fromEmailAndCode(e,r.code,r.tenantId)}}ii.PROVIDER_ID="password";ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class lr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class So extends lr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class $s extends So{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return z("providerId"in t&&"signInMethod"in t,"argument-error"),bn._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return z(e.idToken||e.accessToken,"argument-error"),bn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return $s.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return $s.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new $s(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class wn extends So{constructor(){super("facebook.com")}static credential(e){return bn._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
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
 */class In extends So{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return bn._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return In.credential(t,r)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
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
 */class En extends So{constructor(){super("github.com")}static credential(e){return bn._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
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
 */const p1="http://localhost";class ro extends To{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Jn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Jn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Jn(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new ro(r,s)}static _create(e,t){return new ro(e,t)}buildRequest(){return{requestUri:p1,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const m1="saml.";class Fc extends lr{constructor(e){z(e.startsWith(m1),"argument-error"),super(e)}static credentialFromResult(e){return Fc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Fc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=ro.fromJSON(e);return z(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return ro._create(r,t)}catch{return null}}}/**
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
 */class Tn extends So{constructor(){super("twitter.com")}static credential(e,t){return bn._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Tn.credential(t,r)}catch{return null}}}Tn.TWITTER_SIGN_IN_METHOD="twitter.com";Tn.PROVIDER_ID="twitter.com";/**
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
 */async function d0(n,e){return ar(n,"POST","/v1/accounts:signUp",Le(n,e))}/**
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
 */class on{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Kn._fromIdTokenResponse(e,r,i),o=Uv(r);return new on({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Uv(r);return new on({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Uv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function g1(n){var e;if(Ve(n.app))return Promise.reject(et(n));const t=xe(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new on({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await d0(t,{returnSecureToken:!0}),i=await on._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class Uc extends St{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Uc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Uc(e,t,r,i)}}function f0(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Uc._fromErrorAndOperation(n,s,e,r):s})}/**
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
 */function p0(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function _1(n,e){const t=Y(n);await Ih(!0,t,e);const{providerUserInfo:r}=await TN(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=p0(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Gm(n,e,t=!1){const r=await rr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return on._forOperation(n,"link",r)}async function Ih(n,e,t){await al(e);const r=p0(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";z(r.has(t)===n,e.auth,i)}/**
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
 */async function m0(n,e,t=!1){const{auth:r}=n;if(Ve(r.app))return Promise.reject(et(r));const i="reauthenticate";try{const s=await rr(n,f0(r,i,e,n),t);z(s.idToken,r,"internal-error");const o=yh(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(n.uid===a,r,"user-mismatch"),on._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&lt(r,"user-mismatch"),s}}/**
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
 */async function g0(n,e,t=!1){if(Ve(n.app))return Promise.reject(et(n));const r="signIn",i=await f0(n,r,e),s=await on._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Eh(n,e){return g0(xe(n),e)}async function _0(n,e){const t=Y(n);return await Ih(!1,t,e.providerId),Gm(t,e)}async function y0(n,e){return m0(Y(n),e)}/**
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
 */async function y1(n,e){return ar(n,"POST","/v1/accounts:signInWithCustomToken",Le(n,e))}/**
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
 */async function v1(n,e){if(Ve(n.app))return Promise.reject(et(n));const t=xe(n),r=await y1(t,{token:e,returnSecureToken:!0}),i=await on._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
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
 */class Ol{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Km._fromServerResponse(e,t):"totpInfo"in t?Hm._fromServerResponse(e,t):lt(e,"internal-error")}}class Km extends Ol{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Km(t)}}class Hm extends Ol{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Hm(t)}}/**
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
 */function Th(n,e,t){var r;z(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),z(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(z(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(z(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function Qm(n){const e=xe(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function w1(n,e,t){const r=xe(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Th(r,i,t),await ll(r,i,"getOobCode",t1)}async function I1(n,e,t){await h0(Y(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Qm(n),r})}async function E1(n,e){await XN(Y(n),{oobCode:e})}async function v0(n,e){const t=Y(n),r=await h0(t,{oobCode:e}),i=r.requestType;switch(z(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":z(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":z(r.mfaInfo,t,"internal-error");default:z(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=Ol._fromServerResponse(xe(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function T1(n,e){const{data:t}=await v0(Y(n),e);return t.email}async function S1(n,e,t){if(Ve(n.app))return Promise.reject(et(n));const r=xe(n),o=await ll(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",d0).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Qm(n),u}),a=await on._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function A1(n,e,t){return Ve(n.app)?Promise.reject(et(n)):Eh(Y(n),ii.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Qm(n),r})}/**
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
 */async function R1(n,e,t){const r=xe(n),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){z(a.handleCodeInApp,r,"argument-error"),a&&Th(r,o,a)}s(i,t),await ll(r,i,"getOobCode",n1)}function P1(n,e){const t=wh.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function k1(n,e,t){if(Ve(n.app))return Promise.reject(et(n));const r=Y(n),i=ii.credentialWithLink(e,t||ol());return z(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Eh(r,i)}/**
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
 */async function C1(n,e){return Me(n,"POST","/v1/accounts:createAuthUri",Le(n,e))}/**
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
 */async function D1(n,e){const t=$m()?ol():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await C1(Y(n),r);return i||[]}async function N1(n,e){const t=Y(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Th(t.auth,i,e);const{email:s}=await e1(t.auth,i);s!==n.email&&await n.reload()}async function b1(n,e,t){const r=Y(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Th(r.auth,s,t);const{email:o}=await r1(r.auth,s);o!==n.email&&await n.reload()}/**
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
 */async function V1(n,e){return Me(n,"POST","/v1/accounts:update",e)}/**
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
 */async function x1(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Y(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await rr(r,V1(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function O1(n,e){const t=Y(n);return Ve(t.auth.app)?Promise.reject(et(t.auth)):w0(t,e,null)}function L1(n,e){return w0(Y(n),null,e)}async function w0(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await rr(n,YN(r,s));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function M1(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=yh(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new qs(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new F1(s,i);case"github.com":return new U1(s,i);case"google.com":return new B1(s,i);case"twitter.com":return new z1(s,i,n.screenName||null);case"custom":case"anonymous":return new qs(s,null);default:return new qs(s,r,i)}}class qs{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class I0 extends qs{constructor(e,t,r,i){super(e,t,r),this.username=i}}class F1 extends qs{constructor(e,t){super(e,"facebook.com",t)}}class U1 extends I0{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class B1 extends qs{constructor(e,t){super(e,"google.com",t)}}class z1 extends I0{constructor(e,t,r){super(e,"twitter.com",t,r)}}function j1(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:M1(t)}/**
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
 */class Pi{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new Pi("enroll",e,t)}static _fromMfaPendingCredential(e){return new Pi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return Pi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Pi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Ym{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=xe(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Ol._fromServerResponse(r,a));z(i.mfaPendingCredential,r,"internal-error");const o=Pi._fromMfaPendingCredential(i.mfaPendingCredential);return new Ym(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(t.operationType){case"signIn":const d=await on._fromIdTokenResponse(r,t.operationType,c);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return z(t.user,r,"internal-error"),on._forOperation(t.user,t.operationType,c);default:lt(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function $1(n,e){var t;const r=Y(n),i=e;return z(e.customData.operationType,r,"argument-error"),z((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),Ym._fromError(r,i)}/**
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
 */function q1(n,e){return Me(n,"POST","/v2/accounts/mfaEnrollment:start",Le(n,e))}function W1(n,e){return Me(n,"POST","/v2/accounts/mfaEnrollment:finalize",Le(n,e))}function G1(n,e){return Me(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Le(n,e))}class Jm{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>Ol._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Jm(e)}async getSession(){return Pi._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,i=await this.getSession(),s=await rr(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await rr(this.user,G1(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Zd=new WeakMap;function K1(n){const e=Y(n);return Zd.has(e)||Zd.set(e,Jm._fromUser(e)),Zd.get(e)}const Bc="__sak";/**
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
 */class E0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bc,"1"),this.storage.removeItem(Bc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const H1=1e3,Q1=10;class T0 extends E0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=a0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);VN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Q1):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},H1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}T0.type="LOCAL";const Xm=T0;/**
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
 */class S0 extends E0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}S0.type="SESSION";const Bi=S0;/**
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
 */function Y1(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Sh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Sh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,s)),u=await Y1(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sh.receivers=[];/**
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
 */function Ll(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class J1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Ll("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function qe(){return window}function X1(n){qe().location.href=n}/**
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
 */function Zm(){return typeof qe().WorkerGlobalScope<"u"&&typeof qe().importScripts=="function"}async function Z1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eb(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function tb(){return Zm()?self:null}/**
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
 */const A0="firebaseLocalStorageDb",nb=1,zc="firebaseLocalStorage",R0="fbase_key";class Ml{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ah(n,e){return n.transaction([zc],e?"readwrite":"readonly").objectStore(zc)}function rb(){const n=indexedDB.deleteDatabase(A0);return new Ml(n).toPromise()}function ap(){const n=indexedDB.open(A0,nb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(zc,{keyPath:R0})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(zc)?e(r):(r.close(),await rb(),e(await ap()))})})}async function Bv(n,e,t){const r=Ah(n,!0).put({[R0]:e,value:t});return new Ml(r).toPromise()}async function ib(n,e){const t=Ah(n,!1).get(e),r=await new Ml(t).toPromise();return r===void 0?null:r.value}function zv(n,e){const t=Ah(n,!0).delete(e);return new Ml(t).toPromise()}const sb=800,ob=3;class P0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ap(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>ob)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sh._getInstance(tb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Z1(),!this.activeServiceWorker)return;this.sender=new J1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ap();return await Bv(e,Bc,"1"),await zv(e,Bc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bv(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ib(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ah(i,!1).getAll();return new Ml(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}P0.type="LOCAL";const cl=P0;/**
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
 */function ab(n,e){return Me(n,"POST","/v2/accounts/mfaSignIn:start",Le(n,e))}function lb(n,e){return Me(n,"POST","/v2/accounts/mfaSignIn:finalize",Le(n,e))}/**
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
 */const ub=500,cb=6e4,bu=1e12;class hb{constructor(e){this.auth=e,this.counter=bu,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new db(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||bu;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||bu;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||bu;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class db{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;z(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=fb(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},cb)},ub))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function fb(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const ef=u0("rcb"),pb=new Nl(3e4,6e4);class mb{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=qe().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return z(gb(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Nv(qe().grecaptcha)?Promise.resolve(qe().grecaptcha):new Promise((r,i)=>{const s=qe().setTimeout(()=>{i(He(e,"network-request-failed"))},pb.get());qe()[ef]=()=>{qe().clearTimeout(s),delete qe()[ef];const a=qe().grecaptcha;if(!a||!Nv(a)){i(He(e,"internal-error"));return}const u=a.render;a.render=(c,d)=>{const p=u(c,d);return this.counter++,p},this.hostLanguage=t,r(a)};const o=`${BN()}?${Io({onload:ef,render:"explicit",hl:t})}`;Wm(o).catch(()=>{clearTimeout(s),i(He(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=qe().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function gb(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class _b{async load(e){return new hb(e)}clearedOneInstance(){}}/**
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
 */const k0="recaptcha",yb={theme:"light",type:"image"};let vb=class{constructor(e,t,r=Object.assign({},yb)){this.parameters=r,this.type=k0,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=xe(e),this.isInvisible=this.parameters.size==="invisible",z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;z(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new _b:new mb,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){z(!this.parameters.sitekey,this.auth,"argument-error"),z(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=qe()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){z(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){z($m()&&!Zm(),this.auth,"internal-error"),await wb(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await wN(this.auth);z(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return z(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function wb(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class eg{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Vi._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Ib(n,e,t){if(Ve(n.app))return Promise.reject(et(n));const r=xe(n),i=await Rh(r,e,Y(t));return new eg(i,s=>Eh(r,s))}async function Eb(n,e,t){const r=Y(n);await Ih(!1,r,"phone");const i=await Rh(r.auth,e,Y(t));return new eg(i,s=>_0(r,s))}async function Tb(n,e,t){const r=Y(n);if(Ve(r.auth.app))return Promise.reject(et(r.auth));const i=await Rh(r.auth,e,Y(t));return new eg(i,s=>y0(r,s))}async function Rh(n,e,t){var r;const i=await t.verify();try{z(typeof i=="string",n,"argument-error"),z(t.type===k0,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return z(o.type==="enroll",n,"internal-error"),(await q1(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{z(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return z(a,n,"missing-multi-factor-info"),(await ab(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await a1(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function Sb(n,e){const t=Y(n);if(Ve(t.auth.app))return Promise.reject(et(t.auth));await Gm(t,e)}/**
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
 */let zi=class Zu{constructor(e){this.providerId=Zu.PROVIDER_ID,this.auth=xe(e)}verifyPhoneNumber(e,t){return Rh(this.auth,e,Y(t))}static credential(e,t){return Vi._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Zu.credentialFromTaggedObject(t)}static credentialFromError(e){return Zu.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?Vi._fromTokenResponse(t,r):null}};zi.PROVIDER_ID="phone";zi.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function ts(n,e){return e?qt(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class tg extends To{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Jn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ab(n){return g0(n.auth,new tg(n),n.bypassAuthState)}function Rb(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),m0(t,new tg(n),n.bypassAuthState)}async function Pb(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),Gm(t,new tg(n),n.bypassAuthState)}/**
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
 */class C0{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ab;case"linkViaPopup":case"linkViaRedirect":return Pb;case"reauthViaPopup":case"reauthViaRedirect":return Rb;default:lt(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const kb=new Nl(2e3,1e4);async function Cb(n,e,t){if(Ve(n.app))return Promise.reject(He(n,"operation-not-supported-in-this-environment"));const r=xe(n);Eo(n,e,lr);const i=ts(r,t);return new Hn(r,"signInViaPopup",e,i).executeNotNull()}async function Db(n,e,t){const r=Y(n);if(Ve(r.auth.app))return Promise.reject(He(r.auth,"operation-not-supported-in-this-environment"));Eo(r.auth,e,lr);const i=ts(r.auth,t);return new Hn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function Nb(n,e,t){const r=Y(n);Eo(r.auth,e,lr);const i=ts(r.auth,t);return new Hn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Hn extends C0{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Hn.currentPopupAction&&Hn.currentPopupAction.cancel(),Hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=Ll();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(He(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(He(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(He(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kb.get())};e()}}Hn.currentPopupAction=null;/**
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
 */const bb="pendingRedirect",Na=new Map;class Vb extends C0{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Na.get(this.auth._key());if(!e){try{const r=await xb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Na.set(this.auth._key(),e)}return this.bypassAuthState||Na.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xb(n,e){const t=N0(e),r=D0(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function ng(n,e){return D0(n)._set(N0(e),"true")}function Ob(){Na.clear()}function rg(n,e){Na.set(n._key(),e)}function D0(n){return qt(n._redirectPersistence)}function N0(n){return bi(bb,n.config.apiKey,n.name)}/**
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
 */function Lb(n,e,t){return Mb(n,e,t)}async function Mb(n,e,t){if(Ve(n.app))return Promise.reject(et(n));const r=xe(n);Eo(n,e,lr),await r._initializationPromise;const i=ts(r,t);return await ng(i,r),i._openRedirect(r,e,"signInViaRedirect")}function Fb(n,e,t){return Ub(n,e,t)}async function Ub(n,e,t){const r=Y(n);if(Eo(r.auth,e,lr),Ve(r.auth.app))return Promise.reject(et(r.auth));await r.auth._initializationPromise;const i=ts(r.auth,t);await ng(i,r.auth);const s=await b0(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function Bb(n,e,t){return zb(n,e,t)}async function zb(n,e,t){const r=Y(n);Eo(r.auth,e,lr),await r.auth._initializationPromise;const i=ts(r.auth,t);await Ih(!1,r,e.providerId),await ng(i,r.auth);const s=await b0(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function jb(n,e){return await xe(n)._initializationPromise,Ph(n,e,!1)}async function Ph(n,e,t=!1){if(Ve(n.app))return Promise.reject(et(n));const r=xe(n),i=ts(r,e),o=await new Vb(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function b0(n){const e=Ll(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const $b=10*60*1e3;class V0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!x0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(He(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$b&&this.cachedEventUids.clear(),this.cachedEventUids.has(jv(e))}saveEventToCache(e){this.cachedEventUids.add(jv(e)),this.lastProcessedEventTime=Date.now()}}function jv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function x0({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qb(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return x0(n);default:return!1}}/**
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
 */async function O0(n,e={}){return Me(n,"GET","/v1/projects",e)}/**
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
 */const Wb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gb=/^https?/;async function Kb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await O0(n);for(const t of e)try{if(Hb(t))return}catch{}lt(n,"unauthorized-domain")}function Hb(n){const e=ol(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Gb.test(t))return!1;if(Wb.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Qb=new Nl(3e4,6e4);function $v(){const n=qe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Yb(n){return new Promise((e,t)=>{var r,i,s;function o(){$v(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$v(),t(He(n,"network-request-failed"))},timeout:Qb.get()})}if(!((i=(r=qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=qe().gapi)===null||s===void 0)&&s.load)o();else{const a=u0("iframefcb");return qe()[a]=()=>{gapi.load?o():t(He(n,"network-request-failed"))},Wm(`${jN()}?onload=${a}`).catch(u=>t(u))}}).catch(e=>{throw ec=null,e})}let ec=null;function Jb(n){return ec=ec||Yb(n),ec}/**
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
 */const Xb=new Nl(5e3,15e3),Zb="__/auth/iframe",eV="emulator/auth/iframe",tV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rV(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?qm(e,eV):`https://${n.config.authDomain}/${Zb}`,r={apiKey:e.apiKey,appName:n.name,v:ri},i=nV.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Io(r).slice(1)}`}async function iV(n){const e=await Jb(n),t=qe().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:rV(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tV,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=He(n,"network-request-failed"),a=qe().setTimeout(()=>{s(o)},Xb.get());function u(){qe().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const sV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oV=500,aV=600,lV="_blank",uV="http://localhost";class qv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cV(n,e,t,r=oV,i=aV){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},sV),{width:r.toString(),height:i.toString(),top:s,left:o}),c=De().toLowerCase();t&&(a=r0(c)?lV:t),t0(c)&&(e=e||uV,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[w,P])=>`${m}${w}=${P},`,"");if(bN(c)&&a!=="_self")return hV(e||"",a),new qv(null);const p=window.open(e||"",a,d);z(p,n,"popup-blocked");try{p.focus()}catch{}return new qv(p)}function hV(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const dV="__/auth/handler",fV="emulator/auth/handler",pV=encodeURIComponent("fac");async function lp(n,e,t,r,i,s){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ri,eventId:i};if(e instanceof lr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",UC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries(s||{}))o[d]=p}if(e instanceof So){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await n._getAppCheckToken(),c=u?`#${pV}=${encodeURIComponent(u)}`:"";return`${mV(n)}?${Io(a).slice(1)}${c}`}function mV({config:n}){return n.emulator?qm(n,fV):`https://${n.authDomain}/${dV}`}/**
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
 */const tf="webStorageSupport";class gV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bi,this._completeRedirectFn=Ph,this._overrideRedirectResult=rg}async _openPopup(e,t,r,i){var s;gn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await lp(e,t,r,ol(),i);return cV(e,o,Ll())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await lp(e,t,r,ol(),i);return X1(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(gn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await iV(e),r=new V0(e);return t.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(tf,{type:tf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[tf];o!==void 0&&t(!!o),lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Kb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return a0()||n0()||Vl()}}const _V=gV;class yV{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Sn("unexpected MultiFactorSessionType")}}}class ig extends yV{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ig(e)}_finalizeEnroll(e,t,r){return W1(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return lb(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class L0{constructor(){}static assertion(e){return ig._fromCredential(e)}}L0.FACTOR_ID="phone";var Wv="@firebase/auth",Gv="1.7.9";/**
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
 */class vV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wV(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IV(n){Wr(new Nn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:l0(n)},c=new FN(r,i,s,u);return GN(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Wr(new Nn("auth-internal",e=>{const t=xe(e.getProvider("auth").getImmediate());return(r=>new vV(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pn(Wv,Gv,wV(n)),pn(Wv,Gv,"esm2017")}/**
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
 */const EV=5*60;CC("authIdTokenMaxAge");function TV(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}UN({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=He("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",TV().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IV("Browser");/**
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
 */function ji(){return window}/**
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
 */const SV=2e3;async function AV(n,e,t){var r;const{BuildInfo:i}=ji();gn(e.sessionId,"AuthEvent did not contain a session ID");const s=await DV(e.sessionId),o={};return Vl()?o.ibi=i.packageName:bl()?o.apn=i.packageName:lt(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,lp(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function RV(n){const{BuildInfo:e}=ji(),t={};Vl()?t.iosBundleId=e.packageName:bl()?t.androidPackageName=e.packageName:lt(n,"operation-not-supported-in-this-environment"),await O0(n,t)}function PV(n){const{cordova:e}=ji();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,NN()?"_blank":"_system","location=yes"),t(i)})})}async function kV(n,e,t){const{cordova:r}=ji();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var p;s();const m=(p=r.plugins.browsertab)===null||p===void 0?void 0:p.close;typeof m=="function"&&m(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function c(){a||(a=window.setTimeout(()=>{o(He(n,"redirect-cancelled-by-user"))},SV))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(u),document.addEventListener("resume",c,!1),bl()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function CV(n){var e,t,r,i,s,o,a,u,c,d;const p=ji();z(typeof((e=p==null?void 0:p.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),z(typeof((t=p==null?void 0:p.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),z(typeof((s=(i=(r=p==null?void 0:p.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),z(typeof((u=(a=(o=p==null?void 0:p.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),z(typeof((d=(c=p==null?void 0:p.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function DV(n){const e=NV(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function NV(n){if(gn(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
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
 */const bV=20;class VV extends V0{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function xV(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:MV(),postBody:null,tenantId:n.tenantId,error:He(n,"no-auth-event")}}function OV(n,e){return up()._set(cp(n),e)}async function Kv(n){const e=await up()._get(cp(n));return e&&await up()._remove(cp(n)),e}function LV(n,e){var t,r;const i=UV(e);if(i.includes("/__/auth/callback")){const s=tc(i),o=s.firebaseError?FV(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],u=a?He(a):null;return u?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function MV(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<bV;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function up(){return qt(Xm)}function cp(n){return bi("authEvent",n.config.apiKey,n.name)}function FV(n){try{return JSON.parse(n)}catch{return null}}function UV(n){const e=tc(n),t=e.link?decodeURIComponent(e.link):void 0,r=tc(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return tc(i).link||i||r||t||n}function tc(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return xs(t.join("?"))}/**
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
 */const BV=500;class zV{constructor(){this._redirectPersistence=Bi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ph,this._overrideRedirectResult=rg}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new VV(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){lt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){CV(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),Ob(),await this._originValidation(e);const o=xV(e,r,i);await OV(e,o);const a=await AV(e,o,t),u=await PV(a);return kV(e,s,u)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=RV(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=ji(),o=setTimeout(async()=>{await Kv(e),t.onEvent(Hv())},BV),a=async d=>{clearTimeout(o);const p=await Kv(e);let m=null;p&&(d!=null&&d.url)&&(m=LV(p,d.url)),t.onEvent(m||Hv())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,c=`${s.packageName.toLowerCase()}://`;ji().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(c)&&a({url:d}),typeof u=="function")try{u(d)}catch(p){console.error(p)}}}}const jV=zV;function Hv(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:He("no-auth-event")}}/**
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
 */function $V(n,e){xe(n)._logFramework(e)}var qV="@firebase/auth-compat",WV="0.5.14";/**
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
 */const GV=1e3;function ba(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function KV(){return ba()==="http:"||ba()==="https:"}function M0(n=De()){return!!((ba()==="file:"||ba()==="ionic:"||ba()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function HV(){return Om()||xm()}function QV(){return NT()&&(document==null?void 0:document.documentMode)===11}function YV(n=De()){return/Edge\/\d+/.test(n)}function JV(n=De()){return QV()||YV(n)}function F0(){try{const n=self.localStorage,e=Ll();if(n)return n.setItem(e,"1"),n.removeItem(e),JV()?nl():!0}catch{return sg()&&nl()}return!1}function sg(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function nf(){return(KV()||DT()||M0())&&!HV()&&F0()&&!sg()}function U0(){return M0()&&typeof document<"u"}async function XV(){return U0()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},GV);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function ZV(){return typeof window<"u"?window:null}/**
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
 */const jt={LOCAL:"local",NONE:"none",SESSION:"session"},ra=z,B0="persistence";function ex(n,e){if(ra(Object.values(jt).includes(e),n,"invalid-persistence-type"),Om()){ra(e!==jt.SESSION,n,"unsupported-persistence-type");return}if(xm()){ra(e===jt.NONE,n,"unsupported-persistence-type");return}if(sg()){ra(e===jt.NONE||e===jt.LOCAL&&nl(),n,"unsupported-persistence-type");return}ra(e===jt.NONE||F0(),n,"unsupported-persistence-type")}async function hp(n){await n._initializationPromise;const e=z0(),t=bi(B0,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function tx(n,e){const t=z0();if(!t)return[];const r=bi(B0,n,e);switch(t.getItem(r)){case jt.NONE:return[no];case jt.LOCAL:return[cl,Bi];case jt.SESSION:return[Bi];default:return[]}}function z0(){var n;try{return((n=ZV())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
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
 */const nx=z;class kr{constructor(){this.browserResolver=qt(_V),this.cordovaResolver=qt(jV),this.underlyingResolver=null,this._redirectPersistence=Bi,this._completeRedirectFn=Ph,this._overrideRedirectResult=rg}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return U0()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return nx(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await XV();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function j0(n){return n.unwrap()}function rx(n){return n.wrapped()}/**
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
 */function ix(n){return $0(n)}function sx(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new ox(n,$1(n,e))}else if(r){const i=$0(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function $0(n){const{_tokenResponse:e}=n instanceof St?n.customData:n;if(!e)return null;if(!(n instanceof St)&&"temporaryProof"in e&&"phoneNumber"in e)return zi.credentialFromResult(n);const t=e.providerId;if(!t||t===na.PASSWORD)return null;let r;switch(t){case na.GOOGLE:r=In;break;case na.FACEBOOK:r=wn;break;case na.GITHUB:r=En;break;case na.TWITTER:r=Tn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?ro._create(t,a):bn._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new $s(t).credential({idToken:i,accessToken:s,rawNonce:u})}return n instanceof St?r.credentialFromError(n):r.credentialFromResult(n)}function Dt(n,e){return e.catch(t=>{throw t instanceof St&&sx(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:ix(t),additionalUserInfo:j1(t),user:kh.getOrCreate(i)}})}async function dp(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Dt(n,t.confirm(r))}}class ox{constructor(e,t){this.resolver=t,this.auth=rx(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Dt(j0(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let kh=class ga{constructor(e){this._delegate=e,this.multiFactor=K1(e)}static getOrCreate(e){return ga.USER_MAP.has(e)||ga.USER_MAP.set(e,new ga(e)),ga.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Dt(this.auth,_0(this._delegate,e))}async linkWithPhoneNumber(e,t){return dp(this.auth,Eb(this._delegate,e,t))}async linkWithPopup(e){return Dt(this.auth,Nb(this._delegate,e,kr))}async linkWithRedirect(e){return await hp(xe(this.auth)),Bb(this._delegate,e,kr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Dt(this.auth,y0(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return dp(this.auth,Tb(this._delegate,e,t))}reauthenticateWithPopup(e){return Dt(this.auth,Db(this._delegate,e,kr))}async reauthenticateWithRedirect(e){return await hp(xe(this.auth)),Fb(this._delegate,e,kr)}sendEmailVerification(e){return N1(this._delegate,e)}async unlink(e){return await _1(this._delegate,e),this}updateEmail(e){return O1(this._delegate,e)}updatePassword(e){return L1(this._delegate,e)}updatePhoneNumber(e){return Sb(this._delegate,e)}updateProfile(e){return x1(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return b1(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};kh.USER_MAP=new WeakMap;/**
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
 */const ia=z;class fp{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;ia(r,"invalid-api-key",{appName:e.name}),ia(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?kr:void 0;this._delegate=t.initialize({options:{persistence:ax(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(cN),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?kh.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){KN(this._delegate,e,t)}applyActionCode(e){return E1(this._delegate,e)}checkActionCode(e){return v0(this._delegate,e)}confirmPasswordReset(e,t){return I1(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Dt(this._delegate,S1(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return D1(this._delegate,e)}isSignInWithEmailLink(e){return P1(this._delegate,e)}async getRedirectResult(){ia(nf(),this._delegate,"operation-not-supported-in-this-environment");const e=await jb(this._delegate,kr);return e?Dt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){$V(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=Qv(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=Qv(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return R1(this._delegate,e,t)}sendPasswordResetEmail(e,t){return w1(this._delegate,e,t||void 0)}async setPersistence(e){ex(this._delegate,e);let t;switch(e){case jt.SESSION:t=Bi;break;case jt.LOCAL:t=await qt(cl)._isAvailable()?cl:Xm;break;case jt.NONE:t=no;break;default:return lt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Dt(this._delegate,g1(this._delegate))}signInWithCredential(e){return Dt(this._delegate,Eh(this._delegate,e))}signInWithCustomToken(e){return Dt(this._delegate,v1(this._delegate,e))}signInWithEmailAndPassword(e,t){return Dt(this._delegate,A1(this._delegate,e,t))}signInWithEmailLink(e,t){return Dt(this._delegate,k1(this._delegate,e,t))}signInWithPhoneNumber(e,t){return dp(this._delegate,Ib(this._delegate,e,t))}async signInWithPopup(e){return ia(nf(),this._delegate,"operation-not-supported-in-this-environment"),Dt(this._delegate,Cb(this._delegate,e,kr))}async signInWithRedirect(e){return ia(nf(),this._delegate,"operation-not-supported-in-this-environment"),await hp(this._delegate),Lb(this._delegate,e,kr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return T1(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}fp.Persistence=jt;function Qv(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&kh.getOrCreate(o)),error:e,complete:t}}function ax(n,e){const t=tx(n,e);if(typeof self<"u"&&!t.includes(cl)&&t.push(cl),typeof window<"u")for(const r of[Xm,Bi])t.includes(r)||t.push(r);return t.includes(no)||t.push(no),t}/**
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
 */class og{constructor(){this.providerId="phone",this._delegate=new zi(j0(Ur.auth()))}static credential(e,t){return zi.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}og.PHONE_SIGN_IN_METHOD=zi.PHONE_SIGN_IN_METHOD;og.PROVIDER_ID=zi.PROVIDER_ID;/**
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
 */const lx=z;class ux{constructor(e,t,r=Ur.app()){var i;lx((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new vb(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const cx="auth-compat";function hx(n){n.INTERNAL.registerComponent(new Nn(cx,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new fp(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ds.EMAIL_SIGNIN,PASSWORD_RESET:ds.PASSWORD_RESET,RECOVER_EMAIL:ds.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ds.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ds.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ds.VERIFY_EMAIL}},EmailAuthProvider:ii,FacebookAuthProvider:wn,GithubAuthProvider:En,GoogleAuthProvider:In,OAuthProvider:$s,SAMLAuthProvider:Fc,PhoneAuthProvider:og,PhoneMultiFactorGenerator:L0,RecaptchaVerifier:ux,TwitterAuthProvider:Tn,Auth:fp,AuthCredential:To,Error:St}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(qV,WV)}hx(Ur);var Yv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xi,q0;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function I(){}I.prototype=_.prototype,v.D=_.prototype,v.prototype=new I,v.prototype.constructor=v,v.C=function(E,R,D){for(var T=Array(arguments.length-2),Yt=2;Yt<arguments.length;Yt++)T[Yt-2]=arguments[Yt];return _.prototype[R].apply(E,T)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,_,I){I||(I=0);var E=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)E[R]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(R=0;16>R;++R)E[R]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=v.g[0],I=v.g[1],R=v.g[2];var D=v.g[3],T=_+(D^I&(R^D))+E[0]+3614090360&4294967295;_=I+(T<<7&4294967295|T>>>25),T=D+(R^_&(I^R))+E[1]+3905402710&4294967295,D=_+(T<<12&4294967295|T>>>20),T=R+(I^D&(_^I))+E[2]+606105819&4294967295,R=D+(T<<17&4294967295|T>>>15),T=I+(_^R&(D^_))+E[3]+3250441966&4294967295,I=R+(T<<22&4294967295|T>>>10),T=_+(D^I&(R^D))+E[4]+4118548399&4294967295,_=I+(T<<7&4294967295|T>>>25),T=D+(R^_&(I^R))+E[5]+1200080426&4294967295,D=_+(T<<12&4294967295|T>>>20),T=R+(I^D&(_^I))+E[6]+2821735955&4294967295,R=D+(T<<17&4294967295|T>>>15),T=I+(_^R&(D^_))+E[7]+4249261313&4294967295,I=R+(T<<22&4294967295|T>>>10),T=_+(D^I&(R^D))+E[8]+1770035416&4294967295,_=I+(T<<7&4294967295|T>>>25),T=D+(R^_&(I^R))+E[9]+2336552879&4294967295,D=_+(T<<12&4294967295|T>>>20),T=R+(I^D&(_^I))+E[10]+4294925233&4294967295,R=D+(T<<17&4294967295|T>>>15),T=I+(_^R&(D^_))+E[11]+2304563134&4294967295,I=R+(T<<22&4294967295|T>>>10),T=_+(D^I&(R^D))+E[12]+1804603682&4294967295,_=I+(T<<7&4294967295|T>>>25),T=D+(R^_&(I^R))+E[13]+4254626195&4294967295,D=_+(T<<12&4294967295|T>>>20),T=R+(I^D&(_^I))+E[14]+2792965006&4294967295,R=D+(T<<17&4294967295|T>>>15),T=I+(_^R&(D^_))+E[15]+1236535329&4294967295,I=R+(T<<22&4294967295|T>>>10),T=_+(R^D&(I^R))+E[1]+4129170786&4294967295,_=I+(T<<5&4294967295|T>>>27),T=D+(I^R&(_^I))+E[6]+3225465664&4294967295,D=_+(T<<9&4294967295|T>>>23),T=R+(_^I&(D^_))+E[11]+643717713&4294967295,R=D+(T<<14&4294967295|T>>>18),T=I+(D^_&(R^D))+E[0]+3921069994&4294967295,I=R+(T<<20&4294967295|T>>>12),T=_+(R^D&(I^R))+E[5]+3593408605&4294967295,_=I+(T<<5&4294967295|T>>>27),T=D+(I^R&(_^I))+E[10]+38016083&4294967295,D=_+(T<<9&4294967295|T>>>23),T=R+(_^I&(D^_))+E[15]+3634488961&4294967295,R=D+(T<<14&4294967295|T>>>18),T=I+(D^_&(R^D))+E[4]+3889429448&4294967295,I=R+(T<<20&4294967295|T>>>12),T=_+(R^D&(I^R))+E[9]+568446438&4294967295,_=I+(T<<5&4294967295|T>>>27),T=D+(I^R&(_^I))+E[14]+3275163606&4294967295,D=_+(T<<9&4294967295|T>>>23),T=R+(_^I&(D^_))+E[3]+4107603335&4294967295,R=D+(T<<14&4294967295|T>>>18),T=I+(D^_&(R^D))+E[8]+1163531501&4294967295,I=R+(T<<20&4294967295|T>>>12),T=_+(R^D&(I^R))+E[13]+2850285829&4294967295,_=I+(T<<5&4294967295|T>>>27),T=D+(I^R&(_^I))+E[2]+4243563512&4294967295,D=_+(T<<9&4294967295|T>>>23),T=R+(_^I&(D^_))+E[7]+1735328473&4294967295,R=D+(T<<14&4294967295|T>>>18),T=I+(D^_&(R^D))+E[12]+2368359562&4294967295,I=R+(T<<20&4294967295|T>>>12),T=_+(I^R^D)+E[5]+4294588738&4294967295,_=I+(T<<4&4294967295|T>>>28),T=D+(_^I^R)+E[8]+2272392833&4294967295,D=_+(T<<11&4294967295|T>>>21),T=R+(D^_^I)+E[11]+1839030562&4294967295,R=D+(T<<16&4294967295|T>>>16),T=I+(R^D^_)+E[14]+4259657740&4294967295,I=R+(T<<23&4294967295|T>>>9),T=_+(I^R^D)+E[1]+2763975236&4294967295,_=I+(T<<4&4294967295|T>>>28),T=D+(_^I^R)+E[4]+1272893353&4294967295,D=_+(T<<11&4294967295|T>>>21),T=R+(D^_^I)+E[7]+4139469664&4294967295,R=D+(T<<16&4294967295|T>>>16),T=I+(R^D^_)+E[10]+3200236656&4294967295,I=R+(T<<23&4294967295|T>>>9),T=_+(I^R^D)+E[13]+681279174&4294967295,_=I+(T<<4&4294967295|T>>>28),T=D+(_^I^R)+E[0]+3936430074&4294967295,D=_+(T<<11&4294967295|T>>>21),T=R+(D^_^I)+E[3]+3572445317&4294967295,R=D+(T<<16&4294967295|T>>>16),T=I+(R^D^_)+E[6]+76029189&4294967295,I=R+(T<<23&4294967295|T>>>9),T=_+(I^R^D)+E[9]+3654602809&4294967295,_=I+(T<<4&4294967295|T>>>28),T=D+(_^I^R)+E[12]+3873151461&4294967295,D=_+(T<<11&4294967295|T>>>21),T=R+(D^_^I)+E[15]+530742520&4294967295,R=D+(T<<16&4294967295|T>>>16),T=I+(R^D^_)+E[2]+3299628645&4294967295,I=R+(T<<23&4294967295|T>>>9),T=_+(R^(I|~D))+E[0]+4096336452&4294967295,_=I+(T<<6&4294967295|T>>>26),T=D+(I^(_|~R))+E[7]+1126891415&4294967295,D=_+(T<<10&4294967295|T>>>22),T=R+(_^(D|~I))+E[14]+2878612391&4294967295,R=D+(T<<15&4294967295|T>>>17),T=I+(D^(R|~_))+E[5]+4237533241&4294967295,I=R+(T<<21&4294967295|T>>>11),T=_+(R^(I|~D))+E[12]+1700485571&4294967295,_=I+(T<<6&4294967295|T>>>26),T=D+(I^(_|~R))+E[3]+2399980690&4294967295,D=_+(T<<10&4294967295|T>>>22),T=R+(_^(D|~I))+E[10]+4293915773&4294967295,R=D+(T<<15&4294967295|T>>>17),T=I+(D^(R|~_))+E[1]+2240044497&4294967295,I=R+(T<<21&4294967295|T>>>11),T=_+(R^(I|~D))+E[8]+1873313359&4294967295,_=I+(T<<6&4294967295|T>>>26),T=D+(I^(_|~R))+E[15]+4264355552&4294967295,D=_+(T<<10&4294967295|T>>>22),T=R+(_^(D|~I))+E[6]+2734768916&4294967295,R=D+(T<<15&4294967295|T>>>17),T=I+(D^(R|~_))+E[13]+1309151649&4294967295,I=R+(T<<21&4294967295|T>>>11),T=_+(R^(I|~D))+E[4]+4149444226&4294967295,_=I+(T<<6&4294967295|T>>>26),T=D+(I^(_|~R))+E[11]+3174756917&4294967295,D=_+(T<<10&4294967295|T>>>22),T=R+(_^(D|~I))+E[2]+718787259&4294967295,R=D+(T<<15&4294967295|T>>>17),T=I+(D^(R|~_))+E[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,v.g[2]=v.g[2]+R&4294967295,v.g[3]=v.g[3]+D&4294967295}r.prototype.u=function(v,_){_===void 0&&(_=v.length);for(var I=_-this.blockSize,E=this.B,R=this.h,D=0;D<_;){if(R==0)for(;D<=I;)i(this,v,D),D+=this.blockSize;if(typeof v=="string"){for(;D<_;)if(E[R++]=v.charCodeAt(D++),R==this.blockSize){i(this,E),R=0;break}}else for(;D<_;)if(E[R++]=v[D++],R==this.blockSize){i(this,E),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;var I=8*this.o;for(_=v.length-8;_<v.length;++_)v[_]=I&255,I/=256;for(this.u(v),v=Array(16),_=I=0;4>_;++_)for(var E=0;32>E;E+=8)v[I++]=this.g[_]>>>E&255;return v};function s(v,_){var I=a;return Object.prototype.hasOwnProperty.call(I,v)?I[v]:I[v]=_(v)}function o(v,_){this.h=_;for(var I=[],E=!0,R=v.length-1;0<=R;R--){var D=v[R]|0;E&&D==_||(I[R]=D,E=!1)}this.g=I}var a={};function u(v){return-128<=v&&128>v?s(v,function(_){return new o([_|0],0>_?-1:0)}):new o([v|0],0>v?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return O(c(-v));for(var _=[],I=1,E=0;v>=I;E++)_[E]=v/I|0,I*=4294967296;return new o(_,0)}function d(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return O(d(v.substring(1),_));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(_,8)),E=p,R=0;R<v.length;R+=8){var D=Math.min(8,v.length-R),T=parseInt(v.substring(R,R+D),_);8>D?(D=c(Math.pow(_,D)),E=E.j(D).add(c(T))):(E=E.j(I),E=E.add(c(T)))}return E}var p=u(0),m=u(1),w=u(16777216);n=o.prototype,n.m=function(){if(C(this))return-O(this).m();for(var v=0,_=1,I=0;I<this.g.length;I++){var E=this.i(I);v+=(0<=E?E:4294967296+E)*_,_*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(P(this))return"0";if(C(this))return"-"+O(this).toString(v);for(var _=c(Math.pow(v,6)),I=this,E="";;){var R=x(I,_).g;I=S(I,R.j(_));var D=((0<I.g.length?I.g[0]:I.h)>>>0).toString(v);if(I=R,P(I))return D+E;for(;6>D.length;)D="0"+D;E=D+E}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function P(v){if(v.h!=0)return!1;for(var _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function C(v){return v.h==-1}n.l=function(v){return v=S(this,v),C(v)?-1:P(v)?0:1};function O(v){for(var _=v.g.length,I=[],E=0;E<_;E++)I[E]=~v.g[E];return new o(I,~v.h).add(m)}n.abs=function(){return C(this)?O(this):this},n.add=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],E=0,R=0;R<=_;R++){var D=E+(this.i(R)&65535)+(v.i(R)&65535),T=(D>>>16)+(this.i(R)>>>16)+(v.i(R)>>>16);E=T>>>16,D&=65535,T&=65535,I[R]=T<<16|D}return new o(I,I[I.length-1]&-2147483648?-1:0)};function S(v,_){return v.add(O(_))}n.j=function(v){if(P(this)||P(v))return p;if(C(this))return C(v)?O(this).j(O(v)):O(O(this).j(v));if(C(v))return O(this.j(O(v)));if(0>this.l(w)&&0>v.l(w))return c(this.m()*v.m());for(var _=this.g.length+v.g.length,I=[],E=0;E<2*_;E++)I[E]=0;for(E=0;E<this.g.length;E++)for(var R=0;R<v.g.length;R++){var D=this.i(E)>>>16,T=this.i(E)&65535,Yt=v.i(R)>>>16,ui=v.i(R)&65535;I[2*E+2*R]+=T*ui,y(I,2*E+2*R),I[2*E+2*R+1]+=D*ui,y(I,2*E+2*R+1),I[2*E+2*R+1]+=T*Yt,y(I,2*E+2*R+1),I[2*E+2*R+2]+=D*Yt,y(I,2*E+2*R+2)}for(E=0;E<_;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=_;E<2*_;E++)I[E]=0;return new o(I,0)};function y(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function A(v,_){this.g=v,this.h=_}function x(v,_){if(P(_))throw Error("division by zero");if(P(v))return new A(p,p);if(C(v))return _=x(O(v),_),new A(O(_.g),O(_.h));if(C(_))return _=x(v,O(_)),new A(O(_.g),_.h);if(30<v.g.length){if(C(v)||C(_))throw Error("slowDivide_ only works with positive integers.");for(var I=m,E=_;0>=E.l(v);)I=U(I),E=U(E);var R=F(I,1),D=F(E,1);for(E=F(E,2),I=F(I,2);!P(E);){var T=D.add(E);0>=T.l(v)&&(R=R.add(I),D=T),E=F(E,1),I=F(I,1)}return _=S(v,R.j(_)),new A(R,_)}for(R=p;0<=v.l(_);){for(I=Math.max(1,Math.floor(v.m()/_.m())),E=Math.ceil(Math.log(I)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),D=c(I),T=D.j(_);C(T)||0<T.l(v);)I-=E,D=c(I),T=D.j(_);P(D)&&(D=m),R=R.add(D),v=S(v,T)}return new A(R,v)}n.A=function(v){return x(this,v).h},n.and=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)&v.i(E);return new o(I,this.h&v.h)},n.or=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)|v.i(E);return new o(I,this.h|v.h)},n.xor=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)^v.i(E);return new o(I,this.h^v.h)};function U(v){for(var _=v.g.length+1,I=[],E=0;E<_;E++)I[E]=v.i(E)<<1|v.i(E-1)>>>31;return new o(I,v.h)}function F(v,_){var I=_>>5;_%=32;for(var E=v.g.length-I,R=[],D=0;D<E;D++)R[D]=0<_?v.i(D+I)>>>_|v.i(D+I+1)<<32-_:v.i(D+I);return new o(R,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,q0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,xi=o}).apply(typeof Yv<"u"?Yv:typeof self<"u"?self:typeof window<"u"?window:{});var Vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var W0,_a,G0,nc,pp,K0,H0,Q0;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,f){return l==Array.prototype||l==Object.prototype||(l[h]=f.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vu=="object"&&Vu];for(var h=0;h<l.length;++h){var f=l[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function i(l,h){if(h)e:{var f=r;l=l.split(".");for(var g=0;g<l.length-1;g++){var k=l[g];if(!(k in f))break e;f=f[k]}l=l[l.length-1],g=f[l],h=h(g),h!=g&&h!=null&&e(f,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var f=0,g=!1,k={next:function(){if(!g&&f<l.length){var V=f++;return{value:h(V,l[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,f){return l.call.apply(l.bind,arguments)}function p(l,h,f){if(!l)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,g),l.apply(h,k)}}return function(){return l.apply(h,arguments)}}function m(l,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function w(l,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),l.apply(this,g)}}function P(l,h){function f(){}f.prototype=h.prototype,l.aa=h.prototype,l.prototype=new f,l.prototype.constructor=l,l.Qb=function(g,k,V){for(var j=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)j[fe-2]=arguments[fe];return h.prototype[k].apply(g,j)}}function C(l){const h=l.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=l[g];return f}return[]}function O(l,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const k=l.length||0,V=g.length||0;l.length=k+V;for(let j=0;j<V;j++)l[k+j]=g[j]}else l.push(g)}}class S{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(l){return/^[\s\xa0]*$/.test(l)}function A(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function x(l){return x[" "](l),l}x[" "]=function(){};var U=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function F(l,h,f){for(const g in l)h.call(f,l[g],g,l)}function v(l,h){for(const f in l)h.call(void 0,l[f],f,l)}function _(l){const h={};for(const f in l)h[f]=l[f];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(l,h){let f,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(f in g)l[f]=g[f];for(let V=0;V<I.length;V++)f=I[V],Object.prototype.hasOwnProperty.call(g,f)&&(l[f]=g[f])}}function R(l){var h=1;l=l.split(":");const f=[];for(;0<h&&l.length;)f.push(l.shift()),h--;return l.length&&f.push(l.join(":")),f}function D(l){a.setTimeout(()=>{throw l},0)}function T(){var l=J;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class Yt{constructor(){this.h=this.g=null}add(h,f){const g=ui.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var ui=new S(()=>new Vo,l=>l.reset());class Vo{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ln,W=!1,J=new Yt,ee=()=>{const l=a.Promise.resolve(void 0);Ln=()=>{l.then(Ae)}};var Ae=()=>{for(var l;l=T();){try{l.h.call(l.g)}catch(f){D(f)}var h=ui;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}W=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var Mn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const f=()=>{};a.addEventListener("test",f,h),a.removeEventListener("test",f,h)}catch{}return l}();function Fn(l,h){if(Fe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var f=this.type=l.type,g=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(U){e:{try{x(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else f=="mouseover"?h=l.fromElement:f=="mouseout"&&(h=l.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Un[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Fn.aa.h.call(this)}}P(Fn,Fe);var Un={2:"touch",3:"pen",4:"mouse"};Fn.prototype.h=function(){Fn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Bn="closure_listenable_"+(1e6*Math.random()|0),pR=0;function mR(l,h,f,g,k){this.listener=l,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=k,this.key=++pR,this.da=this.fa=!1}function Jl(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Xl(l){this.src=l,this.g={},this.h=0}Xl.prototype.add=function(l,h,f,g,k){var V=l.toString();l=this.g[V],l||(l=this.g[V]=[],this.h++);var j=Zh(l,h,g,k);return-1<j?(h=l[j],f||(h.fa=!1)):(h=new mR(h,this.src,V,!!g,k),h.fa=f,l.push(h)),h};function Xh(l,h){var f=h.type;if(f in l.g){var g=l.g[f],k=Array.prototype.indexOf.call(g,h,void 0),V;(V=0<=k)&&Array.prototype.splice.call(g,k,1),V&&(Jl(h),l.g[f].length==0&&(delete l.g[f],l.h--))}}function Zh(l,h,f,g){for(var k=0;k<l.length;++k){var V=l[k];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==g)return k}return-1}var ed="closure_lm_"+(1e6*Math.random()|0),td={};function c_(l,h,f,g,k){if(Array.isArray(h)){for(var V=0;V<h.length;V++)c_(l,h[V],f,g,k);return null}return f=f_(f),l&&l[Bn]?l.K(h,f,c(g)?!!g.capture:!1,k):gR(l,h,f,!1,g,k)}function gR(l,h,f,g,k,V){if(!h)throw Error("Invalid event type");var j=c(k)?!!k.capture:!!k,fe=rd(l);if(fe||(l[ed]=fe=new Xl(l)),f=fe.add(h,f,g,j,V),f.proxy)return f;if(g=_R(),f.proxy=g,g.src=l,g.listener=f,l.addEventListener)Mn||(k=j),k===void 0&&(k=!1),l.addEventListener(h.toString(),g,k);else if(l.attachEvent)l.attachEvent(d_(h.toString()),g);else if(l.addListener&&l.removeListener)l.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function _R(){function l(f){return h.call(l.src,l.listener,f)}const h=yR;return l}function h_(l,h,f,g,k){if(Array.isArray(h))for(var V=0;V<h.length;V++)h_(l,h[V],f,g,k);else g=c(g)?!!g.capture:!!g,f=f_(f),l&&l[Bn]?(l=l.i,h=String(h).toString(),h in l.g&&(V=l.g[h],f=Zh(V,f,g,k),-1<f&&(Jl(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete l.g[h],l.h--)))):l&&(l=rd(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Zh(h,f,g,k)),(f=-1<l?h[l]:null)&&nd(f))}function nd(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[Bn])Xh(h.i,l);else{var f=l.type,g=l.proxy;h.removeEventListener?h.removeEventListener(f,g,l.capture):h.detachEvent?h.detachEvent(d_(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=rd(h))?(Xh(f,l),f.h==0&&(f.src=null,h[ed]=null)):Jl(l)}}}function d_(l){return l in td?td[l]:td[l]="on"+l}function yR(l,h){if(l.da)l=!0;else{h=new Fn(h,this);var f=l.listener,g=l.ha||l.src;l.fa&&nd(l),l=f.call(g,h)}return l}function rd(l){return l=l[ed],l instanceof Xl?l:null}var id="__closure_events_fn_"+(1e9*Math.random()>>>0);function f_(l){return typeof l=="function"?l:(l[id]||(l[id]=function(h){return l.handleEvent(h)}),l[id])}function ut(){de.call(this),this.i=new Xl(this),this.M=this,this.F=null}P(ut,de),ut.prototype[Bn]=!0,ut.prototype.removeEventListener=function(l,h,f,g){h_(this,l,h,f,g)};function yt(l,h){var f,g=l.F;if(g)for(f=[];g;g=g.F)f.push(g);if(l=l.M,g=h.type||h,typeof h=="string")h=new Fe(h,l);else if(h instanceof Fe)h.target=h.target||l;else{var k=h;h=new Fe(g,l),E(h,k)}if(k=!0,f)for(var V=f.length-1;0<=V;V--){var j=h.g=f[V];k=Zl(j,g,!0,h)&&k}if(j=h.g=l,k=Zl(j,g,!0,h)&&k,k=Zl(j,g,!1,h)&&k,f)for(V=0;V<f.length;V++)j=h.g=f[V],k=Zl(j,g,!1,h)&&k}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var f=l.g[h],g=0;g<f.length;g++)Jl(f[g]);delete l.g[h],l.h--}}this.F=null},ut.prototype.K=function(l,h,f,g){return this.i.add(String(l),h,!1,f,g)},ut.prototype.L=function(l,h,f,g){return this.i.add(String(l),h,!0,f,g)};function Zl(l,h,f,g){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,V=0;V<h.length;++V){var j=h[V];if(j&&!j.da&&j.capture==f){var fe=j.listener,tt=j.ha||j.src;j.fa&&Xh(l.i,j),k=fe.call(tt,g)!==!1&&k}}return k&&!g.defaultPrevented}function p_(l,h,f){if(typeof l=="function")f&&(l=m(l,f));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function m_(l){l.g=p_(()=>{l.g=null,l.i&&(l.i=!1,m_(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class vR extends de{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:m_(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xo(l){de.call(this),this.h=l,this.g={}}P(xo,de);var g_=[];function __(l){F(l.g,function(h,f){this.g.hasOwnProperty(f)&&nd(h)},l),l.g={}}xo.prototype.N=function(){xo.aa.N.call(this),__(this)},xo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var sd=a.JSON.stringify,wR=a.JSON.parse,IR=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function od(){}od.prototype.h=null;function y_(l){return l.h||(l.h=l.i())}function v_(){}var Oo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ad(){Fe.call(this,"d")}P(ad,Fe);function ld(){Fe.call(this,"c")}P(ld,Fe);var ci={},w_=null;function eu(){return w_=w_||new ut}ci.La="serverreachability";function I_(l){Fe.call(this,ci.La,l)}P(I_,Fe);function Lo(l){const h=eu();yt(h,new I_(h))}ci.STAT_EVENT="statevent";function E_(l,h){Fe.call(this,ci.STAT_EVENT,l),this.stat=h}P(E_,Fe);function vt(l){const h=eu();yt(h,new E_(h,l))}ci.Ma="timingevent";function T_(l,h){Fe.call(this,ci.Ma,l),this.size=h}P(T_,Fe);function Mo(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function Fo(){this.g=!0}Fo.prototype.xa=function(){this.g=!1};function ER(l,h,f,g,k,V){l.info(function(){if(l.g)if(V)for(var j="",fe=V.split("&"),tt=0;tt<fe.length;tt++){var ae=fe[tt].split("=");if(1<ae.length){var ct=ae[0];ae=ae[1];var ht=ct.split("_");j=2<=ht.length&&ht[1]=="type"?j+(ct+"="+ae+"&"):j+(ct+"=redacted&")}}else j=null;else j=V;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+h+`
`+f+`
`+j})}function TR(l,h,f,g,k,V,j){l.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+h+`
`+f+`
`+V+" "+j})}function as(l,h,f,g){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+AR(l,f)+(g?" "+g:"")})}function SR(l,h){l.info(function(){return"TIMEOUT: "+h})}Fo.prototype.info=function(){};function AR(l,h){if(!l.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(l=0;l<f.length;l++)if(Array.isArray(f[l])){var g=f[l];if(!(2>g.length)){var k=g[1];if(Array.isArray(k)&&!(1>k.length)){var V=k[0];if(V!="noop"&&V!="stop"&&V!="close")for(var j=1;j<k.length;j++)k[j]=""}}}}return sd(f)}catch{return h}}var tu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},S_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ud;function nu(){}P(nu,od),nu.prototype.g=function(){return new XMLHttpRequest},nu.prototype.i=function(){return{}},ud=new nu;function dr(l,h,f,g){this.j=l,this.i=h,this.l=f,this.R=g||1,this.U=new xo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new A_}function A_(){this.i=null,this.g="",this.h=!1}var R_={},cd={};function hd(l,h,f){l.L=1,l.v=ou(zn(h)),l.m=f,l.P=!0,P_(l,null)}function P_(l,h){l.F=Date.now(),ru(l),l.A=zn(l.v);var f=l.A,g=l.R;Array.isArray(g)||(g=[String(g)]),z_(f.i,"t",g),l.C=0,f=l.j.J,l.h=new A_,l.g=sy(l.j,f?h:null,!l.m),0<l.O&&(l.M=new vR(m(l.Y,l,l.g),l.O)),h=l.U,f=l.g,g=l.ca;var k="readystatechange";Array.isArray(k)||(k&&(g_[0]=k.toString()),k=g_);for(var V=0;V<k.length;V++){var j=c_(f,k[V],g||h.handleEvent,!1,h.h||h);if(!j)break;h.g[j.key]=j}h=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Lo(),ER(l.i,l.u,l.A,l.l,l.R,l.m)}dr.prototype.ca=function(l){l=l.target;const h=this.M;h&&jn(l)==3?h.j():this.Y(l)},dr.prototype.Y=function(l){try{if(l==this.g)e:{const ht=jn(this.g);var h=this.g.Ba();const cs=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||H_(this.g)))){this.J||ht!=4||h==7||(h==8||0>=cs?Lo(3):Lo(2)),dd(this);var f=this.g.Z();this.X=f;t:if(k_(this)){var g=H_(this.g);l="";var k=g.length,V=jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hi(this),Uo(this);var j="";break t}this.h.i=new a.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,l+=this.h.i.decode(g[h],{stream:!(V&&h==k-1)});g.length=0,this.h.g+=l,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=f==200,TR(this.i,this.u,this.A,this.l,this.R,ht,f),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,tt=this.g;if((fe=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(fe)){var ae=fe;break t}}ae=null}if(f=ae)as(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fd(this,f);else{this.o=!1,this.s=3,vt(12),hi(this),Uo(this);break e}}if(this.P){f=!0;let an;for(;!this.J&&this.C<j.length;)if(an=RR(this,j),an==cd){ht==4&&(this.s=4,vt(14),f=!1),as(this.i,this.l,null,"[Incomplete Response]");break}else if(an==R_){this.s=4,vt(15),as(this.i,this.l,j,"[Invalid Chunk]"),f=!1;break}else as(this.i,this.l,an,null),fd(this,an);if(k_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||j.length!=0||this.h.h||(this.s=1,vt(16),f=!1),this.o=this.o&&f,!f)as(this.i,this.l,j,"[Invalid Chunked Response]"),hi(this),Uo(this);else if(0<j.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),vd(ct),ct.M=!0,vt(11))}}else as(this.i,this.l,j,null),fd(this,j);ht==4&&hi(this),this.o&&!this.J&&(ht==4?ty(this.j,this):(this.o=!1,ru(this)))}else $R(this.g),f==400&&0<j.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),hi(this),Uo(this)}}}catch{}finally{}};function k_(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function RR(l,h){var f=l.C,g=h.indexOf(`
`,f);return g==-1?cd:(f=Number(h.substring(f,g)),isNaN(f)?R_:(g+=1,g+f>h.length?cd:(h=h.slice(g,g+f),l.C=g+f,h)))}dr.prototype.cancel=function(){this.J=!0,hi(this)};function ru(l){l.S=Date.now()+l.I,C_(l,l.I)}function C_(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Mo(m(l.ba,l),h)}function dd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}dr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(SR(this.i,this.A),this.L!=2&&(Lo(),vt(17)),hi(this),this.s=2,Uo(this)):C_(this,this.S-l)};function Uo(l){l.j.G==0||l.J||ty(l.j,l)}function hi(l){dd(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,__(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function fd(l,h){try{var f=l.j;if(f.G!=0&&(f.g==l||pd(f.h,l))){if(!l.K&&pd(f.h,l)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<l.F)du(f),cu(f);else break e;yd(f),vt(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=Mo(m(f.Za,f),6e3));if(1>=b_(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else fi(f,11)}else if((l.K||f.g==l)&&du(f),!y(h))for(k=f.Da.g.parse(h),h=0;h<k.length;h++){let ae=k[h];if(f.T=ae[0],ae=ae[1],f.G==2)if(ae[0]=="c"){f.K=ae[1],f.ia=ae[2];const ct=ae[3];ct!=null&&(f.la=ct,f.j.info("VER="+f.la));const ht=ae[4];ht!=null&&(f.Aa=ht,f.j.info("SVER="+f.Aa));const cs=ae[5];cs!=null&&typeof cs=="number"&&0<cs&&(g=1.5*cs,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const an=l.g;if(an){const pu=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(pu){var V=g.h;V.g||pu.indexOf("spdy")==-1&&pu.indexOf("quic")==-1&&pu.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(md(V,V.h),V.h=null))}if(g.D){const wd=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;wd&&(g.ya=wd,ge(g.I,g.D,wd))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-l.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var j=l;if(g.qa=iy(g,g.J?g.ia:null,g.W),j.K){V_(g.h,j);var fe=j,tt=g.L;tt&&(fe.I=tt),fe.B&&(dd(fe),ru(fe)),g.g=j}else Z_(g);0<f.i.length&&hu(f)}else ae[0]!="stop"&&ae[0]!="close"||fi(f,7);else f.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?fi(f,7):_d(f):ae[0]!="noop"&&f.l&&f.l.ta(ae),f.v=0)}}Lo(4)}catch{}}var PR=class{constructor(l,h){this.g=l,this.map=h}};function D_(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function N_(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function b_(l){return l.h?1:l.g?l.g.size:0}function pd(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function md(l,h){l.g?l.g.add(h):l.h=h}function V_(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}D_.prototype.cancel=function(){if(this.i=x_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function x_(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const f of l.g.values())h=h.concat(f.D);return h}return C(l.i)}function kR(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],f=l.length,g=0;g<f;g++)h.push(l[g]);return h}h=[],f=0;for(g in l)h[f++]=l[g];return h}function CR(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var f=0;f<l;f++)h.push(f);return h}h=[],f=0;for(const g in l)h[f++]=g;return h}}}function O_(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var f=CR(l),g=kR(l),k=g.length,V=0;V<k;V++)h.call(void 0,g[V],f&&f[V],l)}var L_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function DR(l,h){if(l){l=l.split("&");for(var f=0;f<l.length;f++){var g=l[f].indexOf("="),k=null;if(0<=g){var V=l[f].substring(0,g);k=l[f].substring(g+1)}else V=l[f];h(V,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function di(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof di){this.h=l.h,iu(this,l.j),this.o=l.o,this.g=l.g,su(this,l.s),this.l=l.l;var h=l.i,f=new jo;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),M_(this,f),this.m=l.m}else l&&(h=String(l).match(L_))?(this.h=!1,iu(this,h[1]||"",!0),this.o=Bo(h[2]||""),this.g=Bo(h[3]||"",!0),su(this,h[4]),this.l=Bo(h[5]||"",!0),M_(this,h[6]||"",!0),this.m=Bo(h[7]||"")):(this.h=!1,this.i=new jo(null,this.h))}di.prototype.toString=function(){var l=[],h=this.j;h&&l.push(zo(h,F_,!0),":");var f=this.g;return(f||h=="file")&&(l.push("//"),(h=this.o)&&l.push(zo(h,F_,!0),"@"),l.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&l.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&l.push("/"),l.push(zo(f,f.charAt(0)=="/"?VR:bR,!0))),(f=this.i.toString())&&l.push("?",f),(f=this.m)&&l.push("#",zo(f,OR)),l.join("")};function zn(l){return new di(l)}function iu(l,h,f){l.j=f?Bo(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function su(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function M_(l,h,f){h instanceof jo?(l.i=h,LR(l.i,l.h)):(f||(h=zo(h,xR)),l.i=new jo(h,l.h))}function ge(l,h,f){l.i.set(h,f)}function ou(l){return ge(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Bo(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function zo(l,h,f){return typeof l=="string"?(l=encodeURI(l).replace(h,NR),f&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function NR(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var F_=/[#\/\?@]/g,bR=/[#\?:]/g,VR=/[#\?]/g,xR=/[#\?@]/g,OR=/#/g;function jo(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function fr(l){l.g||(l.g=new Map,l.h=0,l.i&&DR(l.i,function(h,f){l.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=jo.prototype,n.add=function(l,h){fr(this),this.i=null,l=ls(this,l);var f=this.g.get(l);return f||this.g.set(l,f=[]),f.push(h),this.h+=1,this};function U_(l,h){fr(l),h=ls(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function B_(l,h){return fr(l),h=ls(l,h),l.g.has(h)}n.forEach=function(l,h){fr(this),this.g.forEach(function(f,g){f.forEach(function(k){l.call(h,k,g,this)},this)},this)},n.na=function(){fr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const k=l[g];for(let V=0;V<k.length;V++)f.push(h[g])}return f},n.V=function(l){fr(this);let h=[];if(typeof l=="string")B_(this,l)&&(h=h.concat(this.g.get(ls(this,l))));else{l=Array.from(this.g.values());for(let f=0;f<l.length;f++)h=h.concat(l[f])}return h},n.set=function(l,h){return fr(this),this.i=null,l=ls(this,l),B_(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},n.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function z_(l,h,f){U_(l,h),0<f.length&&(l.i=null,l.g.set(ls(l,h),C(f)),l.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const V=encodeURIComponent(String(g)),j=this.V(g);for(g=0;g<j.length;g++){var k=V;j[g]!==""&&(k+="="+encodeURIComponent(String(j[g]))),l.push(k)}}return this.i=l.join("&")};function ls(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function LR(l,h){h&&!l.j&&(fr(l),l.i=null,l.g.forEach(function(f,g){var k=g.toLowerCase();g!=k&&(U_(this,g),z_(this,k,f))},l)),l.j=h}function MR(l,h){const f=new Fo;if(a.Image){const g=new Image;g.onload=w(pr,f,"TestLoadImage: loaded",!0,h,g),g.onerror=w(pr,f,"TestLoadImage: error",!1,h,g),g.onabort=w(pr,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=w(pr,f,"TestLoadImage: timeout",!1,h,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=l}else h(!1)}function FR(l,h){const f=new Fo,g=new AbortController,k=setTimeout(()=>{g.abort(),pr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:g.signal}).then(V=>{clearTimeout(k),V.ok?pr(f,"TestPingServer: ok",!0,h):pr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),pr(f,"TestPingServer: error",!1,h)})}function pr(l,h,f,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(f)}catch{}}function UR(){this.g=new IR}function BR(l,h,f){const g=f||"";try{O_(l,function(k,V){let j=k;c(k)&&(j=sd(k)),h.push(g+V+"="+encodeURIComponent(j))})}catch(k){throw h.push(g+"type="+encodeURIComponent("_badmap")),k}}function au(l){this.l=l.Ub||null,this.j=l.eb||!1}P(au,od),au.prototype.g=function(){return new lu(this.l,this.j)},au.prototype.i=function(l){return function(){return l}}({});function lu(l,h){ut.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(lu,ut),n=lu.prototype,n.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,qo(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$o(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,qo(this)),this.g&&(this.readyState=3,qo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;j_(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function j_(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?$o(this):qo(this),this.readyState==3&&j_(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,$o(this))},n.Qa=function(l){this.g&&(this.response=l,$o(this))},n.ga=function(){this.g&&$o(this)};function $o(l){l.readyState=4,l.l=null,l.j=null,l.v=null,qo(l)}n.setRequestHeader=function(l,h){this.u.append(l,h)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,l.push(f[0]+": "+f[1]),f=h.next();return l.join(`\r
`)};function qo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(lu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function $_(l){let h="";return F(l,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function gd(l,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=$_(f),typeof l=="string"?f!=null&&encodeURIComponent(String(f)):ge(l,h,f))}function Ne(l){ut.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ne,ut);var zR=/^https?$/i,jR=["POST","PUT"];n=Ne.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ud.g(),this.v=this.o?y_(this.o):y_(ud),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(V){q_(this,V);return}if(l=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)f.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())f.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),k=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(jR,h,void 0))||g||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,j]of f)this.g.setRequestHeader(V,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{K_(this),this.u=!0,this.g.send(l),this.u=!1}catch(V){q_(this,V)}};function q_(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,W_(l),uu(l)}function W_(l){l.A||(l.A=!0,yt(l,"complete"),yt(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,yt(this,"complete"),yt(this,"abort"),uu(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),uu(this,!0)),Ne.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?G_(this):this.bb())},n.bb=function(){G_(this)};function G_(l){if(l.h&&typeof o<"u"&&(!l.v[1]||jn(l)!=4||l.Z()!=2)){if(l.u&&jn(l)==4)p_(l.Ea,0,l);else if(yt(l,"readystatechange"),jn(l)==4){l.h=!1;try{const j=l.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=j===0){var k=String(l.D).match(L_)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),g=!zR.test(k?k.toLowerCase():"")}f=g}if(f)yt(l,"complete"),yt(l,"success");else{l.m=6;try{var V=2<jn(l)?l.g.statusText:""}catch{V=""}l.l=V+" ["+l.Z()+"]",W_(l)}}finally{uu(l)}}}}function uu(l,h){if(l.g){K_(l);const f=l.g,g=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||yt(l,"ready");try{f.onreadystatechange=g}catch{}}}function K_(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function jn(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<jn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),wR(h)}};function H_(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function $R(l){const h={};l=(l.g&&2<=jn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<l.length;g++){if(y(l[g]))continue;var f=R(l[g]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[k]||[];h[k]=V,V.push(f)}v(h,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wo(l,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[l]||h}function Q_(l){this.Aa=0,this.i=[],this.j=new Fo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wo("baseRetryDelayMs",5e3,l),this.cb=Wo("retryDelaySeedMs",1e4,l),this.Wa=Wo("forwardChannelMaxRetries",2,l),this.wa=Wo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new D_(l&&l.concurrentRequestLimit),this.Da=new UR,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Q_.prototype,n.la=8,n.G=1,n.connect=function(l,h,f,g){vt(0),this.W=l,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=iy(this,null,this.W),hu(this)};function _d(l){if(Y_(l),l.G==3){var h=l.U++,f=zn(l.I);if(ge(f,"SID",l.K),ge(f,"RID",h),ge(f,"TYPE","terminate"),Go(l,f),h=new dr(l,l.j,h),h.L=2,h.v=ou(zn(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&a.Image&&(new Image().src=h.v,f=!0),f||(h.g=sy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ru(h)}ry(l)}function cu(l){l.g&&(vd(l),l.g.cancel(),l.g=null)}function Y_(l){cu(l),l.u&&(a.clearTimeout(l.u),l.u=null),du(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function hu(l){if(!N_(l.h)&&!l.s){l.s=!0;var h=l.Ga;Ln||ee(),W||(Ln(),W=!0),J.add(h,l),l.B=0}}function qR(l,h){return b_(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Mo(m(l.Ga,l,h),ny(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const k=new dr(this,this.j,l);let V=this.o;if(this.S&&(V?(V=_(V),E(V,this.S)):V=this.S),this.m!==null||this.O||(k.H=V,V=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=X_(this,k,h),f=zn(this.I),ge(f,"RID",l),ge(f,"CVER",22),this.D&&ge(f,"X-HTTP-Session-Id",this.D),Go(this,f),V&&(this.O?h="headers="+encodeURIComponent(String($_(V)))+"&"+h:this.m&&gd(f,this.m,V)),md(this.h,k),this.Ua&&ge(f,"TYPE","init"),this.P?(ge(f,"$req",h),ge(f,"SID","null"),k.T=!0,hd(k,f,null)):hd(k,f,h),this.G=2}}else this.G==3&&(l?J_(this,l):this.i.length==0||N_(this.h)||J_(this))};function J_(l,h){var f;h?f=h.l:f=l.U++;const g=zn(l.I);ge(g,"SID",l.K),ge(g,"RID",f),ge(g,"AID",l.T),Go(l,g),l.m&&l.o&&gd(g,l.m,l.o),f=new dr(l,l.j,f,l.B+1),l.m===null&&(f.H=l.o),h&&(l.i=h.D.concat(l.i)),h=X_(l,f,1e3),f.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),md(l.h,f),hd(f,g,h)}function Go(l,h){l.H&&F(l.H,function(f,g){ge(h,g,f)}),l.l&&O_({},function(f,g){ge(h,g,f)})}function X_(l,h,f){f=Math.min(l.i.length,f);var g=l.l?m(l.l.Na,l.l,l):null;e:{var k=l.i;let V=-1;for(;;){const j=["count="+f];V==-1?0<f?(V=k[0].g,j.push("ofs="+V)):V=0:j.push("ofs="+V);let fe=!0;for(let tt=0;tt<f;tt++){let ae=k[tt].g;const ct=k[tt].map;if(ae-=V,0>ae)V=Math.max(0,k[tt].g-100),fe=!1;else try{BR(ct,j,"req"+ae+"_")}catch{g&&g(ct)}}if(fe){g=j.join("&");break e}}}return l=l.i.splice(0,f),h.D=l,g}function Z_(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;Ln||ee(),W||(Ln(),W=!0),J.add(h,l),l.v=0}}function yd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Mo(m(l.Fa,l),ny(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,ey(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Mo(m(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),cu(this),ey(this))};function vd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function ey(l){l.g=new dr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=zn(l.qa);ge(h,"RID","rpc"),ge(h,"SID",l.K),ge(h,"AID",l.T),ge(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&ge(h,"TO",l.ja),ge(h,"TYPE","xmlhttp"),Go(l,h),l.m&&l.o&&gd(h,l.m,l.o),l.L&&(l.g.I=l.L);var f=l.g;l=l.ia,f.L=1,f.v=ou(zn(h)),f.m=null,f.P=!0,P_(f,l)}n.Za=function(){this.C!=null&&(this.C=null,cu(this),yd(this),vt(19))};function du(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function ty(l,h){var f=null;if(l.g==h){du(l),vd(l),l.g=null;var g=2}else if(pd(l.h,h))f=h.D,V_(l.h,h),g=1;else return;if(l.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var k=l.B;g=eu(),yt(g,new T_(g,f)),hu(l)}else Z_(l);else if(k=h.s,k==3||k==0&&0<h.X||!(g==1&&qR(l,h)||g==2&&yd(l)))switch(f&&0<f.length&&(h=l.h,h.i=h.i.concat(f)),k){case 1:fi(l,5);break;case 4:fi(l,10);break;case 3:fi(l,6);break;default:fi(l,2)}}}function ny(l,h){let f=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(f*=2),f*h}function fi(l,h){if(l.j.info("Error code "+h),h==2){var f=m(l.fb,l),g=l.Xa;const k=!g;g=new di(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||iu(g,"https"),ou(g),k?MR(g.toString(),f):FR(g.toString(),f)}else vt(2);l.G=0,l.l&&l.l.sa(h),ry(l),Y_(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function ry(l){if(l.G=0,l.ka=[],l.l){const h=x_(l.h);(h.length!=0||l.i.length!=0)&&(O(l.ka,h),O(l.ka,l.i),l.h.i.length=0,C(l.i),l.i.length=0),l.l.ra()}}function iy(l,h,f){var g=f instanceof di?zn(f):new di(f);if(g.g!="")h&&(g.g=h+"."+g.g),su(g,g.s);else{var k=a.location;g=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var V=new di(null);g&&iu(V,g),h&&(V.g=h),k&&su(V,k),f&&(V.l=f),g=V}return f=l.D,h=l.ya,f&&h&&ge(g,f,h),ge(g,"VER",l.la),Go(l,g),g}function sy(l,h,f){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Ne(new au({eb:f})):new Ne(l.pa),h.Ha(l.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function oy(){}n=oy.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function fu(){}fu.prototype.g=function(l,h){return new Bt(l,h)};function Bt(l,h){ut.call(this),this.g=new Q_(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!y(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new us(this)}P(Bt,ut),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){_d(this.g)},Bt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var f={};f.__data__=l,l=f}else this.u&&(f={},f.__data__=sd(l),l=f);h.i.push(new PR(h.Ya++,l)),h.G==3&&hu(h)},Bt.prototype.N=function(){this.g.l=null,delete this.j,_d(this.g),delete this.g,Bt.aa.N.call(this)};function ay(l){ad.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const f in h){l=f;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}P(ay,ad);function ly(){ld.call(this),this.status=1}P(ly,ld);function us(l){this.g=l}P(us,oy),us.prototype.ua=function(){yt(this.g,"a")},us.prototype.ta=function(l){yt(this.g,new ay(l))},us.prototype.sa=function(l){yt(this.g,new ly)},us.prototype.ra=function(){yt(this.g,"b")},fu.prototype.createWebChannel=fu.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,Q0=function(){return new fu},H0=function(){return eu()},K0=ci,pp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},tu.NO_ERROR=0,tu.TIMEOUT=8,tu.HTTP_ERROR=6,nc=tu,S_.COMPLETE="complete",G0=S_,v_.EventType=Oo,Oo.OPEN="a",Oo.CLOSE="b",Oo.ERROR="c",Oo.MESSAGE="d",ut.prototype.listen=ut.prototype.K,_a=v_,Ne.prototype.listenOnce=Ne.prototype.L,Ne.prototype.getLastError=Ne.prototype.Ka,Ne.prototype.getLastErrorCode=Ne.prototype.Ba,Ne.prototype.getStatus=Ne.prototype.Z,Ne.prototype.getResponseJson=Ne.prototype.Oa,Ne.prototype.getResponseText=Ne.prototype.oa,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Ha,W0=Ne}).apply(typeof Vu<"u"?Vu:typeof self<"u"?self:typeof window<"u"?window:{});const Jv="@firebase/firestore";/**
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
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
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
 */let Ao="10.14.0";/**
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
 */const Gr=new _h("@firebase/firestore");function _s(){return Gr.logLevel}function dx(n){Gr.setLogLevel(n)}function M(n,...e){if(Gr.logLevel<=te.DEBUG){const t=e.map(ag);Gr.debug(`Firestore (${Ao}): ${n}`,...t)}}function Be(n,...e){if(Gr.logLevel<=te.ERROR){const t=e.map(ag);Gr.error(`Firestore (${Ao}): ${n}`,...t)}}function Vn(n,...e){if(Gr.logLevel<=te.WARN){const t=e.map(ag);Gr.warn(`Firestore (${Ao}): ${n}`,...t)}}function ag(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function G(n="Unexpected state"){const e=`FIRESTORE (${Ao}) INTERNAL ASSERTION FAILED: `+n;throw Be(e),new Error(e)}function H(n,e){n||G()}function fx(n,e){n||G()}function q(n,e){return n}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends St{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ot{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Y0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class px{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Xe.UNAUTHENTICATED))}shutdown(){}}class mx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class gx{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){H(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new ot;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ot,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ot)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(H(typeof r.accessToken=="string"),new Y0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return H(e===null||typeof e=="string"),new Xe(e)}}class _x{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class yx{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new _x(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){H(this.o===void 0);const r=s=>{s.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(H(typeof t.token=="string"),this.R=t.token,new vx(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ix(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class J0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Ix(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function X(n,e){return n<e?-1:n>e?1:0}function io(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function X0(n){return n+"\0"}/**
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
 */class Se{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new L(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Se.fromMillis(Date.now())}static fromDate(e){return Se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Se(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Se(0,0))}static max(){return new Q(new Se(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class hl{constructor(e,t,r){t===void 0?t=0:t>e.length&&G(),r===void 0?r=e.length-t:r>e.length-t&&G(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return hl.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof hl?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class re extends hl{construct(e,t,r){return new re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new re(t)}static emptyPath(){return new re([])}}const Ex=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends hl{construct(e,t,r){return new Ee(e,t,r)}static isValidIdentifier(e){return Ex.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ee(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new L(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new L(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(t)}static emptyPath(){return new Ee([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(re.fromString(e))}static fromName(e){return new $(re.fromString(e).popFirst(5))}static empty(){return new $(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new re(e.slice()))}}/**
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
 */class jc{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function mp(n){return n.fields.find(e=>e.kind===2)}function yi(n){return n.fields.filter(e=>e.kind!==2)}jc.UNKNOWN_ID=-1;class rc{constructor(e,t){this.fieldPath=e,this.kind=t}}class dl{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new dl(0,Kt.min())}}function Z0(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new Se(t+1,0):new Se(t,r));return new Kt(i,$.empty(),e)}function eS(n){return new Kt(n.readTime,n.key,-1)}class Kt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Kt(Q.min(),$.empty(),-1)}static max(){return new Kt(Q.max(),$.empty(),-1)}}function lg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(n.documentKey,e.documentKey),t!==0?t:X(n.largestBatchId,e.largestBatchId))}/**
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
 */const tS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function si(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==tS)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,r)=>{t(e)})}static reject(e){return new N((t,r)=>{r(e)})}static waitFor(e){return new N((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},u=>r(u))}),o=!0,s===i&&t()})}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next(i=>i?N.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new N((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;t(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,t){return new N((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
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
 */class Ch{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new ot,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Va(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=ug(r.target.error);this.V.reject(new Va(e,i))}}static open(e,t,r,i){try{return new Ch(t,e.transaction(i,r))}catch(s){throw new Va(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(M("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Sx(t)}}class Cn{constructor(e,t,r){this.name=e,this.version=t,this.p=r,Cn.S(De())===12.2&&Be("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return M("SimpleDb","Removing database:",e),vi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!nl())return!1;if(Cn.v())return!0;const e=De(),t=Cn.S(e),r=0<t&&t<10,i=rS(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(M("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Va(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new L(b.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new L(b.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Va(e,o))},i.onupgradeneeded=s=>{M("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{M("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Ch.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),N.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(M("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function rS(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class Tx{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return vi(this.B.delete())}}class Va extends L{constructor(e,t){super(b.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function oi(n){return n.name==="IndexedDbTransactionError"}class Sx{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(M("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(M("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),vi(r)}add(e){return M("SimpleDb","ADD",this.store.name,e,e),vi(this.store.add(e))}get(e){return vi(this.store.get(e)).next(t=>(t===void 0&&(t=null),M("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return M("SimpleDb","DELETE",this.store.name,e),vi(this.store.delete(e))}count(){return M("SimpleDb","COUNT",this.store.name),vi(this.store.count())}U(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new N((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,u)=>{o.push(u)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new N((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,t){M("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}Y(e){const t=this.cursor({});return new N((r,i)=>{t.onerror=s=>{const o=ug(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new N((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new Tx(a),c=t(a.primaryKey,a.value,u);if(c instanceof N){const d=c.catch(p=>(u.done(),N.reject(p)));r.push(d)}u.isDone?i():u.K===null?a.continue():a.continue(u.K)}}).next(()=>N.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function vi(n){return new N((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=ug(r.target.error);t(i)}})}let Xv=!1;function ug(n){const e=Cn.S(De());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new L("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Xv||(Xv=!0,setTimeout(()=>{throw r},0)),r}}return n}class Ax{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){M("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{M("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){oi(t)?M("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await si(t)}await this.X(6e4)})}}class Rx{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let i=t,s=!0;return N.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return M("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(M("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=eS(s);lg(o,r)>0&&(r=o)}),new Kt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class xt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}xt.oe=-1;function Fl(n){return n==null}function fl(n){return n===0&&1/n==-1/0}function iS(n){return typeof n=="number"&&Number.isInteger(n)&&!fl(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function At(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Zv(e)),e=Px(n.get(t),e);return Zv(e)}function Px(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Zv(n){return n+""}function An(n){const e=n.length;if(H(e>=2),e===2)return H(n.charAt(0)===""&&n.charAt(1)===""),re.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&G(),n.charAt(o+1)){case"":const a=n.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:G()}s=o+2}return new re(r)}/**
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
 */const ew=["userId","batchId"];/**
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
 */function ic(n,e){return[n,At(e)]}function sS(n,e,t){return[n,At(e),t]}const kx={},Cx=["prefixPath","collectionGroup","readTime","documentId"],Dx=["prefixPath","collectionGroup","documentId"],Nx=["collectionGroup","readTime","prefixPath","documentId"],bx=["canonicalId","targetId"],Vx=["targetId","path"],xx=["path","targetId"],Ox=["collectionId","parent"],Lx=["indexId","uid"],Mx=["uid","sequenceNumber"],Fx=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Ux=["indexId","uid","orderedDocumentKey"],Bx=["userId","collectionPath","documentId"],zx=["userId","collectionPath","largestBatchId"],jx=["userId","collectionGroup","largestBatchId"],oS=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],$x=[...oS,"documentOverlays"],aS=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],lS=aS,cg=[...lS,"indexConfiguration","indexState","indexEntries"],qx=cg,Wx=[...cg,"globals"];/**
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
 */class gp extends nS{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Qe(n,e){const t=q(n);return Cn.F(t._e,e)}/**
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
 */function tw(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ns(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function uS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class me{constructor(e,t){this.comparator=e,this.root=t||rt.EMPTY}insert(e,t){return new me(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xu(this.root,e,this.comparator,!1)}getReverseIterator(){return new xu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xu(this.root,e,this.comparator,!0)}}class xu{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??rt.RED,this.left=i??rt.EMPTY,this.right=s??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new rt(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,t,r,i,s){return this}insert(e,t,r){return new rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class he{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new nw(this.data.getIterator())}getIteratorFrom(e){return new nw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof he)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new he(this.comparator);return t.data=e,t}}class nw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function fs(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class Ot{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new Ot([])}unionWith(e){let t=new he(Ee.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ot(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return io(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class cS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function Gx(){return typeof atob<"u"}/**
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
 */class Oe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new cS("Invalid base64 string: "+s):s}}(e);return new Oe(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Oe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Oe.EMPTY_BYTE_STRING=new Oe("");const Kx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ir(n){if(H(!!n),typeof n=="string"){let e=0;const t=Kx.exec(n);if(H(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(n.seconds),nanos:we(n.nanos)}}function we(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Kr(n){return typeof n=="string"?Oe.fromBase64String(n):Oe.fromUint8Array(n)}/**
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
 */function Dh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function hg(n){const e=n.mapValue.fields.__previous_value__;return Dh(e)?hg(e):e}function pl(n){const e=ir(n.mapValue.fields.__local_write_time__.timestampValue);return new Se(e.seconds,e.nanos)}/**
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
 */class Hx{constructor(e,t,r,i,s,o,a,u,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Hr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Hr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Hr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Cr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},sc={nullValue:"NULL_VALUE"};function $i(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Dh(n)?4:hS(n)?9007199254740991:Nh(n)?10:11:G()}function xn(n,e){if(n===e)return!0;const t=$i(n);if(t!==$i(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return pl(n).isEqual(pl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ir(i.timestampValue),a=ir(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Kr(i.bytesValue).isEqual(Kr(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return we(i.geoPointValue.latitude)===we(s.geoPointValue.latitude)&&we(i.geoPointValue.longitude)===we(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return we(i.integerValue)===we(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=we(i.doubleValue),a=we(s.doubleValue);return o===a?fl(o)===fl(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return io(n.arrayValue.values||[],e.arrayValue.values||[],xn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(tw(o)!==tw(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!xn(o[u],a[u])))return!1;return!0}(n,e);default:return G()}}function ml(n,e){return(n.values||[]).find(t=>xn(t,e))!==void 0}function Qr(n,e){if(n===e)return 0;const t=$i(n),r=$i(e);if(t!==r)return X(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=we(s.integerValue||s.doubleValue),u=we(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,e);case 3:return rw(n.timestampValue,e.timestampValue);case 4:return rw(pl(n),pl(e));case 5:return X(n.stringValue,e.stringValue);case 6:return function(s,o){const a=Kr(s),u=Kr(o);return a.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=X(a[c],u[c]);if(d!==0)return d}return X(a.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=X(we(s.latitude),we(o.latitude));return a!==0?a:X(we(s.longitude),we(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return iw(n.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,d;const p=s.fields||{},m=o.fields||{},w=(a=p.value)===null||a===void 0?void 0:a.arrayValue,P=(u=m.value)===null||u===void 0?void 0:u.arrayValue,C=X(((c=w==null?void 0:w.values)===null||c===void 0?void 0:c.length)||0,((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0);return C!==0?C:iw(w,P)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===Cr.mapValue&&o===Cr.mapValue)return 0;if(s===Cr.mapValue)return 1;if(o===Cr.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=X(u[p],d[p]);if(m!==0)return m;const w=Qr(a[u[p]],c[d[p]]);if(w!==0)return w}return X(u.length,d.length)}(n.mapValue,e.mapValue);default:throw G()}}function rw(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return X(n,e);const t=ir(n),r=ir(e),i=X(t.seconds,r.seconds);return i!==0?i:X(t.nanos,r.nanos)}function iw(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Qr(t[i],r[i]);if(s)return s}return X(t.length,r.length)}function so(n){return _p(n)}function _p(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=ir(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Kr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return $.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=_p(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${_p(t.fields[o])}`;return i+"}"}(n.mapValue):G()}function qi(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function yp(n){return!!n&&"integerValue"in n}function gl(n){return!!n&&"arrayValue"in n}function sw(n){return!!n&&"nullValue"in n}function ow(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function oc(n){return!!n&&"mapValue"in n}function Nh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function xa(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ns(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=xa(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=xa(n.arrayValue.values[t]);return e}return Object.assign({},n)}function hS(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const dS={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function Qx(n){return"nullValue"in n?sc:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?qi(Hr.empty(),$.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Nh(n)?dS:{mapValue:{}}:G()}function Yx(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?qi(Hr.empty(),$.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?dS:"mapValue"in n?Nh(n)?{mapValue:{}}:Cr:G()}function aw(n,e){const t=Qr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function lw(n,e){const t=Qr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class it{constructor(e){this.value=e}static empty(){return new it({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!oc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=xa(t)}setAll(e){let t=Ee.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=xa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());oc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return xn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];oc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){ns(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new it(xa(this.value))}}function fS(n){const e=[];return ns(n.fields,(t,r)=>{const i=new Ee([t]);if(oc(r)){const s=fS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ot(e)}/**
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
 */class ye{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ye(e,0,Q.min(),Q.min(),Q.min(),it.empty(),0)}static newFoundDocument(e,t,r,i){return new ye(e,1,t,Q.min(),r,i,0)}static newNoDocument(e,t){return new ye(e,2,t,Q.min(),Q.min(),it.empty(),0)}static newUnknownDocument(e,t){return new ye(e,3,t,Q.min(),Q.min(),it.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=it.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=it.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yr{constructor(e,t){this.position=e,this.inclusive=t}}function uw(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),t.key):r=Qr(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function cw(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!xn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class _l{constructor(e,t="asc"){this.field=e,this.dir=t}}function Jx(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class pS{}class ie extends pS{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Xx(e,t,r):t==="array-contains"?new tO(e,r):t==="in"?new wS(e,r):t==="not-in"?new nO(e,r):t==="array-contains-any"?new rO(e,r):new ie(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Zx(e,r):new eO(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Qr(t,this.value)):t!==null&&$i(this.value)===$i(t)&&this.matchesComparison(Qr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ue extends pS{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ue(e,t)}matches(e){return oo(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function oo(n){return n.op==="and"}function vp(n){return n.op==="or"}function dg(n){return mS(n)&&oo(n)}function mS(n){for(const e of n.filters)if(e instanceof ue)return!1;return!0}function wp(n){if(n instanceof ie)return n.field.canonicalString()+n.op.toString()+so(n.value);if(dg(n))return n.filters.map(e=>wp(e)).join(",");{const e=n.filters.map(t=>wp(t)).join(",");return`${n.op}(${e})`}}function gS(n,e){return n instanceof ie?function(r,i){return i instanceof ie&&r.op===i.op&&r.field.isEqual(i.field)&&xn(r.value,i.value)}(n,e):n instanceof ue?function(r,i){return i instanceof ue&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&gS(o,i.filters[a]),!0):!1}(n,e):void G()}function _S(n,e){const t=n.filters.concat(e);return ue.create(t,n.op)}function yS(n){return n instanceof ie?function(t){return`${t.field.canonicalString()} ${t.op} ${so(t.value)}`}(n):n instanceof ue?function(t){return t.op.toString()+" {"+t.getFilters().map(yS).join(" ,")+"}"}(n):"Filter"}class Xx extends ie{constructor(e,t,r){super(e,t,r),this.key=$.fromName(r.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class Zx extends ie{constructor(e,t){super(e,"in",t),this.keys=vS("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class eO extends ie{constructor(e,t){super(e,"not-in",t),this.keys=vS("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function vS(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>$.fromName(r.referenceValue))}class tO extends ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return gl(t)&&ml(t.arrayValue,this.value)}}class wS extends ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ml(this.value.arrayValue,t)}}class nO extends ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(ml(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ml(this.value.arrayValue,t)}}class rO extends ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!gl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ml(this.value.arrayValue,r))}}/**
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
 */class iO{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Ip(n,e=null,t=[],r=[],i=null,s=null,o=null){return new iO(n,e,t,r,i,s,o)}function Wi(n){const e=q(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>wp(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Fl(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>so(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>so(r)).join(",")),e.ue=t}return e.ue}function Ul(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Jx(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!gS(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!cw(n.startAt,e.startAt)&&cw(n.endAt,e.endAt)}function $c(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function qc(n,e){return n.filters.filter(t=>t instanceof ie&&t.field.isEqual(e))}function hw(n,e,t){let r=sc,i=!0;for(const s of qc(n,e)){let o=sc,a=!0;switch(s.op){case"<":case"<=":o=Qx(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=sc}aw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];aw({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function dw(n,e,t){let r=Cr,i=!0;for(const s of qc(n,e)){let o=Cr,a=!0;switch(s.op){case">=":case">":o=Yx(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Cr}lw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];lw({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class ur{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function IS(n,e,t,r,i,s,o,a){return new ur(n,e,t,r,i,s,o,a)}function Ro(n){return new ur(n)}function fw(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function fg(n){return n.collectionGroup!==null}function Ws(n){const e=q(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new he(Ee.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new _l(s,r))}),t.has(Ee.keyField().canonicalString())||e.ce.push(new _l(Ee.keyField(),r))}return e.ce}function Rt(n){const e=q(n);return e.le||(e.le=sO(e,Ws(n))),e.le}function sO(n,e){if(n.limitType==="F")return Ip(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new _l(i.field,s)});const t=n.endAt?new Yr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Yr(n.startAt.position,n.startAt.inclusive):null;return Ip(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ep(n,e){const t=n.filters.concat([e]);return new ur(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Wc(n,e,t){return new ur(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Bl(n,e){return Ul(Rt(n),Rt(e))&&n.limitType===e.limitType}function ES(n){return`${Wi(Rt(n))}|lt:${n.limitType}`}function ys(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>yS(i)).join(", ")}]`),Fl(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>so(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>so(i)).join(",")),`Target(${r})`}(Rt(n))}; limitType=${n.limitType})`}function zl(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):$.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Ws(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=uw(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Ws(r),i)||r.endAt&&!function(o,a,u){const c=uw(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Ws(r),i))}(n,e)}function TS(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function SS(n){return(e,t)=>{let r=!1;for(const i of Ws(n)){const s=oO(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function oO(n,e,t){const r=n.field.isKeyField()?$.comparator(e.key,t.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Qr(u,c):G()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */class ai{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ns(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return uS(this.inner)}size(){return this.innerSize}}/**
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
 */const aO=new me($.comparator);function Lt(){return aO}const AS=new me($.comparator);function ya(...n){let e=AS;for(const t of n)e=e.insert(t.key,t);return e}function RS(n){let e=AS;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Rn(){return Oa()}function PS(){return Oa()}function Oa(){return new ai(n=>n.toString(),(n,e)=>n.isEqual(e))}const lO=new me($.comparator),uO=new he($.comparator);function Z(...n){let e=uO;for(const t of n)e=e.add(t);return e}const cO=new he(X);function pg(){return cO}/**
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
 */function mg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fl(e)?"-0":e}}function kS(n){return{integerValue:""+n}}function CS(n,e){return iS(e)?kS(e):mg(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class bh{constructor(){this._=void 0}}function hO(n,e,t){return n instanceof ao?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Dh(s)&&(s=hg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Gi?NS(n,e):n instanceof Ki?bS(n,e):function(i,s){const o=DS(i,s),a=pw(o)+pw(i.Pe);return yp(o)&&yp(i.Pe)?kS(a):mg(i.serializer,a)}(n,e)}function dO(n,e,t){return n instanceof Gi?NS(n,e):n instanceof Ki?bS(n,e):t}function DS(n,e){return n instanceof lo?function(r){return yp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ao extends bh{}class Gi extends bh{constructor(e){super(),this.elements=e}}function NS(n,e){const t=VS(e);for(const r of n.elements)t.some(i=>xn(i,r))||t.push(r);return{arrayValue:{values:t}}}class Ki extends bh{constructor(e){super(),this.elements=e}}function bS(n,e){let t=VS(e);for(const r of n.elements)t=t.filter(i=>!xn(i,r));return{arrayValue:{values:t}}}class lo extends bh{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function pw(n){return we(n.integerValue||n.doubleValue)}function VS(n){return gl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class jl{constructor(e,t){this.field=e,this.transform=t}}function fO(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Gi&&i instanceof Gi||r instanceof Ki&&i instanceof Ki?io(r.elements,i.elements,xn):r instanceof lo&&i instanceof lo?xn(r.Pe,i.Pe):r instanceof ao&&i instanceof ao}(n.transform,e.transform)}class pO{constructor(e,t){this.version=e,this.transformResults=t}}class Te{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Te}static exists(e){return new Te(void 0,e)}static updateTime(e){return new Te(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ac(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Vh{}function xS(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ko(n.key,Te.none()):new Po(n.key,n.data,Te.none());{const t=n.data,r=it.empty();let i=new he(Ee.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new cr(n.key,r,new Ot(i.toArray()),Te.none())}}function mO(n,e,t){n instanceof Po?function(i,s,o){const a=i.value.clone(),u=gw(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof cr?function(i,s,o){if(!ac(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=gw(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(OS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function La(n,e,t,r){return n instanceof Po?function(s,o,a,u){if(!ac(s.precondition,o))return a;const c=s.value.clone(),d=_w(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof cr?function(s,o,a,u){if(!ac(s.precondition,o))return a;const c=_w(s.fieldTransforms,u,o),d=o.data;return d.setAll(OS(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(s,o,a){return ac(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function gO(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=DS(r.transform,i||null);s!=null&&(t===null&&(t=it.empty()),t.set(r.field,s))}return t||null}function mw(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&io(r,i,(s,o)=>fO(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Po extends Vh{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class cr extends Vh{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function OS(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function gw(n,e,t){const r=new Map;H(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,dO(o,a,t[i]))}return r}function _w(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,hO(s,o,e))}return r}class ko extends Vh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gg extends Vh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class _g{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&mO(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=La(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=La(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=PS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const u=xS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Z())}isEqual(e){return this.batchId===e.batchId&&io(this.mutations,e.mutations,(t,r)=>mw(t,r))&&io(this.baseMutations,e.baseMutations,(t,r)=>mw(t,r))}}class yg{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){H(e.mutations.length===r.length);let i=function(){return lO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new yg(e,t,r,i)}}/**
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
 */class vg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class _O{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var $e,se;function LS(n){switch(n){default:return G();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function MS(n){if(n===void 0)return Be("GRPC error has no .code"),b.UNKNOWN;switch(n){case $e.OK:return b.OK;case $e.CANCELLED:return b.CANCELLED;case $e.UNKNOWN:return b.UNKNOWN;case $e.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case $e.INTERNAL:return b.INTERNAL;case $e.UNAVAILABLE:return b.UNAVAILABLE;case $e.UNAUTHENTICATED:return b.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case $e.NOT_FOUND:return b.NOT_FOUND;case $e.ALREADY_EXISTS:return b.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return b.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case $e.ABORTED:return b.ABORTED;case $e.OUT_OF_RANGE:return b.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return b.UNIMPLEMENTED;case $e.DATA_LOSS:return b.DATA_LOSS;default:return G()}}(se=$e||($e={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function FS(){return new TextEncoder}/**
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
 */const yO=new xi([4294967295,4294967295],0);function yw(n){const e=FS().encode(n),t=new q0;return t.update(e),new Uint8Array(t.digest())}function vw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new xi([t,r],0),new xi([i,s],0)]}class wg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new va(`Invalid padding: ${t}`);if(r<0)throw new va(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new va(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new va(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=xi.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(xi.fromNumber(r)));return i.compare(yO)===1&&(i=new xi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=yw(e),[r,i]=vw(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new wg(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const t=yw(e),[r,i]=vw(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class va extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $l{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,ql.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new $l(Q.min(),i,new me(X),Lt(),Z())}}class ql{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ql(r,t,Z(),Z(),Z())}}/**
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
 */class lc{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class US{constructor(e,t){this.targetId=e,this.me=t}}class BS{constructor(e,t,r=Oe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class ww{constructor(){this.fe=0,this.ge=Ew(),this.pe=Oe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Z(),t=Z(),r=Z();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:G()}}),new ql(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Ew()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,H(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class vO{constructor(e){this.Le=e,this.Be=new Map,this.ke=Lt(),this.qe=Iw(),this.Qe=new me(X)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if($c(s))if(r===0){const o=new $(s.path);this.Ue(t,o,ye.newNoDocument(o,Q.min()))}else H(r===1);else{const o=this.Ye(t);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,c)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=Kr(r).toUint8Array()}catch(u){if(u instanceof cS)return Vn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new wg(o,i,s)}catch(u){return Vn(u instanceof va?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&$c(a.target)){const u=new $(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ye.newNoDocument(u,e))}s.be&&(t.set(o,s.ve()),s.Ce())}});let r=Z();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new $l(e,t,this.Qe,this.ke,r);return this.ke=Lt(),this.qe=Iw(),this.Qe=new me(X),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new ww,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new he(X),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ww),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Iw(){return new me($.comparator)}function Ew(){return new me($.comparator)}const wO={asc:"ASCENDING",desc:"DESCENDING"},IO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},EO={and:"AND",or:"OR"};class TO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Tp(n,e){return n.useProto3Json||Fl(e)?e:{value:e}}function uo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zS(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function SO(n,e){return uo(n,e.toTimestamp())}function ze(n){return H(!!n),Q.fromTimestamp(function(t){const r=ir(t);return new Se(r.seconds,r.nanos)}(n))}function Ig(n,e){return Sp(n,e).canonicalString()}function Sp(n,e){const t=function(i){return new re(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function jS(n){const e=re.fromString(n);return H(XS(e)),e}function yl(n,e){return Ig(n.databaseId,e.path)}function Dn(n,e){const t=jS(e);if(t.get(1)!==n.databaseId.projectId)throw new L(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new $(WS(t))}function $S(n,e){return Ig(n.databaseId,e)}function qS(n){const e=jS(n);return e.length===4?re.emptyPath():WS(e)}function Ap(n){return new re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function WS(n){return H(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Tw(n,e,t){return{name:yl(n,e),fields:t.value.mapValue.fields}}function GS(n,e,t){const r=Dn(n,e.name),i=ze(e.updateTime),s=e.createTime?ze(e.createTime):Q.min(),o=new it({mapValue:{fields:e.fields}}),a=ye.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function AO(n,e){return"found"in e?function(r,i){H(!!i.found),i.found.name,i.found.updateTime;const s=Dn(r,i.found.name),o=ze(i.found.updateTime),a=i.found.createTime?ze(i.found.createTime):Q.min(),u=new it({mapValue:{fields:i.found.fields}});return ye.newFoundDocument(s,o,a,u)}(n,e):"missing"in e?function(r,i){H(!!i.missing),H(!!i.readTime);const s=Dn(r,i.missing),o=ze(i.readTime);return ye.newNoDocument(s,o)}(n,e):G()}function RO(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(H(d===void 0||typeof d=="string"),Oe.fromBase64String(d||"")):(H(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Oe.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?b.UNKNOWN:MS(c.code);return new L(d,c.message||"")}(o);t=new BS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Dn(n,r.document.name),s=ze(r.document.updateTime),o=r.document.createTime?ze(r.document.createTime):Q.min(),a=new it({mapValue:{fields:r.document.fields}}),u=ye.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];t=new lc(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Dn(n,r.document),s=r.readTime?ze(r.readTime):Q.min(),o=ye.newNoDocument(i,s),a=r.removedTargetIds||[];t=new lc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Dn(n,r.document),s=r.removedTargetIds||[];t=new lc([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new _O(i,s),a=r.targetId;t=new US(a,o)}}return t}function vl(n,e){let t;if(e instanceof Po)t={update:Tw(n,e.key,e.value)};else if(e instanceof ko)t={delete:yl(n,e.key)};else if(e instanceof cr)t={update:Tw(n,e.key,e.data),updateMask:bO(e.fieldMask)};else{if(!(e instanceof gg))return G();t={verify:yl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ao)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Gi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ki)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof lo)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw G()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:SO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(n,e.precondition)),t}function Rp(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Te.updateTime(ze(s.updateTime)):s.exists!==void 0?Te.exists(s.exists):Te.none()}(e.currentDocument):Te.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let u=null;if("setToServerValue"in a)H(a.setToServerValue==="REQUEST_TIME"),u=new ao;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];u=new Gi(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];u=new Ki(d)}else"increment"in a?u=new lo(o,a.increment):G();const c=Ee.fromServerFormat(a.fieldPath);return new jl(c,u)}(n,i)):[];if(e.update){e.update.name;const i=Dn(n,e.update.name),s=new it({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new Ot(c.map(d=>Ee.fromServerFormat(d)))}(e.updateMask);return new cr(i,s,o,t,r)}return new Po(i,s,t,r)}if(e.delete){const i=Dn(n,e.delete);return new ko(i,t)}if(e.verify){const i=Dn(n,e.verify);return new gg(i,t)}return G()}function PO(n,e){return n&&n.length>0?(H(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?ze(i.updateTime):ze(s);return o.isEqual(Q.min())&&(o=ze(s)),new pO(o,i.transformResults||[])}(t,e))):[]}function KS(n,e){return{documents:[$S(n,e.path)]}}function HS(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=$S(n,i);const s=function(c){if(c.length!==0)return JS(ue.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:vs(m.field),direction:CO(m.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Tp(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:t,parent:i}}function QS(n){let e=qS(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){H(r===1);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];t.where&&(s=function(p){const m=YS(p);return m instanceof ue&&dg(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(m=>function(P){return new _l(ws(P.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(t.orderBy));let a=null;t.limit&&(a=function(p){let m;return m=typeof p=="object"?p.value:p,Fl(m)?null:m}(t.limit));let u=null;t.startAt&&(u=function(p){const m=!!p.before,w=p.values||[];return new Yr(w,m)}(t.startAt));let c=null;return t.endAt&&(c=function(p){const m=!p.before,w=p.values||[];return new Yr(w,m)}(t.endAt)),IS(e,i,o,s,a,"F",u,c)}function kO(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function YS(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ws(t.unaryFilter.field);return ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ws(t.unaryFilter.field);return ie.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ws(t.unaryFilter.field);return ie.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ws(t.unaryFilter.field);return ie.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(n):n.fieldFilter!==void 0?function(t){return ie.create(ws(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ue.create(t.compositeFilter.filters.map(r=>YS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(t.compositeFilter.op))}(n):G()}function CO(n){return wO[n]}function DO(n){return IO[n]}function NO(n){return EO[n]}function vs(n){return{fieldPath:n.canonicalString()}}function ws(n){return Ee.fromServerFormat(n.fieldPath)}function JS(n){return n instanceof ie?function(t){if(t.op==="=="){if(ow(t.value))return{unaryFilter:{field:vs(t.field),op:"IS_NAN"}};if(sw(t.value))return{unaryFilter:{field:vs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ow(t.value))return{unaryFilter:{field:vs(t.field),op:"IS_NOT_NAN"}};if(sw(t.value))return{unaryFilter:{field:vs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vs(t.field),op:DO(t.op),value:t.value}}}(n):n instanceof ue?function(t){const r=t.getFilters().map(i=>JS(i));return r.length===1?r[0]:{compositeFilter:{op:NO(t.op),filters:r}}}(n):G()}function bO(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function XS(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Qn{constructor(e,t,r,i,s=Q.min(),o=Q.min(),a=Oe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class ZS{constructor(e){this.ct=e}}function VO(n,e){let t;if(e.document)t=GS(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=$.fromSegments(e.noDocument.path),i=Qi(e.noDocument.readTime);t=ye.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return G();{const r=$.fromSegments(e.unknownDocument.path),i=Qi(e.unknownDocument.version);t=ye.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new Se(i[0],i[1]);return Q.fromTimestamp(s)}(e.readTime)),t}function Sw(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Gc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:yl(s,o.key),fields:o.data.value.mapValue.fields,updateTime:uo(s,o.version.toTimestamp()),createTime:uo(s,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Hi(e.version)};else{if(!e.isUnknownDocument())return G();r.unknownDocument={path:t.path.toArray(),version:Hi(e.version)}}return r}function Gc(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Hi(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Qi(n){const e=new Se(n.seconds,n.nanoseconds);return Q.fromTimestamp(e)}function wi(n,e){const t=(e.baseMutations||[]).map(s=>Rp(n.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Rp(n.ct,s)),i=Se.fromMillis(e.localWriteTimeMs);return new _g(e.batchId,i,t,r)}function wa(n){const e=Qi(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Qi(n.lastLimboFreeSnapshotVersion):Q.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return H(s.documents.length===1),Rt(Ro(qS(s.documents[0])))}(n.query):function(s){return Rt(QS(s))}(n.query),new Qn(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Oe.fromBase64String(n.resumeToken))}function eA(n,e){const t=Hi(e.snapshotVersion),r=Hi(e.lastLimboFreeSnapshotVersion);let i;i=$c(e.target)?KS(n.ct,e.target):HS(n.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Wi(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Eg(n){const e=QS({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Wc(e,e.limit,"L"):e}function rf(n,e){return new vg(e.largestBatchId,Rp(n.ct,e.overlayMutation))}function Aw(n,e){const t=e.path.lastSegment();return[n,At(e.path.popLast()),t]}function Rw(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Hi(r.readTime),documentKey:At(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class xO{getBundleMetadata(e,t){return Pw(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Qi(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return Pw(e).put(function(i){return{bundleId:i.id,createTime:Hi(ze(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return kw(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:Eg(s.bundledQuery),readTime:Qi(s.readTime)}}(r)})}saveNamedQuery(e,t){return kw(e).put(function(i){return{name:i.name,readTime:Hi(ze(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Pw(n){return Qe(n,"bundles")}function kw(n){return Qe(n,"namedQueries")}/**
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
 */class xh{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new xh(e,r)}getOverlay(e,t){return sa(e).get(Aw(this.userId,t)).next(r=>r?rf(this.serializer,r):null)}getOverlays(e,t){const r=Rn();return N.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new vg(t,o);i.push(this.ht(e,a))}),N.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(At(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(sa(e).j("collectionPathOverlayIndex",a))}),N.waitFor(s)}getOverlaysForCollection(e,t,r){const i=Rn(),s=At(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return sa(e).U("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=rf(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=Rn();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return sa(e).J({index:"collectionGroupOverlayIndex",range:a},(u,c,d)=>{const p=rf(this.serializer,c);s.size()<i||p.largestBatchId===o?(s.set(p.getKey(),p),o=p.largestBatchId):d.done()}).next(()=>s)}ht(e,t){return sa(e).put(function(i,s,o){const[a,u,c]=Aw(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:vl(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function sa(n){return Qe(n,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class OO{Pt(e){return Qe(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Oe.fromUint8Array(r):Oe.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Ii{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(we(e.integerValue));else if("doubleValue"in e){const r=we(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),fl(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=ir(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Kr(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?hS(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Nh(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):G()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const i of Object.keys(r))this.Vt(i,t),this.Tt(r[i],t)}wt(e,t){var r,i;const s=e.fields||{};this.dt(t,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(we(a)),this.Vt(o,t),this.Tt(s[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const i of r)this.Tt(i,t)}yt(e,t){this.dt(t,37),$.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}Ii.vt=new Ii;function LO(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Cw(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=LO(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class MO{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const t=this.qt(e),r=Cw(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){const t=this.qt(e),r=Cw(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class FO{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class UO{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class oa{constructor(){this.jt=new MO,this.Ht=new FO(this.jt),this.Jt=new UO(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class Ei{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Ei(this.indexId,this.documentKey,this.arrayValue,r)}}function _r(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Dw(n.arrayValue,e.arrayValue),t!==0?t:(t=Dw(n.directionalValue,e.directionalValue),t!==0?t:$.comparator(n.documentKey,e.documentKey)))}function Dw(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class Nw{constructor(e){this.Xt=new he((t,r)=>Ee.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(H(e.collectionGroup===this.collectionId),this.nn)return!1;const t=mp(e);if(t!==void 0&&!this.sn(t))return!1;const r=yi(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const u=r[s];if(!this.on(a,u)||!this._n(this.en[o++],u))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new he(Ee.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new rc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new rc(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new rc(r.field,r.dir==="asc"?0:1)));return new jc(jc.UNKNOWN_ID,this.collectionId,t,dl.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function tA(n){var e,t;if(H(n instanceof ie||n instanceof ue),n instanceof ie){if(n instanceof wS){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>ie.create(n.field,"==",s)))||[];return ue.create(i,"or")}return n}const r=n.filters.map(i=>tA(i));return ue.create(r,n.op)}function BO(n){if(n.getFilters().length===0)return[];const e=Cp(tA(n));return H(nA(e)),Pp(e)||kp(e)?[e]:e.getFilters()}function Pp(n){return n instanceof ie}function kp(n){return n instanceof ue&&dg(n)}function nA(n){return Pp(n)||kp(n)||function(t){if(t instanceof ue&&vp(t)){for(const r of t.getFilters())if(!Pp(r)&&!kp(r))return!1;return!0}return!1}(n)}function Cp(n){if(H(n instanceof ie||n instanceof ue),n instanceof ie)return n;if(n.filters.length===1)return Cp(n.filters[0]);const e=n.filters.map(r=>Cp(r));let t=ue.create(e,n.op);return t=Kc(t),nA(t)?t:(H(t instanceof ue),H(oo(t)),H(t.filters.length>1),t.filters.reduce((r,i)=>Tg(r,i)))}function Tg(n,e){let t;return H(n instanceof ie||n instanceof ue),H(e instanceof ie||e instanceof ue),t=n instanceof ie?e instanceof ie?function(i,s){return ue.create([i,s],"and")}(n,e):bw(n,e):e instanceof ie?bw(e,n):function(i,s){if(H(i.filters.length>0&&s.filters.length>0),oo(i)&&oo(s))return _S(i,s.getFilters());const o=vp(i)?i:s,a=vp(i)?s:i,u=o.filters.map(c=>Tg(c,a));return ue.create(u,"or")}(n,e),Kc(t)}function bw(n,e){if(oo(e))return _S(e,n.getFilters());{const t=e.filters.map(r=>Tg(n,r));return ue.create(t,"or")}}function Kc(n){if(H(n instanceof ie||n instanceof ue),n instanceof ie)return n;const e=n.getFilters();if(e.length===1)return Kc(e[0]);if(mS(n))return n;const t=e.map(i=>Kc(i)),r=[];return t.forEach(i=>{i instanceof ie?r.push(i):i instanceof ue&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ue.create(r,n.op)}/**
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
 */class zO{constructor(){this.un=new Sg}addToCollectionParentIndex(e,t){return this.un.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(Kt.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(Kt.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class Sg{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new he(re.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new he(re.comparator)).toArray()}}/**
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
 */const Ou=new Uint8Array(0);class jO{constructor(e,t){this.databaseId=t,this.cn=new Sg,this.ln=new ai(r=>Wi(r),(r,i)=>Ul(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const s={collectionId:r,parent:At(i)};return Vw(e).put(s)}return N.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[X0(t),""],!1,!0);return Vw(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(An(o.parent))}return r})}addFieldIndex(e,t){const r=aa(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=ms(e);return s.next(a=>{o.put(Rw(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=aa(e),i=ms(e),s=ps(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=aa(e),r=ps(e),i=ms(e);return t.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,t){return N.forEach(this.hn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Nw(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const r=ps(e);let i=!0;const s=new Map;return N.forEach(this.hn(t),o=>this.Pn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=Z();const a=[];return N.forEach(s,(u,c)=>{M("IndexedDbIndexManager",`Using index ${function(A){return`id=${A.indexId}|cg=${A.collectionGroup}|f=${A.fields.map(x=>`${x.fieldPath}:${x.kind}`).join(",")}`}(u)} to execute ${Wi(t)}`);const d=function(A,x){const U=mp(x);if(U===void 0)return null;for(const F of qc(A,U.fieldPath))switch(F.op){case"array-contains-any":return F.value.arrayValue.values||[];case"array-contains":return[F.value]}return null}(c,u),p=function(A,x){const U=new Map;for(const F of yi(x))for(const v of qc(A,F.fieldPath))switch(v.op){case"==":case"in":U.set(F.fieldPath.canonicalString(),v.value);break;case"not-in":case"!=":return U.set(F.fieldPath.canonicalString(),v.value),Array.from(U.values())}return null}(c,u),m=function(A,x){const U=[];let F=!0;for(const v of yi(x)){const _=v.kind===0?hw(A,v.fieldPath,A.startAt):dw(A,v.fieldPath,A.startAt);U.push(_.value),F&&(F=_.inclusive)}return new Yr(U,F)}(c,u),w=function(A,x){const U=[];let F=!0;for(const v of yi(x)){const _=v.kind===0?dw(A,v.fieldPath,A.endAt):hw(A,v.fieldPath,A.endAt);U.push(_.value),F&&(F=_.inclusive)}return new Yr(U,F)}(c,u),P=this.In(u,c,m),C=this.In(u,c,w),O=this.Tn(u,c,p),S=this.En(u.indexId,d,P,m.inclusive,C,w.inclusive,O);return N.forEach(S,y=>r.G(y,t.limit).next(A=>{A.forEach(x=>{const U=$.fromSegments(x.documentKey);o.has(U)||(o=o.add(U),a.push(U))})}))}).next(()=>a)}return N.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=BO(ue.create(e.filters,"and")).map(r=>Ip(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,i,s,o,a){const u=(t!=null?t.length:1)*Math.max(r.length,s.length),c=u/(t!=null?t.length:1),d=[];for(let p=0;p<u;++p){const m=t?this.dn(t[p/c]):Ou,w=this.An(e,m,r[p%c],i),P=this.Rn(e,m,s[p%c],o),C=a.map(O=>this.An(e,m,O,!0));d.push(...this.createRange(w,P,C))}return d}An(e,t,r,i){const s=new Ei(e,$.empty(),t,r);return i?s:s.Zt()}Rn(e,t,r,i){const s=new Ei(e,$.empty(),t,r);return i?s.Zt():s}Pn(e,t){const r=new Nw(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.hn(t);return N.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new he(Ee.comparator),d=!1;for(const p of u.filters)for(const m of p.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:c=c.add(m.field));for(const p of u.orderBy)p.field.isKeyField()||(c=c.add(p.field));return c.size+(d?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}Vn(e,t){const r=new oa;for(const i of yi(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);Ii.vt.It(s,o)}return r.zt()}dn(e){const t=new oa;return Ii.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new oa;return Ii.vt.It(qi(this.databaseId,t),r.Yt(function(s){const o=yi(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let i=[];i.push(new oa);let s=0;for(const o of yi(e)){const a=r[s++];for(const u of i)if(this.fn(t,o.fieldPath)&&gl(a))i=this.gn(i,o,a);else{const c=u.Yt(o.kind);Ii.vt.It(a,c)}}return this.pn(i)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new oa;u.seed(a.zt()),Ii.vt.It(o,u.Yt(t.kind)),s.push(u)}return s}fn(e,t){return!!e.filters.find(r=>r instanceof ie&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=aa(e),i=ms(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(s=>{const o=[];return N.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(d,p){const m=p?new dl(p.sequenceNumber,new Kt(Qi(p.readTime),new $(An(p.documentKey)),p.largestBatchId)):dl.empty(),w=d.fields.map(([P,C])=>new rc(Ee.fromServerFormat(P),C));return new jc(d.indexId,d.collectionGroup,w,m)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:X(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=aa(e),s=ms(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>N.forEach(a,u=>s.put(Rw(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return N.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?N.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),N.forEach(a,u=>this.wn(e,i,u).next(c=>{const d=this.Sn(s,u);return c.isEqual(d)?N.resolve():this.bn(e,s,u,c,d)}))))})}Dn(e,t,r,i){return ps(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,i){return ps(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const i=ps(e);let s=new he(_r);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,a)=>{s=s.add(new Ei(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}Sn(e,t){let r=new he(_r);const i=this.Vn(t,e);if(i==null)return r;const s=mp(t);if(s!=null){const o=e.data.field(s.fieldPath);if(gl(o))for(const a of o.arrayValue.values||[])r=r.add(new Ei(t.indexId,e.key,this.dn(a),i))}else r=r.add(new Ei(t.indexId,e.key,Ou,i));return r}bn(e,t,r,i,s){M("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(u,c,d,p,m){const w=u.getIterator(),P=c.getIterator();let C=fs(w),O=fs(P);for(;C||O;){let S=!1,y=!1;if(C&&O){const A=d(C,O);A<0?y=!0:A>0&&(S=!0)}else C!=null?y=!0:S=!0;S?(p(O),O=fs(P)):y?(m(C),C=fs(w)):(C=fs(w),O=fs(P))}}(i,s,_r,a=>{o.push(this.Dn(e,t,r,a))},a=>{o.push(this.vn(e,t,r,a))}),N.waitFor(o)}yn(e){let t=1;return ms(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>_r(o,a)).filter((o,a,u)=>!a||_r(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=_r(o,e),u=_r(o,t);if(a===0)i[0]=e.Zt();else if(a>0&&u<0)i.push(o),i.push(o.Zt());else if(u>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Ou,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Ou,[]];s.push(IDBKeyRange.bound(a,u))}return s}Cn(e,t){return _r(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(xw)}getMinOffset(e,t){return N.mapArray(this.hn(t),r=>this.Pn(e,r).next(i=>i||G())).next(xw)}}function Vw(n){return Qe(n,"collectionParents")}function ps(n){return Qe(n,"indexEntries")}function aa(n){return Qe(n,"indexConfiguration")}function ms(n){return Qe(n,"indexState")}function xw(n){H(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;lg(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Kt(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Ow={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Nt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Nt(e,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function rA(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const u=r.J({range:o},(d,p,m)=>(a++,m.delete()));s.push(u.next(()=>{H(a===1)}));const c=[];for(const d of t.mutations){const p=sS(e,d.key.path,t.batchId);s.push(i.delete(p)),c.push(d.key)}return N.waitFor(s).next(()=>c)}function Hc(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw G();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(41943040,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);class Oh{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,t,r,i){H(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Oh(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return yr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=Is(e),o=yr(e);return o.add({}).next(a=>{H(typeof a=="number");const u=new _g(a,t,r,i),c=function(w,P,C){const O=C.baseMutations.map(y=>vl(w.ct,y)),S=C.mutations.map(y=>vl(w.ct,y));return{userId:P,batchId:C.batchId,localWriteTimeMs:C.localWriteTime.toMillis(),baseMutations:O,mutations:S}}(this.serializer,this.userId,u),d=[];let p=new he((m,w)=>X(m.canonicalString(),w.canonicalString()));for(const m of i){const w=sS(this.userId,m.key.path,a);p=p.add(m.key.path.popLast()),d.push(o.put(c)),d.push(s.put(w,kx))}return p.forEach(m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Fn[a]=u.keys()}),N.waitFor(d).next(()=>u)})}lookupMutationBatch(e,t){return yr(e).get(t).next(r=>r?(H(r.userId===this.userId),wi(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?N.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Fn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return yr(e).J({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(H(a.batchId>=r),s=wi(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return yr(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return yr(e).U("userMutationsIndex",t).next(r=>r.map(i=>wi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=ic(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return Is(e).J({range:i},(o,a,u)=>{const[c,d,p]=o,m=An(d);if(c===this.userId&&t.path.isEqual(m))return yr(e).get(p).next(w=>{if(!w)throw G();H(w.userId===this.userId),s.push(wi(this.serializer,w))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new he(X);const i=[];return t.forEach(s=>{const o=ic(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=Is(e).J({range:a},(c,d,p)=>{const[m,w,P]=c,C=An(w);m===this.userId&&s.path.isEqual(C)?r=r.add(P):p.done()});i.push(u)}),N.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=ic(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new he(X);return Is(e).J({range:o},(u,c,d)=>{const[p,m,w]=u,P=An(m);p===this.userId&&r.isPrefixOf(P)?P.length===i&&(a=a.add(w)):d.done()}).next(()=>this.xn(e,a))}xn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(yr(e).get(s).next(o=>{if(o===null)throw G();H(o.userId===this.userId),r.push(wi(this.serializer,o))}))}),N.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return rA(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),N.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return N.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Is(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=An(s[1]);i.push(u)}else a.done()}).next(()=>{H(i.length===0)})})}containsKey(e,t){return iA(e,this.userId,t)}Nn(e){return sA(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function iA(n,e,t){const r=ic(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Is(n).J({range:s,H:!0},(a,u,c)=>{const[d,p,m]=a;d===e&&p===i&&(o=!0),c.done()}).next(()=>o)}function yr(n){return Qe(n,"mutations")}function Is(n){return Qe(n,"documentMutations")}function sA(n){return Qe(n,"mutationQueues")}/**
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
 */class Yi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Yi(0)}static kn(){return new Yi(-1)}}/**
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
 */class $O{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new Yi(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>Q.fromTimestamp(new Se(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Qn(e,i)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>gs(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(H(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return gs(e).J((o,a)=>{const u=wa(a);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>N.waitFor(s)).next(()=>i)}forEachTarget(e,t){return gs(e).J((r,i)=>{const s=wa(i);t(s)})}qn(e){return Lw(e).get("targetGlobalKey").next(t=>(H(t!==null),t))}Qn(e,t){return Lw(e).put("targetGlobalKey",t)}Kn(e,t){return gs(e).put(eA(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Wi(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return gs(e).J({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const c=wa(a);Ul(t,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=Sr(e);return t.forEach(o=>{const a=At(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),N.waitFor(i)}removeMatchingKeys(e,t,r){const i=Sr(e);return N.forEach(t,s=>{const o=At(s.path);return N.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=Sr(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Sr(e);let s=Z();return i.J({range:r,H:!0},(o,a,u)=>{const c=An(o[1]),d=new $(c);s=s.add(d)}).next(()=>s)}containsKey(e,t){const r=At(t.path),i=IDBKeyRange.bound([r],[X0(r)],!1,!0);let s=0;return Sr(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,t){return gs(e).get(t).next(r=>r?wa(r):null)}}function gs(n){return Qe(n,"targets")}function Lw(n){return Qe(n,"targetGlobal")}function Sr(n){return Qe(n,"targetDocuments")}/**
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
 */function Mw([n,e],[t,r]){const i=X(n,t);return i===0?X(e,r):i}class qO{constructor(e){this.Un=e,this.buffer=new he(Mw),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Mw(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class WO{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){M("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){oi(t)?M("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await si(t)}await this.Hn(3e5)})}}class GO{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return N.resolve(xt.oe);const r=new qO(t);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Ow)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ow):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,i,s,o,a,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,a=Date.now(),this.removeTargets(e,r,t))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),_s()<=te.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function KO(n,e){return new GO(n,e)}/**
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
 */class HO{constructor(e,t){this.db=e,this.garbageCollector=KO(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,i)=>t(i))}addReference(e,t,r){return Lu(e,r)}removeReference(e,t,r){return Lu(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Lu(e,t)}nr(e,t){return function(i,s){let o=!1;return sA(i).Y(a=>iA(i,a,s).next(u=>(u&&(o=!0),N.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,a)=>{if(a<=t){const u=this.nr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,Q.min()),Sr(e).delete(function(p){return[0,At(p.path)]}(o))))});i.push(u)}}).next(()=>N.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Lu(e,t)}tr(e,t){const r=Sr(e);let i,s=xt.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(s!==xt.oe&&t(new $(An(i)),s),s=c,i=u):s=xt.oe}).next(()=>{s!==xt.oe&&t(new $(An(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Lu(n,e){return Sr(n).put(function(r,i){return{targetId:0,path:At(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
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
 */class oA{constructor(){this.changes=new ai(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class QO{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return pi(e).put(r)}removeEntry(e,t,r){return pi(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Gc(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=ye.newInvalidDocument(t);return pi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(la(t))},(i,s)=>{r=this.ir(t,s)}).next(()=>r)}sr(e,t){let r={size:0,document:ye.newInvalidDocument(t)};return pi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(la(t))},(i,s)=>{r={document:this.ir(t,s),size:Hc(s)}}).next(()=>r)}getEntries(e,t){let r=Lt();return this._r(e,t,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,t){let r=Lt(),i=new me($.comparator);return this._r(e,t,(s,o)=>{const a=this.ir(s,o);r=r.insert(s,a),i=i.insert(s,Hc(o))}).next(()=>({documents:r,ur:i}))}_r(e,t,r){if(t.isEmpty())return N.resolve();let i=new he(Bw);t.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(la(i.first()),la(i.last())),o=i.getIterator();let a=o.getNext();return pi(e).J({index:"documentKeyIndex",range:s},(u,c,d)=>{const p=$.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&Bw(a,p)<0;)r(a,null),a=o.getNext();a&&a.isEqual(p)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?d.$(la(a)):d.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),Gc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return pi(e).U(IDBKeyRange.bound(a,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let d=Lt();for(const p of c){const m=this.ir($.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);m.isFoundDocument()&&(zl(t,m)||i.has(m.key))&&(d=d.insert(m.key,m))}return d})}getAllFromCollectionGroup(e,t,r,i){let s=Lt();const o=Uw(t,r),a=Uw(t,Kt.max());return pi(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,d)=>{const p=this.ir($.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(p.key,p),s.size===i&&d.done()}).next(()=>s)}newChangeBuffer(e){return new YO(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Fw(e).get("remoteDocumentGlobalKey").next(t=>(H(!!t),t))}rr(e,t){return Fw(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=VO(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Q.min())))return r}return ye.newInvalidDocument(e)}}function aA(n){return new QO(n)}class YO extends oA{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new ai(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new he((s,o)=>X(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.lr.get(s);if(t.push(this.cr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=Sw(this.cr.serializer,o);i=i.add(s.path.popLast());const c=Hc(u);r+=c-a.size,t.push(this.cr.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=Sw(this.cr.serializer,o.convertToNoDocument(Q.min()));t.push(this.cr.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.cr.updateMetadata(e,r)),N.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Fw(n){return Qe(n,"remoteDocumentGlobal")}function pi(n){return Qe(n,"remoteDocumentsV14")}function la(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Uw(n,e){const t=e.documentKey.path.toArray();return[n,Gc(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Bw(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=X(t[s],r[s]),i)return i;return i=X(t.length,r.length),i||(i=X(t[t.length-2],r[r.length-2]),i||X(t[t.length-1],r[r.length-1]))}/**
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
 *//**
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
 */class JO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class lA{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&La(r.mutation,i,Ot.empty(),Se.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Z()){const i=Rn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=ya();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Rn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Z()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Lt();const o=Oa(),a=function(){return Oa()}();return t.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof cr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),La(d.mutation,c,d.mutation.getFieldMask(),Se.now())):o.set(c.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),t.forEach((c,d)=>{var p;return a.set(c,new JO(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Oa();let i=new me((o,a)=>o-a),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let d=r.get(u)||Ot.empty();d=a.applyToLocalView(c,d),r.set(u,d);const p=(i.get(a.batchId)||Z()).add(u);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,p=PS();d.forEach(m=>{if(!s.has(m)){const w=xS(t.get(m),r.get(m));w!==null&&p.set(m,w),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return N.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return $.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):fg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):N.resolve(Rn());let a=-1,u=s;return o.next(c=>N.forEach(c,(d,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(d)?N.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,Z())).next(d=>({batchId:a,changes:RS(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(r=>{let i=ya();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=ya();return this.indexManager.getCollectionParents(e,s).next(a=>N.forEach(a,u=>{const c=function(p,m){return new ur(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,ye.newInvalidDocument(d)))});let a=ya();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&La(d.mutation,c,Ot.empty(),Se.now()),zl(t,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class XO{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return N.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:ze(i.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:Eg(i.bundledQuery),readTime:ze(i.readTime)}}(t)),N.resolve()}}/**
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
 */class ZO{constructor(){this.overlays=new me($.comparator),this.Ir=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Rn();return N.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),N.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const i=Rn(),s=t.length+1,o=new $(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return N.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new me((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Rn(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=Rn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return N.resolve(a)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vg(t,r));let s=this.Ir.get(t);s===void 0&&(s=Z(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class eL{constructor(){this.sessionToken=Oe.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
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
 */class Ag{constructor(){this.Tr=new he(Ye.Er),this.dr=new he(Ye.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Ye(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Ye(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new $(new re([])),r=new Ye(t,e),i=new Ye(t,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new $(new re([])),r=new Ye(t,e),i=new Ye(t,e+1);let s=Z();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Ye(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return $.comparator(e.key,t.key)||X(e.wr,t.wr)}static Ar(e,t){return X(e.wr,t.wr)||$.comparator(e.key,t.key)}}/**
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
 */class tL{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new he(Ye.Er)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _g(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Ye(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,t){return N.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ye(t,0),i=new Ye(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new he(X);return t.forEach(i=>{const s=new Ye(i,0),o=new Ye(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),N.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const o=new Ye(new $(s),0);let a=new he(X);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),N.resolve(this.Cr(a))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){H(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return N.forEach(t.mutations,i=>{const s=new Ye(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Ye(t,0),i=this.br.firstAfterOrEqual(r);return N.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class nL{constructor(e){this.Mr=e,this.docs=function(){return new me($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():ye.newInvalidDocument(t))}getEntries(e,t){let r=Lt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ye.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Lt();const o=t.path,a=new $(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||lg(eS(d),r)<=0||(i.has(d.key)||zl(t,d))&&(s=s.insert(d.key,d.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,t,r,i){G()}Or(e,t){return N.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new rL(this)}getSize(e){return N.resolve(this.size)}}class rL extends oA{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),N.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class iL{constructor(e){this.persistence=e,this.Nr=new ai(t=>Wi(t),Ul),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ag,this.targetCount=0,this.kr=Yi.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),N.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Yi(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Kn(t),N.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this.Br.containsKey(t))}}/**
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
 */class uA{constructor(e,t){this.qr={},this.overlays={},this.Qr=new xt(0),this.Kr=!1,this.Kr=!0,this.$r=new eL,this.referenceDelegate=e(this),this.Ur=new iL(this),this.indexManager=new zO,this.remoteDocumentCache=function(i){return new nL(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new ZS(t),this.Gr=new XO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ZO,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new tL(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const i=new sL(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return N.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class sL extends nS{constructor(e){super(),this.currentSequenceNumber=e}}class Lh{constructor(e){this.persistence=e,this.Jr=new Ag,this.Yr=null}static Zr(e){return new Lh(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),N.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Xr,r=>{const i=$.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,Q.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return N.or([()=>N.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class oL{constructor(e){this.serializer=e}O(e,t,r,i){const s=new Ch("createOrUpgrade",t);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ew,{unique:!0}),u.createObjectStore("documentMutations")}(e),zw(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=N.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),zw(e)),o=o.next(()=>function(u){const c=u.store("targetGlobal"),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Q.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",d)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store("mutations").U().next(d=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ew,{unique:!0});const p=c.store("mutations"),m=d.map(w=>p.put(w));return N.waitFor(m)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:Bx});c.createIndex("collectionPathOverlayIndex",zx,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",jx,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:Cx});c.createIndex("documentKeyIndex",Dx),c.createIndex("collectionGroupIndex",Nx)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:Lx}).createIndex("sequenceNumberIndex",Mx,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:Fx}).createIndex("documentKeyIndex",Ux,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,i)=>{t+=Hc(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(i=>N.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>N.forEach(a,u=>{H(u.userId===s.userId);const c=wi(this.serializer,u);return rA(e,s.userId,c).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const u=new re(o),c=function(p){return[0,At(p)]}(u);s.push(t.get(c).next(d=>d?N.resolve():(p=>t.put({targetId:0,path:At(p),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>N.waitFor(s))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:Ox});const r=t.store("collectionParents"),i=new Sg,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:At(u)})}};return t.store("remoteDocuments").J({H:!0},(o,a)=>{const u=new re(o);return s(u.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,a,u],c)=>{const d=An(a);return s(d.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,i)=>{const s=wa(i),o=eA(this.serializer,s);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=t.store("remoteDocumentsV14"),u=function(p){return p.document?new $(re.fromString(p.document.name).popFirst(5)):p.noDocument?$.fromSegments(p.noDocument.path):p.unknownDocument?$.fromSegments(p.unknownDocument.path):G()}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>N.waitFor(i))}ai(e,t){const r=t.store("mutations"),i=aA(this.serializer),s=new uA(Lh.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(u=>{var c;let d=(c=a.get(u.userId))!==null&&c!==void 0?c:Z();wi(this.serializer,u).keys().forEach(p=>d=d.add(p)),a.set(u.userId,d)}),N.forEach(a,(u,c)=>{const d=new Xe(c),p=xh.lt(this.serializer,d),m=s.getIndexManager(d),w=Oh.lt(d,this.serializer,m,s.referenceDelegate);return new lA(i,w,p,m).recalculateAndSaveOverlaysForDocumentKeys(new gp(t,xt.oe),u).next()})})}}function zw(n){n.createObjectStore("targetDocuments",{keyPath:Vx}).createIndex("documentTargetsIndex",xx,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",bx,{unique:!0}),n.createObjectStore("targetGlobal")}const sf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Rg{constructor(e,t,r,i,s,o,a,u,c,d,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=s,this.window=o,this.document=a,this.ci=c,this.li=d,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=m=>Promise.resolve(),!Rg.D())throw new L(b.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new HO(this,i),this.Ai=t+"main",this.serializer=new ZS(u),this.Ri=new Cn(this.Ai,this.hi,new oL(this.serializer)),this.$r=new OO,this.Ur=new $O(this.referenceDelegate,this.serializer),this.remoteDocumentCache=aA(this.serializer),this.Gr=new xO,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,d===!1&&Be("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new L(b.FAILED_PRECONDITION,sf);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new xt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Mu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(oi(e))return M("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return M("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return ua(e).get("owner").next(t=>N.resolve(this.vi(t)))}Ci(e){return Mu(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Qe(t,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return N.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?N.resolve(!0):ua(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new L(b.FAILED_PRECONDITION,sf);return!1}}return!(!this.networkEnabled||!this.inForeground)||Mu(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&M("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new gp(e,xt.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Mu(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Oh.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new jO(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return xh.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){M("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===17?Wx:u===16?qx:u===15?cg:u===14?lS:u===13?aS:u===12?$x:u===11?oS:void G()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,a=>(o=new gp(a,this.Qr?this.Qr.next():xt.oe),t==="readwrite-primary"?this.wi(o).next(u=>!!u||this.Si(o)).next(u=>{if(!u)throw Be(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new L(b.FAILED_PRECONDITION,tS);return r(o)}).next(u=>this.Di(o).next(()=>u)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return ua(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new L(b.FAILED_PRECONDITION,sf)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ua(e).put("owner",t)}static D(){return Cn.D()}bi(e){const t=ua(e);return t.get("owner").next(r=>this.vi(r)?(M("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):N.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Be(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;bT()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return M("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Be("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){Be("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ua(n){return Qe(n,"owner")}function Mu(n){return Qe(n,"clientMetadata")}function Pg(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class kg{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=Z(),i=Z();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new kg(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class aL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class cA{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return bT()?8:rS(De())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new aL;return this.Xi(e,t,o).next(a=>{if(s.result=a,this.zi)return this.es(e,t,o,a.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(_s()<=te.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",ys(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),N.resolve()):(_s()<=te.DEBUG&&M("QueryEngine","Query:",ys(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(_s()<=te.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",ys(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rt(t))):N.resolve())}Yi(e,t){if(fw(t))return N.resolve(null);let r=Rt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Wc(t,null,"F"),r=Rt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Z(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(t,a);return this.ns(t,c,o,u.readTime)?this.Yi(e,Wc(t,null,"F")):this.rs(e,c,t,u)}))})))}Zi(e,t,r,i){return fw(t)||i.isEqual(Q.min())?N.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(t,s);return this.ns(t,o,r,i)?N.resolve(null):(_s()<=te.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ys(t)),this.rs(e,o,t,Z0(i,-1)).next(a=>a))})}ts(e,t){let r=new he(SS(e));return t.forEach((i,s)=>{zl(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return _s()<=te.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",ys(t)),this.Ji.getDocumentsMatchingQuery(e,t,Kt.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class lL{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new me(X),this._s=new ai(s=>Wi(s),Ul),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lA(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function hA(n,e,t,r){return new lL(n,e,t,r)}async function dA(n,e){const t=q(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=Z();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return t.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function uL(n,e){const t=q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const p=c.batch,m=p.keys();let w=N.resolve();return m.forEach(P=>{w=w.next(()=>d.getEntry(u,P)).next(C=>{const O=c.docVersions.get(P);H(O!==null),C.version.compareTo(O)<0&&(p.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),d.addEntry(C)))})}),w.next(()=>a.mutationQueue.removeMutationBatch(u,p))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=Z();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function fA(n){const e=q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function cL(n,e){const t=q(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const a=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;a.push(t.Ur.removeMatchingKeys(s,d.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(s,d.addedDocuments,p)));let w=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Oe.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(p,w),function(C,O,S){return C.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(m,w,d)&&a.push(t.Ur.updateTargetData(s,w))});let u=Lt(),c=Z();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(pA(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(Q.min())){const d=t.Ur.getLastRemoteSnapshotVersion(s).next(p=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return N.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(t.os=i,s))}function pA(n,e,t){let r=Z(),i=Z();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Lt();return t.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):M("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function hL(n,e){const t=q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function co(n,e){const t=q(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):t.Ur.allocateTargetId(r).next(o=>(i=new Qn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function ho(n,e,t){const r=q(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!oi(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Qc(n,e,t){const r=q(n);let i=Q.min(),s=Z();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=q(u),m=p._s.get(d);return m!==void 0?N.resolve(p.os.get(m)):p.Ur.getTargetData(c,d)}(r,o,Rt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?i:Q.min(),t?s:Z())).next(a=>(_A(r,TS(e),a),{documents:a,Ts:s})))}function mA(n,e){const t=q(n),r=q(t.Ur),i=t.os.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function gA(n,e){const t=q(n),r=t.us.get(e)||Q.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.cs.getAllFromCollectionGroup(i,e,Z0(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(_A(t,e,i),i))}function _A(n,e,t){let r=n.us.get(e)||Q.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}async function dL(n,e,t,r){const i=q(n);let s=Z(),o=Lt();for(const c of t){const d=e.Es(c.metadata.name);c.document&&(s=s.add(d));const p=e.ds(c);p.setReadTime(e.As(c.metadata.readTime)),o=o.insert(d,p)}const a=i.cs.newChangeBuffer({trackRemovals:!0}),u=await co(i,function(d){return Rt(Ro(re.fromString(`__bundle__/docs/${d}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>pA(c,a,o).next(d=>(a.apply(c),d)).next(d=>i.Ur.removeMatchingKeysForTargetId(c,u.targetId).next(()=>i.Ur.addMatchingKeys(c,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,d.Ps,d.Is)).next(()=>d.Ps)))}async function fL(n,e,t=Z()){const r=await co(n,Rt(Eg(e.bundledQuery))),i=q(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=ze(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Gr.saveNamedQuery(s,e);const a=r.withResumeToken(Oe.EMPTY_BYTE_STRING,o);return i.os=i.os.insert(a.targetId,a),i.Ur.updateTargetData(s,a).next(()=>i.Ur.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ur.addMatchingKeys(s,t,r.targetId)).next(()=>i.Gr.saveNamedQuery(s,e))})}function jw(n,e){return`firestore_clients_${n}_${e}`}function $w(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function of(n,e){return`firestore_targets_${n}_${e}`}class Yc{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Rs(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new L(i.error.code,i.error.message))),o?new Yc(e,t,i.state,s):(Be("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ma{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Rs(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new L(r.error.code,r.error.message))),s?new Ma(e,r.state,i):(Be("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Jc{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=pg();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=iS(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Jc(e,s):(Be("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Cg{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Cg(t.clientId,t.onlineState):(Be("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Dp{constructor(){this.activeTargetIds=pg()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class af{constructor(e,t,r,i,s){this.window=e,this.ui=t,this.persistenceKey=r,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new me(X),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=jw(this.persistenceKey,this.ps),this.vs=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new Dp),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.Os=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const i=this.getItem(jw(this.persistenceKey,r));if(i){const s=Jc.Rs(r,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const r=this.Ls(t);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,r){this.qs(e,t,r),this.Qs(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(of(this.persistenceKey,e));if(i){const s=Ma.Rs(e,i);s&&(r=s.state)}}return t&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(of(this.persistenceKey,e))}updateQueryState(e,t,r){this.$s(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Qs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return M("SharedClientState","READ",e,t),t}setItem(e,t){M("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){M("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(M("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void Be("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const r=this.Gs(t.key);return this.zs(r,null)}{const r=this.js(t.key,t.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.xs){if(t.newValue!==null){const r=this.Ls(t.newValue);if(r)return this.Bs(r)}}else if(t.key===this.vs){const r=function(s){let o=xt.oe;if(s!=null)try{const a=JSON.parse(s);H(typeof a=="number"),o=a}catch(a){Be("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==xt.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Os){const r=this.Xs(t.newValue);await Promise.all(r.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,r){const i=new Yc(this.currentUser,e,t,r),s=$w(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const t=$w(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,r){const i=of(this.persistenceKey,e),s=new Ma(e,t,r);this.setItem(i,s.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const r=this.Gs(e);return Jc.Rs(r,t)}Hs(e,t){const r=this.Fs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Yc.Rs(new Xe(s),i,t)}Ys(e,t){const r=this.Ms.exec(e),i=Number(r[1]);return Ma.Rs(i,t)}Ls(e){return Cg.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);M("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const r=t?this.Ss.insert(e,t):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.io(o,a).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=pg();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class yA{constructor(){this.so=new Dp,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Dp,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pL{_o(e){}shutdown(){}}/**
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
 */class qw{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Fu=null;function lf(){return Fu===null?Fu=function(){return 268435456+Math.round(2147483648*Math.random())}():Fu++,"0x"+Fu.toString(16)}/**
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
 */const mL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class gL{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const pt="WebChannelConnection";class _L extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,o){const a=lf(),u=this.xo(t,r.toUriEncodedString());M("RestConnection",`Sending RPC '${t}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(t,u,c,i).then(d=>(M("RestConnection",`Received RPC '${t}' ${a}: `,d),d),d=>{throw Vn("RestConnection",`RPC '${t}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(t,r,i,s,o,a){return this.Mo(t,r,i,s,o)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ao}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}xo(t,r){const i=mL[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=lf();return new Promise((o,a)=>{const u=new W0;u.setWithCredentials(!0),u.listenOnce(G0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case nc.NO_ERROR:const d=u.getResponseJson();M(pt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case nc.TIMEOUT:M(pt,`RPC '${e}' ${s} timed out`),a(new L(b.DEADLINE_EXCEEDED,"Request time out"));break;case nc.HTTP_ERROR:const p=u.getStatus();if(M(pt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m==null?void 0:m.error;if(w&&w.status&&w.message){const P=function(O){const S=O.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(S)>=0?S:b.UNKNOWN}(w.status);a(new L(P,w.message))}else a(new L(b.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new L(b.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{M(pt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);M(pt,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",c,r,15)})}Bo(e,t,r){const i=lf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Q0(),a=H0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const d=s.join("");M(pt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,w=!1;const P=new gL({Io:O=>{w?M(pt,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(m||(M(pt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),M(pt,`RPC '${e}' stream ${i} sending:`,O),p.send(O))},To:()=>p.close()}),C=(O,S,y)=>{O.listen(S,A=>{try{y(A)}catch(x){setTimeout(()=>{throw x},0)}})};return C(p,_a.EventType.OPEN,()=>{w||(M(pt,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),C(p,_a.EventType.CLOSE,()=>{w||(w=!0,M(pt,`RPC '${e}' stream ${i} transport closed`),P.So())}),C(p,_a.EventType.ERROR,O=>{w||(w=!0,Vn(pt,`RPC '${e}' stream ${i} transport errored:`,O),P.So(new L(b.UNAVAILABLE,"The operation could not be completed")))}),C(p,_a.EventType.MESSAGE,O=>{var S;if(!w){const y=O.data[0];H(!!y);const A=y,x=A.error||((S=A[0])===null||S===void 0?void 0:S.error);if(x){M(pt,`RPC '${e}' stream ${i} received error:`,x);const U=x.status;let F=function(I){const E=$e[I];if(E!==void 0)return MS(E)}(U),v=x.message;F===void 0&&(F=b.INTERNAL,v="Unknown error status: "+U+" with message "+x.message),w=!0,P.So(new L(F,v)),p.close()}else M(pt,`RPC '${e}' stream ${i} received:`,y),P.bo(y)}}),C(a,K0.STAT_EVENT,O=>{O.stat===pp.PROXY?M(pt,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===pp.NOPROXY&&M(pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}/**
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
 *//**
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
 */function vA(){return typeof window<"u"?window:null}function uc(){return typeof document<"u"?document:null}/**
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
 */function Wl(n){return new TO(n,!0)}/**
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
 */class Dg{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class wA{constructor(e,t,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Dg(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(Be(t.toString()),Be("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new L(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yL extends wA{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=RO(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?ze(o.readTime):Q.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Ap(this.serializer),t.addTarget=function(s,o){let a;const u=o.target;if(a=$c(u)?{documents:KS(s,u)}:{query:HS(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=zS(s,o.resumeToken);const c=Tp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Q.min())>0){a.readTime=uo(s,o.snapshotVersion.toTimestamp());const c=Tp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=kO(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Ap(this.serializer),t.removeTarget=e,this.a_(t)}}class vL extends wA{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return H(!!e.streamToken),this.lastStreamToken=e.streamToken,H(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){H(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=PO(e.writeResults,e.commitTime),r=ze(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Ap(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>vl(this.serializer,r))};this.a_(t)}}/**
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
 */class wL extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new L(b.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Sp(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(b.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Sp(t,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(b.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class IL{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Be(t),this.D_=!1):M("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class EL{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{li(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=q(u);c.L_.add(4),await Co(c),c.q_.set("Unknown"),c.L_.delete(4),await Gl(c)}(this))})}),this.q_=new IL(r,i)}}async function Gl(n){if(li(n))for(const e of n.B_)await e(!0)}async function Co(n){for(const e of n.B_)await e(!1)}function Mh(n,e){const t=q(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Vg(t)?bg(t):No(t).r_()&&Ng(t,e))}function fo(n,e){const t=q(n),r=No(t);t.N_.delete(e),r.r_()&&IA(t,e),t.N_.size===0&&(r.r_()?r.o_():li(t)&&t.q_.set("Unknown"))}function Ng(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}No(n).A_(e)}function IA(n,e){n.Q_.xe(e),No(n).R_(e)}function bg(n){n.Q_=new vO({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),No(n).start(),n.q_.v_()}function Vg(n){return li(n)&&!No(n).n_()&&n.N_.size>0}function li(n){return q(n).L_.size===0}function EA(n){n.Q_=void 0}async function TL(n){n.q_.set("Online")}async function SL(n){n.N_.forEach((e,t)=>{Ng(n,e)})}async function AL(n,e){EA(n),Vg(n)?(n.q_.M_(e),bg(n)):n.q_.set("Unknown")}async function RL(n,e,t){if(n.q_.set("Online"),e instanceof BS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(n,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xc(n,r)}else if(e instanceof lc?n.Q_.Ke(e):e instanceof US?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Q.min()))try{const r=await fA(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(Oe.EMPTY_BYTE_STRING,d.snapshotVersion)),IA(s,u);const p=new Qn(d.target,u,c,d.sequenceNumber);Ng(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await Xc(n,r)}}async function Xc(n,e,t){if(!oi(e))throw e;n.L_.add(1),await Co(n),n.q_.set("Offline"),t||(t=()=>fA(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Gl(n)})}function TA(n,e){return e().catch(t=>Xc(n,t,e))}async function Do(n){const e=q(n),t=Jr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;PL(e);)try{const i=await hL(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,kL(e,i)}catch(i){await Xc(e,i)}SA(e)&&AA(e)}function PL(n){return li(n)&&n.O_.length<10}function kL(n,e){n.O_.push(e);const t=Jr(n);t.r_()&&t.V_&&t.m_(e.mutations)}function SA(n){return li(n)&&!Jr(n).n_()&&n.O_.length>0}function AA(n){Jr(n).start()}async function CL(n){Jr(n).p_()}async function DL(n){const e=Jr(n);for(const t of n.O_)e.m_(t.mutations)}async function NL(n,e,t){const r=n.O_.shift(),i=yg.from(r,e,t);await TA(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Do(n)}async function bL(n,e){e&&Jr(n).V_&&await async function(r,i){if(function(o){return LS(o)&&o!==b.ABORTED}(i.code)){const s=r.O_.shift();Jr(r).s_(),await TA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Do(r)}}(n,e),SA(n)&&AA(n)}async function Ww(n,e){const t=q(n);t.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=li(t);t.L_.add(3),await Co(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Gl(t)}async function Np(n,e){const t=q(n);e?(t.L_.delete(2),await Gl(t)):e||(t.L_.add(2),await Co(t),t.q_.set("Unknown"))}function No(n){return n.K_||(n.K_=function(t,r,i){const s=q(t);return s.w_(),new yL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:TL.bind(null,n),Ro:SL.bind(null,n),mo:AL.bind(null,n),d_:RL.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Vg(n)?bg(n):n.q_.set("Unknown")):(await n.K_.stop(),EA(n))})),n.K_}function Jr(n){return n.U_||(n.U_=function(t,r,i){const s=q(t);return s.w_(),new vL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:CL.bind(null,n),mo:bL.bind(null,n),f_:DL.bind(null,n),g_:NL.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Do(n)):(await n.U_.stop(),n.O_.length>0&&(M("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class xg{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new xg(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bo(n,e){if(Be("AsyncQueue",`${e}: ${n}`),oi(n))return new L(b.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Gs{constructor(e){this.comparator=e?(t,r)=>e(t,r)||$.comparator(t.key,r.key):(t,r)=>$.comparator(t.key,r.key),this.keyedMap=ya(),this.sortedSet=new me(this.comparator)}static emptySet(e){return new Gs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Gs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Gs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Gw{constructor(){this.W_=new me($.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class po{constructor(e,t,r,i,s,o,a,u,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new po(e,t,Gs.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class VL{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class xL{constructor(){this.queries=Kw(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=q(t),s=i.queries;i.queries=Kw(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new L(b.ABORTED,"Firestore shutting down"))}}function Kw(){return new ai(n=>ES(n),Bl)}async function Og(n,e){const t=q(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new VL,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const a=bo(o,`Initialization of query '${ys(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&Mg(t)}async function Lg(n,e){const t=q(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function OL(n,e){const t=q(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Mg(t)}function LL(n,e,t){const r=q(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function Mg(n){n.Y_.forEach(e=>{e.next()})}var bp,Hw;(Hw=bp||(bp={})).ea="default",Hw.Cache="cache";class Fg{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new po(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==bp.Cache}}/**
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
 */class ML{constructor(e,t){this.aa=e,this.byteLength=t}ua(){return"metadata"in this.aa}}/**
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
 */class Qw{constructor(e){this.serializer=e}Es(e){return Dn(this.serializer,e)}ds(e){return e.metadata.exists?GS(this.serializer,e.document,!1):ye.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return ze(e)}}class FL{constructor(e,t,r){this.ca=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=RA(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++t;const r=re.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ha(e){const t=new Map,r=new Qw(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Es(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||Z()).add(s);t.set(o,a)}}return t}async complete(){const e=await dL(this.localStore,new Qw(this.serializer),this.documents,this.ca.id),t=this.ha(this.documents);for(const r of this.queries)await fL(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function RA(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class PA{constructor(e){this.key=e}}class kA{constructor(e){this.key=e}}class CA{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Z(),this.mutatedKeys=Z(),this.Aa=SS(e),this.Ra=new Gs(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Gw,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),w=zl(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),C=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let O=!1;m&&w?m.data.isEqual(w.data)?P!==C&&(r.track({type:3,doc:w}),O=!0):this.ga(m,w)||(r.track({type:2,doc:w}),O=!0,(u&&this.Aa(w,u)>0||c&&this.Aa(w,c)<0)&&(a=!0)):!m&&w?(r.track({type:0,doc:w}),O=!0):m&&!w&&(r.track({type:1,doc:m}),O=!0,(u||c)&&(a=!0)),O&&(w?(o=o.add(w),s=C?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(w,P){const C=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return C(w)-C(P)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),i=i!=null&&i;const a=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new po(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Gw,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Z(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new kA(r))}),this.da.forEach(r=>{e.has(r)||t.push(new PA(r))}),t}ba(e){this.Ta=e.Ts,this.da=Z();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return po.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class UL{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class BL{constructor(e){this.key=e,this.va=!1}}class zL{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ai(a=>ES(a),Bl),this.Ma=new Map,this.xa=new Set,this.Oa=new me($.comparator),this.Na=new Map,this.La=new Ag,this.Ba={},this.ka=new Map,this.qa=Yi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function jL(n,e,t=!0){const r=Fh(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await DA(r,e,t,!0),i}async function $L(n,e){const t=Fh(n);await DA(t,e,!0,!1)}async function DA(n,e,t,r){const i=await co(n.localStore,Rt(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let a;return r&&(a=await Ug(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Mh(n.remoteStore,i),a}async function Ug(n,e,t,r,i){n.Ka=(p,m,w)=>async function(C,O,S,y){let A=O.view.ma(S);A.ns&&(A=await Qc(C.localStore,O.query,!1).then(({documents:v})=>O.view.ma(v,A)));const x=y&&y.targetChanges.get(O.targetId),U=y&&y.targetMismatches.get(O.targetId)!=null,F=O.view.applyChanges(A,C.isPrimaryClient,x,U);return Vp(C,O.targetId,F.wa),F.snapshot}(n,p,m,w);const s=await Qc(n.localStore,e,!0),o=new CA(e,s.Ts),a=o.ma(s.documents),u=ql.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),c=o.applyChanges(a,n.isPrimaryClient,u);Vp(n,t,c.wa);const d=new UL(e,t,o);return n.Fa.set(e,d),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),c.snapshot}async function qL(n,e,t){const r=q(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Bl(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ho(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&fo(r.remoteStore,i.targetId),mo(r,i.targetId)}).catch(si)):(mo(r,i.targetId),await ho(r.localStore,i.targetId,!0))}async function WL(n,e){const t=q(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),fo(t.remoteStore,r.targetId))}async function GL(n,e,t){const r=$g(n);try{const i=await function(o,a){const u=q(o),c=Se.now(),d=a.reduce((w,P)=>w.add(P.key),Z());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let P=Lt(),C=Z();return u.cs.getEntries(w,d).next(O=>{P=O,P.forEach((S,y)=>{y.isValidDocument()||(C=C.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,P)).next(O=>{p=O;const S=[];for(const y of a){const A=gO(y,p.get(y.key).overlayedDocument);A!=null&&S.push(new cr(y.key,A,fS(A.value.mapValue),Te.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,S,a)}).next(O=>{m=O;const S=O.applyToLocalDocumentSet(p,C);return u.documentOverlayCache.saveOverlays(w,O.batchId,S)})}).then(()=>({batchId:m.batchId,changes:RS(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new me(X)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,t),await hr(r,i.changes),await Do(r.remoteStore)}catch(i){const s=bo(i,"Failed to persist write");t.reject(s)}}async function NA(n,e){const t=q(n);try{const r=await cL(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Na.get(s);o&&(H(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?H(o.va):i.removedDocuments.size>0&&(H(o.va),o.va=!1))}),await hr(t,r,e)}catch(r){await si(r)}}function Yw(n,e,t){const r=q(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=q(o);u.onlineState=a;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(a)&&(c=!0)}),c&&Mg(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function KL(n,e,t){const r=q(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new me($.comparator);o=o.insert(s,ye.newNoDocument(s,Q.min()));const a=Z().add(s),u=new $l(Q.min(),new Map,new me(X),o,a);await NA(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),jg(r)}else await ho(r.localStore,e,!1).then(()=>mo(r,e,t)).catch(si)}async function HL(n,e){const t=q(n),r=e.batch.batchId;try{const i=await uL(t.localStore,e);zg(t,r,null),Bg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await hr(t,i)}catch(i){await si(i)}}async function QL(n,e,t){const r=q(n);try{const i=await function(o,a){const u=q(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(p=>(H(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);zg(r,e,t),Bg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await hr(r,i)}catch(i){await si(i)}}async function YL(n,e){const t=q(n);li(t.remoteStore)||M("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=q(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>a.mutationQueue.getHighestUnacknowledgedBatchId(u))}(t.localStore);if(r===-1)return void e.resolve();const i=t.ka.get(r)||[];i.push(e),t.ka.set(r,i)}catch(r){const i=bo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Bg(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function zg(n,e,t){const r=q(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function mo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||bA(n,r)})}function bA(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(fo(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),jg(n))}function Vp(n,e,t){for(const r of t)r instanceof PA?(n.La.addReference(r.key,e),JL(n,r)):r instanceof kA?(M("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||bA(n,r.key)):G()}function JL(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(M("SyncEngine","New document in limbo: "+t),n.xa.add(r),jg(n))}function jg(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new $(re.fromString(e)),r=n.qa.next();n.Na.set(r,new BL(t)),n.Oa=n.Oa.insert(t,r),Mh(n.remoteStore,new Qn(Rt(Ro(t.path)),r,"TargetPurposeLimboResolution",xt.oe))}}async function hr(n,e,t){const r=q(n),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,t).then(c=>{var d;if((c||t)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=t==null?void 0:t.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=kg.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=q(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>N.forEach(c,m=>N.forEach(m.$i,w=>d.persistence.referenceDelegate.addReference(p,m.targetId,w)).next(()=>N.forEach(m.Ui,w=>d.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))}catch(p){if(!oi(p))throw p;M("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const w=d.os.get(m),P=w.snapshotVersion,C=w.withLastLimboFreeSnapshotVersion(P);d.os=d.os.insert(m,C)}}}(r.localStore,s))}async function XL(n,e){const t=q(n);if(!t.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await dA(t.localStore,e);t.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new L(b.CANCELLED,o))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await hr(t,r.hs)}}function ZL(n,e){const t=q(n),r=t.Na.get(e);if(r&&r.va)return Z().add(r.key);{let i=Z();const s=t.Ma.get(e);if(!s)return i;for(const o of s){const a=t.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}async function eM(n,e){const t=q(n),r=await Qc(t.localStore,e.query,!0),i=e.view.ba(r);return t.isPrimaryClient&&Vp(t,e.targetId,i.wa),i}async function tM(n,e){const t=q(n);return gA(t.localStore,e).then(r=>hr(t,r))}async function nM(n,e,t,r){const i=q(n),s=await function(a,u){const c=q(a),d=q(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",p=>d.Mn(p,u).next(m=>m?c.localDocuments.getDocuments(p,m):N.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Do(i.remoteStore):t==="acknowledged"||t==="rejected"?(zg(i,e,r||null),Bg(i,e),function(a,u){q(q(a).mutationQueue).On(u)}(i.localStore,e)):G(),await hr(i,s)):M("SyncEngine","Cannot apply mutation batch with id: "+e)}async function rM(n,e){const t=q(n);if(Fh(t),$g(t),e===!0&&t.Qa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await Jw(t,r.toArray());t.Qa=!0,await Np(t.remoteStore,!0);for(const s of i)Mh(t.remoteStore,s)}else if(e===!1&&t.Qa!==!1){const r=[];let i=Promise.resolve();t.Ma.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(mo(t,o),ho(t.localStore,o,!0))),fo(t.remoteStore,o)}),await i,await Jw(t,r),function(o){const a=q(o);a.Na.forEach((u,c)=>{fo(a.remoteStore,c)}),a.La.pr(),a.Na=new Map,a.Oa=new me($.comparator)}(t),t.Qa=!1,await Np(t.remoteStore,!1)}}async function Jw(n,e,t){const r=q(n),i=[],s=[];for(const o of e){let a;const u=r.Ma.get(o);if(u&&u.length!==0){a=await co(r.localStore,Rt(u[0]));for(const c of u){const d=r.Fa.get(c),p=await eM(r,d);p.snapshot&&s.push(p.snapshot)}}else{const c=await mA(r.localStore,o);a=await co(r.localStore,c),await Ug(r,VA(c),o,!1,a.resumeToken)}i.push(a)}return r.Ca.d_(s),i}function VA(n){return IS(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function iM(n){return function(t){return q(q(t).persistence).Qi()}(q(n).localStore)}async function sM(n,e,t,r){const i=q(n);if(i.Qa)return void M("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await gA(i.localStore,TS(s[0])),a=$l.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Oe.EMPTY_BYTE_STRING);await hr(i,o,a);break}case"rejected":await ho(i.localStore,e,!0),mo(i,e,r);break;default:G()}}async function oM(n,e,t){const r=Fh(n);if(r.Qa){for(const i of e){if(r.Ma.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){M("SyncEngine","Adding an already active target "+i);continue}const s=await mA(r.localStore,i),o=await co(r.localStore,s);await Ug(r,VA(s),o.targetId,!1,o.resumeToken),Mh(r.remoteStore,o)}for(const i of t)r.Ma.has(i)&&await ho(r.localStore,i,!1).then(()=>{fo(r.remoteStore,i),mo(r,i)}).catch(si)}}function Fh(n){const e=q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=NA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KL.bind(null,e),e.Ca.d_=OL.bind(null,e.eventManager),e.Ca.$a=LL.bind(null,e.eventManager),e}function $g(n){const e=q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QL.bind(null,e),e}function aM(n,e,t){const r=q(n);(async function(s,o,a){try{const u=await o.getMetadata();if(await function(w,P){const C=q(w),O=ze(P.createTime);return C.persistence.runTransaction("hasNewerBundle","readonly",S=>C.Gr.getBundleMetadata(S,P.id)).then(S=>!!S&&S.createTime.compareTo(O)>=0)}(s.localStore,u))return await o.close(),a._completeWith(function(w){return{taskState:"Success",documentsLoaded:w.totalDocuments,bytesLoaded:w.totalBytes,totalDocuments:w.totalDocuments,totalBytes:w.totalBytes}}(u)),Promise.resolve(new Set);a._updateProgress(RA(u));const c=new FL(u,s.localStore,o.serializer);let d=await o.Ua();for(;d;){const m=await c.la(d);m&&a._updateProgress(m),d=await o.Ua()}const p=await c.complete();return await hr(s,p.Ia,void 0),await function(w,P){const C=q(w);return C.persistence.runTransaction("Save bundle","readwrite",O=>C.Gr.saveBundleMetadata(O,P))}(s.localStore,u),a._completeWith(p.progress),Promise.resolve(p.Pa)}catch(u){return Vn("SyncEngine",`Loading bundle failed with ${u}`),a._failWith(u),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class wl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return hA(this.persistence,new cA,e.initialUser,this.serializer)}Ga(e){return new uA(Lh.Zr,this.serializer)}Wa(e){return new yA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wl.provider={build:()=>new wl};class xA extends wl{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await $g(this.Ja.syncEngine),await Do(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return hA(this.persistence,new cA,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new WO(r,e.asyncQueue,t)}Ha(e,t){const r=new Rx(t,this.persistence);return new Ax(e.asyncQueue,r)}Ga(e){const t=Pg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new Rg(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,vA(),uc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new yA}}class lM extends xA{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof af&&(this.sharedClientState.syncEngine={no:nM.bind(null,t),ro:sM.bind(null,t),io:oM.bind(null,t),Qi:iM.bind(null,t),eo:tM.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await rM(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const t=vA();if(!af.D(t))throw new L(b.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Pg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new af(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Il{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Yw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=XL.bind(null,this.syncEngine),await Np(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new xL}()}createDatastore(e){const t=Wl(e.databaseInfo.databaseId),r=function(s){return new _L(s)}(e.databaseInfo);return function(s,o,a,u){return new wL(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new EL(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>Yw(this.syncEngine,t,0),function(){return qw.D()?new qw:new pL}())}createSyncEngine(e,t){return function(i,s,o,a,u,c,d){const p=new zL(i,s,o,a,u,c);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=q(i);M("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Co(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Il.provider={build:()=>new Il};function Xw(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 *//**
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
 */class Uh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Be("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class uM{constructor(e,t){this.Xa=e,this.serializer=t,this.metadata=new ot,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(r=>{r&&r.ua()?this.metadata.resolve(r.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.aa)}`))},r=>this.metadata.reject(r))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const e=await this.nu();if(e===null)return null;const t=this.eu.decode(e),r=Number(t);isNaN(r)&&this.ru(`length string (${t}) is not valid number`);const i=await this.iu(r);return new ML(JSON.parse(i),e.length+r)}su(){return this.buffer.findIndex(e=>e===123)}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.ru("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async iu(e){for(;this.buffer.length<e;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const t=this.eu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}ru(e){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ou(){const e=await this.Xa.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class cM{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new L(b.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(i,s){const o=q(i),a={documents:s.map(p=>yl(o.serializer,p))},u=await o.Lo("BatchGetDocuments",o.serializer.databaseId,re.emptyPath(),a,s.length),c=new Map;u.forEach(p=>{const m=AO(o.serializer,p);c.set(m.key.toString(),m)});const d=[];return s.forEach(p=>{const m=c.get(p.toString());H(!!m),d.push(m)}),d}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ko(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=$.fromPath(r);this.mutations.push(new gg(i,this.precondition(i)))}),await async function(r,i){const s=q(r),o={writes:i.map(a=>vl(s.serializer,a))};await s.Mo("Commit",s.serializer.databaseId,re.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw G();t=Q.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new L(b.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Q.min())?Te.exists(!1):Te.updateTime(t):Te.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Q.min()))throw new L(b.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Te.updateTime(t)}return Te.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class hM{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new Dg(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new cM(this.datastore),t=this.cu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const t=this.updateFunction(e);return!Fl(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!LS(t)}return!1}}/**
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
 */class dM{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Xe.UNAUTHENTICATED,this.clientId=J0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{M("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(M("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=bo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uf(n,e){n.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await dA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Zw(n,e){n.asyncQueue.verifyOperationInProgress();const t=await qg(n);M("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ww(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Ww(e.remoteStore,i)),n._onlineComponents=e}async function qg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await uf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Vn("Error using user provided cache. Falling back to memory cache: "+t),await uf(n,new wl)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await uf(n,new wl);return n._offlineComponents}async function Bh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await Zw(n,n._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await Zw(n,new Il))),n._onlineComponents}function OA(n){return qg(n).then(e=>e.persistence)}function Wg(n){return qg(n).then(e=>e.localStore)}function LA(n){return Bh(n).then(e=>e.remoteStore)}function Gg(n){return Bh(n).then(e=>e.syncEngine)}function fM(n){return Bh(n).then(e=>e.datastore)}async function go(n){const e=await Bh(n),t=e.eventManager;return t.onListen=jL.bind(null,e.syncEngine),t.onUnlisten=qL.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=$L.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=WL.bind(null,e.syncEngine),t}function pM(n){return n.asyncQueue.enqueue(async()=>{const e=await OA(n),t=await LA(n);return e.setNetworkEnabled(!0),function(i){const s=q(i);return s.L_.delete(0),Gl(s)}(t)})}function mM(n){return n.asyncQueue.enqueue(async()=>{const e=await OA(n),t=await LA(n);return e.setNetworkEnabled(!1),async function(i){const s=q(i);s.L_.add(0),await Co(s),s.q_.set("Offline")}(t)})}function gM(n,e){const t=new ot;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,d){const p=q(c);return p.persistence.runTransaction("read document","readonly",m=>p.localDocuments.getDocument(m,d))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new L(b.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const u=bo(a,`Failed to get document '${s} from cache`);o.reject(u)}}(await Wg(n),e,t)),t.promise}function MA(n,e,t={}){const r=new ot;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new Uh({next:m=>{d.Za(),o.enqueueAndForget(()=>Lg(s,p));const w=m.docs.has(a);!w&&m.fromCache?c.reject(new L(b.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&u&&u.source==="server"?c.reject(new L(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new Fg(Ro(a.path),d,{includeMetadataChanges:!0,_a:!0});return Og(s,p)}(await go(n),n.asyncQueue,e,t,r)),r.promise}function _M(n,e){const t=new ot;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Qc(i,s,!0),u=new CA(s,a.Ts),c=u.ma(a.documents),d=u.applyChanges(c,!1);o.resolve(d.snapshot)}catch(a){const u=bo(a,`Failed to execute query '${s} against cache`);o.reject(u)}}(await Wg(n),e,t)),t.promise}function FA(n,e,t={}){const r=new ot;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new Uh({next:m=>{d.Za(),o.enqueueAndForget(()=>Lg(s,p)),m.fromCache&&u.source==="server"?c.reject(new L(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new Fg(a,d,{includeMetadataChanges:!0,_a:!0});return Og(s,p)}(await go(n),n.asyncQueue,e,t,r)),r.promise}function yM(n,e){const t=new Uh(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){q(i).Y_.add(s),s.next()}(await go(n),t)),()=>{t.Za(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){q(i).Y_.delete(s)}(await go(n),t))}}function vM(n,e,t,r){const i=function(o,a){let u;return u=typeof o=="string"?FS().encode(o):o,function(d,p){return new uM(d,p)}(function(d,p){if(d instanceof Uint8Array)return Xw(d,p);if(d instanceof ArrayBuffer)return Xw(new Uint8Array(d),p);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),a)}(t,Wl(e));n.asyncQueue.enqueueAndForget(async()=>{aM(await Gg(n),i,r)})}function wM(n,e){return n.asyncQueue.enqueue(async()=>function(r,i){const s=q(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Gr.getNamedQuery(o,i))}(await Wg(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function UA(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const eI=new Map;/**
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
 */function Kg(n,e,t){if(!t)throw new L(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function BA(n,e,t,r){if(e===!0&&r===!0)throw new L(b.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function tI(n){if(!$.isDocumentKey(n))throw new L(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function nI(n){if($.isDocumentKey(n))throw new L(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function zh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":G()}function le(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=zh(n);throw new L(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function zA(n,e){if(e<=0)throw new L(b.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class rI{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}BA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=UA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Kl{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rI({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new px;switch(r.type){case"firstParty":return new yx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=eI.get(t);r&&(M("ComponentProvider","Removing Datastore"),eI.delete(t),r.terminate())}(this),Promise.resolve()}}function IM(n,e,t,r={}){var i;const s=(n=le(n,Kl))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Vn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Xe.MOCK_USER;else{a=NC(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new L(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Xe(c)}n._authCredentials=new mx(new Y0(a,u))}}/**
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
 */let Pt=class jA{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new jA(this.firestore,e,this._query)}},ke=class $A{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Br(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $A(this.firestore,e,this._key)}},Br=class qA extends Pt{constructor(e,t,r){super(e,t,Ro(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ke(this.firestore,null,new $(e))}withConverter(e){return new qA(this.firestore,e,this._path)}};function WA(n,e,...t){if(n=Y(n),Kg("collection","path",e),n instanceof Kl){const r=re.fromString(e,...t);return nI(r),new Br(n,null,r)}{if(!(n instanceof ke||n instanceof Br))throw new L(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(re.fromString(e,...t));return nI(r),new Br(n.firestore,null,r)}}function EM(n,e){if(n=le(n,Kl),Kg("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new L(b.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Pt(n,null,function(r){return new ur(re.emptyPath(),r)}(e))}function Zc(n,e,...t){if(n=Y(n),arguments.length===1&&(e=J0.newId()),Kg("doc","path",e),n instanceof Kl){const r=re.fromString(e,...t);return tI(r),new ke(n,null,new $(r))}{if(!(n instanceof ke||n instanceof Br))throw new L(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(re.fromString(e,...t));return tI(r),new ke(n.firestore,n instanceof Br?n.converter:null,new $(r))}}function GA(n,e){return n=Y(n),e=Y(e),(n instanceof ke||n instanceof Br)&&(e instanceof ke||e instanceof Br)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function KA(n,e){return n=Y(n),e=Y(e),n instanceof Pt&&e instanceof Pt&&n.firestore===e.firestore&&Bl(n._query,e._query)&&n.converter===e.converter}/**
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
 */class iI{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Dg(this,"async_queue_retry"),this.Vu=()=>{const r=uc();r&&M("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=uc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=uc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new ot;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!oi(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Be("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=xg.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function xp(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class TM{constructor(){this._progressObserver={},this._taskCompletionResolver=new ot,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const SM=-1;let je=class extends Kl{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new iI,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new iI(e),this._firestoreClient=void 0,await e}}};function _t(n){if(n._terminated)throw new L(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||HA(n),n._firestoreClient}function HA(n){var e,t,r;const i=n._freezeSettings(),s=function(a,u,c,d){return new Hx(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,UA(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new dM(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(n._componentsProvider))}function AM(n,e){Vn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return QA(n,Il.provider,{build:r=>new xA(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function RM(n){Vn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();QA(n,Il.provider,{build:t=>new lM(t,e.cacheSizeBytes)})}function QA(n,e,t){if((n=le(n,je))._firestoreClient||n._terminated)throw new L(b.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new L(b.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},HA(n)}function PM(n){if(n._initialized&&!n._terminated)throw new L(b.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ot;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Cn.D())return Promise.resolve();const i=r+"main";await Cn.delete(i)}(Pg(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function kM(n){return function(t){const r=new ot;return t.asyncQueue.enqueueAndForget(async()=>YL(await Gg(t),r)),r.promise}(_t(n=le(n,je)))}function CM(n){return pM(_t(n=le(n,je)))}function DM(n){return mM(_t(n=le(n,je)))}function NM(n,e){const t=_t(n=le(n,je)),r=new TM;return vM(t,n._databaseId,e,r),r}function bM(n,e){return wM(_t(n=le(n,je)),e).then(t=>t?new Pt(n,null,t.query):null)}/**
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
 */class On{constructor(e){this._byteString=e}static fromBase64String(e){try{return new On(Oe.fromBase64String(e))}catch(t){throw new L(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new On(Oe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let Xr=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let rs=class{constructor(e){this._methodName=e}};/**
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
 */class jh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Hg{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const VM=/^__.*__$/;class xM{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new cr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Po(e,this.data,t,this.fieldTransforms)}}class YA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new cr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function JA(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class $h{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new $h(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return eh(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(JA(this.Cu)&&VM.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class OM{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Wl(e)}Qu(e,t,r,i=!1){return new $h({Cu:e,methodName:t,qu:r,path:Ee.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function is(n){const e=n._freezeSettings(),t=Wl(n._databaseId);return new OM(n._databaseId,!!e.ignoreUndefinedProperties,t)}function qh(n,e,t,r,i,s={}){const o=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);t_("Data must be an object, but it was:",o,r);const a=eR(r,o);let u,c;if(s.merge)u=new Ot(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=Op(e,p,t);if(!o.contains(m))throw new L(b.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);nR(d,m)||d.push(m)}u=new Ot(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new xM(new it(a),u,c)}class Hl extends rs{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hl}}function XA(n,e,t){return new $h({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Qg extends rs{_toFieldTransform(e){return new jl(e.path,new ao)}isEqual(e){return e instanceof Qg}}class Yg extends rs{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=XA(this,e,!0),r=this.Ku.map(s=>ss(s,t)),i=new Gi(r);return new jl(e.path,i)}isEqual(e){return e instanceof Yg&&rl(this.Ku,e.Ku)}}class Jg extends rs{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=XA(this,e,!0),r=this.Ku.map(s=>ss(s,t)),i=new Ki(r);return new jl(e.path,i)}isEqual(e){return e instanceof Jg&&rl(this.Ku,e.Ku)}}class Xg extends rs{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new lo(e.serializer,CS(e.serializer,this.$u));return new jl(e.path,t)}isEqual(e){return e instanceof Xg&&this.$u===e.$u}}function Zg(n,e,t,r){const i=n.Qu(1,e,t);t_("Data must be an object, but it was:",i,r);const s=[],o=it.empty();ns(r,(u,c)=>{const d=n_(e,u,t);c=Y(c);const p=i.Nu(d);if(c instanceof Hl)s.push(d);else{const m=ss(c,p);m!=null&&(s.push(d),o.set(d,m))}});const a=new Ot(s);return new YA(o,a,i.fieldTransforms)}function e_(n,e,t,r,i,s){const o=n.Qu(1,e,t),a=[Op(e,r,t)],u=[i];if(s.length%2!=0)throw new L(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(Op(e,s[m])),u.push(s[m+1]);const c=[],d=it.empty();for(let m=a.length-1;m>=0;--m)if(!nR(c,a[m])){const w=a[m];let P=u[m];P=Y(P);const C=o.Nu(w);if(P instanceof Hl)c.push(w);else{const O=ss(P,C);O!=null&&(c.push(w),d.set(w,O))}}const p=new Ot(c);return new YA(d,p,o.fieldTransforms)}function ZA(n,e,t,r=!1){return ss(t,n.Qu(r?4:3,e))}function ss(n,e){if(tR(n=Y(n)))return t_("Unsupported field value:",e,n),eR(n,e);if(n instanceof rs)return function(r,i){if(!JA(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=ss(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Y(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return CS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Se.fromDate(r);return{timestampValue:uo(i.serializer,s)}}if(r instanceof Se){const s=new Se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:uo(i.serializer,s)}}if(r instanceof jh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof On)return{bytesValue:zS(i.serializer,r._byteString)};if(r instanceof ke){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ig(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Hg)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return mg(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${zh(r)}`)}(n,e)}function eR(n,e){const t={};return uS(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ns(n,(r,i)=>{const s=ss(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function tR(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Se||n instanceof jh||n instanceof On||n instanceof ke||n instanceof rs||n instanceof Hg)}function t_(n,e,t){if(!tR(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=zh(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Op(n,e,t){if((e=Y(e))instanceof Xr)return e._internalPath;if(typeof e=="string")return n_(n,e);throw eh("Field path arguments must be of type string or ",n,!1,void 0,t)}const LM=new RegExp("[~\\*/\\[\\]]");function n_(n,e,t){if(e.search(LM)>=0)throw eh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Xr(...e.split("."))._internalPath}catch{throw eh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function eh(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new L(b.INVALID_ARGUMENT,a+n+u)}function nR(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class El{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Wh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class MM extends El{data(){return super.data()}}function Wh(n,e){return typeof e=="string"?n_(n,e):e instanceof Xr?e._internalPath:e._delegate._internalPath}/**
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
 */function rR(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class r_{}class Ql extends r_{}function vr(n,e,...t){let r=[];e instanceof r_&&r.push(e),r=r.concat(t),function(s){const o=s.filter(u=>u instanceof i_).length,a=s.filter(u=>u instanceof Gh).length;if(o>1||o>0&&a>0)throw new L(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Gh extends Ql{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Gh(e,t,r)}_apply(e){const t=this._parse(e);return sR(e._query,t),new Pt(e.firestore,e.converter,Ep(e._query,t))}_parse(e){const t=is(e.firestore);return function(s,o,a,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new L(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){oI(p,d);const w=[];for(const P of p)w.push(sI(u,s,P));m={arrayValue:{values:w}}}else m=sI(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||oI(p,d),m=ZA(a,o,p,d==="in"||d==="not-in");return ie.create(c,d,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function FM(n,e,t){const r=e,i=Wh("where",n);return Gh._create(i,r,t)}class i_ extends r_{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new i_(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ue.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)sR(o,u),o=Ep(o,u)}(e._query,t),new Pt(e.firestore,e.converter,Ep(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class s_ extends Ql{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new s_(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new L(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new L(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new _l(s,o)}(e._query,this._field,this._direction);return new Pt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ur(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function UM(n,e="asc"){const t=e,r=Wh("orderBy",n);return s_._create(r,t)}class Kh extends Ql{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Kh(e,t,r)}_apply(e){return new Pt(e.firestore,e.converter,Wc(e._query,this._limit,this._limitType))}}function BM(n){return zA("limit",n),Kh._create("limit",n,"F")}function zM(n){return zA("limitToLast",n),Kh._create("limitToLast",n,"L")}class Hh extends Ql{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Hh(e,t,r)}_apply(e){const t=iR(e,this.type,this._docOrFields,this._inclusive);return new Pt(e.firestore,e.converter,function(i,s){return new ur(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function jM(...n){return Hh._create("startAt",n,!0)}function $M(...n){return Hh._create("startAfter",n,!1)}class Qh extends Ql{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Qh(e,t,r)}_apply(e){const t=iR(e,this.type,this._docOrFields,this._inclusive);return new Pt(e.firestore,e.converter,function(i,s){return new ur(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function qM(...n){return Qh._create("endBefore",n,!1)}function WM(...n){return Qh._create("endAt",n,!0)}function iR(n,e,t,r){if(t[0]=Y(t[0]),t[0]instanceof El)return function(s,o,a,u,c){if(!u)throw new L(b.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const p of Ws(s))if(p.field.isKeyField())d.push(qi(o,u.key));else{const m=u.data.field(p.field);if(Dh(m))throw new L(b.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const w=p.field.canonicalString();throw new L(b.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${w}' (used as the orderBy) does not exist.`)}d.push(m)}return new Yr(d,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=is(n.firestore);return function(o,a,u,c,d,p){const m=o.explicitOrderBy;if(d.length>m.length)throw new L(b.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const w=[];for(let P=0;P<d.length;P++){const C=d[P];if(m[P].field.isKeyField()){if(typeof C!="string")throw new L(b.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof C}`);if(!fg(o)&&C.indexOf("/")!==-1)throw new L(b.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${C}' contains a slash.`);const O=o.path.child(re.fromString(C));if(!$.isDocumentKey(O))throw new L(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${O}' is not because it contains an odd number of segments.`);const S=new $(O);w.push(qi(a,S))}else{const O=ZA(u,c,C);w.push(O)}}return new Yr(w,p)}(n._query,n.firestore._databaseId,i,e,t,r)}}function sI(n,e,t){if(typeof(t=Y(t))=="string"){if(t==="")throw new L(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fg(e)&&t.indexOf("/")!==-1)throw new L(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(re.fromString(t));if(!$.isDocumentKey(r))throw new L(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return qi(n,new $(r))}if(t instanceof ke)return qi(n,t._key);throw new L(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zh(t)}.`)}function oI(n,e){if(!Array.isArray(n)||n.length===0)throw new L(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function sR(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new L(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class o_{convertValue(e,t="none"){switch($i(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Kr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ns(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>we(o.doubleValue));return new Hg(s)}convertGeoPoint(e){return new jh(we(e.latitude),we(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=hg(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(pl(e));default:return null}}convertTimestamp(e){const t=ir(e);return new Se(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=re.fromString(e);H(XS(r));const i=new Hr(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(t)||Be(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function Yh(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class GM extends o_{constructor(e){super(),this.firestore=e}convertBytes(e){return new On(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,t)}}/**
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
 */class ki{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let sr=class extends El{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Fa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Wh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},Fa=class extends sr{data(e={}){return super.data(e)}},Zr=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ki(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Fa(this._firestore,this._userDataWriter,r.key,r,new ki(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Fa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ki(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Fa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ki(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:KM(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function KM(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}function oR(n,e){return n instanceof sr&&e instanceof sr?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Zr&&e instanceof Zr&&n._firestore===e._firestore&&KA(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function HM(n){n=le(n,ke);const e=le(n.firestore,je);return MA(_t(e),n._key).then(t=>a_(e,n,t))}class os extends o_{constructor(e){super(),this.firestore=e}convertBytes(e){return new On(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,t)}}function QM(n){n=le(n,ke);const e=le(n.firestore,je),t=_t(e),r=new os(e);return gM(t,n._key).then(i=>new sr(e,r,n._key,i,new ki(i!==null&&i.hasLocalMutations,!0),n.converter))}function YM(n){n=le(n,ke);const e=le(n.firestore,je);return MA(_t(e),n._key,{source:"server"}).then(t=>a_(e,n,t))}function JM(n){n=le(n,Pt);const e=le(n.firestore,je),t=_t(e),r=new os(e);return rR(n._query),FA(t,n._query).then(i=>new Zr(e,r,n,i))}function XM(n){n=le(n,Pt);const e=le(n.firestore,je),t=_t(e),r=new os(e);return _M(t,n._query).then(i=>new Zr(e,r,n,i))}function ZM(n){n=le(n,Pt);const e=le(n.firestore,je),t=_t(e),r=new os(e);return FA(t,n._query,{source:"server"}).then(i=>new Zr(e,r,n,i))}function aI(n,e,t){n=le(n,ke);const r=le(n.firestore,je),i=Yh(n.converter,e,t);return Yl(r,[qh(is(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Te.none())])}function lI(n,e,t,...r){n=le(n,ke);const i=le(n.firestore,je),s=is(i);let o;return o=typeof(e=Y(e))=="string"||e instanceof Xr?e_(s,"updateDoc",n._key,e,t,r):Zg(s,"updateDoc",n._key,e),Yl(i,[o.toMutation(n._key,Te.exists(!0))])}function e2(n){return Yl(le(n.firestore,je),[new ko(n._key,Te.none())])}function t2(n,e){const t=le(n.firestore,je),r=Zc(n),i=Yh(n.converter,e);return Yl(t,[qh(is(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Te.exists(!1))]).then(()=>r)}function aR(n,...e){var t,r,i;n=Y(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||xp(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(xp(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,d;if(n instanceof ke)c=le(n.firestore,je),d=Ro(n._key.path),u={next:p=>{e[o]&&e[o](a_(c,n,p))},error:e[o+1],complete:e[o+2]};else{const p=le(n,Pt);c=le(p.firestore,je),d=p._query;const m=new os(c);u={next:w=>{e[o]&&e[o](new Zr(c,m,p,w))},error:e[o+1],complete:e[o+2]},rR(n._query)}return function(m,w,P,C){const O=new Uh(C),S=new Fg(w,O,P);return m.asyncQueue.enqueueAndForget(async()=>Og(await go(m),S)),()=>{O.Za(),m.asyncQueue.enqueueAndForget(async()=>Lg(await go(m),S))}}(_t(c),d,a,u)}function n2(n,e){return yM(_t(n=le(n,je)),xp(e)?e:{next:e})}function Yl(n,e){return function(r,i){const s=new ot;return r.asyncQueue.enqueueAndForget(async()=>GL(await Gg(r),i,s)),s.promise}(_t(n),e)}function a_(n,e,t){const r=t.docs.get(e._key),i=new os(n);return new sr(n,i,e._key,r,new ki(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const r2={maxAttempts:5};/**
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
 */let i2=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=is(e)}set(e,t,r){this._verifyNotCommitted();const i=Ar(e,this._firestore),s=Yh(i.converter,t,r),o=qh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Te.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Ar(e,this._firestore);let o;return o=typeof(t=Y(t))=="string"||t instanceof Xr?e_(this._dataReader,"WriteBatch.update",s._key,t,r,i):Zg(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Te.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ar(e,this._firestore);return this._mutations=this._mutations.concat(new ko(t._key,Te.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new L(b.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Ar(n,e){if((n=Y(n)).firestore!==e)throw new L(b.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 *//**
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
 */let s2=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=is(t)}get(t){const r=Ar(t,this._firestore),i=new GM(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return G();const o=s[0];if(o.isFoundDocument())return new El(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new El(this._firestore,i,r._key,null,r.converter);throw G()})}set(t,r,i){const s=Ar(t,this._firestore),o=Yh(s.converter,r,i),a=qh(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(t,r,i,...s){const o=Ar(t,this._firestore);let a;return a=typeof(r=Y(r))=="string"||r instanceof Xr?e_(this._dataReader,"Transaction.update",o._key,r,i,s):Zg(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(t){const r=Ar(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Ar(e,this._firestore),r=new os(this._firestore);return super.get(e).then(i=>new sr(this._firestore,r,t._key,i._document,new ki(!1,!1),t.converter))}};function o2(n,e,t){n=le(n,je);const r=Object.assign(Object.assign({},r2),t);return function(s){if(s.maxAttempts<1)throw new L(b.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new ot;return s.asyncQueue.enqueueAndForget(async()=>{const c=await fM(s);new hM(s.asyncQueue,c,a,o,u).au()}),u.promise}(_t(n),i=>e(new s2(n,i)),r)}/**
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
 */function a2(){return new Hl("deleteField")}function l2(){return new Qg("serverTimestamp")}function u2(...n){return new Yg("arrayUnion",n)}function c2(...n){return new Jg("arrayRemove",n)}function h2(n){return new Xg("increment",n)}(function(e,t=!0){(function(i){Ao=i})(ri),Wr(new Nn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new je(new gx(r.getProvider("auth-internal")),new wx(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new L(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hr(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),pn(Jv,"4.7.3",e),pn(Jv,"4.7.3","esm2017")})();const d2="@firebase/firestore-compat",f2="0.3.38";/**
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
 */function l_(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new L("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function uI(){if(typeof Uint8Array>"u")throw new L("unimplemented","Uint8Arrays are not available in this environment.")}function cI(){if(!Gx())throw new L("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Tl{constructor(e){this._delegate=e}static fromBase64String(e){return cI(),new Tl(On.fromBase64String(e))}static fromUint8Array(e){return uI(),new Tl(On.fromUint8Array(e))}toBase64(){return cI(),this._delegate.toBase64()}toUint8Array(){return uI(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Lp(n){return p2(n,["next","error","complete"])}function p2(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
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
 */class m2{enableIndexedDbPersistence(e,t){return AM(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return RM(e._delegate)}clearIndexedDbPersistence(e){return PM(e._delegate)}}class lR{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Hr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Vn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){IM(this._delegate,e,t,r)}enableNetwork(){return CM(this._delegate)}disableNetwork(){return DM(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,BA("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return kM(this._delegate)}onSnapshotsInSync(e){return n2(this._delegate,e)}get app(){if(!this._appCompat)throw new L("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new _o(this,WA(this._delegate,e))}catch(t){throw Et(t,"collection()","Firestore.collection()")}}doc(e){try{return new en(this,Zc(this._delegate,e))}catch(t){throw Et(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new It(this,EM(this._delegate,e))}catch(t){throw Et(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return o2(this._delegate,t=>e(new uR(this,t)))}batch(){return _t(this._delegate),new cR(new i2(this._delegate,e=>Yl(this._delegate,e)))}loadBundle(e){return NM(this._delegate,e)}namedQuery(e){return bM(this._delegate,e).then(t=>t?new It(this,t):null)}}class Jh extends o_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tl(new On(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return en.forKey(t,this.firestore,null)}}function g2(n){dx(n)}class uR{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Jh(e)}get(e){const t=Ci(e);return this._delegate.get(t).then(r=>new Sl(this._firestore,new sr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=Ci(e);return r?(l_("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Ci(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Ci(e);return this._delegate.delete(t),this}}class cR{constructor(e){this._delegate=e}set(e,t,r){const i=Ci(e);return r?(l_("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Ci(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Ci(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Ji{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Fa(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Al(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Ji.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new Ji(e,new Jh(e),t),i.set(t,s)),s}}Ji.INSTANCES=new WeakMap;class en{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Jh(e)}static forPath(e,t,r){if(e.length%2!==0)throw new L("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new en(t,new ke(t._delegate,r,new $(e)))}static forKey(e,t,r){return new en(t,new ke(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new _o(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new _o(this.firestore,WA(this._delegate,e))}catch(t){throw Et(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Y(e),e instanceof ke?GA(this._delegate,e):!1}set(e,t){t=l_("DocumentReference.set",t);try{return t?aI(this._delegate,e,t):aI(this._delegate,e)}catch(r){throw Et(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?lI(this._delegate,e):lI(this._delegate,e,t,...r)}catch(i){throw Et(i,"updateDoc()","DocumentReference.update()")}}delete(){return e2(this._delegate)}onSnapshot(...e){const t=hR(e),r=dR(e,i=>new Sl(this.firestore,new sr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return aR(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=QM(this._delegate):(e==null?void 0:e.source)==="server"?t=YM(this._delegate):t=HM(this._delegate),t.then(r=>new Sl(this.firestore,new sr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new en(this.firestore,e?this._delegate.withConverter(Ji.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Et(n,e,t){return n.message=n.message.replace(e,t),n}function hR(n){for(const e of n)if(typeof e=="object"&&!Lp(e))return e;return{}}function dR(n,e){var t,r;let i;return Lp(n[0])?i=n[0]:Lp(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Sl{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new en(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return oR(this._delegate,e._delegate)}}class Al extends Sl{data(e){const t=this._delegate.data(e);return this._delegate._converter||fx(t!==void 0),t}}class It{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Jh(e)}where(e,t,r){try{return new It(this.firestore,vr(this._delegate,FM(e,t,r)))}catch(i){throw Et(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new It(this.firestore,vr(this._delegate,UM(e,t)))}catch(r){throw Et(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new It(this.firestore,vr(this._delegate,BM(e)))}catch(t){throw Et(t,"limit()","Query.limit()")}}limitToLast(e){try{return new It(this.firestore,vr(this._delegate,zM(e)))}catch(t){throw Et(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new It(this.firestore,vr(this._delegate,jM(...e)))}catch(t){throw Et(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new It(this.firestore,vr(this._delegate,$M(...e)))}catch(t){throw Et(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new It(this.firestore,vr(this._delegate,qM(...e)))}catch(t){throw Et(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new It(this.firestore,vr(this._delegate,WM(...e)))}catch(t){throw Et(t,"endAt()","Query.endAt()")}}isEqual(e){return KA(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=XM(this._delegate):(e==null?void 0:e.source)==="server"?t=ZM(this._delegate):t=JM(this._delegate),t.then(r=>new Mp(this.firestore,new Zr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=hR(e),r=dR(e,i=>new Mp(this.firestore,new Zr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return aR(this._delegate,t,r)}withConverter(e){return new It(this.firestore,e?this._delegate.withConverter(Ji.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class _2{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Al(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Mp{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new It(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Al(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new _2(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new Al(this._firestore,r))})}isEqual(e){return oR(this._delegate,e._delegate)}}class _o extends It{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new en(this.firestore,e):null}doc(e){try{return e===void 0?new en(this.firestore,Zc(this._delegate)):new en(this.firestore,Zc(this._delegate,e))}catch(t){throw Et(t,"doc()","CollectionReference.doc()")}}add(e){return t2(this._delegate,e).then(t=>new en(this.firestore,t))}isEqual(e){return GA(this._delegate,e._delegate)}withConverter(e){return new _o(this.firestore,e?this._delegate.withConverter(Ji.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ci(n){return le(n,ke)}/**
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
 */class u_{constructor(...e){this._delegate=new Xr(...e)}static documentId(){return new u_(Ee.keyField().canonicalString())}isEqual(e){return e=Y(e),e instanceof Xr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Ti{constructor(e){this._delegate=e}static serverTimestamp(){const e=l2();return e._methodName="FieldValue.serverTimestamp",new Ti(e)}static delete(){const e=a2();return e._methodName="FieldValue.delete",new Ti(e)}static arrayUnion(...e){const t=u2(...e);return t._methodName="FieldValue.arrayUnion",new Ti(t)}static arrayRemove(...e){const t=c2(...e);return t._methodName="FieldValue.arrayRemove",new Ti(t)}static increment(e){const t=h2(e);return t._methodName="FieldValue.increment",new Ti(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const y2={Firestore:lR,GeoPoint:jh,Timestamp:Se,Blob:Tl,Transaction:uR,WriteBatch:cR,DocumentReference:en,DocumentSnapshot:Sl,Query:It,QueryDocumentSnapshot:Al,QuerySnapshot:Mp,CollectionReference:_o,FieldPath:u_,FieldValue:Ti,setLogLevel:g2,CACHE_SIZE_UNLIMITED:SM};function v2(n,e){n.INTERNAL.registerComponent(new Nn("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},y2)))}/**
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
 */function w2(n){v2(n,(e,t)=>new lR(e,t,new m2)),n.registerVersion(d2,f2)}w2(Ur);let Uu,I2,E2;const T2=n=>{Ur.apps.length?Uu=Ur.app():Uu=Ur.initializeApp(n),I2=Uu.auth(),E2=Uu.firestore()},fR=document.getElementById("root");if(!fR)throw new Error("Could not find root element to mount to");const hI=cf.createRoot(fR);fetch("/config.json").then(n=>n.json()).then(n=>{T2(n),KR(async()=>{const{default:e}=await import("./App-DZhREPkg.js");return{default:e}},[]).then(({default:e})=>{hI.render(Ko.jsx(cP.StrictMode,{children:Ko.jsx(e,{})}))})}).catch(n=>{console.error("Failed to load site configuration:",n),hI.render(Ko.jsxs("div",{style:{padding:20,textAlign:"center",color:"red"},children:[Ko.jsx("h1",{children:"Configuration Error"}),Ko.jsx("p",{children:"Could not load config.json. Please ensure the file exists in the public folder."})]}))});export{I2 as a,E2 as d,Ko as j,jp as r};
