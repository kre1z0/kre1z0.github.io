import styled from "astroturf";

import { Article } from "../components/Elements/Article";

export const Section = styled(Article)`
  display: flex;
  justify-content: space-between;
`;

export const Column = styled("div")`
  width: 50%;
  margin-bottom: 3.4rem;
  &:first-child {
    padding-right: 2.4rem;
  }
  &:last-child {
    padding-left: 2.4rem;
  }
  &.oneColumn {
    width: 100%;
    padding: 0;
  }
  @media (max-width: 991px) {
    margin-bottom: 1.4rem;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    margin-bottom: 1rem;
  }
`;
