import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { Video } from "../../components/Video/Video";
import { VideoContainer } from "./styles";

export class MspVideo extends PureComponent {
  static propTypes = {
    videos: PropTypes.arrayOf(PropTypes.object),
    selectedVideoIndex: PropTypes.number,
  };

  render() {
    const { videos, selectedVideoIndex } = this.props;
    const { source } = videos[selectedVideoIndex];

    return (
      <VideoContainer>
        <Video video={source} />
      </VideoContainer>
    );
  }
}
