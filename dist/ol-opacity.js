"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _Control2=_interopRequireDefault(require("ol/control/Control"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _instanceof(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):e instanceof t}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!_instanceof(e,t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _get(e,t,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=_superPropBase(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){return function(){var t,n=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var r=_getPrototypeOf(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var defaultOptions={baseLayers:null,overLayers:null,opacityControl:!1},OpacityControl=function(e){_inherits(n,_Control2.default);var t=_createSuper(n);function n(e){var r;_classCallCheck(this,n);var o=e||{};r=t.call(this,o);var a=document.createElement("div");return r.element=a,r.baseLayersOption_=o.baseLayers||defaultOptions.baseLayers,r.overLayersOption_=o.overLayers||defaultOptions.overLayers,r.opacityControlOption_=o.opacityControl||defaultOptions.opacityControl,r}return _createClass(n,[{key:"setMap",value:function(e){_get(_getPrototypeOf(n.prototype),"setMap",this).call(this,e),e&&(e.render(),this.map_=e,this.opacityControlAdd_())}},{key:"radioButtonControlAdd_",value:function(e,t){var n=this,r=document.createElement("input");r.setAttribute("type","radio"),r.id=e,this.map_.getLayers().forEach(function(t){"baseLayer"===t.values_.id&&t.getLayers().forEach(function(n){n.setVisible(!1),e===t.getLayers().array_[0].values_.id&&(r.checked=!0,n.setVisible(!0))})}),this.element.appendChild(r),r.addEventListener("change",function(e){e.target.checked=!0,n.map_.getLayers().forEach(function(t){"baseLayer"===t.values_.id&&t.getLayers().forEach(function(t){document.getElementById(t.values_.id).checked=!1,t.setVisible(!1),e.target.id===t.values_.id&&(r.checked=!0,t.setVisible(!0))})})});var o=document.createElement("span");o.appendChild(document.createTextNode(t)),this.element.appendChild(o)}},{key:"checkBoxControlAdd_",value:function(e,t){var n=this,r=document.createElement("input");r.setAttribute("type","checkbox"),r.id=e,this.map_.getLayers().forEach(function(e){"overLayer"===e.values_.id&&e.getLayers().forEach(function(e){e.setVisible(!1)})}),this.element.appendChild(r),r.addEventListener("change",function(e){var t=e.target.checked;n.map_.getLayers().forEach(function(n){"overLayer"===n.values_.id&&n.getLayers().forEach(function(n){e.target.id===n.values_.id&&(t?n.setVisible(!0):n.setVisible(!1))})})});var o=document.createElement("span");o.appendChild(document.createTextNode(t)),this.element.appendChild(o)}},{key:"rangeControlAdd_",value:function(e){var t=this,n=document.createElement("input");n.type="range",n.min=0,n.max=100,n.value=100,this.element.appendChild(n),n.id=e,n.addEventListener("input",function(e){var n=e.target.value;t.map_.getLayers().forEach(function(t){"overLayer"===t.values_.id&&t.getLayers().forEach(function(t){e.target.id===t.values_.id&&t.setOpacity(Number(n/100))})})})}},{key:"opacityControlAdd_",value:function(){var e=this;if(this.element.className="ol-opacity",this.element.id="opacity-control",null!==this.baseLayersOption_&&this.map_.getLayers().forEach(function(t){"baseLayer"===t.values_.id&&t.getLayers().forEach(function(t){var n=t.values_.id,r=t.values_.title,o=document.createElement("br");e.radioButtonControlAdd_(n,r),e.element.appendChild(o)})}),null!==this.baseLayersOption_&&null!==this.overLayersOption_){var t=document.createElement("hr");this.element.appendChild(t)}null!==this.overLayersOption_&&this.map_.getLayers().forEach(function(t){"overLayer"===t.values_.id&&t.getLayers().forEach(function(t){var n=t.values_.id,r=t.values_.title,o=document.createElement("br");e.checkBoxControlAdd_(n,r),e.element.appendChild(o),e.opacityControlOption_&&(e.rangeControlAdd_(n),e.element.appendChild(o))})})}}]),n}(),_default=OpacityControl;exports.default=_default;