import React from "react";
import PropTypes from "prop-types";

import { Tablet } from "../Responsive/Responsive";
import { Bullet, BulletsContainer } from "./styles";

export const Bullets = ({ sections, selectedSectionIndex }) => {
  return (
    <Tablet>
      <BulletsContainer>
        {sections.map(({ id }, index) => (
          <Bullet key={`${id}-bullet`} isActive={index === selectedSectionIndex} />
        ))}
      </BulletsContainer>
    </Tablet>
  );
};

Bullets.propTypes = {
  selectedSectionIndex: PropTypes.number,
  sections: PropTypes.arrayOf(PropTypes.object),
};
