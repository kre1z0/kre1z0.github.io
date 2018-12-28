import React from "react";
import styled from "astroturf";

import { ReactComponent as ArrowNext } from "../../img/icons/arrow-next-more.svg";

export const GoNextLinkContainer = styled("a")`
  margin-top: 1rem;
  cursor: pointer;
  color: #90c53d;
  font-weight: 600;
  white-space: nowrap;
  > svg {
    margin-left: 0.7142rem;
    fill: #90c53d;
    width: 0.85714rem;
    height: 0.7428rem;
  }
`;

export const GoNextLink = ({ children, withArrow = true , ...props }) => {
  return (
    <GoNextLinkContainer {...props}>
      {children}
      {withArrow && <ArrowNext />}
    </GoNextLinkContainer>
  );
};
