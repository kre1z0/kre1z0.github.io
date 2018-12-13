import React, { PureComponent } from "react";
import cn from "classnames";

import { ScrollConsumer } from "../ScrollProvider/ScrollProvider";
import logo from "../../img/logo.svg";
import { Link as OutsideLink } from "../../components/Link/Link";
import styles, {
  Nav,
  Link,
  LogoLink,
  Logo,
  LanguageSwitch,
  LanguageLink,
  Menu,
  LinkContainer,
  LeftSide,
} from "./styles";
import { AdditionalMenu } from "../AdditionalMenu/AdditionalMenu";
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
        {({ scrollTop, coloredNav, direction, onNavLinkClick, currentRoute }) => {
          const transform = `translateY(${scrollTop}px)`;

          return (
            <Nav
              style={{ transform }}
              className={cn({ [styles.coloredNav]: coloredNav || additionalMenuIsOpenId })}
              onMouseLeave={this.onCloseAdditionalMenu}
            >
              <LeftSide>
                <LogoLink to="/">
                  <Logo as="img" src={logo} alt="logo" />
                </LogoLink>
                <LanguageSwitch>
                  <LanguageLink isActive>ru</LanguageLink>
                  <LanguageLink>en</LanguageLink>
                </LanguageSwitch>
              </LeftSide>
              <Menu>
                {routes.map(
                  (
                    { text, id, route, outsideLink, additionalMenu, additionalMenuWidth },
                    index,
                  ) => {
                    if (outsideLink)
                      return (
                        <LinkContainer key={outsideLink}>
                          <OutsideLink
                            href={outsideLink}
                            target="_blank"
                            navOutside
                            onMouseOver={this.onCloseAdditionalMenu}
                          >
                            Блог
                          </OutsideLink>
                        </LinkContainer>
                      );

                    const listIdentifiersWithoutSpecialStyles = ["portfolio"];

                    const className =
                      additionalMenu && !listIdentifiersWithoutSpecialStyles.includes(id)
                        ? {
                            [id]: true,
                          }
                        : {};

                    return (
                      <LinkContainer key={id} {...className} style={{ width: additionalMenuWidth }}>
                        <Link
                          onMouseOver={
                            additionalMenu
                              ? () => this.onOpenAdditionalMenu(id)
                              : this.onCloseAdditionalMenu
                          }
                          to={route}
                          className={cn({
                            [styles.activeLink]: location.pathname.includes(route) && route !== "/",
                            [styles.withoutAdditionalMenuAndIsActive]:
                              !additionalMenu && currentRoute && currentRoute.id === id,
                          })}
                          activeClassName={styles.activeLink}
                          onClick={event =>
                            onNavLinkClick({
                              direction: index > direction ? 1 : -1,
                              transitionEnd: false,
                              id,
                              event,
                            })
                          }
                        >
                          {text}
                        </Link>
                        <AdditionalMenu
                          isOpen={id === additionalMenuIsOpenId}
                          additionalMenu={additionalMenu}
                        />
                      </LinkContainer>
                    );
                  },
                )}
              </Menu>
            </Nav>
          );
        }}
      </ScrollConsumer>
    );
  }
}
