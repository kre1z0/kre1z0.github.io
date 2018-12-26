import React from "react";
import styled from "astroturf";

import { Button } from "./Buttons";

export const IconButton = styled(Button)`
  padding: 0.4rem;
  width: 1.4285rem;
  height: 1.4285rem;
  box-sizing: content-box;
  transition: none;
`;

export const Hamburger = styled(IconButton)`
  background: url(../../img/burger-menu.svg) center center no-repeat;
  background-size: 1.4285rem 1rem;
  &.isOpen {
    background: url(../../img/close-menu.svg) center center no-repeat;
    background-size: 1.4285rem 1rem;
  }
`;

export const GGWP = styled(Button)`
  width: 1.6rem;
  height: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 200ms ease;
`;

export const IconBtn = ({ children, className, ...props }) => {
  return (
    <Button className={className} {...props}>
      {children}
    </Button>
  );
};
