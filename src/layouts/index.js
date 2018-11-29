import React, { Component } from "react";
import Helmet from "react-helmet";

import { Provider } from "../components/Provider/Provider";
import { injectGlobals } from "../components/injectGlobals";
import { Transition } from "../components/Transition/Transition";
import favicon from "../img/favicon.png";
import { Navbar } from "../components/Navbar/Navbar";

injectGlobals();

class Layout extends Component {
  render() {
    const { children, location } = this.props;

    return (
      <Provider>
        <Helmet
          title="Everpoint"
          link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
        />
        <Navbar />
        <Transition location={location}>{children}</Transition>
      </Provider>
    );
  }
}

export default Layout;
