import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { ConstellationPointsContainer, Point } from "./styles";

export class ConstellationPoints extends PureComponent {
  static propTypes = {
    selectedSectionIndex: PropTypes.number,
  };

  render() {
    const { selectedSectionIndex } = this.props;

    return (
      <ConstellationPointsContainer>
        {Array.from({ length: 5 }, (_, index) => (
          <Point key={`point-${index}`} isActive={index === selectedSectionIndex} />
        ))}
      </ConstellationPointsContainer>
    );
  }
}
