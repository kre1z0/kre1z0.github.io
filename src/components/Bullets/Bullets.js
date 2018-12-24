import React from "react";
import PropTypes from "prop-types";

import { Tablet } from "../../components/Responsive/Responsive";
import { Bullet, BulletsContainer } from "./styles";

export const Bullets = ({ sections, selectedSectionIndex, className }) => {
  return (
    <Tablet>
      <BulletsContainer className={className}>
        {sections.map(({ id }, index) => (
          <Bullet key={`${id}-bullet`} isActive={index === selectedSectionIndex} />
        ))}
      </BulletsContainer>
    </Tablet>
  );
};

Bullets.propTypes = {
  className: PropTypes.string,
  selectedSectionIndex: PropTypes.number,
  sections: PropTypes.arrayOf(PropTypes.object),
};
