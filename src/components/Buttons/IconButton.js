import React from "react";
import PropTypes from "prop-types";
import styled from "astroturf";

import { Button } from "./Buttons";

export const IconButtonContainer = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  width: 1.4285rem;
  height: 1.4285rem;
  box-sizing: content-box;
  transition: all 200ms ease;
  > svg {
    width: 1.2857rem;
    height: 1.2857rem;
  }
`;

export const IconButton = props => {
  return <IconButtonContainer {...props}>{children}</IconButtonContainer>;
};

IconButton.propTypes = {
  component: PropTypes.bool,
};
