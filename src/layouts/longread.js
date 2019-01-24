import React, { Component } from "react";

import { setVhProperty } from "../utils/dom";
import { Helmet } from "../components/Helmet/Helmet";
import { ScrollbarProvider } from "../components/ScrollbarProvider/ScrollbarProvider";
import styles from "../styles/longread";

class LongredLayout extends Component {
  componentDidMount() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = () => {
    setVhProperty();
  };

  render() {
    const { children, location } = this.props;

    return (
      <ScrollbarProvider location={location} className={styles.scrollbar} withScrollbar>
        <Helmet />
        {children}
      </ScrollbarProvider>
    );
  }
}

export default LongredLayout;
