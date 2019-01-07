import React from "react";

import { IconBtn } from "./IconButtons";
import { ReactComponent as Close } from "../../img/icons/close.svg";

export const CloseButton = ({ ...props }) => {
  return (
    <IconBtn {...props}>
      <Close />
    </IconBtn>
  );
};
