import React from "react";
import cn from "classnames";
import styled, { css } from "astroturf";

import { Button } from "./Buttons";

export const IconButton = styled(Button)`
  padding: 0.4rem;
  width: 1.4285rem;
  height: 1.4285rem;
  box-sizing: content-box;
  transition: none;
`;

export const Hamburger = styled(IconButton)`
  background: url(../../img/icons/burger-menu.svg) center center no-repeat;
  background-size: 1.4285rem 1rem;
  &.isOpen {
    background: url(../../img/close-menu.svg) center center no-repeat;
    background-size: 1.4285rem 1rem;
  }
`;

const styles = css`
  .iconBtn {
    background: none;
  }
`;

export const IconBtn = ({ children, className, ...props }) => {
  return (
    <Button className={cn(styles.iconBtn, className)} {...props}>
      {children}
    </Button>
  );
};
