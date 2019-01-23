import React from "react";
import cn from "classnames";
import styled, { css } from "astroturf";
import { Link as GatsbyLink } from "gatsby";

import { ReactComponent as ArrowNext } from "../../img/icons/arrow-next-more.svg";

const NativeLink = styled("a")``;

const styles = css`
  .goNextLink {
    text-decoration: none;
    margin-top: 1rem;
    cursor: pointer;
    color: #90c53d;
    font-weight: 600;
    white-space: nowrap;
    transition: color 200ms linear;
    > svg {
      transition: fill 200ms linear;
      margin-left: 0.7142rem;
      fill: #90c53d;
      width: 0.85714rem;
      height: 0.7428rem;
    }
    @media (hover: hover) {
      &:hover {
        color: #749e31;
        svg {
          fill: #749e31;
        }
      }
    }
  }
`;

export const GoNextLink = ({ children, withArrow = true, gatsby = false, className, ...props }) => {
  const Container = gatsby ? GatsbyLink : NativeLink;

  return (
    <Container className={cn(styles.goNextLink, className)} {...props}>
      {children}
      {withArrow && <ArrowNext />}
    </Container>
  );
};
