import styled from "astroturf";

export const Link = styled("a")`
  display: block;
  margin-bottom: 1.4857rem;
  cursor: pointer;
  font-size: 1.2857rem;
  color: #262c37;
  font-weight: 500;
  &:last-child {
    margin-bottom: 0;
  }
  &.isActive {
    color: #90c53d;
  }
`;
