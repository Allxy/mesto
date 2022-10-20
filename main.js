/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var e=function(){function e(t,n,r,o,i,a,u){var c=t.name,l=t.link,s=t.likes;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=c,this._imgUrl=l,this._templateSelector=o,this._handleCardClick=i,this._handleLikeClick=a,this._handleTrashClick=u,this._likeCount=s.length,this._isLiked=n,this._isOwner=r}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".place").cloneNode(!0)}},{key:"_clickCardImageHandler",value:function(){this._handleCardClick(this._title,this._imgUrl)}},{key:"_clickTrashButtonHandler",value:function(){this._handleTrashClick()}},{key:"_clickLikeButtonHandler",value:function(){this._handleLikeClick(this._isLiked)}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){return t._clickLikeButtonHandler()})),this._isOwner&&this._trashButton.addEventListener("click",(function(){return t._clickTrashButtonHandler()})),this._imageElement.addEventListener("click",(function(){return t._clickCardImageHandler()}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._titleElement=this._element.querySelector(".place__title"),this._likeCountElement=this._element.querySelector(".place__like-count"),this._imageElement=this._element.querySelector(".place__img"),this._likeButton=this._element.querySelector(".place__like-btn"),this._trashButton=this._element.querySelector(".place__trash-btn"),this._isOwner||this._trashButton.remove(),this._isLiked&&this.setLike(this._likeCount),this._imageElement.src=this._imgUrl,this._imageElement.alt=this._title,this._titleElement.textContent=this._title,this._likeCountElement.textContent=this._likeCount,this._setEventListeners(),this._element}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"setLike",value:function(t){this._likeButton.classList.add("place__like-btn_active"),this._likeCountElement.textContent=t,this._isLiked=!0}},{key:"removeLike",value:function(t){this._likeButton.classList.remove("place__like-btn_active"),this._likeCountElement.textContent=t,this._isLiked=!1}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(e,r){var o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._fieldSetSelector=e.fieldSetSelector,this._inputSelector=e.inputSelector,this._inputErrorSelector=e.inputErrorSelector,this._submitButtonSelector=e.submitButtonSelector,this._submitButtonDisabledClass=e.submitButtonDisabledClass,this._inputErrorActiveClass=e.inputErrorActiveClass,this._formElement=r,this._inputList=function(t){if(Array.isArray(t))return n(t)}(o=this._formElement.querySelectorAll(this._inputSelector))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(o)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var e,o;return e=t,(o=[{key:"_showInputError",value:function(t){var e=this._formElement.querySelector("#".concat(t.id,"-error"));t.classList.add(this._inputErrorSelector),e.textContent=t.validationMessage,e.classList.add(this._inputErrorActiveClass)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector("#".concat(t.id,"-error"));t.classList.remove(this._inputErrorSelector),e.classList.remove(this._inputErrorActiveClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.setAttribute("disabled",""),this._buttonElement.classList.add(this._submitButtonDisabledClass)):(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._submitButtonDisabledClass))}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this._toggleButtonState()}}])&&r(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(e){var n,r,o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=function(t){"Escape"===t.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(e),this._closeButton=this._popup.querySelector(".popup__close-btn")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",(function(e){(e.target===e.currentTarget||e.target.classList.contains("popup__close-btn"))&&t.close()}))}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=s(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},l.apply(this,arguments)}function s(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}function f(t,e){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},f(t,e)}function p(t,e){if(e&&("object"===u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=h(r);if(o){var n=h(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return p(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._imageElement=e._popup.querySelector(".popup__image"),e._captionElement=e._popup.querySelector(".popup__img-caption"),e}return e=a,(n=[{key:"open",value:function(t,e){l(h(a.prototype),"open",this).call(this),this._imageElement.setAttribute("src",e),this._imageElement.setAttribute("alt",t+"."),this._captionElement.textContent=t}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(a);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=b(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},_.apply(this,arguments)}function b(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function w(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(r);if(o){var n=E(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return w(this,t)});function a(t,e){var n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._submitCallback=e,n._formElement=n._popup.querySelector(".popup__form"),n._inputList=function(t){if(Array.isArray(t))return v(t)}(r=n._formElement.querySelectorAll(".popup__input"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n._saveButton=n._popup.querySelector(".popup__save-btn"),n._isLoading=!1,n}return e=a,(n=[{key:"_getInputValues",value:function(){return this._inputList.reduce((function(t,e){return t[e.name]=e.value,t}),{})}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){t[e.name]&&(e.value=t[e.name])}))}},{key:"getFormElement",value:function(){return this._formElement}},{key:"setEventListeners",value:function(){var t=this;_(E(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._isLoading||(t._submitCallback(t._getInputValues()),t._saveButton.textContent="Сохранение...",t._isLoading=!0)}))}},{key:"close",value:function(){_(E(a.prototype),"close",this).call(this),this._isLoading=!1,this._saveButton.textContent="Сохранить",this._formElement.reset()}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(a);function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var L=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=document.querySelector(n)}var e,n;return e=t,n=[{key:"renderItems",value:function(t){var e=this;this.clear(),t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e?this._container.append(t):this._container.prepend(t)}},{key:"addItems",value:function(t,e){var n=this;t.forEach((function(t){e?n._container.append(t):n._container.prepend(t)}))}},{key:"clear",value:function(){this._container.innerHTML=""}}],n&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var j=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameElement=document.querySelector(e),this._aboutElement=document.querySelector(n),this._avatarElement=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,about:this._aboutElement.textContent}}},{key:"setUserInfo",value:function(t,e){this._nameElement.textContent=t,this._aboutElement.textContent=e}},{key:"setAvatar",value:function(t){this._avatarElement.src=t}},{key:"setId",value:function(t){this._id=t}},{key:"getId",value:function(){return this._id}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),C={fieldSetSelector:".popup__fieldset",inputSelector:".popup__input",inputErrorSelector:".popup__input_error",submitButtonSelector:".popup__save-btn",submitButtonDisabledClass:"popup__save-btn_disabled",inputErrorActiveClass:"popup__input-error_active"},P=document.querySelector(".profile__edit-btn"),x=document.querySelector(".profile__add-btn"),I=document.querySelector(".profile__avatar");function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}var B=["baseUrl"];function A(){A=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new k(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=g(a,n);if(u){if(u===s)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var s={};function f(){}function p(){}function h(){}var y={};u(y,o,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(O([])));v&&v!==e&&n.call(v,o)&&(y=v);var m=h.prototype=f.prototype=Object.create(y);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function r(o,i,a,u){var c=l(t[o],t,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==T(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function g(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,g(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=h,u(m,"constructor",h),u(h,"constructor",p),p.displayName=u(h,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u(t,a,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},_(b.prototype),u(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new b(c(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(m),u(m,a,"Generator"),u(m,o,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}function R(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?R(Object(n),!0).forEach((function(e){U(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function U(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function D(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var N=function(){function t(e){var n=e.baseUrl,r=function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(e,B);!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._options=r}var e,n,r,o;return e=t,n=[{key:"_fetch",value:(r=A().mark((function t(e){var n,r,o,i,a,u=arguments;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",r=u.length>2?u[2]:void 0,o=q(q({},this._options),{},{method:n}),r&&(o.body="string"==typeof r?r:JSON.stringify(r)),t.next=6,fetch(this._baseUrl+e,o);case 6:return i=t.sent,t.next=9,i.json();case 9:if(a=t.sent,!i.ok){t.next=12;break}return t.abrupt("return",a);case 12:throw new Error(a.message);case 13:case"end":return t.stop()}}),t,this)})),o=function(){var t=this,e=arguments;return new Promise((function(n,o){var i=r.apply(t,e);function a(t){D(i,n,o,a,u,"next",t)}function u(t){D(i,n,o,a,u,"throw",t)}a(void 0)}))},function(t){return o.apply(this,arguments)})},{key:"getUser",value:function(){return this._fetch("users/me")}},{key:"patchUser",value:function(t){return this._fetch("users/me","PATCH",t)}},{key:"setAvatar",value:function(t){return this._fetch("users/me/avatar","PATCH",t)}},{key:"addCard",value:function(t){return this._fetch("cards","POST",t)}},{key:"removeCard",value:function(t){return this._fetch("cards/"+t,"DELETE")}},{key:"getCards",value:function(){return this._fetch("cards")}},{key:"setLike",value:function(t){return this._fetch("cards/"+t+"/likes","PUT")}},{key:"removeLike",value:function(t){return this._fetch("cards/"+t+"/likes","DELETE")}}],n&&V(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function H(){return H="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=M(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},H.apply(this,arguments)}function M(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=z(t)););return t}function Y(t,e){return Y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Y(t,e)}function $(t,e){if(e&&("object"===F(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function z(t){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},z(t)}var J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Y(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=z(r);if(o){var n=z(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return $(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._callback=e,n._confirmButton=n._popup.querySelector(".popup__save-btn"),n._isLoading=!1,n}return e=a,(n=[{key:"open",value:function(t){H(z(a.prototype),"open",this).call(this),this._data=t}},{key:"close",value:function(){H(z(a.prototype),"close",this).call(this),this._isLoading=!1}},{key:"setEventListeners",value:function(){var t=this;H(z(a.prototype),"setEventListeners",this).call(this),this._confirmButton.addEventListener("click",(function(){t._isLoading||(t._isLoading=!0,t._confirmButton.textContent="Сохранение...",t._callback(t._data))}))}}])&&G(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(a);function K(t){var n=new e(t,Boolean(t.likes.find((function(t){return t._id===W.getId()}))),W.getId()===t.owner._id,".place-card-template",Z.open.bind(Z),(function(e){e?Q.removeLike(t._id).then((function(t){return n.removeLike(t.likes.length)})):Q.setLike(t._id).then((function(t){return n.setLike(t.likes.length)}))}),(function(){nt.open({id:t._id,callback:n.deleteCard.bind(n)})}));return n.generateCard()}var Q=new N({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-52/",headers:{authorization:"47016496-8e67-44e3-804c-b828c4f61e69","Content-Type":"application/json"}}),W=new j(".profile__name",".profile__about",".profile__avatar-image"),X=Q.getUser().then((function(t){W.setUserInfo(t.name,t.about),W.setAvatar(t.avatar),W.setId(t._id)})),Z=new y(".popup-image"),tt=new k(".popup-addcard",(function(t){return Q.addCard(t).then((function(t){return ot.addItem(K(t))})).finally((function(){return tt.close()}))})),et=new k(".popup-edit",(function(t){Q.patchUser(t).then((function(t){return W.setUserInfo(t.name,t.about)})).finally((function(){return et.close()}))})),nt=new J(".popup-delete",(function(t){var e=t.id,n=t.callback;Q.removeCard(e).then((function(){n()})).finally((function(){return nt.close()}))})),rt=new k(".popup-avatar",(function(t){Q.setAvatar({avatar:t.link}).then(W.setAvatar(t.link)).finally((function(){return rt.close()}))}));Z.setEventListeners(),tt.setEventListeners(),et.setEventListeners(),nt.setEventListeners(),rt.setEventListeners();var ot=new L((function(t){return ot.addItem(K(t),!0)}),".places");X.then((function(){return Q.getCards().then((function(t){ot.renderItems(t)}))}));var it=new o(C,tt.getFormElement()),at=new o(C,et.getFormElement()),ut=new o(C,rt.getFormElement());it.enableValidation(),at.enableValidation(),ut.enableValidation(),P.addEventListener("click",(function(){et.open(),et.setInputValues(W.getUserInfo()),at.resetValidation()})),x.addEventListener("click",(function(){tt.open(),it.resetValidation()})),I.addEventListener("click",(function(){rt.open(),ut.resetValidation()}))})();