import React, { Component } from "react";
import PropTypes from "prop-types";
import Responsive from "react-responsive";

import { Bullet, BulletsContainer } from "./styles";

export class Bullets extends Component {
  static propTypes = {
    className: PropTypes.string,
    selectedSectionIndex: PropTypes.number,
    sections: PropTypes.arrayOf(PropTypes.object),
  };

  shouldComponentUpdate({ selectedSectionIndex: nextSelectedSectionIndex }, nextState) {
    const { selectedSectionIndex } = this.props;

    return selectedSectionIndex !== nextSelectedSectionIndex;
  }

  render() {
    const { sections, selectedSectionIndex, className } = this.props;

    return (
      <Responsive maxWidth={768}>
        <BulletsContainer className={className}>
          {sections.map(({ id }, index) => (
            <Bullet key={`${id}-bullet`} isActive={index === selectedSectionIndex} />
          ))}
        </BulletsContainer>
      </Responsive>
    );
  }
}
