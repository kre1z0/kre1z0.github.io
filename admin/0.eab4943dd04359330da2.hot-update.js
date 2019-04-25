webpackHotUpdate(0,{

/***/ 907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongreadLayout", function() { return LongreadLayout; });
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(413);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(725);
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(566);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(167);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(562);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(563);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(210);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(681);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(221);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(421);
/* harmony import */ var _routes_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(724);
/* harmony import */ var _components_ViewportHeight_ViewportHeight__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(873);
/* harmony import */ var _components_ScrollbarProvider_ScrollbarProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(908);
/* harmony import */ var _components_LongreadNavbar_LongreadNavbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(912);
/* harmony import */ var _components_CookieNotice_CookieNotice__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(897);
/* harmony import */ var _styles_longread__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(905);








(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(24)).enterModule;
  enterModule && enterModule(module);
})();











var LongreadLayout =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_6___default()(LongreadLayout, _Component);

  function LongreadLayout() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      routes: [],
      pages: [],
      isTablet: null,
      isMobile: null,
      currentPage: 0
    };

    _this.goBack = function (e) {
      var routes = _this.state.routes;
      var _this$props = _this.props,
          location = _this$props.location,
          navigate = _this$props.navigate;
      e.preventDefault();
      var isVacancyPage = location.pathname.includes("vacancy");
      var to = Object(_routes_utils__WEBPACK_IMPORTED_MODULE_11__["getBackRouteByLocationPathName"])(location.pathname, routes);

      if (location.state && location.state.prevPathname) {
        navigate(location.state.prevPathname);
      } else if (isVacancyPage) {
        navigate(to, {
          state: {
            scrollTo: "vacancy"
          }
        });
      } else {
        navigate(to);
      }
    };

    return _this;
  }

  LongreadLayout.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var staticRoutes = nextProps.routes,
        location = nextProps.location;
    var prevRoutes = prevState.routes,
        pages = prevState.pages;
    var state = {};

    if (prevRoutes.length === 0) {
      return {
        routes: Object(_routes_utils__WEBPACK_IMPORTED_MODULE_11__["mergedRoutes"])(Object.assign({
          routes: staticRoutes
        }, nextProps))
      };
    }

    if (pages.length === 0) {
      var routes = Object(_routes_utils__WEBPACK_IMPORTED_MODULE_11__["mergedRoutes"])(Object.assign({
        routes: staticRoutes
      }, nextProps));
      var projects = Object(_routes_utils__WEBPACK_IMPORTED_MODULE_11__["getProject"])({
        allProject: true,
        routes: routes
      }).map(function (_ref) {
        var id = _ref.id;
        return "/" + id;
      });
      var vacancy = Object(_routes_utils__WEBPACK_IMPORTED_MODULE_11__["getProject"])({
        allProject: true,
        routes: routes,
        parentId: "jobs",
        childrenId: "vacancy"
      });
      var isPortfolioLongread = projects.some(function (project) {
        return project.includes(location.pathname.replace(/\//g, ""));
      });
      var isVacancyPage = location.pathname.includes("vacancy");

      if (isPortfolioLongread && projects) {
        state.pages = projects;
      } else if (isVacancyPage && vacancy && vacancy.items) {
        state.pages = vacancy.items.map(function (item) {
          return item.longreadLink;
        });
      }
    }

    return state;
  };

  var _proto = LongreadLayout.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setState({
      isMobile: Object(_utils_browser__WEBPACK_IMPORTED_MODULE_10__["isMobile"])(),
      isTablet: Object(_utils_browser__WEBPACK_IMPORTED_MODULE_10__["isTablet"])()
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate(_ref2, _ref3) {
    var prevLocation = _ref2.location;
    var prevPages = _ref3.pages;
    var pages = this.state.pages;
    var location = this.props.location;

    if (prevLocation.pathname !== location.pathname || prevPages.length !== pages.length) {
      var currentPage = pages.findIndex(function (page) {
        var isVacancyPage = location.pathname.includes("vacancy");
        var pathname = decodeURI(location.pathname);
        return isVacancyPage ? page.includes(pathname) : page.includes(pathname.split("/")[1]);
      });
      this.setState({
        currentPage: currentPage < 0 ? 0 : currentPage
      });
    }
  };

  _proto.render = function render() {
    var _this$state = this.state,
        pages = _this$state.pages,
        isMobile = _this$state.isMobile,
        isTablet = _this$state.isTablet,
        currentPage = _this$state.currentPage,
        routes = _this$state.routes;
    var _this$props2 = this.props,
        children = _this$props2.children,
        location = _this$props2.location,
        navigate = _this$props2.navigate;

    if (isTablet === null && isMobile === null) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          display: "none"
        }
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ScrollbarProvider_ScrollbarProvider__WEBPACK_IMPORTED_MODULE_13__["ScrollbarProvider"], {
      nativeScrollbar: isMobile || isTablet,
      location: location,
      className: _styles_longread__WEBPACK_IMPORTED_MODULE_16__["default"].scrollbar,
      withScrollbarY: true
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_8___default.a, {
      htmlAttributes: {
        class: classnames__WEBPACK_IMPORTED_MODULE_9___default()(isMobile || isTablet ? _styles_longread__WEBPACK_IMPORTED_MODULE_16__["default"].londreadHtmlMobile : _styles_longread__WEBPACK_IMPORTED_MODULE_16__["default"].longreadHtml)
      },
      bodyAttributes: {
        class: classnames__WEBPACK_IMPORTED_MODULE_9___default()(isMobile || isTablet ? _styles_longread__WEBPACK_IMPORTED_MODULE_16__["default"].londreadBodyMobile : _styles_longread__WEBPACK_IMPORTED_MODULE_16__["default"].longreadBody)
      }
    }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ViewportHeight_ViewportHeight__WEBPACK_IMPORTED_MODULE_12__["ViewportHeight"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_LongreadNavbar_LongreadNavbar__WEBPACK_IMPORTED_MODULE_14__["LongreadNavbar"], {
      currentPage: currentPage,
      pages: pages,
      isMobile: isMobile,
      nativeScrollbar: isMobile || isTablet,
      goBack: this.goBack,
      location: location
    }), react__WEBPACK_IMPORTED_MODULE_7___default.a.cloneElement(children, {
      routes: routes,
      isMobile: isMobile,
      isTablet: isTablet,
      isMobileOrTablet: isMobile || isTablet
    }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_CookieNotice_CookieNotice__WEBPACK_IMPORTED_MODULE_15__["CookieNotice"], {
      navigate: navigate,
      location: location
    }));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return LongreadLayout;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(24)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LongreadLayout, "LongreadLayout", "/home/kre1z0/Projects/everpoint-site/src/layouts/longread.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(24)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)(module)))

/***/ })

})
//# sourceMappingURL=0.eab4943dd04359330da2.hot-update.js.map