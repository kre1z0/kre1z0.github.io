import React, { Component } from "react";

import { ScrollbarConsumer } from "../../components/ScrollbarProvider/ScrollbarProvider";
import { ReactComponent as SvgMap } from "../../img/portfolio/msp/RegionMapforBN.svg";

export class MapComponent extends Component {
  render() {
    return <SvgMap />;
  }
}

export const Map = () => (
  <ScrollbarConsumer>{({ scrollTop }) => <MapComponent scrollTop={scrollTop} />}</ScrollbarConsumer>
);
