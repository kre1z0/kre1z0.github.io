import React, { Component } from "react";
import PropTypes from "prop-types";
// https://github.com/idiotWu/react-smooth-scrollbar
// API https://github.com/idiotWu/smooth-scrollbar/blob/develop/docs/api.md

import { Swiper } from "../../components/Swiper/Swiper";
import { Scrollbar } from "../../components/Scrollbar/Scrollbar";

import "../ScrollbarProvider/plugins/disableScrollByDirection";
import { getLongreadNavbarHeight } from "../LongreadNavbar/LongreadNavbar";

const ScrollBarContext = React.createContext();

export class ScrollbarProvider extends Component {
  static propTypes = {
    className: PropTypes.string,
    withScrollbarY: PropTypes.bool,
    location: PropTypes.object,
  };

  state = {
    scrollTop: 0,
    scrollbar: null,
  };

  componentDidUpdate({ location: prevLocation }, prevState) {
    const { scrollbar } = this.state;
    const { location } = this.props;

    if (prevLocation.pathname !== location.pathname && scrollbar) {
      scrollbar.scrollTo(0, 0, 0);
    }
  }

  onScroll = e => {
    const { offset } = e;
    const { y: offsetY } = offset;

    this.setState({
      scrollTop: offsetY,
    });
  };

  onScrollBarRef = ref => {
    if (ref) {
      this.setState({
        scrollbar: ref.scrollbar,
      });
    }
  };

  elementYPosition = ({ element, percent = true }) => {
    const { scrollbar } = this.state;

    const { bottom, height: elementHeight } = element.getBoundingClientRect();
    const {
      container: { height },
    } = scrollbar.getSize();

    const value = bottom - height - elementHeight;
    const diff = value < -height ? -height : value > 0 ? 0 : value;

    return percent
      ? Math.min((Math.abs(diff) * 100) / (height - getLongreadNavbarHeight()), 100)
      : Math.abs(diff);
  };

  render() {
    const { scrollTop, scrollbar } = this.state;
    const { children, className, withScrollbarY } = this.props;

    return (
      <ScrollBarContext.Provider
        value={{ scrollTop, scrollbar, elementYPosition: this.elementYPosition }}
      >
        <Swiper
          preventDefaultTouchmoveEvent={true}
          onSwipingDown={this.onSwipingDown}
          onSwipingUp={this.onSwipingUp}
        >
          <Scrollbar
            renderByPixels={false}
            withScrollbarY={withScrollbarY}
            onScrollbarRef={this.onScrollBarRef}
            onScroll={this.onScroll}
            className={className}
            plugins={{
              disableScrollByDirection: { direction: { x: true, y: false } },
            }}
          >
            {children}
          </Scrollbar>
        </Swiper>
      </ScrollBarContext.Provider>
    );
  }
}

export const ScrollbarConsumer = ScrollBarContext.Consumer;
