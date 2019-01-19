import React, { Component } from "react";
import PropTypes from "prop-types";

export class Video extends Component {
  static propTypes = {
    video: PropTypes.string,
  };

  static defaultProps = {
    video: "",
    play: true,
  };

  video = null;

  shouldComponentUpdate({ video: prevVideo, play: prevPlay }) {
    const { video, play } = this.props;
    return prevVideo !== video || prevPlay !== play;
  }

  componentDidUpdate({ video: prevVideo, play: prevPlay }) {
    const { play, video } = this.props;

    if (this.video) {
      if (prevVideo !== video) {
        this.video.load();
        this.video.play();
      }

      if (prevPlay !== play) {
        if (play) {
          this.video.play();
        } else {
          this.video.pause();
        }
      }
    }
  }

  onVideoRef = ref => {
    if (ref) {
      this.video = ref;
    }
  };

  render() {
    const { video, play, className, ...props } = this.props;

    return (
      <video autoPlay={play} muted loop ref={this.onVideoRef} className={className} {...props}>
        <source src={video} type="video/mp4" />
      </video>
    );
  }
}
