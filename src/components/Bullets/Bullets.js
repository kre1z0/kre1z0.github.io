import React, { Component } from "react";
import PropTypes from "prop-types";

import { ReactComponent as Arrow } from "../../img/icons/arrow.svg";
import { BulletsContainer, PrevBtn, NextBtn, Amount } from "./styles";

export class Bullets extends Component {
  static propTypes = {
    className: PropTypes.string,
    selectedSectionIndex: PropTypes.number,
    sections: PropTypes.arrayOf(PropTypes.object),
    maxWidth: PropTypes.number,
    goPrev: PropTypes.func,
    goNext: PropTypes.func,
  };

  shouldComponentUpdate({ selectedSectionIndex: nextSelectedSectionIndex }, nextState) {
    const { selectedSectionIndex } = this.props;

    return selectedSectionIndex !== nextSelectedSectionIndex;
  }

  render() {
    const { sections, selectedSectionIndex, className, goPrev, goNext } = this.props;

    return (
      <BulletsContainer className={className}>
        <PrevBtn onClick={goPrev} disabled={selectedSectionIndex < 1}>
          <Arrow />
        </PrevBtn>
        <Amount>{`${selectedSectionIndex + 1}/${sections.length}`}</Amount>
        <NextBtn onClick={goNext} disabled={selectedSectionIndex + 1 === sections.length}>
          <Arrow />
        </NextBtn>
      </BulletsContainer>
    );
  }
}
