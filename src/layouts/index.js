import React, { Component } from "react";

import { Helmet } from "../components/Helmet/Helmet";
import LongreadLayout from "./longread";
import { MainLayoutProvider } from "../components/MainLayoutProvider/MainLayoutProvider";
import { injectGlobals } from "../components/injectGlobals";
import { PageTransition } from "../components/Transition/PageTransition";
import { Navbar } from "../components/Navbar/Navbar";
import { ViewportHeight } from "../components/ViewportHeight/ViewportHeight";

injectGlobals();

class Layout extends Component {
  render() {
    const { children, location } = this.props;

    return (
      <MainLayoutProvider>
        <Helmet />
        <ViewportHeight />
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
