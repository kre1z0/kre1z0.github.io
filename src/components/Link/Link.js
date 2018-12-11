import styled from "astroturf";

export const Link = styled("a")`
  display: block;
  margin-bottom: 1rem;
  cursor: pointer;
  font-size: 1.2857rem;
  color: #262c37;
  font-weight: 500;
  font-style: normal;
  text-decoration: none;
  &:last-child {
    margin-bottom: 0;
  }
  &.isActive {
    color: #90c53d;
  }
  &.navOutside {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 0;
    display: inline-block;
    margin-right: 1.4285rem;
  }
`;
