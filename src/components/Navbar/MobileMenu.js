import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import animation from "../../components/Transition/animation";
import { Link, LinkContainer, MobileMenu as MobileMenuList } from "./styles";
import { Link as OutsideLink } from "../Atoms/Atoms";
import styles from "./styles";

export class MobileMenu extends PureComponent {
  static propTypes = {
    location: PropTypes.object,
    direction: PropTypes.number,
    onNavLinkClick: PropTypes.func,
    routes: PropTypes.array,
  };

  render() {
    const { routes, onNavLinkClick, location, direction } = this.props;

    return (
      <MobileMenuList className={animation.fadeIn}>
        {routes.map(({ text, id, route, outsideLink }, index) => {
          if (outsideLink)
            return (
              <LinkContainer key={outsideLink}>
                <OutsideLink href={outsideLink} target="_blank">
                  {text}
                </OutsideLink>
              </LinkContainer>
            );

          return (
            <LinkContainer key={id}>
              <Link
                to={route}
                className={cn({
                  [styles.activeLink]: location.pathname.includes(route) && route !== "/",
                })}
                activeClassName={styles.activeLink}
                onClick={event =>
                  onNavLinkClick({
                    direction: index > direction ? 1 : -1,
                    transitionEnd: false,
                    id,
                    event,
                    isMobile: true,
                  })
                }
              >
                {text}
              </Link>
            </LinkContainer>
          );
        })}
      </MobileMenuList>
    );
  }
}
