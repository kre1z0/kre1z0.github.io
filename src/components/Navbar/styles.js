import styled, { css } from "astroturf";
import { Link as GatsbyLink } from "gatsby";

export const Nav = styled("nav")`
  will-change: transform;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0 6.4285rem;
  min-height: 5.7142rem;
  transition: background 400ms ease-in, box-shadow 400ms ease-in;
  &.coloredNav {
    box-shadow: 0 8px 8px 0 rgba(10, 18, 33, 0.05);
    background-color: #fff;
  }
`;

export const LogoLink = styled(GatsbyLink)`
  width: 100%;
  max-width: 10.7142rem;
  display: block;
`;

export const Logo = styled("img")`
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
  margin-left: auto;
`;

export const Link = styled(GatsbyLink)`
  outline: none;
  color: #262c37;
  text-decoration: none;
  font-weight: 600;
  margin-right: 1.4285rem;
  &:last-child {
    margin-right: 0;
  }
`;

const styles = css`
  .activeLink {
    color: #90c53d;
  }
`;

export default styles;
