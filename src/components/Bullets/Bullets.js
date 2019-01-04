import React, { Component } from "react";
import PropTypes from "prop-types";
import Responsive from "react-responsive";

import { Bullet, BulletsContainer } from "./styles";

export class Bullets extends Component {
  static propTypes = {
    className: PropTypes.string,
    selectedSectionIndex: PropTypes.number,
    sections: PropTypes.arrayOf(PropTypes.object),
    maxWidth: PropTypes.number,
  };

  shouldComponentUpdate({ selectedSectionIndex: nextSelectedSectionIndex }, nextState) {
    const { selectedSectionIndex } = this.props;

    return selectedSectionIndex !== nextSelectedSectionIndex;
  }

  render() {
    const { sections, selectedSectionIndex, className } = this.props;

    return (
      <Responsive maxWidth={1000}>
        <BulletsContainer className={className}>
          {sections.map((_, index) => (
            <Bullet key={`${index}-bullet`} isActive={index === selectedSectionIndex} />
          ))}
        </BulletsContainer>
      </Responsive>
    );
  }
}
