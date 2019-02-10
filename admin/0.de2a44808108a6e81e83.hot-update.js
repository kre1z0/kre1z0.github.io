webpackHotUpdate(0,{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementWidthAndHeight", function() { return getElementWidthAndHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementInViewport", function() { return isElementInViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVhProperty", function() { return setVhProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillElementsInViewport", function() { return fillElementsInViewport; });
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).enterModule;
  enterModule && enterModule(module);
})();

// cross-browser
var getElementWidthAndHeight = function getElementWidthAndHeight(element) {
  if (!element) {
    return {
      width: 0,
      height: 0
    };
  }

  var box = element.getBoundingClientRect();
  var width = box.right - box.left;
  var height = box.bottom - box.top;
  return {
    width: width,
    height: height
  };
};
var isElementInViewport = function isElementInViewport(_ref) {
  var el = _ref.el,
      _ref$offsetY = _ref.offsetY,
      offsetY = _ref$offsetY === void 0 ? 0 : _ref$offsetY,
      _ref$offsetTop = _ref.offsetTop,
      offsetTop = _ref$offsetTop === void 0 ? 0 : _ref$offsetTop;

  var _el$getBoundingClient = el.getBoundingClientRect(),
      top = _el$getBoundingClient.top,
      left = _el$getBoundingClient.left,
      bottom = _el$getBoundingClient.bottom,
      right = _el$getBoundingClient.right;

  return top + offsetY - offsetTop >= 0 && left >= 0 && bottom - offsetY <= (window.innerHeight || document.documentElement.clientHeight) && right <= (window.innerWidth || document.documentElement.clientWidth);
};

var setVhPropertyFromOrientationChanged = function setVhPropertyFromOrientationChanged() {
  var timeout = 120;
  return new window.Promise(function (resolve) {
    var go = function go(i, height0) {
      window.innerHeight !== height0 || i >= timeout ? resolve() : window.requestAnimationFrame(function () {
        return go(i + 1, height0);
      });
    };

    go(0, window.innerHeight);
  });
};

var setVhProperty = function setVhProperty() {
  if (typeof window !== "object") {
    return;
  }

  var vh = window.innerHeight * 0.01;
  console.info("--> setVhPropertyFromOrientationChanged ggwp", setVhPropertyFromOrientationChanged());
  document.documentElement.style.setProperty("--vh", vh + "px");
};
var fillElementsInViewport = function fillElementsInViewport(_ref2) {
  var containerElement = _ref2.containerElement,
      items = _ref2.items,
      _ref2$offsetY = _ref2.offsetY,
      offsetY = _ref2$offsetY === void 0 ? 0 : _ref2$offsetY,
      viewportHeight = _ref2.viewportHeight,
      _ref2$inViewportOff = _ref2.inViewportOff,
      inViewportOff = _ref2$inViewportOff === void 0 ? false : _ref2$inViewportOff;

  var _containerElement$get = containerElement.getBoundingClientRect(),
      bottom = _containerElement$get.bottom,
      height = _containerElement$get.height;

  var itemsInViewPort = 0;
  var inViewport = bottom - viewportHeight <= 0;

  if (inViewport || inViewportOff) {
    var totalAmount = inViewportOff ? height : viewportHeight - offsetY - height;
    var scrolled = Math.abs(bottom - viewportHeight);
    var diff = totalAmount - scrolled;
    var percentageOfTotalAmount = Math.max(100 - diff * 100 / totalAmount);
    var percent = percentageOfTotalAmount > 100 ? 100 : percentageOfTotalAmount;
    itemsInViewPort = inViewportOff ? items - Math.round(items * percent / 100) : Math.round(items * percent / 100);
  } else {
    itemsInViewPort = 0;
  }

  return itemsInViewPort;
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getElementWidthAndHeight, "getElementWidthAndHeight", "/home/kre1z0/Projects/everpoint-site/src/utils/dom.js");
  reactHotLoader.register(isElementInViewport, "isElementInViewport", "/home/kre1z0/Projects/everpoint-site/src/utils/dom.js");
  reactHotLoader.register(setVhPropertyFromOrientationChanged, "setVhPropertyFromOrientationChanged", "/home/kre1z0/Projects/everpoint-site/src/utils/dom.js");
  reactHotLoader.register(setVhProperty, "setVhProperty", "/home/kre1z0/Projects/everpoint-site/src/utils/dom.js");
  reactHotLoader.register(fillElementsInViewport, "fillElementsInViewport", "/home/kre1z0/Projects/everpoint-site/src/utils/dom.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ })

})
//# sourceMappingURL=0.de2a44808108a6e81e83.hot-update.js.map