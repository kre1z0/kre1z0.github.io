import React from "react";

import { ScrollConsumer } from "../ScrollProvider/ScrollProvider";
import logo from "../../img/logo.svg";
import { Link as OutsideLink } from "../../components/Link/Link";
import styles, { Nav, Link, LogoLink, Logo, LanguageSwitch, LanguageLink, Menu } from "./styles";
import { routesWithOutsideLinks } from "../../routes";

export const Navbar = ({ location }) => (
  <ScrollConsumer>
    {({ scrollTop, coloredNav, direction, onNavLinkClick }) => {
      const transform = `translateY(${scrollTop}px)`;

      return (
        <Nav style={{ transform }} coloredNav={coloredNav}>
          <LogoLink to="/">
            <Logo as="img" src={logo} alt="logo" />
          </LogoLink>
          <LanguageSwitch>
            <LanguageLink isActive>ru</LanguageLink>
            <LanguageLink>en</LanguageLink>
          </LanguageSwitch>
          <Menu>
            {routesWithOutsideLinks.map(({ text, route, outsideLink }, index) => {
              if (outsideLink)
                return (
                  <OutsideLink href={outsideLink} target="_blank" key={outsideLink} navOutside>
                    Блог
                  </OutsideLink>
                );

              return (
                <Link
                  key={route}
                  to={route}
                  className={
                    location.pathname.includes(route) && route !== "/" ? styles.activeLink : ""
                  }
                  activeClassName={styles.activeLink}
                  onClick={() =>
                    onNavLinkClick({ direction: index > direction ? 1 : -1, transitionEnd: false })
                  }
                >
                  {text}
                </Link>
              );
            })}
          </Menu>
        </Nav>
      );
    }}
  </ScrollConsumer>
);
