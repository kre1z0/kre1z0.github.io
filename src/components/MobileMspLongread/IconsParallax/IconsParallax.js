import React, { Component } from "react";
import PropTypes from "prop-types";

import { ScrollbarConsumer } from "../../ScrollbarProvider/ScrollbarProvider";

class IconsParallaxBase extends Component {
  static propTypes = {
    scrollTop: PropTypes.number,
  };

  componentDidUpdate({ scrollTop: prevScrollTop }, prevState) {
    const { scrollTop } = this.props;

    if (prevScrollTop !== scrollTop) {
    }
  }

  onRef = ref => {
    if (ref) {
      this.container = ref;
    }
  };

  render() {
    const { children } = this.props;

    return <div ref={this.onRef}>{children}</div>;
  }
}

export const IconsParallax = props => (
  <ScrollbarConsumer>
    {({ scrollTop }) => <IconsParallaxBase scrollTop={scrollTop} {...props} />}
  </ScrollbarConsumer>
);
