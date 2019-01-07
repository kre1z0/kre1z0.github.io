import React, { Component } from "react";
import PropTypes from "prop-types";
// https://github.com/idiotWu/react-smooth-scrollbar
// API https://github.com/idiotWu/smooth-scrollbar/blob/develop/docs/api.md

import { ScrollBarContainer } from "./styles";

export class Scrollbar extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { children, className } = this.props;

    return <ScrollBarContainer className={className}>{children}</ScrollBarContainer>;
  }
}
