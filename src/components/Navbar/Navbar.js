import React, { PureComponent } from "react";
import cn from "classnames";

import { ScrollConsumer } from "../ScrollProvider/ScrollProvider";
import logo from "../../img/logo.svg";
import { Hamburger } from "../../components/Buttons/Hamburger";
import styles, { Nav, LogoLink, Logo, LanguageSwitch, LanguageLink, LeftSide } from "./styles";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { routes } from "../../routes";

export class Navbar extends PureComponent {
  state = {
    additionalMenuIsOpenId: null,
  };

  onOpenAdditionalMenu = id => {
    this.setState({ additionalMenuIsOpenId: id });
  };

  onCloseAdditionalMenu = () => {
    this.setState({ additionalMenuIsOpenId: null });
  };

  render() {
    const { additionalMenuIsOpenId } = this.state;
    const { location } = this.props;

    return (
      <ScrollConsumer>
        {({ scrollTop, coloredNav, direction, onNavLinkClick, currentRoute, mobileMenuIsOpen, toggleMobileMenu }) => {
          const transform = `translateY(${scrollTop}px)`;

          return (
            <Nav
              style={{ transform }}
              className={cn({
                [styles.coloredNav]: coloredNav || additionalMenuIsOpenId,
              })}
              mobileMenuIsOpen={mobileMenuIsOpen}
              onMouseLeave={this.onCloseAdditionalMenu}
            >
              <LeftSide>
                <LogoLink
                  onClick={event =>
                    onNavLinkClick({
                      direction: -1,
                      transitionEnd: false,
                      id: "index",
                      event,
                    })
                  }
                  to="/"
                >
                  <Logo as="img" src={logo} alt="logo" />
                </LogoLink>
                <LanguageSwitch>
                  <LanguageLink isActive>ru</LanguageLink>
                  <LanguageLink>en</LanguageLink>
                </LanguageSwitch>
                <Hamburger
                  isOpen={mobileMenuIsOpen}
                  onClick={toggleMobileMenu}
                  className={styles.hamburger}
                />
              </LeftSide>
              <DesktopMenu
                routes={routes}
                location={location}
                direction={direction}
                additionalMenuIsOpenId={additionalMenuIsOpenId}
                currentRoute={currentRoute}
                onNavLinkClick={onNavLinkClick}
                onOpenAdditionalMenu={this.onOpenAdditionalMenu}
                onCloseAdditionalMenu={this.onCloseAdditionalMenu}
              />
              {mobileMenuIsOpen && (
                <MobileMenu
                  routes={routes}
                  location={location}
                  direction={direction}
                  onNavLinkClick={onNavLinkClick}
                />
              )}
            </Nav>
          );
        }}
      </ScrollConsumer>
    );
  }
}
