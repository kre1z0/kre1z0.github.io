webpackHotUpdate(0,{

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopMenu", function() { return DesktopMenu; });
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(562);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(563);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(567);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(210);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(221);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(753);
/* harmony import */ var _Atoms_Atoms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(792);
/* harmony import */ var _AdditionalMenu_AdditionalMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(876);




var _jsxFileName = "/home/kre1z0/Projects/everpoint-site/src/components/Navbar/DesktopMenu.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(24)).enterModule;
  enterModule && enterModule(module);
})();








var DesktopMenu =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default()(DesktopMenu, _Component);

  function DesktopMenu() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = DesktopMenu.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(_ref, nextState) {
    var nextSelectedId = _ref.selectedId,
        nextAdditionalMenuIsOpenId = _ref.additionalMenuIsOpenId,
        nextTransitionEnd = _ref.transitionEnd;
    var _this$props = this.props,
        selectedId = _this$props.selectedId,
        additionalMenuIsOpenId = _this$props.additionalMenuIsOpenId,
        transitionEnd = _this$props.transitionEnd;
    return selectedId !== nextSelectedId || additionalMenuIsOpenId !== nextAdditionalMenuIsOpenId || transitionEnd !== nextTransitionEnd;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        routes = _this$props2.routes,
        onCloseAdditionalMenu = _this$props2.onCloseAdditionalMenu,
        onOpenAdditionalMenu = _this$props2.onOpenAdditionalMenu,
        currentRoute = _this$props2.currentRoute,
        additionalMenuIsOpenId = _this$props2.additionalMenuIsOpenId,
        location = _this$props2.location,
        selectedId = _this$props2.selectedId,
        onNavLinkClick = _this$props2.onNavLinkClick,
        _onSectionChange = _this$props2.onSectionChange,
        data = _this$props2.data;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["Menu"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, routes.map(function (_ref2) {
      var _cn;

      var text = _ref2.text,
          id = _ref2.id,
          route = _ref2.route,
          outsideLink = _ref2.outsideLink,
          sections = _ref2.sections,
          Icon = _ref2.Icon;
      var item = data.find(function (item) {
        return item.id === id;
      });
      var title = item ? item.title : text;
      if (outsideLink) return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["LinkContainer"], {
        withIcon: !Icon,
        key: outsideLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, Icon && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Icon, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Atoms_Atoms__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        href: outsideLink,
        target: "_blank",
        onMouseOver: onCloseAdditionalMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, title));
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["LinkContainer"], {
        key: id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        onMouseOver: sections ? function () {
          return onOpenAdditionalMenu(id);
        } : onCloseAdditionalMenu,
        to: route,
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_cn = {}, _cn[_styles__WEBPACK_IMPORTED_MODULE_7__["default"].activeLink] = location.pathname.includes(route) && route !== "/", _cn[_styles__WEBPACK_IMPORTED_MODULE_7__["default"].withoutAdditionalMenuAndIsActive] = !sections && currentRoute && currentRoute.id === id, _cn)),
        activeClassName: _styles__WEBPACK_IMPORTED_MODULE_7__["default"].activeLink,
        onClick: function onClick(event) {
          return onNavLinkClick({
            transitionEnd: false,
            id: id,
            event: event
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, title)), additionalMenuIsOpenId === id && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_AdditionalMenu_AdditionalMenu__WEBPACK_IMPORTED_MODULE_9__["AdditionalMenu"], {
        onSectionChange: function onSectionChange(_ref3) {
          var sectionId = _ref3.id;
          onCloseAdditionalMenu();

          _onSectionChange({
            pageId: id,
            id: sectionId,
            scrollToBlock: true
          });
        },
        selectedId: selectedId,
        fadeIn: true,
        additionalMenuIsOpenId: additionalMenuIsOpenId,
        additionalMenu: sections,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }));
    }));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return DesktopMenu;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);
DesktopMenu.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  additionalMenuIsOpenId: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  onCloseAdditionalMenu: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onOpenAdditionalMenu: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onNavLinkClick: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onSectionChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  routes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  selectedId: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  transitionEnd: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  data: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object)
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(24)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DesktopMenu, "DesktopMenu", "/home/kre1z0/Projects/everpoint-site/src/components/Navbar/DesktopMenu.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(24)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)(module)))

/***/ })

})
//# sourceMappingURL=0.be3935f16ec98b2692ef.hot-update.js.map