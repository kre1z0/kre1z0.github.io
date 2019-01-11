import React, { Component } from "react";
import PropTypes from "prop-types";

export class Video extends Component {
  static propTypes = {
    video: PropTypes.string,
  };

  static defaultProps = {
    video: "",
  };

  video = null;

  shouldComponentUpdate(prevProps) {
    return prevProps.video !== this.props.video;
  }

  componentDidUpdate() {
    if (!!this.video) {
      this.video.load();
      this.video.play();
    }
  }

  onVideoRef = ref => {
    if (ref) {
      this.video = ref;
    }
  };

  render() {
    const { video, className, ...props } = this.props;
    return (
      <video autoPlay muted loop ref={this.onVideoRef} className={className} {...props}>
        <source src={video} type="video/mp4" />
      </video>
    );
  }
}
