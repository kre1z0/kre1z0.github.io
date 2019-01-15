import React, { Component } from "react";
import PropTypes from "prop-types";

import { HeaderBlock } from "./styles";

export class Header extends Component {
  static propTypes = {
    project: PropTypes.object,
  };

  render() {
    const {
      project: { bgColor },
    } = this.props;

    return <HeaderBlock style={{ backgroundColor: bgColor }}>header</HeaderBlock>;
  }
}
