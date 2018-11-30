import React, { Component } from "react";
import Helmet from "react-helmet";

import { ScrollProvider } from "../components/ScrollProvider/ScrollProvider";
import { injectGlobals } from "../components/injectGlobals";
import { Transition } from "../components/Transition/Transition";
import favicon from "../img/favicon.png";
import { Navbar } from "../components/Navbar/Navbar";

injectGlobals();

class Layout extends Component {
  render() {
    const { children, location } = this.props;

    return (
      <ScrollProvider>
        <Helmet
          title="Everpoint"
          link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
        />
        <Navbar />
        <Transition location={location}>{children}</Transition>
      </ScrollProvider>
    );
  }
}

export default Layout;
