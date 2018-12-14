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
  &.leftSide {
    display: block;
    > ul {
      margin-bottom: 3.9285rem;
      @media (max-width: 992px) {
        margin-bottom: 2.8571rem;
      }
    }
    li {
      > a {
        white-space: normal;
        font-size: 1.2857rem;
        margin-bottom: 0;
        @media (max-width: 992px) {
          font-size: 1.1428rem;
        }
        @media (max-width: 768px) {
          font-size: 1rem;
        }
        @media (max-width: 576px) {
          font-size: 0.8571rem;
        }
      }
      > menu {
        > a {
          margin: 0.64rem 0 0 1rem;
          font-size: 1rem;
        }
      }
      @media (max-width: 768px) {
        margin-bottom: 0.6rem;
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
    margin-bottom: 0.4rem;
    > a {
      margin-bottom: 0;
    }
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
