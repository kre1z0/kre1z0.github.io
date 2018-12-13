import styled, { css } from "astroturf";
import { Link as GatsbyLink } from "gatsby";

export const Nav = styled("nav")`
  display: flex;
  will-change: transform;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  align-items: flex-start;
  padding: 1.4714rem 6rem;
  transition: box-shadow 240ms ease;
`;

export const LeftSide = styled("div")`
  height: 2.5421rem;
  display: flex;
  align-items: center;
`;

export const LogoLink = styled(GatsbyLink)`
  width: 100%;
  max-width: 10.7142rem;
  display: block;
`;

export const Logo = styled("img")`
  min-width: 10.7142rem;
  width: 100%;
  height: auto;
`;

export const LanguageSwitch = styled("div")`
  padding: 0 1.4285rem;
`;

export const LanguageLink = styled("a")`
  color: rgba(#212224, 0.5);
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.7142rem;
  font-weight: 600;
  &:first-child {
    padding-right: 0.4444rem;
  }
  &:last-child {
    padding-right: 0;
  }
  &.isActive {
    color: #212224;
  }
`;

export const Menu = styled("div")`
  display: flex;
  padding-top: 0.4457rem;
  margin-left: auto;
`;

export const LinkContainer = styled("div")`
  align-self: flex-start;
  &.jobs {
    menu {
      margin-right: 1.4285rem;
      justify-content: flex-end;
      > ul {
        text-align: right;
      }
    }
  }
`;

export const Link = styled(GatsbyLink)`
  pointer-events: auto !important;
  white-space: nowrap;
  outline: none;
  color: #262c37;
  text-decoration: none;
  font-weight: 600;
  margin-right: 1.4285rem;
  line-height: normal;
  &:last-child {
    margin-right: 0;
  }
`;

const styles = css`
  .activeLink {
    color: #90c53d;
  }
  .coloredNav {
    box-shadow: 0 8px 8px 0 rgba(10, 18, 33, 0.05);
    background-color: #fff;
  }
  .withoutAdditionalMenuAndIsActive {
    cursor: default;
  }
`;

export default styles;
