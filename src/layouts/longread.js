import React, { Component } from "react";
import Helmet from "react-helmet";

import { LongreadNavbar } from "../components/LongreadNavbar/LongreadNavbar";
import { ScrollbarProvider } from "../components/ScrollbarProvider/ScrollbarProvider";
import favicon from "../img/favicon.png";
import styles from "../styles/longread";

class LongredLayout extends Component {
  render() {
    const {
      children,
      location: { pathname },
    } = this.props;

    return (
      <ScrollbarProvider className={styles.scrollbar}>
        <Helmet
          title="Everpoint"
          link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
        />
        <LongreadNavbar pathname={pathname} />
        {children}
      </ScrollbarProvider>
    );
  }
}

export default LongredLayout;
