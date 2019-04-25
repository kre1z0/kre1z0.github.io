webpackHotUpdate(0,{

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMembers", function() { return TeamMembers; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(260);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(210);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(527);
/* harmony import */ var _NoVacancyCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(528);
/* harmony import */ var _components_GoNextLink_GoNextLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(545);
/* harmony import */ var _components_TeamMemberCard_TeamMemberCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(529);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(540);
/* harmony import */ var _HowWeAreWorking_HowWeAreWorking__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(927);




(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(24)).enterModule;
  enterModule && enterModule(module);
})();










function getColumns(_ref) {
  var items = _ref.items;
  var newArray = items.slice();
  var firstCol = [];
  var lastCol = [];
  newArray.forEach(function (item, i) {
    return i % 2 ? lastCol.push(item) : firstCol.push(item);
  });
  return firstCol.concat(lastCol);
}

var TeamMembers =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(TeamMembers, _PureComponent);

  function TeamMembers() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    _this.state = {
      cardHeight: 320,
      photoHeight: 225
    };
    _this.container = null;

    _this.onResize = function () {
      var verticalCentering = _this.props.verticalCentering;
      var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      console.info("--> verticalCentering ggwp 4444", verticalCentering);
      var containerHeight = 0;

      if (verticalCentering && _this.container) {}

      if (viewportWidth <= 992) {
        _this.setState({
          photoHeight: 164
        });
      } else {
        _this.setState({
          photoHeight: 225
        });
      }
    };

    _this.onContainerRef = function (ref) {
      if (ref) {
        _this.container = ref;
      }
    };

    return _this;
  }

  var _proto = TeamMembers.prototype;

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  };

  _proto.render = function render() {
    var _this$state = this.state,
        cardHeight = _this$state.cardHeight,
        photoHeight = _this$state.photoHeight;
    var margin = 30;
    var _this$props = this.props,
        items = _this$props.items,
        id = _this$props.id;
    var isVacancy = id === "vacancy";
    var isPhoto = id === "photo";
    var data = getColumns({
      items: items
    });
    var height = isPhoto ? photoHeight : cardHeight;
    var top = height / 2;
    var half = Math.round(data.length / 2);
    var containerHeight = data.length > 2 ? Math.ceil(data.length / 2) * (height + margin) + (data.length % 2 === 0 ? height / 2 : 0) + 4 : Object(_utils_number__WEBPACK_IMPORTED_MODULE_5__["rateLimit"])(Math.ceil(data.length / 2), 1) * height + 4;
    console.info("--> containerHeight ggwp 4444", containerHeight);
    var noVacancies = isVacancy && items && items.length === 0;

    if (id === "process") {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_9__["TeamMembersContainer"], {
        ref: this.onContainerRef
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_HowWeAreWorking_HowWeAreWorking__WEBPACK_IMPORTED_MODULE_10__["HowWeAreWorking"], {
        items: items
      }));
    }

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_9__["TeamMembersContainer"], {
      oneItem: data.length <= 1,
      style: {
        height: containerHeight + "px"
      }
    }, noVacancies ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_NoVacancyCard__WEBPACK_IMPORTED_MODULE_6__["NoVacancyCard"], null) : data.map(function (item, index) {
      if (isPhoto) {
        var key = "photo-" + (index + 1);
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_9__["PhotoContainer"], {
          style: {
            marginTop: index === half && top,
            height: height,
            marginBottom: margin
          },
          key: key
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
          src: item,
          alt: key
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_TeamMemberCard_TeamMemberCard__WEBPACK_IMPORTED_MODULE_8__["TeamMemberCard"], Object.assign({
        control: isVacancy ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_GoNextLink_GoNextLink__WEBPACK_IMPORTED_MODULE_7__["GoNextLink"], {
          gatsby: true,
          to: item.longreadLink
        }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438") : null,
        avatar: item.avatar,
        vacancy: isVacancy,
        withMarginTop: index === half,
        height: height,
        top: top,
        margin: margin,
        key: item.name + "-" + (index + 1)
      }, item));
    }));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return TeamMembers;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);
TeamMembers.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object), prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string)]),
  verticalCentering: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
TeamMembers.defaultProps = {
  items: []
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(24)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getColumns, "getColumns", "/home/kre1z0/Projects/everpoint-site/src/components/TeamMembers/TeamMembers.js");
  reactHotLoader.register(TeamMembers, "TeamMembers", "/home/kre1z0/Projects/everpoint-site/src/components/TeamMembers/TeamMembers.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(24)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)(module)))

/***/ })

})
//# sourceMappingURL=0.8eaf6627d442686f1327.hot-update.js.map