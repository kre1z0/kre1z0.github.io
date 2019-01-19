import React, { Component } from "react";
import PropTypes from "prop-types";

import { getLongreadNavbarHeight } from "../../components/LongreadNavbar/LongreadNavbar";
import { ScrollbarConsumer } from "../../components/ScrollbarProvider/ScrollbarProvider";
import { Video } from "./Video";

import { InViewContainer } from "./styles";

class InViewBase extends Component {
  static propTypes = {
    source: PropTypes.string,
    scrollTop: PropTypes.number,
    offset: PropTypes.number,
  };

  state = {
    play: false,
  };

  componentDidMount() {
    this.checkInView();
  }

  componentDidUpdate({ scrollTop: prevScrollTop }, prevState) {
    const { scrollTop } = this.props;

    if (prevScrollTop !== scrollTop) {
      this.checkInView();
    }
  }

  checkInView = () => {
    const { play } = this.state;
    const offset = this.props.offset || getLongreadNavbarHeight();
    const container = this.container;

    if (container) {
      const viewportHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0,
      );

      const { bottom, height, top } = container.getBoundingClientRect();
      const videoFullInView = top <= height && top > offset;
      const videoOnTop = bottom < height / 2 + offset;
      const videoOnBottom = bottom - viewportHeight > height / 2;

      if (videoFullInView && !play && !videoOnTop) {
        this.setState({
          play: true,
        });
      } else if ((videoOnTop || videoOnBottom) && play) {
        this.setState({
          play: false,
        });
      }
    }
  };

  onRef = ref => {
    if (ref) {
      this.container = ref;
    }
  };

  render() {
    const { play } = this.state;
    const { scrollTop, source, ...props } = this.props;

    return (
      <InViewContainer ref={this.onRef}>
        <Video play={play} video={source} {...props} />
      </InViewContainer>
    );
  }
}

export const InViewVideo = props => (
  <ScrollbarConsumer>
    {({ scrollTop }) => <InViewBase scrollTop={scrollTop} {...props} />}
  </ScrollbarConsumer>
);
