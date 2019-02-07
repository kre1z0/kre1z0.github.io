import React, { Component } from "react";
import cn from "classnames";

import { MainLayoutConsumer } from "../MainLayoutProvider/MainLayoutProvider";
import logo from "../../img/assets/logo.svg";
import { Hamburger } from "../../components/Buttons/IconButtons";
import styles, {
  NavbarContainer,
  Nav,
  LogoLink,
  Logo,
  LanguageSwitch,
  LanguageLink,
  LeftSide,
} from "./styles";
import { common } from "../../styles/common";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { routes } from "../../routes";

export class Navbar extends Component {
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
      <MainLayoutConsumer>
        {({
          scrollTop,
          coloredNav,
          direction,
          onNavLinkClick,
          currentRoute,
          mobileMenuIsOpen,
          toggleMobileMenu,
          selectedSectionIndex,
          sections,
          onSectionChange,
          transitionEnd,
        }) => {
          const transform = `translateY(${scrollTop}px)`;
          const section = sections[selectedSectionIndex];

          return (
            <NavbarContainer
              style={{ transform }}
              className={cn({
                [styles.coloredNav]: coloredNav || additionalMenuIsOpenId,
              })}
              onMouseLeave={this.onCloseAdditionalMenu}
              mobileMenuIsOpen={mobileMenuIsOpen}
            >
              <Nav className={common.container} mobileMenuIsOpen={mobileMenuIsOpen}>
                <LeftSide>
                  <LogoLink
                    onClick={event =>
                      onNavLinkClick({
                        index: 0,
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
                  transitionEnd={transitionEnd}
                  routes={routes}
                  selectedId={section && section.id}
                  location={location}
                  additionalMenuIsOpenId={additionalMenuIsOpenId}
                  currentRoute={currentRoute}
                  onSectionChange={onSectionChange}
                  onNavLinkClick={onNavLinkClick}
                  onOpenAdditionalMenu={this.onOpenAdditionalMenu}
                  onCloseAdditionalMenu={this.onCloseAdditionalMenu}
                />
                {mobileMenuIsOpen && (
                  <MobileMenu routes={routes} location={location} onNavLinkClick={onNavLinkClick} />
                )}
              </Nav>
            </NavbarContainer>
          );
        }}
      </MainLayoutConsumer>
    );
  }
}
