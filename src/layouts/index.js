import React, { Component } from "react";
import Helmet from "react-helmet";
import debounce from "lodash/debounce";

import { injectGlobals } from "../components/injectGlobals";
import { Transition } from "../components/Transition/Transition";
import { navigateTo } from "../routes";
import favicon from "../img/favicon.png";
import { Navbar } from "../components/Navbar/Navbar";

injectGlobals();

class Layout extends Component {
  constructor(props) {
    super(props);
    this.navigateTo = debounce(navigateTo, 200);
  }

  onWheel = e => {
    const { deltaY } = e;
    const { navigate, location } = this.props;
    const { pathname } = location;

    let direction = 1;

    if (deltaY < 0) {
      direction = -1;
    }

    this.navigateTo({ navigate, pathname, direction });
  };

  render() {
    const { children, location } = this.props;

    return (
      <div onWheel={this.onWheel}>
        <Helmet title="Everpoint" link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]} />
        <Navbar />
        <Transition location={location}>{children}</Transition>
      </div>
    );
  }
}

export default Layout;
