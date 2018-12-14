import styled, { css } from "astroturf";
import { Link as GatsbyLink } from "gatsby";

const mobileMenu = "930px";

export const Nav = styled("nav")`
  pointer-events: auto !important;
  display: flex;
  will-change: transform;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  align-items: flex-start;
  padding: 1.4714rem 6rem;
  @media (max-width: 992px) {
    padding: 1.4714rem 3.5714rem;
  }
  @media (max-width: ${mobileMenu}) {
    &.mobileMenuIsOpen {
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      position: fixed;
      background-color: #fff;
      flex-direction: column;
    }
  }
  * {
    pointer-events: auto !important;
  }
`;

export const LeftSide = styled("div")`
  z-index: 1;
  height: 2.5421rem;
  display: flex;
  align-items: center;
  @media (max-width: ${mobileMenu}) {
    width: 100%;
  }
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

export const Menu = styled("ul")`
  z-index: 1;
  list-style: none;
  display: flex;
  padding: 0.4457rem 0 0 0;
  margin: 0 0 0 auto;
  @media (max-width: ${mobileMenu}) {
    display: none;
  }
`;

export const MobileMenu = styled("ul")`
  z-index: 1;
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
  transition: opacity 200ms ease-in;
  @media (min-width: ${mobileMenu}) {
    display: none;
  }
`;

export const LinkContainer = styled("li")`
  margin-right: 1.4285rem;
  align-self: flex-start;
  &:last-child {
    margin-right: 0;
  }
  > a {
    font-weight: 600;
    font-size: 1rem;
  }
  @media (max-width: ${mobileMenu}) {
    margin: 0;
    > a {
      font-size: 1.7142rem;
      font-weight: bold;
    }
  }
  &.jobs {
    menu {
      justify-content: flex-end;
      > ul {
        text-align: right;
      }
    }
  }
`;

export const Link = styled(GatsbyLink)`
  white-space: nowrap;
  outline: none;
  color: #262c37;
  text-decoration: none;
  font-weight: 600;
  line-height: normal;
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
  .hamburger {
    margin-left: auto;
    display: none;
    @media (max-width: ${mobileMenu}) {
      display: block;
    }
  }
`;

export default styles;
