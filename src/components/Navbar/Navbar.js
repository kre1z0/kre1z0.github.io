import React from "react";
import { Link as GatsbyLink } from "gatsby";

import logo from "../../img/logo.svg";
import { Nav, Link, Logo, LanguageSwitch, LanguageLink, Menu, styles } from "./styles";
import { routes } from "../../routes";

export const Navbar = () => (
  <Nav
  // coloredNav
  >
    <GatsbyLink to="/">
      <Logo as="img" src={logo} alt="logo" />
    </GatsbyLink>
    <LanguageSwitch>
      <LanguageLink isActive>ru</LanguageLink>
      <LanguageLink>en</LanguageLink>
    </LanguageSwitch>
    <Menu>
      {routes.map(({ text, route }) => (
        <Link key={text} to={route} activeClassName={styles.activeLink}>
          {text}
        </Link>
      ))}
    </Menu>
  </Nav>
);
