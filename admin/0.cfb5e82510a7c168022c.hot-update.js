webpackHotUpdate(0,{

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutProviderComponent", function() { return MainLayoutProviderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutProvider", function() { return MainLayoutProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutConsumer", function() { return MainLayoutConsumer; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(183);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(725);
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(210);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(551);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(333);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(750);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_MainPageElements_Background__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(747);
/* harmony import */ var _components_ImagesDownloadListener_ImagesDownloadListener__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(367);
/* harmony import */ var _components_Swiper_Swiper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(751);
/* harmony import */ var _components_Navbar_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(753);
/* harmony import */ var _routes_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(724);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(766);
/* harmony import */ var _ScrollbarProvider_plugins_disableScrollByDirection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(769);





(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(24)).enterModule;
  enterModule && enterModule(module);
})();












var ScrollContext = react__WEBPACK_IMPORTED_MODULE_4___default.a.createContext();
var MainLayoutProviderComponent =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default()(MainLayoutProviderComponent, _Component);

  function MainLayoutProviderComponent(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.defaultDamping = 0.1;
    _this.threshold = 0;
    _this.scrollbar = null;
    _this.scrollable = null;
    _this.lefsideSection = null;
    _this.disableSwipeNavigation = false;

    _this.onKeyDown = function () {
      var damping = _this.state.damping;

      if (damping !== _this.defaultDamping) {
        _this.setState({
          damping: _this.defaultDamping
        });
      }
    };

    _this.getSize = function () {
      return {
        width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      };
    };

    _this.onResize = function () {
      var _this$getSize = _this.getSize(),
          width = _this$getSize.width;

      if (width > _components_Navbar_styles__WEBPACK_IMPORTED_MODULE_11__["mobileMenu"]) {
        _this.setState({
          mobileMenuIsOpen: false
        });
      }
    };

    _this.setCurrentRoute = function () {
      var _this$props = _this.props,
          location = _this$props.location,
          routes = _this$props.routes;
      var _this$state = _this.state,
          selectedSectionIndex = _this$state.selectedSectionIndex,
          scrollEvent = _this$state.scrollEvent,
          direction = _this$state.direction;
      var currentRoute = Object(_routes_utils__WEBPACK_IMPORTED_MODULE_12__["getRouteByLocation"])(location, routes);
      var state = location.state;
      var sections = currentRoute && currentRoute.sections || [];

      _this.setState({
        currentRoute: currentRoute || "404",
        coloredNav: false,
        sections: sections
      }, function () {
        var margin = 30;

        if (state && state.scrollTo && _this.scrollbar) {
          var index = sections.findIndex(function (section) {
            return section.id === state.scrollTo;
          });
          var offsetTop = 0;

          if (_this.lefsideSection) {
            var _this$lefsideSection$ = _this.lefsideSection.getBoundingClientRect(),
                top = _this$lefsideSection$.top;

            offsetTop = top;
          }

          _this.scrollToBlock({
            index: index,
            offsetTop: offsetTop,
            damping: 0.4
          });
        } else if (currentRoute && currentRoute.scrollable) {
          var scrollToEndBlock = scrollEvent && selectedSectionIndex === (currentRoute && sections.length - 1);
          var timetout = _this.scrollable ? 0 : 44;
          setTimeout(function () {
            var _this$getSize2 = _this.getSize(),
                vh = _this$getSize2.height;

            var offsetTop = 0;

            if (_this.lefsideSection) {
              var _this$lefsideSection$2 = _this.lefsideSection.getBoundingClientRect(),
                  height = _this$lefsideSection$2.height,
                  _top = _this$lefsideSection$2.top;

              if (direction < 0) {
                offsetTop = _top - 80 - margin / 2;
              } else {
                offsetTop = vh / 2 + height / 2 - margin / 2;
              }
            }

            if (scrollToEndBlock && _this.scrollable && _this.scrollable.children[selectedSectionIndex]) {
              var _this$scrollable$chil = _this.scrollable.children[selectedSectionIndex].getBoundingClientRect(),
                  rightBlockHeight = _this$scrollable$chil.height;

              offsetTop -= rightBlockHeight + vh * 0.3;
            }

            _this.scrollToBlock({
              index: selectedSectionIndex,
              damping: scrollEvent ? 1 : 0.2,
              offsetTop: offsetTop
            });
          }, timetout);
        }
      });
    };

    _this.checkNavbarIntoContent = function () {
      var currentRoute = _this.state.currentRoute;

      if (_this.scrollable && _this.scrollable.children[0]) {
        var headerHeight = 80;

        var _this$scrollable$chil2 = _this.scrollable.children[0].getBoundingClientRect(),
            top = _this$scrollable$chil2.top;

        var scrollable = currentRoute && currentRoute.scrollable;

        if (top <= headerHeight && scrollable) {
          _this.setState({
            coloredNav: true
          });
        } else {
          _this.setState({
            coloredNav: false
          });
        }
      }
    };

    _this.getIndexFromDirection = function (currentRoute, direction) {
      if (!currentRoute) return 0;
      var sections = currentRoute.sections,
          maxItemCount = currentRoute.maxItemCount;
      var sectionsLength = maxItemCount || sections && sections.length || 1;
      var indexFromDirection = direction < 0 ? sectionsLength - 1 : 0;
      return indexFromDirection;
    };

    _this.checkBlockIsCenter = function (direction, divider) {
      if (divider === void 0) {
        divider = 2;
      }

      var _this$state2 = _this.state,
          selectedSectionIndex = _this$state2.selectedSectionIndex,
          currentRoute = _this$state2.currentRoute;
      var value = selectedSectionIndex + direction;
      var currentBlock = _this.scrollable && _this.scrollable.children[value];

      if (currentBlock && currentRoute && currentRoute.scrollable) {
        var _this$getSize3 = _this.getSize(),
            height = _this$getSize3.height;

        var _currentBlock$getBoun = currentBlock.getBoundingClientRect(),
            top = _currentBlock$getBoun.top,
            bottom = _currentBlock$getBoun.bottom;

        var isTop = top < height / divider;
        var isBottom = bottom > height / divider;

        if (isTop && direction > 0) {
          _this.onSectionChange({
            value: 1
          });
        } else if (isBottom && direction < 0) {
          _this.onSectionChange({
            value: -1
          });
        }
      }
    };

    _this.onScroll = function (e) {
      _this.scrollbar.scrollLeft = 0;
      var scrollTop = _this.state.scrollTop;
      var offset = e.offset,
          limit = e.limit;
      var offsetY = offset.y;
      var limitY = limit.y;

      _this.setState({
        scrollTop: offsetY,
        limitY: limitY,
        thresholdIsActive: offsetY >= limitY || offsetY === 0
      }, function () {
        var direction = offsetY > scrollTop ? 1 : -1;

        _this.checkBlockIsCenter(direction);

        _this.checkNavbarIntoContent();

        if (offsetY >= limitY || offsetY === 0) {
          _this.threshold = 0;
        }
      });
    };

    _this.onWheel = function (e) {
      var _this$state3 = _this.state,
          thresholdIsActive = _this$state3.thresholdIsActive,
          scrollTop = _this$state3.scrollTop;
      var _this$props2 = _this.props,
          location = _this$props2.location,
          navigate = _this$props2.navigate;
      var direction = e.deltaY > 0 ? 1 : -1;
      var normalizeDeltaY = direction > 0 ? 53 : -53;
      var is404Page = location.pathname.indexOf("404") === 1;

      if (thresholdIsActive || scrollTop === 0 && direction < 0) {
        _this.threshold = _this.threshold + normalizeDeltaY;
      }

      _this.setState({
        direction: direction,
        damping: _this.defaultDamping,
        scrollEvent: true
      });

      _this.checkNavbarIntoContent();

      if (is404Page) {
        navigate("/");
      } else {
        _this.onNavigateToThrottled(direction);
      }
    };

    _this.onExited = function () {
      _this.setState({
        transitionEnd: true,
        coloredNav: false,
        limitY: 0,
        lastSectionIndex: 0
      });
    };

    _this.onNavLinkClick = function (_ref) {
      var id = _ref.id,
          event = _ref.event,
          navigate = _ref.navigate,
          selectedSectionIndex = _ref.selectedSectionIndex,
          transitionEnd = _ref.transitionEnd;
      var routes = _this.props.routes;
      var currentRoute = _this.state.currentRoute;
      var prevIndex = routes.findIndex(function (route) {
        return route.id === currentRoute.id;
      });
      var currentIndex = routes.findIndex(function (route) {
        return route.id === id;
      });
      var direction = currentIndex > prevIndex ? 1 : -1;

      if (currentRoute && currentRoute.id === id) {
        event && event.preventDefault();
        return;
      }

      var nextPage = routes[currentIndex];
      var prevPageId = currentRoute ? currentRoute.id : "";
      var nextPageId = nextPage ? nextPage.id : "";
      var disableBackgroundTransition = prevPageId === "portfolio" && nextPageId === "about" || prevPageId === "about" && nextPageId === "portfolio";

      _this.setState({
        scrollEvent: false,
        selectedSectionIndex: selectedSectionIndex || 0,
        direction: direction,
        mobileMenuIsOpen: false,
        disableBackgroundTransition: disableBackgroundTransition,
        transitionEnd: transitionEnd
      }, function () {
        if (navigate && nextPage) {
          navigate(nextPage.route);
        }
      });
    };

    _this.onScrollableRef = function (ref) {
      if (ref) {
        _this.scrollable = ref;
      }
    };

    _this.onScrollBarRef = function (ref) {
      if (ref) {
        _this.scrollbar = ref.scrollbar;
      }
    };

    _this.onLeftSideSectionRef = function (ref) {
      if (ref) {
        _this.lefsideSection = ref;
      }
    };

    _this.toggleMobileMenu = function () {
      return _this.setState(function (_ref2) {
        var mobileMenuIsOpen = _ref2.mobileMenuIsOpen;
        return {
          mobileMenuIsOpen: !mobileMenuIsOpen
        };
      });
    };

    _this.scrollToBlock = function (_ref3) {
      var index = _ref3.index,
          _ref3$damping = _ref3.damping,
          damping = _ref3$damping === void 0 ? 0.2 : _ref3$damping,
          _ref3$offsetTop = _ref3.offsetTop,
          offsetTop = _ref3$offsetTop === void 0 ? 0 : _ref3$offsetTop;

      if (_this.scrollbar && _this.scrollable && _this.scrollable.children[index]) {
        _this.setState({
          damping: damping
        }, function () {
          _this.scrollbar.scrollIntoView(_this.scrollable.children[index], {
            offsetTop: offsetTop,
            onlyScrollIfNeeded: false
          });
        });
      }
    };

    _this.onSectionChange = function (_ref4) {
      var value = _ref4.value,
          id = _ref4.id,
          pageId = _ref4.pageId,
          _ref4$index = _ref4.index,
          index = _ref4$index === void 0 ? null : _ref4$index,
          _ref4$scrollToBlock = _ref4.scrollToBlock,
          scrollToBlock = _ref4$scrollToBlock === void 0 ? false : _ref4$scrollToBlock;
      var _this$props3 = _this.props,
          navigate = _this$props3.navigate,
          routes = _this$props3.routes;
      var _this$state4 = _this.state,
          selectedSectionIndex = _this$state4.selectedSectionIndex,
          sections = _this$state4.sections,
          currentRoute = _this$state4.currentRoute;
      var pageIsChanged = pageId && currentRoute && currentRoute.id !== pageId;
      var sectionsLength = currentRoute && currentRoute.maxItemCount || sections && sections.length || 1;
      var nextValue = id ? sections.findIndex(function (item) {
        return item.id === id;
      }) : index !== null ? index : selectedSectionIndex + value;

      if (pageIsChanged) {
        var _getRouteById = Object(_routes_utils__WEBPACK_IMPORTED_MODULE_12__["getRouteById"])(pageId, routes),
            _sections2 = _getRouteById.sections;

        var _index = _sections2.findIndex(function (item) {
          return item.id === id;
        });

        _this.onNavLinkClick({
          selectedSectionIndex: _index,
          id: pageId,
          navigate: navigate,
          disableBackgroundTransition: false
        });
      } else {
        if (nextValue >= sectionsLength || nextValue < 0) return;
        var sectionDirection = selectedSectionIndex > nextValue ? -1 : 1;

        if (currentRoute.scrollable && scrollToBlock) {
          var margin = 30;

          _this.scrollToBlock({
            index: nextValue,
            offsetTop: _this.lefsideSection ? _this.lefsideSection.offsetTop + margin / 2 : 0
          });
        }

        _this.setState({
          scrollEvent: false,
          sectionDirection: sectionDirection,
          selectedSectionIndex: nextValue,
          disableBackgroundTransition: false
        });
      }
    };

    _this.onSwiped = function () {
      _this.disableSwipeNavigation = false;
    };

    _this.onSwiping = function (_ref5) {
      var isUp = _ref5.isUp,
          isDown = _ref5.isDown,
          yRatio = _ref5.yRatio;
      var _this$state5 = _this.state,
          damping = _this$state5.damping,
          sections = _this$state5.sections,
          selectedSectionIndex = _this$state5.selectedSectionIndex,
          currentRoute = _this$state5.currentRoute,
          scrollEvent = _this$state5.scrollEvent;
      var _this$props4 = _this.props,
          location = _this$props4.location,
          navigate = _this$props4.navigate;
      var is404Page = location.pathname.indexOf("404") === 1;
      var sectionsLength = currentRoute && currentRoute.maxItemCount || sections.length;
      var scrollable = currentRoute && currentRoute.scrollable;
      var page = sectionsLength === 0 && !scrollable;
      var goUp = isUp && yRatio > 25;
      var goDown = isDown && yRatio > 25;
      var goPrevSection = goDown && selectedSectionIndex - 1 >= 0;
      var goNextSection = goUp && selectedSectionIndex + 1 <= sectionsLength;
      var goPrevPage = goDown && (selectedSectionIndex === 0 || page);
      var goNextPage = goUp && (selectedSectionIndex + 1 === sectionsLength || page);

      if (!scrollEvent) {
        _this.setState({
          scrollEvent: true
        });
      }

      if (is404Page) {
        navigate("/");
      } else if ((goPrevPage || goNextPage) && !_this.disableSwipeNavigation) {
        _this.onNavigateTo(goNextPage ? 1 : -1, true);

        _this.disableSwipeNavigation = true;
      } else if ((goPrevSection || goNextSection) && !_this.disableSwipeNavigation && !scrollable) {
        _this.setState({
          sectionDirection: goNextSection ? 1 : -1,
          selectedSectionIndex: selectedSectionIndex + (goNextSection ? 1 : -1),
          disableBackgroundTransition: false
        });

        _this.disableSwipeNavigation = true;
      }

      if (damping !== _this.defaultDamping) {
        _this.setState({
          damping: _this.defaultDamping
        });
      }
    };

    _this.onEnter = function () {
      if (_this.scrollbar) {
        _this.scrollbar.scrollLeft = 0;
        _this.scrollbar.scrollTop = 0;
      }

      _this.setState({
        transitionEnd: false
      });
    };

    _this.onNavigateTo = function (direction, routeSwipeUpAndDown) {
      if (routeSwipeUpAndDown === void 0) {
        routeSwipeUpAndDown = false;
      }

      var _this$getSize4 = _this.getSize(),
          height = _this$getSize4.height;

      var _this$state6 = _this.state,
          currentRoute = _this$state6.currentRoute,
          scrollTop = _this$state6.scrollTop,
          limitY = _this$state6.limitY,
          selectedSectionIndex = _this$state6.selectedSectionIndex,
          sections = _this$state6.sections,
          transitionEnd = _this$state6.transitionEnd;
      var _this$props5 = _this.props,
          navigate = _this$props5.navigate,
          location = _this$props5.location,
          routes = _this$props5.routes;
      var pathname = location.pathname;

      if (!currentRoute) {
        return;
      }

      var scrollable = currentRoute && currentRoute.scrollable;
      var ratio = height / 4.8;
      var scrollableToTop = scrollable && (Math.abs(_this.threshold) > ratio || routeSwipeUpAndDown) && direction < 0 && scrollTop === 0;
      var scrollToBottom = scrollable && direction > 0 && limitY && scrollTop && scrollTop + 144 >= limitY;

      if ((!scrollable || scrollableToTop || scrollToBottom) && transitionEnd) {
        var slider = currentRoute && currentRoute.slider;
        var isPortfolioPage = currentRoute && currentRoute.id === "portfolio";
        var up = selectedSectionIndex === 0 && direction < 0;
        var nextIndex = selectedSectionIndex + direction;
        var sectionsLength = currentRoute.maxItemCount || sections.length;
        var down = nextIndex === sectionsLength;

        if (slider && !up && !down && !routeSwipeUpAndDown) {
          // section change
          var sectionDirection = selectedSectionIndex > nextIndex ? -1 : 1;

          _this.setState({
            disableBackgroundTransition: false,
            transitionEnd: !isPortfolioPage,
            sectionDirection: sectionDirection,
            selectedSectionIndex: nextIndex
          });
        } else {
          // page change
          var nextPage = Object(_routes_utils__WEBPACK_IMPORTED_MODULE_12__["navigateTo"])({
            navigate: navigate,
            pathname: pathname,
            direction: direction,
            routes: routes
          });
          var prevPageId = currentRoute ? currentRoute.id : "";
          var nextPageId = nextPage ? nextPage.id : "";
          var disableBackgroundTransition = prevPageId === "portfolio" && nextPageId === "about" || prevPageId === "about" && nextPageId === "portfolio";

          var selectedSectionIndexFromIndex = _this.getIndexFromDirection(nextPage, direction);

          if (nextPage) {
            _this.setState({
              transitionEnd: false,
              selectedSectionIndex: selectedSectionIndexFromIndex,
              lastSectionIndex: selectedSectionIndex,
              direction: direction,
              disableBackgroundTransition: disableBackgroundTransition
            });

            _this.threshold = 0;
          }
        }
      }
    };

    _this.onResize = lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default()(_this.onResize, 200);
    _this.checkBlockIsCenter = lodash_throttle__WEBPACK_IMPORTED_MODULE_7___default()(_this.checkBlockIsCenter, 100);
    _this.checkNavbarIntoContent = lodash_throttle__WEBPACK_IMPORTED_MODULE_7___default()(_this.checkNavbarIntoContent, 100);
    _this.scrollToBlock = lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default()(_this.scrollToBlock, 100);
    _this.onNavigateToThrottled = lodash_throttle__WEBPACK_IMPORTED_MODULE_7___default()(_this.onNavigateTo, 400, {
      leading: true,
      trailing: false
    });
    var _location = props.location,
        _routes = props.routes;

    var _currentRoute = Object(_routes_utils__WEBPACK_IMPORTED_MODULE_12__["getRouteByLocation"])(_location, _routes);

    var _id = _currentRoute && _currentRoute.id;

    var _sections = _currentRoute && _currentRoute.sections || [];

    var idFromLocalstorage = typeof window === "object" && localStorage.getItem(_id);
    var selectedSectionIndexFromStorage = idFromLocalstorage && _sections ? _sections.findIndex(function (section) {
      return section.id === idFromLocalstorage;
    }) : 0;

    if (typeof window === "object") {
      localStorage.removeItem(_id);
    }

    _this.state = {
      scrollTop: 0,
      limitY: 0,
      coloredNav: false,
      currentRoute: null,
      direction: 1,
      transitionEnd: true,
      mobileMenuIsOpen: false,
      damping: 0.1,
      thresholdIsActive: false,
      scrollEvent: false,
      // sections
      selectedSectionIndex: selectedSectionIndexFromStorage,
      sections: _currentRoute && _currentRoute.sections || [],
      sectionDirection: 1,
      lastSectionIndex: 0,
      disableBackgroundTransition: false
    };
    return _this;
  }

  var _proto = MainLayoutProviderComponent.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setCurrentRoute();
    window.addEventListener("resize", this.onResize);
    window.addEventListener("keydown", this.onKeyDown);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("keydown", this.onKeyDown);
  };

  _proto.componentDidUpdate = function componentDidUpdate(_ref6) {
    var prevLocation = _ref6.location;
    var location = this.props.location;

    if (prevLocation.pathname !== location.pathname) {
      this.setCurrentRoute();
    }
  };

  _proto.render = function render() {
    var _this$state7 = this.state,
        scrollTop = _this$state7.scrollTop,
        coloredNav = _this$state7.coloredNav,
        direction = _this$state7.direction,
        transitionEnd = _this$state7.transitionEnd,
        currentRoute = _this$state7.currentRoute,
        mobileMenuIsOpen = _this$state7.mobileMenuIsOpen,
        damping = _this$state7.damping,
        selectedSectionIndex = _this$state7.selectedSectionIndex,
        sections = _this$state7.sections,
        sectionDirection = _this$state7.sectionDirection,
        disableBackgroundTransition = _this$state7.disableBackgroundTransition,
        lastSectionIndex = _this$state7.lastSectionIndex;
    var _this$props6 = this.props,
        children = _this$props6.children,
        news = _this$props6.news,
        titles = _this$props6.titles;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ScrollContext.Provider, {
      value: {
        scrollTop: scrollTop,
        onScrollableRef: this.onScrollableRef,
        coloredNav: coloredNav,
        onEnter: this.onEnter,
        onExited: this.onExited,
        direction: direction,
        onNavLinkClick: this.onNavLinkClick,
        transitionEnd: transitionEnd,
        currentRoute: currentRoute,
        mobileMenuIsOpen: mobileMenuIsOpen,
        toggleMobileMenu: this.toggleMobileMenu,
        // sections
        news: news,
        titles: titles,
        onLeftSideSectionRef: this.onLeftSideSectionRef,
        onSectionChange: this.onSectionChange,
        selectedSectionIndex: selectedSectionIndex,
        sections: sections,
        sectionDirection: sectionDirection,
        disableBackgroundTransition: disableBackgroundTransition,
        lastSectionIndex: lastSectionIndex
      }
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_ImagesDownloadListener_ImagesDownloadListener__WEBPACK_IMPORTED_MODULE_9__["ImagesDownloadListener"], {
      images: _components_MainPageElements_Background__WEBPACK_IMPORTED_MODULE_8__["backgrounds"]
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Swiper_Swiper__WEBPACK_IMPORTED_MODULE_10__["Swiper"], {
      className: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].swiper,
      onSwiping: this.onSwiping,
      onSwiped: this.onSwiped,
      preventDefaultTouchmoveEvent: true
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_13__["ScrollBar"], {
      ref: this.onScrollBarRef,
      damping: damping,
      plugins: {
        disableScrollByDirection: {
          direction: {
            x: true,
            y: mobileMenuIsOpen || currentRoute && !currentRoute.scrollable || !transitionEnd
          }
        }
      },
      onScroll: this.onScroll,
      onWheel: this.onWheel
    }, children)));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return MainLayoutProviderComponent;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);
var MainLayoutProvider = function MainLayoutProvider(_ref7) {
  var children = _ref7.children,
      parentProps = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_ref7, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_5__["Location"], null, function (props) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(MainLayoutProviderComponent, Object.assign({}, parentProps, props), children);
  });
};
var MainLayoutConsumer = ScrollContext.Consumer;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(24)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ScrollContext, "ScrollContext", "/home/kre1z0/Projects/everpoint-site/src/components/MainLayoutProvider/MainLayoutProvider.js");
  reactHotLoader.register(MainLayoutProviderComponent, "MainLayoutProviderComponent", "/home/kre1z0/Projects/everpoint-site/src/components/MainLayoutProvider/MainLayoutProvider.js");
  reactHotLoader.register(MainLayoutProvider, "MainLayoutProvider", "/home/kre1z0/Projects/everpoint-site/src/components/MainLayoutProvider/MainLayoutProvider.js");
  reactHotLoader.register(MainLayoutConsumer, "MainLayoutConsumer", "/home/kre1z0/Projects/everpoint-site/src/components/MainLayoutProvider/MainLayoutProvider.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(24)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)(module)))

/***/ })

})
//# sourceMappingURL=0.cfb5e82510a7c168022c.hot-update.js.map