import React, { Component } from "react";
import PropTypes from "prop-types";

import { ScrollbarConsumer } from "../../ScrollbarProvider/ScrollbarProvider";
import { IconsParallaxContainer } from "./styles";

class IconsParallaxBase extends Component {
  static propTypes = {
    scrollTop: PropTypes.number,
    className: PropTypes.string,
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
    const { children, className } = this.props;

    return (
      <IconsParallaxContainer ref={this.onRef} className={className}>
        {children}
      </IconsParallaxContainer>
    );
  }
}

export const IconsParallax = props => (
  <ScrollbarConsumer>
    {({ scrollTop }) => <IconsParallaxBase scrollTop={scrollTop} {...props} />}
  </ScrollbarConsumer>
);
