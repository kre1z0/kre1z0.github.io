import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Link } from "gatsby";

import { ReactComponent as Close } from "../../img/icons/close.svg";
import { ReactComponent as Arrow } from "../../img/icons/arrow.svg";
import { ScrollbarConsumer } from "../ScrollbarProvider/ScrollbarProvider";
import { getBackRouteByLocationPathName } from "../../routes";
import styles, { LongreadNavbarContainer } from "./styles";

export const getLongreadNavbarHeight = () => {
  const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  if (viewportWidth <= 767) {
    return 46;
  } else if (viewportWidth <= 991) {
    return 66;
  } else {
    return 80;
  }
};

export class LongreadNavbarBase extends Component {
  static propTypes = {
    pathname: PropTypes.string,
    scrollTop: PropTypes.number,
    className: PropTypes.string,
    lightNavy: PropTypes.bool,
    projects: PropTypes.arrayOf(PropTypes.string),
  };

  render() {
    const { pathname, scrollTop, className, children, lightNavy, projects } = this.props;
    const transform = `translateY(${scrollTop}px)`;
    const fixed = scrollTop > 0;
    const arrowControl = !!projects;
    const currentPageIndex =
      projects && projects.findIndex(id => id === pathname.replace(/\//g, ""));
    const prevProjectPage = projects && projects[currentPageIndex - 1];
    const nextProjectPage = projects && projects[currentPageIndex + 1];

    return (
      <LongreadNavbarContainer
        lightNavy={lightNavy}
        className={className}
        style={{ transform }}
        fixed={fixed}
      >
        {children}
        {arrowControl && prevProjectPage && (
          <Link to={`/${prevProjectPage}`} className={cn(styles.arrowBtn, styles.leftArrowBtn)}>
            <Arrow />
            Предыдущий
          </Link>
        )}
        <Link className={styles.longreadCloseBtn} to={getBackRouteByLocationPathName(pathname)}>
          <Close />
        </Link>
        {arrowControl && nextProjectPage && (
          <Link to={`/${nextProjectPage}`} className={cn(styles.arrowBtn, styles.rightArrowBtn)}>
            Следующий
            <Arrow />
          </Link>
        )}
      </LongreadNavbarContainer>
    );
  }
}

export const LongreadNavbar = props => (
  <ScrollbarConsumer>
    {({ scrollTop }) => <LongreadNavbarBase {...props} scrollTop={scrollTop} />}
  </ScrollbarConsumer>
);
