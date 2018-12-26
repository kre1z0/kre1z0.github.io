import React from "react";
import PropTypes from "prop-types";
import Responsive from "react-responsive";

import { BackendContainer } from "./styles";
import { hexToRGB } from "../../utils/color";

export const BackendComponent = ({ sections, selectedSectionIndex }) => {
  const first = sections[selectedSectionIndex + 1];
  const second = sections[selectedSectionIndex + 2];

  return (
    <div>
      <Responsive maxWidth={768}>
        <BackendContainer>
          <div
            style={{
              backgroundColor: first && (first.bgColor ? first.bgColor : "#fff"),
              boxShadow:
                first &&
                (first.bgColor
                  ? `0 8px 8px 0 ${hexToRGB(first && first.bgColor, 0.1)}`
                  : "0 8px 8px 0 rgba(10, 18, 33, 0.1)"),
            }}
          />
          <div
            style={{
              backgroundColor: second && (second.bgColor ? second.bgColor : "#fff"),
              boxShadow:
                second &&
                (second.bgColor
                  ? `0 8px 8px 0 ${hexToRGB(second && second.bgColor, 0.1)}`
                  : "0 8px 8px 0 rgba(10, 18, 33, 0.1)"),
            }}
          />
        </BackendContainer>
      </Responsive>
    </div>
  );
};

BackendComponent.propTypes = {
  selectedSectionIndex: PropTypes.number,
  sections: PropTypes.arrayOf(PropTypes.object),
};
