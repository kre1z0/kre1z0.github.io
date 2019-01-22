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

  componentDidMount() {
    this.update();
  }

  shouldComponentUpdate({ video: prevVideo, play: prevPlay }) {
    const { video, play } = this.props;
    return prevVideo !== video || prevPlay !== play;
  }

  update() {
    if (this.video) {
      this.video.setAttribute("muted", "1");
      this.video.setAttribute("playsinline", "1");
      this.video.setAttribute("autoplay", "1");
    }
  }

  componentDidUpdate({ video: prevVideo, play: prevPlay }) {
    const { play, video } = this.props;
    this.update();

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
      <video
        volume={0}
        playsInline
        autoPlay={play}
        muted
        loop
        ref={this.onVideoRef}
        className={className}
        {...props}
      >
        <source src={video} type="video/webm" />
      </video>
    );
  }
}
