webpackHotUpdate(0,{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return Swiper; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(105);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(126);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_swipeable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(128);



var _jsxFileName = "/home/kre1z0/Projects/everpoint-site/src/components/Swiper/Swiper.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).enterModule;
  enterModule && enterModule(module);
})();


 // https://github.com/dogfessional/react-swipeable



var Swiper =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(Swiper, _Component);

  function Swiper() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.swipeableNode = null;
    _this.onSwiping = void 0;

    _this.ratioDistance = function (deltaX, deltaY) {
      if (!_this.swipeableNode) {
        return {
          xRatio: null,
          yRatio: null
        };
      }

      var _getElementWidthAndHe = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_6__["getElementWidthAndHeight"])(_this.swipeableNode),
          width = _getElementWidthAndHe.width,
          height = _getElementWidthAndHe.height;

      var xRatio = Math.abs(deltaX) * 100 / width;
      var yRatio = Math.abs(deltaY) * 100 / height;
      return {
        xRatio: xRatio,
        yRatio: yRatio
      };
    };

    _this.swiped = function (event, deltaX, deltaY, isFlick, velocity) {
      var onSwiped = _this.props.onSwiped;

      _this.ratioDistance(deltaX, deltaY);

      onSwiped && onSwiped(Object.assign({
        event: event,
        deltaX: deltaX,
        deltaY: deltaY,
        isFlick: isFlick,
        velocity: velocity
      }, _this.direction(deltaX, deltaY), _this.ratioDistance(deltaX, deltaY)));
    };

    _this.onSwiperRef = function (ref) {
      if (ref) {
        _this.swipeableNode = ref;
      }
    };

    return _this;
  }

  var _proto = Swiper.prototype;

  _proto.direction = function direction(deltaX, deltaY) {
    var x = deltaX > 0;
    var y = deltaY > 0;
    return {
      isLeft: x,
      isRight: !x,
      isUp: y,
      isDown: !y
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        onSwiping = _this$props.onSwiping,
        props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default()(_this$props, ["children", "onSwiping"]);

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_swipeable__WEBPACK_IMPORTED_MODULE_5___default.a, Object.assign({}, props, {
      innerRef: this.onSwiperRef,
      onSwiped: this.swiped,
      onSwiping: this.swiping,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }), children);
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Swiper;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);
Swiper.propTypes = {
  onSwiped: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Swiper, "Swiper", "/home/kre1z0/Projects/everpoint-site/src/components/Swiper/Swiper.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ })

})
//# sourceMappingURL=0.792d4509ebfcb9d30ee2.hot-update.js.map