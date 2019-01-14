import React, { Component } from "react";
import styled from "astroturf";

export const HeaderBlock = styled("header")`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.14);
`;

export class Header extends Component {
  render() {
    return <HeaderBlock>header</HeaderBlock>;
  }
}
