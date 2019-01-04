import React from "react";
import { css } from "astroturf";

import { IconBtn } from "./IconButtons";
import { ReactComponent as Close } from "../../img/icons/close.svg";

const styles = css`
  .svg {
  }
`;

export const CloseButton = ({ ...props }) => {
  return (
    <IconBtn {...props}>
      <Close className={styles.svg} />
    </IconBtn>
  );
};
