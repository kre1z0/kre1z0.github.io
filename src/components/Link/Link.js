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
  line-height: normal;
  &:last-child {
    margin-bottom: 0;
  }
  &.isActive {
    color: #90c53d;
  }
  &.navOutside {
    font-weight: 600;
    font-size: 1rem;
  }

  > span {
    white-space: nowrap;
    margin-left: 0.6rem;
    text-align: left;
    display: inline-block;
    width: 1.2rem;
    color: rgba(38, 44, 55, 0.35);
  }

  &.little {
    margin: 0.4rem 0 0 0.5rem;
    font-size: 0.8571rem;
  }
`;
