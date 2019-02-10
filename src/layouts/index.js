import React, { Component } from "react";
import debounce from 'lodash/debounce';

import { setVhProperty } from "../utils/dom";
import { Helmet } from "../components/Helmet/Helmet";
import LongreadLayout from "./longread";
import { MainLayoutProvider } from "../components/MainLayoutProvider/MainLayoutProvider";
import { injectGlobals } from "../components/injectGlobals";
import { PageTransition } from "../components/Transition/PageTransition";
import { Navbar } from "../components/Navbar/Navbar";

injectGlobals();

class Layout extends Component {
  constructor(props) {
    super(props);
    this.onResize = debounce(this.onResize, 44);
  }

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
