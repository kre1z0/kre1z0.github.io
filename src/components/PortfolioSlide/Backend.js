import React from "react";
import PropTypes from "prop-types";

import { Backend as Background } from "./styles";
import { hexToRGB } from "../../utils/color";
import { Tablet } from "../Responsive/Responsive";

export const Backend = ({ sections, selectedSectionIndex }) => {
  const first = sections[selectedSectionIndex + 1];
  const second = sections[selectedSectionIndex + 2];

  return (
    <Tablet>
      <Background
        style={{
          backgroundColor: first && first.bgColor,
          boxShadow: `0 8px 8px 0 ${hexToRGB(first && first.bgColor, 0.1)}`,
        }}
      />
      <Background
        style={{
          backgroundColor: second && second.bgColor,
          boxShadow: `0 8px 8px 0 ${hexToRGB(second && second.bgColor, 0.1)}`,
        }}
      />
    </Tablet>
  );
};

Backend.propTypes = {
  selectedSectionIndex: PropTypes.number,
  sections: PropTypes.arrayOf(PropTypes.object),
};
