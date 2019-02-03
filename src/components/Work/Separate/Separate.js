import React, { Component } from "react";

import { Svg, Line, LightBulb, Filament } from "./styles";

export class Separate extends Component {
  render() {
    return (
      <div>
        <Svg>
          <Line />
          <LightBulb />
          <Filament />
        </Svg>
      </div>
    );
  }
}
