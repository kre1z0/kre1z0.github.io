import styled from "astroturf";

import { Button } from "./Buttons";

export const Hamburger = styled(Button)`
  padding: 0.4rem;
  width: 1.4285rem;
  height: 1.4285rem;
  background: url(../../img/burger-menu.svg) center center no-repeat;
  background-size: 1.4285rem 1rem;
  box-sizing: content-box;
  transition: none;
  &.isOpen {
    background: url(../../img/close-menu.svg) center center no-repeat;
    background-size: 1.4285rem 1rem;
  }
`;
