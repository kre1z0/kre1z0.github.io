import React, { Component } from "react";
import PropTypes from "prop-types";
// https://github.com/idiotWu/react-smooth-scrollbar
// API https://github.com/idiotWu/smooth-scrollbar/blob/develop/docs/api.md

import { isMobile } from "../../utils/browser";
import { ScrollBarContainer } from "./styles";

export class Scrollbar extends Component {
  static propTypes = {
    onScrollbarRef: PropTypes.func,
  };

  render() {
    const { children, onScrollbarRef, ...props } = this.props;

    return (
      <ScrollBarContainer isMobile={isMobile()} {...props} ref={onScrollbarRef}>
        {children}
      </ScrollBarContainer>
    );
  }
}
