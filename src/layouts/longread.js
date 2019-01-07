import React, { Component } from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

import { Scrollbar } from "../components/Scrollbar/Scrollbar";
import { CloseButton } from "../components/Buttons/CloseButton";
import favicon from "../img/favicon.png";
import styles, { LongreadHeader } from "../styles/longread";

class LongredLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <Scrollbar className={styles.scrollbar}>
        <Helmet
          title="Everpoint"
          link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
        />
        <LongreadHeader>
          <Link to="/">
            <CloseButton className={styles.longreadCloseBtn} />
          </Link>
        </LongreadHeader>
        {children}
      </Scrollbar>
    );
  }
}

export default LongredLayout;
