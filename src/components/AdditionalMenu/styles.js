import styled from "astroturf";

export const Menu = styled("menu")`
  display: flex;
  margin: 0;
  padding: 2.4rem 0 0 0;
  li {
    > a {
      white-space: nowrap;
      font-size: 1rem;
    }
  }
  &.big {
    display: block;
    h2 {
      text-transform: none;
      color: #262c37;
      font-weight: bold;
      font-size: 3.4285rem;
      margin-bottom: 2.1428rem;
    }
    li {
      > a {
        white-space: normal;
        font-size: 1.2857rem;
      }
      > menu {
        > a {
          margin: 0.64rem 0 0 1rem;
          font-size: 1rem;
        }
      }
    }
  }
`;

export const MenuList = styled("ul")`
  margin: 0 2.8571rem 0 0;
  &:last-child {
    margin-right: 0;
  }
`;

export const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 1.2rem;
  }
`;

export const SecondLevelMenu = styled("menu")`
  margin: 0;
  padding: 0;
`;

export const ListHeader = styled("h2")`
  text-transform: uppercase;
  color: rgba(38, 44, 55, 0.25);
  font-size: 0.7142rem;
  margin-bottom: 2rem;
  font-weight: bold;
  line-height: normal;
`;
