webpackHotUpdate(0,{

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsWithLayout", function() { return ContactsWithLayout; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(260);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(142);
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(567);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(210);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(221);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_MainPageElements_Background__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(748);
/* harmony import */ var _components_ImagesDownloadListener_ImagesDownloadListener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(367);
/* harmony import */ var _assets_img_main_slides_metro_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(846);
/* harmony import */ var _assets_img_main_slides_metro_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_img_main_slides_metro_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_img_main_slides_bus_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(774);
/* harmony import */ var _assets_img_main_slides_metro_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(776);
/* harmony import */ var _utils_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(421);
/* harmony import */ var _components_Atoms_Atoms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(793);
/* harmony import */ var _assets_social__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(847);
/* harmony import */ var _components_AddressLink_AddressLink__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(851);
/* harmony import */ var _styles_contacts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(855);
/* harmony import */ var _components_MainPageElements_Section__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(220);
/* harmony import */ var _components_MainLayoutProvider_MainLayoutProvider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(750);





var _jsxFileName = "/home/kre1z0/Projects/everpoint-site/src/pages/contacts/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(24)).enterModule;
  enterModule && enterModule(module);
})();
















var ContactsBase =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default()(ContactsBase, _Component);

  function ContactsBase() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      stope: true,
      isMobileOrTablet: false,
      isMobile: null,
      imagesIsLoaded: false
    };
    return _this;
  }

  var _proto = ContactsBase.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setState({
      isMobileOrTablet: Object(_utils_browser__WEBPACK_IMPORTED_MODULE_12__["isMobile"])() || Object(_utils_browser__WEBPACK_IMPORTED_MODULE_12__["isTablet"])(),
      isMobile: Object(_utils_browser__WEBPACK_IMPORTED_MODULE_12__["isMobile"])()
    });
  };

  _proto.render = function render() {
    var _cn,
        _this2 = this;

    var _this$props = this.props,
        status = _this$props.status,
        location = _this$props.location,
        titles = _this$props.titles,
        direction = _this$props.direction,
        scrollTop = _this$props.scrollTop;
    var _this$state = this.state,
        stope = _this$state.stope,
        isMobileOrTablet = _this$state.isMobileOrTablet,
        imagesIsLoaded = _this$state.imagesIsLoaded,
        isMobile = _this$state.isMobile;
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_MainPageElements_Background__WEBPACK_IMPORTED_MODULE_7__["Background"], {
      style: {
        top: scrollTop + "px"
      },
      backgroundImage: imagesIsLoaded ? stope ? _assets_img_main_slides_metro_svg__WEBPACK_IMPORTED_MODULE_11__["default"] : _assets_img_main_slides_bus_svg__WEBPACK_IMPORTED_MODULE_10__["default"] : _assets_img_main_slides_metro_png__WEBPACK_IMPORTED_MODULE_9___default.a,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_contacts__WEBPACK_IMPORTED_MODULE_16__["default"].background, (_cn = {}, _cn[_styles_contacts__WEBPACK_IMPORTED_MODULE_16__["default"].hideBackground] = isMobile, _cn)),
      status: status,
      location: location,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styles_contacts__WEBPACK_IMPORTED_MODULE_16__["Main"], {
      style: {
        transform: "translateY(" + scrollTop + "px)"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_ImagesDownloadListener_ImagesDownloadListener__WEBPACK_IMPORTED_MODULE_8__["ImagesDownloadListener"], {
      images: [_assets_img_main_slides_bus_svg__WEBPACK_IMPORTED_MODULE_10__["default"], _assets_img_main_slides_metro_svg__WEBPACK_IMPORTED_MODULE_11__["default"]],
      onLoad: function onLoad() {
        return _this2.setState({
          imagesIsLoaded: true
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styles_contacts__WEBPACK_IMPORTED_MODULE_16__["Content"], {
      className: Object(_components_MainPageElements_Section__WEBPACK_IMPORTED_MODULE_17__["animation"])(status, direction),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styles_contacts__WEBPACK_IMPORTED_MODULE_16__["LeftSide"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Atoms_Atoms__WEBPACK_IMPORTED_MODULE_13__["H2"], {
      as: "h1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, titles && titles.find(function (_ref) {
      var id = _ref.id;
      return id === "contacts";
    }).title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styles_contacts__WEBPACK_IMPORTED_MODULE_16__["Link"], {
      as: "address",
      className: _styles_contacts__WEBPACK_IMPORTED_MODULE_16__["default"].address,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "127051, \u0420\u043E\u0441\u0441\u0438\u044F, ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), " \u0433. \u041C\u043E\u0441\u043A\u0432\u0430, \u0443\u043B. \u0422\u0440\u0443\u0431\u043D\u0430\u044F, \u0434. 25, \u043A. 1"), isMobileOrTablet && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_AddressLink_AddressLink__WEBPACK_IMPORTED_MODULE_15__["AddressLink"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0430\u0434\u0440\u0435\u0441 \u043D\u0430 \u043A\u0430\u0440\u0442\u0435"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styles_contacts__WEBPACK_IMPORTED_MODULE_16__["Link"], {
      href: "tel:+74955060774",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "+7 (495) 506-07-74"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styles_contacts__WEBPACK_IMPORTED_MODULE_16__["Link"], {
      href: "mailto:info@everpoint.ru",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "info@everpoint.ru"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styles_contacts__WEBPACK_IMPORTED_MODULE_16__["SocialBlock"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, _assets_social__WEBPACK_IMPORTED_MODULE_14__["socials"].map(function (_ref2) {
      var img = _ref2.img,
          link = _ref2.link,
          name = _ref2.name;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styles_contacts__WEBPACK_IMPORTED_MODULE_16__["SocialLink"], {
        target: "_blank",
        href: link,
        key: "social-" + name,
        style: {
          backgroundImage: "url(" + img + ")"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      });
    }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styles_contacts__WEBPACK_IMPORTED_MODULE_16__["RightSide"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styles_contacts__WEBPACK_IMPORTED_MODULE_16__["PrimaryButton"], {
      raisedButton: true,
      onClick: function onClick() {
        return _this2.setState({
          stope: true
        });
      },
      isActive: stope,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "\u041C\u0435\u0442\u0440\u043E"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styles_contacts__WEBPACK_IMPORTED_MODULE_16__["StopeButton"], {
      raisedButton: true,
      onClick: function onClick() {
        return _this2.setState({
          stope: false
        });
      },
      isActive: !stope,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styles_contacts__WEBPACK_IMPORTED_MODULE_16__["Copyright"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(Object(_components_MainPageElements_Section__WEBPACK_IMPORTED_MODULE_17__["animation"])(status, direction)),
      as: "footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "\xA9 \u041E\u041E\u041E \xAB\u042D\u0432\u0435\u0440\u043F\u043E\u0438\u043D\u0442\xBB, 2019. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B.")));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return ContactsBase;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var ContactsWithLayout = function ContactsWithLayout(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_MainLayoutProvider_MainLayoutProvider__WEBPACK_IMPORTED_MODULE_18__["MainLayoutConsumer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, function (layoutProps) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ContactsBase, Object.assign({}, props, layoutProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }));
  });
};
var _default = ContactsWithLayout;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(24)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ContactsBase, "ContactsBase", "/home/kre1z0/Projects/everpoint-site/src/pages/contacts/index.js");
  reactHotLoader.register(ContactsWithLayout, "ContactsWithLayout", "/home/kre1z0/Projects/everpoint-site/src/pages/contacts/index.js");
  reactHotLoader.register(_default, "default", "/home/kre1z0/Projects/everpoint-site/src/pages/contacts/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(24)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)(module)))

/***/ })

})
//# sourceMappingURL=0.aacf3f205ba937257b00.hot-update.js.map