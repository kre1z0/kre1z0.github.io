import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { ScrollbarConsumer } from "../../components/ScrollbarProvider/ScrollbarProvider";
import { Link } from "gatsby";
import { getBackRouteByLocationPathName } from "../../routes";
import { CloseButton } from "../Buttons/CloseButton";

import styles, { LongreadNavbarContainer } from "./styles";

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
