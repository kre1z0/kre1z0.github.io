import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as ScrollTo } from "../../img/icons/scrollTo.svg";
import { IconButton } from "./IconButton";

export const ScrollDownButton = props => {
  return (
    <IconButton {...props}>
      <ScrollTo />
    </IconButton>
  );
};

ScrollDownButton.propTypes = {
  component: PropTypes.bool,
};
