import React, { Component } from "react";

import { setVhProperty } from "../utils/dom";
import { Helmet } from "../components/Helmet/Helmet";
import LongreadLayout from "./longread";
import { MainLayoutProvider } from "../components/MainLayoutProvider/MainLayoutProvider";
import { injectGlobals } from "../components/injectGlobals";
import { PageTransition } from "../components/Transition/PageTransition";
import { Navbar } from "../components/Navbar/Navbar";
import { isMobile } from "../utils/browser";

injectGlobals();

class Layout extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const { mobileOnly } = prevState;

    if (mobileOnly === null) {
      return {
        isMobile: isMobile(),
      };
    }

    return null;
  }

  state = {
    isMobile: null,
  };

  componentDidMount() {
    const { isMobile } = this.state;

    if (isMobile) {
      window.addEventListener("orientationchange", this.onResize);
    } else {
      window.addEventListener("resize", this.onResize);
    }

    this.onResize();
  }

  componentWillUnmount() {
    const { isMobile } = this.state;

    if (isMobile) {
      window.removeEventListener("orientationchange", this.onResize);
    } else {
      window.removeEventListener("resize", this.onResize);
    }
  }

  onResize = () => {
    const { isMobile } = this.state;

    setVhProperty(isMobile);
  };

  render() {
    const { children, location } = this.props;

    return (
      <MainLayoutProvider>
        <Helmet />
        <Navbar location={location} />
        <PageTransition location={location}>{children}</PageTransition>
      </MainLayoutProvider>
    );
  }
}

export default ({ children, pageContext, ...props }) => {
  if (pageContext.layout === "longread") {
    return <LongreadLayout {...props}>{children}</LongreadLayout>;
  }
  return <Layout {...props}>{children}</Layout>;
};
