import React, { PureComponent } from "react";
import { Swiper } from "../../components/Swiper/Swiper";
import { Location } from "@reach/router";
import debounce from "lodash/debounce";

import { ScrollBar } from "./styles";
import { mobileMenu } from "../../components/Navbar/styles";
import { navigateTo, getRouteByLocation, getRouteById, routes } from "../../routes";

import "./plugins/disableScrollByDirection";
import "./plugins/determineScrollingPlugin";

const ScrollContext = React.createContext();

export class MainLayoutProviderComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.onNavigateTo = debounce(this.onNavigateTo, 400);
    this.onResize = debounce(this.onResize, 400);
  }

  state = {
    scrollTop: 0,
    limitY: 0,
    coloredNav: false,
    currentRoute: null,
    direction: 1,
    transitionEnd: false,
    disableHover: false,
    mobileMenuIsOpen: false,

    // sections
    selectedSectionIndex: 0,
    sections: [],
    sectionDirection: 1,
  };

  threshold = 0;
  scrolling = false;
  timer = 0;
  scrollbar = null;

  componentDidMount() {
    this.setCurrentRoute();
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  componentDidUpdate(prevProps) {
    const { location: prevLocation } = prevProps;
    const { location } = this.props;

    if (prevLocation.pathname !== location.pathname) {
      this.setCurrentRoute();
    }
  }

  onResize = () => {
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const mobileMenuWidth = +mobileMenu.replace("px", "");

    if (viewportWidth > mobileMenuWidth) {
      this.setState({ mobileMenuIsOpen: false });
    }
  };

  sectionsFromAdditionalMenu = additionalMenu => {
    const sliderIdArray = [];
    additionalMenu &&
      additionalMenu.forEach(({ children, title }) =>
        children.forEach(item => sliderIdArray.push({ ...item, parentTitle: title })),
      );

    return sliderIdArray;
  };

  setCurrentRoute = () => {
    const { location } = this.props;
    const currentRoute = getRouteByLocation(location);

    if (currentRoute) {
      const { slider, additionalMenu, scrollable, news } = currentRoute;

      const sliderState =
        slider || scrollable || news
          ? {
              sliderDirection: 1,
              selectedSectionIndex: 0,
              sections: slider ? this.sectionsFromAdditionalMenu(additionalMenu) : news || [],
            }
          : { selectedSectionIndex: 0, sections: [], sliderDirection: 1 };

      this.setState({ currentRoute, coloredNav: false, ...sliderState });
    } else {
      this.setState({ currentRoute: null, coloredNav: false });
    }
  };

  checkNavbarIntoContent = () => {
    const { currentRoute } = this.state;

    if (this.rightSide) {
      const headerHeight = 80;
      const { top } = this.rightSide.getBoundingClientRect();

      const scrollable = currentRoute && currentRoute.scrollable;

      if (top <= headerHeight && scrollable) {
        this.setState({
          coloredNav: true,
        });
      } else {
        this.setState({
          coloredNav: false,
        });
      }
    } else {
      this.setState({
        coloredNav: false,
      });
    }
  };

  onNavigateTo = (direction, routeSwipeUpAndDown = false) => {
    const { navigate, location } = this.props;
    const { pathname } = location;
    const { currentRoute, scrollTop, limitY, selectedSectionIndex, sections } = this.state;

    const scrollable = currentRoute && currentRoute.scrollable;

    if (scrollable && (scrollTop === 0 || limitY === scrollTop)) {
      const viewportHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0,
      );
      const ratio = viewportHeight / 3;
      const diff = Math.abs(this.threshold) - scrollTop;

      if (diff < ratio) {
        return;
      }
    }

    if (scrollable && scrollTop > 0 && limitY !== scrollTop) {
      return;
    }

    const slider = currentRoute && (currentRoute.slider || currentRoute.news);
    const up = selectedSectionIndex === 0 && direction < 0;
    const nextIndex = selectedSectionIndex + direction;
    const down = nextIndex === sections.length;

    if (slider && !up && !down && !routeSwipeUpAndDown) {
      const sectionDirection = selectedSectionIndex > nextIndex ? -1 : 1;

      this.setState({
        sectionDirection,
        selectedSectionIndex: nextIndex,
      });
    } else {
      this.setState({
        transitionEnd: false,
        direction,
      });

      this.threshold = 0;

      navigateTo({ navigate, pathname, direction });
    }
  };

  onScroll = e => {
    const { disableHover } = this.state;
    const { offset, limit } = e;
    const { y: offsetY } = offset;
    const { y: limitY } = limit;

    clearTimeout(this.timer);

    if (!disableHover) {
      this.setState({
        disableHover: true,
      });
    }

    this.timer = setTimeout(() => {
      this.setState({
        disableHover: false,
      });
    }, 200);

    this.setState(
      {
        scrollTop: offsetY,
        limitY,
      },
      () => {
        this.checkNavbarIntoContent();
      },
    );
  };

  onWheel = e => {
    const isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    let deltaY = e.deltaY;

    if (isFirefox) {
      deltaY = deltaY * 28;
    }

    this.threshold = this.threshold + deltaY;
    let direction = 1;

    if (deltaY < 0) {
      direction = -1;
    }

    this.setState({ direction });

    this.checkNavbarIntoContent();
    this.onNavigateTo(direction);
  };

  onRightSideRef = ref => {
    if (ref) {
      this.rightSide = ref;
    }
  };

  onExited = () => {
    this.scrollbar.scrollTop = 0;
    this.setState({
      coloredNav: false,
      scrollTop: 0,
      limitY: 0,
    });
  };

  determineScrollingEvent = scrolling => (this.scrolling = scrolling);

  onNavLinkClick = ({ transitionEnd, id, event, navigate, selectedSectionIndex }) => {
    const { currentRoute } = this.state;
    const prevIndex = routes.findIndex(route => route.id === currentRoute.id);
    const currentIndex = routes.findIndex(route => route.id === id);
    const direction = currentIndex > prevIndex ? 1 : -1;

    if (currentRoute && currentRoute.id === id) {
      event && event.preventDefault();
      return;
    }

    this.setState(
      {
        selectedSectionIndex: selectedSectionIndex || 0,
        direction,
        transitionEnd,
        mobileMenuIsOpen: false,
      },
      () => {
        const page = routes[currentIndex];
        if (navigate && page) {
          navigate(page.route);
        }
      },
    );
  };

  onTransitionEnd = (e, transitionEnd = true) => this.setState({ transitionEnd });

  onScrollBarRef = ref => {
    if (ref) {
      this.scrollbar = ref.scrollbar;
    }
  };

  toggleMobileMenu = () =>
    this.setState(({ mobileMenuIsOpen }) => ({
      mobileMenuIsOpen: !mobileMenuIsOpen,
    }));

  onSectionChange = ({ value, id, pageId }) => {
    const { navigate } = this.props;
    const { selectedSectionIndex, sections, currentRoute } = this.state;

    const pageIsChanged = pageId && currentRoute.id !== pageId;

    const nextValue = id
      ? sections.findIndex(item => item.id === id)
      : selectedSectionIndex + value;

    if (pageIsChanged) {
      const { additionalMenu } = getRouteById(pageId);
      const sectionFromMenu = this.sectionsFromAdditionalMenu(additionalMenu);
      const index = sectionFromMenu.findIndex(item => item.id === id);

      this.onNavLinkClick({
        selectedSectionIndex: index,
        transitionEnd: false,
        id: pageId,
        navigate,
      });
    } else {
      if (nextValue >= sections.length || nextValue < 0) return;

      const sectionDirection = selectedSectionIndex > nextValue ? -1 : 1;

      this.setState({
        sectionDirection,
        selectedSectionIndex: nextValue,
      });
    }
  };

  onSwiped = ({ isUp, isDown, yRatio }) => {
    if (isUp && yRatio > 25) {
      this.onNavigateTo(1, true);
    } else if (isDown && yRatio > 25) {
      this.onNavigateTo(-1, true);
    }
  };

  render() {
    const {
      scrollTop,
      coloredNav,
      direction,
      transitionEnd,
      disableHover,
      currentRoute,
      mobileMenuIsOpen,

      // sections
      selectedSectionIndex,
      sections,
      sectionDirection,
    } = this.state;
    const { children } = this.props;

    return (
      <ScrollContext.Provider
        value={{
          scrollTop,
          onRightSideRef: this.onRightSideRef,
          coloredNav,
          onExited: this.onExited,
          direction,
          onNavLinkClick: this.onNavLinkClick,
          transitionEnd,
          onTransitionEnd: this.onTransitionEnd,
          currentRoute,
          mobileMenuIsOpen,
          toggleMobileMenu: this.toggleMobileMenu,

          // sections
          onSectionChange: this.onSectionChange,
          selectedSectionIndex,
          sections,
          sectionDirection,
        }}
      >
        <Swiper onSwiped={this.onSwiped}>
          <ScrollBar
            ref={this.onScrollBarRef}
            disableHover={disableHover || !transitionEnd}
            plugins={{
              disableScrollByDirection: { direction: { x: true, y: mobileMenuIsOpen } },
              determineScrollingEvent: { callback: this.determineScrollingEvent },
            }}
            onScroll={this.onScroll}
            onWheel={this.onWheel}
          >
            {children}
          </ScrollBar>
        </Swiper>
      </ScrollContext.Provider>
    );
  }
}

export const MainLayoutProvider = ({ children }) => (
  <Location>
    {props => <MainLayoutProviderComponent {...props}>{children}</MainLayoutProviderComponent>}
  </Location>
);

export const MainLayoutConsumer = ScrollContext.Consumer;
