webpackHotUpdate(0,{

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkComponent", function() { return LinkComponent; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(210);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(221);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Atoms_Atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(792);

var _jsxFileName = "/home/kre1z0/Projects/everpoint-site/src/components/AdditionalMenu/LinkComponent.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(24)).enterModule;
  enterModule && enterModule(module);
})();






var styles = __webpack_require__(884);

var LinkComponent =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(LinkComponent, _Component);

  function LinkComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = LinkComponent.prototype;

  _proto.render = function render() {
    var _cn;

    var _this$props = this.props,
        text = _this$props.text,
        id = _this$props.id,
        selectedId = _this$props.selectedId,
        onSectionChange = _this$props.onSectionChange,
        leftSide = _this$props.leftSide;
    var isActive = selectedId === id;
    console.info("--> id ggwp 4444", id);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Atoms_Atoms__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      onClick: function onClick() {
        return onSectionChange({
          scrollToBlock: true,
          id: id
        });
      },
      isActive: isActive,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_cn = {}, _cn[styles.isActive] = isActive && leftSide, _cn)),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, text);
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return LinkComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
LinkComponent.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  isPortfolioPage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  leftSide: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(24)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LinkComponent, "LinkComponent", "/home/kre1z0/Projects/everpoint-site/src/components/AdditionalMenu/LinkComponent.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(24)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)(module)))

/***/ })

})
//# sourceMappingURL=0.746fa4b814a9616af47f.hot-update.js.map