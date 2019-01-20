import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { ScrollbarConsumer } from "../../components/ScrollbarProvider/ScrollbarProvider";
import { Link } from "gatsby";
import { getBackRouteByLocationPathName } from "../../routes";
import { CloseButton } from "../Buttons/CloseButton";

import styles, { LongreadNavbarContainer } from "./styles";

export const getLongreadNavbarHeight = () => {
  const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  if (viewportWidth <= 576) {
    return 56;
  } else if (viewportWidth <= 992) {
    return 66;
  } else {
    return 80;
  }
};

export class LongreadNavbar extends Component {
  static propTypes = {
    pathname: PropTypes.string,
  };

  render() {
    const { pathname } = this.props;

    return (
      <ScrollbarConsumer>
        {({ scrollTop }) => {
          const transform = `translateY(${scrollTop}px)`;
          const withBg = scrollTop > 0;

          return (
            <LongreadNavbarContainer style={{ transform }} withBg={withBg}>
              <Link to={getBackRouteByLocationPathName(pathname)}>
                <CloseButton className={cn(styles.longreadCloseBtn, { [styles.withBg]: withBg })} />
              </Link>
            </LongreadNavbarContainer>
          );
        }}
      </ScrollbarConsumer>
    );
  }
}
