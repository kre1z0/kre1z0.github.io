import styled from "astroturf";

import { GatsbyLink } from "../../components/Atoms/Atoms";

export const Title = styled("h4")`
  font-size: 1.2857rem;
  font-weight: 600;
`;

export const Paragraph = styled("p")`
  font-size: 1.1428rem;
`;

export const PrinciplesContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export const Principle = styled("section")`
  margin: 1rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 4);
  height: 9.4285rem;
  > span {
    white-space: nowrap;
  }
`;

export const Badge = styled("div")`
  width: 4rem;
  height: 4rem;
  box-shadow: 0 8px 8px 0 rgba(10, 18, 33, 0.05);
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1.7142rem;
  border-radius: 50%;
  margin-bottom: 0.5rem;
`;

export const Link = styled(GatsbyLink)`
  align-self: flex-end;
  font-size: 1.1428rem;
  color: #90c53d;
`;
