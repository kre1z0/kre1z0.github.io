import React, { Component } from "react";

import { Helmet } from "../components/Helmet/Helmet";
import { LongreadNavbar } from "../components/LongreadNavbar/LongreadNavbar";
import { ScrollbarProvider } from "../components/ScrollbarProvider/ScrollbarProvider";
import styles from "../styles/longread";

class LongredLayout extends Component {
  render() {
    const {
      children,
      location: { pathname },
    } = this.props;

    return (
      <ScrollbarProvider className={styles.scrollbar} withScrollbar>
        <Helmet />
        <LongreadNavbar pathname={pathname} />
        {children}
      </ScrollbarProvider>
    );
  }
}

export default LongredLayout;
