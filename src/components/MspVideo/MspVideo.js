import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { Video } from "../../components/Video/Video";

export class MspVideo extends PureComponent {
  static propTypes = {
    videos: PropTypes.arrayOf(PropTypes.object),
  };

  state = {
    selectedVideoIndex: 0,
  };
  render() {
    const { selectedVideoIndex } = this.state;
    const { videos } = this.props;
    const { source } = videos[selectedVideoIndex];

    console.info("--> MspVideo ggwp up", videos);
    return (
      <div>
        <Video video={source} />
      </div>
    );
  }
}
