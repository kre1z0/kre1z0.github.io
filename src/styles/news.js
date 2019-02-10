import styled from "astroturf";

import { Article } from "../components/Elements/Article";

export const Section = styled(Article)`
  display: flex;
  justify-content: space-between;
`;

export const Column = styled("div")`
  width: 50%;
  &:first-child {
    padding-right: 2.4rem;
  }
  &:last-child {
    padding-left: 2.4rem;
  }
`;
