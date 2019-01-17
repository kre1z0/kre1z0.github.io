import React, { Component } from "react";
import Helmet from "react-helmet";

import LongreadLayout from "./longread";
import { MainLayoutProvider } from "../components/MainLayoutProvider/MainLayoutProvider";
import { injectGlobals } from "../components/injectGlobals";
import { PageTransition } from "../components/Transition/PageTransition";
import favicon from "../img/favicon.png";
import { Navbar } from "../components/Navbar/Navbar";

injectGlobals();

class Layout extends Component {
  render() {
    const { children, location } = this.props;

    return (
      <MainLayoutProvider>
        <Helmet
          title="Everpoint"
          link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
        />
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
