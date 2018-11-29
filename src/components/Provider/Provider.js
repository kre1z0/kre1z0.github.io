import React, { Component } from "react";
import { Location } from "@reach/router";
import debounce from "lodash/debounce";
import Scrollbar from "react-smooth-scrollbar";

import { navigateTo, routes } from "../../routes";

const Context = React.createContext();

export class ProviderComponent extends Component {
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

    this.onNavigateTo(direction);
    this.checkNavbarIntoContent();
  };

  onWheel = e => {
    const { deltaY } = e;

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

  render() {
    const { scrollTop, coloredNav } = this.state;
    const { children } = this.props;

    return (
      <Context.Provider
        value={{
          scrollTop,
          onRightSideRef: this.onRightSideRef,
          coloredNav,
          onExited: this.onExited,
        }}
      >
        <Scrollbar
          // damping={number}
          // thumbMinSize={number}
          // syncCallbacks={boolean}
          // renderByPixels={boolean}
          alwaysShowTracks={true}
          continuousScrolling={true}
          // wheelEventTarget={element}
          // plugins={object}
          onScroll={this.onScroll}
          onWheel={this.onWheel}
        >
          {children}
        </Scrollbar>
      </Context.Provider>
    );
  }
}

export const Provider = ({ children }) => (
  <Location>{props => <ProviderComponent {...props}>{children}</ProviderComponent>}</Location>
);

export const Consumer = Context.Consumer;
