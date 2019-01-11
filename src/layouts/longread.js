import React, { Component } from "react";
import cn from 'classnames';
import { Link } from "gatsby";
import Helmet from "react-helmet";

import { getBackRouteByLocationPathName } from "../routes";
import { Scrollbar } from "../components/Scrollbar/Scrollbar";
import { CloseButton } from "../components/Buttons/CloseButton";
import favicon from "../img/favicon.png";
import styles, { LongreadHeader } from "../styles/longread";

class LongredLayout extends Component {
  state = {
    scrollTop: 0,
  };

  onScroll = e => {
    const { offset } = e;
    const { y: offsetY } = offset;

    this.setState({
      scrollTop: offsetY,
    });
  };

  render() {
    const { scrollTop } = this.state;
    const {
      children,
      location: { pathname },
    } = this.props;

    const transform = `translateY(${scrollTop}px)`;
    const withBg = scrollTop > 0;

    return (
      <Scrollbar className={styles.scrollbar} onScroll={this.onScroll}>
        <Helmet
          title="Everpoint"
          link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
        />
        <LongreadHeader style={{ transform }} withBg={withBg}>
          <Link to={getBackRouteByLocationPathName(pathname)}>
            <CloseButton className={cn(styles.longreadCloseBtn, { [styles.withBg]: withBg})} />
          </Link>
        </LongreadHeader>
        {children}
      </Scrollbar>
    );
  }
}

export default LongredLayout;
