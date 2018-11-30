import React, { Component } from "react";
import { Location } from "@reach/router";
import debounce from "lodash/debounce";
import Scrollbar from "react-smooth-scrollbar";

import { navigateTo, routes } from "../../routes";

import "./plugins/disableScrollByDirection";
import "./plugins/determineScrollingPlugin";

const ScrollContext = React.createContext();

export class ScrollProviderComponent extends Component {
  constructor(props) {
    super(props);
    this.onNavigateTo = debounce(this.onNavigateTo, 404);
  }

  state = {
    scrollTop: 0,
    limitY: 0,
    coloredNav: false,
    currentRoute: null,
  };

  threshold = 0;
  scrolling = false;

  componentDidMount() {
    this.setCurrentRoute();
  }

  componentDidUpdate(prevProps) {
    const { location: prevLocation } = prevProps;
    const { location } = this.props;

    if (prevLocation.pathname !== location.pathname) {
      this.setCurrentRoute();
    }
  }

  setCurrentRoute = () => {
    const { pathname } = this.props.location;
    const currentRoute = routes.find(({ route }) => route === pathname);
    if (currentRoute) {
      this.setState({ currentRoute, coloredNav: false });
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

  onNavigateTo = direction => {
    const { navigate, location } = this.props;
    const { pathname } = location;
    const { currentRoute, scrollTop, limitY } = this.state;

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

    this.threshold = 0;
    navigateTo({ navigate, pathname, direction });
  };

  onScroll = e => {
    const { scrollTop } = this.state;
    const { offset, limit } = e;
    const { y: offsetY } = offset;
    const { y: limitY } = limit;

    let direction = 1;

    if (scrollTop > offsetY) {
      direction = -1;
    }

    this.setState({
      scrollTop: offsetY,
      limitY,
    });

    this.checkNavbarIntoContent();

    // only scroll
    if (scrollTop === 0 || limitY === 0) {
      return;
    }

    if (!this.scrolling) {
      this.onNavigateTo(direction);
    }
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

    this.onNavigateTo(direction);
    this.checkNavbarIntoContent();
  };

  onRightSideRef = ref => {
    if (ref) {
      this.rightSide = ref;
    }
  };

  onExited = () => {
    this.setState({ coloredNav: false, scrollTop: 0, limitY: 0 });
  };

  determineScrollingEvent = scrolling => (this.scrolling = scrolling);

  render() {
    const { scrollTop, coloredNav } = this.state;
    const { children } = this.props;

    return (
      <ScrollContext.Provider
        value={{
          scrollTop,
          onRightSideRef: this.onRightSideRef,
          coloredNav,
          onExited: this.onExited,
        }}
      >
        <Scrollbar
          plugins={{
            disableScrollByDirection: { direction: { x: true, y: false } },
            determineScrollingEvent: { callback: this.determineScrollingEvent },
          }}
          onScroll={this.onScroll}
          onWheel={this.onWheel}
        >
          {children}
        </Scrollbar>
      </ScrollContext.Provider>
    );
  }
}

export const ScrollProvider = ({ children }) => (
  <Location>
    {props => <ScrollProviderComponent {...props}>{children}</ScrollProviderComponent>}
  </Location>
);

export const ScrollConsumer = ScrollContext.Consumer;
