import React from "react";
import PropTypes from "prop-types";
import Responsive from "react-responsive";

import { Bullet, BulletsContainer } from "./styles";

export const Bullets = ({ sections, selectedSectionIndex, className }) => {
  return (
    <Responsive maxWidth={768}>
      <BulletsContainer className={className}>
        {sections.map(({ id }, index) => (
          <Bullet key={`${id}-bullet`} isActive={index === selectedSectionIndex} />
        ))}
      </BulletsContainer>
    </Responsive>
  );
};

Bullets.propTypes = {
  className: PropTypes.string,
  selectedSectionIndex: PropTypes.number,
  sections: PropTypes.arrayOf(PropTypes.object),
};
