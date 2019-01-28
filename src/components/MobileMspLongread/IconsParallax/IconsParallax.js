import React, { Component } from "react";
import PropTypes from "prop-types";

import { isElementInViewport } from "../../../utils/dom";
import { ScrollbarConsumer } from "../../ScrollbarProvider/ScrollbarProvider";
import { IconsParallaxContainer } from "./styles";

class IconsParallaxBase extends Component {
  static propTypes = {
    scrollTop: PropTypes.number,
    className: PropTypes.string,
    icons: PropTypes.arrayOf(PropTypes.func),
  };

  static defaultProps = {
    icons: [],
  };

  state = {
    animationOver: false,
    iconIndex: 0,
  };

  shouldComponentUpdate(nextProps, { animationOver }) {
    if (this.container) {
      const viewportHeight = document.documentElement.clientHeight || window.innerHeight || 0;
      const { top } = this.container.getBoundingClientRect();

      const inViewport = top - viewportHeight <= 0;
      return inViewport && !animationOver;
    }
  }

  componentDidUpdate({ scrollTop: prevScrollTop }, prevState) {
    const { scrollTop } = this.props;

    if (prevScrollTop !== scrollTop && this.container) {
      const children = this.container.children;
      const viewportHeight = document.documentElement.clientHeight || window.innerHeight || 0;
      const { bottom } = this.container.getBoundingClientRect();
      const animationOver = bottom - viewportHeight <= 0;

      for (let i = 0; i < children.length; i++) {
        if (isElementInViewport({ el: children[i] })) {
        }
      }

      if (animationOver) {
        this.setState({ animationOver });
      }
    }
  }

  onRefContainer = ref => {
    if (ref) {
      this.container = ref;
    }
  };

  render() {
    const { className, icons } = this.props;

    return (
      <IconsParallaxContainer ref={this.onRefContainer} className={className}>
        {icons.map((Icon, index) => (
          <Icon key={`bn-icon-${index}`} />
        ))}
      </IconsParallaxContainer>
    );
  }
}

export const IconsParallax = props => (
  <ScrollbarConsumer>
    {({ scrollTop }) => <IconsParallaxBase scrollTop={scrollTop} {...props} />}
  </ScrollbarConsumer>
);
