import React, { Component } from "react";
import PropTypes from "prop-types";
// https://github.com/idiotWu/react-smooth-scrollbar
// API https://github.com/idiotWu/smooth-scrollbar/blob/develop/docs/api.md

import { Scrollbar } from "../../components/Scrollbar/Scrollbar";

const ScrollBarContext = React.createContext();

export class ScrollbarProvider extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  state = {
    scrollTop: 0,
  };

  onScroll = e => {
    const { offset } = e;
    const { y: offsetY } = offset;

    this.setState({
      scrollTop: offsetY,
    });
  };

  render() {
    const { scrollTop } = this.state;
    const { children, className } = this.props;

    return (
      <ScrollBarContext.Provider value={{ scrollTop }}>
        <Scrollbar onScroll={this.onScroll} className={className}>
          {children}
        </Scrollbar>
      </ScrollBarContext.Provider>
    );
  }
}

export const ScrollbarConsumer = ScrollBarContext.Consumer;
