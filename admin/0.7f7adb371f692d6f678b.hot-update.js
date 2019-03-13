webpackHotUpdate(0,{

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieNotice", function() { return CookieNotice; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(169);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Portal_Portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(609);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(610);


(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).enterModule;
  enterModule && enterModule(module);
})();




var CookieNotice =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(CookieNotice, _Component);

  function CookieNotice() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      isVisible: false
    };

    _this.gotCookie = function () {
      _this.setState({
        isVisible: false
      }, function () {
        localStorage.setItem("cookiePolice", true);
      });
    };

    return _this;
  }

  var _proto = CookieNotice.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var cookiePolice = localStorage.getItem("cookiePolice");

    if (cookiePolice === null) {
      this.setState({
        isVisible: true
      });
    }
  };

  _proto.render = function render() {
    var isVisible = this.state.isVisible;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Portal_Portal__WEBPACK_IMPORTED_MODULE_2__["Portal"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["CookieNoticeContainer"], {
      isVisible: isVisible
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "\u0421\u0430\u0439\u0442 everpoint.ru \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0444\u0430\u0439\u043B\u044B cookies, IP \u0430\u0434\u0440\u0435\u0441 \u0432\u0430\u0448\u0435\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u043F\u043E\u0441\u0435\u0449\u0451\u043D\u043D\u044B\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u0445 \u0441\u0430\u0439\u0442\u0430, \u0434\u0430\u043D\u043D\u044B\u0435 \u0433\u0435\u043E\u043B\u043E\u043A\u0430\u0446\u0438\u0438. \u042D\u0442\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u043D\u0430\u043C \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0443 \u0441\u0430\u0439\u0442\u0430.", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/"
    }, "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], {
      raisedButton: true,
      primary: true,
      onClick: this.gotCookie
    }, "ok")));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return CookieNotice;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CookieNotice, "CookieNotice", "/home/kre1z0/Projects/everpoint-site/src/components/CookieNotice/CookieNotice.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieNoticeContainer", function() { return CookieNoticeContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryButton", function() { return PrimaryButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var astroturf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(170);
/* harmony import */ var astroturf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(astroturf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(342);
/* harmony import */ var _components_Buttons_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(403);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).enterModule;
  enterModule && enterModule(module);
})();




var CookieNoticeContainer = astroturf__WEBPACK_IMPORTED_MODULE_0___default()("div", null, "CookieNoticeContainer", __webpack_require__(611), "cookie-notice-container", "cookieNoticeContainer");
var PrimaryButton = astroturf__WEBPACK_IMPORTED_MODULE_0___default()(_components_Buttons_Buttons__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "PrimaryButton", __webpack_require__(612), "primary-button", "primaryButton");
var Link = astroturf__WEBPACK_IMPORTED_MODULE_0___default()(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], null, "Link", __webpack_require__(613), "link", "link");
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CookieNoticeContainer, "CookieNoticeContainer", "/home/kre1z0/Projects/everpoint-site/src/components/CookieNotice/styles.js");
  reactHotLoader.register(PrimaryButton, "PrimaryButton", "/home/kre1z0/Projects/everpoint-site/src/components/CookieNotice/styles.js");
  reactHotLoader.register(Link, "Link", "/home/kre1z0/Projects/everpoint-site/src/components/CookieNotice/styles.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"cookieNoticeContainer":"styles-CookieNoticeContainer-module--cookie-notice-container--3sN3d","isVisible":"styles-CookieNoticeContainer-module--isVisible--3Tbpn"};

/***/ })

})
//# sourceMappingURL=0.7f7adb371f692d6f678b.hot-update.js.map