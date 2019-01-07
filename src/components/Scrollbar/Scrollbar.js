import React, { Component } from "react";

import { ScrollBarContainer } from "./styles";

export class Scrollbar extends Component {
  render() {
    const { children } = this.props;
    return <ScrollBarContainer>{children}</ScrollBarContainer>;
  }
}
