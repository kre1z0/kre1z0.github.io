webpackHotUpdate(0,{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewContainer", function() { return PreviewContainer; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(105);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_cms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(106);



var _jsxFileName = "/home/kre1z0/Projects/everpoint-site/src/components/CmsPreviewContainer/CmsPreviewContainer.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).enterModule;
  enterModule && enterModule(module);
})();



var PreviewContainer =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(PreviewContainer, _Component);

  function PreviewContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      width: 0,
      height: 0
    };

    _this.updateSize = function () {
      var _this$state = _this.state,
          width = _this$state.width,
          height = _this$state.height;

      if (_this.container) {
        var _this$container$getBo = _this.container.getBoundingClientRect(),
            w = _this$container$getBo.width,
            h = _this$container$getBo.height;

        if (width !== w || height !== h) {
          _this.setState({
            width: Math.round(w),
            height: Math.round(h)
          });
        }
      }
    };

    _this.onRef = function (ref) {
      if (ref) {
        _this.container = ref;
      }
    };

    return _this;
  }

  var _proto = PreviewContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.updateSize();
    this.interval = setInterval(function () {
      return _this2.updateSize();
    }, 444);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearInterval(this.interval);
  };

  _proto.render = function render() {
    var _this$state2 = this.state,
        width = _this$state2.width,
        height = _this$state2.height;

    var _this$props = this.props,
        children = _this$props.children,
        props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_this$props, ["children"]);

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_cms__WEBPACK_IMPORTED_MODULE_4__["Viewport"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, width, "x", height), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_cms__WEBPACK_IMPORTED_MODULE_4__["Container"], Object.assign({
      ref: this.onRef
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), children));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return PreviewContainer;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PreviewContainer, "PreviewContainer", "/home/kre1z0/Projects/everpoint-site/src/components/CmsPreviewContainer/CmsPreviewContainer.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectGlobals", function() { return injectGlobals; });
/* harmony import */ var react_fastclick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(151);
/* harmony import */ var react_fastclick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_fastclick__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).enterModule;
  enterModule && enterModule(module);
})();


var injectGlobals = function injectGlobals() {
  react_fastclick__WEBPACK_IMPORTED_MODULE_0___default()();
  return __webpack_require__(148);
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(injectGlobals, "injectGlobals", "/home/kre1z0/Projects/everpoint-site/src/components/injectGlobals.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var getReactFCInitializer = function (React) {
    return function initializeReactFastclick () {
      var originalCreateElement = React.createElement;

      // Moved if Math.abs(downX - upX) > MOVE_THRESHOLD;
      var MOVE_THRESHOLD = 8;
      var TOUCH_DELAY = 1000;

      var touchKeysToStore = [
        'clientX',
        'clientY',
        'pageX',
        'pageY',
        'screenX',
        'screenY',
        'radiusX',
        'radiusY'
      ];

      var touchEvents = {
        downPos: {},
        lastPos: {}
      };

      var isDisabled = function (element) {
        if (!element) {
          return false;
        }
        var disabled = element.getAttribute('disabled');

        return disabled !== false && disabled !== null;
      };

      var focus = function (event, target) {
        var myTarget = target || event.currentTarget;

        if (!myTarget || isDisabled(myTarget)) {
          return;
        }

        myTarget.focus();
      };

      var handleType = {
        input: function (event) {
          focus(event);
          event.stopPropagation();
        },
        textarea: function (event) {
          focus(event);
          event.stopPropagation();
        },
        select: function (event) {
          focus(event);
          event.stopPropagation();
        },
        label: function (event) {
          var input;

          var forTarget = event.currentTarget.getAttribute('for');

          if (forTarget) {
            input = document.getElementById(forTarget);
          } else {
            input = event.currentTarget.querySelectorAll('input, textarea, select')[0];
          }

          if (input) {
            focus(event, input);
          }
        }
      };

      var fakeClickEvent = function (event) {
        if (typeof event.persist === 'function') {
          event.persist();
        }

        event.fastclick = true;
        event.type = 'click';
        event.button = 0;
      };

      var copyTouchKeys = function (touch, target) {
        if (typeof target.persist === 'function') {
          target.persist();
        }

        if (touch) {
          for (var i = 0; i < touchKeysToStore.length; i += 1) {
            var key = touchKeysToStore[i];
            target[key] = touch[key];
          }
        }
      };

      var noTouchHappened = function () {
        return !touchEvents.touched && (
          !touchEvents.lastTouchDate || new Date().getTime() > touchEvents.lastTouchDate + TOUCH_DELAY
        );
      };

      var invalidateIfMoreThanOneTouch = function (event) {
        touchEvents.invalid = event.touches && event.touches.length > 1 || touchEvents.invalid;
      };

      var onMouseEvent = function (callback, event) {
        var touched = !noTouchHappened();

        // Prevent mouse events on other elements
        if (touched && event.target !== touchEvents.target) {
          event.preventDefault();
        }

        // Prevent any mouse events if we touched recently
        if (typeof callback === 'function' && !touched) {
          callback(event);
        }

        if (event.type === 'click') {
          touchEvents.invalid = false;
          touchEvents.touched = false;
          touchEvents.moved = false;
        }
      };

      var onTouchStart = function (callback, event) {
        touchEvents.invalid = false;
        touchEvents.moved = false;
        touchEvents.touched = true;
        touchEvents.target = event.target;
        touchEvents.lastTouchDate = new Date().getTime();

        copyTouchKeys(event.touches[0], touchEvents.downPos);
        copyTouchKeys(event.touches[0], touchEvents.lastPos);

        invalidateIfMoreThanOneTouch(event);

        if (typeof callback === 'function') {
          callback(event);
        }
      };

      var onTouchMove = function (callback, event) {
        touchEvents.touched = true;
        touchEvents.lastTouchDate = new Date().getTime();

        copyTouchKeys(event.touches[0], touchEvents.lastPos);

        invalidateIfMoreThanOneTouch(event);

        if (Math.abs(touchEvents.downPos.clientX - touchEvents.lastPos.clientX) > MOVE_THRESHOLD ||
          Math.abs(touchEvents.downPos.clientY - touchEvents.lastPos.clientY) > MOVE_THRESHOLD) {
          touchEvents.moved = true;
        }

        if (typeof callback === 'function') {
          callback(event);
        }
      };

      var onTouchEnd = function (callback, onClick, type, event) {
        touchEvents.touched = true;
        touchEvents.lastTouchDate = new Date().getTime();

        invalidateIfMoreThanOneTouch(event);

        if (typeof callback === 'function') {
          callback(event);
        }

        if (!touchEvents.invalid && !touchEvents.moved) {
          var box = event.currentTarget.getBoundingClientRect();

          if (touchEvents.lastPos.clientX - (touchEvents.lastPos.radiusX || 0) <= box.right &&
            touchEvents.lastPos.clientX + (touchEvents.lastPos.radiusX || 0) >= box.left &&
            touchEvents.lastPos.clientY - (touchEvents.lastPos.radiusY || 0) <= box.bottom &&
            touchEvents.lastPos.clientY + (touchEvents.lastPos.radiusY || 0) >= box.top) {

            if (!isDisabled(event.currentTarget)) {
              if (typeof onClick === 'function') {
                copyTouchKeys(touchEvents.lastPos, event);
                fakeClickEvent(event);
                onClick(event);
              }

              if (!event.defaultPrevented && handleType[type]) {
                handleType[type](event);
              }
            }
          }
        }
      };

      var propsWithFastclickEvents = function (type, props) {
        var newProps = {};

        // Loop over props
        for (var key in props) {
          // Copy props to newProps
          newProps[key] = props[key];
        }

        // Apply our wrapped mouse and touch handlers
        newProps.onClick = onMouseEvent.bind(null, props.onClick);
        newProps.onMouseDown = onMouseEvent.bind(null, props.onMouseDown);
        newProps.onMouseMove = onMouseEvent.bind(null, props.onMouseMove);
        newProps.onMouseUp = onMouseEvent.bind(null, props.onMouseUp);
        newProps.onTouchStart = onTouchStart.bind(null, props.onTouchStart);
        newProps.onTouchMove = onTouchMove.bind(null, props.onTouchMove);
        newProps.onTouchEnd = onTouchEnd.bind(null, props.onTouchEnd, props.onClick, type);

        if (typeof Object.freeze === 'function') {
          Object.freeze(newProps);
        }

        return newProps;
      };

      React.createElement = function () {
        // Convert arguments to array
        var args = Array.prototype.slice.call(arguments);

        var type = args[0];
        var props = args[1];

        // Check if basic element & has onClick prop
        if (type && typeof type === 'string' && (
          (props && typeof props.onClick === 'function') || handleType[type]
        )) {
          // Add our own events to props
          args[1] = propsWithFastclickEvents(type, props || {});
        }

        // Apply args to original createElement function
        return originalCreateElement.apply(null, args);
      };

      if (typeof React.DOM === 'object') {
        for (var key in React.DOM) {
          React.DOM[key] = React.createElement.bind(null, key);
        }
      }
    };
  };

  /* istanbul ignore next */
  // Export for commonjs / browserify
  if (true) {
    var React = __webpack_require__(9);
    module.exports = getReactFCInitializer(React);
  // Export for amd / require
  } else { var root; }
})();


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_OutsideLink_OutsideLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88);

var _jsxFileName = "/home/kre1z0/Projects/everpoint-site/src/components/News/Article/Article.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).enterModule;
  enterModule && enterModule(module);
})();





var Article = function Article(_ref) {
  var date = _ref.date,
      description = _ref.description,
      link = _ref.link,
      logo = _ref.logo,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Logo"], {
    src: logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["PublishDate"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, date), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Description"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_OutsideLink_OutsideLink__WEBPACK_IMPORTED_MODULE_3__["OutsideLink"], {
    href: link,
    className: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].read,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "\u0427\u0438\u0442\u0430\u0442\u044C"));
};
Article.propTypes = {
  date: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  link: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  logo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Article, "Article", "/home/kre1z0/Projects/everpoint-site/src/components/News/Article/Article.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var _components_Background_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34);
/* harmony import */ var _components_News_Article_Article__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41);
/* harmony import */ var _components_CmsPreviewContainer_CmsPreviewContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(104);
/* harmony import */ var _styles_about__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(110);
/* harmony import */ var _components_NewsCard_NewsCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(114);
/* harmony import */ var _styles_cms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(106);
var _jsxFileName = "/home/kre1z0/Projects/everpoint-site/src/cms/preview-templates/AboutPagePreview.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).enterModule;
  enterModule && enterModule(module);
})();












var AboutPreview = function AboutPreview(_ref) {
  var entry = _ref.entry,
      widgetFor = _ref.widgetFor;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CmsPreviewContainer_CmsPreviewContainer__WEBPACK_IMPORTED_MODULE_6__["PreviewContainer"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_components_Background_styles__WEBPACK_IMPORTED_MODULE_4__["default"].default, _components_Background_styles__WEBPACK_IMPORTED_MODULE_4__["default"].moscow),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_cms__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_about__WEBPACK_IMPORTED_MODULE_7__["NewsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NewsCard_NewsCard__WEBPACK_IMPORTED_MODULE_8__["News"], {
    title: entry.getIn(["data", "title"]),
    date: entry.getIn(["data", "date"]),
    description: entry.getIn(["data", "description"]),
    link: entry.getIn(["data", "link"]),
    logo: entry.getIn(["data", "logo"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_cms__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    style: {
      backgroundColor: "#fff",
      marginTop: "auto"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_News_Article_Article__WEBPACK_IMPORTED_MODULE_5__["Article"], {
    title: entry.getIn(["data", "title"]),
    date: Object(_utils_date__WEBPACK_IMPORTED_MODULE_3__["format"])(entry.getIn(["data", "date"])),
    description: entry.getIn(["data", "description"]),
    link: entry.getIn(["data", "link"]),
    logo: entry.getIn(["data", "logo"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })));
};

AboutPreview.propTypes = {
  entry: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    getIn: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
  }),
  widgetFor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
var _default = AboutPreview;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AboutPreview, "AboutPreview", "/home/kre1z0/Projects/everpoint-site/src/cms/preview-templates/AboutPagePreview.js");
  reactHotLoader.register(_default, "default", "/home/kre1z0/Projects/everpoint-site/src/cms/preview-templates/AboutPagePreview.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutsideLink", function() { return OutsideLink; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var astroturf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var astroturf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(astroturf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "/home/kre1z0/Projects/everpoint-site/src/components/OutsideLink/OutsideLink.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).enterModule;
  enterModule && enterModule(module);
})();




var Link = astroturf__WEBPACK_IMPORTED_MODULE_4___default()("a", null, "Link", __webpack_require__(87), "link", "link");

var getUrl = function getUrl(value) {
  if (!value) {
    return;
  }

  var isHttp = value.toString().indexOf("http") === 0;
  var isWww = value.toString().indexOf("www") === 0;
  return isWww || isHttp ? value : "https://" + value;
};

var OutsideLink = function OutsideLink(_ref) {
  var href = _ref.href,
      children = _ref.children,
      props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["href", "children"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Link, Object.assign({
    href: getUrl(href),
    target: "_blank",
    rel: "noopener noreferrer"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), children);
};
OutsideLink.propTypes = {
  href: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Link, "Link", "/home/kre1z0/Projects/everpoint-site/src/components/OutsideLink/OutsideLink.js");
  reactHotLoader.register(getUrl, "getUrl", "/home/kre1z0/Projects/everpoint-site/src/components/OutsideLink/OutsideLink.js");
  reactHotLoader.register(OutsideLink, "OutsideLink", "/home/kre1z0/Projects/everpoint-site/src/components/OutsideLink/OutsideLink.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ })

})
//# sourceMappingURL=0.a7f6e16cccfc712636c5.hot-update.js.map