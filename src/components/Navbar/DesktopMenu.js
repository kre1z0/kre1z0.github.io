import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { Link, LinkContainer, Menu } from "./styles";
import { Link as OutsideLink } from "../Atoms/Atoms";
import styles from "./styles";
import { AdditionalMenu } from "../AdditionalMenu/AdditionalMenu";

export class DesktopMenu extends PureComponent {
  static propTypes = {
    location: PropTypes.object,
    direction: PropTypes.number,
    additionalMenuIsOpenId: PropTypes.string,
    onCloseAdditionalMenu: PropTypes.func,
    onOpenAdditionalMenu: PropTypes.func,
    onNavLinkClick: PropTypes.func,
    routes: PropTypes.array,
  };

  render() {
    const {
      routes,
      onCloseAdditionalMenu,
      onOpenAdditionalMenu,
      onNavLinkClick,
      currentRoute,
      additionalMenuIsOpenId,
      location,
      direction,
    } = this.props;

    return (
      <Menu>
        {routes.map(
          ({ text, id, route, outsideLink, additionalMenu, additionalMenuWidth }, index) => {
            if (outsideLink)
              return (
                <LinkContainer key={outsideLink}>
                  <OutsideLink
                    href={outsideLink}
                    target="_blank"
                    onMouseOver={onCloseAdditionalMenu}
                  >
                    {text}
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
                    additionalMenu ? () => onOpenAdditionalMenu(id) : onCloseAdditionalMenu
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
                {additionalMenuIsOpenId === id && (
                  <AdditionalMenu
                    fadeIn
                    additionalMenuIsOpenId={additionalMenuIsOpenId}
                    additionalMenu={additionalMenu}
                  />
                )}
              </LinkContainer>
            );
          },
        )}
      </Menu>
    );
  }
}
