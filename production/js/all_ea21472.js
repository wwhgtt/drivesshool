/*!
 * ionic.bundle.js is a concatenation of:
 * ionic.js, angular.js, angular-animate.js,
 * angular-sanitize.js, angular-ui-router.js,
 * and ionic-angular.js
 */

/*!
 * Copyright 2014 Drifty Co.
 * http://drifty.com/
 *
 * Ionic, v1.0.0
 * A powerful HTML5 mobile app framework.
 * http://ionicframework.com/
 *
 * By @maxlynch, @benjsperry, @adamdbradley <3
 *
 * Licensed under the MIT license. Please see LICENSE for more information.
 *
 */

!function(){function e(e,t,n){t!==!1?Y.addEventListener(e,Q[e],n):Y.removeEventListener(e,Q[e])}function t(e){var t=T(e.target),i=E(t);if(ionic.tap.requiresNativeClick(i)||U)return!1;var o=ionic.tap.pointerCoord(e);n("click",i,o.x,o.y),h(i)}function n(e,t,n,i){var o=document.createEvent("MouseEvents");o.initMouseEvent(e,!0,!0,window,1,0,0,n,i,!1,!1,!1,!1,0,null),o.isIonicTap=!0,t.dispatchEvent(o)}function i(e){return"submit"==e.target.type&&0===e.detail?null:ionic.scroll.isScrolling&&ionic.tap.containsOrIsTextInput(e.target)||!e.isIonicTap&&!ionic.tap.requiresNativeClick(e.target)?(e.stopPropagation(),ionic.tap.isLabelWithTextInput(e.target)||e.preventDefault(),!1):void 0}function o(t){return t.isIonicTap||_(t)?null:W?(t.stopPropagation(),ionic.tap.isTextInput(t.target)&&K===t.target||/^(select|option)$/i.test(t.target.tagName)||t.preventDefault(),!1):(U=!1,q=ionic.tap.pointerCoord(t),e("mousemove"),void ionic.activator.start(t))}function r(n){return W?(n.stopPropagation(),n.preventDefault(),!1):_(n)||/^(select|option)$/i.test(n.target.tagName)?!1:(v(n)||t(n),e("mousemove",!1),ionic.activator.end(),void(U=!1))}function s(t){return v(t)?(e("mousemove",!1),ionic.activator.end(),U=!0,!1):void 0}function a(t){if(!_(t)&&(U=!1,d(),q=ionic.tap.pointerCoord(t),e(Z),ionic.activator.start(t),ionic.Platform.isIOS()&&ionic.tap.isLabelWithTextInput(t.target))){var n=E(T(t.target));n!==X&&t.preventDefault()}}function l(e){_(e)||(d(),v(e)||(t(e),/^(select|option)$/i.test(e.target.tagName)&&e.preventDefault()),K=e.target,u())}function c(t){return v(t)?(U=!0,e(Z,!1),ionic.activator.end(),!1):void 0}function u(){e(Z,!1),ionic.activator.end(),U=!1}function d(){W=!0,clearTimeout($),$=setTimeout(function(){W=!1},600)}function _(e){return e.isTapHandled?!0:(e.isTapHandled=!0,ionic.scroll.isScrolling&&ionic.tap.containsOrIsTextInput(e.target)?(e.preventDefault(),!0):void 0)}function h(e){B=null;var t=!1;"SELECT"==e.tagName?(n("mousedown",e,0,0),e.focus&&e.focus(),t=!0):g()===e?t=!0:/^(input|textarea)$/i.test(e.tagName)||e.isContentEditable?(t=!0,e.focus&&e.focus(),e.value=e.value,W&&(B=e)):f(),t&&(g(e),ionic.trigger("ionic.focusin",{target:e},!0))}function f(){var e=g();e&&(/^(input|textarea|select)$/i.test(e.tagName)||e.isContentEditable)&&e.blur(),g(null)}function p(e){W&&ionic.tap.isTextInput(g())&&ionic.tap.isTextInput(B)&&B!==e.target&&(B.focus(),B=null),ionic.scroll.isScrolling=!1}function m(){g(null)}function g(e){return arguments.length&&(X=e),X||document.activeElement}function v(e){if(!e||1!==e.target.nodeType||!q||0===q.x&&0===q.y)return!1;var t=ionic.tap.pointerCoord(e),n=!(!e.target.classList||!e.target.classList.contains||"function"!=typeof e.target.classList.contains),i=n&&e.target.classList.contains("button")?J:j;return Math.abs(q.x-t.x)>i||Math.abs(q.y-t.y)>i}function T(e,t){for(var n=e,i=0;6>i&&n;i++){if("LABEL"===n.tagName)return n;n=n.parentElement}return t!==!1?e:void 0}function E(e){if(e&&"LABEL"===e.tagName){if(e.control)return e.control;if(e.querySelector){var t=e.querySelector("input,textarea,select");if(t)return t}}return e}function S(){ionic.keyboard.isInitialized||(R()?(window.addEventListener("native.keyboardshow",de),window.addEventListener("native.keyboardhide",y)):document.body.addEventListener("focusout",y),document.body.addEventListener("ionic.focusin",ue),document.body.addEventListener("focusin",ue),window.navigator.msPointerEnabled?document.removeEventListener("MSPointerDown",S):document.removeEventListener("touchstart",S),ionic.keyboard.isInitialized=!0)}function b(e){clearTimeout(ie),(!ionic.keyboard.isOpen||ionic.keyboard.isClosing)&&(ionic.keyboard.isOpening=!0,ionic.keyboard.isClosing=!1),ionic.keyboard.height=e.keyboardHeight,ae?M(A,!0):M(I,!0)}function w(e){return clearTimeout(ie),e.target&&!e.target.readOnly&&ionic.tap.isKeyboardElement(e.target)&&(te=V(e.target))?(ee=e.target,document.body.scrollTop=0,te.scrollTop=0,ionic.requestAnimationFrame(function(){document.body.scrollTop=0,te.scrollTop=0}),(!ionic.keyboard.isOpen||ionic.keyboard.isClosing)&&(ionic.keyboard.isOpening=!0,ionic.keyboard.isClosing=!1),document.addEventListener("keydown",L,!1),window.navigator.msPointerEnabled?document.addEventListener("MSPointerMove",x,!1):document.addEventListener("touchmove",x,!1),void(ionic.keyboard.isOpen||R()?ionic.keyboard.isOpen&&I():M(I,!0))):void(ee=null)}function y(){clearTimeout(ie),(ionic.keyboard.isOpen||ionic.keyboard.isOpening)&&(ionic.keyboard.isClosing=!0,ionic.keyboard.isOpening=!1),ie=setTimeout(function(){ionic.requestAnimationFrame(function(){ae?M(function(){A(),N()},!1):M(N,!1)})},50)}function D(){ionic.keyboard.isLandscape=!ionic.keyboard.isLandscape,ionic.Platform.isIOS()&&A(),ionic.Platform.isAndroid()&&(ionic.keyboard.isOpen&&R()?ae=!0:M(A,!1))}function L(e){ionic.scroll.isScrolling&&x(e)}function x(e){"TEXTAREA"!==e.target.tagName&&e.preventDefault()}function M(e,t){clearInterval(ne);var n,i=0,o=k(),r=o;return n=ionic.Platform.isAndroid()&&ionic.Platform.version()<4.4?30:ionic.Platform.isAndroid()?10:1,ne=setInterval(function(){r=k(),(!(++i<n)||(O(r)||P(r))&&ionic.keyboard.height)&&(R()||(ionic.keyboard.height=Math.abs(o-window.innerHeight)),ionic.keyboard.isOpen=t,clearInterval(ne),e())},50),n}function N(){clearTimeout(ie),ionic.keyboard.isOpen=!1,ionic.keyboard.isClosing=!1,ee&&ionic.trigger("resetScrollView",{target:ee},!0),ionic.requestAnimationFrame(function(){document.body.classList.remove(le)}),window.navigator.msPointerEnabled?document.removeEventListener("MSPointerMove",x):document.removeEventListener("touchmove",x),document.removeEventListener("keydown",L),ionic.Platform.isAndroid()&&(R()&&cordova.plugins.Keyboard.close(),ee&&ee.blur()),ee=null}function I(){ionic.keyboard.isOpen=!0,ionic.keyboard.isOpening=!1;var e={keyboardHeight:C(),viewportHeight:oe};if(ee){e.target=ee;var t=ee.getBoundingClientRect();e.elementTop=Math.round(t.top),e.elementBottom=Math.round(t.bottom),e.windowHeight=e.viewportHeight-e.keyboardHeight,e.isElementUnderKeyboard=e.elementBottom>e.windowHeight,ionic.trigger("scrollChildIntoView",e,!0)}return setTimeout(function(){document.body.classList.add(le)},400),e}function C(){if(ionic.keyboard.height)return ionic.keyboard.height;if(ionic.Platform.isAndroid()){if(ionic.Platform.isFullScreen)return 275;var e=window.innerHeight;return oe>e?oe-e:0}return ionic.Platform.isIOS()?ionic.keyboard.isLandscape?206:ionic.Platform.isWebView()?260:216:275}function O(e){return!!(!ionic.keyboard.isLandscape&&re&&Math.abs(re-e)<2)}function P(e){return!!(ionic.keyboard.isLandscape&&se&&Math.abs(se-e)<2)}function A(){ae=!1,oe=k(),ionic.keyboard.isLandscape&&!se?se=oe:ionic.keyboard.isLandscape||re||(re=oe),ee&&ionic.trigger("resetScrollView",{target:ee},!0),ionic.keyboard.isOpen&&ionic.tap.isTextInput(ee)&&I()}function G(){var e=k();e/window.innerWidth<1&&(ionic.keyboard.isLandscape=!0),oe=e,ionic.keyboard.isLandscape&&!se?se=oe:ionic.keyboard.isLandscape||re||(re=oe)}function k(){var e=window.innerHeight;return ionic.Platform.isAndroid()&&ionic.Platform.isFullScreen||!ionic.keyboard.isOpen&&!ionic.keyboard.isOpening||ionic.keyboard.isClosing?e:e+C()}function V(e){for(;e;){if(e.classList.contains(ce))return e;e=e.parentElement}return null}function R(){return!!(window.cordova&&cordova.plugins&&cordova.plugins.Keyboard)}function z(){var e;for(e=0;e<document.head.children.length;e++)if("viewport"==document.head.children[e].name){_e=document.head.children[e];break}if(_e){var t,n=_e.content.toLowerCase().replace(/\s+/g,"").split(",");for(e=0;e<n.length;e++)n[e]&&(t=n[e].split("="),he[t[0]]=t.length>1?t[1]:"_");H()}}function H(){var e=he.width,t=he.height,n=ionic.Platform,i=n.version(),o="device-width",r="device-height",s=ionic.viewport.orientation();delete he.height,he.width=o,n.isIPad()?i>7?delete he.width:n.isWebView()?90==s?he.height="0":7==i&&(he.height=r):7>i&&(he.height="0"):n.isIOS()&&(n.isWebView()?i>7?delete he.width:7>i?t&&(he.height="0"):7==i&&(he.height=r):7>i&&t&&(he.height="0")),(e!==he.width||t!==he.height)&&F()}function F(){var e,t=[];for(e in he)he[e]&&t.push(e+("_"==he[e]?"":"="+he[e]));_e.content=t.join(", ")}window.ionic=window.ionic||{},window.ionic.views={},window.ionic.version="1.0.0",function(e){e.DelegateService=function(e){function t(){return!0}if(e.indexOf("$getByHandle")>-1)throw new Error("Method '$getByHandle' is implicitly added to each delegate service. Do not list it as a method.");return["$log",function(n){function i(e,t){this._instances=e,this.handle=t}function o(){this._instances=[]}function r(e){return function(){var t,i=this.handle,o=arguments,r=0;return this._instances.forEach(function(n){if((!i||i==n.$$delegateHandle)&&n.$$filterFn(n)){r++;var s=n[e].apply(n,o);1===r&&(t=s)}}),!r&&i?n.warn('Delegate for handle "'+i+'" could not find a corresponding element with delegate-handle="'+i+'"! '+e+"() was not called!\nPossible cause: If you are calling "+e+'() immediately, and your element with delegate-handle="'+i+'" is a child of your controller, then your element may not be compiled yet. Put a $timeout around your call to '+e+"() and try again."):t}}return e.forEach(function(e){i.prototype[e]=r(e)}),o.prototype=i.prototype,o.prototype._registerInstance=function(e,n,i){var o=this._instances;return e.$$delegateHandle=n,e.$$filterFn=i||t,o.push(e),function(){var t=o.indexOf(e);-1!==t&&o.splice(t,1)}},o.prototype.$getByHandle=function(e){return new i(this._instances,e)},new o}]}}(window.ionic),function(e,t,n){function i(){r=!0;for(var e=0;e<o.length;e++)n.requestAnimationFrame(o[e]);o=[],t.removeEventListener("DOMContentLoaded",i)}var o=[],r="complete"===t.readyState||"interactive"===t.readyState;r||t.addEventListener("DOMContentLoaded",i),e._rAF=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(t){e.setTimeout(t,16)}}();var s=e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.mozCancelAnimationFrame||e.webkitCancelRequestAnimationFrame;n.DomUtil={requestAnimationFrame:function(t){return e._rAF(t)},cancelAnimationFrame:function(e){s(e)},animationFrameThrottle:function(e){var t,i,o;return function(){t=arguments,o=this,i||(i=!0,n.requestAnimationFrame(function(){e.apply(o,t),i=!1}))}},contains:function(e,t){for(var n=t;n;){if(n===e)return!0;n=n.parentNode}},getPositionInParent:function(e){return{left:e.offsetLeft,top:e.offsetTop}},ready:function(e){r?n.requestAnimationFrame(e):o.push(e)},getTextBounds:function(n){if(t.createRange){var i=t.createRange();if(i.selectNodeContents(n),i.getBoundingClientRect){var o=i.getBoundingClientRect();if(o){var r=e.scrollX,s=e.scrollY;return{top:o.top+s,left:o.left+r,right:o.left+r+o.width,bottom:o.top+s+o.height,width:o.width,height:o.height}}}}return null},getChildIndex:function(e,t){if(t)for(var n,i=e.parentNode.children,o=0,r=0,s=i.length;s>o;o++)if(n=i[o],n.nodeName&&n.nodeName.toLowerCase()==t){if(n==e)return r;r++}return Array.prototype.slice.call(e.parentNode.children).indexOf(e)},swapNodes:function(e,t){t.parentNode.insertBefore(e,t)},elementIsDescendant:function(e,t,n){var i=e;do{if(i===t)return!0;i=i.parentNode}while(i&&i!==n);return!1},getParentWithClass:function(e,t,n){for(n=n||10;e.parentNode&&n--;){if(e.parentNode.classList&&e.parentNode.classList.contains(t))return e.parentNode;e=e.parentNode}return null},getParentOrSelfWithClass:function(e,t,n){for(n=n||10;e&&n--;){if(e.classList&&e.classList.contains(t))return e;e=e.parentNode}return null},rectContains:function(e,t,n,i,o,r){return n>e||e>o?!1:i>t||t>r?!1:!0},blurAll:function(){return t.activeElement&&t.activeElement!=t.body?(t.activeElement.blur(),t.activeElement):null},cachedAttr:function(e,t,n){if(e=e&&e.length&&e[0]||e,e&&e.setAttribute){var i="$attr-"+t;return arguments.length>2?e[i]!==n&&(e.setAttribute(t,n),e[i]=n):"undefined"==typeof e[i]&&(e[i]=e.getAttribute(t)),e[i]}},cachedStyles:function(e,t){if(e=e&&e.length&&e[0]||e,e&&e.style)for(var n in t)e["$style-"+n]!==t[n]&&(e.style[n]=e["$style-"+n]=t[n])}},n.requestAnimationFrame=n.DomUtil.requestAnimationFrame,n.cancelAnimationFrame=n.DomUtil.cancelAnimationFrame,n.animationFrameThrottle=n.DomUtil.animationFrameThrottle}(window,document,ionic),function(e){e.CustomEvent=function(){if("function"==typeof window.CustomEvent)return CustomEvent;var e=function(e,t){var n;t=t||{bubbles:!1,cancelable:!1,detail:void 0};try{n=document.createEvent("CustomEvent"),n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail)}catch(i){n=document.createEvent("Event");for(var o in t)n[o]=t[o];n.initEvent(e,t.bubbles,t.cancelable)}return n};return e.prototype=window.Event.prototype,e}(),e.EventController={VIRTUALIZED_EVENTS:["tap","swipe","swiperight","swipeleft","drag","hold","release"],trigger:function(t,n,i,o){var r=new e.CustomEvent(t,{detail:n,bubbles:!!i,cancelable:!!o});n&&n.target&&n.target.dispatchEvent&&n.target.dispatchEvent(r)||window.dispatchEvent(r)},on:function(t,n,i){for(var o=i||window,r=0,s=this.VIRTUALIZED_EVENTS.length;s>r;r++)if(t==this.VIRTUALIZED_EVENTS[r]){var a=new e.Gesture(i);return a.on(t,n),a}o.addEventListener(t,n)},off:function(e,t,n){n.removeEventListener(e,t)},onGesture:function(t,n,i,o){var r=new e.Gesture(i,o);return r.on(t,n),r},offGesture:function(e,t,n){e&&e.off(t,n)},handlePopState:function(){}},e.on=function(){e.EventController.on.apply(e.EventController,arguments)},e.off=function(){e.EventController.off.apply(e.EventController,arguments)},e.trigger=e.EventController.trigger,e.onGesture=function(){return e.EventController.onGesture.apply(e.EventController.onGesture,arguments)},e.offGesture=function(){return e.EventController.offGesture.apply(e.EventController.offGesture,arguments)}}(window.ionic),function(e){function t(){if(!e.Gestures.READY){e.Gestures.event.determineEventTypes();for(var t in e.Gestures.gestures)e.Gestures.gestures.hasOwnProperty(t)&&e.Gestures.detection.register(e.Gestures.gestures[t]);e.Gestures.event.onTouch(e.Gestures.DOCUMENT,e.Gestures.EVENT_MOVE,e.Gestures.detection.detect),e.Gestures.event.onTouch(e.Gestures.DOCUMENT,e.Gestures.EVENT_END,e.Gestures.detection.detect),e.Gestures.READY=!0}}e.Gesture=function(t,n){return new e.Gestures.Instance(t,n||{})},e.Gestures={},e.Gestures.defaults={stop_browser_behavior:"disable-user-behavior"},e.Gestures.HAS_POINTEREVENTS=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,e.Gestures.HAS_TOUCHEVENTS="ontouchstart"in window,e.Gestures.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android|silk/i,e.Gestures.NO_MOUSEEVENTS=e.Gestures.HAS_TOUCHEVENTS&&window.navigator.userAgent.match(e.Gestures.MOBILE_REGEX),e.Gestures.EVENT_TYPES={},e.Gestures.DIRECTION_DOWN="down",e.Gestures.DIRECTION_LEFT="left",e.Gestures.DIRECTION_UP="up",e.Gestures.DIRECTION_RIGHT="right",e.Gestures.POINTER_MOUSE="mouse",e.Gestures.POINTER_TOUCH="touch",e.Gestures.POINTER_PEN="pen",e.Gestures.EVENT_START="start",e.Gestures.EVENT_MOVE="move",e.Gestures.EVENT_END="end",e.Gestures.DOCUMENT=window.document,e.Gestures.plugins={},e.Gestures.READY=!1,e.Gestures.Instance=function(n,i){var o=this;return null===n?this:(t(),this.element=n,this.enabled=!0,this.options=e.Gestures.utils.extend(e.Gestures.utils.extend({},e.Gestures.defaults),i||{}),this.options.stop_browser_behavior&&e.Gestures.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),e.Gestures.event.onTouch(n,e.Gestures.EVENT_START,function(t){o.enabled&&e.Gestures.detection.startDetect(o,t)}),this)},e.Gestures.Instance.prototype={on:function(e,t){for(var n=e.split(" "),i=0;i<n.length;i++)this.element.addEventListener(n[i],t,!1);return this},off:function(e,t){for(var n=e.split(" "),i=0;i<n.length;i++)this.element.removeEventListener(n[i],t,!1);return this},trigger:function(t,n){var i=e.Gestures.DOCUMENT.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=n;var o=this.element;return e.Gestures.utils.hasParent(n.target,o)&&(o=n.target),o.dispatchEvent(i),this},enable:function(e){return this.enabled=e,this}};var n=null,i=!1,o=!1;e.Gestures.event={bindDom:function(e,t,n){for(var i=t.split(" "),o=0;o<i.length;o++)e.addEventListener(i[o],n,!1)},onTouch:function(t,r,s){var a=this;this.bindDom(t,e.Gestures.EVENT_TYPES[r],function(l){var c=l.type.toLowerCase();if(!c.match(/mouse/)||!o){c.match(/touch/)||c.match(/pointerdown/)||c.match(/mouse/)&&1===l.which?i=!0:c.match(/mouse/)&&1!==l.which&&(i=!1),c.match(/touch|pointer/)&&(o=!0);var u=0;i&&(e.Gestures.HAS_POINTEREVENTS&&r!=e.Gestures.EVENT_END?u=e.Gestures.PointerEvent.updatePointer(r,l):c.match(/touch/)?u=l.touches.length:o||(u=c.match(/up/)?0:1),u>0&&r==e.Gestures.EVENT_END?r=e.Gestures.EVENT_MOVE:u||(r=e.Gestures.EVENT_END),(u||null===n)&&(n=l),s.call(e.Gestures.detection,a.collectEventData(t,r,a.getTouchList(n,r),l)),e.Gestures.HAS_POINTEREVENTS&&r==e.Gestures.EVENT_END&&(u=e.Gestures.PointerEvent.updatePointer(r,l))),u||(n=null,i=!1,o=!1,e.Gestures.PointerEvent.reset())}})},determineEventTypes:function(){var t;t=e.Gestures.HAS_POINTEREVENTS?e.Gestures.PointerEvent.getEvents():e.Gestures.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],e.Gestures.EVENT_TYPES[e.Gestures.EVENT_START]=t[0],e.Gestures.EVENT_TYPES[e.Gestures.EVENT_MOVE]=t[1],e.Gestures.EVENT_TYPES[e.Gestures.EVENT_END]=t[2]},getTouchList:function(t){return e.Gestures.HAS_POINTEREVENTS?e.Gestures.PointerEvent.getTouchList():t.touches?t.touches:(t.identifier=1,[t])},collectEventData:function(t,n,i,o){var r=e.Gestures.POINTER_TOUCH;return(o.type.match(/mouse/)||e.Gestures.PointerEvent.matchType(e.Gestures.POINTER_MOUSE,o))&&(r=e.Gestures.POINTER_MOUSE),{center:e.Gestures.utils.getCenter(i),timeStamp:(new Date).getTime(),target:o.target,touches:i,eventType:n,pointerType:r,srcEvent:o,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return e.Gestures.detection.stopDetect()}}}},e.Gestures.PointerEvent={pointers:{},getTouchList:function(){var e=this,t=[];return Object.keys(e.pointers).sort().forEach(function(n){t.push(e.pointers[n])}),t},updatePointer:function(t,n){return t==e.Gestures.EVENT_END?this.pointers={}:(n.identifier=n.pointerId,this.pointers[n.pointerId]=n),Object.keys(this.pointers).length},matchType:function(t,n){if(!n.pointerType)return!1;var i={};return i[e.Gestures.POINTER_MOUSE]=n.pointerType==n.MSPOINTER_TYPE_MOUSE||n.pointerType==e.Gestures.POINTER_MOUSE,i[e.Gestures.POINTER_TOUCH]=n.pointerType==n.MSPOINTER_TYPE_TOUCH||n.pointerType==e.Gestures.POINTER_TOUCH,i[e.Gestures.POINTER_PEN]=n.pointerType==n.MSPOINTER_TYPE_PEN||n.pointerType==e.Gestures.POINTER_PEN,i[t]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},e.Gestures.utils={extend:function(e,t,n){for(var i in t)void 0!==e[i]&&n||(e[i]=t[i]);return e},hasParent:function(e,t){for(;e;){if(e==t)return!0;e=e.parentNode}return!1},getCenter:function(e){for(var t=[],n=[],i=0,o=e.length;o>i;i++)t.push(e[i].pageX),n.push(e[i].pageY);return{pageX:(Math.min.apply(Math,t)+Math.max.apply(Math,t))/2,pageY:(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2}},getVelocity:function(e,t,n){return{x:Math.abs(t/e)||0,y:Math.abs(n/e)||0}},getAngle:function(e,t){var n=t.pageY-e.pageY,i=t.pageX-e.pageX;return 180*Math.atan2(n,i)/Math.PI},getDirection:function(t,n){var i=Math.abs(t.pageX-n.pageX),o=Math.abs(t.pageY-n.pageY);return i>=o?t.pageX-n.pageX>0?e.Gestures.DIRECTION_LEFT:e.Gestures.DIRECTION_RIGHT:t.pageY-n.pageY>0?e.Gestures.DIRECTION_UP:e.Gestures.DIRECTION_DOWN},getDistance:function(e,t){var n=t.pageX-e.pageX,i=t.pageY-e.pageY;return Math.sqrt(n*n+i*i)},getScale:function(e,t){return e.length>=2&&t.length>=2?this.getDistance(t[0],t[1])/this.getDistance(e[0],e[1]):1},getRotation:function(e,t){return e.length>=2&&t.length>=2?this.getAngle(t[1],t[0])-this.getAngle(e[1],e[0]):0},isVertical:function(t){return t==e.Gestures.DIRECTION_UP||t==e.Gestures.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(e,t){e&&e.classList&&(e.classList.add(t),e.onselectstart=function(){return!1})}},e.Gestures.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,n){this.current||(this.stopped=!1,this.current={inst:t,startEvent:e.Gestures.utils.extend({},n),lastEvent:!1,name:""},this.detect(n))},detect:function(t){if(!this.current||this.stopped)return null;t=this.extendEventData(t);for(var n=this.current.inst.options,i=0,o=this.gestures.length;o>i;i++){var r=this.gestures[i];if(!this.stopped&&n[r.name]!==!1&&r.handler.call(r,t,this.current.inst)===!1){this.stopDetect();break}}return this.current&&(this.current.lastEvent=t),t.eventType==e.Gestures.EVENT_END&&!t.touches.length-1&&this.stopDetect(),t},stopDetect:function(){this.previous=e.Gestures.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var n=this.current.startEvent;if(n&&(t.touches.length!=n.touches.length||t.touches===n.touches)){n.touches=[];for(var i=0,o=t.touches.length;o>i;i++)n.touches.push(e.Gestures.utils.extend({},t.touches[i]))}var r=t.timeStamp-n.timeStamp,s=t.center.pageX-n.center.pageX,a=t.center.pageY-n.center.pageY,l=e.Gestures.utils.getVelocity(r,s,a);return e.Gestures.utils.extend(t,{deltaTime:r,deltaX:s,deltaY:a,velocityX:l.x,velocityY:l.y,distance:e.Gestures.utils.getDistance(n.center,t.center),angle:e.Gestures.utils.getAngle(n.center,t.center),direction:e.Gestures.utils.getDirection(n.center,t.center),scale:e.Gestures.utils.getScale(n.touches,t.touches),rotation:e.Gestures.utils.getRotation(n.touches,t.touches),startEvent:n}),t},register:function(t){var n=t.defaults||{};return void 0===n[t.name]&&(n[t.name]=!0),e.Gestures.utils.extend(e.Gestures.defaults,n,!0),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(e,t){return e.index<t.index?-1:e.index>t.index?1:0}),this.gestures}},e.Gestures.gestures=e.Gestures.gestures||{},e.Gestures.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(t,n){switch(t.eventType){case e.Gestures.EVENT_START:clearTimeout(this.timer),e.Gestures.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==e.Gestures.detection.current.name&&(e.tap.cancelClick(),n.trigger("hold",t))},n.options.hold_timeout);break;case e.Gestures.EVENT_MOVE:t.distance>n.options.hold_threshold&&clearTimeout(this.timer);break;case e.Gestures.EVENT_END:clearTimeout(this.timer)}}},e.Gestures.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(t,n){if(t.eventType==e.Gestures.EVENT_END&&"touchcancel"!=t.srcEvent.type){var i=e.Gestures.detection.previous,o=!1;if(t.deltaTime>n.options.tap_max_touchtime||t.distance>n.options.tap_max_distance)return;i&&"tap"==i.name&&t.timeStamp-i.lastEvent.timeStamp<n.options.doubletap_interval&&t.distance<n.options.doubletap_distance&&(n.trigger("doubletap",t),o=!0),(!o||n.options.tap_always)&&(e.Gestures.detection.current.name="tap",n.trigger("tap",t))}}},e.Gestures.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.4},handler:function(t,n){if(t.eventType==e.Gestures.EVENT_END){if(n.options.swipe_max_touches>0&&t.touches.length>n.options.swipe_max_touches)return;(t.velocityX>n.options.swipe_velocity||t.velocityY>n.options.swipe_velocity)&&(n.trigger(this.name,t),n.trigger(this.name+t.direction,t))}}},e.Gestures.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,correct_for_drag_min_distance:!0,drag_max_touches:1,drag_block_horizontal:!0,drag_block_vertical:!0,drag_lock_to_axis:!1,drag_lock_min_distance:25,prevent_default_directions:[]},triggered:!1,handler:function(t,n){if("touchstart"==t.srcEvent.type||"touchend"==t.srcEvent.type?this.preventedFirstMove=!1:this.preventedFirstMove||"touchmove"!=t.srcEvent.type||(-1!=n.options.prevent_default_directions.indexOf(t.direction)&&t.srcEvent.preventDefault(),this.preventedFirstMove=!0),e.Gestures.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),void(this.triggered=!1);if(!(n.options.drag_max_touches>0&&t.touches.length>n.options.drag_max_touches))switch(t.eventType){case e.Gestures.EVENT_START:this.triggered=!1;break;case e.Gestures.EVENT_MOVE:if(t.distance<n.options.drag_min_distance&&e.Gestures.detection.current.name!=this.name)return;if(e.Gestures.detection.current.name!=this.name&&(e.Gestures.detection.current.name=this.name,n.options.correct_for_drag_min_distance)){var i=Math.abs(n.options.drag_min_distance/t.distance);e.Gestures.detection.current.startEvent.center.pageX+=t.deltaX*i,e.Gestures.detection.current.startEvent.center.pageY+=t.deltaY*i,t=e.Gestures.detection.extendEventData(t)}(e.Gestures.detection.current.lastEvent.drag_locked_to_axis||n.options.drag_lock_to_axis&&n.options.drag_lock_min_distance<=t.distance)&&(t.drag_locked_to_axis=!0);var o=e.Gestures.detection.current.lastEvent.direction;t.drag_locked_to_axis&&o!==t.direction&&(e.Gestures.utils.isVertical(o)?t.direction=t.deltaY<0?e.Gestures.DIRECTION_UP:e.Gestures.DIRECTION_DOWN:t.direction=t.deltaX<0?e.Gestures.DIRECTION_LEFT:e.Gestures.DIRECTION_RIGHT),this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),n.trigger(this.name+t.direction,t),(n.options.drag_block_vertical&&e.Gestures.utils.isVertical(t.direction)||n.options.drag_block_horizontal&&!e.Gestures.utils.isVertical(t.direction))&&t.preventDefault();break;case e.Gestures.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},e.Gestures.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,n){if(e.Gestures.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),void(this.triggered=!1);if(!(t.touches.length<2))switch(n.options.transform_always_block&&t.preventDefault(),t.eventType){case e.Gestures.EVENT_START:this.triggered=!1;break;case e.Gestures.EVENT_MOVE:var i=Math.abs(1-t.scale),o=Math.abs(t.rotation);if(i<n.options.transform_min_scale&&o<n.options.transform_min_rotation)return;e.Gestures.detection.current.name=this.name,this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),o>n.options.transform_min_rotation&&n.trigger("rotate",t),i>n.options.transform_min_scale&&(n.trigger("pinch",t),n.trigger("pinch"+(t.scale<1?"in":"out"),t));break;case e.Gestures.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},e.Gestures.gestures.Touch={name:"touch",index:-(1/0),defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(t,n){return n.options.prevent_mouseevents&&t.pointerType==e.Gestures.POINTER_MOUSE?void t.stopDetect():(n.options.prevent_default&&t.preventDefault(),void(t.eventType==e.Gestures.EVENT_START&&n.trigger(this.name,t)))}},e.Gestures.gestures.Release={name:"release",index:1/0,handler:function(t,n){t.eventType==e.Gestures.EVENT_END&&n.trigger(this.name,t)}}}(window.ionic),function(e,t,n){function i(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)"),n=t.exec(location.search);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))}function o(){d.isWebView()?t.addEventListener("deviceready",r,!1):r(),s&&e.removeEventListener("load",o,!1)}function r(){d.isReady=!0,d.detect();for(var e=0;e<f.length;e++)f[e]();f=[],n.trigger("platformready",{target:t}),u(function(){t.body.classList.add("platform-ready")})}var s,a="ios",l="android",c="windowsphone",u=n.requestAnimationFrame,d=n.Platform={navigator:e.navigator,isReady:!1,isFullScreen:!1,platforms:null,grade:null,ua:navigator.userAgent,ready:function(e){d.isReady?e():f.push(e)},detect:function(){d._checkPlatforms(),u(function(){for(var e=0;e<d.platforms.length;e++)t.body.classList.add("platform-"+d.platforms[e])})},setGrade:function(e){var n=d.grade;d.grade=e,u(function(){n&&t.body.classList.remove("grade-"+n),t.body.classList.add("grade-"+e)})},device:function(){return e.device||{}},_checkPlatforms:function(){d.platforms=[];var t="a";d.isWebView()?(d.platforms.push("webview"),e.cordova||e.PhoneGap||e.phonegap?d.platforms.push("cordova"):e.forge&&d.platforms.push("trigger")):d.platforms.push("browser"),d.isIPad()&&d.platforms.push("ipad");var n=d.platform();if(n){d.platforms.push(n);var i=d.version();if(i){var o=i.toString();o.indexOf(".")>0?o=o.replace(".","_"):o+="_0",d.platforms.push(n+o.split("_")[0]),d.platforms.push(n+o),d.isAndroid()&&4.4>i?t=4>i?"c":"b":d.isWindowsPhone()&&(t="b")}}d.setGrade(t)},isWebView:function(){return!!(e.cordova||e.PhoneGap||e.phonegap||e.forge)},isIPad:function(){return/iPad/i.test(d.navigator.platform)?!0:/iPad/i.test(d.ua)},isIOS:function(){return d.is(a)},isAndroid:function(){return d.is(l)},isWindowsPhone:function(){return d.is(c)},platform:function(){return null===_&&d.setPlatform(d.device().platform),_},setPlatform:function(e){_="undefined"!=typeof e&&null!==e&&e.length?e.toLowerCase():i("ionicplatform")?i("ionicplatform"):d.ua.indexOf("Android")>0?l:/iPhone|iPad|iPod/.test(d.ua)?a:d.ua.indexOf("Windows Phone")>-1?c:d.navigator.platform&&navigator.platform.toLowerCase().split(" ")[0]||""},version:function(){return null===h&&d.setVersion(d.device().version),h},setVersion:function(e){if("undefined"!=typeof e&&null!==e&&(e=e.split("."),e=parseFloat(e[0]+"."+(e.length>1?e[1]:0)),!isNaN(e)))return void(h=e);h=0;var t=d.platform(),n={android:/Android (\d+).(\d+)?/,ios:/OS (\d+)_(\d+)?/,windowsphone:/Windows Phone (\d+).(\d+)?/};n[t]&&(e=d.ua.match(n[t]),e&&e.length>2&&(h=parseFloat(e[1]+"."+e[2])))},is:function(e){if(e=e.toLowerCase(),d.platforms)for(var t=0;t<d.platforms.length;t++)if(d.platforms[t]===e)return!0;var n=d.platform();return n?n===e.toLowerCase():d.ua.toLowerCase().indexOf(e)>=0},exitApp:function(){d.ready(function(){navigator.app&&navigator.app.exitApp&&navigator.app.exitApp()})},showStatusBar:function(n){d._showStatusBar=n,d.ready(function(){u(function(){d._showStatusBar?(e.StatusBar&&e.StatusBar.show(),t.body.classList.remove("status-bar-hide")):(e.StatusBar&&e.StatusBar.hide(),t.body.classList.add("status-bar-hide"))})})},fullScreen:function(e,i){d.isFullScreen=e!==!1,n.DomUtil.ready(function(){u(function(){d.isFullScreen?t.body.classList.add("fullscreen"):t.body.classList.remove("fullscreen")}),d.showStatusBar(i===!0)})}},_=null,h=null,f=[];"complete"===t.readyState?o():(s=!0,e.addEventListener("load",o,!1))}(this,document,ionic),function(e,t){"use strict";t.CSS={},function(){var n,i=["webkitTransform","transform","-webkit-transform","webkit-transform","-moz-transform","moz-transform","MozTransform","mozTransform","msTransform"];for(n=0;n<i.length;n++)if(void 0!==e.documentElement.style[i[n]]){t.CSS.TRANSFORM=i[n];break}for(i=["webkitTransition","mozTransition","msTransition","transition"],n=0;n<i.length;n++)if(void 0!==e.documentElement.style[i[n]]){t.CSS.TRANSITION=i[n];break}var o=t.CSS.TRANSITION.indexOf("webkit")>-1;t.CSS.TRANSITION_DURATION=(o?"-webkit-":"")+"transition-duration",t.CSS.TRANSITIONEND=(o?"webkitTransitionEnd ":"")+"transitionend"}(),"classList"in e.documentElement||!Object.defineProperty||"undefined"==typeof HTMLElement||Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){function e(e){return function(){var n,i=t.className.split(/\s+/);for(n=0;n<arguments.length;n++)e(i,i.indexOf(arguments[n]),arguments[n]);t.className=i.join(" ")}}var t=this;return{add:e(function(e,t,n){~t||e.push(n)}),remove:e(function(e,t){~t&&e.splice(t,1)}),toggle:e(function(e,t,n){~t?e.splice(t,1):e.push(n)}),contains:function(e){return!!~t.className.split(/\s+/).indexOf(e)},item:function(e){return t.className.split(/\s+/)[e]||null}}}})}(document,ionic);var Y,X,W,$,U,q,B,K,Z="touchmove",j=12,J=50,Q={
click:i,mousedown:o,mouseup:r,mousemove:s,touchstart:a,touchend:l,touchcancel:u,touchmove:c,pointerdown:a,pointerup:l,pointercancel:u,pointermove:c,MSPointerDown:a,MSPointerUp:l,MSPointerCancel:u,MSPointerMove:c,focusin:p,focusout:m};ionic.tap={register:function(t){return Y=t,e("click",!0,!0),e("mouseup"),e("mousedown"),window.navigator.pointerEnabled?(e("pointerdown"),e("pointerup"),e("pointcancel"),Z="pointermove"):window.navigator.msPointerEnabled?(e("MSPointerDown"),e("MSPointerUp"),e("MSPointerCancel"),Z="MSPointerMove"):(e("touchstart"),e("touchend"),e("touchcancel")),e("focusin"),e("focusout"),function(){for(var t in Q)e(t,!1);Y=null,X=null,W=!1,U=!1,q=null}},ignoreScrollStart:function(e){return e.defaultPrevented||/^(file|range)$/i.test(e.target.type)||"true"==(e.target.dataset?e.target.dataset.preventScroll:e.target.getAttribute("data-prevent-scroll"))||!!/^(object|embed)$/i.test(e.target.tagName)||ionic.tap.isElementTapDisabled(e.target)},isTextInput:function(e){return!!e&&("TEXTAREA"==e.tagName||"true"===e.contentEditable||"INPUT"==e.tagName&&!/^(radio|checkbox|range|file|submit|reset|color|image|button)$/i.test(e.type))},isDateInput:function(e){return!!e&&"INPUT"==e.tagName&&/^(date|time|datetime-local|month|week)$/i.test(e.type)},isKeyboardElement:function(e){return!ionic.Platform.isIOS()||ionic.Platform.isIPad()?ionic.tap.isTextInput(e)&&!ionic.tap.isDateInput(e):ionic.tap.isTextInput(e)||!!e&&"SELECT"==e.tagName},isLabelWithTextInput:function(e){var t=T(e,!1);return!!t&&ionic.tap.isTextInput(E(t))},containsOrIsTextInput:function(e){return ionic.tap.isTextInput(e)||ionic.tap.isLabelWithTextInput(e)},cloneFocusedInput:function(e){ionic.tap.hasCheckedClone||(ionic.tap.hasCheckedClone=!0,ionic.requestAnimationFrame(function(){var t=e.querySelector(":focus");if(ionic.tap.isTextInput(t)){var n=t.cloneNode(!0);n.value=t.value,n.classList.add("cloned-text-input"),n.readOnly=!0,t.isContentEditable&&(n.contentEditable=t.contentEditable,n.innerHTML=t.innerHTML),t.parentElement.insertBefore(n,t),t.classList.add("previous-input-focus"),n.scrollTop=t.scrollTop}}))},hasCheckedClone:!1,removeClonedInputs:function(e){ionic.tap.hasCheckedClone=!1,ionic.requestAnimationFrame(function(){var t,n=e.querySelectorAll(".cloned-text-input"),i=e.querySelectorAll(".previous-input-focus");for(t=0;t<n.length;t++)n[t].parentElement.removeChild(n[t]);for(t=0;t<i.length;t++)i[t].classList.remove("previous-input-focus"),i[t].style.top="",ionic.keyboard.isOpen&&!ionic.keyboard.isClosing&&i[t].focus()})},requiresNativeClick:function(e){return!e||e.disabled||/^(file|range)$/i.test(e.type)||/^(object|video)$/i.test(e.tagName)||ionic.tap.isLabelContainingFileInput(e)?!0:ionic.tap.isElementTapDisabled(e)},isLabelContainingFileInput:function(e){var t=T(e);if("LABEL"!==t.tagName)return!1;var n=t.querySelector("input[type=file]");return n&&n.disabled===!1?!0:!1},isElementTapDisabled:function(e){if(e&&1===e.nodeType)for(var t=e;t;){if("true"==(t.dataset?t.dataset.tapDisabled:t.getAttribute("data-tap-disabled")))return!0;t=t.parentElement}return!1},setTolerance:function(e,t){j=e,J=t},cancelClick:function(){U=!0},pointerCoord:function(e){var t={x:0,y:0};if(e){var n=e.touches&&e.touches.length?e.touches:[e],i=e.changedTouches&&e.changedTouches[0]||n[0];i&&(t.x=i.clientX||i.pageX||0,t.y=i.clientY||i.pageY||0)}return t}},ionic.DomUtil.ready(function(){var e="undefined"!=typeof angular?angular:null;(!e||e&&!e.scenario)&&ionic.tap.register(document)}),function(e,t){"use strict";function n(){r={},t.requestAnimationFrame(o)}function i(){for(var e in r)r[e]&&(r[e].classList.add(l),s[e]=r[e]);r={}}function o(){if(t.transition&&t.transition.isActive)return void setTimeout(o,400);for(var e in s)s[e]&&(s[e].classList.remove(l),delete s[e])}var r={},s={},a=0,l="activated";t.activator={start:function(e){var n=t.tap.pointerCoord(e).x;n>0&&30>n||t.requestAnimationFrame(function(){if(!(t.scroll&&t.scroll.isScrolling||t.tap.requiresNativeClick(e.target))){for(var n,o=e.target,s=0;6>s&&(o&&1===o.nodeType);s++){if(n&&o.classList&&o.classList.contains("item")){n=o;break}if("A"==o.tagName||"BUTTON"==o.tagName||o.hasAttribute("ng-click")){n=o;break}if(o.classList.contains("button")){n=o;break}if("ION-CONTENT"==o.tagName||o.classList&&o.classList.contains("pane")||"BODY"==o.tagName)break;o=o.parentElement}n&&(r[a]=n,t.requestAnimationFrame(i),a=a>29?0:a+1)}})},end:function(){setTimeout(n,200)}}}(document,ionic),function(e){var t=0;e.Utils={arrayMove:function(e,t,n){if(n>=e.length)for(var i=n-e.length;i--+1;)e.push(void 0);return e.splice(n,0,e.splice(t,1)[0]),e},proxy:function(e,t){var n=Array.prototype.slice.call(arguments,2);return function(){return e.apply(t,n.concat(Array.prototype.slice.call(arguments)))}},debounce:function(e,t,n){var i,o,r,s,a;return function(){r=this,o=arguments,s=new Date;var l=function(){var c=new Date-s;t>c?i=setTimeout(l,t-c):(i=null,n||(a=e.apply(r,o)))},c=n&&!i;return i||(i=setTimeout(l,t)),c&&(a=e.apply(r,o)),a}},throttle:function(e,t,n){var i,o,r,s=null,a=0;n||(n={});var l=function(){a=n.leading===!1?0:Date.now(),s=null,r=e.apply(i,o)};return function(){var c=Date.now();a||n.leading!==!1||(a=c);var u=t-(c-a);return i=this,o=arguments,0>=u?(clearTimeout(s),s=null,a=c,r=e.apply(i,o)):s||n.trailing===!1||(s=setTimeout(l,u)),r}},inherit:function(t,n){var i,o=this;i=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return o.apply(this,arguments)},e.extend(i,o,n);var r=function(){this.constructor=i};return r.prototype=o.prototype,i.prototype=new r,t&&e.extend(i.prototype,t),i.__super__=o.prototype,i},extend:function(e){for(var t=Array.prototype.slice.call(arguments,1),n=0;n<t.length;n++){var i=t[n];if(i)for(var o in i)e[o]=i[o]}return e},nextUid:function(){return"ion"+t++},disconnectScope:function(e){if(e&&e.$root!==e){var t=e.$parent;e.$$disconnected=!0,e.$broadcast("$ionic.disconnectScope",e),t.$$childHead===e&&(t.$$childHead=e.$$nextSibling),t.$$childTail===e&&(t.$$childTail=e.$$prevSibling),e.$$prevSibling&&(e.$$prevSibling.$$nextSibling=e.$$nextSibling),e.$$nextSibling&&(e.$$nextSibling.$$prevSibling=e.$$prevSibling),e.$$nextSibling=e.$$prevSibling=null}},reconnectScope:function(e){if(e&&e.$root!==e&&e.$$disconnected){var t=e.$parent;e.$$disconnected=!1,e.$broadcast("$ionic.reconnectScope",e),e.$$prevSibling=t.$$childTail,t.$$childHead?(t.$$childTail.$$nextSibling=e,t.$$childTail=e):t.$$childHead=t.$$childTail=e}},isScopeDisconnected:function(e){for(var t=e;t;){if(t.$$disconnected)return!0;t=t.$parent}return!1}},e.inherit=e.Utils.inherit,e.extend=e.Utils.extend,e.throttle=e.Utils.throttle,e.proxy=e.Utils.proxy,e.debounce=e.Utils.debounce}(window.ionic);var ee,te,ne,ie,oe=0,re=0,se=0,ae=!1,le="keyboard-open",ce="scroll-content",ue=ionic.debounce(w,200,!0),de=ionic.debounce(b,100,!0);ionic.keyboard={isOpen:!1,isClosing:!1,isOpening:!1,height:0,isLandscape:!1,isInitialized:!1,hide:function(){R()&&cordova.plugins.Keyboard.close(),ee&&ee.blur()},show:function(){R()&&cordova.plugins.Keyboard.show()},disable:function(){R()?(window.removeEventListener("native.keyboardshow",de),window.removeEventListener("native.keyboardhide",y)):document.body.removeEventListener("focusout",y),document.body.removeEventListener("ionic.focusin",ue),document.body.removeEventListener("focusin",ue),window.removeEventListener("orientationchange",D),window.navigator.msPointerEnabled?document.removeEventListener("MSPointerDown",S):document.removeEventListener("touchstart",S),ionic.keyboard.isInitialized=!1},enable:function(){S()}},oe=k(),ionic.Platform.ready(function(){G(),window.addEventListener("orientationchange",D),setTimeout(G,999),window.navigator.msPointerEnabled?document.addEventListener("MSPointerDown",S,!1):document.addEventListener("touchstart",S,!1)});var _e,he={};ionic.viewport={orientation:function(){return window.innerWidth>window.innerHeight?90:0}},ionic.Platform.ready(function(){z(),window.addEventListener("orientationchange",function(){setTimeout(H,1e3)},!1)}),function(e){"use strict";e.views.View=function(){this.initialize.apply(this,arguments)},e.views.View.inherit=e.inherit,e.extend(e.views.View.prototype,{initialize:function(){}})}(window.ionic);var fe={effect:{}};!function(e){var t=Date.now||function(){return+new Date},n=60,i=1e3,o={},r=1;fe.effect.Animate={requestAnimationFrame:function(){var t=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame,n=!!t;if(t&&!/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(t.toString())&&(n=!1),n)return function(e,n){t(e,n)};var i=60,o={},r=0,s=1,a=null,l=+new Date;return function(e){var t=s++;return o[t]=e,r++,null===a&&(a=setInterval(function(){var e=+new Date,t=o;o={},r=0;for(var n in t)t.hasOwnProperty(n)&&(t[n](e),l=e);e-l>2500&&(clearInterval(a),a=null)},1e3/i)),t}}(),stop:function(e){var t=null!=o[e];return t&&(o[e]=null),t},isRunning:function(e){return null!=o[e]},start:function(e,s,a,l,c,u){var d=t(),_=d,h=0,f=0,p=r++;if(u||(u=document.body),p%20===0){var m={};for(var g in o)m[g]=!0;o=m}var v=function(r){var m=r!==!0,g=t();if(!o[p]||s&&!s(p))return o[p]=null,void(a&&a(n-f/((g-d)/i),p,!1));if(m)for(var T=Math.round((g-_)/(i/n))-1,E=0;E<Math.min(T,4);E++)v(!0),f++;l&&(h=(g-d)/l,h>1&&(h=1));var S=c?c(h):h;e(S,g,m)!==!1&&1!==h||!m?m&&(_=g,fe.effect.Animate.requestAnimationFrame(v,u)):(o[p]=null,a&&a(n-f/((g-d)/i),p,1===h||null==l))};return o[p]=!0,fe.effect.Animate.requestAnimationFrame(v,u),p}}}(this),function(e){var t=function(){},n=function(e){return Math.pow(e-1,3)+1},i=function(e){return(e/=.5)<1?.5*Math.pow(e,3):.5*(Math.pow(e-2,3)+2)};e.views.Scroll=e.views.View.inherit({initialize:function(n){var i=this;i.__container=n.el,i.__content=n.el.firstElementChild,setTimeout(function(){i.__container&&i.__content&&(i.__container.scrollTop=0,i.__content.scrollTop=0)}),i.options={scrollingX:!1,scrollbarX:!0,scrollingY:!0,scrollbarY:!0,startX:0,startY:0,wheelDampen:6,minScrollbarSizeX:5,minScrollbarSizeY:5,scrollbarsFade:!0,scrollbarFadeDelay:300,scrollbarResizeFadeDelay:1e3,animating:!0,animationDuration:250,decelVelocityThreshold:4,decelVelocityThresholdPaging:4,bouncing:!0,locking:!0,paging:!1,snapping:!1,zooming:!1,minZoom:.5,maxZoom:3,speedMultiplier:1,deceleration:.97,preventDefault:!1,scrollingComplete:t,penetrationDeceleration:.03,penetrationAcceleration:.08,scrollEventInterval:10,freeze:!1,getContentWidth:function(){return Math.max(i.__content.scrollWidth,i.__content.offsetWidth)},getContentHeight:function(){return Math.max(i.__content.scrollHeight,i.__content.offsetHeight+2*i.__content.offsetTop)}};for(var o in n)i.options[o]=n[o];i.hintResize=e.debounce(function(){i.resize()},1e3,!0),i.onScroll=function(){e.scroll.isScrolling?(clearTimeout(i.scrollTimer),i.scrollTimer=setTimeout(i.setScrollStop,80)):setTimeout(i.setScrollStart,50)},i.freeze=function(e){return arguments.length&&(i.options.freeze=e),i.options.freeze},i.setScrollStart=function(){e.scroll.isScrolling=Math.abs(e.scroll.lastTop-i.__scrollTop)>1,clearTimeout(i.scrollTimer),i.scrollTimer=setTimeout(i.setScrollStop,80)},i.setScrollStop=function(){e.scroll.isScrolling=!1,e.scroll.lastTop=i.__scrollTop},i.triggerScrollEvent=e.throttle(function(){i.onScroll(),e.trigger("scroll",{scrollTop:i.__scrollTop,scrollLeft:i.__scrollLeft,target:i.__container})},i.options.scrollEventInterval),i.triggerScrollEndEvent=function(){e.trigger("scrollend",{scrollTop:i.__scrollTop,scrollLeft:i.__scrollLeft,target:i.__container})},i.__scrollLeft=i.options.startX,i.__scrollTop=i.options.startY,i.__callback=i.getRenderFn(),i.__initEventHandlers(),i.__createScrollbars()},run:function(){this.resize(),this.__fadeScrollbars("out",this.options.scrollbarResizeFadeDelay)},__isSingleTouch:!1,__isTracking:!1,__didDecelerationComplete:!1,__isGesturing:!1,__isDragging:!1,__isDecelerating:!1,__isAnimating:!1,__clientLeft:0,__clientTop:0,__clientWidth:0,__clientHeight:0,__contentWidth:0,__contentHeight:0,__snapWidth:100,__snapHeight:100,__refreshHeight:null,__refreshActive:!1,__refreshActivate:null,__refreshDeactivate:null,__refreshStart:null,__zoomLevel:1,__scrollLeft:0,__scrollTop:0,__maxScrollLeft:0,__maxScrollTop:0,__scheduledLeft:0,__scheduledTop:0,__scheduledZoom:0,__lastTouchLeft:null,__lastTouchTop:null,__lastTouchMove:null,__positions:null,__minDecelerationScrollLeft:null,__minDecelerationScrollTop:null,__maxDecelerationScrollLeft:null,__maxDecelerationScrollTop:null,__decelerationVelocityX:null,__decelerationVelocityY:null,__transformProperty:null,__perspectiveProperty:null,__indicatorX:null,__indicatorY:null,__scrollbarFadeTimeout:null,__didWaitForSize:null,__sizerTimeout:null,__initEventHandlers:function(){function t(e){return e.touches&&e.touches.length?e.touches:[{pageX:e.pageX,pageY:e.pageY}]}var n,i=this,o=i.__container;if(i.scrollChildIntoView=function(t){var r=o.getBoundingClientRect().bottom;n=o.offsetHeight;var s=i.isShrunkForKeyboard,a=o.parentNode.classList.contains("modal"),l=a&&window.innerWidth>=680;if(!s){if(e.Platform.isIOS()||e.Platform.isFullScreen||l){var c=t.detail.viewportHeight-r,u=Math.max(0,t.detail.keyboardHeight-c);e.requestAnimationFrame(function(){n-=u,o.style.height=n+"px",o.style.overflow="visible",i.resize()})}i.isShrunkForKeyboard=!0}t.detail.isElementUnderKeyboard&&e.requestAnimationFrame(function(){o.scrollTop=0,i.isShrunkForKeyboard&&!s&&(r=o.getBoundingClientRect().bottom);var a=.5*n,l=(t.detail.elementBottom+t.detail.elementTop)/2,c=l-r,u=c+a;u>0&&(e.Platform.isIOS()&&e.tap.cloneFocusedInput(o,i),i.scrollBy(0,u,!0),i.onScroll())}),t.stopPropagation()},i.resetScrollView=function(){i.isShrunkForKeyboard&&(i.isShrunkForKeyboard=!1,o.style.height="",o.style.overflow=""),i.resize()},o.addEventListener("scrollChildIntoView",i.scrollChildIntoView),document.addEventListener("resetScrollView",i.resetScrollView),i.touchStart=function(n){if(i.startCoordinates=e.tap.pointerCoord(n),!e.tap.ignoreScrollStart(n)){if(i.__isDown=!0,e.tap.containsOrIsTextInput(n.target)||"SELECT"===n.target.tagName)return void(i.__hasStarted=!1);i.__isSelectable=!0,i.__enableScrollY=!0,i.__hasStarted=!0,i.doTouchStart(t(n),n.timeStamp),n.preventDefault()}},i.touchMove=function(n){if(!(i.options.freeze||!i.__isDown||!i.__isDown&&n.defaultPrevented||"TEXTAREA"===n.target.tagName&&n.target.parentElement.querySelector(":focus"))){if(!i.__hasStarted&&(e.tap.containsOrIsTextInput(n.target)||"SELECT"===n.target.tagName))return i.__hasStarted=!0,i.doTouchStart(t(n),n.timeStamp),void n.preventDefault();if(i.startCoordinates){var r=e.tap.pointerCoord(n);i.__isSelectable&&e.tap.isTextInput(n.target)&&Math.abs(i.startCoordinates.x-r.x)>20&&(i.__enableScrollY=!1,i.__isSelectable=!0),i.__enableScrollY&&Math.abs(i.startCoordinates.y-r.y)>10&&(i.__isSelectable=!1,e.tap.cloneFocusedInput(o,i))}i.doTouchMove(t(n),n.timeStamp,n.scale),i.__isDown=!0}},i.touchMoveBubble=function(e){i.__isDown&&i.options.preventDefault&&e.preventDefault()},i.touchEnd=function(t){i.__isDown&&(i.doTouchEnd(t,t.timeStamp),i.__isDown=!1,i.__hasStarted=!1,i.__isSelectable=!0,i.__enableScrollY=!0,i.__isDragging||i.__isDecelerating||i.__isAnimating||e.tap.removeClonedInputs(o,i))},i.mouseWheel=e.animationFrameThrottle(function(t){var n=e.DomUtil.getParentOrSelfWithClass(t.target,"ionic-scroll");i.options.freeze||n!==i.__container||(i.hintResize(),i.scrollBy((t.wheelDeltaX||t.deltaX||0)/i.options.wheelDampen,(-t.wheelDeltaY||t.deltaY||0)/i.options.wheelDampen),i.__fadeScrollbars("in"),clearTimeout(i.__wheelHideBarTimeout),i.__wheelHideBarTimeout=setTimeout(function(){i.__fadeScrollbars("out")},100))}),"ontouchstart"in window)o.addEventListener("touchstart",i.touchStart,!1),i.options.preventDefault&&o.addEventListener("touchmove",i.touchMoveBubble,!1),document.addEventListener("touchmove",i.touchMove,!1),document.addEventListener("touchend",i.touchEnd,!1),document.addEventListener("touchcancel",i.touchEnd,!1);else if(window.navigator.pointerEnabled)o.addEventListener("pointerdown",i.touchStart,!1),i.options.preventDefault&&o.addEventListener("pointermove",i.touchMoveBubble,!1),document.addEventListener("pointermove",i.touchMove,!1),document.addEventListener("pointerup",i.touchEnd,!1),document.addEventListener("pointercancel",i.touchEnd,!1),document.addEventListener("wheel",i.mouseWheel,!1);else if(window.navigator.msPointerEnabled)o.addEventListener("MSPointerDown",i.touchStart,!1),i.options.preventDefault&&o.addEventListener("MSPointerMove",i.touchMoveBubble,!1),document.addEventListener("MSPointerMove",i.touchMove,!1),document.addEventListener("MSPointerUp",i.touchEnd,!1),document.addEventListener("MSPointerCancel",i.touchEnd,!1),document.addEventListener("wheel",i.mouseWheel,!1);else{var r=!1;i.mouseDown=function(n){e.tap.ignoreScrollStart(n)||"SELECT"===n.target.tagName||(i.doTouchStart(t(n),n.timeStamp),e.tap.isTextInput(n.target)||n.preventDefault(),r=!0)},i.mouseMove=function(e){i.options.freeze||!r||!r&&e.defaultPrevented||(i.doTouchMove(t(e),e.timeStamp),r=!0)},i.mouseMoveBubble=function(e){r&&i.options.preventDefault&&e.preventDefault()},i.mouseUp=function(e){r&&(i.doTouchEnd(e,e.timeStamp),r=!1)},o.addEventListener("mousedown",i.mouseDown,!1),i.options.preventDefault&&o.addEventListener("mousemove",i.mouseMoveBubble,!1),document.addEventListener("mousemove",i.mouseMove,!1),document.addEventListener("mouseup",i.mouseUp,!1),document.addEventListener("mousewheel",i.mouseWheel,!1),document.addEventListener("wheel",i.mouseWheel,!1)}},__cleanup:function(){var n=this,i=n.__container;i.removeEventListener("touchstart",n.touchStart),i.removeEventListener("touchmove",n.touchMoveBubble),document.removeEventListener("touchmove",n.touchMove),document.removeEventListener("touchend",n.touchEnd),document.removeEventListener("touchcancel",n.touchCancel),i.removeEventListener("pointerdown",n.touchStart),i.removeEventListener("pointermove",n.touchMoveBubble),document.removeEventListener("pointermove",n.touchMove),document.removeEventListener("pointerup",n.touchEnd),document.removeEventListener("pointercancel",n.touchEnd),i.removeEventListener("MSPointerDown",n.touchStart),i.removeEventListener("MSPointerMove",n.touchMoveBubble),document.removeEventListener("MSPointerMove",n.touchMove),document.removeEventListener("MSPointerUp",n.touchEnd),document.removeEventListener("MSPointerCancel",n.touchEnd),i.removeEventListener("mousedown",n.mouseDown),i.removeEventListener("mousemove",n.mouseMoveBubble),document.removeEventListener("mousemove",n.mouseMove),document.removeEventListener("mouseup",n.mouseUp),document.removeEventListener("mousewheel",n.mouseWheel),document.removeEventListener("wheel",n.mouseWheel),i.removeEventListener("scrollChildIntoView",n.scrollChildIntoView),document.removeEventListener("resetScrollView",n.resetScrollView),e.tap.removeClonedInputs(i,n),delete n.__container,delete n.__content,delete n.__indicatorX,delete n.__indicatorY,delete n.options.el,n.__callback=n.scrollChildIntoView=n.resetScrollView=t,n.mouseMove=n.mouseDown=n.mouseUp=n.mouseWheel=n.touchStart=n.touchMove=n.touchEnd=n.touchCancel=t,n.resize=n.scrollTo=n.zoomTo=n.__scrollingComplete=t,i=null},__createScrollbar:function(e){var t=document.createElement("div"),n=document.createElement("div");return n.className="scroll-bar-indicator scroll-bar-fade-out","h"==e?t.className="scroll-bar scroll-bar-h":t.className="scroll-bar scroll-bar-v",t.appendChild(n),t},__createScrollbars:function(){var e,t,n=this;n.options.scrollingX&&(e={el:n.__createScrollbar("h"),sizeRatio:1},e.indicator=e.el.children[0],n.options.scrollbarX&&n.__container.appendChild(e.el),n.__indicatorX=e),n.options.scrollingY&&(t={el:n.__createScrollbar("v"),sizeRatio:1},t.indicator=t.el.children[0],n.options.scrollbarY&&n.__container.appendChild(t.el),n.__indicatorY=t)},__resizeScrollbars:function(){var t=this;if(t.__indicatorX){var n=Math.max(Math.round(t.__clientWidth*t.__clientWidth/t.__contentWidth),20);n>t.__contentWidth&&(n=0),n!==t.__indicatorX.size&&e.requestAnimationFrame(function(){t.__indicatorX.indicator.style.width=n+"px"}),t.__indicatorX.size=n,t.__indicatorX.minScale=t.options.minScrollbarSizeX/n,t.__indicatorX.maxPos=t.__clientWidth-n,t.__indicatorX.sizeRatio=t.__maxScrollLeft?t.__indicatorX.maxPos/t.__maxScrollLeft:1}if(t.__indicatorY){var i=Math.max(Math.round(t.__clientHeight*t.__clientHeight/t.__contentHeight),20);i>t.__contentHeight&&(i=0),i!==t.__indicatorY.size&&e.requestAnimationFrame(function(){t.__indicatorY&&(t.__indicatorY.indicator.style.height=i+"px")}),t.__indicatorY.size=i,t.__indicatorY.minScale=t.options.minScrollbarSizeY/i,t.__indicatorY.maxPos=t.__clientHeight-i,t.__indicatorY.sizeRatio=t.__maxScrollTop?t.__indicatorY.maxPos/t.__maxScrollTop:1}},__repositionScrollbars:function(){var e,t,n,i,o,r,s=this,a=0,l=0;if(s.__indicatorX){s.__indicatorY&&(a=10),o=Math.round(s.__indicatorX.sizeRatio*s.__scrollLeft)||0,n=s.__scrollLeft-(s.__maxScrollLeft-a),s.__scrollLeft<0?(t=Math.max(s.__indicatorX.minScale,(s.__indicatorX.size-Math.abs(s.__scrollLeft))/s.__indicatorX.size),o=0,s.__indicatorX.indicator.style[s.__transformOriginProperty]="left center"):n>0?(t=Math.max(s.__indicatorX.minScale,(s.__indicatorX.size-n)/s.__indicatorX.size),o=s.__indicatorX.maxPos-a,s.__indicatorX.indicator.style[s.__transformOriginProperty]="right center"):(o=Math.min(s.__maxScrollLeft,Math.max(0,o)),t=1);var c="translate3d("+o+"px, 0, 0) scaleX("+t+")";s.__indicatorX.transformProp!==c&&(s.__indicatorX.indicator.style[s.__transformProperty]=c,s.__indicatorX.transformProp=c)}if(s.__indicatorY){r=Math.round(s.__indicatorY.sizeRatio*s.__scrollTop)||0,s.__indicatorX&&(l=10),i=s.__scrollTop-(s.__maxScrollTop-l),s.__scrollTop<0?(e=Math.max(s.__indicatorY.minScale,(s.__indicatorY.size-Math.abs(s.__scrollTop))/s.__indicatorY.size),r=0,"center top"!==s.__indicatorY.originProp&&(s.__indicatorY.indicator.style[s.__transformOriginProperty]="center top",s.__indicatorY.originProp="center top")):i>0?(e=Math.max(s.__indicatorY.minScale,(s.__indicatorY.size-i)/s.__indicatorY.size),r=s.__indicatorY.maxPos-l,"center bottom"!==s.__indicatorY.originProp&&(s.__indicatorY.indicator.style[s.__transformOriginProperty]="center bottom",s.__indicatorY.originProp="center bottom")):(r=Math.min(s.__maxScrollTop,Math.max(0,r)),e=1);var u="translate3d(0,"+r+"px, 0) scaleY("+e+")";s.__indicatorY.transformProp!==u&&(s.__indicatorY.indicator.style[s.__transformProperty]=u,s.__indicatorY.transformProp=u)}},__fadeScrollbars:function(e,t){var n=this;if(n.options.scrollbarsFade){var i="scroll-bar-fade-out";n.options.scrollbarsFade===!0&&(clearTimeout(n.__scrollbarFadeTimeout),"in"==e?(n.__indicatorX&&n.__indicatorX.indicator.classList.remove(i),n.__indicatorY&&n.__indicatorY.indicator.classList.remove(i)):n.__scrollbarFadeTimeout=setTimeout(function(){n.__indicatorX&&n.__indicatorX.indicator.classList.add(i),n.__indicatorY&&n.__indicatorY.indicator.classList.add(i)},t||n.options.scrollbarFadeDelay))}},__scrollingComplete:function(){this.options.scrollingComplete(),e.tap.removeClonedInputs(this.__container,this),this.__fadeScrollbars("out")},resize:function(e){var t=this;t.__container&&t.options&&t.setDimensions(t.__container.clientWidth,t.__container.clientHeight,t.options.getContentWidth(),t.options.getContentHeight(),e)},getRenderFn:function(){var e,t=this,n=t.__content,i=document.documentElement.style;"MozAppearance"in i?e="gecko":"WebkitAppearance"in i?e="webkit":"string"==typeof navigator.cpuClass&&(e="trident");var o,r={trident:"ms",gecko:"Moz",webkit:"Webkit",presto:"O"}[e],s=document.createElement("div"),a=r+"Perspective",l=r+"Transform",c=r+"TransformOrigin";return t.__perspectiveProperty=l,t.__transformProperty=l,t.__transformOriginProperty=c,s.style[a]!==o?function(e,i,o,r){var s="translate3d("+-e+"px,"+-i+"px,0) scale("+o+")";s!==t.contentTransform&&(n.style[l]=s,t.contentTransform=s),t.__repositionScrollbars(),r||t.triggerScrollEvent()}:s.style[l]!==o?function(e,i,o,r){n.style[l]="translate("+-e+"px,"+-i+"px) scale("+o+")",t.__repositionScrollbars(),r||t.triggerScrollEvent()}:function(e,i,o,r){n.style.marginLeft=e?-e/o+"px":"",n.style.marginTop=i?-i/o+"px":"",n.style.zoom=o||"",t.__repositionScrollbars(),r||t.triggerScrollEvent()}},setDimensions:function(e,t,n,i,o){var r=this;(e||t||n||i)&&(e===+e&&(r.__clientWidth=e),t===+t&&(r.__clientHeight=t),n===+n&&(r.__contentWidth=n),i===+i&&(r.__contentHeight=i),r.__computeScrollMax(),r.__resizeScrollbars(),o||r.scrollTo(r.__scrollLeft,r.__scrollTop,!0,null,!0))},setPosition:function(e,t){this.__clientLeft=e||0,this.__clientTop=t||0},setSnapSize:function(e,t){this.__snapWidth=e,this.__snapHeight=t},activatePullToRefresh:function(t,n){var i=this;i.__refreshHeight=t,i.__refreshActivate=function(){e.requestAnimationFrame(n.activate)},i.__refreshDeactivate=function(){e.requestAnimationFrame(n.deactivate)},i.__refreshStart=function(){e.requestAnimationFrame(n.start)},i.__refreshShow=function(){e.requestAnimationFrame(n.show)},i.__refreshHide=function(){e.requestAnimationFrame(n.hide)},i.__refreshTail=function(){e.requestAnimationFrame(n.tail)},i.__refreshTailTime=100,i.__minSpinTime=600},triggerPullToRefresh:function(){this.__publish(this.__scrollLeft,-this.__refreshHeight,this.__zoomLevel,!0);var e=new Date;this.refreshStartTime=e.getTime(),this.__refreshStart&&this.__refreshStart()},finishPullToRefresh:function(){var e=this,t=new Date,n=0;e.refreshStartTime+e.__minSpinTime>t.getTime()&&(n=e.refreshStartTime+e.__minSpinTime-t.getTime()),setTimeout(function(){e.__refreshTail&&e.__refreshTail(),setTimeout(function(){e.__refreshActive=!1,e.__refreshDeactivate&&e.__refreshDeactivate(),e.__refreshHide&&e.__refreshHide(),e.scrollTo(e.__scrollLeft,e.__scrollTop,!0)},e.__refreshTailTime)},n)},getValues:function(){return{left:this.__scrollLeft,top:this.__scrollTop,zoom:this.__zoomLevel}},getScrollMax:function(){return{left:this.__maxScrollLeft,top:this.__maxScrollTop}},zoomTo:function(e,t,n,i){var o=this;if(!o.options.zooming)throw new Error("Zooming is not enabled!");o.__isDecelerating&&(fe.effect.Animate.stop(o.__isDecelerating),o.__isDecelerating=!1);var r=o.__zoomLevel;null==n&&(n=o.__clientWidth/2),null==i&&(i=o.__clientHeight/2),e=Math.max(Math.min(e,o.options.maxZoom),o.options.minZoom),o.__computeScrollMax(e);var s=(n+o.__scrollLeft)*e/r-n,a=(i+o.__scrollTop)*e/r-i;s>o.__maxScrollLeft?s=o.__maxScrollLeft:0>s&&(s=0),a>o.__maxScrollTop?a=o.__maxScrollTop:0>a&&(a=0),o.__publish(s,a,e,t)},zoomBy:function(e,t,n,i){this.zoomTo(this.__zoomLevel*e,t,n,i)},scrollTo:function(e,t,n,i,o){var r=this;if(r.__isDecelerating&&(fe.effect.Animate.stop(r.__isDecelerating),r.__isDecelerating=!1),null!=i&&i!==r.__zoomLevel){if(!r.options.zooming)throw new Error("Zooming is not enabled!");e*=i,t*=i,r.__computeScrollMax(i)}else i=r.__zoomLevel;r.options.scrollingX?r.options.paging?e=Math.round(e/r.__clientWidth)*r.__clientWidth:r.options.snapping&&(e=Math.round(e/r.__snapWidth)*r.__snapWidth):e=r.__scrollLeft,r.options.scrollingY?r.options.paging?t=Math.round(t/r.__clientHeight)*r.__clientHeight:r.options.snapping&&(t=Math.round(t/r.__snapHeight)*r.__snapHeight):t=r.__scrollTop,e=Math.max(Math.min(r.__maxScrollLeft,e),0),t=Math.max(Math.min(r.__maxScrollTop,t),0),e===r.__scrollLeft&&t===r.__scrollTop&&(n=!1),r.__publish(e,t,i,n,o)},scrollBy:function(e,t,n){var i=this,o=i.__isAnimating?i.__scheduledLeft:i.__scrollLeft,r=i.__isAnimating?i.__scheduledTop:i.__scrollTop;i.scrollTo(o+(e||0),r+(t||0),n)},doMouseZoom:function(e,t,n,i){var o=e>0?.97:1.03;return this.zoomTo(this.__zoomLevel*o,!1,n-this.__clientLeft,i-this.__clientTop)},doTouchStart:function(e,t){var n=this;n.__decStopped=!(!n.__isDecelerating&&!n.__isAnimating),n.hintResize(),t instanceof Date&&(t=t.valueOf()),"number"!=typeof t&&(t=Date.now()),n.__interruptedAnimation=!0,n.__isDecelerating&&(fe.effect.Animate.stop(n.__isDecelerating),n.__isDecelerating=!1,n.__interruptedAnimation=!0),n.__isAnimating&&(fe.effect.Animate.stop(n.__isAnimating),n.__isAnimating=!1,n.__interruptedAnimation=!0);var i,o,r=1===e.length;r?(i=e[0].pageX,o=e[0].pageY):(i=Math.abs(e[0].pageX+e[1].pageX)/2,o=Math.abs(e[0].pageY+e[1].pageY)/2),n.__initialTouchLeft=i,n.__initialTouchTop=o,n.__initialTouches=e,n.__zoomLevelStart=n.__zoomLevel,n.__lastTouchLeft=i,n.__lastTouchTop=o,n.__lastTouchMove=t,n.__lastScale=1,n.__enableScrollX=!r&&n.options.scrollingX,n.__enableScrollY=!r&&n.options.scrollingY,n.__isTracking=!0,n.__didDecelerationComplete=!1,n.__isDragging=!r,n.__isSingleTouch=r,n.__positions=[]},doTouchMove:function(e,t,n){t instanceof Date&&(t=t.valueOf()),"number"!=typeof t&&(t=Date.now());var i=this;if(i.__isTracking){var o,r;2===e.length?(o=Math.abs(e[0].pageX+e[1].pageX)/2,r=Math.abs(e[0].pageY+e[1].pageY)/2,!n&&i.options.zooming&&(n=i.__getScale(i.__initialTouches,e))):(o=e[0].pageX,r=e[0].pageY);var s=i.__positions;if(i.__isDragging){i.__decStopped=!1;var a=o-i.__lastTouchLeft,l=r-i.__lastTouchTop,c=i.__scrollLeft,u=i.__scrollTop,d=i.__zoomLevel;if(null!=n&&i.options.zooming){var _=d;if(d=d/i.__lastScale*n,d=Math.max(Math.min(d,i.options.maxZoom),i.options.minZoom),_!==d){var h=o-i.__clientLeft,f=r-i.__clientTop;c=(h+c)*d/_-h,u=(f+u)*d/_-f,i.__computeScrollMax(d)}}if(i.__enableScrollX){c-=a*i.options.speedMultiplier;var p=i.__maxScrollLeft;(c>p||0>c)&&(i.options.bouncing?c+=a/2*i.options.speedMultiplier:c=c>p?p:0)}if(i.__enableScrollY){u-=l*i.options.speedMultiplier;var m=i.__maxScrollTop;u>m||0>u?i.options.bouncing||i.__refreshHeight&&0>u?(u+=l/2*i.options.speedMultiplier,i.__enableScrollX||null==i.__refreshHeight||(0>u?(i.__refreshHidden=!1,i.__refreshShow()):(i.__refreshHide(),i.__refreshHidden=!0),!i.__refreshActive&&u<=-i.__refreshHeight?(i.__refreshActive=!0,i.__refreshActivate&&i.__refreshActivate()):i.__refreshActive&&u>-i.__refreshHeight&&(i.__refreshActive=!1,i.__refreshDeactivate&&i.__refreshDeactivate()))):u=u>m?m:0:i.__refreshHeight&&!i.__refreshHidden&&(i.__refreshHide(),i.__refreshHidden=!0)}s.length>60&&s.splice(0,30),s.push(c,u,t),i.__publish(c,u,d)}else{var g=i.options.locking?3:0,v=5,T=Math.abs(o-i.__initialTouchLeft),E=Math.abs(r-i.__initialTouchTop);i.__enableScrollX=i.options.scrollingX&&T>=g,i.__enableScrollY=i.options.scrollingY&&E>=g,s.push(i.__scrollLeft,i.__scrollTop,t),i.__isDragging=(i.__enableScrollX||i.__enableScrollY)&&(T>=v||E>=v),i.__isDragging&&(i.__interruptedAnimation=!1,i.__fadeScrollbars("in"))}i.__lastTouchLeft=o,i.__lastTouchTop=r,i.__lastTouchMove=t,i.__lastScale=n}},doTouchEnd:function(t,n){n instanceof Date&&(n=n.valueOf()),"number"!=typeof n&&(n=Date.now());var i=this;if(i.__isTracking){if(i.__isTracking=!1,i.__isDragging)if(i.__isDragging=!1,i.__isSingleTouch&&i.options.animating&&n-i.__lastTouchMove<=100){for(var o=i.__positions,r=o.length-1,s=r,a=r;a>0&&o[a]>i.__lastTouchMove-100;a-=3)s=a;if(s!==r){var l=o[r]-o[s],c=i.__scrollLeft-o[s-2],u=i.__scrollTop-o[s-1];i.__decelerationVelocityX=c/l*(1e3/60),i.__decelerationVelocityY=u/l*(1e3/60);var d=i.options.paging||i.options.snapping?i.options.decelVelocityThresholdPaging:i.options.decelVelocityThreshold;(Math.abs(i.__decelerationVelocityX)>d||Math.abs(i.__decelerationVelocityY)>d)&&(i.__refreshActive||i.__startDeceleration(n))}else i.__scrollingComplete()}else n-i.__lastTouchMove>100&&i.__scrollingComplete();else i.__decStopped&&(t.isTapHandled=!0,i.__decStopped=!1);if(!i.__isDecelerating)if(i.__refreshActive&&i.__refreshStart){i.__publish(i.__scrollLeft,-i.__refreshHeight,i.__zoomLevel,!0);var _=new Date;i.refreshStartTime=_.getTime(),i.__refreshStart&&i.__refreshStart(),e.Platform.isAndroid()||i.__startDeceleration()}else(i.__interruptedAnimation||i.__isDragging)&&i.__scrollingComplete(),i.scrollTo(i.__scrollLeft,i.__scrollTop,!0,i.__zoomLevel),i.__refreshActive&&(i.__refreshActive=!1,i.__refreshDeactivate&&i.__refreshDeactivate());i.__positions.length=0}},__publish:function(e,t,o,r,s){var a=this,l=a.__isAnimating;if(l&&(fe.effect.Animate.stop(l),a.__isAnimating=!1),r&&a.options.animating){a.__scheduledLeft=e,a.__scheduledTop=t,a.__scheduledZoom=o;var c=a.__scrollLeft,u=a.__scrollTop,d=a.__zoomLevel,_=e-c,h=t-u,f=o-d,p=function(e,t,n){
n&&(a.__scrollLeft=c+_*e,a.__scrollTop=u+h*e,a.__zoomLevel=d+f*e,a.__callback&&a.__callback(a.__scrollLeft,a.__scrollTop,a.__zoomLevel,s))},m=function(e){return a.__isAnimating===e},g=function(e,t,n){t===a.__isAnimating&&(a.__isAnimating=!1),(a.__didDecelerationComplete||n)&&a.__scrollingComplete(),a.options.zooming&&a.__computeScrollMax()};a.__isAnimating=fe.effect.Animate.start(p,m,g,a.options.animationDuration,l?n:i)}else a.__scheduledLeft=a.__scrollLeft=e,a.__scheduledTop=a.__scrollTop=t,a.__scheduledZoom=a.__zoomLevel=o,a.__callback&&a.__callback(e,t,o,s),a.options.zooming&&a.__computeScrollMax()},__computeScrollMax:function(e){var t=this;null==e&&(e=t.__zoomLevel),t.__maxScrollLeft=Math.max(t.__contentWidth*e-t.__clientWidth,0),t.__maxScrollTop=Math.max(t.__contentHeight*e-t.__clientHeight,0),t.__didWaitForSize||t.__maxScrollLeft||t.__maxScrollTop||(t.__didWaitForSize=!0,t.__waitForSize())},__waitForSize:function(){var e=this;clearTimeout(e.__sizerTimeout);var t=function(){e.resize(!0)};t(),e.__sizerTimeout=setTimeout(t,500)},__startDeceleration:function(){var e=this;if(e.options.paging){var t=Math.max(Math.min(e.__scrollLeft,e.__maxScrollLeft),0),n=Math.max(Math.min(e.__scrollTop,e.__maxScrollTop),0),i=e.__clientWidth,o=e.__clientHeight;e.__minDecelerationScrollLeft=Math.floor(t/i)*i,e.__minDecelerationScrollTop=Math.floor(n/o)*o,e.__maxDecelerationScrollLeft=Math.ceil(t/i)*i,e.__maxDecelerationScrollTop=Math.ceil(n/o)*o}else e.__minDecelerationScrollLeft=0,e.__minDecelerationScrollTop=0,e.__maxDecelerationScrollLeft=e.__maxScrollLeft,e.__maxDecelerationScrollTop=e.__maxScrollTop,e.__refreshActive&&(e.__minDecelerationScrollTop=-1*e.__refreshHeight);var r=function(t,n,i){e.__stepThroughDeceleration(i)};e.__minVelocityToKeepDecelerating=e.options.snapping?4:.1;var s=function(){var t=Math.abs(e.__decelerationVelocityX)>=e.__minVelocityToKeepDecelerating||Math.abs(e.__decelerationVelocityY)>=e.__minVelocityToKeepDecelerating;return t||(e.__didDecelerationComplete=!0,e.options.bouncing&&!e.__refreshActive&&e.scrollTo(Math.min(Math.max(e.__scrollLeft,0),e.__maxScrollLeft),Math.min(Math.max(e.__scrollTop,0),e.__maxScrollTop),e.__refreshActive)),t},a=function(){e.__isDecelerating=!1,e.__didDecelerationComplete&&e.__scrollingComplete(),e.options.paging&&e.scrollTo(e.__scrollLeft,e.__scrollTop,e.options.snapping)};e.__isDecelerating=fe.effect.Animate.start(r,s,a)},__stepThroughDeceleration:function(e){var t=this,n=t.__scrollLeft+t.__decelerationVelocityX,i=t.__scrollTop+t.__decelerationVelocityY;if(!t.options.bouncing){var o=Math.max(Math.min(t.__maxDecelerationScrollLeft,n),t.__minDecelerationScrollLeft);o!==n&&(n=o,t.__decelerationVelocityX=0);var r=Math.max(Math.min(t.__maxDecelerationScrollTop,i),t.__minDecelerationScrollTop);r!==i&&(i=r,t.__decelerationVelocityY=0)}if(e?t.__publish(n,i,t.__zoomLevel):(t.__scrollLeft=n,t.__scrollTop=i),!t.options.paging){var s=t.options.deceleration;t.__decelerationVelocityX*=s,t.__decelerationVelocityY*=s}if(t.options.bouncing){var a=0,l=0,c=t.options.penetrationDeceleration,u=t.options.penetrationAcceleration;if(n<t.__minDecelerationScrollLeft?a=t.__minDecelerationScrollLeft-n:n>t.__maxDecelerationScrollLeft&&(a=t.__maxDecelerationScrollLeft-n),i<t.__minDecelerationScrollTop?l=t.__minDecelerationScrollTop-i:i>t.__maxDecelerationScrollTop&&(l=t.__maxDecelerationScrollTop-i),0!==a){var d=a*t.__decelerationVelocityX<=t.__minDecelerationScrollLeft;d&&(t.__decelerationVelocityX+=a*c);var _=Math.abs(t.__decelerationVelocityX)<=t.__minVelocityToKeepDecelerating;(!d||_)&&(t.__decelerationVelocityX=a*u)}if(0!==l){var h=l*t.__decelerationVelocityY<=t.__minDecelerationScrollTop;h&&(t.__decelerationVelocityY+=l*c);var f=Math.abs(t.__decelerationVelocityY)<=t.__minVelocityToKeepDecelerating;(!h||f)&&(t.__decelerationVelocityY=l*u)}}},__getDistance:function(e,t){var n=t.pageX-e.pageX,i=t.pageY-e.pageY;return Math.sqrt(n*n+i*i)},__getScale:function(e,t){return e.length>=2&&t.length>=2?this.__getDistance(t[0],t[1])/this.__getDistance(e[0],e[1]):1}}),e.scroll={isScrolling:!1,lastTop:0}}(ionic),function(e){var t=function(){},n=function(e){};e.views.ScrollNative=e.views.View.inherit({initialize:function(n){var i=this;i.__container=i.el=n.el,i.__content=n.el.firstElementChild,i.isNative=!0,i.__scrollTop=i.el.scrollTop,i.__scrollLeft=i.el.scrollLeft,i.__clientHeight=i.__content.clientHeight,i.__clientWidth=i.__content.clientWidth,i.__maxScrollTop=Math.max(i.__contentHeight-i.__clientHeight,0),i.__maxScrollLeft=Math.max(i.__contentWidth-i.__clientWidth,0),i.options={freeze:!1,getContentWidth:function(){return Math.max(i.__content.scrollWidth,i.__content.offsetWidth)},getContentHeight:function(){return Math.max(i.__content.scrollHeight,i.__content.offsetHeight+2*i.__content.offsetTop)}};for(var o in n)i.options[o]=n[o];i.onScroll=function(){e.scroll.isScrolling||(e.scroll.isScrolling=!0),clearTimeout(i.scrollTimer),i.scrollTimer=setTimeout(function(){e.scroll.isScrolling=!1},80)},i.freeze=t,i.__initEventHandlers()},__callback:function(){n("__callback")},zoomTo:function(){n("zoomTo")},zoomBy:function(){n("zoomBy")},activatePullToRefresh:function(){n("activatePullToRefresh")},resize:function(e){var t=this;t.__container&&t.options&&t.setDimensions(t.__container.clientWidth,t.__container.clientHeight,t.options.getContentWidth(),t.options.getContentHeight(),e)},run:function(){this.resize()},getValues:function(){var e=this;return e.update(),{left:e.__scrollLeft,top:e.__scrollTop,zoom:1}},update:function(){var e=this;e.__scrollLeft=e.el.scrollLeft,e.__scrollTop=e.el.scrollTop},setDimensions:function(e,t,n,i){var o=this;(e||t||n||i)&&(e===+e&&(o.__clientWidth=e),t===+t&&(o.__clientHeight=t),n===+n&&(o.__contentWidth=n),i===+i&&(o.__contentHeight=i),o.__computeScrollMax())},getScrollMax:function(){return{left:this.__maxScrollLeft,top:this.__maxScrollTop}},scrollBy:function(e,t,n){var i=this;i.update();var o=i.__isAnimating?i.__scheduledLeft:i.__scrollLeft,r=i.__isAnimating?i.__scheduledTop:i.__scrollTop;i.scrollTo(o+(e||0),r+(t||0),n)},scrollTo:function(t,n,i){function o(t,n){function i(e){return--e*e*e+1}function o(){var u=Date.now(),d=Math.min(1,(u-s)/a),_=i(d);l!=t&&(r.el.scrollTop=parseInt(_*(t-l)+l,10)),c!=n&&(r.el.scrollLeft=parseInt(_*(n-c)+c,10)),1>d?e.requestAnimationFrame(o):r.resize()}var s=Date.now(),a=1e3,l=r.el.scrollTop,c=r.el.scrollLeft;return l===t&&c===n?void r.resize():void e.requestAnimationFrame(o)}var r=this;return i?void o(n,t):(r.el.scrollTop=n,r.el.scrollLeft=t,void r.resize())},__waitForSize:function(){var e=this;clearTimeout(e.__sizerTimeout);var t=function(){e.resize(!0)};t(),e.__sizerTimeout=setTimeout(t,500)},__computeScrollMax:function(){var e=this;e.__maxScrollLeft=Math.max(e.__contentWidth-e.__clientWidth,0),e.__maxScrollTop=Math.max(e.__contentHeight-e.__clientHeight,0),e.__didWaitForSize||e.__maxScrollLeft||e.__maxScrollTop||(e.__didWaitForSize=!0,e.__waitForSize())},__initEventHandlers:function(){var n=this,i=n.__container;n.scrollChildIntoView=t,n.resetScrollView=function(){n.isScrolledIntoView&&(n.isScrolledIntoView=!1,i.style.height="",i.style.overflow="",n.resize(),e.scroll.isScrolling=!1)},i.addEventListener("resetScrollView",n.resetScrollView),i.addEventListener("scroll",n.onScroll),i.addEventListener("scrollChildIntoView",n.scrollChildIntoView),i.addEventListener("resetScrollView",n.resetScrollView)},__cleanup:function(){var n=this,i=n.__container;i.removeEventListener("resetScrollView",n.resetScrollView),i.removeEventListener("scroll",n.onScroll),i.removeEventListener("scrollChildIntoView",n.scrollChildIntoView),i.removeEventListener("resetScrollView",n.resetScrollView),e.tap.removeClonedInputs(i,n),delete n.__container,delete n.__content,delete n.__indicatorX,delete n.__indicatorY,delete n.options.el,n.resize=n.scrollTo=n.onScroll=n.resetScrollView=t,i=null}})}(ionic),function(e){"use strict";var t="item",n="item-content",i="item-sliding",o="item-options",r="item-placeholder",s="item-reordering",a="item-reorder",l=function(){};l.prototype={start:function(){},drag:function(){},end:function(){},isSameItem:function(){return!1}};var c=function(e){this.dragThresholdX=e.dragThresholdX||10,this.el=e.el,this.item=e.item,this.canSwipe=e.canSwipe};c.prototype=new l,c.prototype.start=function(r){var s,a,l,c;this.canSwipe()&&(s=r.target.classList.contains(n)?r.target:r.target.classList.contains(t)?r.target.querySelector("."+n):e.DomUtil.getParentWithClass(r.target,n),s&&(s.classList.remove(i),l=parseFloat(s.style[e.CSS.TRANSFORM].replace("translate3d(","").split(",")[0])||0,a=s.parentNode.querySelector("."+o),a&&(a.classList.remove("invisible"),c=a.offsetWidth,this._currentDrag={buttons:a,buttonsWidth:c,content:s,startOffsetX:l})))},c.prototype.isSameItem=function(e){return e._lastDrag&&this._currentDrag?this._currentDrag.content==e._lastDrag.content:!1},c.prototype.clean=function(t){function n(){i.buttons&&i.buttons.classList.add("invisible")}var i=this._lastDrag;i&&i.content&&(i.content.style[e.CSS.TRANSITION]="",i.content.style[e.CSS.TRANSFORM]="",t?(i.content.style[e.CSS.TRANSITION]="none",n(),e.requestAnimationFrame(function(){i.content.style[e.CSS.TRANSITION]=""})):e.requestAnimationFrame(function(){setTimeout(n,250)}))},c.prototype.drag=e.animationFrameThrottle(function(t){var n;if(this._currentDrag&&(!this._isDragging&&(Math.abs(t.gesture.deltaX)>this.dragThresholdX||Math.abs(this._currentDrag.startOffsetX)>0)&&(this._isDragging=!0),this._isDragging)){n=this._currentDrag.buttonsWidth;var i=Math.min(0,this._currentDrag.startOffsetX+t.gesture.deltaX);-n>i&&(i=Math.min(-n,-n+.4*(t.gesture.deltaX+n))),this._currentDrag.content.$$ionicOptionsOpen=0!==i,this._currentDrag.content.style[e.CSS.TRANSFORM]="translate3d("+i+"px, 0, 0)",this._currentDrag.content.style[e.CSS.TRANSITION]="none"}}),c.prototype.end=function(t,n){var i=this;if(!i._currentDrag)return void(n&&n());var o=-i._currentDrag.buttonsWidth;t.gesture.deltaX>-(i._currentDrag.buttonsWidth/2)&&("left"==t.gesture.direction&&Math.abs(t.gesture.velocityX)<.3?o=0:"right"==t.gesture.direction&&(o=0)),e.requestAnimationFrame(function(){if(0===o){i._currentDrag.content.style[e.CSS.TRANSFORM]="";var t=i._currentDrag.buttons;setTimeout(function(){t&&t.classList.add("invisible")},250)}else i._currentDrag.content.style[e.CSS.TRANSFORM]="translate3d("+o+"px,0,0)";i._currentDrag.content.style[e.CSS.TRANSITION]="",i._lastDrag||(i._lastDrag={}),e.extend(i._lastDrag,i._currentDrag),i._currentDrag&&(i._currentDrag.buttons=null,i._currentDrag.content=null),i._currentDrag=null,n&&n()})};var u=function(e){var t=this;if(t.dragThresholdY=e.dragThresholdY||0,t.onReorder=e.onReorder,t.listEl=e.listEl,t.el=t.item=e.el,t.scrollEl=e.scrollEl,t.scrollView=e.scrollView,t.listElTrueTop=0,t.listEl.offsetParent){var n=t.listEl;do t.listElTrueTop+=n.offsetTop,n=n.offsetParent;while(n)}};u.prototype=new l,u.prototype._moveElement=function(t){var n=t.gesture.center.pageY+this.scrollView.getValues().top-this._currentDrag.elementHeight/2-this.listElTrueTop;this.el.style[e.CSS.TRANSFORM]="translate3d(0, "+n+"px, 0)"},u.prototype.deregister=function(){this.listEl=this.el=this.scrollEl=this.scrollView=null},u.prototype.start=function(t){var n=e.DomUtil.getChildIndex(this.el,this.el.nodeName.toLowerCase()),i=this.el.scrollHeight,o=this.el.cloneNode(!0);o.classList.add(r),this.el.parentNode.insertBefore(o,this.el),this.el.classList.add(s),this._currentDrag={elementHeight:i,startIndex:n,placeholder:o,scrollHeight:scroll,list:o.parentNode},this._moveElement(t)},u.prototype.drag=e.animationFrameThrottle(function(t){var n=this;if(this._currentDrag){var i=0,o=t.gesture.center.pageY,r=this.listElTrueTop;if(this.scrollView){var s=this.scrollView.__container;i=this.scrollView.getValues().top;var a=s.offsetTop,l=a-o+this._currentDrag.elementHeight/2,c=o+this._currentDrag.elementHeight/2-a-s.offsetHeight;t.gesture.deltaY<0&&l>0&&i>0&&(this.scrollView.scrollBy(null,-l),e.requestAnimationFrame(function(){n.drag(t)})),t.gesture.deltaY>0&&c>0&&i<this.scrollView.getScrollMax().top&&(this.scrollView.scrollBy(null,c),e.requestAnimationFrame(function(){n.drag(t)}))}!this._isDragging&&Math.abs(t.gesture.deltaY)>this.dragThresholdY&&(this._isDragging=!0),this._isDragging&&(this._moveElement(t),this._currentDrag.currentY=i+o-r)}}),u.prototype._getReorderIndex=function(){for(var e,t=this,n=Array.prototype.slice.call(t._currentDrag.placeholder.parentNode.children).filter(function(e){return e.nodeName===t.el.nodeName&&e!==t.el}),i=t._currentDrag.currentY,o=0,r=n.length;r>o;o++)if(e=n[o],o===r-1){if(i>e.offsetTop)return o}else if(0===o){if(i<e.offsetTop+e.offsetHeight)return o}else if(i>e.offsetTop-e.offsetHeight/2&&i<e.offsetTop+e.offsetHeight)return o;return t._currentDrag.startIndex},u.prototype.end=function(t,n){if(!this._currentDrag)return void(n&&n());var i=this._currentDrag.placeholder,o=this._getReorderIndex();this.el.classList.remove(s),this.el.style[e.CSS.TRANSFORM]="",i.parentNode.insertBefore(this.el,i),i.parentNode.removeChild(i),this.onReorder&&this.onReorder(this.el,this._currentDrag.startIndex,o),this._currentDrag={placeholder:null,content:null},this._currentDrag=null,n&&n()},e.views.ListView=e.views.View.inherit({initialize:function(t){var n=this;t=e.extend({onReorder:function(){},virtualRemoveThreshold:-200,virtualAddThreshold:200,canSwipe:function(){return!0}},t),e.extend(n,t),!n.itemHeight&&n.listEl&&(n.itemHeight=n.listEl.children[0]&&parseInt(n.listEl.children[0].style.height,10)),n.onRefresh=t.onRefresh||function(){},n.onRefreshOpening=t.onRefreshOpening||function(){},n.onRefreshHolding=t.onRefreshHolding||function(){};var i={};e.DomUtil.getParentOrSelfWithClass(n.el,"overflow-scroll")&&(i.prevent_default_directions=["left","right"]),window.ionic.onGesture("release",function(e){n._handleEndDrag(e)},n.el,i),window.ionic.onGesture("drag",function(e){n._handleDrag(e)},n.el,i),n._initDrag()},deregister:function(){this.el=this.listEl=this.scrollEl=this.scrollView=null,this.isScrollFreeze&&self.scrollView.freeze(!1)},stopRefreshing:function(){var e=this.el.querySelector(".list-refresher");e.style.height="0"},didScroll:function(e){var t=this;if(t.isVirtual){var n=t.itemHeight,i=e.target.scrollHeight,o=t.el.parentNode.offsetHeight,r=Math.max(0,e.scrollTop+t.virtualRemoveThreshold),s=Math.min(i,Math.abs(e.scrollTop)+o+t.virtualAddThreshold),a=parseInt(Math.abs(r/n),10),l=parseInt(Math.abs(s/n),10);t._virtualItemsToRemove=Array.prototype.slice.call(t.listEl.children,0,a),t.renderViewport&&t.renderViewport(r,s,a,l)}},didStopScrolling:function(){if(this.isVirtual)for(var e=0;e<this._virtualItemsToRemove.length;e++)this.didHideItem&&this.didHideItem(e)},clearDragEffects:function(e){this._lastDragOp&&(this._lastDragOp.clean&&this._lastDragOp.clean(e),this._lastDragOp.deregister&&this._lastDragOp.deregister(),this._lastDragOp=null)},_initDrag:function(){this._lastDragOp&&this._lastDragOp.deregister&&this._lastDragOp.deregister(),this._lastDragOp=this._dragOp,this._dragOp=null},_getItem:function(e){for(;e;){if(e.classList&&e.classList.contains(t))return e;e=e.parentNode}return null},_startDrag:function(t){var n=this;n._isDragging=!1;var i,o=n._lastDragOp;n._didDragUpOrDown&&o instanceof c&&o.clean&&o.clean(),!e.DomUtil.getParentOrSelfWithClass(t.target,a)||"up"!=t.gesture.direction&&"down"!=t.gesture.direction?!n._didDragUpOrDown&&("left"==t.gesture.direction||"right"==t.gesture.direction)&&Math.abs(t.gesture.deltaX)>5&&(i=n._getItem(t.target),i&&i.querySelector(".item-options")&&(n._dragOp=new c({el:n.el,item:i,canSwipe:n.canSwipe}),n._dragOp.start(t),t.preventDefault(),n.isScrollFreeze=n.scrollView.freeze(!0))):(i=n._getItem(t.target),i&&(n._dragOp=new u({listEl:n.el,el:i,scrollEl:n.scrollEl,scrollView:n.scrollView,onReorder:function(e,t,i){n.onReorder&&n.onReorder(e,t,i)}}),n._dragOp.start(t),t.preventDefault())),o&&n._dragOp&&!n._dragOp.isSameItem(o)&&t.defaultPrevented&&o.clean&&o.clean()},_handleEndDrag:function(e){var t=this;t.scrollView&&(t.isScrollFreeze=t.scrollView.freeze(!1)),t._didDragUpOrDown=!1,t._dragOp&&t._dragOp.end(e,function(){t._initDrag()})},_handleDrag:function(e){var t=this;Math.abs(e.gesture.deltaY)>5&&(t._didDragUpOrDown=!0),t.isDragging||t._dragOp||t._startDrag(e),t._dragOp&&(e.gesture.srcEvent.preventDefault(),t._dragOp.drag(e))}})}(ionic),function(e){"use strict";e.views.Modal=e.views.View.inherit({initialize:function(t){t=e.extend({focusFirstInput:!1,unfocusOnHide:!0,focusFirstDelay:600,backdropClickToClose:!0,hardwareBackButtonClose:!0},t),e.extend(this,t),this.el=t.el},show:function(){var e=this;e.focusFirstInput&&window.setTimeout(function(){var t=e.el.querySelector("input, textarea");t&&t.focus&&t.focus()},e.focusFirstDelay)},hide:function(){if(this.unfocusOnHide){var e=this.el.querySelectorAll("input, textarea");window.setTimeout(function(){for(var t=0;t<e.length;t++)e[t].blur&&e[t].blur()})}}})}(ionic),function(e){"use strict";e.views.SideMenu=e.views.View.inherit({initialize:function(e){this.el=e.el,this.isEnabled="undefined"==typeof e.isEnabled?!0:e.isEnabled,this.setWidth(e.width)},getFullWidth:function(){return this.width},setWidth:function(e){this.width=e,this.el.style.width=e+"px"},setIsEnabled:function(e){this.isEnabled=e},bringUp:function(){"0"!==this.el.style.zIndex&&(this.el.style.zIndex="0")},pushDown:function(){"-1"!==this.el.style.zIndex&&(this.el.style.zIndex="-1")}}),e.views.SideMenuContent=e.views.View.inherit({initialize:function(t){e.extend(this,{animationClass:"menu-animated",onDrag:function(){},onEndDrag:function(){}},t),e.onGesture("drag",e.proxy(this._onDrag,this),this.el),e.onGesture("release",e.proxy(this._onEndDrag,this),this.el)},_onDrag:function(e){this.onDrag&&this.onDrag(e)},_onEndDrag:function(e){this.onEndDrag&&this.onEndDrag(e)},disableAnimation:function(){this.el.classList.remove(this.animationClass)},enableAnimation:function(){this.el.classList.add(this.animationClass)},getTranslateX:function(){return parseFloat(this.el.style[e.CSS.TRANSFORM].replace("translate3d(","").split(",")[0])},setTranslateX:e.animationFrameThrottle(function(t){this.el.style[e.CSS.TRANSFORM]="translate3d("+t+"px, 0, 0)"})})}(ionic),function(e){"use strict";e.views.Slider=e.views.View.inherit({initialize:function(e){function t(){if(p.offsetWidth){m=E.children,T=m.length,m.length<2&&(e.continuous=!1),f.transitions&&e.continuous&&m.length<3&&(E.appendChild(m[0].cloneNode(!0)),E.appendChild(E.children[1].cloneNode(!0)),m=E.children),g=new Array(m.length),v=p.offsetWidth||p.getBoundingClientRect().width,E.style.width=m.length*v+"px";for(var t=m.length;t--;){var n=m[t];n.style.width=v+"px",n.setAttribute("data-index",t),f.transitions&&(n.style.left=t*-v+"px",s(t,S>t?-v:t>S?v:0,0))}e.continuous&&f.transitions&&(s(o(S-1),-v,0),s(o(S+1),v,0)),f.transitions||(E.style.left=S*-v+"px"),p.style.visibility="visible",e.slidesChanged&&e.slidesChanged()}}function n(t){e.continuous?r(S-1,t):S&&r(S-1,t)}function i(t){e.continuous?r(S+1,t):S<m.length-1&&r(S+1,t)}function o(e){return(m.length+e%m.length)%m.length}function r(t,n){if(S!=t){if(f.transitions){var i=Math.abs(S-t)/(S-t);if(e.continuous){var r=i;i=-g[o(t)]/v,i!==r&&(t=-i*m.length+t)}for(var a=Math.abs(S-t)-1;a--;)s(o((t>S?t:S)-a-1),v*i,0);t=o(t),s(S,v*i,n||b),s(t,0,n||b),e.continuous&&s(o(t-i),-(v*i),0)}else t=o(t),l(S*-v,t*-v,n||b);S=t,h(e.callback&&e.callback(S,m[S]))}}function s(e,t,n){a(e,t,n),g[e]=t}function a(e,t,n){var i=m[e],o=i&&i.style;o&&(o.webkitTransitionDuration=o.MozTransitionDuration=o.msTransitionDuration=o.OTransitionDuration=o.transitionDuration=n+"ms",o.webkitTransform="translate("+t+"px,0)translateZ(0)",o.msTransform=o.MozTransform=o.OTransform="translateX("+t+"px)")}function l(t,n,i){if(!i)return void(E.style.left=n+"px");var o=+new Date,r=setInterval(function(){var s=+new Date-o;return s>i?(E.style.left=n+"px",D&&c(),e.transitionEnd&&e.transitionEnd.call(event,S,m[S]),void clearInterval(r)):void(E.style.left=(n-t)*(Math.floor(s/i*100)/100)+t+"px")},4)}function c(){w=setTimeout(i,D)}function u(){D=e.auto||0,clearTimeout(w)}var d=this,_=function(){},h=function(e){setTimeout(e||_,0)},f={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(e){var t=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var n in t)if(void 0!==e.style[t[n]])return!0;return!1}(document.createElement("swipe"))},p=e.el;if(p){var m,g,v,T,E=p.children[0];e=e||{};var S=parseInt(e.startSlide,10)||0,b=e.speed||300;e.continuous=void 0!==e.continuous?e.continuous:!0;var w,y,D=e.auto||0,L={},x={},M={handleEvent:function(n){switch(("mousedown"==n.type||"mouseup"==n.type||"mousemove"==n.type)&&(n.touches=[{pageX:n.pageX,pageY:n.pageY}]),n.type){case"mousedown":this.start(n);break;case"touchstart":this.start(n);break;case"touchmove":this.touchmove(n);break;case"mousemove":this.touchmove(n);break;case"touchend":h(this.end(n));break;case"mouseup":h(this.end(n));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":h(this.transitionEnd(n));break;case"resize":h(t)}e.stopPropagation&&n.stopPropagation()},start:function(e){var t=e.touches[0];L={x:t.pageX,y:t.pageY,time:+new Date},y=void 0,x={},f.touch?(E.addEventListener("touchmove",this,!1),E.addEventListener("touchend",this,!1)):(E.addEventListener("mousemove",this,!1),E.addEventListener("mouseup",this,!1),document.addEventListener("mouseup",this,!1))},touchmove:function(t){if(!(t.touches.length>1||t.scale&&1!==t.scale||d.slideIsDisabled)){e.disableScroll&&t.preventDefault();var n=t.touches[0];x={x:n.pageX-L.x,y:n.pageY-L.y},"undefined"==typeof y&&(y=!!(y||Math.abs(x.x)<Math.abs(x.y))),y||(t.preventDefault(),u(),e.continuous?(a(o(S-1),x.x+g[o(S-1)],0),a(S,x.x+g[S],0),a(o(S+1),x.x+g[o(S+1)],0)):(x.x=x.x/(!S&&x.x>0||S==m.length-1&&x.x<0?Math.abs(x.x)/v+1:1),a(S-1,x.x+g[S-1],0),a(S,x.x+g[S],0),a(S+1,x.x+g[S+1],0)),e.onDrag&&e.onDrag())}},end:function(){var t=+new Date-L.time,n=Number(t)<250&&Math.abs(x.x)>20||Math.abs(x.x)>v/2,i=!S&&x.x>0||S==m.length-1&&x.x<0;e.continuous&&(i=!1);var r=x.x<0;y||(n&&!i?(r?(e.continuous?(s(o(S-1),-v,0),s(o(S+2),v,0)):s(S-1,-v,0),s(S,g[S]-v,b),s(o(S+1),g[o(S+1)]-v,b),S=o(S+1)):(e.continuous?(s(o(S+1),v,0),s(o(S-2),-v,0)):s(S+1,v,0),s(S,g[S]+v,b),s(o(S-1),g[o(S-1)]+v,b),S=o(S-1)),e.callback&&e.callback(S,m[S])):e.continuous?(s(o(S-1),-v,b),s(S,0,b),s(o(S+1),v,b)):(s(S-1,-v,b),s(S,0,b),s(S+1,v,b))),f.touch?(E.removeEventListener("touchmove",M,!1),E.removeEventListener("touchend",M,!1)):(E.removeEventListener("mousemove",M,!1),E.removeEventListener("mouseup",M,!1),document.removeEventListener("mouseup",M,!1)),e.onDragEnd&&e.onDragEnd()},transitionEnd:function(t){parseInt(t.target.getAttribute("data-index"),10)==S&&(D&&c(),e.transitionEnd&&e.transitionEnd.call(t,S,m[S]))}};this.update=function(){setTimeout(t)},this.setup=function(){t()},this.loop=function(t){return arguments.length&&(e.continuous=!!t),e.continuous},this.enableSlide=function(e){return arguments.length&&(this.slideIsDisabled=!e),!this.slideIsDisabled},this.slide=this.select=function(e,t){u(),r(e,t)},this.prev=this.previous=function(){u(),n()},this.next=function(){u(),i()},this.stop=function(){u()},this.start=function(){c()},this.autoPlay=function(e){!D||0>D?u():(D=e,c())},this.currentIndex=this.selected=function(){return S},this.slidesCount=this.count=function(){return T},this.kill=function(){u(),E.style.width="",E.style.left="",m&&(m=[]),f.addEventListener?(E.removeEventListener("touchstart",M,!1),E.removeEventListener("webkitTransitionEnd",M,!1),E.removeEventListener("msTransitionEnd",M,!1),E.removeEventListener("oTransitionEnd",M,!1),E.removeEventListener("otransitionend",M,!1),E.removeEventListener("transitionend",M,!1),window.removeEventListener("resize",M,!1)):window.onresize=null},this.load=function(){t(),D&&c(),f.addEventListener?(f.touch?E.addEventListener("touchstart",M,!1):E.addEventListener("mousedown",M,!1),f.transitions&&(E.addEventListener("webkitTransitionEnd",M,!1),E.addEventListener("msTransitionEnd",M,!1),E.addEventListener("oTransitionEnd",M,!1),E.addEventListener("otransitionend",M,!1),E.addEventListener("transitionend",M,!1)),window.addEventListener("resize",M,!1)):window.onresize=function(){t()}}}}})}(ionic),function(e){"use strict";e.views.Toggle=e.views.View.inherit({initialize:function(t){var n=this;this.el=t.el,this.checkbox=t.checkbox,this.track=t.track,this.handle=t.handle,this.openPercent=-1,this.onChange=t.onChange||function(){},this.triggerThreshold=t.triggerThreshold||20,this.dragStartHandler=function(e){n.dragStart(e)},this.dragHandler=function(e){n.drag(e)},this.holdHandler=function(e){n.hold(e)},this.releaseHandler=function(e){n.release(e)},this.dragStartGesture=e.onGesture("dragstart",this.dragStartHandler,this.el),this.dragGesture=e.onGesture("drag",this.dragHandler,this.el),this.dragHoldGesture=e.onGesture("hold",this.holdHandler,this.el),this.dragReleaseGesture=e.onGesture("release",this.releaseHandler,this.el)},destroy:function(){e.offGesture(this.dragStartGesture,"dragstart",this.dragStartGesture),e.offGesture(this.dragGesture,"drag",this.dragGesture),e.offGesture(this.dragHoldGesture,"hold",this.holdHandler),e.offGesture(this.dragReleaseGesture,"release",this.releaseHandler)},tap:function(){"disabled"!==this.el.getAttribute("disabled")&&this.val(!this.checkbox.checked)},dragStart:function(e){this.checkbox.disabled||(this._dragInfo={width:this.el.offsetWidth,left:this.el.offsetLeft,right:this.el.offsetLeft+this.el.offsetWidth,triggerX:this.el.offsetWidth/2,initialState:this.checkbox.checked},e.gesture.srcEvent.preventDefault(),this.hold(e))},drag:function(t){var n=this;this._dragInfo&&(t.gesture.srcEvent.preventDefault(),e.requestAnimationFrame(function(){if(n._dragInfo){var e=t.gesture.touches[0].pageX-n._dragInfo.left,i=n._dragInfo.width-n.triggerThreshold;n._dragInfo.initialState?e<n.triggerThreshold?n.setOpenPercent(0):e>n._dragInfo.triggerX&&n.setOpenPercent(100):e<n._dragInfo.triggerX?n.setOpenPercent(0):e>i&&n.setOpenPercent(100)}}))},endDrag:function(){this._dragInfo=null},hold:function(){this.el.classList.add("dragging")},release:function(e){this.el.classList.remove("dragging"),this.endDrag(e)},setOpenPercent:function(t){if(this.openPercent<0||t<this.openPercent-3||t>this.openPercent+3)if(this.openPercent=t,0===t)this.val(!1);else if(100===t)this.val(!0);else{var n=Math.round(t/100*this.track.offsetWidth-this.handle.offsetWidth);n=1>n?0:n,this.handle.style[e.CSS.TRANSFORM]="translate3d("+n+"px,0,0)"}},val:function(t){return(t===!0||t===!1)&&(""!==this.handle.style[e.CSS.TRANSFORM]&&(this.handle.style[e.CSS.TRANSFORM]=""),this.checkbox.checked=t,this.openPercent=t?100:0,this.onChange&&this.onChange()),this.checkbox.checked}})}(ionic)}();
/*!
 * ionic.bundle.js is a concatenation of:
 * ionic.js, angular.js, angular-animate.js,
 * angular-sanitize.js, angular-ui-router.js,
 * and ionic-angular.js
 */

/*
 AngularJS v1.3.13
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(M,Y,t){'use strict';function S(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.13/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Ta(b){if(null==b||Ua(b))return!1;var a=b.length;return b.nodeType===
oa&&a?!0:F(b)||H(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function s(b,a,c){var d,e;if(b)if(G(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(H(b)||Ta(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==s)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Ed(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,
b[d[e]],d[e]);return d}function lc(b){return function(a,c){b(c,a)}}function Fd(){return++ob}function mc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function x(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var l=f[g];b[l]=e[l]}}mc(b,a);return b}function ba(b){return parseInt(b,10)}function Pb(b,a){return x(Object.create(b),a)}function z(){}function pa(b){return b}function ea(b){return function(){return b}}function B(b){return"undefined"===
typeof b}function y(b){return"undefined"!==typeof b}function I(b){return null!==b&&"object"===typeof b}function F(b){return"string"===typeof b}function V(b){return"number"===typeof b}function qa(b){return"[object Date]"===Da.call(b)}function G(b){return"function"===typeof b}function pb(b){return"[object RegExp]"===Da.call(b)}function Ua(b){return b&&b.window===b}function Va(b){return b&&b.$evalAsync&&b.$watch}function Wa(b){return"boolean"===typeof b}function nc(b){return!(!b||!(b.nodeName||b.prop&&
b.attr&&b.find))}function Gd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ua(b){return Q(b.nodeName||b[0]&&b[0].nodeName)}function Xa(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Ea(b,a,c,d){if(Ua(b)||Va(b))throw Ka("cpws");if(a){if(b===a)throw Ka("cpi");c=c||[];d=d||[];if(I(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(H(b))for(var f=a.length=0;f<b.length;f++)e=Ea(b[f],null,c,d),I(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);
else{var g=a.$$hashKey;H(a)?a.length=0:s(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Ea(b[f],null,c,d),I(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);mc(a,g)}}else if(a=b)H(b)?a=Ea(b,[],c,d):qa(b)?a=new Date(b.getTime()):pb(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):I(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Ea(b,e,c,d));return a}function ra(b,a){if(H(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(I(b))for(c in a=a||{},
b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ga(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(H(b)){if(!H(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ga(b[d],a[d]))return!1;return!0}}else{if(qa(b))return qa(a)?ga(b.getTime(),a.getTime()):!1;if(pb(b)&&pb(a))return b.toString()==a.toString();if(Va(b)||Va(a)||Ua(b)||Ua(a)||H(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!G(b[d])){if(!ga(b[d],
a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==t&&!G(a[d]))return!1;return!0}return!1}function Ya(b,a,c){return b.concat(Za.call(a,c))}function oc(b,a){var c=2<arguments.length?Za.call(arguments,2):[];return!G(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Ya(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Hd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?
c=t:Ua(a)?c="$WINDOW":a&&Y===a?c="$DOCUMENT":Va(a)&&(c="$SCOPE");return c}function $a(b,a){if("undefined"===typeof b)return t;V(a)||(a=a?2:null);return JSON.stringify(b,Hd,a)}function pc(b){return F(b)?JSON.parse(b):b}function va(b){b=D(b).clone();try{b.empty()}catch(a){}var c=D("<div>").append(b).html();try{return b[0].nodeType===qb?Q(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+Q(b)})}catch(d){return Q(c)}}function qc(b){try{return decodeURIComponent(b)}catch(a){}}function rc(b){var a=
{},c,d;s((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=qc(c[0]),y(d)&&(b=y(c[1])?qc(c[1]):!0,sc.call(a,d)?H(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Qb(b){var a=[];s(b,function(b,d){H(b)?s(b,function(b){a.push(Fa(d,!0)+(!0===b?"":"="+Fa(b,!0)))}):a.push(Fa(d,!0)+(!0===b?"":"="+Fa(b,!0)))});return a.length?a.join("&"):""}function rb(b){return Fa(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Fa(b,a){return encodeURIComponent(b).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Id(b,a){var c,d,e=sb.length;b=D(b);for(d=0;d<e;++d)if(c=sb[d]+a,F(c=b.attr(c)))return c;return null}function Jd(b,a){var c,d,e={};s(sb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});s(sb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Id(c,"strict-di"),
a(c,d?[d]:[],e))}function tc(b,a,c){I(c)||(c={});c=x({strictDi:!1},c);var d=function(){b=D(b);if(b.injector()){var d=b[0]===Y?"document":va(b);throw Ka("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=ab(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;M&&e.test(M.name)&&(c.debugInfoEnabled=!0,M.name=M.name.replace(e,""));if(M&&!f.test(M.name))return d();M.name=M.name.replace(f,"");ca.resumeBootstrap=function(b){s(b,function(b){a.push(b)});return d()};G(ca.resumeDeferredBootstrap)&&ca.resumeDeferredBootstrap()}function Kd(){M.name="NG_ENABLE_DEBUG_INFO!"+M.name;M.location.reload()}function Ld(b){b=ca.element(b).injector();if(!b)throw Ka("test");return b.get("$$testability")}
function uc(b,a){a=a||"_";return b.replace(Md,function(b,d){return(d?a:"")+b.toLowerCase()})}function Nd(){var b;vc||((sa=M.jQuery)&&sa.fn.on?(D=sa,x(sa.fn,{scope:La.scope,isolateScope:La.isolateScope,controller:La.controller,injector:La.injector,inheritedData:La.inheritedData}),b=sa.cleanData,sa.cleanData=function(a){var c;if(Rb)Rb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=sa._data(e,"events"))&&c.$destroy&&sa(e).triggerHandler("$destroy");b(a)}):D=R,ca.element=D,vc=!0)}function Sb(b,a,c){if(!b)throw Ka("areq",
a||"?",c||"required");return b}function tb(b,a,c){c&&H(b)&&(b=b[b.length-1]);Sb(G(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ma(b,a){if("hasOwnProperty"===b)throw Ka("badname",a);}function wc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&G(b)?oc(e,b):b}function ub(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return D(c)}function ha(){return Object.create(null)}
function Od(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=S("$injector"),d=S("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||S;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return u}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],q=a("$injector","invoke","push",d),u={_invokeQueue:b,_configBlocks:d,
_runBlocks:e,requires:g,name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:q,run:function(a){e.push(a);return this}};h&&q(h);return u})}})}function Pd(b){x(b,{bootstrap:tc,copy:Ea,extend:x,equals:ga,
element:D,forEach:s,injector:ab,noop:z,bind:oc,toJson:$a,fromJson:pc,identity:pa,isUndefined:B,isDefined:y,isString:F,isFunction:G,isObject:I,isNumber:V,isElement:nc,isArray:H,version:Qd,isDate:qa,lowercase:Q,uppercase:vb,callbacks:{counter:0},getTestability:Ld,$$minErr:S,$$csp:bb,reloadWithDebugInfo:Kd});cb=Od(M);try{cb("ngLocale")}catch(a){cb("ngLocale",[]).provider("$locale",Rd)}cb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Sd});a.provider("$compile",xc).directive({a:Td,
input:yc,textarea:yc,form:Ud,script:Vd,select:Wd,style:Xd,option:Yd,ngBind:Zd,ngBindHtml:$d,ngBindTemplate:ae,ngClass:be,ngClassEven:ce,ngClassOdd:de,ngCloak:ee,ngController:fe,ngForm:ge,ngHide:he,ngIf:ie,ngInclude:je,ngInit:ke,ngNonBindable:le,ngPluralize:me,ngRepeat:ne,ngShow:oe,ngStyle:pe,ngSwitch:qe,ngSwitchWhen:re,ngSwitchDefault:se,ngOptions:te,ngTransclude:ue,ngModel:ve,ngList:we,ngChange:xe,pattern:zc,ngPattern:zc,required:Ac,ngRequired:Ac,minlength:Bc,ngMinlength:Bc,maxlength:Cc,ngMaxlength:Cc,
ngValue:ye,ngModelOptions:ze}).directive({ngInclude:Ae}).directive(wb).directive(Dc);a.provider({$anchorScroll:Be,$animate:Ce,$browser:De,$cacheFactory:Ee,$controller:Fe,$document:Ge,$exceptionHandler:He,$filter:Ec,$interpolate:Ie,$interval:Je,$http:Ke,$httpBackend:Le,$location:Me,$log:Ne,$parse:Oe,$rootScope:Pe,$q:Qe,$$q:Re,$sce:Se,$sceDelegate:Te,$sniffer:Ue,$templateCache:Ve,$templateRequest:We,$$testability:Xe,$timeout:Ye,$window:Ze,$$rAF:$e,$$asyncCallback:af,$$jqLite:bf})}])}function db(b){return b.replace(cf,
function(a,b,d,e){return e?d.toUpperCase():d}).replace(df,"Moz$1")}function Fc(b){b=b.nodeType;return b===oa||!b||9===b}function Gc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Tb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(ef.exec(b)||["",""])[1].toLowerCase();d=ia[d]||ia._default;c.innerHTML=d[1]+b.replace(ff,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Ya(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";s(f,function(a){e.appendChild(a)});
return e}function R(b){if(b instanceof R)return b;var a;F(b)&&(b=U(b),a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Ub("nosel");return new R(b)}if(a){a=Y;var c;b=(c=gf.exec(b))?[a.createElement(c[1])]:(c=Gc(b,a))?c.childNodes:[]}Hc(this,b)}function Vb(b){return b.cloneNode(!0)}function xb(b,a){a||yb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)yb(c[d])}function Ic(b,a,c,d){if(y(d))throw Ub("offargs");var e=(d=zb(b))&&d.events,f=d&&d.handle;if(f)if(a)s(a.split(" "),
function(a){if(y(c)){var d=e[a];Xa(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function yb(b,a){var c=b.ng339,d=c&&Ab[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Ic(b)),delete Ab[c],b.ng339=t))}function zb(b,a){var c=b.ng339,c=c&&Ab[c];a&&!c&&(b.ng339=c=++hf,c=Ab[c]={events:{},data:{},handle:t});return c}function Wb(b,a,c){if(Fc(b)){var d=y(c),e=!d&&a&&!I(a),
f=!a;b=(b=zb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];x(b,a)}}}function Bb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Cb(b,a){a&&b.setAttribute&&s(a.split(" "),function(a){b.setAttribute("class",U((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+U(a)+" "," ")))})}function Db(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");
s(a.split(" "),function(a){a=U(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",U(c))}}function Hc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Jc(b,a){return Eb(b,"$"+(a||"ngController")+"Controller")}function Eb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=H(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=D.data(b,a[d]))!==t)return c;b=b.parentNode||
11===b.nodeType&&b.host}}function Kc(b){for(xb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Lc(b,a){a||xb(b);var c=b.parentNode;c&&c.removeChild(b)}function jf(b,a){a=a||M;if("complete"===a.document.readyState)a.setTimeout(b);else D(a).on("load",b)}function Mc(b,a){var c=Fb[a.toLowerCase()];return c&&Nc[ua(b)]&&c}function kf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Oc[a]}function lf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=
a[e||c.type],g=f?f.length:0;if(g){if(B(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=ra(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function bf(){this.$get=function(){return x(R,{hasClass:function(b,a){b.attr&&(b=b[0]);
return Bb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return Db(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return Cb(b,a)}})}}function Na(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Fd)():c+":"+b}function eb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}s(b,this.put,this)}function mf(b){return(b=b.toString().replace(Pc,"").match(Qc))?"function("+(b[1]||"").replace(/[\s\r\n]+/,
" ")+")":"fn"}function ab(b,a){function c(a){return function(b,c){if(I(b))s(b,lc(a));else return a(b,c)}}function d(a,b){Ma(a,"service");if(G(b)||H(b))b=q.instantiate(b);if(!b.$get)throw Ga("pget",a);return n[a+"Provider"]=b}function e(a,b){return function(){var c=r.invoke(b,this);if(B(c))throw Ga("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;s(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=q.get(e[0]);f[e[1]].apply(f,
e[2])}}if(!m.get(a)){m.put(a,!0);try{F(a)?(c=cb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):G(a)?b.push(q.invoke(a)):H(a)?b.push(q.invoke(a)):tb(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ga("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ga("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),
b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=ab.$$annotate(b,a,g),l,q,n;q=0;for(l=k.length;q<l;q++){n=k[q];if("string"!==typeof n)throw Ga("itkn",n);h.push(f&&f.hasOwnProperty(n)?f[n]:d(n,g))}H(b)&&(b=b[l]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((H(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return I(a)||G(a)?a:d},get:d,annotate:ab.$$annotate,has:function(a){return n.hasOwnProperty(a+
"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],m=new eb([],!0),n={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,ea(b),!1)}),constant:c(function(a,b){Ma(a,"constant");n[a]=b;u[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,null,{$delegate:a})}}}},q=n.$injector=h(n,function(a,b){ca.isString(b)&&k.push(b);
throw Ga("unpr",k.join(" <- "));}),u={},r=u.$injector=h(u,function(a,b){var c=q.get(a+"Provider",b);return r.invoke(c.$get,c,t,a)});s(g(b),function(a){r.invoke(a||z)});return r}function Be(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ua(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;G(c)?c=c():nc(c)?(c=c[0],c="fixed"!==
a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):V(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||jf(function(){d.$evalAsync(g)})});return g}]}function af(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:
function(b){return a(b,0,!1)}}]}function nf(b,a,c,d){function e(a){try{a.apply(null,Za.call(arguments,1))}finally{if(v--,0===v)for(;w.length;)try{w.pop()()}catch(b){c.error(b)}}}function f(a,b){(function N(){s(L,function(a){a()});C=b(N,a)})()}function g(){h();l()}function h(){A=b.history.state;A=B(A)?null:A;ga(A,J)&&(A=J);J=A}function l(){if(E!==m.url()||O!==A)E=m.url(),O=A,s(W,function(a){a(m.url(),A)})}function k(a){try{return decodeURIComponent(a)}catch(b){return a}}var m=this,n=a[0],q=b.location,
u=b.history,r=b.setTimeout,P=b.clearTimeout,p={};m.isMock=!1;var v=0,w=[];m.$$completeOutstandingRequest=e;m.$$incOutstandingRequestCount=function(){v++};m.notifyWhenNoOutstandingRequests=function(a){s(L,function(a){a()});0===v?a():w.push(a)};var L=[],C;m.addPollFn=function(a){B(C)&&f(100,r);L.push(a);return a};var A,O,E=q.href,T=a.find("base"),X=null;h();O=A;m.url=function(a,c,e){B(e)&&(e=null);q!==b.location&&(q=b.location);u!==b.history&&(u=b.history);if(a){var f=O===e;if(E===a&&(!d.history||f))return m;
var g=E&&Ha(E)===Ha(a);E=a;O=e;!d.history||g&&f?(g||(X=a),c?q.replace(a):g?(c=q,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):q.href=a):(u[c?"replaceState":"pushState"](e,"",a),h(),O=A);return m}return X||q.href.replace(/%27/g,"'")};m.state=function(){return A};var W=[],wa=!1,J=null;m.onUrlChange=function(a){if(!wa){if(d.history)D(b).on("popstate",g);D(b).on("hashchange",g);wa=!0}W.push(a);return a};m.$$checkUrlChange=l;m.baseHref=function(){var a=T.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,
""):""};var fa={},y="",da=m.baseHref();m.cookies=function(a,b){var d,e,f,g;if(a)b===t?n.cookie=encodeURIComponent(a)+"=;path="+da+";expires=Thu, 01 Jan 1970 00:00:00 GMT":F(b)&&(d=(n.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+da).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(n.cookie!==y)for(y=n.cookie,d=y.split("; "),fa={},f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),0<g&&(a=k(e.substring(0,g)),
fa[a]===t&&(fa[a]=k(e.substring(g+1))));return fa}};m.defer=function(a,b){var c;v++;c=r(function(){delete p[c];e(a)},b||0);p[c]=!0;return c};m.defer.cancel=function(a){return p[a]?(delete p[a],P(a),e(z),!0):!1}}function De(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new nf(b,d,a,c)}]}function Ee(){this.$get=function(){function b(b,d){function e(a){a!=n&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw S("$cacheFactory")("iid",
b);var g=0,h=x({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},n=null,q=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}if(!B(b))return a in l||g++,l[a]=b,g>k&&this.remove(q.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==q&&(q=b.n);f(b.n,b.p);delete m[a]}delete l[a];g--},removeAll:function(){l={};g=0;m={};n=q=null},destroy:function(){m=
h=l=null;delete a[b]},info:function(){return x({},h,{size:g})}}}var a={};b.info=function(){var b={};s(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Ve(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function xc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};s(a,function(a,e){var f=a.match(c);if(!f)throw ja("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}var d=
{},e=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,f=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Gd("ngSrc,ngSrcset,src,srcset"),h=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/;this.directive=function n(a,e){Ma(a,"directive");F(a)?(Sb(e,"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];s(d[a],function(d,g){try{var h=b.invoke(d);G(h)?h={compile:ea(h)}:!h.compile&&h.link&&(h.compile=ea(h.link));h.priority=h.priority||0;h.index=
g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";I(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(l){e(l)}});return f}])),d[a].push(e)):s(a,lc(n));return this};this.aHrefSanitizationWhitelist=function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var k=!0;this.debugInfoEnabled=
function(a){return y(a)?(k=a,this):k};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,r,P,p,v,w,L,C,A){function O(a,b){try{a.addClass(b)}catch(c){}}function E(a,b,c,d,e){a instanceof D||(a=D(a));s(a,function(b,c){b.nodeType==qb&&b.nodeValue.match(/\S+/)&&(a[c]=D(b).wrap("<span></span>").parent()[0])});var f=T(a,b,a,c,d,e);E.$$addScopeClass(a);var g=null;return function(b,c,
d){Sb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ua(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?D(Xb(g,D("<div>").append(a).html())):c?La.clone.call(a):a;if(h)for(var l in h)d.data("$"+l+"Controller",h[l].instance);E.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function T(a,b,c,d,e,f){function g(a,c,d,e){var f,l,k,q,n,p,w;if(r)for(w=
Array(c.length),q=0;q<h.length;q+=3)f=h[q],w[f]=c[f];else w=c;q=0;for(n=h.length;q<n;)l=w[h[q++]],c=h[q++],f=h[q++],c?(c.scope?(k=a.$new(),E.$$addScopeInfo(D(l),k)):k=a,p=c.transcludeOnThisElement?X(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?X(a,b):null,c(f,k,l,d,p)):f&&f(a,l.childNodes,t,e)}for(var h=[],l,k,q,n,r,p=0;p<a.length;p++){l=new Yb;k=W(a[p],[],l,0===p?d:t,e);(f=k.length?fa(k,a[p],l,b,c,null,[],[],f):null)&&f.scope&&E.$$addScopeClass(l.$$element);
l=f&&f.terminal||!(q=a[p].childNodes)||!q.length?null:T(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(p,f,l),n=!0,r=r||f;f=null}return n?g:null}function X(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function W(a,b,c,d,g){var h=c.$attr,l;switch(a.nodeType){case oa:da(b,ya(ua(a)),"E",d,g);for(var k,q,n,r=a.attributes,p=0,w=r&&r.length;p<
w;p++){var P=!1,L=!1;k=r[p];l=k.name;q=U(k.value);k=ya(l);if(n=gb.test(k))l=l.replace(Sc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var u=k.replace(/(Start|End)$/,"");B(u)&&k===u+"Start"&&(P=l,L=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=ya(l.toLowerCase());h[k]=l;if(n||!c.hasOwnProperty(k))c[k]=q,Mc(a,k)&&(c[k]=!0);Pa(a,b,q,k,n);da(b,k,"A",d,g,P,L)}a=a.className;I(a)&&(a=a.animVal);if(F(a)&&""!==a)for(;l=f.exec(a);)k=ya(l[2]),da(b,k,"C",d,g)&&(c[k]=U(l[3])),
a=a.substr(l.index+l[0].length);break;case qb:M(b,a.nodeValue);break;case 8:try{if(l=e.exec(a.nodeValue))k=ya(l[1]),da(b,k,"M",d,g)&&(c[k]=U(l[2]))}catch(v){}}b.sort(N);return b}function wa(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);a.nodeType==oa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return D(d)}function J(a,b,c){return function(d,e,f,g,h){e=wa(e[0],b,c);return a(d,e,f,g,h)}}function fa(a,
d,e,f,g,l,k,n,r){function w(a,b,c,d){if(a){c&&(a=J(a,c,d));a.require=K.require;a.directiveName=x;if(T===K||K.$$isolateScope)a=Z(a,{isolateScope:!0});k.push(a)}if(b){c&&(b=J(b,c,d));b.require=K.require;b.directiveName=x;if(T===K||K.$$isolateScope)b=Z(b,{isolateScope:!0});n.push(b)}}function L(a,b,c,d){var e,f="data",g=!1,l=c,k;if(F(b)){k=b.match(h);b=b.substring(k[0].length);k[3]&&(k[1]?k[3]=null:k[1]=k[3]);"^"===k[1]?f="inheritedData":"^^"===k[1]&&(f="inheritedData",l=c.parent());"?"===k[2]&&(g=!0);
e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||l[f]("$"+b+"Controller");if(!e&&!g)throw ja("ctreq",b,a);return e||null}H(b)&&(e=[],s(b,function(b){e.push(L(a,b,c,d))}));return e}function v(a,c,f,g,h){function l(a,b,c){var d;Va(a)||(c=b,b=a,a=t);z&&(d=O);c||(c=z?W.parent():W);return h(a,b,d,c,wa)}var r,w,u,A,O,fb,W,J;d===f?(J=e,W=e.$$element):(W=D(f),J=new Yb(W,e));T&&(A=c.$new(!0));h&&(fb=l,fb.$$boundTransclude=h);C&&(X={},O={},s(C,function(a){var b={$scope:a===T||a.$$isolateScope?A:c,$element:W,
$attrs:J,$transclude:fb};u=a.controller;"@"==u&&(u=J[a.name]);b=p(u,b,!0,a.controllerAs);O[a.name]=b;z||W.data("$"+a.name+"Controller",b.instance);X[a.name]=b}));if(T){E.$$addScopeInfo(W,A,!0,!(ka&&(ka===T||ka===T.$$originalDirective)));E.$$addScopeClass(W,!0);g=X&&X[T.name];var xa=A;g&&g.identifier&&!0===T.bindToController&&(xa=g.instance);s(A.$$isolateBindings=T.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,h,l,k;switch(a.mode){case "@":J.$observe(e,function(a){xa[d]=a});J.$$observers[e].$$scope=
c;J[e]&&(xa[d]=b(J[e])(c));break;case "=":if(f&&!J[e])break;h=P(J[e]);k=h.literal?ga:function(a,b){return a===b||a!==a&&b!==b};l=h.assign||function(){g=xa[d]=h(c);throw ja("nonassign",J[e],T.name);};g=xa[d]=h(c);f=function(a){k(a,xa[d])||(k(a,g)?l(c,a=xa[d]):xa[d]=a);return g=a};f.$stateful=!0;f=a.collection?c.$watchCollection(J[e],f):c.$watch(P(J[e],f),null,h.literal);A.$on("$destroy",f);break;case "&":h=P(J[e]),xa[d]=function(a){return h(c,a)}}})}X&&(s(X,function(a){a()}),X=null);g=0;for(r=k.length;g<
r;g++)w=k[g],$(w,w.isolateScope?A:c,W,J,w.require&&L(w.directiveName,w.require,W,O),fb);var wa=c;T&&(T.template||null===T.templateUrl)&&(wa=A);a&&a(wa,f.childNodes,t,h);for(g=n.length-1;0<=g;g--)w=n[g],$(w,w.isolateScope?A:c,W,J,w.require&&L(w.directiveName,w.require,W,O),fb)}r=r||{};for(var A=-Number.MAX_VALUE,O,C=r.controllerDirectives,X,T=r.newIsolateScopeDirective,ka=r.templateDirective,fa=r.nonTlbTranscludeDirective,da=!1,B=!1,z=r.hasElementTranscludeDirective,aa=e.$$element=D(d),K,x,N,Aa=f,
Q,M=0,R=a.length;M<R;M++){K=a[M];var Pa=K.$$start,gb=K.$$end;Pa&&(aa=wa(d,Pa,gb));N=t;if(A>K.priority)break;if(N=K.scope)K.templateUrl||(I(N)?(Oa("new/isolated scope",T||O,K,aa),T=K):Oa("new/isolated scope",T,K,aa)),O=O||K;x=K.name;!K.templateUrl&&K.controller&&(N=K.controller,C=C||{},Oa("'"+x+"' controller",C[x],K,aa),C[x]=K);if(N=K.transclude)da=!0,K.$$tlb||(Oa("transclusion",fa,K,aa),fa=K),"element"==N?(z=!0,A=K.priority,N=aa,aa=e.$$element=D(Y.createComment(" "+x+": "+e[x]+" ")),d=aa[0],V(g,Za.call(N,
0),d),Aa=E(N,f,A,l&&l.name,{nonTlbTranscludeDirective:fa})):(N=D(Vb(d)).contents(),aa.empty(),Aa=E(N,f));if(K.template)if(B=!0,Oa("template",ka,K,aa),ka=K,N=G(K.template)?K.template(aa,e):K.template,N=Tc(N),K.replace){l=K;N=Tb.test(N)?Uc(Xb(K.templateNamespace,U(N))):[];d=N[0];if(1!=N.length||d.nodeType!==oa)throw ja("tplrt",x,"");V(g,aa,d);R={$attr:{}};N=W(d,[],R);var ba=a.splice(M+1,a.length-(M+1));T&&y(N);a=a.concat(N).concat(ba);Rc(e,R);R=a.length}else aa.html(N);if(K.templateUrl)B=!0,Oa("template",
ka,K,aa),ka=K,K.replace&&(l=K),v=S(a.splice(M,a.length-M),aa,e,g,da&&Aa,k,n,{controllerDirectives:C,newIsolateScopeDirective:T,templateDirective:ka,nonTlbTranscludeDirective:fa}),R=a.length;else if(K.compile)try{Q=K.compile(aa,e,Aa),G(Q)?w(null,Q,Pa,gb):Q&&w(Q.pre,Q.post,Pa,gb)}catch(of){c(of,va(aa))}K.terminal&&(v.terminal=!0,A=Math.max(A,K.priority))}v.scope=O&&!0===O.scope;v.transcludeOnThisElement=da;v.elementTranscludeOnThisElement=z;v.templateOnThisElement=B;v.transclude=Aa;r.hasElementTranscludeDirective=
z;return v}function y(a){for(var b=0,c=a.length;b<c;b++)a[b]=Pb(a[b],{$$isolateScope:!0})}function da(b,e,f,g,h,l,k){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var q;e=a.get(e+"Directive");for(var r=0,p=e.length;r<p;r++)try{q=e[r],(g===t||g>q.priority)&&-1!=q.restrict.indexOf(f)&&(l&&(q=Pb(q,{$$start:l,$$end:k})),b.push(q),h=q)}catch(w){c(w)}}return h}function B(b){if(d.hasOwnProperty(b))for(var c=a.get(b+"Directive"),e=0,f=c.length;e<f;e++)if(b=c[e],b.multiElement)return!0;return!1}function Rc(a,
b){var c=b.$attr,d=a.$attr,e=a.$$element;s(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});s(b,function(b,f){"class"==f?(O(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function S(a,b,c,d,e,f,g,h){var l=[],k,q,n=b[0],p=a.shift(),w=Pb(p,{templateUrl:null,transclude:null,replace:null,$$originalDirective:p}),
P=G(p.templateUrl)?p.templateUrl(b,c):p.templateUrl,u=p.templateNamespace;b.empty();r(L.getTrustedResourceUrl(P)).then(function(r){var L,v;r=Tc(r);if(p.replace){r=Tb.test(r)?Uc(Xb(u,U(r))):[];L=r[0];if(1!=r.length||L.nodeType!==oa)throw ja("tplrt",p.name,P);r={$attr:{}};V(d,b,L);var A=W(L,[],r);I(p.scope)&&y(A);a=A.concat(a);Rc(c,r)}else L=n,b.html(r);a.unshift(w);k=fa(a,L,c,e,b,p,f,g,h);s(d,function(a,c){a==L&&(d[c]=b[0])});for(q=T(b[0].childNodes,e);l.length;){r=l.shift();v=l.shift();var C=l.shift(),
E=l.shift(),A=b[0];if(!r.$$destroyed){if(v!==n){var J=v.className;h.hasElementTranscludeDirective&&p.replace||(A=Vb(L));V(C,D(v),A);O(D(A),J)}v=k.transcludeOnThisElement?X(r,k.transclude,E):E;k(q,r,A,d,v)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(k.transcludeOnThisElement&&(a=X(b,k.transclude,e)),k(q,b,c,d,a)))}}function N(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Oa(a,b,c,d){if(b)throw ja("multidir",
b.name,c.name,a,va(d));}function M(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&E.$$addBindingClass(a);return function(a,c){var e=c.parent();b||E.$$addBindingClass(e);E.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Xb(a,b){a=Q(a||"html");switch(a){case "svg":case "math":var c=Y.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function R(a,b){if("srcdoc"==
b)return L.HTML;var c=ua(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return L.RESOURCE_URL}function Pa(a,c,d,e,f){var h=R(a,e);f=g[e]||f;var k=b(d,!0,h,f);if(k){if("multiple"===e&&"select"===ua(a))throw ja("selmulti",va(a));c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers={});if(l.test(e))throw ja("nodomevents");var n=g[e];n!==d&&(k=n&&b(n,!0,h,f),d=n);k&&(g[e]=k(a),(c[e]||(c[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||
a).$watch(k,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function V(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var l=a.length;g<l;g++,h++)h<l?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=Y.createDocumentFragment();a.appendChild(d);D(c).data(D(d).data());sa?(Rb=!0,sa.cleanData([d])):delete D.cache[d[D.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],D(f).remove(),
a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Z(a,b){return x(function(){return a.apply(null,arguments)},a,b)}function $(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,va(d))}}var Yb=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Yb.prototype={$normalize:ya,$addClass:function(a){a&&0<a.length&&C.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&C.removeClass(this.$$element,a)},$updateClass:function(a,
b){var c=Vc(a,b);c&&c.length&&C.addClass(this.$$element,c);(c=Vc(b,a))&&c.length&&C.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Mc(f,a),h=kf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=uc(a,"-"));g=ua(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=A(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=U(b),l=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,l=/\s/.test(h)?
l:/(,)/,h=h.split(l),l=Math.floor(h.length/2),k=0;k<l;k++)var q=2*k,g=g+A(U(h[q]),!0),g=g+(" "+U(h[q+1]));h=U(h[2*k]).split(/\s/);g+=A(U(h[0]),!0);2===h.length&&(g+=" "+U(h[1]));this[a]=b=g}!1!==d&&(null===b||b===t?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&s(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ha()),e=d[a]||(d[a]=[]);e.push(b);v.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});
return function(){Xa(e,b)}}};var Aa=b.startSymbol(),ka=b.endSymbol(),Tc="{{"==Aa||"}}"==ka?pa:function(a){return a.replace(/\{\{/g,Aa).replace(/}}/g,ka)},gb=/^ngAttr[A-Z]/;E.$$addBindingInfo=k?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:z;E.$$addBindingClass=k?function(a){O(a,"ng-binding")}:z;E.$$addScopeInfo=k?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:z;E.$$addScopeClass=k?function(a,b){O(a,b?"ng-isolate-scope":
"ng-scope")}:z;return E}]}function ya(b){return db(b.replace(Sc,""))}function Vc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Uc(b){b=D(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&pf.call(b,a,1);return b}function Fe(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){Ma(a,"controller");I(a)?x(b,a):b[a]=c};this.allowGlobals=function(){a=
!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!I(a.$scope))throw S("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,l,k){var m,n,q;l=!0===l;k&&F(k)&&(q=k);if(F(g)){k=g.match(c);if(!k)throw qf("ctrlfmt",g);n=k[1];q=q||k[3];g=b.hasOwnProperty(n)?b[n]:wc(h.$scope,n,!0)||(a?wc(e,n,!0):t);tb(g,n,!0)}if(l)return l=(H(g)?g[g.length-1]:g).prototype,m=Object.create(l||null),q&&f(h,q,m,n||g.name),x(function(){d.invoke(g,m,h,n);return m},{instance:m,identifier:q});
m=d.instantiate(g,h,n);q&&f(h,q,m,n||g.name);return m}}]}function Ge(){this.$get=["$window",function(b){return D(b.document)}]}function He(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Zb(b,a){if(F(b)){var c=b.replace(rf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(Wc))||(d=(d=c.match(sf))&&tf[d[0]].test(c));d&&(b=pc(c))}}return b}function Xc(b){var a=ha(),c,d,e;if(!b)return a;s(b.split("\n"),function(b){e=b.indexOf(":");c=Q(U(b.substr(0,
e)));d=U(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Yc(b){var a=I(b)?b:t;return function(c){a||(a=Xc(b));return c?(c=a[Q(c)],void 0===c&&(c=null),c):a}}function Zc(b,a,c,d){if(G(d))return d(b,a,c);s(d,function(d){b=d(b,a,c)});return b}function Ke(){var b=this.defaults={transformResponse:[Zb],transformRequest:[function(a){return I(a)&&"[object File]"!==Da.call(a)&&"[object Blob]"!==Da.call(a)&&"[object FormData]"!==Da.call(a)?$a(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:ra($b),put:ra($b),patch:ra($b)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return y(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=x({},a);b.data=a.data?Zc(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}function d(a){var b,c={};s(a,function(a,d){G(a)?(b=
a(),null!=b&&(c[d]=b)):c[d]=a});return c}if(!ca.isObject(a))throw S("$http")("badreq",a);var e=x({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},a);e.headers=function(a){var c=b.headers,e=x({},a.headers),f,g,c=x({},c.common,c[Q(a.method)]);a:for(f in c){a=Q(f);for(g in e)if(Q(g)===a)continue a;e[f]=c[f]}return d(e)}(a);e.method=vb(e.method);var f=[function(a){var d=a.headers,e=Zc(a.data,Yc(d),t,a.transformRequest);B(e)&&s(d,function(a,b){"content-type"===Q(b)&&
delete d[b]});B(a.withCredentials)&&!B(b.withCredentials)&&(a.withCredentials=b.withCredentials);return m(a,e).then(c,c)},t],g=h.when(e);for(s(u,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var l=f.shift(),g=g.then(a,l)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,e)});
return g};return g}function m(c,f){function l(b,c,d,e){function f(){m(c,b,d,e)}O&&(200<=b&&300>b?O.put(X,[b,c,Xc(d),e]):O.remove(X));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function m(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?C.resolve:C.reject)({data:a,status:b,headers:Yc(d),config:c,statusText:e})}function w(a){m(a.data,a.status,ra(a.headers()),a.statusText)}function u(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,1)}var C=h.defer(),A=C.promise,O,E,s=c.headers,X=n(c.url,
c.params);k.pendingRequests.push(c);A.then(u,u);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(O=I(c.cache)?c.cache:I(b.cache)?b.cache:q);O&&(E=O.get(X),y(E)?E&&G(E.then)?E.then(w,w):H(E)?m(E[1],E[0],ra(E[2]),E[3]):m(E,200,{},"OK"):O.put(X,A));B(E)&&((E=$c(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:t)&&(s[c.xsrfHeaderName||b.xsrfHeaderName]=E),d(c.method,X,f,l,s,c.timeout,c.withCredentials,c.responseType));return A}function n(a,b){if(!b)return a;var c=[];Ed(b,
function(a,b){null===a||B(a)||(H(a)||(a=[a]),s(a,function(a){I(a)&&(a=qa(a)?a.toISOString():$a(a));c.push(Fa(b)+"="+Fa(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var q=f("$http"),u=[];s(c,function(a){u.unshift(F(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){s(arguments,function(a){k[a]=function(b,c){return k(x(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){s(arguments,function(a){k[a]=function(b,c,d){return k(x(d||{},{method:a,
url:b,data:c}))}})})("post","put","patch");k.defaults=b;return k}]}function uf(){return new M.XMLHttpRequest}function Le(){this.$get=["$browser","$window","$document",function(b,a,c){return vf(b,uf,b.defer,a.angular.callbacks,c[0])}]}function vf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,u="unknown";a&&("load"!==
a.type||d[b].called||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);c&&c(g,u)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,l,k,m,n,q,u){function r(){v&&v();w&&w.abort()}function P(a,d,e,f,g){C!==t&&c.cancel(C);v=w=null;a(d,e,f,g);b.$$completeOutstandingRequest(z)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==Q(e)){var p="_"+(d.counter++).toString(36);d[p]=function(a){d[p].data=a;d[p].called=!0};var v=f(h.replace("JSON_CALLBACK",
"angular.callbacks."+p),p,function(a,b){P(k,a,d[p].data,"",b);d[p]=z})}else{var w=a();w.open(e,h,!0);s(m,function(a,b){y(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==Ba(h).protocol?404:0);P(k,c,b,w.getAllResponseHeaders(),a)};e=function(){P(k,-1,null,null,"")};w.onerror=e;w.onabort=e;q&&(w.withCredentials=!0);if(u)try{w.responseType=u}catch(L){if("json"!==u)throw L;}w.send(l||
null)}if(0<n)var C=c(r,n);else n&&G(n.then)&&n.then(r)}}function Ie(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,u,r){function P(c){return c.replace(k,b).replace(m,a)}function p(a){try{var b=a;a=u?e.getTrusted(u,b):e.valueOf(b);var c;if(r&&!y(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=
""+a;break;default:a=$a(a)}c=a}return c}catch(g){c=ac("interr",f,g.toString()),d(c)}}r=!!r;for(var v,w,L=0,C=[],A=[],O=f.length,E=[],s=[];L<O;)if(-1!=(v=f.indexOf(b,L))&&-1!=(w=f.indexOf(a,v+h)))L!==v&&E.push(P(f.substring(L,v))),L=f.substring(v+h,w),C.push(L),A.push(c(L,p)),L=w+l,s.push(E.length),E.push("");else{L!==O&&E.push(P(f.substring(L)));break}if(u&&1<E.length)throw ac("noconcat",f);if(!g||C.length){var X=function(a){for(var b=0,c=C.length;b<c;b++){if(r&&B(a[b]))return;E[s[b]]=a[b]}return E.join("")};
return x(function(a){var b=0,c=C.length,e=Array(c);try{for(;b<c;b++)e[b]=A[b](a);return X(e)}catch(g){a=ac("interr",f,g.toString()),d(a)}},{exp:f,expressions:C,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(A,function(c,e){var f=X(c);G(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,l=a.length,k=new RegExp(b.replace(/./g,f),"g"),m=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function Je(){this.$get=["$rootScope",
"$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var m=a.setInterval,n=a.clearInterval,q=0,u=y(k)&&!k,r=(u?d:c).defer(),P=r.promise;l=y(l)?l:0;P.then(null,null,e);P.$$intervalId=m(function(){r.notify(q++);0<l&&q>=l&&(r.resolve(q),n(P.$$intervalId),delete f[P.$$intervalId]);u||b.$apply()},h);f[P.$$intervalId]=r;return P}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}
function Rd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function bc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=rb(b[a]);return b.join("/")}function ad(b,a){var c=Ba(b);a.$$protocol=
c.protocol;a.$$host=c.hostname;a.$$port=ba(c.port)||wf[c.protocol]||null}function bd(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Ba(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=rc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function za(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ha(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Gb(b){return b.replace(/(#.+)|#$/,
"$1")}function cc(b){return b.substr(0,Ha(b).lastIndexOf("/")+1)}function dc(b,a){this.$$html5=!0;a=a||"";var c=cc(b);ad(b,this);this.$$parse=function(a){var b=za(c,a);if(!F(b))throw Hb("ipthprfx",a,c);bd(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Qb(this.$$search),b=this.$$hash?"#"+rb(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;(f=za(b,d))!==t?(g=f,g=(f=za(a,f))!==t?c+(za("/",f)||f):b+g):(f=za(c,d))!==t?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function ec(b,a){var c=cc(b);ad(b,this);this.$$parse=function(d){d=za(b,d)||za(c,d);var e;"#"===d.charAt(0)?(e=za(a,d),B(e)&&(e=d)):e=this.$$html5?d:"";bd(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Qb(this.$$search),e=this.$$hash?
"#"+rb(this.$$hash):"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ha(b)==Ha(a)?(this.$$parse(a),!0):!1}}function cd(b,a){this.$$html5=!0;ec.apply(this,arguments);var c=cc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ha(d)?f=d:(g=za(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Qb(this.$$search),e=this.$$hash?"#"+rb(this.$$hash):
"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Ib(b){return function(){return this[b]}}function dd(b,a){return function(c){if(B(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Me(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return Wa(b)?(a.enabled=b,this):I(b)?(Wa(b.enabled)&&(a.enabled=b.enabled),Wa(b.requireBase)&&(a.requireBase=b.requireBase),Wa(b.rewriteLinks)&&
(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,m;m=d.baseHref();var n=d.url(),q;if(a.enabled){if(!m&&a.requireBase)throw Hb("nobase");q=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=e.history?dc:cd}else q=
Ha(n),m=ec;k=new m(q,"#"+b);k.$$parseLinkUrl(n,n);k.$$state=d.state();var u=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=D(b.target);"a"!==ua(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");I(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Ba(h.animVal).href);u.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,
l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});Gb(k.absUrl())!=Gb(n)&&d.url(k.absUrl(),!0);var r=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(r=!1,l(d,e)))});c.$$phase||c.$digest()});c.$watch(function(){var a=Gb(d.url()),b=Gb(k.absUrl()),f=d.state(),g=k.$$replace,
q=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(r||q)r=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(q&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function Ne(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?
"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||z;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];s(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ta(b,a){if("__defineGetter__"===
b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw la("isecfld",a);return b}function ma(b,a){if(b){if(b.constructor===b)throw la("isecfn",a);if(b.window===b)throw la("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw la("isecdom",a);if(b===Object)throw la("isecobj",a);}return b}function fc(b){return b.constant}function hb(b,a,c,d,e){ma(b,e);ma(a,e);c=c.split(".");for(var f,g=0;1<c.length;g++){f=ta(c.shift(),e);var h=0===g&&a&&a[f]||
b[f];h||(h={},b[f]=h);b=ma(h,e)}f=ta(c.shift(),e);ma(b[f],e);return b[f]=d}function Qa(b){return"constructor"==b}function ed(b,a,c,d,e,f,g){ta(b,f);ta(a,f);ta(c,f);ta(d,f);ta(e,f);var h=function(a){return ma(a,f)},l=g||Qa(b)?h:pa,k=g||Qa(a)?h:pa,m=g||Qa(c)?h:pa,n=g||Qa(d)?h:pa,q=g||Qa(e)?h:pa;return function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=l(h[b]);if(!a)return h;if(null==h)return t;h=k(h[a]);if(!c)return h;if(null==h)return t;h=m(h[c]);if(!d)return h;if(null==h)return t;
h=n(h[d]);return e?null==h?t:h=q(h[e]):h}}function xf(b,a){return function(c,d){return b(c,d,ma,a)}}function yf(b,a,c){var d=a.expensiveChecks,e=d?zf:Af,f=e[b];if(f)return f;var g=b.split("."),h=g.length;if(a.csp)f=6>h?ed(g[0],g[1],g[2],g[3],g[4],c,d):function(a,b){var e=0,f;do f=ed(g[e++],g[e++],g[e++],g[e++],g[e++],c,d)(a,b),b=t,a=f;while(e<h);return f};else{var l="";d&&(l+="s = eso(s, fe);\nl = eso(l, fe);\n");var k=d;s(g,function(a,b){ta(a,c);var e=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+
"."+a;if(d||Qa(a))e="eso("+e+", fe)",k=!0;l+="if(s == null) return undefined;\ns="+e+";\n"});l+="return s;";a=new Function("s","l","eso","fe",l);a.toString=ea(l);k&&(a=xf(a,c));f=a}f.sharedGetter=!0;f.assign=function(a,c,d){return hb(a,d,b,c,b)};return e[b]=f}function gc(b){return G(b.valueOf)?b.valueOf():Bf.call(b)}function Oe(){var b=ha(),a=ha();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,
b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=gc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var l=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,l)||(h=d(a),l=b&&gc(b));return h},b,c)}for(var k=[],q=0,n=e.length;q<n;q++)k[q]=
g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var l=e[c](a);if(b||(b=!g(l,k[c])))k[c]=l&&gc(l)}b&&(h=d(a));return h},b,c)}function l(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;G(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function k(a,b,c,d){function e(a){var b=!0;s(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;G(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&
f()})},c)}function m(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){G(b)&&b.apply(this,arguments);e()},c)}function n(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==k&&c!==l?function(c,d){var e=a(c,d);return b(e,c,d)}:function(c,d){var e=a(c,d),f=b(e,c,d);return y(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=[a]);return c}var q={csp:d.csp,expensiveChecks:!1},u={csp:d.csp,expensiveChecks:!0};
return function(d,f,g){var v,w,L;switch(typeof d){case "string":L=d=d.trim();var C=g?a:b;v=C[L];v||(":"===d.charAt(0)&&":"===d.charAt(1)&&(w=!0,d=d.substring(2)),g=g?u:q,v=new hc(g),v=(new ib(v,c,g)).parse(d),v.constant?v.$$watchDelegate=m:w?(v=e(v),v.$$watchDelegate=v.literal?k:l):v.inputs&&(v.$$watchDelegate=h),C[L]=v);return n(v,f);case "function":return n(d,f);default:return n(z,f)}}}]}function Qe(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return fd(function(a){b.$evalAsync(a)},
a)}]}function Re(){this.$get=["$browser","$exceptionHandler",function(b,a){return fd(function(a){b.defer(a)},a)}]}function fd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=t;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];
try{G(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=S("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,
b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(I(b)||G(b))d=b&&b.then;G(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||
this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(G(b)?b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{G(c)&&(d=c())}catch(e){return l(e,!1)}return d&&G(d.then)?
d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},n=function u(a){if(!G(a))throw h("norslvr",a);if(!(this instanceof u))return new u(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};n.defer=function(){return new g};n.reject=function(a){var b=new g;b.reject(a);return b.promise};n.when=m;n.all=function(a){var b=new g,c=0,d=H(a)?[]:{};s(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||
(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return n}function $e(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Pe(){var b=
10,a=S("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(e,f,g,h){function l(){this.$id=++ob;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function k(b){if(r.$$phase)throw a("inprog",r.$$phase);r.$$phase=b}function m(a,
b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}function q(){for(;v.length;)try{v.shift()()}catch(a){f(a)}d=null}function u(){null===d&&(d=h.defer(function(){r.$apply(q)}))}l.prototype={constructor:l,$new:function(a,b){function c(){d.$$destroyed=!0}var d;b=b||this;a?(d=new l,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners=
{};this.$$listenerCount={};this.$id=++ob;this.$$ChildScope=null},this.$$ChildScope.prototype=this),d=new this.$$ChildScope);d.$parent=b;d.$$prevSibling=b.$$childTail;b.$$childHead?(b.$$childTail.$$nextSibling=d,b.$$childTail=d):b.$$childHead=b.$$childTail=d;(a||b!=this)&&d.$on("$destroy",c);return d},$watch:function(a,b,d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;G(b)||(h.fn=z);f||(f=this.$$watchers=[]);f.unshift(h);
return function(){Xa(f,h);c=null}},$watchGroup:function(a,b){function c(){h=!1;l?(l=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,l=!0;if(!a.length){var k=!0;g.$evalAsync(function(){k&&b(e,e,g)});return function(){k=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});s(a,function(a,b){var l=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(l)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,
b){function c(a){e=a;var b,d,g,h;if(!B(e)){if(I(e))if(Ta(e))for(f!==q&&(f=q,u=f.length=0,k++),a=e.length,u!==a&&(k++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(k++,f[b]=g);else{f!==m&&(f=m={},u=0,k++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(k++,f[b]=g)):(u++,f[b]=g,k++));if(u>a)for(b in k++,f)e.hasOwnProperty(b)||(u--,delete f[b])}else f!==e&&(f=e,k++);return k}}c.$stateful=!0;var d=this,e,f,h,l=1<b.length,k=0,n=g(a,c),q=[],m=
{},p=!0,u=0;return this.$watch(n,function(){p?(p=!1,b(e,e,d)):b(e,h,d);if(l)if(I(e))if(Ta(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)sc.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var e,g,l,m,u,v,s=b,t,W=[],y,J;k("$digest");h.$$checkUrlChange();this===r&&null!==d&&(h.defer.cancel(d),q());c=null;do{v=!1;for(t=this;P.length;){try{J=P.shift(),J.scope.$eval(J.expression,J.locals)}catch(D){f(D)}c=null}a:do{if(m=t.$$watchers)for(u=m.length;u--;)try{if(e=m[u])if((g=
e.get(t))!==(l=e.last)&&!(e.eq?ga(g,l):"number"===typeof g&&"number"===typeof l&&isNaN(g)&&isNaN(l)))v=!0,c=e,e.last=e.eq?Ea(g,null):g,e.fn(g,l===n?g:l,t),5>s&&(y=4-s,W[y]||(W[y]=[]),W[y].push({msg:G(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,newVal:g,oldVal:l}));else if(e===c){v=!1;break a}}catch(B){f(B)}if(!(m=t.$$childHead||t!==this&&t.$$nextSibling))for(;t!==this&&!(m=t.$$nextSibling);)t=t.$parent}while(t=m);if((v||P.length)&&!s--)throw r.$$phase=null,a("infdig",b,W);}while(v||P.length);
for(r.$$phase=null;p.length;)try{p.shift()()}catch(da){f(da)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==r){for(var b in this.$$listenerCount)m(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);
this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=z;this.$on=this.$watch=this.$watchGroup=function(){return z};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){r.$$phase||P.length||h.defer(function(){P.length&&r.$digest()});P.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){p.push(a)},$apply:function(a){try{return k("$apply"),
this.$eval(a)}catch(b){f(b)}finally{r.$$phase=null;try{r.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&v.push(b);u()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,m(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,
stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},l=Ya([h],arguments,1),k,m;do{d=e.$$listeners[a]||c;h.currentScope=e;k=0;for(m=d.length;k<m;k++)if(d[k])try{d[k].apply(null,l)}catch(n){f(n)}else d.splice(k,1),k--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;
for(var g=Ya([e],arguments,1),h,l;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(l=d.length;h<l;h++)if(d[h])try{d[h].apply(null,g)}catch(k){f(k)}else d.splice(h,1),h--,l--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var r=new l,P=r.$$asyncQueue=[],p=r.$$postDigestQueue=[],v=r.$$applyAsyncQueue=[];return r}]}function Sd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;
this.aHrefSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Ba(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Cf(b){if("self"===b)return b;if(F(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=gd(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(pb(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function hd(b){var a=
[];y(b)&&s(b,function(b){a.push(Cf(b))});return a}function Te(){this.SCE_CONTEXTS=na;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=hd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=hd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?$c(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};
b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[na.HTML]=e(g);h[na.CSS]=e(g);h[na.URL]=e(g);h[na.JS]=e(g);h[na.RESOURCE_URL]=e(h[na.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ca("icontext",a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===
e||e===t||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===na.RESOURCE_URL){var g=Ba(e.toString()),n,q,u=!1;n=0;for(q=b.length;n<q;n++)if(d(b[n],g)){u=!0;break}if(u)for(n=0,q=a.length;n<q;n++)if(d(a[n],g)){u=!1;break}if(u)return e;throw Ca("insecurl",e.toString());}if(c===na.HTML)return f(e);throw Ca("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Se(){var b=!0;this.enabled=function(a){arguments.length&&
(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Ra)throw Ca("iequirks");var d=ra(na);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=pa);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;s(na,function(a,b){var c=Q(b);d[db("parse_as_"+c)]=function(b){return e(a,
b)};d[db("get_trusted_"+c)]=function(b){return f(a,b)};d[db("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function Ue(){this.$get=["$window","$document",function(b,a){var c={},d=ba((/android (\d+)/.exec(Q((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,m=!1;if(l){for(var n in l)if(k=h.exec(n)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");
k=!!("transition"in l||g+"Transition"in l);m=!!("animation"in l||g+"Animation"in l);!d||k&&m||(k=F(f.body.style.webkitTransition),m=F(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=Ra)return!1;if(B(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:bb(),vendorPrefix:g,transitions:k,animations:m,android:d}}]}function We(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;
var g=a.defaults&&a.defaults.transformResponse;H(g)?g=g.filter(function(a){return a!==Zb}):g===Zb&&(g=null);return a.get(e,{cache:b,transformResponse:g}).finally(function(){d.totalPendingRequests--}).then(function(a){return a.data},function(a){if(!f)throw ja("tpload",e);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function Xe(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];s(a,function(a){var d=
ca.element(a).data("$binding");d&&s(d,function(d){c?(new RegExp("(^|\\s)"+gd(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Ye(){this.$get=
["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){var m=y(k)&&!k,n=(m?d:c).defer(),q=n.promise;l=a.defer(function(){try{n.resolve(f())}catch(a){n.reject(a),e(a)}finally{delete g[q.$$timeoutId]}m||b.$apply()},l);q.$$timeoutId=l;g[l]=n;return q}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Ba(b){Ra&&(Z.setAttribute("href",b),b=Z.href);
Z.setAttribute("href",b);return{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function $c(b){b=F(b)?Ba(b):b;return b.protocol===id.protocol&&b.host===id.host}function Ze(){this.$get=ea(M)}function Ec(b){function a(c,d){if(I(c)){var e={};s(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+
"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",jd);a("date",kd);a("filter",Df);a("json",Ef);a("limitTo",Ff);a("lowercase",Gf);a("number",ld);a("orderBy",md);a("uppercase",Hf)}function Df(){return function(b,a,c){if(!H(b))return b;var d;switch(typeof a){case "function":break;case "boolean":case "number":case "string":d=!0;case "object":a=If(a,c,d);break;default:return b}return b.filter(a)}}function If(b,a,c){var d=I(b)&&"$"in
b;!0===a?a=ga:G(a)||(a=function(a,b){if(I(a)||I(b))return!1;a=Q(""+a);b=Q(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!I(e)?Ia(e,b.$,a,!1):Ia(e,b,a,c)}}function Ia(b,a,c,d,e){var f=typeof b,g=typeof a;if("string"===g&&"!"===a.charAt(0))return!Ia(b,a.substring(1),c,d);if(H(b))return b.some(function(b){return Ia(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&Ia(b[h],a,c,!0))return!0;return e?!1:Ia(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!G(e)&&
(f="$"===h,!Ia(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function jd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){B(d)&&(d=a.CURRENCY_SYM);B(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:nd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function ld(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:nd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function nd(b,a,c,d,e){if(!isFinite(b)||I(b))return"";var f=
0>b;b=Math.abs(b);var g=b+"",h="",l=[],k=!1;if(-1!==g.indexOf("e")){var m=g.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?b=0:(h=g,k=!0)}if(k)0<e&&1>b&&(h=b.toFixed(e),b=parseFloat(h));else{g=(g.split(od)[1]||"").length;B(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(od),k=g[0],g=g[1]||"",n=0,q=a.lgSize,u=a.gSize;if(k.length>=q+u)for(n=k.length-q,m=0;m<n;m++)0===(n-m)%u&&0!==m&&(h+=c),h+=k.charAt(m);for(m=n;m<k.length;m++)0===
(k.length-m)%q&&0!==m&&(h+=c),h+=k.charAt(m);for(;g.length<e;)g+="0";e&&"0"!==e&&(h+=d+g.substr(0,e))}0===b&&(f=!1);l.push(f?a.negPre:a.posPre,h,f?a.negSuf:a.posSuf);return l.join("")}function Jb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Jb(e,a,d)}}function Kb(b,a){return function(c,d){var e=c["get"+b](),f=vb(a?"SHORT"+b:b);return d[f][e]}}
function pd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function qd(b){return function(a){var c=pd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Jb(a,b)}}function kd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=ba(b[9]+b[10]),g=ba(b[9]+b[11]));h.call(a,ba(b[1]),ba(b[2])-1,ba(b[3]));f=ba(b[4]||0)-f;
g=ba(b[5]||0)-g;h=ba(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;F(c)&&(c=Jf.test(c)?ba(c):a(c));V(c)&&(c=new Date(c));if(!qa(c))return c;for(;e;)(k=Kf.exec(e))?(h=Ya(h,k,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+
c.getTimezoneOffset()));s(h,function(a){l=Lf[a];g+=l?l(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ef(){return function(b,a){B(a)&&(a=2);return $a(b,a)}}function Ff(){return function(b,a){V(b)&&(b=b.toString());return H(b)||F(b)?(a=Infinity===Math.abs(Number(a))?Number(a):ba(a))?0<a?b.slice(0,a):b.slice(a):F(b)?"":[]:b}}function md(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;
default:return!1}}function g(a){return null===a?"null":"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))||"function"===typeof a.toString&&(a=a.toString(),f(a))?a:""}function h(a,b){var c=typeof a,d=typeof b;c===d&&"object"===c&&(a=g(a),b=g(b));return c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Ta(a))return a;c=H(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||pa;if(F(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);
if(""===a)return e(h,c);d=b(a);if(d.constant){var f=d();return e(function(a,b){return h(a[f],b[f])},c)}}return e(function(a,b){return h(d(a),d(b))},c)});return Za.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ja(b){G(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ea(b)}function rd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Lb;f.$error={};f.$$success={};f.$pending=t;f.$name=e(a.name||a.ngForm||
"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){s(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){s(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ma(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];s(f.$pending,function(b,c){f.$setValidity(c,
null,a)});s(f.$error,function(b,c){f.$setValidity(c,null,a)});s(f.$$success,function(b,c){f.$setValidity(c,null,a)});Xa(g,a)};sd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Xa(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Sa);d.addClass(b,Mb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Sa,Mb+" ng-submitted");f.$dirty=!1;f.$pristine=
!0;f.$submitted=!1;s(g,function(a){a.$setPristine()})};f.$setUntouched=function(){s(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function ic(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function jb(b,a,c,d,e,f){var g=Q(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=
a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=U(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}
function Nb(b,a){return function(c,d){var e,f;if(qa(c))return c;if(F(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(Mf.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},s(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,
1E3*f.sss||0)}return NaN}}function kb(b,a,c,d){return function(e,f,g,h,l,k,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function q(a){return y(a)?qa(a)?a:c(a):t}td(e,f,g,h);jb(e,f,g,h,l,k);var u=h&&h.$options&&h.$options.timezone,r;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,r),"UTC"===u&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):t});h.$formatters.push(function(a){if(a&&!qa(a))throw Ob("datefmt",a);if(n(a)){if((r=a)&&"UTC"===
u){var b=6E4*r.getTimezoneOffset();r=new Date(r.getTime()+b)}return m("date")(a,d,u)}r=null;return""});if(y(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!n(a)||B(s)||c(a)>=s};g.$observe("min",function(a){s=q(a);h.$validate()})}if(y(g.max)||g.ngMax){var p;h.$validators.max=function(a){return!n(a)||B(p)||c(a)<=p};g.$observe("max",function(a){p=q(a);h.$validate()})}}}function td(b,a,c,d){(d.$$hasNativeValidators=I(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};
return c.badInput&&!c.typeMismatch?t:b})}function ud(b,a,c,d,e){if(y(d)){b=b(d);if(!b.constant)throw S("ngModel")("constexpr",c,d);return b(a)}return e}function jc(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){if(!H(a)){if(F(a))return a.split(" ");if(I(a)){var b=[];s(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,
g,h){function l(a,b){var c=g.data("$classCounts")||{},d=[];s(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!m){var u=l(k,1);h.$addClass(u)}else if(!ga(b,m)){var r=e(m),u=d(k,r),k=d(r,k),u=l(u,1),k=l(k,-1);u&&u.length&&c.addClass(g,u);k&&k.length&&c.removeClass(g,k)}}m=ra(b)}var m;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",
function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function sd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+uc(b,"-"):"";a(lb+b,!0===c);a(vd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[vd]=!(f[lb]=e.hasClass(lb));d.$setValidity=function(b,e,f){e===t?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&
h(d.$pending,b,f),wd(d.$pending)&&(d.$pending=t));Wa(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(xd,!0),d.$valid=d.$invalid=t,c("",null)):(a(xd,!1),d.$valid=wd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?t:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function wd(b){if(b)for(var a in b)return!1;return!0}var Nf=/^\/(.+)\/([a-z]*)$/,Q=function(b){return F(b)?b.toLowerCase():
b},sc=Object.prototype.hasOwnProperty,vb=function(b){return F(b)?b.toUpperCase():b},Ra,D,sa,Za=[].slice,pf=[].splice,Of=[].push,Da=Object.prototype.toString,Ka=S("ng"),ca=M.angular||(M.angular={}),cb,ob=0;Ra=Y.documentMode;z.$inject=[];pa.$inject=[];var H=Array.isArray,U=function(b){return F(b)?b.trim():b},gd=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},bb=function(){if(y(bb.isActive_))return bb.isActive_;var b=!(!Y.querySelector("[ng-csp]")&&!Y.querySelector("[data-ng-csp]"));
if(!b)try{new Function("")}catch(a){b=!0}return bb.isActive_=b},sb=["ng-","data-ng-","ng:","x-ng-"],Md=/[A-Z]/g,vc=!1,Rb,oa=1,qb=3,Qd={full:"1.3.13",major:1,minor:3,dot:13,codeName:"meticulous-riffleshuffle"};R.expando="ng339";var Ab=R.cache={},hf=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var cf=/([\:\-\_]+(.))/g,df=/^moz([A-Z])/,Pf={mouseleave:"mouseout",mouseenter:"mouseover"},Ub=S("jqLite"),gf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Tb=/<|&#?\w+;/,ef=/<([\w:]+)/,ff=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
ia={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option;ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead;ia.th=ia.td;var La=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===Y.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(M).on("load",a))},
toString:function(){var b=[];s(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?D(this[b]):D(this[this.length+b])},length:0,push:Of,sort:[].sort,splice:[].splice},Fb={};s("multiple selected checked disabled readOnly required open".split(" "),function(b){Fb[Q(b)]=b});var Nc={};s("input select option textarea button form details".split(" "),function(b){Nc[b]=!0});var Oc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};
s({data:Wb,removeData:yb},function(b,a){R[a]=b});s({data:Wb,inheritedData:Eb,scope:function(b){return D.data(b,"$scope")||Eb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return D.data(b,"$isolateScope")||D.data(b,"$isolateScopeNoTemplate")},controller:Jc,injector:function(b){return Eb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Bb,css:function(b,a,c){a=db(a);if(y(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=Q(a);if(Fb[d])if(y(c))c?
(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||z).specified?d:t;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(B(b)){var d=a.nodeType;return d===oa||d===qb?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(B(a)){if(b.multiple&&"select"===ua(b)){var c=[];s(b.options,function(a){a.selected&&
c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(B(a))return b.innerHTML;xb(b,!0);b.innerHTML=a},empty:Kc},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Kc&&(2==b.length&&b!==Bb&&b!==Jc?a:d)===t){if(I(a)){for(e=0;e<g;e++)if(b===Wb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});
s({removeData:yb,on:function a(c,d,e,f){if(y(f))throw Ub("onargs");if(Fc(c)){var g=zb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=lf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Pf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Ic,one:function(a,c,d){a=D(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,
d)},replaceWith:function(a,c){var d,e=a.parentNode;xb(a);s(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];s(a.childNodes,function(a){a.nodeType===oa&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===oa||11===d){c=new R(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===oa){var d=a.firstChild;s(new R(c),function(c){a.insertBefore(c,
d)})}},wrap:function(a,c){c=D(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Lc,detach:function(a){Lc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Db,removeClass:Cb,toggleClass:function(a,c,d){c&&s(c.split(" "),function(c){var f=d;B(f)&&(f=!Bb(a,c));(f?Db:Cb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},
find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Vb,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=zb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:z,type:g,target:a},c.type&&(e=x(e,
c)),c=ra(h),f=d?[e].concat(d):[e],s(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)B(g)?(g=a(this[h],c,e,f),y(g)&&(g=D(g))):Hc(g,a(this[h],c,e,f));return y(g)?g:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});eb.prototype={put:function(a,c){this[Na(a,this.nextUid)]=c},get:function(a){return this[Na(a,this.nextUid)]},remove:function(a){var c=this[a=Na(a,this.nextUid)];delete this[a];
return c}};var Qc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Qf=/,/,Rf=/^\s*(_?)(\S+?)\1\s*$/,Pc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ga=S("$injector");ab.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw F(d)&&d||(d=a.name||mf(a)),Ga("strictdi",d);c=a.toString().replace(Pc,"");c=c.match(Qc);s(c[1].split(Qf),function(a){a.replace(Rf,function(a,c,d){e.push(d)})})}a.$inject=e}}else H(a)?(c=a.length-1,tb(a[c],"fn"),e=a.slice(0,c)):tb(a,"fn",!0);return e};
var Sf=S("$animate"),Ce=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Sf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=
d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=ha();s((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});s(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function l(){m||(m=a.defer(),d(function(){m.resolve();m=null}));return m.promise}function k(a,c){if(ca.isObject(c)){var d=x(c.from||{},c.to||{});a.css(d)}}var m;return{animate:function(a,
c,d){k(a,{from:c,to:d});return l()},enter:function(a,c,d,e){k(a,e);d?d.after(a):c.prepend(a);return l()},leave:function(a,c){a.remove();return l()},move:function(a,c,d,e){return this.enter(a,c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=D(a);c=F(c)?c:H(c)?c.join(" "):"";s(a,function(a){Db(a,c)});k(a,d);return l()},removeClass:function(a,c,d){return this.setClass(a,[],c,d)},$$removeClassImmediately:function(a,c,d){a=D(a);c=F(c)?c:H(c)?c.join(" "):
"";s(a,function(a){Cb(a,c)});k(a,d);return l()},setClass:function(a,c,d,e){var k=this,l=!1;a=D(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=ca.extend(m.options||{},e)):(m={classes:{},options:e},l=!0);e=m.classes;c=H(c)?c:c.split(" ");d=H(d)?d:d.split(" ");h(e,c,!0);h(e,d,!1);l&&(m.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));
return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,c);d&&this.$$removeClassImmediately(a,d);k(a,e);return l()},enabled:z,cancel:z}}]}],ja=S("$compile");xc.$inject=["$provide","$$sanitizeUriProvider"];var Sc=/^((?:x|data)[\:\-_])/i,qf=S("$controller"),Wc="application/json",$b={"Content-Type":Wc+";charset=utf-8"},sf=/^\[|^\{(?!\{)/,tf={"[":/]$/,"{":/}$/},rf=/^\)\]\}',?\n/,ac=S("$interpolate"),Tf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,wf={http:80,https:443,ftp:21},Hb=
S("$location"),Uf={$$html5:!1,$$replace:!1,absUrl:Ib("$$absUrl"),url:function(a){if(B(a))return this.$$url;var c=Tf.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Ib("$$protocol"),host:Ib("$$host"),port:Ib("$$port"),path:dd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(F(a)||V(a))a=
a.toString(),this.$$search=rc(a);else if(I(a))a=Ea(a,{}),s(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Hb("isrcharg");break;default:B(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:dd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};s([cd,ec,dc],function(a){a.prototype=Object.create(Uf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==dc||!this.$$html5)throw Hb("nostate");
this.$$state=B(c)?null:c;return this}});var la=S("$parse"),Vf=Function.prototype.call,Wf=Function.prototype.apply,Xf=Function.prototype.bind,mb=ha();s({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;mb[c]=a});mb["this"]=function(a){return a};mb["this"].sharedGetter=!0;var nb=x(ha(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?d+e:d:y(e)?e:t},"-":function(a,c,d,e){d=d(a,
c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,
c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Yf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},hc=function(a){this.options=a};hc.prototype={constructor:hc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();
else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=nb[c],f=nb[d];nb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+
a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw la("lexerr",a,c,this.text);
},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=Q(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=
this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=
4,d+=String.fromCharCode(parseInt(f,16))):d+=Yf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var ib=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};ib.ZERO=x(function(){return 0},{sharedGetter:!0,constant:!0});ib.prototype={constructor:ib,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",
this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier&&this.peek().text in mb?a=mb[this.consume().text]:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,
d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw la("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw la("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===
f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){if(0===this.tokens.length)throw la("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},unaryFn:function(a,c){var d=nb[a];return x(function(a,f){return d(a,f,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,c,d,e){var f=nb[c];return x(function(c,e){return f(c,e,a,d)},{constant:a.constant&&
d.constant,inputs:!e&&[a,d]})},identifier:function(){for(var a=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)a+=this.consume().text+this.consume().text;return yf(a,this.options,this.text)},constant:function(){var a=this.consume().value;return x(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,
d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.$filter(this.consume().text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());var f=[a].concat(d||[]);return x(function(f,h){var l=a(f,h);if(e){e[0]=l;for(l=d.length;l--;)e[l+1]=d[l](f,h);return c.apply(t,e)}return c(l)},{constant:!c.$stateful&&f.every(fc),inputs:!c.$stateful&&f})},expression:function(){return this.assignment()},
assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),x(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c;if(this.expect("?")&&(c=this.assignment(),this.consume(":"))){var d=this.assignment();return x(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})}return a},
logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},logicalAND:function(){for(var a=this.equality(),c;c=this.expect("&&");)a=this.binaryFn(a,c.text,this.equality(),!0);return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a=this.binaryFn(a,c.text,this.relational());return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a=this.binaryFn(a,c.text,
this.additive());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.text,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.text,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(ib.ZERO,a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var c=
this.identifier();return x(function(d,e,f){d=f||a(d,e);return null==d?t:c(d)},{assign:function(d,e,f){var g=a(d,f);g||a.assign(d,g={},f);return c.assign(g,e)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return x(function(e,f){var g=a(e,f),h=d(e,f);ta(h,c);return g?ma(g[h],c):t},{assign:function(e,f,g){var h=ta(d(e,g),c),l=ma(a(e,g),c);l||a.assign(e,l={},g);return l[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());
while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var l=c?c(g,h):y(c)?t:g,k=a(g,h,l)||z;if(f)for(var m=d.length;m--;)f[m]=ma(d[m](g,h),e);ma(l,e);if(k){if(k.constructor===k)throw la("isecfn",e);if(k===Vf||k===Wf||k===Xf)throw la("isecff",e);}l=k.apply?k.apply(l,f):k(f[0],f[1],f[2],f[3],f[4]);f&&(f.length=0);return ma(l,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))
}this.consume("]");return x(function(c,d){for(var e=[],f=0,g=a.length;f<g;f++)e.push(a[f](c,d));return e},{literal:!0,constant:a.every(fc),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.consume();d.constant?a.push(d.value):d.identifier?a.push(d.text):this.throwError("invalid key",d);this.consume(":");c.push(this.expression())}while(this.expect(","))}this.consume("}");return x(function(d,f){for(var g={},h=0,l=c.length;h<l;h++)g[a[h]]=
c[h](d,f);return g},{literal:!0,constant:c.every(fc),inputs:c})}};var Af=ha(),zf=ha(),Bf=Object.prototype.valueOf,Ca=S("$sce"),na={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ja=S("$compile"),Z=Y.createElement("a"),id=Ba(M.location.href);Ec.$inject=["$provide"];jd.$inject=["$locale"];ld.$inject=["$locale"];var od=".",Lf={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:Kb("Month"),MMM:Kb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",
1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:Kb("Day"),EEE:Kb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Jb(Math[0<a?"floor":"ceil"](a/60),2)+Jb(Math.abs(a%60),2))},ww:qd(2),w:qd(1)},Kf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,Jf=/^\-?\d+$/;
kd.$inject=["$locale"];var Gf=ea(Q),Hf=ea(vb);md.$inject=["$parse"];var Td=ea({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===Da.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),wb={};s(Fb,function(a,c){if("multiple"!=a){var d=ya("ng-"+c);wb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,
!!a)})}}}}});s(Oc,function(a,c){wb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Nf))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});s(["src","srcset","href"],function(a){var c=ya("ng-"+a);wb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Da.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,
function(c){c?(f.$set(h,c),Ra&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Lb={$addControl:z,$$renameControl:function(a,c){a.$name=c},$removeControl:z,$setValidity:z,$setDirty:z,$setPristine:z,$setSubmitted:z};rd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var yd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:rd,compile:function(a){a.addClass(Sa).addClass(lb);return{pre:function(a,d,g,h){if(!("action"in g)){var l=function(c){a.$apply(function(){h.$commitViewValue();
h.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",l,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",l,!1)},0,!1)})}var k=h.$$parentForm,m=h.$name;m&&(hb(a,null,m,h,m),g.$observe(g.name?"name":"ngForm",function(c){m!==c&&(hb(a,null,m,t,m),m=c,hb(a,null,m,h,m),k.$$renameControl(h,m))}));d.on("$destroy",function(){k.$removeControl(h);m&&hb(a,null,m,t,m);x(h,Lb)})}}}}}]},Ud=yd(),ge=yd(!0),Mf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
Zf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,$f=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,ag=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,zd=/^(\d{4})-(\d{2})-(\d{2})$/,Ad=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,kc=/^(\d{4})-W(\d\d)$/,Bd=/^(\d{4})-(\d\d)$/,Cd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Dd={text:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);ic(e)},date:kb("date",zd,Nb(zd,["yyyy",
"MM","dd"]),"yyyy-MM-dd"),"datetime-local":kb("datetimelocal",Ad,Nb(Ad,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:kb("time",Cd,Nb(Cd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:kb("week",kc,function(a,c){if(qa(a))return a;if(F(a)){kc.lastIndex=0;var d=kc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=pd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:kb("month",
Bd,Nb(Bd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){td(a,c,d,e);jb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:ag.test(a)?parseFloat(a):t});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!V(a))throw Ob("numfmt",a);a=a.toString()}return a});if(d.min||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||B(h)||a>=h};d.$observe("min",function(a){y(a)&&!V(a)&&(a=parseFloat(a,10));h=V(a)&&!isNaN(a)?a:t;e.$validate()})}if(d.max||
d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||B(l)||a<=l};d.$observe("max",function(a){y(a)&&!V(a)&&(a=parseFloat(a,10));l=V(a)&&!isNaN(a)?a:t;e.$validate()})}},url:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);ic(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||Zf.test(d)}},email:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);ic(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||$f.test(d)}},radio:function(a,c,
d,e){B(d.name)&&c.attr("name",++ob);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=ud(l,a,"ngTrueValue",d.ngTrueValue,!0),m=ud(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ga(a,
k)});e.$parsers.push(function(a){return a?k:m})},hidden:z,button:z,submit:z,reset:z,file:z},yc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Dd[Q(h.type)]||Dd.text)(f,g,h,l[0],c,a,d,e)}}}}],bg=/^(true|false|\d+)$/,ye=function(){return{restrict:"A",priority:100,compile:function(a,c){return bg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",
a)})}}}},Zd=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===t?"":a})}}}}],ae=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===t?"":a})}}}}],$d=["$sce",
"$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],xe=ea({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),be=jc("",!0),de=jc("Odd",0),ce=jc("Even",1),ee=Ja({compile:function(a,c){c.$set("ngCloak",
t);a.removeClass("ng-cloak")}}),fe=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Dc={},cg={blur:!0,focus:!0};s("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ya("ng-"+a);Dc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};
cg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ie=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=Y.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=ub(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],je=["$templateRequest","$anchorScroll",
"$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function(f,g){var h=g.ngInclude||g.src,l=g.onload||"",k=g.autoscroll;return function(f,g,q,s,r){var t=0,p,v,w,L=function(){v&&(v.remove(),v=null);p&&(p.$destroy(),p=null);w&&(d.leave(w).then(function(){v=null}),v=w,w=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!y(k)||k&&!f.$eval(k)||c()},q=++t;e?(a(e,!0).then(function(a){if(q===t){var c=f.$new();
s.template=a;a=r(c,function(a){L();d.enter(a,null,g).then(h)});p=c;w=a;p.$emit("$includeContentLoaded",e);f.$eval(l)}},function(){q===t&&(L(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(L(),s.template=null)})}}}}],Ae=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Gc(f.template,Y).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],
ke=Ja({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),we=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?U(f):f;e.$parsers.push(function(a){if(!B(a)){var c=[];a&&s(a.split(h),function(a){a&&c.push(g?U(a):a)});return c}});e.$formatters.push(function(a){return H(a)?a.join(f):t});e.$isEmpty=function(a){return!a||!a.length}}}},lb="ng-valid",vd="ng-invalid",Sa="ng-pristine",
Mb="ng-dirty",xd="ng-pending",Ob=new S("ngModel"),dg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=t;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success=
{};this.$pending=t;this.$name=m(d.name||"",!1)(a);var n=f(d.ngModel),q=n.assign,u=n,r=q,P=null,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");u=function(a){var d=n(a);G(d)&&(d=c(a));return d};r=function(a,c){G(n(a))?g(a,{$$$p:p.$modelValue}):q(a,p.$modelValue)}}else if(!n.assign)throw Ob("nonassign",d.ngModel,va(e));};this.$render=z;this.$isEmpty=function(a){return B(a)||""===a||null===a||a!==a};var v=e.inheritedData("$formController")||
Lb,w=0;sd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:v,$animate:g});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;g.removeClass(e,Mb);g.addClass(e,Sa)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;g.removeClass(e,Sa);g.addClass(e,Mb);v.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=!0;p.$untouched=!1;g.setClass(e,"ng-touched",
"ng-untouched")};this.$rollbackViewValue=function(){h.cancel(P);p.$viewValue=p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!V(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,c=p.$valid,d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$runValidators(p.$error[p.$$parserName||"parse"]?!1:t,a,p.$$lastCommittedViewValue,function(f){e||c===f||(p.$modelValue=f?a:t,p.$modelValue!==d&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d,e){function f(){var a=
!0;s(p.$validators,function(e,f){var g=e(c,d);a=a&&g;h(f,g)});return a?!0:(s(p.$asyncValidators,function(a,c){h(c,null)}),!1)}function g(){var a=[],e=!0;s(p.$asyncValidators,function(f,g){var l=f(c,d);if(!l||!G(l.then))throw Ob("$asyncValidators",l);h(g,t);a.push(l.then(function(){h(g,!0)},function(a){e=!1;h(g,!1)}))});a.length?k.all(a).then(function(){l(e)},z):l(!0)}function h(a,c){m===w&&p.$setValidity(a,c)}function l(a){m===w&&e(a)}w++;var m=w;(function(a){var c=p.$$parserName||"parse";if(a===
t)h(c,null);else if(h(c,a),!a)return s(p.$validators,function(a,c){h(c,null)}),s(p.$asyncValidators,function(a,c){h(c,null)}),!1;return!0})(a)?f()?g():l(!1):l(!1)};this.$commitViewValue=function(){var a=p.$viewValue;h.cancel(P);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=p.$$lastCommittedViewValue,d=B(c)?t:!0;if(d)for(var e=0;e<p.$parsers.length;e++)if(c=
p.$parsers[e](c),B(c)){d=!1;break}V(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=u(a));var f=p.$modelValue,g=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=c;g&&(p.$modelValue=c,p.$modelValue!==f&&p.$$writeModelToScope());p.$$runValidators(d,c,p.$$lastCommittedViewValue,function(a){g||(p.$modelValue=a?c:t,p.$modelValue!==f&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){r(a,p.$modelValue);s(p.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=
function(a,c){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=p.$options;e&&y(e.debounce)&&(e=e.debounce,V(e)?d=e:V(e[c])?d=e[c]:V(e["default"])&&(d=e["default"]));h.cancel(P);d?P=h(function(){p.$commitViewValue()},d):l.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var c=u(a);if(c!==p.$modelValue){p.$modelValue=p.$$rawModelValue=c;for(var d=p.$formatters,e=d.length,
f=c;e--;)f=d[e](f);p.$viewValue!==f&&(p.$viewValue=p.$$lastCommittedViewValue=f,p.$render(),p.$$runValidators(t,c,f,z))}return c})}],ve=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:dg,priority:1,compile:function(c){c.addClass(Sa).addClass("ng-untouched").addClass(lb);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Lb;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",
function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],eg=/(\s+|^)default(\s+|$)/,ze=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==t?(this.$options.updateOnDefault=
!1,this.$options.updateOn=U(this.$options.updateOn.replace(eg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},le=Ja({terminal:!0,priority:1E3}),me=["$locale","$interpolate",function(a,c){var d=/{}/g,e=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(f,g,h){function l(a){g.text(a||"")}var k=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,q=f.$eval(m)||{},u={},m=c.startSymbol(),r=c.endSymbol(),t=m+k+"-"+n+r,p=ca.noop,v;s(h,function(a,c){var d=
e.exec(c);d&&(d=(d[1]?"-":"")+Q(d[2]),q[d]=g.attr(h.$attr[c]))});s(q,function(a,e){u[e]=c(a.replace(d,t))});f.$watch(k,function(c){c=parseFloat(c);var d=isNaN(c);d||c in q||(c=a.pluralCat(c-n));c===v||d&&isNaN(v)||(p(),p=f.$watch(u[c],l),v=c)})}}}],ne=["$parse","$animate",function(a,c){var d=S("ngRepeat"),e=function(a,c,d,e,k,m,n){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",
priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=Y.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var m=k[1],n=k[2],q=k[3],u=k[4],k=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",m);var r=k[3]||k[1],y=k[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))throw d("badident",
q);var p,v,w,B,z={$id:Na};u?p=a(u):(w=function(a,c){return Na(c)},B=function(a){return a});return function(a,f,g,k,m){p&&(v=function(c,d,e){y&&(z[y]=c);z[r]=d;z.$index=e;return p(a,z)});var u=ha();a.$watchCollection(n,function(g){var k,p,n=f[0],E,z=ha(),x,T,N,G,H,C,I;q&&(a[q]=g);if(Ta(g))H=g,p=v||w;else{p=v||B;H=[];for(I in g)g.hasOwnProperty(I)&&"$"!=I.charAt(0)&&H.push(I);H.sort()}x=H.length;I=Array(x);for(k=0;k<x;k++)if(T=g===H?k:H[k],N=g[T],G=p(T,N,k),u[G])C=u[G],delete u[G],z[G]=C,I[k]=C;else{if(z[G])throw s(I,
function(a){a&&a.scope&&(u[a.id]=a)}),d("dupes",h,G,N);I[k]={id:G,scope:t,clone:t};z[G]=!0}for(E in u){C=u[E];G=ub(C.clone);c.leave(G);if(G[0].parentNode)for(k=0,p=G.length;k<p;k++)G[k].$$NG_REMOVED=!0;C.scope.$destroy()}for(k=0;k<x;k++)if(T=g===H?k:H[k],N=g[T],C=I[k],C.scope){E=n;do E=E.nextSibling;while(E&&E.$$NG_REMOVED);C.clone[0]!=E&&c.move(ub(C.clone),null,D(n));n=C.clone[C.clone.length-1];e(C.scope,k,r,N,y,T,x)}else m(function(a,d){C.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,
null,D(n));n=f;C.clone=a;z[C.id]=C;e(C.scope,k,r,N,y,T,x)});u=z})}}}}],oe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],he=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],pe=Ja(function(a,c,d){a.$watchCollection(d.ngStyle,
function(a,d){d&&a!==d&&s(d,function(a,d){c.css(d,"")});a&&c.css(a)})}),qe=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],m=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var r=ub(h[d].clone);k[d].$destroy();(l[d]=a.leave(r)).then(m(l,d))}h.length=0;k.length=0;(g=
f.cases["!"+c]||f.cases["?"])&&s(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=Y.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],re=Ja({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),se=Ja({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,
link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),ue=Ja({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw S("ngTransclude")("orphan",va(c));f(function(a){c.empty();c.append(a)})}}),Vd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],fg=S("ngOptions"),te=ea({restrict:"A",terminal:!0}),Wd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
e={$setViewValue:z};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},m=e,n;l.databound=d.ngModel;l.init=function(a,c,d){m=a;n=d};l.addOption=function(c,d){Ma(c,'"option value"');k[c]=!0;m.$viewValue==c&&(a.val(c),n.parent()&&n.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};l.removeOption=function(a){this.hasOption(a)&&(delete k[a],m.$viewValue===a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c=
"? "+Na(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=z})}],link:function(e,g,h,l){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(C.parent()&&C.remove(),c.val(a),""===a&&p.prop("selected",!0)):B(a)&&p?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){C.parent()&&C.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;
d.$render=function(){var a=new eb(d.$viewValue);s(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){ga(e,d.$viewValue)||(e=ra(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];s(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(a,c,d){S[x]=d;D&&(S[D]=c);return a(e,S)}function k(a){var c;if(u)if(M&&H(a)){c=new eb([]);for(var d=0;d<a.length;d++)c.put(h(M,null,a[d]),!0)}else c=
new eb(a);else M&&(a=h(M,null,a));return function(d,e){var f;f=M?M:B?B:F;return u?y(c.remove(h(f,d,e))):a===h(f,d,e)}}function l(){v||(e.$$postDigest(p),v=!0)}function m(a,c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function p(){v=!1;var a={"":[]},c=[""],d,l,n,r,t;n=g.$viewValue;r=O(e)||[];var B=D?Object.keys(r).sort():r,x,A,H,F,N={};t=k(n);var J=!1,U,V;Q={};for(F=0;H=B.length,F<H;F++){x=F;if(D&&(x=B[F],"$"===x.charAt(0)))continue;A=r[x];d=h(I,x,A)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=t(x,A);J=J||d;A=h(C,x,A);
A=y(A)?A:"";V=M?M(e,S):D?B[F]:F;M&&(Q[V]=x);l.push({id:V,label:A,selected:d})}u||(z||null===n?a[""].unshift({id:"",label:"",selected:!J}):J||a[""].unshift({id:"?",label:"",selected:!0}));x=0;for(B=c.length;x<B;x++){d=c[x];l=a[d];R.length<=x?(n={element:G.clone().attr("label",d),label:l.label},r=[n],R.push(r),f.append(n.element)):(r=R[x],n=r[0],n.label!=d&&n.element.attr("label",n.label=d));J=null;F=0;for(H=l.length;F<H;F++)d=l[F],(t=r[F+1])?(J=t.element,t.label!==d.label&&(m(N,t.label,!1),m(N,d.label,
!0),J.text(t.label=d.label),J.prop("label",t.label)),t.id!==d.id&&J.val(t.id=d.id),J[0].selected!==d.selected&&(J.prop("selected",t.selected=d.selected),Ra&&J.prop("selected",t.selected))):(""===d.id&&z?U=z:(U=w.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),r.push(t={element:U,label:d.label,id:d.id,selected:d.selected}),m(N,d.label,!0),J?J.after(U):n.element.append(U),J=U);for(F++;r.length>F;)d=r.pop(),m(N,d.label,!1),d.element.remove()}for(;R.length>
x;){l=R.pop();for(F=1;F<l.length;++F)m(N,l[F].label,!1);l[0].element.remove()}s(N,function(a,c){0<a?q.addOption(c):0>a&&q.removeOption(c)})}var n;if(!(n=r.match(d)))throw fg("iexp",r,va(f));var C=c(n[2]||n[1]),x=n[4]||n[6],A=/ as /.test(n[0])&&n[1],B=A?c(A):null,D=n[5],I=c(n[3]||""),F=c(n[2]?n[1]:x),O=c(n[7]),M=n[8]?c(n[8]):null,Q={},R=[[{element:f,label:""}]],S={};z&&(a(z)(e),z.removeClass("ng-scope"),z.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=O(e)||[],c;if(u)c=[],s(f.val(),
function(d){d=M?Q[d]:d;c.push("?"===d?t:""===d?null:h(B?B:F,d,a[d]))});else{var d=M?Q[f.val()]:f.val();c="?"===d?t:""===d?null:h(B?B:F,d,a[d])}g.$setViewValue(c);p()})});g.$render=p;e.$watchCollection(O,l);e.$watchCollection(function(){var a=O(e),c;if(a&&H(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(C,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(C,d,a[d]));return c},l);u&&e.$watchCollection(function(){return g.$modelValue},l)}if(l[1]){var q=l[0];l=l[1];var u=h.multiple,
r=h.ngOptions,z=!1,p,v=!1,w=D(Y.createElement("option")),G=D(Y.createElement("optgroup")),C=w.clone();h=0;for(var A=g.children(),x=A.length;h<x;h++)if(""===A[h].value){p=z=A.eq(h);break}q.init(l,z,C);u&&(l.$isEmpty=function(a){return!a||0===a.length});r?n(e,g,l):u?m(e,g,l):k(e,g,l,q)}}}}],Yd=["$interpolate",function(a){var c={addOption:z,removeOption:z};return{restrict:"E",priority:100,compile:function(d,e){if(B(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=
d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");m&&m.databound||(m=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&m.removeOption(c);m.addOption(a,d)}):m.addOption(e.value,d);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],Xd=ea({restrict:"E",terminal:!1}),Ac=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},
zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){F(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw S("ngPattern")("noregexp",g,a,va(c));f=a||t;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||B(f)||f.test(a)}}}}},Cc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=ba(a);f=isNaN(a)?-1:a;e.$validate()});
e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Bc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=ba(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};M.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Nd(),Pd(ca),D(Y).ready(function(){Jd(Y,tc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

/*!
 * ionic.bundle.js is a concatenation of:
 * ionic.js, angular.js, angular-animate.js,
 * angular-sanitize.js, angular-ui-router.js,
 * and ionic-angular.js
 */

/*
 AngularJS v1.3.13
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(N,f,W){'use strict';f.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){return function(X,C,g){g=g.ngAnimateChildren;f.isString(g)&&0===g.length?C.data("$$ngAnimateChildren",!0):X.$watch(g,function(f){C.data("$$ngAnimateChildren",!!f)})}}).factory("$$animateReflow",["$$rAF","$document",function(f,C){return function(g){return f(function(){g()})}}]).config(["$provide","$animateProvider",function(X,C){function g(f){for(var n=0;n<f.length;n++){var g=f[n];if(1==g.nodeType)return g}}
function ba(f,n){return g(f)==g(n)}var t=f.noop,n=f.forEach,da=C.$$selectors,aa=f.isArray,ea=f.isString,ga=f.isObject,r={running:!0},u;X.decorator("$animate",["$delegate","$$q","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document","$templateRequest","$$jqLite",function(O,N,M,Y,y,H,P,W,Z,Q){function R(a,c){var b=a.data("$$ngAnimateState")||{};c&&(b.running=!0,b.structural=!0,a.data("$$ngAnimateState",b));return b.disabled||b.running&&b.structural}function D(a){var c,b=N.defer();
b.promise.$$cancelFn=function(){c&&c()};P.$$postDigest(function(){c=a(function(){b.resolve()})});return b.promise}function I(a){if(ga(a))return a.tempClasses&&ea(a.tempClasses)&&(a.tempClasses=a.tempClasses.split(/\s+/)),a}function S(a,c,b){b=b||{};var d={};n(b,function(e,a){n(a.split(" "),function(a){d[a]=e})});var h=Object.create(null);n((a.attr("class")||"").split(/\s+/),function(e){h[e]=!0});var f=[],l=[];n(c&&c.classes||[],function(e,a){var b=h[a],c=d[a]||{};!1===e?(b||"addClass"==c.event)&&
l.push(a):!0===e&&(b&&"removeClass"!=c.event||f.push(a))});return 0<f.length+l.length&&[f.join(" "),l.join(" ")]}function T(a){if(a){var c=[],b={};a=a.substr(1).split(".");(Y.transitions||Y.animations)&&c.push(M.get(da[""]));for(var d=0;d<a.length;d++){var f=a[d],k=da[f];k&&!b[f]&&(c.push(M.get(k)),b[f]=!0)}return c}}function U(a,c,b,d){function h(e,a){var b=e[a],c=e["before"+a.charAt(0).toUpperCase()+a.substr(1)];if(b||c)return"leave"==a&&(c=b,b=null),u.push({event:a,fn:b}),J.push({event:a,fn:c}),
!0}function k(c,l,w){var E=[];n(c,function(a){a.fn&&E.push(a)});var m=0;n(E,function(c,f){var p=function(){a:{if(l){(l[f]||t)();if(++m<E.length)break a;l=null}w()}};switch(c.event){case "setClass":l.push(c.fn(a,e,A,p,d));break;case "animate":l.push(c.fn(a,b,d.from,d.to,p));break;case "addClass":l.push(c.fn(a,e||b,p,d));break;case "removeClass":l.push(c.fn(a,A||b,p,d));break;default:l.push(c.fn(a,p,d))}});l&&0===l.length&&w()}var l=a[0];if(l){d&&(d.to=d.to||{},d.from=d.from||{});var e,A;aa(b)&&(e=
b[0],A=b[1],e?A?b=e+" "+A:(b=e,c="addClass"):(b=A,c="removeClass"));var w="setClass"==c,E=w||"addClass"==c||"removeClass"==c||"animate"==c,p=a.attr("class")+" "+b;if(x(p)){var ca=t,m=[],J=[],g=t,s=[],u=[],p=(" "+p).replace(/\s+/g,".");n(T(p),function(a){!h(a,c)&&w&&(h(a,"addClass"),h(a,"removeClass"))});return{node:l,event:c,className:b,isClassBased:E,isSetClassOperation:w,applyStyles:function(){d&&a.css(f.extend(d.from||{},d.to||{}))},before:function(a){ca=a;k(J,m,function(){ca=t;a()})},after:function(a){g=
a;k(u,s,function(){g=t;a()})},cancel:function(){m&&(n(m,function(a){(a||t)(!0)}),ca(!0));s&&(n(s,function(a){(a||t)(!0)}),g(!0))}}}}}function G(a,c,b,d,h,k,l,e){function A(e){var l="$animate:"+e;J&&J[l]&&0<J[l].length&&H(function(){b.triggerHandler(l,{event:a,className:c})})}function w(){A("before")}function E(){A("after")}function p(){p.hasBeenRun||(p.hasBeenRun=!0,k())}function g(){if(!g.hasBeenRun){m&&m.applyStyles();g.hasBeenRun=!0;l&&l.tempClasses&&n(l.tempClasses,function(a){u.removeClass(b,
a)});var w=b.data("$$ngAnimateState");w&&(m&&m.isClassBased?B(b,c):(H(function(){var e=b.data("$$ngAnimateState")||{};fa==e.index&&B(b,c,a)}),b.data("$$ngAnimateState",w)));A("close");e()}}var m=U(b,a,c,l);if(!m)return p(),w(),E(),g(),t;a=m.event;c=m.className;var J=f.element._data(m.node),J=J&&J.events;d||(d=h?h.parent():b.parent());if(z(b,d))return p(),w(),E(),g(),t;d=b.data("$$ngAnimateState")||{};var L=d.active||{},s=d.totalActive||0,q=d.last;h=!1;if(0<s){s=[];if(m.isClassBased)"setClass"==q.event?
(s.push(q),B(b,c)):L[c]&&(v=L[c],v.event==a?h=!0:(s.push(v),B(b,c)));else if("leave"==a&&L["ng-leave"])h=!0;else{for(var v in L)s.push(L[v]);d={};B(b,!0)}0<s.length&&n(s,function(a){a.cancel()})}!m.isClassBased||m.isSetClassOperation||"animate"==a||h||(h="addClass"==a==b.hasClass(c));if(h)return p(),w(),E(),A("close"),e(),t;L=d.active||{};s=d.totalActive||0;if("leave"==a)b.one("$destroy",function(a){a=f.element(this);var e=a.data("$$ngAnimateState");e&&(e=e.active["ng-leave"])&&(e.cancel(),B(a,"ng-leave"))});
u.addClass(b,"ng-animate");l&&l.tempClasses&&n(l.tempClasses,function(a){u.addClass(b,a)});var fa=K++;s++;L[c]=m;b.data("$$ngAnimateState",{last:m,active:L,index:fa,totalActive:s});w();m.before(function(e){var l=b.data("$$ngAnimateState");e=e||!l||!l.active[c]||m.isClassBased&&l.active[c].event!=a;p();!0===e?g():(E(),m.after(g))});return m.cancel}function q(a){if(a=g(a))a=f.isFunction(a.getElementsByClassName)?a.getElementsByClassName("ng-animate"):a.querySelectorAll(".ng-animate"),n(a,function(a){a=
f.element(a);(a=a.data("$$ngAnimateState"))&&a.active&&n(a.active,function(a){a.cancel()})})}function B(a,c){if(ba(a,y))r.disabled||(r.running=!1,r.structural=!1);else if(c){var b=a.data("$$ngAnimateState")||{},d=!0===c;!d&&b.active&&b.active[c]&&(b.totalActive--,delete b.active[c]);if(d||!b.totalActive)u.removeClass(a,"ng-animate"),a.removeData("$$ngAnimateState")}}function z(a,c){if(r.disabled)return!0;if(ba(a,y))return r.running;var b,d,g;do{if(0===c.length)break;var k=ba(c,y),l=k?r:c.data("$$ngAnimateState")||
{};if(l.disabled)return!0;k&&(g=!0);!1!==b&&(k=c.data("$$ngAnimateChildren"),f.isDefined(k)&&(b=k));d=d||l.running||l.last&&!l.last.isClassBased}while(c=c.parent());return!g||!b&&d}u=Q;y.data("$$ngAnimateState",r);var $=P.$watch(function(){return Z.totalPendingRequests},function(a,c){0===a&&($(),P.$$postDigest(function(){P.$$postDigest(function(){r.running=!1})}))}),K=0,V=C.classNameFilter(),x=V?function(a){return V.test(a)}:function(){return!0};return{animate:function(a,c,b,d,h){d=d||"ng-inline-animate";
h=I(h)||{};h.from=b?c:null;h.to=b?b:c;return D(function(b){return G("animate",d,f.element(g(a)),null,null,t,h,b)})},enter:function(a,c,b,d){d=I(d);a=f.element(a);c=c&&f.element(c);b=b&&f.element(b);R(a,!0);O.enter(a,c,b);return D(function(h){return G("enter","ng-enter",f.element(g(a)),c,b,t,d,h)})},leave:function(a,c){c=I(c);a=f.element(a);q(a);R(a,!0);return D(function(b){return G("leave","ng-leave",f.element(g(a)),null,null,function(){O.leave(a)},c,b)})},move:function(a,c,b,d){d=I(d);a=f.element(a);
c=c&&f.element(c);b=b&&f.element(b);q(a);R(a,!0);O.move(a,c,b);return D(function(h){return G("move","ng-move",f.element(g(a)),c,b,t,d,h)})},addClass:function(a,c,b){return this.setClass(a,c,[],b)},removeClass:function(a,c,b){return this.setClass(a,[],c,b)},setClass:function(a,c,b,d){d=I(d);a=f.element(a);a=f.element(g(a));if(R(a))return O.$$setClassImmediately(a,c,b,d);var h,k=a.data("$$animateClasses"),l=!!k;k||(k={classes:{}});h=k.classes;c=aa(c)?c:c.split(" ");n(c,function(a){a&&a.length&&(h[a]=
!0)});b=aa(b)?b:b.split(" ");n(b,function(a){a&&a.length&&(h[a]=!1)});if(l)return d&&k.options&&(k.options=f.extend(k.options||{},d)),k.promise;a.data("$$animateClasses",k={classes:h,options:d});return k.promise=D(function(e){var l=a.parent(),b=g(a),c=b.parentNode;if(!c||c.$$NG_REMOVED||b.$$NG_REMOVED)e();else{b=a.data("$$animateClasses");a.removeData("$$animateClasses");var c=a.data("$$ngAnimateState")||{},d=S(a,b,c.active);return d?G("setClass",d,a,l,null,function(){d[0]&&O.$$addClassImmediately(a,
d[0]);d[1]&&O.$$removeClassImmediately(a,d[1])},b.options,e):e()}})},cancel:function(a){a.$$cancelFn()},enabled:function(a,c){switch(arguments.length){case 2:if(a)B(c);else{var b=c.data("$$ngAnimateState")||{};b.disabled=!0;c.data("$$ngAnimateState",b)}break;case 1:r.disabled=!a;break;default:a=!r.disabled}return!!a}}}]);C.register("",["$window","$sniffer","$timeout","$$animateReflow",function(r,C,M,Y){function y(){b||(b=Y(function(){c=[];b=null;x={}}))}function H(a,e){b&&b();c.push(e);b=Y(function(){n(c,
function(a){a()});c=[];b=null;x={}})}function P(a,e){var b=g(a);a=f.element(b);k.push(a);b=Date.now()+e;b<=h||(M.cancel(d),h=b,d=M(function(){X(k);k=[]},e,!1))}function X(a){n(a,function(a){(a=a.data("$$ngAnimateCSS3Data"))&&n(a.closeAnimationFns,function(a){a()})})}function Z(a,e){var b=e?x[e]:null;if(!b){var c=0,d=0,f=0,g=0;n(a,function(a){if(1==a.nodeType){a=r.getComputedStyle(a)||{};c=Math.max(Q(a[z+"Duration"]),c);d=Math.max(Q(a[z+"Delay"]),d);g=Math.max(Q(a[K+"Delay"]),g);var e=Q(a[K+"Duration"]);
0<e&&(e*=parseInt(a[K+"IterationCount"],10)||1);f=Math.max(e,f)}});b={total:0,transitionDelay:d,transitionDuration:c,animationDelay:g,animationDuration:f};e&&(x[e]=b)}return b}function Q(a){var e=0;a=ea(a)?a.split(/\s*,\s*/):[];n(a,function(a){e=Math.max(parseFloat(a)||0,e)});return e}function R(b,e,c,d){b=0<=["ng-enter","ng-leave","ng-move"].indexOf(c);var f,p=e.parent(),h=p.data("$$ngAnimateKey");h||(p.data("$$ngAnimateKey",++a),h=a);f=h+"-"+g(e).getAttribute("class");var p=f+" "+c,h=x[p]?++x[p].total:
0,m={};if(0<h){var n=c+"-stagger",m=f+" "+n;(f=!x[m])&&u.addClass(e,n);m=Z(e,m);f&&u.removeClass(e,n)}u.addClass(e,c);var n=e.data("$$ngAnimateCSS3Data")||{},k=Z(e,p);f=k.transitionDuration;k=k.animationDuration;if(b&&0===f&&0===k)return u.removeClass(e,c),!1;c=d||b&&0<f;b=0<k&&0<m.animationDelay&&0===m.animationDuration;e.data("$$ngAnimateCSS3Data",{stagger:m,cacheKey:p,running:n.running||0,itemIndex:h,blockTransition:c,closeAnimationFns:n.closeAnimationFns||[]});p=g(e);c&&(I(p,!0),d&&e.css(d));
b&&(p.style[K+"PlayState"]="paused");return!0}function D(a,e,b,c,d){function f(){e.off(D,h);u.removeClass(e,k);u.removeClass(e,t);z&&M.cancel(z);G(e,b);var a=g(e),c;for(c in s)a.style.removeProperty(s[c])}function h(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-H,0)>=C&&b>=x&&c()}var m=g(e);a=e.data("$$ngAnimateCSS3Data");if(-1!=m.getAttribute("class").indexOf(b)&&a){var k="",t="";n(b.split(" "),function(a,
b){var e=(0<b?" ":"")+a;k+=e+"-active";t+=e+"-pending"});var s=[],q=a.itemIndex,v=a.stagger,r=0;if(0<q){r=0;0<v.transitionDelay&&0===v.transitionDuration&&(r=v.transitionDelay*q);var y=0;0<v.animationDelay&&0===v.animationDuration&&(y=v.animationDelay*q,s.push(B+"animation-play-state"));r=Math.round(100*Math.max(r,y))/100}r||(u.addClass(e,k),a.blockTransition&&I(m,!1));var F=Z(e,a.cacheKey+" "+k),x=Math.max(F.transitionDuration,F.animationDuration);if(0===x)u.removeClass(e,k),G(e,b),c();else{!r&&
d&&0<Object.keys(d).length&&(F.transitionDuration||(e.css("transition",F.animationDuration+"s linear all"),s.push("transition")),e.css(d));var q=Math.max(F.transitionDelay,F.animationDelay),C=1E3*q;0<s.length&&(v=m.getAttribute("style")||"",";"!==v.charAt(v.length-1)&&(v+=";"),m.setAttribute("style",v+" "));var H=Date.now(),D=V+" "+$,q=1E3*(r+1.5*(q+x)),z;0<r&&(u.addClass(e,t),z=M(function(){z=null;0<F.transitionDuration&&I(m,!1);0<F.animationDuration&&(m.style[K+"PlayState"]="");u.addClass(e,k);
u.removeClass(e,t);d&&(0===F.transitionDuration&&e.css("transition",F.animationDuration+"s linear all"),e.css(d),s.push("transition"))},1E3*r,!1));e.on(D,h);a.closeAnimationFns.push(function(){f();c()});a.running++;P(e,q);return f}}else c()}function I(a,b){a.style[z+"Property"]=b?"none":""}function S(a,b,c,d){if(R(a,b,c,d))return function(a){a&&G(b,c)}}function T(a,b,c,d,f){if(b.data("$$ngAnimateCSS3Data"))return D(a,b,c,d,f);G(b,c);d()}function U(a,b,c,d,f){var g=S(a,b,c,f.from);if(g){var h=g;H(b,
function(){h=T(a,b,c,d,f.to)});return function(a){(h||t)(a)}}y();d()}function G(a,b){u.removeClass(a,b);var c=a.data("$$ngAnimateCSS3Data");c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData("$$ngAnimateCSS3Data"))}function q(a,b){var c="";a=aa(a)?a:a.split(/\s+/);n(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var B="",z,$,K,V;N.ontransitionend===W&&N.onwebkittransitionend!==W?(B="-webkit-",z="WebkitTransition",$="webkitTransitionEnd transitionend"):(z="transition",
$="transitionend");N.onanimationend===W&&N.onwebkitanimationend!==W?(B="-webkit-",K="WebkitAnimation",V="webkitAnimationEnd animationend"):(K="animation",V="animationend");var x={},a=0,c=[],b,d=null,h=0,k=[];return{animate:function(a,b,c,d,f,g){g=g||{};g.from=c;g.to=d;return U("animate",a,b,f,g)},enter:function(a,b,c){c=c||{};return U("enter",a,"ng-enter",b,c)},leave:function(a,b,c){c=c||{};return U("leave",a,"ng-leave",b,c)},move:function(a,b,c){c=c||{};return U("move",a,"ng-move",b,c)},beforeSetClass:function(a,
b,c,d,f){f=f||{};b=q(c,"-remove")+" "+q(b,"-add");if(f=S("setClass",a,b,f.from))return H(a,d),f;y();d()},beforeAddClass:function(a,b,c,d){d=d||{};if(b=S("addClass",a,q(b,"-add"),d.from))return H(a,c),b;y();c()},beforeRemoveClass:function(a,b,c,d){d=d||{};if(b=S("removeClass",a,q(b,"-remove"),d.from))return H(a,c),b;y();c()},setClass:function(a,b,c,d,f){f=f||{};c=q(c,"-remove");b=q(b,"-add");return T("setClass",a,c+" "+b,d,f.to)},addClass:function(a,b,c,d){d=d||{};return T("addClass",a,q(b,"-add"),
c,d.to)},removeClass:function(a,b,c,d){d=d||{};return T("removeClass",a,q(b,"-remove"),c,d.to)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*!
 * ionic.bundle.js is a concatenation of:
 * ionic.js, angular.js, angular-animate.js,
 * angular-sanitize.js, angular-ui-router.js,
 * and ionic-angular.js
 */

/*
 AngularJS v1.3.13
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,h,p){'use strict';function E(a){var d=[];s(d,h.noop).chars(a);return d.join("")}function g(a){var d={};a=a.split(",");var c;for(c=0;c<a.length;c++)d[a[c]]=!0;return d}function F(a,d){function c(a,b,c,l){b=h.lowercase(b);if(t[b])for(;f.last()&&u[f.last()];)e("",f.last());v[b]&&f.last()==b&&e("",b);(l=w[b]||!!l)||f.push(b);var m={};c.replace(G,function(a,b,d,c,e){m[b]=r(d||c||e||"")});d.start&&d.start(b,m,l)}function e(a,b){var c=0,e;if(b=h.lowercase(b))for(c=f.length-1;0<=c&&f[c]!=b;c--);
if(0<=c){for(e=f.length-1;e>=c;e--)d.end&&d.end(f[e]);f.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,k,f=[],m=a,l;for(f.last=function(){return f[f.length-1]};a;){l="";k=!0;if(f.last()&&x[f.last()])a=a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*"+f.last()+"[^>]*>","i"),function(a,b){b=b.replace(H,"$1").replace(I,"$1");d.chars&&d.chars(r(b));return""}),e("",f.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",b)===b&&(d.comment&&
d.comment(a.substring(4,b)),a=a.substring(b+3),k=!1);else if(y.test(a)){if(b=a.match(y))a=a.replace(b[0],""),k=!1}else if(J.test(a)){if(b=a.match(z))a=a.substring(b[0].length),b[0].replace(z,e),k=!1}else K.test(a)&&((b=a.match(A))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(A,c)),k=!1):(l+="<",a=a.substring(1)));k&&(b=a.indexOf("<"),l+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),d.chars&&d.chars(r(l)))}if(a==m)throw L("badparse",a);m=a}e()}function r(a){if(!a)return"";var d=M.exec(a);a=d[1];
var c=d[3];if(d=d[2])q.innerHTML=d.replace(/</g,"&lt;"),d="textContent"in q?q.textContent:q.innerText;return a+d+c}function B(a){return a.replace(/&/g,"&amp;").replace(N,function(a){var c=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(c-55296)+(a-56320)+65536)+";"}).replace(O,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s(a,d){var c=!1,e=h.bind(a,a.push);return{start:function(a,k,f){a=h.lowercase(a);!c&&x[a]&&(c=a);c||!0!==C[a]||(e("<"),e(a),
h.forEach(k,function(c,f){var k=h.lowercase(f),g="img"===a&&"src"===k||"background"===k;!0!==P[k]||!0===D[k]&&!d(c,g)||(e(" "),e(f),e('="'),e(B(c)),e('"'))}),e(f?"/>":">"))},end:function(a){a=h.lowercase(a);c||!0!==C[a]||(e("</"),e(a),e(">"));a==c&&(c=!1)},chars:function(a){c||e(B(a))}}}var L=h.$$minErr("$sanitize"),A=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,z=/^<\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
K=/^</,J=/^<\//,H=/\x3c!--(.*?)--\x3e/g,y=/<!DOCTYPE([^>]*?)>/i,I=/<!\[CDATA\[(.*?)]]\x3e/g,N=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,O=/([^\#-~| |!])/g,w=g("area,br,col,hr,img,wbr");n=g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");p=g("rp,rt");var v=h.extend({},p,n),t=h.extend({},n,g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),u=h.extend({},p,g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
n=g("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use");var x=g("script,style"),C=h.extend({},w,t,u,v,n),D=g("background,cite,href,longdesc,src,usemap,xlink:href");n=g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width");
p=g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan");
var P=h.extend({},D,p,n),q=document.createElement("pre"),M=/^(\s*)([\s\S]*?)(\s*)$/;h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(a){return function(d){var c=[];F(d,s(c,function(c,b){return!/^unsafe/.test(a(c,b))}));return c.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var d=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/,c=/^mailto:/;return function(e,b){function k(a){a&&g.push(E(a))}
function f(a,c){g.push("<a ");h.isDefined(b)&&g.push('target="',b,'" ');g.push('href="',a.replace(/"/g,"&quot;"),'">');k(c);g.push("</a>")}if(!e)return e;for(var m,l=e,g=[],n,p;m=l.match(d);)n=m[0],m[2]||m[4]||(n=(m[3]?"http://":"mailto:")+n),p=m.index,k(l.substr(0,p)),f(n,m[0].replace(c,"")),l=l.substring(p+m[0].length);k(l);return a(g.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/*!
 * ionic.bundle.js is a concatenation of:
 * ionic.js, angular.js, angular-animate.js,
 * angular-sanitize.js, angular-ui-router.js,
 * and ionic-angular.js
 */

/**
 * State-based routing for AngularJS
 * @version v0.2.13
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return M(new(M(function(){},{prototype:a})),b)}function e(a){return L(arguments,function(b){b!==a&&L(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var c=[];return b.forEach(a,function(a,b){c.push(b)}),c}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return M({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return L(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function m(a,b){var c=K(a),d=c?[]:{};return L(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function n(a,b){var c=K(a)?[]:{};return L(a,function(a,d){c[d]=b(a,d)}),c}function o(a,b){var d=1,f=2,i={},j=[],k=i,m=M(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,I(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);L(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return J(a)&&a.then&&a.$$promises}if(!J(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return L(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!G(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;L(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!J(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=m;var n=a.defer(),r=n.promise,s=r.$$promises={},t=M({},d),u=1+q.length/3,v=!1;if(G(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,l(f.$$inheritedValues,p)),M(s,f.$$promises),f.$$values?(v=e(t,l(f.$$values,p)),r.$$inheritedValues=l(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=l(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function p(a,b,c){this.fromConfig=function(a,b,c){return G(a.template)?this.fromString(a.template,b):G(a.templateUrl)?this.fromUrl(a.templateUrl,b):G(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return H(a)?a(b):a},this.fromUrl=function(c,d){return H(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function q(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+(-+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new O.Param(b,c,d,e),p[b]}function g(a,b,c){var d=["",""],e=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return e;switch(c){case!1:d=["(",")"];break;case!0:d=["?(",")?"];break;default:d=["("+c+"|",")?"]}return e+d[0]+b+d[1]}function h(c,e){var f,g,h,i,j;return f=c[2]||c[3],j=b.params[f],h=a.substring(m,c.index),g=e?c[4]:c[4]||("*"==c[1]?".*":null),i=O.type(g||"string")||d(O.type("string"),{pattern:new RegExp(g)}),{id:f,regexp:g,segment:h,type:i,cfg:j}}b=M({params:{}},J(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new O.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function r(a){M(this,a)}function s(){function a(a){return null!=a?a.toString().replace(/\//g,"%2F"):a}function e(a){return null!=a?a.toString().replace(/%2F/g,"/"):a}function f(a){return this.pattern.test(a)}function i(){return{strict:t,caseInsensitive:p}}function j(a){return H(a)||K(a)&&H(a[a.length-1])}function k(){for(;x.length;){var a=x.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(v[a.name],o.invoke(a.def))}}function l(a){M(this,a||{})}O=this;var o,p=!1,t=!0,u=!1,v={},w=!0,x=[],y={string:{encode:a,decode:e,is:f,pattern:/[^/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return G(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^/]*/},any:{encode:b.identity,decode:b.identity,is:b.identity,equals:b.equals,pattern:/.*/}};s.$$getDefaultValue=function(a){if(!j(a.value))return a.value;if(!o)throw new Error("Injectable functions cannot be called at configuration time");return o.invoke(a.value)},this.caseInsensitive=function(a){return G(a)&&(p=a),p},this.strictMode=function(a){return G(a)&&(t=a),t},this.defaultSquashPolicy=function(a){if(!G(a))return u;if(a!==!0&&a!==!1&&!I(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return u=a,a},this.compile=function(a,b){return new q(a,M(i(),b))},this.isMatcher=function(a){if(!J(a))return!1;var b=!0;return L(q.prototype,function(c,d){H(c)&&(b=b&&G(a[d])&&H(a[d]))}),b},this.type=function(a,b,c){if(!G(b))return v[a];if(v.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return v[a]=new r(M({name:a},b)),c&&(x.push({name:a,def:c}),w||k()),this},L(y,function(a,b){v[b]=new r(M({name:b},a))}),v=d(v,{}),this.$get=["$injector",function(a){return o=a,w=!1,k(),L(y,function(a,b){v[b]||(v[b]=new r(a))}),this}],this.Param=function(a,b,d,e){function f(a){var b=J(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=j(a.value)?a.value:function(){return a.value},a}function i(b,c,d){if(b.type&&c)throw new Error("Param '"+a+"' has two type configurations.");return c?c:b.type?b.type instanceof r?b.type:new r(b.type):"config"===d?v.any:v.string}function k(){var b={array:"search"===e?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return M(b,c,d).array}function l(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!G(c)||null==c)return u;if(c===!0||I(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function p(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=K(a.replace)?a.replace:[],I(e)&&f.push({from:e,to:c}),g=n(f,function(a){return a.from}),m(i,function(a){return-1===h(g,a.from)}).concat(f)}function q(){if(!o)throw new Error("Injectable functions cannot be called at configuration time");return o.invoke(d.$$fn)}function s(a){function b(a){return function(b){return b.from===a}}function c(a){var c=n(m(w.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),G(a)?w.type.decode(a):q()}function t(){return"{Param:"+a+" "+b+" squash: '"+z+"' optional: "+y+"}"}var w=this;d=f(d),b=i(d,b,e);var x=k();b=x?b.$asArray(x,"search"===e):b,"string"!==b.name||x||"path"!==e||d.value!==c||(d.value="");var y=d.value!==c,z=l(d,y),A=p(d,x,y,z);M(this,{id:a,type:b,location:e,array:x,squash:z,replace:A,isOptional:y,value:s,dynamic:c,config:d,toString:t})},l.prototype={$$new:function(){return d(this,M(new l,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(l.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),L(b,function(b){L(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return L(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return L(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var b,c,d,e=!0,f=this;return L(this.$$keys(),function(g){d=f[g],c=a[g],b=!c&&d.isOptional,e=e&&(b||!!d.type.is(c))}),e},$$parent:c},this.ParamSet=l}function t(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return G(d)?d:!0}function h(d,e,f,g){function h(a,b,c){return"/"===p?a:b?p.slice(0,-1)+a:c?p.slice(1)+a:a}function m(a){function b(a){var b=a(f,d);return b?(I(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){var e=o&&d.url()===o;if(o=c,e)return!0;var g,h=j.length;for(g=0;h>g;g++)if(b(j[g]))return;k&&b(k)}}function n(){return i=i||e.$on("$locationChangeSuccess",m)}var o,p=g.baseHref(),q=d.url();return l||n(),{sync:function(){m()},listen:function(){return n()},update:function(a){return a?void(q=d.url()):void(d.url()!==q&&(d.url(q),d.replace()))},push:function(a,b,e){d.url(a.format(b||{})),o=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled);var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),i=h(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!H(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(I(a)){var b=a;a=function(){return b}}else if(!H(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=I(b);if(I(a)&&(a=d.compile(a)),!h&&!H(b)&&!K(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),M(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:I(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),M(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser"]}function u(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function l(a,b){if(!a)return c;var d=I(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=l(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var m=y[e];return!m||!d&&(d||m!==a&&m.self!==a)?c:m}function m(a,b){z[a]||(z[a]=[]),z[a].push(b)}function o(a){for(var b=z[a]||[];b.length;)p(b.shift())}function p(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!I(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(y.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):I(b.parent)?b.parent:J(b.parent)&&I(b.parent.name)?b.parent.name:"";if(e&&!y[e])return m(e,b.self);for(var f in B)H(B[f])&&(b[f]=B[f](b,B.$delegates[f]));return y[c]=b,!b[A]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){x.$current.navigable==b&&j(a,c)||x.transitionTo(b,a,{inherit:!0,location:!1})}]),o(c),b}function q(a){return a.indexOf("*")>-1}function r(a){var b=a.split("."),c=x.$current.name.split(".");if("**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length)return!1;for(var d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return c.join("")===b.join("")}function s(a,b){return I(a)&&!G(b)?B[a]:H(b)&&I(a)?(B[a]&&!B.$delegates[a]&&(B.$delegates[a]=B[a]),B[a]=b,this):this}function t(a,b){return J(a)?b=a:b.name=a,p(b),this}function u(a,e,f,h,m,o,p){function s(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),B;if(!g.retry)return null;if(f.$retry)return p.update(),C;var h=x.transition=e.when(g.retry);return h.then(function(){return h!==x.transition?u:(b.options.$retry=!0,x.transitionTo(b.to,b.toParams,b.options))},function(){return B}),p.update(),h}function t(a,c,d,g,i,j){var l=d?c:k(a.params.$$keys(),c),n={$stateParams:l};i.resolve=m.resolve(a.resolve,n,i.resolve,a);var o=[i.resolve.then(function(a){i.globals=a})];return g&&o.push(g),L(a.views,function(c,d){var e=c.resolve&&c.resolve!==a.resolve?c.resolve:{};e.$template=[function(){return f.load(d,{view:c,locals:n,params:l,notify:j.notify})||""}],o.push(m.resolve(e,n,i.resolve,a).then(function(f){if(H(c.controllerProvider)||K(c.controllerProvider)){var g=b.extend({},e,n);f.$$controller=h.invoke(c.controllerProvider,null,g)}else f.$$controller=c.controller;f.$$state=a,f.$$controllerAs=c.controllerAs,i[d]=f}))}),e.all(o).then(function(){return i})}var u=e.reject(new Error("transition superseded")),z=e.reject(new Error("transition prevented")),B=e.reject(new Error("transition aborted")),C=e.reject(new Error("transition failed"));return w.locals={resolve:null,globals:{$stateParams:{}}},x={params:{},current:w.self,$current:w,transition:null},x.reload=function(){return x.transitionTo(x.current,o,{reload:!0,inherit:!1,notify:!0})},x.go=function(a,b,c){return x.transitionTo(a,b,M({inherit:!0,relative:x.$current},c))},x.transitionTo=function(b,c,f){c=c||{},f=M({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=x.$current,m=x.params,n=j.path,q=l(b,f.relative);if(!G(q)){var r={to:b,toParams:c,options:f},y=s(r,j.self,m,f);if(y)return y;if(b=r.to,c=r.toParams,f=r.options,q=l(b,f.relative),!G(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[A])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(o,c||{},x.$current,q)),!q.params.$$validates(c))return C;c=q.params.$$values(c),b=q;var B=b.path,D=0,E=B[D],F=w.locals,H=[];if(!f.reload)for(;E&&E===n[D]&&E.ownParams.$$equals(c,m);)F=H[D]=E.locals,D++,E=B[D];if(v(b,j,F,f))return b.self.reloadOnSearch!==!1&&p.update(),x.transition=null,e.when(x.current);if(c=k(b.params.$$keys(),c||{}),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,m).defaultPrevented)return p.update(),z;for(var I=e.when(F),J=D;J<B.length;J++,E=B[J])F=H[J]=d(F),I=t(E,c,E===b,I,F,f);var K=x.transition=I.then(function(){var d,e,g;if(x.transition!==K)return u;for(d=n.length-1;d>=D;d--)g=n[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<B.length;d++)e=B[d],e.locals=H[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return x.transition!==K?u:(x.$current=b,x.current=b.self,x.params=c,N(x.params,o),x.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,m),p.update(!0),x.current)},function(d){return x.transition!==K?u:(x.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,m,d),g.defaultPrevented||p.update(),e.reject(d))});return K},x.is=function(a,b,d){d=M({relative:x.$current},d||{});var e=l(a,d.relative);return G(e)?x.$current!==e?!1:b?j(e.params.$$values(b),o):!0:c},x.includes=function(a,b,d){if(d=M({relative:x.$current},d||{}),I(a)&&q(a)){if(!r(a))return!1;a=x.$current.name}var e=l(a,d.relative);return G(e)?G(x.$current.includes[e.name])?b?j(e.params.$$values(b),o,g(b)):!0:!1:c},x.href=function(a,b,d){d=M({lossy:!0,inherit:!0,absolute:!1,relative:x.$current},d||{});var e=l(a,d.relative);if(!G(e))return null;d.inherit&&(b=i(o,b||{},x.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys(),b||{}),{absolute:d.absolute}):null},x.get=function(a,b){if(0===arguments.length)return n(g(y),function(a){return y[a].self});var c=l(a,b||x.$current);return c&&c.self?c.self:null},x}function v(a,b,c,d){return a!==b||(c!==b.locals||d.reload)&&a.self.reloadOnSearch!==!1?void 0:!0}var w,x,y={},z={},A="abstract",B={parent:function(a){if(G(a.parent)&&a.parent)return l(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?l(b[1]):w},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=M({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(I(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||w).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new O.ParamSet;return L(a.params||{},function(a,c){b[c]||(b[c]=new O.Param(c,null,a,"config"))}),b},params:function(a){return a.parent&&a.parent.params?M(a.parent.params.$$new(),a.ownParams):new O.ParamSet},views:function(a){var b={};return L(G(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?M({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};w=p({name:"",url:"^",views:null,"abstract":!0}),w.navigable=null,this.decorator=s,this.state=t,this.$get=u,u.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function v(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=M(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function w(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){c(function(){a[0].scrollIntoView()},0,!1)}}]}function x(a,c,d,e){function f(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function g(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(j)return{enter:function(a,b,c){var d=j.enter(a,null,b,c);d&&d.then&&d.then(c)},leave:function(a,b){var c=j.leave(a,b);c&&c.then&&c.then(b)}};if(i){var d=i&&i(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var h=f(),i=h("$animator"),j=h("$animate"),k={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,f,h){return function(c,f,i){function j(){l&&(l.remove(),l=null),n&&(n.$destroy(),n=null),m&&(r.leave(m,function(){l=null}),l=m,m=null)}function k(g){var k,l=z(c,i,f,e),s=l&&a.$current&&a.$current.locals[l];if(g||s!==o){k=c.$new(),o=a.$current.locals[l];var t=h(k,function(a){r.enter(a,f,function(){n&&n.$emit("$viewContentAnimationEnded"),(b.isDefined(q)&&!q||c.$eval(q))&&d(a)}),j()});m=t,n=k,n.$emit("$viewContentLoaded"),n.$eval(p)}}var l,m,n,o,p=i.onload||"",q=i.autoscroll,r=g(i,c);c.$on("$stateChangeSuccess",function(){k(!1)}),c.$on("$viewContentLoading",function(){k(!1)}),k(!0)}}};return k}function y(a,b,c,d){return{restrict:"ECA",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=c.$current,j=z(e,h,g,d),k=i&&i.locals[j];if(k){g.data("$uiView",{name:j,state:k.$$state}),g.html(k.$template?k.$template:f);var l=a(g.contents());if(k.$$controller){k.$scope=e;var m=b(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=m),g.data("$ngControllerController",m),g.children().data("$ngControllerController",m)}l(e)}}}}}function z(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function A(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function B(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function C(a,c){var d=["location","inherit","reload"];return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(e,f,g,h){var i=A(g.uiSref,a.current.name),j=null,k=B(f)||a.$current,l=null,m="A"===f.prop("tagName"),n="FORM"===f[0].nodeName,o=n?"action":"href",p=!0,q={relative:k,inherit:!0},r=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in r&&(q[a]=r[a])});var s=function(c){if(c&&(j=b.copy(c)),p){l=a.href(i.state,j,q);var d=h[1]||h[0];return d&&d.$$setStateInfo(i.state,j),null===l?(p=!1,!1):void g.$set(o,l)}};i.paramExpr&&(e.$watch(i.paramExpr,function(a){a!==j&&s(a)},!0),j=b.copy(e.$eval(i.paramExpr))),s(),n||f.bind("click",function(b){var d=b.which||b.button;if(!(d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr("target"))){var e=c(function(){a.go(i.state,j,q)});b.preventDefault();var g=m&&!l?1:0;b.preventDefault=function(){g--<=0&&c.cancel(e)}}})}}}function D(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(b,d,e){function f(){g()?d.addClass(j):d.removeClass(j)}function g(){return"undefined"!=typeof e.uiSrefActiveEq?h&&a.is(h.name,i):h&&a.includes(h.name,i)}var h,i,j;j=c(e.uiSrefActiveEq||e.uiSrefActive||"",!1)(b),this.$$setStateInfo=function(b,c){h=a.get(b,B(d)),i=c,f()},b.$on("$stateChangeSuccess",f)}]}}function E(a){var b=function(b){return a.is(b)};return b.$stateful=!0,b}function F(a){var b=function(b){return a.includes(b)};return b.$stateful=!0,b}var G=b.isDefined,H=b.isFunction,I=b.isString,J=b.isObject,K=b.isArray,L=b.forEach,M=b.extend,N=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),o.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",o),p.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",p);var O;q.prototype.concat=function(a,b){var c={caseInsensitive:O.caseInsensitive(),strict:O.strictMode(),squash:O.defaultSquashPolicy()};return new q(this.sourcePath+a+this.sourceSearch,M(c,b),this)},q.prototype.toString=function(){return this.source},q.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/,"-")}var d=b(a).split(/-(?!\\)/),e=n(d,b);return n(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(e=0;j>e;e++){g=h[e];var l=this.params[g],m=d[e+1];for(f=0;f<l.replace;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),k[g]=l.value(m)}for(;i>e;e++)g=h[e],k[g]=this.params[g].value(b[g]);return k},q.prototype.parameters=function(a){return G(a)?this.params[a]||null:this.$$paramNames},q.prototype.validates=function(a){return this.params.$$validates(a)},q.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],o=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),o),q=p?m.squash:!1,r=m.type.encode(o);if(k){var s=c[f+1];if(q===!1)null!=r&&(j+=K(r)?n(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var t=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(t)[1]}else I(q)&&(j+=q+s)}else{if(null==r||p&&q!==!1)continue;K(r)||(r=[r]),r=n(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},r.prototype.is=function(){return!0},r.prototype.encode=function(a){return a},r.prototype.decode=function(a){return a},r.prototype.equals=function(a,b){return a==b},r.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},r.prototype.pattern=/.*/,r.prototype.toString=function(){return"{Type:"+this.name+"}"},r.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return K(a)?a:G(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){c=e(c);var d=n(c,a);return b===!0?0===m(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",s),b.module("ui.router.util").run(["$urlMatcherFactory",function(){}]),t.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",t),u.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",u),v.$inject=[],b.module("ui.router.state").provider("$view",v),b.module("ui.router.state").provider("$uiViewScroll",w),x.$inject=["$state","$injector","$uiViewScroll","$interpolate"],y.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",x),b.module("ui.router.state").directive("uiView",y),C.$inject=["$state","$timeout"],D.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",C).directive("uiSrefActive",D).directive("uiSrefActiveEq",D),E.$inject=["$state"],F.$inject=["$state"],b.module("ui.router.state").filter("isState",E).filter("includedByState",F)}(window,window.angular);
/*!
 * ionic.bundle.js is a concatenation of:
 * ionic.js, angular.js, angular-animate.js,
 * angular-sanitize.js, angular-ui-router.js,
 * and ionic-angular.js
 */

/*!
 * Copyright 2014 Drifty Co.
 * http://drifty.com/
 *
 * Ionic, v1.0.0
 * A powerful HTML5 mobile app framework.
 * http://ionicframework.com/
 *
 * By @maxlynch, @benjsperry, @adamdbradley <3
 *
 * Licensed under the MIT license. Please see LICENSE for more information.
 *
 */

!function(){function e(e,t,n,i,o,r){function a(i,a,c,s,l){function d(){z.resizeRequiresRefresh(w.__clientWidth,w.__clientHeight)&&g()}function f(){var e;return e={dataLength:0,width:0,height:0,resizeRequiresRefresh:function(t,n){var i=e.dataLength&&t&&n&&(t!==e.width||n!==e.height);return e.width=t,e.height=n,!!i},dataChangeRequiresRefresh:function(t){var n=t.length>0||t.length<e.dataLength;return e.dataLength=t.length,!!n}}}function h(){return T||(T=new e({afterItemsNode:N[0],containerNode:y,heightData:A,widthData:E,forceRefreshImages:!(!u(c.forceRefreshImages)||"false"===c.forceRefreshImages),keyExpression:B,renderBuffer:_,scope:i,scrollView:s.scrollView,transclude:l}))}function p(){var e=angular.element(w.__content.querySelector(".collection-repeat-after-container"));if(!e.length){var t=!1,n=[].filter.call(w.__content.childNodes,function(e){return ionic.DomUtil.contains(e,y)?(t=!0,!1):t});e=angular.element('<span class="collection-repeat-after-container">'),w.options.scrollingX&&e.addClass("horizontal"),e.append(n),w.__content.appendChild(e[0])}return e}function v(){R?m(R,A):A.computed=!0,L?m(L,E):E.computed=!0}function g(){var e=P.length>0;if(e&&(A.computed||E.computed)&&$(),e&&A.computed){if(A.value=V.height,!A.value)throw new Error('collection-repeat tried to compute the height of repeated elements "'+k+'", but was unable to. Please provide the "item-height" attribute. http://ionicframework.com/docs/api/directive/collectionRepeat/')}else!A.dynamic&&A.getValue&&(A.value=A.getValue());if(e&&E.computed){if(E.value=V.width,!E.value)throw new Error('collection-repeat tried to compute the width of repeated elements "'+k+'", but was unable to. Please provide the "item-width" attribute. http://ionicframework.com/docs/api/directive/collectionRepeat/')}else!E.dynamic&&E.getValue&&(E.value=E.getValue());h().refreshLayout()}function m(e,n){if(e){var i;try{i=t(e)}catch(o){e.trim().match(/\d+(px|%)$/)&&(e='"'+e+'"'),i=t(e)}var r=e.replace(/(\'|\"|px|%)/g,"").trim(),a=r.length&&!/([a-zA-Z]|\$|:|\?)/.test(r);if(n.attrValue=e,a){var c=parseInt(i());if(e.indexOf("%")>-1){var s=c/100;n.getValue=n===A?function(){return Math.floor(s*w.__clientHeight)}:function(){return Math.floor(s*w.__clientWidth)}}else n.value=c}else n.dynamic=!0,n.getValue=n===A?function(e,t){var n=i(e,t);return n.charAt&&"%"===n.charAt(n.length-1)?Math.floor(parseInt(n)/100*w.__clientHeight):parseInt(n)}:function(e,t){var n=i(e,t);return n.charAt&&"%"===n.charAt(n.length-1)?Math.floor(parseInt(n)/100*w.__clientWidth):parseInt(n)}}}function $(){H||l(O=i.$new(),function(e){e[0].removeAttribute("collection-repeat"),H=e[0]}),O[B]=(x(i)||[])[0],o.$$phase||O.$digest(),y.appendChild(H);var e=n.getComputedStyle(H);V.width=parseInt(e.width),V.height=parseInt(e.height),y.removeChild(H)}var w=s.scrollView,b=a[0],y=angular.element('<div class="collection-repeat-container">')[0];if(b.parentNode.replaceChild(y,b),w.options.scrollingX&&w.options.scrollingY)throw new Error("collection-repeat expected a parent x or y scrollView, not an xy scrollView.");var k=c.collectionRepeat,C=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!C)throw new Error("collection-repeat expected expression in form of '_item_ in _collection_[ track by _id_]' but got '"+c.collectionRepeat+"'.");var T,B=C[1],I=C[2],x=t(I),A={},E={},V={},P=[],D=c.itemRenderBuffer||c.collectionBufferSize,_=angular.isDefined(D)?parseInt(D):S,R=c.itemHeight||c.collectionItemHeight,L=c.itemWidth||c.collectionItemWidth,N=p(),z=f();v(),s.$element.on("scroll-resize",g),angular.element(n).on("resize",d);var M=o.$on("$ionicExposeAside",ionic.animationFrameThrottle(function(){s.scrollView.resize(),d()}));r(g,0,!1),i.$watchCollection(x,function(e){if(P=e||(e=[]),!angular.isArray(e))throw new Error("collection-repeat expected an array for '"+I+"', but got a "+typeof value);i.$$postDigest(function(){h().setData(P),z.dataChangeRequiresRefresh(P)&&g()})}),i.$on("$destroy",function(){angular.element(n).off("resize",d),M(),s.$element&&s.$element.off("scroll-resize",g),H&&H.parentNode&&H.parentNode.removeChild(H),O&&O.$destroy(),O=H=null,T&&T.destroy(),T=null});var H,O}return{restrict:"A",priority:1e3,transclude:"element",$$tlb:!0,require:"^^$ionicScroll",link:a}}function t(e,t,n){var i={primaryPos:0,secondaryPos:0,primarySize:0,secondarySize:0,rowPrimarySize:0};return function(o){function r(){return a(!0)}function a(t){if(!a.destroyed){var n,o,r,l,u,d=ee.getScrollValue(),f=d+ee.scrollPrimarySize;ee.updateRenderRange(d,f),W=Math.max(0,W-T),F=Math.min(A.length-1,F+T);for(n in Z)(W>n||n>F)&&(r=Z[n],delete Z[n],j.push(r),r.isShown=!1);for(n=W;F>=n;n++)n>=A.length||Z[n]&&!t||(r=Z[n]||(Z[n]=j.length?j.pop():G.length?G.shift():new s),K.push(r),r.isShown=!0,u=r.scope,u.$index=n,u[C]=A[n],u.$first=0===n,u.$last=n===A.length-1,u.$middle=!(u.$first||u.$last),u.$odd=!(u.$even=0===(1&n)),u.$$disconnected&&ionic.Utils.reconnectScope(r.scope),l=ee.getDimensions(n),(r.secondaryPos!==l.secondaryPos||r.primaryPos!==l.primaryPos)&&(r.node.style[ionic.CSS.TRANSFORM]=H.replace(z,r.primaryPos=l.primaryPos).replace(M,r.secondaryPos=l.secondaryPos)),(r.secondarySize!==l.secondarySize||r.primarySize!==l.primarySize)&&(r.node.style.cssText=r.node.style.cssText.replace(y,O.replace(z,(r.primarySize=l.primarySize)+1).replace(M,r.secondarySize=l.secondarySize))));for(F===A.length-1&&(l=ee.getDimensions(A.length-1)||i,m.style[ionic.CSS.TRANSFORM]=H.replace(z,l.primaryPos+l.primarySize).replace(M,0));j.length;)r=j.pop(),r.scope.$broadcast("$collectionRepeatLeave"),ionic.Utils.disconnectScope(r.scope),G.push(r),r.node.style[ionic.CSS.TRANSFORM]="translate3d(-9999px,-9999px,0)",r.primaryPos=r.secondaryPos=null;if(w)for(n=0,o=K.length;o>n&&(r=K[n]);n++)if(r.images)for(var h,p=0,v=r.images.length;v>p&&(h=r.images[p]);p++){var g=h.src;h.src=b,h.src=g}if(t)for(var $=e.$$phase;K.length;)r=K.pop(),$||r.scope.$digest();else c()}}function c(){var t;c.running||(c.running=!0,n(function(){for(var n=e.$$phase;K.length;)t=K.pop(),t.isShown&&(n||t.scope.$digest());c.running=!1}))}function s(){var e=this;this.scope=B.$new(),this.id="item"+J++,x(this.scope,function(t){e.element=t,e.element.data("$$collectionRepeatItem",e),e.node=t[0],e.node.style[ionic.CSS.TRANSFORM]="translate3d(-9999px,-9999px,0)",e.node.style.cssText+=" height: 0px; width: 0px;",ionic.Utils.disconnectScope(e.scope),$.appendChild(e.node),e.images=t[0].getElementsByTagName("img")})}function l(){this.getItemPrimarySize=P,this.getItemSecondarySize=_,this.getScrollValue=function(){return Math.max(0,Math.min(I.__scrollTop-q,I.__maxScrollTop-q-U))},this.refreshDirection=function(){this.scrollPrimarySize=I.__clientHeight,this.scrollSecondarySize=I.__clientWidth,this.estimatedPrimarySize=v,this.estimatedSecondarySize=g,this.estimatedItemsAcross=L&&Math.floor(I.__clientWidth/g)||1}}function u(){this.getItemPrimarySize=_,this.getItemSecondarySize=P,this.getScrollValue=function(){return Math.max(0,Math.min(I.__scrollLeft-q,I.__maxScrollLeft-q-U))},this.refreshDirection=function(){this.scrollPrimarySize=I.__clientWidth,this.scrollSecondarySize=I.__clientHeight,this.estimatedPrimarySize=g,this.estimatedSecondarySize=v,this.estimatedItemsAcross=L&&Math.floor(I.__clientHeight/v)||1}}function d(){this.getEstimatedSecondaryPos=function(e){return e%this.estimatedItemsAcross*this.estimatedSecondarySize},this.getEstimatedPrimaryPos=function(e){return Math.floor(e/this.estimatedItemsAcross)*this.estimatedPrimarySize},this.getEstimatedIndex=function(e){return Math.floor(e/this.estimatedPrimarySize)*this.estimatedItemsAcross}}function f(){this.getEstimatedSecondaryPos=function(){return 0},this.getEstimatedPrimaryPos=function(e){return e*this.estimatedPrimarySize},this.getEstimatedIndex=function(e){return Math.floor(e/this.estimatedPrimarySize)}}function h(){this.getContentSize=function(){return this.getEstimatedPrimaryPos(A.length-1)+this.estimatedPrimarySize+q+U};var e={};this.getDimensions=function(t){return e.primaryPos=this.getEstimatedPrimaryPos(t),e.secondaryPos=this.getEstimatedSecondaryPos(t),e.primarySize=this.estimatedPrimarySize,e.secondarySize=this.estimatedSecondarySize,e},this.updateRenderRange=function(e,t){W=Math.max(0,this.getEstimatedIndex(e)),F=Math.min(A.length-1,this.getEstimatedIndex(t)+this.estimatedItemsAcross-1),Y=Math.max(0,this.getEstimatedPrimaryPos(W)),X=this.getEstimatedPrimaryPos(F)+this.estimatedPrimarySize}}function p(){function e(e){var t,r,a;for(t=Math.max(0,n);e>=t&&(a=c[t]);t++)r=c[t-1]||i,a.primarySize=o.getItemPrimarySize(t,A[t]),a.secondarySize=o.scrollSecondarySize,a.primaryPos=r.primaryPos+r.primarySize,a.secondaryPos=0}function t(e){var t,r,a;for(t=Math.max(n,0);e>=t&&(a=c[t]);t++)r=c[t-1]||i,a.secondarySize=Math.min(o.getItemSecondarySize(t,A[t]),o.scrollSecondarySize),a.secondaryPos=r.secondaryPos+r.secondarySize,0===t||a.secondaryPos+a.secondarySize>o.scrollSecondarySize?(a.secondaryPos=0,a.primarySize=o.getItemPrimarySize(t,A[t]),a.primaryPos=r.primaryPos+r.rowPrimarySize,a.rowStartIndex=t,a.rowPrimarySize=a.primarySize):(a.primarySize=o.getItemPrimarySize(t,A[t]),a.primaryPos=r.primaryPos,a.rowStartIndex=r.rowStartIndex,c[a.rowStartIndex].rowPrimarySize=a.rowPrimarySize=Math.max(c[a.rowStartIndex].rowPrimarySize,a.primarySize),a.rowPrimarySize=Math.max(a.primarySize,a.rowPrimarySize))}var n,o=this,r=ionic.debounce(Q,25,!0),a=L?t:e,c=[];this.getContentSize=function(){var e=c[n]||i;return(e.primaryPos+e.primarySize||0)+this.getEstimatedPrimaryPos(A.length-n-1)+q+U},this.onDestroy=function(){c.length=0},this.onRefreshData=function(){var e,t;for(e=c.length,t=A.length;t>e;e++)c.push({});n=-1},this.onRefreshLayout=function(){n=-1},this.getDimensions=function(e){return e=Math.min(e,A.length-1),e>n&&(e>.9*A.length?(a(A.length-1),n=A.length-1,Q()):(a(e),n=e,r())),c[e]};var s=-1,l=-1;this.updateRenderRange=function(e,t){var n,i,o;if(this.getDimensions(2*this.getEstimatedIndex(t)),-1===s||0===e)n=0;else if(e>=l)for(n=s,i=A.length;i>n&&!((o=this.getDimensions(n))&&o.primaryPos+o.rowPrimarySize>=e);n++);else for(n=s;n>=0;n--)if((o=this.getDimensions(n))&&o.primaryPos<=e){n=L?o.rowStartIndex:n;break}W=Math.min(Math.max(0,n),A.length-1),Y=-1!==W?this.getDimensions(W).primaryPos:-1;var r;for(n=W+1,i=A.length;i>n;n++)if((o=this.getDimensions(n))&&o.primaryPos+o.rowPrimarySize>t){if(L)for(r=o;i-1>n&&(o=this.getDimensions(n+1)).primaryPos===r.primaryPos;)n++;break}F=Math.min(n,A.length-1),X=-1!==F?(o=this.getDimensions(F)).primaryPos+(o.rowPrimarySize||o.primarySize):-1,l=e,s=W}}var v,g,m=o.afterItemsNode,$=o.containerNode,w=o.forceRefreshImages,S=o.heightData,k=o.widthData,C=o.keyExpression,T=o.renderBuffer,B=o.scope,I=o.scrollView,x=o.transclude,A=[],E={},V=S.getValue||function(){return S.value},P=function(e,t){return E[C]=t,E.$index=e,V(B,E)},D=k.getValue||function(){return k.value},_=function(e,t){return E[C]=t,E.$index=e,D(B,E)},R=!!I.options.scrollingY,L=R?k.dynamic||k.value!==I.__clientWidth:S.dynamic||S.value!==I.__clientHeight,N=!S.dynamic&&!k.dynamic,z="PRIMARY",M="SECONDARY",H=R?"translate3d(SECONDARYpx,PRIMARYpx,0)":"translate3d(PRIMARYpx,SECONDARYpx,0)",O=R?"height: PRIMARYpx; width: SECONDARYpx;":"height: SECONDARYpx; width: PRIMARYpx;",q=0,U=0,W=-1,F=-1,X=-1,Y=-1,G=[],j=[],K=[],Z={},J=0,Q=R?function(){I.setDimensions(null,null,null,ee.getContentSize(),!0)}:function(){I.setDimensions(null,null,ee.getContentSize(),null,!0)},ee=R?new l:new u;(L?d:f).call(ee),(N?h:p).call(ee);var te=R?"getContentHeight":"getContentWidth",ne=I.options[te];I.options[te]=angular.bind(ee,ee.getContentSize),I.__$callback=I.__callback,I.__callback=function(e,t,n,i){var o=ee.getScrollValue();(-1===W||o+ee.scrollPrimarySize>X||Y>o)&&a(),I.__$callback(e,t,n,i)};var ie=!1,oe=!1;this.refreshLayout=function(){A.length?(v=P(0,A[0]),g=_(0,A[0])):(v=100,g=100);var e=getComputedStyle(m)||{},n=m.firstElementChild&&getComputedStyle(m.firstElementChild)||{},i=m.lastElementChild&&getComputedStyle(m.lastElementChild)||{};U=(parseInt(e[R?"height":"width"])||0)+(n&&parseInt(n[R?"marginTop":"marginLeft"])||0)+(i&&parseInt(i[R?"marginBottom":"marginRight"])||0),q=0;var o=$;do q+=o[R?"offsetTop":"offsetLeft"];while(ionic.DomUtil.contains(I.__content,o=o.offsetParent));var a=$.previousElementSibling,c=a?t.getComputedStyle(a):{},l=parseInt(c[R?"marginBottom":"marginRight"]||0);if($.style[ionic.CSS.TRANSFORM]=H.replace(z,-l).replace(M,0),q-=l,I.__clientHeight&&I.__clientWidth||(I.__clientWidth=I.__container.clientWidth,I.__clientHeight=I.__container.clientHeight),(ee.onRefreshLayout||angular.noop)(),ee.refreshDirection(),Q(),!ie)for(var u=Math.max(20,3*T),d=0;u>d;d++)G.push(new s);ie=!0,ie&&oe&&((I.__scrollLeft>I.__maxScrollLeft||I.__scrollTop>I.__maxScrollTop)&&I.resize(),r(!0))},this.setData=function(e){A=e,(ee.onRefreshData||angular.noop)(),oe=!0},this.destroy=function(){a.destroyed=!0,G.forEach(function(e){e.scope.$destroy(),e.scope=e.element=e.node=e.images=null}),G.length=K.length=j.length=0,Z={},I.options[te]=ne,I.__callback=I.__$callback,I.resize(),(ee.onDestroy||angular.noop)()}}}function n(e){return["$ionicGesture","$parse",function(t,n){var i=e.substr(2).toLowerCase();return function(o,r,a){var c=n(a[e]),s=function(e){o.$apply(function(){c(o,{$event:e})})},l=t.on(i,s,r);o.$on("$destroy",function(){t.off(l,i,s)})}}]}function i(){return["$ionicScrollDelegate",function(e){return{restrict:"E",link:function(t,n,i){function o(t){for(var i=3,o=t.target;i--&&o;){if(o.classList.contains("button")||o.tagName.match(/input|textarea|select/i)||o.isContentEditable)return;o=o.parentNode}var r=t.gesture&&t.gesture.touches[0]||t.detail.touches[0],a=n[0].getBoundingClientRect();ionic.DomUtil.rectContains(r.pageX,r.pageY,a.left,a.top-20,a.left+a.width,a.top+a.height)&&e.scrollTop(!0)}"true"!=i.noTapScroll&&(ionic.on("tap",o,n[0]),t.$on("$destroy",function(){ionic.off("tap",o,n[0])}))}}}]}function o(e){return["$document","$timeout",function(t,n){return{restrict:"E",controller:"$ionicHeaderBar",compile:function(i){function o(t,n,i,o){e?(t.$watch(function(){return n[0].className},function(e){var n=-1===e.indexOf("ng-hide"),i=-1!==e.indexOf("bar-subheader");t.$hasHeader=n&&!i,t.$hasSubheader=n&&i,t.$emit("$ionicSubheader",t.$hasSubheader)}),t.$on("$destroy",function(){delete t.$hasHeader,delete t.$hasSubheader}),o.align(),t.$on("$ionicHeader.align",function(){ionic.requestAnimationFrame(function(){o.align()})})):(t.$watch(function(){return n[0].className},function(e){var n=-1===e.indexOf("ng-hide"),i=-1!==e.indexOf("bar-subfooter");t.$hasFooter=n&&!i,t.$hasSubfooter=n&&i}),t.$on("$destroy",function(){delete t.$hasFooter,delete t.$hasSubfooter}),t.$watch("$hasTabs",function(e){n.toggleClass("has-tabs",!!e)}))}return i.addClass(e?"bar bar-header":"bar bar-footer"),n(function(){e&&t[0].getElementsByClassName("tabs-top").length&&i.addClass("has-tabs-top")}),{pre:o}}}}]}function r(e){return e.clientHeight}function a(e){e.stopPropagation()}var c=angular.module("ionic",["ngAnimate","ngSanitize","ui.router"]),s=angular.extend,l=angular.forEach,u=angular.isDefined,d=angular.isNumber,f=angular.isString,h=angular.element,p=angular.noop;c.factory("$ionicActionSheet",["$rootScope","$compile","$animate","$timeout","$ionicTemplateLoader","$ionicPlatform","$ionicBody","IONIC_BACK_PRIORITY",function(e,t,n,i,o,r,a,c){function l(o){function l(e){e&&/icon/.test(e)&&(u.$actionSheetHasIcon=!0)}var u=e.$new(!0);s(u,{cancel:p,destructiveButtonClicked:p,buttonClicked:p,$deregisterBackButton:p,buttons:[],cancelOnStateChange:!0},o||{});for(var d=0;d<u.buttons.length;d++)l(u.buttons[d].text);l(u.cancelText),l(u.destructiveText);var f=u.element=t('<ion-action-sheet ng-class="cssClass" buttons="buttons"></ion-action-sheet>')(u),v=h(f[0].querySelector(".action-sheet-wrapper")),g=u.cancelOnStateChange?e.$on("$stateChangeSuccess",function(){u.cancel()}):p;return u.removeSheet=function(e){u.removed||(u.removed=!0,v.removeClass("action-sheet-up"),i(function(){a.removeClass("action-sheet-open")},400),u.$deregisterBackButton(),g(),n.removeClass(f,"active").then(function(){u.$destroy(),f.remove(),u.cancel.$scope=v=null,(e||p)()}))},u.showSheet=function(e){u.removed||(a.append(f).addClass("action-sheet-open"),n.addClass(f,"active").then(function(){u.removed||(e||p)()}),i(function(){u.removed||v.addClass("action-sheet-up")},20,!1))},u.$deregisterBackButton=r.registerBackButtonAction(function(){i(u.cancel)},c.actionSheet),u.cancel=function(){u.removeSheet(o.cancel)},u.buttonClicked=function(e){o.buttonClicked(e,o.buttons[e])===!0&&u.removeSheet()},u.destructiveButtonClicked=function(){o.destructiveButtonClicked()===!0&&u.removeSheet()},u.showSheet(),u.cancel.$scope=u,u.cancel}return{show:l}}]),h.prototype.addClass=function(e){var t,n,i,o,r,a;if(e&&"ng-scope"!=e&&"ng-isolate-scope"!=e)for(t=0;t<this.length;t++)if(o=this[t],o.setAttribute)if(e.indexOf(" ")<0&&o.classList.add)o.classList.add(e);else{for(a=(" "+(o.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),r=e.split(" "),n=0;n<r.length;n++)i=r[n].trim(),-1===a.indexOf(" "+i+" ")&&(a+=i+" ");o.setAttribute("class",a.trim())}return this},h.prototype.removeClass=function(e){var t,n,i,o,r;if(e)for(t=0;t<this.length;t++)if(r=this[t],r.getAttribute)if(e.indexOf(" ")<0&&r.classList.remove)r.classList.remove(e);else for(i=e.split(" "),n=0;n<i.length;n++)o=i[n],r.setAttribute("class",(" "+(r.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+o.trim()+" "," ").trim());return this},c.factory("$ionicBackdrop",["$document","$timeout","$$rAF",function(e,t,n){function i(){c++,1===c&&(a.addClass("visible"),n(function(){c>=1&&a.addClass("active")}))}function o(){1===c&&(a.removeClass("active"),t(function(){0===c&&a.removeClass("visible")},400,!1)),c=Math.max(0,c-1)}function r(){return a}var a=h('<div class="backdrop">'),c=0;return e[0].body.appendChild(a[0]),{retain:i,release:o,getElement:r,_element:a}}]),c.factory("$ionicBind",["$parse","$interpolate",function(e,t){var n=/^\s*([@=&])(\??)\s*(\w*)\s*$/;return function(i,o,r){l(r||{},function(r,a){var c,s,l=r.match(n)||[],u=l[3]||a,d=l[1];switch(d){case"@":if(!o[u])return;o.$observe(u,function(e){i[a]=e}),o[u]&&(i[a]=t(o[u])(i));break;case"=":if(!o[u])return;s=i.$watch(o[u],function(e){i[a]=e}),i.$on("$destroy",s);break;case"&":if(o[u]&&o[u].match(RegExp(a+"(.*?)")))throw new Error('& expression binding "'+a+'" looks like it will recursively call "'+o[u]+'" and cause a stack overflow! Please choose a different scopeName.');c=e(o[u]),i[a]=function(e){return c(i,e)}}})}}]),c.factory("$ionicBody",["$document",function(e){return{addClass:function(){for(var t=0;t<arguments.length;t++)e[0].body.classList.add(arguments[t]);return this},removeClass:function(){for(var t=0;t<arguments.length;t++)e[0].body.classList.remove(arguments[t]);return this},enableClass:function(e){var t=Array.prototype.slice.call(arguments).slice(1);return e?this.addClass.apply(this,t):this.removeClass.apply(this,t),this},append:function(t){return e[0].body.appendChild(t.length?t[0]:t),this},get:function(){return e[0].body}}}]),c.factory("$ionicClickBlock",["$document","$ionicBody","$timeout",function(e,t,n){function i(e){e.preventDefault(),e.stopPropagation()}function o(){s&&(a?a.classList.remove(l):(a=e[0].createElement("div"),a.className="click-block",t.append(a),a.addEventListener("touchstart",i),a.addEventListener("mousedown",i)),s=!1)}function r(){a&&a.classList.add(l)}var a,c,s,l="click-block-hide";return{show:function(e){s=!0,n.cancel(c),c=n(this.hide,e||310,!1),o()},hide:function(){s=!1,n.cancel(c),r()}}}]),c.factory("$ionicGesture",[function(){return{on:function(e,t,n,i){return window.ionic.onGesture(e,t,n[0],i)},off:function(e,t,n){return window.ionic.offGesture(e,t,n)}}}]),c.factory("$ionicHistory",["$rootScope","$state","$location","$window","$timeout","$ionicViewSwitcher","$ionicNavViewDelegate",function(e,t,n,i,o,r,a){function c(e){return e?R.views[e]:null}function l(e){return e?c(e.backViewId):null}function d(e){return e?c(e.forwardViewId):null}function f(e){return e?R.histories[e]:null}function h(e){var t=p(e);return R.histories[t.historyId]||(R.histories[t.historyId]={historyId:t.historyId,parentHistoryId:p(t.scope.$parent).historyId,stack:[],cursor:-1}),f(t.historyId)}function p(t){for(var n=t;n;){if(n.hasOwnProperty("$historyId"))return{historyId:n.$historyId,scope:n};n=n.$parent}return{historyId:"root",scope:e}}function v(e){R.currentView=c(e),R.backView=l(R.currentView),R.forwardView=d(R.currentView)}function g(){var e;if(t&&t.current&&t.current.name){if(e=t.current.name,t.params)for(var n in t.params)t.params.hasOwnProperty(n)&&t.params[n]&&(e+="_"+n+"="+t.params[n]);return e}return ionic.Utils.nextUid()}function m(){var e;if(t&&t.params)for(var n in t.params)t.params.hasOwnProperty(n)&&(e=e||{},e[n]=t.params[n]);return e}function $(e){return e&&e.length&&/ion-side-menus|ion-tabs/i.test(e[0].tagName)}function w(e,t){return t&&t.$$state&&t.$$state.self.canSwipeBack===!1?!1:e&&"false"===e.attr("can-swipe-back")?!1:!0}var b,y,S,k,C="initialView",T="newView",B="moveBack",I="moveForward",x="back",A="forward",E="enter",V="exit",P="swap",D="none",_=0,R={histories:{root:{historyId:"root",parentHistoryId:null,stack:[],cursor:-1}},views:{},backView:null,forwardView:null,currentView:null},L=function(){};return L.prototype.initialize=function(e){if(e){for(var t in e)this[t]=e[t];return this}return null},L.prototype.go=function(){if(this.stateName)return t.go(this.stateName,this.stateParams);if(this.url&&this.url!==n.url()){if(R.backView===this)return i.history.go(-1);if(R.forwardView===this)return i.history.go(1);n.url(this.url)}return null},L.prototype.destroy=function(){this.scope&&(this.scope.$destroy&&this.scope.$destroy(),this.scope=null)},{register:function(e,t){var i,a,s,u=g(),d=h(e),$=R.currentView,L=R.backView,N=R.forwardView,z=null,M=null,H=D,O=d.historyId,q=n.url();if(b!==u&&(b=u,_++),k)z=k.viewId,M=k.action,H=k.direction,k=null;else if(L&&L.stateId===u)z=L.viewId,O=L.historyId,M=B,L.historyId===$.historyId?H=x:$&&(H=V,i=f(L.historyId),i&&i.parentHistoryId===$.historyId?H=E:(i=f($.historyId),i&&i.parentHistoryId===d.parentHistoryId&&(H=P)));else if(N&&N.stateId===u)z=N.viewId,O=N.historyId,M=I,N.historyId===$.historyId?H=A:$&&(H=V,$.historyId===d.parentHistoryId?H=E:(i=f($.historyId),i&&i.parentHistoryId===d.parentHistoryId&&(H=P))),i=p(e),N.historyId&&i.scope&&(i.scope.$historyId=N.historyId,O=N.historyId);else if($&&$.historyId!==O&&d.cursor>-1&&d.stack.length>0&&d.cursor<d.stack.length&&d.stack[d.cursor].stateId===u){var U=d.stack[d.cursor];z=U.viewId,O=U.historyId,M=B,H=P,i=f($.historyId),i&&i.parentHistoryId===O?H=V:(i=f(O),i&&i.parentHistoryId===$.historyId&&(H=E)),i=c(U.backViewId),i&&U.historyId!==i.historyId&&(d.stack[d.cursor].backViewId=$.viewId)}else{if(s=r.createViewEle(t),this.isAbstractEle(s,t))return{action:"abstractView",direction:D,ele:s};if(z=ionic.Utils.nextUid(),$){if($.forwardViewId=z,M=T,N&&$.stateId!==N.stateId&&$.historyId===N.historyId&&(i=f(N.historyId))){for(a=i.stack.length-1;a>=N.index;a--){var W=i.stack[a];W&&W.destroy&&W.destroy(),i.stack.splice(a)}O=N.historyId}d.historyId===$.historyId?H=A:$.historyId!==d.historyId&&(H=E,i=f($.historyId),i&&i.parentHistoryId===d.parentHistoryId?H=P:(i=f(i.parentHistoryId),i&&i.historyId===d.historyId&&(H=V)))}else M=C;2>_&&(H=D),R.views[z]=this.createView({viewId:z,index:d.stack.length,historyId:d.historyId,backViewId:$&&$.viewId?$.viewId:null,forwardViewId:null,stateId:u,stateName:this.currentStateName(),stateParams:m(),url:q,canSwipeBack:w(s,t)}),d.stack.push(R.views[z])}if(o.cancel(S),y){if(y.disableAnimate&&(H=D),y.disableBack&&(R.views[z].backViewId=null),y.historyRoot){for(a=0;a<d.stack.length;a++)d.stack[a].viewId===z?(d.stack[a].index=0,d.stack[a].backViewId=d.stack[a].forwardViewId=null):delete R.views[d.stack[a].viewId];d.stack=[R.views[z]]}y=null}if(v(z),R.backView&&O==R.backView.historyId&&u==R.backView.stateId&&q==R.backView.url)for(a=0;a<d.stack.length;a++)if(d.stack[a].viewId==z){M="dupNav",H=D,a>0&&(d.stack[a-1].forwardViewId=null),R.forwardView=null,R.currentView.index=R.backView.index,R.currentView.backViewId=R.backView.backViewId,R.backView=l(R.backView),d.stack.splice(a,1);break}return d.cursor=R.currentView.index,{viewId:z,action:M,direction:H,historyId:O,enableBack:this.enabledBack(R.currentView),isHistoryRoot:0===R.currentView.index,ele:s}},registerHistory:function(e){e.$historyId=ionic.Utils.nextUid()},createView:function(e){var t=new L;return t.initialize(e)},getViewById:c,viewHistory:function(){return R},currentView:function(e){return arguments.length&&(R.currentView=e),R.currentView},currentHistoryId:function(){return R.currentView?R.currentView.historyId:null},currentTitle:function(e){return R.currentView?(arguments.length&&(R.currentView.title=e),R.currentView.title):void 0},backView:function(e){return arguments.length&&(R.backView=e),R.backView},backTitle:function(e){var t=e&&c(e.backViewId)||R.backView;return t&&t.title},forwardView:function(e){return arguments.length&&(R.forwardView=e),R.forwardView},currentStateName:function(){return t&&t.current?t.current.name:null},isCurrentStateNavView:function(e){return!!(t&&t.current&&t.current.views&&t.current.views[e])},goToHistoryRoot:function(e){if(e){var t=f(e);if(t&&t.stack.length){if(R.currentView&&R.currentView.viewId===t.stack[0].viewId)return;k={viewId:t.stack[0].viewId,action:B,direction:x},t.stack[0].go()}}},goBack:function(e){if(u(e)&&-1!==e){if(e>-1)return;var t=R.histories[this.currentHistoryId()],n=t.cursor+e+1;1>n&&(n=1),t.cursor=n,v(t.stack[n].viewId);for(var i=n-1,r=[],a=c(t.stack[i].forwardViewId);a&&(r.push(a.stateId||a.viewId),i++,!(i>=t.stack.length));)a=c(t.stack[i].forwardViewId);var s=this;r.length&&o(function(){s.clearCache(r)},600)}R.backView&&R.backView.go()},enabledBack:function(e){var t=l(e);return!(!t||t.historyId!==e.historyId)},clearHistory:function(){var e=R.histories,t=R.currentView;if(e)for(var n in e)e[n].stack&&(e[n].stack=[],e[n].cursor=-1),t&&t.historyId===n?(t.backViewId=t.forwardViewId=null,e[n].stack.push(t)):e[n].destroy&&e[n].destroy();for(var i in R.views)i!==t.viewId&&delete R.views[i];t&&v(t.viewId)},clearCache:function(e){o(function(){a._instances.forEach(function(t){t.clearCache(e)})})},nextViewOptions:function(e){return arguments.length&&(o.cancel(S),null===e?y=e:(y=y||{},s(y,e),y.expire&&(S=o(function(){y=null},y.expire)))),y},isAbstractEle:function(e,t){return t&&t.$$state&&t.$$state.self["abstract"]?!0:!(!e||!$(e)&&!$(e.children()))},isActiveScope:function(e){if(!e)return!1;for(var t,n=e,i=this.currentHistoryId();n;){if(n.$$disconnected)return!1;if(!t&&n.hasOwnProperty("$historyId")&&(t=!0),i){if(n.hasOwnProperty("$historyId")&&i==n.$historyId)return!0;if(n.hasOwnProperty("$activeHistoryId")&&i==n.$activeHistoryId){if(n.hasOwnProperty("$historyId"))return!0;if(!t)return!0}}t&&n.hasOwnProperty("$activeHistoryId")&&(t=!1),n=n.$parent}return i?"root"==i:!0}}}]).run(["$rootScope","$state","$location","$document","$ionicPlatform","$ionicHistory","IONIC_BACK_PRIORITY",function(e,t,n,i,o,r,a){function c(e){var t=r.backView();return t?t.go():ionic.Platform.exitApp(),e.preventDefault(),!1}e.$on("$ionicView.beforeEnter",function(){ionic.keyboard&&ionic.keyboard.hide&&ionic.keyboard.hide()}),e.$on("$ionicHistory.change",function(e,i){if(!i)return null;var o=r.viewHistory(),a=i.historyId?o.histories[i.historyId]:null;if(a&&a.cursor>-1&&a.cursor<a.stack.length){var c=a.stack[a.cursor];return c.go(i)}!i.url&&i.uiSref&&(i.url=t.href(i.uiSref)),i.url&&(0===i.url.indexOf("#")&&(i.url=i.url.replace("#","")),i.url!==n.url()&&n.url(i.url))}),e.$ionicGoBack=function(e){r.goBack(e)},e.$on("$ionicView.afterEnter",function(e,t){t&&t.title&&(i[0].title=t.title)}),o.registerBackButtonAction(c,a.view)}]),c.provider("$ionicConfig",function(){function e(e,i){a.platform[e]=i,o.platform[e]={},t(a,a.platform[e]),n(a.platform[e],o.platform[e],"")}function t(e,n){for(var i in e)i!=r&&e.hasOwnProperty(i)&&(angular.isObject(e[i])?(u(n[i])||(n[i]={}),t(e[i],n[i])):u(n[i])||(n[i]=null))}function n(e,t,o){l(e,function(c,s){angular.isObject(e[s])?(t[s]={},n(e[s],t[s],o+"."+s)):t[s]=function(n){if(arguments.length)return e[s]=n,t;if(e[s]==r){var c=i(a.platform,ionic.Platform.platform()+o+"."+s);return c||c===!1?c:i(a.platform,"default"+o+"."+s)}return e[s]}})}function i(e,t){t=t.split(".");for(var n=0;n<t.length;n++){if(!e||!u(e[t[n]]))return null;e=e[t[n]]}return e}var o=this;o.platform={};var r="platform",a={views:{maxCache:r,forwardCache:r,transition:r,swipeBackEnabled:r,swipeBackHitWidth:r},navBar:{alignTitle:r,positionPrimaryButtons:r,positionSecondaryButtons:r,transition:r},backButton:{icon:r,text:r,previousTitleText:r},form:{checkbox:r,toggle:r},scrolling:{jsScrolling:r},tabs:{style:r,position:r},templates:{maxPrefetch:r},platform:{}};n(a,o,""),e("default",{views:{maxCache:10,forwardCache:!1,transition:"ios",swipeBackEnabled:!0,swipeBackHitWidth:45},navBar:{alignTitle:"center",positionPrimaryButtons:"left",positionSecondaryButtons:"right",transition:"view"},backButton:{icon:"ion-ios-arrow-back",text:"Back",previousTitleText:!0},form:{checkbox:"circle",toggle:"large"},scrolling:{jsScrolling:!0},tabs:{style:"standard",position:"bottom"},templates:{maxPrefetch:30}}),e("ios",{}),e("android",{views:{transition:"android",swipeBackEnabled:!1},navBar:{alignTitle:"left",positionPrimaryButtons:"right",positionSecondaryButtons:"right"},backButton:{icon:"ion-android-arrow-back",text:!1,previousTitleText:!1},form:{checkbox:"square",toggle:"small"},tabs:{style:"striped",position:"top"}}),e("windowsphone",{}),o.transitions={views:{},navBar:{}},o.transitions.views.ios=function(e,t,n,i){function o(e,t,n,i){var o={};o[ionic.CSS.TRANSITION_DURATION]=r.shouldAnimate?"":0,o.opacity=t,i>-1&&(o.boxShadow="0 0 10px rgba(0,0,0,"+(r.shouldAnimate?.45*i:.3)+")"),o[ionic.CSS.TRANSFORM]="translate3d("+n+"%,0,0)",ionic.DomUtil.cachedStyles(e,o)}var r={run:function(i){"forward"==n?(o(e,1,99*(1-i),1-i),o(t,1-.1*i,-33*i,-1)):"back"==n?(o(e,1-.1*(1-i),-33*(1-i),-1),o(t,1,100*i,1-i)):(o(e,1,0,-1),o(t,0,0,-1))},shouldAnimate:i&&("forward"==n||"back"==n)};return r},o.transitions.navBar.ios=function(e,t,n,i){function o(e,t,n,i){var o={};o[ionic.CSS.TRANSITION_DURATION]=c.shouldAnimate?"":"0ms",o.opacity=1===t?"":t,e.setCss("buttons-left",o),e.setCss("buttons-right",o),e.setCss("back-button",o),o[ionic.CSS.TRANSFORM]="translate3d("+i+"px,0,0)",e.setCss("back-text",o),o[ionic.CSS.TRANSFORM]="translate3d("+n+"px,0,0)",e.setCss("title",o)}function r(e,t,n){if(e&&t){var i=(e.titleTextX()+e.titleWidth())*(1-n),r=t&&(t.titleTextX()-e.backButtonTextLeft())*(1-n)||0;o(e,n,i,r)}}function a(e,t,n){if(e&&t){var i=(-(e.titleTextX()-t.backButtonTextLeft())-e.titleLeftRight())*n;o(e,1-n,i,0)}}var c={run:function(n){var i=e.controller(),o=t&&t.controller();"back"==c.direction?(a(i,o,1-n),r(o,i,1-n)):(r(i,o,n),a(o,i,n))},direction:n,shouldAnimate:i&&("forward"==n||"back"==n)};return c},o.transitions.views.android=function(e,t,n,i){function o(e,t){var n={};n[ionic.CSS.TRANSITION_DURATION]=r.shouldAnimate?"":0,n[ionic.CSS.TRANSFORM]="translate3d("+t+"%,0,0)",ionic.DomUtil.cachedStyles(e,n)}i=i&&("forward"==n||"back"==n);var r={run:function(i){"forward"==n?(o(e,99*(1-i)),o(t,-100*i)):"back"==n?(o(e,-100*(1-i)),o(t,100*i)):(o(e,0),o(t,0))},shouldAnimate:i};return r},o.transitions.navBar.android=function(e,t,n,i){function o(e,t){if(e){var n={};n.opacity=1===t?"":t,e.setCss("buttons-left",n),e.setCss("buttons-right",n),e.setCss("back-button",n),e.setCss("back-text",n),e.setCss("title",n)}}return{run:function(n){o(e.controller(),n),o(t&&t.controller(),1-n)},shouldAnimate:i&&("forward"==n||"back"==n)}},o.transitions.views.none=function(e,t){return{run:function(n){o.transitions.views.android(e,t,!1,!1).run(n)},shouldAnimate:!1}},o.transitions.navBar.none=function(e,t){return{run:function(n){o.transitions.navBar.ios(e,t,!1,!1).run(n),o.transitions.navBar.android(e,t,!1,!1).run(n)},shouldAnimate:!1}},o.setPlatformConfig=e,o.$get=function(){return o;

}}).config(["$compileProvider",function(e){e.aHrefSanitizationWhitelist(/^\s*(https?|tel|ftp|mailto|file|ghttps?|ms-appx|x-wmapp0):/),e.imgSrcSanitizationWhitelist(/^\s*(https?|tel|ftp|file|blob|ms-appx|x-wmapp0):|data:image\//)}]);var v='<div class="loading-container"><div class="loading"></div></div>',g="$ionicLoading instance.hide() has been deprecated. Use $ionicLoading.hide().",m="$ionicLoading instance.show() has been deprecated. Use $ionicLoading.show().",$="$ionicLoading instance.setContent() has been deprecated. Use $ionicLoading.show({ template: 'my content' }).";c.constant("$ionicLoadingConfig",{template:"<ion-spinner></ion-spinner>"}).factory("$ionicLoading",["$ionicLoadingConfig","$ionicBody","$ionicTemplateLoader","$ionicBackdrop","$timeout","$q","$log","$compile","$ionicPlatform","$rootScope","IONIC_BACK_PRIORITY",function(e,t,n,i,o,r,a,c,l,u,d){function f(){return b||(b=n.compile({template:v,appendTo:t.get()}).then(function(e){return e.show=function(a){var s=a.templateUrl?n.load(a.templateUrl):r.when(a.template||a.content||"");e.scope=a.scope||e.scope,e.isShown||(e.hasBackdrop=!a.noBackdrop&&a.showBackdrop!==!1,e.hasBackdrop&&(i.retain(),i.getElement().addClass("backdrop-loading"))),a.duration&&(o.cancel(e.durationTimeout),e.durationTimeout=o(angular.bind(e,e.hide),+a.duration)),y(),y=l.registerBackButtonAction(p,d.loading),s.then(function(n){if(n){var i=e.element.children();i.html(n),c(i.contents())(e.scope)}e.isShown&&(e.element.addClass("visible"),ionic.requestAnimationFrame(function(){e.isShown&&(e.element.addClass("active"),t.addClass("loading-active"))}))}),e.isShown=!0},e.hide=function(){y(),e.isShown&&(e.hasBackdrop&&(i.release(),i.getElement().removeClass("backdrop-loading")),e.element.removeClass("active"),t.removeClass("loading-active"),setTimeout(function(){!e.isShown&&e.element.removeClass("visible")},200)),o.cancel(e.durationTimeout),e.isShown=!1},e})),b}function h(t){t=s({},e||{},t||{});var n=t.delay||t.showDelay||0;return S(),k(),t.hideOnStateChange&&(S=u.$on("$stateChangeSuccess",w),k=u.$on("$stateChangeError",w)),o.cancel(C),C=o(p,n),C.then(f).then(function(e){return e.show(t)}),{hide:function(){return a.error(g),w.apply(this,arguments)},show:function(){return a.error(m),h.apply(this,arguments)},setContent:function(e){return a.error($),f().then(function(t){t.show({template:e})})}}}function w(){S(),k(),o.cancel(C),f().then(function(e){e.hide()})}var b,y=p,S=p,k=p,C=r.when();return{show:h,hide:w,_getLoader:f}}]),c.factory("$ionicModal",["$rootScope","$ionicBody","$compile","$timeout","$ionicPlatform","$ionicTemplateLoader","$$q","$log","$ionicClickBlock","$window","IONIC_BACK_PRIORITY",function(e,t,n,i,o,r,a,c,l,u,d){var f=ionic.views.Modal.inherit({initialize:function(e){ionic.views.Modal.prototype.initialize.call(this,e),this.animation=e.animation||"slide-in-up"},show:function(e){var n=this;if(n.scope.$$destroyed)return c.error("Cannot call "+n.viewType+".show() after remove(). Please create a new "+n.viewType+" instance."),a.when();l.show(600);var r=h(n.modalEl);n.el.classList.remove("hide"),i(function(){n._isShown&&t.addClass(n.viewType+"-open")},400,!1),n.el.parentElement||(r.addClass(n.animation),t.append(n.el));var s=r.data("$$ionicScrollController");return s&&s.resize(),e&&n.positionView&&(n.positionView(e,r),n._onWindowResize=function(){n._isShown&&n.positionView(e,r)},ionic.on("resize",n._onWindowResize,window)),r.addClass("ng-enter active").removeClass("ng-leave ng-leave-active"),n._isShown=!0,n._deregisterBackButton=o.registerBackButtonAction(n.hardwareBackButtonClose?angular.bind(n,n.hide):p,d.modal),ionic.views.Modal.prototype.show.call(n),i(function(){n._isShown&&(r.addClass("ng-enter-active"),ionic.trigger("resize"),n.scope.$parent&&n.scope.$parent.$broadcast(n.viewType+".shown",n),n.el.classList.add("active"),n.scope.$broadcast("$ionicHeader.align"))},20),i(function(){n._isShown&&n.$el.on("click",function(e){n.backdropClickToClose&&e.target===n.el&&n.hide()})},400)},hide:function(){var e=this,n=h(e.modalEl);return l.show(600),e.el.classList.remove("active"),n.addClass("ng-leave"),i(function(){e._isShown||n.addClass("ng-leave-active").removeClass("ng-enter ng-enter-active active")},20,!1),e.$el.off("click"),e._isShown=!1,e.scope.$parent&&e.scope.$parent.$broadcast(e.viewType+".hidden",e),e._deregisterBackButton&&e._deregisterBackButton(),ionic.views.Modal.prototype.hide.call(e),e.positionView&&ionic.off("resize",e._onWindowResize,window),i(function(){t.removeClass(e.viewType+"-open"),e.el.classList.add("hide")},e.hideDelay||320)},remove:function(){var e=this;return e.scope.$parent&&e.scope.$parent.$broadcast(e.viewType+".removed",e),e.hide().then(function(){e.scope.$destroy(),e.$el.remove()})},isShown:function(){return!!this._isShown}}),v=function(t,i){var o=i.scope&&i.scope.$new()||e.$new(!0);i.viewType=i.viewType||"modal",s(o,{$hasHeader:!1,$hasSubheader:!1,$hasFooter:!1,$hasSubfooter:!1,$hasTabs:!1,$hasTabsTop:!1});var r=n("<ion-"+i.viewType+">"+t+"</ion-"+i.viewType+">")(o);i.$el=r,i.el=r[0],i.modalEl=i.el.querySelector("."+i.viewType);var a=new f(i);return a.scope=o,i.scope||(o[i.viewType]=a),a};return{fromTemplate:function(e,t){var n=v(e,t||{});return n},fromTemplateUrl:function(e,t,n){var i;return angular.isFunction(t)&&(i=t,t=n),r.load(e).then(function(e){var n=v(e,t||{});return i&&i(n),n})}}}]),c.service("$ionicNavBarDelegate",ionic.DelegateService(["align","showBackButton","showBar","title","changeTitle","setTitle","getTitle","back","getPreviousTitle"])),c.service("$ionicNavViewDelegate",ionic.DelegateService(["clearCache"])),c.constant("IONIC_BACK_PRIORITY",{view:100,sideMenu:150,modal:200,actionSheet:300,popup:400,loading:500}).provider("$ionicPlatform",function(){return{$get:["$q",function(e){var t={onHardwareBackButton:function(e){ionic.Platform.ready(function(){document.addEventListener("backbutton",e,!1)})},offHardwareBackButton:function(e){ionic.Platform.ready(function(){document.removeEventListener("backbutton",e)})},$backButtonActions:{},registerBackButtonAction:function(e,n,i){t._hasBackButtonHandler||(t.$backButtonActions={},t.onHardwareBackButton(t.hardwareBackButtonClick),t._hasBackButtonHandler=!0);var o={id:i?i:ionic.Utils.nextUid(),priority:n?n:0,fn:e};return t.$backButtonActions[o.id]=o,function(){delete t.$backButtonActions[o.id]}},hardwareBackButtonClick:function(e){var n,i;for(i in t.$backButtonActions)(!n||t.$backButtonActions[i].priority>=n.priority)&&(n=t.$backButtonActions[i]);return n?(n.fn(e),n):void 0},is:function(e){return ionic.Platform.is(e)},on:function(e,t){return ionic.Platform.ready(function(){document.addEventListener(e,t,!1)}),function(){ionic.Platform.ready(function(){document.removeEventListener(e,t)})}},ready:function(t){var n=e.defer();return ionic.Platform.ready(function(){n.resolve(),t&&t()}),n.promise}};return t}]}}),c.factory("$ionicPopover",["$ionicModal","$ionicPosition","$document","$window",function(e,t,n,i){function o(e,n){var o=h(e.target||e),a=t.offset(o),c=n.prop("offsetWidth"),s=n.prop("offsetHeight"),l=i.innerWidth,u=i.innerHeight,d={left:a.left+a.width/2-c/2},f=h(n[0].querySelector(".popover-arrow"));d.left<r?d.left=r:d.left+c+r>l&&(d.left=l-c-r),a.top+a.height+s>u&&a.top-s>0?(d.top=a.top-s,n.addClass("popover-bottom")):(d.top=a.top+a.height,n.removeClass("popover-bottom")),f.css({left:a.left+a.width/2-f.prop("offsetWidth")/2-d.left+"px"}),n.css({top:d.top+"px",left:d.left+"px",marginLeft:"0",opacity:"1"})}var r=6,a={viewType:"popover",hideDelay:1,animation:"none",positionView:o};return{fromTemplate:function(t,n){return e.fromTemplate(t,ionic.Utils.extend(a,n||{}))},fromTemplateUrl:function(t,n){return e.fromTemplateUrl(t,ionic.Utils.extend(a,n||{}))}}}]);var w='<div class="popup-container" ng-class="cssClass"><div class="popup"><div class="popup-head"><h3 class="popup-title" ng-bind-html="title"></h3><h5 class="popup-sub-title" ng-bind-html="subTitle" ng-if="subTitle"></h5></div><div class="popup-body"></div><div class="popup-buttons" ng-show="buttons.length"><button ng-repeat="button in buttons" ng-click="$buttonTapped(button, $event)" class="button" ng-class="button.type || \'button-default\'" ng-bind-html="button.text"></button></div></div></div>';c.factory("$ionicPopup",["$ionicTemplateLoader","$ionicBackdrop","$q","$timeout","$rootScope","$ionicBody","$compile","$ionicPlatform","IONIC_BACK_PRIORITY",function(e,t,n,i,o,r,a,c,l){function u(t){t=s({scope:null,title:"",buttons:[]},t||{});var c={};return c.scope=(t.scope||o).$new(),c.element=h(w),c.responseDeferred=n.defer(),r.get().appendChild(c.element[0]),a(c.element)(c.scope),s(c.scope,{title:t.title,buttons:t.buttons,subTitle:t.subTitle,cssClass:t.cssClass,$buttonTapped:function(e,t){var n=(e.onTap||p)(t);t=t.originalEvent||t,t.defaultPrevented||c.responseDeferred.resolve(n)}}),n.when(t.templateUrl?e.load(t.templateUrl):t.template||t.content||"").then(function(e){var t=h(c.element[0].querySelector(".popup-body"));e?(t.html(e),a(t.contents())(c.scope)):t.remove()}),c.show=function(){c.isShown||c.removed||(c.isShown=!0,ionic.requestAnimationFrame(function(){c.isShown&&(c.element.removeClass("popup-hidden"),c.element.addClass("popup-showing active"),v(c.element))}))},c.hide=function(e){return e=e||p,c.isShown?(c.isShown=!1,c.element.removeClass("active"),c.element.addClass("popup-hidden"),void i(e,250,!1)):e()},c.remove=function(){c.removed||(c.hide(function(){c.element.remove(),c.scope.$destroy()}),c.removed=!0)},c}function d(){var e=y[y.length-1];e&&e.responseDeferred.resolve()}function f(e){function n(){y.push(o),i(o.show,a,!1),o.responseDeferred.promise.then(function(e){var n=y.indexOf(o);return-1!==n&&y.splice(n,1),y.length>0?y[y.length-1].show():(t.release(),i(function(){y.length||r.removeClass("popup-open")},400,!1),(S._backButtonActionDone||p)()),o.remove(),e})}var o=S._createPopup(e),a=0;return y.length>0?(y[y.length-1].hide(),a=b.stackPushDelay):(r.addClass("popup-open"),t.retain(),S._backButtonActionDone=c.registerBackButtonAction(d,l.popup)),o.responseDeferred.promise.close=function(e){o.removed||o.responseDeferred.resolve(e)},o.responseDeferred.notify({close:o.responseDeferred.close}),n(),o.responseDeferred.promise}function v(e){var t=e[0].querySelector("[autofocus]");t&&t.focus()}function g(e){return f(s({buttons:[{text:e.okText||"OK",type:e.okType||"button-positive",onTap:function(){return!0}}]},e||{}))}function m(e){return f(s({buttons:[{text:e.cancelText||"Cancel",type:e.cancelType||"button-default",onTap:function(){return!1}},{text:e.okText||"OK",type:e.okType||"button-positive",onTap:function(){return!0}}]},e||{}))}function $(e){var t=o.$new(!0);t.data={};var n="";return e.template&&/<[a-z][\s\S]*>/i.test(e.template)===!1&&(n="<span>"+e.template+"</span>",delete e.template),f(s({template:n+'<input ng-model="data.response" type="'+(e.inputType||"text")+'" placeholder="'+(e.inputPlaceholder||"")+'">',scope:t,buttons:[{text:e.cancelText||"Cancel",type:e.cancelType||"button-default",onTap:function(){}},{text:e.okText||"OK",type:e.okType||"button-positive",onTap:function(){return t.data.response||""}}]},e||{}))}var b={stackPushDelay:75},y=[],S={show:f,alert:g,confirm:m,prompt:$,_createPopup:u,_popupStack:y};return S}]),c.factory("$ionicPosition",["$document","$window",function(e,t){function n(e,n){return e.currentStyle?e.currentStyle[n]:t.getComputedStyle?t.getComputedStyle(e)[n]:e.style[n]}function i(e){return"static"===(n(e,"position")||"static")}var o=function(t){for(var n=e[0],o=t.offsetParent||n;o&&o!==n&&i(o);)o=o.offsetParent;return o||n};return{position:function(t){var n=this.offset(t),i={top:0,left:0},r=o(t[0]);r!=e[0]&&(i=this.offset(h(r)),i.top+=r.clientTop-r.scrollTop,i.left+=r.clientLeft-r.scrollLeft);var a=t[0].getBoundingClientRect();return{width:a.width||t.prop("offsetWidth"),height:a.height||t.prop("offsetHeight"),top:n.top-i.top,left:n.left-i.left}},offset:function(n){var i=n[0].getBoundingClientRect();return{width:i.width||n.prop("offsetWidth"),height:i.height||n.prop("offsetHeight"),top:i.top+(t.pageYOffset||e[0].documentElement.scrollTop),left:i.left+(t.pageXOffset||e[0].documentElement.scrollLeft)}}}}]),c.service("$ionicScrollDelegate",ionic.DelegateService(["resize","scrollTop","scrollBottom","scrollTo","scrollBy","zoomTo","zoomBy","getScrollPosition","anchorScroll","freezeScroll","freezeAllScrolls","getScrollView"])),c.service("$ionicSideMenuDelegate",ionic.DelegateService(["toggleLeft","toggleRight","getOpenRatio","isOpen","isOpenLeft","isOpenRight","canDragContent","edgeDragThreshold"])),c.service("$ionicSlideBoxDelegate",ionic.DelegateService(["update","slide","select","enableSlide","previous","next","stop","autoPlay","start","currentIndex","selected","slidesCount","count","loop"])),c.service("$ionicTabsDelegate",ionic.DelegateService(["select","selectedIndex"])),function(){var e=[];c.factory("$ionicTemplateCache",["$http","$templateCache","$timeout",function(t,n,i){function o(e){return"undefined"==typeof e?r():(f(e)&&(e=[e]),l(e,function(e){c.push(e)}),void(a&&r()))}function r(){var e;if(o._runCount++,a=!0,0!==c.length){for(var s=0;4>s&&(e=c.pop());)f(e)&&t.get(e,{cache:n}),s++;c.length&&i(r,1e3)}}var a,c=e;return o._runCount=0,o}]).config(["$stateProvider","$ionicConfigProvider",function(t,n){var i=t.state;t.state=function(o,r){if("object"==typeof r){var a=r.prefetchTemplate!==!1&&e.length<n.templates.maxPrefetch();if(a&&f(r.templateUrl)&&e.push(r.templateUrl),angular.isObject(r.views))for(var c in r.views)a=r.views[c].prefetchTemplate!==!1&&e.length<n.templates.maxPrefetch(),a&&f(r.views[c].templateUrl)&&e.push(r.views[c].templateUrl)}return i.call(t,o,r)}}]).run(["$ionicTemplateCache",function(e){e()}])}(),c.factory("$ionicTemplateLoader",["$compile","$controller","$http","$q","$rootScope","$templateCache",function(e,t,n,i,o,r){function a(e){return n.get(e,{cache:r}).then(function(e){return e.data&&e.data.trim()})}function c(n){n=s({template:"",templateUrl:"",scope:null,controller:null,locals:{},appendTo:null},n||{});var r=n.templateUrl?this.load(n.templateUrl):i.when(n.template);return r.then(function(i){var r,a=n.scope||o.$new(),c=h("<div>").html(i).contents();return n.controller&&(r=t(n.controller,s(n.locals,{$scope:a})),c.children().data("$ngControllerController",r)),n.appendTo&&h(n.appendTo).append(c),e(c)(a),{element:c,scope:a}})}return{load:a,compile:c}}]),c.factory("$ionicViewService",["$ionicHistory","$log",function(e,t){function n(e,n){t.warn("$ionicViewService"+e+" is deprecated, please use $ionicHistory"+n+" instead: http://ionicframework.com/docs/nightly/api/service/$ionicHistory/")}n("","");var i={getCurrentView:"currentView",getBackView:"backView",getForwardView:"forwardView",getCurrentStateName:"currentStateName",nextViewOptions:"nextViewOptions",clearHistory:"clearHistory"};return l(i,function(t,o){i[o]=function(){return n("."+o,"."+t),e[t].apply(this,arguments)}}),i}]),c.factory("$ionicViewSwitcher",["$timeout","$document","$q","$ionicClickBlock","$ionicConfig","$ionicNavBarDelegate",function(e,t,n,i,o,r){function a(e,t){return c(e)["abstract"]?c(e).name:t?t.stateId||t.viewId:ionic.Utils.nextUid()}function c(e){return e&&e.$$state&&e.$$state.self||{}}function d(e,t,n,i){var r=c(e),a=g||V(t,"view-transition")||r.viewTransition||o.views.transition()||"ios",l=o.navBar.transition();return n=m||V(t,"view-direction")||r.viewDirection||n||"none",s(f(i),{transition:a,navBarTransition:"view"===l?a:l,direction:n,shouldAnimate:"none"!==a&&"none"!==n})}function f(e){return e=e||{},{viewId:e.viewId,historyId:e.historyId,stateId:e.stateId,stateName:e.stateName,stateParams:e.stateParams}}function p(e,t){return arguments.length>1?void V(e,T,t):V(e,T)}function v(e){if(e&&e.length){var t=e.scope();t&&(t.$emit("$ionicView.unloaded",e.data(C)),t.$destroy()),e.remove()}}var g,m,$="webkitTransitionEnd transitionend",w="$noCache",b="$destroyEle",y="$eleId",S="$accessed",k="$fallbackTimer",C="$viewData",T="nav-view",B="active",I="cached",x="stage",A=0;ionic.transition=ionic.transition||{},ionic.transition.isActive=!1;var E,V=ionic.DomUtil.cachedAttr,P=[],D=1100,_={create:function(t,l,h,T,E,R){var L,N,z,M=++A,H={init:function(e,t){_.isTransitioning(!0),H.loadViewElements(e),H.render(e,function(){t&&t()})},loadViewElements:function(e){var n,i,o,r=t.getViewElements(),c=a(l,h),s=t.activeEleId();for(n=0,i=r.length;i>n&&(o=r.eq(n),o.data(y)===c?o.data(w)?(o.data(y,c+ionic.Utils.nextUid()),o.data(b,!0)):L=o:u(s)&&o.data(y)===s&&(N=o),!L||!N);n++);z=!!L,z||(L=e.ele||_.createViewEle(l),L.data(y,c)),R&&t.activeEleId(c),e.ele=null},render:function(e,n){if(z)ionic.Utils.reconnectScope(L.scope());else{p(L,x);var i=d(l,L,e.direction,h),r=o.transitions.views[i.transition]||o.transitions.views.none;r(L,null,i.direction,!0).run(0),L.data(C,{viewId:i.viewId,historyId:i.historyId,stateName:i.stateName,stateParams:i.stateParams}),(c(l).cache===!1||"false"===c(l).cache||"false"==L.attr("cache-view")||0===o.views.maxCache())&&L.data(w,!0);var a=t.appendViewElement(L,l);delete i.direction,delete i.transition,a.$emit("$ionicView.loaded",i)}L.data(S,Date.now()),n&&n()},transition:function(a,c,u){function v(){p(L,W.shouldAnimate?"entering":B),p(N,W.shouldAnimate?"leaving":I),W.run(1),r._instances.forEach(function(e){e.triggerTransitionStart(M)}),W.shouldAnimate||b()}function w(e){e.target===this&&b()}function b(){b.x||(b.x=!0,L.off($,w),e.cancel(L.data(k)),N&&e.cancel(N.data(k)),H.emit("after",O,q),C&&C.resolve(t),M===A&&(n.all(P).then(_.transitionEnd),H.cleanup(O)),r._instances.forEach(function(e){e.triggerTransitionEnd()}),g=m=h=T=L=N=null)}function y(e){e.target===this&&S()}function S(){p(L,I),p(N,B),L.off($,y),e.cancel(L.data(k)),_.transitionEnd([t])}var C,O=d(l,L,a,h),q=s(s({},O),f(T));O.transitionId=q.transitionId=M,O.fromCache=!!z,O.enableBack=!!c,O.renderStart=E,O.renderEnd=R,V(L.parent(),"nav-view-transition",O.transition),V(L.parent(),"nav-view-direction",O.direction),e.cancel(L.data(k));var U=o.transitions.views[O.transition]||o.transitions.views.none,W=U(L,N,O.direction,O.shouldAnimate&&u&&R);if(W.shouldAnimate&&(L.on($,w),L.data(k,e(b,D)),i.show(D)),E&&(H.emit("before",O,q),p(L,x),W.run(0)),R&&(C=n.defer(),P.push(C.promise)),E&&R)e(v,16);else{if(!R)return p(L,"entering"),p(N,"leaving"),{run:W.run,cancel:function(t){t?(L.on($,y),L.data(k,e(S,D)),i.show(D)):S(),W.shouldAnimate=t,W.run(0),W=null}};R&&v()}},emit:function(e,t,n){var i=L.scope();i&&(i.$emit("$ionicView."+e+"Enter",t),"after"==e&&i.$emit("$ionicView.enter",t)),N?(i=N.scope(),i&&(i.$emit("$ionicView."+e+"Leave",n),"after"==e&&i.$emit("$ionicView.leave",n))):i&&n&&n.viewId&&(i.$emit("$ionicNavView."+e+"Leave",n),"after"==e&&i.$emit("$ionicNavView.leave",n))},cleanup:function(e){N&&"back"==e.direction&&!o.views.forwardCache()&&v(N);var n,i,r,a=t.getViewElements(),c=a.length,s=c-1>o.views.maxCache(),l=Date.now();for(n=0;c>n;n++)i=a.eq(n),s&&i.data(S)<l?(l=i.data(S),r=a.eq(n)):i.data(b)&&p(i)!=B&&v(i);v(r),L.data(w)&&L.data(b,!0)},enteringEle:function(){return L},leavingEle:function(){return N}};return H},transitionEnd:function(e){l(e,function(e){e.transitionEnd()}),_.isTransitioning(!1),i.hide(),P=[]},nextTransition:function(e){g=e},nextDirection:function(e){m=e},isTransitioning:function(t){return arguments.length&&(ionic.transition.isActive=!!t,e.cancel(E),t&&(E=e(function(){_.isTransitioning(!1)},999))),ionic.transition.isActive},createViewEle:function(e){var n=t[0].createElement("div");return e&&e.$template&&(n.innerHTML=e.$template,1===n.children.length)?(n.children[0].classList.add("pane"),h(n.children[0])):(n.className="pane",h(n))},viewEleIsActive:function(e,t){p(e,t?B:I)},getTransitionData:d,navViewAttr:p,destroyViewEle:v};return _}]),c.config(["$provide",function(e){e.decorator("$compile",["$delegate",function(e){return e.$$addScopeInfo=function(e,t,n,i){var o=n?i?"$isolateScopeNoTemplate":"$isolateScope":"$scope";e.data(o,t)},e}])}]),c.config(["$provide",function(e){function t(e,t){return e.__hash=e.hash,e.hash=function(n){return u(n)&&t(function(){var e=document.querySelector(".scroll-content");e&&(e.scrollTop=0)},0,!1),e.__hash(n)},e}e.decorator("$location",["$delegate","$timeout",t])}]),c.controller("$ionicHeaderBar",["$scope","$element","$attrs","$q","$ionicConfig","$ionicHistory",function(e,t,n,i,o,r){function a(e){return C[e]||(C[e]=t[0].querySelector("."+e)),C[e]}var c="title",s="back-text",l="back-button",u="default-title",d="previous-title",f="hide",h=this,p="",v="",g=0,m=0,$="",w=!1,b=!0,y=!0,S=!1,k=0;h.beforeEnter=function(t){e.$broadcast("$ionicView.beforeEnter",t)},h.title=function(e){return arguments.length&&e!==p&&(a(c).innerHTML=e,p=e,k=0),p},h.enableBack=function(e,t){return arguments.length&&(w=e,t||h.updateBackButton()),w},h.showBack=function(e,t){return arguments.length&&(b=e,t||h.updateBackButton()),b},h.showNavBack=function(e){y=e,h.updateBackButton()},h.updateBackButton=function(){var e;(b&&y&&w)!==S&&(S=b&&y&&w,e=a(l),e&&e.classList[S?"remove":"add"](f)),w&&(e=e||a(l),e&&(h.backButtonIcon!==o.backButton.icon()&&(e=a(l+" .icon"),e&&(h.backButtonIcon=o.backButton.icon(),e.className="icon "+h.backButtonIcon)),h.backButtonText!==o.backButton.text()&&(e=a(l+" .back-text"),e&&(e.textContent=h.backButtonText=o.backButton.text()))))},h.titleTextWidth=function(){if(!k){var e=ionic.DomUtil.getTextBounds(a(c));k=Math.min(e&&e.width||30)}return k},h.titleWidth=function(){var e=h.titleTextWidth(),t=a(c).offsetWidth;return e>t&&(e=t+(g-m-5)),e},h.titleTextX=function(){return t[0].offsetWidth/2-h.titleWidth()/2},h.titleLeftRight=function(){return g-m},h.backButtonTextLeft=function(){for(var e=0,t=a(s);t;)e+=t.offsetLeft,t=t.parentElement;return e},h.resetBackButton=function(e){if(o.backButton.previousTitleText()){var t=a(d);if(t){t.classList.remove(f);var n=e&&r.getViewById(e.viewId),i=r.backTitle(n);i!==v&&(v=t.innerHTML=i)}var c=a(u);c&&c.classList.remove(f)}},h.align=function(e){var i=a(c);e=e||n.alignTitle||o.navBar.alignTitle();var r=h.calcWidths(e,!1);if(b&&v&&o.backButton.previousTitleText()){var s=h.calcWidths(e,!0),l=t[0].offsetWidth-s.titleLeft-s.titleRight;h.titleTextWidth()<=l&&(r=s)}return h.updatePositions(i,r.titleLeft,r.titleRight,r.buttonsLeft,r.buttonsRight,r.css,r.showPrevTitle)},h.calcWidths=function(e,n){var i,o,r,h,p,v,g,m,$,w=a(c),y=a(l),S=t[0].childNodes,k=0,C=0,T=0,B=0,I="",x=0;for(i=0;i<S.length;i++){if(p=S[i],g=0,1==p.nodeType){if(p===w){$=!0;continue}if(p.classList.contains(f))continue;if(b&&p===y){for(o=0;o<p.childNodes.length;o++)if(h=p.childNodes[o],1==h.nodeType)if(h.classList.contains(s))for(r=0;r<h.children.length;r++)if(v=h.children[r],n){if(v.classList.contains(u))continue;x+=v.offsetWidth}else{if(v.classList.contains(d))continue;x+=v.offsetWidth}else x+=h.offsetWidth;else 3==h.nodeType&&h.nodeValue.trim()&&(m=ionic.DomUtil.getTextBounds(h),x+=m&&m.width||0);g=x||p.offsetWidth}else g=p.offsetWidth}else 3==p.nodeType&&p.nodeValue.trim()&&(m=ionic.DomUtil.getTextBounds(p),g=m&&m.width||0);$?C+=g:k+=g}if("left"==e)I="title-left",k&&(T=k+15),C&&(B=C+15);else if("right"==e)I="title-right",k&&(T=k+15),C&&(B=C+15);else{var A=Math.max(k,C)+10;A>10&&(T=B=A)}return{backButtonWidth:x,buttonsLeft:k,buttonsRight:C,titleLeft:T,titleRight:B,showPrevTitle:n,css:I}},h.updatePositions=function(e,n,r,c,s,l,p){var v=i.defer();if(e&&(n!==g&&(e.style.left=n?n+"px":"",g=n),r!==m&&(e.style.right=r?r+"px":"",m=r),l!==$&&(l&&e.classList.add(l),$&&e.classList.remove($),$=l)),o.backButton.previousTitleText()){var w=a(d),b=a(u);w&&w.classList[p?"remove":"add"](f),b&&b.classList[p?"add":"remove"](f)}return ionic.requestAnimationFrame(function(){if(e&&e.offsetWidth+10<e.scrollWidth){var n=s+5,i=t[0].offsetWidth-g-h.titleTextWidth()-20;r=n>i?n:i,r!==m&&(e.style.right=r+"px",m=r)}v.resolve()}),v.promise},h.setCss=function(e,t){ionic.DomUtil.cachedStyles(a(e),t)};var C={};e.$on("$destroy",function(){for(var e in C)C[e]=null})}]),c.controller("$ionInfiniteScroll",["$scope","$attrs","$element","$timeout",function(e,t,n,i){function o(){ionic.requestAnimationFrame(function(){n[0].classList.add("active")}),s.isLoading=!0,e.$parent&&e.$parent.$apply(t.onInfinite||"")}function r(){ionic.requestAnimationFrame(function(){n[0].classList.remove("active")}),i(function(){s.jsScrolling&&s.scrollView.resize(),(s.jsScrolling&&s.scrollView.__container&&s.scrollView.__container.offsetHeight>0||!s.jsScrolling)&&s.checkBounds()},30,!1),s.isLoading=!1}function a(){if(!s.isLoading){var e={};if(s.jsScrolling){e=s.getJSMaxScroll();var t=s.scrollView.getValues();(-1!==e.left&&t.left>=e.left||-1!==e.top&&t.top>=e.top)&&o()}else e=s.getNativeMaxScroll(),(-1!==e.left&&s.scrollEl.scrollLeft>=e.left-s.scrollEl.clientWidth||-1!==e.top&&s.scrollEl.scrollTop>=e.top-s.scrollEl.clientHeight)&&o()}}function c(e){var n=(t.distance||"2.5%").trim(),i=-1!==n.indexOf("%");return i?e*(1-parseFloat(n)/100):e-parseFloat(n)}var s=this;s.isLoading=!1,e.icon=function(){return u(t.icon)?t.icon:"ion-load-d"},e.spinner=function(){return u(t.spinner)?t.spinner:""},e.$on("scroll.infiniteScrollComplete",function(){r()}),e.$on("$destroy",function(){s.scrollCtrl&&s.scrollCtrl.$element&&s.scrollCtrl.$element.off("scroll",s.checkBounds),s.scrollEl&&s.scrollEl.removeEventListener&&s.scrollEl.removeEventListener("scroll",s.checkBounds)}),s.checkBounds=ionic.Utils.throttle(a,300),s.getJSMaxScroll=function(){var e=s.scrollView.getScrollMax();return{left:s.scrollView.options.scrollingX?c(e.left):-1,top:s.scrollView.options.scrollingY?c(e.top):-1}},s.getNativeMaxScroll=function(){var e={left:s.scrollEl.scrollWidth,top:s.scrollEl.scrollHeight},t=window.getComputedStyle(s.scrollEl)||{};return{left:"scroll"===t.overflowX||"auto"===t.overflowX||"scroll"===s.scrollEl.style["overflow-x"]?c(e.left):-1,top:"scroll"===t.overflowY||"auto"===t.overflowY||"scroll"===s.scrollEl.style["overflow-y"]?c(e.top):-1}},s.__finishInfiniteScroll=r}]),c.service("$ionicListDelegate",ionic.DelegateService(["showReorder","showDelete","canSwipeItems","closeOptionButtons"])).controller("$ionicList",["$scope","$attrs","$ionicListDelegate","$ionicHistory",function(e,t,n,i){var o=this,r=!0,a=!1,c=!1,s=n._registerInstance(o,t.delegateHandle,function(){return i.isActiveScope(e)});e.$on("$destroy",s),o.showReorder=function(e){return arguments.length&&(a=!!e),a},o.showDelete=function(e){return arguments.length&&(c=!!e),c},o.canSwipeItems=function(e){return arguments.length&&(r=!!e),r},o.closeOptionButtons=function(){o.listView&&o.listView.clearDragEffects()}}]),c.controller("$ionicNavBar",["$scope","$element","$attrs","$compile","$timeout","$ionicNavBarDelegate","$ionicConfig","$ionicHistory",function(e,t,n,i,o,r,a,c){function s(e,t){var n=console.warn||console.log;n&&n.call(console,"navBarController."+e+" is deprecated, please use "+t+" instead")}function d(e){return x[e]?h(x[e]):void 0}function f(){for(var e=0;e<I.length;e++)if(I[e].isActive)return I[e]}function p(){for(var e=0;e<I.length;e++)if(!I[e].isActive)return I[e]}function v(e,t){e&&ionic.DomUtil.cachedAttr(e.containerEle(),"nav-bar",t)}function g(e){ionic.DomUtil.cachedAttr(t,"nav-swipe",e)}var m,$,w,b="hide",y="$ionNavBarController",S="primaryButtons",k="secondaryButtons",C="backButton",T="primaryButtons secondaryButtons leftButtons rightButtons title".split(" "),B=this,I=[],x={},A=!0;t.parent().data(y,B);var E=n.delegateHandle||"navBar"+ionic.Utils.nextUid(),V=r._registerInstance(B,E);B.init=function(){t.addClass("nav-bar-container"),ionic.DomUtil.cachedAttr(t,"nav-bar-transition",a.views.transition()),B.createHeaderBar(!1),B.createHeaderBar(!0),e.$emit("ionNavBar.init",E)},B.createHeaderBar=function(o){function r(e,t){e&&("title"===t?g.append(e):"rightButtons"==t||t==k&&"left"!=a.navBar.positionSecondaryButtons()||t==S&&"right"==a.navBar.positionPrimaryButtons()?(v||(v=h('<div class="buttons buttons-right">'),f.append(v)),t==k?v.append(e):v.prepend(e)):(p||(p=h('<div class="buttons buttons-left">'),m[C]?m[C].after(p):f.prepend(p)),t==k?p.append(e):p.prepend(e)))}var c=h('<div class="nav-bar-block">');ionic.DomUtil.cachedAttr(c,"nav-bar",o?"active":"cached");var s=n.alignTitle||a.navBar.alignTitle(),f=h("<ion-header-bar>").addClass(n["class"]).attr("align-title",s);u(n.noTapScroll)&&f.attr("no-tap-scroll",n.noTapScroll);var p,v,g=h('<div class="title title-'+s+'">'),m={},$={};m[C]=d(C),m[C]&&f.append(m[C]),f.append(g),l(T,function(e){m[e]=d(e),r(m[e],e)});for(var w=0;w<f[0].children.length;w++)f[0].children[w].classList.add("header-item");c.append(f),t.append(i(c)(e.$new()));var y=f.data("$ionHeaderBarController");y.backButtonIcon=a.backButton.icon(),y.backButtonText=a.backButton.text();var B={isActive:o,title:function(e){y.title(e)},setItem:function(e,t){B.removeItem(t),e?("title"===t&&B.title(""),r(e,t),m[t]&&m[t].addClass(b),$[t]=e):m[t]&&m[t].removeClass(b)},removeItem:function(e){$[e]&&($[e].scope().$destroy(),$[e].remove(),$[e]=null)},containerEle:function(){return c},headerBarEle:function(){return f},afterLeave:function(){l(T,function(e){B.removeItem(e)}),y.resetBackButton()},controller:function(){return y},destroy:function(){l(T,function(e){B.removeItem(e)}),c.scope().$destroy();for(var e in m)m[e]&&(m[e].removeData(),m[e]=null);p&&p.removeData(),v&&v.removeData(),g.removeData(),f.removeData(),c.remove(),c=f=g=p=v=null}};return I.push(B),B},B.navElement=function(e,t){return u(t)&&(x[e]=t),x[e]},B.update=function(e){var t=!e.hasHeaderBar&&e.showNavBar;e.transition=a.views.transition(),t||(e.direction="none"),B.enable(t);var n=B.isInitialized?p():f(),i=B.isInitialized?f():null,o=n.controller();o.enableBack(e.enableBack,!0),o.showBack(e.showBack,!0),o.updateBackButton(),B.title(e.title,n),B.showBar(t),e.navBarItems&&l(T,function(t){n.setItem(e.navBarItems[t],t)}),B.transition(n,i,e),B.isInitialized=!0,g("")},B.transition=function(n,i,r){function c(){for(var e=0;e<I.length;e++)I[e].isActive=!1;n.isActive=!0,v(n,"active"),v(i,"cached"),B.activeTransition=d=$=null}var s=n.controller(),l=a.transitions.navBar[r.navBarTransition]||a.transitions.navBar.none,u=r.transitionId;s.beforeEnter(r);var d=l(n,i,r.direction,r.shouldAnimate&&B.isInitialized);ionic.DomUtil.cachedAttr(t,"nav-bar-transition",r.navBarTransition),ionic.DomUtil.cachedAttr(t,"nav-bar-direction",r.direction),d.shouldAnimate&&r.renderEnd?v(n,"stage"):(v(n,"entering"),v(i,"leaving")),s.resetBackButton(r),d.run(0),B.activeTransition={run:function(e){d.shouldAnimate=!1,d.direction="back",d.run(e)},cancel:function(t,o,r){g(o),v(i,"active"),v(n,"cached"),d.shouldAnimate=t,d.run(0),B.activeTransition=d=null;var a;r.showBar!==B.showBar()&&B.showBar(r.showBar),r.showBackButton!==B.showBackButton()&&B.showBackButton(r.showBackButton),a&&e.$apply()},complete:function(e,t){g(t),d.shouldAnimate=e,d.run(1),$=c}},o(s.align,16),(m=function(){w===u&&(v(n,"entering"),v(i,"leaving"),d.run(1),$=function(){w!=u&&d.shouldAnimate||c()},m=null)})()},B.triggerTransitionStart=function(e){w=e,m&&m()},B.triggerTransitionEnd=function(){$&&$()},B.showBar=function(t){return arguments.length&&(B.visibleBar(t),e.$parent.$hasHeader=!!t),!!e.$parent.$hasHeader},B.visibleBar=function(e){e&&!A?(t.removeClass(b),B.align()):!e&&A&&t.addClass(b),A=e},B.enable=function(e){B.visibleBar(e);for(var t=0;t<r._instances.length;t++)r._instances[t]!==B&&r._instances[t].visibleBar(!1)},B.showBackButton=function(t){if(arguments.length){for(var n=0;n<I.length;n++)I[n].controller().showNavBack(!!t);e.$isBackButtonShown=!!t}return e.$isBackButtonShown},B.showActiveBackButton=function(e){var t=f();return t?arguments.length?t.controller().showBack(e):t.controller().showBack():void 0},B.title=function(t,n){return u(t)&&(t=t||"",n=n||f(),n&&n.title(t),e.$title=t,c.currentTitle(t)),e.$title},B.align=function(e,t){t=t||f(),t&&t.controller().align(e)},B.hasTabsTop=function(e){t[e?"addClass":"removeClass"]("nav-bar-tabs-top")},B.hasBarSubheader=function(e){t[e?"addClass":"removeClass"]("nav-bar-has-subheader")},B.changeTitle=function(e){s("changeTitle(val)","title(val)"),B.title(e)},B.setTitle=function(e){s("setTitle(val)","title(val)"),B.title(e);

},B.getTitle=function(){return s("getTitle()","title()"),B.title()},B.back=function(){s("back()","$ionicHistory.goBack()"),c.goBack()},B.getPreviousTitle=function(){s("getPreviousTitle()","$ionicHistory.backTitle()"),c.goBack()},e.$on("$destroy",function(){e.$parent.$hasHeader=!1,t.parent().removeData(y);for(var n=0;n<I.length;n++)I[n].destroy();t.remove(),t=I=null,V()})}]),c.controller("$ionicNavView",["$scope","$element","$attrs","$compile","$controller","$ionicNavBarDelegate","$ionicNavViewDelegate","$ionicHistory","$ionicViewSwitcher","$ionicConfig","$ionicScrollDelegate",function(e,t,n,i,o,r,a,c,l,u,d){function f(e,n){for(var i,o,r=t.children(),a=0,c=r.length;c>a;a++)if(i=r.eq(a),A(i)==T){o=i.scope(),o&&o.$emit(e.name.replace("Tabs","View"),n);break}}function h(e){ionic.DomUtil.cachedAttr(t,"nav-swipe",e)}function p(e,t){var n=g();n&&n.hasTabsTop(t)}function v(e,t){var n=g();n&&n.hasBarSubheader(t)}function g(){if($)for(var e=0;e<r._instances.length;e++)if(r._instances[e].$$delegateHandle==$)return r._instances[e];return t.inheritedData("$ionNavBarController")}var m,$,w,b,y,S="$eleId",k="$destroyEle",C="$noCache",T="active",B="cached",I=this,x=!1,A=l.navViewAttr;I.scope=e,I.element=t,I.init=function(){var i=n.name||"",o=t.parent().inheritedData("$uiView"),r=o&&o.state?o.state.name:"";i.indexOf("@")<0&&(i=i+"@"+r);var c={name:i,state:null};t.data("$uiView",c);var s=a._registerInstance(I,n.delegateHandle);return e.$on("$destroy",function(){s(),I.isSwipeFreeze&&d.freezeAllScrolls(!1)}),e.$on("$ionicHistory.deselect",I.cacheCleanup),e.$on("$ionicTabs.top",p),e.$on("$ionicSubheader",v),e.$on("$ionicTabs.beforeLeave",f),e.$on("$ionicTabs.afterLeave",f),e.$on("$ionicTabs.leave",f),ionic.Platform.ready(function(){ionic.Platform.isWebView()&&u.views.swipeBackEnabled()&&I.initSwipeBack()}),c},I.register=function(t){var n=s({},c.currentView()),i=c.register(e,t);I.update(i);var o=c.getViewById(i.viewId)||{},r=b!==i.viewId;I.render(i,t,o,n,r,!0)},I.update=function(e){x=!0,m=e.direction;var n=t.parent().inheritedData("$ionNavViewController");n&&(n.isPrimary(!1),("enter"===m||"exit"===m)&&(n.direction(m),"enter"===m&&(m="none")))},I.render=function(e,t,n,i,o,r){var a=l.create(I,t,n,i,o,r);a.init(e,function(){a.transition(I.direction(),e.enableBack,!y),b=y=null})},I.beforeEnter=function(e){if(x){$=e.navBarDelegate;var t=g();t&&t.update(e),h("")}},I.activeEleId=function(e){return arguments.length&&(w=e),w},I.transitionEnd=function(){var e,n,i,o=t.children();for(e=0,n=o.length;n>e;e++)i=o.eq(e),i.data(S)===w?A(i,T):("leaving"===A(i)||A(i)===T||A(i)===B)&&(i.data(k)||i.data(C)?l.destroyViewEle(i):(A(i,B),ionic.Utils.disconnectScope(i.scope())));h(""),I.isSwipeFreeze&&d.freezeAllScrolls(!1)},I.cacheCleanup=function(){for(var e=t.children(),n=0,i=e.length;i>n;n++)e.eq(n).data(k)&&l.destroyViewEle(e.eq(n))},I.clearCache=function(e){var n,i,o,r,a,c,s=t.children();for(o=0,r=s.length;r>o;o++)if(n=s.eq(o),e)for(c=n.data(S),a=0;a<e.length;a++)c===e[a]&&l.destroyViewEle(n);else A(n)==B?l.destroyViewEle(n):A(n)==T&&(i=n.scope(),i&&i.$broadcast("$ionicView.clearCache"))},I.getViewElements=function(){return t.children()},I.appendViewElement=function(n,r){var a=i(n);t.append(n);var c=e.$new();if(r&&r.$$controller){r.$scope=c;var s=o(r.$$controller,r);t.children().data("$ngControllerController",s)}return a(c),c},I.title=function(e){var t=g();t&&t.title(e)},I.enableBackButton=function(e){var t=g();t&&t.enableBackButton(e)},I.showBackButton=function(e){var t=g();return t?arguments.length?t.showActiveBackButton(e):t.showActiveBackButton():!0},I.showBar=function(e){var t=g();return t?arguments.length?t.showBar(e):t.showBar():!0},I.isPrimary=function(e){return arguments.length&&(x=e),x},I.direction=function(e){return arguments.length&&(m=e),m},I.initSwipeBack=function(){function n(e){if(x&&(S=r(e),!(S>C))){p=c.backView();var n=c.currentView();if(p&&p.historyId===n.historyId&&n.canSwipeBack!==!1){w||(w=window.innerWidth),I.isSwipeFreeze=d.freezeAllScrolls(!0);var a={direction:"back"};k=[],T={showBar:I.showBar(),showBackButton:I.showBackButton()};var u=l.create(I,a,p,n,!0,!1);u.loadViewElements(a),u.render(a),s=u.transition("back",c.enabledBack(p),!0),f=g(),m=ionic.onGesture("drag",i,t[0]),$=ionic.onGesture("release",o,t[0])}}}function i(e){if(x&&s){var t=r(e);if(k.push({t:Date.now(),x:t}),t>=w-15)o(e);else{var n=Math.min(Math.max(a(t),0),1);s.run(n),f&&f.activeTransition&&f.activeTransition.run(n)}}}function o(e){if(x&&s&&k&&k.length>1){for(var t=Date.now(),n=r(e),c=k[k.length-1],l=k.length-2;l>=0&&!(t-c.t>200);l--)c=k[l];var u=n>=k[k.length-2].x,v=a(n),g=Math.abs(c.x-n)/(t-c.t);if(b=p.viewId,y=.03>v||v>.97,u&&(v>.5||g>.1)){var S=g>.5||.05>g||n>w-45?"fast":"slow";h(y?"":S),p.go(),f&&f.activeTransition&&f.activeTransition.complete(!y,S)}else h(y?"":"fast"),b=null,s.cancel(!y),f&&f.activeTransition&&f.activeTransition.cancel(!y,"fast",T),y=null}ionic.offGesture(m,"drag",i),ionic.offGesture($,"release",o),w=s=k=null,I.isSwipeFreeze=d.freezeAllScrolls(!1)}function r(e){return ionic.tap.pointerCoord(e.gesture.srcEvent).x}function a(e){return(e-S)/w}var s,f,p,v,m,$,w,S,k,C=u.views.swipeBackHitWidth(),T={};v=ionic.onGesture("dragstart",n,t[0]),e.$on("$destroy",function(){ionic.offGesture(v,"dragstart",n),ionic.offGesture(m,"drag",i),ionic.offGesture($,"release",o),I.element=s=f=null})}}]),c.controller("$ionicRefresher",["$scope","$attrs","$element","$ionicBind","$timeout",function(e,t,n,i,o){function r(){(P||k)&&(E=null,k?(k=!1,T=0,B>I?(g(),f(I,A)):(f(0,A,v),C=!1)):(T=0,C=!1,d(!1)))}function a(e){if(P&&!(e.touches.length>1)){if(null===E&&(E=parseInt(e.touches[0].screenY,10)),ionic.Platform.isAndroid()&&4.4===ionic.Platform.version()&&0===b.scrollTop&&(k=!0,e.preventDefault()),V=parseInt(e.touches[0].screenY,10)-E,0>=V-T||0!==b.scrollTop)return C&&(C=!1,d(!1)),k&&l(b,-1*parseInt(V-T,10)),void(0!==B&&s(0));V>0&&0===b.scrollTop&&!C&&(T=V),e.preventDefault(),C||(C=!0,d(!0)),k=!0,s(parseInt((V-T)/3,10)),!x&&B>I?(x=!0,ionic.requestAnimationFrame(p)):x&&I>B&&(x=!1,ionic.requestAnimationFrame(v))}}function c(e){P=0===e.target.scrollTop||k}function s(e){y.style[ionic.CSS.TRANSFORM]="translateY("+e+"px)",B=e}function l(e,t){e.scrollTop=t;var n=document.createEvent("UIEvents");n.initUIEvent("scroll",!0,!0,window,1),e.dispatchEvent(n)}function d(e){ionic.requestAnimationFrame(e?function(){y.classList.add("overscroll"),m()}:function(){y.classList.remove("overscroll"),$(),v()})}function f(e,t,n){function i(e){return--e*e*e+1}function o(){var c=Date.now(),l=Math.min(1,(c-r)/t),u=i(l);s(parseInt(u*(e-a)+a,10)),1>l?ionic.requestAnimationFrame(o):(5>e&&e>-5&&(C=!1,d(!1)),n&&n())}var r=Date.now(),a=B;return a===e?void n():void ionic.requestAnimationFrame(o)}function h(){ionic.off("touchmove",a,y),ionic.off("touchend",r,y),ionic.off("scroll",c,b),b=null,y=null}function p(){n[0].classList.add("active"),e.$onPulling()}function v(){o(function(){n.removeClass("active refreshing refreshing-tail"),x&&(x=!1)},150)}function g(){n[0].classList.add("refreshing"),e.$onRefresh()}function m(){n[0].classList.remove("invisible")}function $(){n[0].classList.add("invisible")}function w(){n[0].classList.add("refreshing-tail")}var b,y,S=this,k=!1,C=!1,T=0,B=0,I=60,x=!1,A=500,E=null,V=null,P=!0;u(t.pullingIcon)||t.$set("pullingIcon","ion-android-arrow-down"),e.showSpinner=!u(t.refreshingIcon)&&"none"!=t.spinner,e.showIcon=u(t.refreshingIcon),i(e,t,{pullingIcon:"@",pullingText:"@",refreshingIcon:"@",refreshingText:"@",spinner:"@",disablePullingRotation:"@",$onRefresh:"&onRefresh",$onPulling:"&onPulling"}),e.$on("scroll.refreshComplete",function(){o(function(){ionic.requestAnimationFrame(w),f(0,A,v),o(function(){C&&(C=!1,d(!1))},A)},A)}),S.init=function(){if(b=n.parent().parent()[0],y=n.parent()[0],!(b&&b.classList.contains("ionic-scroll")&&y&&y.classList.contains("scroll")))throw new Error("Refresher must be immediate child of ion-content or ion-scroll");ionic.on("touchmove",a,y),ionic.on("touchend",r,y),ionic.on("scroll",c,b),e.$on("$destroy",h)},S.getRefresherDomMethods=function(){return{activate:p,deactivate:v,start:g,show:m,hide:$,tail:w}},S.__handleTouchmove=a,S.__getScrollChild=function(){return y},S.__getScrollParent=function(){return b}}]),c.controller("$ionicScroll",["$scope","scrollViewOptions","$timeout","$window","$location","$document","$ionicScrollDelegate","$ionicHistory",function(e,t,n,i,o,r,a,c){var s=this;s.__timeout=n,s._scrollViewOptions=t,s.isNative=function(){return!!t.nativeScrolling};var l,d=s.element=t.el,f=s.$element=h(d);l=s.isNative()?s.scrollView=new ionic.views.ScrollNative(t):s.scrollView=new ionic.views.Scroll(t),(f.parent().length?f.parent():f).data("$$ionicScrollController",s);var p=a._registerInstance(s,t.delegateHandle,function(){return c.isActiveScope(e)});u(t.bouncing)||ionic.Platform.ready(function(){l.options&&(l.options.bouncing=!0,ionic.Platform.isAndroid()&&(l.options.bouncing=!1,l.options.deceleration=.95))});var v=angular.bind(l,l.resize);angular.element(i).on("resize",v);var g=function(t){var n=(t.originalEvent||t).detail||{};e.$onScroll&&e.$onScroll({event:t,scrollTop:n.scrollTop||0,scrollLeft:n.scrollLeft||0})};f.on("scroll",g),e.$on("$destroy",function(){p(),l&&l.__cleanup&&l.__cleanup(),angular.element(i).off("resize",v),f.off("scroll",g),l=s.scrollView=t=s._scrollViewOptions=t.el=s._scrollViewOptions.el=f=s.$element=d=null}),n(function(){l&&l.run&&l.run()}),s.getScrollView=function(){return l},s.getScrollPosition=function(){return l.getValues()},s.resize=function(){return n(v,0,!1).then(function(){f&&f.triggerHandler("scroll-resize")})},s.scrollTop=function(e){s.resize().then(function(){l.scrollTo(0,0,!!e)})},s.scrollBottom=function(e){s.resize().then(function(){var t=l.getScrollMax();l.scrollTo(t.left,t.top,!!e)})},s.scrollTo=function(e,t,n){s.resize().then(function(){l.scrollTo(e,t,!!n)})},s.zoomTo=function(e,t,n,i){s.resize().then(function(){l.zoomTo(e,!!t,n,i)})},s.zoomBy=function(e,t,n,i){s.resize().then(function(){l.zoomBy(e,!!t,n,i)})},s.scrollBy=function(e,t,n){s.resize().then(function(){l.scrollBy(e,t,!!n)})},s.anchorScroll=function(e){s.resize().then(function(){var t=o.hash(),n=t&&r[0].getElementById(t);if(!t||!n)return void l.scrollTo(0,0,!!e);var i=n,a=0,c=0;do null!==i&&(a+=i.offsetLeft),null!==i&&(c+=i.offsetTop),i=i.offsetParent;while(i.attributes!=s.element.attributes&&i.offsetParent);l.scrollTo(a,c,!!e)})},s.freezeScroll=l.freeze,s.freezeAllScrolls=function(e){for(var t=0;t<a._instances.length;t++)a._instances[t].freezeScroll(e)},s._setRefresher=function(e,t,n){s.refresher=t;var i=s.refresher.clientHeight||60;l.activatePullToRefresh(i,n)}}]),c.controller("$ionicSideMenus",["$scope","$attrs","$ionicSideMenuDelegate","$ionicPlatform","$ionicBody","$ionicHistory","$ionicScrollDelegate","IONIC_BACK_PRIORITY",function(e,t,n,i,o,r,a,c){function s(e){e&&!$.isScrollFreeze?a.freezeAllScrolls(e):!e&&$.isScrollFreeze&&a.freezeAllScrolls(!1),$.isScrollFreeze=e}var l,u,f,h,v,g,m,$=this,w=!0;$.$scope=e,$.initialize=function(e){$.left=e.left,$.right=e.right,$.setContent(e.content),$.dragThresholdX=e.dragThresholdX||10,r.registerHistory($.$scope)},$.setContent=function(e){e&&($.content=e,$.content.onDrag=function(e){$._handleDrag(e)},$.content.endDrag=function(e){$._endDrag(e)})},$.isOpenLeft=function(){return $.getOpenAmount()>0},$.isOpenRight=function(){return $.getOpenAmount()<0},$.toggleLeft=function(e){if(!m&&$.left.isEnabled){var t=$.getOpenAmount();0===arguments.length&&(e=0>=t),$.content.enableAnimation(),$.openPercentage(e?100:0)}},$.toggleRight=function(e){if(!m&&$.right.isEnabled){var t=$.getOpenAmount();0===arguments.length&&(e=t>=0),$.content.enableAnimation(),$.openPercentage(e?-100:0)}},$.toggle=function(e){"right"==e?$.toggleRight():$.toggleLeft()},$.close=function(){$.openPercentage(0)},$.getOpenAmount=function(){return $.content&&$.content.getTranslateX()||0},$.getOpenRatio=function(){var e=$.getOpenAmount();return e>=0?e/$.left.width:e/$.right.width},$.isOpen=function(){return 0!==$.getOpenAmount()},$.getOpenPercentage=function(){return 100*$.getOpenRatio()},$.openPercentage=function(e){var t=e/100;$.left&&e>=0?$.openAmount($.left.width*t):$.right&&0>e&&$.openAmount($.right.width*t),o.enableClass(0!==e,"menu-open"),s(!1)},$.openAmount=function(e){var t=$.left&&$.left.width||0,n=$.right&&$.right.width||0;return($.left&&$.left.isEnabled||!(e>0))&&($.right&&$.right.isEnabled||!(0>e))?u&&e>t?void $.content.setTranslateX(t):l&&-n>e?void $.content.setTranslateX(-n):($.content.setTranslateX(e),void(e>=0?(u=!0,l=!1,e>0&&($.right&&$.right.pushDown&&$.right.pushDown(),$.left&&$.left.bringUp&&$.left.bringUp())):(l=!0,u=!1,$.right&&$.right.bringUp&&$.right.bringUp(),$.left&&$.left.pushDown&&$.left.pushDown()))):void $.content.setTranslateX(0)},$.snapToRest=function(e){$.content.enableAnimation(),f=!1;var t=$.getOpenRatio();if(0===t)return void $.openPercentage(0);var n=.3,i=e.gesture.velocityX,o=e.gesture.direction;$.openPercentage(t>0&&.5>t&&"right"==o&&n>i?0:t>.5&&"left"==o&&n>i?100:0>t&&t>-.5&&"left"==o&&n>i?0:.5>t&&"right"==o&&n>i?-100:"right"==o&&t>=0&&(t>=.5||i>n)?100:"left"==o&&0>=t&&(-.5>=t||i>n)?-100:0)},$.enableMenuWithBackViews=function(e){return arguments.length&&(w=!!e),w},$.isAsideExposed=function(){return!!m},$.exposeAside=function(e){($.left&&$.left.isEnabled||$.right&&$.right.isEnabled)&&($.close(),m=e,$.left&&$.left.isEnabled?$.content.setMarginLeft(m?$.left.width:0):$.right&&$.right.isEnabled&&$.content.setMarginRight(m?$.right.width:0),$.$scope.$emit("$ionicExposeAside",m))},$.activeAsideResizing=function(e){o.enableClass(e,"aside-resizing")},$._endDrag=function(e){s(!1),m||(f&&$.snapToRest(e),h=null,v=null,g=null)},$._handleDrag=function(t){!m&&e.dragContent&&(h?v=t.gesture.touches[0].pageX:(h=t.gesture.touches[0].pageX,v=h),!f&&Math.abs(v-h)>$.dragThresholdX&&(h=v,f=!0,$.content.disableAnimation(),g=$.getOpenAmount()),f&&($.openAmount(g+(v-h)),s(!0)))},$.canDragContent=function(t){return arguments.length&&(e.dragContent=!!t),e.dragContent},$.edgeThreshold=25,$.edgeThresholdEnabled=!1,$.edgeDragThreshold=function(e){return arguments.length&&(d(e)&&e>0?($.edgeThreshold=e,$.edgeThresholdEnabled=!0):$.edgeThresholdEnabled=!!e),$.edgeThresholdEnabled},$.isDraggableTarget=function(t){var n=$.edgeThresholdEnabled&&!$.isOpen(),i=t.gesture.startEvent&&t.gesture.startEvent.center&&t.gesture.startEvent.center.pageX,o=!n||i<=$.edgeThreshold||i>=$.content.element.offsetWidth-$.edgeThreshold,a=r.backView(),c=w?!0:!a;if(!c){var s=r.currentView()||{};return a.historyId!==s.historyId}return(e.dragContent||$.isOpen())&&o&&!t.gesture.srcEvent.defaultPrevented&&c&&!t.target.tagName.match(/input|textarea|select|object|embed/i)&&!t.target.isContentEditable&&!(t.target.dataset?t.target.dataset.preventScroll:"true"==t.target.getAttribute("data-prevent-scroll"))},e.sideMenuContentTranslateX=0;var b=p,y=angular.bind($,$.close);e.$watch(function(){return 0!==$.getOpenAmount()},function(e){b(),e&&(b=i.registerBackButtonAction(y,c.sideMenu))});var S=n._registerInstance($,t.delegateHandle,function(){return r.isActiveScope(e)});e.$on("$destroy",function(){S(),b(),$.$scope=null,$.content&&($.content.element=null,$.content=null),s(!1)}),$.initialize({left:{width:275},right:{width:275}})}]),function(e){function t(e,i,o,r){var a,c,s,l=document.createElement(f[e]||e);for(a in i)if(angular.isArray(i[a]))for(c=0;c<i[a].length;c++)if(i[a][c].fn)for(s=0;s<i[a][c].t;s++)t(a,i[a][c].fn(s,r),l,r);else t(a,i[a][c],l,r);else n(l,a,i[a]);o.appendChild(l)}function n(e,t,n){e.setAttribute(f[t]||t,n)}function i(e,t){var n=e.split(";"),i=n.slice(t),o=n.slice(0,n.length-i.length);return n=i.concat(o).reverse(),n.join(";")+";"+n[0]}function o(e,t){return e/=t/2,1>e?.5*e*e*e:(e-=2,.5*(e*e*e+2))}var r="translate(32,32)",a="stroke-opacity",s="round",l="indefinite",u="750ms",d="none",f={a:"animate",an:"attributeName",at:"animateTransform",c:"circle",da:"stroke-dasharray",os:"stroke-dashoffset",f:"fill",lc:"stroke-linecap",rc:"repeatCount",sw:"stroke-width",t:"transform",v:"values"},h={v:"0,32,32;360,32,32",an:"transform",type:"rotate",rc:l,dur:u},p={sw:4,lc:s,line:[{fn:function(e,t){return{y1:"ios"==t?17:12,y2:"ios"==t?29:20,t:r+" rotate("+(30*e+(6>e?180:-180))+")",a:[{fn:function(){return{an:a,dur:u,v:i("0;.1;.15;.25;.35;.45;.55;.65;.7;.85;1",e),rc:l}},t:1}]}},t:12}]},v={android:{c:[{sw:6,da:128,os:82,r:26,cx:32,cy:32,f:d}]},ios:p,"ios-small":p,bubbles:{sw:0,c:[{fn:function(e){return{cx:24*Math.cos(2*Math.PI*e/8),cy:24*Math.sin(2*Math.PI*e/8),t:r,a:[{fn:function(){return{an:"r",dur:u,v:i("1;2;3;4;5;6;7;8",e),rc:l}},t:1}]}},t:8}]},circles:{c:[{fn:function(e){return{r:5,cx:24*Math.cos(2*Math.PI*e/8),cy:24*Math.sin(2*Math.PI*e/8),t:r,sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:u,v:i(".3;.3;.3;.4;.7;.85;.9;1",e),rc:l}},t:1}]}},t:8}]},crescent:{c:[{sw:4,da:128,os:82,r:26,cx:32,cy:32,f:d,at:[h]}]},dots:{c:[{fn:function(e){return{cx:16+16*e,cy:32,sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:u,v:i(".5;.6;.8;1;.8;.6;.5",e),rc:l}},t:1},{fn:function(){return{an:"r",dur:u,v:i("4;5;6;5;4;3;3",e),rc:l}},t:1}]}},t:3}]},lines:{sw:7,lc:s,line:[{fn:function(e){return{x1:10+14*e,x2:10+14*e,a:[{fn:function(){return{an:"y1",dur:u,v:i("16;18;28;18;16",e),rc:l}},t:1},{fn:function(){return{an:"y2",dur:u,v:i("48;44;36;46;48",e),rc:l}},t:1},{fn:function(){return{an:a,dur:u,v:i("1;.8;.5;.4;1",e),rc:l}},t:1}]}},t:4}]},ripple:{f:d,"fill-rule":"evenodd",sw:3,circle:[{fn:function(e){return{cx:32,cy:32,a:[{fn:function(){return{an:"r",begin:-1*e+"s",dur:"2s",v:"0;24",keyTimes:"0;1",keySplines:"0.1,0.2,0.3,1",calcMode:"spline",rc:l}},t:1},{fn:function(){return{an:a,begin:-1*e+"s",dur:"2s",v:".2;1;.2;0",rc:l}},t:1}]}},t:2}]},spiral:{defs:[{linearGradient:[{id:"sGD",gradientUnits:"userSpaceOnUse",x1:55,y1:46,x2:2,y2:46,stop:[{offset:.1,"class":"stop1"},{offset:1,"class":"stop2"}]}]}],g:[{sw:4,lc:s,f:d,path:[{stroke:"url(#sGD)",d:"M4,32 c0,15,12,28,28,28c8,0,16-4,21-9"},{d:"M60,32 C60,16,47.464,4,32,4S4,16,4,32"}],at:[h]}]}},g={android:function(t){function i(){var t=o(Date.now()-r,650),u=1,d=0,f=188-58*t,h=182-182*t;a%2&&(u=-1,d=-64,f=128- -58*t,h=182*t);var p=[0,-101,-90,-11,-180,79,-270,-191][a];n(l,"da",Math.max(Math.min(f,188),128)),n(l,"os",Math.max(Math.min(h,182),0)),n(l,"t","scale("+u+",1) translate("+d+",0) rotate("+p+",32,32)"),c+=4.1,c>359&&(c=0),n(s,"t","rotate("+c+",32,32)"),t>=1&&(a++,a>7&&(a=0),r=Date.now()),e.requestAnimationFrame(i)}var r,a=0,c=0,s=t.querySelector("g"),l=t.querySelector("circle");return function(){r=Date.now(),i()}}};c.controller("$ionicSpinner",["$element","$attrs",function(n,i){var o,r;this.init=function(){var a=null;"windowsphone"===e.Platform.platform()&&(a="android"),o=i.icon||a||e.Platform.platform(),r=v[o],r||(o="ios",r=v.ios);var c=document.createElement("div");return t("svg",{viewBox:"0 0 64 64",g:[v[o]]},c,o),n.html(c.innerHTML),this.start(),o},this.start=function(){g[o]&&g[o](n[0])()}}])}(ionic),c.controller("$ionicTab",["$scope","$ionicHistory","$attrs","$location","$state",function(e,t,n,i,o){this.$scope=e,this.hrefMatchesState=function(){return n.href&&0===i.path().indexOf(n.href.replace(/^#/,"").replace(/\/$/,""))},this.srefMatchesState=function(){return n.uiSref&&o.includes(n.uiSref.split("(")[0])},this.navNameMatchesState=function(){return this.navViewName&&t.isCurrentStateNavView(this.navViewName)},this.tabMatchesState=function(){return this.hrefMatchesState()||this.srefMatchesState()||this.navNameMatchesState()}}]),c.controller("$ionicTabs",["$scope","$element","$ionicHistory",function(e,t,n){var i,o=this,r=null,a=null;o.tabs=[],o.selectedIndex=function(){return o.tabs.indexOf(r)},o.selectedTab=function(){return r},o.previousSelectedTab=function(){return a},o.add=function(e){n.registerHistory(e),o.tabs.push(e)},o.remove=function(e){var t=o.tabs.indexOf(e);if(-1!==t){if(e.$tabSelected)if(o.deselect(e),1===o.tabs.length);else{var n=t===o.tabs.length-1?t-1:t+1;o.select(o.tabs[n])}o.tabs.splice(t,1)}},o.deselect=function(e){e.$tabSelected&&(a=r,r=i=null,e.$tabSelected=!1,(e.onDeselect||p)(),e.$broadcast&&e.$broadcast("$ionicHistory.deselect"))},o.select=function(t,a){var c;if(d(t)){if(c=t,c>=o.tabs.length)return;t=o.tabs[c]}else c=o.tabs.indexOf(t);1===arguments.length&&(a=!(!t.navViewName&&!t.uiSref)),r&&r.$historyId==t.$historyId?a&&n.goToHistoryRoot(t.$historyId):i!==c&&(l(o.tabs,function(e){o.deselect(e)}),r=t,i=c,o.$scope&&o.$scope.$parent&&(o.$scope.$parent.$activeHistoryId=t.$historyId),t.$tabSelected=!0,(t.onSelect||p)(),a&&e.$emit("$ionicHistory.change",{type:"tab",tabIndex:c,historyId:t.$historyId,navViewName:t.navViewName,hasNavView:!!t.navViewName,title:t.title,url:t.href,uiSref:t.uiSref}))},o.hasActiveScope=function(){for(var e=0;e<o.tabs.length;e++)if(n.isActiveScope(o.tabs[e]))return!0;return!1}}]),c.controller("$ionicView",["$scope","$element","$attrs","$compile","$rootScope",function(e,t,n,i,o){function r(){var t=u(n.viewTitle)&&"viewTitle"||u(n.title)&&"title";t&&(a(n[t]),$.push(n.$observe(t,a))),u(n.hideBackButton)&&$.push(e.$watch(n.hideBackButton,function(e){f.showBackButton(!e)})),u(n.hideNavBar)&&$.push(e.$watch(n.hideNavBar,function(e){f.showBar(!e)}))}function a(e){u(e)&&e!==v&&(v=e,f.title(v))}function c(){for(var e=0;e<$.length;e++)$[e]();$=[]}function l(t){return t?i(t)(e.$new()):void 0}function d(t){return!!e.$eval(n[t])}var f,h,p,v,g=this,m={},$=[],w=e.$on("ionNavBar.init",function(e,t){e.stopPropagation(),h=t});g.init=function(){w();var n=t.inheritedData("$ionModalController");f=t.inheritedData("$ionNavViewController"),f&&!n&&(e.$on("$ionicView.beforeEnter",g.beforeEnter),e.$on("$ionicView.afterEnter",r),e.$on("$ionicView.beforeLeave",c))},g.beforeEnter=function(t,i){if(i&&!i.viewNotified){i.viewNotified=!0,o.$$phase||e.$digest(),v=u(n.viewTitle)?n.viewTitle:n.title;var r={};for(var a in m)r[a]=l(m[a]);f.beforeEnter(s(i,{title:v,showBack:!d("hideBackButton"),navBarItems:r,navBarDelegate:h||null,showNavBar:!d("hideNavBar"),hasHeaderBar:!!p})),c()}},g.navElement=function(e,t){m[e]=t}}]),c.directive("ionActionSheet",["$document",function(e){return{restrict:"E",scope:!0,replace:!0,link:function(t,n){var i=function(e){27==e.which&&(t.cancel(),t.$apply())},o=function(e){e.target==n[0]&&(t.cancel(),t.$apply())};t.$on("$destroy",function(){n.remove(),e.unbind("keyup",i)}),e.bind("keyup",i),n.bind("click",o)},template:'<div class="action-sheet-backdrop"><div class="action-sheet-wrapper"><div class="action-sheet" ng-class="{\'action-sheet-has-icons\': $actionSheetHasIcon}"><div class="action-sheet-group action-sheet-options"><div class="action-sheet-title" ng-if="titleText" ng-bind-html="titleText"></div><button class="button action-sheet-option" ng-click="buttonClicked($index)" ng-repeat="b in buttons" ng-bind-html="b.text"></button><button class="button destructive action-sheet-destructive" ng-if="destructiveText" ng-click="destructiveButtonClicked()" ng-bind-html="destructiveText"></button></div><div class="action-sheet-group action-sheet-cancel" ng-if="cancelText"><button class="button" ng-click="cancel()" ng-bind-html="cancelText"></button></div></div></div></div>'}}]),c.directive("ionCheckbox",["$ionicConfig",function(e){return{restrict:"E",replace:!0,require:"?ngModel",transclude:!0,template:'<label class="item item-checkbox"><div class="checkbox checkbox-input-hidden disable-pointer-events"><input type="checkbox"><i class="checkbox-icon"></i></div><div class="item-content disable-pointer-events" ng-transclude></div></label>',compile:function(t,n){var i=t.find("input");l({name:n.name,"ng-value":n.ngValue,"ng-model":n.ngModel,"ng-checked":n.ngChecked,"ng-disabled":n.ngDisabled,"ng-true-value":n.ngTrueValue,"ng-false-value":n.ngFalseValue,"ng-change":n.ngChange,"ng-required":n.ngRequired,required:n.required},function(e,t){u(e)&&i.attr(t,e)});var o=t[0].querySelector(".checkbox");o.classList.add("checkbox-"+e.form.checkbox())}}}]),c.directive("collectionRepeat",e).factory("$ionicCollectionManager",t);var b="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",y=/height:.*?px;\s*width:.*?px/,S=3;e.$inject=["$ionicCollectionManager","$parse","$window","$$rAF","$rootScope","$timeout"],t.$inject=["$rootScope","$window","$$rAF"],c.directive("ionContent",["$timeout","$controller","$ionicBind","$ionicConfig",function(e,t,n,i){return{restrict:"E",require:"^?ionNavView",scope:!0,priority:800,compile:function(e,o){function r(e,i,r){function l(){e.$onScrollComplete({scrollTop:c.scrollView.__scrollTop,scrollLeft:c.scrollView.__scrollLeft})}var d=e.$parent;if(e.$watch(function(){return(d.$hasHeader?" has-header":"")+(d.$hasSubheader?" has-subheader":"")+(d.$hasFooter?" has-footer":"")+(d.$hasSubfooter?" has-subfooter":"")+(d.$hasTabs?" has-tabs":"")+(d.$hasTabsTop?" has-tabs-top":"")},function(e,t){i.removeClass(t),i.addClass(e)}),e.$hasHeader=e.$hasSubheader=e.$hasFooter=e.$hasSubfooter=e.$hasTabs=e.$hasTabsTop=!1,n(e,r,{$onScroll:"&onScroll",$onScrollComplete:"&onScrollComplete",hasBouncing:"@",padding:"@",direction:"@",scrollbarX:"@",scrollbarY:"@",startX:"@",startY:"@",scrollEventInterval:"@"}),e.direction=e.direction||"y",u(r.padding)&&e.$watch(r.padding,function(e){(a||i).toggleClass("padding",!!e)}),"false"===r.scroll);else{var f={};s?(i.addClass("overflow-scroll"),f={el:i[0],delegateHandle:o.delegateHandle,startX:e.$eval(e.startX)||0,startY:e.$eval(e.startY)||0,nativeScrolling:!0}):f={el:i[0],delegateHandle:o.delegateHandle,locking:"true"===(o.locking||"true"),bouncing:e.$eval(e.hasBouncing),startX:e.$eval(e.startX)||0,startY:e.$eval(e.startY)||0,scrollbarX:e.$eval(e.scrollbarX)!==!1,scrollbarY:e.$eval(e.scrollbarY)!==!1,scrollingX:e.direction.indexOf("x")>=0,scrollingY:e.direction.indexOf("y")>=0,scrollEventInterval:parseInt(e.scrollEventInterval,10)||10,scrollingComplete:l},c=t("$ionicScroll",{$scope:e,scrollViewOptions:f}),e.$on("$destroy",function(){f&&(f.scrollingComplete=p,delete f.el),a=null,i=null,o.$$element=null})}}var a,c;e.addClass("scroll-content ionic-scroll"),"false"!=o.scroll?(a=h('<div class="scroll"></div>'),a.append(e.contents()),e.append(a)):e.addClass("scroll-content-false");var s="true"===o.overflowScroll||!i.scrolling.jsScrolling();return s&&(s=!e[0].querySelector("[collection-repeat]")),{pre:r}}}}]),c.directive("exposeAsideWhen",["$window",function(e){return{restrict:"A",require:"^ionSideMenus",link:function(t,n,i,o){function r(){var t="large"==i.exposeAsideWhen?"(min-width:768px)":i.exposeAsideWhen;o.exposeAside(e.matchMedia(t).matches),o.activeAsideResizing(!1)}function a(){o.activeAsideResizing(!0),c()}var c=ionic.debounce(function(){t.$apply(r)},300,!1);t.$evalAsync(r),ionic.on("resize",a,e),t.$on("$destroy",function(){ionic.off("resize",a,e)})}}}]);var k="onHold onTap onDoubleTap onTouch onRelease onDrag onDragUp onDragRight onDragDown onDragLeft onSwipe onSwipeUp onSwipeRight onSwipeDown onSwipeLeft".split(" ");k.forEach(function(e){c.directive(e,n(e))}),c.directive("ionHeaderBar",i()).directive("ionHeaderBar",o(!0)).directive("ionFooterBar",o(!1)),c.directive("ionInfiniteScroll",["$timeout",function(e){return{restrict:"E",require:["?^$ionicScroll","ionInfiniteScroll"],template:function(e,t){return t.icon?'<i class="icon {{icon()}} icon-refreshing {{scrollingType}}"></i>':'<ion-spinner icon="{{spinner()}}"></ion-spinner>'},scope:!0,controller:"$ionInfiniteScroll",link:function(t,n,i,o){var r=o[1],a=r.scrollCtrl=o[0],c=r.jsScrolling=!a.isNative();if(c)r.scrollView=a.scrollView,t.scrollingType="js-scrolling",a.$element.on("scroll",r.checkBounds);else{var s=ionic.DomUtil.getParentOrSelfWithClass(n[0].parentNode,"overflow-scroll");if(r.scrollEl=s,!s)throw"Infinite scroll must be used inside a scrollable div";r.scrollEl.addEventListener("scroll",r.checkBounds)}var l=u(i.immediateCheck)?t.$eval(i.immediateCheck):!0;l&&e(function(){r.checkBounds()})}}}]),c.directive("ionItem",["$$rAF",function(e){return{restrict:"E",controller:["$scope","$element",function(e,t){this.$scope=e,this.$element=t}],scope:!0,compile:function(t,n){var i=u(n.href)||u(n.ngHref)||u(n.uiSref),o=i||/ion-(delete|option|reorder)-button/i.test(t.html());if(o){var r=h(i?"<a></a>":"<div></div>");r.addClass("item-content"),(u(n.href)||u(n.ngHref))&&(r.attr("ng-href","{{$href()}}"),u(n.target)&&r.attr("target","{{$target()}}")),r.append(t.contents()),t.addClass("item item-complex").append(r)}else t.addClass("item");return function(t,n,i){t.$href=function(){return i.href||i.ngHref},t.$target=function(){return i.target};var o=n[0].querySelector(".item-content");o&&t.$on("$collectionRepeatLeave",function(){o&&o.$$ionicOptionsOpen&&(o.style[ionic.CSS.TRANSFORM]="",o.style[ionic.CSS.TRANSITION]="none",e(function(){o.style[ionic.CSS.TRANSITION]=""}),o.$$ionicOptionsOpen=!1)})}}}}]);var C='<div class="item-left-edit item-delete enable-pointer-events"></div>';c.directive("ionDeleteButton",function(){function e(e){e.stopPropagation()}return{restrict:"E",require:["^^ionItem","^?ionList"],priority:Number.MAX_VALUE,compile:function(t,n){return n.$set("class",(n["class"]||"")+" button icon button-icon",!0),function(t,n,i,o){function r(){c=c||n.controller("ionList"),c&&c.showDelete()&&s.addClass("visible active")}var a=o[0],c=o[1],s=h(C);s.append(n),a.$element.append(s).addClass("item-left-editable"),n.on("click",e),r(),t.$on("$ionic.reconnectScope",r)}}}}),c.directive("itemFloatingLabel",function(){return{restrict:"C",link:function(e,t){var n=t[0],i=n.querySelector("input, textarea"),o=n.querySelector(".input-label");if(i&&o){var r=function(){i.value?o.classList.add("has-input"):o.classList.remove("has-input")};i.addEventListener("input",r);var a=h(i).controller("ngModel");a&&(a.$render=function(){i.value=a.$viewValue||"",r()}),e.$on("$destroy",function(){i.removeEventListener("input",r)})}}}});var T='<div class="item-options invisible"></div>';c.directive("ionOptionButton",[function(){function e(e){e.stopPropagation()}return{restrict:"E",require:"^ionItem",priority:Number.MAX_VALUE,compile:function(t,n){return n.$set("class",(n["class"]||"")+" button",!0),function(t,n,i,o){o.optionsContainer||(o.optionsContainer=h(T),o.$element.append(o.optionsContainer)),o.optionsContainer.append(n),o.$element.addClass("item-right-editable"),n.on("click",e)}}}}]);var B='<div data-prevent-scroll="true" class="item-right-edit item-reorder enable-pointer-events"></div>';c.directive("ionReorderButton",["$parse",function(e){return{restrict:"E",require:["^ionItem","^?ionList"],priority:Number.MAX_VALUE,compile:function(t,n){return n.$set("class",(n["class"]||"")+" button icon button-icon",!0),t[0].setAttribute("data-prevent-scroll",!0),function(t,n,i,o){var r=o[0],a=o[1],c=e(i.onReorder);t.$onReorder=function(e,n){c(t,{$fromIndex:e,$toIndex:n})},i.ngClick||i.onClick||i.onclick||(n[0].onclick=function(e){return e.stopPropagation(),!1});var s=h(B);s.append(n),r.$element.append(s).addClass("item-right-editable"),a&&a.showReorder()&&s.addClass("visible active")}}}}]),c.directive("keyboardAttach",function(){return function(e,t){function n(e){if(!ionic.Platform.isAndroid()||ionic.Platform.isFullScreen){var n=e.keyboardHeight||e.detail.keyboardHeight;t.css("bottom",n+"px"),o=t.controller("$ionicScroll"),o&&(o.scrollView.__container.style.bottom=n+r(t[0])+"px")}}function i(){(!ionic.Platform.isAndroid()||ionic.Platform.isFullScreen)&&(t.css("bottom",""),o&&(o.scrollView.__container.style.bottom=""))}ionic.on("native.keyboardshow",n,window),ionic.on("native.keyboardhide",i,window),ionic.on("native.showkeyboard",n,window),ionic.on("native.hidekeyboard",i,window);var o;e.$on("$destroy",function(){ionic.off("native.keyboardshow",n,window),ionic.off("native.keyboardhide",i,window),ionic.off("native.showkeyboard",n,window),ionic.off("native.hidekeyboard",i,window)})}}),c.directive("ionList",["$timeout",function(e){return{restrict:"E",require:["ionList","^?$ionicScroll"],controller:"$ionicList",compile:function(t,n){var i=h('<div class="list">').append(t.contents()).addClass(n.type);return t.append(i),function(t,i,o,r){function a(){
function o(e,t){t()&&e.addClass("visible")||e.removeClass("active"),ionic.requestAnimationFrame(function(){t()&&e.addClass("active")||e.removeClass("visible")})}var r=c.listView=new ionic.views.ListView({el:i[0],listEl:i.children()[0],scrollEl:s&&s.element,scrollView:s&&s.scrollView,onReorder:function(t,n,i){var o=h(t).scope();o&&o.$onReorder&&e(function(){o.$onReorder(n,i)})},canSwipe:function(){return c.canSwipeItems()}});t.$on("$destroy",function(){r&&(r.deregister&&r.deregister(),r=null)}),u(n.canSwipe)&&t.$watch("!!("+n.canSwipe+")",function(e){c.canSwipeItems(e)}),u(n.showDelete)&&t.$watch("!!("+n.showDelete+")",function(e){c.showDelete(e)}),u(n.showReorder)&&t.$watch("!!("+n.showReorder+")",function(e){c.showReorder(e)}),t.$watch(function(){return c.showDelete()},function(e,t){if(e||t){e&&c.closeOptionButtons(),c.canSwipeItems(!e),i.children().toggleClass("list-left-editing",e),i.toggleClass("disable-pointer-events",e);var n=h(i[0].getElementsByClassName("item-delete"));o(n,c.showDelete)}}),t.$watch(function(){return c.showReorder()},function(e,t){if(e||t){e&&c.closeOptionButtons(),c.canSwipeItems(!e),i.children().toggleClass("list-right-editing",e),i.toggleClass("disable-pointer-events",e);var n=h(i[0].getElementsByClassName("item-reorder"));o(n,c.showReorder)}})}var c=r[0],s=r[1];e(a)}}}}]),c.directive("menuClose",["$ionicHistory",function(e){return{restrict:"AC",link:function(t,n){n.bind("click",function(){var t=n.inheritedData("$ionSideMenusController");t&&(e.nextViewOptions({historyRoot:!0,disableAnimate:!0,expire:300}),t.close())})}}}]),c.directive("menuToggle",function(){return{restrict:"AC",link:function(e,t,n){e.$on("$ionicView.beforeEnter",function(e,n){if(n.enableBack){var i=t.inheritedData("$ionSideMenusController");i.enableMenuWithBackViews()||t.addClass("hide")}else t.removeClass("hide")}),t.bind("click",function(){var e=t.inheritedData("$ionSideMenusController");e&&e.toggle(n.menuToggle)})}}}),c.directive("ionModal",[function(){return{restrict:"E",transclude:!0,replace:!0,controller:[function(){}],template:'<div class="modal-backdrop"><div class="modal-backdrop-bg"></div><div class="modal-wrapper" ng-transclude></div></div>'}}]),c.directive("ionModalView",function(){return{restrict:"E",compile:function(e){e.addClass("modal")}}}),c.directive("ionNavBackButton",["$ionicConfig","$document",function(e,t){return{restrict:"E",require:"^ionNavBar",compile:function(n,i){function o(e){return/ion-|icon/.test(e.className)}var r=t[0].createElement("button");for(var a in i.$attr)r.setAttribute(i.$attr[a],i[a]);i.ngClick||r.setAttribute("ng-click","$ionicGoBack()"),r.className="button back-button hide buttons "+(n.attr("class")||""),r.innerHTML=n.html()||"";for(var c,s,l,u,d=o(n[0]),f=0;f<n[0].childNodes.length;f++)c=n[0].childNodes[f],1===c.nodeType?o(c)?d=!0:c.classList.contains("default-title")?l=!0:c.classList.contains("previous-title")&&(u=!0):s||3!==c.nodeType||(s=!!c.nodeValue.trim());var h=e.backButton.icon();if(!d&&h&&"none"!==h&&(r.innerHTML='<i class="icon '+h+'"></i> '+r.innerHTML,r.className+=" button-clear"),!s){var p=t[0].createElement("span");p.className="back-text",!l&&e.backButton.text()&&(p.innerHTML+='<span class="default-title">'+e.backButton.text()+"</span>"),!u&&e.backButton.previousTitleText()&&(p.innerHTML+='<span class="previous-title"></span>'),r.appendChild(p)}return n.attr("class","hide"),n.empty(),{pre:function(e,t,n,i){i.navElement("backButton",r.outerHTML),r=null}}}}}]),c.directive("ionNavBar",function(){return{restrict:"E",controller:"$ionicNavBar",scope:!0,link:function(e,t,n,i){i.init()}}}),c.directive("ionNavButtons",["$document",function(e){return{require:"^ionNavBar",restrict:"E",compile:function(t,n){var i="left";/^primary|secondary|right$/i.test(n.side||"")&&(i=n.side.toLowerCase());var o=e[0].createElement("span");o.className=i+"-buttons",o.innerHTML=t.html();var r=i+"Buttons";return t.attr("class","hide"),t.empty(),{pre:function(e,t,n,i){var a=t.parent().data("$ionViewController");a?a.navElement(r,o.outerHTML):i.navElement(r,o.outerHTML),o=null}}}}}]),c.directive("navDirection",["$ionicViewSwitcher",function(e){return{restrict:"A",priority:1e3,link:function(t,n,i){n.bind("click",function(){e.nextDirection(i.navDirection)})}}}]),c.directive("ionNavTitle",["$document",function(e){return{require:"^ionNavBar",restrict:"E",compile:function(t,n){var i="title",o=e[0].createElement("span");for(var r in n.$attr)o.setAttribute(n.$attr[r],n[r]);return o.classList.add("nav-bar-title"),o.innerHTML=t.html(),t.attr("class","hide"),t.empty(),{pre:function(e,t,n,r){var a=t.parent().data("$ionViewController");a?a.navElement(i,o.outerHTML):r.navElement(i,o.outerHTML),o=null}}}}}]),c.directive("navTransition",["$ionicViewSwitcher",function(e){return{restrict:"A",priority:1e3,link:function(t,n,i){n.bind("click",function(){e.nextTransition(i.navTransition)})}}}]),c.directive("ionNavView",["$state","$ionicConfig",function(e,t){return{restrict:"E",terminal:!0,priority:2e3,transclude:!0,controller:"$ionicNavView",compile:function(n,i,o){return n.addClass("view-container"),ionic.DomUtil.cachedAttr(n,"nav-view-transition",t.views.transition()),function(t,n,i,r){function a(t){var n=e.$current&&e.$current.locals[s.name];n&&(t||n!==c)&&(c=n,s.state=n.$$state,r.register(n))}var c;o(t,function(e){n.append(e)});var s=r.init();t.$on("$stateChangeSuccess",function(){a(!1)}),t.$on("$viewContentLoading",function(){a(!1)}),a(!0)}}}}]),c.config(["$provide",function(e){e.decorator("ngClickDirective",["$delegate",function(e){return e.shift(),e}])}]).factory("$ionicNgClick",["$parse",function(e){return function(t,n,i){var o=angular.isFunction(i)?i:e(i);n.on("click",function(e){t.$apply(function(){o(t,{$event:e})})}),n.onclick=p}}]).directive("ngClick",["$ionicNgClick",function(e){return function(t,n,i){e(t,n,i.ngClick)}}]).directive("ionStopEvent",function(){return{restrict:"A",link:function(e,t,n){t.bind(n.ionStopEvent,a)}}}),c.directive("ionPane",function(){return{restrict:"E",link:function(e,t){t.addClass("pane")}}}),c.directive("ionPopover",[function(){return{restrict:"E",transclude:!0,replace:!0,controller:[function(){}],template:'<div class="popover-backdrop"><div class="popover-wrapper" ng-transclude></div></div>'}}]),c.directive("ionPopoverView",function(){return{restrict:"E",compile:function(e){e.append(h('<div class="popover-arrow">')),e.addClass("popover")}}}),c.directive("ionRadio",function(){return{restrict:"E",replace:!0,require:"?ngModel",transclude:!0,template:'<label class="item item-radio"><input type="radio" name="radio-group"><div class="item-content disable-pointer-events" ng-transclude></div><i class="radio-icon disable-pointer-events icon ion-checkmark"></i></label>',compile:function(e,t){t.icon&&e.children().eq(2).removeClass("ion-checkmark").addClass(t.icon);var n=e.find("input");return l({name:t.name,value:t.value,disabled:t.disabled,"ng-value":t.ngValue,"ng-model":t.ngModel,"ng-disabled":t.ngDisabled,"ng-change":t.ngChange,"ng-required":t.ngRequired,required:t.required},function(e,t){u(e)&&n.attr(t,e)}),function(e,t,n){e.getValue=function(){return e.ngValue||n.value}}}}}),c.directive("ionRefresher",[function(){return{restrict:"E",replace:!0,require:["?^$ionicScroll","ionRefresher"],controller:"$ionicRefresher",template:'<div class="scroll-refresher invisible" collection-repeat-ignore><div class="ionic-refresher-content" ng-class="{\'ionic-refresher-with-text\': pullingText || refreshingText}"><div class="icon-pulling" ng-class="{\'pulling-rotation-disabled\':disablePullingRotation}"><i class="icon {{pullingIcon}}"></i></div><div class="text-pulling" ng-bind-html="pullingText"></div><div class="icon-refreshing"><ion-spinner ng-if="showSpinner" icon="{{spinner}}"></ion-spinner><i ng-if="showIcon" class="icon {{refreshingIcon}}"></i></div><div class="text-refreshing" ng-bind-html="refreshingText"></div></div></div>',link:function(e,t,n,i){var o=i[0],r=i[1];!o||o.isNative()?r.init():(t[0].classList.add("js-scrolling"),o._setRefresher(e,t[0],r.getRefresherDomMethods()),e.$on("scroll.refreshComplete",function(){e.$evalAsync(function(){o.scrollView.finishPullToRefresh()})}))}}}]),c.directive("ionScroll",["$timeout","$controller","$ionicBind",function(e,t,n){return{restrict:"E",scope:!0,controller:function(){},compile:function(e){function i(e,i,r){n(e,r,{direction:"@",paging:"@",$onScroll:"&onScroll",scroll:"@",scrollbarX:"@",scrollbarY:"@",zooming:"@",minZoom:"@",maxZoom:"@"}),e.direction=e.direction||"y",u(r.padding)&&e.$watch(r.padding,function(e){o.toggleClass("padding",!!e)}),e.$eval(e.paging)===!0&&o.addClass("scroll-paging"),e.direction||(e.direction="y");var a=e.$eval(e.paging)===!0,c={el:i[0],delegateHandle:r.delegateHandle,locking:"true"===(r.locking||"true"),bouncing:e.$eval(r.hasBouncing),paging:a,scrollbarX:e.$eval(e.scrollbarX)!==!1,scrollbarY:e.$eval(e.scrollbarY)!==!1,scrollingX:e.direction.indexOf("x")>=0,scrollingY:e.direction.indexOf("y")>=0,zooming:e.$eval(e.zooming)===!0,maxZoom:e.$eval(e.maxZoom)||3,minZoom:e.$eval(e.minZoom)||.5,preventDefault:!0};a&&(c.speedMultiplier=.8,c.bouncing=!1),t("$ionicScroll",{$scope:e,scrollViewOptions:c})}e.addClass("scroll-view ionic-scroll");var o=h('<div class="scroll"></div>');return o.append(e.contents()),e.append(o),{pre:i}}}}]),c.directive("ionSideMenu",function(){return{restrict:"E",require:"^ionSideMenus",scope:!0,compile:function(e,t){return angular.isUndefined(t.isEnabled)&&t.$set("isEnabled","true"),angular.isUndefined(t.width)&&t.$set("width","275"),e.addClass("menu menu-"+t.side),function(e,n,i,o){e.side=i.side||"left";var r=o[e.side]=new ionic.views.SideMenu({width:t.width,el:n[0],isEnabled:!0});e.$watch(i.width,function(e){var t=+e;t&&t==e&&r.setWidth(+e)}),e.$watch(i.isEnabled,function(e){r.setIsEnabled(!!e)})}}}}),c.directive("ionSideMenuContent",["$timeout","$ionicGesture","$window",function(e,t,n){return{restrict:"EA",require:"^ionSideMenus",scope:!0,compile:function(i,o){function r(r,a,c,s){function l(e){0!==s.getOpenAmount()?(s.close(),e.gesture.srcEvent.preventDefault(),v=null,g=null):v||(v=ionic.tap.pointerCoord(e.gesture.srcEvent))}function d(e){s.isDraggableTarget(e)&&"x"==p(e)&&(s._handleDrag(e),e.gesture.srcEvent.preventDefault())}function f(e){"x"==p(e)&&e.gesture.srcEvent.preventDefault()}function h(e){s._endDrag(e),v=null,g=null}function p(e){if(g)return g;if(e&&e.gesture){if(v){var t=ionic.tap.pointerCoord(e.gesture.srcEvent),n=Math.abs(t.x-v.x),i=Math.abs(t.y-v.y),o=i>n?"y":"x";return Math.max(n,i)>30&&(g=o),o}v=ionic.tap.pointerCoord(e.gesture.srcEvent)}return"y"}var v=null,g=null;u(o.dragContent)?r.$watch(o.dragContent,function(e){s.canDragContent(e)}):s.canDragContent(!0),u(o.edgeDragThreshold)&&r.$watch(o.edgeDragThreshold,function(e){s.edgeDragThreshold(e)});var m={element:i[0],onDrag:function(){},endDrag:function(){},getTranslateX:function(){return r.sideMenuContentTranslateX||0},setTranslateX:ionic.animationFrameThrottle(function(t){var n=m.offsetX+t;a[0].style[ionic.CSS.TRANSFORM]="translate3d("+n+"px,0,0)",e(function(){r.sideMenuContentTranslateX=t})}),setMarginLeft:ionic.animationFrameThrottle(function(e){e?(e=parseInt(e,10),a[0].style[ionic.CSS.TRANSFORM]="translate3d("+e+"px,0,0)",a[0].style.width=n.innerWidth-e+"px",m.offsetX=e):(a[0].style[ionic.CSS.TRANSFORM]="translate3d(0,0,0)",a[0].style.width="",m.offsetX=0)}),setMarginRight:ionic.animationFrameThrottle(function(e){e?(e=parseInt(e,10),a[0].style.width=n.innerWidth-e+"px",m.offsetX=e):(a[0].style.width="",m.offsetX=0),a[0].style[ionic.CSS.TRANSFORM]="translate3d(0,0,0)"}),enableAnimation:function(){r.animationEnabled=!0,a[0].classList.add("menu-animated")},disableAnimation:function(){r.animationEnabled=!1,a[0].classList.remove("menu-animated")},offsetX:0};s.setContent(m);var $={stop_browser_behavior:!1};ionic.DomUtil.getParentOrSelfWithClass(a[0],"overflow-scroll")&&($.prevent_default_directions=["left","right"]);var w=t.on("tap",l,a,$),b=t.on("dragright",d,a,$),y=t.on("dragleft",d,a,$),S=t.on("dragup",f,a,$),k=t.on("dragdown",f,a,$),C=t.on("release",h,a,$);r.$on("$destroy",function(){m&&(m.element=null,m=null),t.off(y,"dragleft",d),t.off(b,"dragright",d),t.off(S,"dragup",f),t.off(k,"dragdown",f),t.off(C,"release",h),t.off(w,"tap",l)})}return i.addClass("menu-content pane"),{pre:r}}}}]),c.directive("ionSideMenus",["$ionicBody",function(e){return{restrict:"ECA",controller:"$ionicSideMenus",compile:function(t,n){function i(t,n,i,o){o.enableMenuWithBackViews(t.$eval(i.enableMenuWithBackViews)),t.$on("$ionicExposeAside",function(n,i){t.$exposeAside||(t.$exposeAside={}),t.$exposeAside.active=i,e.enableClass(i,"aside-open")}),t.$on("$ionicView.beforeEnter",function(e,n){n.historyId&&(t.$activeHistoryId=n.historyId)}),t.$on("$destroy",function(){e.removeClass("menu-open","aside-open")})}return n.$set("class",(n["class"]||"")+" view"),{pre:i}}}}]),c.directive("ionSlideBox",["$timeout","$compile","$ionicSlideBoxDelegate","$ionicHistory","$ionicScrollDelegate",function(e,t,n,i,o){return{restrict:"E",replace:!0,transclude:!0,scope:{autoPlay:"=",doesContinue:"@",slideInterval:"@",showPager:"@",pagerClick:"&",disableScroll:"@",onSlideChanged:"&",activeSlide:"=?"},controller:["$scope","$element","$attrs",function(t,r,a){function c(e){e&&!s.isScrollFreeze?o.freezeAllScrolls(e):!e&&s.isScrollFreeze&&o.freezeAllScrolls(!1),s.isScrollFreeze=e}var s=this,l=t.$eval(t.doesContinue)===!0,d=u(a.autoPlay)?!!t.autoPlay:!1,f=d?t.$eval(t.slideInterval)||4e3:0,h=new ionic.views.Slider({el:r[0],auto:f,continuous:l,startSlide:t.activeSlide,slidesChanged:function(){t.currentSlide=h.currentIndex(),e(function(){})},callback:function(n){t.currentSlide=n,t.onSlideChanged({index:t.currentSlide,$index:t.currentSlide}),t.$parent.$broadcast("slideBox.slideChanged",n),t.activeSlide=n,e(function(){})},onDrag:function(){c(!0)},onDragEnd:function(){c(!1)}});h.enableSlide(t.$eval(a.disableScroll)!==!0),t.$watch("activeSlide",function(e){u(e)&&h.slide(e)}),t.$on("slideBox.nextSlide",function(){h.next()}),t.$on("slideBox.prevSlide",function(){h.prev()}),t.$on("slideBox.setSlide",function(e,t){h.slide(t)}),this.__slider=h;var p=n._registerInstance(h,a.delegateHandle,function(){return i.isActiveScope(t)});t.$on("$destroy",function(){p(),h.kill()}),this.slidesCount=function(){return h.slidesCount()},this.onPagerClick=function(e){t.pagerClick({index:e})},e(function(){h.load()})}],template:'<div class="slider"><div class="slider-slides" ng-transclude></div></div>',link:function(e,n,i){function o(){if(!r){var i=e.$new();r=h("<ion-pager></ion-pager>"),n.append(r),r=t(r)(i)}return r}u(i.showPager)||(e.showPager=!0,o().toggleClass("hide",!1)),i.$observe("showPager",function(t){t=e.$eval(t),o().toggleClass("hide",!t)});var r}}}]).directive("ionSlide",function(){return{restrict:"E",require:"^ionSlideBox",compile:function(e){e.addClass("slider-slide")}}}).directive("ionPager",function(){return{restrict:"E",replace:!0,require:"^ionSlideBox",template:'<div class="slider-pager"><span class="slider-pager-page" ng-repeat="slide in numSlides() track by $index" ng-class="{active: $index == currentSlide}" ng-click="pagerClick($index)"><i class="icon ion-record"></i></span></div>',link:function(e,t,n,i){var o=function(e){for(var n=t[0].children,i=n.length,o=0;i>o;o++)o==e?n[o].classList.add("active"):n[o].classList.remove("active")};e.pagerClick=function(e){i.onPagerClick(e)},e.numSlides=function(){return new Array(i.slidesCount())},e.$watch("currentSlide",function(e){o(e)})}}}),c.directive("ionSpinner",function(){return{restrict:"E",controller:"$ionicSpinner",link:function(e,t,n,i){var o=i.init();t.addClass("spinner spinner-"+o)}}}),c.directive("ionTab",["$compile","$ionicConfig","$ionicBind","$ionicViewSwitcher",function(e,t,n,i){function o(e,t){return u(t)?" "+e+'="'+t+'"':""}return{restrict:"E",require:["^ionTabs","ionTab"],controller:"$ionicTab",scope:!0,compile:function(r,a){for(var c="<ion-tab-nav"+o("ng-click",a.ngClick)+o("title",a.title)+o("icon",a.icon)+o("icon-on",a.iconOn)+o("icon-off",a.iconOff)+o("badge",a.badge)+o("badge-style",a.badgeStyle)+o("hidden",a.hidden)+o("disabled",a.disabled)+o("class",a["class"])+"></ion-tab-nav>",s=document.createElement("div"),l=0;l<r[0].children.length;l++)s.appendChild(r[0].children[l].cloneNode(!0));var u=s.childElementCount;r.empty();var d,f;return u&&("ION-NAV-VIEW"===s.children[0].tagName&&(d=s.children[0].getAttribute("name"),s.children[0].classList.add("view-container"),f=!0),1===u&&(s=s.children[0]),f||s.classList.add("pane"),s.classList.add("tab-content")),function(o,r,a,l){function f(){w.tabMatchesState()&&$.select(o,!1)}function p(n){n&&u?(b||(g=o.$new(),m=h(s),i.viewEleIsActive(m,!0),$.$element.append(m),e(m)(g),b=!0),i.viewEleIsActive(m,!0)):b&&m&&(t.views.maxCache()>0?i.viewEleIsActive(m,!1):v())}function v(){g&&g.$destroy(),b&&m&&m.remove(),s.innerHTML="",b=g=m=null}var g,m,$=l[0],w=l[1],b=!1;o.$tabSelected=!1,n(o,a,{onSelect:"&",onDeselect:"&",title:"@",uiSref:"@",href:"@"}),$.add(o),o.$on("$destroy",function(){o.$tabsDestroy||$.remove(o),y.isolateScope().$destroy(),y.remove(),y=s=m=null}),r[0].removeAttribute("title"),d&&(w.navViewName=o.navViewName=d),o.$on("$stateChangeSuccess",f),f();var y=h(c);y.data("$ionTabsController",$),y.data("$ionTabController",w),$.$tabsElement.append(e(y)(o)),o.$watch("$tabSelected",p),o.$on("$ionicView.afterEnter",function(){i.viewEleIsActive(m,o.$tabSelected)}),o.$on("$ionicView.clearCache",function(){o.$tabSelected||v()})}}}}]),c.directive("ionTabNav",[function(){return{restrict:"E",replace:!0,require:["^ionTabs","^ionTab"],template:"<a ng-class=\"{'tab-item-active': isTabActive(), 'has-badge':badge, 'tab-hidden':isHidden()}\" "+' ng-disabled="disabled()" class="tab-item"><span class="badge {{badgeStyle}}" ng-if="badge">{{badge}}</span><i class="icon {{getIconOn()}}" ng-if="getIconOn() && isTabActive()"></i><i class="icon {{getIconOff()}}" ng-if="getIconOff() && !isTabActive()"></i><span class="tab-title" ng-bind-html="title"></span></a>',scope:{title:"@",icon:"@",iconOn:"@",iconOff:"@",badge:"=",hidden:"@",disabled:"&",badgeStyle:"@","class":"@"},link:function(e,t,n,i){var o=i[0],r=i[1];t[0].removeAttribute("title"),e.selectTab=function(e){e.preventDefault(),o.select(r.$scope,!0)},n.ngClick||t.on("click",function(t){e.$apply(function(){e.selectTab(t)})}),e.isHidden=function(){return"true"===n.hidden||n.hidden===!0?!0:!1},e.getIconOn=function(){return e.iconOn||e.icon},e.getIconOff=function(){return e.iconOff||e.icon},e.isTabActive=function(){return o.selectedTab()===r.$scope}}}}]),c.directive("ionTabs",["$ionicTabsDelegate","$ionicConfig",function(e,t){return{restrict:"E",scope:!0,controller:"$ionicTabs",compile:function(n){function i(t,n,i,o){function a(e,t){e.stopPropagation();var n=o.previousSelectedTab();n&&n.$broadcast(e.name.replace("NavView","Tabs"),t)}var c=e._registerInstance(o,i.delegateHandle,o.hasActiveScope);o.$scope=t,o.$element=n,o.$tabsElement=h(n[0].querySelector(".tabs")),t.$watch(function(){return n[0].className},function(e){var n=-1!==e.indexOf("tabs-top"),i=-1!==e.indexOf("tabs-item-hide");t.$hasTabs=!n&&!i,t.$hasTabsTop=n&&!i,t.$emit("$ionicTabs.top",t.$hasTabsTop)}),t.$on("$ionicNavView.beforeLeave",a),t.$on("$ionicNavView.afterLeave",a),t.$on("$ionicNavView.leave",a),t.$on("$destroy",function(){t.$tabsDestroy=!0,c(),o.$tabsElement=o.$element=o.$scope=r=null,delete t.$hasTabs,delete t.$hasTabsTop})}function o(e,t,n,i){i.selectedTab()||i.select(0)}var r=h('<div class="tab-nav tabs">');return r.append(n.contents()),n.append(r).addClass("tabs-"+t.tabs.position()+" tabs-"+t.tabs.style()),{pre:i,post:o}}}}]),c.directive("ionToggle",["$timeout","$ionicConfig",function(e,t){return{restrict:"E",replace:!0,require:"?ngModel",transclude:!0,template:'<div class="item item-toggle"><div ng-transclude></div><label class="toggle"><input type="checkbox"><div class="track"><div class="handle"></div></div></label></div>',compile:function(e,n){var i=e.find("input");return l({name:n.name,"ng-value":n.ngValue,"ng-model":n.ngModel,"ng-checked":n.ngChecked,"ng-disabled":n.ngDisabled,"ng-true-value":n.ngTrueValue,"ng-false-value":n.ngFalseValue,"ng-change":n.ngChange,"ng-required":n.ngRequired,required:n.required},function(e,t){u(e)&&i.attr(t,e)}),n.toggleClass&&e[0].getElementsByTagName("label")[0].classList.add(n.toggleClass),e.addClass("toggle-"+t.form.toggle()),function(e,t){var n=t[0].getElementsByTagName("label")[0],i=n.children[0],o=n.children[1],r=o.children[0],a=h(i).controller("ngModel");e.toggle=new ionic.views.Toggle({el:n,track:o,checkbox:i,handle:r,onChange:function(){a&&(a.$setViewValue(i.checked),e.$apply())}}),e.$on("$destroy",function(){e.toggle.destroy()})}}}}]),c.directive("ionView",function(){return{restrict:"EA",priority:1e3,controller:"$ionicView",compile:function(e){return e.addClass("pane"),e[0].removeAttribute("title"),function(e,t,n,i){i.init()}}}})}();
//! moment.js
//! version : 2.10.6
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return Hc.apply(null,arguments)}function b(a){Hc=a}function c(a){return"[object Array]"===Object.prototype.toString.call(a)}function d(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function e(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function f(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function g(a,b){for(var c in b)f(b,c)&&(a[c]=b[c]);return f(b,"toString")&&(a.toString=b.toString),f(b,"valueOf")&&(a.valueOf=b.valueOf),a}function h(a,b,c,d){return Ca(a,b,c,d,!0).utc()}function i(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function j(a){return null==a._pf&&(a._pf=i()),a._pf}function k(a){if(null==a._isValid){var b=j(a);a._isValid=!(isNaN(a._d.getTime())||!(b.overflow<0)||b.empty||b.invalidMonth||b.invalidWeekday||b.nullInput||b.invalidFormat||b.userInvalidated),a._strict&&(a._isValid=a._isValid&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour)}return a._isValid}function l(a){var b=h(NaN);return null!=a?g(j(b),a):j(b).userInvalidated=!0,b}function m(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=j(b)),"undefined"!=typeof b._locale&&(a._locale=b._locale),Jc.length>0)for(c in Jc)d=Jc[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function n(b){m(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),Kc===!1&&(Kc=!0,a.updateOffset(this),Kc=!1)}function o(a){return a instanceof n||null!=a&&null!=a._isAMomentObject}function p(a){return 0>a?Math.ceil(a):Math.floor(a)}function q(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=p(b)),c}function r(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&q(a[d])!==q(b[d]))&&g++;return g+f}function s(){}function t(a){return a?a.toLowerCase().replace("_","-"):a}function u(a){for(var b,c,d,e,f=0;f<a.length;){for(e=t(a[f]).split("-"),b=e.length,c=t(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=v(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&r(e,c,!0)>=b-1)break;b--}f++}return null}function v(a){var b=null;if(!Lc[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=Ic._abbr,require("./locale/"+a),w(b)}catch(c){}return Lc[a]}function w(a,b){var c;return a&&(c="undefined"==typeof b?y(a):x(a,b),c&&(Ic=c)),Ic._abbr}function x(a,b){return null!==b?(b.abbr=a,Lc[a]=Lc[a]||new s,Lc[a].set(b),w(a),Lc[a]):(delete Lc[a],null)}function y(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Ic;if(!c(a)){if(b=v(a))return b;a=[a]}return u(a)}function z(a,b){var c=a.toLowerCase();Mc[c]=Mc[c+"s"]=Mc[b]=a}function A(a){return"string"==typeof a?Mc[a]||Mc[a.toLowerCase()]:void 0}function B(a){var b,c,d={};for(c in a)f(a,c)&&(b=A(c),b&&(d[b]=a[c]));return d}function C(b,c){return function(d){return null!=d?(E(this,b,d),a.updateOffset(this,c),this):D(this,b)}}function D(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function E(a,b,c){return a._d["set"+(a._isUTC?"UTC":"")+b](c)}function F(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else if(a=A(a),"function"==typeof this[a])return this[a](b);return this}function G(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}function H(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Qc[a]=e),b&&(Qc[b[0]]=function(){return G(e.apply(this,arguments),b[1],b[2])}),c&&(Qc[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function I(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function J(a){var b,c,d=a.match(Nc);for(b=0,c=d.length;c>b;b++)Qc[d[b]]?d[b]=Qc[d[b]]:d[b]=I(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function K(a,b){return a.isValid()?(b=L(b,a.localeData()),Pc[b]=Pc[b]||J(b),Pc[b](a)):a.localeData().invalidDate()}function L(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Oc.lastIndex=0;d>=0&&Oc.test(a);)a=a.replace(Oc,c),Oc.lastIndex=0,d-=1;return a}function M(a){return"function"==typeof a&&"[object Function]"===Object.prototype.toString.call(a)}function N(a,b,c){dd[a]=M(b)?b:function(a){return a&&c?c:b}}function O(a,b){return f(dd,a)?dd[a](b._strict,b._locale):new RegExp(P(a))}function P(a){return a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Q(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=q(a)}),c=0;c<a.length;c++)ed[a[c]]=d}function R(a,b){Q(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function S(a,b,c){null!=b&&f(ed,a)&&ed[a](b,c._a,c,a)}function T(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function U(a){return this._months[a.month()]}function V(a){return this._monthsShort[a.month()]}function W(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=h([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function X(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),T(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function Y(b){return null!=b?(X(this,b),a.updateOffset(this,!0),this):D(this,"Month")}function Z(){return T(this.year(),this.month())}function $(a){var b,c=a._a;return c&&-2===j(a).overflow&&(b=c[gd]<0||c[gd]>11?gd:c[hd]<1||c[hd]>T(c[fd],c[gd])?hd:c[id]<0||c[id]>24||24===c[id]&&(0!==c[jd]||0!==c[kd]||0!==c[ld])?id:c[jd]<0||c[jd]>59?jd:c[kd]<0||c[kd]>59?kd:c[ld]<0||c[ld]>999?ld:-1,j(a)._overflowDayOfYear&&(fd>b||b>hd)&&(b=hd),j(a).overflow=b),a}function _(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function aa(a,b){var c=!0;return g(function(){return c&&(_(a+"\n"+(new Error).stack),c=!1),b.apply(this,arguments)},b)}function ba(a,b){od[a]||(_(b),od[a]=!0)}function ca(a){var b,c,d=a._i,e=pd.exec(d);if(e){for(j(a).iso=!0,b=0,c=qd.length;c>b;b++)if(qd[b][1].exec(d)){a._f=qd[b][0];break}for(b=0,c=rd.length;c>b;b++)if(rd[b][1].exec(d)){a._f+=(e[6]||" ")+rd[b][0];break}d.match(ad)&&(a._f+="Z"),va(a)}else a._isValid=!1}function da(b){var c=sd.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(ca(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}function ea(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function fa(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function ga(a){return ha(a)?366:365}function ha(a){return a%4===0&&a%100!==0||a%400===0}function ia(){return ha(this.year())}function ja(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=Da(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function ka(a){return ja(a,this._week.dow,this._week.doy).week}function la(){return this._week.dow}function ma(){return this._week.doy}function na(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function oa(a){var b=ja(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function pa(a,b,c,d,e){var f,g=6+e-d,h=fa(a,0,1+g),i=h.getUTCDay();return e>i&&(i+=7),c=null!=c?1*c:e,f=1+g+7*(b-1)-i+c,{year:f>0?a:a-1,dayOfYear:f>0?f:ga(a-1)+f}}function qa(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function ra(a,b,c){return null!=a?a:null!=b?b:c}function sa(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function ta(a){var b,c,d,e,f=[];if(!a._d){for(d=sa(a),a._w&&null==a._a[hd]&&null==a._a[gd]&&ua(a),a._dayOfYear&&(e=ra(a._a[fd],d[fd]),a._dayOfYear>ga(e)&&(j(a)._overflowDayOfYear=!0),c=fa(e,0,a._dayOfYear),a._a[gd]=c.getUTCMonth(),a._a[hd]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[id]&&0===a._a[jd]&&0===a._a[kd]&&0===a._a[ld]&&(a._nextDay=!0,a._a[id]=0),a._d=(a._useUTC?fa:ea).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[id]=24)}}function ua(a){var b,c,d,e,f,g,h;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=ra(b.GG,a._a[fd],ja(Da(),1,4).year),d=ra(b.W,1),e=ra(b.E,1)):(f=a._locale._week.dow,g=a._locale._week.doy,c=ra(b.gg,a._a[fd],ja(Da(),f,g).year),d=ra(b.w,1),null!=b.d?(e=b.d,f>e&&++d):e=null!=b.e?b.e+f:f),h=pa(c,d,e,g,f),a._a[fd]=h.year,a._dayOfYear=h.dayOfYear}function va(b){if(b._f===a.ISO_8601)return void ca(b);b._a=[],j(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,k=0;for(e=L(b._f,b._locale).match(Nc)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(O(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&j(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),k+=d.length),Qc[f]?(d?j(b).empty=!1:j(b).unusedTokens.push(f),S(f,d,b)):b._strict&&!d&&j(b).unusedTokens.push(f);j(b).charsLeftOver=i-k,h.length>0&&j(b).unusedInput.push(h),j(b).bigHour===!0&&b._a[id]<=12&&b._a[id]>0&&(j(b).bigHour=void 0),b._a[id]=wa(b._locale,b._a[id],b._meridiem),ta(b),$(b)}function wa(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function xa(a){var b,c,d,e,f;if(0===a._f.length)return j(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=m({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],va(b),k(b)&&(f+=j(b).charsLeftOver,f+=10*j(b).unusedTokens.length,j(b).score=f,(null==d||d>f)&&(d=f,c=b));g(a,c||b)}function ya(a){if(!a._d){var b=B(a._i);a._a=[b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],ta(a)}}function za(a){var b=new n($(Aa(a)));return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function Aa(a){var b=a._i,e=a._f;return a._locale=a._locale||y(a._l),null===b||void 0===e&&""===b?l({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),o(b)?new n($(b)):(c(e)?xa(a):e?va(a):d(b)?a._d=b:Ba(a),a))}function Ba(b){var f=b._i;void 0===f?b._d=new Date:d(f)?b._d=new Date(+f):"string"==typeof f?da(b):c(f)?(b._a=e(f.slice(0),function(a){return parseInt(a,10)}),ta(b)):"object"==typeof f?ya(b):"number"==typeof f?b._d=new Date(f):a.createFromInputFallback(b)}function Ca(a,b,c,d,e){var f={};return"boolean"==typeof c&&(d=c,c=void 0),f._isAMomentObject=!0,f._useUTC=f._isUTC=e,f._l=c,f._i=a,f._f=b,f._strict=d,za(f)}function Da(a,b,c,d){return Ca(a,b,c,d,!1)}function Ea(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return Da();for(d=b[0],e=1;e<b.length;++e)(!b[e].isValid()||b[e][a](d))&&(d=b[e]);return d}function Fa(){var a=[].slice.call(arguments,0);return Ea("isBefore",a)}function Ga(){var a=[].slice.call(arguments,0);return Ea("isAfter",a)}function Ha(a){var b=B(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=y(),this._bubble()}function Ia(a){return a instanceof Ha}function Ja(a,b){H(a,0,0,function(){var a=this.utcOffset(),c="+";return 0>a&&(a=-a,c="-"),c+G(~~(a/60),2)+b+G(~~a%60,2)})}function Ka(a){var b=(a||"").match(ad)||[],c=b[b.length-1]||[],d=(c+"").match(xd)||["-",0,0],e=+(60*d[1])+q(d[2]);return"+"===d[0]?e:-e}function La(b,c){var e,f;return c._isUTC?(e=c.clone(),f=(o(b)||d(b)?+b:+Da(b))-+e,e._d.setTime(+e._d+f),a.updateOffset(e,!1),e):Da(b).local()}function Ma(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Na(b,c){var d,e=this._offset||0;return null!=b?("string"==typeof b&&(b=Ka(b)),Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Ma(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?bb(this,Ya(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Ma(this)}function Oa(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Pa(a){return this.utcOffset(0,a)}function Qa(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Ma(this),"m")),this}function Ra(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(Ka(this._i)),this}function Sa(a){return a=a?Da(a).utcOffset():0,(this.utcOffset()-a)%60===0}function Ta(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ua(){if("undefined"!=typeof this._isDSTShifted)return this._isDSTShifted;var a={};if(m(a,this),a=Aa(a),a._a){var b=a._isUTC?h(a._a):Da(a._a);this._isDSTShifted=this.isValid()&&r(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Va(){return!this._isUTC}function Wa(){return this._isUTC}function Xa(){return this._isUTC&&0===this._offset}function Ya(a,b){var c,d,e,g=a,h=null;return Ia(a)?g={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(g={},b?g[b]=a:g.milliseconds=a):(h=yd.exec(a))?(c="-"===h[1]?-1:1,g={y:0,d:q(h[hd])*c,h:q(h[id])*c,m:q(h[jd])*c,s:q(h[kd])*c,ms:q(h[ld])*c}):(h=zd.exec(a))?(c="-"===h[1]?-1:1,g={y:Za(h[2],c),M:Za(h[3],c),d:Za(h[4],c),h:Za(h[5],c),m:Za(h[6],c),s:Za(h[7],c),w:Za(h[8],c)}):null==g?g={}:"object"==typeof g&&("from"in g||"to"in g)&&(e=_a(Da(g.from),Da(g.to)),g={},g.ms=e.milliseconds,g.M=e.months),d=new Ha(g),Ia(a)&&f(a,"_locale")&&(d._locale=a._locale),d}function Za(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function $a(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function _a(a,b){var c;return b=La(b,a),a.isBefore(b)?c=$a(a,b):(c=$a(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function ab(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(ba(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Ya(c,d),bb(this,e,a),this}}function bb(b,c,d,e){var f=c._milliseconds,g=c._days,h=c._months;e=null==e?!0:e,f&&b._d.setTime(+b._d+f*d),g&&E(b,"Date",D(b,"Date")+g*d),h&&X(b,D(b,"Month")+h*d),e&&a.updateOffset(b,g||h)}function cb(a,b){var c=a||Da(),d=La(c,this).startOf("day"),e=this.diff(d,"days",!0),f=-6>e?"sameElse":-1>e?"lastWeek":0>e?"lastDay":1>e?"sameDay":2>e?"nextDay":7>e?"nextWeek":"sameElse";return this.format(b&&b[f]||this.localeData().calendar(f,this,Da(c)))}function db(){return new n(this)}function eb(a,b){var c;return b=A("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=o(a)?a:Da(a),+this>+a):(c=o(a)?+a:+Da(a),c<+this.clone().startOf(b))}function fb(a,b){var c;return b=A("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=o(a)?a:Da(a),+a>+this):(c=o(a)?+a:+Da(a),+this.clone().endOf(b)<c)}function gb(a,b,c){return this.isAfter(a,c)&&this.isBefore(b,c)}function hb(a,b){var c;return b=A(b||"millisecond"),"millisecond"===b?(a=o(a)?a:Da(a),+this===+a):(c=+Da(a),+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))}function ib(a,b,c){var d,e,f=La(a,this),g=6e4*(f.utcOffset()-this.utcOffset());return b=A(b),"year"===b||"month"===b||"quarter"===b?(e=jb(this,f),"quarter"===b?e/=3:"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:p(e)}function jb(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)}function kb(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function lb(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():K(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):K(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function mb(b){var c=K(this,b||a.defaultFormat);return this.localeData().postformat(c)}function nb(a,b){return this.isValid()?Ya({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function ob(a){return this.from(Da(),a)}function pb(a,b){return this.isValid()?Ya({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function qb(a){return this.to(Da(),a)}function rb(a){var b;return void 0===a?this._locale._abbr:(b=y(a),null!=b&&(this._locale=b),this)}function sb(){return this._locale}function tb(a){switch(a=A(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function ub(a){return a=A(a),void 0===a||"millisecond"===a?this:this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms")}function vb(){return+this._d-6e4*(this._offset||0)}function wb(){return Math.floor(+this/1e3)}function xb(){return this._offset?new Date(+this):this._d}function yb(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function zb(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function Ab(){return k(this)}function Bb(){return g({},j(this))}function Cb(){return j(this).overflow}function Db(a,b){H(0,[a,a.length],0,b)}function Eb(a,b,c){return ja(Da([a,11,31+b-c]),b,c).week}function Fb(a){var b=ja(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")}function Gb(a){var b=ja(this,1,4).year;return null==a?b:this.add(a-b,"y")}function Hb(){return Eb(this.year(),1,4)}function Ib(){var a=this.localeData()._week;return Eb(this.year(),a.dow,a.doy)}function Jb(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Kb(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Lb(a){return this._weekdays[a.day()]}function Mb(a){return this._weekdaysShort[a.day()]}function Nb(a){return this._weekdaysMin[a.day()]}function Ob(a){var b,c,d;for(this._weekdaysParse=this._weekdaysParse||[],b=0;7>b;b++)if(this._weekdaysParse[b]||(c=Da([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b}function Pb(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Kb(a,this.localeData()),this.add(a-b,"d")):b}function Qb(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Rb(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)}function Sb(a,b){H(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function Tb(a,b){return b._meridiemParse}function Ub(a){return"p"===(a+"").toLowerCase().charAt(0)}function Vb(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Wb(a,b){b[ld]=q(1e3*("0."+a))}function Xb(){return this._isUTC?"UTC":""}function Yb(){return this._isUTC?"Coordinated Universal Time":""}function Zb(a){return Da(1e3*a)}function $b(){return Da.apply(null,arguments).parseZone()}function _b(a,b,c){var d=this._calendar[a];return"function"==typeof d?d.call(b,c):d}function ac(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function bc(){return this._invalidDate}function cc(a){return this._ordinal.replace("%d",a)}function dc(a){return a}function ec(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)}function fc(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)}function gc(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function hc(a,b,c,d){var e=y(),f=h().set(d,b);return e[c](f,a)}function ic(a,b,c,d,e){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return hc(a,b,c,e);var f,g=[];for(f=0;d>f;f++)g[f]=hc(a,f,c,e);return g}function jc(a,b){return ic(a,b,"months",12,"month")}function kc(a,b){return ic(a,b,"monthsShort",12,"month")}function lc(a,b){return ic(a,b,"weekdays",7,"day")}function mc(a,b){return ic(a,b,"weekdaysShort",7,"day")}function nc(a,b){return ic(a,b,"weekdaysMin",7,"day")}function oc(){var a=this._data;return this._milliseconds=Wd(this._milliseconds),this._days=Wd(this._days),this._months=Wd(this._months),a.milliseconds=Wd(a.milliseconds),a.seconds=Wd(a.seconds),a.minutes=Wd(a.minutes),a.hours=Wd(a.hours),a.months=Wd(a.months),a.years=Wd(a.years),this}function pc(a,b,c,d){var e=Ya(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function qc(a,b){return pc(this,a,b,1)}function rc(a,b){return pc(this,a,b,-1)}function sc(a){return 0>a?Math.floor(a):Math.ceil(a)}function tc(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;return f>=0&&g>=0&&h>=0||0>=f&&0>=g&&0>=h||(f+=864e5*sc(vc(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=p(f/1e3),i.seconds=a%60,b=p(a/60),i.minutes=b%60,c=p(b/60),i.hours=c%24,g+=p(c/24),e=p(uc(g)),h+=e,g-=sc(vc(e)),d=p(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function uc(a){return 4800*a/146097}function vc(a){return 146097*a/4800}function wc(a){var b,c,d=this._milliseconds;if(a=A(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+uc(b),"month"===a?c:c/12;switch(b=this._days+Math.round(vc(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function xc(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*q(this._months/12)}function yc(a){return function(){return this.as(a)}}function zc(a){return a=A(a),this[a+"s"]()}function Ac(a){return function(){return this._data[a]}}function Bc(){return p(this.days()/7)}function Cc(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function Dc(a,b,c){var d=Ya(a).abs(),e=ke(d.as("s")),f=ke(d.as("m")),g=ke(d.as("h")),h=ke(d.as("d")),i=ke(d.as("M")),j=ke(d.as("y")),k=e<le.s&&["s",e]||1===f&&["m"]||f<le.m&&["mm",f]||1===g&&["h"]||g<le.h&&["hh",g]||1===h&&["d"]||h<le.d&&["dd",h]||1===i&&["M"]||i<le.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,Cc.apply(null,k)}function Ec(a,b){return void 0===le[a]?!1:void 0===b?le[a]:(le[a]=b,!0)}function Fc(a){var b=this.localeData(),c=Dc(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function Gc(){var a,b,c,d=me(this._milliseconds)/1e3,e=me(this._days),f=me(this._months);a=p(d/60),b=p(a/60),d%=60,a%=60,c=p(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(0>m?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var Hc,Ic,Jc=a.momentProperties=[],Kc=!1,Lc={},Mc={},Nc=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Oc=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Pc={},Qc={},Rc=/\d/,Sc=/\d\d/,Tc=/\d{3}/,Uc=/\d{4}/,Vc=/[+-]?\d{6}/,Wc=/\d\d?/,Xc=/\d{1,3}/,Yc=/\d{1,4}/,Zc=/[+-]?\d{1,6}/,$c=/\d+/,_c=/[+-]?\d+/,ad=/Z|[+-]\d\d:?\d\d/gi,bd=/[+-]?\d+(\.\d{1,3})?/,cd=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,dd={},ed={},fd=0,gd=1,hd=2,id=3,jd=4,kd=5,ld=6;H("M",["MM",2],"Mo",function(){return this.month()+1}),H("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),H("MMMM",0,0,function(a){return this.localeData().months(this,a)}),z("month","M"),N("M",Wc),N("MM",Wc,Sc),N("MMM",cd),N("MMMM",cd),Q(["M","MM"],function(a,b){b[gd]=q(a)-1}),Q(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[gd]=e:j(c).invalidMonth=a});var md="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),nd="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),od={};a.suppressDeprecationWarnings=!1;var pd=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,qd=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],rd=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],sd=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=aa("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),H(0,["YY",2],0,function(){return this.year()%100}),H(0,["YYYY",4],0,"year"),H(0,["YYYYY",5],0,"year"),H(0,["YYYYYY",6,!0],0,"year"),z("year","y"),N("Y",_c),N("YY",Wc,Sc),N("YYYY",Yc,Uc),N("YYYYY",Zc,Vc),N("YYYYYY",Zc,Vc),Q(["YYYYY","YYYYYY"],fd),Q("YYYY",function(b,c){c[fd]=2===b.length?a.parseTwoDigitYear(b):q(b)}),Q("YY",function(b,c){c[fd]=a.parseTwoDigitYear(b)}),a.parseTwoDigitYear=function(a){return q(a)+(q(a)>68?1900:2e3)};var td=C("FullYear",!1);H("w",["ww",2],"wo","week"),H("W",["WW",2],"Wo","isoWeek"),z("week","w"),z("isoWeek","W"),N("w",Wc),N("ww",Wc,Sc),N("W",Wc),N("WW",Wc,Sc),R(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=q(a)});var ud={dow:0,doy:6};H("DDD",["DDDD",3],"DDDo","dayOfYear"),z("dayOfYear","DDD"),N("DDD",Xc),N("DDDD",Tc),Q(["DDD","DDDD"],function(a,b,c){c._dayOfYear=q(a)}),a.ISO_8601=function(){};var vd=aa("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var a=Da.apply(null,arguments);return this>a?this:a}),wd=aa("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var a=Da.apply(null,arguments);return a>this?this:a});Ja("Z",":"),Ja("ZZ",""),N("Z",ad),N("ZZ",ad),Q(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Ka(a)});var xd=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var yd=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,zd=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;Ya.fn=Ha.prototype;var Ad=ab(1,"add"),Bd=ab(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";var Cd=aa("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});H(0,["gg",2],0,function(){return this.weekYear()%100}),H(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Db("gggg","weekYear"),Db("ggggg","weekYear"),Db("GGGG","isoWeekYear"),Db("GGGGG","isoWeekYear"),z("weekYear","gg"),z("isoWeekYear","GG"),N("G",_c),N("g",_c),N("GG",Wc,Sc),N("gg",Wc,Sc),N("GGGG",Yc,Uc),N("gggg",Yc,Uc),N("GGGGG",Zc,Vc),N("ggggg",Zc,Vc),R(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=q(a)}),R(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),H("Q",0,0,"quarter"),z("quarter","Q"),N("Q",Rc),Q("Q",function(a,b){b[gd]=3*(q(a)-1)}),H("D",["DD",2],"Do","date"),z("date","D"),N("D",Wc),N("DD",Wc,Sc),N("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),Q(["D","DD"],hd),Q("Do",function(a,b){b[hd]=q(a.match(Wc)[0],10)});var Dd=C("Date",!0);H("d",0,"do","day"),H("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),H("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),H("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),H("e",0,0,"weekday"),H("E",0,0,"isoWeekday"),z("day","d"),z("weekday","e"),z("isoWeekday","E"),N("d",Wc),N("e",Wc),N("E",Wc),N("dd",cd),N("ddd",cd),N("dddd",cd),R(["dd","ddd","dddd"],function(a,b,c){var d=c._locale.weekdaysParse(a);null!=d?b.d=d:j(c).invalidWeekday=a}),R(["d","e","E"],function(a,b,c,d){b[d]=q(a)});var Ed="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Fd="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Gd="Su_Mo_Tu_We_Th_Fr_Sa".split("_");H("H",["HH",2],0,"hour"),H("h",["hh",2],0,function(){return this.hours()%12||12}),Sb("a",!0),Sb("A",!1),z("hour","h"),N("a",Tb),N("A",Tb),N("H",Wc),N("h",Wc),N("HH",Wc,Sc),N("hh",Wc,Sc),Q(["H","HH"],id),Q(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),Q(["h","hh"],function(a,b,c){b[id]=q(a),j(c).bigHour=!0});var Hd=/[ap]\.?m?\.?/i,Id=C("Hours",!0);H("m",["mm",2],0,"minute"),z("minute","m"),N("m",Wc),N("mm",Wc,Sc),Q(["m","mm"],jd);var Jd=C("Minutes",!1);H("s",["ss",2],0,"second"),z("second","s"),N("s",Wc),N("ss",Wc,Sc),Q(["s","ss"],kd);var Kd=C("Seconds",!1);H("S",0,0,function(){return~~(this.millisecond()/100)}),H(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),H(0,["SSS",3],0,"millisecond"),H(0,["SSSS",4],0,function(){return 10*this.millisecond()}),H(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),H(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),H(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),H(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),H(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),z("millisecond","ms"),N("S",Xc,Rc),N("SS",Xc,Sc),N("SSS",Xc,Tc);var Ld;for(Ld="SSSS";Ld.length<=9;Ld+="S")N(Ld,$c);for(Ld="S";Ld.length<=9;Ld+="S")Q(Ld,Wb);var Md=C("Milliseconds",!1);H("z",0,0,"zoneAbbr"),H("zz",0,0,"zoneName");var Nd=n.prototype;Nd.add=Ad,Nd.calendar=cb,Nd.clone=db,Nd.diff=ib,Nd.endOf=ub,Nd.format=mb,Nd.from=nb,Nd.fromNow=ob,Nd.to=pb,Nd.toNow=qb,Nd.get=F,Nd.invalidAt=Cb,Nd.isAfter=eb,Nd.isBefore=fb,Nd.isBetween=gb,Nd.isSame=hb,Nd.isValid=Ab,Nd.lang=Cd,Nd.locale=rb,Nd.localeData=sb,Nd.max=wd,Nd.min=vd,Nd.parsingFlags=Bb,Nd.set=F,Nd.startOf=tb,Nd.subtract=Bd,Nd.toArray=yb,Nd.toObject=zb,Nd.toDate=xb,Nd.toISOString=lb,Nd.toJSON=lb,Nd.toString=kb,Nd.unix=wb,Nd.valueOf=vb,Nd.year=td,Nd.isLeapYear=ia,Nd.weekYear=Fb,Nd.isoWeekYear=Gb,Nd.quarter=Nd.quarters=Jb,Nd.month=Y,Nd.daysInMonth=Z,Nd.week=Nd.weeks=na,Nd.isoWeek=Nd.isoWeeks=oa,Nd.weeksInYear=Ib,Nd.isoWeeksInYear=Hb,Nd.date=Dd,Nd.day=Nd.days=Pb,Nd.weekday=Qb,Nd.isoWeekday=Rb,Nd.dayOfYear=qa,Nd.hour=Nd.hours=Id,Nd.minute=Nd.minutes=Jd,Nd.second=Nd.seconds=Kd,
Nd.millisecond=Nd.milliseconds=Md,Nd.utcOffset=Na,Nd.utc=Pa,Nd.local=Qa,Nd.parseZone=Ra,Nd.hasAlignedHourOffset=Sa,Nd.isDST=Ta,Nd.isDSTShifted=Ua,Nd.isLocal=Va,Nd.isUtcOffset=Wa,Nd.isUtc=Xa,Nd.isUTC=Xa,Nd.zoneAbbr=Xb,Nd.zoneName=Yb,Nd.dates=aa("dates accessor is deprecated. Use date instead.",Dd),Nd.months=aa("months accessor is deprecated. Use month instead",Y),Nd.years=aa("years accessor is deprecated. Use year instead",td),Nd.zone=aa("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",Oa);var Od=Nd,Pd={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Qd={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Rd="Invalid date",Sd="%d",Td=/\d{1,2}/,Ud={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Vd=s.prototype;Vd._calendar=Pd,Vd.calendar=_b,Vd._longDateFormat=Qd,Vd.longDateFormat=ac,Vd._invalidDate=Rd,Vd.invalidDate=bc,Vd._ordinal=Sd,Vd.ordinal=cc,Vd._ordinalParse=Td,Vd.preparse=dc,Vd.postformat=dc,Vd._relativeTime=Ud,Vd.relativeTime=ec,Vd.pastFuture=fc,Vd.set=gc,Vd.months=U,Vd._months=md,Vd.monthsShort=V,Vd._monthsShort=nd,Vd.monthsParse=W,Vd.week=ka,Vd._week=ud,Vd.firstDayOfYear=ma,Vd.firstDayOfWeek=la,Vd.weekdays=Lb,Vd._weekdays=Ed,Vd.weekdaysMin=Nb,Vd._weekdaysMin=Gd,Vd.weekdaysShort=Mb,Vd._weekdaysShort=Fd,Vd.weekdaysParse=Ob,Vd.isPM=Ub,Vd._meridiemParse=Hd,Vd.meridiem=Vb,w("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===q(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=aa("moment.lang is deprecated. Use moment.locale instead.",w),a.langData=aa("moment.langData is deprecated. Use moment.localeData instead.",y);var Wd=Math.abs,Xd=yc("ms"),Yd=yc("s"),Zd=yc("m"),$d=yc("h"),_d=yc("d"),ae=yc("w"),be=yc("M"),ce=yc("y"),de=Ac("milliseconds"),ee=Ac("seconds"),fe=Ac("minutes"),ge=Ac("hours"),he=Ac("days"),ie=Ac("months"),je=Ac("years"),ke=Math.round,le={s:45,m:45,h:22,d:26,M:11},me=Math.abs,ne=Ha.prototype;ne.abs=oc,ne.add=qc,ne.subtract=rc,ne.as=wc,ne.asMilliseconds=Xd,ne.asSeconds=Yd,ne.asMinutes=Zd,ne.asHours=$d,ne.asDays=_d,ne.asWeeks=ae,ne.asMonths=be,ne.asYears=ce,ne.valueOf=xc,ne._bubble=tc,ne.get=zc,ne.milliseconds=de,ne.seconds=ee,ne.minutes=fe,ne.hours=ge,ne.days=he,ne.weeks=Bc,ne.months=ie,ne.years=je,ne.humanize=Fc,ne.toISOString=Gc,ne.toString=Gc,ne.toJSON=Gc,ne.locale=rb,ne.localeData=sb,ne.toIsoString=aa("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Gc),ne.lang=Cd,H("X",0,0,"unix"),H("x",0,0,"valueOf"),N("x",_c),N("X",bd),Q("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),Q("x",function(a,b,c){c._d=new Date(q(a))}),a.version="2.10.6",b(Da),a.fn=Od,a.min=Fa,a.max=Ga,a.utc=h,a.unix=Zb,a.months=jc,a.isDate=d,a.locale=w,a.invalid=l,a.duration=Ya,a.isMoment=o,a.weekdays=lc,a.parseZone=$b,a.localeData=y,a.isDuration=Ia,a.monthsShort=kc,a.weekdaysMin=nc,a.defineLocale=x,a.weekdaysShort=mc,a.normalizeUnits=A,a.relativeTimeThreshold=Ec;var oe=a;return oe});
!function(a,b){"function"==typeof define&&(define.amd||define.cmd)?define(function(){return b(a)}):b(a,!0)}(this,function(a,b){function c(b,c,d){a.WeixinJSBridge?WeixinJSBridge.invoke(b,e(c),function(a){g(b,a,d)}):j(b,d)}function d(b,c,d){a.WeixinJSBridge?WeixinJSBridge.on(b,function(a){d&&d.trigger&&d.trigger(a),g(b,a,c)}):d?j(b,d):j(b,c)}function e(a){return a=a||{},a.appId=z.appId,a.verifyAppId=z.appId,a.verifySignType="sha1",a.verifyTimestamp=z.timestamp+"",a.verifyNonceStr=z.nonceStr,a.verifySignature=z.signature,a}function f(a){return{timeStamp:a.timestamp+"",nonceStr:a.nonceStr,"package":a.package,paySign:a.paySign,signType:a.signType||"SHA1"}}function g(a,b,c){var d,e,f;switch(delete b.err_code,delete b.err_desc,delete b.err_detail,d=b.errMsg,d||(d=b.err_msg,delete b.err_msg,d=h(a,d,c),b.errMsg=d),c=c||{},c._complete&&(c._complete(b),delete c._complete),d=b.errMsg||"",z.debug&&!c.isInnerInvoke&&alert(JSON.stringify(b)),e=d.indexOf(":"),f=d.substring(e+1)){case"ok":c.success&&c.success(b);break;case"cancel":c.cancel&&c.cancel(b);break;default:c.fail&&c.fail(b)}c.complete&&c.complete(b)}function h(a,b){var d,e,f,g;if(b){switch(d=b.indexOf(":"),a){case o.config:e="config";break;case o.openProductSpecificView:e="openProductSpecificView";break;default:e=b.substring(0,d),e=e.replace(/_/g," "),e=e.replace(/\b\w+\b/g,function(a){return a.substring(0,1).toUpperCase()+a.substring(1)}),e=e.substring(0,1).toLowerCase()+e.substring(1),e=e.replace(/ /g,""),-1!=e.indexOf("Wcpay")&&(e=e.replace("Wcpay","WCPay")),f=p[e],f&&(e=f)}g=b.substring(d+1),"confirm"==g&&(g="ok"),"failed"==g&&(g="fail"),-1!=g.indexOf("failed_")&&(g=g.substring(7)),-1!=g.indexOf("fail_")&&(g=g.substring(5)),g=g.replace(/_/g," "),g=g.toLowerCase(),("access denied"==g||"no permission to execute"==g)&&(g="permission denied"),"config"==e&&"function not exist"==g&&(g="ok"),b=e+":"+g}return b}function i(a){var b,c,d,e;if(a){for(b=0,c=a.length;c>b;++b)d=a[b],e=o[d],e&&(a[b]=e);return a}}function j(a,b){if(!(!z.debug||b&&b.isInnerInvoke)){var c=p[a];c&&(a=c),b&&b._complete&&delete b._complete,console.log('"'+a+'",',b||"")}}function k(){if(!("6.0.2">w||y.systemType<0)){var b=new Image;y.appId=z.appId,y.initTime=x.initEndTime-x.initStartTime,y.preVerifyTime=x.preVerifyEndTime-x.preVerifyStartTime,C.getNetworkType({isInnerInvoke:!0,success:function(a){y.networkType=a.networkType;var c="https://open.weixin.qq.com/sdk/report?v="+y.version+"&o="+y.isPreVerifyOk+"&s="+y.systemType+"&c="+y.clientVersion+"&a="+y.appId+"&n="+y.networkType+"&i="+y.initTime+"&p="+y.preVerifyTime+"&u="+y.url;b.src=c}})}}function l(){return(new Date).getTime()}function m(b){t&&(a.WeixinJSBridge?b():q.addEventListener&&q.addEventListener("WeixinJSBridgeReady",b,!1))}function n(){C.invoke||(C.invoke=function(b,c,d){a.WeixinJSBridge&&WeixinJSBridge.invoke(b,e(c),d)},C.on=function(b,c){a.WeixinJSBridge&&WeixinJSBridge.on(b,c)})}var o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;if(!a.jWeixin)return o={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest"},p=function(){var b,a={};for(b in o)a[o[b]]=b;return a}(),q=a.document,r=q.title,s=navigator.userAgent.toLowerCase(),t=-1!=s.indexOf("micromessenger"),u=-1!=s.indexOf("android"),v=-1!=s.indexOf("iphone")||-1!=s.indexOf("ipad"),w=function(){var a=s.match(/micromessenger\/(\d+\.\d+\.\d+)/)||s.match(/micromessenger\/(\d+\.\d+)/);return a?a[1]:""}(),x={initStartTime:l(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},y={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:v?1:u?2:-1,clientVersion:w,url:encodeURIComponent(location.href)},z={},A={_completes:[]},B={state:0,res:{}},m(function(){x.initEndTime=l()}),C={config:function(a){z=a,j("config",a);var b=z.check===!1?!1:!0;m(function(){var a,d,e;if(b)c(o.config,{verifyJsApiList:i(z.jsApiList)},function(){A._complete=function(a){x.preVerifyEndTime=l(),B.state=1,B.res=a},A.success=function(){y.isPreVerifyOk=0},A.fail=function(a){A._fail?A._fail(a):B.state=-1};var a=A._completes;return a.push(function(){z.debug||k()}),A.complete=function(){for(var c=0,d=a.length;d>c;++c)a[c]();A._completes=[]},A}()),x.preVerifyStartTime=l();else{for(B.state=1,a=A._completes,d=0,e=a.length;e>d;++d)a[d]();A._completes=[]}}),z.beta&&n()},ready:function(a){0!=B.state?a():(A._completes.push(a),!t&&z.debug&&a())},error:function(a){"6.0.2">w||(-1==B.state?a(B.res):A._fail=a)},checkJsApi:function(a){var b=function(a){var c,d,b=a.checkResult;for(c in b)d=p[c],d&&(b[d]=b[c],delete b[c]);return a};c("checkJsApi",{jsApiList:i(a.jsApiList)},function(){return a._complete=function(a){if(u){var c=a.checkResult;c&&(a.checkResult=JSON.parse(c))}a=b(a)},a}())},onMenuShareTimeline:function(a){d(o.onMenuShareTimeline,{complete:function(){c("shareTimeline",{title:a.title||r,desc:a.title||r,img_url:a.imgUrl||"",link:a.link||location.href},a)}},a)},onMenuShareAppMessage:function(a){d(o.onMenuShareAppMessage,{complete:function(){c("sendAppMessage",{title:a.title||r,desc:a.desc||"",link:a.link||location.href,img_url:a.imgUrl||"",type:a.type||"link",data_url:a.dataUrl||""},a)}},a)},onMenuShareQQ:function(a){d(o.onMenuShareQQ,{complete:function(){c("shareQQ",{title:a.title||r,desc:a.desc||"",img_url:a.imgUrl||"",link:a.link||location.href},a)}},a)},onMenuShareWeibo:function(a){d(o.onMenuShareWeibo,{complete:function(){c("shareWeiboApp",{title:a.title||r,desc:a.desc||"",img_url:a.imgUrl||"",link:a.link||location.href},a)}},a)},onMenuShareQZone:function(a){d(o.onMenuShareQZone,{complete:function(){c("shareQZone",{title:a.title||r,desc:a.desc||"",img_url:a.imgUrl||"",link:a.link||location.href},a)}},a)},startRecord:function(a){c("startRecord",{},a)},stopRecord:function(a){c("stopRecord",{},a)},onVoiceRecordEnd:function(a){d("onVoiceRecordEnd",a)},playVoice:function(a){c("playVoice",{localId:a.localId},a)},pauseVoice:function(a){c("pauseVoice",{localId:a.localId},a)},stopVoice:function(a){c("stopVoice",{localId:a.localId},a)},onVoicePlayEnd:function(a){d("onVoicePlayEnd",a)},uploadVoice:function(a){c("uploadVoice",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},downloadVoice:function(a){c("downloadVoice",{serverId:a.serverId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},translateVoice:function(a){c("translateVoice",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},chooseImage:function(a){c("chooseImage",{scene:"1|2",count:a.count||9,sizeType:a.sizeType||["original","compressed"],sourceType:a.sourceType||["album","camera"]},function(){return a._complete=function(a){if(u){var b=a.localIds;b&&(a.localIds=JSON.parse(b))}},a}())},previewImage:function(a){c(o.previewImage,{current:a.current,urls:a.urls},a)},uploadImage:function(a){c("uploadImage",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},downloadImage:function(a){c("downloadImage",{serverId:a.serverId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},getNetworkType:function(a){var b=function(a){var c,d,e,b=a.errMsg;if(a.errMsg="getNetworkType:ok",c=a.subtype,delete a.subtype,c)a.networkType=c;else switch(d=b.indexOf(":"),e=b.substring(d+1)){case"wifi":case"edge":case"wwan":a.networkType=e;break;default:a.errMsg="getNetworkType:fail"}return a};c("getNetworkType",{},function(){return a._complete=function(a){a=b(a)},a}())},openLocation:function(a){c("openLocation",{latitude:a.latitude,longitude:a.longitude,name:a.name||"",address:a.address||"",scale:a.scale||28,infoUrl:a.infoUrl||""},a)},getLocation:function(a){a=a||{},c(o.getLocation,{type:a.type||"wgs84"},function(){return a._complete=function(a){delete a.type},a}())},hideOptionMenu:function(a){c("hideOptionMenu",{},a)},showOptionMenu:function(a){c("showOptionMenu",{},a)},closeWindow:function(a){a=a||{},c("closeWindow",{immediate_close:a.immediateClose||0},a)},hideMenuItems:function(a){c("hideMenuItems",{menuList:a.menuList},a)},showMenuItems:function(a){c("showMenuItems",{menuList:a.menuList},a)},hideAllNonBaseMenuItem:function(a){c("hideAllNonBaseMenuItem",{},a)},showAllNonBaseMenuItem:function(a){c("showAllNonBaseMenuItem",{},a)},scanQRCode:function(a){a=a||{},c("scanQRCode",{needResult:a.needResult||0,scanType:a.scanType||["qrCode","barCode"]},function(){return a._complete=function(a){var b,c;v&&(b=a.resultStr,b&&(c=JSON.parse(b),a.resultStr=c&&c.scan_code&&c.scan_code.scan_result))},a}())},openProductSpecificView:function(a){c(o.openProductSpecificView,{pid:a.productId,view_type:a.viewType||0},a)},addCard:function(a){var e,f,g,h,b=a.cardList,d=[];for(e=0,f=b.length;f>e;++e)g=b[e],h={card_id:g.cardId,card_ext:g.cardExt},d.push(h);c(o.addCard,{card_list:d},function(){return a._complete=function(a){var c,d,e,b=a.card_list;if(b){for(b=JSON.parse(b),c=0,d=b.length;d>c;++c)e=b[c],e.cardId=e.card_id,e.cardExt=e.card_ext,e.isSuccess=e.is_succ?!0:!1,delete e.card_id,delete e.card_ext,delete e.is_succ;a.cardList=b,delete a.card_list}},a}())},chooseCard:function(a){c("chooseCard",{app_id:z.appId,location_id:a.shopId||"",sign_type:a.signType||"SHA1",card_id:a.cardId||"",card_type:a.cardType||"",card_sign:a.cardSign,time_stamp:a.timestamp+"",nonce_str:a.nonceStr},function(){return a._complete=function(a){a.cardList=a.choose_card_info,delete a.choose_card_info},a}())},openCard:function(a){var e,f,g,h,b=a.cardList,d=[];for(e=0,f=b.length;f>e;++e)g=b[e],h={card_id:g.cardId,code:g.code},d.push(h);c(o.openCard,{card_list:d},a)},chooseWXPay:function(a){c(o.chooseWXPay,f(a),a)}},b&&(a.wx=a.jWeixin=C),C});
/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */
var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function _(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function M(t){return D(t)&&!_(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(M(i[e])||A(i[e]))?(M(i[e])&&!M(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),M(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return $(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=_,n.isArray=A,n.isPlainObject=M,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(R(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):R(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!$(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){X(this,t)},this)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[C(t)]||r.getPropertyValue(t);if(A(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[C(e)]||r.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return W(this,"");i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),W(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?_(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&&0===t.active++&&p(e,null,"ajaxStart")}function m(e){e.global&&!--t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),x(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),x(e,n,i)}function x(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function S(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function C(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?C(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?v(f[0],l,i,r):y(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===o[i]&&(o[i]=t.ajaxSettings[i]);d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),j(o);var u=o.dataType,f=/\?.+=\?/.test(o.url);if(f&&(u="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==u)return f||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s);var C,h=o.accepts[u],p={},m=function(t,e){p[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),T=S.setRequestHeader;if(s&&s.promise(S),o.crossDomain||m("X-Requested-With","XMLHttpRequest"),m("Accept",h||"*/*"),(h=o.mimeType||h)&&(h.indexOf(",")>-1&&(h=h.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(h)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&m("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(r in o.headers)m(r,o.headers[r]);if(S.setRequestHeader=m,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=b,clearTimeout(C);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==x){u=u||w(o.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=S.responseXML:"json"==u&&(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?y(n,"parsererror",S,o,s):v(e,S,o,s)}else y(S.statusText||null,S.status?"error":"abort",S,o,s)}},g(S,o)===!1)return S.abort(),y(null,"abort",S,o,s),S;if(o.xhrFields)for(r in o.xhrFields)S[r]=o.xhrFields[r];var N="async"in o?o.async:!0;S.open(o.type,o.url,N,o.username,o.password);for(r in p)T.apply(S,p[r]);return o.timeout>0&&(C=setTimeout(function(){S.onreadystatechange=b,S.abort(),y(null,"timeout",S,o,s)},o.timeout)),S.send(o.data?o.data:null),S},t.get=function(){return t.ajax(S.apply(null,arguments))},t.post=function(){var e=S.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=S.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=S(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},C(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);
angular.module("YJA",[
    "templates-main",//在打包发布的时候，需要引入打包好的模板模块
	"ionic",
	"controllers.yja",
	"controllers.coachList",
    "controllers.coachDetile",
    "controllers.reloadr",
    "controllers.register",
    "controllers.loginTemp",
    "controllers.orderTemp",
    "controllers.person",
    "controllers.judgeMent",
    "controllers.orderMuch",
    "controllers.code",
    "controllers.fixName",
    "directives.coachList",
    "directives.todayOrder",
    "directives.orderMuch",
    "directives.orderList",
	"services.common"
])
.config(function(
	$stateProvider,
	$locationProvider,
	$urlRouterProvider
){   
	$stateProvider
		.state('yja',{
			url:"/yja",
			templateUrl:"template/menu.html",
			controller:"yja"
		})
		.state('yja.coachList',{
            url:"/coachList",
            views:{
                'menuContent':{
                    templateUrl:"template/coachList.html",
                    controller:"coachList"
                }
            }
        })
        .state('yja.reload',{
            url:"/reload",
            views:{
                'menuContent':{
                    templateUrl:"template/reload.html",
                    controller:"reloadr"
                }
            }
        })
        .state('yja.coachDetile',{
            url:"/coachDetile/:coachId",
            views:{
                'menuContent':{
                    templateUrl:"template/coachDetile.html",
                    controller:"coachDetile"
                }
            }
        })
        .state('yja.register',{
            url:'/register',
            views:{
                'menuContent':{
                    templateUrl:'template/register.html',
                    controller:'register'
                }
            }
        })
         .state('yja.login',{
            url:'/login',
            views:{
                'menuContent':{
                    templateUrl:'template/login.html',
                    controller:'loginTemp'
                }
            }
        })
        .state('yja.order',{
            url:'/order',
            views:{
                'menuContent':{
                    templateUrl:'template/orderTemp.html',
                    controller:'orderTemp'
                }
            }
        })
        .state('yja.person',{
            url:'/person',
            views:{
                'menuContent':{
                    templateUrl:'template/person.html',
                    controller:'person'
                }
            }
        })
        .state('yja.fixName',{
            url:'/fixName',
            views:{
                'menuContent':{
                    templateUrl:'template/fixName.html',
                    controller:'fixName'
                }
            }
        })
        .state('yja.code',{
            url:'/code',
            views:{
                'menuContent':{
                    templateUrl:'template/code.html',
                    controller:'code'
                }
            }
        })
        .state('yja.judgeMent',{
            url:'/judgeMent',
            views:{
                'menuContent':{
                    templateUrl:'template/judgeMent.html',
                    controller:'judgeMent'
                }
            }
        })
        .state('yja.orderMuch',{
            url:'/orderMuch',
            views:{
                'menuContent':{
                    templateUrl:'template/orderMuch.html',
                    controller:'orderMuch'
                }
            }
        })
		// $urlRouterProvider.otherwise("/yja/homePage");
		$locationProvider.html5Mode(true);
}) 

var environment = 'release';//开发状态是dev,发布状态是release
if(environment === 'dev'){
	window.BASE_URL = '/dev';
}else if(environment === 'release'){
	window.BASE_URL = "/release";
}else{
	window.BASE_URL = "";
}
angular.module("controllers.yja",[])
.controller("yja",function(
	// $scope,
	// $ionicPopup,
	// $reload,
	// $window
){
	// var getQueryStr=function(callback){
	// 	var reg = new RegExp("(^|&)" + callback + "=([^&]*)(&|$)", "i");
	//     var r = window.location.search.replace(/\?/g, "&").substr(1).match(reg);
	//     if (r != null){
	//     	return (r[2]);
	//     }else{
	//     	return null;
	//     } 
	// }
	// var callbackEncode=getQueryStr("callback");
	// var callback=decodeURIComponent(callbackEncode);
	// $reload.reload(function(err,result){
	// 	if(err){
	// 		$ionicPopup.alert({
	// 			title:"sorry,系统出错"
	// 		})
	// 	}else{
	// 		if(result && result .success == true){
	// 			var openId=result.userInfo.openId;
	// 			if(!openId){
	// 				$window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx49a9db1095de4f65&redirect_uri=http%3a%2f%2fparty.idrv.com.cn%2fyja%2fcode&response_type=code&scope=snsapi_userinfo&state=wxBind_._"+callback+"#wechat_redirect";
	// 			}else{
	// 				$window.location.href=callback;
	// 			}
	// 		}else{
	// 			alert("login")
	// 			$window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx49a9db1095de4f65&redirect_uri=http%3a%2f%2fparty.idrv.com.cn%2fyja%2fcode&response_type=code&scope=snsapi_userinfo&state=wxLogin_._"+callback+"#wechat_redirect";
	// 		}
	// 	}
	// })
})
angular.module("controllers.coachDetile",[])
.controller("coachDetile",function(
	$scope,
	$state,
	$ionicPopup,
	$getDetile,
	$sce,
	$bindCoach,
	$window,
	$getSignal
){
	var coachId=$state.params.coachId;
	$scope.coach={avator:"",url:""};
	$getDetile.getDetile(coachId,function(err,result){
		if (err){
			$ionicPopup.alert({
				title:"sorry,访问出错"
			});
		}else{
			if(result && result.success == true){
				$scope.coach=result.coach;
				if (result.coach.avator){
					$scope.coach.avator= result.coach.avator.large;
				}else{
					$scope.coach.avator="http://7xjnv4.com2.z0.glb.qiniucdn.com/default_avator.png_large";
				}
				// $scope.videoList=$scope.coach.video;
				if (result.coach.applyCoachState == "agree") {
					$scope.agreeMent = true;
				};
				if (result.coach.birthday) {
					$scope.coachBirth=true;
					var nianling=result.coach.birthday;
					var birth=nianling.substr(0,4);
					var d = new Date();
					var year=d.getFullYear();
					$scope.coach.birth=year-birth+1;
				};
				if(result.coach.coachLisenceDate){
					$scope.coachLisenceDate =true;
					var coachLisenceDate= result.coach.coachLisenceDate;
					var lisecceData=coachLisenceDate.substr(0,4);
					var d = new Date();
					var year=d.getFullYear();
					$scope.coach.coachLisenceDate=year-lisecceData+1;
				}
				if(result.coach.teachType == "1"){
					$scope.coach.teachType ="一车多人";
				}else{
					$scope.coach.teachType ="一车一人";
				}
				if (result.coach.phone){
					$scope.coachPhone=true;
					$scope.coach.phone= result.coach.phone;
				}
				if($scope.coach.voice && $scope.coach.voice.length){
					$scope.audioShow = true;
					$scope.coach.voice.url = $sce.trustAsResourceUrl($scope.coach.voice[0].url);
				}
			}else if(result && result.errorInfo ){
				var errorInfo=result.errorInfo;
	 			$ionicPopup.alert({
				    title: errorInfo
				});
	 		}
		};
	})
	//分享功能
	$scope.bindCoach=function(){
		$bindCoach.bindCoach(coachId,function(err,result){
			if (err){
				$ionicPopup.alert({
				    title: "sorry,访问出错"
				});
			}else{
				if(result && result.success == true){
					$ionicPopup.alert({
					    title: "申请成功,请等待教练同意"
					}).then(function(result){
						if(result == true){
							$window.location.href="/yja/person";
						}
					})
				}else if(result && result.success == false){
					var errorInfo=result.errorInfo;
					$ionicPopup.alert({
					    title:errorInfo
					});
				}
			}
		})
	}
	var sUserAgent = navigator.userAgent.toLowerCase();
	if(sUserAgent.indexOf("ipad") !== -1 ||sUserAgent.indexOf("iphone") !== -1){
		$scope.coach.url = location.href.split("#")[0];
	}else{
		$scope.coach.url=location.href.split("#")[0];
	}
	var url=$scope.coach.url;
	$getSignal.getSignal(url,function(err,result){
		if (err){
			$ionicPopup.alert({
			    title: "sorry,系统报错"
			});
		}else{
			if(result && result.success == true ){
				var timestamp=result.result.timestamp,
					nonceStr=result.result.noncestr;
					signature=result.result.signature;
				var avator=$scope.coach.avator;
				if(!avator){

				}else{
					avator="http://7xjnv4.com2.z0.glb.qiniucdn.com/default_avator.png_large";
				}
				wx.config({
				    debug: false, 
				    appId: 'wx8bbeb53d26dbe214', 
				    timestamp:timestamp, 
				    nonceStr: nonceStr,
				    signature:signature,
				    jsApiList: [
				    	"onMenuShareTimeline",
				    	"onMenuShareAppMessage"
				    ] 
				});
				wx.ready(function(){
					wx.onMenuShareTimeline({
				        title: '强烈推荐我的教练', // 分享标题
					    link: 'http://party.idrv.com.cn/coachDetaile?id='+coachId, // 分享链接  寻找教练webview
					    imgUrl: avator, // 分享图标
				        success: function () { 
				            $window.location.href="/yja/person";
				        },
				        cancel: function () { 
				            // 用户取消分享后执行的回调函数
				        }
				    });
				    wx.onMenuShareAppMessage({
				        title: '强烈推荐我的教练', // 分享标题
					    link: 'http://party.idrv.com.cn/coachDetaile?id='+coachId, // 分享链接
					    imgUrl: avator, // 分享图标
				        type: '', // 分享类型,music、video或link，不填默认为link
				        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
				        success: function (){ 
				            $window.location.href="/yja/person";
				        },
				        cancel: function (){ 
				            // 用户取消分享后执行的回调函数
				        }
				    });
				})
			}else if(result && result.errorInfo){
				var errorInfo=result.errorInfo;
	 			$ionicPopup.alert({
				    title: errorInfo
				});
	 		}
		};
	})
})
angular.module("controllers.coachList",[])
.controller("coachList",function(
	$scope,
	$getCoach,
	$ionicPopup,
	$getSignal,
	$getArea,
	$http,
	$fifterCoach,
	$timeout
){

	$scope.coach={key:"",lat:"",long:"",filterArea:"",filterNone:"",filterModel:"",url:"",avator:""};
	var cityId=1930;
	$getArea.getArea(cityId,function(err,result){
		if(err){
			$ionicPopup.alert({
			    title: 'sorry，系统出错'
			});
		}else if(result && result.areaList.length !== 0){
			$scope.coachTotalCount=result.coachTotalCount;
			$scope.areaList=result.areaList;
		}else{
			//处理没有区域的情况
		}
	})
	var sUserAgent = navigator.userAgent.toLowerCase();
	if(sUserAgent.indexOf("ipad") !== -1 ||sUserAgent.indexOf("iphone") !== -1){
		$scope.coach.url = location.href.split("#")[0];
	}else{
		$scope.coach.url=location.href.split("#")[0];
	}
	var url=$scope.coach.url;
	$getSignal.getSignal(url,function(err,result){
		if (err){
			$ionicPopup.alert({
			    title: "sorry,系统报错"
			});
		}else{
			if(result && result.success == true ){
				var timestamp=result.result.timestamp,
					nonceStr=result.result.noncestr;
					signature=result.result.signature;
					alert(signature);
				wx.config({
				    debug: true, 
				    appId: 'wx8bbeb53d26dbe214', 
				    timestamp:timestamp, 
				    nonceStr: nonceStr,
				    signature:signature,
				    jsApiList: ["getLocation"] 
				});
				wx.ready(function(){
					wx.getLocation({
					    type: 'wgs84',
					    success: function (res){
					        $scope.coach.lat = res.latitude; 
					        $scope.coach.long = res.longitude;
					        var speed = res.speed; 
					        var accuracy = res.accuracy;
					        //筛选条件
							//根据筛选条件选择教练
							var top=20;
							$scope.coach.filterNone="default";
							var sort=$scope.coach.filterNone;
							$scope.coach.filterArea="999999";
							var areaId=$scope.coach.filterArea;
							$scope.coach.filterModel="";
							var teachType=$scope.coach.filterModel;
							var index=0;
							var lat=$scope.coach.lat;
							var long=$scope.coach.long;
							$scope.zuobiao={lat:lat,long:long};
							$scope.$broadcast('zuobiao',$scope.zuobiao);
							var filterArea=$scope.coach.filterArea;
							$fifterCoach.fifterCoach(filterArea,cityId,index,lat,long,sort,teachType,top,function(err,result){
								if(err){
									$ionicPopup.alert({
									    title: 'sorry，系统出错'
									});
								}else if(result && result.coachList.length !== 0){
									$scope.coachShow = true;
									$scope.coachList=result.coachList;
								}else{
									$scope.coachShow = false;
								}
							})
					    },
					    error:function(){
					    	$ionicPopup.alert({
							    title: "sorry,系统报错"
							});
					    },
					    fail:function(){
					    	$ionicPopup.alert({
							    title: "sorry,获取地理失败"
							});
							//根据筛选条件选择教练
							
							var top=20;
							$scope.coach.filterNone="default";
							var sort=$scope.coach.filterNone;
							$scope.coach.filterArea="999999";
							var areaId=$scope.coach.filterArea;
							$scope.coach.filterModel="";
							var teachType=$scope.coach.filterModel;
							var index=0;
							var lat="30.73955";
							var long="103.9489";
							$scope.zuobiao={lat:lat,long:long};
							$scope.$broadcast('zuobiao',$scope.zuobiao);
							$fifterCoach.fifterCoach(filterArea,cityId,index,lat,long,sort,teachType,top,function(err,result){
								if(err){
									$ionicPopup.alert({
									    title: 'sorry，系统出错'
									});
								}else if(result && result.coachList.length !== 0){
									$scope.coachShow = true;
									$scope.coachList=result.coachList;
								}else{
									$scope.coachShow = false;
								}
							})
					    },
					    cancel:function(){
					    	$ionicPopup.alert({
							    title: "您已拒绝获取地理位置"
							});
							//根据筛选条件选择教练
							var top=20;
							$scope.coach.filterNone="default";
							var sort=$scope.coach.filterNone;
							$scope.coach.filterArea="999999";
							var areaId=$scope.coach.filterArea;
							$scope.coach.filterModel="";
							var teachType=$scope.coach.filterModel;
							var index=0;
							var lat="30.73955";
							var long="103.9489";
							$scope.zuobiao={lat:lat,long:long};
							$scope.$broadcast('zuobiao',$scope.zuobiao);
							$fifterCoach.fifterCoach(filterArea,cityId,index,lat,long,sort,teachType,top,function(err,result){
								if(err){
									$ionicPopup.alert({
									    title: 'sorry，系统出错'
									});
								}else if(result && result.coachList.length !== 0){
									$scope.coachShow = true;
									$scope.coachList=result.coachList;
								}else{
									$scope.coachShow = false;
								}
							})
					    }
					});
				})
			}else if(result && result.errorInfo){
				var errorInfo=result.errorInfo;
	 			$ionicPopup.alert({
				    title: errorInfo
				});
	 		}
		};
	})
	$scope.search=function(){
		var key=$scope.coach.key;
		var lat=$scope.coach.lat,
			long=$scope.coach.long;
		if(lat=="" || long=="" || lat==undefined || long== undefined|| lat==null || long== null){
			lat="30.73955";
			long="103.9489";
			$getCoach.getCoach(key,lat,long,function(err,result){
				if (err) {
					$ionicPopup.alert({
					    title: "sorry,系统报错"
					});
				}else{
					if(result && result.coachList.length !== 0){
						$scope.coachShow=true; 
			 			$scope.coachList=result.coachList;
					}else if(result && result.errorInfo){
						var errorInfo=result.errorInfo;
			 			$ionicPopup.alert({
						    title: errorInfo
						});
			 		}else if(result && result.coachList.length == 0){
			 			$ionicPopup.alert({
						    title: "没有您要找的教练"
						});
			 		}
				};
			})
		}else{
			$getCoach.getCoach(key,lat,long,function(err,result){
				if (err) {
					$ionicPopup.alert({
					    title: "sorry,系统报错"
					});
				}else{
					if(result && result.coachList.length !== 0){
						$scope.coachShow=true; 
			 			$scope.coachList=result.coachList;
					}else if(result && result.errorInfo){
						var errorInfo=result.errorInfo;
			 			$ionicPopup.alert({
						    title: errorInfo
						});
			 		}else{

			 		}
				};
			})
		}
	}
	$scope.checkCoachAvator = function(coach){
		if(coach.avator && coach.avator.large){
			return coach.avator.large;
		}else{
			return "http://7xjnv4.com2.z0.glb.qiniucdn.com/default_avator.png_large";
		}
	}
	//筛选教练
	//根据筛选条件选择教练
	$scope.$on('zuobiao',function(){
		var zuobiao=$scope.zuobiao;
		var top=20;
		$scope.coach.filterNone="default";
		var sort=$scope.coach.filterNone;
		$scope.coach.filterArea="999999";
		var areaId=$scope.coach.filterArea;
		$scope.coach.filterModel="";
		var teachType=$scope.coach.filterModel;
		var index=0;
		var lat=zuobiao.lat;
		var long=zuobiao.long;
		$scope.$watchCollection("coach",function(newValue,oldValue,$scope){
			$fifterCoach.fifterCoach(newValue.filterArea,cityId,index,lat,long,newValue.filterNone,newValue.filterModel,top,function(err,result){
				if(err){
					$ionicPopup.alert({
					    title: 'sorry，系统出错'
					});
				}else if(result && result.coachList.length !== 0){
					$scope.coachShow = true;
					$scope.coachList=result.coachList;
				}else{
					$scope.coachShow = false;
				}
			})
		})
	})
	//加载更多教练
	// $scope.loadMore = function(index){
	//     $http.get('/basic/search/coach/filter',{
	//     	params:{
	//     		areaId:areaId,
	//     		cityId:cityId,
	//     		index:index,
	//     		lat:lat,
	//     		long:long,
	//     		sort:sort,
	//     		teachType:teachType,
	//     		top:top
	//     	}
	//     })
	//     .success(function(result){
	//     	$scope.coachList=result.coachList;
	//       	$scope.$broadcast('scroll.infiniteScrollComplete');
	//     });
	//   };
})
angular.module("controllers.code",[])
.controller("code",function(
	$scope,
	$ionicPopup,
	$location,
	$window,
	$bindWx,
	$wxLogin,
	$reload
){
	//系统刚进来时肯定是没有code的
	// alert("in")
	var getQueryStr=function(code){
		var reg = new RegExp("(^|&)" + code + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.replace(/\?/g, "&").substr(1).match(reg);
	    if (r != null){
	    	return (r[2]);
	    }else{
	    	return null;
	    } 
	}
	var codeMax=getQueryStr("code");
	// alert(codeMax)
	var getQueryString=function(state){
		var reg = new RegExp("(^|&)" + state + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.replace(/\?/g, "&").substr(1).match(reg);
	    if (r != null){
	    	return (r[2]);
	    }else{
	    	return null;
	    } 
	}
	var state=getQueryString("state")+"";
	var callbackEncode=state.split("_._")[1];
	var callback=decodeURIComponent(callbackEncode);
	// alert(callback);
	if(state.split("_._")[0] == "wxLogin"){
		// alert(callback);
		$wxLogin.wxLogin(codeMax,function(err,result){
			// alert("IN")
			if(err){
				$ionicPopup.alert({
					title:"sorry,系统出错"
				})
			}else{
				if(result && result.success == true){
					//表明可以用微信帐号登录  可以开始预约了
					// alert("IN");
					if(callback.indexOf("order") !== -1){
						$window.location.href="/yja/judgeMent?callback="+callback;
					}else{
						$window.location.href=callback;
					}
				}else if(result && result.success == false){ //code只能用一次
					// alert(callback);
					$window.location.href="/yja/register?callback="+callback;
				}
			}
		})
	}else{
		$bindWx.bindWx(codeMax,function(err,result){
			if(err){
				$ionicPopup.alert({
					title:"sorry,系统出错"
				})
			}else{
				// alert(callback);
				if(result && result.success == true){
					//绑定成功
					if(callback.indexOf("order") !== -1){
						$window.location.href="/yja/judgeMent?callback="+callback;
					}else{
						$window.location.href=callback;
					}
				}else if(result && result.success == false){ //code只能用一次
					// alert("callback")
					$ionicPopup.alert({
						title:"绑定出错，请退出重试"
					})
				}
			}
		})
	}
})
angular.module("controllers.fixName",[])
.controller("fixName",function(
	$scope,
	$ionicPopup,
	$reload,
	$profile,
	$window
){
	$reload.reload(function(err,result){
		if(err){
			$ionicPopup.alert({
				title:"sorry,系统出错"
			})
		}else{
			if (result && result.success == true){
				$scope.userInfo=result.userInfo;
				var userInfo=$scope.userInfo;
				
			}else if(result && result.errorInfo){
				var errorInfo=result.errorInfo;
				$ionicPopup.alert({
					title:errorInfo
				})
			}
		}
	})
	$scope.fixedName=function(){
		var name=$scope.userInfo.name;
		if(name !== ""){
			$profile.profile(name,function(err,result){
				if(err){
					$ionicPopup.alert({
						title:"sorry,系统出错"
					})
				}else{
					if (result && result.success == true){
						$window.location.href="/yja/person";					
					}else if(result && result.errorInfo){
						var errorInfo=result.errorInfo;
						$ionicPopup.alert({
							title:errorInfo
						})
					}
				}
			})
		}else{
			$ionicPopup.alert({
				title:"请填入姓名"
			})
		}
	}
})
angular.module("controllers.judgeMent",[])
.controller("judgeMent",function(
	$scope,
	$reload,
	$ionicPopup,
	$window,
	$onBroad
){
	// alert("first")
	$reload.reload(function(err,result){
		if(err){
			$ionicPopup.alert({
				title:"sorry,系统出错"
			})
		}else{
			if(result && result.success == true){
				// alert("second");
				var userInfo=result.userInfo;
				var coachInfo = userInfo.coach;
				if(!coachInfo){
					$ionicPopup.confirm({
						title:"您还没有绑定教练,点击OK绑定教练"
					}).then(function(result){
						if(result == true){
							$window.location.href="/yja/coachList"
						}
					})
				}else{
					var teachType=coachInfo.teachType;
					var role=userInfo.role;
					if(role == "student"){
						if(teachType == 0){
							$window.location.href="/yja/order";
						}else if(teachType == 1){
							$window.location.href="/yja/orderMuch";
						}
					}else if(role == "coach"){
						$ionicPopup.alert({
							title:"该预约窗口只针对学员展开"
						})
					}else{
						$ionicPopup.confirm({
							title:"您的身份未确定,点击绑定教练"
						}).then(function(result){
							if(result == true){
								$window.location.href="/yja/coachList";
							}else{
								//不做处理
							}
						})
					}
				}
			}else if(result && result.success == false){
				alert("fourth")
				var errorInfo=result.errorInfo;
				if(errorInfo == "是学员身份，但找不到绑定的教练"){
					$ionicPopup.confirm({
						title:"您是学员身份，但未绑定教练，现在去绑定教练吗"
					}).then(function(result){
						if(result == true){
							$window.location.href="/yja/coachList";
						}
					})
				}else{
					alert("fifth")
					$ionicPopup.alert({
						title:errorInfo
					})
				}
			}
		}
	})
})
angular.module("controllers.loginTemp",[])
.controller("loginTemp",function(
	$scope,
	$ionicPopup,
	$onBroad,
	$window,
	$bindWx,
	$location
){
	var getQueryStr=function(callback){
		var reg = new RegExp("(^|&)" + callback + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.replace(/\?/g, "&").substr(1).match(reg);
	    if (r != null){
	    	return (r[2]);
	    }else{
	    	return null;
	    } 
	}
	var callbackEncode=getQueryStr("callback");
	var callback=decodeURIComponent(callbackEncode);
	$scope.loginTempItem={phone:"",password:""};
	$scope.loginIn=function(){
		var phone=$scope.loginTempItem.phone;
		var password=$scope.loginTempItem.password;
		if(phone !== "" && password !== ""){
			$onBroad.onBroad(phone,password,function(err,result){
				if(err){
					$ionicPopup.alert({
					    title: 'sorry，系统出错'
					})
				}else{
					if(result && result.success == true){
						var userInfo=result.userInfo;
						if(userInfo.openId !== null && userInfo.openId !== "" && userInfo.openId !== undefined){
							if(callback.indexOf("order") !== -1){
								$window.location.href="/yja/judgeMent?callback="+callback;
							}else{
								$window.location.href=callback;
							}
						}else{
							$window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8bbeb53d26dbe214&redirect_uri=http%3a%2f%2fwx.idrv.com.cn%2fyja%2fcode&response_type=code&scope=snsapi_userinfo&state=wxBind_._"+callback+"#wechat_redirect";
						}
					}else if(result && result.errorInfo){
						var errorInfo=result.errorInfo;
						$ionicPopup.alert({
						    title: errorInfo
						})
					}
				}
			})
		}else{
			$ionicPopup.alert({
			    title: '请确保输入正确'
			})
		}
	}
})
angular.module("controllers.orderTemp",[])
.controller("orderTemp",function(
	$scope,
	$ionicPopup,
	$bindWx,
	$reload,
	$byDayCount,
	$orderTime,
	$orderDelete,
	$onBroad,
	$window
){
	$scope.user={id:""};
	// $onBroad.onBroad("13888880111","qqqqqq",function(err,result){
	// 	if(err){
	// 		alert("eror")
	// 	}else{
	// 		if (result && result.success == true) {
	// 			$scope.user.id=result.userInfo.id;
	// 		}else{
	// 			alert("UNKNOW")
	// 		}
	// 	}
	// })
	$scope.getWeekDay = function(date){
		switch(date){
			case 1:
				week="周一";
				return week;
				break;
			case 2:
				week="周二";
				return week;
				break;
			case 3:
				week="周三";
				return week;
				break;
			case 4:
				week="周四";
				return week;
				break;
			case 5:
				week="周五";
				return week;
				break;
			case 6:
				week="周六";
				return week;
				break;
			case 7:
				week="周日";
				return week;
				break;
		}
	}
	$scope.orderList = [];
	var count=7;
	for(var current=0;current < count; current++){
		var morningArr = [{time:"8:00"},{time:"9:00"},{time:"10:00"},{time:"11:00"}];
		var afternoonArr = [{time:"13:00"},{time:"14:00"},{time:"15:00"},{time:"16:00"},{time:"17:00"}];
		var eveningArr = [{time:"19:00"},{time:"20:00"}];
		var orderTemp = {};
		var currentDay = moment().add(current,'days');
		var currentDayStr = currentDay.format("YYYY-MM-DD");
		orderTemp.date = currentDayStr;
		orderTemp.weekDay = $scope.getWeekDay(currentDay.isoWeekday());
		orderTemp.Morning = morningArr;
		orderTemp.Afternoon = afternoonArr;
		orderTemp.Evening = eveningArr;
		$scope.orderList.push(orderTemp);
	}
	console.log("orderList",$scope.orderList);
	$reload.reload(function(err,result){
		if(err){
			alert("sorry,系统出错")
		}else{
			if (result && result.success == true) {
				$scope.user.id=result.userInfo.id;
				$byDayCount.byDayCount(count,function(err,result){
					if(err){
						$ionicPopup.alert({title:"sorry,系统出错"})
					}else{
						if (result && result.success == true) {
							var orderList=result.orderList;
							orderList.forEach(function(order,index){
								//for循环，到$scope.orderList里去找对应的date和time的数据
								var date=order.date;
								var time=order.time;
								var orderId=order.id;
								var poster=order.poster;
								var mold=order.mold;
								var count=order.count;
								var type=order.type;
								var max=order.max;
								var studentId=order.studentId;
								var timePieceTemp=order.timePiece;
								var timePiece = "";
								if(time < 12)timePiece = "Morning";
								else if(time < 17)timePiece = "Afternoon";
								else if(time < 21)timePiece = "Evening";
								var timeStr = time + ":00";
								for(var index in $scope.orderList){
									var orderTemp = $scope.orderList[index];
									//相当于orderTemp== order
									if(orderTemp.date == date){
										for(var index2 in orderTemp[timePieceTemp]){
											if(poster == "coach" && mold == "sendExam"){
												var orderEle = orderTemp[timePieceTemp][index2];
												orderEle.content = "送考"; //预约需要time，date
												orderEle.id = orderId;
											}else if(poster == "coach" && mold == "rest" ){
												var orderEle = orderTemp[timePieceTemp][index2];
												orderEle.id = orderId;
												orderEle.content = "教练休息";
											}else if(poster == "coach" && mold == "subject3"){
												var orderEle = orderTemp[timePieceTemp][index2];
												orderEle.max = "可约"+max+"人";
												orderEle.count = count;
												orderEle.id = orderId;
												orderEle.content = "科目三可约";
											}else{
												if(poster == "student" && type == "subject3"  && $scope.user.id == studentId){
													var orderEle = orderTemp[timePieceTemp][index2];
													orderEle.contentItem = "已预约";
													orderEle.id = orderId;
												}else{
													var orderEle = orderTemp[timePieceTemp][index2];
													if(orderEle.time == timeStr){
														if(poster == "student" && $scope.user.id !== studentId){
															orderEle.id = orderId;
															orderEle.contentItem = "不可约";
														}else if(poster == "student" && $scope.user.id == studentId){
															orderEle.contentItem = "已预约";
															orderEle.id = orderId;
														}
													}	
												}
											}
										}
									}
								}
							})
						}else if(result && result.errorInfo){
							var errorInfo=result.errorInfo;
							$ionicPopup.alert({
								title:errorInfo
							})
						}
					}
				})
			}else{
				if (result && result.errorInfo){
					var errorInfo=result.errorInfo;
					$ionicPopup.alert({
						title:errorInfo
					})
				} 
			}
		}
	})
	
	$scope.forOrder=function(order,orderEle){
		var content=orderEle.content;
		var contentItem=orderEle.contentItem;
		if(contentItem !== "已预约" && content !== "教练休息" && contentItem !== "送考" && contentItem !== "不可约"){
			var dateTemp=order.date;
			var dateCurrent=moment().format("YYYY-MM-DD");
			var date=moment(dateTemp).diff(dateCurrent,"days");
			var timeTemp=orderEle.time+"";
			var timeItem=timeTemp.substr(0,2);
			var time;
			if(timeItem.indexOf(":") !== -1){
				time=timeItem.substr(0,1);
			}else{
				time=timeItem;
			}
			// var time=html.substr(0,2);
			var confirm=$ionicPopup.confirm({
				title:"您确定要预约该时段吗?"
			})
			confirm.then(function(result){
				if(result == true){
					$orderTime.orderTime(date,time,function(err,result){
						if (err) {
							$ionicPopup.alert({
								title:"sorry,系统出错"
							})
						}else{
							if(result && result.success == true){
								var orderID=result.order.id;
								var timePiece=result.order.timePiece;
								var time=result.order.time;
								var type=result.order.type;
								var timeArray=$scope.orderList[date][timePiece];
								for(index in timeArray){
									var timeTemp=timeArray[index].time+"";
									var timeItem=timeTemp.substr(0,2);
									var timeStr;
									if(timeItem.indexOf(":") !== -1){
										timeStr=timeItem.substr(0,1);
									}else{
										timeStr=timeItem;
									}
									if(type == "subject3"){
										$scope.orderList[date][timePiece][index].contentItem = "已预约";
										$scope.orderList[date][timePiece][index].id=orderID;
										$scope.orderList[date][timePiece][index].count=$scope.orderList[date][timePiece][index].count+1;
										break;
									}else{
										if(time == timeStr){
											$scope.orderList[date][timePiece][index].contentItem = "已预约";
											$scope.orderList[date][timePiece][index].id=orderID;
											break;
										}
									}
								}
								// $window.location.reload();
							}else if(result && result.errorInfo){
								var errorInfo=result.errorInfo;
								$ionicPopup.alert({
									title:errorInfo
								})
							}
						}
					})
				}else{
					//拒绝了约课
				}
			})
		}else if(contentItem == "已预约"){
			var confirm=$ionicPopup.confirm({
				title:"您要取消预约该时段吗?"
			})
			confirm.then(function(result){
				if(result == true){
					//取消预约，这块需要预约的ID
					var id=orderEle.id;
					$orderDelete.orderDelete(id,function(err,result){
						if (err) {
							$ionicPopup.alert({
								title:"sorry,系统出错"
							})
						}else{
							if(result && result.success==true){
								$ionicPopup.alert({
									title:"取消预约成功"
								}).then(function(result){
									if(result == true){
										if(content == "科目三可约"){
											orderEle.count=orderEle.count-1;
											$window.location.reload();
										}
										orderEle.contentItem="";
									}
								})
							}else if(result && result.errorInfo){
								var errorInfo=result.errorInfo;
								$ionicPopup.alert({
									title:errorInfo
								});
							}
						}
					})
				}
			})
		}
	}
})
angular.module("controllers.orderMuch",[])
.controller("orderMuch",function(
	$scope,
	$ionicPopup,
	$bindWx,
	$reload,
	$byDayCount,
	$orderTime,
	$orderDelete,
	$onBroad,
	$window
){
	$scope.user={id:""};


	$scope.getWeekDay = function(date){
		switch(date){
			case 1:
				week="周一";
				return week;
				break;
			case 2:
				week="周二";
				return week;
				break;
			case 3:
				week="周三";
				return week;
				break;
			case 4:
				week="周四";
				return week;
				break;
			case 5:
				week="周五";
				return week;
				break;
			case 6:
				week="周六";
				return week;
				break;
			case 7:
				week="周日";
				return week;
				break;
		}
	}
	$scope.orderList = [];
	var count=7;
	for(var current=0;current < count; current++){
		var todayArr = [{timeTemp:"Morning",time:"8:00~12:00"},{timeTemp:"Afternoon",time:"13:00~18:00"},{timeTemp:"Evening",time:"19:00~21:00"}];
		var orderTemp = {};
		var currentDay = moment().add(current,'days');
		var currentDayStr = currentDay.format("YYYY-MM-DD");
		orderTemp.date = currentDayStr;
		orderTemp.weekDay = $scope.getWeekDay(currentDay.isoWeekday());
		orderTemp.today = todayArr;
		$scope.orderList.push(orderTemp);
	}
	console.log("orderList",$scope.orderList);
	$reload.reload(function(err,result){
		if(err){
			alert("eror")
		}else{
			if (result && result.success == true) {
				$scope.user.id=result.userInfo.id+"";
				$byDayCount.byDayCount(count,function(err,result){
					if(err){
						$ionicPopup.alert({
							title:"sorry,系统出错"
						})
					}else{
						if(result && result.success == true){
							var orderList=result.orderList;
							orderList.forEach(function(order,index){
								var date=order.date;
								var time=order.time;
								var orderId=order.id;
								var poster=order.poster;
								var mold=order.mold;
								var count=order.count;
								var max=order.max;
								var type=order.type;
								var studentId=order.studentId+"";
								var timePieceTemp=order.timePiece;
								for(var index in $scope.orderList){
									var orderTemp = $scope.orderList[index];
									if(orderTemp.date == date){
										for(var index2 in orderTemp.today){
											var timeTemp=orderTemp["today"][index2].timeTemp;
											if(timeTemp == timePieceTemp){
												if(poster == "coach" && mold == "sendExam" ){
													var orderEle = orderTemp["today"][index2];
													orderEle.content = "送考"; //预约需要time，date
													orderEle.id = orderId;
												}else if(poster == "coach" && mold == "rest" ){
													var orderEle = orderTemp["today"][index2];
													orderEle.id = orderId;
													orderEle.content = "教练休息";
												}else if(poster == "coach" && mold == "subject3"){
													var orderEle = orderTemp["today"][index2];
													orderEle.max = "可约"+max+"人";
													orderEle.count = count;
													orderEle.id = orderId;
													orderEle.content = "科目三可约";
												}else{
													if(poster == "student" && $scope.user.id !== studentId){
														var orderEle = orderTemp["today"][index2];
														// orderEle.id = orderId;
														if(type == "sunject3"){
															//do nothing
														}else if(type == "record"){
															orderEle.content="已约"+count+"人";
															orderEle.count=count;
														}
													}else if(poster == "student" && $scope.user.id == studentId){
														var orderEle = orderTemp["today"][index2];
														orderEle.contentItem = "已预约";
														orderEle.id = orderId;
													}
												}
											}
										}
									}
								}
							})
						}else if (result && result.success == false){
							var errorInfo=result.errorInfo;
							$ionicPopup.alert({
								title:errorInfo
							})
						}
					}
				})
			}else if (result && result.success == false){
				var errorInfo=result.errorInfo;
				$ionicPopup.alert({
					title:errorInfo
				})
			}
		}
	})
	//预约
	$scope.forOrder=function(order,orderEle){
		var content=orderEle.content;
		var contentItem=orderEle.contentItem;
		if(contentItem !== "已预约" && content !== "教练休息" && content !== "送考"  ){
			var dateTemp=order.date;
			var dateCurrent=moment().format("YYYY-MM-DD");
			var date=moment(dateTemp).diff(dateCurrent,"days");
			var timeTemp=orderEle.timeTemp+"";
			var time;
			if(timeTemp == "Morning"){
				time=8;
			}else if(timeTemp == "Afternoon"){
				time=15;
			}else if(timeTemp == "Evening"){
				time=20;
			}
			var confirm=$ionicPopup.confirm({
				title:"您确定要预约该时段吗?"
			})
			confirm.then(function(result){
				if(result == true){
					$orderTime.orderTime(date,time,function(err,result){
						if (err) {
							$ionicPopup.alert({
								title:"sorry,系统出错"
							})
						}else{
							if(result && result.success == true){
								var orderID=result.order.id;
								var timePiece=result.order.timePiece;
								var type=result.order.type;
								// var time=result.order.time;
								var timeArray=$scope.orderList[date]["today"];
								console.log(timeArray)
								for(index in timeArray){
									var timeTemp=timeArray[index].timeTemp+"";
									if(timePiece == timeTemp){
										$scope.orderList[date]["today"][index].contentItem = "已预约";
										$scope.orderList[date]["today"][index].id=orderID;
										// if(type == "subject3"){
										$scope.orderList[date]["today"][index].count=$scope.orderList[date]["today"][index].count+1;
										// }
										break;
									}
								}
							}else if(result && result.errorInfo){
								var errorInfo=result.errorInfo;
								$ionicPopup.alert({
									title:errorInfo
								})
							}
						}
					})
				}else{
					//拒绝了约课
				}
			})
		}else if(contentItem == "已预约"){
			var confirm=$ionicPopup.confirm({
				title:"您要取消预约该时段吗?"
			})
			confirm.then(function(result){
				if(result == true){
					//取消预约，这块需要预约的ID
					var id=orderEle.id;
					$orderDelete.orderDelete(id,function(err,result){
						if (err) {
							$ionicPopup.alert({
								title:"sorry,系统出错"
							})
						}else{
							if(result && result.success==true){
								$ionicPopup.alert({
									title:"取消预约成功"
								});
								if(content == "科目三可约"){
									var dateTemp=order.date;
									var dateCurrent=moment().format("YYYY-MM-DD");
									var date=moment(dateTemp).diff(dateCurrent,"days");
									var timePiece=orderEle.timeTemp;
									orderEle.count=orderEle.count-1;
								}else{
									orderEle.content="";
								}
								orderEle.contentItem="";
							}else if(result && result.errorInfo){
								var errorInfo=result.errorInfo;
								$ionicPopup.alert({
									title:errorInfo
								});
							}
						}
					})
				}
			})
		}
	}
})
angular.module("controllers.person",[])
.controller("person",function(
	$scope,
	$ionicPopup,
	$location,
	$reload,
	$onBroad,
	$window
){
	//表明已经登录
	$reload.reload(function(err,result){
		if(err){
			$ionicPopup.alert({
				title:"sorry,系统出错"
			})
		}else{
			if (result && result.success == true){
				$scope.userInfo=result.userInfo;
				var userInfo=$scope.userInfo;
				if(userInfo.coach !== null ){
					$scope.haveCoach = true;
				}else{
					$scope.noCoach = true;
				}
			}else if(result && result.errorInfo){
				var errorInfo=result.errorInfo;
				if(errorInfo == "是学员身份，但找不到绑定的教练"){
					$ionicPopup.confirm({
						title:"您是学员身份，但未绑定教练，现在去绑定教练吗"
					}).then(function(result){
						if(result == true){
							$window.location.href="/yja/coachList";
						}
					})
				}else{
					$ionicPopup.alert({
						title:errorInfo
					})
				}
			}
		}
	})
	$scope.changeUrl=function(){
		$window.location.href="/yja/coachList";
	}
})
angular.module("controllers.register",[])
.controller("register",function(
	$scope,
	$loginCode,
	$ionicPopup,
	$register,
	$searchPhone,
	$window
){
	// console.log("$scope",$scope)
	$scope.login={phone:"",identify:"",password:"",identifyPassword:""};
	$scope.extra={name:""};
	$scope.getIdentify=function(){
		var phoneNumber=$scope.login.phone;
		if(!phoneNumber.match(/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/)){
			$(".error").css("visibility","visible");
			return false;
		}else{
			$(".error").css("visibility","hidden");
			$searchPhone.searchPhone(phoneNumber,function(err,result){
				if(err){
            		$ionicPopup.alert({
					    title: 'sorry，系统出错'
					});
            	}else{
            		if(result && result.success == true){
            			$ionicPopup.alert({
						    title: '该号码已注册,请登录'
						});
						$window.location.href="/yja/login?callback="+callback;
            		}else{
            			function jump(countDown) {
			                window.setTimeout(function(){
			                    countDown--;
			                    if(countDown > 0){
			                    	$(".submitPhone").attr("disabled","true");
			                        $(".submitPhone").html(countDown +'秒后'+ '重发');
			                        jump(countDown);
			                    }else{
			                        $(".submitPhone").html('发送验证码');
			                        $(".submitPhone").removeAttr("disabled");
			                    }
			                },1000);
			            }
			            jump(60);
			            $loginCode.loginCode(phoneNumber,function(err,result){
			            	if(err){
			            		$ionicPopup.alert({
								    title: 'sorry，系统出错'
								});
			            	}else{
			            		if(result && result.success == true){

			            		}else{
			            			$ionicPopup.alert({
									    title: '发送失败'
									});
			            		}
			            	}
			            })
            		}
            	}
			})
		}
	}
	var getQueryStr=function(callback){
		var reg = new RegExp("(^|&)" + callback + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.replace(/\?/g, "&").substr(1).match(reg);
	    if (r != null){
	    	return (r[2]);
	    }else{
	    	return null;
	    } 
	}
	var callbackEncode=getQueryStr("callback");
	var callback=decodeURIComponent(callbackEncode);
	$scope.register=function(){
		var code=$scope.login.identify;
		var phoneNumber=$scope.login.phone;
		var extra=$scope.extra;
		var name=$scope.extra.name;
		if(code !=="" && phoneNumber !== "" ){
			var password=$scope.login.password;
			var identifyPassword=$scope.login.identifyPassword;
			var Passwordlength=password+"";
			var length=Passwordlength.length;
			if(password == identifyPassword && length >=6 && length <=15 && name !== ""){
				$register.register(code,password,extra,function(err,result){
					if(err){
	            		$ionicPopup.alert({
						    title: 'sorry，系统出错'
						});
	            	}else{
	            		if (result && result.success == true) {
	            			//注册成功以后
	            			$window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8bbeb53d26dbe214&redirect_uri=http%3a%2f%2fwx.idrv.com.cn%2fyja%2fcode&response_type=code&scope=snsapi_userinfo&state=wxBind_._"+callback+"#wechat_redirect";
	            		}else if(result && result.errorInfo){
	            			var errorInfo=result.errorInfo;
	            			$ionicPopup.alert({
							    title: errorInfo
							});
						}
	            	}
				})
			}else{
				$ionicPopup.alert({
				    title: "两次密码输入不一致或密码长度错误"
				});
			}
		}else{
			$ionicPopup.alert({
				title:"请确保输入正确"
			});
		}
	}
	$scope.forCallback=function(){
		$window.location.href="/yja/login?callback="+callback;
	}
})
angular.module("controllers.reloadr",[])
.controller("reloadr",function(
	$scope,
	$ionicPopup,
	$reload,
	$window
){
	var getQueryStr=function(callback){
		var reg = new RegExp("(^|&)" + callback + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.replace(/\?/g, "&").substr(1).match(reg);
	    if (r != null){
	    	return (r[2]);
	    }else{
	    	return null;
	    } 
	}
	var callbackEncode=getQueryStr("callback");
	var callback=decodeURIComponent(callbackEncode);
	$reload.reload(function(err,result){
		if(err){
			$ionicPopup.alert({
				title:"sorry,系统出错"
			})
		}else{
			if(result && result.success == true){
				var openId=result.userInfo.openId;
				if(!openId){
					$window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8bbeb53d26dbe214&redirect_uri=http%3a%2f%2fwx.idrv.com.cn%2fyja%2fcode&response_type=code&scope=snsapi_userinfo&state=wxBind_._"+callback+"#wechat_redirect";
				}else{
					if(callback.indexOf("order") !== -1){
						$window.location.href="/yja/judgeMent?callback="+callback;
					}else{
						$window.location.href=callback;
					}
				}
			}else{
				$window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8bbeb53d26dbe214&redirect_uri=http%3a%2f%2fwx.idrv.com.cn%2fyja%2fcode&response_type=code&scope=snsapi_base&state=wxLogin_._"+callback+"#wechat_redirect";
			}
		}
	})
})
angular.module("directives.coachList",[])
.directive("coachList",function(

){
	return {
		restrict:"E",
		templateUrl:"template/coach.html",
		link:function($scope,element,attr){
			
		}
	}
})
angular.module("directives.orderList",[])
.directive("orderList",function(
	
){
	return {
		restrict:"E",
		templateUrl:"template/order.html",
		link:function($scope,element,attr){
			
		}
	}
})
angular.module("directives.orderMuch",[])
.directive("orderMuch",function(
	
){
	return {
		restrict:"E",
		templateUrl:"template/orderItem.html",
		link:function($scope,element,attr){
			
		}
	}
})
angular.module("directives.todayOrder",[])
.directive("todayOrder",function(
	$orderTime,
	$ionicPopup
){
	return {
		restrict:"A",
		link:function($scope,element,attr){
			var ele=$(element[0]);
			var tdValue=ele.find(".dateModel");
			console.log(tdValue.html());
			ele.on("click","td",function(){
				var html=$(this).html()+"";
				var time=html.substr(0,2);
				var date=0;
				$orderTime.orderTime(date,time,function(err,result){
					if (err) {
						$ionicPopup.alert({
							title:"sorry,系统出错"
						})
					}else{
						if(result && result.success == true){

						}else if(result && result.errorInfo){
							var errorInfo=result.errorInfo;
							$ionicPopup.alert({
								title:errorInfo
							})
						}
					}
				})
			})
		}
	}
})
angular.module("services.common",[])
//登录
.service("$loginIn",function(
	$http
){
	return{
		loginIn:function(phone,password,callback){
			$http.post(BASE_URL + "/basic/login",{
				phone:phone,
				password:password
			})
			.success(function(data){
				if(callback)callback(null,data);
			})
			.error(function(error){
				if(callback)callback(error);
			})
		}
	}
})
//忘记密码
.service("$passwordBack",function(
	$http
){
	return{
		passwordBack:function(phone,check,callback){
			$http.post(BASE_URL + "/basic/register/verify",{
				phone:phone,
				code:check
			})
			.success(function(data){
				if(callback)callback(null,data);
			})
			.error(function(error){
				if(callback)callback(error);
			})
		}
	}
})
//寻找教练
.service("$getCoach",function(
	$http
){
	return{
		getCoach:function(key,lat,long,callback){
			if(lat == null && long == null){
				lat="30.665534";
				long="104.071791"
			}
			$http.get(BASE_URL + "/basic/search/coach/byKey",{
				params:{
					key:key,
					lat:lat,
					long:long
				}
			})
			.success(function(data){
				if(callback)callback(null,data);
			})
			.error(function(error){
				if(callback)callback(error);
			})
		}
	}
})
//查看教练详情
.service("$getDetile",function(
	$http
){
	return{
		getDetile:function(coachId,callback){
			$http.get(BASE_URL + "/basic/search/coach/byId",{
				params:{
					coachId:coachId
				}
			})
			.success(function(data){
				if(callback)callback(null,data);
			})
			.error(function(error){
				if(callback)callback(error);
			})
		}
	}
})
//获取场地信息
.service("$GetSiteInfo",function(
	$http
){
	return {
		getSiteInfo:function(long,lat,distance,callback){
			long = parseFloat(long);
			lat = parseFloat(lat);
			distance=parseFloat(distance);
			$http.get(BASE_URL + "/basic/search/site/byLocation",
				{params:{
					long:long,
					lat:lat,
					distance:distance
				}		
			})
			//下面的内容是必须的   表示执行一个回调   如果没有这个回调的话controllerjs里面也就无法执行页面的跳转
			.success(function(data){
				if(callback)callback(null,data);  //这里的null表示err==null  表示没出错 
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})
//获取医院信息
.service("$GetHospital",function(
	$http
){
	return {
		GetHospital:function(cityId,callback){
			$http.get(BASE_URL + "/basic/search/hospital",
				{params:{
					cityId:cityId
				}		
			})
			//下面的内容是必须的   表示执行一个回调   如果没有这个回调的话controllerjs里面也就无法执行页面的跳转
			.success(function(data){
				if(callback)callback(null,data);  //这里的null表示err==null  表示没出错 
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})
//获取签名
.service("$getSignal",function(
	$http
){
	return {
		getSignal:function(url,callback){
			$http.get(BASE_URL + "/basic/wx/signature",
				{params:{
					url:url
				}		
			})
			.success(function(data){
				if(callback)callback(null,data);  
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})
//获取区域
.service("$getArea",function(
	$http
){
	return {
		getArea:function(cityId,callback){
			$http.get(BASE_URL + "/basic/search/coach/area",
				{params:{
					cityId:cityId
				}		
			})
			.success(function(data){
				if(callback)callback(null,data);  
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})
//筛选教练
.service("$fifterCoach",function(
	$http
){
	return {
		fifterCoach:function(areaId,cityId,index,lat,long,sort,teachType,top,callback){
			$http.get(BASE_URL + "/basic/search/coach/filter",
				{params:{
					cityId:cityId,
					areaId:areaId,
					index:index,
					lat:lat,
					long:long,
					sort:sort,
					teachType:teachType,
					top:top
				}		
			})
			.success(function(data){
				if(callback)callback(null,data);  
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})

//根据场地ID获取教练
.service("$getCoachBySiteId",function(
	$http
){
	return {
		getCoachBySiteId:function(siteId,callback){
			$http.get(BASE_URL + "/basic/search/coach/bySiteId",
				{params:{
					siteId:siteId
				}		
			})
			.success(function(data){
				if(callback)callback(null,data);  
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})
//绑定教练
.service("$bindCoach",function(
	$http
){
	return {
		bindCoach:function(coachId,callback){
			$http.post(BASE_URL + "/basic/coach/bind",{
				coachId:coachId
			})
			.success(function(data){
				if(callback)callback(null,data);  
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})
//登录验证码
.service("$loginCode",function(
	$http
){
	return {
		loginCode:function(phoneNumber,callback){
			$http.get(BASE_URL + "/basic/register/code",{
				params:{
					phone:phoneNumber
				}
			})
			.success(function(data){
				if(callback)callback(null,data);  
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})
//注册
.service("$register",function(
	$http
){
	return {
		register:function(code,password,extra,callback){
			$http.post(BASE_URL + "/basic/register/addUser",{
				code:code,
				pwd:password,
				extra:extra
			})
			.success(function(data){
				if(callback)callback(null,data);  
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})
//登录
.service("$onBroad",function(
	$http
){
	return {
		onBroad:function(phone,password,callback){
			$http.post(BASE_URL + "/basic/login",{
				phone:phone,
				password:password
			})
			.success(function(data){
				if(callback)callback(null,data);  
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})
//绑定微信号
.service("$bindWx",function(
	$http
){
	return {
		bindWx:function(codeMax,callback){
			$http.put(BASE_URL + "/basic/user/wxBind",{
				code:codeMax
			})
			.success(function(data){
				if(callback)callback(null,data);  
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})

.service("$reload",function(
	$http
){
	return {
		reload:function(callback){
			$http.get(BASE_URL + "/basic/user/reload",{
				
			})
			.success(function(data){
				if(callback)callback(null,data);  
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})
.service("$profile",function(
	$http
){
	return {
		profile:function(name,callback){
			$http.post(BASE_URL + "/basic/user/profile",{
				name:name
			})
			.success(function(data){
				if(callback)callback(null,data);  
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})

.service("$wxLogin",function(
	$http
){
	return {
		wxLogin:function(codeMax,callback){
			$http.post(BASE_URL + "/basic/register/wxLogin",{
				code:codeMax
			})
			.success(function(data){
				if(callback)callback(null,data);  
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})
//预约
.service("$orderTime",function(
	$http
){
	return {
		orderTime:function(date,time,callback){
			$http.post(BASE_URL + "/student/order/",{
				date:date,
				time:time
			})
			.success(function(data){
				if(callback)callback(null,data);  
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})
.service("$byDayCount",function(
	$http
){
	return {
		byDayCount:function(count,callback){
			$http.get(BASE_URL + "/student/orderCommon/byDayCount",{
				params:{
					count:count
				}
			})
			.success(function(data){
				if(callback)callback(null,data);  
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})
.service("$orderDelete",function(
	$http
){
	return {
		orderDelete:function(id,callback){
			$http.delete(BASE_URL + "/student/order/"+id,{
				
			})
			.success(function(data){
				if(callback)callback(null,data);  
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})
.service("$searchPhone",function(
	$http
){
	return {
		searchPhone:function(phoneNumber,callback){
			$http.get(BASE_URL + "/basic/register/checkPhone",{
				params:{
					phone:phoneNumber
				}
			})
			.success(function(data){
				if(callback)callback(null,data);  
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})
angular.module('templates-main', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("template/coach.html",
    "<a class=\"item item-avatar coachItem\"  ng-href=\"/yja/coachDetile/{{coach.id}}\">\n" +
    "	<img ng-src=\"{{checkCoachAvator(coach)}}\" style=\"margin-top:0px;\"></p>\n" +
    "	<h2 >{{coach.name}}</h2> \n" +
    "	<!-- <div class=\"clear\"></div> -->\n" +
    "	<p ><i style=\"color:#00BFFF;margin-left:1em\">{{coach.phone}}</i></p>\n" +
    "	<!-- <img src=\"./img/more.png\" id=\"coachMoreImg\" /> -->\n" +
    "	<p >{{coach.site.name}}</p>\n" +
    "</a>");
  $templateCache.put("template/coachDetile.html",
    "<ion-view title=\"益驾学车-教练详情\">\n" +
    "	<ion-content  style=\"background-color:#f2f2f4;margin-bottom:60px\">\n" +
    "		<!-- <ion-slide-box on-slide-changed=\"slideHasChanged($index)\" class=\"ionSideBox\" >\n" +
    "		  	<ion-slide ng-show=\"video_first\" belong-first>\n" +
    "	    		<video width=\"100%\"  type=\"video\" controls height=\"90%\" id=\"please\"\n" +
    "	    		 style=\"display:none\" src=\"{{coach.video_first_url}}\" >\n" +
    "				</video>\n" +
    "				<img ng-src=\"{{bvideoBelongFirst}}\" class=\"belongFirst\" id=\"belongFirst\" ng-show=\"belongFirst\">\n" +
    "				<button class=\"button myPause\" >暂停</button>\n" +
    "		  	</ion-slide>\n" +
    "		  	<ion-slide ng-show=\"video_second\" belong-second>\n" +
    "	    		<video  width=\"100%\"  type=\"video\" controls height=\"90%\" src=\"{{coach.video_second_url}}\">\n" +
    "				</video>\n" +
    "				<img ng-src=\"{{bvideoBelongSecond}}\" ng-show=\"belongSecond\">\n" +
    "				<button class=\"button myPause\" >暂停</button>\n" +
    "		  	</ion-slide>\n" +
    "		  	<ion-slide ng-show=\"video_third\" belong-third>\n" +
    "	    		<video  width=\"100%\"  type=\"video\" controls height=\"90%\"  src=\"{{coach.video_third_url}}\">\n" +
    "				</video>\n" +
    "				<img ng-src=\"{{bvideoBelongThird}}\" ng-show=\"belongThird\">\n" +
    "				<button class=\"button myPause\" >暂停</button>\n" +
    "		  	</ion-slide>\n" +
    "		</ion-slide-box> -->\n" +
    "		<div class=\"item item-avatar coachItem\">\n" +
    "			<img ng-src=\"{{coach.avator}}\" ></p>\n" +
    "			<h2>{{coach.name}}</h2><img src=\"./img/agree.png\" class=\"agreeMent\" width=\"20\" ng-show=\"agreeMent\">\n" +
    "			<!-- <div class=\"clear\"></div>\n" +
    "			<p style=\"float:left\" ng-show=\"coachBirth\"><strong >{{coach.birth}}岁</strong></p>\n" +
    "			<p style=\"float:left;margin-left:5px\" ng-show=\"coachLisenceDate\"><strong >{{coach.coachLisenceDate}}年教龄</strong></p> -->\n" +
    "			<div class=\"clear\"></div>\n" +
    "			<a ng-href=\"tel:{{coach.phone}}\" style=\"float:left;color:#80c0fe;margin-top:5px\" ng-show=\"coachPhone\">电话:<strong style=\"margin-left:5px\">{{coach.phone}}</strong> </a>\n" +
    "			<!-- <audio-list ng-show=\"audioShow\" class=\"audioShow\"><img src=\"./img/语音.png\" id=\"audioShowNow\">\n" +
    "				<audio ng-src=\"{{coach.voice.url}}\" id=\"Media\"></audio></img>\n" +
    "			</audio-list> -->\n" +
    "		</div>\n" +
    "		<div class=\"item item-avatar coachItem coachIntroduce\" style=\"padding-left:5%;\" >\n" +
    "			<span>教练介绍</span><span style=\"padding-left:24px;\"><strong>{{coach.signature}}</strong></span>\n" +
    "		</div>\n" +
    "		<div class=\"item item-avatar coachItem coachIntroduce\" style=\"padding-left:5%;\" >\n" +
    "			<span style=\"letter-spacing:28px;\">年龄</span><span ><strong>{{coach.birth}}岁</strong></span>\n" +
    "		</div>\n" +
    "		<div class=\"item item-avatar coachItem coachIntroduce\" style=\"padding-left:5%;margin-top:20px\" >\n" +
    "			<span style=\"letter-spacing:28px\">教龄</span><span ><strong>{{coach.coachLisenceDate}}年</strong></span>\n" +
    "		</div>\n" +
    "		<div class=\"item item-avatar coachItem coachIntroduce\" style=\"padding-left:5%;\" >\n" +
    "			<span>教学模式</span><span style=\"padding-left:24px;\"><strong>{{coach.teachType}}</strong></span>\n" +
    "		</div>\n" +
    "		<div class=\"item item-avatar coachItem coachIntroduce\" style=\"padding-left:5%;\" >\n" +
    "			<span>教学特点</span><span style=\"padding-left:24px;\"><strong>{{coach.coachTrait}}</strong></span>\n" +
    "		</div>\n" +
    "		<div class=\"item item-avatar coachItem coachIntroduce\" style=\"padding-left:5%;margin-top:20px\" >\n" +
    "			<span style=\"letter-spacing:28px\">学校</span><span ><strong>{{coach.driveSchool.name}}</strong></span>\n" +
    "		</div>\n" +
    "		<div class=\"item item-avatar coachItem coachIntroduce\" style=\"padding-left:5%;\" >\n" +
    "			<span style=\"letter-spacing:28px\">车型</span><span ><strong>{{coach.coachCar}}</strong></span>\n" +
    "		</div>\n" +
    "		<div class=\"item item-avatar coachItem coachIntroduce\" style=\"padding-left:5%;\" >\n" +
    "			<span>练车场地</span><span style=\"padding-left:24px;\"><strong>{{coach.site.name}}</strong></span>\n" +
    "		</div>\n" +
    "		<div class=\"item item-avatar coachItem coachIntroduce\" style=\"padding-left:5%;\" >\n" +
    "			<span>场地位置</span><span style=\"padding-left:24px;\"><strong>{{coach.site.tip}}</strong></span>\n" +
    "		</div>\n" +
    "	</ion-content>\n" +
    "	<div class=\"footerr\">\n" +
    "	</div>\n" +
    "	<button class=\"footButton\" ng-click=\"bindCoach()\">绑定教练</button>\n" +
    "</ion-view>\n" +
    "");
  $templateCache.put("template/coachList.html",
    "<ion-view title=\"益驾学车-找教练\">\n" +
    "	<ion-content >\n" +
    "		<div class=\"list list-inset\" style=\"margin-bottom:5px\">\n" +
    "			<label class=\"item item-input coachSearch\" >\n" +
    "			   <i class=\"icon ion-search placeholder-icon\"></i>\n" +
    "			   <input type=\"text\" placeholder=\"输入教练名字\" ng-model=\"coach.key\" class=\"coachInput\">\n" +
    "			</label>\n" +
    "			<button class=\"button button-balanced coachSubmit\" ng-click=\"search()\">\n" +
    "		      	搜索\n" +
    "		    </button>\n" +
    "		</div>\n" +
    "		<div class=\"filterCoach\" style=\"margin-bottom:5px\">\n" +
    "			<span>\n" +
    "				<select ng-model=\"coach.filterArea\">\n" +
    "					<option value=\"999999\">全部区域</option><!-- {{coachTotalCount}}人 -->\n" +
    "					<option ng-repeat=\"area in areaList\" value=\"{{area.id}}\"><span>{{area.name}}</span><span>{{area.coachCount}}人</span></option>\n" +
    "				</select>\n" +
    "			</span>\n" +
    "			<span>\n" +
    "				<select ng-model=\"coach.filterNone\">\n" +
    "					<option value=\"default\">默认排序</option>\n" +
    "					<option value=\"distance\">距离最近</option>\n" +
    "					<option value=\"view\">查看最多</option>\n" +
    "					<option value=\"comment\">评价最高</option>\n" +
    "				</select>\n" +
    "			</span>\n" +
    "			<span id=\"filterModel\">\n" +
    "				<select ng-model=\"coach.filterModel\" >\n" +
    "					<option value=\"\">默认类型</option>\n" +
    "					<option value=\"0\">一人一车</option>\n" +
    "					<option value=\"1\">一人多车</option>\n" +
    "				</select>\n" +
    "			</span>\n" +
    "		</div>\n" +
    "		<div class=\"list\" ng-show=\"coachShow\">\n" +
    "			<coach-list ng-repeat=\"(key,coach) in coachList\"></coach-list>\n" +
    "		</div>\n" +
    "		<ion-infinite-scroll ng-if=\"moreDataCanBeLoaded()\" icon=\"ion-loading-c\" on-infinite=\"loadMoreData()\"></ion-infinite-scroll>\n" +
    "	</ion-content>\n" +
    "</ion-view>");
  $templateCache.put("template/code.html",
    "<ion-view title=\"助驾帮\">\n" +
    "	<ion-content>\n" +
    "		<div class=\"container\">\n" +
    "			\n" +
    "		</div>\n" +
    "	</ion-content>\n" +
    "</ion-view>");
  $templateCache.put("template/fixName.html",
    "<ion-view title=\"助驾帮-个人中心\">\n" +
    "	<ion-content>\n" +
    "		<div class=\"container\">\n" +
    "			<img ng-src=\"{{userInfo.avator.large}}\" class=\"userImageTemp\">\n" +
    "			<div class=\"content\" style=\"width:100%;\">\n" +
    "				<form class=\"infoForm\">\n" +
    "					<label style=\"float:left;height:34px;line-height:34px\">姓名:</label>\n" +
    "					<input style=\"float:left;padding-left:1em\" type=\"text\" ng-model=\"userInfo.name\" class=\"userInfoName\">\n" +
    "				</form>\n" +
    "				<button ng-click=\"fixedName()\" class=\"fixedName\">提交</button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</ion-content>\n" +
    "</ion-view>");
  $templateCache.put("template/judgeMent.html",
    "<ion-view title=\"助驾帮\">\n" +
    "	<ion-content>\n" +
    "		<div class=\"container\">\n" +
    "			\n" +
    "		</div>\n" +
    "	</ion-content>\n" +
    "</ion-view>");
  $templateCache.put("template/login.html",
    "<ion-view title=\"助驾帮-登录\">\n" +
    "	<ion-content>\n" +
    "		<div class=\"container\">\n" +
    "			<div class=\"header\">\n" +
    "				<p>登录</p>\n" +
    "			</div>\n" +
    "			<div class=\"mainPhone\">\n" +
    "				<div class=\"mainTop\">\n" +
    "					<input type=\"text\" placeholder=\"手机号\" class=\"phone\" ng-model=\"loginTempItem.phone\" style=\"width:100%\">\n" +
    "				</div>\n" +
    "				<div class=\"mainBottom\" style=\"margin-top:25px\">\n" +
    "					<input type=\"password\" placeholder=\"请输入6-15位密码\"  class=\"identify\" ng-model=\"loginTempItem.password\">\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<p class=\"agreeMentTemp\" style=\"margin-top:20px\"> 点击登录即代表同意助驾帮服务协议</p>\n" +
    "			<div class=\"goButton\" ng-click=\"loginIn()\">登录</div>\n" +
    "		</div>\n" +
    "	</ion-content>\n" +
    "</ion-view>");
  $templateCache.put("template/menu.html",
    "<ion-view>\n" +
    "  	<ion-nav-view name=\"menuContent\">\n" +
    "  	\n" +
    "  	</ion-nav-view>\n" +
    "</ion-view>");
  $templateCache.put("template/order.html",
    "<span class=\"dateModel\">{{order.date}}</span>\n" +
    "<span class=\"dateModelWeek\">{{order.weekDay}}</span>\n" +
    "<div class=\"clear\"></div>\n" +
    "<div class=\"orderPartMent\"><!-- 日期排版 -->\n" +
    "	<div ng-repeat=\"(keyEle,orderEle) in order.Morning\" class=\"morning\"  ng-class=\"{orderSuccess : orderEle.contentItem == '已预约',restSuccess : orderEle.content == '教练休息',sendSuccess : orderEle.content == '送考',thirdSuccess : orderEle.content == '科目三可约',haveSuccess : orderEle.contentItem == '不可约'}\" ng-click=\"forOrder(order,orderEle)\">\n" +
    "		<span ng-hide=\"orderEle.content == '教练休息' || orderEle.content == '送考'\" ng-class=\"{havaTOHide : orderEle.content == '科目三可约'}\">{{orderEle.time}}</span><span ng-class=\"{forLine : orderEle.content == '送考' ||  orderEle.content == '教练休息' }\">{{orderEle.content}}</span><br><span>{{orderEle.contentItem}}</span><span style=\"display:none\">{{orderEle.id}}</span><br><span>{{orderEle.max }}</span><br><span ng-show=\"orderEle.content == '科目三可约'\">已约{{orderEle.count }}人</span>\n" +
    "	</div>\n" +
    "	<div ng-repeat=\"(keyEle,orderEle) in order.Afternoon\" class=\"afternoon\"  ng-class=\"{orderSuccess : orderEle.contentItem == '已预约',restSuccess : orderEle.content == '教练休息',sendSuccess : orderEle.content == '送考',thirdSuccess : orderEle.content == '科目三可约',haveSuccess : orderEle.contentItem == '不可约'}\" ng-click=\"forOrder(order,orderEle)\">\n" +
    "		<span ng-hide=\" orderEle.content == '教练休息' || orderEle.content == '送考'\" ng-class=\"{havaTOHide :orderEle.content == '科目三可约'}\">{{orderEle.time}}</span><span ng-class=\"{forLine : orderEle.content == '送考'  ||  orderEle.content == '教练休息'}\">{{orderEle.content}}</span><br><span>{{orderEle.contentItem}}</span><span style=\"display:none\">{{orderEle.id}}</span><br><span>{{orderEle.max }}</span><br><span ng-show=\"orderEle.content == '科目三可约'\">已约{{orderEle.count }}人</span>\n" +
    "	</div>\n" +
    "	<div ng-repeat=\"(keyEle,orderEle) in order.Evening\" class=\"evening\" ng-class=\"{orderSuccess : orderEle.contentItem == '已预约',restSuccess : orderEle.content == '教练休息',sendSuccess : orderEle.content == '送考',thirdSuccess : orderEle.content == '科目三可约',haveSuccess : orderEle.contentItem == '不可约'}\" ng-click=\"forOrder(order,orderEle)\">\n" +
    "		<span ng-hide=\"orderEle.content == '教练休息' || orderEle.content == '送考'\" ng-class=\"{havaTOHide : orderEle.content == '科目三可约'}\">{{orderEle.time}}</span><span ng-class=\"{forLine : orderEle.content == '送考'  ||  orderEle.content == '教练休息'}\">{{orderEle.content}}</span><br><span>{{orderEle.contentItem}}</span><span style=\"display:none\">{{orderEle.id}}</span><br><span>{{orderEle.max}}</span><br><span ng-show=\"orderEle.content == '科目三可约'\">已约{{orderEle.count }}人</span>\n" +
    "	</div>\n" +
    "</div>");
  $templateCache.put("template/orderItem.html",
    "<span class=\"dateModel\">{{order.date}}</span>\n" +
    "<span class=\"dateModelWeek\">{{order.weekDay}}</span>\n" +
    "<div class=\"clear\"></div>\n" +
    "<div class=\"orderPartMent\" ><!-- 日期排版 -->\n" +
    "	<div ng-repeat=\"(keyEle,orderEle) in order.today\" class=\"morning\" style=\"width:33%;float:left;height:80px;margin-bottom:15px\" ng-class=\"{orderSuccess : orderEle.contentItem == '已预约',restSuccess : orderEle.content == '教练休息',sendSuccess : orderEle.content == '送考',thirdSuccess : orderEle.content == '科目三可约',haveSuccess : orderEle.contentItem == '不可约'}\"  ng-click=\"forOrder(order,orderEle)\">\n" +
    "		<span ng-hide=\"orderEle.contentItem == '已预约' || orderEle.content == '教练休息' || orderEle.content == '送考'|| orderEle.content == '科目三可约'|| orderEle.content == '不可约'\">{{orderEle.timeTemp}}</span><br ng-hide=\"orderEle.contentItem == '已预约' || orderEle.content == '教练休息' || orderEle.content == '送考'|| orderEle.content == '科目三可约'|| orderEle.content == '不可约'\"><span ng-hide=\"orderEle.content == '教练休息' || orderEle.content == '送考'|| orderEle.content == '科目三可约'\" >{{orderEle.time}}</span><span style=\"display:none\">{{orderEle.id}}</span><br ng-hide=\"orderEle.content == '教练休息' || orderEle.content == '送考'|| orderEle.content == '科目三可约' || orderEle.contentItem == '已预约' \"  ><span ng-class=\"{forLine : orderEle.content == '送考'|| orderEle.content == '教练休息'}\">{{orderEle.content}}</span><br><span>{{orderEle.contentItem}}</span><br><span>{{orderEle.max}}</span><br><span ng-show=\"orderEle.content == '科目三可约'\">已约{{orderEle.count}}人</span>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("template/orderMuch.html",
    "<ion-view title=\"助驾帮-约课系统\">\n" +
    "	<ion-content>\n" +
    "		<div class=\"container\">\n" +
    "			<p class=\"header\" style=\"text-align:center;color:white\">\n" +
    "				我要约课\n" +
    "			</p>\n" +
    "			<p class=\"alertInfo\"></p>\n" +
    "			<div class=\"content\">\n" +
    "				<order-much ng-repeat=\"(key,order) in orderList\" ></order-much>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</ion-content>\n" +
    "</ion-view>");
  $templateCache.put("template/orderTemp.html",
    "<ion-view title=\"助驾帮-约课系统\">\n" +
    "	<ion-content>\n" +
    "		<div class=\"container\">\n" +
    "			<p class=\"header\" style=\"text-align:center;color:white\">\n" +
    "				我要约课\n" +
    "			</p>\n" +
    "			<p class=\"alertInfo\">温馨提示:教练安排科目三,送考,休息是按上午,下午,或晚上来安排,学员预约其中一个时间点即视为预约整个时段</p>\n" +
    "			<div class=\"content\">\n" +
    "				<order-list ng-repeat=\"(key,order) in orderList\"></order-list>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</ion-content>\n" +
    "</ion-view>");
  $templateCache.put("template/person.html",
    "<ion-view title=\"助驾帮-个人中心\">\n" +
    "	<ion-content>\n" +
    "		<div class=\"container\">\n" +
    "			<img ng-src=\"{{userInfo.avator.large}}\" class=\"userImageTemp\">\n" +
    "			<div class=\"content forPosition\" style=\"width:100%;margin-top:100px\">\n" +
    "				<div class=\"mainBottom\" style=\"margin-top:25px;margin-left:5%\">\n" +
    "					<span style=\"letter-spacing:2em\">姓名</span>\n" +
    "					<span style=\"padding-left:-1.5em\">{{userInfo.name}}</span>\n" +
    "					<span><a href=\"/yja/fixName\"><button class=\"bindCoachTempItem\">修改姓名</button></a></span>\n" +
    "				</div>\n" +
    "				<div class=\"mainBottom\" style=\"margin-top:25px;margin-left:5%\">\n" +
    "					<span style=\"letter-spacing:2em\">电话</span>\n" +
    "					<span style=\"padding-left:-1.5em\">{{userInfo.phone}}</span>\n" +
    "				</div>\n" +
    "				<div class=\"mainBottom\" style=\"margin-top:25px;margin-left:5%\">\n" +
    "					<span>绑定教练</span>\n" +
    "					<span style=\"padding-left:2em\" ng-show=\"haveCoach\">{{userInfo.coach.name}}</span>\n" +
    "					<span style=\"padding-left:1.5em\" ng-show=\"noCoach\" ><button style=\"display:inline-block\" class=\"bindCoachTemp\" ng-click=\"changeUrl()\">绑定教练</button></span>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</ion-content>\n" +
    "</ion-view>");
  $templateCache.put("template/register.html",
    "<ion-view title=\"助驾帮-登录\">\n" +
    "	<ion-content>\n" +
    "		<div class=\"container\">\n" +
    "			<div class=\"header\">\n" +
    "				<p>注册</p>\n" +
    "			</div>\n" +
    "			<div class=\"mainPhone\">\n" +
    "				<div class=\"mainTop\">\n" +
    "					<input type=\"text\" placeholder=\"手机号\" class=\"phone\" ng-model=\"login.phone\">\n" +
    "					<button class=\"submitPhone\" ng-click=\"getIdentify()\">获取验证码</button>\n" +
    "				</div>\n" +
    "				<small class=\"error\">请输入正确的手机号</small>\n" +
    "				<div class=\"mainBottom\">\n" +
    "					<input type=\"text\" placeholder=\"验证码\"  class=\"identify\" ng-model=\"login.identify\">\n" +
    "				</div>\n" +
    "				<div class=\"mainBottom\" style=\"margin-top:5px\">\n" +
    "					<input type=\"text\" placeholder=\"请输入姓名\"  class=\"identify\" ng-model=\"extra.name\">\n" +
    "				</div>\n" +
    "				<div class=\"mainBottom\" style=\"margin-top:5px\">\n" +
    "					<input type=\"password\" placeholder=\"请输入6-15位密码\"  class=\"identify\" ng-model=\"login.password\">\n" +
    "				</div>\n" +
    "				<div class=\"mainBottom\" style=\"margin-top:5px\">\n" +
    "					<input type=\"password\" placeholder=\"请再次输入密码\"  class=\"identify\" ng-model=\"login.identifyPassword\">\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<p class=\"agreeMentTemp\"> 点击注册即代表同意助驾帮服务协议</p>\n" +
    "			<div class=\"goButton\" ng-click=\"register()\">注册</div>\n" +
    "			<div class=\"goButton\" ng-click=\"forCallback()\" style=\"position:fixed;bottom:10px;left:0%\">已有账号直接登录</div>\n" +
    "		</div>\n" +
    "	</ion-content>\n" +
    "</ion-view>");
  $templateCache.put("template/reload.html",
    "<ion-view title=\"助驾帮\">\n" +
    "	<ion-content>\n" +
    "		<div class=\"container\">\n" +
    "			\n" +
    "		</div>\n" +
    "	</ion-content>\n" +
    "</ion-view>");
}]);